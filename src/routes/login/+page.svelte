<script lang="ts">
	import BackgroundImage from './BackgroundImage.svelte'
	import LoginForm from './LoginForm.svelte'
</script>

<div class="grid">
	<LoginForm />
	<BackgroundImage />
</div>

<style lang="scss">
	:root {
		--bg-color: #e8f4ea;
	}
	.grid {
		display: grid;
		place-items: center;
		grid-template-rows: 1fr;
		height: 100vh;
		background-color: var(--bg-color);

		@media (min-width: 640px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
