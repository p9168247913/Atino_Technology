import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://attinotechnology.onrender.com/user';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrl);
  }

  deleteUser(userId: string) {
    const url = `${this.apiUrl}/delete/${userId}`;
    return this.http.delete(url, { responseType: "text" })
  }

}


