import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { detailcategory } from 'src/app/Models/admin/detailcategory';
import { DetailCategoryService } from 'src/app/services/admin/detail-category/detail-category.service';
import { AdminDanhmucDetailModalComponent } from '../admin-danhmuc-detail-modal/admin-danhmuc-detail-modal.component';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-danhmuc-detail-list',
  templateUrl: './admin-danhmuc-detail-list.component.html',
  styleUrls: [
    './admin-danhmuc-detail-list.component.css'
  ],
})
export class AdminDanhmucDetailListComponent {
  constructor(
    private detailCateService: DetailCategoryService,
    public dialog: MatDialog
  ) {}

  @Input()
  id!: any;

  detailCates: any;

  list: any;

  p: number = 1;

  searchData: any;


  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminDanhmucDetailModalComponent, {
      data: {
        type: type,
        id: id,
        madm: this.id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {
    this.getListDetailCate();
  }

  getListDetailCate() {
    this.detailCateService.list(this.id).subscribe((data) => {
      this.list = data.data;
      console.log(this.detailCates);
    });
  }

  deleteDetailCate(detailcategory: detailcategory) {
    this.detailCateService.delete(detailcategory).subscribe((data) => {
      this.detailCates = data.data;
      console.log(this.detailCates);
    });
  }
}
