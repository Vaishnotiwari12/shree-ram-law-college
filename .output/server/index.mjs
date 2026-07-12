globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-C51xQ_lH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c1e-lsc3d7tvenHrMIjGlLp7lBW72po\"",
		"mtime": "2026-07-12T06:19:52.345Z",
		"size": 7198,
		"path": "../public/assets/about-C51xQ_lH.js"
	},
	"/assets/admissions-Dooa4ncV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17d7-2yamVsVP8SBnvIFkCGh0mw1Zkng\"",
		"mtime": "2026-07-12T06:19:52.346Z",
		"size": 6103,
		"path": "../public/assets/admissions-Dooa4ncV.js"
	},
	"/assets/book-open-D21Vb8IP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-qSQEoaxV/ZRB8QOyXZ8pZiezVbQ\"",
		"mtime": "2026-07-12T06:19:52.346Z",
		"size": 268,
		"path": "../public/assets/book-open-D21Vb8IP.js"
	},
	"/assets/calendar-DY3mmm71.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-N8XwDfz6k23boIHrM6w4onUtj1g\"",
		"mtime": "2026-07-12T06:19:52.346Z",
		"size": 246,
		"path": "../public/assets/calendar-DY3mmm71.js"
	},
	"/assets/chairman-C4cSVduh.png": {
		"type": "image/png",
		"etag": "\"6e6d4-PgBC27Zs+bL+Qd1sCAr882xY+FI\"",
		"mtime": "2026-07-12T06:19:52.404Z",
		"size": 452308,
		"path": "../public/assets/chairman-C4cSVduh.png"
	},
	"/assets/College-photo-C6Zfj3tg2.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e81d-sTuF96I1UcrVhwP3V0h0P/qQwGQ\"",
		"mtime": "2026-07-12T06:19:52.399Z",
		"size": 190493,
		"path": "../public/assets/College-photo-C6Zfj3tg2.jpg"
	},
	"/assets/college-photo2-C3T0hTwC.jpg": {
		"type": "image/jpeg",
		"etag": "\"38312-okKlVrycuUXJgmJnsiwXqq4FBfI\"",
		"mtime": "2026-07-12T06:19:52.408Z",
		"size": 230162,
		"path": "../public/assets/college-photo2-C3T0hTwC.jpg"
	},
	"/assets/contact-BiPB02rS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117b-z08EQQ+2IHbo2l0n0QzDvLKiRP4\"",
		"mtime": "2026-07-12T06:19:52.348Z",
		"size": 4475,
		"path": "../public/assets/contact-BiPB02rS.js"
	},
	"/assets/courses-BsUPY9g3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1025-pOxF7ZScsm2H+VciIai+MU4nwhE\"",
		"mtime": "2026-07-12T06:19:52.349Z",
		"size": 4133,
		"path": "../public/assets/courses-BsUPY9g3.js"
	},
	"/assets/crest-DuKRLwdn.png": {
		"type": "image/png",
		"etag": "\"3f388-+3TReED6enK3UePjfsNM+o+RL0M\"",
		"mtime": "2026-07-12T06:19:52.408Z",
		"size": 258952,
		"path": "../public/assets/crest-DuKRLwdn.png"
	},
	"/assets/events-D4g0_8wy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"844-EH+H+sQu2INXvpOfVUNEvQiiCWQ\"",
		"mtime": "2026-07-12T06:19:52.349Z",
		"size": 2116,
		"path": "../public/assets/events-D4g0_8wy.js"
	},
	"/assets/faculty-B-wHMjxy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"efe-h4fyd3+o9wDrK7qv+xxiy/g2Zmw\"",
		"mtime": "2026-07-12T06:19:52.349Z",
		"size": 3838,
		"path": "../public/assets/faculty-B-wHMjxy.js"
	},
	"/assets/gallery-C1WxzRu4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"677-push8hNaaliBDN6qUCYJ+2Hc7zw\"",
		"mtime": "2026-07-12T06:19:52.350Z",
		"size": 1655,
		"path": "../public/assets/gallery-C1WxzRu4.js"
	},
	"/assets/index-BfifamQL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5934f-dnI4qvCQ4wNWWpO8uoo/Ms1hSMw\"",
		"mtime": "2026-07-12T06:19:52.344Z",
		"size": 365391,
		"path": "../public/assets/index-BfifamQL.js"
	},
	"/assets/law-books-Bjft34oa.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a56c-Q3LfIzxj3O8Zo0b25WBEgzJXhvo\"",
		"mtime": "2026-07-12T06:19:52.409Z",
		"size": 107884,
		"path": "../public/assets/law-books-Bjft34oa.jpg"
	},
	"/assets/law-books-II77NT80.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c-Tdfdu3DiTCA7tyBKtRnFxrtPMJM\"",
		"mtime": "2026-07-12T06:19:52.358Z",
		"size": 92,
		"path": "../public/assets/law-books-II77NT80.js"
	},
	"/assets/login.student-B9K2mKFx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d8e-QFPlv/OHY20AsHKEbLTETGHZ0/E\"",
		"mtime": "2026-07-12T06:19:52.376Z",
		"size": 3470,
		"path": "../public/assets/login.student-B9K2mKFx.js"
	},
	"/assets/login.teacher-kxBHx_ds.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d4f-Z05IrzqIWWxB43D1CEdV3g5jEPo\"",
		"mtime": "2026-07-12T06:19:52.376Z",
		"size": 3407,
		"path": "../public/assets/login.teacher-kxBHx_ds.js"
	},
	"/assets/megaphone-o4RLvhMl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f-JAmEDrm0uKdR1a1/Gj+obeJ7cYI\"",
		"mtime": "2026-07-12T06:19:52.377Z",
		"size": 335,
		"path": "../public/assets/megaphone-o4RLvhMl.js"
	},
	"/assets/message-circle-4X6PrxbT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-MplnLxCi8XIfcFsO374jnzn3k9M\"",
		"mtime": "2026-07-12T06:19:52.377Z",
		"size": 230,
		"path": "../public/assets/message-circle-4X6PrxbT.js"
	},
	"/assets/moot-court-CJO6Vydg.jpg": {
		"type": "image/jpeg",
		"etag": "\"2cc57-BOuL3kitSBpIKglt5/oTzrihSu4\"",
		"mtime": "2026-07-12T06:19:52.413Z",
		"size": 183383,
		"path": "../public/assets/moot-court-CJO6Vydg.jpg"
	},
	"/assets/PageHero-CnXHkzbX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"341-8fQRmdnzW0NQYe1/fzhEP24zDIg\"",
		"mtime": "2026-07-12T06:19:52.345Z",
		"size": 833,
		"path": "../public/assets/PageHero-CnXHkzbX.js"
	},
	"/assets/notices-K-f4QtE9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4a-TspXxfnmXwMgNvAkJNRvng3a3xc\"",
		"mtime": "2026-07-12T06:19:52.378Z",
		"size": 2634,
		"path": "../public/assets/notices-K-f4QtE9.js"
	},
	"/assets/manager-CzOC6M6X.png": {
		"type": "image/png",
		"etag": "\"159187-TrxqPg40Qgcj0P5uzKQt2gRI0rI\"",
		"mtime": "2026-07-12T06:19:52.411Z",
		"size": 1413511,
		"path": "../public/assets/manager-CzOC6M6X.png"
	},
	"/assets/principal-uZYcx8vM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87-YKKpjmPnDjEG7XhC897M17blGkg\"",
		"mtime": "2026-07-12T06:19:52.379Z",
		"size": 135,
		"path": "../public/assets/principal-uZYcx8vM.js"
	},
	"/assets/principal-pqdFGzEi.png": {
		"type": "image/png",
		"etag": "\"9ac4-kAC8dO2jLZc17sz53vO1poxDnts\"",
		"mtime": "2026-07-12T06:19:52.414Z",
		"size": 39620,
		"path": "../public/assets/principal-pqdFGzEi.png"
	},
	"/assets/routes-CkRDIXw8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54fc-uESCJsGFSnj3hzdnoi14D2GjSrs\"",
		"mtime": "2026-07-12T06:19:52.379Z",
		"size": 21756,
		"path": "../public/assets/routes-CkRDIXw8.js"
	},
	"/assets/reading-hall-XFT8rmdp.jpg": {
		"type": "image/jpeg",
		"etag": "\"20f2e-QxQv2C3Q0Rs2o+MN6HcmfpwujZg\"",
		"mtime": "2026-07-12T06:19:52.415Z",
		"size": 134958,
		"path": "../public/assets/reading-hall-XFT8rmdp.jpg"
	},
	"/assets/reading-hall3-De26LbI0.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ae8f-maotk/oF+v8iQJyeRBjW40Lycfk\"",
		"mtime": "2026-07-12T06:19:52.416Z",
		"size": 175759,
		"path": "../public/assets/reading-hall3-De26LbI0.jpg"
	},
	"/assets/SectionHeading-DOyzXsB-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22a-BjfSZFUXYX9V3EV5L/hUC5fu5aI\"",
		"mtime": "2026-07-12T06:19:52.345Z",
		"size": 554,
		"path": "../public/assets/SectionHeading-DOyzXsB-.js"
	},
	"/assets/reading-hall2-CzQBa03w.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d3e2-wJ3Axnh2zihlz6CfvK6OxVD9zAQ\"",
		"mtime": "2026-07-12T06:19:52.415Z",
		"size": 250850,
		"path": "../public/assets/reading-hall2-CzQBa03w.jpg"
	},
	"/assets/send-CffKq4jd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-BbmqL5et2thbcVVJId14RqHkWNY\"",
		"mtime": "2026-07-12T06:19:52.380Z",
		"size": 279,
		"path": "../public/assets/send-CffKq4jd.js"
	},
	"/assets/students-Btp8aV_H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"35-XMSxTIDkyZNcA4lSZP71MrNoC4c\"",
		"mtime": "2026-07-12T06:19:52.380Z",
		"size": 53,
		"path": "../public/assets/students-Btp8aV_H.js"
	},
	"/assets/user-CBldpEsK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"152-mB4spUHj/PXsZHwhRtqnH7bTssg\"",
		"mtime": "2026-07-12T06:19:52.381Z",
		"size": 338,
		"path": "../public/assets/user-CBldpEsK.js"
	},
	"/assets/styles-DuslxxmJ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"170b5-M7ye9pAdZiU8O5sqqI6qhvvpr/Y\"",
		"mtime": "2026-07-12T06:19:52.421Z",
		"size": 94389,
		"path": "../public/assets/styles-DuslxxmJ.css"
	},
	"/assets/students-DBu-6F03.jpg": {
		"type": "image/jpeg",
		"etag": "\"22b7e-lPhJoK86D6h6WSmEpmJISZTuuko\"",
		"mtime": "2026-07-12T06:19:52.418Z",
		"size": 142206,
		"path": "../public/assets/students-DBu-6F03.jpg"
	},
	"/crest.png": {
		"type": "image/png",
		"etag": "\"3f388-+3TReED6enK3UePjfsNM+o+RL0M\"",
		"mtime": "2026-07-08T03:57:59.678Z",
		"size": 258952,
		"path": "../public/crest.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_t3vRct = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_t3vRct
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
