import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { createCommentVNode as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, openBlock as a, toDisplayString as o, withModifiers as s } from "vue";
//#region src/components/Term.vue
var c = {
	name: "Term",
	props: ["term"],
	emits: ["click"],
	methods: { selectResource: function(e) {
		this.$emit("click", e);
	} }
}, l = { key: 0 }, u = { key: 1 }, d = { key: 2 };
function f(e, c, f, p, m, h) {
	return a(), n("div", null, [f.term.termType === "NamedNode" ? (a(), n("span", l, [
		c[2] ||= i(" <", -1),
		r("a", {
			href: "#",
			onClick: c[0] ||= s((e) => h.selectResource(f.term.value), ["prevent"])
		}, o(f.term.value), 1),
		c[3] ||= i("> ", -1)
	])) : f.term.termType === "Literal" && f.term.language ? (a(), n("span", u, "\"" + o(f.term.value) + "\"@" + o(f.term.language), 1)) : f.term.termType === "Literal" && f.term.datatype.value ? (a(), n("span", d, [
		i("\"" + o(f.term.value) + "\"^^<", 1),
		r("a", {
			href: "#",
			onClick: c[1] ||= s((e) => h.selectResource(f.term.datatype.value), ["prevent"])
		}, o(f.term.datatype.value), 1),
		c[4] ||= i(">", -1)
	])) : t("", !0)]);
}
var p = /*#__PURE__*/ e(c, [["render", f]]);
//#endregion
export { p as t };
