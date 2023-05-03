<script>
	export let data;
</script>
<svelte:head>
  <title>Protected Page</title>
  <meta name="description" content="About this app" />
</svelte:head>
<h1 class="text-2xl font-semibold text-center">Hi! You are registered with email: {data.user.email}.</h1>
