

let input = document.querySelector(".inp-name")
let button = document.querySelector(".add-btn")
let names_wrapper = document.querySelector(".wrapper")

button.addEventListener('click', () => {
    let newH1 = document.createElement('h1')
    newH1.textContent = input.value
    names_wrapper.appendChild(newH1)
})