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

@Component({
  selector: 'app-admin-question-tools',
  templateUrl: './admin-question-tools.component.html',
  styleUrls: [
    './admin-question-tools.component.css',
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

  question: any = {
    MaCauHoi: 0,
    MaBaiKT: 0,
    MoTaCauHoi: '',
    GoiY: '',
    Choices: [],
  };

  MoTaCauHoi: any;
  GoiY: any;
  Editor = ClassicEditor;

  ngOnInit() {
    this.type = this.data.type;
    // this.id = this.data.id;
    // this.token = this.data.token;
    // this.getDataForm();
  }

  openDialog(type: string): void {
    const dialogRef = this.dialog.open(AdminChoiceToolsComponent, {
      data: {
        type: type,
        // id: id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((choice) => {
      this.question.Choices.push(choice);
      console.log(this.question.Choices);
    });
  }

  submit(type: string) {
    if (type == 'create') {
      this.create();
    }
  }

  create() {
    this.question.MoTaCauHoi = this.MoTaCauHoi;
    this.question.GoiY = this.GoiY;
    console.log(this.question);
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
