import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
    this.protectAuth();
  }

  protectAuth = () => {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/']);
      return;
    }
  }

  registerUser = () => {
    const body = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };
    this.http.post('http://localhost:5100/api/auth/register', body).subscribe((res: any) => {
      alert('Successfully Register');
      this.router.navigate(['/']);
    },
    err => {
      alert('Invalid Credentials');
    });
  }
}
