import { Component } from '@angular/core';
import { TestService } from 'src/app/services/admin/test/test.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminQuestionToolsComponent } from '../../admin-question/admin-question-tools/admin-question-tools.component';
import { ToastService } from 'angular-toastify';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { ActivatedRoute } from '@angular/router';
import { AdminTestVideoListComponent } from '../admin-test-video-list/admin-test-video-list.component';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as e from 'cors';

import { test } from 'src/app/Models/admin/test';

@Component({
  selector: 'app-admin-test-tool',
  templateUrl: './admin-test-tool.component.html',
  styleUrls: [
    './admin-test-tool.component.css'
  ],
})
export class AdminTestToolComponent {
  constructor(
    private testServices: TestService,
    public dialog: MatDialog,
    private _toastService: ToastService,
    private route: ActivatedRoute
  ) {}

  id: any;
  type: any;
  searchData: any = '';
  p: any = 1;

  MaGiangVien: any;

  desData: any;
  question: any;

  test: any = {
    testId: 0,
    testName: '',
    teacherId: 0,
    videoId: 0,
    questions: [],
  };

  listTeachers: any;
  listVideos: any;

  // CKeditor
  ckeditorData: any;
  // Editor = ClassicEditor;

  //// Fontawesome
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faPlus: any = faPlus;

  // data res
  createRes: any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));

    this.MaGiangVien = Number(routeParams.get('MaGiangVien'));
    if (this.MaGiangVien > 0) {
      this.test.teacherId = this.MaGiangVien;
    }

    this.type = routeParams.get('type');

    if (this.id && this.type == 'update') {
      this.getDetail();
    }


    this.getListTeachers();
    this.getListVideos();
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminQuestionToolsComponent, {
      data: {
        type: type,
        id: id,
        test: this.test,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((question) => {
      if (question !== undefined) {
        this.test.questions.push(question);
        console.log(this.test);
      }
    });
  }

  openListVideo(): void {
    const dialogRef = this.dialog.open(AdminTestVideoListComponent, {
      data: {},
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((video) => {
      this.test.MaVideo = video.MaVideo;
    });
  }

  getDetail() {


    this.testServices.detail(this.id).subscribe((data) => {
      this.test = data;

      console.log(this.test);
    });
  }

  // public onChange({ editor }: ChangeEvent) {
  //   this.ckeditorData = editor.data.get();
  // }

  submit(type: any) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  getListVideos(): void {
    if (this.MaGiangVien > 0) {
      this.testServices.listVideoPage(this.MaGiangVien).subscribe((data) => {
        this.listVideos = data.data;
        console.log(this.listVideos);
      });
    } else {
      this.testServices.listVideoPage(this.MaGiangVien).subscribe((data) => {
        this.listVideos = data.data;
        console.log(this.listVideos);
      });
    }
  }

  getListTeachers(): void {
    this.testServices.listTeachers().subscribe((data) => {
      this.listTeachers = data.data;
      console.log(this.listTeachers);
    });
  }

  create() {
 
   if(this.MaGiangVien > 0){
     this.test.teacherId = this.MaGiangVien;

   }

   console.log(this.test)

    this.testServices.create(this.test).subscribe((data) => {
      if (data == true) {
        this._toastService.info('Đã tạo bài kiểm tra thành công');
      }
      if (data == false) {
        this._toastService.info('Đã tạo bài kiểm tra không thành công');
      }
    });
  }

  update() {

    console.log(this.test);

    this.testServices.update(this.test).subscribe((data) => {
      this.createRes = data.data;
      console.log(this.createRes);
      if (this.createRes == true) {
        this._toastService.info('Đã cập nhật thành công');
      }
    });
  }

  deleteQuiz(index: number, cauhoi: any) {
    if (this.type == 'create' && index && !cauhoi) {
      this.test.questions.splice(index, 1);
    } else {
      this.test.questions.splice(index, 1);
      this.testServices.deleteQuestion(cauhoi).subscribe((data) => {
        this.createRes = data.data;
        console.log(this.createRes);
      });
    }
  }
}
