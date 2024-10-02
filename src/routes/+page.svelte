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
  import CodeBlockDark from "$ui/CodeBlockDark.svelte";
  import CodeBlockLight from "$ui/CodeBlockLight.svelte";
  import LanguageLabel from "$ui/LanguageLabel.svelte";
  import LanguageNavbar from "$ui/LanguageNavbar.svelte";
  import OptionsNavbar from "$ui/OptionsNavbar.svelte";
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

  function handleOptionsUpdate(
    event: CustomEvent<{
      twoColumns: boolean;
      sortBy: number;
      sortAscending: boolean;
    }>,
  ) {
    twoColumns = event.detail.twoColumns;
    sortBy = event.detail.sortBy;
    sortAscending = event.detail.sortAscending;
  }

  let twoColumns: boolean = false;
  let sortBy: number = 0;
  let sortAscending: boolean = true;
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

    <content class="grid flex-grow gap-6 p-6" id="top">
      <!-- buttons with allowed languages -->
      <!-- <h2 class="-mb-2 text-lg font-medium uppercase">Coding Languages</h2> -->

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

      <LanguageNavbar {selectedLanguages} on:update={handleUpdate} />
      <!-- <h2 class="-mb-2 text-lg font-medium uppercase">Options</h2> -->
      <OptionsNavbar on:update={handleOptionsUpdate} />

      <hr class="border-stone-300 dark:border-slate-800" />

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
            <div
              class="grid gap-5 {twoColumns ? 'grid-cols-2' : 'grid-cols-1'}"
            >
              {#each allLanguages(allData, category, problem) as language}
                {#if selectedLanguages.length === 0 || selectedLanguages.includes(language)}
                  <div class="overflow-hidden">
                    <h4 class="px-2 pb-2">
                      <LanguageLabel {language} size="medium" />
                    </h4>
                    {#each allFiles(allData, category, problem, language) as file}
                      <CodeBlockDark
                        file={fileContent(
                          allData as any,
                          category as any,
                          problem as any,
                          language as any,
                          file as any,
                        )}
                        {language}
                      />
                      <CodeBlockLight
                        file={fileContent(
                          allData as any,
                          category as any,
                          problem as any,
                          language as any,
                          file as any,
                        )}
                        {language}
                      />
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
