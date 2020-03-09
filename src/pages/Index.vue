<template>
  <Layout class="layout-homepage">

    <LazyHydrate when-idle>
      <home-intro />
    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <home-about-me />
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
import HomeIntro from '@/components/home/HomeIntro.vue'
import HomeAboutMe from '@/components/home/HomeAboutMe.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
import HomeExamples from '@/components/home/HomeExamples.vue'

export default {
  components: {
    LazyHydrate,
    HomeIntro,
    HomeAboutMe,
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


