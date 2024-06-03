import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create/create.component';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { Course } from 'src/app/Models/Course';
import { ActivatedRoute } from '@angular/router';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-table',
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.css'
  ],
})
export class TableCourseComponent {
  constructor(
    public dialog: MatDialog,
    private _toastService: ToastService,
    private khoahocService: KhoahocService,
    private currencyPipe: CurrencyPipe,
    private route: ActivatedRoute
  ) {}

  lists: any;
  p: number = 1;

  status: any;
  token: any;

  searchData: any = '';
  MaNguoiDung: any;

  khoahoc: Course = {
    courseId: 0,
    courseName: '',
    courseThumbnail: '',
    shortDes: '',
    fullDes: '',
    timePublished: new Date(),
    courseDuration: '',
    oldPrice: 0,
    percentSale: 0,
    idLevel: 0,
    idDetailCate: 0,
    profileId:0,
    status:0
  };
  ///add cart
  listItems: any = [];

  // Tongtien: any = 0;

  cartItem: any = {
    id: 0,
    TenKhoaHoc: '',
    AnhKhoaHoc: '',
    MaGiangVien: 0,
    MaCapDo: 0,
    GiaCu: 0,
    GiamGia: 0,
    GiaMoi: 0,
  };

  @Output() listItemEvent = new EventEmitter<{
    listItems: any;
    Tongtien: any;
  }>();

  @Input()
  listDetails!: any;

  @Input()
  Tongtien!: any;

  //font awesome

  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faEye: any = faEye;
  faPlus: any = faPlus;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.MaNguoiDung = Number(routeParams.get('id'));
    
    this.getLists();
  }

  getLists() {
    this.khoahocService.getProducts().subscribe((data) => {
      this.lists = data;
      console.log(this.lists);
    });
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(CreateCourseComponent, {
      data: {
        type: type,
        id: id
      },
      maxHeight: '90vh',
      panelClass: 'my-outlined-dialog',
    });
    dialogRef.afterClosed().subscribe((result) => {
     this.getLists();
    });
  }

  deleteItem(id: number) {
    this.khoahocService.delete(id ).subscribe((data) => {
      this.lists = data.data;
      this.status = data.status;
      if (this.status == true) {
        this._toastService.info('Đã xóa khóa học thành công !!!');
      }
    });
    
  }

  deleteButton(id:any){

    Swal.fire({
      title: 'Bạn có chắc không?',
      text: 'Một khi bạn xóa, bạn sẽ không thể khôi phục lại thông tin này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, xóa đi!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem(id);
      }
    });
  }

  addCartItem(khoahoc: any) {
    const cartItem = {
      id: khoahoc.id,
      TenKhoaHoc: khoahoc.TenKhoaHoc,
      AnhKhoaHoc: khoahoc.AnhKhoaHoc,
      MaGiangVien: khoahoc.MaGiangVien,
      MaDanhMuc: khoahoc.MaDanhMuc,
      GiaCu: khoahoc.GiaCu,
      GiamGia: khoahoc.GiamGia,
      GiaMoi: khoahoc.GiaMoi,
      MaCapDo: khoahoc.MaCapDo,
    };
    if (!this.listItems) {
      this.listItems = [];
    }

    const result = this.listItems.filter((item: any) => item.id === khoahoc.id);

    if (this.listDetails !== undefined) {
      const existLDT = this.listDetails.filter(
        (item: any) => item.id === khoahoc.id
      );
      if (existLDT.length !== 0) {
        this._toastService.warn('Khóa học đã tổn tại !!!');
      } else {
        this.Tongtien = Number(this.Tongtien) + Number(cartItem.GiaMoi);
        this.listItems.push(cartItem);
      }
    } else {
      if (result.length !== 0) {
        this._toastService.warn('Khóa học đã tổn tại !!!');
      } else {
        this.Tongtien = Number(this.Tongtien) + Number(cartItem.GiaMoi);
        this.listItems.push(cartItem);
      }
    }

    this.listItemEvent.emit({
      listItems: this.listItems,
      Tongtien: this.Tongtien,
    });
  }

  
}
