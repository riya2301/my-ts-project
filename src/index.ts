import { Payment } from "./strategy/payment";
import { UpiStrategy } from "./strategy/upiStrategy";
import { CardStrategy } from "./strategy/cardStrategy";
import { UpiPayment } from "./strategy/upiPayment";
import { CardPayment } from "./strategy/cardPayment";
import store from "./observerPattern/store";

function strategyPattern(name: string) {
    const payment = new UpiPayment();
    payment.pay(100);
    const payment2 = new CardPayment();
    payment2.pay(100);

  }

  function observerPattern(name: string) {
    const iphoneObservable = store.init();
    iphoneObservable.setStockPrice(100);
  }
  console.log(strategyPattern("hello")) 
  console.log(observerPattern("hello")) 