import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { ConventionService } from 'src/app/services/admin/convention/convention.service';
import { convention } from 'src/app/Models/admin/convention';

@Component({
  selector: 'app-admin-convention-create',
  templateUrl: './admin-convention-create.component.html',
  styleUrls: [
    './admin-convention-create.component.css',
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
export class AdminConventionCreateComponent {
  constructor(
    private route: ActivatedRoute,
    private _toastService: ToastService,
    private conventionService: ConventionService
  ) {}

  lists: any;
  listDetails: any;
  p: number = 1;
  searchData: any = '';

  type: any;
  id: any;
  statusForm: any = '';

  listUserConvention: any;

  createData: any;
  createUserConData: any;

  convention: convention = {
    MaHoiThoai: 0,
    TenHoiThoai: '',
  };

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.type = routeParams.get('type');
    this.statusForm = this.type;

    if (routeParams.get('id')) {
      this.id = routeParams.get('id');
      // this.getDetail(this.id);
      this.getListUsers();
    }
    this.getListUsers();
    // this.getListUsers();
    // this.getListDetailItems();
  }

  getListUsers() {
    this.conventionService.listUserConvention(this.id).subscribe((data) => {
      this.listDetails = data.data;
      console.log(this.listDetails);
    });
  }

  receiveData(values: { listItems: any }) {
    this.lists = values.listItems;
  }

  SubmitData() {
    if (this.statusForm === 'create') {
      this.create();
    } else {
    }
  }

  create() {
    this.conventionService.create(this.convention).subscribe((data) => {
      this.createData = data.data;
      if (this.createData > 0) {
        this.conventionService
          .createUserConvention(this.lists)
          .subscribe((data) => {
            this.createUserConData = data.status;
            if (this.createUserConData === true) {
              this._toastService.info('Đã thêm đơn hàng thành công');
            }
          });
      }
    });
  }
}
