import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;

  private url = 'http://localhost:8000';

  constructor() {
    this.socket = io(this.url);
  }

  joinRoom(data: any) {
    this.socket.emit('join_room', data);
  }

  sendMessage(data: any) {
    this.socket.emit('send_message', data);
  }

  receiveMessage(): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on('receive_message', (data: any) => observer.next(data));
    });
  }
}
