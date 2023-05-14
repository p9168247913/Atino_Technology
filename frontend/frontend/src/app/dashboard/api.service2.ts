import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

token = localStorage.getItem("token") || ''

   apiUrl = `http://localhost:4500/contact`
    // Replace this URL with your API endpoint

  constructor(private http: HttpClient, private router: Router) { }

  // Method to get all posts from API
  getContacts(){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    this.router.navigateByUrl('/dashboard');
    return (this.http.get(this.apiUrl,{headers}));
  }

  deleteContact(userId: string) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });


    const url = `${this.apiUrl}/delete/${userId}`;
    console.log("id",url)
    return this.http.delete(url,{headers,responseType:"text"})
  }
}
