<script>
import axios from 'axios'
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Main,
    Footer
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getApi() {
      axios.get(this.store.apiUrl, {
        params: this.store.queryParams
      })
        .then(res => {
          this.store.cardsList = res.data.results;
          this.store.isError = false
          this.store.pages = res.data.info.pages
          this.store.cardsList.forEach(card => {
            if (!this.store.statusList.includes(card.status)) {
            this.store.statusList.push(card.status)
          }
          })
          this.getAllPages()
        })
        .catch(error => {
          this.store.cardsList = [];
          this.store.isError = true
          console.log(error);
        })
    },

    getAllPages() {
      for (let i = 2; i < this.store.pages; i++) {
        axios.get(this.store.apiUrl, {
          params: {
            page: i
          }
        })
        .then(res => {
          res.data.results.forEach(card => {
            if (!this.store.speciesList.includes(card.species)) {
              this.store.speciesList.push(card.species)
            }
          })
        })
        .catch(error => {
          this.store.isError = true
          console.log(error);
        })
      }
    }
  },

  mounted() {
    this.getApi();
  }
}
</script>



<template>

  <Header @search="getApi" />

  <Main />

  <Footer />

</template>



<style lang="scss">
  @import url(./assets/scss/main.scss);
</style>