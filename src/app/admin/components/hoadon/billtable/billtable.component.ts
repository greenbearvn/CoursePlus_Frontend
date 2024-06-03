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
    './billtable.component.css'
 
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
