import { Component, Output, EventEmitter, Input, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ModalnguoidungadminComponent } from '../modalnguoidungadmin/modalnguoidungadmin.component';
import { NguoidungService } from 'src/app/services/admin/nguoidung/nguoidung.service';
import { nguoidung } from 'src/app/Models/nguoidung';
import { ToastService } from 'angular-toastify';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nguoidung-admin-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css'
  ],
})
export class NguoiDungAdminListComponent {
  constructor(
    public dialog: MatDialog,
    private nguoidungService: NguoidungService,
    private toast: ToastService // @Inject(MAT_DIALOG_DATA) public data: any, // public dialogRef: MatDialogRef<NguoiDungAdminListComponent>
  ) {}

  list: any;
  p: number = 1;
  // user: any;
  type: any;
  status: any;
  // token: any;

  // nguoidung: nguoidung = {
  //   MaNguoiDung: 0,
  //   TenNguoiDung: '',
  //   Email: '',
  //   MatKhau: '',
  //   Quyen: '',
  // };


  user:any={
    userId:'',
    userName:'',
    email:'',
    password:'',
    role:''
  }

  searchData: any;

  ///
  faPenToSquare: any = faPenToSquare;
  faPlus: any = faPlus;
  faTrash:any = faTrash;

  ///add cart
  listItems: any = [];

  @Input()
  listDetails!: any;

  @Output() listItemEvent = new EventEmitter<{
    listItems: any;
  }>();

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(ModalnguoidungadminComponent, {
      data: {
        type: type,
        id: id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {
    this.getUserInSession();
    this.getLists();
    // this.type = this.data.type;
  }

  getUserInSession() {
    // this.khoahocService.getUser().subscribe((data) => {
    //   this.token = data.data.Token;
    //   this.getLists();
    // });
  }

  getLists() {
    this.nguoidungService.list().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }

  changeRole(id:any,user: any) {
    this.nguoidungService.update(id,user).subscribe((data) => {
      
      if (data == true) {
        this.toast.success('Cập nhật quyền thành công');
      }
      else{
        this.toast.warn('Cập nhật quyền thất bại thành công');
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
        this.delete(id);
      }
    });
  }

  delete(id:any) {
    this.nguoidungService.delete(id).subscribe((data) => {
  
      if (data == true) {
        this.toast.success('Xóa người dùng thành công !!!');
        this.getLists();
      }
      else{
        this.toast.warn('Xóa người dùng không thành công !!!');
      }
    });
  }

  addUserConven(nguoidung: any) {
    const cartItem = {
      MaNguoiDung: nguoidung.MaNguoiDung,
      TenNguoiDung: nguoidung.TenNguoiDung,
      Email: nguoidung.Email,
      MatKhau: nguoidung.MatKhau,
      Quyen: nguoidung.Quyen,
    };
    if (!this.listItems) {
      this.listItems = [];
    }

    const result = this.listItems.filter(
      (item: any) => item.MaNguoiDung === nguoidung.MaNguoiDung
    );

    if (this.listDetails.length !== 0) {
      const existLDT = this.listDetails.filter(
        (item: any) => item.MaNguoiDung === nguoidung.MaNguoiDung
      );
      if (existLDT.length !== 0) {
        console.log('da ton tai');
      } else {
        this.listItems.push(cartItem);
      }
    } else {
      if (result.length !== 0) {
        console.log('da ton tai');
      } else {
        this.listItems.push(cartItem);
      }
    }

    this.listItemEvent.emit({
      listItems: this.listItems,
    });
  }
}
