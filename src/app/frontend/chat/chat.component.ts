import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/frontend/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  roomId: any;
  messageText: any;
  messageArray: any[] = []; // Initialize messageArray as an empty array
  phone: any;
  roomJoined: any;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.roomId = prompt('Nhap phong');
    if (this.roomId) {
      this.join(this.roomId);
      this.roomJoined = true;
      this.chatService.receiveMessage().subscribe((data: any) => {
        this.messageArray.push(data);
      });
      console.log(this.messageArray);
    }
  }

  join(roomId: any): void {
    this.chatService.joinRoom({ room: roomId });
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      room: this.roomId,
      message: this.messageText,
    });
  }
}