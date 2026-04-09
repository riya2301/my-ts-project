import { BasePizza } from "./basePizza";

export class Margharita extends BasePizza {
    getCost(): number {
        return 100;
    }
}