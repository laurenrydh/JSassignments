// Get the header element
const header = document.getElementsByTagName('header')
console.log(header)

// Get all the section elements
const section = document.querySelectorAll('Section')
console.log(section)
// Get the section element with class="current"

const currentSection = document.querySelector('section.current')
console.log(currentSection)
// Get the section that comes after the current section

const next = currentSection.nextElementSibling
console.log(next)

// Get the h2 node from the section before the 'current' section
const previous = currentSection.previousElementSibling
console.log(previous)

// Get the div that contains the section that has an h2 with a class of 'highlight'
const highlight = document.querySelector('h2.highlight').parentElement.parentElement
console.log(highlight)
// Get all the sections that contain an H2 (using a single statement);
const containsh2 = document.querySelectorAll('section > h2')
console.log(containsh2)