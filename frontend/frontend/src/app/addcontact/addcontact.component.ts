import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent {
  name: string ="";
  email: string ="";
  number: string ="";

  token=localStorage.getItem("token")||''

  constructor(private router: Router,private http: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void{}

  addContact()
  {
    let bodyData = 
    {
      "name" : this.name,
      "email" : this.email,
      "number" : this.number,
    };

    const headers = new HttpHeaders({
      'Authorization': this.token
    }).set("Content-Type", 'application/json')
    
    this.http.post("http://localhost:4500/contact/add",bodyData, {headers}).subscribe((resultData: any)=>
    {
      alert("Contact Added Successfully")
      console.log("contact",resultData);
      this.router.navigateByUrl('/dashboard');
    })
  }

  saveContact()
  {
    this.addContact();
  
  }
}
