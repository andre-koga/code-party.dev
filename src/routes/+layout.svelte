<script lang="ts">
  import "@fontsource/ibm-plex-sans/200.css";
  import "@fontsource/ibm-plex-sans/400.css";
  import "@fontsource/ibm-plex-sans/600.css";
  import "@fontsource/ibm-plex-sans/700.css";
  import "@fontsource-variable/jetbrains-mono";
  import "../style.css";

  import Footer from "$layout/Footer.svelte";
  import Header from "$layout/Header.svelte";
  import Sidebar from "$layout/Sidebar.svelte";

  import { theme } from "$stores/themeStore";

  export let title = "Code Party";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class:bg-light={$theme == "light"} class:bg-dark={$theme == "dark"}>
  <Header />

  <div class="flex">
    <Sidebar />
    <main class="flex-grow">
      <slot />
    </main>
  </div>

  <Footer />
</div>
