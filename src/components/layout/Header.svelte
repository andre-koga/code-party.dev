<script lang="ts">
  import { theme } from "$stores/themeStore.js";
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

<button on:click={toggleTheme} class="" aria-label="Toggle theme">
  <Sun class="block h-4 w-4 dark:hidden" />
  <Moon class="hidden h-4 w-4 dark:block" />
</button>
