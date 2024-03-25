<script>
import { store } from '../data/store'
  export default {
    data(){
      return{
        store,
        nameToSearch: '',
        statusToSearch: ''
      }
    },

    methods:{
      search(){
        this.store.cardsList.forEach(card => {
          if (!card.name.toLowerCase().includes(this.nameToSearch.toLowerCase()) || !card.status.includes(this.statusToSearch)) {
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
        @keyup.enter="search()"
        v-model.trim="nameToSearch" 
      >

      <select class="form-select mx-2" v-model="statusToSearch">
        <option value="" selected>Select Status...</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">unknown</option>
      </select>

      <button @click="search()" class="btn btn-primary mx-2">Search</button>
      <button @click="nameToSearch = ''; statusToSearch = ''; search()" class="btn btn-warning mx-2">Reset</button>

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