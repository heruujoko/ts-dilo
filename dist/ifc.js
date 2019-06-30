"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rekening {
    constructor() {
        this.balance = 500000;
    }
    buy(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
        }
    }
    sell(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log('invalid number');
        }
    }
    getBalance() {
        return this.balance;
    }
}
exports.default = Rekening;
//# sourceMappingURL=ifc.js.map