import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId :Number =10;
  serverStatus :String = "online";
  isDsiabled=false;
  serverMessage="server is not Created"
  serverName="Test Server";
  serverCreated=false;
  servers=['testServer','TestServer 2'];
  showSecrets=false;
  log=[]
  
  checkServerStatus(){
    return this.serverStatus;
  }
  constructor() { 
    setTimeout(()=>{
      this.isDsiabled=true;
    },2000)
    this.serverStatus=Math.random() >0.5 ? 'online':'Offline';
    
  }

  ngOnInit(): void {
  }
  onChangeServer(){
    this.servers.push(this.serverName);
    this.serverCreated=true;
    this.serverMessage="Server Created";
  }
  onUpdateServerName(event : Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  getColor(){
    return this.serverStatus == "online"? "green": "red";
  }
  onToggle(){
    this.showSecrets=!this.showSecrets;
    
    this.serverStatus=Math.random()>0.5?'online':'offline';
    this.log.push(this.serverStatus)

  }

}
