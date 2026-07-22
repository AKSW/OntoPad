import { W as e, a as t, t as n } from "./rdf-Ckr2C8lK.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as i } from "./TermInput-DlZEh19U.js";
import { mapState as a } from "pinia";
import { Fragment as o, createCommentVNode as s, createElementBlock as c, createElementVNode as l, createVNode as u, openBlock as d, renderList as f, resolveComponent as p, toDisplayString as m } from "vue";
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
	computed: { ...a(t, ["graph_iri"]) },
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
function x(e, t, n, r, i, a) {
	let h = p("TermInput");
	return d(), c("div", g, [
		l("form", null, [
			t[6] ||= l("label", { for: "resourceUriInput" }, "Resource IRI (Subject)", -1),
			u(h, {
				term: i.subject,
				"onUpdate:term": t[0] ||= (e) => i.subject = e,
				type: "iri",
				id: "resourceUriInput"
			}, null, 8, ["term"]),
			l("table", _, [t[5] ||= l("thead", null, [l("tr", null, [
				l("th", {
					scope: "col",
					width: "45%"
				}, "Predicate"),
				l("th", {
					scope: "col",
					width: "auto"
				}, "Object"),
				l("th", {
					scope: "col",
					width: "90px"
				})
			])], -1), l("tbody", null, [(d(!0), c(o, null, f(i.dataModel, (e, t) => (d(), c("tr", { key: t }, [
				l("td", null, [u(h, {
					id: "form-pred-" + t,
					term: e.predicate,
					"onUpdate:term": (t) => e.predicate = t,
					type: "iri"
				}, null, 8, [
					"id",
					"term",
					"onUpdate:term"
				])]),
				l("td", null, [u(h, {
					id: "form-obj-" + t,
					term: e.object,
					"onUpdate:term": (t) => e.object = t
				}, null, 8, [
					"id",
					"term",
					"onUpdate:term"
				])]),
				l("td", null, [l("button", {
					type: "button",
					class: "btn btn-outline-dark",
					onClick: (e) => a.newTriple(t)
				}, "+", 8, v), l("button", {
					type: "button",
					class: "btn btn-outline-dark",
					onClick: (e) => a.delTriple(t)
				}, "-", 8, y)])
			]))), 128))])]),
			i.dataModel.length < 1 ? (d(), c("button", {
				key: 0,
				type: "button",
				class: "btn btn-outline-dark mb-0",
				onClick: t[1] ||= (e) => a.newTriple()
			}, "+")) : s("", !0),
			l("button", {
				type: "button",
				class: "btn btn-outline-primary mb-0",
				onClick: t[2] ||= (...e) => a.submit && a.submit(...e)
			}, "Submit")
		]),
		i.debug == 0 ? (d(), c("a", {
			key: 0,
			onClick: t[3] ||= (e) => i.debug = !0
		}, "(show debug)")) : s("", !0),
		i.debug ? (d(), c("div", b, [l("a", { onClick: t[4] ||= (e) => i.debug = !1 }, "(hide debug)"), l("pre", null, "subject: " + m(i.subject) + "\n" + m(i.dataModel) + "\n      ", 1)])) : s("", !0)
	]);
}
var S = /*#__PURE__*/ r(h, [["render", x]]);
//#endregion
export { S as default };
