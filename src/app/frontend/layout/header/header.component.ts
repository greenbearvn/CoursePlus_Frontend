import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/frontend/cart/cart.service';
import { AccountService } from 'src/app/services/frontend/account/account.service';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Models/frontend/Profile';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css','../../css/style.css'
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

  user: any = {
    userId : 0,
    userName:"",
    email:"",
    role:''
  };
  
  profile:Profile ={
    profileId:0,
    profileName:"",
    email:"",
    phoneNumber:"",
    avatar:"",
    desciption:"",
    cateId:0,
    isTeacher:0
  };

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
      this.cartList = Object.values(data) ;
      console.log(this.cartList);
    });
  }

  getTotalMoney() {
    this.cartService.totalMoney().subscribe((data) => {
      this.totalMoney = data;
      // this.countItem = data.count;
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

  deleteAll() {
    this.cartService.deleteAll().subscribe((data) => {
      this.status = data;
      if (this.status == 1) {
       
      }
    });
    
  }

  getUser() {
    this.userSer.getUser().subscribe((data) => {
      this.user = data.user_current;

      console.log(this.user)
      this.getProfile();
    });
  }

  getProfile() {
    this.userSer.getProfile(this.user.userId).subscribe((data) => {
      this.profile = data;
      console.log(this.profile);
    });
  }

  logout() {

    const data ="";
    this.userSer.logout(data).subscribe((data) => {
 
      window.location.href = "/"
    });
  }

 

  deleteButton(){

    Swal.fire({
      title: 'Bạn có chắc không?',
      text: 'Bạn muốn đăng xuất tài khoản của mình!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi đăng xuất!',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        this.logout();
      }
    });
  }
}
