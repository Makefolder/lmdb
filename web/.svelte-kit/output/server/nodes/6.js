import * as universal from '../entries/pages/watchlist/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/watchlist/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/watchlist/+page.ts";
export const imports = ["_app/immutable/nodes/6.Pbsg8-Qe.js","_app/immutable/chunks/scheduler.Dn1Z_7GV.js","_app/immutable/chunks/index.DBk614ox.js","_app/immutable/chunks/Card.5ydwIwOV.js","_app/immutable/chunks/index.vOvnMlyY.js"];
export const stylesheets = ["_app/immutable/assets/Card.C86TdUbv.css"];
export const fonts = [];
