import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/admin/category/category.service';
import { DanhmucModalComponent } from '../danhmuc-modal/danhmuc-modal.component';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-danhmuc-list',
  templateUrl: './danhmuc-list.component.html',
  styleUrls: [
    './danhmuc-list.component.css'
  ],
})
export class DanhmucListComponent {
  constructor(public dialog: MatDialog, private catSer: CategoryService) {}

  searchData: any;

  list: any;
  p: number = 1;

  faPenToSquare: any = faPenToSquare;
  faEye: any = faEye;
  faTrash: any = faTrash;

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(DanhmucModalComponent, {
      data: {
        type: type,
        id: id,
        // token: token,
      },
      maxHeight: '90vh',
      panelClass: 'my-outlined-dialog',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getLists();
    });
  }

  ngOnInit() {
  
    this.getLists();
  }


  getLists() {
    this.catSer.getAll().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
  }

  deleteItem(id: any) {
    this.catSer.delete(id).subscribe((data) => {
      this.getLists();
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
}
