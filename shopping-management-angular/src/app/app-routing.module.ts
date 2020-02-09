import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { AuthenticationService } from './service/authentication.service';


const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'login/signin',component:SigninComponent},
  {path: 'login/signup',component:SignupComponent},
  {path:'viewFiles',component:UsersComponent,canActivate:[AuthenticationService]},
  {path:'upload',component:UploadFileComponent,canActivate:[AuthenticationService]},
  {path:'',component:UsersComponent,canActivate:[AuthenticationService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
