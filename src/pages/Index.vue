<template>
  <Layout class="layout-homepage">

    <LazyHydrate when-idle>
      <home-intro />
    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <home-about-me />
    </LazyHydrate>
    
    <LazyHydrate when-visible>
      <home-experience />
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
import HomeExperience from '@/components/home/HomeExperience.vue'

export default {
  components: {
    LazyHydrate,
    HomeIntro,
    HomeAboutMe,
    HomeExperience,
    HomeBlog
  },
  
  metaInfo: {
    title: 'Hardik Shah personal site'
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


