<template>
	<Section dots="true" id="experience">
		<h2 class="container text-center">
          Work
        </h2>
        <p class="lead text-center container-md">
          Number of years doesn't matter but quality of learning does.
        </p>

		<div class="home-experience mb-x2">
			<Experience />
		</div>

        <p class="home-links text-center ">
            <a  href="#contact" class="button primary button--large">
                <span>Say Hi! 👋</span>
            </a>
        </p>
	</Section>
</template>

<script>
import Experience from '~/components/Experience.vue'
export default {
	components: {
        Experience
	}
}
</script>

<style>
.home-experience {
	margin: 0 auto;
	max-width: 960px;
}
</style>
