<template>
  <div class="card-body">
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Runtime: {{ item.runtime }}</p>
    <img v-if="item.image" :src="item.image"/>
  </div>
</template>

<script>
import Tv from "@/models/Tv";

export default {
  name: "TvCardBody",
  props: {
    item: {type: Tv}
  },
}
</script>

<style scoped>

</style>