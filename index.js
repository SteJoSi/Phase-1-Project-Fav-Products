document.addEventListener("DOMContentLoaded", () => {
    console.log("All Content Loaded")  
    getHairProducts()
    getSkinProducts()
    getBeautyProducts()
    getBathProducts()
})


//gets all hair products 
function getHairProducts() {
    fetch('http://localhost:3000/hair')
    .then(response => response.json())
    //.then(hairData => console.log(hairData))
    .then(response => response.forEach(hairProduct => {renderHairProduct(hairProduct)}))
}



//creates a card for each hair product
function renderHairProduct(hair) {
    const hairCollection = document.querySelector('#hair-products')
    const div = document.createElement('div')
    div.classList.add('card')
    const h2 = document.createElement('h2')
    h2.innerText = hair.name
    //console.log('product', hair.name)
    const img = document.createElement('img')
    img.src = hair.image
    img.classList.add('product-pic')
    const h3 = document.createElement('h3')
    h3.innerText = hair.price
    const favButton = document.createElement('button')
    favButton.classList.add('fav-btn')
    favButton.innerText = "Add to Favorites"
    const buyButton = document.createElement('button')
    buyButton.classList.add('buy-btn')
    buyButton.innerText = "BUY"

    div.append(h2, img, h3, favButton, buyButton)
    hairCollection.append(div)
}
//renderHairProuduct()

//gets all skin care products 
function getSkinProducts() {
    fetch('http://localhost:3000/skin')
    .then(response => response.json())
    //.then(skinData => console.log(skinData))
    .then(response => response.forEach(skinProduct => {renderSkinProduct(skinProduct)}))
}

function renderSkinProduct(skin) {
    const skinCollection = document.querySelector('#skin-products')
    const div = document.createElement('div')
    div.classList.add('card')
    const h2 = document.createElement('h2')
    h2.innerText = skin.name
    //console.log('product', hair.name)
    const img = document.createElement('img')
    img.src = skin.image
    img.classList.add('product-pic')
    const h3 = document.createElement('h3')
    h3.innerText = skin.price
    const favButton = document.createElement('button')
    favButton.classList.add('fav-btn')
    favButton.innerText = "Add to Favorites"
    const buyButton = document.createElement('button')
    buyButton.classList.add('buy-btn')
    buyButton.innerText = "BUY"
    buyButton.addEventListener('click', (event) => {
        event.preventDefault()
        alert("Your item has been added to the cart!");
        // console.log('alert', alert)
    })

    div.append(h2, img, h3, favButton, buyButton)
    skinCollection.append(div)
}

//gets all makeup products 
function getBeautyProducts() {
    fetch('http://localhost:3000/makeup')
    .then(response => response.json())
    //.then(beautyData => console.log(beautyData))
    .then(response => response.forEach(beautyProduct => {renderBeautyProduct(beautyProduct)}))
}

function renderBeautyProduct(makeup) {
    const makeupCollection = document.querySelector('#beauty-products')
    const div = document.createElement('div')
    div.classList.add('card')
    const h2 = document.createElement('h2')
    h2.innerText = makeup.name
    //console.log('product', hair.name)
    const img = document.createElement('img')
    img.src = makeup.image
    img.classList.add('product-pic')
    const h3 = document.createElement('h3')
    h3.innerText = makeup.price
    const favButton = document.createElement('button')
    favButton.classList.add('fav-btn')
    favButton.innerText = "Add to Favorites"
    const buyButton = document.createElement('button')
    buyButton.classList.add('buy-btn')
    buyButton.innerText = "BUY"
    buyButton.addEventListener('click', (event) => {
        event.preventDefault()
        alert("Your item has been added to the cart!");
        // console.log('alert', alert)
    })

    div.append(h2, img, h3, favButton, buyButton)
    makeupCollection.append(div)
}

//gets all bath products 
function getBathProducts() {
    fetch('http://localhost:3000/bath')
    .then(response => response.json())
    //.then(bathData => console.log(bathData))
    .then(response => response.forEach(bathProduct => {renderBathProduct(bathProduct)}))
}

function renderBathProduct(bath) {
    const bathCollection = document.querySelector('#bath-products')
    const div = document.createElement('div')
    div.classList.add('card')
    const h2 = document.createElement('h2')
    h2.innerText = bath.name
    //console.log('product', hair.name)
    const img = document.createElement('img')
    img.src = bath.image
    img.classList.add('product-pic')
    const h3 = document.createElement('h3')
    h3.innerText = bath.price
    const favButton = document.createElement('button')
    favButton.classList.add('fav-btn')
    favButton.innerText = "Add to Favorites"
    const buyButton = document.createElement('button')
    buyButton.classList.add('buy-btn')
    buyButton.innerText = "BUY"
    buyButton.addEventListener('click', (event) => {
        event.preventDefault()
        alert("Your item has been added to the cart!");
        // console.log('alert', alert)
    })

    div.append(h2, img, h3, favButton, buyButton)
    bathCollection.append(div)
}

// function buyButton() {}

// function alertMessage(mes) {
//     const mes = ("Your item has been added to the cart!")
// }

//click and alert for buy button
//document.querySelectorAll('.buy-btn').addEventListener('click', alertMessage())

//function buyAlert() {
    // const alert = document.querySelectorAll('.buy-btn')
    // console.log('alert', alert)
    //alert.addEventListener
// }
// buyAlert() 