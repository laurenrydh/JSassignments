function outer() {
    let a = 'Potato'
    let b = {calories: 161, color: 'brown'}

    console.log(a)
    console.log(b)
    function inner(a,b) { 
        a = 'Potato'
        b = {calories: 161, color: 'brown'}
        console.log(a)
        console.log(b)
        a = 'Salad'
        b = {calories: 450, color: 'green'}
        console.log(a)
        console.log(b)
        b.calories = 500
        console.log(a)
        console.log(b)
    }
    inner(a,b)
    console.log(a)
    console.log(b)
}
outer()