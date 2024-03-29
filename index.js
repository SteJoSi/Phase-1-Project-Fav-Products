document.addEventListener("DOMContentLoaded", () => {
    console.log("All Content Loaded")  
    getProducts()
})

//fetch request to access db.json and to render all products on html
function getProducts() {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    // .then(data => console.log(data[2].name))
    .then(response => response.forEach(product => {renderProduct(product)
        productInfoEvent()
        favoriteBtn()
        }
    ))
}


//creates the container that holds all of the product information
function renderProduct(product) {
    const div = document.createElement('div')
    div.classList.add('card')
    const h2 = document.createElement('h2')
    h2.innerText = product.name
    const p = document.createElement('p')
    p.classList.add('description')
    p.innerText = product.description
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
        })

    div.append(h2, p, img, h3, favButton, buyButton)

//separates each product by the coorisponding 'type' and appends it to the matching container
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
}

//mouseover & mouseleave event listener to display product information when hovered
function productInfoEvent() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener("mouseover", e => {
            // console.log('event', e)
            // console.log("mouse on")
            const info = card.querySelector('.description')
            console.log(card)
            
            info.classList.add('displayed')
        })
        card.addEventListener("mouseleave", e => {
            // console.log('event', e)
            // console.log("mouse off")
            const info = card.querySelector('.description')
    
            info.classList.remove('displayed')
        })
    })
}

//changes the favorites button when clicked to add it to the favorites list
function favoriteBtn() {
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault()
            btn.innerText = 'Item added to Favorites!'; 
        })
    })
}


