import { L as e, r as t, t as n } from "./rdf-O-dOZMGs.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as i } from "./prefixes-Cxd5DCXT.js";
import { mapState as a } from "pinia";
import { Fragment as o, createBlock as s, createCommentVNode as c, createElementBlock as l, createElementVNode as u, normalizeClass as d, openBlock as f, renderList as p, toDisplayString as m, unref as h, vModelText as g, withDirectives as _ } from "vue";
//#region src/components/QueryResultList.vue
var v = {
	name: "QueryResultList",
	setup() {
		return {
			store: n(),
			selection: t()
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
			return i().shortenIri(e);
		}
	}
}, y = { class: "card" }, b = { class: "card-header d-flex justify-content-between align-items-center" }, x = { class: "row row-cols-lg-auto g-3 align-items-center" }, S = { class: "col-12" }, C = { class: "mb-0" }, w = { class: "col-12" }, T = { class: "input-group mb-3" }, E = ["title", "aria-label"], D = { class: "list-group list-group-flush" }, O = [
	"for",
	"title",
	"onClick"
];
function k(e, t, n, r, i, a) {
	return f(), l("div", y, [u("div", b, [u("div", x, [u("div", S, [u("h6", C, m(n.title), 1)]), u("div", w, [u("div", T, [
		n.search ? _((f(), l("input", {
			key: 0,
			type: "text",
			class: "form-control",
			"onUpdate:modelValue": t[0] ||= (e) => i.filter = e,
			placeholder: "Search …"
		}, null, 512)), [[g, i.filter]]) : c("", !0),
		u("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[1] ||= (...e) => a.updateList && a.updateList(...e),
			title: "Reload",
			"aria-label": "Reload"
		}, [...t[3] ||= [u("i", { class: "bi bi-arrow-repeat" }, null, -1)]]),
		n.add ? (f(), l("button", {
			key: 1,
			type: "button",
			class: "btn btn-secondary",
			onClick: t[2] ||= (...e) => n.add && n.add(...e),
			title: n.addTitle,
			"aria-label": n.addTitle
		}, [...t[4] ||= [u("i", { class: "bi bi-plus-square" }, null, -1)]], 8, E)) : c("", !0)
	])])])]), u("ul", D, [(f(!0), l(o, null, p(a.resourcesFiltered, (e, t) => (f(), l("li", {
		class: d(["list-group-item", [{ active: e == n.activeResource }, n.itemClass]]),
		key: t,
		href: "#",
		for: "form-control" + t,
		title: e,
		onClick: (t) => a.select(e)
	}, m(a.shortenIri(e)), 11, O))), 128))])]);
}
var A = /*#__PURE__*/ r(v, [["render", k], ["__scopeId", "data-v-6fa68efd"]]), j = /* @__PURE__ */ e({ default: () => N }), M = {
	name: "InstanceList",
	computed: { ...a(t, ["resource_iri"]) }
}, N = /*@__PURE__*/ Object.assign(M, { setup(e) {
	return (e, n) => (f(), s(A, {
		title: "Instance List",
		search: "",
		query: "select distinct ?instance { ?instance a <" + e.resource_iri + "> } order by ?instance",
		"select-variable": "instance",
		itemClass: "py-2",
		ref: "instanceList",
		activeResource: e.resource_iri,
		selectResource: (e) => {
			h(t)().changeResourceIri(e, !1);
		}
	}, null, 8, [
		"query",
		"activeResource",
		"selectResource"
	]));
} });
//#endregion
export { N as n, A as r, j as t };
