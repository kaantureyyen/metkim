<template>
  <v-carousel
    cycle
    interval="6000"
    progress
    hide-delimeters
    show-arrows="false"
    height="250"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item"
    >
      
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
      } else if (this.$page.path === '/en/about/') {
        this.items = [
          '/images/en_about_carousel/1.jpg',
          '/images/en_about_carousel/2.jpg',
          '/images/en_about_carousel/3.jpg'
        ]
      } else if (this.$page.path === '/about/products/scrap.html' ||
        this.$page.path === '/en/about/products/scrap.html') {
        this.items = [
          '/images/scrap_carousel/1.jpg',
          '/images/scrap_carousel/2.jpg'
        ]
      } else if (this.$page.path === '/about/products/radiation.html' ||
      this.$page.path === '/en/about/products/radiation.html') {
        this.items = [
          '/images/radiation_carousel/1.jpg',
          '/images/radiation_carousel/2.jpg'
        ]
      }
    }
  }
</script>

<style>

</style>