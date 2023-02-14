import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server1', 'Test Server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(){
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Serverr was created! Name is: ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServer(event: Event)  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
