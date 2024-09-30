<script lang="ts">
  import {
    allCategories,
    allProblems,
    categoryURL,
    problemURL,
    titlefy,
    type AllData,
  } from "$constants/querying";

  type Problems = {
    [key: string]: string[];
  };

  export let allData: AllData;
</script>

<sidebar
  class="sticky top-0 hidden h-screen flex-col border-r border-slate-400 p-4 font-medium md:flex md:w-60 dark:border-slate-600"
>
  {#each allCategories(allData) as category}
    <a
      href={categoryURL(category)}
      class="rounded px-2 py-1 hover:bg-stone-100 dark:hover:bg-slate-700"
      ><p>{titlefy(category)}</p></a
    >
    {#each allProblems(allData, category) as problem}
      <a
        href={problemURL(category, problem)}
        class="rounded px-2 py-1 text-gray-500 hover:bg-stone-100 dark:text-slate-400 dark:hover:bg-slate-700"
      >
        <p>
          {titlefy(problem)}
        </p>
      </a>
    {/each}
  {/each}
</sidebar>
