<script>
import { store } from '../data/store'
  export default {
    data(){
      return{
        store,
        nameToSearch: ''
      }
    },

    methods:{
      searchByName(){
        this.store.cardsList.forEach(card => {
          if (!card.name.toLowerCase().includes(this.nameToSearch.toLowerCase())) {
            card.visible = false
          } else{
            card.visible = true
          }
        })
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
        @keyup.enter="searchByName()"
        v-model.trim="nameToSearch" 
      >

      <select class="form-select mx-2">
        <option value="0">Select Status...</option>
      </select>

      <button @click="searchByName()" class="btn btn-primary mx-2">Search</button>
      <button @click="nameToSearch = ''; searchByName()" class="btn btn-warning mx-2">Reset</button>

    </nav>

  </header>
  
</template>



<style lang="scss" scoped>

  header{
    input{
      width: 300px;
    }
    select{
      width: 150px;
    }
  }

</style>