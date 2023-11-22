import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/frontend/chat/chat.service';
import { nguoidung } from 'src/app/Models/nguoidung';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  roomId: any;
  messageArray: any[] = []; // Initialize messageArray as an empty array
  phone: any;
  roomJoined: any;
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

  constructor(private chatService: ChatService) {}

  getUser() {
    this.chatService.getUser().subscribe((data: any) => {
      this.user = data.user;
      this.sendData.user = this.user.TenNguoiDung;
    });
  }

  ngOnInit() {
    this.getUser();
    this.roomId = prompt('Nhap phong');
    if (this.roomId) {
      this.join(this.roomId);
      this.roomJoined = true;
      this.getMessages();
    }
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
    this.sendData.message = ''
  }
}
