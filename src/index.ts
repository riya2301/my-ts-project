import { Payment } from "./strategy/payment";
import { UpiStrategy } from "./strategy/upiStrategy";
import { CardStrategy } from "./strategy/cardStrategy";
import { UpiPayment } from "./strategy/upiPayment";
import { CardPayment } from "./strategy/cardPayment";
import store from "./observerPattern/store";
import { ATMRoom } from "./atmDesign/atmRoom";
import { Card } from "./atmDesign/card";
import { File, Directory } from "./compositePattern/fileSystem";
import { TransactionType } from "./atmDesign/transactionTypes";
import { NumberExpression } from "./compositePattern/calculator";
import { Expression } from "./compositePattern/calculator";
import { WeighingMachineAdapter } from "./adapterPattern/adapter/weighingMachineAdapter";
import { WeigingMachine } from "./adapterPattern/adaptee/weigingMachine";
import { ExpenseController } from "./splitWiseDesign/expenseController";
import { Split, SplitType } from "./splitWiseDesign/expense";
import { User } from "./splitWiseDesign/user/user";
import { Director } from "./builderPattern/director";
import { StudentBuilder } from "./builderPattern/studentBuilder";

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

function compositePattern() {
  const file = new File("file1");
  const file2 = new File("file2");
  const directory = new Directory("directory1", [file, file2]);
  directory.ls();
}

function calculatorDesign() {
  const expression = new Expression("+", new NumberExpression(1), new NumberExpression(2));
  const expression2 = new Expression("-", new NumberExpression(7), new NumberExpression(4));
  const expression3 = new Expression("*", expression, expression2);
  const expression4 = new Expression("/", expression3, new NumberExpression(5));
  console.log(expression4.evaluate());
}

function adapterDesign() {
  const weigingMachine = new WeigingMachine();
  const weighingMachineAdapter = new WeighingMachineAdapter(weigingMachine);
  console.log(weighingMachineAdapter.getWeightInKg());
}

function splitWiseDesign() {
  const user1 = new User("Riya", "9999999991");
  const user2 = new User("Aman", "9999999992");
  const user3 = new User("Sara", "9999999993");

  const expenseController = new ExpenseController([]);

  const equalSplit = [
    new Split(user1, 0),
    new Split(user2, 0),
    new Split(user3, 0),
  ];
  expenseController.createExpense(3000, user1, equalSplit, SplitType.EQUAL);

  const exactSplit = [
    new Split(user1, 0),
    new Split(user2, 1000),
    new Split(user3, 500),
  ];
  expenseController.createExpense(1500, user2, exactSplit, SplitType.EXACT);

  const users = [user1, user2, user3];
  users.forEach((user) => {
    console.log(`\nBalance sheet for ${user.getName()}`);
    user.getUserVsBalanceSheet().forEach((balance, otherUser) => {
      if (balance.getAmountGet() > 0) {
        console.log(`${otherUser.getName()} owes ${user.getName()} : ${balance.getAmountGet()}`);
      }
      if (balance.getAmountOwed() > 0) {
        console.log(`${user.getName()} owes ${otherUser.getName()} : ${balance.getAmountOwed()}`);
      }
    });
  });
}

strategyPattern("hello")
observerPattern("hello")
atmDesign()

compositePattern()
calculatorDesign()
adapterDesign()
splitWiseDesign()

function builderPattern() {
  const studentBuilder = new StudentBuilder();
  const director = new Director(studentBuilder);
  const student = director.buildStudent("John Doe", 20, "Male", "john.doe@example.com", "1234567890", "123 Main St", "Anytown", "CA", "12345");
  console.log(student);
}
builderPattern()