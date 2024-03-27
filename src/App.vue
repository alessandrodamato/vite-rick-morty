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
      const url = this.store.hasNext ? this.store.info.next : this.store.hasPrev ? this.store.info.prev : null;
      axios.get(url ? url : this.store.apiUrl, {
        params: this.store.queryParams
      })
      .then(res => {
        this.store.cardsList = res.data.results;
        this.store.info = res.data.info;
        this.store.isError = false;

        this.store.cardsList.forEach(card => {
          if (!this.store.statusList.includes(card.status)) {
            this.store.statusList.push(card.status)
          }
        })
        if (!url) {this.setSpecies()}
        this.updateButtons();
      })
      .catch(error => {
        this.store.cardsList = [];
        this.store.isVisible = false;
        this.store.isError = true;
        console.log(error);
      })
    },

    setSpecies() {
      for (let i = 1; i <= this.store.info.pages; i++) {
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
    },

    updateButtons(){
      if (this.store.currentPage === 1 && this.store.info.pages === 1){
        this.store.isVisible = false
      } else {
        this.store.isVisible = true
        if (this.store.currentPage <= 1) {
        this.store.isPrevDisabled = true
        } else if (this.store.currentPage === this.store.info.pages) {
          this.store.isNextDisabled = true
        }
      } 
    },

    resetPaginator(){
      this.store.hasNext = false;
      this.store.hasPrev = false;
      this.store.currentPage = 1;
    }
  },

  mounted() {
    this.getApi();
  }
}
</script>



<template>

  <Header @search="getApi" @resetPaginator="resetPaginator" />

  <Main />

  <Footer @search="getApi" />

</template>



<style lang="scss">
  @import url(./assets/scss/main.scss);
</style>