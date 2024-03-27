import { reactive } from "vue";

export const store = reactive ({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: [],
  statusList: [],
  speciesList: [],
  queryParams:{},
  info: {},
  isError: false,
  isNextDisabled: false,
  isPrevDisabled: true,
  isVisible: true,
  currentPage: 1
})