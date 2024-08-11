// Load header and navbar dynamically
document.getElementById('header-container').innerHTML = fetch('partials/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header-container').innerHTML = data);
