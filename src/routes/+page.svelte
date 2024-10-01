<script lang="ts">
  import {
    allCategories,
    allFiles,
    allLanguages,
    allProblems,
    titlefy,
    fileContent,
    type AllData,
    categoryURL,
    problemURL,
  } from "$constants/querying";
  import Sidebar from "$layout/Sidebar.svelte";
  import LanguageLabel from "$ui/LanguageLabel.svelte";
  import LanguageNavbar from "$ui/LanguageNavbar.svelte";
  import { onMount } from "svelte";

  export let data: {
    allData: AllData;
  };

  let allData: AllData = {};
  let selectedLanguages: string[] = [];
  let loading: boolean = true;

  onMount(() => {
    allData = data.allData;
    loading = false;
  });

  function handleUpdate(event: CustomEvent<{ selectedLanguages: string[] }>) {
    selectedLanguages = event.detail.selectedLanguages;
  }
</script>

{#if loading}
  <div class="flex h-screen items-center justify-center">
    <div
      class="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-stone-800 dark:border-slate-800"
    ></div>
  </div>
{:else}
  <div class="relative flex">
    <Sidebar {allData} />

    <content class="grid gap-6 p-6">
      <!-- buttons with allowed languages -->
      <LanguageNavbar {selectedLanguages} on:update={handleUpdate} />

      <div class="grid gap-6">
        <!-- show all of the files from allData -->
        {#each allCategories(allData) as category}
          <h2
            id={categoryURL(category, false)}
            class="pt-4 text-4xl font-medium"
          >
            {titlefy(category)}
          </h2>
          {#each allProblems(allData, category) as problem}
            <h3
              id={problemURL(category, problem, false)}
              class="pb-2 pt-4 text-2xl font-medium"
            >
              {titlefy(problem)}
            </h3>
            <div class="grid gap-5">
              {#each allLanguages(allData, category, problem) as language}
                {#if selectedLanguages.length === 0 || selectedLanguages.includes(language)}
                  <div class="overflow-hidden">
                    <h4 class="px-2 pb-2">
                      <LanguageLabel {language} size="medium" />
                    </h4>
                    {#each allFiles(allData, category, problem, language) as file}
                      <pre
                        class="overflow-auto rounded-lg bg-stone-100 p-4 text-xs font-light sm:text-sm dark:bg-slate-950">{fileContent(
                          allData,
                          category,
                          problem,
                          language,
                          file,
                        )}</pre>
                    {/each}
                  </div>
                {/if}
              {/each}
            </div>
          {/each}
        {/each}
      </div>
    </content>
  </div>
{/if}
