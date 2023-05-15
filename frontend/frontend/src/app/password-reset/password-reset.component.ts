import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {


  name: string = "";
  email: string = "";
  password: string = ""

  token = localStorage.getItem("token") || ''

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  register() {
    let bodyData =
    {
      "name": this.name,
      "email": this.email,
      "password": this.password,
    };
    const id = localStorage.getItem("loginId")
    console.log(id);

    const headers = new HttpHeaders({
      'Authorization': this.token
    }).set("Content-Type", 'application/json');

    this.http.post(`https://attinotechnology.onrender.com/user/update/${id}`, bodyData, { headers }).subscribe((resultData: any) => {
      console.log("admin", resultData);
      alert("User Updated Successfully")
      this.router.navigateByUrl('/dashboard');
    });
  }

  save() { this.register() }
}
