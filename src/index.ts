import { Payment } from "./strategy/payment";
import { UpiStrategy } from "./strategy/upiStrategy";
import { CardStrategy } from "./strategy/cardStrategy";
import { UpiPayment } from "./strategy/upiPayment";
import { CardPayment } from "./strategy/cardPayment";

function greet(name: string) {
    const payment = new UpiPayment();
    payment.pay(100);
    const payment2 = new CardPayment();
    payment2.pay(100);

  }
  
  console.log(greet("hello"))