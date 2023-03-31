
let mainSection = document.getElementById("main");
let viewbtn = document.getElementById("view-iftar");

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
display()
renderCardList()




