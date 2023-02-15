import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{
  serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
newServerName = '';
newServerContent = '';
  constructor() { }
  ngOnInit() { }


  onAddServer() {
    this.serverCreated.emit();
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
  }

  onAddBluePrint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
