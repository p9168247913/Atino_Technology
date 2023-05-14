import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {
  name: string = "";
  email: string = "";
  number: string = ""

  token = localStorage.getItem("token") || ''

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  register() {
    let bodyData =
    {
      "name": this.name,
      "email": this.email,
      "number": this.number,
    };
    const id = localStorage.getItem("contactId")
    console.log(id);

    const headers = new HttpHeaders({
      'Authorization': this.token
    }).set("Content-Type", 'application/json');

    this.http.post(`http://localhost:4500/contact/update/${id}`, bodyData, { headers }).subscribe((resultData: any) => {
      console.log("admin", resultData);
      alert("User Updated Successfully")
      this.router.navigateByUrl('/dashboard');
    });
  }
  save() { this.register() }

}
