<template>
    <div class="container">
        <div class="header">
            <h1 class="header-title">IMDb</h1>
            <!-- eslint-disable-next-line max-len -->
            <h3 class="header-subtitle">Personalized Recommendations | Your Watchlist | Your Ratings | Contribute to IMDb</h3>
        </div>
        <div class="movie" v-for="(data, index) in movie" :value="data" :key="index">
            <div class="movie-item" @click="detailfilm(data.id)">
                <img v-bind:src="data.image" class="img-fluid img-movie" v-bind:alt="data">
            </div>
        </div>
        <div class="footer">
            <h5>@1990-2020 by IMDb.com, Inc</h5>
        </div>
    </div>
</template>
<script>
import Img1 from '../assets/movie/1.jpg';
import Img2 from '../assets/movie/2.jpg';
import Img3 from '../assets/movie/3.jpg';
import Img4 from '../assets/movie/4.jpg';
import Img5 from '../assets/movie/5.jpg';
import Img6 from '../assets/movie/6.jpg';
import Img7 from '../assets/movie/7.jpg';
import Img8 from '../assets/movie/8.jpg';

export default {
  data: () => ({
    movie: [
      { id: 1, image: Img1 },
      { id: 2, image: Img2 },
      { id: 3, image: Img3 },
      { id: 4, image: Img4 },
      { id: 5, image: Img5 },
      { id: 6, image: Img6 },
      { id: 7, image: Img7 },
      { id: 8, image: Img8 },
    ],
  }),
  methods: {
    detailfilm(filmId) {
      this.$router.push({ name: 'detail', params: { id: filmId } });
    },
  },
};
</script>
<style scoped>
    .container {
        width: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(50px, auto);
    }
    .header {
        padding: 1px;
        grid-column: 1/5;
        background-color: #dba717;
        color: #fff;
        text-align: left;
    }
    .header-title {
      font-family: fantasy;
      font-size: 75px;
      color: #000000;
    }
    .header-subtitle {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans';
        font-size: 15px;
        color: rgb(255, 255, 255);
    }
    .footer {
        padding: 10px;
        grid-column: 1/5;
        background-color: #000000;
        color: #fff;
        text-align: center;
    }
    .movie {
        padding-top: 35px;
        padding-bottom: 35px;
        text-align: center;
        background-color: #ffffff;
    }
    .img-movie {
        width: 175px;
        box-shadow: 0 20px 35px 0 rgba(0,0,0,0.2);
        transition: 0.3s ease;
    }
    .img-movie:hover{
        box-shadow: 0px 45px 45px 0px rgba(0, 0, 0, 0.25);
    }
</style>
