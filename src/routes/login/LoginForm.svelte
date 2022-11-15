<div class="flex h-full w-full">
	<div class="ml-auto mr-auto flex w-2/3 flex-col gap-4 pt-40">
		<div class="header">
			Welcome Back
			<span>Enter your credentials</span>
		</div>
		<div class="input">
			<label for="email"> Email </label>
			<input id="email" type="email" />
		</div>
		<div class="input">
			<label for="password">Password</label>
			<input id="password" type="password" />
		</div>
		<button>Sign In</button>
	</div>
</div>

<style lang="postcss">
	* {
		@apply font-sans;
	}
	.header {
		@apply pb-2 text-center text-2xl font-black tracking-wider;
		color: #348341;

		> span {
			@apply block text-base font-normal tracking-normal;
			color: #617c66;
		}
	}

	.input {
		@apply flex flex-col gap-2;

		:focus {
			box-shadow: inset 0 0 0 2px #348341;
			outline: none !important;
		}

		> label {
			@apply font-bold;
		}

		> input {
			@apply rounded-lg py-2 px-4;
		}
	}

	button {
		@apply rounded-2xl p-4 font-bold text-white;
		background-color: #367d43;
	}

	@screen sm {
		.header {
			@apply text-4xl;
		}
	}
</style>
