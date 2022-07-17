document.addEventListener("DOMContentLoaded", () => {
    console.log("All Content Loaded")  
})

//fetch request to access db.json
function getProducts() {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(response => response.forEach(product => {renderProduct(product)}))
}
getProducts()

//create function to render products 
function renderProduct(product) {
    const div = document.createElement('div')
    div.classList.add('card')
    const h2 = document.createElement('h2')
    h2.innerText = product.name
    const p = document.createElement('p')
    p.innerText = product.description
    const img = document.createElement('img')
    img.src = product.image
    img.classList.add('product-pic')
    const h3 = document.createElement('h3')
    h3.innerText = product.price
    const favButton = document.createElement('button')
    favButton.classList.add('fav-btn')
    favButton.innerText = "Add to Favorites"
        favButton.addEventListener('click', (event) => {
            event.preventDefault()
            alert("Product added to favorite's list!");
        })
    const buyButton = document.createElement('button')
    buyButton.classList.add('buy-btn')
    buyButton.innerText = "BUY"
        buyButton.addEventListener('click', (event) => {
            event.preventDefault()
            alert("Your item has been added to the cart!");
        })

    div.append(h2, p, img, h3, favButton, buyButton)

    if(product.type === 'hair') {
        const hair = document.querySelector('.hair-container')
        hair.append(div) 
    } else if (product.type === 'skin') {
        const skin = document.querySelector('.skin-container')
        skin.append(div)
    } else if (product.type === 'beauty') {
        const beauty = document.querySelector('.beauty-container')
        beauty.append(div)
    } else if (product.type === 'bath') {
        const bath = document.querySelector('.bath-container')
        bath.append(div)
    }  
// mouseover event for description of product

// const description = document.querySelector('.product-pic')
     // console.log('description', description)
// description.addEventListener("mouseover", e => {
//     // console.log("mouse in")
//     if(product.type = 'hair') {
//         return product.description
//     }
// })
    
}
// add class to description

 // img.addEventListener("mouseover", e => {
        //     // console.log("mouse in")
        //     if(product.type === 'hair') {
        //         let description = product.description

        //     }
        // })
