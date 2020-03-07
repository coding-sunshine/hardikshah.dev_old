<template>
  <header>
    <div class="header-bar"></div>
    <div class="header-inner container flex gap-30">

      <Logo/>

      <Nav class="flex-fit"/>

<!--      <SearchForm />-->

      <nav class="header-actions flex">
        <ToggleTheme />

        <a
          aria-label="Twitter"
          href="//twitter.com/hardsshah"
          rel="noopener noreferrer"
          target="_blank"
          title="Follow me on Twitter"
        >
          <twitter-logo/>
        </a>

        <a
          aria-label="Codepen"
          href="//codepen.io/coding-sunshine"
          rel="noopener noreferrer"
          class="hide-for-small"
          target="_blank"
          title="coding-sunshine @ Codepen"
        >
          <codepen-logo/>
        </a>

        <a
          aria-label="github"
          href="//github.com/coding-sunshine"
          rel="noopener noreferrer"
          target="_blank"
          title="coding-sunshine @ GitHub"
        >
          <github-logo/>
        </a>

        <a
          aria-label="linkedin"
          href="//www.linkedin.com/in/hardsshah/"
          rel="noopener noreferrer"
          target="_blank"
          title="hardsshah @ LinkedIn"
        >
          <linkedin-logo/>
        </a>

      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    gridsomeVersion
  }
}
</static-query>

<script>
import Logo from './Logo'
import Nav from './Nav'
import SearchForm from '@/components/SearchForm.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
import GithubLogo from '@/assets/images/github-logo.svg'
import TwitterLogo from '@/assets/images/twitter-logo.svg'
import DiscordLogo from '@/assets/images/discord-logo.svg'
import CodepenLogo from '@/assets/images/codepen-logo.svg'
import LinkedinLogo from '@/assets/images/linkedin-logo.svg'

import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    Logo,
    GithubLogo,
    TwitterLogo,
    ToggleTheme,
    DiscordLogo,
    CodepenLogo,
    LinkedinLogo,
    SearchForm,
    Nav,
    LazyHydrate
  }
}
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;
  transition: background-color .3s, border-color, .3s;


  .header-bar {
    background: linear-gradient(90deg, var(--primary-color) 0%,  #8ED6FB 50%, #D32E9D 100%);
    padding: 2px;
    text-align: center;
    color:#FFF;
    font-size: 1rem;

    a {
      color: currentColor;
    }
  }

  .header-inner {
    padding: 0 var(--space);
    min-height: var(--header-height);
  }

  @media screen and (min-width: 992px) and (max-resolution: 1) {
    backdrop-filter: blur(4px);
  }

  @media screen and (min-width: 992px) and (-webkit-max-device-pixel-ratio: 1) {
    backdrop-filter: blur(4px);
  }
}
</style>
