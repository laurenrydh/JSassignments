let fruitInventory = new Map ([
    ['apple', 10],
    ['banana', 20],
    ['orange', 30],
])

fruitInventory.set('apple', 15)

let bananaInventory = fruitInventory.get('banana')


console.log(fruitInventory)
console.log(bananaInventory)

let uniqueColors = new Set ([
    'red',
    'blue',
    'green',
])

uniqueColors.add('yellow')

let hasBlue = uniqueColors.has('blue')

console.log(uniqueColors)
console.log(hasBlue)

