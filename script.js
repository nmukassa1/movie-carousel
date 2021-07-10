const carousel = document.getElementById('slide');

const movies = [
    {
        title: 'The Shawshank Redemption',
        poster: './assets/ShawshankRedemptionMoviePoster.jpeg',
        class: 'the-shawshank-redemption',
        trailer: `assets/trailer/the-shawshank-redemption.mp4`
    },
    {
        title: 'The Dark Knight',
        poster: './assets/Dark_Knight.jpeg',
        class: 'the-dark-knight',
        trailer: `assets/trailer/the-dark-knight.mp4`
    },
    {
        title: 'Arrival',
        poster: './assets/Arrival,_Movie_Poster.jpeg',
        class: 'arrival',
        trailer: `assets/trailer/arrival.mp4`
    },
    {
        title: 'Sicario',
        poster: './assets/sicario.jpg',
        class: 'sicario',
        trailer: `assets/trailer/sicario.mp4`
    },
    {
        title: 'Sicario: Day Of The Soldado',
        poster: './assets/sicario-day-of-the-soldado.png',
        class: 'sicario-day-of-the-soldad0',
        trailer: `assets/trailer/sicario-day-of-the-soldado.mp4`
    },
    {
        title: 'Coco',
        poster: './assets/coco.jpeg',
        class: 'coco',
        trailer: `assets/trailer/coco.mp4`
    },

    //Duplicate
    {
        title: 'The Shawshank Redemption',
        poster: './assets/ShawshankRedemptionMoviePoster.jpeg',
        class: 'the-shawshank-redemption',
        trailer: `assets/trailer/the-shawshank-redemption.mp4`
    },
    {
        title: 'The Dark Knight',
        poster: './assets/Dark_Knight.jpeg',
        class: 'the-dark-knight',
        trailer: `assets/trailer/the-dark-knight.mp4`
    },
    {
        title: 'Arrival',
        poster: './assets/Arrival,_Movie_Poster.jpeg',
        class: 'arrival',
        trailer: `assets/trailer/arrival.mp4`
    },
    {
        title: 'Sicario',
        poster: './assets/sicario.jpg',
        class: 'sicario',
        trailer: `assets/trailer/sicario.mp4`
    },
    {
        title: 'Sicario: Day Of The Soldado',
        poster: './assets/sicario-day-of-the-soldado.png',
        class: 'sicario-day-of-the-soldad0',
        trailer: `assets/trailer/sicario-day-of-the-soldado.mp4`
    },
    {
        title: 'Coco',
        poster: './assets/coco.jpeg',
        class: 'coco',
        trailer: `assets/trailer/coco.mp4`
    }
];





function createPoster() {
    window.addEventListener('DOMContentLoaded', function() {
        for(let i = 0; i < movies.length; i++) {
            const poster = document.createElement('button');
            poster.classList.add('poster', `${movies[i].class}`);
            poster.style.backgroundImage = `url(${movies[i].poster})`;
            carousel.appendChild(poster);
        }



        //Open trailer

        const popUp = document.querySelector('.pop-up');
        const close = document.querySelector('.close').firstElementChild;
        const trailer = document.getElementById('trailer').firstElementChild;
        const posterBtn = document.getElementsByClassName('poster');


        for(let i = 0; i < posterBtn.length; i++) {
            posterBtn[i].addEventListener('click', (e) => {
                if(posterBtn[i].classList.contains(movies[i].class)) {
                    popUp.style.display = 'block';
                    trailer.src = movies[i].trailer;
                }
            })
        }

        //Close trailer
        close.addEventListener('click', () => {
            popUp.style.display = 'none'
            trailer.src = '';
        })
    })
}



createPoster();

