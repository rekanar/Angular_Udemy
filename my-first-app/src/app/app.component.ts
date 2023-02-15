import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'TestServer', content:'Just a test!'}];
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  onBluePrintAdded(bluePrintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
   }

  // servers = [];
  // name = "Max";
  // showSecret = false;
  // log = [];

  // onToggleDetails() {
  //   this.showSecret = !this.showSecret;
  //   // this.log.push(this.log.length + 1);
  //   this.log.push(new Date());
  // }
//   onAddServer() {
//     this.servers.push('Another Server');
//   }
//   onRemoteServer(id: number)
//   {
//
//     const position = id + 1;
//     this.servers.splice(position, 1);
//    }


}
