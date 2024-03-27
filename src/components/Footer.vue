<script>
import Paginator from './partials/Paginator.vue';
import { store } from '../data/store'
  export default {
    components:{
      Paginator
    },

    data(){
      return{
        store
      }
    }
  }
</script>



<template>

  <footer class="text-center p-5">
    <Paginator @search="$emit('search')" />
  </footer>
  
</template>



<style lang="scss" scoped>

  footer{
    background-color: rgb(145, 152, 230);
  }

</style>