"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ifc_1 = require("./ifc");
const numeral = require("numeral");
function buyFromAccount(account) {
    account.buy(250000);
}
const BCA = new ifc_1.default();
const BNI = new ifc_1.default();
console.log(`BCA :${BCA.getBalance()}`);
console.log(`BNI :${BNI.getBalance()}`);
buyFromAccount(BCA);
console.log(`BCA :${numeral(BCA.getBalance()).format('0,0')}`);
console.log(`BNI :${numeral(BNI.getBalance()).format('0,0')}`);
//# sourceMappingURL=simple.js.map