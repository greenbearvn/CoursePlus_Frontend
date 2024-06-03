import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { AdminLevelModalComponent } from '../admin-level-modal/admin-level-modal.component';
import { LevelService } from 'src/app/services/admin/level/level.service';
import { level } from 'src/app/Models/admin/level';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-level-list',
  templateUrl: './admin-level-list.component.html',
  styleUrls: [
    './admin-level-list.component.css'
  ],
})
export class AdminLevelListComponent {
  constructor(
    public dialog: MatDialog,
    private _toastService: ToastService,
    private levelService: LevelService
  ) {}

  /// BASE
  lists: any;
  p: number = 1;
  token: any;
  searchData: any = '';


  //Fontawesome
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faEye: any = faEye;
  faPlus: any = faPlus;

  ngOnInit() {
    this.getLists();
  }


  getLists() {
    this.levelService.list().subscribe((data) => {
      this.lists = data;
      console.log(this.lists);
    });
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminLevelModalComponent, {
      data: {
        type: type,
        id: id,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getLists();
    });
  }

  delete(id:any) {
    this.levelService.delete(id).subscribe((data) => {
      if (data == true) {
        this._toastService.info('Đã xóa thành công');
        this.getLists();
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

}
