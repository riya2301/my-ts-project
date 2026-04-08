"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = exports.NumberExpression = void 0;
class NumberExpression {
    constructor(value) {
        this.value = value;
    }
    evaluate() {
        return this.value;
    }
}
exports.NumberExpression = NumberExpression;
class Expression {
    constructor(operator, left, right) {
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
    evaluate() {
        switch (this.operator) {
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
exports.Expression = Expression;
