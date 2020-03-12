<template>
	<Card class="contact" id="mc_embed_signup">
		<p class="mb-half"><strong>👋 Say Hi.</strong></p>
		<p>
			My inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!
		</p>
		<p class="home-links text-center ">
			<a  href="mailto:mail.hardikshah@gmail.com" class="button primary button--large">
				<span>Say Hi! 👋</span>
			</a>
		</p>
	</Card>
</template>

<style lang="scss">
	.contact {

		&__top {
			height: 4px;
			position: absolute;
			top:0;
			left:0;
			right:0;
			background: linear-gradient(90deg, var(--primary-color) 0%, #8ED6FB 50%, #D32E9D 100%);
		}

		&__form {
			margin-bottom:0;
		}
		&__field {
			min-width: 200px;
			margin-bottom: 1rem;
		}
		&__button {
			margin: 0 auto;
			margin-bottom: 1rem;
		}

		p {
			margin-bottom: .5rem;
		}
	}
</style>