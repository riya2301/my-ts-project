export class Balance {
    private amountOwed: number;
    private amountGet: number;
    constructor(amountOwed: number, amountGet: number) {
        this.amountOwed = amountOwed;
        this.amountGet = amountGet;
    }
    getAmountOwed(): number {
        return this.amountOwed;
    }
    getAmountGet(): number {
        return this.amountGet;
    }
    setAmountOwed(amountOwed: number): void {
        this.amountOwed = amountOwed;
    }
    setAmountGet(amountGet: number): void {
        this.amountGet = amountGet;
    }
    increaseAmountOwed(delta: number): void {
        this.amountOwed += delta;
    }
    increaseAmountGet(delta: number): void {
        this.amountGet += delta;
    }
}