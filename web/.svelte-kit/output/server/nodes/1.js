

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C6j4uh0E.js","_app/immutable/chunks/scheduler.Dn1Z_7GV.js","_app/immutable/chunks/index.DBk614ox.js"];
export const stylesheets = [];
export const fonts = [];
