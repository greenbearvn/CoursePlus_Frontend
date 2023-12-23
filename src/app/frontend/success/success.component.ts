import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/frontend/payment/payment.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  constructor(private paymentService: PaymentService) {}

  status: any;

  ngOnInit() {
    this.DataReturn();
  }

  DataReturn() {
    this.paymentService.returndata().subscribe((data) => {
      this.status = data.data;
      if (this.status !=='97') {
        this.SaveData();
        this.AddCollection();
      }
    });
  }

  SaveData() {
    this.paymentService.saveToDB().subscribe((data) => {
      this.status = data.data;
    });
  }

  AddCollection() {
    this.paymentService.addCollection().subscribe((data) => {
      this.status = data.data;
    });
  }
}
