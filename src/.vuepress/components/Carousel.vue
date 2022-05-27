<template>
  <v-carousel
    cycle
    interval="6000"
    hide-delimiters
    :show-arrows="false"
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
        '/metkim/images/about_carousel/1.jpg',
        '/metkim/images/about_carousel/2.jpg',
        '/metkim/images/about_carousel/3.jpg'
      ]
      } else if (this.$page.path === '/en/about/') {
        this.items = [
          '/metkim/images/en_about_carousel/1.jpg',
          '/metkim/images/en_about_carousel/2.jpg',
          '/metkim/images/en_about_carousel/3.jpg'
        ]
      } else if (this.$page.path === '/about/products/scrap.html' ||
        this.$page.path === '/en/about/products/scrap.html') {
        this.items = [
          '/metkim/images/scrap_carousel/1.jpg',
          '/metkim/images/scrap_carousel/2.jpg'
        ]
      } else if (this.$page.path === '/about/products/radiation.html' ||
      this.$page.path === '/en/about/products/radiation.html') {
        this.items = [
          '/metkim/images/radiation_carousel/1.jpg',
          '/metkim/images/radiation_carousel/2.jpg'
        ]
      }
    }
  }
</script>

<style>

</style>