import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', redirectTo: 'Signin', pathMatch: 'full' },
      { path: '**', redirectTo: 'Signin', pathMatch: 'full' },
      { path: '', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'home', component: HomeComponent },
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
