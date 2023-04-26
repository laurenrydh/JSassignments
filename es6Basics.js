numbers1 = [1, 2, 3, 4, 5]
numbers2 = [6, 7, 8, 9, 10]

numbers = [...numbers1, ...numbers2]

const square = (num) => num * num

const squares = numbers.map(square)

const isEven = (num) => num % 2 === 0

const evenSquares = squares.filter(isEven)

let [firstEvenSquare, secondEvenSquare] = evenSquares

console.log(`Original numbers: ${numbers} 
Squares: ${squares}
Even squares: ${evenSquares}
First even square: ${firstEvenSquare}
Second even square: ${secondEvenSquare}
`)
