<template>
  <Layout class="layout-homepage">

    <LazyHydrate when-idle>
      <home-intro-simple />
    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <home-how-it-work-simple />
    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <home-examples />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <home-blog />
    </LazyHydrate>
    
  </Layout>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import HomeIntroSimple from '@/components/home/HomeIntroSimple.vue'
import HomeHowItWorkSimple from '@/components/home/HomeHowItWorkSimple.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeExamples from '@/components/home/HomeExamples.vue'

export default {
  components: {
    LazyHydrate,
    HomeIntroSimple,
    HomeHowItWorkSimple,
    HomeExamples,
    HomeBlog
  },
  
  metaInfo: {
    title: 'Modern Site Generator for Vue.js'
  }
}
</script>

<style>
@media screen and (min-width: 850px) {
  .layout-homepage header{
    border-color: transparent;  
  }
}
</style>


