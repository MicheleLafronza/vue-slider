const slides = [
{
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// console.log(slides);

// creo istanza di app Vue
const { createApp } = Vue

// definisco tutto quello che comprende l'app
createApp({
// inserisco dati
  data() {
    return {
        slides: [
                    {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],
        activeItem: 0,
    }
  },
  methods: {
    // al click su next cambia l'immagine cambia sulla successiva
    nextImage() {
        this.activeItem++;
        if (this.activeItem > this.slides.length - 1) {
            this.activeItem = 0;
        }
    },
    // al click su prev l'immagine cambia sulla precedente
    prevImage() {
        this.activeItem--;
        if (this.activeItem < 0) {
            this.activeItem = this.slides.length - 1;
        }
    },
    // al click sull'immagine la seleziono sullo schermo
    selectImage(index) {
        this.activeItem = index;
    },
    // Avvia l'autoplay che cambia l'immagine ogni volta che passano 3 secondi
    autoPlay() {
        setInterval(this.nextImage, 3000);
    }
  },
  mounted() {
    this.autoPlay();
}
// monto tutto sull'elemento
}).mount('#app')