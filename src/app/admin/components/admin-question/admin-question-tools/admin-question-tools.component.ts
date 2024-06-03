import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { ToastService } from 'angular-toastify';
import { TestService } from 'src/app/services/admin/test/test.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { question } from 'src/app/Models/admin/question';
import { AdminChoiceToolsComponent } from '../../admin-choice/admin-choice-tools/admin-choice-tools.component';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-admin-question-tools',
  templateUrl: './admin-question-tools.component.html',
  styleUrls: [
    './admin-question-tools.component.css'
  ],
})
export class AdminQuestionToolsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminQuestionToolsComponent>,
    private testService: TestService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;
  searchData: any = '';
  p: any = 1;

  test: any;

  faPenToSquare: any = faPenToSquare;

  question: any = {
 
    questionDescription: '',
    suggestion: '',
    choices: [],
  };

  //ckeditor

  faTrash: any = faTrash;

  MoTaCauHoi: any;
  GoiY: any;
  Editor = ClassicEditor;

  //// Res
  deleteChoiceRes: any;
  updateQuestionRes: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.test = this.data.test;
    this.getDetail(this.type, this.id);
  }

  getDetail(type: string, id: number) {
    if (id >= 0) {
      this.question = this.test.questions[id];
    }
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminChoiceToolsComponent, {
      data: {
        type: type,
        id: id,
        question: this.question,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((choice) => {
      if (choice !== undefined) {
        this.question.choices.push(choice);
        console.log(this.question.choices);
      }
    });
  }

  submit(type: string) {
    if (type == 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.question.MoTaCauHoi = this.MoTaCauHoi;
    this.question.GoiY = this.GoiY;
    console.log(this.question);
  }

  update() {
    this.testService.updateQuestion(this.question).subscribe((data) => {
      this.updateQuestionRes = data.data;
      if (this.updateQuestionRes == true) {
        this._toastService.info('Đã cập nhật thành công!!!');
      }
    });
  }

  deleteChoice(index: number) {
    this.question.choices.splice(index, 1);
  }

  deleteChoiceUpdate(index: number, choice: any) {
    this.question.choices.splice(index, 1);

    this.testService.deleteChoice(choice).subscribe((data) => {
      this.deleteChoiceRes = data.data;
      if (this.deleteChoiceRes == true) {
        this._toastService.info('Đã xóa thành công!!!');
      }
    });
  }

  public onChangeQuesDes({ editor }: ChangeEvent) {
    this.MoTaCauHoi = editor.data.get();
  }

  public onChangeSuggest({ editor }: ChangeEvent) {
    this.GoiY = editor.data.get();
  }

  createQuestion(): void {
    this.dialogRef.close(this.question);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
