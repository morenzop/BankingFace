import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  model: any;

  ngOnInit() {
  }

  onSubmit() {
    this.customerService.getCustomers().subscribe(data => {}, err => {});
  }
}
