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
    './admin-choice-tools.component.css',
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
    MaLuaChon: 0,
    MaCauHoi: 0,
    NoiDung: '',
    Dung: 0,
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
      this.choice = this.question.Choices[id];
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
