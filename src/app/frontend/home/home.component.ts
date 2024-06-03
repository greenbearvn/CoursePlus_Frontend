import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizService } from 'src/app/services/frontend/quiz/quiz.service';
import { HomeService } from 'src/app/services/frontend/home/home.service';

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

//   newCourses: any = [
//     {
//         "courseId": 1,
//         "courseName": "course1",
//         "courseThumbnail": "abc",
//         "shortDes": "abc",
//         "fullDes": "abc",
//         "timePublished": "2023-12-31T17:00:00.000+00:00",
//         "courseDuration": "01/01/2024",
//         "oldPrice": 10.0,
//         "percentSale": 10.0,
//         "newPrice": 10.0,
//         "status": 0,
//         "profile": {
//             "profileId": 1,
//             "profileName": "vu thanh hung",
//             "email": "0323213",
//             "phoneNumber": "0323213",
//             "avatar": "0323213",
//             "desciption": "abc",
//             "cateId": 1,
//             "isTeacher": 1
//         },
//         "levels": {
//             "idLevels": 1,
//             "nameLevel": "level 1"
//         },
//         "detailCate": {
//             "detailCateId": 1,
//             "detailCateName": "detail1",
//             "cateId": 1
//         },
//         "lessionRes": [
//             {
//                 "videos": [
//                     {
//                         "videoId": 1,
//                         "videoName": "video1",
//                         "videoContent": "abc",
//                         "videoLink": "abc",
//                         "videoDuration": "abc",
//                         "lessionId": 1
//                     },
//                     {
//                         "videoId": 2,
//                         "videoName": "video2",
//                         "videoContent": "abc",
//                         "videoLink": "abc",
//                         "videoDuration": "abc",
//                         "lessionId": 1
//                     },
//                     {
//                         "videoId": 3,
//                         "videoName": "video3",
//                         "videoContent": "abc",
//                         "videoLink": "abc",
//                         "videoDuration": "abc",
//                         "lessionId": 1
//                     }
//                 ],
//                 "lessionId": 1,
//                 "lessionName": "lession1",
//                 "lessionDuration": "abc",
//                 "courseId": 1
//             },
//             {
//                 "videos": [
//                     {
//                         "videoId": 4,
//                         "videoName": "video4",
//                         "videoContent": "abc",
//                         "videoLink": "abc",
//                         "videoDuration": "abc",
//                         "lessionId": 2
//                     }
//                 ],
//                 "lessionId": 2,
//                 "lessionName": "lession2",
//                 "lessionDuration": "abc",
//                 "courseId": 1
//             },
//             {
//                 "videos": [],
//                 "lessionId": 3,
//                 "lessionName": "lession3",
//                 "lessionDuration": "abc",
//                 "courseId": 1
//             }
//         ]
//     },
//     {
//         "courseId": 2,
//         "courseName": "course2",
//         "courseThumbnail": "abc",
//         "shortDes": "abc",
//         "fullDes": "abc",
//         "timePublished": "2023-12-31T17:00:00.000+00:00",
//         "courseDuration": "abc",
//         "oldPrice": 10.0,
//         "percentSale": 10.0,
//         "newPrice": 10.0,
//         "status": 0,
//         "profile": {
//             "profileId": 1,
//             "profileName": "vu thanh hung",
//             "email": "0323213",
//             "phoneNumber": "0323213",
//             "avatar": "0323213",
//             "desciption": "abc",
//             "cateId": 1,
//             "isTeacher": 1
//         },
//         "levels": {
//             "idLevels": 1,
//             "nameLevel": "level 1"
//         },
//         "detailCate": {
//             "detailCateId": 1,
//             "detailCateName": "detail1",
//             "cateId": 1
//         },
//         "lessionRes": [
//             {
//                 "videos": [],
//                 "lessionId": 4,
//                 "lessionName": "lession 4",
//                 "lessionDuration": "abc",
//                 "courseId": 2
//             }
//         ]
//     }
// ]

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getListNewCourses();
    this.getListKOLTeachers();
    this.getListBlogs();
  }

  getListNewCourses() {
    this.homeService.getListNew().subscribe((data) => {
      this.newCourses = data;
        console.log(this.newCourses)
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
