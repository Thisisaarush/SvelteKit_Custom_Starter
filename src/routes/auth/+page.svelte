<script>
	import { signIn } from '@auth/sveltekit/client';
</script>


<div class="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white">
	<img src="/svelte.svg" alt="svelte icon" width="50" />
	<button
		on:click={() => signIn('github',{callbackUrl: `${window.location.origin}`})}
		class="rounded-md border px-10 py-4 transition-all hover:bg-white hover:text-black"
		>Sign In with GitHub</button
	>
	<p>Sign-in to access Protected Routes e.g. /protected</p>
</div>