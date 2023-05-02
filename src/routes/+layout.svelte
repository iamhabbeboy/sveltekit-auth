<script>
	import Header from './Header.svelte';
	import './styles.css';
    import Navigation from '$lib/components/Navigation.svelte';
    import { user } from "../store/index";

    export let data;

    $: user.set(data.user);
</script>

<div class="app">
	<Navigation />

    <div class="container mx-auto mt-8 antialiased">
        <slot />
    </div>
</div>