import { Component } from '@angular/core';
import { CollectionService } from 'src/app/services/admin/collection/collection.service';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { AdminCollectionModalComponent } from '../admin-collection-modal/admin-collection-modal.component';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-collection-list',
  templateUrl: './admin-collection-list.component.html',
  styleUrls: [
    './admin-collection-list.component.css',
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
export class AdminCollectionListComponent {
  constructor(
    public dialog: MatDialog,
    private collectionServices: CollectionService,
    private toast: ToastService
  ) {}

  list: any;
  p: number = 1;
  user: any;
  type: any;
  searchData: any;
  status: any;

  faPenToSquare: any = faPenToSquare;
  faPlus: any = faPlus;
  faTrash: any = faTrash;

  ngOnInit() {
    this.getLists();
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminCollectionModalComponent, {
      data: {
        type: type,
        id: id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getLists();
    });
  }

  getLists() {
    this.collectionServices.list().subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }
}
