import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AppGuard } from './guards/app.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

// Disabled auth
// const routes: Routes = [
//   { path: '', component: HomeComponent, canActivate: [AppGuard] },
//   { path: 'home', component: HomeComponent, canActivate: [AppGuard] },
//   { path: 'about', component: AboutComponent, canActivate: [AppGuard] },
//   { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
//   { path: 'signup', component: SignupComponent , canActivate: [AuthGuard] },
//   { path: '**', redirectTo: '' }
// ];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
