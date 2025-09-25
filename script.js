// Testimonial Slider Functionality
let currentSlide = 0;
const testimonials = [
    {
        image: "Resources/Testimonial/e9415b329d640fb179f0f1679f4cee3ca1d647a9.jpg",
        text: "You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.",
        name: "AUGUSTA W. REYNOSO",
        title: "UI&UX DESIGNER",
        rating: 4
    }
    // You can add more testimonials here in the future
];

function updateTestimonial() {
    const testimonial = testimonials[currentSlide];
    
    // Update avatar
    const avatar = document.querySelector('.testimonial-avatar img');
    if (avatar) {
        avatar.src = testimonial.image;
        avatar.alt = testimonial.name;
    }
    
    // Update text
    const text = document.querySelector('.testimonial-text p');
    if (text) {
        text.textContent = testimonial.text;
    }
    
    // Update author
    const name = document.querySelector('.author-name');
    const title = document.querySelector('.author-title');
    if (name) name.textContent = testimonial.name;
    if (title) title.textContent = testimonial.title;
    
    // Update rating
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < testimonial.rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    updateTestimonial();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateTestimonial();
});