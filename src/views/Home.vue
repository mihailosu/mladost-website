<template>
  <div class="home">
    <MainSection />
    <EventSection />
  </div>
</template>

<script>
// @ is an alias to /src
import MainSection from '@/components/home/MainSection.vue'
import EventSection from '@/components/home/EventSection.vue'

export default {
  name: 'Home',
  components: {
    MainSection,
    EventSection
  },
  created: () => {
    console.log("HOME HERE")
  }
}
</script>

<style scoped>

.home {
  color: rgb(219, 219, 219);
}

</style>