<script>
	import { Alert } from 'flowbite-svelte'
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-6">
	<img src="/svelte.svg" alt="svelte icon" width="80px" />
	<h1 class="text-2xl font-bold text-orange-600">SvelteKit</h1>
	<Alert color='green' class='py-2 rounded-full'>
		<p>
			Visit <a class="underline underline-offset-2" href="https://kit.svelte.dev">kit.svelte.dev</a> to
			read the documentation
		</p>
	</Alert>
</div>

<style lang="postcss">
	:global(html) {
		background-color: black;
		color: white;
	}
</style>
