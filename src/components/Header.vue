<script>
import { store } from '../data/store'
  export default {
    data(){
      return{
        store
      }
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
        @keyup.enter="$emit('search')"
        v-model="this.store.queryParams.name"
      >

      <select class="form-select mx-2" v-model="this.store.queryParams.status">
        <option
          v-for="(status, index) in this.store.statusList"
          :key="`status-${index}`"
          :value="status"
        >
          {{ status }}
        </option>
      </select>

      <select class="form-select mx-2" v-model="this.store.queryParams.species">
        <option
          v-for="(species, index) in this.store.speciesList"
          :key="`species-${index}`"
          :value="species"
        >
          {{ species }}
        </option>
      </select>    

      <button @click="$emit('search')" class="btn btn-primary mx-2">Search</button>
      <button @click="this.store.queryParams = {}; $emit('search')" class="btn btn-warning mx-2">Reset</button>

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