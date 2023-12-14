import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { ConventionService } from 'src/app/services/admin/convention/convention.service';
import { convention } from 'src/app/Models/admin/convention';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-convention-list',
  templateUrl: './admin-convention-list.component.html',
  styleUrls: [
    './admin-convention-list.component.css',
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
export class AdminConventionListComponent {
  constructor(
    private _toastService: ToastService,
    private conventionService: ConventionService
  ) {}

  lists: any;
  p: number = 1;

  searchData: any = '';

  //font awesome
  faPenToSquare: any = faPenToSquare;
  faTrash: any = faTrash;
  faEye: any = faEye;
  faPlus: any = faPlus;

  ngOnInit() {
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
    this.conventionService.list().subscribe((data) => {
      this.lists = data.data;
      console.log(this.lists);
    });
  }

  deleteItem(convention: convention) {
    this.conventionService.delete(convention).subscribe((data) => {
      this.lists = data.data;
      this._toastService.info('Da Xoa Thanh Cong');
      this.getLists();
    });
  }
}
