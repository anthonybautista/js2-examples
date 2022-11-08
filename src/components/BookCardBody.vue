<template>
  <div class="card-body">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Genres: {{ item.genres }}</p>
    <img v-if="item.image" :src="item.image"/>
  </div>
</template>

<script>
import Book from "@/models/Book";

export default {
  name: "BookCardBody",
  props: {
    item: {type: Book}
  },
}
</script>

<style scoped>

</style>