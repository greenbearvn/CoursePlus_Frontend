import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { KhoahocComponent } from './components/khoahoc/khoahoc.component';
import { IndexCourseComponent } from './components/khoahoc/index/index.component';
import { TableCourseComponent } from './components/khoahoc/table/table.component';

import { HoadonComponent } from './components/hoadon/hoadon.component';
import { BilltableComponent } from './components/hoadon/billtable/billtable.component';
import { FormbillComponent } from './components/hoadon/formbill/formbill.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'khoahoc',
        component:KhoahocComponent,
        children:[
          {
            path:'index',
            component:IndexCourseComponent
          },
          {
            path:'list',
            component:TableCourseComponent
          }
        ]
      },
      {
        path:'hoadon',
        component:HoadonComponent,
        children:[
          {
            path:'list',
            component:BilltableComponent
          },
          {
            path:'tools/:string',
            component:FormbillComponent
          }
        ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
