<script lang="ts">
  import GithubLink from "$ui/GithubLink.svelte";
  import Logo from "$ui/Logo.svelte";
  import ThemeSwitch from "$ui/ThemeSwitch.svelte";
</script>

<header
  class="flex gap-2 border-b border-stone-400 p-2 px-4 dark:border-slate-600"
>
  <Logo />
  <div class="flex-grow"></div>
  <GithubLink />
  <ThemeSwitch />
</header>
