import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/services/frontend/detail/detail.service';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [
    './detail.component.css',
    './css/icon.css',
    './css/uikit.css',
    './css/tailwin.css',
  ],
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    private cartService: CartService
  ) {}

  detail: any;
  isAddCart: any = false;
  lessions:any;
  videos:any;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.detailService.getDetail(id).subscribe((data) => {
      this.detail = data.data;
      console.log(this.detail);
    });

    this.detailService.getLessions(id).subscribe((data) => {
      this.lessions = data.data;
      console.log(this.lessions);
    });

    this.detailService.getVideos(id).subscribe((data) => {
      this.videos = data.data;
      console.log(this.videos);
    });
  }



  addCart(cart: Cart) {
    this.cartService.addCart(cart).subscribe((data) => {
      this.isAddCart = data.data;
      alert(this.isAddCart);
    });
  }
}
