<script lang="ts">
  import Logo from "$ui/Logo.svelte";
  import ThemeSwitch from "$ui/ThemeSwitch.svelte";
</script>

<header class="flex border-b border-slate-400 p-2 px-4 dark:border-slate-600">
  <Logo />
  <div class="flex-grow"></div>
  <ThemeSwitch />
</header>
