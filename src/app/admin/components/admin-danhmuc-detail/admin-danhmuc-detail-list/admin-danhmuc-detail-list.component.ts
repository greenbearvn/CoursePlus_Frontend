import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { detailcategory } from 'src/app/Models/admin/detailcategory';
import { DetailCategoryService } from 'src/app/services/admin/detail-category/detail-category.service';
import { AdminDanhmucDetailModalComponent } from '../admin-danhmuc-detail-modal/admin-danhmuc-detail-modal.component';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-admin-danhmuc-detail-list',
  templateUrl: './admin-danhmuc-detail-list.component.html',
  styleUrls: [
    './admin-danhmuc-detail-list.component.css'
  ],
})
export class AdminDanhmucDetailListComponent {
  constructor(
    private detailCateService: DetailCategoryService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  @Input()
  id!: any;

  detailCates: any;

  list: any;

  p: number = 1;

  searchData: any;


  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminDanhmucDetailModalComponent, {
      data: {
        type: type,
        id: id,
        madm: this.id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListDetailCate();
    });
  }

  ngOnInit() {
    this.getListDetailCate();
  }

  getListDetailCate() {
    this.detailCateService.list(this.id).subscribe((data) => {
      this.list = data;
      console.log(this.detailCates);
    });
  }

  deleteDetailCate(id:any) {
    this.detailCateService.delete(id).subscribe((data) => {
      if(data == true){
        this._toastService.success("Xóa chi tiết thể loại thành công")
        this.getListDetailCate();
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
        this.deleteDetailCate(id);
      }
    });
  }
}
