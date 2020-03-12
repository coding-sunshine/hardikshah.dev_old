<template>
  <div id="app" dark>
    <div orientation="left" class="leftfixed hide-for-small">
      <ul class="leftfixed--ul">
        <li>
          <a
                  aria-label="Twitter"
                  href="//twitter.com/hardsshah"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow me on Twitter"
          >
            <twitter-logo/>
          </a>
        </li>
        <li>
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
        </li>
        <li>
          <a
                  aria-label="github"
                  href="//github.com/coding-sunshine"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="coding-sunshine @ GitHub"
          >
            <github-logo/>
          </a>
        </li>
        <li>
          <a
                  aria-label="linkedin"
                  href="//www.linkedin.com/in/hardsshah/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="hardsshah @ LinkedIn"
          >
            <linkedin-logo/>
          </a>
        </li>
      </ul>
    </div>
    <div orientation="right" class="rightfixed hide-for-small">
      <div class="rightfixed--container">
        <a href="mailto:mail.hardikshah@gmail.com" class="rightfixed--container--link">mail.hardikshah@gmail.com</a>
      </div>
    </div>
    <Header />
    <slot />
    <Footer v-if="footer !== false" />
  </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'
import GithubLogo from '@/assets/images/github-logo.svg'
import TwitterLogo from '@/assets/images/twitter-logo.svg'
import DiscordLogo from '@/assets/images/discord-logo.svg'
import CodepenLogo from '@/assets/images/codepen-logo.svg'
import LinkedinLogo from '@/assets/images/linkedin-logo.svg'

export default {
  props: ['footer', 'primary-bg'],
  components: {
    Header,
    Footer,
    GithubLogo,
    TwitterLogo,
    DiscordLogo,
    CodepenLogo,
    LinkedinLogo,
  },
  computed: {
    mainClass() {
      let classes = []
      if(this.primaryBg) classes.push('main--bg-teritary')
      return classes
    },
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
}
.main--bg-teritary {
  background-color: var(--bg-teritary);
}
.leftfixed{
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: rgb(168, 178, 209);

  &--ul {
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: outside none none;

    &--link {
      font-size: 12px;
      letter-spacing: 0.1em;
      writing-mode: vertical-rl;
      margin: 20px auto;
      padding: 10px;
    }
  }
}
.leftfixed::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: rgb(168, 178, 209);
}
.rightfixed{
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: rgb(168, 178, 209);

  &--container {
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    position: relative;

    &--link {
      font-size: 12px;
      letter-spacing: 0.1em;
      writing-mode: vertical-rl;
      margin: 20px auto;
      padding: 10px;
    }
  }
}
.rightfixed::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: rgb(168, 178, 209);
}
</style>
