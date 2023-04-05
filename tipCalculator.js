let foodCost = 100
let tip = calculateTip(foodCost)
let total = getBillTotal(foodCost)

function calculateTip(foodCost) {
    let tip = foodCost * 0.20
    return tip
}

function getBillTotal(foodCost) {
    let tip = calculateTip(foodCost)
    let total = foodCost + tip
    return total
}

console.log("The cost of your food was $" + foodCost)
console.log("Your Tip amount is $" + tip.toFixed(2))
console.log("Your total bill comes out to $" + total.toFixed(2))
