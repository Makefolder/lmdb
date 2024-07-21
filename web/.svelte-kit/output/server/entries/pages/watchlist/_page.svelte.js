import { c as create_ssr_component, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
let saved = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let movies = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-nnjqwy_START -->${$$result.title = `<title>LMDB - Плейлист</title>`, ""}<!-- HEAD_svelte-nnjqwy_END -->`, ""} <div class="mt-[3rem] w-full flex justify-between" data-svelte-h="svelte-ttio83"><div class="space-y-5 max-w-[40%]"><h1 class="h1">Збережене</h1></div></div> <div class="mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full">${each(movies, (movie) => {
    return `${validate_component(Card, "Card").$$render($$result, { saved, movie }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
