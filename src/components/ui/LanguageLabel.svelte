<!-- shows icon of language and text -->

<script lang="ts">
  import { allowedLanguages } from "$constants/languages";

  export let language: string;
  export let size: "small" | "medium" | "large" = "large";
</script>

{#if size === "small"}
  <div class="flex items-center">
    <img
      src={`/icons/${language}.svg`}
      alt={language}
      class="mr-2 h-4 object-contain"
    />
    <span class="text-sm font-medium">{allowedLanguages[language].name}</span>
  </div>
{:else if size === "medium"}
  <div class="flex items-center">
    <img
      src={`/icons/${language}.svg`}
      alt={language}
      class="mr-2 h-5 object-contain"
    />
    <span class="font-medium">{allowedLanguages[language].name}</span>
  </div>
{:else}
  <div class="flex items-center">
    <img
      src={`/icons/${language}.svg`}
      alt={language}
      class="mr-2 h-6 object-contain"
    />
    <span class="text-lg font-medium">{allowedLanguages[language].name}</span>
  </div>
{/if}
