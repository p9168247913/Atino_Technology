import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  adminlogin = false
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.email = "";
    this.password = "";
  }

  login() {
    if (this.email === "admin@gmail.com" && this.password === "admin") {
      this.router.navigateByUrl('/adminDashboard');
      this.adminlogin = true
    } else if (this.email === "admin@gmail.com" && this.password !== "admin") {
      alert("Incorrect Password")
    } else if (this.email !== "admin@gmail.com" && this.password === "admin") {
      alert("Incorrect Email")
    } else if (this.email !== "admin@gmail.com" && this.password !== "admin") {
      alert("Incorrect Email & Password")
    }
  }
}
