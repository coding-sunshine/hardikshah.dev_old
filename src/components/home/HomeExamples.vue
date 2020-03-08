<template>
	<Section dots="true" id="experience">
		<h2 class="container text-center">
          Experience
        </h2>
        <p class="lead text-center container-md">
          Number of years doesn't matter but quality of learning does.
        </p>

		<div class="home-examples mb-x2">
			<Examples />
		</div>

    <p class="home-links text-center ">
        <a  href="#contact" class="button primary button--large">
            <span>Say Hi! 👋</span>
        </a>
    </p>
	</Section>
</template>

<script>
import Examples from '~/components/Examples.vue'
export default {
	components: {
		Examples
	}
}
</script>

<style>
.home-examples {
	margin: 0 auto;
	max-width: 960px;
}
</style>
