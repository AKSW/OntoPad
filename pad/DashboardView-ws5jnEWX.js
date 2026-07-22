import { G as e, W as t, a as n, t as r } from "./rdf-DtZfkFgL.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as a, t as o } from "./splitpanes.esm-DWEvKrA8.js";
import "./ontopad.js";
import s from "./InstanceList-D7Con8yn.js";
import { t as c } from "./Term-DjvlK-Mw.js";
import { t as l } from "./dist-CzZ0iLTx.js";
import { mapState as u } from "pinia";
import { Fragment as d, createCommentVNode as f, createElementBlock as p, createElementVNode as m, createVNode as h, openBlock as g, renderList as _, resolveComponent as v, toDisplayString as y, unref as b, withCtx as x } from "vue";
e();
var S = l(), C = {
	name: "PropertyView",
	setup() {
		return {
			store: r(),
			selection: n()
		};
	},
	components: { Term: c },
	data() {
		return {
			dataModel: {},
			subject: t.namedNode("")
		};
	},
	computed: {
		...u(n, ["resource_iri"]),
		label() {
			if (this.dataModel.getQuads !== void 0) {
				let e = this.dataModel.getQuads(t.namedNode(this.resource_iri), t.namedNode("http://www.w3.org/2000/01/rdf-schema#label"), null)[0];
				if (e) return e.object;
			}
			return "";
		},
		description() {
			if (this.dataModel.getQuads !== void 0) {
				let e = this.dataModel.getQuads(t.namedNode(this.resource_iri), t.namedNode("http://www.w3.org/2000/01/rdf-schema#comment"), null)[0];
				if (e) return e.object;
			}
			return "";
		}
	},
	mounted() {
		this.getResource();
	},
	watch: { resource_iri(e) {
		this.getResource();
	} },
	methods: {
		async getResource() {
			this.subject = t.namedNode(this.resource_iri), console.log("get resource: " + this.resource_iri);
			let e = await this.store.getResource(this.resource_iri);
			this.dataModel = (await (0, S.streamToStore)(e)).store;
		},
		selectResource(e) {
			this.selection.changeResourceIri(e);
		}
	}
}, w = {
	key: 0,
	width: "100%"
};
function T(e, t, n, r, i, a) {
	let o = v("Term");
	return g(), p("div", null, [m("dl", null, [
		t[2] ||= m("dt", null, "IRI", -1),
		m("dd", null, y(e.resource_iri), 1),
		t[3] ||= m("dt", null, "Label", -1),
		m("dd", null, [h(o, {
			term: a.label,
			"onUpdate:term": t[0] ||= (e) => a.label = e,
			onClick: a.selectResource
		}, null, 8, ["term", "onClick"])]),
		t[4] ||= m("dt", null, "Description", -1),
		m("dd", null, [h(o, {
			term: a.description,
			"onUpdate:term": t[1] ||= (e) => a.description = e,
			onClick: a.selectResource
		}, null, 8, ["term", "onClick"])])
	]), i.dataModel.getQuads === void 0 ? f("", !0) : (g(), p("table", w, [t[5] ||= m("thead", null, [m("tr", null, [m("th", {
		scope: "col",
		width: "45%"
	}, "Predicate"), m("th", {
		scope: "col",
		width: "auto"
	}, "Object")])], -1), m("tbody", null, [(g(!0), p(d, null, _(i.dataModel.getQuads(null, null, null), (e, t) => (g(), p("tr", { key: t }, [m("td", null, [h(o, {
		term: e.predicate,
		"onUpdate:term": (t) => e.predicate = t,
		onClick: a.selectResource
	}, null, 8, [
		"term",
		"onUpdate:term",
		"onClick"
	])]), m("td", null, [h(o, {
		term: e.object,
		"onUpdate:term": (t) => e.object = t,
		onClick: a.selectResource
	}, null, 8, [
		"term",
		"onUpdate:term",
		"onClick"
	])])]))), 128))])]))]);
}
var E = /*#__PURE__*/ i(C, [["render", T]]), D = /*#__PURE__*/ i({
	__name: "DashboardView",
	setup(e) {
		return (e, t) => (g(), p(d, null, [t[0] ||= m("strong", null, "Resource Dashboard", -1), h(b(a), { class: "default-theme" }, {
			default: x(() => [h(b(o), { size: "70" }, {
				default: x(() => [h(E)]),
				_: 1
			}), h(b(o), { size: "30" }, {
				default: x(() => [h(s, { style: {
					height: "80vh",
					"overflow-y": "scroll"
				} })]),
				_: 1
			})]),
			_: 1
		})], 64));
	}
}, [["__scopeId", "data-v-f8555f28"]]);
//#endregion
export { D as default };
