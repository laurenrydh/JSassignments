function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName
    this.lastName = lastName
    this.favoriteColor = favoriteColor
    this.favoriteNumber = favoriteNumber
    this.favoriteFoods = favoriteFoods
}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.toString = function() {
    return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.family = []

Person.prototype.addToFamily = function(person) {
    if (!this.family.includes(person) && person instanceof Person) {
        this.family.push(person)
    }
    return this.family.length
}

let Dylan = new Person('Dylan', 'Kersting', 'Green', 7, ['Banana Cream Pie', 'Jerky', 'gyro'])
let Lauren = new Person('Lauren', 'Rydh', 'Blue', 13, ['Sushi', 'Ice cream', 'Steak', 'Butter Chicken'])
let Pam = new Person('Pamela', 'Rydh', 'Purple', 56, ['Steak', 'Alfredo', 'Hotdish'])


console.log(Dylan.fullName())
console.log(Dylan.toString())
console.log(Dylan.family)
console.log(Dylan.addToFamily(Lauren))
console.log(Dylan.addToFamily(Lauren))
console.log(Dylan.addToFamily('Bob'))
console.log(Dylan.addToFamily(Pam))

console.log(Lauren.fullName())
console.log(Lauren.toString())
console.log(Lauren.addToFamily(Pam))
console.log(Lauren.addToFamily(Dylan))

console.log(Pam.fullName())
console.log(Pam.toString())

