<template>
  <div class="logo" v-scroll-to="{ el: 'body', offset: 0 }">
    <g-link class="logo__link" to="/" title="Back to home">
      <Logo class="logo__svg hide-for-small" alt="hardikshah.dev" />
      <LogoSmall class="logo__svg show-for-small logo__svg--small" alt="hardikshah.dev" />
    </g-link>
  </div>
</template>

<script>
import Logo from '~/assets/images/only-logo.svg'
import LogoSmall from '~/assets/images/gridsome-logo-small.svg'
export default {
  components: {
    Logo,
    LogoSmall
  },
  methods: {
  }
}
</script>

<style lang="scss">
 .logo {
  &__svg{
  	max-width: 30px;
  	height: auto;
    margin-top: -3px;
    &--small {
      max-width: 25px;
    }
  }
 }
 .logofill{
   fill: red;
 }
</style>
