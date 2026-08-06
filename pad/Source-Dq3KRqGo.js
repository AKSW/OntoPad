import { a as e, i as t, r as n, t as r } from "./rdf-C53IQogC.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as a } from "./prefixes-DE__fLi2.js";
import { n as o } from "./n3-compare-CG7IVZxi.js";
import { t as s } from "./dist-DvKQ5Q0f.js";
import { mapState as c } from "pinia";
import { createCommentVNode as l, createElementBlock as u, createElementVNode as d, createTextVNode as f, openBlock as p, toDisplayString as m, vModelText as h, withDirectives as g } from "vue";
//#region src/views/Source.vue
var _ = s(), v = {
	name: "Source",
	setup() {
		return { store: r() };
	},
	mounted() {
		this.getResource();
	},
	watch: { resource_iri(e) {
		this.getResource();
	} },
	computed: {
		...c(n, ["graph_iri", "resource_iri"]),
		...c(a, ["prefixes_flat"])
	},
	data() {
		return {
			debug: !1,
			originalData: {},
			resourceSource: ""
		};
	},
	methods: {
		async getResource() {
			console.log("get resource");
			let e = await this.store.getResource(this.resource_iri);
			this.originalData = (await (0, _.streamToStore)(e)).store, this.resourceSource = await t(this.originalData.match(), {
				format: "text/turtle",
				prefixes: this.prefixes_flat
			});
		},
		async updateResource() {
			let t = await e(this.resourceSource), n = o(this.originalData, t);
			this.store.deleteInsertData({
				insertArray: n.add,
				deleteArray: n.del,
				graphIri: this.graph_iri
			});
		}
	}
}, y = { class: "form-group" }, b = { key: 1 };
function x(e, t, n, r, i, a) {
	return p(), u("div", null, [
		d("strong", null, "Sources of " + m(e.resource_iri), 1),
		t[6] ||= f(" (", -1),
		d("a", { onClick: t[0] ||= (...e) => a.getResource && a.getResource(...e) }, "refresh"),
		t[7] ||= f(") ", -1),
		d("form", null, [d("div", y, [t[5] ||= d("label", {
			for: "sourceInput",
			class: ""
		}, "Turtle", -1), g(d("textarea", {
			id: "sourceInput",
			class: "form-control",
			"onUpdate:modelValue": t[1] ||= (e) => i.resourceSource = e,
			rows: "15"
		}, null, 512), [[h, i.resourceSource]])]), d("button", {
			type: "button",
			class: "btn btn-outline-primary mb-0",
			onClick: t[2] ||= (e) => a.updateResource()
		}, "Submit")]),
		i.debug == 0 ? (p(), u("a", {
			key: 0,
			onClick: t[3] ||= (e) => i.debug = !0
		}, "(show debug)")) : l("", !0),
		i.debug ? (p(), u("div", b, [d("a", { onClick: t[4] ||= (e) => i.debug = !1 }, "(hide debug)"), d("pre", null, m(e.originalSource) + " ", 1)])) : l("", !0)
	]);
}
var S = /*#__PURE__*/ i(v, [["render", x]]);
//#endregion
export { S as default };
