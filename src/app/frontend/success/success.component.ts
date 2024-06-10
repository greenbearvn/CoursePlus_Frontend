import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/frontend/payment/payment.service';
import { ToastService } from 'angular-toastify';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { DetailOrder } from 'src/app/Models/frontend/DetailOrder';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  constructor(
    private paymentService: PaymentService,
    private cartService: CartService,
    private toast: ToastService,
    public sanitizer: DomSanitizer,
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {}

  status: any;

  // data save to db
  convertedCourses: Record<string, DetailOrder> = {};
  order: any = {};

  user: any = {
    userId: 0,
    userName: '',
    email: '',
    role: '',
  };

  paymentStatus: any;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.paymentStatus = params['vnp_ResponseCode'];
      console.log(this.paymentStatus);

      // Fetch all necessary data before checking payment status
      this.loadData();
    });
  }

  loadData() {
    forkJoin({
      totalMoney: this.cartService.totalMoney(),
      cartItems: this.cartService.getlistCart(),
      user: this.accountService.getUser(),
    }).subscribe(({ totalMoney, cartItems, user }) => {
      this.order.moneyTotal = totalMoney;
      console.log(this.order.moneyTotal);

      this.order.detailOrder = cartItems;
      this.convertedCourses = {};
      let index = 1;
      for (const courseId in cartItems) {
        if (cartItems.hasOwnProperty(courseId)) {
          const course = cartItems[courseId];
          const newItemKey = `item${index++}`;
          this.convertedCourses[newItemKey] =
            this.convertToConvertedCourse(course);
        }
      }
      this.order.detailOrder = this.convertedCourses;

      this.user = user.user_current;
      this.order.userId = user.user_current.userId;

      // Only after all data is loaded, check the payment status and save to DB if needed
      if (this.paymentStatus === '00') {
        this.saveToDB();

        this.sendMail(this.user.email, Object.values(cartItems));
      } else {
        this.toast.error('Thanh toán không thành công');
      }
    });
  }

  sendMail(email: any, cartItems: any) {
    this.paymentService.sendMail(email, cartItems).subscribe(() => {
      
    });

    this.toast.success('Thông tin đơn hàng đã được gửi vào mail của bạn');
  }

  saveToDB() {
    this.order.status = 1;
    this.order.create_at = new Date();
    console.log('order info:', this.order);
    this.paymentService.savetoDb(this.order).subscribe(() => {
      this.toast.success('Đơn hàng đã được lưu lại');


      this.cartService.deleteAll().subscribe();
    });
  }

  convertToConvertedCourse(course: any): DetailOrder {
    return {
      courseId: course.courseId,
      teacherId: course.profileId,
      levelId: course.levelId,
      price: course.newPrice,
    };
  }
}
