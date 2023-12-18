import { Component, Input } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { MatDialog } from '@angular/material/dialog';
import { AdminCommentModalComponent } from '../admin-comment-modal/admin-comment-modal.component';
import { CommentService } from 'src/app/services/admin/comment/comment.service';

import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-comment-list',
  templateUrl: './admin-comment-list.component.html',
  styleUrls: [
    './admin-comment-list.component.css',
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
export class AdminCommentListComponent {
  constructor(
    public dialog: MatDialog,
    private commentService: CommentService
  ) {}

  list: any;
  p: number = 1;
  user: any;
  type: any;
  searchData: any;

  faPenToSquare: any = faPenToSquare;
  faPlus: any = faPlus;
  faTrash: any = faTrash;

  @Input()
  makhoahoc!: any;

  ngOnInit() {
    this.getLists();
  }

  openDialog(type: string, id: number): void {
    const dialogRef = this.dialog.open(AdminCommentModalComponent, {
      data: {
        type: type,
        id: id,
        // token: token,
      },
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  getLists() {

   
    if (this.makhoahoc == undefined) {
      this.commentService.list().subscribe((data) => {
        this.list = data.data;
        console.log(this.list);
      });
    } else {
      this.commentService.commentsOfCourse(this.makhoahoc).subscribe((data) => {
        this.list = data.data;
        console.log(this.list);
      });
    }
  }

  delete(item: any) {
    this.commentService.delete(item).subscribe((data) => {
      this.getLists();
    });
  }
}
