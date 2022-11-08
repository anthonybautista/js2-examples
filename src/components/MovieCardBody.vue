<template>
  <div class="card-body">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Runtime: {{ item.runtime }}</p>
    <img v-if="item.image" :src="item.image"/>
  </div>
</template>

<script>
import Movie from "@/models/Movie";

export default {
  name: "MovieCardBody",
  props: {
    item: {type: Movie}
  },
}
</script>

<style scoped>

</style>