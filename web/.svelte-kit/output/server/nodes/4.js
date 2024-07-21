import * as universal from '../entries/pages/movie/_movieId_/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/movie/_movieId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/movie/[movieId]/+page.ts";
export const imports = ["_app/immutable/nodes/4.-xvcqBP3.js","_app/immutable/chunks/scheduler.Dn1Z_7GV.js","_app/immutable/chunks/index.DBk614ox.js","_app/immutable/chunks/Card.5ydwIwOV.js","_app/immutable/chunks/index.vOvnMlyY.js","_app/immutable/chunks/entry.CWHgS9aY.js"];
export const stylesheets = ["_app/immutable/assets/Card.C86TdUbv.css"];
export const fonts = [];
