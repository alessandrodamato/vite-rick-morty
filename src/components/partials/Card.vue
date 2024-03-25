<script>
  export default {
    props:{
      name: String,
      status: String,
      species: String,
      image: String,
    }
  }
</script>



<template>

  <div class="col text-center mb-3">

    <div class="rounded-50 overflow-hidden">
      <img class="w-100" :src="image" :alt="name">
    </div>
    <h3>{{ name }}</h3>
    <div>{{ status }}</div>
    <div>{{ species }}</div>

  </div>
  
</template>



<style lang="scss" scoped>

</style>