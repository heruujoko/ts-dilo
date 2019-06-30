interface IAaccount {
    buy(amount: number): any;
    sell(amount: number): any;
}

export default class Rekening implements IAaccount {
    private balance: number = 500000;

    public buy(amount: number): any {
        if (amount < this.balance) {
            this.balance -= amount;
        }
    }

    public sell(amount: number): any {
        if(amount > 0) {
            this.balance += amount;
        } else {
            console.log('invalid number');
        }   
    }

    public getBalance(): number {
        return this.balance;
    }
} 