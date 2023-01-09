let openButton = document.querySelector(".burger")
let modalContainer = document.querySelector('.links')

openButton.onclick = function() {
    console.log("open")
    modalContainer.style.display = 'flex'
}

let closeButton = document.querySelector('.links__close')
closeButton.onclick = function() {
    modalContainer.style.display = 'none'
}