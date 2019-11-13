import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createAccountForm: any = {};
  private customer: any;
  private message: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  onSubmit() {
    // parse the form data into a JSON we can submit to the database
    this.customer = {
      first_name: this.createAccountForm.first_name,
      last_name: this.createAccountForm.last_name,
      email: this.createAccountForm.email.toLowerCase(),
      password: this.createAccountForm.password,
      address: [{
        street_number: this.createAccountForm.street_number,
        street_name: this.createAccountForm.street_name,
        city: this.createAccountForm.city,
        state: this.createAccountForm.state,
        zip: this.createAccountForm.zip
      }]
    };

    // check to see if the customer has an account with that email

    this.customerService.getCustomers().subscribe(
      data => {
        if (JSON.stringify(data).includes(this.createAccountForm.email.toLowerCase())) {
          this.message = 'An account with that email already exists, please sign in.';
        } else {

          // post the customer to the server

          this.customerService.createCustomer(this.customer).subscribe(
            res => {
              this.message = 'Account successfully created! You may now sign in.';
            }, err => {
              this.message = 'Whoops! Looks like there was an error in creating your account. Please try again later.';
              throwError(err);
            }
          );
        }
      }, err => {
        this.message = 'Whoops! Looks like there was an error in creating your account. Please try again later.';
        throwError(err);
      }
    );
  }
}
