import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { KhoahocComponent } from './components/khoahoc/khoahoc.component';
import { IndexCourseComponent } from './components/khoahoc/index/index.component';
import { TableCourseComponent } from './components/khoahoc/table/table.component';
import { KhoahocdetailComponent } from './components/khoahoc/khoahocdetail/khoahocdetail.component';

import { HoadonComponent } from './components/hoadon/hoadon.component';
import { BilltableComponent } from './components/hoadon/billtable/billtable.component';
import { FormbillComponent } from './components/hoadon/formbill/formbill.component';

import { NguoiDungAdminListComponent } from './components/nguoidung-admin/list/list.component';

import { BaihocComponent } from './components/baihoc/baihoc.component';
import { LessionlistComponent } from './components/baihoc/lessionlist/lessionlist.component';

import { AdminDanhmucComponent } from './components/admin-danhmuc/admin-danhmuc.component';
import { DanhmucListComponent } from './components/admin-danhmuc/danhmuc-list/danhmuc-list.component';
import { DanhmucDetailComponent } from './components/admin-danhmuc/danhmuc-detail/danhmuc-detail.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'khoahoc',
        component: KhoahocComponent,
        children: [
          {
            path: 'index',
            component: IndexCourseComponent,
          },
          {
            path: 'list',
            component: TableCourseComponent,
          },
          {
            path: 'detail/:id',
            component: KhoahocdetailComponent,
          },
        ],
      },
      {
        path: 'hoadon',
        component: HoadonComponent,
        children: [
          {
            path: 'list',
            component: BilltableComponent,
          },
          {
            path: 'tools/:type',
            component: FormbillComponent,
          },
          {
            path: 'tools/:type/:id',
            component: FormbillComponent,
          },
        ],
      },
      {
        path: 'nguoidung',
        component: HoadonComponent,
        children: [
          {
            path: 'list',
            component: NguoiDungAdminListComponent,
          },
        ],
      },

      {
        path: 'baihoc',
        component: BaihocComponent,
        children: [
          {
            path: 'list/:id',
            component: LessionlistComponent,
          },
          {
            path: 'tools/:type',
            component: FormbillComponent,
          },
          {
            path: 'tools/:type/:id',
            component: FormbillComponent,
          },
        ],
      },
      {
        path: 'category',
        component: AdminDanhmucComponent,
        children: [
          {
            path: 'list',
            component: DanhmucListComponent,
          },
          {
            path: 'detail/:id',
            component: DanhmucDetailComponent,
          },
          {
            path: 'tools/:type/:id',
            component: FormbillComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
