import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { HoadonService } from 'src/app/services/admin/hoadon/hoadon.service';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-billtable',
  templateUrl: './billtable.component.html',
  styleUrls: [
    './billtable.component.css'
 
  ],
})
export class BilltableComponent {
  constructor(
    private hdService: HoadonService,
    private currencyPipe: CurrencyPipe,
    private datePipe: DatePipe,
    private _toastService: ToastService
  ) {}

  faPenToSquare:any =  faPenToSquare;
  faTrash:any = faTrash;
  faEye:any = faEye;


  list: any;
  p: any;
  searchData:any;

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    this.hdService.getLists().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }

  deleteBill(donhang:any){
    this.hdService.deleteBill(donhang).subscribe((data) => {
      this.list = data.data;
     
    });
  }


  deleteItem(id:number){
    console.log("acsacn")
  }

  formatDate(date: any): string {
    if (date) {
      return this.datePipe.transform(date, 'dd-MM-yyyy HH:mm:ss') || '';
    } else {
      return date;
    }
  }

  changeStatus(id:any,order:any){
    this.hdService.update(id,order).subscribe((data) => {
      if(data){
        this._toastService.success("Đã thay đổi trạng thái đơn hàng thành công!!")
      }
     
    });
  }
}
