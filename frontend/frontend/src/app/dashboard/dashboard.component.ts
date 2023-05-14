import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  users: any = []

  constructor(private router: Router, private apiService: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.apiService.getContacts().subscribe((data: any)=>{
     
      console.log("contactData",data);
      this.users = data;
    })    
  }

  addContact() {
    this.router.navigateByUrl('/addContact');
  }

  userLogout(){

    localStorage.removeItem("token")


    this.router.navigateByUrl('/Login');
  }

  onContactDelete(userId: string) {
    // if (!userId) {
    //   console.error('User ID is required');
    //   return;
    // }
    this.apiService.deleteContact(userId).subscribe(
      (response:string) => {
        

        // remove the deleted user from the list
        this.users = this.users.filter((user:any) => user._id !== userId);
        console.log('Contact deleted');
      },
      (error:any) => console.error('Error deleting user:', error)
    );
  }

  onEditContact(userId: string){
    localStorage.setItem("contactId",userId)
    this.router.navigateByUrl('/editContact');
  }

}
export class AppComponent {
  constructor(private router: Router) {
    window.onbeforeunload = () => {
      this.router.navigate(['/Login']);
    };
  }
}