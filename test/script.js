const tablinks = document.getElementsByClassName("tab_link");
const tabcontents = document.getElementsByClassName("tab_contents");

function openTab(event, tabName) {
    for (const tablink of tablinks) {
        tablink.classList.remove("active_link");
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabName).classList.add("active_tab");
}

// Banner
const bannerImages = ["./assets/images/ecommerceApp.jpg", "./assets/images/FoodOrderApp.jpg", "./assets/images/trelloApp.png"];
let currentImageIndex = 0;

function changeBannerImage() {
    const bannerImage = document.getElementById('bannerImage');
    bannerImage.style.opacity = 0;

    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
        bannerImage.src = bannerImages[currentImageIndex];
        bannerImage.style.opacity = 1;
    }, 500);
}

setInterval(changeBannerImage, 3000);

// Initial image change (optional)
changeBannerImage();

// Slideshow
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000);
}

// Initialize the slideshow
showSlides();
