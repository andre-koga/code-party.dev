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

<button
  on:click={toggleTheme}
  class="flex items-center gap-2 rounded-lg bg-yellow-500 px-2 text-black dark:bg-indigo-600 dark:text-white"
  aria-label="Toggle theme"
>
  <Sun class="h-4 w-4 dark:opacity-30" />
  <Moon class="h-4 w-4 opacity-30 dark:opacity-100" />
</button>
