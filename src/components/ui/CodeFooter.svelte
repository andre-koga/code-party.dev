<script lang="ts">
  import { Clipboard } from "lucide-svelte";

  export let code: string;
  export let file: string;
  export let language: string;

  const charCount = (): number => {
    return code.length;
  };

  const lineCount = () => {
    return code.split("\n").length;
  };

  function clipboard(code: string) {
    navigator.clipboard.writeText(code).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  }
</script>

<div
  class="flex items-center gap-1.5 px-1.5 py-1 text-xs text-stone-600 sm:gap-3 dark:text-slate-400"
>
  <p class="hidden md:inline">{file}</p>
  <p><span class="hidden md:inline">chars=</span>{charCount()}</p>
  <p><span class="hidden md:inline">lines=</span>{lineCount()}</p>
  <p class="flex-grow"></p>
  <button
    title="Copy to clipboard"
    class="rounded-md border border-stone-300 bg-stone-100 p-1 active:border-stone-800 dark:border-slate-700 dark:bg-slate-800 dark:active:border-slate-200"
    on:click={() => clipboard(code)}
    ><p><Clipboard class="h-4 w-4" /></p></button
  >
</div>
