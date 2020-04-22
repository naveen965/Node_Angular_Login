import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  jwt = new JwtHelperService();

  user: any;

  ngOnInit() {
    this.JwtValidate();
  }

  JwtValidate = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    const decode = this.jwt.decodeToken(token);
    this.user = decode;
    const isExpired = this.jwt.isTokenExpired(token);

    if (!isExpired) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }

  logOut = () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
