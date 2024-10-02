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
    codeblockURL,
  } from "$constants/querying";
  import Sidebar from "$layout/Sidebar.svelte";
  import CodeBlockDark from "$ui/CodeBlockDark.svelte";
  import CodeBlockLight from "$ui/CodeBlockLight.svelte";
  import LanguageLabel from "$ui/LanguageLabel.svelte";
  import LanguageNavbar from "$ui/LanguageNavbar.svelte";
  import OptionsNavbar from "$ui/OptionsNavbar.svelte";
  import { Link } from "lucide-svelte";
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

  function shareLink(text: string) {
    const baseURL = "https://www.codeparty.dev/";

    let finalURL = baseURL + text;

    navigator.clipboard.writeText(finalURL).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  }

  function orderOfLanguage(
    allData: AllData,
    category: string,
    problem: string,
    language: string,
    sortType: number,
    ascendingType: boolean,
    index: number,
  ): string {
    if (sortType == 0) {
      // alphabetical
      return (ascendingType ? "" : "-") + index.toString();
    } else if (sortType == 1) {
      // char count
      let totalCharCount = 0;
      allFiles(allData, category, problem, language).forEach((file) => {
        totalCharCount += fileContent(
          allData as any,
          category as any,
          problem as any,
          language as any,
          file as any,
        ).length;
      });

      return (ascendingType ? "" : "-") + totalCharCount.toString();
    } else if (sortType == 2) {
      // line count
      let totalLineCount = 0;
      allFiles(allData, category, problem, language).forEach((file) => {
        totalLineCount += fileContent(
          allData as any,
          category as any,
          problem as any,
          language as any,
          file as any,
        ).split("\n").length;
      });

      return (ascendingType ? "" : "-") + totalLineCount.toString();
    } else return "";
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

    <content class="grid flex-grow gap-6 px-2 py-6 sm:p-6" id="top">
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
              {#each allLanguages(allData, category, problem) as language, i}
                {#if selectedLanguages.length === 0 || selectedLanguages.includes(language)}
                  <div
                    class="grid gap-2 overflow-hidden"
                    style="order: {orderOfLanguage(
                      allData,
                      category,
                      problem,
                      language,
                      sortBy,
                      sortAscending,
                      i,
                    )};"
                  >
                    <div class="-mb-1 flex items-center">
                      <a
                        title="Share link"
                        class="rounded-md p-1 text-stone-400 active:bg-stone-300 dark:text-slate-600 dark:active:bg-slate-800"
                        href={codeblockURL(category, problem, language)}
                        on:click={() =>
                          shareLink(codeblockURL(category, problem, language))}
                        ><p><Link class="h-4 w-4" /></p></a
                      >
                      <h4
                        class="p-2"
                        id={codeblockURL(category, problem, language, false)}
                      >
                        <LanguageLabel {language} size="medium" />
                      </h4>
                      <div class="flex-grow"></div>
                    </div>
                    {#each allFiles(allData, category, problem, language) as file}
                      <CodeBlockDark
                        {file}
                        code={fileContent(
                          allData as any,
                          category as any,
                          problem as any,
                          language as any,
                          file as any,
                        )}
                        {language}
                      />
                      <CodeBlockLight
                        {file}
                        code={fileContent(
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
