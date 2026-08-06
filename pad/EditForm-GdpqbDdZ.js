import { N as e, r as t, t as n } from "./rdf-C53IQogC.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as i } from "./TermInput-Dg8PbAIg.js";
import { r as a, t as o } from "./n3-compare-CG7IVZxi.js";
import { mapState as s } from "pinia";
import { Fragment as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createTextVNode as f, createVNode as p, openBlock as m, renderList as h, resolveComponent as g, toDisplayString as _ } from "vue";
//#region src/views/EditForm.vue
var v = a(), y = {
	name: "EditForm",
	setup() {
		return { store: n() };
	},
	components: { TermInput: i },
	mounted() {
		this.getResource();
	},
	watch: { resource_iri(e) {
		this.getResource();
	} },
	data() {
		return {
			debug: !1,
			subject: e.namedNode(""),
			originalDataModel: [],
			dataModel: []
		};
	},
	computed: { ...s(t, ["graph_iri", "resource_iri"]) },
	methods: {
		newTriple(t) {
			t ||= 0, this.dataModel.splice(t + 1, 0, e.quad(this.subject, e.namedNode(""), e.namedNode(""), e.namedNode(this.graph_iri)));
		},
		delTriple(e) {
			this.dataModel.splice(e, 1);
		},
		async getResource() {
			this.subject = e.namedNode(this.resource_iri), this.originalDataModel = await (await this.store.getResource(this.resource_iri)).toArray(), this.dataModel = (0, v.cloneDeep)(this.originalDataModel);
		},
		async updateResource() {
			let e = o(this.originalDataModel, this.dataModel);
			try {
				await this.store.deleteInsertData({
					deleteArray: e.del,
					insertArray: e.add
				}), this.getResource();
			} catch (e) {
				console.error(e);
			}
		}
	}
}, b = { class: "Form" }, x = { width: "100%" }, S = ["onClick"], C = ["onClick"], w = { key: 1 }, T = { style: {
	overflow: "scroll",
	height: "400px"
} }, E = { class: "container" }, D = { class: "row" }, O = { class: "col" }, k = { class: "col" };
function A(e, t, n, r, i, a) {
	let o = g("TermInput");
	return m(), u(c, null, [
		d("div", b, [d("form", null, [
			t[6] ||= d("label", { for: "resourceUriInput" }, "Resource IRI (Subject)", -1),
			p(o, {
				term: i.subject,
				"onUpdate:term": t[0] ||= (e) => i.subject = e,
				type: "iri",
				id: "resourceUriInput"
			}, null, 8, ["term"]),
			d("table", x, [t[5] ||= d("thead", null, [d("tr", null, [
				d("th", {
					scope: "col",
					width: "45%"
				}, "Predicate"),
				d("th", {
					scope: "col",
					width: "auto"
				}, "Object"),
				d("th", {
					scope: "col",
					width: "90px"
				})
			])], -1), d("tbody", null, [(m(!0), u(c, null, h(i.dataModel, (e, t) => (m(), u("tr", { key: t }, [
				d("td", null, [p(o, {
					id: "form-pred-" + t,
					term: e.predicate,
					"onUpdate:term": (t) => e.predicate = t,
					type: "iri"
				}, null, 8, [
					"id",
					"term",
					"onUpdate:term"
				])]),
				d("td", null, [p(o, {
					id: "form-obj-" + t,
					term: e.object,
					"onUpdate:term": (t) => e.object = t
				}, null, 8, [
					"id",
					"term",
					"onUpdate:term"
				])]),
				d("td", null, [d("button", {
					type: "button",
					class: "btn btn-outline-dark mb-0",
					onClick: (e) => a.newTriple(t)
				}, "+", 8, S), d("button", {
					type: "button",
					class: "btn btn-outline-dark mb-0",
					onClick: (e) => a.delTriple(t)
				}, "-", 8, C)])
			]))), 128))])]),
			i.dataModel.length < 1 ? (m(), u("button", {
				key: 0,
				type: "button",
				class: "btn btn-outline-dark mb-0",
				onClick: t[1] ||= (e) => a.newTriple()
			}, "+")) : l("", !0),
			d("button", {
				type: "button",
				class: "btn btn-outline-primary mb-0",
				onClick: t[2] ||= (...e) => a.updateResource && a.updateResource(...e)
			}, "Update Resource")
		])]),
		i.debug == 0 ? (m(), u("a", {
			key: 0,
			onClick: t[3] ||= (e) => i.debug = !0
		}, "(show debug)")) : l("", !0),
		i.debug ? (m(), u("div", w, [d("a", { onClick: t[4] ||= (e) => i.debug = !1 }, "(hide debug)"), d("div", T, [d("div", E, [d("div", D, [d("div", O, [t[7] ||= f(" new ", -1), d("pre", null, "subject: " + _(i.subject) + "\n" + _(i.dataModel) + "\n          ", 1)]), d("div", k, [t[8] ||= f(" old ", -1), d("pre", null, "subject: " + _(i.subject) + "\n" + _(i.originalDataModel) + "\n          ", 1)])])])])])) : l("", !0)
	], 64);
}
var j = /*#__PURE__*/ r(y, [["render", A]]);
//#endregion
export { j as default };
