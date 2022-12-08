let dugme = document.querySelector('.header button');

dugme.addEventListener('click', () => {

    let menu = document.querySelector('ul');
    
    if(dugme.textContent === 'МЕНИ') {
        menu.style.display = 'block';
        dugme.textContent = 'ЗАТВОРИ';
    } else {
        menu.style.display = 'none';
        dugme.textContent = 'МЕНИ';
    }
});


let desnoDugme = document.querySelector('#right-btn');
let levoDugme = document.querySelector('#left-btn');
let slike = document.querySelectorAll('.slider-images img');

let indekSlike = 0;

desnoDugme.addEventListener('click', () => {
    obrisiSlike();
    indekSlike++;

    if(indekSlike === slike.length) {
        indekSlike = 0;
    }
    
    slike[indekSlike].style.display = 'block';
});

levoDugme.addEventListener('click', () => {
    obrisiSlike();
    indekSlike--;

    if(indekSlike === -1) {
        indekSlike = slike.length - 1;
    }

    slike[indekSlike].style.display = 'block';
});

const obrisiSlike = () => {
    slike.forEach((slika) => {
        slika.style.display = 'none';
    });
};