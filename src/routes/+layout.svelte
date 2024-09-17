<script lang="ts">
  import "../style.css";

  import Footer from "$layout/Footer.svelte";
  import Header from "$layout/Header.svelte";
  import Sidebar from "$layout/Sidebar.svelte";

  import { theme } from "$stores/themeStore";
</script>

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

<style>
</style>
