// Update the 'Apples' item to say 'Granny Smith Apples'
const list = document.getElementById('list')
const a = list.childNodes[3]
a.innerHTML = "Granny Smith Apples"
// Remove 'Oat Milk' from the list
const om = list.childNodes[4]
list.removeChild(om)
// Add an item 'Kombucha'
list.innerHTML += '<li>Kombucha</li>'
// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
const newList = ['Protein Bars', 'Almonds', 'Peanut Butter']
list.innerHTML = ''

for (let i = 0; i < newList.length; i++) {
    const items = document.createElement('Li')
    items.innerHTML = newList[i]
    list.appendChild(items)
}
// Add the class 'important' to the almonds item.
const almonds = list.childNodes[2]
almonds.classList.add('important')
console.log(almonds)