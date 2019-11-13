import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import { Customer } from '../services/customer.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  model: any = {};
  private message: string;

  ngOnInit() {
  }

  onSubmit() {
    this.customerService.getCustomerByEmail(this.model.email).subscribe(data => {
      const customer: any = data;
      if (customer.data[0].password === this.model.password) {
        this.message = 'You have signed in!';
      } else {
        this.message = 'Your password is incorrect, please try again.';
      }
    }, err => {
      this.message = 'Sorry, no account with that email exists. Please create an account!';
    });
  }
}
