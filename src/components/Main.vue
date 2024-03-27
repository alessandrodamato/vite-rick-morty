<script>
import { store } from '../data/store'
import Card from './partials/Card.vue'
  export default {
    components:{
      Card
    },

    data(){
      return{
        store
      }
    }
  }
</script>



<template>

  <main>

    <div class="container">
      
      <div v-if="store.isError" class="text-center fs-1">Nessun risultato trovato!</div>
      <div class="row row-cols-4">

        <Card 
        v-for="card in store.cardsList"
        :key="card.id"
        :name="card.name"
        :status="card.status"
        :species="card.species"
        :image="card.image"
        />
        
      </div>

    </div>

  </main>
  
</template>



<style lang="scss" scoped>

  main{
    background: linear-gradient(#e66465, #9198e5);
    min-height: calc(100vh - 230px - 96px);
  }

</style>