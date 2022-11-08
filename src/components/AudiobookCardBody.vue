<template>
  <div class="card-body">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Genre: {{ item.genre }}</p>
    <img v-if="item.image" :src="item.image"/>
  </div>
</template>

<script>
import Audiobook from "@/models/Audiobook";

export default {
  name: "AudiobookCardBody",
  props: {
    item: {type: Audiobook}
  },
}
</script>

<style scoped>

</style>