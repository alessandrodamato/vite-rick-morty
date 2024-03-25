<script>
import axios from 'axios'
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
  export default {
    components:{
      Header,
      Main,
      Footer
    },

    data(){
      return{
        store
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrl)
        .then(res => {
          this.store.cardsList = res.data.results;
          console.log(this.store.cardsList);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },

    mounted(){
      this.getApi();
    }
  }
</script>



<template>

  <Header />

  <Main />
  
  <Footer />

</template>



<style lang="scss">

@import url(./assets/scss/main.scss);

</style>