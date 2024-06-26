let slideIndex = 1;
let slideText = [
    "Mid-centry Japanese style entry way table inspired by Keith Johnson. Walnut, maple", 
    "End grain cutting board. Jatoba, maple, purple heart.", 
    "Oak bookshelf, Modern aesthetic with a hint of oriental retro character. ", 
    "A simple design yet elegantly built index shelf."];
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    document.getElementById("slideText").textContent = slideText[slideIndex-1];
}
