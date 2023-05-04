<script>
	import SignInForm from '$lib/components/SignInForm.svelte';
	 /** @type {import('./$types').ActionData} */
	 export let form;
</script>
<svelte:head>
  <title>Login</title>
  <meta name="description" content="About this app" />
</svelte:head>
<h1 class="text-2xl font-semibold text-center">Sign In</h1>
{#if form?.incorrect}
	<p class="mt-3 text-red-500 text-center font-semibold">Invalid email/password</p>
{/if}
<SignInForm class="max-w-xl mx-auto mt-8" />