import { a as e, o as t, s as n, t as r } from "./rdf-IzXhxt-d.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as a } from "./prefixes-BGYAmMl-.js";
import { t as o } from "./dist-BUTSxrup.js";
import { n as s } from "./n3-compare-CX0DzKOp.js";
import { createCommentVNode as c, createElementBlock as l, createElementVNode as u, createTextVNode as d, openBlock as f, toDisplayString as p, vModelText as m, withDirectives as h } from "vue";
import { mapState as g } from "pinia";
//#region src/views/Source.vue
var _ = o(), v = {
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
		...g(e, ["graph_iri", "resource_iri"]),
		...g(a, ["prefixes_flat"])
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
			let e = await n(this.resourceSource), t = s(this.originalData, e);
			this.store.deleteInsertData({
				insertArray: t.add,
				deleteArray: t.del,
				graphIri: this.graph_iri
			});
		}
	}
}, y = { class: "form-group" }, b = { key: 1 };
function x(e, t, n, r, i, a) {
	return f(), l("div", null, [
		u("strong", null, "Sources of " + p(e.resource_iri), 1),
		t[6] ||= d(" (", -1),
		u("a", { onClick: t[0] ||= (...e) => a.getResource && a.getResource(...e) }, "refresh"),
		t[7] ||= d(") ", -1),
		u("form", null, [u("div", y, [t[5] ||= u("label", {
			for: "sourceInput",
			class: ""
		}, "Turtle", -1), h(u("textarea", {
			id: "sourceInput",
			class: "form-control",
			"onUpdate:modelValue": t[1] ||= (e) => i.resourceSource = e,
			rows: "15"
		}, null, 512), [[m, i.resourceSource]])]), u("button", {
			type: "button",
			class: "btn btn-outline-primary mb-0",
			onClick: t[2] ||= (e) => a.updateResource()
		}, "Submit")]),
		i.debug == 0 ? (f(), l("a", {
			key: 0,
			onClick: t[3] ||= (e) => i.debug = !0
		}, "(show debug)")) : c("", !0),
		i.debug ? (f(), l("div", b, [u("a", { onClick: t[4] ||= (e) => i.debug = !1 }, "(hide debug)"), u("pre", null, p(e.originalSource) + " ", 1)])) : c("", !0)
	]);
}
var S = /*#__PURE__*/ i(v, [["render", x]]);
//#endregion
export { S as default };
