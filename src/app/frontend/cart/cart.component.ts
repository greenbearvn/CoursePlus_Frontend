import { Component } from '@angular/core';
import { CartService } from 'src/app/services/frontend/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [
    './cart.component.css',
    '../css/icon.css',
    '../css/uikit.css',
    '../css/tailwin.css',
  ],
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  cartList: any;

  totalMoney: any = 0;

  ngOnInit() {
    this.cartService.getlistCart().subscribe((data) => {
      this.cartList = data.data;
      console.log(this.cartList);
    });

    this.getTotalMoney();
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

  getTotalMoney() {
    this.cartService.totalMoney().subscribe((data) => {
      this.totalMoney = data.data;
      console.log(this.totalMoney);
    });
  }
}
