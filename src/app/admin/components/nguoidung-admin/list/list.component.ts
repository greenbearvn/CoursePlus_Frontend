import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalnguoidungadminComponent } from '../modalnguoidungadmin/modalnguoidungadmin.component';
import { NguoidungService } from 'src/app/services/admin/nguoidung/nguoidung.service';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app- nguoidung-admin-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css',
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
export class NguoiDungAdminListComponent {
  constructor(
    public dialog: MatDialog,
    private nguoidungService: NguoidungService
  ) {}

  list: any;
  p: number = 1;
  // token: any;

  searchData: any;

  ///
  faPenToSquare: any = faPenToSquare;

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(ModalnguoidungadminComponent, {
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
    this.nguoidungService.list().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }
}
