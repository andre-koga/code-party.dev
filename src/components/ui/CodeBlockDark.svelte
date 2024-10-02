<script lang="ts">
  import { loadStylesheet, removeStylesheet } from "$lib/themeManager";
  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css";
  import { theme } from "$stores/themeStore";

  export let file: string = "";
  export let language: string = "";

  function highlightCode(element: HTMLElement) {
    hljs.highlightElement(element);
  }

  $: {
    $theme == "dark"
      ? loadStylesheet(
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css",
        )
      : removeStylesheet();
  }
</script>

<pre
  class="hidden overflow-auto rounded-lg bg-stone-100 text-xs font-light sm:text-sm dark:block dark:bg-slate-950"><code
    class="language-{language}"
    use:highlightCode>{file}</code
  ></pre>
