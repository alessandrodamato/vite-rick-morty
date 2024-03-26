import { reactive } from "vue";

export const store = reactive ({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: [],
  isError: false,
  queryParams:{
    name: '',
    status: '',
    species: ''
  }
})