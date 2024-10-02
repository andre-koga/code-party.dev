<script lang="ts">
  import { loadStylesheet, removeStylesheet } from "$lib/themeManager";
  import { theme } from "$stores/themeStore";
  import hljs from "highlight.js";
  import "highlight.js/styles/github.css";
  import CodeFooter from "./CodeFooter.svelte";

  export let file: string = "";
  export let code: string = "";
  export let language: string = "";

  function highlightCode(element: HTMLElement) {
    hljs.highlightElement(element);
  }

  $: {
    $theme == "light"
      ? loadStylesheet(
          "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github.min.css",
        )
      : removeStylesheet();
  }
</script>

<pre
  class="block overflow-auto rounded-lg bg-stone-100 text-xs font-light sm:text-sm dark:hidden dark:bg-slate-950"><CodeFooter
    {code}
    {file}
    {language}
  /><code class="language-{language}" use:highlightCode>{code}</code></pre>
