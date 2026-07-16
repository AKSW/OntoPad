import { W as e, a as t, t as n } from "./rdf-IzXhxt-d.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as i } from "./TermInput-BvnaE9cR.js";
import { r as a, t as o } from "./n3-compare-CX0DzKOp.js";
import { Fragment as s, createCommentVNode as c, createElementBlock as l, createElementVNode as u, createTextVNode as d, createVNode as f, openBlock as p, renderList as m, resolveComponent as h, toDisplayString as g } from "vue";
import { mapState as _ } from "pinia";
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
	computed: { ..._(t, ["graph_iri", "resource_iri"]) },
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
	let o = h("TermInput");
	return p(), l(s, null, [
		u("div", b, [u("form", null, [
			t[6] ||= u("label", { for: "resourceUriInput" }, "Resource IRI (Subject)", -1),
			f(o, {
				term: i.subject,
				"onUpdate:term": t[0] ||= (e) => i.subject = e,
				type: "iri",
				id: "resourceUriInput"
			}, null, 8, ["term"]),
			u("table", x, [t[5] ||= u("thead", null, [u("tr", null, [
				u("th", {
					scope: "col",
					width: "45%"
				}, "Predicate"),
				u("th", {
					scope: "col",
					width: "auto"
				}, "Object"),
				u("th", {
					scope: "col",
					width: "90px"
				})
			])], -1), u("tbody", null, [(p(!0), l(s, null, m(i.dataModel, (e, t) => (p(), l("tr", { key: t }, [
				u("td", null, [f(o, {
					id: "form-pred-" + t,
					term: e.predicate,
					"onUpdate:term": (t) => e.predicate = t,
					type: "iri"
				}, null, 8, [
					"id",
					"term",
					"onUpdate:term"
				])]),
				u("td", null, [f(o, {
					id: "form-obj-" + t,
					term: e.object,
					"onUpdate:term": (t) => e.object = t
				}, null, 8, [
					"id",
					"term",
					"onUpdate:term"
				])]),
				u("td", null, [u("button", {
					type: "button",
					class: "btn btn-outline-dark mb-0",
					onClick: (e) => a.newTriple(t)
				}, "+", 8, S), u("button", {
					type: "button",
					class: "btn btn-outline-dark mb-0",
					onClick: (e) => a.delTriple(t)
				}, "-", 8, C)])
			]))), 128))])]),
			i.dataModel.length < 1 ? (p(), l("button", {
				key: 0,
				type: "button",
				class: "btn btn-outline-dark mb-0",
				onClick: t[1] ||= (e) => a.newTriple()
			}, "+")) : c("", !0),
			u("button", {
				type: "button",
				class: "btn btn-outline-primary mb-0",
				onClick: t[2] ||= (...e) => a.updateResource && a.updateResource(...e)
			}, "Update Resource")
		])]),
		i.debug == 0 ? (p(), l("a", {
			key: 0,
			onClick: t[3] ||= (e) => i.debug = !0
		}, "(show debug)")) : c("", !0),
		i.debug ? (p(), l("div", w, [u("a", { onClick: t[4] ||= (e) => i.debug = !1 }, "(hide debug)"), u("div", T, [u("div", E, [u("div", D, [u("div", O, [t[7] ||= d(" new ", -1), u("pre", null, "subject: " + g(i.subject) + "\n" + g(i.dataModel) + "\n          ", 1)]), u("div", k, [t[8] ||= d(" old ", -1), u("pre", null, "subject: " + g(i.subject) + "\n" + g(i.originalDataModel) + "\n          ", 1)])])])])])) : c("", !0)
	], 64);
}
var j = /*#__PURE__*/ r(y, [["render", A]]);
//#endregion
export { j as default };
