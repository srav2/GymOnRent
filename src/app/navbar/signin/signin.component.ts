import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg:string=''

onTouch(){
  this.msg="Login Successfully"
}
onSign(){
  this.msg="fill the Details"
}
onCan(){
  this.msg="Cancel"
}


}
