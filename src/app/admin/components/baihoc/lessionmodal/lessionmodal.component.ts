import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { LessionService } from 'src/app/services/admin/lession/lession.service';
import { NguoidungService } from 'src/app/services/admin/nguoidung/nguoidung.service';
import { ToastService } from 'angular-toastify';
import { lession } from 'src/app/Models/admin/lession';

@Component({
  selector: 'app-lessionmodal',
  templateUrl: './lessionmodal.component.html',
  styleUrls: [
    './lessionmodal.component.css'
 
  ],
})
export class LessionmodalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LessionmodalComponent>,
    private lessService: LessionService,
    private userService: NguoidungService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;

  lession: lession = {
    lessionId: 0,
    courseId: 0,
    lessionName: '',
    lessionDuration: '',
  };

  listCourses: any;

  ///status
  statusCreate: any;
  statusEdit: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;

    this.lession.courseId = this.data.MaKhoaHoc;

    this.getDataForm();
    
  }

  getDataForm() {
    if (this.type === 'edit' ) {
      this.getDetailLession();
    }
  }

  submit(type: string) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  getDetailLession() {
    this.lessService.detail(this.id).subscribe((data) => {
      this.lession = data;
      console.log(this.lession);
    });
  }


  create() {
    this.lessService.create(this.lession).subscribe((data) => {
      if (data) {
        this._toastService.info('Đã thêm bài học thành công');
      } else {
        this._toastService.warn('Đã thêm bài học không thành công');
      }
    });
  }

  update() {
    this.lessService.update(this.id,this.lession).subscribe((data) => {
      if (data) {
        this._toastService.info('Đã cập nhật bài học thành công');
      } else {
        this._toastService.warn('Đã cập nhật bài học không thành công');
      }
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
