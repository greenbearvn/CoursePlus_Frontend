import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/frontend/chat/chat.service';
import { nguoidung } from 'src/app/Models/nguoidung';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: [
    './chat.component.css',
    './assets/css/style.css',
    './assets/css/tailwind.css',
  ],
})
export class ChatComponent implements OnInit {
  roomId: any;
  messageArray: any[] = []; // Initialize messageArray as an empty array
  phone: any;
  roomJoined: any;
  conventions: any;
  status: any;

  room: any;

  user: nguoidung = {
    MaNguoiDung: 0,
    TenNguoiDung: '',
    MatKhau: '',
    Email: '',
    Quyen: '',
  };

  sendData: any = {
    MaHoiThoai: 0,
    MaNguoiDung: this.user.MaNguoiDung,
    TenNguoiDung: this.user.TenNguoiDung,
    NoiDung: '',
    ThoiGian: new Date(),
  };

  messageSubscription: Subscription = new Subscription();

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getUser() {
    this.chatService.getUser().subscribe((data: any) => {
      this.user = data.user;
      this.sendData.MaNguoiDung = this.user.MaNguoiDung;
      this.sendData.TenNguoiDung = this.user.TenNguoiDung;
    });
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    if (id) {
      this.showConvention(id);
    }

    this.getUser();

    this.getConvention();
  }

  getMessages() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }

    this.messageSubscription = this.chatService
      .receiveMessage()
      .subscribe((data: any) => {
        if (data.MaHoiThoai === this.roomId) {
          this.messageArray.push(data);
        }
      });
  }

  join(roomId: any): void {
    this.chatService.joinRoom({ MaHoiThoai: roomId });
  }

  sendMessage(): void {
    this.sendData.MaHoiThoai = this.roomId;
    this.chatService.sendMessage(this.sendData);
    this.saveDataMessage();

    this.sendData.NoiDung = '';
    console.log(this.messageArray);
  }

  getConvention() {
    this.chatService.getListConvenOfUser().subscribe((data: any) => {
      this.conventions = data.data;
      console.log(this.conventions);
    });
  }

  showConvention(room: number) {
    if (this.roomId !== room) {
      this.messageArray = [];
      this.roomId = room;
      this.join(this.roomId);
      this.roomJoined = true;
      this.getMessages();
      this.getMessagesInConv();
    }
  }

  getMessagesInConv() {
    if (this.roomId !== 0) {
      this.chatService.getMessagesInConv(this.roomId).subscribe((data: any) => {
        this.messageArray = data.data;
        console.log(data.data);
      });
    }
  }

  saveDataMessage() {
    if (this.roomId !== 0) {
      this.chatService.createMessage(this.sendData).subscribe((data: any) => {
        this.status = data.status;
        console.log(this.status);
      });
    }
  }

  
}
