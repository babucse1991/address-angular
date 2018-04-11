import { Base } from "./base";
import { User } from "./user";
export class Address extends Base {
       street: string;
       streetTwo: string;
       country: string;
       city: string;
       state: string;
       pinCode: string;
       phone: string;
       dailyPkgLimit: number;
       Model: User
   }