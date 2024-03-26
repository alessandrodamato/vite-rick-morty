<script>
import { store } from '../data/store'
  export default {
    data(){
      return{
        store,
      }
    },

    methods:{

    }
  }
</script>



<template>

  <header class="p-5">

    <h1 class="text-center mb-5">- Rick&Morty -</h1>

    <nav class="d-flex justify-content-center">

      <input
        type="text"
        class="form-control mx-2"
        placeholder="Search character"
        @keyup.enter="$emit('searchByName')"
        v-model="this.store.queryParams.name"
      >

      <button @click="$emit('searchByName')" class="btn btn-primary mx-2">Search</button>
      <button @click="this.store.queryParams = {}; $emit('searchByName')" class="btn btn-warning mx-2">Reset</button>

    </nav>

  </header>
  
</template>



<style lang="scss" scoped>

  header{
    background-color: rgb(230, 99, 99);
    input{
      width: 300px;
    }
    select{
      width: 150px;
    }
  }

</style>