<template>
  <nav class="main-nav flex gap-15">
<!--    <a v-scroll-to="{ el: '#about', offset: -80 }">-->
<!--      <span class="main-nav__label">About</span>-->
<!--    </a>-->

<!--    <a v-scroll-to="{ el: '#experience', offset: -30 }">-->
<!--      <span class="main-nav__label">Work</span>-->
<!--    </a>-->

<!--    <a v-scroll-to="{ el: '#contact', offset: 50 }">-->
<!--      <span class="main-nav__label">Contact</span>-->
<!--    </a>-->
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
