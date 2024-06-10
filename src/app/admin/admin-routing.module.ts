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

import { AdminConventionComponent } from './components/admin-convention/admin-convention.component';
import { AdminConventionListComponent } from './components/admin-convention/admin-convention-list/admin-convention-list.component';
import { AdminConventionCreateComponent } from './components/admin-convention/admin-convention-create/admin-convention-create.component';

import { AdminTestComponent } from './components/admin-test/admin-test.component';
import { AdminTestListComponent } from './components/admin-test/admin-test-list/admin-test-list.component';
import { AdminTestToolComponent } from './components/admin-test/admin-test-tool/admin-test-tool.component';

import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminProfileListComponent } from './components/admin-profile/admin-profile-list/admin-profile-list.component';
import { AdminProfileModalComponent } from './components/admin-profile/admin-profile-modal/admin-profile-modal.component';

import { AdminBlogComponent } from './components/admin-blog/admin-blog.component';
import { AdminBlogListComponent } from './components/admin-blog/admin-blog-list/admin-blog-list.component';
import { AdminBlogModalComponent } from './components/admin-blog/admin-blog-modal/admin-blog-modal.component';

import { AdminLevelComponent } from './components/admin-level/admin-level.component';
import { AdminLevelListComponent } from './components/admin-level/admin-level-list/admin-level-list.component';

import { AdminCommentComponent } from './components/admin-comment/admin-comment.component';
import { AdminCommentListComponent } from './components/admin-comment/admin-comment-list/admin-comment-list.component';

import { AdminDanhmucDetailComponent } from './components/admin-danhmuc-detail/admin-danhmuc-detail.component';
import { AdminDanhmucDetailListComponent } from './components/admin-danhmuc-detail/admin-danhmuc-detail-list/admin-danhmuc-detail-list.component';

import { AdminTestedComponent } from './components/admin-tested/admin-tested.component';
import { AdminTestedListComponent } from './components/admin-tested/admin-tested-list/admin-tested-list.component';

import { AdminCollectionComponent } from './components/admin-collection/admin-collection.component';
import { AdminCollectionModalComponent } from './components/admin-collection/admin-collection-modal/admin-collection-modal.component';
import { AdminCollectionListComponent } from './components/admin-collection/admin-collection-list/admin-collection-list.component';

import { AdminCollectionListCoursesComponent } from './components/admin-collection/admin-collection-list-courses/admin-collection-list-courses.component';

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
            path: 'list/user/:id',
            component: TableCourseComponent,
          },
          {
            path: 'detail/:id',
            component: KhoahocdetailComponent,
          },
          {
            path: 'user/courses/:userid/:courseid',
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
            path: 'tools/:type/:mahoadon',
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
      {
        path: 'convention',
        component: AdminConventionComponent,
        children: [
          {
            path: 'list',
            component: AdminConventionListComponent,
          },
          {
            path: 'tools/:type',
            component: AdminConventionCreateComponent,
          },
          {
            path: 'tools/:type/:id',
            component: AdminConventionCreateComponent,
          },
        ],
      },
      {
        path: 'test',
        component: AdminTestComponent,
        children: [
          {
            path: 'list',
            component: AdminTestListComponent,
          },
          {
            path: 'tools/:type',
            component: AdminTestToolComponent,
          },
          {
            path: 'tools/:type/:id',
            component: AdminTestToolComponent,
          },

          /// manage
          {
            path: 'manage/list/teacher/:id',
            component: AdminTestListComponent,
          },
          {
            path: 'manage/tools/:type/:MaGiangVien',
            component: AdminTestToolComponent,
          },
          {
            path: 'manage/tools/:type/:MaGiangVien/:id',
            component: AdminTestToolComponent,
          },
        ],
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
        children: [
          {
            path: 'list',
            component: AdminProfileListComponent,
          },
        ],
      },
      {
        path: 'blog',
        component: AdminBlogComponent,
        children: [
          {
            path: 'list',
            component: AdminBlogListComponent,
            
          },
          {
            path: 'list/:id',
            component: AdminBlogListComponent,
            
          },
        ],
      },
      {
        path: 'level',
        component: AdminLevelComponent,
        children: [
          {
            path: 'list',
            component: AdminLevelListComponent,
          },
        ],
      },
      {
        path: 'comment',
        component: AdminCommentComponent,
        children: [
          {
            path: 'list',
            component: AdminCommentListComponent,
          },
        ],
      },
      {
        path: 'tested',
        component: AdminTestedComponent,
        children: [
          {
            path: 'list',
            component: AdminTestedListComponent,
          },
          {
            path: 'list/teacher/:id',
            component: AdminTestedListComponent,
          },
        ],
      },
      {
        path: 'collection',
        component: AdminCollectionComponent,
        children: [
          {
            path: 'list',
            component: AdminCollectionListComponent,
          },
          {
            path: 'detail/:id',
            component: AdminCollectionListCoursesComponent,
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
