"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upiPayment_1 = require("./strategy/upiPayment");
const cardPayment_1 = require("./strategy/cardPayment");
const store_1 = __importDefault(require("./observerPattern/store"));
const atmRoom_1 = require("./atmDesign/atmRoom");
const fileSystem_1 = require("./compositePattern/fileSystem");
const transactionTypes_1 = require("./atmDesign/transactionTypes");
const calculator_1 = require("./compositePattern/calculator");
const calculator_2 = require("./compositePattern/calculator");
const weighingMachineAdapter_1 = require("./adapterPattern/adapter/weighingMachineAdapter");
const weigingMachine_1 = require("./adapterPattern/adaptee/weigingMachine");
const expenseController_1 = require("./splitWiseDesign/expenseController");
const expense_1 = require("./splitWiseDesign/expense");
const user_1 = require("./splitWiseDesign/user/user");
const director_1 = require("./builderPattern/director");
const studentBuilder_1 = require("./builderPattern/studentBuilder");
const topingDecorator_1 = require("./decoratorPattern/topingDecorator");
const margharita_1 = require("./decoratorPattern/margharita");
function strategyPattern(name) {
    const payment = new upiPayment_1.UpiPayment();
    payment.pay(100);
    const payment2 = new cardPayment_1.CardPayment();
    payment2.pay(100);
}
function observerPattern(name) {
    const iphoneObservable = store_1.default.init();
    iphoneObservable.setStockPrice(100);
}
function atmDesign() {
    const atmRoom = new atmRoom_1.ATMRoom();
    atmRoom.atm.getState().insertCard(atmRoom.atm, atmRoom.user.getCard());
    atmRoom.atm.getState().authenticatePin(atmRoom.atm, "111", atmRoom.user.getCard());
    atmRoom.atm.getState().selectOperation(atmRoom.atm, transactionTypes_1.TransactionType.WITHDRAW);
    atmRoom.atm.getState().withdraw(atmRoom.atm, 1000, atmRoom.user.getCard(), atmRoom.user);
}
function compositePattern() {
    const file = new fileSystem_1.File("file1");
    const file2 = new fileSystem_1.File("file2");
    const directory = new fileSystem_1.Directory("directory1", [file, file2]);
    directory.ls();
}
function calculatorDesign() {
    const expression = new calculator_2.Expression("+", new calculator_1.NumberExpression(1), new calculator_1.NumberExpression(2));
    const expression2 = new calculator_2.Expression("-", new calculator_1.NumberExpression(7), new calculator_1.NumberExpression(4));
    const expression3 = new calculator_2.Expression("*", expression, expression2);
    const expression4 = new calculator_2.Expression("/", expression3, new calculator_1.NumberExpression(5));
    console.log(expression4.evaluate());
}
function adapterDesign() {
    const weigingMachine = new weigingMachine_1.WeigingMachine();
    const weighingMachineAdapter = new weighingMachineAdapter_1.WeighingMachineAdapter(weigingMachine);
    console.log(weighingMachineAdapter.getWeightInKg());
}
function splitWiseDesign() {
    const user1 = new user_1.User("Riya", "9999999991");
    const user2 = new user_1.User("Aman", "9999999992");
    const user3 = new user_1.User("Sara", "9999999993");
    const expenseController = new expenseController_1.ExpenseController([]);
    const equalSplit = [
        new expense_1.Split(user1, 0),
        new expense_1.Split(user2, 0),
        new expense_1.Split(user3, 0),
    ];
    expenseController.createExpense(3000, user1, equalSplit, expense_1.SplitType.EQUAL);
    const exactSplit = [
        new expense_1.Split(user1, 0),
        new expense_1.Split(user2, 1000),
        new expense_1.Split(user3, 500),
    ];
    expenseController.createExpense(1500, user2, exactSplit, expense_1.SplitType.EXACT);
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
strategyPattern("hello");
observerPattern("hello");
atmDesign();
compositePattern();
calculatorDesign();
adapterDesign();
splitWiseDesign();
function builderPattern() {
    const studentBuilder = new studentBuilder_1.StudentBuilder();
    const director = new director_1.Director(studentBuilder);
    const student = director.buildStudent("John Doe", 20, "Male", "john.doe@example.com", "1234567890", "123 Main St", "Anytown", "CA", "12345");
    console.log(student);
}
function decoratorPattern() {
    const margharita = new margharita_1.Margharita();
    const cheeseToping = new topingDecorator_1.CheeseToping(margharita);
    const tomatoToping = new topingDecorator_1.TomatoToping(cheeseToping);
    console.log(tomatoToping.getCost());
}
builderPattern();
decoratorPattern();
