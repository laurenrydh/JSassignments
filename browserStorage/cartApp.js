let id = 0
// Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an empty cart and stores it in localStorage.
function initializeCart () {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]))
    }
}
// Create a function called addItem that takes an item object as a parameter, retrieves the cart from localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
function addItem (item) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
}
// Create a function called removeItem that takes an item id as a parameter, retrieves the cart from localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
function removeItem (itemID) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart = cart.filter((item) => item.id !== itemID)
    localStorage.setItem('cart', JSON.stringify(cart))
}
// Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
function displayCart () {
    const cart = localStorage.getItem('cart')
    console.log(cart)
}

initializeCart()

// Create event listeners for the add item form and display cart button to call the respective functions.
const addItemButton = document.getElementById('addItemButton')
addItemButton.addEventListener('click', (event => {
    addItem({
        name: document.getElementById('itemName').value,
        price: document.getElementById('itemPrice').value,
        id: Date.now()
    })
}))

const displayCartButton = document.getElementById('displayCartButton')
displayCartButton.addEventListener('click', (event => {
    displayCart()
}))
