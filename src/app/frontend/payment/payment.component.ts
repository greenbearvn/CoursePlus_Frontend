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
  vnpayUrl:any;

  SaveData() {
    this.paymentService.saveToDB().subscribe((data) => {
      this.data = data.data;
      console.log(this.data);
    });
  }

  AddTransaction() {
    this.paymentService.transation().subscribe((data) => {
      this.vnpayUrl = data.data;
      console.log(this.vnpayUrl)
      window.location.href = this.vnpayUrl;
    });
  }

  AddCollection(){
    this.paymentService.addCollection().subscribe((data) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
}
