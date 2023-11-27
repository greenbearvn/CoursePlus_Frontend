import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/frontend/chat/chat.service';
import { nguoidung } from 'src/app/Models/nguoidung';

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
    Quyen: false,
  };

  sendData: any = {
    room: 0,
    user: this.user.TenNguoiDung,
    message: '',
  };

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getUser() {
    this.chatService.getUser().subscribe((data: any) => {
      this.user = data.user;
      this.sendData.user = this.user.TenNguoiDung;
      console.log(this.user)
    });
  }

  ngOnInit() {
    

    this.getUser();

    this.getConvention();
  }

  getMessages() {
    this.chatService.receiveMessage().subscribe((data: any) => {
      this.messageArray.push(data);
      console.log(this.messageArray);
    });
  }

  join(roomId: any): void {
    this.chatService.joinRoom({ room: roomId });
  }

  sendMessage(): void {
    this.sendData.room = this.roomId;
    this.chatService.sendMessage(this.sendData);
    this.sendData.message = '';
    console.log(this.messageArray)
    
  }

  getConvention() {
    this.chatService.getListConvenOfUser().subscribe((data: any) => {
      this.conventions = data.data;
      console.log(this.conventions);
    });
  }

  showConvention(room: number) {
    // this.room = room;

    this.roomId = room;
    if (this.roomId) {
      this.join(this.roomId);
      this.roomJoined = true;
      this.getMessages();
    }
  }
}
