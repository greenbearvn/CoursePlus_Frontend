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

  detail: any;
  lessions: any;
  videos: any;

  detailVideo: any;

  questions: any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    const mavideo = Number(routeParams.get('mavideo'));

    if (mavideo) {
      console.log(mavideo);
      this.showVideo(mavideo);
      this.getQuestionsOfVideo(mavideo);
    }

    this.detailService.getDetail(id).subscribe((data) => {
      this.detail = data.data;
    });

    this.detailService.getLessions(id).subscribe((data) => {
      this.lessions = data.data;
    });

    this.detailService.getVideos(id).subscribe((data) => {
      this.videos = data.data;
    });
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
}
