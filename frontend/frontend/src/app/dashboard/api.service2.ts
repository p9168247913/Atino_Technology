import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token = localStorage.getItem("token") || ''

  apiUrl = `https://attinotechnology.onrender.com/contact`

  constructor(private http: HttpClient, private router: Router) { }

  getContacts() {
    const headers = new HttpHeaders({
      'Authorization': this.token
    }).set('Cache-Control', 'no-cache');
    this.router.navigateByUrl('/dashboard');
    return (this.http.get(this.apiUrl, { headers }));
  }

  deleteContact(userId: string) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    const url = `${this.apiUrl}/delete/${userId}`;
    console.log("id", url)
    return this.http.delete(url, { headers, responseType: "text" })
  }
}
