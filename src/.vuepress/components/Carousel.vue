<template>
  <v-carousel
    cycle
    progress
    hide-delimeter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
    >
      <v-img
        contain
        :src="item"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
    data: () => ({
      items: [],
    }),
    mounted: function() {
      if (this.$page.path === '/about/') {
        this.items = [
        '/images/about_carousel/1.jpg',
        '/images/about_carousel/2.jpg',
        '/images/about_carousel/3.jpg'
      ]
      } else {
        this.items = []
      }
    }
  }
</script>

<style>

</style>