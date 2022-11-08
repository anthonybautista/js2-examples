<template>
  <div class="card h-100">
    <component :is="itemCardComponent" :item="item"></component>
    <div class="card-footer d-flex justify-content-end">
      <button class="btn btn-outline-danger" v-if="removeMethod" @click="removeMethod(item)">Remove</button>
      <button v-if="item.isAvailable()" class="btn btn-outline-success mx-1" @click="item.checkOut()">Check Out</button>
      <button v-else class="btn btn-outline-warning mx-1" @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<script>
import BookCardBody from "@/components/BookCardBody";
import MovieCardBody from "@/components/MovieCardBody";
import AudiobookCardBody from "@/components/AudiobookCardBody";
import SongCardBody from "@/components/SongCardBody";
import PodcastCardBody from "@/components/PodcastCardBody";
import TvCardBody from "@/components/TvCardBody";
import MusicVideoCardBody from "@/components/MusicVideoCardBody";

export default {
  name: "LibraryItemCard",
  components: {
    MusicVideoCardBody,
    TvCardBody, PodcastCardBody, SongCardBody, AudiobookCardBody, MovieCardBody, BookCardBody},
  props: {
    item: {
      //type: LibraryItem, // can't do this anymore because we don't have a LibraryItem prototype
      type: Object,
    },

    removeMethod: { type: Function },
  },

  computed: {
    itemCardComponent(){
      return this.item.constructor.type + "CardBody";
    }
  },
}
</script>

<style scoped>

</style>