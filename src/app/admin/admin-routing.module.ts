import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { KhoahocComponent } from './components/khoahoc/khoahoc.component';
import { IndexCourseComponent } from './components/khoahoc/index/index.component';
import { TableCourseComponent } from './components/khoahoc/table/table.component';
import { CreateCourseComponent } from './components/khoahoc/create/create.component';

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
          },
          // {
          //   path:'create',
          //   component:CreateCourseComponent
          // }
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
