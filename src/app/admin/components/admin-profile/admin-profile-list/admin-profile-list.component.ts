import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { AdminProfileModalComponent } from '../admin-profile-modal/admin-profile-modal.component';
import { ProfileService } from 'src/app/services/admin/profile/profile.service';
import { profile } from 'src/app/Models/admin/profile';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-profile-list',
  templateUrl: './admin-profile-list.component.html',
  styleUrls: [
    './admin-profile-list.component.css',
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
export class AdminProfileListComponent {
  constructor(
    public dialog: MatDialog,
    private _toastService: ToastService,
    private profileService: ProfileService
  ) {}

  /// BASE
  lists: any;
  p: number = 1;
  token: any;
  searchData: any = '';

  /// STATUS
  deleteStatus: any;

  //Fontawesome
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faEye: any = faEye;
  faPlus: any = faPlus;

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
    this.profileService.list().subscribe((data) => {
      this.lists = data.data;
      console.log(this.lists);
    });
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminProfileModalComponent, {
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

  deleteProfile(profile: profile) {
    this.profileService.delete(profile).subscribe((data) => {
      this.deleteStatus = data.status;
      if (this.deleteStatus == true) {
        this._toastService.info('Đã xóa thành công');
        this.getLists();
      }
    });
  }
}
