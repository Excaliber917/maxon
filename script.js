const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_list_sm")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const wrapper = document.querySelector(".wrapper");
const image = wrapper.querySelector(".testi_img");

const imageLinks = [
    "./assets/1 (3).jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/1 (4).jpg",
];

let position = 0;

image.src = imageLinks[position];

prevButton.addEventListener("click", () => {
    if (position > 0) {
        position--;
    } else {
        position = imageLinks.length - 1;
    }
    image.src = imageLinks[position];
});

nextButton.addEventListener("click", () => {
    if (position < imageLinks.length - 1) {
        position++;
    } else {
        position = 0;
    }
    image.src = imageLinks[position];
});
