<script lang="ts">
	import { enhance } from '$app/forms'
</script>

<div>
	Hello
	<form use:enhance method="POST" action="?/logout">
		<button>Logout</button>
	</form>
</div>
