<script lang="ts">
	import BackgroundImage from './BackgroundImage.svelte'
	import LoginForm from './LoginForm.svelte'
</script>

<div class="page">
	<LoginForm />
	<BackgroundImage />
</div>

<style lang="postcss">
	.page {
		@apply grid h-screen bg-background;
	}

	@screen sm {
		.page {
			@apply grid-cols-2;
		}
	}
</style>
