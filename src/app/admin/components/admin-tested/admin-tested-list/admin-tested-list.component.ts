import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TestedService } from 'src/app/services/admin/tested/tested.service';
import { AdminTestedModalComponent } from '../admin-tested-modal/admin-tested-modal.component';
import { tested } from 'src/app/Models/admin/tested';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-tested-list',
  templateUrl: './admin-tested-list.component.html',
  styleUrls: ['./admin-tested-list.component.css'],
})
export class AdminTestedListComponent {
  constructor(
    public dialog: MatDialog,
    private _toastService: ToastService,
    private testedService: TestedService,
    private route: ActivatedRoute
  ) {}

  lists: any;
  p: number = 1;
  token: any;
  searchData: any = '';

  MaGiangVien: any;

  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faEye: any = faEye;
  faPlus: any = faPlus;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.MaGiangVien = Number(routeParams.get('id'));
    this.getLists();
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminTestedModalComponent, {
      data: {
        type: type,
        id: id,
        MaGiangVien: this.MaGiangVien,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getLists();
    });
  }

  getLists() {
    if (this.MaGiangVien > 0) {
      this.testedService.getbyTeacher(this.MaGiangVien).subscribe((data) => {
        this.lists = data;
      });
    } else {
      this.testedService.list().subscribe((data) => {
        this.lists = data;
        console.log(this.lists);
      });
    }
  }

  deleteItem(tested: tested) {
    this.testedService.delete(tested).subscribe((data) => {
      this.lists = data.data;
      this._toastService.info('Đã xóa thành công');
      this.getLists();
    });
  }
}
