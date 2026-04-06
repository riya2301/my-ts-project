import { CardStrategy } from "./cardStrategy";
import { Payment } from "./payment";


export class CardPayment extends Payment{

   constructor(){
       super(new CardStrategy());
   }
    
}