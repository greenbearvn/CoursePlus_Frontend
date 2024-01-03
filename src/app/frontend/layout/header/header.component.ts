import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class HeaderComponent {
  faCartShopping: any = faCartShopping;
  faUser: any = faUser;
  faMessage: any = faMessage;

  cartList: any;

  status: any;

  totalMoney: any = 0;
  countItem: any = 0;

  user: any;

  statusLogin: any;

  constructor(
    private cartService: CartService,
    private userSer: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getListCart();
    this.getTotalMoney();
    this.getUser();
  }

  reloadListCart() {
    this.getListCart();
    this.getTotalMoney();
  }

  getListCart() {
    this.cartService.getlistCart().subscribe((data) => {
      this.cartList = data.data;
      console.log(this.cartList);
    });
  }

  getTotalMoney() {
    this.cartService.totalMoney().subscribe((data) => {
      this.totalMoney = data.data;
      this.countItem = data.count;
    });
  }

  deleteItem(id: any) {
    this.cartService.deleteItem(id).subscribe((data) => {
      this.status = data.data;
      if (this.status == true) {
        this.getListCart();
        this.getTotalMoney();
      }
    });
    this.getTotalMoney();
  }

  getUser() {
    this.userSer.getUser().subscribe((data) => {
      this.user = data.profile;
      this.statusLogin = data.status;
      console.log(this.user);
    });
  }

  logout() {
    this.userSer.logout().subscribe((data) => {
      this.statusLogin = data.status;
      this.navigateToHome();
    });
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
}
