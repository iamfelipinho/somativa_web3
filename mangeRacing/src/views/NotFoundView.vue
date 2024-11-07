<script>
export default {
    data() {
        return {
            images: [
                "https://portaljipa.com.br/wp-content/uploads/elementor/thumbs/IMG-20230903-WA01641-e1693782358312-qbw0eg08s6ih14v2zh8qs03mixjr9w5pptivtqosbi.jpg",
                "https://defato.com/_ups/noticias/2018/07/16/ef7aca353ff5a55d66b49ffa8405d90c.jpg",
                "https://www.acidadeon.com/campinas/wp-content/uploads/sites/5/2023/08/moto_ficou_1200x675_27052022220614.jpg",
                "https://uploads.acordacidade.com.br/wp-content/uploads/2024/04/28204337/Motocicleta-fica-destruida-apos-acidente-no-interior-da-Bahia-Foto-Reproducao-Redes-Sociais.jpg"
            ],
            currentOffset: 0,
            slideWidth: 0
        };
    },
    mounted() {
        this.startCarousel();
        this.updateSlideWidth();
        window.addEventListener('resize', this.updateSlideWidth);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateSlideWidth);
    },
    methods: {
        startCarousel() {
            setInterval(() => {
                this.currentOffset += 2;
                if (this.currentOffset >= this.slideWidth * this.images.length) {
                    this.currentOffset = 0;
                }
            }, 16);
        },
        updateSlideWidth() {
            const carouselElement = this.$el.querySelector('.carousel');
            this.slideWidth = carouselElement.offsetWidth;
        }
    }
};
</script>

<template>
    <div>
        <h1 class="title">{{ $t('NOTFOUND.TITLE') }}</h1>
        <div class="carousel">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentOffset}px)` }">
                <img v-for="(image, index) in images" :key="index" :src="image" alt="Carousel Image">
            </div>
        </div>
        <p class="footer-text">{{ $t('NOTFOUND.MSG') }}</p>
    </div>
</template>



<style scoped lang="scss">
.title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: bold;
}

.carousel {
    overflow: hidden;
    max-width: 39%; 
    margin: 0 auto;
    display: flex;
    align-items: center;
}

.carousel-track {
    display: flex;
    transition: transform 0.1s linear;
    width: max-content;
}

img {
    width: 100%;
    height: auto;
    flex: 0 0 auto;
}

.footer-text {
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
}
</style>
