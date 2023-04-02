let searchEl = document.getElementById("search");
let body = document.querySelector("body")
let searchbtn = document.getElementById("searchbtn");
let mainSection = document.getElementById("main");
let viewbtn = document.getElementById("view-iftar");
let bestsellers = document.getElementById("seller");
let combo = document.getElementById("combo")
let searchbox = document.getElementById("search-box")
let seResult = document.getElementById("search-result")
let Resultmsg = document.getElementById("msg")
let borderCard = document.getElementById("border-card")
let closebtn = document.getElementById("close-btn");

searchbtn.addEventListener("click",()=>{
    searchbox.style.display="block"
    body.style.overflow="hidden"
})

closebtn.addEventListener("click",()=>{
    searchbox.style.display="none"
    body.style.overflow="scroll"
}
)

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
    searchs()
})

function searchs() {
   let search= searchEl.value
    fetch(`http://localhost:8080/seller/search?q=${search}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            searchResult(data)
        })
        .catch((err) => {
            console.log(err);
        })
}


function searchResult(cardData) {
    let count =0
    let cardList =
        `<div class="card" id="border-card">
        
                ${cardData
            .map((item, i) => {
        if(i>0){
            count++
         return   getResult(
                item.image,
                item.title,
                item.grams,
                item.price,

            )
           
        }       
                })
            .join("")
        }
       
            </div>`
        ;
   
    seResult.innerHTML = cardList
    if(count===0){
        Resultmsg.style.display="block";
        
      }else{
        Resultmsg.style.display="none";
      }

}

function getResult(image, title, grams, price) {
    let card =
        `
        <div class="image-div">
        <img src="${image}" alt="">
       </div>
       <!--  -->
       <div class="search-heading">
        <p>${title}</p>
        <div class="search-add">
         <div>
           <p>${grams} | ${price}</p>
    
         </div>
       <div class="img-btn">
         <img src="https://www.licious.in/image/rebranding/png/Scooter_express.png" alt="">
         <button class="add">ADD TO CART</button>
       </div>
        </div>
       </div>
        
        `
        ;
    return card;
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
                    return getcombo(
                        item._id,
                        item.image,
                        item.title,
                        item.description,
                        item.price,
                        item.time

                    )
                }
            })
            .join("")
        }
       
            </div>`
        ;
        combo.innerHTML = cardList
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

function getcombo(_id,image, title, description, price, time) {
    let card =
        `
        <div class="box">
        <img src="${image}" alt="">
        <button class="btn" onclick=addCart("${_id}")>+</button>
        <h3>${title}</h3>
        <p>${description}</p>
        <h4 class="price">${price}</h4>
        <p>${time}</p>
      </div>`
        ;
    return card;
}


function addCart(_id){
    localStorage.setItem("id",_id)
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
            console.log(data);
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






