<script lang="ts">
  import { theme } from "$stores/themeStore.js";
  import Logo from "$ui/logo.svelte";
  import { Sun, Moon } from "lucide-svelte";

  // Function to toggle the theme
  function toggleTheme() {
    theme.update((current) => {
      const newTheme = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  }
</script>

<header class="flex border-b border-slate-600 p-2">
  <Logo />
  <div class="flex-grow"></div>
  <button
    on:click={toggleTheme}
    class="rounded-lg bg-yellow-500 px-2 text-black dark:bg-indigo-600 dark:text-white"
    aria-label="Toggle theme"
  >
    <Sun class="block h-4 w-4 dark:hidden" />
    <Moon class="hidden h-4 w-4 dark:block" />
  </button>
</header>
