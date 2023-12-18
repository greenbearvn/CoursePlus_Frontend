import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastService } from 'angular-toastify';
import { LevelService } from 'src/app/services/admin/level/level.service';
import { level } from 'src/app/Models/admin/level';

@Component({
  selector: 'app-admin-level-modal',
  templateUrl: './admin-level-modal.component.html',
  styleUrls: [
    './admin-level-modal.component.css',
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
export class AdminLevelModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminLevelModalComponent>,
    private levelService: LevelService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  level: level = {
    MaCapDo: 0,
    TenCapDo: '',
  };

  type: any;
  id: any;

  ///
  createRes: any;
  updateRes: any;

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;
    // this.getUserInSession();

    this.detail();
  }

  detail() {
    if (this.type == 'update') {
      this.levelService.detail(this.id).subscribe((data) => {
        this.level = data.data;
        console.log(this.level);
      });
    }
  }

  submit(type: any) {
    if (type == 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    this.levelService.create(this.level).subscribe((data) => {
      this.createRes = data.data;
      if (this.createRes == true) {
        this._toastService.info('Thêm thành công!!!');
      }
    });
  }

  update() {
    this.levelService.update(this.level).subscribe((data) => {
      this.updateRes = data.data;
      if (this.createRes == true) {
        this._toastService.info('Cập nhật thành công!!!');
      }
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
