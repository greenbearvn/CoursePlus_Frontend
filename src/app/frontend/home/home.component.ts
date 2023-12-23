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
  teachers: any;
  newCourses: any;
  blogs: any;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getListNewCourses();
    this.getListKOLTeachers();
    this.getListBlogs();
  }

  getListNewCourses() {
    this.homeService.getListNew().subscribe((data) => {
      this.newCourses = data.data;
      console.log(this.newCourses);
    });
  }

  getListKOLTeachers() {
    this.homeService.getTeachers().subscribe((data) => {
      this.teachers = data.data;
      console.log(this.teachers);
    });
  }

  getListBlogs() {
    this.homeService.getListBlog().subscribe((data) => {
      this.blogs = data.data;
      console.log(this.blogs);
    });
  }
}
