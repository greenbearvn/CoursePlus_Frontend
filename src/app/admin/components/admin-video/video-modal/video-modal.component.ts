import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { video } from 'src/app/Models/admin/video';
import { VideoService } from 'src/app/services/admin/video/video.service';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: [
    './video-modal.component.css',
    '../../../assets/polygon/concept/assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/circular-std/style.css',
    '../../../assets/polygon/concept/assets/libs/css/style.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/fontawesome/css/fontawesome-all.css',
    '../../../assets/polygon/concept/assets/vendor/charts/chartist-bundle/chartist.css',
    '../../../assets/polygon/concept/assets/vendor/charts/morris-bundle/morris.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/material-design-iconic-font/css/materialdesignicons.min.css',
    '../../../assets/polygon/concept/assets/vendor/charts/c3charts/c3.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/flag-icon-css/flag-icon.min.css',
  ],
})
export class VideoModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<VideoModalComponent>,
    private videoService: VideoService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  video: video = {
    MaVideo: 0,
    MaBaiHoc: 0,
    TenVideo: '',
    LinkVideo: '',
    ThoiLuongVideo: '',
    NoiDungVideo: '',
  };

  type: any;
  id: any;
  MaBaiHoc: any;

  listLession: any;

  Editor = ClassicEditor;
  ckeditorData: any;

  ///status
  statusCreate: any;
  statusEdit: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.MaBaiHoc = this.data.MaBaiHoc;


    console.log(this.id)
    // this.token = this.data.token;
    this.getDataForm();

    this.video.MaBaiHoc = this.MaBaiHoc;
  }

  getDataForm() {
    if (this.type === 'edit' && this.id !== 0) {
      this.getDetailVideo();
    }
  }

  getListLession() {
    this.videoService.listLessions().subscribe((data) => {
      this.listLession = data.data;
      console.log(this.listLession);
    });
  }

  getDetailVideo() {
    this.videoService.detail(this.id).subscribe((data) => {
      this.video = data.data;
      console.log(this.video);
    });
  }

  create() {
    this.video.NoiDungVideo = this.ckeditorData;

    this.videoService.create(this.video).subscribe((data) => {
      this.statusCreate = data.data;
      if (this.statusCreate == true) {
        this._toastService.info('Đã thêm người dùng thành công');
      } else {
        this._toastService.warn('Đã thêm người dùng không thành công');
      }
    });
  }

  update() {
    this.videoService.update(this.video).subscribe((data) => {
      this.statusCreate = data.data;
      if (this.statusEdit == true) {
        this._toastService.info('Đã cập nhật người dùng thành công');
      } else {
        this._toastService.warn('Đã cập nhật người dùng không thành công');
      }
    });
  }

  submit(type: string) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  public onChange({ editor }: ChangeEvent) {
    this.ckeditorData = editor.data.get();
    console.log(this.ckeditorData);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
