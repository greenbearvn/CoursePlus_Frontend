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
    './video-modal.component.css'
    
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
    videoId: 0,
    lessionId: 0,
    videoName: "",
    videoLink: "",
    videoContent: "",
    videoDuration: ""
};
  

  type: any;
  id: any;
  MaBaiHoc: any;

  listLession: any;

  Editor = ClassicEditor;
  ckeditorData: any;


  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.MaBaiHoc = this.data.MaBaiHoc;


    console.log(this.id)
    // this.token = this.data.token;
    this.getDataForm();
    this.video.lessionId = this.MaBaiHoc;
  }

  getDataForm() {
    if (this.type === 'edit' && this.id !== 0) {
      this.getDetailVideo();
    }
  }


  getDetailVideo() {
    this.videoService.detail(this.id).subscribe((data) => {
      this.video = data;
      console.log(this.video);
    });
  }

  create() {
    this.video.videoContent = this.ckeditorData;
    this.videoService.create(this.video).subscribe((data) => {
      if (data) {
        this._toastService.info('Đã thêm video thành công');
      } else {
        this._toastService.warn('Đã thêm  thêm video không thành công');
      }
    });
  }

  update() {
    this.videoService.update(this.id,this.video).subscribe((data) => {
     
      if (data) {
        this._toastService.info('Đã thêm video thành công');
      } else {
        this._toastService.warn('Đã thêm  thêm video không thành công');
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
