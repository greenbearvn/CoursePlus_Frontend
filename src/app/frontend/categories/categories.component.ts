import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/frontend/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: [
    './categories.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class CategoriesComponent {
  constructor(private cateSer: CategoryService) {}

  cates: any;
  detailCates: any;

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.cateSer.getCate().subscribe((data) => {
      this.cates = data.cates;
      this.detailCates = data.detailCates;
    });
  }
}
