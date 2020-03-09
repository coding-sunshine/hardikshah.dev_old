<template>
  <Section dots="true" secondary="true">
    <div class="container text-center container-sm mb">
      <h2>Latest from blog</h2>
    </div>
    <div class="blog-posts container container-md">
      <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
    <div class="container container-md mb" id="contact">
<!--      <Newsletter />-->
          <Contact />
    </div>

  </Section>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import Newsletter from '~/components/Newsletter'
import Contact from '~/components/Contact'

export default {
  components: {
    PostCard,
    Newsletter,
    Contact,
  }
}
</script>

<static-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        content
        author {
          id
          title
          path
          avatar (width: 60)
        }
        excerpt
      }
    }
  }
}
</static-query>
