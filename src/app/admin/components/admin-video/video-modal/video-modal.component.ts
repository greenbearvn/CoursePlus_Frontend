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
  styleUrls: ['./video-modal.component.css'],
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
    videoName: '',
    videoLink: '',
    videoContent: '',
    videoDuration: '',
  };

  type: any;
  id: any;
  MaBaiHoc: any;

  listLession: any;

  Editor = ClassicEditor;
  ckeditorData: any;

  selectedFile: File | null = null;
  videoLink: string | null = null;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.MaBaiHoc = this.data.MaBaiHoc;

    console.log(this.id);
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
    if(this.videoLink){
      this.video.videoLink = this.videoLink;
    }
    this.videoService.create(this.video).subscribe((data) => {
      if (data) {
        this._toastService.info('Đã thêm video thành công');
      } else {
        this._toastService.warn('Đã thêm  thêm video không thành công');
      }
    });
  }

  update() {

    if(this.ckeditorData){
      this.video.videoContent = this.ckeditorData;
    }

    if(this.videoLink){
      this.video.videoLink = this.videoLink;
    }
    this.videoService.update(this.id, this.video).subscribe((data) => {
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

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('video', this.selectedFile);
      console.log(formData.get('video'));

      this.videoService.uploadVideo(formData).subscribe((data: any) => {
        if (data) {
          this.videoLink = data.data;

          console.log(this.videoLink);
          this._toastService.success('Đăng tải video thành công !!!');
        }
      });
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      // console.log(this.selectedFile);
    }
  }
}
