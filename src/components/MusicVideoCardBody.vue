<template>
  <div class="card-body">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Runtime: {{ item.runtime }}</p>
    <img v-if="item.image" :src="item.image"/>
  </div>
</template>

<script>
import MusicVideo from "@/models/MusicVideo";

export default {
  name: "MusicVideoCardBody",
  props: {
    item: {type: MusicVideo}
  },
}
</script>

<style scoped>

</style>