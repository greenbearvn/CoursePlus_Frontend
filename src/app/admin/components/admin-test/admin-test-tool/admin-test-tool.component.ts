import { Component } from '@angular/core';
import { TestService } from 'src/app/services/admin/test/test.service';
import { test } from 'src/app/Models/admin/test';
import { MatDialog } from '@angular/material/dialog';
import { AdminQuestionToolsComponent } from '../../admin-question/admin-question-tools/admin-question-tools.component';
import { ToastService } from 'angular-toastify';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { ActivatedRoute } from '@angular/router';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-test-tool',
  templateUrl: './admin-test-tool.component.html',
  styleUrls: [
    './admin-test-tool.component.css',
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

  desData: any;
  question: any;

  test: any = {
    MaBaiKT: 0,
    TenBaiKT: '',
    MoTaBaiKT: '',
    MaGiangVien: 0,
    MaVideo: 0,
    Questions: [],
  };

  listTeachers: any;
  listVideos: any;

  // CKeditor
  ckeditorData: any;
  Editor = ClassicEditor;

  //// Fontawesome
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;

  // data res
  createRes: any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));

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
        this.test.Questions.push(question);
        console.log(this.test);
      }
    });
  }

  getDetail() {
    this.testServices.detail(this.id).subscribe((data) => {
      this.test = data.data;
      this.test.MoTaBaiKT = data.data.MoTaBaiKT;
      console.log(this.test);
    });
  }

  public onChange({ editor }: ChangeEvent) {
    this.ckeditorData = editor.data.get();
  }

  submit(type: any) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  getListVideos(): void {
    this.testServices.listVideo().subscribe((data) => {
      this.listVideos = data.data;
      console.log(this.listVideos);
    });
  }

  getListTeachers(): void {
    this.testServices.listTeachers().subscribe((data) => {
      this.listTeachers = data.data;
      console.log(this.listTeachers);
    });
  }

  create() {
    this.test.MoTaBaiKT = this.ckeditorData;
    console.log(this.test);

    this.testServices.create(this.test).subscribe((data) => {
      this.createRes = data.data;
      console.log(this.createRes);
      if (this.createRes == true) {
        this._toastService.info('Da Cap Nhat Thanh Cong');
      }
    });
  }

  update() {
    this.test.MoTaBaiKT = this.ckeditorData;
    console.log(this.test);

    this.testServices.update(this.test).subscribe((data) => {
      this.createRes = data.data;
      console.log(this.createRes);
      if (this.createRes == true) {
        this._toastService.info('Da Cap Nhat Thanh Cong');
      }
    });
  }

  deleteQuiz(index: number, cauhoi: any) {
    if (this.type == 'create' && index && !cauhoi) {
      this.test.Questions.splice(index, 1);
    } else {
      this.test.Questions.splice(index, 1);
      this.testServices.deleteQuestion(cauhoi).subscribe((data) => {
        this.createRes = data.data;
        console.log(this.createRes);
      });
    }
  }
}
