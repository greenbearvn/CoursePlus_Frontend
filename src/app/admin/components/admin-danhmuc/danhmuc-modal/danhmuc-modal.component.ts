import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/admin/category/category.service';
import { category } from 'src/app/Models/admin/category';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-danhmuc-modal',
  templateUrl: './danhmuc-modal.component.html',
  styleUrls: [
    './danhmuc-modal.component.css',
    '../../../assets/polygon/concept/assets/vendor/bootstrap/css/bootstrap.min.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/circular-std/style.css',
    '../../../assets/polygon/concept/assets/libs/css/style.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/fontawesome/css/fontawesome-all.css',
    '../../../assets/polygon/concept/assets/vendor/charts/chartist-bundle/chartist.css',
    '../../../assets/polygon/concept/assets/vendor/charts/morris-bundle/morris.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/material-design-iconic-font/css/materialdesignicons.min.css',
    '../../../assets/polygon/concept/assets/vendor/charts/c3charts/c3.css',
    '../../../assets/polygon/concept/assets/vendor/fonts/flag-icon-css/flag-icon.min.css',
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

  cate: category = {
    madm: 0,
    tendm: '',
    anhdm: '',
  };

  selectedFile: File | null = null;
  imageUrl: string | null = null;

  statusCreate: any;
  statusEdit: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;

    this.getDataForm();
    // this.token = this.data.token;

    console.log()
  }

  getDataForm() {
    if (this.type === 'edit' && this.id !== 0) {
      this.getDetailCate();
    }
  }

  getDetailCate() {
    this.cateService.detail(this.id).subscribe((data) => {
      this.cate = data.data;
      console.log(this.cate);
    });
  }

  create() {
    if (this.selectedFile && this.imageUrl) {
      this.cateService.create(this.cate).subscribe((data) => {
        this.statusCreate = data.data;
        if (this.statusCreate == true) {
          this._toastService.info('Đã thêm người dùng thành công');
        } else {
          this._toastService.warn('Đã thêm người dùng không thành công');
        }
      });
    }
  }

  update() {
    if (this.selectedFile && this.imageUrl) {
      this.cate.anhdm = this.imageUrl;
      this.cateService.update(this.cate).subscribe((data) => {
        this.statusCreate = data.data;
        if (this.statusEdit == true) {
          this._toastService.info('Đã cập nhật người dùng thành công');
        } else {
          this._toastService.warn('Đã cập nhật người dùng không thành công');
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
        this.imageUrl = data.fileurl;
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
