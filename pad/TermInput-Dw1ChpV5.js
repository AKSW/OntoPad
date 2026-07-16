import { W as e } from "./rdf-BuzRRZzk.js";
import { t } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { Fragment as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, normalizeClass as o, openBlock as s, vModelText as c, withDirectives as l } from "vue";
//#region src/components/TermInput.vue
var u = {
	name: "TermInput",
	mounted() {
		this.updateNode();
	},
	watch: { term(e) {
		this.updateNode();
	} },
	data() {
		return {
			dynamicNodetype: "iri",
			literalType: "language",
			idValue: "",
			language: "de",
			datatype: "http://www.w3.org/2001/XMLSchema#string",
			node: {}
		};
	},
	props: {
		type: String,
		id: String,
		term: Object
	},
	computed: { nodeType: {
		get: function() {
			return this.type ? this.type : this.dynamicNodetype;
		},
		set: function(e) {
			this.dynamicNodetype = e;
		}
	} },
	methods: {
		setType(e) {
			this.nodeType = e, this.notify();
		},
		setLiteralType(e) {
			this.literalType = e, this.notify();
		},
		notify() {
			this.updateTerm();
		},
		updateTerm() {
			this.dynamicNodetype === "iri" ? this.node = e.namedNode(this.idValue) : this.literalType === "language" ? this.node = e.literal(this.idValue, this.language) : this.node = e.literal(this.idValue, e.namedNode(this.datatype)), this.$emit("update:term", this.node);
		},
		updateNode() {
			this.term != null && (this.node = this.term, this.term.termType === "NamedNode" ? this.dynamicNodetype = "iri" : this.term.termType === "Literal" && (this.dynamicNodetype = "literal", this.term.language ? (this.language = this.term.language, this.literalType = "language") : (this.datatype = this.term.datatype.value, this.literalType = "datatype")), this.idValue = this.term.value);
		}
	}
}, d = { class: "input-group" }, f = {
	key: 1,
	class: "input-group-text"
}, p = {
	key: 2,
	class: "input-group-text"
}, m = ["id"], h = {
	key: 3,
	class: "input-group-text"
}, g = ["id"], _ = ["id"];
function v(e, t, u, v, y, b) {
	return s(), i("div", d, [
		u.type === void 0 ? (s(), i(n, { key: 0 }, [a("button", {
			onClick: t[0] ||= (e) => b.setType("iri"),
			class: o(["btn btn-outline-secondary", { active: b.nodeType == "iri" }]),
			type: "button"
		}, "IRI", 2), a("button", {
			onClick: t[1] ||= (e) => b.setType("literal"),
			class: o(["btn btn-outline-secondary", { active: b.nodeType == "literal" }]),
			type: "button"
		}, "Lit", 2)], 64)) : r("", !0),
		b.nodeType === "iri" ? (s(), i("span", f, "<")) : b.nodeType === "literal" ? (s(), i("span", p, "\"")) : r("", !0),
		l(a("input", {
			id: "value-" + this.id,
			"onUpdate:modelValue": t[2] ||= (e) => y.idValue = e,
			onInput: t[3] ||= (...e) => b.notify && b.notify(...e),
			type: "text",
			class: "form-control"
		}, null, 40, m), [[c, y.idValue]]),
		b.nodeType === "iri" ? (s(), i("span", h, ">")) : b.nodeType === "literal" && y.literalType === "language" ? (s(), i(n, { key: 4 }, [a("span", {
			onClick: t[4] ||= (e) => b.setLiteralType("datatype"),
			class: "input-group-text btn btn-outline-secondary"
		}, "\"@"), l(a("input", {
			id: "language-" + this.id,
			"onUpdate:modelValue": t[5] ||= (e) => y.language = e,
			onInput: t[6] ||= (...e) => b.notify && b.notify(...e),
			type: "text",
			class: "form-control"
		}, null, 40, g), [[c, y.language]])], 64)) : b.nodeType === "literal" && y.literalType === "datatype" ? (s(), i(n, { key: 5 }, [
			a("span", {
				onClick: t[7] ||= (e) => b.setLiteralType("language"),
				class: "input-group-text btn btn-outline-secondary"
			}, "\"^^<"),
			l(a("input", {
				id: "datatype-" + this.id,
				"onUpdate:modelValue": t[8] ||= (e) => y.datatype = e,
				onInput: t[9] ||= (...e) => b.notify && b.notify(...e),
				type: "text",
				class: "form-control"
			}, null, 40, _), [[c, y.datatype]]),
			t[10] ||= a("span", { class: "input-group-text" }, ">", -1)
		], 64)) : r("", !0)
	]);
}
var y = /*#__PURE__*/ t(u, [["render", v]]);
//#endregion
export { y as t };
