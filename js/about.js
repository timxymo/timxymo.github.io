document.addEventListener('DOMContentLoaded', () => {
    // Set the image source
    const aboutImage = document.getElementById('about-image');
    aboutImage.src = 'images/tim-hoodoos.jpg'; // Replace with your actual image path

    // Set the text content
    const aboutText = document.getElementById('about-text');
    aboutText.innerHTML = `
        <h1>Our Story</h1>
        <p>
            Mo Woodworking started in 2020 as a small passion project but quickly grew into a full-time business. 
            Our love for handcrafted furniture and small items is what drives us every day to create something 
            special for our customers.
        </p>
        <p>
            Based in Portland, Oregon, we believe in sustainable and eco-friendly practices, sourcing only the 
            finest materials for our pieces. Each item is meticulously crafted to ensure it not only meets but 
            exceeds expectations.
        </p>
        <p>
            When we are not in the workshop, we enjoy exploring the beautiful Pacific Northwest, taking inspiration 
            from the natural beauty around us. Our journey is just beginning, and we are excited to have you be 
            a part of it.
        </p>
    `;
});
