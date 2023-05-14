import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { user } from 'src/model/userModel';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  users:any= []

  constructor(private router: Router, private apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.apiService.getPosts().subscribe((data: any) => {
      console.log("userData",data);
      this.users = data;
    },
    error => console.error('Error loading users:', error))
  }

  addUser() {
    this.router.navigateByUrl('/register');
  }

  userLogin(){
    this.router.navigateByUrl('/Login');
  
  }

  userAdminLogin(email:string) {
   
   
    let bodyData = {
      email: email,
    };

        this.http.post("http://localhost:4500/user/loginadmin", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);

        if (resultData.token) 
        {
          localStorage.setItem("objectId",JSON.stringify(resultData.userId))
           localStorage.setItem('token', resultData.token);
           this.router.navigateByUrl('/dashboard');
    

        } 
        else
         {
          alert("Incorrect Email ");
          // console.log("Errror login");
          this.router.navigateByUrl('/adminDashboard');
        }
      });
    }

 

  onDeleteUser(userId: string) {
    // if (!userId) {
    //   console.error('User ID is required');
    //   return;
    // }

    this.apiService.deleteUser(userId).subscribe(
      (response:string) => {
        
        // remove the deleted user from the list
        this.users = this.users.filter((user:any) => user._id !== userId);
        console.log('User deleted:', response);
      },
      (error:any) => console.error('Error deleting user:', error)
    );
  }
  onEditUser(userId: string) {
    // if (!userId) {
    //   console.error('User ID is required');
    //   return;
    // }
    localStorage.setItem("userId",userId)
    this.router.navigateByUrl('/editUser');
  }
}
