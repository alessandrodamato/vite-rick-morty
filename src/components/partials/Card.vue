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

  <div class="col text-center mb-5">

    <div class="rounded-50 overflow-hidden mb-3 image">
      <img class="w-100" :src="image" :alt="name">
    </div>
    <h3 class="mb-3">{{ name }}</h3>
    <div class="status py-3">{{ status }}</div>
    <div>{{ species }}</div>

  </div>
  
</template>



<style lang="scss" scoped>

.image{
  &:hover{
    scale: 1.05;
    box-shadow: 0 0 10px 10px grey;
  }
}

.status{
  width: 70px;
  margin: 0 auto;
  border-top: 1px solid black;
}

</style>