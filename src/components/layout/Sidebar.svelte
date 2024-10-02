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
  class="relative hidden border-r border-stone-400 font-medium md:block md:w-72 lg:w-60 dark:border-slate-600"
>
  <div class="sticky top-0 flex flex-col p-4">
    <a
      href={"#top"}
      class="rounded px-2 py-1 hover:bg-stone-100 dark:hover:bg-slate-700"
      ><p>Back to top</p></a
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
  </div>
</sidebar>
