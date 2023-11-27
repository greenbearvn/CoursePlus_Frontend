import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';
import { HomeService } from 'src/app/services/frontend/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './css/icon.css',
    './css/uikit.css',
    './css/tailwin.css',
  ],
})
export class HomeComponent {
  data: any;
  teachers: any;
  newCourses: any;
  blogs: any;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getListBestSellCourses();
  }

  getListBestSellCourses() {
    this.homeService.getBestSeller().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }

  getListKOLTeachers() {
    this.homeService.getTeachers().subscribe((data) => {
      this.teachers = data;
      console.log(data);
    });
  }

  getListNewCourse() {
    this.homeService.getNewCourses().subscribe((data) => {
      this.newCourses = data;
      console.log(data);
    });
  }

  getListBlogs() {
    this.homeService.getListBlog().subscribe((data) => {
      this.blogs = data;
      console.log(data);
    });
  }
}
