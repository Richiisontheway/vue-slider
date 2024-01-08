// const slides = [
//     {
//     image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];



const { createApp } = Vue;

createApp({
    data(){
        return{
            counter: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
                
            ]
        }
    },
    methods: {
        nextImage() {
            console.log('bottone-avanti-cliccato');
            if(this.counter < this.slides.length -1 ){
                this.counter++
            }else{
                this.counter = 0; 
            }
            console.log(this.counter);
        },
        prevImage() {
            console.log('bottone-indietro-cliccato');
            if(this.counter > 0 ){
                this.counter--
            }else{
                this.counter = this.slides.length - 1; 
            }
            console.log(this.counter);
        }
    }
}).mount('#app');

    {/* <template>
    <div>
        <div v-for="(slide, index) in slides" :key="index" v-show="index === currentIndex">
        <!-- Contenuto dello slide -->
        <h2>{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
        </div>

        <button @click="prevSlide">Precedente</button>
        <button @click="nextSlide">Successivo</button>
        <button @click="toggleAutoplay">{{ autoplay ? 'Disattiva Autoplay' : 'Attiva Autoplay' }}</button>
    </div>
    </template>

    <script>
    export default {
    data() {
        return {
        slides: [
            { title: 'Slide 1', description: 'Contenuto dello slide 1' },
            { title: 'Slide 2', description: 'Contenuto dello slide 2' },
            { title: 'Slide 3', description: 'Contenuto dello slide 3' }
        ],
        currentIndex: 0,
        autoplay: false,
        autoplayInterval: null
        };
    },
    methods: {
        prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        toggleAutoplay() {
        this.autoplay = !this.autoplay;

        if (this.autoplay) {
            this.autoplayInterval = setInterval(() => {
            this.nextSlide();
            }, 3000); // Cambia slide ogni 3 secondi, puoi regolare l'intervallo come preferisci
        } else {
            clearInterval(this.autoplayInterval);
        }
        }
    },
    beforeDestroy() {
        // Assicurati di cancellare l'intervallo quando il componente viene distrutto
        clearInterval(this.autoplayInterval);
    }
    };
    </script> */}
