$(window).scroll(function () {
    //====== scroll-up button show/hide script ======
    if (this.scrollY > 80) {
        $('.scroll-up-btn').addClass("show");
    }
    else {
        $('.scroll-up-btn').removeClass("show");
    }
});

$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    //====== removing smooth scroll on slide-up button click ======
    $('html').css("scrollBehavior", "auto");
});

//====== Mobile Menu ======
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");



menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
}


//====== Side Navigation Bar Close  ======
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  })
}


//====== Scroll Fixed ======
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        logoOne.classList.add("active");
        menuBtn.classList.add("active");
    }
    else {
        nav.classList.remove("sticky");
        logoOne.classList.remove("active");
        menuBtn.classList.remove("active");
    }
}


// ====== SEARCH FILTER ======
const search = document.getElementById("search");
const productName = document.querySelectorAll(".item-info p");

// ====== A BETTER WAY TO FILTER THROUGH THE PRODUCTS ======
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function (product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}


const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn) {
    allFilterItems.forEach((item) => {
        if (item.classList.contains(btn.id)) {
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn() {
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

