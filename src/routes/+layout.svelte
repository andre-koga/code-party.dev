<script lang="ts">
  import "@fontsource/ibm-plex-sans/400.css";
  import "@fontsource/ibm-plex-sans/500.css";
  import "@fontsource-variable/jetbrains-mono";
  import "../style.css";

  import Footer from "$layout/Footer.svelte";
  import Header from "$layout/Header.svelte";

  import { theme } from "$stores/themeStore";

  export let title = "Code Party";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class:bg-light={$theme == "light"} class:bg-dark={$theme == "dark"}>
  <Header />

  <slot />

  <Footer />
</div>
