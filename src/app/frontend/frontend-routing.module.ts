import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { WatchingComponent } from './watching/watching.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { CollectionComponent } from './collection/collection.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'video/test/:id',
        component: QuizComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'course/watching/detail/:id/:mavideo',
        component: WatchingComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'payment',
        component: PaymentComponent,
      },
      {
        path: 'payment/success',
        component: SuccessComponent,
      },
      {
        path: 'account/register',
        component: RegisterComponent,
      },
      {
        path: 'account/login',
        component: LoginComponent,
      },
      {
        path: 'chat',
        component: ChatComponent,
      },
      {
        path: 'chat/:id',
        component: ChatComponent,
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'blog/detail/:id',
        component: BlogdetailComponent,
      },
      {
        path: 'collection',
        component: CollectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
