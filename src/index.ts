import { Payment } from "./strategy/payment";
import { UpiStrategy } from "./strategy/upiStrategy";
import { CardStrategy } from "./strategy/cardStrategy";
import { UpiPayment } from "./strategy/upiPayment";
import { CardPayment } from "./strategy/cardPayment";
import store from "./observerPattern/store";
import { ATMRoom } from "./atmDesign/atmRoom";
import { Card } from "./atmDesign/card";
import { TransactionType } from "./atmDesign/transactionTypes";

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

  function atmDesign() {
    const atmRoom = new ATMRoom();  
    atmRoom.atm.getState().insertCard(atmRoom.atm, atmRoom.user.getCard());
    atmRoom.atm.getState().authenticatePin(atmRoom.atm, "111", atmRoom.user.getCard());
    atmRoom.atm.getState().selectOperation(atmRoom.atm, TransactionType.WITHDRAW);
    atmRoom.atm.getState().withdraw(atmRoom.atm, 1000, atmRoom.user.getCard(), atmRoom.user);
  }
strategyPattern("hello")
observerPattern("hello")
atmDesign()