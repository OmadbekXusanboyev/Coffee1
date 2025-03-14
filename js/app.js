const boxContainer = document.querySelector(".box-container");
const cartMenu = document.querySelector(".cart-items-container")

const products = [
    {
        id: 0,
        img: "./images/menu-1.png",
        title: "Tasty and healthy",
        price: {
            new: 10.99,
            old: 15.99
        }
    },
    {
        id: 1,
        img: "./images/menu-2.png",
        title: "Tasty and healthy",
        price: {
            new: 10.99,
            old: 15.99
        }
    },
    {
        id: 2,
        img: "./images/menu-3.png",
        title: "Tasty and healthy",
        price: {
            new: 10.99,
            old: 15.99
        }
    },
    {
        id: 3,
        img: "./images/menu-4.png",
        title: "Tasty and healthy",
        price: {
            new: 10.99,
            old: 15.99
        }
    },
    {
        id: 4,
        img: "./images/menu-5.png",
        title: "Tasty and healthy",
        price: {
            new: 10.99,
            old: 15.99
        }
    },
    {
        id: 5,
        img: "./images/menu-6.png",
        title: "Tasty and healthy",
        price: {
            new: 10.99,
            old: 15.99
        }
    },

]

products.forEach((item)=>{
    boxContainer.innerHTML += `<div class="box">
                    <img loading="lazy" src=${item.img} alt="Menu 1">
                    <h3>${item.title}</h3>
                    <div class="price">$${item.price.new} <span>$${item.price.old}</span></div>
                    <div class="btn" onclick="addToCart(${item.id})">Add to cart</div>
               </div>
    `
})


const addToCart = (id) => {
    const item = products.find((item) => item.id === id)
    cartMenu.innerHTML += `<div class="cart-item">
    <img loading="lazy" src=${item.img} alt="Menu 1">
    <div class="content">
        <h3>${item.title}</h3>
        <div class="price">$${item.price.new}</div>
    </div>
    <i class="fas fa-times" onclick="removeItem(${item.id})"></i>
    </div>
`
};
const removeItem = (id) => {
    const itemToRemove = document.querySelector(`.cart-item i[onclick="removeItem(${id})"]`).parentElement;

    if (itemToRemove) {
        itemToRemove.remove();
    } 
};




// search bar


let searchForm = document.querySelector(".search-form");

// show search box
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItems.classList.remove("active");
};

// navBar
let navbar = document.querySelector(".navbar");

// show navBar
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItems.classList.remove("active");
};

// target cart items container
let cartItems = document.querySelector(".cart-items-container");

// show cart items
document.querySelector("#cart-btn").onclick = () => {
  cartItems.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

// remove class active on scroll window
window.onscroll = () => {
  searchForm.classList.remove("active");
};

// section start
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".lazy-section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      }
    });
  });

  sections.forEach((section) => observer.observe(section));
});

// Loader
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";

  const content = document.getElementById("content");
  content.style.display = "block";
});
