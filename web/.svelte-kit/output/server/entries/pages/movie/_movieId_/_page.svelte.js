import { c as create_ssr_component, d as each, v as validate_component, e as escape, b as add_attribute, g as getContext, f as subscribe, o as onDestroy } from "../../../../chunks/ssr.js";
import { C as Card } from "../../../../chunks/Card.js";
import "../../../../chunks/client.js";
const Similar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movies = [] } = $$props;
  if ($$props.movies === void 0 && $$bindings.movies && movies !== void 0) $$bindings.movies(movies);
  return `${movies.length !== 0 ? `<div class="h2 font-semibold mt-9" data-svelte-h="svelte-umyud4">Схоже</div> <div class="w-full flex flex-wrap gap-4 justify-stretch">${each(movies, (movie) => {
    return `${validate_component(Card, "Card").$$render($$result, { movie, width: "w-[21.58rem]" }, {}, {})}`;
  })}</div>` : ``}`;
});
const Studio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png" } = $$props;
  let { name = "Pixar" } = $$props;
  let { country = "US" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.country === void 0 && $$bindings.country && country !== void 0) $$bindings.country(country);
  return `<div class="card p-3 mr-1 mb-2 card-hover !bg-surface-500/10 w-[24rem] max-h-[8rem] overflow-hidden text-right"><a href="/"><div>${icon !== "" ? `<div class="flex justify-between items-center"><div class="w-[7rem] h-[4rem]"><img class="w-full h-full object-contain" src="${"https://tmdb.org/t/p/w200" + escape(icon, true)}"${add_attribute("alt", name, 0)}></div> <div class="mt-4"><div class="h4 font-semibold">${escape(name)}</div> <div>${escape(country)}</div></div></div>` : `<div><div class="h4 font-semibold">${escape(name)}</div> <div>${escape(country)}</div></div>`}</div></a> </div>`;
});
const Overview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { overview = "" } = $$props;
  if ($$props.overview === void 0 && $$bindings.overview && overview !== void 0) $$bindings.overview(overview);
  return `<div><div class="text-[2em] font-semibold mb-4" data-svelte-h="svelte-yulovu">Опис</div> <p class="text-[1.1em]">${escape(overview)}</p></div>`;
});
const PageInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = 0 } = $$props;
  let { adult } = $$props;
  let { poster_path } = $$props;
  let { saved = false } = $$props;
  let { overview = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.adult === void 0 && $$bindings.adult && adult !== void 0) $$bindings.adult(adult);
  if ($$props.poster_path === void 0 && $$bindings.poster_path && poster_path !== void 0) $$bindings.poster_path(poster_path);
  if ($$props.saved === void 0 && $$bindings.saved && saved !== void 0) $$bindings.saved(saved);
  if ($$props.overview === void 0 && $$bindings.overview && overview !== void 0) $$bindings.overview(overview);
  return `<div class="flex-shrink-0 w-[22rem] items-center rounded-2xl"><div class="w-full relative"><a href="${"https://image.tmdb.org/t/p/w500" + escape(poster_path, true)}" target="_blank"><img class="w-fill h-full rounded-lg object-cover" src="${"https://image.tmdb.org/t/p/w500" + escape(poster_path, true)}" alt="poster"></a> ${adult ? `<div class="cursor-default absolute top-5 right-5 z-10 badge variant-filled text-[1em] !text-white !bg-rose-500" data-svelte-h="svelte-1gw5rwz">+18</div>` : ``}</div> <div class="mt-3">${!saved ? `<button class="btn w-full bg-surface-500/40 rounded-lg hover:bg-primary-500/80" data-svelte-h="svelte-cdulck">Додати</button>` : `<button class="btn w-full bg-surface-500/40 rounded-lg hover:bg-error-500/80" data-svelte-h="svelte-dpdlqe">Видалити</button>`}</div> ${overview != "" ? `<hr class="my-3"> <div class="mt-6 mb-12">${validate_component(Overview, "Overview").$$render($$result, { overview }, {}, {})}</div>` : ``}</div>`;
});
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let imageContainer;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  return `<div class="relative bg-surface-900/70 overflow-hidden rounded-xl"><ul class="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]"${add_attribute("this", imageContainer, 0)}>${each(images, (image, index) => {
    return `<li class="shrink-0 snap-center max-w-[48rem]"><img class="w-full h-full object-contain"${add_attribute("src", `https://image.tmdb.org/t/p/original${image.file_path}`, 0)} alt=""> </li>`;
  })}</ul> <button class="btn variant-filled absolute top-[44%] left-[1rem] z-10" data-svelte-h="svelte-62g7pi">◀</button> <button class="btn variant-filled absolute top-[44%] right-[1rem] z-10" data-svelte-h="svelte-18w6vqc">▶</button></div>`;
});
const Images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  return `<div class="overflow-hidden mt-8"><div class="h2 font-semibold mb-5" data-svelte-h="svelte-ejt9td">Зображення:</div> ${validate_component(Carousel, "Carousel").$$render($$result, { images }, {}, {})} </div>`;
});
const Videos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { videos = [] } = $$props;
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0) $$bindings.videos(videos);
  return `<div class="overflow-hidden mt-8"><div class="h2 font-semibold mb-5" data-svelte-h="svelte-1a21uf8">Відео:</div> <div class="flex justify-between gap-4 flex-wrap overflow-hidden">${each(videos, (video) => {
    return `${video.type === "Trailer" ? `${video.official ? `${video.site === "YouTube" ? `<div class="w-fit flex-shrink-0 flex-grow-0"><iframe width="525" height="315" src="${"https://www.youtube.com/embed/" + escape(video.key, true)}"${add_attribute("title", video.name, 0)} frameborder="0" allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="no-referrer" allowfullscreen></iframe> </div>` : ``}` : ``}` : ``}`;
  })}</div></div>`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let movie = {
    primary_key: 0,
    adult: false,
    backdrop_path: "",
    budget: 0,
    belongs_to_collection: {
      id: 0,
      name: "",
      poster_path: "",
      backdrop_path: ""
    },
    genres: [{ id: 0, name: "" }],
    homepage: "",
    id: 0,
    imdb_id: "",
    origin_country: [""],
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [
      {
        id: 0,
        logo_path: "",
        name: "",
        origin_country: ""
      }
    ],
    production_countries: [{ iso_3166_1: "", name: "" }],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [
      {
        english_name: "",
        iso_639_1: "",
        name: ""
      }
    ],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0
  };
  let similars = data.post.similar;
  $page.params.movieId;
  let interval;
  let date = "";
  onDestroy(() => {
    clearInterval(interval);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1pjlw1o_START -->${$$result.title = `<title>LMDB - ${escape(movie.title)}</title>`, ""}<!-- HEAD_svelte-1pjlw1o_END -->`, ""} <div>${`<div class="flex mt-9">${validate_component(PageInfo, "PageInfo").$$render(
    $$result,
    {
      id: movie.id,
      adult: movie.adult,
      poster_path: movie.poster_path,
      overview: movie.overview,
      saved: false
    },
    {},
    {}
  )} <div class="right__side ml-5 pt-3 pl-3 rounded-2xl flex-grow-0 overflow-hidden w-full"><div class="flex flex-wrap justify-between gap-[1.3rem] leading-7"><div class="h-full text-[1.2em] max-w-[40rem]"><div class="h2 font-semibold mb-2">${escape(movie.title)}</div> <div class="h3 text-surface-400/80 mb-3">${escape(movie.original_title)}</div> ${movie.tagline.length !== 0 ? `<div>Гасло: <i>${escape(movie.tagline)}</i></div>` : ``} ${``} <div>Рейтинґ: ${escape(movie.vote_average.toFixed(1))}</div> <div>Статус: ${escape(movie.status)}</div> ${movie.origin_country.length !== 0 ? `<div class="flex flex-wrap">${movie.origin_country.length === 1 ? `<div class="mr-2" data-svelte-h="svelte-8ttjox">Країна:</div>` : `<div class="mr-2" data-svelte-h="svelte-i5ley1">Країни:</div>`} ${each(movie.production_countries, (country) => {
    return `<div class="mr-2"><a class="hover:text-primary-500 transition" href="${"/genre/" + escape(country.iso_3166_1, true)}">${escape(country.name)}</a> </div>`;
  })}</div>` : ``} <div>Дата виходу: ${escape(date)}</div> <div class="flex flex-wrap"><div class="mr-2" data-svelte-h="svelte-wuluiq">Жанри:</div> ${each(movie.genres, (genre) => {
    return `<div class="mr-2"><a class="hover:text-primary-500 transition" href="${"/genre/" + escape(genre.id, true)}">${escape(genre.name)}</a> </div>`;
  })}</div></div> <div class="h-full"><div class="h2 font-semibold mb-5 text-right mr-4" data-svelte-h="svelte-1qlfr9r">Кіностудії</div> ${each(movie.production_companies, (company) => {
    return `${validate_component(Studio, "Studio").$$render(
      $$result,
      {
        icon: company.logo_path,
        name: company.name,
        country: company.origin_country
      },
      {},
      {}
    )}`;
  })}</div></div> ${data.post.images.backdrops.length !== 0 ? `${validate_component(Images, "Images").$$render($$result, { images: data.post.images.backdrops }, {}, {})}` : ``} ${data.post.videos.length !== 0 ? `<hr class="my-5"> ${validate_component(Videos, "Videos").$$render($$result, { videos: data.post.videos }, {}, {})}` : ``}</div></div> ${validate_component(Similar, "Similar").$$render($$result, { movies: similars }, {}, {})}`} ${``}</div>`;
});
export {
  Page as default
};
