export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["el-royale-edit.png","el-royale.jpg","favicon.png","placeholder.avif","poster.jpg","sparkle.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.CgDs6mBM.js","app":"_app/immutable/entry/app.mRsw7jyT.js","imports":["_app/immutable/entry/start.CgDs6mBM.js","_app/immutable/chunks/entry.CWHgS9aY.js","_app/immutable/chunks/scheduler.Dn1Z_7GV.js","_app/immutable/entry/app.mRsw7jyT.js","_app/immutable/chunks/scheduler.Dn1Z_7GV.js","_app/immutable/chunks/index.DBk614ox.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/genre/[genreId]",
				pattern: /^\/genre\/([^/]+?)\/?$/,
				params: [{"name":"genreId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/movie/[movieId]",
				pattern: /^\/movie\/([^/]+?)\/?$/,
				params: [{"name":"movieId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/watchlist",
				pattern: /^\/watchlist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
