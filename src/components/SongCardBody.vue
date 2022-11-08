<template>
  <div class="card-body">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Runtime: {{ item.runtime }}</p>
    <img v-if="item.image" :src="item.image"/>
  </div>
</template>

<script>
import Song from "@/models/Song";

export default {
  name: "SongCardBody",
  props: {
    item: {type: Song}
  },
}
</script>

<style scoped>

</style>