<script lang="ts">
  import { AllowedKeys } from "$constants/languages";
  import LanguageLabel from "./LanguageLabel.svelte";
  import { createEventDispatcher } from "svelte";

  export let selectedLanguages: string[] = [];

  const dispatch = createEventDispatcher();

  function updateSelectedLanguages(language: string) {
    if (selectedLanguages.includes(language)) {
      selectedLanguages = selectedLanguages.filter((l) => l !== language);
    } else {
      selectedLanguages = [...selectedLanguages, language];
    }
    dispatch("update", { selectedLanguages });
  }
</script>

<ul class="flex flex-wrap justify-center gap-2">
  {#each AllowedKeys().toSorted() as key}
    {#if selectedLanguages.includes(key)}
      <button
        class="rounded-lg border border-stone-800 bg-stone-100 px-2 py-0.5 sm:px-4 dark:border-slate-300 dark:bg-slate-900"
        on:click={() => updateSelectedLanguages(key)}
      >
        <LanguageLabel language={key} size="medium" />
      </button>
    {:else}
      <button
        class="rounded-lg border border-stone-400 bg-stone-300 px-2 py-0.5 sm:px-4 dark:border-slate-600 dark:bg-slate-700"
        on:click={() => updateSelectedLanguages(key)}
      >
        <LanguageLabel language={key} size="medium" />
      </button>
    {/if}
  {/each}
</ul>
