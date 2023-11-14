import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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

import { WatchingComponent } from './frontend/watching/watching.component';
import { RegisterComponent } from './frontend/register/register.component';
import { LoginComponent } from './frontend/login/login.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularToastifyModule
    
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
