import { IpfinderComponent } from './ipfinder/ipfinder.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'registration', component:RegistrationComponent },
  {path:'welcome',component:IpfinderComponent},
  {path:'', redirectTo: '/login',pathMatch:'full'},
  {path: '**', component:NotFoundComponent }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
