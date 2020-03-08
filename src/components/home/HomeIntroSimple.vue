<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">

        <div class="intro__message mb" hidden></div>

        <span>Hi, my name is</span>
        <h1 class="intro__title">
          <span>Hardik Shah</span>
          <br/>
          <span class="intro__subtitle">I build things</span>
          <transition-group name="rotate" class="intro__keywords">
            <div v-show="currentText == 0" key="0">
              Web
            </div>
            <div v-show="currentText == 1" key="1">
              Mobile
            </div>
            <div v-show="currentText == 2" key="2">
              Serverless Apps
            </div>
            <div v-show="currentText == 3" key="3">
              Modern PWAs
            </div>
            <div v-show="currentText == 4" key="4">
              Laravel
            </div>
            <div v-show="currentText == 5" key="5">
              Vue
            </div>
          </transition-group>
        </h1>

        <p class="intro__lead lead post mb">
            I'm a full-stack developer based in Melbourne, Victoria specializing in building (and occasionally designing) high-quality websites and applications. 🚀
        </p>
        <p class="intro__links">
          <a  href="#contact" class="button primary button--large">
            <span>Say Hi! 👋</span>
          </a>
        </p>
    </div>
  </Section>
</template>

<script>
export default {
  data () {
    return {
      currentText: 0
    }
  },
  mounted () {
    (($vm) => {
      (function animate () {
        $vm._counter = setTimeout(() => {
          $vm.currentText = ($vm.currentText + 1) % 6
          requestAnimationFrame(animate)
        }, 1500)
      })()
    })(this)
  },
  destroyed () {
    clearTimeout(this._counter)
  },
}
</script>

<style lang="scss">

.intro {
  padding: calc(2% + var(--space)) 0;

  &__title {
    font-size: 3rem;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 850px) {
      & {
        font-size: 2rem;
      }
    }
  }

   &__subtitle {
     font-size: 2rem;
     font-weight: 600;
     margin-left: auto;
     margin-right: auto;
     color: var(--secondary-color);

     @media screen and (max-width: 850px) {
         & {
             font-size: 2rem;
         }
     }
   }

  &__lead {
    max-width: 610px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;

    @media screen and (max-width: 850px) {
      & {
        font-size: 1rem;
      }
    }
  }

  &__info {
    font-size: .9rem;
  }

  &__keywords {
    position: relative;
    display: block;
  }
}
</style>
