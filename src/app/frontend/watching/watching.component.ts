import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DetailService } from 'src/app/services/frontend/detail/detail.service';
import { WatchingService } from 'src/app/services/frontend/watching/watching.service';
import { CourseData } from 'src/app/Models/frontend/CourseData';
import { Video } from 'src/app/Models/frontend/Video';
import { Test } from 'src/app/Models/frontend/Test';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.css', '../css/style.css'],
})
export class WatchingComponent {
  constructor(
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private detailService: DetailService,
    private watchingService: WatchingService,
    private http: HttpClient
  ) {}
  makhoahoc: any;
  mavideo: any;

  detail: any;

  teacher: any ={
    avatar:'',
    profileName:'',
    description:''
  };

  lessions: any;
  videos: any;
  questions: any;
  tests: any;

  course: CourseData = {
    courses: {
      courseId: 0,
      courseName: '',
      courseThumbnail: '',
      shortDes: '',
      fullDes: '',
      timePublished: '',
      courseDuration: '',
      newPrice: 0,
      oldPrice: 0,
      percentSale: 0,
      status: 0,
      profileId: 0,
      idLevel: 0,
      idDetailCate: 0,
    },
    profile: {
      profileId: 0,
      profileName: '',
      email: '',
      phoneNumber: '',
      avatar: '',
      desciption: '',
      cateId: 0,
      isTeacher: 0,
    },
    levels: {
      idLevels: 0,
      nameLevel: '',
    },
    detailCate: {
      detailCateId: 0,
      detailCateName: '',
      cateId: 0,
    },
    lessionRes: [],
  };

  detailVideo: any={
    videoLink:''
  };

  videoId: any;

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.makhoahoc = Number(routeParams.get('id'));
  
    const mavideo = Number(routeParams.get('mavideo'));
  
    await this.getDetailCourse(); // Wait for getDetailCourse to finish before proceeding
  
    await this.getTeacher(); // Wait for getTeacher to finish before proceeding
  
    if (mavideo > 0) {
      await this.showVideo(mavideo);
      // this.getQuestionsOfVideo(mavideo);
    }
  }
  
  async showVideo(mavideo: number) {
    try {
      const data: any = await this.watchingService.getDetailVideo(mavideo).toPromise();
      this.detailVideo = data;
      if (this.detailVideo && this.detailVideo.videoLink) {
        // Now you can safely access this.detailVideo.videoLink
        console.log(this.detailVideo.videoLink);
      } else {
        console.error("Video details or videoLink property is undefined.");
      }
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  }

  getDetailCourse() {
    this.detailService.getDetail(this.makhoahoc).subscribe((data) => {
      this.course = data;
      this.lessions = data.lessionRes;

      console.table(this.course);
      console.table(this.lessions);

      this.getAllVideosOfCourse(data);
      this.getAllTestsOfCourse(data);

      this.getTeacher();
    });
  }

  getAllVideosOfCourse(courseData: CourseData) {
    const allVideos: Video[] = [];

    // Iterate through each lesson
    courseData.lessionRes.forEach((lesson) => {
      // Iterate through each video in the lesson
      lesson.videos.forEach((video) => {
        allVideos.push(video);
      });
    });

    this.videos = allVideos;
    console.log(this.videos);
  }

  getAllTestsOfCourse(courseData: CourseData) {
    const allTests: Test[] = [];

    // Iterate through each lesson
    courseData.lessionRes.forEach((lesson) => {
      // Iterate through each video in the lesson
      lesson.videos.forEach((video) => {
        // Concatenate the tests of the current video to allTests
        allTests.push(...video.tests);
      });
    });

    this.tests = allTests;
    console.log(this.tests);
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
    console.log('profileId: ', this.course.profile.profileId);
    this.detailService
      .getTeachersOfCour(this.course.profile.profileId)
      .subscribe((data) => {
        this.teacher = data;
        console.log(this.teacher);
      });
  }
}
