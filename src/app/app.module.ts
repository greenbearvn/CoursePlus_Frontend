import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/home/home.component';
import { SidebarComponent } from './frontend/layout/sidebar/sidebar.component';
import { FooterComponent } from './frontend/layout/footer/footer.component';
import { HeaderComponent } from './frontend/layout/header/header.component';
import { QuizComponent } from './frontend/quiz/quiz.component';
import { DetailComponent } from './frontend/detail/detail.component';
import { CartComponent } from './frontend/cart/cart.component';
import { PaymentComponent } from './frontend/payment/payment.component';
import { SuccessComponent } from './frontend/success/success.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { NgxPaginationModule } from 'ngx-pagination';

import { WatchingComponent } from './frontend/watching/watching.component';
import { RegisterComponent } from './frontend/register/register.component';
import { LoginComponent } from './frontend/login/login.component';
import { ChatComponent } from './frontend/chat/chat.component';
import { ProfileComponent } from './frontend/profile/profile.component';
import { BlogComponent } from './frontend/blog/blog.component';

import { AdminComponent } from './admin/admin.component';
import { KhoahocComponent } from './admin/components/khoahoc/khoahoc.component';
import { HoadonComponent } from './admin/components/hoadon/hoadon.component';

import { FrontendRoutingModule } from './frontend/frontend-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { FrontendComponent } from './frontend/frontend.component';

