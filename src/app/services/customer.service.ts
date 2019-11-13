import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get('/server/customers');
  }

  getCustomerByEmail(email: string) {
    return this.http.get('/server/customers/email/' + email);
  }

  createCustomer(customer: any) {
    const body = JSON.stringify(customer);
    return this.http.post('/server/customers', body, httpOptions);
  }
}
