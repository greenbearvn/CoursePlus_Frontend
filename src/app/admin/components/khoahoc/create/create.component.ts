import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { Course } from 'src/app/Models/Course';
import { ManagecourseService } from 'src/app/services/frontend/managecourse/managecourse.service';
import * as e from 'cors';

@Component({
  selector: 'app-course-create',
  templateUrl: './create.component.html',
  styleUrls: [
    './create.component.css'
    
  ],
})
export class CreateCourseComponent implements OnInit {
  type: any;
  id: any;
  token: any;
  detailCourse: any;
  levels: any;
  teachers: any;
  detailCates: any;
  ckeditorData: any;

  selectedFile: File | null = null;
  imageUrl: string | null = null;
  Editor = ClassicEditor;


  userId:any;

  khoahoc: Course = {
    courseId: 0,
    courseName: '',
    courseThumbnail: '',
    shortDes: '',
    fullDes: '',
    timePublished: new Date(),
    courseDuration: '',
    oldPrice: 0,
    percentSale: 0,
    idLevel: 0,
    idDetailCate: 0,
    profileId:0,
    status:0
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateCourseComponent>,
    private khService: KhoahocService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    this.userId = this.data.userId;

    console.log(this.type);
    console.log(this.id);
    this.getDataForm();
  }

  getDataForm() {
    if (this.type === 'create' ) {
      this.getLevels();
      this.getTeachers();
      this.getDetailCate();
    } else {
      this.getDeTailCourse();
      this.getLevels();
      this.getTeachers();
      this.getDetailCate();
    }
  }

  getDeTailCourse() {
    this.khService.detail(this.id).subscribe((data) => {
      this.khoahoc = data.courses;
      console.log("detail : ",this.khoahoc);

      console.log(this.khoahoc.idLevel)
      console.log(this.khoahoc.idDetailCate)
    });
  }

  getLevels() {
    // if (this.MaHoSo > 0) {
    //   this.manageCourseSer.listLevels().subscribe((data) => {
    //     this.levels = data.data;
    //     console.log(this.levels);
    //   });
    // } else {
      
    // }
    this.khService.levels().subscribe((data) => {
      this.levels = data;
      console.log("levels: ",this.levels);
    });
  }

  getTeachers() {
    // if (this.MaHoSo > 0) {
    //   this.manageCourseSer.listTeachers().subscribe((data) => {
    //     this.teachers = data.data;
    //     console.log(this.teachers);
    //   });
    // } else {
      
    // }
    this.khService.teachers().subscribe((data) => {
      this.teachers = data;
      // console.log(this.teachers);
    });
  }

  getDetailCate() {
    // if (this.MaHoSo > 0) {
    //   this.manageCourseSer.listDetailCate().subscribe((data) => {
    //     this.detailCates = data.data;
    //     console.log(this.detailCates);
    //   });
    // } else {
      
    // }


    this.khService.detailCates().subscribe((data) => {
      this.detailCates = data;
      console.log("detail-cates: ",this.detailCates);
    });
  }

  create() {

    if (this.imageUrl) {
      this.khoahoc.fullDes = this.ckeditorData;
      this.khoahoc.courseThumbnail = this.imageUrl;
      if(this.userId > 0){
        this.khoahoc.profileId = this.userId;
      }
      this.khService.create(this.khoahoc).subscribe((data) => {
        if (data) {
          this._toastService.info('Thêm thành công !!!');
        } else {
          this._toastService.info('Thêm không thành công !!!');
        }
      });
    }
  }

  edit() {
    if (this.selectedFile && this.imageUrl) {
      this.khoahoc.courseThumbnail = this.imageUrl;
      this.khService.edit(this.id, this.khoahoc).subscribe((data) => {
        if (data != undefined) {
          this._toastService.info('Cập nhật thành công !!!');
        } else {
          this._toastService.warn('Cập nhật không thành công !!!');
        }
      });
    } else {
      this.khService.edit(this.id, this.khoahoc).subscribe((data) => {
        if (data != undefined) {
          this._toastService.info('Cập nhật thành công !!!');
        } else {
          this._toastService.warn('Cập nhật không thành công !!!');
        }
      });
    }
  }
  
  

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(formData.get('image'));

      this.khService.upload(formData).subscribe((data) => {
        this.imageUrl = data.data;
   
      });

  
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      // console.log(this.selectedFile);
    }
  }

  
  public onChange({ editor }: ChangeEvent) {
    this.ckeditorData = editor.data.get();
  }
  closeModal(): void {
    this.dialogRef.close();
  }
}
