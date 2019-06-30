import Rekening from './ifc';
import * as numeral from 'numeral';

function buyFromAccount(account: Rekening) {
    account.buy(250000);
}

const BCA = new Rekening();
const BNI = new Rekening();

console.log(`BCA :${BCA.getBalance()}`);
console.log(`BNI :${BNI.getBalance()}`);
buyFromAccount(BCA);
console.log(`BCA :${numeral(BCA.getBalance()).format('0,0')}`);
console.log(`BNI :${numeral(BNI.getBalance()).format('0,0')}`);

