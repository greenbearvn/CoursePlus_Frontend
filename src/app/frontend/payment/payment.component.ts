import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/frontend/payment/payment.service';
import { ToastService } from 'angular-toastify';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { DetailOrder } from 'src/app/Models/frontend/DetailOrder';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: [
    './payment.component.css','../css/style.css'
  ],
})
export class PaymentComponent {
  constructor(
    private paymentService: PaymentService,
    private cartService: CartService,
    private toast: ToastService,
    private accountService: AccountService
  ) {}

  data: any;
  vnpayUrl: any;
  listBanks: any;
  bankCode: any;
  content: any = 'Thanh toán khóa học';

  amount:any;

  convertedCourses: Record<string, DetailOrder> = {};


  order:any ={
    userId:0,
    createAt:new Date(),
    moneyTotal:0,
    status:0,
    detailOrder:null
  }

  user: any = {
    userId : 0,
    userName:"",
    email:"",
    role:''
  };

  ngOnInit() {
    this.getListBanks();
    this.getTotalMoney();
    this.getCartItems();
    this.getUser();
  }

  AddTransaction() {
    if (this.bankCode) {
      this.paymentService
        .transation(this.amount, this.bankCode)
        .subscribe((data) => {
          this.vnpayUrl = data.data.paymentUrl;
          console.log(this.vnpayUrl);
          window.location.href = this.vnpayUrl;
        });
    }
  }

  getListBanks() {
    this.paymentService.listBanks().subscribe((data) => {
      this.listBanks = data.data;
      console.log(this.listBanks);
    });
  }

  getBankId(bank: any) {
    this.toast.info('Đã chọn ngân hàng ' + bank.code);
    this.bankCode = bank.code;
    
  }

  getCartItems() {
    this.cartService.getlistCart().subscribe((data) => {
      this.order.detailOrder = data;
      console.log(this.order.detailOrder);

      let index = 1;
      for (const courseId in data) {
        if (data.hasOwnProperty(courseId)) {
          const course = data[courseId];
          const newItemKey = `item${index++}`;
          this.convertedCourses[newItemKey] = this.convertToConvertedCourse(course);
        }
      }
      this.order.detailOrder = this.convertedCourses;

      console.log(this.convertedCourses);
    });
  }



  getUser() {
    this.accountService.getUser().subscribe((data) => {
      this.user = data.user_current;
      this.order.userId = data.user_current.userId;
    });
  }

  getTotalMoney(){
    this.cartService.totalMoney().subscribe((data) => {
      this.order.moneyTotal = data;
      this.amount = data;
      console.log(this.order.moneyTotal);
    });
  }


  saveToDB(){
    this.paymentService.savetoDb(this.order).subscribe((data) => {
        this.toast.success("Đơn hàng đã được lưu lại")
        this.clear();
    });

  }

  convertToConvertedCourse(course: any): DetailOrder {
    return {
      courseId: course.courseId,
      teacherId: course.teacherId,
      levelId: course.levelId,
      price: course.price
    };
  }

  clear(){
    this.cartService.deleteAll().subscribe((data) => {
      this.toast.success("Đơn hàng đã được lưu lại")
  });
  }

}
