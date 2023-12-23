import { Component, Inject } from '@angular/core';
import { ToastService } from 'angular-toastify';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { video } from 'src/app/Models/admin/video';

import { TestService } from 'src/app/services/admin/test/test.service';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-test-video-list',
  templateUrl: './admin-test-video-list.component.html',
  styleUrls: [
    './admin-test-video-list.component.css',
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
export class AdminTestVideoListComponent {
  constructor(
    public dialog: MatDialog,
    private testService: TestService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminTestVideoListComponent>,
    private _toastService: ToastService
  ) {}

  list: any;
  p: number = 1;
  video: video = {
    MaVideo: 0,
    MaBaiHoc: 0,
    TenVideo: '',
    LinkVideo: '',
    ThoiLuongVideo: '',
    NoiDungVideo: '',
  };
  type: any;
  MaGiangVien: any;

  searchData: any;

  ///
  faPenToSquare: any = faPenToSquare;
  faPlus: any = faPlus;

  ngOnInit() {
    this.MaGiangVien = this.data.MaGiangVien;
    this.getUserInSession();
    this.getLists();
    this.type = this.data.type;
  }

  getUserInSession() {
    // this.khoahocService.getUser().subscribe((data) => {
    //   this.token = data.data.Token;
    //   this.getLists();
    // });
  }

  getLists() {
    this.testService.listVideoPage(this.MaGiangVien).subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

  Add(object: any) {
    this.video = {
      MaVideo: object.MaVideo,
      MaBaiHoc: object.MaBaiHoc,
      TenVideo: object.TenVideo,
      LinkVideo: object.LinkVideo,
      ThoiLuongVideo: object.ThoiLuongVideo,
      NoiDungVideo: object.NoiDungVideo,
    };
    if (this.video) {
      this._toastService.info('Chọn video thành công!!!');
    }
    console.log(this.video);
  }
  closeModal(): void {
    this.dialogRef.close(this.video);
  }
}
