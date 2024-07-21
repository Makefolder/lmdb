

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/genre/_genreId_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DWGAP1__.js","_app/immutable/chunks/scheduler.Dn1Z_7GV.js","_app/immutable/chunks/index.DBk614ox.js"];
export const stylesheets = [];
export const fonts = [];
