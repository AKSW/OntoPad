import { a as e } from "./rdf-IzXhxt-d.js";
import { t } from "./QueryResultList-BLqSWtOA.js";
import { createBlock as n, openBlock as r, unref as i } from "vue";
import { mapState as a } from "pinia";
//#region src/components/InstanceList.vue
var o = {
	name: "InstanceList",
	computed: { ...a(e, ["resource_iri"]) }
}, s = /*@__PURE__*/ Object.assign(o, { setup(a) {
	return (a, o) => (r(), n(t, {
		title: "Instance List",
		search: "",
		query: "select distinct ?instance { ?instance a <" + a.resource_iri + "> } order by ?instance",
		"select-variable": "instance",
		itemClass: "py-2",
		ref: "instanceList",
		activeResource: a.resource_iri,
		selectResource: (t) => {
			i(e)().changeResourceIri(t, !1);
		}
	}, null, 8, [
		"query",
		"activeResource",
		"selectResource"
	]));
} });
//#endregion
export { s as default };
