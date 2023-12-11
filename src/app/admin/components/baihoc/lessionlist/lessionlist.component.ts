import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LessionService } from 'src/app/services/admin/lession/lession.service';
import { VideoService } from 'src/app/services/admin/video/video.service';
import { LessionmodalComponent } from '../lessionmodal/lessionmodal.component';
import { VideoModalComponent } from '../../admin-video/video-modal/video-modal.component';
import { video } from 'src/app/Models/admin/video';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { lession } from 'src/app/Models/admin/lession';

@Component({
  selector: 'app-lessionlist',
  templateUrl: './lessionlist.component.html',
  styleUrls: [
    './lessionlist.component.css',
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
export class LessionlistComponent {
  constructor(
    private lessService: LessionService,
    private videoService: VideoService,
    public dialog: MatDialog
  ) {}

  lessions: any;

  videos: any;

  searchData: any;

  p: number = 1;

  @Input()
  id!: any;

  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faEye: any = faEye;
  faPlus: any = faPlus;

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(LessionmodalComponent, {
      data: {
        type: type,
        id: id,
        MaKhoaHoc:this.id
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getListLessions();
    });
  }

  openVideoModal(type: string, id: number, MaBaiHoc: number): void {
    const dialogRef = this.dialog.open(VideoModalComponent, {
      data: {
        type: type,
        id: id,
        MaBaiHoc: MaBaiHoc,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {
    this.getListLessions();
    this.getListVideos();
  }

  getListLessions() {
    this.lessService.list(this.id).subscribe((data) => {
      this.lessions = data.data;
      console.log(this.lessions);
    });
  }

  getListVideos() {
    this.videoService.list(this.id).subscribe((data) => {
      this.videos = data.data;
      console.log(this.videos);
    });
  }

  deleteLession(lession: lession) {
    this.lessService.delete(lession).subscribe((data) => {
      this.getListLessions();
      this.getListVideos();
    });
  }

  deleteVideo(video: video) {
    this.videoService.delete(video).subscribe((data) => {
      this.getListLessions();
      this.getListVideos();
    });
  }
}
