document.addEventListener('DOMContentLoaded', () => {
    // Set the image source
    const aboutImage = document.getElementById('about-image');
    aboutImage.src = '../images/tim-hoodoos.JPG'; 

    // Set the text content
    const aboutText = document.getElementById('about-text');
    aboutText.innerHTML = `
        <h1>Our Story</h1>
        <p>
            GouMang Creations (句芒木作）started in 2021 as a small weekend project but quickly grew into a lifelong passion. 
            Our unwavering dedication to creating heirloom furnitures and extraordinary craftsmanship is what drives 
            us every day to create special peices for our customers that will last for generations.
        </p>
        <p>
            Based in Tucson, Arizona, we believe in sustainable and eco-friendly practices, sourcing only the 
            finest materials for our pieces. Each item is meticulously crafted to ensure it not only meets but 
            exceeds expectations.
        </p>
        <p>
            When we are not in the workshop, we're out exploring the breathtaking Sonoran Desert, drawing inspiration 
            from the state's natural splendor, rich indigenous culture, and historic Asian heritage. Our journey is just beginning, 
            and we are excited to have you to be a part of it.
             
        </p>
    `;
});
