import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
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
import {NgxPaginationModule} from 'ngx-pagination';

import { WatchingComponent } from './frontend/watching/watching.component';
import { RegisterComponent } from './frontend/register/register.component';
import { LoginComponent } from './frontend/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { KhoahocComponent } from './admin/components/khoahoc/khoahoc.component';

import { FrontendRoutingModule } from './frontend/frontend-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { FrontendComponent } from './frontend/frontend.component';

import { HeaderAdminComponent } from './admin/components/layout/header/header.component';
import { SidebarAdminComponent } from './admin/components/layout/sidebar/sidebar.component';
import { IndexCourseComponent } from './admin/components/khoahoc/index/index.component';
import { TableCourseComponent } from './admin/components/khoahoc/table/table.component';
import { CreateCourseComponent } from './admin/components/khoahoc/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { ChatComponent } from './frontend/chat/chat.component';


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
    

    AdminComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,

    ///khoahoc
    KhoahocComponent,
    IndexCourseComponent,
    TableCourseComponent,
    CreateCourseComponent,
    ChatComponent
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
    CKEditorModule
  ],
  providers: [ToastService,DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
