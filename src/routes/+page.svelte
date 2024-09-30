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
  import { onMount } from "svelte";

  let allData: AllData = {};
  let possibleLanguages = ["py", "js", "cs", "java"];
  let selectedLanguages: string[] = [];

  const fetchData = async () => {
    try {
      const response = await fetch("/api/code/all");
      if (response.ok) {
        const data = await response.json();
        allData = data;
      } else {
        console.error("Error fetching code structure");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  onMount(fetchData);
</script>

<div class="relative flex">
  <Sidebar {allData} />

  <content class="grid gap-6 p-6">
    <!-- buttons with allowed languages -->
    <ul class="flex gap-2">
      {#each possibleLanguages as language}
        {#if selectedLanguages.includes(language)}
          <button
            class="rounded-lg border border-stone-800 bg-stone-100 px-4 py-0.5 dark:border-slate-300 dark:bg-gray-950"
            on:click={() => {
              selectedLanguages = selectedLanguages.filter(
                (l) => l !== language,
              );
            }}
          >
            <LanguageLabel {language} size="medium" />
          </button>
        {:else}
          <button
            class="rounded-lg border border-stone-300 bg-stone-300 px-4 py-0.5 dark:border-slate-800 dark:bg-slate-800"
            on:click={() => {
              selectedLanguages = [...selectedLanguages, language];
            }}
          >
            <LanguageLabel {language} size="medium" />
          </button>
        {/if}
      {/each}
    </ul>

    <div class="grid gap-6">
      <!-- show all of the files from allData -->
      {#each allCategories(allData) as category}
        <h2 id={categoryURL(category, false)} class="pt-4 text-4xl font-medium">
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
                <div>
                  <h4 class="px-2 pb-2"><LanguageLabel {language} /></h4>
                  {#each allFiles(allData, category, problem, language) as file}
                    <pre
                      class="rounded-lg bg-stone-100 p-4 text-sm font-light dark:bg-gray-950">{fileContent(
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
