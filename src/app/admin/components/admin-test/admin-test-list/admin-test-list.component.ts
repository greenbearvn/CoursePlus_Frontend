import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { TestService } from 'src/app/services/admin/test/test.service';
import { test } from 'src/app/Models/admin/test';
import { ActivatedRoute } from '@angular/router';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-test-list',
  templateUrl: './admin-test-list.component.html',
  styleUrls: [
    './admin-test-list.component.css',
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
export class AdminTestListComponent {
  constructor(
    private _toastService: ToastService,
    private testService: TestService,
    private route: ActivatedRoute
  ) {}

  lists: any;
  p: number = 1;
  searchData: any = '';

  MaGiangVien: any;

  //font awesome
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faEye: any = faEye;
  faPlus: any = faPlus;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.MaGiangVien = Number(routeParams.get('id'));

    this.getUserInSession();
    this.getLists();
  }

  getUserInSession() {
    // this.khoahocService.getUser().subscribe((data) => {
    //   this.token = data.data.Token;
    //   this.getLists();
    // });
  }

  getLists() {
    this.testService.list(this.MaGiangVien).subscribe((data) => {
      this.lists = data.data;
      console.log(this.lists);
    });
  }

  deleteItem(test: test) {
    this.testService.delete(test).subscribe((data) => {
      this.lists = data.data;
      this._toastService.info('Đã xóa thành công');
      this.getLists();
    });
  }
}
