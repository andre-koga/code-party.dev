<!-- shows icon of language and text -->

<script lang="ts">
  import { conversionTable } from "$constants/extensionToTitle";

  export let language: string;
</script>

<div class="flex items-center">
  <img
    src={`/icons/${language}.svg`}
    alt={language}
    class="mr-2 h-6 object-contain"
  />
  <span class="mb-0.5 text-lg font-medium">{conversionTable[language]}</span>
</div>
