import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {SignInComponent} from './sign-in/sign-in.component';


const routes: Routes = [{path: 'sign-in', component: SignInComponent},
                        {path: 'create-customer', component: CreateCustomerComponent},
                        {path: '', redirectTo: 'sign-in', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
