<template>
  <Section class="about" id="about">
    <div class="grid-cols grid-cols--gap-large grid-cols--full-md">

      <Card title="About Me">
        <p>
          Hello! I'm Hardik, a full-stack developer based in Melbourne, Victoria who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, user friendly interfaces with efficient and modern backends.

          <h4>Early Years</h4>
          <p>
            I joined the founding engineering team at Kraff Softwares(a startup based in Ahmedabad) where I work on a wide variety of interesting and meaningful projects on a daily basis for a Silicon Vally Reale state startup, <a target="_blank" rel="noopener noreferrer" href="http://www.terabitz.com/">Terabitz</a> in early 2006 under mentorship of Mr. Ashfaq Munshi, a former Yahoo CTO.
          </p>
          <h4>The Journey</h4>
          <p>
            That was just a start of the journey, which led me to work with another startup, Clubwebsite(UK), which was later acquired by the <a target="_blank" rel="noopener noreferrer" href="https://www.pitchero.com/">Pitchero</a>

            In 2011 I co-founded <a target="_blank" rel="noopener noreferrer" href="https://aecordigital.com">Aecor Digital</a> and built an Indian based development and design team of 50 (and counting...)
          </p>
          <h4>Now</h4>
          <p>
            In 2017 I moved to Melbourne, Australia, and since then I am working as a remote CTO of <a target="_blank" rel="noopener noreferrer" href="https://aecordigital.com">Aecor Digital</a>.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
          <ul class="bullet-list mb">
            <li><Bullet /><a href="http://php.net/" target="_blank" rel="noopener noreferrer">PHP 7.x</a></li>
            <li><Bullet /><a href="https://laravel.com" target="_blank" rel="noopener noreferrer">Laravel</a></li>
            <li><Bullet /><a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwindcss</a></li>
          </ul>
          <ul class="bullet-list mb">
            <li><Bullet /><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue JS</a></li>
            <li><Bullet /><a href="https://www.nativescript.org" target="_blank" rel="noopener noreferrer">NativeScript</a></li>
            <li><Bullet /><a href="https://jamstack.org" target="_blank" rel="noopener noreferrer">JAMStack</a></li>
          </ul>
          <ul class="bullet-list mb">
            <li><Bullet /><a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySql</a></li>
            <li><Bullet /><a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">Git</a></li>
            <li><Bullet /><a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS</a></li>
          </ul>
      </Card>
    </div>
  </Section>
</template>

<script>
import Bullet from '~/assets/images/bullet.svg'

export default {
  components: {
    Bullet,
  }
}
</script>

<style lang="scss">
.about {

  min-height: calc(100vh);
  display: flex;
  align-items: center;

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

}
</style>
