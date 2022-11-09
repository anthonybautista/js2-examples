<template>
  <div class="navbar-collapse mt-2 mb-2">
    <input v-model="searchTerm" placeholder="enter search term" @keyup.enter="search"/>
    <button @click="search" class="mx-2">Search</button>
  </div>
  <div>
    <div v-if="library.length > 0" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
      <div class="col" v-for="item in library" :key="item.title">
        <library-item-card :item="item" :remove-method="function(item){library.removeItem(item)}"></library-item-card>
      </div>
    </div>
    <div v-else>
      <p>No results found!</p>
    </div>
  </div>
</template>

<script>
import LibraryCollection from "@/models/LibraryCollection";
import Book from "@/models/Book";
import Movie from "@/models/Movie";
import LibraryItemCard from "@/components/LibraryItemCard";
import axios from "axios";
import ItemFactory from "@/models/ItemFactory";

export default {
  name: "LibraryItemList",
  components: {LibraryItemCard},
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('Interaction Design', 200,''))
          .addItem(new Book('The Gravity', 345, ''))
          .addItem(new Movie('How to Train Your Dragon', 96, ''))
          .addItem(new Movie('Strange Brew', 88, '')),
      searchTerm: "",
    }
  },

  // values/bindings passed to this component
  props: {},

  // functions that you want to use in your view that are triggered manually
  methods: {
    search: function() {
      this.library = new LibraryCollection();

      let newLibrary = [];

      axios.get(`https://itunes.apple.com/search?term=${this.searchTerm.replace(' ', '+')}&limit=50`)
          .then((response) => {
            if (response.data.resultCount > 0) {
              response.data.results.forEach(item => {
                let media = ItemFactory(item);
                if (typeof media !== 'undefined') {
                  newLibrary.push(media);
                }
              })
            }
          })
          .then(() => newLibrary.forEach(item => this.library.addItem(item)))
          .catch(function (error) {
            console.error(error);
          });

    }
  },

  // props/data that needs to be calculated when dependencies change
  computed: {

  },
}
</script>

<style scoped>

</style>