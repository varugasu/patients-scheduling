<div class="login">
	<div class="form">
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

<style lang="scss">
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.login {
		width: 100%;
		height: 100%;
		display: flex;
	}

	.header {
		font-size: 2rem;
		text-align: center;
		padding-bottom: 2rem;
		letter-spacing: 2px;
		font-weight: 900;
		color: #348341;
		line-height: 80%;

		> span {
			display: block;
			font-size: 1rem;
			font-weight: 400;
			letter-spacing: normal;
			color: #617c66;
		}

		@media (min-width: 640px) {
			font-size: 2.5rem;
		}
	}

	.input {
		display: flex;
		flex-direction: column;
		gap: 8px;

		:focus {
			box-shadow: inset 0 0 0 2px #348341;
			outline: none !important;
		}

		> label {
			font-weight: bold;
		}

		> input {
			border-radius: 8px;
			padding: 0.5rem 1rem;
		}
	}

	button {
		background-color: #367d43;
		padding: 1rem;
		border-radius: 1rem;
		font-weight: bold;
		color: white;
	}

	.form {
		padding-top: 10rem;
		width: 67%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
