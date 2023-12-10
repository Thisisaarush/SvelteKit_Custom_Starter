<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<main class="flex min-h-screen flex-col items-center justify-center gap-6">
	<img src="/svelte.svg" alt="svelte icon" width="80px" />
	<h1 class="text-2xl font-bold text-orange-600">SvelteKit</h1>
	<p>
		Visit <a class="underline underline-offset-2" href="https://kit.svelte.dev">kit.svelte.dev</a> to
		read the documentation
	</p>

	<p class=" rounded-lg bg-white/10 p-16">
		{#if $page.data.session}
			<div class="flex flex-col items-center justify-center gap-4 px-12">
				{#if $page.data.session.user?.image}
					<img src={$page.data.session.user.image} alt="user" width="50px" class="rounded-full" />
				{/if}
				<strong>{$page.data.session.user?.name ?? 'User'}</strong>
				<button
					on:click={() => signOut()}
					class="rounded-md bg-orange-600 p-2 text-center text-sm hover:bg-orange-500"
					>Sign Out</button
				>
			</div>
		{:else}
			<div class="flex flex-col items-center justify-center gap-6">
				<span class="notSignedInText">You are not signed in</span>
				<button
					on:click={() => signIn('github')}
					class="rounded-md px-10 py-4 transition-all border hover:bg-white hover:text-black"
					>Sign In with GitHub</button
				>
			</div>
		{/if}
	</p>
</main>

<style lang="postcss">
	:global(html) {
		background-color: black;
		color: white;
	}
</style>
