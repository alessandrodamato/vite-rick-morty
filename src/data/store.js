import { reactive } from "vue";

export const store = reactive ({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: [],
  statusList: [],
  speciesList: [],
  isError: false,
  pages: 1,
  queryParams:{
    name: '',
    status: '',
    species: ''
  }
})