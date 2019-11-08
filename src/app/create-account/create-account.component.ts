import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: any = {};
  private customer: any;
  private message: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  onSubmit() {
    // parse the form data into a JSON we can submit to the database
    const customerString = '{\"first_name\": \"' + this.createAccountForm.first_name + '\",' +
                            '\"last_name\": \"' + this.createAccountForm.last_name + '\",' +
                            '\"email\": \"' + this.createAccountForm.email.toLowerCase() + '\",' +
                            '\"password\": \"' + this.createAccountForm.password + '\",' +
                            '\"address\": { \"street-number\": \"' + this.createAccountForm.street_number + '\",' +
                            '\"street_name\": \"' + this.createAccountForm.street_name + '\",' +
                            '\"city\": \"' + this.createAccountForm.city + '\",' +
                            '\"state\": \"' + this.createAccountForm.state + '\",' +
                            '\"zip\": \"' + this.createAccountForm.zip + '\"} }';

    this.customer = JSON.parse(customerString);

    // check to see if the customer has an account with that email

    this.customerService.getCustomers().subscribe(
      data => {
        if (JSON.stringify(data).includes(this.createAccountForm.email.toLowerCase())) {
          this.message = 'An account with that email already exists, please sign in.';
        } else {
          // TODO: post to customer repository
          this.message = 'Account successfully created! You may now sign in.';
        }
      }, err => {
        this.message = 'Whoops! Looks like there was an error in creating your account. Please try again later.';
        throwError(err);
      }
    );
  }
}
