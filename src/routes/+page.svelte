<script lang="ts">
  import { onMount } from "svelte";

  type Examples = {
    [key: string]: string[];
  };

  let categories: string[] = [];
  let examples: Examples = {};
  let languages: string[] = [];

  let selectedCategory = "";
  let selectedExample = "";
  let selectedLanguages: string[] = [];
  let code: { [key: string]: string } = {};

  const fetchStructure = async () => {
    try {
      const response = await fetch("/api/code");
      if (response.ok) {
        const data = await response.json();
        categories = data.categories || [];
        examples = data.examples || {};
        languages = data.languages || [];

        if (categories.length > 0) {
          selectedCategory = categories[0];
          selectedExample = examples[selectedCategory]?.[0] || "";
          selectedLanguages = languages.slice(0, 1); // Select the first language by default
          fetchCode();
        }
      } else {
        console.error("Error fetching code structure");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchCode = async () => {
    code = {};
    for (const language of selectedLanguages) {
      try {
        const response = await fetch(
          `/api/code/${selectedCategory}/${selectedExample}/${language}`,
        );
        if (response.ok) {
          code[language] = await response.text();
        } else {
          code[language] = "Error fetching code";
        }
      } catch (error) {
        code[language] = "Error fetching code";
        console.error("Error:", error);
      }
    }
  };

  onMount(fetchStructure);

  // dynamically fetch code whenever we change the selected category, example, or languages
  $: {
    if (selectedCategory && selectedExample && selectedLanguages.length > 0) {
      fetchCode();
    }
  }
</script>

<h1>Code Display</h1>
<form>
  <label for="category">Category:</label>
  <select id="category" bind:value={selectedCategory}>
    {#each categories as category}
      <option value={category}>{category}</option>
    {/each}
  </select>

  <label for="example">Example:</label>
  <select id="example" bind:value={selectedExample}>
    {#each examples[selectedCategory] ?? [] as example}
      <option value={example}>{example}</option>
    {/each}
  </select>

  <label for="languages">Languages:</label>
  {#each languages as language}
    <div>
      <input
        type="checkbox"
        bind:group={selectedLanguages}
        value={language}
        id={language}
      />
      <label for={language}>{language}</label>
    </div>
  {/each}

  <!-- <button type="button" on:click={fetchCode}>Fetch Code</button> -->
</form>

{#each Object.keys(code) as language}
  <h2>{language}</h2>
  <pre>{code[language]}</pre>
{/each}

<style>
  pre {
    background-color: #f4f4f4;
    padding: 10px;
    border: 1px solid #ddd;
  }
</style>
