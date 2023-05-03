<script>
	import './styles.css';
    import Navigation from '$lib/components/Navigation.svelte';
	import { goto } from '$app/navigation';

    export let data;
    
	/**
	 * @param {{ detail: { signout: any; }; }} event
	 */
	async function handleSignOut(event) {
		const status = event.detail.signout;
        await goto(`/?signout=${status}`);
	}
</script>

<div class="app">
	<Navigation user={data.user} on:signout={handleSignOut}/>

    <div class="container mx-auto mt-8 antialiased">
        <slot />
    </div>
</div>