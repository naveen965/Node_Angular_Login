import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
  }

  loginUser = () => {
    console.log(this.loginForm.value);
    const body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.http.post('http://localhost:6100/api/auth/login', body).subscribe((res: any) => {
      console.log(res);
    },
    err => {
      alert('Invalid Credentials');
    });
  }

}
