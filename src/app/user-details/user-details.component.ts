import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  username="";
  details=[];
  status='';
  constructor() { 
  }

  ngOnInit(): void {
  }
  clearUsername(){
    this.username="";
  }
  addDetails(){
    this.status=Math.random()>0.5?'online':'offline';
    this.details.push(this.status);
  }
}
