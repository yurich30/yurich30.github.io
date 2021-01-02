            // addToCart
let addToCartButtons = document.body.getElementsByClassName("add-to-cart");

let productsCountEl = document.body.querySelector(".cartcounter");

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click',function(){
        let prevProductsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductsCount + 1
        console.log(productsCountEl)
    })
}


            // changeLikeState
let likeButtons = document.body.querySelectorAll(".like");

for (i=0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click',function() {
        // if (this.classList.contains("liked")) {
        //     this.classList.remove('liked')
        // } else {
        //     this.classList.add("liked")
        // }
        this.classList.toggle('liked')
    })
}


        // modal
let moreDetailsButtons = document.querySelectorAll(".btnmoredetails");
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.btn-close');
moreDetailsButtons.forEach(function(btn){
    btn.addEventListener('click', openModal)
})


function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
}


function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
}

closeBtn.addEventListener('click',closeModal)

modal.addEventListener('click', function(e){
    if(e.target === modal) {
        closeModal()
    }
})

function openModalByScroll() {
    if(window.pageYOffset >= document.documentElement.scrollHeight/2) {
        openModal()
        window.removeEventListener('scrol', openModalByScroll)
    }
}

window.addEventListener('scroll',openModalByScroll)


// slider
$(".slider-block").slick({
    dots: true
})

// product-quantity
// let decrementBtn = document.querySelectorAll('.decrement-btn')[0];
// let incrementBtn = document.querySelectorAll('.increment-btn')[0];
// let productQuantity = document.querySelectorAll('.product-quantity input')[0];

// // console.log(decrementBtn)
// // console.log(incrementBtn)
// let currentCount = +productQuantity.value

// function toggleButtonState(count) {
//     if(count <= 1) {
//         decrementBtn.disabled = true;
//     } else {
//         decrementBtn.disabled = false;
//     }
// }
// toggleButtonState(currentCount);

// incrementBtn.addEventListener('click',function (){
//     let currentCount = +productQuantity.value;
//     let nextCount = currentCount+1;
//     productQuantity.value = nextCount;

//     toggleButtonState(nextCount);
// })

// decrementBtn.addEventListener('click',function (){
//     let currentCount = +productQuantity.value;
//     let nextCount = currentCount-1;
//     productQuantity.value = nextCount;

//     toggleButtonState(nextCount);
// })

// product-quantity 

let decrementBtn = document.querySelectorAll('.decrement-btn');
let incrementBtn = document.querySelectorAll('.increment-btn');
let productQuantity = document.querySelectorAll('.product-quantity input');
let minCount = 1;
let maxCount = 5;
let currentCount = +productQuantity.value;

// function toggleButtonState(count, incrementBtn, decrementBtn) {
//     decrementBtn.disabled = count <= minCount;
//     incrementBtn.disabled = count >= maxCount;
// }

// for (let i = 0; i < decrementBtn.length; i++) {
//     decrementBtn[i].addEventListener("click",function () {
//         let currentCount = +productQuantity[i].value; 
//         let nextCount = currentCount - 1;
//         productQuantity[i].value = nextCount;
//         toggleButtonState(currentCount, incrementBtn[i], decrementBtn[i]);
//     })
// }

// for (let i = 0; i < incrementBtn.length; i++) {
//     incrementBtn[i].addEventListener("click",function () {
//         let currentCount = +productQuantity[i].value; 
//         let nextCount = currentCount + 1;
//         productQuantity[i].value = nextCount;
//         toggleButtonState(currentCount, incrementBtn[i], decrementBtn[i]);
//     })
// }

// for (i = 0; i < productQuantity.length; i++) {
//     let currentCount = +productQuantity[i].value;
//     toggleButtonState(currentCount, incrementBtn[i], decrementBtn[i]);
// }


// OOP product quantity
function Counter(incrementButton, decrementButton, inputField, maxCount = 5, minCount = 1){
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    }
    console.log(this)

    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        this.domRefs.decrementButton.disabled = count <= minCount;
    }
    this.toggleButtonState();

    this.increment = function() {
        let currentCount = +this.domRefs.inputField.value; 
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState(nextCount);
    }
    this.decrement = function() {
        let currentCount = +this.domRefs.inputField.value; 
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState(nextCount);
    }
    this.domRefs.incrementButton.addEventListener('click', this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener('click', this.decrement.bind(this));
    

}

const counter1 = new Counter(incrementBtn[0],decrementBtn[0],productQuantity[0]);
const counter2 = new Counter(incrementBtn[1],decrementBtn[1],productQuantity[1]);
const counter2 = new Counter(incrementBtn[2],decrementBtn[2],productQuantity[2]);
const counter2 = new Counter(incrementBtn[3],decrementBtn[3],productQuantity[3]);
const counter2 = new Counter(incrementBtn[4],decrementBtn[4],productQuantity[4]);
const counter2 = new Counter(incrementBtn[5],decrementBtn[5],productQuantity[5]);
const counter2 = new Counter(incrementBtn[6],decrementBtn[6],productQuantity[6]);
const counter2 = new Counter(incrementBtn[7],decrementBtn[7],productQuantity[7]);
const counter2 = new Counter(incrementBtn[8],decrementBtn[8],productQuantity[8]);
