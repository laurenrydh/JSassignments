function recursion(base,exponent) {
    if (exponent === 0) {
        return 1
    } else {
         return base * recursion(base, exponent - 1)   
    }

}

let test = recursion(2,5)
console.log(test)
