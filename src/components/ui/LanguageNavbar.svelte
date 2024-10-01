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

<ul class="flex flex-wrap gap-2">
  {#each AllowedKeys().toSorted() as key}
    {#if selectedLanguages.includes(key)}
      <button
        class="rounded-lg border border-stone-800 bg-stone-100 px-4 py-0.5 dark:border-slate-300 dark:bg-slate-900"
        on:click={() => updateSelectedLanguages(key)}
      >
        <LanguageLabel language={key} size="medium" />
      </button>
    {:else}
      <button
        class="rounded-lg border border-stone-300 bg-stone-300 px-4 py-0.5 dark:border-slate-800 dark:bg-slate-700"
        on:click={() => updateSelectedLanguages(key)}
      >
        <LanguageLabel language={key} size="medium" />
      </button>
    {/if}
  {/each}
</ul>

<p class="-my-2 text-center text-xs italic opacity-50">
  is there a language not listed that you want?
  <a href="#footer" class="underline">submit a request</a>
  or
  <a
    href="https://github.com/andre-koga/code-party.dev"
    target="_blank"
    class="underline">collaborate on the project</a
  >
</p>
