export class Base {
    
       id: number;
       active: boolean;
       created: Date;
       updated: Date;
       reActive: boolean;
       notes: string;
           
       constructor(values: Object = {}) {
         Object.assign(this, values);
     }
    
   }