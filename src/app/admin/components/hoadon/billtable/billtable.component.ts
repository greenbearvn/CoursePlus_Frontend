import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { HoadonService } from 'src/app/services/admin/hoadon/hoadon.service';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-billtable',
  templateUrl: './billtable.component.html',
  styleUrls: [
    './billtable.component.css',
    '../../../assets/polygon/concept/assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/circular-std/style.css',
    '../../../assets/polygon/concept/assets/libs/css/style.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/fontawesome/css/fontawesome-all.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/dataTables.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/buttons.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/select.bootstrap4.css',
    '../../../assets/polygon/concept/assets/vendor/datatables/css/fixedHeader.bootstrap4.css',
  ],
})
export class BilltableComponent {
  constructor(
    private hdService: HoadonService,
    private currencyPipe: CurrencyPipe
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
      this.list = data.data;
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
}
