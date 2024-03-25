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
      
      <div class="row row-cols-4">

        <Card 
        v-for="card in store.cardsList"
        :key="card.id"
        :name="card.name"
        :status="card.status"
        :species="card.species"
        :image="card.image"
        :class="{'d-none' : card.visible === false}"
        />
        
      </div>

    </div>

  </main>
  
</template>



<style lang="scss" scoped>

  main{
    background: linear-gradient(#e66465, #9198e5);
  }

</style>