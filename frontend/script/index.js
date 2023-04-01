let searchEl = document.getElementById("search");
let searchbtn = document.getElementById("searchbtn");
let mainSection = document.getElementById("main");
let viewbtn = document.getElementById("view-iftar");
let bestsellers = document.getElementById("seller");
let combo = document.getElementById("combo")

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.prev-btn')];


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

searchbtn.addEventListener("click",()=>{
   search()
})
function search() {
    let search = searchEl.value
    fetch(`http://localhost:8080/seller?q=${search}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
         console.log(renderCardList(data))
        })
        .catch((err) => {
            console.log(err);
        })
}





function renderCardList(cardData) {
    let cardList =
        `<div class="card-list">
        
                ${cardData
            .map((item, i) => {

                if (i < 4) {
                    return getCard(
                        item.image,
                        item.title,
                        item.grams,
                        item.price,
                        item.time

                    )
                }
            })
            .join("")
        }
       
            </div>`
        ;
    mainSection.innerHTML = cardList

}

function renderBestSeller(cardData) {
    let cardList =
        `<div class="card-list">
        
                ${cardData
            .map((item, i) => {

                if (i < 4) {
                    return getseller(
                        item.image,
                        item.title,
                        item.description,
                        item.grams,
                        item.price,
                        item.time

                    )
                }
            })
            .join("")
        }
       
            </div>`
        ;
    bestsellers.innerHTML = cardList
}

function rendercombo(cardData) {
    let cardList =
        `<div class="card-list">
        
                ${cardData
            .map((item, i) => {

                if (i < 4) {
                    return getseller(
                        item.image,
                        item.title,
                        item.description,
                        item.grams,
                        item.price,
                        item.time

                    )
                }
            })
            .join("")
        }
       
            </div>`
        ;
        top.innerHTML = cardList
}


function getCard(image, title, grams, price, time) {
    let card =
        `
        <div class="box">
        <img src="${image}" alt="">
        <button class="btn">+</button>
        <h3>${title}</h3>
        <p>${grams}</p>
        <h4 class="price">${price}</h4>
        <p>${time}</p>
      </div>`
        ;
    return card;
}
function getseller(image, title, description, grams, price, time) {
    let card =
        `
        <div class="box">
        <img src="${image}" alt="">
        <button class="btn">+</button>
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${grams}</p>
        <h4 class="price">${price}</h4>
        <p>${time}</p>
      </div>`
        ;
    return card;
}

function getcombo(image, title, description, grams, price, time) {
    let card =
        `
        <div class="box">
        <img src="${image}" alt="">
        <button class="btn">+</button>
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${grams}</p>
        <h4 class="price">${price}</h4>
        <p>${time}</p>
      </div>`
        ;
    return card;
}





function display() {
    fetch("http://localhost:8080/iftar")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            // console.log(data);
            mainSection.innerHTML = null
            renderCardList(data)
        })
        .catch((err) => {
            console.log(err);
        })
}
function seller() {
    fetch("http://localhost:8080/seller")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            // console.log(data);
            bestsellers.innerHTML = null
            renderBestSeller(data)
        })
        .catch((err) => {
            console.log(err);
        })
}

function combos() {
    fetch("http://localhost:8080/combo")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            // console.log(data);
            combo.innerHTML = null
            rendercombo(data)
        })
        .catch((err) => {
            console.log(err);
        })
}
combos()
seller()
display()






