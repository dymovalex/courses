function checkCashRegister(price, cash, cid) {
    const divider = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    let check = {status: "INSUFFICIENT_FUNDS", change: []};
    let change = cash * 100 - price * 100;
    for(let i = cid.length - 1; i >= 0 ; i--){
        cid[i][1] = cid[i][1] * 100;

        if(change === cid[0][1]){
            for (let k = 1; k < cid.length; k++) {
                if(cid[k][1] !== 0) {
                    break;
                }        
            }
            check.status = "CLOSED";
            cid[0][1] = change / 100;
            check.change = cid;
            return check;
        }
/*        
        if(change === cid[i][1]){
            check.status = "CLOSED";
            cid[0][1] = change / 100;
            check.change = cid;
            return check;
        }
*/
        if(divider[i] > change){
            continue;
        } else if(divider[i] <= change){
            check.status = "OPEN";
            let rest = 0;
            for(let j = divider[i]; change - j >= 0 && j <= cid[i][1];) {
                change = change - j;
                cid[i][1] = cid[i][1] - j;
                rest += j;
            }
            cid[i][1] = rest / 100;
            check.change.push(cid[i]);

        }
    }

    if(cid[0][1] < change){
        for (let k = 1; k < cid.length; k++) {
            if(cid[k][1] !== 0) {
                break;
            }        
        }
        check.status = "INSUFFICIENT_FUNDS";
        check.change = [];
        return check;
    }
/*
    if(change === cid[0][1]){
        for (let k = 1; k < cid.length; k++) {
            if(cid[k][1] !== 0) {
                break;
            }        
        }
        check.status = "CLOSED";
        cid[0][1] = change / 100;
        check.change = cid;
        return check;
    }
 */   
    return check;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}.


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1],
//["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "INSUFFICIENT_FUNDS", change: []}.


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
//["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.