import { W as e, a as t, t as n } from "./rdf-IzXhxt-d.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as i } from "./TermInput-BvnaE9cR.js";
import { Fragment as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createVNode as l, openBlock as u, renderList as d, resolveComponent as f, toDisplayString as p } from "vue";
import { mapState as m } from "pinia";
//#region src/views/InputForm.vue
var h = {
	name: "InputForm",
	setup() {
		return { store: n() };
	},
	components: { TermInput: i },
	data() {
		return {
			debug: !1,
			subject: e.namedNode(""),
			dataModel: [e.quad(e.blankNode(""), e.namedNode(""), e.namedNode(""))]
		};
	},
	computed: { ...m(t, ["graph_iri"]) },
	methods: {
		newTriple(t) {
			t ||= 0, this.dataModel.splice(t + 1, 0, e.quad(e.blankNode(""), e.namedNode(""), e.namedNode("")));
		},
		delTriple(e) {
			this.dataModel.splice(e, 1);
		},
		submit() {
			for (let e in this.dataModel) {
				let t = this.dataModel[e];
				t.subject = this.subject;
			}
			this.store.deleteInsertData({
				insertArray: this.dataModel,
				graphIri: this.graph_iri
			});
		}
	}
}, g = { class: "Form" }, _ = { width: "100%" }, v = ["onClick"], y = ["onClick"], b = { key: 1 };
function x(e, t, n, r, i, m) {
	let h = f("TermInput");
	return u(), s("div", g, [
		c("form", null, [
			t[6] ||= c("label", { for: "resourceUriInput" }, "Resource IRI (Subject)", -1),
			l(h, {
				term: i.subject,
				"onUpdate:term": t[0] ||= (e) => i.subject = e,
				type: "iri",
				id: "resourceUriInput"
			}, null, 8, ["term"]),
			c("table", _, [t[5] ||= c("thead", null, [c("tr", null, [
				c("th", {
					scope: "col",
					width: "45%"
				}, "Predicate"),
				c("th", {
					scope: "col",
					width: "auto"
				}, "Object"),
				c("th", {
					scope: "col",
					width: "90px"
				})
			])], -1), c("tbody", null, [(u(!0), s(a, null, d(i.dataModel, (e, t) => (u(), s("tr", { key: t }, [
				c("td", null, [l(h, {
					id: "form-pred-" + t,
					term: e.predicate,
					"onUpdate:term": (t) => e.predicate = t,
					type: "iri"
				}, null, 8, [
					"id",
					"term",
					"onUpdate:term"
				])]),
				c("td", null, [l(h, {
					id: "form-obj-" + t,
					term: e.object,
					"onUpdate:term": (t) => e.object = t
				}, null, 8, [
					"id",
					"term",
					"onUpdate:term"
				])]),
				c("td", null, [c("button", {
					type: "button",
					class: "btn btn-outline-dark",
					onClick: (e) => m.newTriple(t)
				}, "+", 8, v), c("button", {
					type: "button",
					class: "btn btn-outline-dark",
					onClick: (e) => m.delTriple(t)
				}, "-", 8, y)])
			]))), 128))])]),
			i.dataModel.length < 1 ? (u(), s("button", {
				key: 0,
				type: "button",
				class: "btn btn-outline-dark mb-0",
				onClick: t[1] ||= (e) => m.newTriple()
			}, "+")) : o("", !0),
			c("button", {
				type: "button",
				class: "btn btn-outline-primary mb-0",
				onClick: t[2] ||= (...e) => m.submit && m.submit(...e)
			}, "Submit")
		]),
		i.debug == 0 ? (u(), s("a", {
			key: 0,
			onClick: t[3] ||= (e) => i.debug = !0
		}, "(show debug)")) : o("", !0),
		i.debug ? (u(), s("div", b, [c("a", { onClick: t[4] ||= (e) => i.debug = !1 }, "(hide debug)"), c("pre", null, "subject: " + p(i.subject) + "\n" + p(i.dataModel) + "\n      ", 1)])) : o("", !0)
	]);
}
var S = /*#__PURE__*/ r(h, [["render", x]]);
//#endregion
export { S as default };
