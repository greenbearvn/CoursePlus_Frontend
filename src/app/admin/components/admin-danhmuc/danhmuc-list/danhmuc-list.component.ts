import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/admin/category/category.service';
import { DanhmucModalComponent } from '../danhmuc-modal/danhmuc-modal.component';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-danhmuc-list',
  templateUrl: './danhmuc-list.component.html',
  styleUrls: [
    './danhmuc-list.component.css',
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
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {
    this.getUserInSession();
    this.getLists();
  }

  getUserInSession() {
    // this.khoahocService.getUser().subscribe((data) => {
    //   this.token = data.data.Token;
    //   this.getLists();
    // });
  }

  getLists() {
    this.catSer.list().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

  deleteItem(item: any) {
    this.catSer.delete(item).subscribe((data) => {
      this.getLists();
    });
  }
}
