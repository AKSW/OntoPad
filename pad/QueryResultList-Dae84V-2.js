import { a as e, t } from "./rdf-Ckr2C8lK.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as r } from "./prefixes-BYTjU17K.js";
import { Fragment as i, createCommentVNode as a, createElementBlock as o, createElementVNode as s, normalizeClass as c, openBlock as l, renderList as u, toDisplayString as d, vModelText as f, withDirectives as p } from "vue";
//#region src/components/QueryResultList.vue
var m = {
	name: "QueryResultList",
	setup() {
		return {
			store: t(),
			selection: e()
		};
	},
	mounted() {
		this.updateList();
	},
	props: {
		title: String,
		query: String,
		queryQuads: {
			type: Boolean,
			default: !1
		},
		search: {
			type: Boolean,
			default: !1
		},
		selectVariable: {
			type: String,
			default: "resourceIri"
		},
		itemClass: String,
		add: Function,
		selectResource: Function,
		addTitle: String,
		activeResource: String
	},
	watch: { query(e) {
		this.updateList();
	} },
	data() {
		return {
			resources: [],
			filter: ""
		};
	},
	computed: { resourcesFiltered() {
		return this.filter ? this.resources.filter((e) => e.toLowerCase().includes(this.filter.toLowerCase())) : this.resources;
	} },
	methods: {
		select(e) {
			this.selectResource && this.selectResource(e);
		},
		async updateList() {
			let e;
			this.queryQuads && (e = "quads");
			let t = await this.store.sendQuery({
				query: this.query,
				defaultGraph: e
			});
			if (t.resultType === "bindings") {
				let e = await t.execute();
				this.resources = await Array.fromAsync(e, (e, t) => e.get(this.selectVariable).value);
			}
		},
		shortenIri(e) {
			return r().shortenIri(e);
		}
	}
}, h = { class: "card" }, g = { class: "card-header d-flex justify-content-between align-items-center" }, _ = { class: "row row-cols-lg-auto g-3 align-items-center" }, v = { class: "col-12" }, y = { class: "mb-0" }, b = { class: "col-12" }, x = { class: "input-group mb-3" }, S = ["title", "aria-label"], C = { class: "list-group list-group-flush" }, w = [
	"for",
	"title",
	"onClick"
];
function T(e, t, n, r, m, T) {
	return l(), o("div", h, [s("div", g, [s("div", _, [s("div", v, [s("h6", y, d(n.title), 1)]), s("div", b, [s("div", x, [
		n.search ? p((l(), o("input", {
			key: 0,
			type: "text",
			class: "form-control",
			"onUpdate:modelValue": t[0] ||= (e) => m.filter = e,
			placeholder: "Search …"
		}, null, 512)), [[f, m.filter]]) : a("", !0),
		s("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[1] ||= (...e) => T.updateList && T.updateList(...e),
			title: "Reload",
			"aria-label": "Reload"
		}, [...t[3] ||= [s("i", { class: "bi bi-arrow-repeat" }, null, -1)]]),
		n.add ? (l(), o("button", {
			key: 1,
			type: "button",
			class: "btn btn-secondary",
			onClick: t[2] ||= (...e) => n.add && n.add(...e),
			title: n.addTitle,
			"aria-label": n.addTitle
		}, [...t[4] ||= [s("i", { class: "bi bi-plus-square" }, null, -1)]], 8, S)) : a("", !0)
	])])])]), s("ul", C, [(l(!0), o(i, null, u(T.resourcesFiltered, (e, t) => (l(), o("li", {
		class: c(["list-group-item", [{ active: e == n.activeResource }, n.itemClass]]),
		key: t,
		href: "#",
		for: "form-control" + t,
		title: e,
		onClick: (t) => T.select(e)
	}, d(T.shortenIri(e)), 11, w))), 128))])]);
}
var E = /*#__PURE__*/ n(m, [["render", T], ["__scopeId", "data-v-6fa68efd"]]);
//#endregion
export { E as t };
