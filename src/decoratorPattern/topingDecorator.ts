import { BasePizza } from "./basePizza";

export abstract class TopingDecorator extends BasePizza {
}

export class CheeseToping extends TopingDecorator {
    private pizza: BasePizza;
    constructor(pizza: BasePizza) {
        super();
        this.pizza = pizza;
    }   
    getCost(): number {
        return this.pizza.getCost() + 20;
    }
}

export class TomatoToping extends TopingDecorator {
    private pizza: BasePizza;
    constructor(pizza: BasePizza) {
       super();
        this.pizza = pizza;
    }
    getCost(): number {
        return this.pizza.getCost() + 15;
    }
}