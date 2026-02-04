const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('h2');
const icon = document.querySelector('.icon');
const exploreBtn = document.querySelector('.btn');
const cardOverlay = document.getElementById('cardOverlay');
const closeBtn = document.getElementById('closeBtn');

exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cardOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    cardOverlay.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === cardOverlay) {
        cardOverlay.classList.remove('active');
    }
});


container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15; 
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15; 

    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;

    title.style.transform = "translateZ(60px)";
    icon.style.transform = "translateZ(90px)";
});

container.addEventListener('mouseenter', (e) => {
    card.style.animation = 'none';
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'transform 0.5s ease-out';
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    
    title.style.transform = "translateZ(0px)";
    icon.style.transform = "translateZ(0px)";

    setTimeout(() => {
        card.style.animation = 'float 6s ease-in-out infinite';
        card.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.3, 1)';
    }, 500);
});