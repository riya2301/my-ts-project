"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashWithdrawalProcessorChain = exports.HundredNoteProcessor = exports.FiveHundredNoteProcessor = exports.ThousandNoteProcessor = void 0;
class CashWithdrawalProcessor {
    constructor(nextProcessor) {
        this.nextProcessor = nextProcessor;
    }
    processAmount(amount) {
        if (this.nextProcessor !== null) {
            this.nextProcessor.processAmount(amount);
        }
    }
}
class ThousandNoteProcessor extends CashWithdrawalProcessor {
    constructor(nextProcessor) {
        super(nextProcessor);
    }
    processAmount(amount) {
        if (amount >= 1000) {
            console.log(`Withdrawing ${amount} thousand notes`);
            if (amount % 1000 === 0) {
                console.log(`Withdrawing ${amount / 1000} thousand notes`);
            }
            else {
                console.log(`Withdrawing ${Math.floor(amount / 1000)} thousand notes`);
            }
            amount = amount % 1000;
            console.log(`Remaining amount: ${amount}`);
            if (amount > 0) {
                this.nextProcessor.processAmount(amount);
            }
        }
        else {
            console.log("No thousand notes available");
        }
    }
}
exports.ThousandNoteProcessor = ThousandNoteProcessor;
class FiveHundredNoteProcessor extends CashWithdrawalProcessor {
    constructor(nextProcessor) {
        super(nextProcessor);
    }
    processAmount(amount) {
        if (amount >= 500) {
            console.log(`Withdrawing ${amount} five hundred notes`);
            if (amount % 500 === 0) {
                console.log(`Withdrawing ${amount / 500} five hundred notes`);
            }
            else {
                console.log(`Withdrawing ${Math.floor(amount / 500)} five hundred notes`);
            }
            amount = amount % 500;
            console.log(`Remaining amount: ${amount}`);
            if (amount > 0) {
                this.nextProcessor.processAmount(amount);
            }
        }
        else {
            console.log("No five hundred notes available");
        }
    }
}
exports.FiveHundredNoteProcessor = FiveHundredNoteProcessor;
class HundredNoteProcessor extends CashWithdrawalProcessor {
    constructor(nextProcessor) {
        super(nextProcessor);
    }
    processAmount(amount) {
        if (amount >= 100) {
            console.log(`Withdrawing ${amount} hundred notes`);
            if (amount % 100 === 0) {
                console.log(`Withdrawing ${amount / 100} hundred notes`);
            }
            else {
                console.log(`Withdrawing ${Math.floor(amount / 100)} hundred notes`);
            }
            amount = amount % 100;
            console.log(`Remaining amount: ${amount}`);
            if (amount > 0) {
                this.nextProcessor.processAmount(amount);
            }
        }
        else {
            console.log("No hundred notes available");
        }
    }
}
exports.HundredNoteProcessor = HundredNoteProcessor;
class CashWithdrawalProcessorChain {
    constructor() {
        this.processor = new ThousandNoteProcessor(new FiveHundredNoteProcessor(new HundredNoteProcessor(null)));
    }
    processAmount(amount) {
        this.processor.processAmount(amount);
    }
}
exports.CashWithdrawalProcessorChain = CashWithdrawalProcessorChain;
