<template>
  <nav class="main-nav flex gap-15">
    <a href="#about">
      <span class="main-nav__label">About</span>
    </a>

    <a href="#experience">
      <span class="main-nav__label">Experience</span>
    </a>

    <a href="#contact">
      <span class="main-nav__label">Contact</span>
    </a>
  </nav>
</template>


<style lang="scss">
.main-nav {
  flex-wrap: nowrap;
}
@media screen and (max-width: 850px) {
 .main-nav {
    order: 10;
    min-width: 100%;
    a {
      padding-top: 5px;
      padding-bottom: 10px;
    }
  }
}
</style>
