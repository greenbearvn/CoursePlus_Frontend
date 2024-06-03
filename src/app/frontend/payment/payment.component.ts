import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/frontend/payment/payment.service';
import { ToastService } from 'angular-toastify';

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
    private toast: ToastService
  ) {}

  data: any;
  vnpayUrl: any;
  listBanks: any;
  bankCode: any;
  content: any = 'Thanh toán khóa học';

  amount:any;

  ngOnInit() {
    this.getListBanks();
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
    this.toast.info('Đã chọn ngân hàng');
    this.bankCode = bank.code;
    
  }


}
