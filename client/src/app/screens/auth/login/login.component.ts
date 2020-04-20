import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
  }

  loginUser = () => {
    console.log(this.loginForm.value);
  }

}
