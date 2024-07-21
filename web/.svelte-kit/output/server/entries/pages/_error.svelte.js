import { c as create_ssr_component } from "../../chunks/ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1amrbqn_START -->${$$result.title = `<title>LMDB - Помилка 404!</title>`, ""}<!-- HEAD_svelte-1amrbqn_END -->`, ""} <div class="space-y-5 my-5" data-svelte-h="svelte-1mq0j21"><h1 class="h1">Щось пішло не так...</h1> <p>Сторінку не знайдено (404).</p> <div><a href="/" class="text-tertiary-500 hover:text-error-500 transition ease-linear">Ніколи не пізно почати з початку.</a></div></div>`;
});
export {
  Error as default
};
