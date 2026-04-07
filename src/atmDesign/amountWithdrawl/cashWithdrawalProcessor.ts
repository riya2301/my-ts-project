abstract class CashWithdrawalProcessor {
    nextProcessor: CashWithdrawalProcessor;
    constructor(nextProcessor: CashWithdrawalProcessor) {
        this.nextProcessor = nextProcessor;
    }
    processAmount(amount: number): void {
        if(this.nextProcessor !== null) {
        this.nextProcessor.processAmount(amount);
        }
    }
}

export class ThousandNoteProcessor extends CashWithdrawalProcessor {
    constructor(nextProcessor: CashWithdrawalProcessor) {
        super(nextProcessor);
    }
    processAmount(amount: number): void {
        if(amount >= 1000) {
            console.log(`Withdrawing ${amount} thousand notes`);
            if(amount % 1000 === 0) {
                console.log(`Withdrawing ${amount / 1000} thousand notes`);
            }
            else {
                console.log(`Withdrawing ${Math.floor(amount / 1000)} thousand notes`);
            }
            amount = amount % 1000;
            console.log(`Remaining amount: ${amount}`);
            if(amount > 0) {
                this.nextProcessor.processAmount(amount);
            }
        }   
        else {
            console.log("No thousand notes available");
        }
    }
}

export class FiveHundredNoteProcessor extends CashWithdrawalProcessor {
    constructor(nextProcessor: CashWithdrawalProcessor) {
        super(nextProcessor);
    }
    processAmount(amount: number): void {
        if(amount >= 500) {
            console.log(`Withdrawing ${amount} five hundred notes`);
            if(amount % 500 === 0) {
                console.log(`Withdrawing ${amount / 500} five hundred notes`);
            }
            else {
                console.log(`Withdrawing ${Math.floor(amount / 500)} five hundred notes`);
            }
            amount = amount % 500;
            console.log(`Remaining amount: ${amount}`);
            if(amount > 0) {
                this.nextProcessor.processAmount(amount);
            }
        }
        else {
            console.log("No five hundred notes available");
        }
    }
}

export class HundredNoteProcessor extends CashWithdrawalProcessor {
    constructor(nextProcessor: CashWithdrawalProcessor) {
        super(nextProcessor);
    }
    processAmount(amount: number): void {
        if(amount >= 100) {
            console.log(`Withdrawing ${amount} hundred notes`);
            if(amount % 100 === 0) {
                console.log(`Withdrawing ${amount / 100} hundred notes`);
            }
            else {
                console.log(`Withdrawing ${Math.floor(amount / 100)} hundred notes`);
            }
            amount = amount % 100;
            console.log(`Remaining amount: ${amount}`);
            if(amount > 0) {
                this.nextProcessor.processAmount(amount);
            }
        } 
        else {
            console.log("No hundred notes available");
        }
    }
}

export class CashWithdrawalProcessorChain {
    private processor: CashWithdrawalProcessor;
    constructor() {
        this.processor = new ThousandNoteProcessor(new FiveHundredNoteProcessor(new HundredNoteProcessor(null as any)));
    }
    processAmount(amount: number): void {
        this.processor.processAmount(amount);
    }
}