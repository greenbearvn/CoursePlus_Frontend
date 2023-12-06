import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/frontend/cart/cart.service';

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

  cartList: any;

  totalMoney: any = 0;
  countItem: any = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getlistCart().subscribe((data) => {
      this.cartList = data.data;
      console.log(this.cartList);
    });

    this.getTotalMoney();
  }

  getTotalMoney() {
    this.cartService.totalMoney().subscribe((data) => {
      this.totalMoney = data.data;
      this.countItem = data.count;
    });
  }

  deleteItem(id: any) {
    this.cartService.deleteItem(id).subscribe((data) => {
      this.cartList = data.data;
      if (this.cartList === false) {
        alert('Khong co san pham');
      }
      console.log(this.cartList);
    });
    this.getTotalMoney();
  }
}
