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

  isLoggedIn: boolean=false

  constructor(private router: Router, private http: HttpClient) {
    this.email = "";
    this.password = "";
  }

  home(){
    this.router.navigateByUrl("");
  }

  login() {
    if (this.email === "admin@gmail.com" && this.password === "admin") {
      this.router.navigateByUrl('/adminDashboard');
      this.isLoggedIn=true
      localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn))
    } else if (this.email === "admin@gmail.com" && this.password !== "admin") {
      alert("Incorrect Password")
    } else if (this.email !== "admin@gmail.com" && this.password === "admin") {
      alert("Incorrect Email")
    } else if (this.email !== "admin@gmail.com" && this.password !== "admin") {
      alert("Incorrect Email & Password")
    }
  }
}
