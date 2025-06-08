const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});


document.querySelectorAll('.carousel').forEach((carousel) => {
    const images = carousel.querySelectorAll('.carousel-img');
    let current = 0;

    const showImage = (index) => {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    carousel.querySelector('.prev').addEventListener('click', () => {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    });

    carousel.querySelector('.next').addEventListener('click', () => {
        current = (current + 1) % images.length;
        showImage(current);
    });

    // Initialize
    showImage(current);
});


const form = document.querySelector('.contact-form');
const status = document.querySelector('.form-status');

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        status.textContent = "Thank you! Your message has been sent.";
        status.style.color = "limegreen";
        form.reset();
    } else {
        status.textContent = "Oops! Something went wrong.";
        status.style.color = "tomato";
    }
});
