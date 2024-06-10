import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/admin/category/category.service';

@Component({
  selector: 'app-danhmuc-detail',
  templateUrl: './danhmuc-detail.component.html',
  styleUrls: ['./danhmuc-detail.component.css'],
})
export class DanhmucDetailComponent {
  constructor(
    private catService: CategoryService,
    private route: ActivatedRoute
  ) {}

  id: any;
  detail: any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));


    console.log(this.id)
    if(this.id>0){
      this.getDetail();

    }

  }

  getDetail() {
    this.catService.detail(this.id).subscribe((data) => {
      this.detail = data;
    });
  }
}
