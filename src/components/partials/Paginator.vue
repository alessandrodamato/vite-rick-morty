<script>
import { store } from '../../data/store'
  export default {
    data(){
      return{
        store
      }
    },

    methods:{
      paginator(isNext){
        if (isNext) {
          if (this.store.info.next !== null) {
            this.store.hasNext = this.store.info.next;
            this.store.hasPrev = false;
            this.store.isPrevDisabled = false;
            this.store.currentPage++;
          }
        } else {
          if (this.store.info.prev !== null) {
            this.store.hasPrev = this.store.info.prev;
            this.store.hasNext = false;
            this.store.isNextDisabled = false;
            this.store.currentPage--;
          }
        }
        this.$emit('search')
      }
    }
  }
</script>



<template>

  <div :class="{'d-none' : !this.store.isVisible}">

    <button
      @click="paginator(false)"
      class="btn btn-primary text-uppercase"
      :class="{'disabled' : this.store.isPrevDisabled}"
    >&#60; prev
    </button>

      <span class="mx-3">{{ this.store.currentPage }} / {{this.store.info.pages}}</span>

   <button
      @click="paginator(true)"
      class="btn btn-primary text-uppercase"
      :class="{'disabled' : this.store.isNextDisabled}"
    >next &#62;
  </button>

  </div>
  
</template>



<style lang="scss" scoped>

</style>