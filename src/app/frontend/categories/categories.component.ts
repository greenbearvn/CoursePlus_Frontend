import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/frontend/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.css','../css/style.css'
  ],
})
export class CategoriesComponent {
  constructor(private cateSer: CategoryService) {}

  cates: any;
  detailCates: any;

  ngOnInit() {
    this.getListCate();
    this.getListDetailCate();
  }

  getListCate() {
    this.cateSer.getCate().subscribe((data) => {
      this.cates = data;
      console.table(this.cates);
    });
  }

  getListDetailCate() {
    this.cateSer.getDetailCate().subscribe((data) => {
      this.detailCates = data;
      console.table(this.detailCates);
    });
  }
}
