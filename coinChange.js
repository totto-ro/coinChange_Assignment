function coinChange( amount ){
    let counts = [0, 0, 0, 0, 0, amount];
    let coins = [100, 25, 10, 5, 1];
    let results =[];
    for (let i = 0; i < counts.length; i++) {
        counts[i] = Math.trunc(counts[counts.length-1] / coins[i])
        counts[counts.length-1] -= counts[i] * coins[i]
    }
    
    console.log(counts[0]);
    console.log(counts[1]);
    console.log(counts[2]);
    console.log(counts[3]);
    console.log(counts[4]);
    
    if(counts[0] !== 0){
        results.push("Dollar: " + counts[0]);
    }
    if(counts[1] !== 0){
        results.push("Quarters: " + counts[1]);
    }
    if(counts[2] !== 0){
        results.push("Dimes: " + counts[2]);
    }
    if(counts[3] !== 0){
        results.push("Nickels: " + counts[3]);
    }
    if(counts[4] !== 0){
        results.push("Pennies: " + counts[4]);
    }
    return results;
}

let a = coinChange(78); //{quarters: 3, pennies: 3}
console.log(a);
let a2 = coinChange(312); //{dollars: 3, dimes: 1, pennies: 2}
console.log(a2);