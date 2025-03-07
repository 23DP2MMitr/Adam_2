fetch('https://catfact.ninja/fact').then(response => response.json()).then(data => {
    document.getElementById('fact').innerHTML = data.fact;
});

const cards = document.querySelectorAll('.card__inner');
cards.forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
});