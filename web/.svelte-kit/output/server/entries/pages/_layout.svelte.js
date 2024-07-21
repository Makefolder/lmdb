import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "nav.svelte-b9q4vj.svelte-b9q4vj{display:flex;justify-content:space-between;align-items:center;padding:0.75rem 1rem;border-radius:1rem;border:1px solid rgba(255, 255, 255, 0.15);background:rgba(var(--color-surface-500) / 0.25);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.nav__logo.svelte-b9q4vj span.svelte-b9q4vj{color:rgb(var(--color-primary-500))}.nav__button.svelte-b9q4vj.svelte-b9q4vj,.logo__link.svelte-b9q4vj.svelte-b9q4vj{margin-left:0.25rem;padding:0.35rem 0.65rem;border-radius:0.75rem;transition:0.1s ease}",
  map: '{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let title;\\nexport let span;\\nexport let repo;\\nexport let logo;\\nexport let links;\\n<\/script>\\n\\n<nav class=\\"px-3\\">\\n\\t<div class=\\"flex items-center\\">\\n\\t\\t<a href=\\"/\\">\\n\\t\\t\\t<div class=\\"flex items-center\\">\\n\\t\\t\\t\\t{#if logo !== undefined}\\n\\t\\t\\t\\t\\t<div class=\\"max-w-8 max-h-8 mr-2 overflow-hidden\\">\\n\\t\\t\\t\\t\\t\\t<img class=\\"object-cover\\" src={logo} alt=\\"{title}{span}\\" />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t<div class=\\"nav__logo text-[1.75rem] mr-1 font-bold\\">{title}<span>{span}</span></div>\\n\\t\\t\\t</div>\\n\\t\\t</a>\\n\\t\\t<div>\\n\\t\\t\\t<a class=\\"logo__link {repo.colour}\\" href={repo.url} target=\\"_blank\\">{repo.title}</a>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"flex items-center\\">\\n\\t\\t{#each links as link}\\n\\t\\t\\t<div>\\n\\t\\t\\t\\t<a class=\\"nav__button {link.colour}\\" href={link.url}>{link.title}</a>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</nav>\\n\\n<style>\\n\\tnav {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0.75rem 1rem;\\n\\t\\tborder-radius: 1rem;\\n\\t\\tborder: 1px solid rgba(255, 255, 255, 0.15);\\n\\t\\tbackground: rgba(var(--color-surface-500) / 0.25);\\n\\t\\t-webkit-backdrop-filter: blur(10px);\\n\\t\\t        backdrop-filter: blur(10px);\\n\\t}\\n\\t.nav__logo span {\\n\\t\\tcolor: rgb(var(--color-primary-500));\\n\\t}\\n\\t.nav__button,\\n\\t.logo__link {\\n\\t\\tmargin-left: 0.25rem;\\n\\t\\tpadding: 0.35rem 0.65rem;\\n\\t\\tborder-radius: 0.75rem;\\n\\t\\ttransition: 0.1s ease;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkCC,+BAAI,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,OAAO,CAAC,IAAI,CACrB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC3C,UAAU,CAAE,KAAK,IAAI,mBAAmB,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,uBAAuB,CAAE,KAAK,IAAI,CAAC,CAC3B,eAAe,CAAE,KAAK,IAAI,CACnC,CACA,wBAAU,CAAC,kBAAK,CACf,KAAK,CAAE,IAAI,IAAI,mBAAmB,CAAC,CACpC,CACA,wCAAY,CACZ,uCAAY,CACX,WAAW,CAAE,OAAO,CACpB,OAAO,CAAE,OAAO,CAAC,OAAO,CACxB,aAAa,CAAE,OAAO,CACtB,UAAU,CAAE,IAAI,CAAC,IAClB"}'
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { span: span2 } = $$props;
  let { repo } = $$props;
  let { logo: logo2 } = $$props;
  let { links } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.span === void 0 && $$bindings.span && span2 !== void 0) $$bindings.span(span2);
  if ($$props.repo === void 0 && $$bindings.repo && repo !== void 0) $$bindings.repo(repo);
  if ($$props.logo === void 0 && $$bindings.logo && logo2 !== void 0) $$bindings.logo(logo2);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
  $$result.css.add(css$1);
  return `<nav class="px-3 svelte-b9q4vj"><div class="flex items-center"><a href="/"><div class="flex items-center">${logo2 !== void 0 ? `<div class="max-w-8 max-h-8 mr-2 overflow-hidden"><img class="object-cover"${add_attribute("src", logo2, 0)} alt="${escape(title2, true) + escape(span2, true)}"></div>` : ``} <div class="nav__logo text-[1.75rem] mr-1 font-bold svelte-b9q4vj">${escape(title2)}<span class="svelte-b9q4vj">${escape(span2)}</span></div></div></a> <div><a class="${"logo__link " + escape(repo.colour, true) + " svelte-b9q4vj"}"${add_attribute("href", repo.url, 0)} target="_blank">${escape(repo.title)}</a></div></div> <div class="flex items-center">${each(links, (link) => {
    return `<div><a class="${"nav__button " + escape(link.colour, true) + " svelte-b9q4vj"}"${add_attribute("href", link.url, 0)}>${escape(link.title)}</a> </div>`;
  })}</div> </nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { span: span2 } = $$props;
  let { logo: logo2 } = $$props;
  let { links } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0) $$bindings.title(title2);
  if ($$props.span === void 0 && $$bindings.span && span2 !== void 0) $$bindings.span(span2);
  if ($$props.logo === void 0 && $$bindings.logo && logo2 !== void 0) $$bindings.logo(logo2);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
  return `<footer class="rounded-t-2xl bg-surface-800/40 backdrop-blur-md mt-[6rem] border-t-[1px] border-x-[1px] border-surface-500/50 px-3 py-[1.25rem] mx-auto"><div class="flex justify-between"><div class="max-w-fit"><a href="/"><div class="flex items-center">${logo2 !== void 0 ? `<div class="max-w-8 max-h-8 mr-2 overflow-hidden"><img class="object-cover"${add_attribute("src", logo2, 0)} alt="${escape(title2, true) + escape(span2, true)}"></div>` : ``} <div class="nav__logo text-[1.75rem] mr-3 font-bold">${escape(title2)}<span class="text-primary-500">${escape(span2)}</span></div></div></a></div> <div class="opacity-80 hover:opacity-100 transition cursor-default" data-svelte-h="svelte-1g1ahrz">Все скінченно, далі лише відчай...</div> <div class="flex">${links !== void 0 ? `${each(links, (link) => {
    return `<div class="ml-1"><a class="${"transition py-[0.35rem] px-[0.65rem] rounded-xl " + escape(link.colour, true)}"${add_attribute("href", link.url, 0)}>${escape(link.title)}</a> </div>`;
  })}` : ``}</div></div></footer>`;
});
const GetUpBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sign = "нагору" } = $$props;
  if ($$props.sign === void 0 && $$bindings.sign && sign !== void 0) $$bindings.sign(sign);
  return `${``}`;
});
var Colour = /* @__PURE__ */ ((Colour2) => {
  Colour2["Green"] = "green";
  Colour2["Purple"] = "purple";
  Colour2["Cyan"] = "cyan";
  Colour2["Lime"] = "lime";
  Colour2["Yellow"] = "yellow";
  Colour2["Pinky"] = "pinky";
  Colour2["Grey"] = "grey";
  return Colour2;
})(Colour || {});
const css = {
  code: "main.svelte-yodr1{flex:1 1 0%\n}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"../app.postcss\\";\\nimport Navbar from \\"../components/Navbar.svelte\\";\\nimport Footer from \\"../components/Footer.svelte\\";\\nimport GetUpBtn from \\"../components/GetUpBtn.svelte\\";\\nimport { Colour } from \\"../types/link\\";\\nlet title = \\"LM\\";\\nlet span = \\".DB\\";\\nlet logo = \\"../../favicon.png\\";\\nlet repo = {\\n  url: \\"https://github.com/aegislash525\\",\\n  title: \\"/\\\\u043E\\\\u0443\\\\u043F\\\\u0435\\\\u043D \\\\u0441\\\\u0443\\\\u0440\\\\u0441\\",\\n  colour: Colour.Grey\\n};\\nlet links = [\\n  {\\n    url: \\"/search\\",\\n    title: \\"\\\\u041F\\\\u043E\\\\u0448\\\\u0443\\\\u043A\\",\\n    colour: Colour.Yellow\\n  },\\n  {\\n    // url: '/movies',\\n    url: \\"/\\",\\n    title: \\"\\\\u0424\\\\u0456\\\\u043B\\\\u044C\\\\u043C\\\\u0438\\",\\n    colour: Colour.Lime\\n  },\\n  {\\n    url: \\"/series\\",\\n    title: \\"\\\\u0421\\\\u0435\\\\u0440\\\\u0456\\\\u0430\\\\u043B\\\\u0438\\",\\n    colour: Colour.Pinky\\n  },\\n  {\\n    url: \\"/genres\\",\\n    title: \\"\\\\u0416\\\\u0430\\\\u043D\\\\u0440\\\\u0438\\",\\n    colour: Colour.Purple\\n  },\\n  {\\n    url: \\"/watchlist\\",\\n    title: \\"\\\\u041F\\\\u043B\\\\u0435\\\\u0439\\\\u043B\\\\u0438\\\\u0441\\\\u0442\\",\\n    colour: Colour.Green\\n  }\\n];\\nconst pkg = {\\n  logo,\\n  repo,\\n  title,\\n  span,\\n  links\\n};\\n<\/script>\\n\\n<GetUpBtn />\\n\\n<div class=\\"flex flex-col min-h-screen\\">\\n\\t<div class=\\"container px-1 mx-auto max-w-[1460px] my-4\\">\\n\\t\\t<Navbar {...pkg} />\\n\\t</div>\\n\\n\\t<main class=\\"flex-grow container px-1 h-full mx-auto max-w-[1460px]\\">\\n\\t\\t<slot />\\n\\t</main>\\n\\n\\t<div class=\\"container px-1 mx-auto max-w-[1460px]\\">\\n\\t\\t<Footer {logo} {title} {span} {links} />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\tmain {\\n    flex: 1 1 0%\\n}\\n</style>\\n"],"names":[],"mappings":"AAmEC,iBAAK,CACF,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,EAAE;AAChB"}`
};
let title = "LM";
let span = ".DB";
let logo = "../../favicon.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let repo = {
    url: "https://github.com/aegislash525",
    title: "/оупен сурс",
    colour: Colour.Grey
  };
  let links = [
    {
      url: "/search",
      title: "Пошук",
      colour: Colour.Yellow
    },
    {
      // url: '/movies',
      url: "/",
      title: "Фільми",
      colour: Colour.Lime
    },
    {
      url: "/series",
      title: "Серіали",
      colour: Colour.Pinky
    },
    {
      url: "/genres",
      title: "Жанри",
      colour: Colour.Purple
    },
    {
      url: "/watchlist",
      title: "Плейлист",
      colour: Colour.Green
    }
  ];
  const pkg = { logo, repo, title, span, links };
  $$result.css.add(css);
  return `${validate_component(GetUpBtn, "GetUpBtn").$$render($$result, {}, {}, {})} <div class="flex flex-col min-h-screen"><div class="container px-1 mx-auto max-w-[1460px] my-4">${validate_component(Navbar, "Navbar").$$render($$result, Object.assign({}, pkg), {}, {})}</div> <main class="flex-grow container px-1 h-full mx-auto max-w-[1460px] svelte-yodr1">${slots.default ? slots.default({}) : ``}</main> <div class="container px-1 mx-auto max-w-[1460px]">${validate_component(Footer, "Footer").$$render($$result, { logo, title, span, links }, {}, {})}</div> </div>`;
});
export {
  Layout as default
};
