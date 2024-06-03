import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/admin/category/category.service';

import { Category } from 'src/app/Models/admin/category';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-danhmuc-modal',
  templateUrl: './danhmuc-modal.component.html',
  styleUrls: [
    './danhmuc-modal.component.css'
   
  ],
})
export class DanhmucModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DanhmucModalComponent>,
    private cateService: CategoryService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;

  cate:Category = {
    categoryId:'',
    categoryName:'',
    image:'',
  }


  selectedFile: File | null = null;
  imageUrl: string | null = null;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;

    console.log(this.type)
    console.log(this.id)

    this.getDataForm();
  }

  getDataForm() {
    if (this.type === 'edit') {
      this.getDetailCate();
    }
  }

  getDetailCate() {
    this.cateService.detail(this.id).subscribe((data) => {
      this.cate = data.categories;
      console.log(this.cate);
    });
  }

  create() {
    if (this.selectedFile && this.imageUrl) {
      this.cate.image = this.imageUrl;
      this.cateService.create(this.cate).subscribe((data) => {
        if (data ) {
          this._toastService.info('Đã thêm thể loại thành công');
        } else {
          this._toastService.warn('Đã thêm thể loại không thành công');
        }
      });
    }
  }

  update() {
    if (this.selectedFile && this.imageUrl) {
      this.cate.image = this.imageUrl;
      this.cateService.edit(this.id,this.cate).subscribe((data) => {

        if (data ) {
          this._toastService.info('Đã cập nhật thể loại thành công');
        } else {
          this._toastService.warn('Đã cập nhật thể loại không thành công');
        }
      });
    }
  }

  submit(type: string) {
    if (type === 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(formData.get('image'));

      this.cateService.upload(formData).subscribe((data) => {
        this.imageUrl = data.data;
        console.log(this.imageUrl);
      });
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      console.log(this.selectedFile);
    }
  }
}
