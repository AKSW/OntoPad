import { a as e } from "./rdf-D2-Nb4_o.js";
import { t } from "./QueryResultList-BeU3CrS9.js";
import { mapState as n } from "pinia";
import { createBlock as r, openBlock as i, unref as a } from "vue";
//#region src/components/InstanceList.vue
var o = {
	name: "InstanceList",
	computed: { ...n(e, ["resource_iri"]) }
}, s = /*@__PURE__*/ Object.assign(o, { setup(n) {
	return (n, o) => (i(), r(t, {
		title: "Instance List",
		search: "",
		query: "select distinct ?instance { ?instance a <" + n.resource_iri + "> } order by ?instance",
		"select-variable": "instance",
		itemClass: "py-2",
		ref: "instanceList",
		activeResource: n.resource_iri,
		selectResource: (t) => {
			a(e)().changeResourceIri(t, !1);
		}
	}, null, 8, [
		"query",
		"activeResource",
		"selectResource"
	]));
} });
//#endregion
export { s as default };