import { HeaderAdminComponent } from './admin/components/layout/header/header.component';
import { SidebarAdminComponent } from './admin/components/layout/sidebar/sidebar.component';
import { FooterAdminComponent } from './admin/components/layout/footer/footer.component';
import { IndexCourseComponent } from './admin/components/khoahoc/index/index.component';
import { TableCourseComponent } from './admin/components/khoahoc/table/table.component';
import { CreateCourseComponent } from './admin/components/khoahoc/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BilltableComponent } from './admin/components/hoadon/billtable/billtable.component';
import { FormbillComponent } from './admin/components/hoadon/formbill/formbill.component';
import { SearchPipe } from './admin/components/pipe/search.pipe';
import { CompletedComponent } from './frontend/quiz/completed/completed.component';
import { CategoriesComponent } from './frontend/categories/categories.component';
import { BlogdetailComponent } from './frontend/blogdetail/blogdetail.component';
import { CollectionComponent } from './frontend/collection/collection.component';
import { BaihocComponent } from './admin/components/baihoc/baihoc.component';
import { NguoidungAdminComponent } from './admin/components/nguoidung-admin/nguoidung-admin.component';
import { NguoiDungAdminListComponent } from './admin/components/nguoidung-admin/list/list.component';
import { ModalnguoidungadminComponent } from './admin/components/nguoidung-admin/modalnguoidungadmin/modalnguoidungadmin.component';
import { KhoahocdetailComponent } from './admin/components/khoahoc/khoahocdetail/khoahocdetail.component';
import { LessionlistComponent } from './admin/components/baihoc/lessionlist/lessionlist.component';
import { LessionmodalComponent } from './admin/components/baihoc/lessionmodal/lessionmodal.component';
import { AdminVideoComponent } from './admin/components/admin-video/admin-video.component';
import { VideoModalComponent } from './admin/components/admin-video/video-modal/video-modal.component';
import { AdminDanhmucComponent } from './admin/components/admin-danhmuc/admin-danhmuc.component';
import { DanhmucListComponent } from './admin/components/admin-danhmuc/danhmuc-list/danhmuc-list.component';
import { DanhmucModalComponent } from './admin/components/admin-danhmuc/danhmuc-modal/danhmuc-modal.component';
import { DanhmucDetailComponent } from './admin/components/admin-danhmuc/danhmuc-detail/danhmuc-detail.component';
import { AdminDanhmucDetailComponent } from './admin/components/admin-danhmuc-detail/admin-danhmuc-detail.component';
import { AdminDanhmucDetailListComponent } from './admin/components/admin-danhmuc-detail/admin-danhmuc-detail-list/admin-danhmuc-detail-list.component';
import { AdminDanhmucDetailModalComponent } from './admin/components/admin-danhmuc-detail/admin-danhmuc-detail-modal/admin-danhmuc-detail-modal.component';
import { AdminConventionComponent } from './admin/components/admin-convention/admin-convention.component';
import { AdminConventionListComponent } from './admin/components/admin-convention/admin-convention-list/admin-convention-list.component';
import { AdminConventionCreateComponent } from './admin/components/admin-convention/admin-convention-create/admin-convention-create.component';
import { AdminTestComponent } from './admin/components/admin-test/admin-test.component';
import { AdminTestListComponent } from './admin/components/admin-test/admin-test-list/admin-test-list.component';
import { AdminTestToolComponent } from './admin/components/admin-test/admin-test-tool/admin-test-tool.component';
import { AdminQuestionComponent } from './admin/components/admin-question/admin-question.component';
import { AdminQuestionToolsComponent } from './admin/components/admin-question/admin-question-tools/admin-question-tools.component';
import { AdminChoiceComponent } from './admin/components/admin-choice/admin-choice.component';
import { AdminChoiceToolsComponent } from './admin/components/admin-choice/admin-choice-tools/admin-choice-tools.component';
import { AdminProfileComponent } from './admin/components/admin-profile/admin-profile.component';
import { AdminProfileListComponent } from './admin/components/admin-profile/admin-profile-list/admin-profile-list.component';
import { AdminProfileModalComponent } from './admin/components/admin-profile/admin-profile-modal/admin-profile-modal.component';
import { AdminProfileListUsersComponent } from './admin/components/admin-profile/admin-profile-list-users/admin-profile-list-users.component';
import { AdminBlogComponent } from './admin/components/admin-blog/admin-blog.component';
import { AdminBlogListComponent } from './admin/components/admin-blog/admin-blog-list/admin-blog-list.component';
import { AdminBlogModalComponent } from './admin/components/admin-blog/admin-blog-modal/admin-blog-modal.component';
import { AdminLevelComponent } from './admin/components/admin-level/admin-level.component';
import { AdminLevelListComponent } from './admin/components/admin-level/admin-level-list/admin-level-list.component';
import { AdminLevelModalComponent } from './admin/components/admin-level/admin-level-modal/admin-level-modal.component';
import { AdminCommentComponent } from './admin/components/admin-comment/admin-comment.component';
import { AdminCommentListComponent } from './admin/components/admin-comment/admin-comment-list/admin-comment-list.component';
import { AdminCommentModalComponent } from './admin/components/admin-comment/admin-comment-modal/admin-comment-modal.component';
import { AdminTestVideoListComponent } from './admin/components/admin-test/admin-test-video-list/admin-test-video-list.component';
import { AdminTestedComponent } from './admin/components/admin-tested/admin-tested.component';
import { AdminTestedListComponent } from './admin/components/admin-tested/admin-tested-list/admin-tested-list.component';
import { AdminTestedModalComponent } from './admin/components/admin-tested/admin-tested-modal/admin-tested-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    QuizComponent,
    DetailComponent,
    CartComponent,
    PaymentComponent,
    SuccessComponent,
    WatchingComponent,
    RegisterComponent,
    LoginComponent,
    FrontendComponent,
    ChatComponent,
    ProfileComponent,
    CompletedComponent,
    CategoriesComponent,

    BlogComponent,
    BlogdetailComponent,

    AdminComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    FooterAdminComponent,

    ///khoahoc
    KhoahocComponent,
    IndexCourseComponent,
    TableCourseComponent,
    CreateCourseComponent,

    //hoadon
    HoadonComponent,
    BilltableComponent,
    FormbillComponent,
    SearchPipe,
    CollectionComponent,
    BaihocComponent,

    ///nguoidung
    NguoidungAdminComponent,
    NguoiDungAdminListComponent,
    ModalnguoidungadminComponent,
    KhoahocdetailComponent,
    LessionlistComponent,
    LessionmodalComponent,
    AdminVideoComponent,
    VideoModalComponent,
    AdminDanhmucComponent,
    DanhmucListComponent,
    DanhmucModalComponent,
    DanhmucDetailComponent,
    AdminDanhmucDetailComponent,
    AdminDanhmucDetailListComponent,
    AdminDanhmucDetailModalComponent,
    AdminConventionComponent,
    AdminConventionListComponent,
    AdminConventionCreateComponent,
    AdminTestComponent,
    AdminTestListComponent,
    AdminTestToolComponent,
    AdminQuestionComponent,
    AdminQuestionToolsComponent,
    AdminChoiceComponent,
    AdminChoiceToolsComponent,
    AdminProfileComponent,
    AdminProfileListComponent,
    AdminProfileModalComponent,
    AdminProfileListUsersComponent,
    AdminBlogComponent,
    AdminBlogListComponent,
    AdminBlogModalComponent,
    AdminLevelComponent,
    AdminLevelListComponent,
    AdminLevelModalComponent,
    AdminCommentComponent,
    AdminCommentListComponent,
    AdminCommentModalComponent,
    AdminTestVideoListComponent,
    AdminTestedComponent,
    AdminTestedListComponent,
    AdminTestedModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularToastifyModule,
    FrontendRoutingModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule,
    NgxPaginationModule,
    CKEditorModule,
    FontAwesomeModule,
  ],
  providers: [ToastService, DatePipe, CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
