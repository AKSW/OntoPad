import { N as e } from "./rdf-O-dOZMGs.js";
import { defineStore as t } from "pinia";
//#region src/stores/prefixes.js
var n = t("prefixes", {
	state: () => ({ prefixes: {
		ex: e.namedNode("http://example.org/"),
		exc: e.namedNode("http://example.org/classes#"),
		exp: e.namedNode("http://example.org/properties#"),
		rdf: e.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),
		rdfs: e.namedNode("http://www.w3.org/2000/01/rdf-schema#"),
		xsd: e.namedNode("http://www.w3.org/2001/XMLSchema#"),
		foaf: e.namedNode("http://xmlns.com/foaf/0.1/"),
		sh: e.namedNode("http://www.w3.org/ns/shacl#")
	} }),
	getters: {
		namespace_prefix_map: (e) => {
			let t = {};
			return Object.keys(e.prefixes).forEach((n) => {
				t[e.prefixes[n].value] = n;
			}), t;
		},
		prefixes_flat: (e) => {
			let t = {};
			return Object.keys(e.prefixes).forEach((n) => {
				t[n] = e.prefixes[n].value;
			}), t;
		}
	},
	actions: {
		setPrefix(t, n) {
			this.prefixes[t] = e.namedNode(n);
		},
		resolvePrefix(e) {
			return this.prefixes[e];
		},
		getPrefix(e) {
			return this.namespace_prefix_map[e];
		},
		shortenIri(e) {
			let t = new URL(e), n = t.toString(), r = "";
			if (t.hash) {
				let e = n.lastIndexOf("#");
				r = n.substr(0, e + 1), n = t.hash.substr(1);
			} else if (t.pathname) {
				let e = n.lastIndexOf("/");
				r = n.substr(0, e + 1), n = n.substr(e + 1);
			}
			return this.namespace_prefix_map[r] && n.indexOf("#") < 0 && n.indexOf(":") < 0 && n.indexOf("/") < 0 ? `${this.namespace_prefix_map[r]}:${n}` : t.toString();
		}
	}
});
//#endregion
export { n as t };
