import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/frontend/payment/payment.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  constructor(
    private paymentService: PaymentService,
    private toast:ToastService
    ) {}

  status: any;

  ngOnInit() {
    this.DataReturn();
  }

  DataReturn() {
    this.paymentService.returndata().subscribe((data) => {
      this.status = data.data;
      if (this.status ==='97') {
        this.SaveData();
        this.AddCollection();
      }
    });
  }

  SaveData() {
    this.paymentService.saveToDB().subscribe((data) => {
      this.status = data.data;
      if(this.status == true){
        this.toast.info("Đơn hàng đã được lưu trữ thành công !!!")
      }
    });
  }

  AddCollection() {
    this.paymentService.addCollection().subscribe((data) => {
      this.status = data.data;
      if(this.status == true){
        this.toast.info("Các khóa học đã được lưu trữ thành công vào bộ sưu tập !!!")
      }
    });
  }
}
