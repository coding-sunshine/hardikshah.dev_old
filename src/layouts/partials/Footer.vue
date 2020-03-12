<template>
  <footer class="text-center">
    <ul class="show-for-small footerul flex flex--center">
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
                target="_blank"
                title="Follow me on @ Codepen"
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
                title="Follow me on @ GitHub"
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
                title="Follow me on @ LinkedIn"
        >
          <linkedin-logo/>
        </a>
      </li>
    </ul>
    <div class="flex flex--center">By</div>
    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/hardsshah" class="flex flex--center"> @hardsshah</a>
  </footer>
</template>

<script>
  import GithubLogo from '@/assets/images/github-logo.svg'
  import TwitterLogo from '@/assets/images/twitter-logo.svg'
  import CodepenLogo from '@/assets/images/codepen-logo.svg'
  import LinkedinLogo from '@/assets/images/linkedin-logo.svg'

  export default {
    components: {
      GithubLogo,
      TwitterLogo,
      CodepenLogo,
      LinkedinLogo,
    }
  }
</script>

<style lang="scss">
footer {
  font-size: 0.75rem;
  background-color: var(--bg);
  border-top: 1px solid var(--border-color);
  margin-top: -1px;
  padding: 20px;
  z-index: 9;

  .footerul{
    list-style: none;
    li{
      padding: 5px;
      display: inline-block;
    }
  }
}
</style>
