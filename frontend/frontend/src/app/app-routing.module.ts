import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AuthGuard } from './authGaurd/auth';
import { EdituserComponent } from './edituser/edituser.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent
  },
  {
    path: 'adminDashboard',
    component : AdminDashboardComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {

    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'addContact',
    component: AddcontactComponent,
  },
  {
    path: 'editUser',
    component: EdituserComponent,
  },
  {
    path: 'editContact',
    component: EditContactComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
