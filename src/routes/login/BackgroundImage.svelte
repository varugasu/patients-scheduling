<div class="img-container">
	<div class="img" />
</div>

<style lang="scss">
	.img {
		background-image: url('login-bg.jpg');
		height: 100%;
		background-size: cover;
		background-position: center;
		border: 8px solid var(--bg-color);
		border-radius: 8px;

		@media (min-width: 640px) {
			visibility: visible;
		}
	}

	.img-container {
		width: 100%;
		height: 100%;
		visibility: hidden;
	}
</style>
