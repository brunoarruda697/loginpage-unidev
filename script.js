var card = document.getElementById('card');

document.getElementById('flip').addEventListener('click', function() {
    card.classList.toggle('flipped');
}, false);

document.getElementById('back-page').addEventListener('click', function() {
    card.classList.toggle('flipped');
}, false);

document.getElementById('recoverpassword').addEventListener('click', function() {
    card.classList.toggle('flipped');
}, false);