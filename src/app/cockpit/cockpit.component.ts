import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  name='chandrashekhar';
  @Output() serverCreated =new EventEmitter<{serverName: string,serverContent:string}>();
  @Output() blueprintCreated= new EventEmitter<{serverName: string,serverContent:string}>();
  @Output() getName=new EventEmitter<string>();
  @ViewChild('serverContentInput',{static:true}) serverContentInput:ElementRef;
  newServerName='';
  newServerContent='';

  constructor() {
    console.log("constuksdks")
  }
  

  ngOnInit(): void {
    this.getName.emit(this.name)

  }
  onAddServer(nameInput){
    this.serverCreated.emit({serverName: nameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }
  onAddBlueprint(nameInput){
    this.blueprintCreated.emit({serverName: nameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }
}
