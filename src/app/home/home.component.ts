import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onLogin(){
    console.log('Form -> ', this.loginForm.value);
  }

}
