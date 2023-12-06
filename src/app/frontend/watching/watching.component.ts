import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DetailService } from 'src/app/services/frontend/detail/detail.service';
import { WatchingService } from 'src/app/services/frontend/watching/watching.service';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: [
    './watching.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class WatchingComponent {
  constructor(
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private detailService: DetailService,
    private watchingService: WatchingService
  ) {}
  makhoahoc:any;

  detail: any;
  lessions: any;
  videos: any;
  teacher:any;

  detailVideo: any;

  questions: any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.makhoahoc = Number(routeParams.get('id'));

    const mavideo = Number(routeParams.get('mavideo'));

    if (mavideo) {
      console.log(mavideo);
      this.showVideo(mavideo);
      this.getQuestionsOfVideo(mavideo);
    }

    this.detailService.getDetail(this.makhoahoc).subscribe((data) => {
      this.detail = data.data;
    });

    this.detailService.getLessions(this.makhoahoc).subscribe((data) => {
      this.lessions = data.data;
    });

    this.detailService.getVideos(this.makhoahoc).subscribe((data) => {
      this.videos = data.data;
    });

    this.getTeacher()
  }

  showVideo(mavideo: number) {
    this.watchingService.getDetailVideo(mavideo).subscribe((data) => {
      this.detailVideo = data.data;
      console.log(this.detailVideo);
    });
  }

  getQuestionsOfVideo(mavideo: number) {
    this.watchingService.getQuestionOfVideo(mavideo).subscribe((data) => {
      this.questions = data.data;
      console.log(this.questions);
    });
  }

  changeVideo(makhoahoc: any, mavideo: any) {
    window.location.href =
      '/course/watching/detail/' + makhoahoc + '/' + mavideo;
  }

  getTeacher() {
    this.detailService.getTeachersOfCour(this.makhoahoc).subscribe((data) => {
      this.teacher = data.data;
      console.log(this.teacher);
    });
  }
}
