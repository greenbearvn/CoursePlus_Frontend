import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CollectionService } from 'src/app/services/admin/collection/collection.service';
import { ToastService } from 'angular-toastify';
import { AdminCollectionListCoursesComponent } from '../admin-collection-list-courses/admin-collection-list-courses.component';

@Component({
  selector: 'app-admin-collection-modal',
  templateUrl: './admin-collection-modal.component.html',
  styleUrls: [
    './admin-collection-modal.component.css',
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
export class AdminCollectionModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdminCollectionModalComponent>,
    private collecService: CollectionService,
    public dialog: MatDialog,
    private _toastService: ToastService
  ) {}

  type: any;
  id: any;
  status: any;
  searchData: any;
  p: any = 1;

  list: any;

  collection: any = {
    MaBST: 0,
    MaNguoiDung: 0,
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminCollectionListCoursesComponent, {
      data: {},
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {
    this.type = this.data.type;
    this.id = this.data.id;

    if (this.type == 'update') {
      this.getDetail();
    }
  }

  getDetail() {
    this.collecService.listCourse(this.id).subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

  Submit(){
    if(this.status == "Create"){

    }
    else{

    }
  }

  Create(){

  }

  Update(){
    
  }
}
