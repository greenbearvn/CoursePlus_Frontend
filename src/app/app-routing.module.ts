import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { QuizComponent } from './frontend/quiz/quiz.component';
import { DetailComponent } from './frontend/detail/detail.component';
import { CartComponent } from './frontend/cart/cart.component';
import { PaymentComponent } from './frontend/payment/payment.component';
import { SuccessComponent } from './frontend/success/success.component';
import { WatchingComponent } from './frontend/watching/watching.component';
import { RegisterComponent } from './frontend/register/register.component';
import { LoginComponent } from './frontend/login/login.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
