<script lang="ts">
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<div class="flex h-full w-full">
	<form method="POST" action="/login" class="ml-auto mr-auto flex w-2/3 flex-col gap-4 pt-40">
		<div class="header">
			Welcome Back
			<span>Enter your credentials</span>
		</div>
		{#if form?.error}
			<div class="font-bold text-red-600">{form?.error}</div>
		{/if}
		<div class="input">
			<label for="email"> Email </label>
			<input id="email" name="email" type="email" />
		</div>
		<div class="input">
			<label for="password">Password</label>
			<input id="password" name="password" type="password" />
		</div>
		<button>Sign In</button>
	</form>
</div>

<style lang="postcss">
	* {
		@apply font-sans;
	}
	.header {
		@apply pb-2 text-center text-2xl font-black tracking-wider text-primary;

		> span {
			@apply block text-base font-normal tracking-normal text-primary-dark;
		}
	}

	.input {
		@apply flex flex-col gap-2;

		:focus {
			box-shadow: inset 0 0 0 2px theme(colors.primary.DEFAULT);
			outline: none !important;
		}

		> label {
			@apply font-bold text-primary-dark;
		}

		> input {
			@apply rounded-lg py-2 px-4;
		}
	}

	button {
		@apply rounded-2xl bg-primary p-4 font-bold text-white;
	}

	@screen sm {
		.header {
			@apply text-4xl;
		}
	}
</style>
