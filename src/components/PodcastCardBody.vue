<template>
  <div class="card-body">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Runtime: {{ item.runtime }}</p>
    <img v-if="item.image" :src="item.image"/>
  </div>
</template>

<script>
import Podcast from "@/models/Podcast";

export default {
  name: "PodcastCardBody",
  props: {
    item: {type: Podcast}
  },
}
</script>

<style scoped>

</style>