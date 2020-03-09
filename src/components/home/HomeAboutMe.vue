<template>
  <Section class="works" id="about">
    <div class="grid-cols grid-cols--gap-large grid-cols--full-md">

      <Card title="About Me">
        <p>
          Hello! I'm Hardik, a full-stack developer based in Melbourne, Victoria who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, user friendly interfaces with efficient and modern backends.

          <h4>Early Years</h4>
          <p>
            I joined the founding engineering team at Kraff Softwares(a startup based in Ahmedabad) where I work on a wide variety of interesting and meaningful projects on a daily basis for a Silicon Vally Reale state startup, <a target="_blank" href="http://www.terabitz.com/">Terabitz</a> in early 2006 under mentorship of Mr. Ashfaq Munshi, a former Yahoo CTO.
          </p>
          <h4>The Journey</h4>
          <p>
            That was just a start of the journey, which led me to work with another startup, Clubwebsite(UK), which was later acquired by the <a target="_blank" href="https://www.pitchero.com/">Pitchero</a>

            In 2011 I co-founded <a target="_blank" href="https://aecordigital.com">Aecor Digital</a> and built an Indian based development and design team of 50 (and counting...)
          </p>
          <h4>Now</h4>
          <p>
            In 2017 I moved to Melbourne, Australia, and since then I am working as a remote CTO of <a target="_blank" href="https://aecordigital.com">Aecor Digital</a>.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul class="bullet-list mb">
            <li><Bullet /><a href="http://php.net/" target="_blank">PHP 7.x</a></li>
            <li><Bullet /><a href="https://laravel.com" target="_blank">Laravel</a></li>
            <li><Bullet /><a href="https://tailwindcss.com" target="_blank">Tailwindcss</a></li>
          </ul>
          <ul class="bullet-list mb">
            <li><Bullet /><a href="https://vuejs.org" target="_blank">Vue JS</a></li>
            <li><Bullet /><a href="https://www.nativescript.org" target="_blank">NativeScript</a></li>
            <li><Bullet /><a href="https://jamstack.org" target="_blank">JAMStack</a></li>
          </ul>
          <ul class="bullet-list mb">
            <li><Bullet /><a href="https://www.mysql.com" target="_blank">MySql</a></li>
            <li><Bullet /><a href="https://git-scm.com" target="_blank">Git</a></li>
            <li><Bullet /><a href="https://aws.amazon.com" target="_blank">AWS</a></li>
          </ul>
      </Card>
    </div>
  </Section>
</template>

<script>
import GraphQlLogo from '~/assets/images/graphql-logo.svg'
import VueLogo from '~/assets/images/vue-logo.svg'
import WebpackLogo from '~/assets/images/webpack-logo.svg'
import GridsomeLogo from '~/assets/images/gridsome-small-white.svg'
import Bullet from '~/assets/images/bullet.svg'
import Dots from '~/components/Dots.vue'

export default {
  components: {
    Bullet,
    VueLogo,
    GridsomeLogo,
    WebpackLogo,
    GraphQlLogo,
    Dots
  }
}
</script>

<style lang="scss">
.works {

  .bullet-list {
    display: inline-block;
    margin-right: 2rem;
  }

  .bullet-list li {
    margin-bottom: .3rem;
  }

  .card__inner {
    padding: 30px 40px;
  }

  @media screen and (max-width: 850px) {
    .card {
      margin-bottom: 40px;
    }
  }


  &__tools {
    font-weight: 500;
    border: 1px solid var(--border-color);
    max-width: 230px;
    border-radius: 4px;
    z-index: 9;
    margin: 0 auto!important;
    padding: 10px;

    li {
      margin-bottom: 0;
    }
  }

  &__logo {
    background-color: var(--primary-color);
    width: 100px;
    z-index: 1;
    position: relative;
    height: 100px;
    margin: 0 auto;
    margin-top: 18%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 100%;
    z-index: 0;
    margin-bottom: 1rem;
    animation: bounce 2s infinite;

    svg {
      width: 70px;
      height: 70px;
    }
  }

  &__pulse-bg {
    animation: pulse 2s infinite;
    border: 3px solid var(--primary-color);
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 100%;
    opacity: .3;
    z-index: -1;

    + .works__pulse-bg {
      width: 95px;
      height: 95px;
      animation-delay: .3s;
    }
  }

  &__powered-by {
    opacity: .8;
    line-height: 1.3;
    padding-bottom: 1.2rem;
  }
}
</style>
