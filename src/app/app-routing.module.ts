import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccountComponent} from './create-account/create-account.component';
import {SignInComponent} from './sign-in/sign-in.component';


const routes: Routes = [{path: 'sign-in', component: SignInComponent},
                        {path: 'create-account', component: CreateAccountComponent},
                        {path: '', redirectTo: 'sign-in', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
