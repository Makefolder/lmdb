import { c as create_ssr_component, o as onDestroy, d as each, v as validate_component } from "../../chunks/ssr.js";
import { C as Card } from "../../chunks/Card.js";
const css = {
  code: "@media(max-width: 1460px){.card__container.svelte-hxcwpg{gap:1rem;justify-content:space-around}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Card from \\"../components/Card.svelte\\";\\nimport { onMount, onDestroy } from \\"svelte\\";\\nlet movies = [];\\nlet error = null;\\nlet page = 1;\\nlet loading = false;\\nconst fetchData = async () => {\\n  if (loading) return;\\n  loading = true;\\n  try {\\n    const response = await fetch(\\"http://192.168.68.111:3001/api/v1/movie/discover/\\" + page);\\n    const data = await response.json();\\n    if (data.message === \\"success\\") {\\n      movies = [...movies, ...data.data.results];\\n    } else {\\n      error = \\"Failed to fetch movies.\\";\\n    }\\n  } catch (err) {\\n    console.log(err);\\n    error = \\"Internal error occured\\";\\n  } finally {\\n    page++;\\n    loading = false;\\n  }\\n};\\nconst handleScroll = () => {\\n  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {\\n    fetchData();\\n  }\\n};\\nconst characters = [\\"\\", \\".\\", \\"..\\", \\"...\\"];\\nlet index = 0;\\nlet currentChar = characters[index];\\nconst updateCharacter = () => {\\n  index = (index + 1) % characters.length;\\n  currentChar = characters[index];\\n};\\nlet interval;\\nonMount(() => {\\n  interval = setInterval(updateCharacter, 500);\\n  fetchData();\\n  window.addEventListener(\\"scroll\\", handleScroll);\\n  return () => {\\n    window.removeEventListener(\\"scroll\\", handleScroll);\\n  };\\n});\\nonDestroy(() => {\\n  clearInterval(interval);\\n});\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>LMDB - Головна</title>\\n</svelte:head>\\n\\n<div class=\\"mt-[3rem] w-full flex justify-between cursor-default\\">\\n\\t<div class=\\"mt-[3.5rem] space-y-5 max-w-[37rem]\\">\\n\\t\\t<h1 class=\\"h1\\">Bad Times at the El Royale</h1>\\n\\t\\t<p>Дата виходу: 2018 <br /> Тривалість: 2год. 21хв.</p>\\n\\t\\t<div>\\n\\t\\t\\t1969. Four strangers check in at the El Royale Hotel. The hotel is deserted, staffed by a\\n\\t\\t\\tsingle desk clerk. Some of the new guests' reasons for being there are less than innocent and\\n\\t\\t\\tsome are not who they appear to be.\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"max-h-[50rem] max-w-[42rem] overflow-hidden\\">\\n\\t\\t<img\\n\\t\\t\\tclass=\\"latest__movie w-full h-full object-cover\\"\\n\\t\\t\\tsrc=\\"../../el-royale-edit.png\\"\\n\\t\\t\\talt=\\"latest movie frame\\"\\n\\t\\t/>\\n\\t</div>\\n</div>\\n\\n<div class=\\"mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full\\">\\n\\t{#if error !== null}\\n\\t\\t<div class=\\"w-full text-center font-bold text-[3rem] py-[6rem]\\">Сталася помилка (500)</div>\\n\\t{:else}\\n\\t\\t{#each movies as movie}\\n\\t\\t\\t<Card {movie} />\\n\\t\\t{/each}\\n\\t{/if}\\n\\t{#if loading}\\n\\t\\t<div class=\\"w-full text-center font-bold text-[3rem] py-[6rem]\\">Завантаження{currentChar}</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t@media (max-width: 1460px) {\\n\\t\\t.card__container {\\n\\t\\t\\tgap: 1rem;\\n\\t\\t\\tjustify-content: space-around;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwFC,MAAO,YAAY,MAAM,CAAE,CAC1B,8BAAiB,CAChB,GAAG,CAAE,IAAI,CACT,eAAe,CAAE,YAClB,CACD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let movies = [];
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ertr2l_START -->${$$result.title = `<title>LMDB - Головна</title>`, ""}<!-- HEAD_svelte-ertr2l_END -->`, ""} <div class="mt-[3rem] w-full flex justify-between cursor-default" data-svelte-h="svelte-1t8flmy"><div class="mt-[3.5rem] space-y-5 max-w-[37rem]"><h1 class="h1">Bad Times at the El Royale</h1> <p>Дата виходу: 2018 <br> Тривалість: 2год. 21хв.</p> <div>1969. Four strangers check in at the El Royale Hotel. The hotel is deserted, staffed by a
			single desk clerk. Some of the new guests&#39; reasons for being there are less than innocent and
			some are not who they appear to be.</div></div> <div class="max-h-[50rem] max-w-[42rem] overflow-hidden"><img class="latest__movie w-full h-full object-cover" src="../../el-royale-edit.png" alt="latest movie frame"></div></div> <div class="mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full svelte-hxcwpg">${`${each(movies, (movie) => {
    return `${validate_component(Card, "Card").$$render($$result, { movie }, {}, {})}`;
  })}`} ${``} </div>`;
});
export {
  Page as default
};
