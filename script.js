let price // price of item intializied by test
let cid
let currency = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
]

let cash //cash provided by customer


function clickFunction(){
    cash = document.getElementById('cash').value;

    if (cash < price){
        return alert("Customer does not have enough money to purchase the item")
    }else if (cash == price){
        document.getElementById("change-due").innerHTML = "No change due - customer paid with exact cash"
    }else if (cash > price){
        calculate(cash)
    }
}

function calculate(money){ //cash = money
    let change  = money - price
    let changeArray = []
    let totalCid = cid.reduce((acc, current) => acc + current[1], 0).toFixed(2);
    console.log(totalCid == change)
    let isClosed 
    if (change == totalCid){
        isClosed = true
    }
    //iterate through the currency array in descending order
    for (let i = currency.length - 1; i >= 0; i--) {
        if (change >= currency[i][1] && cid[i][1] > 0){
            let amountFromUnit = 0;
            while(change >= currency[i][1] && cid[i][1] > 0){
                change = (change - currency[i][1]).toFixed(2) //0.5 - 0.25 - .25 = 0
                cid[i][1] = (cid[i][1] - currency[i][1]) // 4.25 - 0.25 - 0.25 = 3.75
                amountFromUnit = (currency[i][1] + amountFromUnit) //0 + .25 + .25 = 0.5
                amountFromUnit.toFixed(2)
            }
            if (amountFromUnit > 0){
                changeArray.push(currency[i][0], amountFromUnit)
            }
        }
    } // For loop ends here
    
    let result = "";
for (let i = 0; i < changeArray.length; i++) {
  if (typeof changeArray[i] === 'string') {
    result += `${changeArray[i]}: $${changeArray[i + 1]} `;
    i++;
  }
}
console.log(result);

    if (change > 0){
        document.getElementById("change-due").innerHTML = "Status: INSUFFICIENT_FUNDS"
    }else if (isClosed == true){
        document.getElementById("change-due").innerHTML = "Status: CLOSED "+result
    }else 
        document.getElementById("change-due").innerHTML = "Status: OPEN "+result
} 