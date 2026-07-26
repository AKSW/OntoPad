import { N as e, r as t, t as n } from "./rdf-O-dOZMGs.js";
import { t as r } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as i } from "./InstanceList-DL0ta8l3.js";
import { n as a, r as o, t as s } from "./Term-D9HhZu2s.js";
import { t as c } from "./dist-B4yHRNbk.js";
import { mapState as l } from "pinia";
import { Fragment as u, createCommentVNode as d, createElementBlock as f, createElementVNode as p, createVNode as m, openBlock as h, renderList as g, resolveComponent as _, toDisplayString as v, unref as y, withCtx as b } from "vue";
//#region src/views/PropertyView.vue
var x = c(), S = {
	name: "PropertyView",
	setup() {
		return {
			store: n(),
			selection: t()
		};
	},
	components: { Term: s },
	data() {
		return {
			dataModel: {},
			subject: e.namedNode("")
		};
	},
	computed: {
		...l(t, ["resource_iri"]),
		label() {
			if (this.dataModel.getQuads !== void 0) {
				let t = this.dataModel.getQuads(e.namedNode(this.resource_iri), e.namedNode("http://www.w3.org/2000/01/rdf-schema#label"), null)[0];
				if (t) return t.object;
			}
			return "";
		},
		description() {
			if (this.dataModel.getQuads !== void 0) {
				let t = this.dataModel.getQuads(e.namedNode(this.resource_iri), e.namedNode("http://www.w3.org/2000/01/rdf-schema#comment"), null)[0];
				if (t) return t.object;
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
			this.subject = e.namedNode(this.resource_iri), console.log("get resource: " + this.resource_iri);
			let t = await this.store.getResource(this.resource_iri);
			this.dataModel = (await (0, x.streamToStore)(t)).store;
		},
		selectResource(e) {
			this.selection.changeResourceIri(e);
		}
	}
}, C = {
	key: 0,
	width: "100%"
};
function w(e, t, n, r, i, a) {
	let o = _("Term");
	return h(), f("div", null, [p("dl", null, [
		t[2] ||= p("dt", null, "IRI", -1),
		p("dd", null, v(e.resource_iri), 1),
		t[3] ||= p("dt", null, "Label", -1),
		p("dd", null, [m(o, {
			term: a.label,
			"onUpdate:term": t[0] ||= (e) => a.label = e,
			onClick: a.selectResource
		}, null, 8, ["term", "onClick"])]),
		t[4] ||= p("dt", null, "Description", -1),
		p("dd", null, [m(o, {
			term: a.description,
			"onUpdate:term": t[1] ||= (e) => a.description = e,
			onClick: a.selectResource
		}, null, 8, ["term", "onClick"])])
	]), i.dataModel.getQuads === void 0 ? d("", !0) : (h(), f("table", C, [t[5] ||= p("thead", null, [p("tr", null, [p("th", {
		scope: "col",
		width: "45%"
	}, "Predicate"), p("th", {
		scope: "col",
		width: "auto"
	}, "Object")])], -1), p("tbody", null, [(h(!0), f(u, null, g(i.dataModel.getQuads(null, null, null), (e, t) => (h(), f("tr", { key: t }, [p("td", null, [m(o, {
		term: e.predicate,
		"onUpdate:term": (t) => e.predicate = t,
		onClick: a.selectResource
	}, null, 8, [
		"term",
		"onUpdate:term",
		"onClick"
	])]), p("td", null, [m(o, {
		term: e.object,
		"onUpdate:term": (t) => e.object = t,
		onClick: a.selectResource
	}, null, 8, [
		"term",
		"onUpdate:term",
		"onClick"
	])])]))), 128))])]))]);
}
var T = /*#__PURE__*/ r(S, [["render", w]]), E = /*#__PURE__*/ r({
	__name: "DashboardView",
	setup(e) {
		return (e, t) => (h(), f(u, null, [t[0] ||= p("strong", null, "Resource Dashboard", -1), m(y(o), { class: "default-theme" }, {
			default: b(() => [m(y(a), { size: "70" }, {
				default: b(() => [m(T)]),
				_: 1
			}), m(y(a), { size: "30" }, {
				default: b(() => [m(i, { style: {
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
export { E as default };
