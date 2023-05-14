import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  returnAdmin() {
    this.router.navigateByUrl('/adminLogin')
  }
  returnHome() {
    this.router.navigateByUrl('/')
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };

    this.http.post("http://localhost:4500/user/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.token) {
        localStorage.setItem("objectId", JSON.stringify(resultData.userId))
        localStorage.setItem('token', resultData.token);
        this.router.navigateByUrl('/dashboard');
      }
      else {
        alert("Incorrect Email or Password");
        // console.log("Errror login");
        this.router.navigateByUrl('/Login');
      }
    });
  }

}