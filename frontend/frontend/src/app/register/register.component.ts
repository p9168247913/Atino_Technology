import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor( private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  returnHome() {
    this.router.navigateByUrl('/adminDashboard')
  }

  register() {
    let bodyData =
    {
      "name": this.name,
      "email": this.email,
      "password": this.password,
    };
    this.http.post("https://attinotechnology.onrender.com/user/register", bodyData).subscribe((resultData: any) => {
      console.log("admin", resultData);
      alert("User Registered Successfully")
      this.router.navigateByUrl('/adminDashboard')
    },
      error => {
        alert("User Already Registered, Try Login")
      }

    );
  }

  save() {
    this.register();
  }

}