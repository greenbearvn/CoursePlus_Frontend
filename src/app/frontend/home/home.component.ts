import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';
import { HomeService } from 'src/app/services/frontend/home/home.service';
import { LoadingOverLayService } from 'src/app/services/loading-over-lay.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css','../css/style.css'
   
  ],
})
export class HomeComponent {
  teachers: any;

  blogs: any;
  newCourses:any;


  constructor(private homeService: HomeService,private loadingOverLayService: LoadingOverLayService) {}

  ngOnInit() {
    this.getListNewCourses();
    this.getListKOLTeachers();
    this.getListBlogs();
  }

  getListNewCourses() {
    // this.loadingOverLayService.show();

    this.homeService.getListNew().subscribe((data) => {
      this.newCourses = data;
        console.log(this.newCourses)
        // this.loadingOverLayService.hide();

    });
  }

  getListKOLTeachers() {
    this.homeService.getTeachers().subscribe((data) => {
      this.teachers = data;
      console.log(this.teachers);
    });
  }

  getListBlogs() {
    this.homeService.getListBlog().subscribe((data) => {
      this.blogs = data;
      console.log(this.blogs);
    });
  }
}
