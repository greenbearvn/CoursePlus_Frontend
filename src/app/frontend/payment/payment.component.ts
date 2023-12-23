import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/frontend/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: [
    './payment.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class PaymentComponent {
  constructor(private paymentService: PaymentService) {}

  data: any;
  vnpayUrl: any;
  listBanks: any;
  bankCode: any;
  content: any = 'Thanh toán khóa học';

  ngOnInit() {
    this.getListBanks();
  }

  AddTransaction() {
    if (this.bankCode) {
      this.paymentService
        .transation(this.bankCode, this.content)
        .subscribe((data) => {
          this.vnpayUrl = data.data;
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
    this.bankCode = bank.code;
    console.log(this.bankCode);
  }
}
