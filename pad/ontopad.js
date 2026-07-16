import { W as e, a as t, t as n } from "./rdf-BuzRRZzk.js";
import { t as r } from "./bootstrap.esm-OP7swxU_.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as a } from "./prefixes-BTPrfMnH.js";
import { t as o } from "./QueryResultList-CeOrR6Pg.js";
import { t as s } from "./TermInput-Dw1ChpV5.js";
import { n as c, t as l } from "./splitpanes.esm-DWEvKrA8.js";
import { mapState as u } from "pinia";
import { Fragment as d, computed as f, createBlock as ee, createCommentVNode as p, createElementBlock as m, createElementVNode as h, createTextVNode as g, createVNode as _, defineComponent as v, getCurrentInstance as y, h as te, inject as b, nextTick as x, openBlock as S, provide as ne, reactive as C, ref as w, renderList as T, resolveComponent as E, shallowReactive as D, shallowRef as O, toDisplayString as re, unref as ie, vModelRadio as ae, vModelText as k, watch as oe, watchEffect as se, withCtx as A, withDirectives as j } from "vue";
//#region src/components/SparqlConnection.vue
var ce = {
	name: "SparqlConnection",
	setup() {
		return {
			store: n(),
			selection: t()
		};
	},
	data() {
		return {
			configure_endpoint_modal: null,
			endpoint_type: "quit",
			query_url: "",
			update_url: "",
			quit_url: ""
		};
	},
	mounted() {
		this.configure_endpoint_modal = new r(this.$refs.configure_endpoint), this.$refs.configure_endpoint.addEventListener("show.bs.modal", (e) => {
			this.get_endpoint_configuration();
		});
	},
	computed: {
		...u(n, { store_ready: (e) => e.ready }),
		store_capability: { get() {
			return this.store.sparqlEndpoint.capability;
		} },
		graph_iri: {
			get() {
				return this.selection.graph_iri;
			},
			set(e) {
				this.store.changeGraphIri(e);
			}
		},
		resource_iri: {
			get() {
				return this.selection.resource_iri;
			},
			set(e) {
				this.selection.changeResourceIri(e);
			}
		}
	},
	methods: {
		push() {
			this.store.push();
		},
		pull() {
			this.store.pull();
		},
		get_endpoint_configuration() {
			let e = this.store.sparqlEndpoint;
			this.quit_url = "", this.query_url = "", this.update_url = "", this.endpoint_type = e.type, e.type === "quit" ? this.quit_url = e.quitUrl : e.type === "query_only" ? this.query_url = e.queryUrl : e.type === "query_update" && (this.query_url = e.queryUrl, this.update_url = e.updateUrl);
		},
		configure_endpoint() {
			let e = {};
			if (this.endpoint_type === "quit" && this.quit_url) e.quit_url = this.quit_url;
			else {
				if (!this.query_url) {
					console.error("Not even a query_url is given. Not chaning the endpoint configuration.");
					return;
				}
				e.query_url = this.query_url, this.update_url && (e.update_url = this.update_url);
			}
			this.store.updateEndpointConfiguration(e);
		}
	}
}, le = {
	key: 0,
	inline: "",
	class: "col-12"
}, ue = {
	class: "btn-group col-1 mb-2 mr-sm-2 mb-sm-0",
	role: "group"
}, de = {
	class: "modal fade",
	ref: "configure_endpoint",
	tabindex: "-1",
	"aria-hidden": "true",
	"data-bs-backdrop": "static",
	size: "lg"
}, fe = { class: "modal-dialog modal-lg" }, M = { class: "modal-content" }, N = { class: "modal-header" }, pe = { class: "modal-body" }, me = {
	class: "form-group",
	label: "Endpoint Type"
}, he = {
	key: 0,
	class: "form-group"
}, ge = {
	key: 1,
	class: "form-group"
}, _e = {
	key: 2,
	class: "form-group"
}, ve = { class: "modal-footer" };
function ye(e, t, n, r, i, a) {
	return S(), m(d, null, [e.store_ready ? (S(), m("form", le, [
		h("div", ue, [
			h("button", {
				type: "button",
				class: "btn btn-outline-secondary mb-0",
				onClick: t[0] ||= (e) => i.configure_endpoint_modal.show(),
				title: "Configure Endpoint",
				"aria-label": "Configure Endpoint"
			}, [...t[14] ||= [h("i", { class: "bi bi-gear" }, null, -1)]]),
			a.store_capability.quit ? (S(), m("button", {
				key: 0,
				type: "button",
				class: "btn btn-outline-secondary mb-0",
				onClick: t[1] ||= (e) => a.push(),
				title: "Push To Remote Repository",
				"aria-label": "Push To Remote Repository"
			}, [...t[15] ||= [h("i", { class: "bi bi-cloud-upload" }, null, -1)]])) : p("", !0),
			a.store_capability.quit ? (S(), m("button", {
				key: 1,
				type: "button",
				class: "btn btn-outline-secondary mb-0",
				onClick: t[2] ||= (e) => a.pull(),
				title: "Pull From Remote Repository",
				"aria-label": "Pull From Remote Repository"
			}, [...t[16] ||= [h("i", { class: "bi bi-cloud-download" }, null, -1)]])) : p("", !0)
		]),
		t[17] ||= h("label", {
			for: "select_url",
			class: "col-1 mr-sm-2"
		}, "Graph IRI", -1),
		j(h("input", {
			type: "text",
			class: "form-control col-2",
			id: "graph_iri",
			"onUpdate:modelValue": t[3] ||= (e) => a.graph_iri = e
		}, null, 512), [[k, a.graph_iri]]),
		t[18] ||= h("label", {
			for: "select_url",
			class: "col-1 mr-sm-2"
		}, "Resource IRI", -1),
		j(h("input", {
			type: "text",
			class: "form-control col-6",
			id: "resource_iri",
			"onUpdate:modelValue": t[4] ||= (e) => a.resource_iri = e
		}, null, 512), [[k, a.resource_iri]])
	])) : p("", !0), h("div", de, [h("div", fe, [h("div", M, [
		h("div", N, [t[19] ||= h("h5", { class: "modal-title" }, "Configure Endpoint", -1), h("button", {
			type: "button",
			class: "btn-close",
			onClick: t[5] ||= (e) => i.configure_endpoint_modal.hide(),
			"aria-label": "Close"
		})]),
		h("div", pe, [h("form", null, [
			h("div", me, [
				j(h("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[6] ||= (e) => i.endpoint_type = e,
					id: "query_only",
					value: "query_only"
				}, null, 512), [[ae, i.endpoint_type]]),
				t[20] ||= h("label", {
					class: "form-check-label",
					for: "query_only"
				}, "Query only", -1),
				j(h("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[7] ||= (e) => i.endpoint_type = e,
					id: "query_update",
					value: "query_update"
				}, null, 512), [[ae, i.endpoint_type]]),
				t[21] ||= h("label", {
					class: "form-check-label",
					for: "query_update"
				}, "Query & Update", -1),
				j(h("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[8] ||= (e) => i.endpoint_type = e,
					id: "quit",
					value: "quit"
				}, null, 512), [[ae, i.endpoint_type]]),
				t[22] ||= h("label", {
					class: "form-check-label",
					for: "quit"
				}, "Quit Store", -1)
			]),
			i.endpoint_type == "quit" ? (S(), m("div", he, [t[23] ||= h("label", { for: "quit_url" }, "Quit URL", -1), h("div", null, [j(h("input", {
				type: "text",
				class: "form-control",
				id: "quit_url",
				"onUpdate:modelValue": t[9] ||= (e) => i.quit_url = e,
				placeholder: "http://your.quit.store.org/"
			}, null, 512), [[k, i.quit_url]])])])) : p("", !0),
			i.endpoint_type == "query_only" || i.endpoint_type == "query_update" ? (S(), m("div", ge, [t[24] ||= h("label", { for: "query_url" }, "Query URL", -1), h("div", null, [j(h("input", {
				type: "text",
				class: "form-control",
				id: "query_url",
				"onUpdate:modelValue": t[10] ||= (e) => i.query_url = e,
				placeholder: "http://your.sparql.store.org/query"
			}, null, 512), [[k, i.query_url]])])])) : p("", !0),
			i.endpoint_type == "query_update" ? (S(), m("div", _e, [t[25] ||= h("label", { for: "update_url" }, "Update URL", -1), h("div", null, [j(h("input", {
				type: "text",
				class: "form-control",
				id: "update_url",
				"onUpdate:modelValue": t[11] ||= (e) => i.update_url = e,
				placeholder: "http://your.sparql.store.org/update"
			}, null, 512), [[k, i.update_url]])])])) : p("", !0)
		])]),
		h("div", ve, [h("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[12] ||= (e) => i.configure_endpoint_modal.hide()
		}, "Close"), h("button", {
			type: "button",
			class: "btn btn-primary",
			onClick: t[13] ||= (e) => {
				a.configure_endpoint(), i.configure_endpoint_modal.hide();
			}
		}, "Save changes")])
	])])], 512)], 64);
}
var be = /*#__PURE__*/ i(ce, [["render", ye]]), xe = {
	name: "GraphList",
	setup() {
		return { store: n() };
	},
	components: {
		TermInput: s,
		QueryResultList: o
	},
	props: {
		graph_iri: String,
		selectGraph: Function
	},
	data() {
		return {
			graphs: [],
			new_graph_iri: e.namedNode(""),
			add_graph_modal: null
		};
	},
	mounted() {
		this.add_graph_modal = new r(this.$refs.add_graph);
	},
	methods: { async add_graph() {
		let t = [e.quad(this.new_graph_iri, e.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), e.namedNode("http://www.w3.org/2000/01/rdf-schema#Graph"))];
		console.log(this.new_graph_iri);
		try {
			await this.store.deleteInsertData({
				insertArray: t,
				graphIri: this.new_graph_iri.value
			}), this.add_graph_modal.hide();
		} catch (e) {
			console.error(e);
		}
	} }
}, Se = {
	class: "modal fade",
	ref: "add_graph",
	tabindex: "-1",
	"aria-hidden": "true",
	"data-bs-backdrop": "static",
	size: "lg"
}, Ce = { class: "modal-dialog modal-lg" }, we = { class: "modal-content" }, Te = { class: "modal-header" }, Ee = { class: "modal-body" }, De = { class: "form-group" }, Oe = { class: "modal-footer" };
function ke(e, t, n, r, i, a) {
	let o = E("QueryResultList"), s = E("TermInput");
	return S(), m("div", null, [_(o, {
		title: "Graph List",
		search: "",
		query: "select distinct ?graph { graph ?graph {?s ?p ?o}} order by ?graph",
		"query-quads": "",
		"select-variable": "graph",
		ref: "classList",
		add: () => {
			i.add_graph_modal.show();
		},
		selectResource: n.selectGraph,
		activeResource: n.graph_iri
	}, null, 8, [
		"add",
		"selectResource",
		"activeResource"
	]), h("div", Se, [h("div", Ce, [h("div", we, [
		h("div", Te, [t[4] ||= h("h5", { class: "modal-title" }, "Create New Graph", -1), h("button", {
			type: "button",
			class: "btn-close",
			onClick: t[0] ||= (e) => i.add_graph_modal.hide(),
			"aria-label": "Close"
		})]),
		h("div", Ee, [h("form", null, [h("div", De, [t[5] ||= h("label", { for: "new_graph_iri" }, "IRI", -1), h("div", null, [_(s, {
			type: "iri",
			id: "new_graph_iri",
			term: i.new_graph_iri,
			"onUpdate:term": t[1] ||= (e) => i.new_graph_iri = e
		}, null, 8, ["term"])])])])]),
		h("div", Oe, [h("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[2] ||= (e) => i.add_graph_modal.hide()
		}, "Close"), h("button", {
			type: "button",
			class: "btn btn-primary",
			onClick: t[3] ||= (e) => a.add_graph()
		}, "Save changes")])
	])])], 512)]);
}
var Ae = /*#__PURE__*/ i(xe, [["render", ke]]), je = {
	name: "ClassList",
	props: {
		class_iri: String,
		selectClass: Function
	},
	watch: { graph_iri(e) {
		console.log("graph_iri changed" + e), this.$refs.classList.updateList();
	} },
	computed: { ...u(t, ["graph_iri"]) }
}, Me = /*@__PURE__*/ Object.assign(je, { setup(e) {
	return (t, n) => (S(), ee(o, {
		title: "Class List",
		search: "",
		query: "select distinct ?class { {?s a ?class} union {?class a <http://www.w3.org/2000/01/rdf-schema#Class>} union {?class a <http://www.w3.org/2002/07/owl#Class>} } order by ?class",
		"select-variable": "class",
		ref: "classList",
		activeResource: e.class_iri,
		selectResource: e.selectClass
	}, null, 8, ["activeResource", "selectResource"]));
} });
//#endregion
//#region node_modules/nostics/dist/index.mjs
function Ne(e) {
	let t = `[${e.name}] ${e.message}`, n = [];
	return e.fix && n.push(`fix: ${e.fix}`), e.sources?.length && n.push(`sources: ${e.sources.join(", ")}`), e.docs && n.push(`see: ${e.docs}`), n.length === 0 ? t : [t, ...n.map((e, t) => `${t < n.length - 1 ? "├▶" : "╰▶"} ${e}`)].join("\n");
}
function Pe(e, ...t) {
	return typeof e == "function" ? e(...t) : e;
}
/* @__NO_SIDE_EFFECTS__ */
function Fe({ method: e = "warn", formatter: t = Ne } = {}) {
	return (n, { method: r = e } = {}) => {
		console[r](t(n));
	};
}
var Ie = Error.captureStackTrace, Le = class e extends Error {
	name = "Diagnostic";
	docs;
	fix;
	sources;
	get why() {
		return this.message;
	}
	constructor(t, n = e) {
		super(t.why, { cause: t.cause }), this.fix = t.fix, this.docs = t.docs, this.sources = t.sources, Ie?.(this, n);
	}
	toJSON() {
		return {
			name: this.name,
			why: this.why,
			fix: this.fix,
			docs: this.docs,
			sources: this.sources,
			cause: this.cause,
			stack: this.stack
		};
	}
};
function Re(e, t) {
	return typeof e == "string" ? `${e}/${t.toLowerCase()}` : e?.(t);
}
/* @__NO_SIDE_EFFECTS__ */
function ze(e) {
	let t = e.reporters ?? [], n = {}, { docsBase: r } = e;
	for (let i of Object.keys(e.codes)) {
		let a = e.codes[i], o = a.docs === !1 ? void 0 : a.docs || Re(r, i), s = (e = {}, n = {}) => {
			let r = new Le({
				why: Pe(a.why, e),
				fix: Pe(a.fix, e),
				docs: o,
				cause: e.cause,
				sources: e.sources
			}, s);
			r.name = i;
			for (let e of t) e(r, n);
			return r;
		};
		n[i] = s;
	}
	return n;
}
//#endregion
//#region node_modules/vue-router/dist/useApi-CROJJdhE.js
function Be(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ve(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Be(e.default);
}
var P = Object.assign;
function He(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = F(i) ? i.map(e) : e(i);
	}
	return n;
}
var Ue = () => {}, F = Array.isArray;
function We(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Ge = Symbol(process.env.NODE_ENV === "production" ? "" : "navigation failure"), Ke = {
	1({ location: e, currentLocation: t }) {
		return `No match for\n ${JSON.stringify(e)}${t ? "\nwhile being at\n" + JSON.stringify(t) : ""}`;
	},
	2({ from: e, to: t }) {
		return `Redirected from "${e.fullPath}" to "${Ye(t)}" via a navigation guard.`;
	},
	4({ from: e, to: t }) {
		return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
	},
	8({ from: e, to: t }) {
		return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
	},
	16({ from: e, to: t }) {
		return `Avoided redundant navigation to current location: "${e.fullPath}".`;
	}
};
function qe(e, t) {
	return process.env.NODE_ENV === "production" ? P(/* @__PURE__ */ Error(), {
		type: e,
		[Ge]: !0
	}, t) : P(Error(Ke[e](t)), {
		type: e,
		[Ge]: !0
	}, t);
}
function I(e, t) {
	return e instanceof Error && Ge in e && (t == null || !!(e.type & t));
}
var Je = [
	"params",
	"query",
	"hash"
];
function Ye(e) {
	if (!e || typeof e == "string") return e;
	if (e.path != null) return e.path;
	let t = {};
	for (let n of Je) n in e && (t[n] = e[n]);
	return JSON.stringify(t, null, 2);
}
var L = /*#__PURE__*/ ze({
	reporters: [/*#__PURE__*/ Fe()],
	codes: {
		VUE_ROUTER_R0001: {
			why: (e) => `Parent route "${e.name}" not found when adding child route`,
			fix: "Add the parent route before its children, or check the parent name for typos.",
			docs: "https://router.vuejs.org/guide/advanced/dynamic-routing.html#Adding-nested-routes"
		},
		VUE_ROUTER_R0002: {
			why: (e) => `Cannot remove non-existent route "${e.name}"`,
			fix: "Check the route name; it may already have been removed or was never added.",
			docs: "https://router.vuejs.org/guide/advanced/dynamic-routing.html#Removing-routes"
		},
		VUE_ROUTER_R0003: {
			why: (e) => `Location "${Ye(e.location)}" resolved to "${e.href}". A resolved location cannot start with multiple slashes.`,
			fix: "Remove the leading slashes from the location or fix the route configuration."
		},
		VUE_ROUTER_R0004: {
			why: (e) => `No match found for location with path "${Ye(e.path)}"`,
			fix: "Add a route matching this path or check for typos in the location.",
			docs: "https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route"
		},
		VUE_ROUTER_R0005: {
			why: (e) => `router.resolve() was passed an invalid location. This will fail in production.\nLocation: ${Ye(e.rawLocation)}`,
			fix: "Pass a valid route location: a string path or an object with `path` or `name`."
		},
		VUE_ROUTER_R0006: {
			why: (e) => `Path "${e.path}" was passed with params but they will be ignored because a "path" was passed.`,
			fix: "Use a named route `{ name, params }` instead of `{ path, params }`.",
			docs: "https://router.vuejs.org/guide/essentials/navigation.html#Navigate-to-a-different-location"
		},
		VUE_ROUTER_R0007: {
			why: (e) => `A \`hash\` should always start with the character "#" but received "${e.hash}".`,
			fix: (e) => `Prepend "#" to the hash in your route location: use "#${e.hash}".`
		},
		VUE_ROUTER_R0008: {
			why: (e) => `Invalid redirect found:\n${e.target}\n when navigating to "${e.to}".\nThis will break in production.`,
			fix: "A redirect must resolve to a location with a `name` or `path`; return one of those (or a string path) from `redirect`.",
			docs: "https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Redirect"
		},
		VUE_ROUTER_R0009: {
			why: (e) => `Detected a possibly infinite redirection in a navigation guard when going from "${e.from}" to "${e.to}". Aborting to avoid a Stack Overflow. This might break in production if not fixed.`,
			fix: "A guard is returning a new location on every call; make that return conditional so it only redirects when actually needed.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Global-Before-Guards"
		},
		VUE_ROUTER_R0010: {
			why: "Uncaught error during route navigation",
			fix: "Register an error handler with `router.onError()` to handle navigation errors."
		},
		VUE_ROUTER_R0011: {
			why: "Unexpected error when starting the router:",
			fix: "Inspect the actual cause; a navigation guard or async component likely threw during the initial navigation."
		},
		VUE_ROUTER_R0020: {
			why: (e) => `No active route record was found when calling \`${e.fn}()\`. Maybe you called it inside of App.vue?`,
			fix: "Call it from a component rendered inside <router-view> (a page component or one of its children), not from App.vue.",
			docs: "https://router.vuejs.org/guide/advanced/composition-api.html#Navigation-Guards"
		},
		VUE_ROUTER_R0021: {
			why: "No active route record was found when reactivating component with navigation guard. This is likely a bug in vue-router.",
			fix: "Report with a minimal reproduction at https://github.com/vuejs/router/issues/new/choose."
		},
		VUE_ROUTER_R0022: {
			why: (e) => `${e.fn}() was called outside of component setup but it must be called at the top of a setup function`,
			fix: "Call it synchronously at the top of `setup()`, before any `await`.",
			docs: "https://router.vuejs.org/guide/advanced/composition-api.html#Navigation-Guards"
		},
		VUE_ROUTER_R0023: {
			why: (e) => `The "next" callback was never called inside of ${e.name ? `"${e.name}"` : ""}:\n${e.guard}`,
			fix: "Make sure `next()` runs on every branch, including early returns and async paths, or drop the `next` parameter and return the value instead.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0024: {
			why: (e) => `The "next" callback was called more than once in one navigation guard when going from "${e.from}" to "${e.to}". This will fail in production.`,
			fix: "Call `next()` exactly once per guard: remove the extra call, or migrate to returning the value you passed to `next()`.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0025: {
			why: "The `next()` callback in navigation guards is deprecated.",
			fix: "Return the value instead: `next()` becomes `return`, `next(false)` becomes `return false`, `next(\"/path\")` becomes `return \"/path\"`.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0026: {
			why: (e) => `Record with path "${e.path}" is either missing a "component(s)" or "children" property.`,
			fix: "Add a `component`, `components`, or `children` to the route record.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html"
		},
		VUE_ROUTER_R0027: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is not a valid component. Received "${e.received}".`,
			fix: "Pass a component or a function returning a Promise that resolves to one."
		},
		VUE_ROUTER_R0028: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is a Promise instead of a function that returns a Promise. This will break in production if not fixed.`,
			fix: "Defer the import in an arrow function so it loads lazily: write \"() => import('./MyPage.vue')\", not \"import('./MyPage.vue')\".",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html"
		},
		VUE_ROUTER_R0029: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is defined using "defineAsyncComponent()".`,
			fix: "Drop the wrapper and pass \"() => import('./MyPage.vue')\" directly; the router handles lazy components itself.",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html#Relationship-to-async-components"
		},
		VUE_ROUTER_R0030: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is a function that does not return a Promise. This will break in production if not fixed.`,
			fix: "Return a dynamic import (`() => import(\"./MyPage.vue\")`) from the function, or add a `displayName` if it is a functional component.",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html"
		},
		VUE_ROUTER_R0040: {
			why: (e) => `Because "${e.el}" starts with "#", scrollBehavior resolves it as an element id via document.getElementById("${e.el.slice(1)}"), not as a CSS selector. No element has that id, but "${e.el}" does match an element with document.querySelector().`,
			fix: (e) => `Resolve the element yourself and return the node: el: document.querySelector('${e.el}').`,
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0041: {
			why: (e) => `The selector "${e.el}" is invalid. See https://mathiasbynens.be/notes/css-escapes or CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape) for the escaping rules.`,
			fix: "Build an id selector as `#${CSS.escape(id)}` so special characters in the id are escaped.",
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0042: {
			why: (e) => `Couldn't find element using selector "${e.el}" returned by scrollBehavior.`,
			fix: "Return a selector that matches an existing element, or guard against missing elements.",
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0050: {
			why: (e) => {
				let t;
				try {
					t = e.to === void 0 ? "undefined" : JSON.stringify(e.to);
				} catch {
					t = String(e.to);
				}
				return `Invalid value for prop "to" in useLink()\n- to: ${t}`;
			},
			fix: "Pass a valid route location (a string path or an object) to the \"to\" prop."
		},
		VUE_ROUTER_R0060: {
			why: (e) => `<router-view> can no longer be used directly inside <${e.comp}>.`,
			fix: (e) => `Wrap the slot's resolved component with <${e.comp}> instead of nesting <router-view> in it:\n\n<router-view v-slot="{ Component }">\n  <${e.comp}>\n    <component :is="Component" />\n  </${e.comp}>\n</router-view>`,
			docs: "https://router.vuejs.org/guide/advanced/router-view-slot.html#KeepAlive-Transition"
		},
		VUE_ROUTER_R0070: {
			why: (e) => `Cannot resolve a relative location without an absolute path. Trying to resolve "${e.to}" from "${e.from}".`,
			fix: (e) => `Resolve from an absolute \`from\` path that starts with "/", e.g. "/${e.from}".`
		},
		VUE_ROUTER_R0080: {
			why: (e) => `Error decoding "${e.text}". Using original value`,
			fix: "Ensure the value is correctly percent-encoded."
		},
		VUE_ROUTER_R0090: {
			why: (e) => `Found duplicated params with name "${e.name}" for path "${e.path}". Only the last one will be available on "$route.params".`,
			fix: "Give each param a unique name within the path.",
			docs: "https://router.vuejs.org/guide/essentials/route-matching-syntax.html"
		},
		VUE_ROUTER_R0100: {
			why: (e) => `Discarded invalid param(s) "${e.params}" when navigating.` + e.inherited + " See https://github.com/vuejs/router/commit/e887570 for more details.",
			fix: "Only pass params that exist on the target route."
		},
		VUE_ROUTER_R0101: {
			why: (e) => `The Matcher cannot resolve relative paths but received "${e.path}". Unless you directly called \`matcher.resolve("${e.path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`,
			fix: "Pass an absolute path (starting with \"/\") to the matcher."
		},
		VUE_ROUTER_R0102: {
			why: (e) => `Alias "${e.alias}" and the original record: "${e.original}" must have the exact same param named "${e.name}"`,
			fix: "Use the same param names in the alias as in the original route.",
			docs: "https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Alias"
		},
		VUE_ROUTER_R0103: {
			why: (e) => `The route named "${e.name}" has a child without a name, an empty path, and no children. Using that name won't render the empty path child, so this is probably a mistake.`,
			fix: "Move the `name` onto the empty-path child; or, if intentional, give the child its own name to silence this.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html#Nested-Named-Routes"
		},
		VUE_ROUTER_R0104: {
			why: (e) => `Absolute path "${e.path}" must have the exact same param named "${e.name}" as its parent "${e.parent}".`,
			fix: "Include the parent route params in the absolute child path.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html"
		},
		VUE_ROUTER_R0105: {
			why: (e) => `Finding ancestor route "${e.ancestor}" failed for "${e.record}"`,
			fix: "Report a reproduction at https://github.com/vuejs/router/issues/new/choose."
		},
		VUE_ROUTER_R0110: {
			why: "A hash base must end with a \"#\"",
			fix: (e) => `Append "#" to the "base" argument passed to "createWebHashHistory()": "${e.base}" should be "${e.suggestion}".`
		},
		VUE_ROUTER_R0120: {
			why: "Error with push/replace State",
			fix: "The browser rejected the history API call; check for cross-origin or rate-limit issues."
		},
		VUE_ROUTER_R0121: {
			why: "history.state seems to have been manually replaced without preserving the necessary values.\nYou can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state",
			fix: "Merge the router's state into your own when calling it manually: `history.replaceState({ ...history.state, ...yourState }, '', url)`.",
			docs: "https://router.vuejs.org/guide/migration.html#Usage-of-history-state"
		},
		VUE_ROUTER_R1001: {
			why: (e) => `Data loader "${String(e.key)}" has a different parent than the current context. This shouldn't be happening.`,
			fix: "Report a bug with a minimal reproduction at https://github.com/vuejs/router/."
		},
		VUE_ROUTER_R1002: {
			why: "Returning a NavigationResult is deprecated.",
			fix: "Replace `return new NavigationResult(to)` with `reroute(to)`, which throws internally to reroute.",
			docs: "https://router.vuejs.org/data-loaders/navigation-aware.html#Controlling-the-navigation-with-reroute-"
		},
		VUE_ROUTER_R1003: {
			why: (e) => `Loader "${e.key}"'s "commit()" was called but there is no staged data.`,
			fix: "Ensure the loader resolved before calling `commit()`.",
			docs: "https://router.vuejs.org/data-loaders/defining-loaders.html#Delaying-data-updates-with-commit"
		},
		VUE_ROUTER_R1004: {
			why: (e) => "A loader returned a NavigationResult but is not registered on the route." + e.key,
			fix: "Export the loader from the page component so it gets registered, e.g. `export const useUserData = defineLoader(...)`.",
			docs: "https://router.vuejs.org/data-loaders/organization.html"
		},
		VUE_ROUTER_R1005: {
			why: (e) => `Data loader "${e.key}" has itself as parent. This shouldn't be happening.`,
			fix: "Report a bug with a minimal reproduction at https://github.com/vuejs/router/."
		},
		VUE_ROUTER_R1006: {
			why: (e) => `A query was defined with the same key as the loader "[${e.key}]".\nSee https://pinia-colada.esm.dev/#TODO`,
			fix: "If the key is meant to match, use the data loader directly; otherwise rename the `useQuery()` key so it no longer collides.",
			docs: "https://router.vuejs.org/data-loaders/colada.html"
		},
		VUE_ROUTER_R1007: {
			why: "Data Loader was setup twice.",
			fix: "Register `DataLoaderPlugin` a single time via `app.use()`.",
			docs: "https://router.vuejs.org/data-loaders.html#Installation"
		},
		VUE_ROUTER_R1008: {
			why: "Data Loader is experimental and subject to breaking changes in the future.",
			docs: "https://router.vuejs.org/data-loaders.html"
		},
		VUE_ROUTER_R1009: {
			why: "Returning a NavigationResult from a loader is deprecated.",
			fix: "Call `reroute(to)` inside the loader instead of returning `new NavigationResult(to)`; it throws internally to reroute.",
			docs: "https://router.vuejs.org/data-loaders/navigation-aware.html#Controlling-the-navigation-with-reroute-"
		}
	}
}), Xe = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location matched"), Ze = Symbol(process.env.NODE_ENV === "production" ? "" : "router view depth"), Qe = Symbol(process.env.NODE_ENV === "production" ? "" : "router"), $e = Symbol(process.env.NODE_ENV === "production" ? "" : "route location"), et = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location"), tt = Object.create, nt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, it = Object.getOwnPropertyNames, at = Object.getPrototypeOf, ot = Object.prototype.hasOwnProperty, st = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), ct = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = it(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ot.call(e, s) && s !== n && nt(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = rt(t, s)) || r.enumerable
	});
	return e;
}, lt = (e, t, n) => (n = e == null ? {} : tt(at(e)), ct(t || !e || !e.__esModule ? nt(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), ut = typeof navigator < "u", R = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
R.chrome !== void 0 && R.chrome.devtools, ut && (R.self, R.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__;
var dt = /* @__PURE__ */ lt((/* @__PURE__ */ st(((e, t) => {
	t.exports = r;
	function n(e) {
		return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
	}
	function r(e) {
		if (e ||= {}, e.circles) return i(e);
		let t = /* @__PURE__ */ new Map();
		if (t.set(Date, (e) => new Date(e)), t.set(Map, (e, t) => new Map(a(Array.from(e), t))), t.set(Set, (e, t) => new Set(a(Array.from(e), t))), e.constructorHandlers) for (let n of e.constructorHandlers) t.set(n[0], n[1]);
		let r = null;
		return e.proto ? s : o;
		function a(e, i) {
			let a = Object.keys(e), o = Array(a.length);
			for (let s = 0; s < a.length; s++) {
				let c = a[s], l = e[c];
				typeof l != "object" || !l ? o[c] = l : l.constructor !== Object && (r = t.get(l.constructor)) ? o[c] = r(l, i) : ArrayBuffer.isView(l) ? o[c] = n(l) : o[c] = i(l);
			}
			return o;
		}
		function o(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, o);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, o);
			let i = {};
			for (let a in e) {
				if (Object.hasOwnProperty.call(e, a) === !1) continue;
				let s = e[a];
				typeof s != "object" || !s ? i[a] = s : s.constructor !== Object && (r = t.get(s.constructor)) ? i[a] = r(s, o) : ArrayBuffer.isView(s) ? i[a] = n(s) : i[a] = o(s);
			}
			return i;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, s);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, s);
			let i = {};
			for (let a in e) {
				let o = e[a];
				typeof o != "object" || !o ? i[a] = o : o.constructor !== Object && (r = t.get(o.constructor)) ? i[a] = r(o, s) : ArrayBuffer.isView(o) ? i[a] = n(o) : i[a] = s(o);
			}
			return i;
		}
	}
	function i(e) {
		let t = [], r = [], i = /* @__PURE__ */ new Map();
		if (i.set(Date, (e) => new Date(e)), i.set(Map, (e, t) => new Map(o(Array.from(e), t))), i.set(Set, (e, t) => new Set(o(Array.from(e), t))), e.constructorHandlers) for (let t of e.constructorHandlers) i.set(t[0], t[1]);
		let a = null;
		return e.proto ? c : s;
		function o(e, o) {
			let s = Object.keys(e), c = Array(s.length);
			for (let l = 0; l < s.length; l++) {
				let u = s[l], d = e[u];
				if (typeof d != "object" || !d) c[u] = d;
				else if (d.constructor !== Object && (a = i.get(d.constructor))) c[u] = a(d, o);
				else if (ArrayBuffer.isView(d)) c[u] = n(d);
				else {
					let e = t.indexOf(d);
					e === -1 ? c[u] = o(d) : c[u] = r[e];
				}
			}
			return c;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, s);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, s);
			let c = {};
			t.push(e), r.push(c);
			for (let o in e) {
				if (Object.hasOwnProperty.call(e, o) === !1) continue;
				let l = e[o];
				if (typeof l != "object" || !l) c[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) c[o] = a(l, s);
				else if (ArrayBuffer.isView(l)) c[o] = n(l);
				else {
					let e = t.indexOf(l);
					e === -1 ? c[o] = s(l) : c[o] = r[e];
				}
			}
			return t.pop(), r.pop(), c;
		}
		function c(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, c);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, c);
			let s = {};
			t.push(e), r.push(s);
			for (let o in e) {
				let l = e[o];
				if (typeof l != "object" || !l) s[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) s[o] = a(l, c);
				else if (ArrayBuffer.isView(l)) s[o] = n(l);
				else {
					let e = t.indexOf(l);
					e === -1 ? s[o] = c(l) : s[o] = r[e];
				}
			}
			return t.pop(), r.pop(), s;
		}
	}
})))(), 1), ft = /(?:^|[-_/])(\w)/g;
function pt(e, t) {
	return t ? t.toUpperCase() : "";
}
function mt(e) {
	return e && `${e}`.replace(ft, pt);
}
function ht(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var gt = (0, dt.default)({ circles: !0 }), _t = { trailing: !0 };
function vt(e, t = 25, n = {}) {
	if (n = {
		..._t,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = yt(e, t, r), o.finally(() => {
		if (o = null, n.trailing && s && !i) {
			let e = c(t, s);
			return s = null, e;
		}
	}), o), l = function(...e) {
		return n.trailing && (s = e), o || new Promise((o) => {
			let l = !i && n.leading;
			clearTimeout(i), i = setTimeout(() => {
				i = null;
				let t = n.leading ? r : c(this, e);
				s = null;
				for (let e of a) e(t);
				a = [];
			}, t), l ? (r = c(this, e), o(r)) : a.push(o);
		});
	}, u = (e) => {
		e && (clearTimeout(e), i = null);
	};
	return l.isPending = () => !!i, l.cancel = () => {
		u(i), a = [], s = null;
	}, l.flush = () => {
		if (u(i), !s || o) return;
		let e = s;
		return s = null, c(this, e);
	}, l;
}
async function yt(e, t, n) {
	return await e.apply(t, n);
}
//#endregion
//#region node_modules/hookable/dist/index.mjs
function bt(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? bt(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var xt = { run: (e) => e() }, St = console.createTask === void 0 ? () => xt : console.createTask;
function Ct(e, t) {
	let n = St(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function wt(e, t) {
	let n = St(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function Tt(e, t) {
	for (let n of [...e]) n(t);
}
var Et = class {
	constructor() {
		this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
	}
	hook(e, t, n = {}) {
		if (!e || typeof t != "function") return () => {};
		let r = e, i;
		for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
		if (i && !n.allowDeprecated) {
			let e = i.message;
			e ||= `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : ""), this._deprecatedMessages ||= /* @__PURE__ */ new Set(), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e));
		}
		if (!t.name) try {
			Object.defineProperty(t, "name", {
				get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
				configurable: !0
			});
		} catch {}
		return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t &&= (this.removeHook(e, t), void 0);
		};
	}
	hookOnce(e, t) {
		let n, r = (...e) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...e));
		return n = this.hook(e, r), n;
	}
	removeHook(e, t) {
		if (this._hooks[e]) {
			let n = this._hooks[e].indexOf(t);
			n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
		}
	}
	deprecateHook(e, t) {
		this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
		let n = this._hooks[e] || [];
		delete this._hooks[e];
		for (let t of n) this.hook(e, t);
	}
	deprecateHooks(e) {
		Object.assign(this._deprecatedHooks, e);
		for (let t in e) this.deprecateHook(t, e[t]);
	}
	addHooks(e) {
		let t = bt(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = bt(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(Ct, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(wt, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && Tt(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && Tt(this._after, r);
		}) : (this._after && r && Tt(this._after, r), i);
	}
	beforeEach(e) {
		return this._before = this._before || [], this._before.push(e), () => {
			if (this._before !== void 0) {
				let t = this._before.indexOf(e);
				t !== -1 && this._before.splice(t, 1);
			}
		};
	}
	afterEach(e) {
		return this._after = this._after || [], this._after.push(e), () => {
			if (this._after !== void 0) {
				let t = this._after.indexOf(e);
				t !== -1 && this._after.splice(t, 1);
			}
		};
	}
};
function Dt() {
	return new Et();
}
//#endregion
//#region node_modules/@vue/devtools-kit/dist/index.js
var Ot = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
function kt(e) {
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function At(e) {
	let t = e.__file;
	if (t) return mt(ht(t, ".vue"));
}
function jt(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Mt(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Nt(e) {
	let t = e.subTree?.type, n = Mt(e);
	return n ? n?.types?.Fragment === t : !1;
}
function Pt(e) {
	let t = kt(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return jt(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return jt(e, t);
	return At(e?.type || {}) || "Anonymous Component";
}
function Ft(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function It(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Lt() {
	let e = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return e.right - e.left;
		},
		get height() {
			return e.bottom - e.top;
		}
	};
	return e;
}
var Rt;
function zt(e) {
	return Rt ||= document.createRange(), Rt.selectNode(e), Rt.getBoundingClientRect();
}
function Bt(e) {
	let t = Lt();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = z(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = zt(e));
		}
		i && Vt(t, i);
	}
	return t;
}
function Vt(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Ht = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function z(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? Ht : Nt(e) ? Bt(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? z(e.subTree.component) : Ht;
}
function Ut(e) {
	return Nt(e) ? Wt(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Wt(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...Ut(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var Gt = "__vue-devtools-component-inspector__", Kt = "__vue-devtools-component-inspector__card__", qt = "__vue-devtools-component-inspector__name__", Jt = "__vue-devtools-component-inspector__indicator__", Yt = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, Xt = {
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "5px 8px",
	borderRadius: "4px",
	textAlign: "left",
	position: "absolute",
	left: 0,
	color: "#e9e9e9",
	fontSize: "14px",
	fontWeight: 600,
	lineHeight: "24px",
	backgroundColor: "#42b883",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, Zt = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function Qt() {
	return document.getElementById(Gt);
}
function $t() {
	return document.getElementById(Kt);
}
function en() {
	return document.getElementById(Jt);
}
function tn() {
	return document.getElementById(qt);
}
function nn(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function rn(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? Gt, Object.assign(t.style, {
		...Yt,
		...nn(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Kt, Object.assign(n.style, {
		...Xt,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = qt, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = Jt, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Zt), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function an(e) {
	let t = Qt(), n = $t(), r = tn(), i = en();
	t && (Object.assign(t.style, {
		...Yt,
		...nn(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function on(e) {
	let t = z(e);
	if (!t.width && !t.height) return;
	let n = Pt(e);
	Qt() ? an({
		bounds: t,
		name: n
	}) : rn({
		bounds: t,
		name: n
	});
}
function sn() {
	let e = Qt();
	e && (e.style.display = "none");
}
var cn = null;
function ln(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (cn = e, e.vnode.el)) {
			let t = z(e), n = Pt(e);
			Qt() ? an({
				bounds: t,
				name: n
			}) : rn({
				bounds: t,
				name: n
			});
		}
	}
}
function un(e, t) {
	e.preventDefault(), e.stopPropagation(), cn && t(Ft(cn));
}
var dn = null;
function fn() {
	sn(), window.removeEventListener("mouseover", ln), window.removeEventListener("click", dn, !0), dn = null;
}
function pn() {
	return window.addEventListener("mouseover", ln), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), un(n, (n) => {
				window.removeEventListener("click", t, !0), dn = null, window.removeEventListener("mouseover", ln);
				let r = Qt();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		dn = t, window.addEventListener("click", t, !0);
	});
}
function mn(e) {
	let t = It(U.value, e.id);
	if (t) {
		let [n] = Ut(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = z(t), n = document.createElement("div"), r = {
				...nn(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = z(t);
			if (n.width || n.height) {
				let r = Pt(t), i = Qt();
				i ? an({
					...e,
					name: r,
					bounds: n
				}) : rn({
					...e,
					name: r,
					bounds: n
				}), setTimeout(() => {
					i && (i.style.display = "none");
				}, 1500);
			}
		}, 1200);
	}
}
R.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= !0;
function hn(e) {
	let t = 0, n = setInterval(() => {
		R.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function gn() {
	let e = R.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function _n() {
	return new Promise((e) => {
		function t() {
			gn(), e(R.__VUE_INSPECTOR__);
		}
		R.__VUE_INSPECTOR__ ? t() : hn(() => {
			t();
		});
	});
}
var vn = /* @__PURE__ */ function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function yn(e) {
	return !!(e && e[vn.IS_READONLY]);
}
function bn(e) {
	return yn(e) ? bn(e[vn.RAW]) : !!(e && e[vn.IS_REACTIVE]);
}
function xn(e) {
	return !!(e && e.__v_isRef === !0);
}
function Sn(e) {
	let t = e && e[vn.RAW];
	return t ? Sn(t) : e;
}
var Cn = class {
	constructor() {
		this.refEditor = new wn();
	}
	set(e, t, n, r) {
		let i = Array.isArray(t) ? t : t.split(".");
		for (; i.length > 1;) {
			let t = i.shift();
			e = e instanceof Map ? e.get(t) : e instanceof Set ? Array.from(e.values())[t] : e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		let a = i[0], o = this.refEditor.get(e)[a];
		r ? r(e, a, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[a] = n;
	}
	get(e, t) {
		let n = Array.isArray(t) ? t : t.split(".");
		for (let t = 0; t < n.length; t++) if (e = e instanceof Map ? e.get(n[t]) : e[n[t]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
		return e;
	}
	has(e, t, n = !1) {
		if (e === void 0) return !1;
		let r = Array.isArray(t) ? t.slice() : t.split("."), i = n ? 2 : 1;
		for (; e && r.length > i;) {
			let t = r.shift();
			e = e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
	}
	createDefaultSetCallback(e) {
		return (t, n, r) => {
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Sn(t) instanceof Map ? t.delete(n) : Sn(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : Sn(t) instanceof Map ? t.set(e.newKey || n, r) : Sn(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, wn = class {
	set(e, t) {
		if (xn(e)) e.value = t;
		else {
			if (e instanceof Set && Array.isArray(t)) {
				e.clear(), t.forEach((t) => e.add(t));
				return;
			}
			let n = Object.keys(t);
			if (e instanceof Map) {
				let r = new Set(e.keys());
				n.forEach((n) => {
					e.set(n, Reflect.get(t, n)), r.delete(n);
				}), r.forEach((t) => e.delete(t));
				return;
			}
			let r = new Set(Object.keys(e));
			n.forEach((n) => {
				Reflect.set(e, n, Reflect.get(t, n)), r.delete(n);
			}), r.forEach((t) => Reflect.deleteProperty(e, t));
		}
	}
	get(e) {
		return xn(e) ? e.value : e;
	}
	isRef(e) {
		return xn(e) || bn(e);
	}
};
new Cn();
var Tn = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function En() {
	if (typeof window > "u" || !ut || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(Tn);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
R.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var Dn = new Proxy(R.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function On(e, t) {
	W.timelineLayersState[t.id] = !1, Dn.push({
		...e,
		descriptorId: t.id,
		appRecord: Mt(t.app)
	});
}
R.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var kn = new Proxy(R.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), An = vt(() => {
	pr.hooks.callHook(H.SEND_INSPECTOR_TO_CLIENT, Mn());
});
function jn(e, t) {
	kn.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: Mt(t.app)
	}), An();
}
function Mn() {
	return kn.filter((e) => e.descriptor.app === U.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
		let t = e.descriptor, n = e.options;
		return {
			id: n.id,
			label: n.label,
			logo: t.logo,
			icon: `custom-ic-baseline-${n?.icon?.replace(/_/g, "-")}`,
			packageName: t.packageName,
			homepage: t.homepage,
			pluginId: t.id
		};
	});
}
function Nn(e, t) {
	return kn.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var B = /* @__PURE__ */ function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), V = /* @__PURE__ */ function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), H = /* @__PURE__ */ function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function Pn() {
	let e = Dt();
	e.hook(V.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		jn(e, t.descriptor);
	});
	let t = vt(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || W.highPerfModeEnabled) return;
		let r = Nn(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			filter: r?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i))), t();
			}, B.GET_INSPECTOR_TREE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				rootNodes: i.rootNodes
			})));
		}, H.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	e.hook(V.SEND_INSPECTOR_TREE, t);
	let n = vt(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || W.highPerfModeEnabled) return;
		let r = Nn(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			nodeId: r?.selectedNodeId || "",
			state: null
		}, a = { currentTab: `custom-inspector:${t}` };
		i.nodeId && await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i, a))), t();
			}, B.GET_INSPECTOR_STATE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				nodeId: i.nodeId,
				state: i.state
			})));
		}, H.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	return e.hook(V.SEND_INSPECTOR_STATE, n), e.hook(V.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = Nn(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(V.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		On(e, t.descriptor);
	}), e.hook(V.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		W.highPerfModeEnabled || !W.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, H.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(V.GET_COMPONENT_INSTANCES, async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook(V.GET_COMPONENT_BOUNDS, async ({ instance: e }) => z(e)), e.hook(V.GET_COMPONENT_NAME, ({ instance: e }) => Pt(e)), e.hook(V.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = U.value.instanceMap.get(e);
		t && on(t);
	}), e.hook(V.COMPONENT_UNHIGHLIGHT, () => {
		sn();
	}), e;
}
R.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [], R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {}, R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "", R.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [], R.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var Fn = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function In() {
	return {
		connected: !1,
		clientConnected: !1,
		vitePluginDetected: !0,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: !0,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: En()
	};
}
R[Fn] ??= In();
var Ln = vt((e) => {
	pr.hooks.callHook(H.DEVTOOLS_STATE_UPDATED, { state: e });
});
vt((e, t) => {
	pr.hooks.callHook(H.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var Rn = new Proxy(R.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? R.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : R.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), U = new Proxy(R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function zn() {
	Ln({
		...R[Fn],
		appRecords: Rn.value,
		activeAppRecordId: U.id,
		tabs: R.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: R.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function Bn(e) {
	R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, zn();
}
function Vn(e) {
	R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, zn();
}
var W = new Proxy(R[Fn], {
	get(e, t) {
		return t === "appRecords" ? Rn : t === "activeAppRecordId" ? U.id : t === "tabs" ? R.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? R.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : R[Fn][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, R[Fn][t] = n, !0;
	}
});
function Hn(e = {}) {
	let { file: t, host: n, baseUrl: r = window.location.origin, line: i = 0, column: a = 0 } = e;
	if (t) {
		if (n === "chrome-extension") {
			let e = t.replace(/\\/g, "\\\\"), n = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${n}__open-in-editor?file=${encodeURI(t)}`).then((t) => {
				if (!t.ok) {
					let t = `Opening component ${e} failed`;
					console.log(`%c${t}`, "color:red");
				}
			});
		} else if (W.vitePluginDetected) {
			let e = R.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
			R.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
R.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var Un = new Proxy(R.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function Wn(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function Gn(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Kn(e) {
	return (Un.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function qn(e, t) {
	let n = Gn(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return Wn(e ? (Un.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Jn(e, t) {
	let n = Gn(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Wn(t)));
}
function Yn(e, t, n) {
	let r = Gn(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), pr.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, B.SET_PLUGIN_SETTINGS);
}
var G = /* @__PURE__ */ function(e) {
	return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
}({}), K = R.__VUE_DEVTOOLS_HOOK ??= Dt(), Xn = {
	on: {
		vueAppInit(e) {
			K.hook(G.APP_INIT, e);
		},
		vueAppUnmount(e) {
			K.hook(G.APP_UNMOUNT, e);
		},
		vueAppConnected(e) {
			K.hook(G.APP_CONNECTED, e);
		},
		componentAdded(e) {
			return K.hook(G.COMPONENT_ADDED, e);
		},
		componentEmit(e) {
			return K.hook(G.COMPONENT_EMIT, e);
		},
		componentUpdated(e) {
			return K.hook(G.COMPONENT_UPDATED, e);
		},
		componentRemoved(e) {
			return K.hook(G.COMPONENT_REMOVED, e);
		},
		setupDevtoolsPlugin(e) {
			K.hook(G.SETUP_DEVTOOLS_PLUGIN, e);
		},
		perfStart(e) {
			return K.hook(G.PERFORMANCE_START, e);
		},
		perfEnd(e) {
			return K.hook(G.PERFORMANCE_END, e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return K.callHook(G.SETUP_DEVTOOLS_PLUGIN, e, t);
	}
}, Zn = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook(B.VISIT_COMPONENT_TREE, e);
			},
			inspectComponent: (e) => {
				this.hooks.hook(B.INSPECT_COMPONENT, e);
			},
			editComponentState: (e) => {
				this.hooks.hook(B.EDIT_COMPONENT_STATE, e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook(B.GET_INSPECTOR_TREE, e);
			},
			getInspectorState: (e) => {
				this.hooks.hook(B.GET_INSPECTOR_STATE, e);
			},
			editInspectorState: (e) => {
				this.hooks.hook(B.EDIT_INSPECTOR_STATE, e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook(B.INSPECT_TIMELINE_EVENT, e);
			},
			timelineCleared: (e) => {
				this.hooks.hook(B.TIMELINE_CLEARED, e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook(B.SET_PLUGIN_SETTINGS, e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (W.highPerfModeEnabled) return;
		let t = Mn().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t?.id) {
			if (e) {
				let t = [
					e.appContext.app,
					e.uid,
					e.parent?.uid,
					e
				];
				K.callHook(G.COMPONENT_UPDATED, ...t);
			} else K.callHook(G.COMPONENT_UPDATED);
			this.hooks.callHook(V.SEND_INSPECTOR_STATE, {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook(V.ADD_INSPECTOR, {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && Jn(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		W.highPerfModeEnabled || this.hooks.callHook(V.SEND_INSPECTOR_TREE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		W.highPerfModeEnabled || this.hooks.callHook(V.SEND_INSPECTOR_STATE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook(V.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook(B.VISIT_COMPONENT_TREE, e);
	}
	now() {
		return W.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook(V.TIMELINE_LAYER_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		W.highPerfModeEnabled || this.hooks.callHook(V.TIMELINE_EVENT_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return qn(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook(V.GET_COMPONENT_INSTANCES, { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook(V.GET_COMPONENT_BOUNDS, { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook(V.GET_COMPONENT_NAME, { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(V.COMPONENT_HIGHLIGHT, { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook(V.COMPONENT_UNHIGHLIGHT);
	}
}, Qn = "__vue_devtool_undefined__", $n = "__vue_devtool_infinity__", er = "__vue_devtool_negative_infinity__", tr = "__vue_devtool_nan__";
Object.entries({
	[Qn]: "undefined",
	[tr]: "NaN",
	[$n]: "Infinity",
	[er]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), R.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function nr(e, t) {
	return Xn.setupDevToolsPlugin(e, t);
}
function rr(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Zn({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: pr
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function ir(e, t) {
	R.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || W.highPerfModeEnabled && !t?.inspectingComponent || (R.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Un.forEach((t) => {
		rr(t, e);
	}));
}
var ar = "__VUE_DEVTOOLS_ROUTER__", or = "__VUE_DEVTOOLS_ROUTER_INFO__";
R[or] ??= {
	currentRoute: null,
	routes: []
}, R[ar] ??= {}, new Proxy(R[or], { get(e, t) {
	return R[or][t];
} }), new Proxy(R[ar], { get(e, t) {
	if (t === "value") return R[ar];
} });
function sr(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function cr(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = cr(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function lr(e) {
	if (e) {
		let { fullPath: t, hash: n, href: r, path: i, name: a, matched: o, params: s, query: c } = e;
		return {
			fullPath: t,
			hash: n,
			href: r,
			path: i,
			name: a,
			params: s,
			query: c,
			matched: cr(o)
		};
	}
	return e;
}
function ur(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = lr(t?.currentRoute.value), r = cr(sr(t)), i = console.warn;
		console.warn = () => {}, R[or] = {
			currentRoute: n ? gt(n) : {},
			routes: gt(r)
		}, R[ar] = t, console.warn = i;
	}
	n(), Xn.on.componentUpdated(vt(() => {
		t.value?.app === e.app && (n(), !W.highPerfModeEnabled && pr.hooks.callHook(H.ROUTER_INFO_UPDATED, { state: R[or] }));
	}, 200));
}
function dr(e) {
	return {
		async getInspectorTree(t) {
			let n = {
				...t,
				app: U.value.app,
				rootNodes: []
			};
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n))), t();
				}, B.GET_INSPECTOR_TREE);
			}), n.rootNodes;
		},
		async getInspectorState(t) {
			let n = {
				...t,
				app: U.value.app,
				state: null
			}, r = { currentTab: `custom-inspector:${t.inspectorId}` };
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n, r))), t();
				}, B.GET_INSPECTOR_STATE);
			}), n.state;
		},
		editInspectorState(t) {
			let n = new Cn(), r = {
				...t,
				app: U.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			};
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, B.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(t) {
			let n = Nn(t);
			e.callHook(V.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return pn();
		},
		cancelInspectComponentInspector() {
			return fn();
		},
		getComponentRenderCode(e) {
			let t = It(U.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return mn({ id: e });
		},
		openInEditor: Hn,
		getVueInspector: _n,
		toggleApp(e, t) {
			let n = Rn.value.find((t) => t.id === e);
			n && (Vn(e), Bn(n), ur(n, U), An(), ir(n.app, t));
		},
		inspectDOM(e) {
			let t = It(U.value, e);
			if (t) {
				let [e] = Ut(t);
				e && (R.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			Yn(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Kn(e),
				values: qn(e)
			};
		}
	};
}
R.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
var fr = Pn();
R.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks: fr,
	get state() {
		return {
			...W,
			activeAppRecordId: U.id,
			activeAppRecord: U.value,
			appRecords: Rn.value
		};
	},
	api: dr(fr)
};
var pr = R.__VUE_DEVTOOLS_KIT_CONTEXT__, mr = /* @__PURE__ */ Ot(((e, t) => {
	(function(e) {
		var n = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "Ae",
			Å: "A",
			Æ: "AE",
			Ç: "C",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			Ð: "D",
			Ñ: "N",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "Oe",
			Ő: "O",
			Ø: "O",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "Ue",
			Ű: "U",
			Ý: "Y",
			Þ: "TH",
			ß: "ss",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "ae",
			å: "a",
			æ: "ae",
			ç: "c",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			ð: "d",
			ñ: "n",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "oe",
			ő: "o",
			ø: "o",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "ue",
			ű: "u",
			ý: "y",
			þ: "th",
			ÿ: "y",
			ẞ: "SS",
			ا: "a",
			أ: "a",
			إ: "i",
			آ: "aa",
			ؤ: "u",
			ئ: "e",
			ء: "a",
			ب: "b",
			ت: "t",
			ث: "th",
			ج: "j",
			ح: "h",
			خ: "kh",
			د: "d",
			ذ: "th",
			ر: "r",
			ز: "z",
			س: "s",
			ش: "sh",
			ص: "s",
			ض: "dh",
			ط: "t",
			ظ: "z",
			ع: "a",
			غ: "gh",
			ف: "f",
			ق: "q",
			ك: "k",
			ل: "l",
			م: "m",
			ن: "n",
			ه: "h",
			و: "w",
			ي: "y",
			ى: "a",
			ة: "h",
			ﻻ: "la",
			ﻷ: "laa",
			ﻹ: "lai",
			ﻵ: "laa",
			گ: "g",
			چ: "ch",
			پ: "p",
			ژ: "zh",
			ک: "k",
			ی: "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
			"٠": "0",
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"۰": "0",
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			က: "k",
			ခ: "kh",
			ဂ: "g",
			ဃ: "ga",
			င: "ng",
			စ: "s",
			ဆ: "sa",
			ဇ: "z",
			စျ: "za",
			ည: "ny",
			ဋ: "t",
			ဌ: "ta",
			ဍ: "d",
			ဎ: "da",
			ဏ: "na",
			တ: "t",
			ထ: "ta",
			ဒ: "d",
			ဓ: "da",
			န: "n",
			ပ: "p",
			ဖ: "pa",
			ဗ: "b",
			ဘ: "ba",
			မ: "m",
			ယ: "y",
			ရ: "ya",
			လ: "l",
			ဝ: "w",
			သ: "th",
			ဟ: "h",
			ဠ: "la",
			အ: "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			ဧ: "e",
			"၏": "-e",
			ဣ: "i",
			ဤ: "-i",
			ဉ: "u",
			ဦ: "-u",
			ဩ: "aw",
			သြော: "aw",
			ဪ: "aw",
			"၀": "0",
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"္": "",
			"့": "",
			"း": "",
			č: "c",
			ď: "d",
			ě: "e",
			ň: "n",
			ř: "r",
			š: "s",
			ť: "t",
			ů: "u",
			ž: "z",
			Č: "C",
			Ď: "D",
			Ě: "E",
			Ň: "N",
			Ř: "R",
			Š: "S",
			Ť: "T",
			Ů: "U",
			Ž: "Z",
			ހ: "h",
			ށ: "sh",
			ނ: "n",
			ރ: "r",
			ބ: "b",
			ޅ: "lh",
			ކ: "k",
			އ: "a",
			ވ: "v",
			މ: "m",
			ފ: "f",
			ދ: "dh",
			ތ: "th",
			ލ: "l",
			ގ: "g",
			ޏ: "gn",
			ސ: "s",
			ޑ: "d",
			ޒ: "z",
			ޓ: "t",
			ޔ: "y",
			ޕ: "p",
			ޖ: "j",
			ޗ: "ch",
			ޘ: "tt",
			ޙ: "hh",
			ޚ: "kh",
			ޛ: "th",
			ޜ: "z",
			ޝ: "sh",
			ޞ: "s",
			ޟ: "d",
			ޠ: "t",
			ޡ: "z",
			ޢ: "a",
			ޣ: "gh",
			ޤ: "q",
			ޥ: "w",
			"ަ": "a",
			"ާ": "aa",
			"ި": "i",
			"ީ": "ee",
			"ު": "u",
			"ޫ": "oo",
			"ެ": "e",
			"ޭ": "ey",
			"ޮ": "o",
			"ޯ": "oa",
			"ް": "",
			ა: "a",
			ბ: "b",
			გ: "g",
			დ: "d",
			ე: "e",
			ვ: "v",
			ზ: "z",
			თ: "t",
			ი: "i",
			კ: "k",
			ლ: "l",
			მ: "m",
			ნ: "n",
			ო: "o",
			პ: "p",
			ჟ: "zh",
			რ: "r",
			ს: "s",
			ტ: "t",
			უ: "u",
			ფ: "p",
			ქ: "k",
			ღ: "gh",
			ყ: "q",
			შ: "sh",
			ჩ: "ch",
			ც: "ts",
			ძ: "dz",
			წ: "ts",
			ჭ: "ch",
			ხ: "kh",
			ჯ: "j",
			ჰ: "h",
			α: "a",
			β: "v",
			γ: "g",
			δ: "d",
			ε: "e",
			ζ: "z",
			η: "i",
			θ: "th",
			ι: "i",
			κ: "k",
			λ: "l",
			μ: "m",
			ν: "n",
			ξ: "ks",
			ο: "o",
			π: "p",
			ρ: "r",
			σ: "s",
			τ: "t",
			υ: "y",
			φ: "f",
			χ: "x",
			ψ: "ps",
			ω: "o",
			ά: "a",
			έ: "e",
			ί: "i",
			ό: "o",
			ύ: "y",
			ή: "i",
			ώ: "o",
			ς: "s",
			ϊ: "i",
			ΰ: "y",
			ϋ: "y",
			ΐ: "i",
			Α: "A",
			Β: "B",
			Γ: "G",
			Δ: "D",
			Ε: "E",
			Ζ: "Z",
			Η: "I",
			Θ: "TH",
			Ι: "I",
			Κ: "K",
			Λ: "L",
			Μ: "M",
			Ν: "N",
			Ξ: "KS",
			Ο: "O",
			Π: "P",
			Ρ: "R",
			Σ: "S",
			Τ: "T",
			Υ: "Y",
			Φ: "F",
			Χ: "X",
			Ψ: "PS",
			Ω: "O",
			Ά: "A",
			Έ: "E",
			Ί: "I",
			Ό: "O",
			Ύ: "Y",
			Ή: "I",
			Ώ: "O",
			Ϊ: "I",
			Ϋ: "Y",
			ā: "a",
			ē: "e",
			ģ: "g",
			ī: "i",
			ķ: "k",
			ļ: "l",
			ņ: "n",
			ū: "u",
			Ā: "A",
			Ē: "E",
			Ģ: "G",
			Ī: "I",
			Ķ: "k",
			Ļ: "L",
			Ņ: "N",
			Ū: "U",
			Ќ: "Kj",
			ќ: "kj",
			Љ: "Lj",
			љ: "lj",
			Њ: "Nj",
			њ: "nj",
			Тс: "Ts",
			тс: "ts",
			ą: "a",
			ć: "c",
			ę: "e",
			ł: "l",
			ń: "n",
			ś: "s",
			ź: "z",
			ż: "z",
			Ą: "A",
			Ć: "C",
			Ę: "E",
			Ł: "L",
			Ń: "N",
			Ś: "S",
			Ź: "Z",
			Ż: "Z",
			Є: "Ye",
			І: "I",
			Ї: "Yi",
			Ґ: "G",
			є: "ye",
			і: "i",
			ї: "yi",
			ґ: "g",
			ă: "a",
			Ă: "A",
			ș: "s",
			Ș: "S",
			ț: "t",
			Ț: "T",
			ţ: "t",
			Ţ: "T",
			а: "a",
			б: "b",
			в: "v",
			г: "g",
			д: "d",
			е: "e",
			ё: "yo",
			ж: "zh",
			з: "z",
			и: "i",
			й: "i",
			к: "k",
			л: "l",
			м: "m",
			н: "n",
			о: "o",
			п: "p",
			р: "r",
			с: "s",
			т: "t",
			у: "u",
			ф: "f",
			х: "kh",
			ц: "c",
			ч: "ch",
			ш: "sh",
			щ: "sh",
			ъ: "",
			ы: "y",
			ь: "",
			э: "e",
			ю: "yu",
			я: "ya",
			А: "A",
			Б: "B",
			В: "V",
			Г: "G",
			Д: "D",
			Е: "E",
			Ё: "Yo",
			Ж: "Zh",
			З: "Z",
			И: "I",
			Й: "I",
			К: "K",
			Л: "L",
			М: "M",
			Н: "N",
			О: "O",
			П: "P",
			Р: "R",
			С: "S",
			Т: "T",
			У: "U",
			Ф: "F",
			Х: "Kh",
			Ц: "C",
			Ч: "Ch",
			Ш: "Sh",
			Щ: "Sh",
			Ъ: "",
			Ы: "Y",
			Ь: "",
			Э: "E",
			Ю: "Yu",
			Я: "Ya",
			ђ: "dj",
			ј: "j",
			ћ: "c",
			џ: "dz",
			Ђ: "Dj",
			Ј: "j",
			Ћ: "C",
			Џ: "Dz",
			ľ: "l",
			ĺ: "l",
			ŕ: "r",
			Ľ: "L",
			Ĺ: "L",
			Ŕ: "R",
			ş: "s",
			Ş: "S",
			ı: "i",
			İ: "I",
			ğ: "g",
			Ğ: "G",
			ả: "a",
			Ả: "A",
			ẳ: "a",
			Ẳ: "A",
			ẩ: "a",
			Ẩ: "A",
			đ: "d",
			Đ: "D",
			ẹ: "e",
			Ẹ: "E",
			ẽ: "e",
			Ẽ: "E",
			ẻ: "e",
			Ẻ: "E",
			ế: "e",
			Ế: "E",
			ề: "e",
			Ề: "E",
			ệ: "e",
			Ệ: "E",
			ễ: "e",
			Ễ: "E",
			ể: "e",
			Ể: "E",
			ỏ: "o",
			ọ: "o",
			Ọ: "o",
			ố: "o",
			Ố: "O",
			ồ: "o",
			Ồ: "O",
			ổ: "o",
			Ổ: "O",
			ộ: "o",
			Ộ: "O",
			ỗ: "o",
			Ỗ: "O",
			ơ: "o",
			Ơ: "O",
			ớ: "o",
			Ớ: "O",
			ờ: "o",
			Ờ: "O",
			ợ: "o",
			Ợ: "O",
			ỡ: "o",
			Ỡ: "O",
			Ở: "o",
			ở: "o",
			ị: "i",
			Ị: "I",
			ĩ: "i",
			Ĩ: "I",
			ỉ: "i",
			Ỉ: "i",
			ủ: "u",
			Ủ: "U",
			ụ: "u",
			Ụ: "U",
			ũ: "u",
			Ũ: "U",
			ư: "u",
			Ư: "U",
			ứ: "u",
			Ứ: "U",
			ừ: "u",
			Ừ: "U",
			ự: "u",
			Ự: "U",
			ữ: "u",
			Ữ: "U",
			ử: "u",
			Ử: "ư",
			ỷ: "y",
			Ỷ: "y",
			ỳ: "y",
			Ỳ: "Y",
			ỵ: "y",
			Ỵ: "Y",
			ỹ: "y",
			Ỹ: "Y",
			ạ: "a",
			Ạ: "A",
			ấ: "a",
			Ấ: "A",
			ầ: "a",
			Ầ: "A",
			ậ: "a",
			Ậ: "A",
			ẫ: "a",
			Ẫ: "A",
			ắ: "a",
			Ắ: "A",
			ằ: "a",
			Ằ: "A",
			ặ: "a",
			Ặ: "A",
			ẵ: "a",
			Ẵ: "A",
			"⓪": "0",
			"①": "1",
			"②": "2",
			"③": "3",
			"④": "4",
			"⑤": "5",
			"⑥": "6",
			"⑦": "7",
			"⑧": "8",
			"⑨": "9",
			"⑩": "10",
			"⑪": "11",
			"⑫": "12",
			"⑬": "13",
			"⑭": "14",
			"⑮": "15",
			"⑯": "16",
			"⑰": "17",
			"⑱": "18",
			"⑲": "18",
			"⑳": "18",
			"⓵": "1",
			"⓶": "2",
			"⓷": "3",
			"⓸": "4",
			"⓹": "5",
			"⓺": "6",
			"⓻": "7",
			"⓼": "8",
			"⓽": "9",
			"⓾": "10",
			"⓿": "0",
			"⓫": "11",
			"⓬": "12",
			"⓭": "13",
			"⓮": "14",
			"⓯": "15",
			"⓰": "16",
			"⓱": "17",
			"⓲": "18",
			"⓳": "19",
			"⓴": "20",
			"Ⓐ": "A",
			"Ⓑ": "B",
			"Ⓒ": "C",
			"Ⓓ": "D",
			"Ⓔ": "E",
			"Ⓕ": "F",
			"Ⓖ": "G",
			"Ⓗ": "H",
			"Ⓘ": "I",
			"Ⓙ": "J",
			"Ⓚ": "K",
			"Ⓛ": "L",
			"Ⓜ": "M",
			"Ⓝ": "N",
			"Ⓞ": "O",
			"Ⓟ": "P",
			"Ⓠ": "Q",
			"Ⓡ": "R",
			"Ⓢ": "S",
			"Ⓣ": "T",
			"Ⓤ": "U",
			"Ⓥ": "V",
			"Ⓦ": "W",
			"Ⓧ": "X",
			"Ⓨ": "Y",
			"Ⓩ": "Z",
			"ⓐ": "a",
			"ⓑ": "b",
			"ⓒ": "c",
			"ⓓ": "d",
			"ⓔ": "e",
			"ⓕ": "f",
			"ⓖ": "g",
			"ⓗ": "h",
			"ⓘ": "i",
			"ⓙ": "j",
			"ⓚ": "k",
			"ⓛ": "l",
			"ⓜ": "m",
			"ⓝ": "n",
			"ⓞ": "o",
			"ⓟ": "p",
			"ⓠ": "q",
			"ⓡ": "r",
			"ⓢ": "s",
			"ⓣ": "t",
			"ⓤ": "u",
			"ⓦ": "v",
			"ⓥ": "w",
			"ⓧ": "x",
			"ⓨ": "y",
			"ⓩ": "z",
			"“": "\"",
			"”": "\"",
			"‘": "'",
			"’": "'",
			"∂": "d",
			ƒ: "f",
			"™": "(TM)",
			"©": "(C)",
			œ: "oe",
			Œ: "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			º: "o",
			ª: "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			$: "USD",
			"€": "EUR",
			"₢": "BRN",
			"₣": "FRF",
			"£": "GBP",
			"₤": "ITL",
			"₦": "NGN",
			"₧": "ESP",
			"₩": "KRW",
			"₪": "ILS",
			"₫": "VND",
			"₭": "LAK",
			"₮": "MNT",
			"₯": "GRD",
			"₱": "ARS",
			"₲": "PYG",
			"₳": "ARA",
			"₴": "UAH",
			"₵": "GHS",
			"¢": "cent",
			"¥": "CNY",
			元: "CNY",
			円: "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			лв: "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			ден: "MKD",
			zł: "PLN",
			"₽": "RUB",
			"₾": "GEL"
		}, r = ["်", "ް"], i = {
			"ာ": "a",
			"ါ": "a",
			"ေ": "e",
			"ဲ": "e",
			"ိ": "i",
			"ီ": "i",
			"ို": "o",
			"ု": "u",
			"ူ": "u",
			"ေါင်": "aung",
			"ော": "aw",
			"ော်": "aw",
			"ေါ": "aw",
			"ေါ်": "aw",
			"်": "်",
			က်: "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			င်: "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			စ်: "it",
			ည်: "i",
			တ်: "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			ဒ်: "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			န်: "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			ပ်: "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			န်ုပ်: "nub",
			မ်: "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			ယ်: "e",
			"ိုလ်": "ol",
			ဉ်: "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		}, a = {
			en: {},
			az: {
				ç: "c",
				ə: "e",
				ğ: "g",
				ı: "i",
				ö: "o",
				ş: "s",
				ü: "u",
				Ç: "C",
				Ə: "E",
				Ğ: "G",
				İ: "I",
				Ö: "O",
				Ş: "S",
				Ü: "U"
			},
			cs: {
				č: "c",
				ď: "d",
				ě: "e",
				ň: "n",
				ř: "r",
				š: "s",
				ť: "t",
				ů: "u",
				ž: "z",
				Č: "C",
				Ď: "D",
				Ě: "E",
				Ň: "N",
				Ř: "R",
				Š: "S",
				Ť: "T",
				Ů: "U",
				Ž: "Z"
			},
			fi: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			hu: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O",
				ü: "u",
				Ü: "U",
				ű: "u",
				Ű: "U"
			},
			lt: {
				ą: "a",
				č: "c",
				ę: "e",
				ė: "e",
				į: "i",
				š: "s",
				ų: "u",
				ū: "u",
				ž: "z",
				Ą: "A",
				Č: "C",
				Ę: "E",
				Ė: "E",
				Į: "I",
				Š: "S",
				Ų: "U",
				Ū: "U"
			},
			lv: {
				ā: "a",
				č: "c",
				ē: "e",
				ģ: "g",
				ī: "i",
				ķ: "k",
				ļ: "l",
				ņ: "n",
				š: "s",
				ū: "u",
				ž: "z",
				Ā: "A",
				Č: "C",
				Ē: "E",
				Ģ: "G",
				Ī: "i",
				Ķ: "k",
				Ļ: "L",
				Ņ: "N",
				Š: "S",
				Ū: "u",
				Ž: "Z"
			},
			pl: {
				ą: "a",
				ć: "c",
				ę: "e",
				ł: "l",
				ń: "n",
				ó: "o",
				ś: "s",
				ź: "z",
				ż: "z",
				Ą: "A",
				Ć: "C",
				Ę: "e",
				Ł: "L",
				Ń: "N",
				Ó: "O",
				Ś: "S",
				Ź: "Z",
				Ż: "Z"
			},
			sv: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			sk: {
				ä: "a",
				Ä: "A"
			},
			sr: {
				љ: "lj",
				њ: "nj",
				Љ: "Lj",
				Њ: "Nj",
				đ: "dj",
				Đ: "Dj"
			},
			tr: {
				Ü: "U",
				Ö: "O",
				ü: "u",
				ö: "o"
			}
		}, o = {
			ar: {
				"∆": "delta",
				"∞": "la-nihaya",
				"♥": "hob",
				"&": "wa",
				"|": "aw",
				"<": "aqal-men",
				">": "akbar-men",
				"∑": "majmou",
				"¤": "omla"
			},
			az: {},
			ca: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "amor",
				"&": "i",
				"|": "o",
				"<": "menys que",
				">": "mes que",
				"∑": "suma dels",
				"¤": "moneda"
			},
			cs: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "nebo",
				"<": "mensi nez",
				">": "vetsi nez",
				"∑": "soucet",
				"¤": "mena"
			},
			de: {
				"∆": "delta",
				"∞": "unendlich",
				"♥": "Liebe",
				"&": "und",
				"|": "oder",
				"<": "kleiner als",
				">": "groesser als",
				"∑": "Summe von",
				"¤": "Waehrung"
			},
			dv: {
				"∆": "delta",
				"∞": "kolunulaa",
				"♥": "loabi",
				"&": "aai",
				"|": "noonee",
				"<": "ah vure kuda",
				">": "ah vure bodu",
				"∑": "jumula",
				"¤": "faisaa"
			},
			en: {
				"∆": "delta",
				"∞": "infinity",
				"♥": "love",
				"&": "and",
				"|": "or",
				"<": "less than",
				">": "greater than",
				"∑": "sum",
				"¤": "currency"
			},
			es: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "y",
				"|": "u",
				"<": "menos que",
				">": "mas que",
				"∑": "suma de los",
				"¤": "moneda"
			},
			fa: {
				"∆": "delta",
				"∞": "bi-nahayat",
				"♥": "eshgh",
				"&": "va",
				"|": "ya",
				"<": "kamtar-az",
				">": "bishtar-az",
				"∑": "majmooe",
				"¤": "vahed"
			},
			fi: {
				"∆": "delta",
				"∞": "aarettomyys",
				"♥": "rakkaus",
				"&": "ja",
				"|": "tai",
				"<": "pienempi kuin",
				">": "suurempi kuin",
				"∑": "summa",
				"¤": "valuutta"
			},
			fr: {
				"∆": "delta",
				"∞": "infiniment",
				"♥": "Amour",
				"&": "et",
				"|": "ou",
				"<": "moins que",
				">": "superieure a",
				"∑": "somme des",
				"¤": "monnaie"
			},
			ge: {
				"∆": "delta",
				"∞": "usasruloba",
				"♥": "siqvaruli",
				"&": "da",
				"|": "an",
				"<": "naklebi",
				">": "meti",
				"∑": "jami",
				"¤": "valuta"
			},
			gr: {},
			hu: {
				"∆": "delta",
				"∞": "vegtelen",
				"♥": "szerelem",
				"&": "es",
				"|": "vagy",
				"<": "kisebb mint",
				">": "nagyobb mint",
				"∑": "szumma",
				"¤": "penznem"
			},
			it: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amore",
				"&": "e",
				"|": "o",
				"<": "minore di",
				">": "maggiore di",
				"∑": "somma",
				"¤": "moneta"
			},
			lt: {
				"∆": "delta",
				"∞": "begalybe",
				"♥": "meile",
				"&": "ir",
				"|": "ar",
				"<": "maziau nei",
				">": "daugiau nei",
				"∑": "suma",
				"¤": "valiuta"
			},
			lv: {
				"∆": "delta",
				"∞": "bezgaliba",
				"♥": "milestiba",
				"&": "un",
				"|": "vai",
				"<": "mazak neka",
				">": "lielaks neka",
				"∑": "summa",
				"¤": "valuta"
			},
			my: {
				"∆": "kwahkhyaet",
				"∞": "asaonasme",
				"♥": "akhyait",
				"&": "nhin",
				"|": "tho",
				"<": "ngethaw",
				">": "kyithaw",
				"∑": "paungld",
				"¤": "ngwekye"
			},
			mk: {},
			nl: {
				"∆": "delta",
				"∞": "oneindig",
				"♥": "liefde",
				"&": "en",
				"|": "of",
				"<": "kleiner dan",
				">": "groter dan",
				"∑": "som",
				"¤": "valuta"
			},
			pl: {
				"∆": "delta",
				"∞": "nieskonczonosc",
				"♥": "milosc",
				"&": "i",
				"|": "lub",
				"<": "mniejsze niz",
				">": "wieksze niz",
				"∑": "suma",
				"¤": "waluta"
			},
			pt: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "e",
				"|": "ou",
				"<": "menor que",
				">": "maior que",
				"∑": "soma",
				"¤": "moeda"
			},
			ro: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "dragoste",
				"&": "si",
				"|": "sau",
				"<": "mai mic ca",
				">": "mai mare ca",
				"∑": "suma",
				"¤": "valuta"
			},
			ru: {
				"∆": "delta",
				"∞": "beskonechno",
				"♥": "lubov",
				"&": "i",
				"|": "ili",
				"<": "menshe",
				">": "bolshe",
				"∑": "summa",
				"¤": "valjuta"
			},
			sk: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "alebo",
				"<": "menej ako",
				">": "viac ako",
				"∑": "sucet",
				"¤": "mena"
			},
			sr: {},
			tr: {
				"∆": "delta",
				"∞": "sonsuzluk",
				"♥": "ask",
				"&": "ve",
				"|": "veya",
				"<": "kucuktur",
				">": "buyuktur",
				"∑": "toplam",
				"¤": "para birimi"
			},
			uk: {
				"∆": "delta",
				"∞": "bezkinechnist",
				"♥": "lubov",
				"&": "i",
				"|": "abo",
				"<": "menshe",
				">": "bilshe",
				"∑": "suma",
				"¤": "valjuta"
			},
			vn: {
				"∆": "delta",
				"∞": "vo cuc",
				"♥": "yeu",
				"&": "va",
				"|": "hoac",
				"<": "nho hon",
				">": "lon hon",
				"∑": "tong",
				"¤": "tien te"
			}
		}, s = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join(""), c = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join(""), l = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join(""), u = function(e, t) {
			var u = "-", d = "", p = "", m = !0, h = {}, g, _, v, y, te, b, x, S, ne, C, w, T, E, D, O = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), x = o.en, S = a.en, typeof t == "object") for (w in g = t.maintainCase || !1, h = t.custom && typeof t.custom == "object" ? t.custom : h, v = +t.truncate > 1 && t.truncate || !1, y = t.uric || !1, te = t.uricNoSlash || !1, b = t.mark || !1, m = !(t.symbols === !1 || t.lang === !1), u = t.separator || u, y && (O += s), te && (O += c), b && (O += l), x = t.lang && o[t.lang] && m ? o[t.lang] : m ? o.en : {}, S = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				h[e + ""] = e + "";
			}), _ = !0) : _ = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				h[e + ""] = e + "";
			}), Object.keys(h).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, h[t]);
			}), h) O += w;
			for (O += u, O = f(O), e = e.replace(/(^\s+|\s+$)/g, ""), E = !1, D = !1, C = 0, T = e.length; C < T; C++) w = e[C], ee(w, h) ? E = !1 : S[w] ? (w = E && S[w].match(/[A-Za-z0-9]/) ? " " + S[w] : S[w], E = !1) : w in n ? (C + 1 < T && r.indexOf(e[C + 1]) >= 0 ? (p += w, w = "") : D === !0 ? (w = i[p] + n[w], p = "") : w = E && n[w].match(/[A-Za-z0-9]/) ? " " + n[w] : n[w], E = !1, D = !1) : w in i ? (p += w, w = "", C === T - 1 && (w = i[p]), D = !0) : x[w] && !(y && s.indexOf(w) !== -1) && !(te && c.indexOf(w) !== -1) ? (w = E || d.substr(-1).match(/[A-Za-z0-9]/) ? u + x[w] : x[w], w += e[C + 1] !== void 0 && e[C + 1].match(/[A-Za-z0-9]/) ? u : "", E = !0) : (D === !0 ? (w = i[p] + w, p = "", D = !1) : E && (/[A-Za-z0-9]/.test(w) || d.substr(-1).match(/A-Za-z0-9]/)) && (w = " " + w), E = !1), d += w.replace(RegExp("[^\\w\\s" + O + "_-]", "g"), u);
			return _ && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(h).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), v && d.length > v && (ne = d.charAt(v) === u, d = d.slice(0, v), ne || (d = d.slice(0, d.lastIndexOf(u)))), !g && !_ && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, ee = function(e, t) {
			for (var n in t) if (t[n] === e) return !0;
		};
		if (t !== void 0 && t.exports) t.exports = u, t.exports.createSlug = d;
		else if (typeof define < "u" && define.amd) define([], function() {
			return u;
		});
		else try {
			if (e.getSlug || e.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			e.getSlug = u, e.createSlug = d;
		} catch {}
	})(e);
}));
(/* @__PURE__ */ Ot(((e, t) => {
	t.exports = mr();
})))(), R.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function hr(e) {
	W.highPerfModeEnabled = e ?? !W.highPerfModeEnabled, !e && U.value && ir(U.value.app);
}
function gr(e) {
	W.devtoolsClientDetected = {
		...W.devtoolsClientDetected,
		...e
	}, hr(!Object.values(W.devtoolsClientDetected).some(Boolean));
}
R.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= gr;
var _r = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(e, t) {
		this.keyToValue.set(e, t), this.valueToKey.set(t, e);
	}
	getByKey(e) {
		return this.keyToValue.get(e);
	}
	getByValue(e) {
		return this.valueToKey.get(e);
	}
	clear() {
		this.keyToValue.clear(), this.valueToKey.clear();
	}
}, vr = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new _r();
	}
	register(e, t) {
		this.kv.getByValue(e) || (t ||= this.generateIdentifier(e), this.kv.set(t, e));
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(e) {
		return this.kv.getByValue(e);
	}
	getValue(e) {
		return this.kv.getByKey(e);
	}
}, yr = class extends vr {
	constructor() {
		super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(e, t) {
		typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
	}
	getAllowedProps(e) {
		return this.classToAllowedProps.get(e);
	}
};
function br(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function xr(e, t) {
	let n = br(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function Sr(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function Cr(e, t) {
	return e.indexOf(t) !== -1;
}
function wr(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var Tr = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return xr(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, Er = (e) => Object.prototype.toString.call(e).slice(8, -1), Dr = (e) => e === void 0, Or = (e) => e === null, kr = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, Ar = (e) => kr(e) && Object.keys(e).length === 0, q = (e) => Array.isArray(e), jr = (e) => typeof e == "string", Mr = (e) => typeof e == "number" && !isNaN(e), Nr = (e) => typeof e == "boolean", Pr = (e) => e instanceof RegExp, Fr = (e) => e instanceof Map, Ir = (e) => e instanceof Set, Lr = (e) => Er(e) === "Symbol", Rr = (e) => e instanceof Date && !isNaN(e.valueOf()), zr = (e) => e instanceof Error, Br = (e) => typeof e == "number" && isNaN(e), Vr = (e) => Nr(e) || Or(e) || Dr(e) || Mr(e) || jr(e) || Lr(e), Hr = (e) => typeof e == "bigint", Ur = (e) => e === Infinity || e === -Infinity, Wr = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Gr = (e) => e instanceof URL, Kr = (e) => e.replace(/\./g, "\\."), qr = (e) => e.map(String).map(Kr).join("."), Jr = (e) => {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "\\" && e.charAt(r + 1) === ".") {
			n += ".", r++;
			continue;
		}
		if (i === ".") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	let r = n;
	return t.push(r), t;
};
function J(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Yr = [
	J(Dr, "undefined", () => null, () => void 0),
	J(Hr, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	J(Rr, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	J(zr, "Error", (e, t) => {
		let n = {
			name: e.name,
			message: e.message
		};
		return t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}, (e, t) => {
		let n = Error(e.message);
		return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}),
	J(Pr, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	J(Ir, "set", (e) => [...e.values()], (e) => new Set(e)),
	J(Fr, "map", (e) => [...e.entries()], (e) => new Map(e)),
	J((e) => Br(e) || Ur(e), "number", (e) => Br(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	J((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	J(Gr, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Xr(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Zr = Xr((e, t) => Lr(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Qr = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), $r = Xr(Wr, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Qr[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function ei(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var ti = Xr(ei, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
	let n = t.classRegistry.getAllowedProps(e.constructor);
	if (!n) return { ...e };
	let r = {};
	return n.forEach((t) => {
		r[t] = e[t];
	}), r;
}, (e, t, n) => {
	let r = n.classRegistry.getValue(t[1]);
	if (!r) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(r.prototype), e);
}), ni = Xr((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), ri = [
	ti,
	Zr,
	ni,
	$r
], ii = (e, t) => {
	let n = wr(ri, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = wr(Yr, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, ai = {};
Yr.forEach((e) => {
	ai[e.annotation] = e;
});
var oi = (e, t, n) => {
	if (q(t)) switch (t[0]) {
		case "symbol": return Zr.untransform(e, t, n);
		case "class": return ti.untransform(e, t, n);
		case "custom": return ni.untransform(e, t, n);
		case "typed-array": return $r.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = ai[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, si = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function ci(e) {
	if (Cr(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (Cr(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (Cr(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var li = (e, t) => {
	ci(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Ir(e)) e = si(e, +r);
		else if (Fr(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = si(e, i);
			switch (a) {
				case "key":
					e = o;
					break;
				case "value":
					e = e.get(o);
					break;
			}
		} else e = e[r];
	}
	return e;
}, ui = (e, t, n) => {
	if (ci(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (q(r)) {
			let e = +n;
			r = r[e];
		} else if (kr(r)) r = r[n];
		else if (Ir(r)) {
			let e = +n;
			r = si(r, e);
		} else if (Fr(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = si(r, i);
			switch (a) {
				case "key":
					r = o;
					break;
				case "value":
					r = r.get(o);
					break;
			}
		}
	}
	let i = t[t.length - 1];
	if (q(r) ? r[+i] = n(r[+i]) : kr(r) && (r[i] = n(r[i])), Ir(r)) {
		let e = si(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (Fr(r)) {
		let e = +t[t.length - 2], a = si(r, e);
		switch (+i == 0 ? "key" : "value") {
			case "key": {
				let e = n(a);
				r.set(e, r.get(a)), e !== a && r.delete(a);
				break;
			}
			case "value":
				r.set(a, n(r.get(a)));
				break;
		}
	}
	return e;
};
function di(e, t, n = []) {
	if (!e) return;
	if (!q(e)) {
		Sr(e, (e, r) => di(e, t, [...n, ...Jr(r)]));
		return;
	}
	let [r, i] = e;
	i && Sr(i, (e, r) => {
		di(e, t, [...n, ...Jr(r)]);
	}), t(r, n);
}
function fi(e, t, n) {
	return di(t, (t, r) => {
		e = ui(e, r, (e) => oi(e, t, n));
	}), e;
}
function pi(e, t) {
	function n(t, n) {
		let r = li(e, Jr(n));
		t.map(Jr).forEach((t) => {
			e = ui(e, t, () => r);
		});
	}
	if (q(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = ui(e, Jr(t), () => e);
		}), i && Sr(i, n);
	} else Sr(t, n);
	return e;
}
var mi = (e, t) => kr(e) || q(e) || Fr(e) || Ir(e) || ei(e, t);
function hi(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function gi(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(qr) : n[qr(i)] = a.map(qr);
	}), r ? Ar(n) ? [r] : [r, n] : Ar(n) ? void 0 : n;
}
var _i = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = Vr(e);
	if (!s) {
		hi(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!mi(e, n)) {
		let t = ii(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (Cr(a, e)) return { transformedValue: null };
	let c = ii(e, n), l = c?.value ?? e, u = q(l) ? [] : {}, d = {};
	Sr(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = _i(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, q(l.annotations) ? d[c] = l.annotations : kr(l.annotations) && Sr(l.annotations, (e, t) => {
			d[Kr(c) + "." + t] = e;
		});
	});
	let f = Ar(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
function vi(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function yi(e) {
	return vi(e) === "Array";
}
function bi(e) {
	if (vi(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function xi(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function Si(e, t = {}) {
	if (yi(e)) return e.map((e) => Si(e, t));
	if (!bi(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (yi(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return xi(n, r, Si(i, t), e, t.nonenumerable), n;
	}, {});
}
var Y = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new yr(), this.symbolRegistry = new vr((e) => e.description ?? ""), this.customTransformerRegistry = new Tr(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = _i(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = gi(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = Si(t);
		return n?.values && (r = fi(r, n.values, this)), n?.referentialEqualities && (r = pi(r, n.referentialEqualities)), r;
	}
	stringify(e) {
		return JSON.stringify(this.serialize(e));
	}
	parse(e) {
		return this.deserialize(JSON.parse(e));
	}
	registerClass(e, t) {
		this.classRegistry.register(e, t);
	}
	registerSymbol(e, t) {
		this.symbolRegistry.register(e, t);
	}
	registerCustom(e, t) {
		this.customTransformerRegistry.register({
			name: t,
			...e
		});
	}
	allowErrorProps(...e) {
		this.allowedErrorProps.push(...e);
	}
};
Y.defaultInstance = new Y(), Y.serialize = Y.defaultInstance.serialize.bind(Y.defaultInstance), Y.deserialize = Y.defaultInstance.deserialize.bind(Y.defaultInstance), Y.stringify = Y.defaultInstance.stringify.bind(Y.defaultInstance), Y.parse = Y.defaultInstance.parse.bind(Y.defaultInstance), Y.registerClass = Y.defaultInstance.registerClass.bind(Y.defaultInstance), Y.registerSymbol = Y.defaultInstance.registerSymbol.bind(Y.defaultInstance), Y.registerCustom = Y.defaultInstance.registerCustom.bind(Y.defaultInstance), Y.allowErrorProps = Y.defaultInstance.allowErrorProps.bind(Y.defaultInstance), Y.serialize, Y.deserialize, Y.stringify, Y.parse, Y.registerClass, Y.registerCustom, Y.registerSymbol, Y.allowErrorProps, R.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [], R.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null, R.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null, R.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null, R.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null, R.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
//#endregion
//#region node_modules/vue-router/dist/devtools-Bpr7ZAVB.js
var X = typeof document < "u", Ci = /#/g, wi = /&/g, Ti = /\//g, Ei = /=/g, Di = /\?/g, Oi = /\+/g, ki = /%5B/g, Ai = /%5D/g, ji = /%5E/g, Mi = /%60/g, Ni = /%7B/g, Pi = /%7C/g, Fi = /%7D/g, Ii = /%20/g;
function Li(e) {
	return e == null ? "" : encodeURI("" + e).replace(Pi, "|").replace(ki, "[").replace(Ai, "]");
}
function Ri(e) {
	return Li(e).replace(Ni, "{").replace(Fi, "}").replace(ji, "^");
}
function zi(e) {
	return Li(e).replace(Oi, "%2B").replace(Ii, "+").replace(Ci, "%23").replace(wi, "%26").replace(Mi, "`").replace(Ni, "{").replace(Fi, "}").replace(ji, "^");
}
function Bi(e) {
	return zi(e).replace(Ei, "%3D");
}
function Vi(e) {
	return Li(e).replace(Ci, "%23").replace(Di, "%3F");
}
function Hi(e) {
	return Vi(e).replace(Ti, "%2F");
}
function Ui(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {
		process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0080({ text: "" + e });
	}
	return "" + e;
}
var Wi = /\/$/, Gi = (e) => e.replace(Wi, "");
function Ki(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = $i(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Ui(o)
	};
}
function qi(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Ji(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Yi(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Z(t.matched[r], n.matched[i]) && Xi(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Z(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Xi(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Zi(e[n], t[n])) return !1;
	return !0;
}
function Zi(e, t) {
	return F(e) ? Qi(e, t) : F(t) ? Qi(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Qi(e, t) {
	return F(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function $i(e, t) {
	if (e.startsWith("/")) return e;
	if (process.env.NODE_ENV !== "production" && !t.startsWith("/")) return L.VUE_ROUTER_R0070({
		to: e,
		from: t
	}), e;
	if (!e) return t;
	let n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
	(i === ".." || i === ".") && r.push("");
	let a = n.length - 1, o, s;
	for (o = 0; o < r.length; o++) if (s = r[o], s !== ".") if (s === "..") a > 1 && a--;
	else break;
	return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
var Q = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
function ea(e) {
	if (!e) if (X) {
		let t = document.querySelector("base");
		e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
	} else e = "/";
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Gi(e);
}
var ta = /^[^#]+#/;
function na(e, t) {
	return e.replace(ta, "#") + t;
}
function ra(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var ia = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function aa(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#");
		if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1)))) try {
			let t = document.querySelector(e.el);
			if (r && t) {
				L.VUE_ROUTER_R0040({ el: e.el });
				return;
			}
		} catch {
			L.VUE_ROUTER_R0041({ el: e.el });
			return;
		}
		let i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) {
			process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0042({ el: e.el });
			return;
		}
		t = ra(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function oa(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var sa = /* @__PURE__ */ new Map();
function ca(e, t) {
	sa.set(e, t);
}
function la(e) {
	let t = sa.get(e);
	return sa.delete(e), t;
}
function ua(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function da(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function fa(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Oi, " "), i = r.indexOf("="), a = Ui(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Ui(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			F(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function pa(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = Bi(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(F(r) ? r.map((e) => e && zi(e)) : [r && zi(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function ma(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = F(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function ha() {
	let e = [];
	function t(t) {
		return e.push(t), () => {
			let n = e.indexOf(t);
			n > -1 && e.splice(n, 1);
		};
	}
	function n() {
		e = [];
	}
	return {
		add: t,
		list: () => e.slice(),
		reset: n
	};
}
function $(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(qe(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : ua(e) ? c(qe(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, process.env.NODE_ENV === "production" ? l : ga(_a(l, t, n)))), d = Promise.resolve(u);
		if (e.length < 3 && (d = d.then(l)), process.env.NODE_ENV !== "production" && e.length > 2) {
			let t = {
				name: e.name,
				guard: e.toString()
			};
			if (typeof u == "object" && "then" in u) d = d.then((e) => l._called ? e : (L.VUE_ROUTER_R0023(t), Promise.reject(/* @__PURE__ */ Error("Invalid navigation guard"))));
			else if (u !== void 0 && !l._called) {
				L.VUE_ROUTER_R0023(t), c(/* @__PURE__ */ Error("Invalid navigation guard"));
				return;
			}
		}
		d.catch((e) => c(e));
	});
}
function ga(e) {
	let t = !1;
	return function() {
		return t || (t = !0, L.VUE_ROUTER_R0025()), e.apply(this, arguments);
	};
}
function _a(e, t, n) {
	let r = 0;
	return function() {
		r++ === 1 && L.VUE_ROUTER_R0024({
			from: n.fullPath,
			to: t.fullPath
		}), e._called = !0, r === 1 && e.apply(null, arguments);
	};
}
function va(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) {
		process.env.NODE_ENV !== "production" && !o.components && o.children && !o.children.length && L.VUE_ROUTER_R0026({ path: o.path });
		for (let e in o.components) {
			let s = o.components[e];
			if (process.env.NODE_ENV !== "production") {
				if (!s || typeof s != "object" && typeof s != "function") throw L.VUE_ROUTER_R0027({
					name: e,
					path: o.path,
					received: String(s)
				}), Error("Invalid route component");
				if ("then" in s) {
					L.VUE_ROUTER_R0028({
						name: e,
						path: o.path
					});
					let t = s;
					s = () => t;
				} else s.__asyncLoader && !s.__warnedDefineAsync && (s.__warnedDefineAsync = !0, L.VUE_ROUTER_R0029({
					name: e,
					path: o.path
				}));
			}
			if (!(t !== "beforeRouteEnter" && !o.instances[e])) if (Be(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push($(c, n, r, o, e, i));
			} else {
				let c = s();
				process.env.NODE_ENV !== "production" && !("catch" in c) && (L.VUE_ROUTER_R0030({
					name: e,
					path: o.path
				}), c = Promise.resolve(c)), a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Ve(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && $(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function ya(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Z(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Z(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
function ba(e, t) {
	let n = P({}, e, { matched: e.matched.map((e) => Ba(e, [
		"instances",
		"children",
		"aliasOf"
	])) });
	return { _custom: {
		type: null,
		readOnly: !0,
		display: e.fullPath,
		tooltip: t,
		value: n
	} };
}
function xa(e) {
	return { _custom: { display: e } };
}
var Sa = 0;
function Ca(e, t, n) {
	if (t.__hasDevtools) return;
	t.__hasDevtools = !0;
	let r = Sa++;
	nr({
		id: "org.vuejs.router" + (r ? "." + r : ""),
		label: "Vue Router",
		packageName: "vue-router",
		homepage: "https://router.vuejs.org",
		logo: "https://router.vuejs.org/logo.png",
		componentStateTypes: ["Routing"],
		app: e
	}, (i) => {
		i.on.inspectComponent((e) => {
			e.instanceData && e.instanceData.state.push({
				type: "Routing",
				key: "$route",
				editable: !1,
				value: ba(t.currentRoute.value, "Current Route")
			});
		}), i.on.visitComponentTree(({ treeNode: e, componentInstance: t }) => {
			if (t.__vrv_devtools) {
				let n = t.__vrv_devtools;
				e.tags.push({
					label: (n.name ? `${n.name.toString()}: ` : "") + n.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: Ea
				});
			}
			F(t.__vrl_devtools) && (t.__devtoolsApi = i, t.__vrl_devtools.forEach((t) => {
				let n = t.route.path, r = Aa, i = "", a = 0;
				t.error ? (n = t.error, r = Ma, a = Na) : t.isExactActive ? (r = Oa, i = "This is exactly active") : t.isActive && (r = Da, i = "This link is active"), e.tags.push({
					label: n,
					textColor: a,
					tooltip: i,
					backgroundColor: r
				});
			}));
		}), oe(t.currentRoute, () => {
			c(), i.notifyComponentUpdate(), i.sendInspectorTree(s), i.sendInspectorState(s);
		});
		let a = "router:navigations:" + r;
		i.addTimelineLayer({
			id: a,
			label: `Router${r ? " " + r : ""} Navigations`,
			color: 4237508
		}), t.onError((e, t) => {
			i.addTimelineEvent({
				layerId: a,
				event: {
					title: "Error during Navigation",
					subtitle: t.fullPath,
					logType: "error",
					time: i.now(),
					data: { error: e },
					groupId: t.meta.__navigationId
				}
			});
		});
		let o = 0;
		t.beforeEach((e, t) => {
			let n = {
				guard: xa("beforeEach"),
				from: ba(t, "Current Location during this navigation"),
				to: ba(e, "Target location")
			};
			Object.defineProperty(e.meta, "__navigationId", { value: o++ }), i.addTimelineEvent({
				layerId: a,
				event: {
					time: i.now(),
					title: "Start of navigation",
					subtitle: e.fullPath,
					data: n,
					groupId: e.meta.__navigationId
				}
			});
		}), t.afterEach((e, t, n) => {
			let r = { guard: xa("afterEach") };
			n ? (r.failure = { _custom: {
				type: Error,
				readOnly: !0,
				display: n ? n.message : "",
				tooltip: "Navigation Failure",
				value: n
			} }, r.status = xa("❌")) : r.status = xa("✅"), r.from = ba(t, "Current Location during this navigation"), r.to = ba(e, "Target location"), i.addTimelineEvent({
				layerId: a,
				event: {
					title: "End of navigation",
					subtitle: e.fullPath,
					time: i.now(),
					data: r,
					logType: n ? "warning" : "default",
					groupId: e.meta.__navigationId
				}
			});
		});
		let s = "router-inspector:" + r;
		i.addInspector({
			id: s,
			label: "Routes" + (r ? " " + r : ""),
			icon: "book",
			treeFilterPlaceholder: "Search routes"
		});
		function c() {
			if (!l) return;
			let e = l, r = n.getRoutes().filter((e) => !e.parent || !e.parent.record.components);
			r.forEach(Ra), e.filter && (r = r.filter((t) => za(t, e.filter.toLowerCase()))), r.forEach((e) => La(e, t.currentRoute.value)), e.rootNodes = r.map(Pa);
		}
		let l;
		i.on.getInspectorTree((t) => {
			l = t, t.app === e && t.inspectorId === s && c();
		}), i.on.getInspectorState((t) => {
			if (t.app === e && t.inspectorId === s) {
				let e = n.getRoutes().find((e) => e.record.__vd_id === t.nodeId);
				e && (t.state = { options: Ta(e) });
			}
		}), i.sendInspectorTree(s), i.sendInspectorState(s);
	});
}
function wa(e) {
	return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Ta(e) {
	let { record: t } = e, n = [{
		editable: !1,
		key: "path",
		value: t.path
	}];
	return t.name != null && n.push({
		editable: !1,
		key: "name",
		value: t.name
	}), n.push({
		editable: !1,
		key: "regexp",
		value: e.re
	}), e.keys.length && n.push({
		editable: !1,
		key: "keys",
		value: { _custom: {
			type: null,
			readOnly: !0,
			display: e.keys.map((e) => `${e.name}${wa(e)}`).join(" "),
			tooltip: "Param keys",
			value: e.keys
		} }
	}), t.redirect != null && n.push({
		editable: !1,
		key: "redirect",
		value: t.redirect
	}), e.alias.length && n.push({
		editable: !1,
		key: "aliases",
		value: e.alias.map((e) => e.record.path)
	}), Object.keys(e.record.meta).length && n.push({
		editable: !1,
		key: "meta",
		value: e.record.meta
	}), n.push({
		key: "score",
		editable: !1,
		value: { _custom: {
			type: null,
			readOnly: !0,
			display: e.score.map((e) => e.join(", ")).join(" | "),
			tooltip: "Score used to sort routes",
			value: e.score
		} }
	}), n;
}
var Ea = 15485081, Da = 2450411, Oa = 8702998, ka = 2282478, Aa = 16486972, ja = 6710886, Ma = 16704226, Na = 12131356;
function Pa(e) {
	let t = [], { record: n } = e;
	n.name != null && t.push({
		label: String(n.name),
		textColor: 0,
		backgroundColor: ka
	}), n.aliasOf && t.push({
		label: "alias",
		textColor: 0,
		backgroundColor: Aa
	}), e.__vd_match && t.push({
		label: "matches",
		textColor: 0,
		backgroundColor: Ea
	}), e.__vd_exactActive && t.push({
		label: "exact",
		textColor: 0,
		backgroundColor: Oa
	}), e.__vd_active && t.push({
		label: "active",
		textColor: 0,
		backgroundColor: Da
	}), n.redirect && t.push({
		label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: ja
	});
	let r = n.__vd_id;
	return r ?? (r = String(Fa++), n.__vd_id = r), {
		id: r,
		label: n.path,
		tags: t,
		children: e.children.map(Pa)
	};
}
var Fa = 0, Ia = /^\/(.*)\/([a-z]*)$/;
function La(e, t) {
	let n = t.matched.length && Z(t.matched[t.matched.length - 1], e.record);
	e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((t) => Z(t, e.record))), e.children.forEach((e) => La(e, t));
}
function Ra(e) {
	e.__vd_match = !1, e.children.forEach(Ra);
}
function za(e, t) {
	let n = String(e.re).match(Ia);
	if (e.__vd_match = !1, !n || n.length < 3) return !1;
	if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t)) return e.children.forEach((e) => za(e, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
	let r = e.record.path.toLowerCase(), i = Ui(r);
	return !t.startsWith("/") && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((e) => za(e, t));
}
function Ba(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || (n[r] = e[r]);
	return n;
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
var Va = () => location.protocol + "//" + location.host;
function Ha(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Ji(n, "");
	}
	return Ji(n, e) + r + i;
}
function Ua(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Ha(e, location), c = n.value, l = t.value, u = 0;
		if (a) {
			if (n.value = s, t.value = a, o && o === c) {
				o = null;
				return;
			}
			u = l ? a.position - l.position : 0;
		} else r(s);
		i.forEach((e) => {
			e(n.value, c, {
				delta: u,
				type: "pop",
				direction: u ? u > 0 ? "forward" : "back" : ""
			});
		});
	};
	function c() {
		o = n.value;
	}
	function l(e) {
		i.push(e);
		let t = () => {
			let t = i.indexOf(e);
			t > -1 && i.splice(t, 1);
		};
		return a.push(t), t;
	}
	function u() {
		if (document.visibilityState === "hidden") {
			let { history: e } = window;
			if (!e.state) return;
			e.replaceState(P({}, e.state, { scroll: ia() }), "");
		}
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function Wa(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? ia() : null
	};
}
function Ga(e) {
	let { history: t, location: n } = window, r = { value: Ha(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : Va() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			process.env.NODE_ENV === "production" ? console.error(e) : L.VUE_ROUTER_R0120({ cause: e }), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, P({}, t.state, Wa(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = P({}, i.value, t.state, {
			forward: e,
			scroll: ia()
		});
		process.env.NODE_ENV !== "production" && !t.state && L.VUE_ROUTER_R0121(), a(o.current, o, !0), a(e, P({}, Wa(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function Ka(e) {
	e = ea(e);
	let t = Ga(e), n = Ua(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = P({
		location: "",
		base: e,
		go: r,
		createHref: na.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function qa(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && L.VUE_ROUTER_R0110({
		base: e,
		suggestion: e.replace(/#.*$/, "#")
	}), Ka(e);
}
var Ja = {
	type: 0,
	value: ""
}, Ya = /[a-zA-Z0-9_]/;
function Xa(e) {
	if (!e) return [[]];
	if (e === "/") return [[Ja]];
	if (!e.startsWith("/")) throw Error(process.env.NODE_ENV === "production" ? `Invalid path "${e}"` : `Route paths should start with a "/": "${e}" should be "/${e}".`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = 0, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === 0 ? a.push({
			type: 0,
			value: l
		}) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: 1,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) switch (c = e[s++], n) {
		case 0:
			c === "\\" ? (r = n, n = 4) : c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = 1) : f();
			break;
		case 4:
			f(), n = r;
			break;
		case 1:
			c === "(" ? n = 2 : Ya.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case 2:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
			break;
		case 3:
			d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default:
			t("Unknown state");
			break;
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var Za = "[^/]+?", Qa = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, $a = /[.+*?^${}()[\]/\\]/g;
function eo(e, t) {
	let n = P({}, Qa, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace($a, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Za;
				if (u !== Za) {
					s += 10;
					try {
						RegExp(`(${u})`);
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += 20, c && (s += -8), n && (s += -20), u === ".*" && (s += -50);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += .7000000000000001;
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
	let o = new RegExp(i, n.sensitive ? "" : "i");
	function s(e) {
		let t = e.match(o), n = {};
		if (!t) return null;
		for (let e = 1; e < t.length; e++) {
			let r = t[e] || "", i = a[e - 1];
			n[i.name] = r && i.repeatable ? r.split("/") : r;
		}
		return n;
	}
	function c(t) {
		let n = "", r = !1;
		for (let i of e) {
			(!r || !n.endsWith("/")) && (n += "/"), r = !1;
			for (let e of i) if (e.type === 0) n += e.value;
			else if (e.type === 1) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (F(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = F(c) ? c.join("/") : c;
				if (!l) if (s) i.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0);
				else throw Error(`Missing required param "${a}"`);
				n += l;
			}
		}
		return n || "/";
	}
	return {
		re: o,
		score: r,
		keys: a,
		parse: s,
		stringify: c
	};
}
function to(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function no(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = to(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (ro(r)) return 1;
		if (ro(i)) return -1;
	}
	return i.length - r.length;
}
function ro(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var io = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function ao(e, t, n) {
	let r = eo(Xa(e.path), n);
	if (process.env.NODE_ENV !== "production") {
		let t = /* @__PURE__ */ new Set();
		for (let n of r.keys) t.has(n.name) && L.VUE_ROUTER_R0090({
			name: n.name,
			path: e.path
		}), t.add(n.name);
	}
	let i = P(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function oo(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = We(io, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = co(e);
		process.env.NODE_ENV !== "production" && ho(s, n), s.aliasOf = r && r.record;
		let l = We(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(co(P({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && u[0] !== "/") {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (process.env.NODE_ENV !== "production" && t.path === "*") throw Error("Catch all routes (\"*\") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.");
			if (d = ao(t, n, l), process.env.NODE_ENV !== "production" && n && u[0] === "/" && _o(d, n), r ? (r.alias.push(d), process.env.NODE_ENV !== "production" && mo(r, d)) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !uo(d) && (process.env.NODE_ENV !== "production" && go(e, n), o(e.name))), bo(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Ue;
	}
	function o(e) {
		if (da(e)) {
			let t = r.get(e);
			t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
		} else {
			let t = n.indexOf(e);
			t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
		}
	}
	function s() {
		return n;
	}
	function c(e) {
		let t = vo(e, n);
		n.splice(t, 0, e), e.record.name && !uo(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw qe(1, { location: e });
			if (process.env.NODE_ENV !== "production") {
				let n = Object.keys(e.params || {}).filter((e) => !i.keys.find((t) => t.name === e));
				if (n.length) {
					let e = !i.keys.length && n.some((e) => e in t.params);
					L.VUE_ROUTER_R0100({
						params: n.join("\", \""),
						inherited: e ? " If you are using a catch-all route with a named redirect, pass an empty `params` object: `redirect: { name: '...', params: {} }`." : ""
					});
				}
			}
			s = i.record.name, a = P(so(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && so(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, process.env.NODE_ENV !== "production" && !o.startsWith("/") && L.VUE_ROUTER_R0101({ path: o }), i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw qe(1, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = P({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: fo(c)
		};
	}
	e.forEach((e) => a(e));
	function u() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		clearRoutes: u,
		getRoutes: s,
		getRecordMatcher: i
	};
}
function so(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function co(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: lo(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function lo(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function uo(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function fo(e) {
	return e.reduce((e, t) => P(e, t.meta), {});
}
function po(e, t) {
	return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function mo(e, t) {
	for (let n of e.keys) if (!n.optional && !t.keys.find(po.bind(null, n))) {
		L.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
	for (let n of t.keys) if (!n.optional && !e.keys.find(po.bind(null, n))) {
		L.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
}
function ho(e, t) {
	t && t.record.name && !e.name && !e.path && e.children.length === 0 && L.VUE_ROUTER_R0103({ name: String(t.record.name) });
}
function go(e, t) {
	for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function _o(e, t) {
	for (let n of t.keys) if (!e.keys.find(po.bind(null, n))) {
		L.VUE_ROUTER_R0104({
			path: e.record.path,
			name: n.name,
			parent: t.record.path
		});
		return;
	}
}
function vo(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		no(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = yo(e);
	return i && (r = t.lastIndexOf(i, r - 1), process.env.NODE_ENV !== "production" && r < 0 && L.VUE_ROUTER_R0105({
		ancestor: i.record.path,
		record: e.record.path
	})), r;
}
function yo(e) {
	let t = e;
	for (; t = t.parent;) if (bo(t) && no(e, t) === 0) return t;
}
function bo({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function xo(e) {
	let t = b(Qe), n = b($e), r = !1, i = null, a = f(() => {
		let n = ie(e.to);
		return process.env.NODE_ENV !== "production" && (!r || n !== i) && (ua(n) || L.VUE_ROUTER_R0050({ to: n }), i = n, r = !0), t.resolve(n);
	}), o = f(() => {
		let { matched: e } = a.value, { length: t } = e, r = e[t - 1], i = n.matched;
		if (!r || !i.length) return -1;
		let o = i.findIndex(Z.bind(null, r));
		if (o > -1) return o;
		let s = Eo(e[t - 2]);
		return t > 1 && Eo(r) === s && i[i.length - 1].path !== s ? i.findIndex(Z.bind(null, e[t - 2])) : o;
	}), s = f(() => o.value > -1 && To(n.params, a.value.params)), c = f(() => o.value > -1 && o.value === n.matched.length - 1 && Xi(n.params, a.value.params));
	function l(n = {}) {
		if (wo(n)) {
			let n = t[ie(e.replace) ? "replace" : "push"](ie(e.to)).catch(Ue);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	if (process.env.NODE_ENV !== "production" && X) {
		let t = y();
		if (t) {
			let n = {
				route: a.value,
				isActive: s.value,
				isExactActive: c.value,
				error: null
			};
			t.__vrl_devtools = t.__vrl_devtools || [], t.__vrl_devtools.push(n), se(() => {
				n.route = a.value, n.isActive = s.value, n.isExactActive = c.value, n.error = ua(ie(e.to)) ? null : "Invalid \"to\" value";
			}, { flush: "post" });
		}
	}
	return {
		route: a,
		href: f(() => a.value.href),
		isActive: s,
		isExactActive: c,
		navigate: l
	};
}
function So(e) {
	return e.length === 1 ? e[0] : e;
}
var Co = /* @__PURE__ */ v({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: xo,
	setup(e, { slots: t }) {
		let n = C(xo(e)), { options: r } = b(Qe), i = f(() => ({
			[Do(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Do(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && So(t.default(n));
			return e.custom ? r : te("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function wo(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function To(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!F(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function Eo(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Do = (e, t, n) => e ?? t ?? n, Oo = /*#__PURE__*/ v({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: n }) {
		process.env.NODE_ENV !== "production" && jo();
		let r = b(et), i = f(() => e.route || r.value), a = b(Ze, 0), o = f(() => {
			let e = ie(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = f(() => i.value.matched[o.value]);
		ne(Ze, f(() => o.value + 1)), ne(Xe, s), ne(et, i);
		let c = w();
		return oe(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Z(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, l = s.value, u = l && l.components[a];
			if (!u) return ko(n.default, {
				Component: u,
				route: r
			});
			let d = l.props[a], f = te(u, P({}, d ? d === !0 ? r.params : typeof d == "function" ? d(r) : d : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (l.instances[a] = null);
				},
				ref: c
			}));
			if (process.env.NODE_ENV !== "production" && X && f.ref) {
				let e = {
					depth: o.value,
					name: l.name,
					path: l.path,
					meta: l.meta
				};
				(F(f.ref) ? f.ref.map((e) => e.i) : [f.ref.i]).forEach((t) => {
					t.__vrv_devtools = e;
				});
			}
			return ko(n.default, {
				Component: f,
				route: r
			}) || f;
		};
	}
});
function ko(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Ao = Oo;
function jo() {
	let e = y(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
	if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
		let e = t === "KeepAlive" ? "keep-alive" : "transition";
		L.VUE_ROUTER_R0060({ comp: e });
	}
}
function Mo(e) {
	let t = oo(e.routes, e), n = e.parseQuery || fa, r = e.stringifyQuery || pa, i = e.history;
	if (process.env.NODE_ENV !== "production" && !i) throw Error("Provide the \"history\" option when calling \"createRouter()\": https://router.vuejs.org/api/interfaces/RouterOptions.html#history");
	let a = ha(), o = ha(), s = ha(), c = O(Q), l = Q;
	X && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = He.bind(null, (e) => "" + e), d = He.bind(null, Hi), f = He.bind(null, Ui);
	function ee(e, n) {
		let r, i;
		return da(e) ? (r = t.getRecordMatcher(e), process.env.NODE_ENV !== "production" && !r && L.VUE_ROUTER_R0001({ name: String(e) }), i = n) : i = e, t.addRoute(i, r);
	}
	function p(e) {
		let n = t.getRecordMatcher(e);
		n ? t.removeRoute(n) : process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0002({ name: String(e) });
	}
	function m() {
		return t.getRoutes().map((e) => e.record);
	}
	function h(e) {
		return !!t.getRecordMatcher(e);
	}
	function g(e, a) {
		if (a = P({}, a || c.value), typeof e == "string") {
			let r = Ki(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return process.env.NODE_ENV !== "production" && (s.startsWith("//") ? L.VUE_ROUTER_R0003({
				location: e,
				href: s
			}) : o.matched.length || L.VUE_ROUTER_R0004({ path: e })), P(r, o, {
				params: f(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		if (process.env.NODE_ENV !== "production" && !ua(e)) return L.VUE_ROUTER_R0005({ rawLocation: e }), g({});
		let o;
		if (e.path != null) process.env.NODE_ENV !== "production" && "params" in e && !("name" in e) && Object.keys(e.params).length && L.VUE_ROUTER_R0006({ path: e.path }), o = P({}, e, { path: Ki(n, e.path, a.path).path });
		else {
			let t = P({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = P({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		process.env.NODE_ENV !== "production" && l && !l.startsWith("#") && L.VUE_ROUTER_R0007({ hash: l }), s.params = u(f(s.params));
		let ee = qi(r, P({}, e, {
			hash: Ri(l),
			path: s.path
		})), p = i.createHref(ee);
		return process.env.NODE_ENV !== "production" && (p.startsWith("//") ? L.VUE_ROUTER_R0003({
			location: e,
			href: p
		}) : s.matched.length || L.VUE_ROUTER_R0004({ path: e.path == null ? e : e.path })), P({
			fullPath: ee,
			hash: l,
			query: r === pa ? ma(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: p
		});
	}
	function _(e) {
		return typeof e == "string" ? Ki(n, e, c.value.path) : P({}, e);
	}
	function v(e, t) {
		if (l !== e) return qe(8, {
			from: t,
			to: e
		});
	}
	function y(e) {
		return S(e);
	}
	function te(e) {
		return y(P(_(e), { replace: !0 }));
	}
	function b(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			if (typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = _(i) : { path: i }, i.params = {}), process.env.NODE_ENV !== "production" && i.path == null && !("name" in i)) throw L.VUE_ROUTER_R0008({
				target: JSON.stringify(i, null, 2),
				to: e.fullPath
			}), Error("Invalid redirect");
			return P({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function S(e, t) {
		let n = l = g(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = b(n, i);
		if (u) return S(P(_(u), {
			state: typeof u == "object" ? P({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && Yi(r, i, n) && (f = qe(16, {
			to: d,
			from: i
		}), le(i, i, !0, !1)), (f ? Promise.resolve(f) : w(d, i)).catch((e) => I(e) ? I(e, 2) ? e : ce(e) : A(e, d, i)).then((e) => {
			if (e) {
				if (I(e, 2)) return process.env.NODE_ENV !== "production" && Yi(r, g(e.to), d) && t && (t._count = t._count ? t._count + 1 : 1) > 30 ? (L.VUE_ROUTER_R0009({
					from: i.fullPath,
					to: d.fullPath
				}), Promise.reject(/* @__PURE__ */ Error("Infinite redirect in navigation guard"))) : S(P({ replace: s }, _(e.to), {
					state: typeof e.to == "object" ? P({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = E(d, i, !0, s, a);
			return T(d, i, e), e;
		});
	}
	function ne(e, t) {
		let n = v(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function C(e) {
		let t = fe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function w(e, t) {
		let n, [r, i, s] = ya(e, t);
		n = va(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push($(r, e, t));
		});
		let c = ne.bind(null, e, t);
		return n.push(c), N(n).then(() => {
			n = [];
			for (let r of a.list()) n.push($(r, e, t));
			return n.push(c), N(n);
		}).then(() => {
			n = va(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push($(r, e, t));
			});
			return n.push(c), N(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) if (F(r.beforeEnter)) for (let i of r.beforeEnter) n.push($(i, e, t));
			else n.push($(r.beforeEnter, e, t));
			return n.push(c), N(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = va(s, "beforeRouteEnter", e, t, C), n.push(c), N(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push($(r, e, t));
			return n.push(c), N(n);
		}).catch((e) => I(e, 8) ? e : Promise.reject(e));
	}
	function T(e, t, n) {
		s.list().forEach((r) => C(() => r(e, t, n)));
	}
	function E(e, t, n, r, a) {
		let o = v(e, t);
		if (o) return o;
		let s = t === Q, l = X ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, P({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, le(e, t, n, s), ce();
	}
	let re;
	function ae() {
		re ||= i.listen((e, t, n) => {
			if (!M.listening) return;
			let r = g(e), a = b(r, M.currentRoute.value);
			if (a) {
				S(P(a, {
					replace: !0,
					force: !0
				}), r).catch(Ue);
				return;
			}
			l = r;
			let o = c.value;
			X && ca(oa(o.fullPath, n.delta), ia()), w(r, o).catch((e) => I(e, 12) ? e : I(e, 2) ? (S(P(_(e.to), { force: !0 }), r).then((e) => {
				I(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(Ue), Promise.reject()) : (n.delta && i.go(-n.delta, !1), A(e, r, o))).then((e) => {
				e ||= E(r, o, !1), e && (n.delta && !I(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && I(e, 20) && i.go(-1, !1)), T(r, o, e);
			}).catch(Ue);
		});
	}
	let k = ha(), oe = ha(), se;
	function A(e, t, n) {
		ce(e);
		let r = oe.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : (process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0010(), console.error(e)), Promise.reject(e);
	}
	function j() {
		return se && c.value !== Q ? Promise.resolve() : new Promise((e, t) => {
			k.add([e, t]);
		});
	}
	function ce(e) {
		return se || (se = !e, ae(), k.list().forEach(([t, n]) => e ? n(e) : t()), k.reset()), e;
	}
	function le(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!X || !a) return Promise.resolve();
		let o = !r && la(oa(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return x().then(() => a(t, n, o)).then((e) => t === c.value && e && aa(e)).catch((e) => t === c.value && A(e, t, n));
	}
	let ue = (e) => i.go(e), de, fe = /* @__PURE__ */ new Set(), M = {
		currentRoute: c,
		listening: !0,
		addRoute: ee,
		removeRoute: p,
		clearRoutes: t.clearRoutes,
		hasRoute: h,
		getRoutes: m,
		resolve: g,
		options: e,
		push: y,
		replace: te,
		go: ue,
		back: () => ue(-1),
		forward: () => ue(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: oe.add,
		isReady: j,
		install(e) {
			e.component("RouterLink", Co), e.component("RouterView", Ao), e.config.globalProperties.$router = M, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => ie(c)
			}), X && !de && c.value === Q && (de = !0, y(i.location).catch((e) => {
				process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0011({ cause: e });
			}));
			let n = {};
			for (let e in Q) Object.defineProperty(n, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Qe, M), e.provide($e, D(n)), e.provide(et, c);
			let r = e.unmount;
			fe.add(e), e.unmount = function() {
				fe.delete(e), fe.size < 1 && (l = Q, re && re(), re = null, c.value = Q, de = !1, se = !1), r();
			}, process.env.NODE_ENV !== "production" && X && Ca(e, M, t);
		}
	};
	function N(e) {
		return e.reduce((e, t) => e.then(() => C(t)), Promise.resolve());
	}
	return M;
}
//#endregion
//#region src/App.vue
var No = {
	name: "App",
	computed: {
		...u(n, { store_ready: (e) => e.ready }),
		...u(t, ["graph_iri", "resource_iri"])
	},
	components: {
		SparqlConnection: be,
		GraphList: Ae,
		ClassList: Me,
		Splitpanes: c,
		Pane: l,
		RouterLink: Co,
		RouterView: Ao
	},
	methods: { useSelectionStore: t },
	props: {
		title: {
			type: String,
			default: "OntoPad"
		},
		config: {
			type: Object,
			default: {}
		}
	},
	created() {
		let e = n(), r = t();
		e.updateEndpointConfiguration(this.config), r.initConfig(this.config), this.$navigation = this.$navigation || {}, this.$navigation.main = this.$navigation.main || [], this.$navigation.main = [
			{
				to: "/dashboard",
				title: "Home"
			},
			{
				to: "/instances",
				title: "Instances"
			},
			{
				to: "/voc",
				title: "Vocabulary"
			},
			{
				to: "/edit",
				title: "Edit"
			},
			{
				to: "/form",
				title: "Form"
			},
			{
				to: "/add",
				title: "Add"
			},
			{
				to: "/kanban",
				title: "Kanban"
			},
			{
				to: "/source",
				title: "Source"
			}
		].concat(this.$navigation.main);
	}
}, Po = { class: "container-fluid" }, Fo = { class: "row connection" }, Io = { key: 0 }, Lo = { key: 1 }, Ro = {
	key: 0,
	class: "row"
}, zo = { class: "nav nav-tabs" }, Bo = { key: 1 };
function Vo(e, t, n, r, i, a) {
	let o = E("SparqlConnection"), s = E("GraphList"), c = E("pane"), l = E("ClassList"), u = E("splitpanes"), f = E("RouterLink"), ee = E("RouterView");
	return S(), m("div", Po, [h("div", Fo, [
		h("h1", null, re(n.title), 1),
		e.store_ready ? (S(), m("div", Io, "🟢 Store is ready")) : (S(), m("div", Lo, "🔄 Loading")),
		_(o)
	]), e.store_ready ? (S(), m("div", Ro, [_(u, { class: "default-theme" }, {
		default: A(() => [_(c, { size: "30" }, {
			default: A(() => [_(u, {
				horizontal: "",
				style: { height: "80vh" }
			}, {
				default: A(() => [_(c, { size: "30" }, {
					default: A(() => [_(s, {
						graph_iri: e.graph_iri,
						selectGraph: (e) => {
							a.useSelectionStore().changeGraphIri(e), a.useSelectionStore().changeResourceIri(e);
						}
					}, null, 8, ["graph_iri", "selectGraph"])]),
					_: 1
				}), _(c, { size: "70" }, {
					default: A(() => [_(l, {
						class_iri: e.resource_iri,
						selectClass: (e) => {
							a.useSelectionStore().changeResourceIri(e);
						}
					}, null, 8, ["class_iri", "selectClass"])]),
					_: 1
				})]),
				_: 1
			})]),
			_: 1
		}), _(c, { size: "90" }, {
			default: A(() => [h("ul", zo, [(S(!0), m(d, null, T(e.$navigation.main, (e, t) => (S(), m("li", {
				key: t,
				class: "nav-item"
			}, [_(f, {
				class: "nav-link",
				"active-class": "active",
				to: e.to
			}, {
				default: A(() => [g(re(e.title), 1)]),
				_: 2
			}, 1032, ["to"])]))), 128))]), _(ee)]),
			_: 1
		})]),
		_: 1
	})])) : (S(), m("div", Bo, " Waiting for Store to be configured … "))]);
}
var Ho = /*#__PURE__*/ i(No, [["render", Vo], ["__scopeId", "data-v-b5ac3aac"]]), Uo = Mo({
	history: qa("/"),
	routes: [
		{
			path: "/",
			redirect: { path: "/dashboard" }
		},
		{
			path: "/about",
			name: "about",
			component: () => import("./AboutView-C-AyOzLx.js")
		},
		{
			path: "/dashboard",
			name: "DashboardView",
			component: () => import("./DashboardView-Dom3jvKu.js")
		},
		{
			path: "/instances",
			name: "InstanceList",
			component: () => import("./InstanceList-DRRWmTAq.js")
		},
		{
			path: "/voc",
			name: "VocPad",
			component: () => import("./VocPad-BAO2Dhqg.js")
		},
		{
			path: "/edit",
			name: "EditForm",
			component: () => import("./EditForm-gNVSnJJ5.js")
		},
		{
			path: "/form",
			name: "FormDemo",
			component: () => import("./FormDemo-BKYdH0ux.js")
		},
		{
			path: "/add",
			name: "InputForm",
			component: () => import("./InputForm-DKpnbRkW.js")
		},
		{
			path: "/source",
			name: "Source",
			component: () => import("./Source-oGOQHhAw.js")
		}
	]
});
//#endregion
//#region src/helpers/plugin.js
function Wo(e, t) {
	console.log("Register new OntoPad plugin"), e.config.globalProperties.$router.addRoute({
		path: t.path,
		name: t.name,
		component: t.component
	}), e.config.globalProperties.$navigation = e.config.globalProperties.$navigation || {}, e.config.globalProperties.$navigation.main = e.config.globalProperties.$navigation.main || [], e.config.globalProperties.$navigation.main.push({
		to: t.path,
		title: t.title
	});
}
//#endregion
export { Ho as OntoPad, Uo as OntoPadRouter, Wo as register, a as usePrefixesStore, n as useRdfStore, t as useSelectionStore };
