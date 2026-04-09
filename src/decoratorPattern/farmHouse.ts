import { BasePizza } from "./basePizza";

export class FarmHouse extends BasePizza {
    getCost(): number {
        return 150;
    }
}