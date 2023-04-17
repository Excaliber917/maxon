//navbar
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_list_sm")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})




//testimonial image
const testimonials = [
    {
        imageSrc: './assets/1 (3).jpg',
        description: 'one set fifth winged divided seas years, seas is void darkness winged. Season green life Don great said won\'t whales together man lesser is may Itself need moveth herb itself darkness likeness sixth creepeth',
        name: 'Millard Castinson',
        designation: 'Software Developer'
    },
    {
        imageSrc: './assets/1 (4).jpg',
        description: 'two meat and the barbecue sauce complemented each other perfectly, the fries were crispy and well-seasoned, and the coleslaw was creamy and tangy. I would highly recommend this place to anyone who loves barbecue!',
        name: 'Jane Smith',
        designation: 'Food Critic'
    },
    {
        imageSrc: './assets/3.jpg',
        description: 'three meat and the barbecue sauce complemented each other perfectly, the fries were crispy and well-seasoned, and the coleslaw was creamy and tangy. I would highly recommend this place to anyone who loves barbecue!',
        name: 'lawra Smith',
        designation: 'Health Critic'
    },
    {
        imageSrc: './assets/2.jpg',
        description: 'four meat and the barbecue sauce complemented each other perfectly, the fries were crispy and well-seasoned, and the coleslaw was creamy and tangy. I would highly recommend this place to anyone who loves barbecue!',
        name: 'matt Smith',
        designation: 'Medical Critic'
    }
    // add more testimonials as needed
];

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const image = document.querySelector('.testi_img');
const description = document.querySelector('.testi_desc_p');
const name = document.querySelector('.testi_desc_sign');
const designation = document.querySelector('.testi_designation');

let currentIndex = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    image.src = testimonial.imageSrc;
    description.textContent = testimonial.description;
    name.textContent = testimonial.name;
    designation.textContent = testimonial.designation;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial();
});

// Initialize the first testimonial
updateTestimonial();



//testimonial video
const video = document.querySelector("#video");
const playButton = document.querySelector(".play_button");

playButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        // playButton.classList.add("playing");
    } else {
        video.pause();
        // playButton.classList.remove("playing");
    }
});


