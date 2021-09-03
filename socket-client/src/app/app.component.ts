import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'socket-client';

  firstName!: string;
  lastName!: string;

  players: any[] = [];

  ngOnInit(): void {
    this.socket.connect();
    this.socket.fromEvent('playerAdded').subscribe(({player}: any) => {this.players.push(player); console.log(this.players)});
    this.socket.fromEvent('playerListRetrieved').subscribe(({players}: any) => {this.players = players});
  }

  constructor(private socket: Socket) {}

  addPlayer() {
    this.socket.emit('createPlayer',{firstName: this.firstName, lastName: this.lastName})
  }

}
