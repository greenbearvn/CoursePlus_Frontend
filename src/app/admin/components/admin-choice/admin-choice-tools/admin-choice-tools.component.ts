import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { choice } from 'src/app/Models/admin/choice';
import { TestService } from 'src/app/services/admin/test/test.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-admin-choice-tools',
  templateUrl: './admin-choice-tools.component.html',
  styleUrls: [
    './admin-choice-tools.component.css'
  ],
})
export class AdminChoiceToolsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminChoiceToolsComponent>,
    private testService: TestService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;
  question: any;

  NoiDung: any;
  Editor = ClassicEditor;

  choice: any = {
    choiceId: 0,
    questionId: 0,
    choiceContent: '',
    corrected: 0,
  };

  createRes: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.question = this.data.question;
    this.getDetail(this.id);
  }

  submit(type: any) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  getDetail(id: number) {
    if (id >= 0) {
      this.choice = this.question.choices[id];
      console.log(this.choice);
    }
  }

  create() {
    this.choice.NoiDung = this.NoiDung;
    console.log(this.choice);
  }

  update() {
    console.log(this.choice)
    this.testService.updateChoice(this.choice).subscribe((data) => {
      this.createRes = data.data;
      if (this.createRes == true) {
        this._toastService.info('Đã cập nhật thành công!!!');
      }
    });
  }

  public onChangeDes({ editor }: ChangeEvent) {
    this.NoiDung = editor.data.get();
  }

  createChoice(): void {
    this.dialogRef.close(this.choice);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
