<template>
    <div class="container">
        <div class="header">
            <h1 class="header-title">IMDb</h1>
            <!-- eslint-disable-next-line max-len -->
            <h3 class="header-subtitle">Personalized Recommendations | Your Watchlist | Your Ratings | Contribute to IMDb</h3>
        </div>
        <div class="movie" v-for="(data, index) in movie" :value="data" :key="index">
            <div class="movie-item" v-if="filmId == data.id">
                <h1 class="page-title">Movie Details</h1>
                <img v-bind:src="data.image"  class="img-fluid img-movie" v-bind:alt="data">
                <div>
                    <h1>{{data.title}}</h1>
                    <br/>
                    <h2>IMDb : {{data.rating}}</h2>
                    <h4>{{data.release}} | {{data.duration}} | {{data.genre}} | {{data.age}}</h4>
                    <br/>
                    <p>Director : {{data.director}}</p>
                    <p>Cast by : {{data.cast}}</p>
                    <br/>
                    <h4>SYNOPSYS</h4>
                    <p class="desc">{{data.desc}}</p>
                </div>
            </div>
        </div>
        <div class="back">
            <router-link to='/'><button class="btn-back">BACK TO HOME</button></router-link>
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
  data() {
    return {
      filmId: this.$route.params.id,
      movie: [
        {
          id: 1,
          image: Img1,
          title: 'ALVIN AND THE CHIPMUNKS(2015)',
          rating: '5,0/10',
          release: '30 Desember 2015(Indonesia)',
          duration: '1h 32min',
          genre: 'Animation, Adventure, Comedy',
          age: 'SU',
          director: 'Walt BeckerCary',
          cast: 'Jason Lee, Justin Long, Matthew Gray Gubler.',
          desc: 'The Chipmunks believe that Dave plans to propose to his new girlfriend in Miami.--and dump them. They have three days to get to him and save themselves not only from losing Dave but also from gaining a terrible stepbrother.',
        },
        {
          id: 2,
          image: Img2,
          title: 'BACK TO THE FUTURE (1985)',
          rating: '8,5/10',
          release: '3 July 1985(USA)',
          duration: '1h 56min',
          genre: 'Adventure, Comedy, Sci-Fi',
          age: 'SU',
          director: 'Robert Zemeckis',
          cast: 'Michael J. Fox, Christopher Lloyd, Lea Thompson',
          desc: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
        },
        {
          id: 3,
          image: Img3,
          title: 'EVERST (2015)',
          rating: '7,1/10',
          release: '16 September 2015 (Indonesia)',
          duration: '2h 1min',
          genre: 'Action, Adventure, Boigraphy',
          age: '13+',
          director: 'Baltasar Kormákur',
          cast: 'Jason Clarke, Ang Phula Sherpa, Thomas M. Wright',
          desc: 'The story of New Zealands Robert Rob Edwin Hall. who on May 10, 1996, together with Scott Fischer, teamed up on a joint expedition to ascend Mount Everest.',
        },
        {
          id: 4,
          image: Img4,
          title: 'MISSION IMPOSSIBLE : FALLOUT (2018)',
          rating: '7,8/10',
          release: '25 July 2018 (Indonesia)',
          duration: '2h 27min',
          genre: 'Action, Adventure, Thriller',
          age: '13+',
          director: 'Christopher McQuarrie',
          cast: 'Tom Cruise, Henry Cavill, Ving Rhames',
          desc: 'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.',
        },
        {
          id: 5,
          image: Img5,
          title: 'MISSION IMPOSSIBLE : GHOST PROTOCOL (2011)',
          rating: '7,4/10',
          release: '16 December 2011 (Indonesia)',
          duration: '2h 12min',
          genre: 'Action, Adventure, Thriller',
          age: '13+',
          director: 'Brad Bird',
          cast: 'Tom Cruise, Jeremy Renner, Simon Pegg ',
          desc: 'The IMF is shut down when its implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organizations name.',
        },
        {
          id: 6,
          image: Img6,
          title: 'INTERSTELLAR (2014)',
          rating: '8,6/10',
          release: '6 November 2016 (Indonesia)',
          duration: '2h 49min',
          genre: 'Adventure, Drama, Sci-Fi',
          age: '13+',
          director: 'Christopher Nolan',
          cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain ',
          desc: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
        },
        {
          id: 7,
          image: Img7,
          title: 'NO TIME TO DIE (2020)',
          rating: '0,0/10',
          release: '8 April 2020 (Indonesia)',
          duration: '0h 0min',
          genre: 'Action, Adventure, Thriller',
          age: '13+',
          director: 'Cary Joji Fukunaga',
          cast: 'Ana de Armas, Daniel Craig, Léa Seydoux ',
          desc: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
        },
        {
          id: 8,
          image: Img8,
          title: 'NOW YOU SEE ME (2013)',
          rating: '7,3/10',
          release: '31 Mei 2013 (Indonesia)',
          duration: '1h 55min',
          genre: 'Crime, Mystery, Thriller',
          age: '13+',
          director: 'Louis Leterrier',
          cast: 'Jesse Eisenberg, Common, Mark Ruffalo',
          desc: 'An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.',
        },
      ],
    };
  },
};
</script>
<style scoped>
    .container {
        width: auto;
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
    }
    .movie-item {
        padding: 50px;
        width: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(50px, auto);
        text-align: left;
        background-color: #ededed;
    }
    .page-title {
        grid-column: 1/3;
        text-align: center;
        padding-bottom: 30px;
        background-color: #ededed;
        color: #cf0e0e;
        font-family: fantasy;
    }
    .back {
      text-align: center;
      padding-bottom: 50px;
      background-color: #ededed;
    }
    .btn-back {
        background-color: #cf0e0e;
        color: #fff;
        border: 0px;
        border-radius: 60px;
        text-align: center;
        margin: 5px 2px;
        padding: 20px 15px;
        cursor: pointer;
        transition: 0.3s;
        margin: 20px;
        width: 300px;
    }
    .btn-back:hover {
        background-color: transparent;
        border: 2px solid #cfc20e;
        color: #cfc20e;
    }
    .img-movie {
        width: 300px;
        box-shadow: 0 20px 25px 0 rgba(0,0,0,0.2);
        transition: 0.3s ease;
        padding-left: 150px;
    }
    .desc {
        text-align: justify;
    }
    .footer {
        padding: 10px;
        grid-column: 1/5;
        background-color: #000000;
        color: #fff;
        text-align: center;
    }
</style>
