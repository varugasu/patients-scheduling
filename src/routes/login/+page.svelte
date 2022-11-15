<script lang="ts">
	import BackgroundImage from './BackgroundImage.svelte'
	import LoginForm from './LoginForm.svelte'
</script>

<div class="page">
	<LoginForm />
	<BackgroundImage />
</div>

<style lang="postcss">
	:root {
		--bg-color: #e8f4ea;
	}
	.page {
		@apply grid h-screen;
		background-color: var(--bg-color);
	}

	@screen sm {
		.page {
			@apply grid-cols-2;
		}
	}
</style>
