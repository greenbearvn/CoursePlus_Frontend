import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { CreateCourseComponent } from '../create/create.component';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';

@Component({
  selector: 'app-course-table',
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.css',
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
export class TableCourseComponent {
  constructor(
    public dialog: MatDialog,
    private datePipe: DatePipe,
    private khoahocService: KhoahocService
  ) {}

  lists: any;
  p: number = 1;
  date: any;

  openDialog(type: string): void {
    const dialogRef = this.dialog.open(CreateCourseComponent, {
      data: {
        type: type,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  getLists() {
    this.khoahocService.lists().subscribe((data) => {
      this.lists = data.data;
      if (this.lists && this.lists.ThoiGian) {
        // Assuming ThoiGian is a single date, if it's an array, adjust accordingly
        this.lists.ThoiGian = this.datePipe.transform(
          this.lists.ThoiGian,
          'dd/MM/yyyy'
        );
        
      }
      console.log(this.lists)
    });
  }

  ngOnInit() {
    this.getLists();
  }
}
