import { Address } from './address.model';

export interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  addresses: [Address];
}
