<script lang="ts">
  const icons: string[] = ["js", "java", "rs", "py", "cs"];
</script>

<footer
  class="border-t border-stone-400 bg-stone-100 p-2 sm:p-12 sm:pb-4 dark:border-slate-600 dark:bg-slate-900"
  id="footer"
>
  <iframe
    class="hidden overflow-hidden rounded-lg border border-slate-800 dark:block"
    src="https://app.youform.com/forms/ng44p5ft"
    loading="lazy"
    width="100%"
    height="400"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="YouForm Survey"
  ></iframe>

  <iframe
    class="block overflow-hidden rounded-lg border border-stone-200 dark:hidden"
    src="https://app.youform.com/forms/azlrbq1j"
    loading="lazy"
    width="100%"
    height="400"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="YouForm Survey"
  ></iframe>

  <a href="https://github.com/andre-koga/code-party.dev" target="_blank">
    <div class="mt-8 grid gap-2 p-2 text-center sm:p-12">
      <h1 class="text-5xl">CodeParty(💫)</h1>
      <h2 class="text-xl opacity-70">Compare Coding Languages & Approaches</h2>
      <ul class="mt-6 flex justify-center gap-5">
        {#each icons as language}
          <img
            src={`/icons/${language}.svg`}
            alt={language}
            class="h-9 object-contain"
          />
        {/each}
        <p class="px-1 text-2xl font-medium">...</p>
      </ul>
    </div>
  </a>

  <!-- footer message -->
  <div
    class="mt-8 rounded-lg bg-stone-200 py-2 text-center text-sm dark:bg-slate-800"
  >
    <p>
      Made with <i>lots of bugs, sweat, and tears</i> (and ❤️) by{" "}
      <a href="https://github.com/andre-koga" target="_blank">Koga</a>
    </p>
  </div>
</footer>

<style>
  iframe {
    background-color: white !important;
  }
</style>
