<script lang="ts">
  export let twoColumns: boolean = false;
  export let sortBy: number = 0;
  export let sortAscending: boolean = true;
  import { createEventDispatcher } from "svelte";

  const sortByOptions = ["alphabetical", "word count", "line count"];

  const dispatch = createEventDispatcher();

  function updateOptions() {
    dispatch("update", { twoColumns, sortBy, sortAscending });
  }

  $: twoColumns, sortBy, sortAscending, updateOptions();
</script>

<div class="mx-auto">
  <nav class="flex flex-wrap gap-4">
    <div class="grid place-items-center">
      <ul
        class="flex overflow-hidden rounded-lg border border-stone-400 text-sm dark:border-slate-600"
      >
        <li
          class={!twoColumns
            ? "bg-stone-100 dark:bg-slate-900"
            : "bg-stone-300 text-stone-400 dark:bg-slate-700 dark:text-slate-500"}
        >
          <button on:click={() => (twoColumns = false)}><p>one</p></button>
        </li>
        <li
          class={twoColumns
            ? "bg-stone-100 dark:bg-slate-900"
            : "bg-stone-300 text-stone-400 dark:bg-slate-700 dark:text-slate-500"}
        >
          <button on:click={() => (twoColumns = true)}><p>two</p></button>
        </li>
      </ul>
      <p class="text-xs text-stone-600 dark:text-slate-400">columns</p>
    </div>

    <div class="grid place-items-center">
      <ul
        class="flex overflow-hidden rounded-lg border border-stone-400 text-sm dark:border-slate-600"
      >
        {#each sortByOptions as sort, i}
          <li
            class={sortBy == i
              ? "bg-stone-100 dark:bg-slate-900"
              : "bg-stone-300 text-stone-400 dark:bg-slate-700 dark:text-slate-500"}
          >
            <button on:click={() => (sortBy = i)}><p>{sort}</p></button>
          </li>
        {/each}
      </ul>
      <p class="text-xs text-stone-600 dark:text-slate-400">sort by</p>
    </div>

    <div class="grid place-items-center">
      <ul
        class="flex overflow-hidden rounded-lg border border-stone-400 text-sm dark:border-slate-600"
      >
        <li
          class={sortAscending
            ? "bg-stone-100 dark:bg-slate-900"
            : "bg-stone-300 text-stone-400 dark:bg-slate-700 dark:text-slate-500"}
        >
          <button on:click={() => (sortAscending = true)}
            ><p>ascending</p></button
          >
        </li>
        <li
          class={!sortAscending
            ? "bg-stone-100 dark:bg-slate-900"
            : "bg-stone-300 text-stone-400 dark:bg-slate-700 dark:text-slate-500"}
        >
          <button on:click={() => (sortAscending = false)}
            ><p>descending</p></button
          >
        </li>
      </ul>
      <p class="text-xs text-stone-600 dark:text-slate-400">direction</p>
    </div>
  </nav>
</div>

<style>
  p {
    @apply px-2 py-1 uppercase;
  }
</style>
