import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KhoahocService } from 'src/app/services/admin/khoahoc/khoahoc.service';
import { ManagecourseService } from 'src/app/services/frontend/managecourse/managecourse.service';

@Component({
  selector: 'app-khoahocdetail',
  templateUrl: './khoahocdetail.component.html',
  styleUrls: ['./khoahocdetail.component.css'],
})
export class KhoahocdetailComponent {
  constructor(
    private khoahocService: KhoahocService,
    private managerService: ManagecourseService,
    private route: ActivatedRoute
  ) {}

  id: any;
  token: any;

  userid: any;

  detail: any;

  lessions: any;

  searchData: any;

  p: number = 1;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));

    this.getDetail();
  }

  getDetail() {
    this.khoahocService.detail(this.id).subscribe((data) => {
      this.detail = data;
    });
  }
}
