export interface IExpression {
    evaluate(): number;
}
export class NumberExpression implements IExpression {
    private value: number;
    constructor(value: number) {
        this.value = value;
    }
    evaluate(): number {
        return this.value;
    }
}
export class Expression implements IExpression {
    private operator: string;
    private left: IExpression;
    private right: IExpression;
    constructor(operator: string, left: IExpression, right: IExpression) {
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
    evaluate(): number {
        switch(this.operator) {
            case '+':
                return this.left.evaluate() + this.right.evaluate();
            case '-':
                return this.left.evaluate() - this.right.evaluate();
            case '*':
                return this.left.evaluate() * this.right.evaluate();
            case '/':
                return this.left.evaluate() / this.right.evaluate();
            default:
                throw new Error(`Invalid operator: ${this.operator}`);
        }
    }
}