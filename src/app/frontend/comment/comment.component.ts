import { Component, Input } from '@angular/core';
import { CommentService } from 'src/app/services/frontend/comment/comment.service';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: [
    './comment.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class CommentComponent {
  constructor(
    private commentService: CommentService,
    private toast: ToastService
  ) {}

  @Input() MaKhoaHoc: any;
  faCircleInfo: any = faCircleInfo;
  faTrash: any = faTrash;

  list: any;
  status: any = false;

  showDelete: any;

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.commentService.gteList(this.MaKhoaHoc).subscribe((data) => {
      this.list = data.data;
      console.log(this.list);
    });
  }

  checkDelete(id: any) {
    this.commentService.checkDelete(id).subscribe((data) => {
      this.showDelete = data.data;
    });
  }

  delete(item: any) {
    this.commentService.delete(item).subscribe((data) => {
      this.status = data.data;
      if (this.status == true) {
        this.toast.info('Đã xóa bình luận thành công');
        this.getList();
      }
    });
  }
}
