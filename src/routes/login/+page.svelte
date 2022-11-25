<script lang="ts">
	import BackgroundImage from './BackgroundImage.svelte'
	import LoginForm from './LoginForm.svelte'

	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<div class="page">
	<LoginForm {form} />
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
