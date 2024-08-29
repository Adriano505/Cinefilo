document.addEventListener("DOMContentLoaded", function() {
    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        document.querySelectorAll('.youtube-video').forEach(youtubeIframe => {
            let player = new YT.Player(youtubeIframe, {
                events: {
                    'onReady': (event) => {
                        const card = youtubeIframe.closest('.card');
                        card.addEventListener('mouseenter', () => {
                            youtubeIframe.style.display = 'block';
                            player.unMute();
                            player.setVolume(40);
                            player.playVideo();
                        });

                        card.addEventListener('mouseleave', () => {
                            player.pauseVideo();
                            player.mute();
                            youtubeIframe.style.display = 'none';
                        });
                    },
                    'onError': (event) => {
                        console.log("Error in YouTube Player:", event.data);
                    }
                }
            });
        });
    };
});

document.addEventListener('DOMContentLoaded', function() {
    setupScroll('.peliculas-grid-container', '.peliculas-left-btn', '.peliculas-right-btn');
});

function setupScroll(containerSelector, leftBtnSelector, rightBtnSelector) {
    const scrollContainer = document.querySelector(containerSelector);
    const leftButton = document.querySelector(leftBtnSelector);
    const rightButton = document.querySelector(rightBtnSelector);

    leftButton.addEventListener('click', function() {
        scrollContainer.scrollLeft -= 600; // Ajusta este valor según el tamaño de tus tarjetas
    });

    rightButton.addEventListener('click', function() {
        scrollContainer.scrollLeft += 600; // Ajusta este valor según el tamaño de tus tarjetas
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const leftButton = document.querySelector('.left-btn');
    const rightButton = document.querySelector('.right-btn');

    rightButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' }); // Desplaza 300px a la derecha
    });

    leftButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' }); // Desplaza 300px a la izquierda
    });
});

document.addEventListener('DOMContentLoaded', function() {
    setupScroll('.grid-container', '.series-left-btn', '.series-right-btn');
    setupScroll('.top-movies-list', '.movie-left-btn', '.movie-right-btn');
    setupScroll('.retro-grid-container', '.retro-left-btn', '.retro-right-btn');
    setupScroll('.peliculas-grid-container', '.peliculas-left-btn', '.peliculas-right-btn');
});

function setupScroll(containerSelector, leftBtnSelector, rightBtnSelector) {
    const scrollContainer = document.querySelector(containerSelector);
    const leftButton = document.querySelector(leftBtnSelector);
    const rightButton = document.querySelector(rightBtnSelector);

    leftButton.addEventListener('click', function() {
        scrollContainer.scrollLeft -= 600; // Ajusta este valor según el tamaño de tus tarjetas
    });

    rightButton.addEventListener('click', function() {
        scrollContainer.scrollLeft += 600; // Ajusta este valor según el tamaño de tus tarjetas
    });
}


  document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector('.movies-scroll');
    const leftBtn = document.querySelector('.left-slide');
    const rightBtn = document.querySelector('.right-slide');

    leftBtn.addEventListener('click', function() {
      scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', function() {
      scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const retroContainer = document.querySelector('.retro-grid-container');
    const leftBtn = document.querySelector('.retro-left-btn');
    const rightBtn = document.querySelector('.retro-right-btn');

    // Ajusta el valor '300' según el tamaño de tus tarjetas para un scroll adecuado
    rightBtn.addEventListener('click', () => {
        retroContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    leftBtn.addEventListener('click', () => {
        retroContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    setupScroll('.grid-container', '.left-btn', '.right-btn');
    // Repite setupScroll para otras configuraciones según sea necesario
});

function setupScroll(containerSelector, leftBtnSelector, rightBtnSelector) {
    const scrollContainer = document.querySelector(containerSelector);
    const leftButton = document.querySelector(leftBtnSelector);
    const rightButton = document.querySelector(rightBtnSelector);

    leftButton.addEventListener('click', function() {
        scrollContainer.scrollLeft -= 600; // Ajusta este valor según el tamaño de tus tarjetas
    });

    rightButton.addEventListener('click', function() {
        scrollContainer.scrollLeft += 600; // Ajusta este valor según el tamaño de tus tarjetas
    });
}