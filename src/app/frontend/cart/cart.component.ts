import { Component } from '@angular/core';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { PaymentService } from 'src/app/services/frontend/payment/payment.service';
import { ToastService } from 'angular-toastify';
import { LoadingOverLayService } from 'src/app/services/loading-over-lay.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [
    './cart.component.css','../css/style.css'
  ],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private paymentService: PaymentService,
    private toast: ToastService,
    private loadingOverLayService: LoadingOverLayService
  ) {}

  cartList: any;

  totalMoney: any = 0;
  countItem: any = 0;
  status: any;

  ngOnInit() {
    
    this.getListCart();
    this.getTotalMoney();

  }

  getListCart() {
    this.cartService.getlistCart().subscribe((data) => {
      this.cartList = Object.values(data);
      console.log(this.cartList);
    });
  }

  Submit() {
   
    this.AddCollection();
    this.getListCart();
  }

  checkCourseBought() {
    this.cartService.checkBought().subscribe((data) => {
      this.status = data.data;
      console.log(this.status);
      if (this.status == true) {
        alert('Có khóa học đã mua trước đó trong bộ sưu tập !!!');
      } else {
        window.location.href = '/payment';
      }
    });
  }

  // SaveData() {
  //   this.paymentService.saveToDB().subscribe((data) => {
  //     this.status = data.data;
  //     if (this.status == true) {
  //       this.toast.info('Đơn hàng đã được lưu trữ thành công !!!');
  //     }
  //   });
  // }

  AddCollection() {
    this.paymentService.addCollection().subscribe((data) => {
      this.status = data.data;
      if (this.status == true) {
        this.toast.info(
          'Các khóa học đã được lưu trữ thành công vào bộ sưu tập !!!'
        );
      }
    });
  }

  deleteItem(id: any) {
    this.cartService.deleteItem(id).subscribe((data) => {
      this.status = data;
      if (this.status == 1) {
        this.getListCart();
        this.getTotalMoney();
      }
    });
  }

  getTotalMoney() {
    this.cartService.totalMoney().subscribe((data) => {
      this.totalMoney = data;
      this.countItem = data.count;
    });
  }

  clear() {
    this.cartService.deleteAll().subscribe((data) => {
      
    });
  }
}
