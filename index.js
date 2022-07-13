document.addEventListener("DOMContentLoaded", () => {
    console.log("All Content Loaded")  
    // getHairProducts()
    // getSkinProducts()
    // getBeautyProducts()
    // getBathProducts()
})

//fetch request to access db.json
function getProducts() {
    fetch(' http://localhost:3000/products')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(response => response.forEach(product => {renderProducts(product)}))
}
getProducts()

//create function to render products 
function renderProducts(product) {
    //const productCollection = document.getElementsByClassName('.section')
    //console.log('product', productCollection)
    const div = document.createElement('div')
    div.classList.add('card')
    const h2 = document.createElement('h2')
    h2.innerText = product.name
    //console.log('product', product.name)
    const img = document.createElement('img')
    img.src = product.image
    img.classList.add('product-pic')
    const h3 = document.createElement('h3')
    h3.innerText = product.price
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

//     div.append(h2, img, h3, favButton, buyButton)
//     productCollection.append(div)
}