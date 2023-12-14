import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { choice } from 'src/app/Models/admin/choice';

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
    // private testService: TestService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;

  NoiDung: any;
  Editor = ClassicEditor;

  choice: choice = {
    MaLuaChon: 0,
    MaCauHoi: 0,
    NoiDung: '',
    Dung: 0,
  };

  ngOnInit() {
    this.type = this.data.type;
    // this.id = this.data.id;
    // this.token = this.data.token;
    // this.getDataForm();
  }

  submit(type: any) {
    if (type === 'create') {
      this.create();
    }
  }

  create() {
    this.choice.NoiDung = this.NoiDung;
    console.log(this.choice);
  }

  public onChangeDes({ editor }: ChangeEvent) {
    this.NoiDung = editor.data.get();
  }

  createChoice(): void {
   
    this.dialogRef.close(this.choice);
  }

  closeModal(): void {
    this.dialogRef.close(this.choice);
  }
}
