import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   apiUrl = 'http://localhost:4500/user'; // Replace this URL with your API endpoint

  //  token = localStorage.getItem("token")||""

  constructor(private http: HttpClient) { }

  // Method to get all posts from API
  getPosts(){
    return this.http.get(this.apiUrl);
  }

 
  deleteUser(userId: string) {
    
    const url = `${this.apiUrl}/delete/${userId}`;

    return this.http.delete(url, {responseType:"text"})
  }

}


