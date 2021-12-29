<template>
  <v-carousel
    cycle
    show-arrows-on-hover
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'http://www.metkim.com/images/SayfaSlaytlari/847_0_2910_12_10_2012.jpg'
        },
        {
          src: 'http://www.metkim.com/images/SayfaSlaytlari/892_49_5010_12_10_2012.jpg'
        },
        {
          src: 'http://www.metkim.com/images/SayfaSlaytlari/487_8_5110_12_10_2012.jpg'
        }
      ]
    }
  }
}
</script>

<style>

</style>