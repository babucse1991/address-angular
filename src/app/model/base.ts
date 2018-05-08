export class Base {
    
       id: number;
       active: boolean;
       created: Date;
       modified: Date;
       reActive: boolean;
       notes: string;
       username : string;
           
       constructor(values: Object = {}) {
         Object.assign(this, values);
     }
    
   }