import { W as e, a as t, t as n } from "./rdf-IzXhxt-d.js";
import { t as r } from "./bootstrap.esm-DJp0GTtI.js";
import { t as i } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as a } from "./QueryResultList-BLqSWtOA.js";
import { t as o } from "./TermInput-BvnaE9cR.js";
import { n as s, t as c } from "./splitpanes.esm-DWEvKrA8.js";
import { Fragment as l, computed as u, createApp as d, createBlock as f, createCommentVNode as p, createElementBlock as m, createElementVNode as h, createTextVNode as g, createVNode as _, defineComponent as v, getCurrentInstance as y, h as b, inject as x, nextTick as S, openBlock as C, provide as w, reactive as ee, ref as T, renderList as E, resolveComponent as D, shallowReactive as te, shallowRef as ne, toDisplayString as O, unref as re, vModelRadio as ie, vModelText as ae, watch as oe, watchEffect as se, withCtx as k, withDirectives as A } from "vue";
import { createPinia as ce, mapState as le } from "pinia";
//#region \0vite/modulepreload-polyfill.js
(function() {
	let e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) n(e);
	new MutationObserver((e) => {
		for (let t of e) if (t.type === "childList") for (let e of t.addedNodes) e.tagName === "LINK" && e.rel === "modulepreload" && n(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
	function t(e) {
		let t = {};
		return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
	}
	function n(e) {
		if (e.ep) return;
		e.ep = !0;
		let n = t(e);
		fetch(e.href, n);
	}
})();
//#endregion
//#region node_modules/yaml/browser/dist/nodes/identity.js
var ue = Symbol.for("yaml.alias"), de = Symbol.for("yaml.document"), fe = Symbol.for("yaml.map"), pe = Symbol.for("yaml.pair"), j = Symbol.for("yaml.scalar"), M = Symbol.for("yaml.seq"), N = Symbol.for("yaml.node.type"), me = (e) => !!e && typeof e == "object" && e[N] === ue, he = (e) => !!e && typeof e == "object" && e[N] === de, ge = (e) => !!e && typeof e == "object" && e[N] === fe, P = (e) => !!e && typeof e == "object" && e[N] === pe, F = (e) => !!e && typeof e == "object" && e[N] === j, _e = (e) => !!e && typeof e == "object" && e[N] === M;
function I(e) {
	if (e && typeof e == "object") switch (e[N]) {
		case fe:
		case M: return !0;
	}
	return !1;
}
function L(e) {
	if (e && typeof e == "object") switch (e[N]) {
		case ue:
		case fe:
		case j:
		case M: return !0;
	}
	return !1;
}
var ve = (e) => (F(e) || I(e)) && !!e.anchor, R = Symbol("break visit"), ye = Symbol("skip children"), be = Symbol("remove node");
function xe(e, t) {
	let n = Te(t);
	he(e) ? Se(null, e.contents, n, Object.freeze([e])) === be && (e.contents = null) : Se(null, e, n, Object.freeze([]));
}
xe.BREAK = R, xe.SKIP = ye, xe.REMOVE = be;
function Se(e, t, n, r) {
	let i = Ee(e, t, n, r);
	if (L(i) || P(i)) return De(e, r, i), Se(e, i, n, r);
	if (typeof i != "symbol") {
		if (I(t)) {
			r = Object.freeze(r.concat(t));
			for (let e = 0; e < t.items.length; ++e) {
				let i = Se(e, t.items[e], n, r);
				if (typeof i == "number") e = i - 1;
				else if (i === R) return R;
				else i === be && (t.items.splice(e, 1), --e);
			}
		} else if (P(t)) {
			r = Object.freeze(r.concat(t));
			let e = Se("key", t.key, n, r);
			if (e === R) return R;
			e === be && (t.key = null);
			let i = Se("value", t.value, n, r);
			if (i === R) return R;
			i === be && (t.value = null);
		}
	}
	return i;
}
async function Ce(e, t) {
	let n = Te(t);
	he(e) ? await we(null, e.contents, n, Object.freeze([e])) === be && (e.contents = null) : await we(null, e, n, Object.freeze([]));
}
Ce.BREAK = R, Ce.SKIP = ye, Ce.REMOVE = be;
async function we(e, t, n, r) {
	let i = await Ee(e, t, n, r);
	if (L(i) || P(i)) return De(e, r, i), we(e, i, n, r);
	if (typeof i != "symbol") {
		if (I(t)) {
			r = Object.freeze(r.concat(t));
			for (let e = 0; e < t.items.length; ++e) {
				let i = await we(e, t.items[e], n, r);
				if (typeof i == "number") e = i - 1;
				else if (i === R) return R;
				else i === be && (t.items.splice(e, 1), --e);
			}
		} else if (P(t)) {
			r = Object.freeze(r.concat(t));
			let e = await we("key", t.key, n, r);
			if (e === R) return R;
			e === be && (t.key = null);
			let i = await we("value", t.value, n, r);
			if (i === R) return R;
			i === be && (t.value = null);
		}
	}
	return i;
}
function Te(e) {
	return typeof e == "object" && (e.Collection || e.Node || e.Value) ? Object.assign({
		Alias: e.Node,
		Map: e.Node,
		Scalar: e.Node,
		Seq: e.Node
	}, e.Value && {
		Map: e.Value,
		Scalar: e.Value,
		Seq: e.Value
	}, e.Collection && {
		Map: e.Collection,
		Seq: e.Collection
	}, e) : e;
}
function Ee(e, t, n, r) {
	if (typeof n == "function") return n(e, t, r);
	if (ge(t)) return n.Map?.(e, t, r);
	if (_e(t)) return n.Seq?.(e, t, r);
	if (P(t)) return n.Pair?.(e, t, r);
	if (F(t)) return n.Scalar?.(e, t, r);
	if (me(t)) return n.Alias?.(e, t, r);
}
function De(e, t, n) {
	let r = t[t.length - 1];
	if (I(r)) r.items[e] = n;
	else if (P(r)) e === "key" ? r.key = n : r.value = n;
	else if (he(r)) r.contents = n;
	else {
		let e = me(r) ? "alias" : "scalar";
		throw Error(`Cannot replace node with ${e} parent`);
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/doc/directives.js
var Oe = {
	"!": "%21",
	",": "%2C",
	"[": "%5B",
	"]": "%5D",
	"{": "%7B",
	"}": "%7D"
}, ke = (e) => e.replace(/[!,[\]{}]/g, (e) => Oe[e]), Ae = class e {
	constructor(t, n) {
		this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, e.defaultYaml, t), this.tags = Object.assign({}, e.defaultTags, n);
	}
	clone() {
		let t = new e(this.yaml, this.tags);
		return t.docStart = this.docStart, t;
	}
	atDocument() {
		let t = new e(this.yaml, this.tags);
		switch (this.yaml.version) {
			case "1.1":
				this.atNextDocument = !0;
				break;
			case "1.2":
				this.atNextDocument = !1, this.yaml = {
					explicit: e.defaultYaml.explicit,
					version: "1.2"
				}, this.tags = Object.assign({}, e.defaultTags);
				break;
		}
		return t;
	}
	add(t, n) {
		this.atNextDocument &&= (this.yaml = {
			explicit: e.defaultYaml.explicit,
			version: "1.1"
		}, this.tags = Object.assign({}, e.defaultTags), !1);
		let r = t.trim().split(/[ \t]+/), i = r.shift();
		switch (i) {
			case "%TAG": {
				if (r.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), r.length < 2)) return !1;
				let [e, t] = r;
				return this.tags[e] = t, !0;
			}
			case "%YAML": {
				if (this.yaml.explicit = !0, r.length !== 1) return n(0, "%YAML directive should contain exactly one part"), !1;
				let [e] = r;
				if (e === "1.1" || e === "1.2") return this.yaml.version = e, !0;
				{
					let t = /^\d+\.\d+$/.test(e);
					return n(6, `Unsupported YAML version ${e}`, t), !1;
				}
			}
			default: return n(0, `Unknown directive ${i}`, !0), !1;
		}
	}
	tagName(e, t) {
		if (e === "!") return "!";
		if (e[0] !== "!") return t(`Not a valid tag: ${e}`), null;
		if (e[1] === "<") {
			let n = e.slice(2, -1);
			return n === "!" || n === "!!" ? (t(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (e[e.length - 1] !== ">" && t("Verbatim tags must end with a >"), n);
		}
		let [, n, r] = e.match(/^(.*!)([^!]*)$/s);
		r || t(`The ${e} tag has no suffix`);
		let i = this.tags[n];
		if (i) try {
			return i + decodeURIComponent(r);
		} catch (e) {
			return t(String(e)), null;
		}
		return n === "!" ? e : (t(`Could not resolve tag: ${e}`), null);
	}
	tagString(e) {
		for (let [t, n] of Object.entries(this.tags)) if (e.startsWith(n)) return t + ke(e.substring(n.length));
		return e[0] === "!" ? e : `!<${e}>`;
	}
	toString(e) {
		let t = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], n = Object.entries(this.tags), r;
		if (e && n.length > 0 && L(e.contents)) {
			let t = {};
			xe(e.contents, (e, n) => {
				L(n) && n.tag && (t[n.tag] = !0);
			}), r = Object.keys(t);
		} else r = [];
		for (let [i, a] of n) i === "!!" && a === "tag:yaml.org,2002:" || (!e || r.some((e) => e.startsWith(a))) && t.push(`%TAG ${i} ${a}`);
		return t.join("\n");
	}
};
Ae.defaultYaml = {
	explicit: !1,
	version: "1.2"
}, Ae.defaultTags = { "!!": "tag:yaml.org,2002:" };
//#endregion
//#region node_modules/yaml/browser/dist/doc/anchors.js
function je(e) {
	if (/[\x00-\x19\s,[\]{}]/.test(e)) {
		let t = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
		throw Error(t);
	}
	return !0;
}
function Me(e) {
	let t = /* @__PURE__ */ new Set();
	return xe(e, { Value(e, n) {
		n.anchor && t.add(n.anchor);
	} }), t;
}
function Ne(e, t) {
	for (let n = 1;; ++n) {
		let r = `${e}${n}`;
		if (!t.has(r)) return r;
	}
}
function Pe(e, t) {
	let n = [], r = /* @__PURE__ */ new Map(), i = null;
	return {
		onAnchor: (r) => {
			n.push(r), i ??= Me(e);
			let a = Ne(t, i);
			return i.add(a), a;
		},
		setAnchors: () => {
			for (let e of n) {
				let t = r.get(e);
				if (typeof t == "object" && t.anchor && (F(t.node) || I(t.node))) t.node.anchor = t.anchor;
				else {
					let t = /* @__PURE__ */ Error("Failed to resolve repeated object (this should not happen)");
					throw t.source = e, t;
				}
			}
		},
		sourceObjects: r
	};
}
//#endregion
//#region node_modules/yaml/browser/dist/doc/applyReviver.js
function Fe(e, t, n, r) {
	if (r && typeof r == "object") if (Array.isArray(r)) for (let t = 0, n = r.length; t < n; ++t) {
		let n = r[t], i = Fe(e, r, String(t), n);
		i === void 0 ? delete r[t] : i !== n && (r[t] = i);
	}
	else if (r instanceof Map) for (let t of Array.from(r.keys())) {
		let n = r.get(t), i = Fe(e, r, t, n);
		i === void 0 ? r.delete(t) : i !== n && r.set(t, i);
	}
	else if (r instanceof Set) for (let t of Array.from(r)) {
		let n = Fe(e, r, t, t);
		n === void 0 ? r.delete(t) : n !== t && (r.delete(t), r.add(n));
	}
	else for (let [t, n] of Object.entries(r)) {
		let i = Fe(e, r, t, n);
		i === void 0 ? delete r[t] : i !== n && (r[t] = i);
	}
	return e.call(t, n, r);
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/toJS.js
function z(e, t, n) {
	if (Array.isArray(e)) return e.map((e, t) => z(e, String(t), n));
	if (e && typeof e.toJSON == "function") {
		if (!n || !ve(e)) return e.toJSON(t, n);
		let r = {
			aliasCount: 0,
			count: 1,
			res: void 0
		};
		n.anchors.set(e, r), n.onCreate = (e) => {
			r.res = e, delete n.onCreate;
		};
		let i = e.toJSON(t, n);
		return n.onCreate && n.onCreate(i), i;
	}
	return typeof e == "bigint" && !n?.keep ? Number(e) : e;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Node.js
var Ie = class {
	constructor(e) {
		Object.defineProperty(this, N, { value: e });
	}
	clone() {
		let e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
		return this.range && (e.range = this.range.slice()), e;
	}
	toJS(e, { mapAsMap: t, maxAliasCount: n, onAnchor: r, reviver: i } = {}) {
		if (!he(e)) throw TypeError("A document argument is required");
		let a = {
			anchors: /* @__PURE__ */ new Map(),
			doc: e,
			keep: !0,
			mapAsMap: t === !0,
			mapKeyWarned: !1,
			maxAliasCount: typeof n == "number" ? n : 100
		}, o = z(this, "", a);
		if (typeof r == "function") for (let { count: e, res: t } of a.anchors.values()) r(t, e);
		return typeof i == "function" ? Fe(i, { "": o }, "", o) : o;
	}
}, Le = class extends Ie {
	constructor(e) {
		super(ue), this.source = e, Object.defineProperty(this, "tag", { set() {
			throw Error("Alias nodes cannot have tags");
		} });
	}
	resolve(e, t) {
		if (t?.maxAliasCount === 0) throw ReferenceError("Alias resolution is disabled");
		let n;
		t?.aliasResolveCache ? n = t.aliasResolveCache : (n = [], xe(e, { Node: (e, t) => {
			(me(t) || ve(t)) && n.push(t);
		} }), t && (t.aliasResolveCache = n));
		let r;
		for (let e of n) {
			if (e === this) break;
			e.anchor === this.source && (r = e);
		}
		return r;
	}
	toJSON(e, t) {
		if (!t) return { source: this.source };
		let { anchors: n, doc: r, maxAliasCount: i } = t, a = this.resolve(r, t);
		if (!a) {
			let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
			throw ReferenceError(e);
		}
		let o = n.get(a);
		/* istanbul ignore if */
		if (o ||= (z(a, null, t), n.get(a)), o?.res === void 0) throw ReferenceError("This should not happen: Alias anchor was not resolved?");
		if (i >= 0 && (o.count += 1, o.aliasCount === 0 && (o.aliasCount = Re(r, a, n)), o.count * o.aliasCount > i)) throw ReferenceError("Excessive alias count indicates a resource exhaustion attack");
		return o.res;
	}
	toString(e, t, n) {
		let r = `*${this.source}`;
		if (e) {
			if (je(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
				let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
				throw Error(e);
			}
			if (e.implicitKey) return `${r} `;
		}
		return r;
	}
};
function Re(e, t, n) {
	if (me(t)) {
		let r = t.resolve(e), i = n && r && n.get(r);
		return i ? i.count * i.aliasCount : 0;
	} else if (I(t)) {
		let r = 0;
		for (let i of t.items) {
			let t = Re(e, i, n);
			t > r && (r = t);
		}
		return r;
	} else if (P(t)) {
		let r = Re(e, t.key, n), i = Re(e, t.value, n);
		return Math.max(r, i);
	}
	return 1;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Scalar.js
var ze = (e) => !e || typeof e != "function" && typeof e != "object", B = class extends Ie {
	constructor(e) {
		super(j), this.value = e;
	}
	toJSON(e, t) {
		return t?.keep ? this.value : z(this.value, e, t);
	}
	toString() {
		return String(this.value);
	}
};
B.BLOCK_FOLDED = "BLOCK_FOLDED", B.BLOCK_LITERAL = "BLOCK_LITERAL", B.PLAIN = "PLAIN", B.QUOTE_DOUBLE = "QUOTE_DOUBLE", B.QUOTE_SINGLE = "QUOTE_SINGLE";
//#endregion
//#region node_modules/yaml/browser/dist/doc/createNode.js
var Be = "tag:yaml.org,2002:";
function Ve(e, t, n) {
	if (t) {
		let e = n.filter((e) => e.tag === t), r = e.find((e) => !e.format) ?? e[0];
		if (!r) throw Error(`Tag ${t} not found`);
		return r;
	}
	return n.find((t) => t.identify?.(e) && !t.format);
}
function He(e, t, n) {
	if (he(e) && (e = e.contents), L(e)) return e;
	if (P(e)) {
		let t = n.schema[fe].createNode?.(n.schema, null, n);
		return t.items.push(e), t;
	}
	(e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
	let { aliasDuplicateObjects: r, onAnchor: i, onTagObj: a, schema: o, sourceObjects: s } = n, c;
	if (r && e && typeof e == "object") {
		if (c = s.get(e), c) return c.anchor ??= i(e), new Le(c.anchor);
		c = {
			anchor: null,
			node: null
		}, s.set(e, c);
	}
	t?.startsWith("!!") && (t = Be + t.slice(2));
	let l = Ve(e, t, o.tags);
	if (!l) {
		if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
			let t = new B(e);
			return c && (c.node = t), t;
		}
		l = e instanceof Map ? o[fe] : Symbol.iterator in Object(e) ? o[M] : o[fe];
	}
	a && (a(l), delete n.onTagObj);
	let u = l?.createNode ? l.createNode(n.schema, e, n) : typeof l?.nodeClass?.from == "function" ? l.nodeClass.from(n.schema, e, n) : new B(e);
	return t ? u.tag = t : l.default || (u.tag = l.tag), c && (c.node = u), u;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Collection.js
function Ue(e, t, n) {
	let r = n;
	for (let e = t.length - 1; e >= 0; --e) {
		let n = t[e];
		if (typeof n == "number" && Number.isInteger(n) && n >= 0) {
			let e = [];
			e[n] = r, r = e;
		} else r = /* @__PURE__ */ new Map([[n, r]]);
	}
	return He(r, void 0, {
		aliasDuplicateObjects: !1,
		keepUndefined: !1,
		onAnchor: () => {
			throw Error("This should not happen, please report a bug.");
		},
		schema: e,
		sourceObjects: /* @__PURE__ */ new Map()
	});
}
var We = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done, Ge = class extends Ie {
	constructor(e, t) {
		super(e), Object.defineProperty(this, "schema", {
			value: t,
			configurable: !0,
			enumerable: !1,
			writable: !0
		});
	}
	clone(e) {
		let t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
		return e && (t.schema = e), t.items = t.items.map((t) => L(t) || P(t) ? t.clone(e) : t), this.range && (t.range = this.range.slice()), t;
	}
	addIn(e, t) {
		if (We(e)) this.add(t);
		else {
			let [n, ...r] = e, i = this.get(n, !0);
			if (I(i)) i.addIn(r, t);
			else if (i === void 0 && this.schema) this.set(n, Ue(this.schema, r, t));
			else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
		}
	}
	deleteIn(e) {
		let [t, ...n] = e;
		if (n.length === 0) return this.delete(t);
		let r = this.get(t, !0);
		if (I(r)) return r.deleteIn(n);
		throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`);
	}
	getIn(e, t) {
		let [n, ...r] = e, i = this.get(n, !0);
		return r.length === 0 ? !t && F(i) ? i.value : i : I(i) ? i.getIn(r, t) : void 0;
	}
	hasAllNullValues(e) {
		return this.items.every((t) => {
			if (!P(t)) return !1;
			let n = t.value;
			return n == null || e && F(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
		});
	}
	hasIn(e) {
		let [t, ...n] = e;
		if (n.length === 0) return this.has(t);
		let r = this.get(t, !0);
		return I(r) ? r.hasIn(n) : !1;
	}
	setIn(e, t) {
		let [n, ...r] = e;
		if (r.length === 0) this.set(n, t);
		else {
			let e = this.get(n, !0);
			if (I(e)) e.setIn(r, t);
			else if (e === void 0 && this.schema) this.set(n, Ue(this.schema, r, t));
			else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
		}
	}
}, Ke = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
function qe(e, t) {
	return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
}
var Je = (e, t, n) => e.endsWith("\n") ? qe(n, t) : n.includes("\n") ? "\n" + qe(n, t) : (e.endsWith(" ") ? "" : " ") + n, Ye = "flow", Xe = "block", Ze = "quoted";
function Qe(e, t, n = "flow", { indentAtStart: r, lineWidth: i = 80, minContentWidth: a = 20, onFold: o, onOverflow: s } = {}) {
	if (!i || i < 0) return e;
	i < a && (a = 0);
	let c = Math.max(1 + a, 1 + i - t.length);
	if (e.length <= c) return e;
	let l = [], u = {}, d = i - t.length;
	typeof r == "number" && (r > i - Math.max(2, a) ? l.push(0) : d = i - r);
	let f, p, m = !1, h = -1, g = -1, _ = -1;
	n === "block" && (h = $e(e, h, t.length), h !== -1 && (d = h + c));
	for (let r; r = e[h += 1];) {
		if (n === "quoted" && r === "\\") {
			switch (g = h, e[h + 1]) {
				case "x":
					h += 3;
					break;
				case "u":
					h += 5;
					break;
				case "U":
					h += 9;
					break;
				default: h += 1;
			}
			_ = h;
		}
		if (r === "\n") n === "block" && (h = $e(e, h, t.length)), d = h + t.length + c, f = void 0;
		else {
			if (r === " " && p && p !== " " && p !== "\n" && p !== "	") {
				let t = e[h + 1];
				t && t !== " " && t !== "\n" && t !== "	" && (f = h);
			}
			if (h >= d) if (f) l.push(f), d = f + c, f = void 0;
			else if (n === "quoted") {
				for (; p === " " || p === "	";) p = r, r = e[h += 1], m = !0;
				let t = h > _ + 1 ? h - 2 : g - 1;
				if (u[t]) return e;
				l.push(t), u[t] = !0, d = t + c, f = void 0;
			} else m = !0;
		}
		p = r;
	}
	if (m && s && s(), l.length === 0) return e;
	o && o();
	let v = e.slice(0, l[0]);
	for (let r = 0; r < l.length; ++r) {
		let i = l[r], a = l[r + 1] || e.length;
		i === 0 ? v = `\n${t}${e.slice(0, a)}` : (n === "quoted" && u[i] && (v += `${e[i]}\\`), v += `\n${t}${e.slice(i + 1, a)}`);
	}
	return v;
}
function $e(e, t, n) {
	let r = t, i = t + 1, a = e[i];
	for (; a === " " || a === "	";) if (t < i + n) a = e[++t];
	else {
		do
			a = e[++t];
		while (a && a !== "\n");
		r = t, i = t + 1, a = e[i];
	}
	return r;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyString.js
var et = (e, t) => ({
	indentAtStart: t ? e.indent.length : e.indentAtStart,
	lineWidth: e.options.lineWidth,
	minContentWidth: e.options.minContentWidth
}), tt = (e) => /^(%|---|\.\.\.)/m.test(e);
function nt(e, t, n) {
	if (!t || t < 0) return !1;
	let r = t - n, i = e.length;
	if (i <= r) return !1;
	for (let t = 0, n = 0; t < i; ++t) if (e[t] === "\n") {
		if (t - n > r) return !0;
		if (n = t + 1, i - n <= r) return !1;
	}
	return !0;
}
function rt(e, t) {
	let n = JSON.stringify(e);
	if (t.options.doubleQuotedAsJSON) return n;
	let { implicitKey: r } = t, i = t.options.doubleQuotedMinMultiLineLength, a = t.indent || (tt(e) ? "  " : ""), o = "", s = 0;
	for (let e = 0, t = n[e]; t; t = n[++e]) if (t === " " && n[e + 1] === "\\" && n[e + 2] === "n" && (o += n.slice(s, e) + "\\ ", e += 1, s = e, t = "\\"), t === "\\") switch (n[e + 1]) {
		case "u":
			{
				o += n.slice(s, e);
				let t = n.substr(e + 2, 4);
				switch (t) {
					case "0000":
						o += "\\0";
						break;
					case "0007":
						o += "\\a";
						break;
					case "000b":
						o += "\\v";
						break;
					case "001b":
						o += "\\e";
						break;
					case "0085":
						o += "\\N";
						break;
					case "00a0":
						o += "\\_";
						break;
					case "2028":
						o += "\\L";
						break;
					case "2029":
						o += "\\P";
						break;
					default: t.substr(0, 2) === "00" ? o += "\\x" + t.substr(2) : o += n.substr(e, 6);
				}
				e += 5, s = e + 1;
			}
			break;
		case "n":
			if (r || n[e + 2] === "\"" || n.length < i) e += 1;
			else {
				for (o += n.slice(s, e) + "\n\n"; n[e + 2] === "\\" && n[e + 3] === "n" && n[e + 4] !== "\"";) o += "\n", e += 2;
				o += a, n[e + 2] === " " && (o += "\\"), e += 1, s = e + 1;
			}
			break;
		default: e += 1;
	}
	return o = s ? o + n.slice(s) : n, r ? o : Qe(o, a, Ze, et(t, !1));
}
function it(e, t) {
	if (t.options.singleQuote === !1 || t.implicitKey && e.includes("\n") || /[ \t]\n|\n[ \t]/.test(e)) return rt(e, t);
	let n = t.indent || (tt(e) ? "  " : ""), r = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&\n${n}`) + "'";
	return t.implicitKey ? r : Qe(r, n, Ye, et(t, !1));
}
function at(e, t) {
	let { singleQuote: n } = t.options, r;
	if (n === !1) r = rt;
	else {
		let t = e.includes("\""), i = e.includes("'");
		r = t && !i ? it : i && !t ? rt : n ? it : rt;
	}
	return r(e, t);
}
var ot;
try {
	ot = /* @__PURE__ */ RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
} catch {
	ot = /\n+(?!\n|$)/g;
}
function st({ comment: e, type: t, value: n }, r, i, a) {
	let { blockQuote: o, commentString: s, lineWidth: c } = r.options;
	if (!o || /\n[\t ]+$/.test(n)) return at(n, r);
	let l = r.indent || (r.forceBlockIndent || tt(n) ? "  " : ""), u = o === "literal" ? !0 : o === "folded" || t === B.BLOCK_FOLDED ? !1 : t === B.BLOCK_LITERAL || !nt(n, c, l.length);
	if (!n) return u ? "|\n" : ">\n";
	let d, f;
	for (f = n.length; f > 0; --f) {
		let e = n[f - 1];
		if (e !== "\n" && e !== "	" && e !== " ") break;
	}
	let p = n.substring(f), m = p.indexOf("\n");
	m === -1 ? d = "-" : n === p || m !== p.length - 1 ? (d = "+", a && a()) : d = "", p &&= (n = n.slice(0, -p.length), p[p.length - 1] === "\n" && (p = p.slice(0, -1)), p.replace(ot, `$&${l}`));
	let h = !1, g, _ = -1;
	for (g = 0; g < n.length; ++g) {
		let e = n[g];
		if (e === " ") h = !0;
		else if (e === "\n") _ = g;
		else break;
	}
	let v = n.substring(0, _ < g ? _ + 1 : g);
	v &&= (n = n.substring(v.length), v.replace(/\n+/g, `$&${l}`));
	let y = (h ? l ? "2" : "1" : "") + d;
	if (e && (y += " " + s(e.replace(/ ?[\r\n]+/g, " ")), i && i()), !u) {
		let e = n.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${l}`), i = !1, a = et(r, !0);
		o !== "folded" && t !== B.BLOCK_FOLDED && (a.onOverflow = () => {
			i = !0;
		});
		let s = Qe(`${v}${e}${p}`, l, Xe, a);
		if (!i) return `>${y}\n${l}${s}`;
	}
	return n = n.replace(/\n+/g, `$&${l}`), `|${y}\n${l}${v}${n}${p}`;
}
function ct(e, t, n, r) {
	let { type: i, value: a } = e, { actualString: o, implicitKey: s, indent: c, indentStep: l, inFlow: u } = t;
	if (s && a.includes("\n") || u && /[[\]{},]/.test(a)) return at(a, t);
	if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a)) return s || u || !a.includes("\n") ? at(a, t) : st(e, t, n, r);
	if (!s && !u && i !== B.PLAIN && a.includes("\n")) return st(e, t, n, r);
	if (tt(a)) {
		if (c === "") return t.forceBlockIndent = !0, st(e, t, n, r);
		if (s && c === l) return at(a, t);
	}
	let d = a.replace(/\n+/g, `$&\n${c}`);
	if (o) {
		let e = (e) => e.default && e.tag !== "tag:yaml.org,2002:str" && e.test?.test(d), { compat: n, tags: r } = t.doc.schema;
		if (r.some(e) || n?.some(e)) return at(a, t);
	}
	return s ? d : Qe(d, c, Ye, et(t, !1));
}
function lt(e, t, n, r) {
	let { implicitKey: i, inFlow: a } = t, o = typeof e.value == "string" ? e : Object.assign({}, e, { value: String(e.value) }), { type: s } = e;
	s !== B.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (s = B.QUOTE_DOUBLE);
	let c = (e) => {
		switch (e) {
			case B.BLOCK_FOLDED:
			case B.BLOCK_LITERAL: return i || a ? at(o.value, t) : st(o, t, n, r);
			case B.QUOTE_DOUBLE: return rt(o.value, t);
			case B.QUOTE_SINGLE: return it(o.value, t);
			case B.PLAIN: return ct(o, t, n, r);
			default: return null;
		}
	}, l = c(s);
	if (l === null) {
		let { defaultKeyType: e, defaultStringType: n } = t.options, r = i && e || n;
		if (l = c(r), l === null) throw Error(`Unsupported default string type ${r}`);
	}
	return l;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringify.js
function ut(e, t) {
	let n = Object.assign({
		blockQuote: !0,
		commentString: Ke,
		defaultKeyType: null,
		defaultStringType: "PLAIN",
		directives: null,
		doubleQuotedAsJSON: !1,
		doubleQuotedMinMultiLineLength: 40,
		falseStr: "false",
		flowCollectionPadding: !0,
		indentSeq: !0,
		lineWidth: 80,
		minContentWidth: 20,
		nullStr: "null",
		simpleKeys: !1,
		singleQuote: null,
		trailingComma: !1,
		trueStr: "true",
		verifyAliasOrder: !0
	}, e.schema.toStringOptions, t), r;
	switch (n.collectionStyle) {
		case "block":
			r = !1;
			break;
		case "flow":
			r = !0;
			break;
		default: r = null;
	}
	return {
		anchors: /* @__PURE__ */ new Set(),
		doc: e,
		flowCollectionPadding: n.flowCollectionPadding ? " " : "",
		indent: "",
		indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
		inFlow: r,
		options: n
	};
}
function dt(e, t) {
	if (t.tag) {
		let n = e.filter((e) => e.tag === t.tag);
		if (n.length > 0) return n.find((e) => e.format === t.format) ?? n[0];
	}
	let n, r;
	if (F(t)) {
		r = t.value;
		let i = e.filter((e) => e.identify?.(r));
		if (i.length > 1) {
			let e = i.filter((e) => e.test);
			e.length > 0 && (i = e);
		}
		n = i.find((e) => e.format === t.format) ?? i.find((e) => !e.format);
	} else r = t, n = e.find((e) => e.nodeClass && r instanceof e.nodeClass);
	if (!n) {
		let e = r?.constructor?.name ?? (r === null ? "null" : typeof r);
		throw Error(`Tag not resolved for ${e} value`);
	}
	return n;
}
function ft(e, t, { anchors: n, doc: r }) {
	if (!r.directives) return "";
	let i = [], a = (F(e) || I(e)) && e.anchor;
	a && je(a) && (n.add(a), i.push(`&${a}`));
	let o = e.tag ?? (t.default ? null : t.tag);
	return o && i.push(r.directives.tagString(o)), i.join(" ");
}
function pt(e, t, n, r) {
	if (P(e)) return e.toString(t, n, r);
	if (me(e)) {
		if (t.doc.directives) return e.toString(t);
		if (t.resolvedAliases?.has(e)) throw TypeError("Cannot stringify circular structure without alias nodes");
		t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([e]), e = e.resolve(t.doc);
	}
	let i, a = L(e) ? e : t.doc.createNode(e, { onTagObj: (e) => i = e });
	i ??= dt(t.doc.schema.tags, a);
	let o = ft(a, i, t);
	o.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + o.length + 1);
	let s = typeof i.stringify == "function" ? i.stringify(a, t, n, r) : F(a) ? lt(a, t, n, r) : a.toString(t, n, r);
	return o ? F(a) || s[0] === "{" || s[0] === "[" ? `${o} ${s}` : `${o}\n${t.indent}${s}` : s;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyPair.js
function mt({ key: e, value: t }, n, r, i) {
	let { allNullValues: a, doc: o, indent: s, indentStep: c, options: { commentString: l, indentSeq: u, simpleKeys: d } } = n, f = L(e) && e.comment || null;
	if (d) {
		if (f) throw Error("With simple keys, key nodes cannot have comments");
		if (I(e) || !L(e) && typeof e == "object") throw Error("With simple keys, collection cannot be used as a key value");
	}
	let p = !d && (!e || f && t == null && !n.inFlow || I(e) || (F(e) ? e.type === B.BLOCK_FOLDED || e.type === B.BLOCK_LITERAL : typeof e == "object"));
	n = Object.assign({}, n, {
		allNullValues: !1,
		implicitKey: !p && (d || !a),
		indent: s + c
	});
	let m = !1, h = !1, g = pt(e, n, () => m = !0, () => h = !0);
	if (!p && !n.inFlow && g.length > 1024) {
		if (d) throw Error("With simple keys, single line scalar must not span more than 1024 characters");
		p = !0;
	}
	if (n.inFlow) {
		if (a || t == null) return m && r && r(), g === "" ? "?" : p ? `? ${g}` : g;
	} else if (a && !d || t == null && p) return g = `? ${g}`, f && !m ? g += Je(g, n.indent, l(f)) : h && i && i(), g;
	m && (f = null), p ? (f && (g += Je(g, n.indent, l(f))), g = `? ${g}\n${s}:`) : (g = `${g}:`, f && (g += Je(g, n.indent, l(f))));
	let _, v, y;
	L(t) ? (_ = !!t.spaceBefore, v = t.commentBefore, y = t.comment) : (_ = !1, v = null, y = null, t && typeof t == "object" && (t = o.createNode(t))), n.implicitKey = !1, !p && !f && F(t) && (n.indentAtStart = g.length + 1), h = !1, !u && c.length >= 2 && !n.inFlow && !p && _e(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
	let b = !1, x = pt(t, n, () => b = !0, () => h = !0), S = " ";
	if (f || _ || v) {
		if (S = _ ? "\n" : "", v) {
			let e = l(v);
			S += `\n${qe(e, n.indent)}`;
		}
		x === "" && !n.inFlow ? S === "\n" && y && (S = "\n\n") : S += `\n${n.indent}`;
	} else if (!p && I(t)) {
		let e = x[0], r = x.indexOf("\n"), i = r !== -1, a = n.inFlow ?? t.flow ?? t.items.length === 0;
		if (i || !a) {
			let t = !1;
			if (i && (e === "&" || e === "!")) {
				let n = x.indexOf(" ");
				e === "&" && n !== -1 && n < r && x[n + 1] === "!" && (n = x.indexOf(" ", n + 1)), (n === -1 || r < n) && (t = !0);
			}
			t || (S = `\n${n.indent}`);
		}
	} else (x === "" || x[0] === "\n") && (S = "");
	return g += S + x, n.inFlow ? b && r && r() : y && !b ? g += Je(g, n.indent, l(y)) : h && i && i(), g;
}
//#endregion
//#region node_modules/yaml/browser/dist/log.js
function ht(e, t) {
	(e === "debug" || e === "warn") && console.warn(t);
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/merge.js
var gt = "<<", _t = {
	identify: (e) => e === gt || typeof e == "symbol" && e.description === gt,
	default: "key",
	tag: "tag:yaml.org,2002:merge",
	test: /^<<$/,
	resolve: () => Object.assign(new B(Symbol(gt)), { addToJSMap: yt }),
	stringify: () => gt
}, vt = (e, t) => (_t.identify(t) || F(t) && (!t.type || t.type === B.PLAIN) && _t.identify(t.value)) && e?.doc.schema.tags.some((e) => e.tag === _t.tag && e.default);
function yt(e, t, n) {
	let r = xt(e, n);
	if (_e(r)) for (let n of r.items) bt(e, t, n);
	else if (Array.isArray(r)) for (let n of r) bt(e, t, n);
	else bt(e, t, r);
}
function bt(e, t, n) {
	let r = xt(e, n);
	if (!ge(r)) throw Error("Merge sources must be maps or map aliases");
	let i = r.toJSON(null, e, Map);
	for (let [e, n] of i) t instanceof Map ? t.has(e) || t.set(e, n) : t instanceof Set ? t.add(e) : Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
	return t;
}
function xt(e, t) {
	return e && me(t) ? t.resolve(e.doc, e) : t;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/addPairToJSMap.js
function St(e, t, { key: n, value: r }) {
	if (L(n) && n.addToJSMap) n.addToJSMap(e, t, r);
	else if (vt(e, n)) yt(e, t, r);
	else {
		let i = z(n, "", e);
		if (t instanceof Map) t.set(i, z(r, i, e));
		else if (t instanceof Set) t.add(i);
		else {
			let a = Ct(n, i, e), o = z(r, a, e);
			a in t ? Object.defineProperty(t, a, {
				value: o,
				writable: !0,
				enumerable: !0,
				configurable: !0
			}) : t[a] = o;
		}
	}
	return t;
}
function Ct(e, t, n) {
	if (t === null) return "";
	if (typeof t != "object") return String(t);
	if (L(e) && n?.doc) {
		let t = ut(n.doc, {});
		t.anchors = /* @__PURE__ */ new Set();
		for (let e of n.anchors.keys()) t.anchors.add(e.anchor);
		t.inFlow = !0, t.inStringifyKey = !0;
		let r = e.toString(t);
		if (!n.mapKeyWarned) {
			let e = JSON.stringify(r);
			e.length > 40 && (e = e.substring(0, 36) + "...\""), ht(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
		}
		return r;
	}
	return JSON.stringify(t);
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Pair.js
function wt(e, t, n) {
	return new V(He(e, void 0, n), He(t, void 0, n));
}
var V = class e {
	constructor(e, t = null) {
		Object.defineProperty(this, N, { value: pe }), this.key = e, this.value = t;
	}
	clone(t) {
		let { key: n, value: r } = this;
		return L(n) && (n = n.clone(t)), L(r) && (r = r.clone(t)), new e(n, r);
	}
	toJSON(e, t) {
		return St(t, t?.mapAsMap ? /* @__PURE__ */ new Map() : {}, this);
	}
	toString(e, t, n) {
		return e?.doc ? mt(this, e, t, n) : JSON.stringify(this);
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyCollection.js
function Tt(e, t, n) {
	return (t.inFlow ?? e.flow ? Dt : Et)(e, t, n);
}
function Et({ comment: e, items: t }, n, { blockItemPrefix: r, flowChars: i, itemIndent: a, onChompKeep: o, onComment: s }) {
	let { indent: c, options: { commentString: l } } = n, u = Object.assign({}, n, {
		indent: a,
		type: null
	}), d = !1, f = [];
	for (let e = 0; e < t.length; ++e) {
		let i = t[e], o = null;
		if (L(i)) !d && i.spaceBefore && f.push(""), Ot(n, f, i.commentBefore, d), i.comment && (o = i.comment);
		else if (P(i)) {
			let e = L(i.key) ? i.key : null;
			e && (!d && e.spaceBefore && f.push(""), Ot(n, f, e.commentBefore, d));
		}
		d = !1;
		let s = pt(i, u, () => o = null, () => d = !0);
		o && (s += Je(s, a, l(o))), d && o && (d = !1), f.push(r + s);
	}
	let p;
	if (f.length === 0) p = i.start + i.end;
	else {
		p = f[0];
		for (let e = 1; e < f.length; ++e) {
			let t = f[e];
			p += t ? `\n${c}${t}` : "\n";
		}
	}
	return e ? (p += "\n" + qe(l(e), c), s && s()) : d && o && o(), p;
}
function Dt({ items: e }, t, { flowChars: n, itemIndent: r }) {
	let { indent: i, indentStep: a, flowCollectionPadding: o, options: { commentString: s } } = t;
	r += a;
	let c = Object.assign({}, t, {
		indent: r,
		inFlow: !0,
		type: null
	}), l = !1, u = 0, d = [];
	for (let n = 0; n < e.length; ++n) {
		let i = e[n], a = null;
		if (L(i)) i.spaceBefore && d.push(""), Ot(t, d, i.commentBefore, !1), i.comment && (a = i.comment);
		else if (P(i)) {
			let e = L(i.key) ? i.key : null;
			e && (e.spaceBefore && d.push(""), Ot(t, d, e.commentBefore, !1), e.comment && (l = !0));
			let n = L(i.value) ? i.value : null;
			n ? (n.comment && (a = n.comment), n.commentBefore && (l = !0)) : i.value == null && e?.comment && (a = e.comment);
		}
		a && (l = !0);
		let o = pt(i, c, () => a = null);
		l ||= d.length > u || o.includes("\n"), n < e.length - 1 ? o += "," : t.options.trailingComma && (t.options.lineWidth > 0 && (l ||= d.reduce((e, t) => e + t.length + 2, 2) + (o.length + 2) > t.options.lineWidth), l && (o += ",")), a && (o += Je(o, r, s(a))), d.push(o), u = d.length;
	}
	let { start: f, end: p } = n;
	if (d.length === 0) return f + p;
	if (!l) {
		let e = d.reduce((e, t) => e + t.length + 2, 2);
		l = t.options.lineWidth > 0 && e > t.options.lineWidth;
	}
	if (l) {
		let e = f;
		for (let t of d) e += t ? `\n${a}${i}${t}` : "\n";
		return `${e}\n${i}${p}`;
	} else return `${f}${o}${d.join(" ")}${o}${p}`;
}
function Ot({ indent: e, options: { commentString: t } }, n, r, i) {
	if (r && i && (r = r.replace(/^\n+/, "")), r) {
		let i = qe(t(r), e);
		n.push(i.trimStart());
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/YAMLMap.js
function kt(e, t) {
	let n = F(t) ? t.value : t;
	for (let r of e) if (P(r) && (r.key === t || r.key === n || F(r.key) && r.key.value === n)) return r;
}
var H = class extends Ge {
	static get tagName() {
		return "tag:yaml.org,2002:map";
	}
	constructor(e) {
		super(fe, e), this.items = [];
	}
	static from(e, t, n) {
		let { keepUndefined: r, replacer: i } = n, a = new this(e), o = (e, o) => {
			if (typeof i == "function") o = i.call(t, e, o);
			else if (Array.isArray(i) && !i.includes(e)) return;
			(o !== void 0 || r) && a.items.push(wt(e, o, n));
		};
		if (t instanceof Map) for (let [e, n] of t) o(e, n);
		else if (t && typeof t == "object") for (let e of Object.keys(t)) o(e, t[e]);
		return typeof e.sortMapEntries == "function" && a.items.sort(e.sortMapEntries), a;
	}
	add(e, t) {
		let n;
		n = P(e) ? e : !e || typeof e != "object" || !("key" in e) ? new V(e, e?.value) : new V(e.key, e.value);
		let r = kt(this.items, n.key), i = this.schema?.sortMapEntries;
		if (r) {
			if (!t) throw Error(`Key ${n.key} already set`);
			F(r.value) && ze(n.value) ? r.value.value = n.value : r.value = n.value;
		} else if (i) {
			let e = this.items.findIndex((e) => i(n, e) < 0);
			e === -1 ? this.items.push(n) : this.items.splice(e, 0, n);
		} else this.items.push(n);
	}
	delete(e) {
		let t = kt(this.items, e);
		return t ? this.items.splice(this.items.indexOf(t), 1).length > 0 : !1;
	}
	get(e, t) {
		let n = kt(this.items, e)?.value;
		return (!t && F(n) ? n.value : n) ?? void 0;
	}
	has(e) {
		return !!kt(this.items, e);
	}
	set(e, t) {
		this.add(new V(e, t), !0);
	}
	toJSON(e, t, n) {
		let r = n ? new n() : t?.mapAsMap ? /* @__PURE__ */ new Map() : {};
		t?.onCreate && t.onCreate(r);
		for (let e of this.items) St(t, r, e);
		return r;
	}
	toString(e, t, n) {
		if (!e) return JSON.stringify(this);
		for (let e of this.items) if (!P(e)) throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);
		return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, { allNullValues: !0 })), Tt(this, e, {
			blockItemPrefix: "",
			flowChars: {
				start: "{",
				end: "}"
			},
			itemIndent: e.indent || "",
			onChompKeep: n,
			onComment: t
		});
	}
}, At = {
	collection: "map",
	default: !0,
	nodeClass: H,
	tag: "tag:yaml.org,2002:map",
	resolve(e, t) {
		return ge(e) || t("Expected a mapping for this tag"), e;
	},
	createNode: (e, t, n) => H.from(e, t, n)
}, jt = class extends Ge {
	static get tagName() {
		return "tag:yaml.org,2002:seq";
	}
	constructor(e) {
		super(M, e), this.items = [];
	}
	add(e) {
		this.items.push(e);
	}
	delete(e) {
		let t = Mt(e);
		return typeof t == "number" && this.items.splice(t, 1).length > 0;
	}
	get(e, t) {
		let n = Mt(e);
		if (typeof n != "number") return;
		let r = this.items[n];
		return !t && F(r) ? r.value : r;
	}
	has(e) {
		let t = Mt(e);
		return typeof t == "number" && t < this.items.length;
	}
	set(e, t) {
		let n = Mt(e);
		if (typeof n != "number") throw Error(`Expected a valid index, not ${e}.`);
		let r = this.items[n];
		F(r) && ze(t) ? r.value = t : this.items[n] = t;
	}
	toJSON(e, t) {
		let n = [];
		t?.onCreate && t.onCreate(n);
		let r = 0;
		for (let e of this.items) n.push(z(e, String(r++), t));
		return n;
	}
	toString(e, t, n) {
		return e ? Tt(this, e, {
			blockItemPrefix: "- ",
			flowChars: {
				start: "[",
				end: "]"
			},
			itemIndent: (e.indent || "") + "  ",
			onChompKeep: n,
			onComment: t
		}) : JSON.stringify(this);
	}
	static from(e, t, n) {
		let { replacer: r } = n, i = new this(e);
		if (t && Symbol.iterator in Object(t)) {
			let e = 0;
			for (let a of t) {
				if (typeof r == "function") {
					let n = t instanceof Set ? a : String(e++);
					a = r.call(t, n, a);
				}
				i.items.push(He(a, void 0, n));
			}
		}
		return i;
	}
};
function Mt(e) {
	let t = F(e) ? e.value : e;
	return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/common/seq.js
var Nt = {
	collection: "seq",
	default: !0,
	nodeClass: jt,
	tag: "tag:yaml.org,2002:seq",
	resolve(e, t) {
		return _e(e) || t("Expected a sequence for this tag"), e;
	},
	createNode: (e, t, n) => jt.from(e, t, n)
}, Pt = {
	identify: (e) => typeof e == "string",
	default: !0,
	tag: "tag:yaml.org,2002:str",
	resolve: (e) => e,
	stringify(e, t, n, r) {
		return t = Object.assign({ actualString: !0 }, t), lt(e, t, n, r);
	}
}, Ft = {
	identify: (e) => e == null,
	createNode: () => new B(null),
	default: !0,
	tag: "tag:yaml.org,2002:null",
	test: /^(?:~|[Nn]ull|NULL)?$/,
	resolve: () => new B(null),
	stringify: ({ source: e }, t) => typeof e == "string" && Ft.test.test(e) ? e : t.options.nullStr
}, It = {
	identify: (e) => typeof e == "boolean",
	default: !0,
	tag: "tag:yaml.org,2002:bool",
	test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
	resolve: (e) => new B(e[0] === "t" || e[0] === "T"),
	stringify({ source: e, value: t }, n) {
		return e && It.test.test(e) && t === (e[0] === "t" || e[0] === "T") ? e : t ? n.options.trueStr : n.options.falseStr;
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyNumber.js
function Lt({ format: e, minFractionDigits: t, tag: n, value: r }) {
	if (typeof r == "bigint") return String(r);
	let i = typeof r == "number" ? r : Number(r);
	if (!isFinite(i)) return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
	let a = Object.is(r, -0) ? "-0" : JSON.stringify(r);
	if (!e && t && (!n || n === "tag:yaml.org,2002:float") && /^-?\d/.test(a) && !a.includes("e")) {
		let e = a.indexOf(".");
		e < 0 && (e = a.length, a += ".");
		let n = t - (a.length - e - 1);
		for (; n-- > 0;) a += "0";
	}
	return a;
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/core/float.js
var Rt = {
	identify: (e) => typeof e == "number",
	default: !0,
	tag: "tag:yaml.org,2002:float",
	test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
	resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? -Infinity : Infinity,
	stringify: Lt
}, zt = {
	identify: (e) => typeof e == "number",
	default: !0,
	tag: "tag:yaml.org,2002:float",
	format: "EXP",
	test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
	resolve: (e) => parseFloat(e),
	stringify(e) {
		let t = Number(e.value);
		return isFinite(t) ? t.toExponential() : Lt(e);
	}
}, Bt = {
	identify: (e) => typeof e == "number",
	default: !0,
	tag: "tag:yaml.org,2002:float",
	test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
	resolve(e) {
		let t = new B(parseFloat(e)), n = e.indexOf(".");
		return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
	},
	stringify: Lt
}, Vt = (e) => typeof e == "bigint" || Number.isInteger(e), Ht = (e, t, n, { intAsBigInt: r }) => r ? BigInt(e) : parseInt(e.substring(t), n);
function Ut(e, t, n) {
	let { value: r } = e;
	return Vt(r) && r >= 0 ? n + r.toString(t) : Lt(e);
}
var Wt = {
	identify: (e) => Vt(e) && e >= 0,
	default: !0,
	tag: "tag:yaml.org,2002:int",
	format: "OCT",
	test: /^0o[0-7]+$/,
	resolve: (e, t, n) => Ht(e, 2, 8, n),
	stringify: (e) => Ut(e, 8, "0o")
}, Gt = {
	identify: Vt,
	default: !0,
	tag: "tag:yaml.org,2002:int",
	test: /^[-+]?[0-9]+$/,
	resolve: (e, t, n) => Ht(e, 0, 10, n),
	stringify: Lt
}, Kt = {
	identify: (e) => Vt(e) && e >= 0,
	default: !0,
	tag: "tag:yaml.org,2002:int",
	format: "HEX",
	test: /^0x[0-9a-fA-F]+$/,
	resolve: (e, t, n) => Ht(e, 2, 16, n),
	stringify: (e) => Ut(e, 16, "0x")
}, qt = [
	At,
	Nt,
	Pt,
	Ft,
	It,
	Wt,
	Gt,
	Kt,
	Rt,
	zt,
	Bt
];
//#endregion
//#region node_modules/yaml/browser/dist/schema/json/schema.js
function Jt(e) {
	return typeof e == "bigint" || Number.isInteger(e);
}
var Yt = ({ value: e }) => JSON.stringify(e), Xt = [
	{
		identify: (e) => typeof e == "string",
		default: !0,
		tag: "tag:yaml.org,2002:str",
		resolve: (e) => e,
		stringify: Yt
	},
	{
		identify: (e) => e == null,
		createNode: () => new B(null),
		default: !0,
		tag: "tag:yaml.org,2002:null",
		test: /^null$/,
		resolve: () => null,
		stringify: Yt
	},
	{
		identify: (e) => typeof e == "boolean",
		default: !0,
		tag: "tag:yaml.org,2002:bool",
		test: /^true$|^false$/,
		resolve: (e) => e === "true",
		stringify: Yt
	},
	{
		identify: Jt,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		test: /^-?(?:0|[1-9][0-9]*)$/,
		resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
		stringify: ({ value: e }) => Jt(e) ? e.toString() : JSON.stringify(e)
	},
	{
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
		resolve: (e) => parseFloat(e),
		stringify: Yt
	}
], Zt = [At, Nt].concat(Xt, {
	default: !0,
	tag: "",
	test: /^/,
	resolve(e, t) {
		return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
	}
}), Qt = {
	identify: (e) => e instanceof Uint8Array,
	default: !1,
	tag: "tag:yaml.org,2002:binary",
	resolve(e, t) {
		if (typeof atob == "function") {
			let t = atob(e.replace(/[\n\r]/g, "")), n = new Uint8Array(t.length);
			for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
			return n;
		} else return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
	},
	stringify({ comment: e, type: t, value: n }, r, i, a) {
		if (!n) return "";
		let o = n, s;
		if (typeof btoa == "function") {
			let e = "";
			for (let t = 0; t < o.length; ++t) e += String.fromCharCode(o[t]);
			s = btoa(e);
		} else throw Error("This environment does not support writing binary tags; either Buffer or btoa is required");
		if (t ??= B.BLOCK_LITERAL, t !== B.QUOTE_DOUBLE) {
			let e = Math.max(r.options.lineWidth - r.indent.length, r.options.minContentWidth), n = Math.ceil(s.length / e), i = Array(n);
			for (let t = 0, r = 0; t < n; ++t, r += e) i[t] = s.substr(r, e);
			s = i.join(t === B.BLOCK_LITERAL ? "\n" : " ");
		}
		return lt({
			comment: e,
			type: t,
			value: s
		}, r, i, a);
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/pairs.js
function $t(e, t) {
	if (_e(e)) for (let n = 0; n < e.items.length; ++n) {
		let r = e.items[n];
		if (!P(r)) {
			if (ge(r)) {
				r.items.length > 1 && t("Each pair must have its own sequence indicator");
				let e = r.items[0] || new V(new B(null));
				if (r.commentBefore && (e.key.commentBefore = e.key.commentBefore ? `${r.commentBefore}\n${e.key.commentBefore}` : r.commentBefore), r.comment) {
					let t = e.value ?? e.key;
					t.comment = t.comment ? `${r.comment}\n${t.comment}` : r.comment;
				}
				r = e;
			}
			e.items[n] = P(r) ? r : new V(r);
		}
	}
	else t("Expected a sequence for this tag");
	return e;
}
function en(e, t, n) {
	let { replacer: r } = n, i = new jt(e);
	i.tag = "tag:yaml.org,2002:pairs";
	let a = 0;
	if (t && Symbol.iterator in Object(t)) for (let e of t) {
		typeof r == "function" && (e = r.call(t, String(a++), e));
		let o, s;
		if (Array.isArray(e)) if (e.length === 2) o = e[0], s = e[1];
		else throw TypeError(`Expected [key, value] tuple: ${e}`);
		else if (e && e instanceof Object) {
			let t = Object.keys(e);
			if (t.length === 1) o = t[0], s = e[o];
			else throw TypeError(`Expected tuple with one key, not ${t.length} keys`);
		} else o = e;
		i.items.push(wt(o, s, n));
	}
	return i;
}
var tn = {
	collection: "seq",
	default: !1,
	tag: "tag:yaml.org,2002:pairs",
	resolve: $t,
	createNode: en
}, nn = class e extends jt {
	constructor() {
		super(), this.add = H.prototype.add.bind(this), this.delete = H.prototype.delete.bind(this), this.get = H.prototype.get.bind(this), this.has = H.prototype.has.bind(this), this.set = H.prototype.set.bind(this), this.tag = e.tag;
	}
	toJSON(e, t) {
		if (!t) return super.toJSON(e);
		let n = /* @__PURE__ */ new Map();
		t?.onCreate && t.onCreate(n);
		for (let e of this.items) {
			let r, i;
			if (P(e) ? (r = z(e.key, "", t), i = z(e.value, r, t)) : r = z(e, "", t), n.has(r)) throw Error("Ordered maps must not include duplicate keys");
			n.set(r, i);
		}
		return n;
	}
	static from(e, t, n) {
		let r = en(e, t, n), i = new this();
		return i.items = r.items, i;
	}
};
nn.tag = "tag:yaml.org,2002:omap";
var rn = {
	collection: "seq",
	identify: (e) => e instanceof Map,
	nodeClass: nn,
	default: !1,
	tag: "tag:yaml.org,2002:omap",
	resolve(e, t) {
		let n = $t(e, t), r = [];
		for (let { key: e } of n.items) F(e) && (r.includes(e.value) ? t(`Ordered maps must not include duplicate keys: ${e.value}`) : r.push(e.value));
		return Object.assign(new nn(), n);
	},
	createNode: (e, t, n) => nn.from(e, t, n)
};
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/bool.js
function an({ value: e, source: t }, n) {
	return t && (e ? on : sn).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
}
var on = {
	identify: (e) => e === !0,
	default: !0,
	tag: "tag:yaml.org,2002:bool",
	test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
	resolve: () => new B(!0),
	stringify: an
}, sn = {
	identify: (e) => e === !1,
	default: !0,
	tag: "tag:yaml.org,2002:bool",
	test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
	resolve: () => new B(!1),
	stringify: an
}, cn = {
	identify: (e) => typeof e == "number",
	default: !0,
	tag: "tag:yaml.org,2002:float",
	test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
	resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? -Infinity : Infinity,
	stringify: Lt
}, ln = {
	identify: (e) => typeof e == "number",
	default: !0,
	tag: "tag:yaml.org,2002:float",
	format: "EXP",
	test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
	resolve: (e) => parseFloat(e.replace(/_/g, "")),
	stringify(e) {
		let t = Number(e.value);
		return isFinite(t) ? t.toExponential() : Lt(e);
	}
}, un = {
	identify: (e) => typeof e == "number",
	default: !0,
	tag: "tag:yaml.org,2002:float",
	test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
	resolve(e) {
		let t = new B(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
		if (n !== -1) {
			let r = e.substring(n + 1).replace(/_/g, "");
			r[r.length - 1] === "0" && (t.minFractionDigits = r.length);
		}
		return t;
	},
	stringify: Lt
}, dn = (e) => typeof e == "bigint" || Number.isInteger(e);
function fn(e, t, n, { intAsBigInt: r }) {
	let i = e[0];
	if ((i === "-" || i === "+") && (t += 1), e = e.substring(t).replace(/_/g, ""), r) {
		switch (n) {
			case 2:
				e = `0b${e}`;
				break;
			case 8:
				e = `0o${e}`;
				break;
			case 16:
				e = `0x${e}`;
				break;
		}
		let t = BigInt(e);
		return i === "-" ? BigInt(-1) * t : t;
	}
	let a = parseInt(e, n);
	return i === "-" ? -1 * a : a;
}
function pn(e, t, n) {
	let { value: r } = e;
	if (dn(r)) {
		let e = r.toString(t);
		return r < 0 ? "-" + n + e.substr(1) : n + e;
	}
	return Lt(e);
}
var mn = {
	identify: dn,
	default: !0,
	tag: "tag:yaml.org,2002:int",
	format: "BIN",
	test: /^[-+]?0b[0-1_]+$/,
	resolve: (e, t, n) => fn(e, 2, 2, n),
	stringify: (e) => pn(e, 2, "0b")
}, hn = {
	identify: dn,
	default: !0,
	tag: "tag:yaml.org,2002:int",
	format: "OCT",
	test: /^[-+]?0[0-7_]+$/,
	resolve: (e, t, n) => fn(e, 1, 8, n),
	stringify: (e) => pn(e, 8, "0")
}, gn = {
	identify: dn,
	default: !0,
	tag: "tag:yaml.org,2002:int",
	test: /^[-+]?[0-9][0-9_]*$/,
	resolve: (e, t, n) => fn(e, 0, 10, n),
	stringify: Lt
}, _n = {
	identify: dn,
	default: !0,
	tag: "tag:yaml.org,2002:int",
	format: "HEX",
	test: /^[-+]?0x[0-9a-fA-F_]+$/,
	resolve: (e, t, n) => fn(e, 2, 16, n),
	stringify: (e) => pn(e, 16, "0x")
}, vn = class e extends H {
	constructor(t) {
		super(t), this.tag = e.tag;
	}
	add(e) {
		let t;
		t = P(e) ? e : e && typeof e == "object" && "key" in e && "value" in e && e.value === null ? new V(e.key, null) : new V(e, null), kt(this.items, t.key) || this.items.push(t);
	}
	get(e, t) {
		let n = kt(this.items, e);
		return !t && P(n) ? F(n.key) ? n.key.value : n.key : n;
	}
	set(e, t) {
		if (typeof t != "boolean") throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);
		let n = kt(this.items, e);
		n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new V(e));
	}
	toJSON(e, t) {
		return super.toJSON(e, t, Set);
	}
	toString(e, t, n) {
		if (!e) return JSON.stringify(this);
		if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, { allNullValues: !0 }), t, n);
		throw Error("Set items must all have null values");
	}
	static from(e, t, n) {
		let { replacer: r } = n, i = new this(e);
		if (t && Symbol.iterator in Object(t)) for (let e of t) typeof r == "function" && (e = r.call(t, e, e)), i.items.push(wt(e, null, n));
		return i;
	}
};
vn.tag = "tag:yaml.org,2002:set";
var yn = {
	collection: "map",
	identify: (e) => e instanceof Set,
	nodeClass: vn,
	default: !1,
	tag: "tag:yaml.org,2002:set",
	createNode: (e, t, n) => vn.from(e, t, n),
	resolve(e, t) {
		if (ge(e)) {
			if (e.hasAllNullValues(!0)) return Object.assign(new vn(), e);
			t("Set items must all have null values");
		} else t("Expected a mapping for this tag");
		return e;
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/timestamp.js
function bn(e, t) {
	let n = e[0], r = n === "-" || n === "+" ? e.substring(1) : e, i = (e) => t ? BigInt(e) : Number(e), a = r.replace(/_/g, "").split(":").reduce((e, t) => e * i(60) + i(t), i(0));
	return n === "-" ? i(-1) * a : a;
}
function xn(e) {
	let { value: t } = e, n = (e) => e;
	if (typeof t == "bigint") n = (e) => BigInt(e);
	else if (isNaN(t) || !isFinite(t)) return Lt(e);
	let r = "";
	t < 0 && (r = "-", t *= n(-1));
	let i = n(60), a = [t % i];
	return t < 60 ? a.unshift(0) : (t = (t - a[0]) / i, a.unshift(t % i), t >= 60 && (t = (t - a[0]) / i, a.unshift(t))), r + a.map((e) => String(e).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
var Sn = {
	identify: (e) => typeof e == "bigint" || Number.isInteger(e),
	default: !0,
	tag: "tag:yaml.org,2002:int",
	format: "TIME",
	test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
	resolve: (e, t, { intAsBigInt: n }) => bn(e, n),
	stringify: xn
}, Cn = {
	identify: (e) => typeof e == "number",
	default: !0,
	tag: "tag:yaml.org,2002:float",
	format: "TIME",
	test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
	resolve: (e) => bn(e, !1),
	stringify: xn
}, wn = {
	identify: (e) => e instanceof Date,
	default: !0,
	tag: "tag:yaml.org,2002:timestamp",
	test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
	resolve(e) {
		let t = e.match(wn.test);
		if (!t) throw Error("!!timestamp expects a date, starting with yyyy-mm-dd");
		let [, n, r, i, a, o, s] = t.map(Number), c = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0, l = Date.UTC(n, r - 1, i, a || 0, o || 0, s || 0, c), u = t[8];
		if (u && u !== "Z") {
			let e = bn(u, !1);
			Math.abs(e) < 30 && (e *= 60), l -= 6e4 * e;
		}
		return new Date(l);
	},
	stringify: ({ value: e }) => e?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
}, Tn = [
	At,
	Nt,
	Pt,
	Ft,
	on,
	sn,
	mn,
	hn,
	gn,
	_n,
	cn,
	ln,
	un,
	Qt,
	_t,
	rn,
	tn,
	yn,
	Sn,
	Cn,
	wn
], En = /* @__PURE__ */ new Map([
	["core", qt],
	["failsafe", [
		At,
		Nt,
		Pt
	]],
	["json", Zt],
	["yaml11", Tn],
	["yaml-1.1", Tn]
]), Dn = {
	binary: Qt,
	bool: It,
	float: Bt,
	floatExp: zt,
	floatNaN: Rt,
	floatTime: Cn,
	int: Gt,
	intHex: Kt,
	intOct: Wt,
	intTime: Sn,
	map: At,
	merge: _t,
	null: Ft,
	omap: rn,
	pairs: tn,
	seq: Nt,
	set: yn,
	timestamp: wn
}, On = {
	"tag:yaml.org,2002:binary": Qt,
	"tag:yaml.org,2002:merge": _t,
	"tag:yaml.org,2002:omap": rn,
	"tag:yaml.org,2002:pairs": tn,
	"tag:yaml.org,2002:set": yn,
	"tag:yaml.org,2002:timestamp": wn
};
function kn(e, t, n) {
	let r = En.get(t);
	if (r && !e) return n && !r.includes(_t) ? r.concat(_t) : r.slice();
	let i = r;
	if (!i) if (Array.isArray(e)) i = [];
	else {
		let e = Array.from(En.keys()).filter((e) => e !== "yaml11").map((e) => JSON.stringify(e)).join(", ");
		throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`);
	}
	if (Array.isArray(e)) for (let t of e) i = i.concat(t);
	else typeof e == "function" && (i = e(i.slice()));
	return n && (i = i.concat(_t)), i.reduce((e, t) => {
		let n = typeof t == "string" ? Dn[t] : t;
		if (!n) {
			let e = JSON.stringify(t), n = Object.keys(Dn).map((e) => JSON.stringify(e)).join(", ");
			throw Error(`Unknown custom tag ${e}; use one of ${n}`);
		}
		return e.includes(n) || e.push(n), e;
	}, []);
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/Schema.js
var An = (e, t) => e.key < t.key ? -1 : +(e.key > t.key), jn = class e {
	constructor({ compat: e, customTags: t, merge: n, resolveKnownTags: r, schema: i, sortMapEntries: a, toStringDefaults: o }) {
		this.compat = Array.isArray(e) ? kn(e, "compat") : e ? kn(null, e) : null, this.name = typeof i == "string" && i || "core", this.knownTags = r ? On : {}, this.tags = kn(t, this.name, n), this.toStringOptions = o ?? null, Object.defineProperty(this, fe, { value: At }), Object.defineProperty(this, j, { value: Pt }), Object.defineProperty(this, M, { value: Nt }), this.sortMapEntries = typeof a == "function" ? a : a === !0 ? An : null;
	}
	clone() {
		let t = Object.create(e.prototype, Object.getOwnPropertyDescriptors(this));
		return t.tags = this.tags.slice(), t;
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyDocument.js
function Mn(e, t) {
	let n = [], r = t.directives === !0;
	if (t.directives !== !1 && e.directives) {
		let t = e.directives.toString(e);
		t ? (n.push(t), r = !0) : e.directives.docStart && (r = !0);
	}
	r && n.push("---");
	let i = ut(e, t), { commentString: a } = i.options;
	if (e.commentBefore) {
		n.length !== 1 && n.unshift("");
		let t = a(e.commentBefore);
		n.unshift(qe(t, ""));
	}
	let o = !1, s = null;
	if (e.contents) {
		if (L(e.contents)) {
			if (e.contents.spaceBefore && r && n.push(""), e.contents.commentBefore) {
				let t = a(e.contents.commentBefore);
				n.push(qe(t, ""));
			}
			i.forceBlockIndent = !!e.comment, s = e.contents.comment;
		}
		let t = s ? void 0 : () => o = !0, c = pt(e.contents, i, () => s = null, t);
		s && (c += Je(c, "", a(s))), (c[0] === "|" || c[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${c}` : n.push(c);
	} else n.push(pt(e.contents, i));
	if (e.directives?.docEnd) if (e.comment) {
		let t = a(e.comment);
		t.includes("\n") ? (n.push("..."), n.push(qe(t, ""))) : n.push(`... ${t}`);
	} else n.push("...");
	else {
		let t = e.comment;
		t && o && (t = t.replace(/^\n+/, "")), t && ((!o || s) && n[n.length - 1] !== "" && n.push(""), n.push(qe(a(t), "")));
	}
	return n.join("\n") + "\n";
}
//#endregion
//#region node_modules/yaml/browser/dist/doc/Document.js
var Nn = class e {
	constructor(e, t, n) {
		this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, N, { value: de });
		let r = null;
		typeof t == "function" || Array.isArray(t) ? r = t : n === void 0 && t && (n = t, t = void 0);
		let i = Object.assign({
			intAsBigInt: !1,
			keepSourceTokens: !1,
			logLevel: "warn",
			prettyErrors: !0,
			strict: !0,
			stringKeys: !1,
			uniqueKeys: !0,
			version: "1.2"
		}, n);
		this.options = i;
		let { version: a } = i;
		n?._directives ? (this.directives = n._directives.atDocument(), this.directives.yaml.explicit && (a = this.directives.yaml.version)) : this.directives = new Ae({ version: a }), this.setSchema(a, n), this.contents = e === void 0 ? null : this.createNode(e, r, n);
	}
	clone() {
		let t = Object.create(e.prototype, { [N]: { value: de } });
		return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = L(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
	}
	add(e) {
		Pn(this.contents) && this.contents.add(e);
	}
	addIn(e, t) {
		Pn(this.contents) && this.contents.addIn(e, t);
	}
	createAlias(e, t) {
		if (!e.anchor) {
			let n = Me(this);
			e.anchor = !t || n.has(t) ? Ne(t || "a", n) : t;
		}
		return new Le(e.anchor);
	}
	createNode(e, t, n) {
		let r;
		if (typeof t == "function") e = t.call({ "": e }, "", e), r = t;
		else if (Array.isArray(t)) {
			let e = t.filter((e) => typeof e == "number" || e instanceof String || e instanceof Number).map(String);
			e.length > 0 && (t = t.concat(e)), r = t;
		} else n === void 0 && t && (n = t, t = void 0);
		let { aliasDuplicateObjects: i, anchorPrefix: a, flow: o, keepUndefined: s, onTagObj: c, tag: l } = n ?? {}, { onAnchor: u, setAnchors: d, sourceObjects: f } = Pe(this, a || "a"), p = {
			aliasDuplicateObjects: i ?? !0,
			keepUndefined: s ?? !1,
			onAnchor: u,
			onTagObj: c,
			replacer: r,
			schema: this.schema,
			sourceObjects: f
		}, m = He(e, l, p);
		return o && I(m) && (m.flow = !0), d(), m;
	}
	createPair(e, t, n = {}) {
		return new V(this.createNode(e, null, n), this.createNode(t, null, n));
	}
	delete(e) {
		return Pn(this.contents) ? this.contents.delete(e) : !1;
	}
	deleteIn(e) {
		return We(e) ? this.contents == null ? !1 : (this.contents = null, !0) : Pn(this.contents) ? this.contents.deleteIn(e) : !1;
	}
	get(e, t) {
		return I(this.contents) ? this.contents.get(e, t) : void 0;
	}
	getIn(e, t) {
		return We(e) ? !t && F(this.contents) ? this.contents.value : this.contents : I(this.contents) ? this.contents.getIn(e, t) : void 0;
	}
	has(e) {
		return I(this.contents) ? this.contents.has(e) : !1;
	}
	hasIn(e) {
		return We(e) ? this.contents !== void 0 : I(this.contents) ? this.contents.hasIn(e) : !1;
	}
	set(e, t) {
		this.contents == null ? this.contents = Ue(this.schema, [e], t) : Pn(this.contents) && this.contents.set(e, t);
	}
	setIn(e, t) {
		We(e) ? this.contents = t : this.contents == null ? this.contents = Ue(this.schema, Array.from(e), t) : Pn(this.contents) && this.contents.setIn(e, t);
	}
	setSchema(e, t = {}) {
		typeof e == "number" && (e = String(e));
		let n;
		switch (e) {
			case "1.1":
				this.directives ? this.directives.yaml.version = "1.1" : this.directives = new Ae({ version: "1.1" }), n = {
					resolveKnownTags: !1,
					schema: "yaml-1.1"
				};
				break;
			case "1.2":
			case "next":
				this.directives ? this.directives.yaml.version = e : this.directives = new Ae({ version: e }), n = {
					resolveKnownTags: !0,
					schema: "core"
				};
				break;
			case null:
				this.directives && delete this.directives, n = null;
				break;
			default: {
				let t = JSON.stringify(e);
				throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`);
			}
		}
		if (t.schema instanceof Object) this.schema = t.schema;
		else if (n) this.schema = new jn(Object.assign(n, t));
		else throw Error("With a null YAML version, the { schema: Schema } option is required");
	}
	toJS({ json: e, jsonArg: t, mapAsMap: n, maxAliasCount: r, onAnchor: i, reviver: a } = {}) {
		let o = {
			anchors: /* @__PURE__ */ new Map(),
			doc: this,
			keep: !e,
			mapAsMap: n === !0,
			mapKeyWarned: !1,
			maxAliasCount: typeof r == "number" ? r : 100
		}, s = z(this.contents, t ?? "", o);
		if (typeof i == "function") for (let { count: e, res: t } of o.anchors.values()) i(t, e);
		return typeof a == "function" ? Fe(a, { "": s }, "", s) : s;
	}
	toJSON(e, t) {
		return this.toJS({
			json: !0,
			jsonArg: e,
			mapAsMap: !1,
			onAnchor: t
		});
	}
	toString(e = {}) {
		if (this.errors.length > 0) throw Error("Document with errors cannot be stringified");
		if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
			let t = JSON.stringify(e.indent);
			throw Error(`"indent" option must be a positive integer, not ${t}`);
		}
		return Mn(this, e);
	}
};
function Pn(e) {
	if (I(e)) return !0;
	throw Error("Expected a YAML collection as document contents");
}
//#endregion
//#region node_modules/yaml/browser/dist/errors.js
var Fn = class extends Error {
	constructor(e, t, n, r) {
		super(), this.name = e, this.code = n, this.message = r, this.pos = t;
	}
}, In = class extends Fn {
	constructor(e, t, n) {
		super("YAMLParseError", e, t, n);
	}
}, Ln = class extends Fn {
	constructor(e, t, n) {
		super("YAMLWarning", e, t, n);
	}
}, Rn = (e, t) => (n) => {
	if (n.pos[0] === -1) return;
	n.linePos = n.pos.map((e) => t.linePos(e));
	let { line: r, col: i } = n.linePos[0];
	n.message += ` at line ${r}, column ${i}`;
	let a = i - 1, o = e.substring(t.lineStarts[r - 1], t.lineStarts[r]).replace(/[\n\r]+$/, "");
	if (a >= 60 && o.length > 80) {
		let e = Math.min(a - 39, o.length - 79);
		o = "…" + o.substring(e), a -= e - 1;
	}
	if (o.length > 80 && (o = o.substring(0, 79) + "…"), r > 1 && /^ *$/.test(o.substring(0, a))) {
		let n = e.substring(t.lineStarts[r - 2], t.lineStarts[r - 1]);
		n.length > 80 && (n = n.substring(0, 79) + "…\n"), o = n + o;
	}
	if (/[^ ]/.test(o)) {
		let e = 1, t = n.linePos[1];
		t?.line === r && t.col > i && (e = Math.max(1, Math.min(t.col - i, 80 - a)));
		let s = " ".repeat(a) + "^".repeat(e);
		n.message += `:\n\n${o}\n${s}\n`;
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/compose/resolve-props.js
function zn(e, { flow: t, indicator: n, next: r, offset: i, onError: a, parentIndent: o, startOnNewline: s }) {
	let c = !1, l = s, u = s, d = "", f = "", p = !1, m = !1, h = null, g = null, _ = null, v = null, y = null, b = null, x = null;
	for (let i of e) switch (m &&= (i.type !== "space" && i.type !== "newline" && i.type !== "comma" && a(i.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), !1), h &&= (l && i.type !== "comment" && i.type !== "newline" && a(h, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), null), i.type) {
		case "space":
			!t && (n !== "doc-start" || r?.type !== "flow-collection") && i.source.includes("	") && (h = i), u = !0;
			break;
		case "comment": {
			u || a(i, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
			let e = i.source.substring(1) || " ";
			d ? d += f + e : d = e, f = "", l = !1;
			break;
		}
		case "newline":
			l ? d ? d += i.source : (!b || n !== "seq-item-ind") && (c = !0) : f += i.source, l = !0, p = !0, (g || _) && (v = i), u = !0;
			break;
		case "anchor":
			g && a(i, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), i.source.endsWith(":") && a(i.offset + i.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), g = i, x ??= i.offset, l = !1, u = !1, m = !0;
			break;
		case "tag":
			_ && a(i, "MULTIPLE_TAGS", "A node can have at most one tag"), _ = i, x ??= i.offset, l = !1, u = !1, m = !0;
			break;
		case n:
			(g || _) && a(i, "BAD_PROP_ORDER", `Anchors and tags must be after the ${i.source} indicator`), b && a(i, "UNEXPECTED_TOKEN", `Unexpected ${i.source} in ${t ?? "collection"}`), b = i, l = n === "seq-item-ind" || n === "explicit-key-ind", u = !1;
			break;
		case "comma": if (t) {
			y && a(i, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), y = i, l = !1, u = !1;
			break;
		}
		default: a(i, "UNEXPECTED_TOKEN", `Unexpected ${i.type} token`), l = !1, u = !1;
	}
	let S = e[e.length - 1], C = S ? S.offset + S.source.length : i;
	return m && r && r.type !== "space" && r.type !== "newline" && r.type !== "comma" && (r.type !== "scalar" || r.source !== "") && a(r.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), h && (l && h.indent <= o || r?.type === "block-map" || r?.type === "block-seq") && a(h, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
		comma: y,
		found: b,
		spaceBefore: c,
		comment: d,
		hasNewline: p,
		anchor: g,
		tag: _,
		newlineAfterProp: v,
		end: C,
		start: x ?? C
	};
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/util-contains-newline.js
function Bn(e) {
	if (!e) return null;
	switch (e.type) {
		case "alias":
		case "scalar":
		case "double-quoted-scalar":
		case "single-quoted-scalar":
			if (e.source.includes("\n")) return !0;
			if (e.end) {
				for (let t of e.end) if (t.type === "newline") return !0;
			}
			return !1;
		case "flow-collection":
			for (let t of e.items) {
				for (let e of t.start) if (e.type === "newline") return !0;
				if (t.sep) {
					for (let e of t.sep) if (e.type === "newline") return !0;
				}
				if (Bn(t.key) || Bn(t.value)) return !0;
			}
			return !1;
		default: return !0;
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/util-flow-indent-check.js
function Vn(e, t, n) {
	if (t?.type === "flow-collection") {
		let r = t.end[0];
		r.indent === e && (r.source === "]" || r.source === "}") && Bn(t) && n(r, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/util-map-includes.js
function Hn(e, t, n) {
	let { uniqueKeys: r } = e.options;
	if (r === !1) return !1;
	let i = typeof r == "function" ? r : (e, t) => e === t || F(e) && F(t) && e.value === t.value;
	return t.some((e) => i(e.key, n));
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/resolve-block-map.js
var Un = "All mapping items must start at the same column";
function Wn({ composeNode: e, composeEmptyNode: t }, n, r, i, a) {
	let o = new ((a?.nodeClass) ?? H)(n.schema);
	n.atRoot &&= !1;
	let s = r.offset, c = null;
	for (let a of r.items) {
		let { start: l, key: u, sep: d, value: f } = a, p = zn(l, {
			indicator: "explicit-key-ind",
			next: u ?? d?.[0],
			offset: s,
			onError: i,
			parentIndent: r.indent,
			startOnNewline: !0
		}), m = !p.found;
		if (m) {
			if (u && (u.type === "block-seq" ? i(s, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in u && u.indent !== r.indent && i(s, "BAD_INDENT", Un)), !p.anchor && !p.tag && !d) {
				c = p.end, p.comment && (o.comment ? o.comment += "\n" + p.comment : o.comment = p.comment);
				continue;
			}
			(p.newlineAfterProp || Bn(u)) && i(u ?? l[l.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
		} else p.found?.indent !== r.indent && i(s, "BAD_INDENT", Un);
		n.atKey = !0;
		let h = p.end, g = u ? e(n, u, p, i) : t(n, h, l, null, p, i);
		n.schema.compat && Vn(r.indent, u, i), n.atKey = !1, Hn(n, o.items, g) && i(h, "DUPLICATE_KEY", "Map keys must be unique");
		let _ = zn(d ?? [], {
			indicator: "map-value-ind",
			next: f,
			offset: g.range[2],
			onError: i,
			parentIndent: r.indent,
			startOnNewline: !u || u.type === "block-scalar"
		});
		if (s = _.end, _.found) {
			m && (f?.type === "block-map" && !_.hasNewline && i(s, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && p.start < _.found.offset - 1024 && i(g.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
			let c = f ? e(n, f, _, i) : t(n, s, d, null, _, i);
			n.schema.compat && Vn(r.indent, f, i), s = c.range[2];
			let l = new V(g, c);
			n.options.keepSourceTokens && (l.srcToken = a), o.items.push(l);
		} else {
			m && i(g.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), _.comment && (g.comment ? g.comment += "\n" + _.comment : g.comment = _.comment);
			let e = new V(g);
			n.options.keepSourceTokens && (e.srcToken = a), o.items.push(e);
		}
	}
	return c && c < s && i(c, "IMPOSSIBLE", "Map comment with trailing content"), o.range = [
		r.offset,
		s,
		c ?? s
	], o;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/resolve-block-seq.js
function Gn({ composeNode: e, composeEmptyNode: t }, n, r, i, a) {
	let o = new ((a?.nodeClass) ?? jt)(n.schema);
	n.atRoot &&= !1, n.atKey &&= !1;
	let s = r.offset, c = null;
	for (let { start: a, value: l } of r.items) {
		let u = zn(a, {
			indicator: "seq-item-ind",
			next: l,
			offset: s,
			onError: i,
			parentIndent: r.indent,
			startOnNewline: !0
		});
		if (!u.found) if (u.anchor || u.tag || l) l?.type === "block-seq" ? i(u.end, "BAD_INDENT", "All sequence items must start at the same column") : i(s, "MISSING_CHAR", "Sequence item without - indicator");
		else {
			c = u.end, u.comment && (o.comment = u.comment);
			continue;
		}
		let d = l ? e(n, l, u, i) : t(n, u.end, a, null, u, i);
		n.schema.compat && Vn(r.indent, l, i), s = d.range[2], o.items.push(d);
	}
	return o.range = [
		r.offset,
		s,
		c ?? s
	], o;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/resolve-end.js
function Kn(e, t, n, r) {
	let i = "";
	if (e) {
		let a = !1, o = "";
		for (let s of e) {
			let { source: e, type: c } = s;
			switch (c) {
				case "space":
					a = !0;
					break;
				case "comment": {
					n && !a && r(s, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
					let t = e.substring(1) || " ";
					i ? i += o + t : i = t, o = "";
					break;
				}
				case "newline":
					i && (o += e), a = !0;
					break;
				default: r(s, "UNEXPECTED_TOKEN", `Unexpected ${c} at node end`);
			}
			t += e.length;
		}
	}
	return {
		comment: i,
		offset: t
	};
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/resolve-flow-collection.js
var qn = "Block collections are not allowed within flow collections", Jn = (e) => e && (e.type === "block-map" || e.type === "block-seq");
function Yn({ composeNode: e, composeEmptyNode: t }, n, r, i, a) {
	let o = r.start.source === "{", s = o ? "flow map" : "flow sequence", c = new ((a?.nodeClass) ?? (o ? H : jt))(n.schema);
	c.flow = !0;
	let l = n.atRoot;
	l && (n.atRoot = !1), n.atKey &&= !1;
	let u = r.offset + r.start.source.length;
	for (let a = 0; a < r.items.length; ++a) {
		let l = r.items[a], { start: d, key: f, sep: p, value: m } = l, h = zn(d, {
			flow: s,
			indicator: "explicit-key-ind",
			next: f ?? p?.[0],
			offset: u,
			onError: i,
			parentIndent: r.indent,
			startOnNewline: !1
		});
		if (!h.found) {
			if (!h.anchor && !h.tag && !p && !m) {
				a === 0 && h.comma ? i(h.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${s}`) : a < r.items.length - 1 && i(h.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${s}`), h.comment && (c.comment ? c.comment += "\n" + h.comment : c.comment = h.comment), u = h.end;
				continue;
			}
			!o && n.options.strict && Bn(f) && i(f, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
		}
		if (a === 0) h.comma && i(h.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${s}`);
		else if (h.comma || i(h.start, "MISSING_CHAR", `Missing , between ${s} items`), h.comment) {
			let e = "";
			loop: for (let t of d) switch (t.type) {
				case "comma":
				case "space": break;
				case "comment":
					e = t.source.substring(1);
					break loop;
				default: break loop;
			}
			if (e) {
				let t = c.items[c.items.length - 1];
				P(t) && (t = t.value ?? t.key), t.comment ? t.comment += "\n" + e : t.comment = e, h.comment = h.comment.substring(e.length + 1);
			}
		}
		if (!o && !p && !h.found) {
			let r = m ? e(n, m, h, i) : t(n, h.end, p, null, h, i);
			c.items.push(r), u = r.range[2], Jn(m) && i(r.range, "BLOCK_IN_FLOW", qn);
		} else {
			n.atKey = !0;
			let a = h.end, g = f ? e(n, f, h, i) : t(n, a, d, null, h, i);
			Jn(f) && i(g.range, "BLOCK_IN_FLOW", qn), n.atKey = !1;
			let _ = zn(p ?? [], {
				flow: s,
				indicator: "map-value-ind",
				next: m,
				offset: g.range[2],
				onError: i,
				parentIndent: r.indent,
				startOnNewline: !1
			});
			if (_.found) {
				if (!o && !h.found && n.options.strict) {
					if (p) for (let e of p) {
						if (e === _.found) break;
						if (e.type === "newline") {
							i(e, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
							break;
						}
					}
					h.start < _.found.offset - 1024 && i(_.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
				}
			} else m && ("source" in m && m.source?.[0] === ":" ? i(m, "MISSING_CHAR", `Missing space after : in ${s}`) : i(_.start, "MISSING_CHAR", `Missing , or : between ${s} items`));
			let v = m ? e(n, m, _, i) : _.found ? t(n, _.end, p, null, _, i) : null;
			v ? Jn(m) && i(v.range, "BLOCK_IN_FLOW", qn) : _.comment && (g.comment ? g.comment += "\n" + _.comment : g.comment = _.comment);
			let y = new V(g, v);
			if (n.options.keepSourceTokens && (y.srcToken = l), o) {
				let e = c;
				Hn(n, e.items, g) && i(a, "DUPLICATE_KEY", "Map keys must be unique"), e.items.push(y);
			} else {
				let e = new H(n.schema);
				e.flow = !0, e.items.push(y);
				let t = (v ?? g).range;
				e.range = [
					g.range[0],
					t[1],
					t[2]
				], c.items.push(e);
			}
			u = v ? v.range[2] : _.end;
		}
	}
	let d = o ? "}" : "]", [f, ...p] = r.end, m = u;
	if (f?.source === d) m = f.offset + f.source.length;
	else {
		let e = s[0].toUpperCase() + s.substring(1), t = l ? `${e} must end with a ${d}` : `${e} in block collection must be sufficiently indented and end with a ${d}`;
		i(u, l ? "MISSING_CHAR" : "BAD_INDENT", t), f && f.source.length !== 1 && p.unshift(f);
	}
	if (p.length > 0) {
		let e = Kn(p, m, n.options.strict, i);
		e.comment && (c.comment ? c.comment += "\n" + e.comment : c.comment = e.comment), c.range = [
			r.offset,
			m,
			e.offset
		];
	} else c.range = [
		r.offset,
		m,
		m
	];
	return c;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/compose-collection.js
function Xn(e, t, n, r, i, a) {
	let o = n.type === "block-map" ? Wn(e, t, n, r, a) : n.type === "block-seq" ? Gn(e, t, n, r, a) : Yn(e, t, n, r, a), s = o.constructor;
	return i === "!" || i === s.tagName ? (o.tag = s.tagName, o) : (i && (o.tag = i), o);
}
function Zn(e, t, n, r, i) {
	let a = r.tag, o = a ? t.directives.tagName(a.source, (e) => i(a, "TAG_RESOLVE_FAILED", e)) : null;
	if (n.type === "block-seq") {
		let { anchor: e, newlineAfterProp: t } = r, n = e && a ? e.offset > a.offset ? e : a : e ?? a;
		n && (!t || t.offset < n.offset) && i(n, "MISSING_CHAR", "Missing newline after block sequence props");
	}
	let s = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
	if (!a || !o || o === "!" || o === H.tagName && s === "map" || o === jt.tagName && s === "seq") return Xn(e, t, n, i, o);
	let c = t.schema.tags.find((e) => e.tag === o && e.collection === s);
	if (!c) {
		let r = t.schema.knownTags[o];
		if (r?.collection === s) t.schema.tags.push(Object.assign({}, r, { default: !1 })), c = r;
		else return r ? i(a, "BAD_COLLECTION_TYPE", `${r.tag} used for ${s} collection, but expects ${r.collection ?? "scalar"}`, !0) : i(a, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), Xn(e, t, n, i, o);
	}
	let l = Xn(e, t, n, i, o, c), u = c.resolve?.(l, (e) => i(a, "TAG_RESOLVE_FAILED", e), t.options) ?? l, d = L(u) ? u : new B(u);
	return d.range = l.range, d.tag = o, c?.format && (d.format = c.format), d;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/resolve-block-scalar.js
function Qn(e, t, n) {
	let r = t.offset, i = $n(t, e.options.strict, n);
	if (!i) return {
		value: "",
		type: null,
		comment: "",
		range: [
			r,
			r,
			r
		]
	};
	let a = i.mode === ">" ? B.BLOCK_FOLDED : B.BLOCK_LITERAL, o = t.source ? er(t.source) : [], s = o.length;
	for (let e = o.length - 1; e >= 0; --e) {
		let t = o[e][1];
		if (t === "" || t === "\r") s = e;
		else break;
	}
	if (s === 0) {
		let e = i.chomp === "+" && o.length > 0 ? "\n".repeat(Math.max(1, o.length - 1)) : "", n = r + i.length;
		return t.source && (n += t.source.length), {
			value: e,
			type: a,
			comment: i.comment,
			range: [
				r,
				n,
				n
			]
		};
	}
	let c = t.indent + i.indent, l = t.offset + i.length, u = 0;
	for (let t = 0; t < s; ++t) {
		let [r, a] = o[t];
		if (a === "" || a === "\r") i.indent === 0 && r.length > c && (c = r.length);
		else {
			r.length < c && n(l + r.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), i.indent === 0 && (c = r.length), u = t, c === 0 && !e.atRoot && n(l, "BAD_INDENT", "Block scalar values in collections must be indented");
			break;
		}
		l += r.length + a.length + 1;
	}
	for (let e = o.length - 1; e >= s; --e) o[e][0].length > c && (s = e + 1);
	let d = "", f = "", p = !1;
	for (let e = 0; e < u; ++e) d += o[e][0].slice(c) + "\n";
	for (let e = u; e < s; ++e) {
		let [t, r] = o[e];
		l += t.length + r.length + 1;
		let s = r[r.length - 1] === "\r";
		/* istanbul ignore if already caught in lexer */
		if (s && (r = r.slice(0, -1)), r && t.length < c) {
			let e = `Block scalar lines must not be less indented than their ${i.indent ? "explicit indentation indicator" : "first line"}`;
			n(l - r.length - (s ? 2 : 1), "BAD_INDENT", e), t = "";
		}
		a === B.BLOCK_LITERAL ? (d += f + t.slice(c) + r, f = "\n") : t.length > c || r[0] === "	" ? (f === " " ? f = "\n" : !p && f === "\n" && (f = "\n\n"), d += f + t.slice(c) + r, f = "\n", p = !0) : r === "" ? f === "\n" ? d += "\n" : f = "\n" : (d += f + r, f = " ", p = !1);
	}
	switch (i.chomp) {
		case "-": break;
		case "+":
			for (let e = s; e < o.length; ++e) d += "\n" + o[e][0].slice(c);
			d[d.length - 1] !== "\n" && (d += "\n");
			break;
		default: d += "\n";
	}
	let m = r + i.length + t.source.length;
	return {
		value: d,
		type: a,
		comment: i.comment,
		range: [
			r,
			m,
			m
		]
	};
}
function $n({ offset: e, props: t }, n, r) {
	/* istanbul ignore if should not happen */
	if (t[0].type !== "block-scalar-header") return r(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
	let { source: i } = t[0], a = i[0], o = 0, s = "", c = -1;
	for (let t = 1; t < i.length; ++t) {
		let n = i[t];
		if (!s && (n === "-" || n === "+")) s = n;
		else {
			let r = Number(n);
			!o && r ? o = r : c === -1 && (c = e + t);
		}
	}
	c !== -1 && r(c, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
	let l = !1, u = "", d = i.length;
	for (let e = 1; e < t.length; ++e) {
		let i = t[e];
		switch (i.type) {
			case "space": l = !0;
			case "newline":
				d += i.source.length;
				break;
			case "comment":
				n && !l && r(i, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), d += i.source.length, u = i.source.substring(1);
				break;
			case "error":
				r(i, "UNEXPECTED_TOKEN", i.message), d += i.source.length;
				break;
			/* istanbul ignore next should not happen */
			default: {
				r(i, "UNEXPECTED_TOKEN", `Unexpected token in block scalar header: ${i.type}`);
				let e = i.source;
				e && typeof e == "string" && (d += e.length);
			}
		}
	}
	return {
		mode: a,
		indent: o,
		chomp: s,
		comment: u,
		length: d
	};
}
function er(e) {
	let t = e.split(/\n( *)/), n = t[0], r = n.match(/^( *)/), i = [r?.[1] ? [r[1], n.slice(r[1].length)] : ["", n]];
	for (let e = 1; e < t.length; e += 2) i.push([t[e], t[e + 1]]);
	return i;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/resolve-flow-scalar.js
function tr(e, t, n) {
	let { offset: r, type: i, source: a, end: o } = e, s, c, l = (e, t, i) => n(r + e, t, i);
	switch (i) {
		case "scalar":
			s = B.PLAIN, c = nr(a, l);
			break;
		case "single-quoted-scalar":
			s = B.QUOTE_SINGLE, c = rr(a, l);
			break;
		case "double-quoted-scalar":
			s = B.QUOTE_DOUBLE, c = ar(a, l);
			break;
		/* istanbul ignore next should not happen */
		default: return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${i}`), {
			value: "",
			type: null,
			comment: "",
			range: [
				r,
				r + a.length,
				r + a.length
			]
		};
	}
	let u = r + a.length, d = Kn(o, u, t, n);
	return {
		value: c,
		type: s,
		comment: d.comment,
		range: [
			r,
			u,
			d.offset
		]
	};
}
function nr(e, t) {
	let n = "";
	switch (e[0]) {
		/* istanbul ignore next should not happen */
		case "	":
			n = "a tab character";
			break;
		case ",":
			n = "flow indicator character ,";
			break;
		case "%":
			n = "directive indicator character %";
			break;
		case "|":
		case ">":
			n = `block scalar indicator ${e[0]}`;
			break;
		case "@":
		case "`":
			n = `reserved character ${e[0]}`;
			break;
	}
	return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), ir(e);
}
function rr(e, t) {
	return (e[e.length - 1] !== "'" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing 'quote"), ir(e.slice(1, -1)).replace(/''/g, "'");
}
function ir(e) {
	let t, n;
	try {
		t = /* @__PURE__ */ RegExp("(.*?)(?<![ 	])[ 	]*\r?\n", "sy"), n = /* @__PURE__ */ RegExp("[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n", "sy");
	} catch {
		t = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy;
	}
	let r = t.exec(e);
	if (!r) return e;
	let i = r[1], a = " ", o = t.lastIndex;
	for (n.lastIndex = o; r = n.exec(e);) r[1] === "" ? a === "\n" ? i += a : a = "\n" : (i += a + r[1], a = " "), o = n.lastIndex;
	let s = /[ \t]*(.*)/sy;
	return s.lastIndex = o, r = s.exec(e), i + a + (r?.[1] ?? "");
}
function ar(e, t) {
	let n = "";
	for (let r = 1; r < e.length - 1; ++r) {
		let i = e[r];
		if (!(i === "\r" && e[r + 1] === "\n")) if (i === "\n") {
			let { fold: t, offset: i } = or(e, r);
			n += t, r = i;
		} else if (i === "\\") {
			let i = e[++r], a = sr[i];
			if (a) n += a;
			else if (i === "\n") for (i = e[r + 1]; i === " " || i === "	";) i = e[++r + 1];
			else if (i === "\r" && e[r + 1] === "\n") for (i = e[++r + 1]; i === " " || i === "	";) i = e[++r + 1];
			else if (i === "x" || i === "u" || i === "U") {
				let a = i === "x" ? 2 : i === "u" ? 4 : 8;
				n += cr(e, r + 1, a, t), r += a;
			} else {
				let i = e.substr(r - 1, 2);
				t(r - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${i}`), n += i;
			}
		} else if (i === " " || i === "	") {
			let t = r, a = e[r + 1];
			for (; a === " " || a === "	";) a = e[++r + 1];
			a !== "\n" && !(a === "\r" && e[r + 2] === "\n") && (n += r > t ? e.slice(t, r + 1) : i);
		} else n += i;
	}
	return (e[e.length - 1] !== "\"" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing \"quote"), n;
}
function or(e, t) {
	let n = "", r = e[t + 1];
	for (; (r === " " || r === "	" || r === "\n" || r === "\r") && !(r === "\r" && e[t + 2] !== "\n");) r === "\n" && (n += "\n"), t += 1, r = e[t + 1];
	return n ||= " ", {
		fold: n,
		offset: t
	};
}
var sr = {
	0: "\0",
	a: "\x07",
	b: "\b",
	e: "\x1B",
	f: "\f",
	n: "\n",
	r: "\r",
	t: "	",
	v: "\v",
	N: "",
	_: "\xA0",
	L: "\u2028",
	P: "\u2029",
	" ": " ",
	"\"": "\"",
	"/": "/",
	"\\": "\\",
	"	": "	"
};
function cr(e, t, n, r) {
	let i = e.substr(t, n), a = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
	try {
		return String.fromCodePoint(a);
	} catch {
		let i = e.substr(t - 2, n + 2);
		return r(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${i}`), i;
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/compose-scalar.js
function lr(e, t, n, r) {
	let { value: i, type: a, comment: o, range: s } = t.type === "block-scalar" ? Qn(e, t, r) : tr(t, e.options.strict, r), c = n ? e.directives.tagName(n.source, (e) => r(n, "TAG_RESOLVE_FAILED", e)) : null, l;
	l = e.options.stringKeys && e.atKey ? e.schema[j] : c ? ur(e.schema, i, c, n, r) : t.type === "scalar" ? dr(e, i, t, r) : e.schema[j];
	let u;
	try {
		let a = l.resolve(i, (e) => r(n ?? t, "TAG_RESOLVE_FAILED", e), e.options);
		u = F(a) ? a : new B(a);
	} catch (e) {
		let a = e instanceof Error ? e.message : String(e);
		r(n ?? t, "TAG_RESOLVE_FAILED", a), u = new B(i);
	}
	return u.range = s, u.source = i, a && (u.type = a), c && (u.tag = c), l.format && (u.format = l.format), o && (u.comment = o), u;
}
function ur(e, t, n, r, i) {
	if (n === "!") return e[j];
	let a = [];
	for (let t of e.tags) if (!t.collection && t.tag === n) if (t.default && t.test) a.push(t);
	else return t;
	for (let e of a) if (e.test?.test(t)) return e;
	let o = e.knownTags[n];
	return o && !o.collection ? (e.tags.push(Object.assign({}, o, {
		default: !1,
		test: void 0
	})), o) : (i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), e[j]);
}
function dr({ atKey: e, directives: t, schema: n }, r, i, a) {
	let o = n.tags.find((t) => (t.default === !0 || e && t.default === "key") && t.test?.test(r)) || n[j];
	if (n.compat) {
		let e = n.compat.find((e) => e.default && e.test?.test(r)) ?? n[j];
		o.tag !== e.tag && a(i, "TAG_RESOLVE_FAILED", `Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`, !0);
	}
	return o;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/util-empty-scalar-position.js
function fr(e, t, n) {
	if (t) {
		n ??= t.length;
		for (let r = n - 1; r >= 0; --r) {
			let n = t[r];
			switch (n.type) {
				case "space":
				case "comment":
				case "newline":
					e -= n.source.length;
					continue;
			}
			for (n = t[++r]; n?.type === "space";) e += n.source.length, n = t[++r];
			break;
		}
	}
	return e;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/compose-node.js
var pr = {
	composeNode: mr,
	composeEmptyNode: hr
};
function mr(e, t, n, r) {
	let i = e.atKey, { spaceBefore: a, comment: o, anchor: s, tag: c } = n, l, u = !0;
	switch (t.type) {
		case "alias":
			l = gr(e, t, r), (s || c) && r(t, "ALIAS_PROPS", "An alias node must not specify any properties");
			break;
		case "scalar":
		case "single-quoted-scalar":
		case "double-quoted-scalar":
		case "block-scalar":
			l = lr(e, t, c, r), s && (l.anchor = s.source.substring(1));
			break;
		case "block-map":
		case "block-seq":
		case "flow-collection":
			try {
				l = Zn(pr, e, t, n, r), s && (l.anchor = s.source.substring(1));
			} catch (e) {
				r(t, "RESOURCE_EXHAUSTION", e instanceof Error ? e.message : String(e));
			}
			break;
		default: r(t, "UNEXPECTED_TOKEN", t.type === "error" ? t.message : `Unsupported token (type: ${t.type})`), u = !1;
	}
	return l ??= hr(e, t.offset, void 0, null, n, r), s && l.anchor === "" && r(s, "BAD_ALIAS", "Anchor cannot be an empty string"), i && e.options.stringKeys && (!F(l) || typeof l.value != "string" || l.tag && l.tag !== "tag:yaml.org,2002:str") && r(c ?? t, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), a && (l.spaceBefore = !0), o && (t.type === "scalar" && t.source === "" ? l.comment = o : l.commentBefore = o), e.options.keepSourceTokens && u && (l.srcToken = t), l;
}
function hr(e, t, n, r, { spaceBefore: i, comment: a, anchor: o, tag: s, end: c }, l) {
	let u = lr(e, {
		type: "scalar",
		offset: fr(t, n, r),
		indent: -1,
		source: ""
	}, s, l);
	return o && (u.anchor = o.source.substring(1), u.anchor === "" && l(o, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (u.spaceBefore = !0), a && (u.comment = a, u.range[2] = c), u;
}
function gr({ options: e }, { offset: t, source: n, end: r }, i) {
	let a = new Le(n.substring(1));
	a.source === "" && i(t, "BAD_ALIAS", "Alias cannot be an empty string"), a.source.endsWith(":") && i(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
	let o = t + n.length, s = Kn(r, o, e.strict, i);
	return a.range = [
		t,
		o,
		s.offset
	], s.comment && (a.comment = s.comment), a;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/compose-doc.js
function _r(e, t, { offset: n, start: r, value: i, end: a }, o) {
	let s = new Nn(void 0, Object.assign({ _directives: t }, e)), c = {
		atKey: !1,
		atRoot: !0,
		directives: s.directives,
		options: s.options,
		schema: s.schema
	}, l = zn(r, {
		indicator: "doc-start",
		next: i ?? a?.[0],
		offset: n,
		onError: o,
		parentIndent: 0,
		startOnNewline: !0
	});
	l.found && (s.directives.docStart = !0, i && (i.type === "block-map" || i.type === "block-seq") && !l.hasNewline && o(l.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), s.contents = i ? mr(c, i, l, o) : hr(c, l.end, r, null, l, o);
	let u = s.contents.range[2], d = Kn(a, u, !1, o);
	return d.comment && (s.comment = d.comment), s.range = [
		n,
		u,
		d.offset
	], s;
}
//#endregion
//#region node_modules/yaml/browser/dist/compose/composer.js
function vr(e) {
	if (typeof e == "number") return [e, e + 1];
	if (Array.isArray(e)) return e.length === 2 ? e : [e[0], e[1]];
	let { offset: t, source: n } = e;
	return [t, t + (typeof n == "string" ? n.length : 1)];
}
function yr(e) {
	let t = "", n = !1, r = !1;
	for (let i = 0; i < e.length; ++i) {
		let a = e[i];
		switch (a[0]) {
			case "#":
				t += (t === "" ? "" : r ? "\n\n" : "\n") + (a.substring(1) || " "), n = !0, r = !1;
				break;
			case "%":
				e[i + 1]?.[0] !== "#" && (i += 1), n = !1;
				break;
			default: n || (r = !0), n = !1;
		}
	}
	return {
		comment: t,
		afterEmptyLine: r
	};
}
var br = class {
	constructor(e = {}) {
		this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (e, t, n, r) => {
			let i = vr(e);
			r ? this.warnings.push(new Ln(i, t, n)) : this.errors.push(new In(i, t, n));
		}, this.directives = new Ae({ version: e.version || "1.2" }), this.options = e;
	}
	decorate(e, t) {
		let { comment: n, afterEmptyLine: r } = yr(this.prelude);
		if (n) {
			let i = e.contents;
			if (t) e.comment = e.comment ? `${e.comment}\n${n}` : n;
			else if (r || e.directives.docStart || !i) e.commentBefore = n;
			else if (I(i) && !i.flow && i.items.length > 0) {
				let e = i.items[0];
				P(e) && (e = e.key);
				let t = e.commentBefore;
				e.commentBefore = t ? `${n}\n${t}` : n;
			} else {
				let e = i.commentBefore;
				i.commentBefore = e ? `${n}\n${e}` : n;
			}
		}
		if (t) {
			for (let t = 0; t < this.errors.length; ++t) e.errors.push(this.errors[t]);
			for (let t = 0; t < this.warnings.length; ++t) e.warnings.push(this.warnings[t]);
		} else e.errors = this.errors, e.warnings = this.warnings;
		this.prelude = [], this.errors = [], this.warnings = [];
	}
	streamInfo() {
		return {
			comment: yr(this.prelude).comment,
			directives: this.directives,
			errors: this.errors,
			warnings: this.warnings
		};
	}
	*compose(e, t = !1, n = -1) {
		for (let t of e) yield* this.next(t);
		yield* this.end(t, n);
	}
	*next(e) {
		switch (e.type) {
			case "directive":
				this.directives.add(e.source, (t, n, r) => {
					let i = vr(e);
					i[0] += t, this.onError(i, "BAD_DIRECTIVE", n, r);
				}), this.prelude.push(e.source), this.atDirectives = !0;
				break;
			case "document": {
				let t = _r(this.options, this.directives, e, this.onError);
				this.atDirectives && !t.directives.docStart && this.onError(e, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(t, !1), this.doc && (yield this.doc), this.doc = t, this.atDirectives = !1;
				break;
			}
			case "byte-order-mark":
			case "space": break;
			case "comment":
			case "newline":
				this.prelude.push(e.source);
				break;
			case "error": {
				let t = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message, n = new In(vr(e), "UNEXPECTED_TOKEN", t);
				this.atDirectives || !this.doc ? this.errors.push(n) : this.doc.errors.push(n);
				break;
			}
			case "doc-end": {
				if (!this.doc) {
					this.errors.push(new In(vr(e), "UNEXPECTED_TOKEN", "Unexpected doc-end without preceding document"));
					break;
				}
				this.doc.directives.docEnd = !0;
				let t = Kn(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
				if (this.decorate(this.doc, !0), t.comment) {
					let e = this.doc.comment;
					this.doc.comment = e ? `${e}\n${t.comment}` : t.comment;
				}
				this.doc.range[2] = t.offset;
				break;
			}
			default: this.errors.push(new In(vr(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`));
		}
	}
	*end(e = !1, t = -1) {
		if (this.doc) this.decorate(this.doc, !0), yield this.doc, this.doc = null;
		else if (e) {
			let e = new Nn(void 0, Object.assign({ _directives: this.directives }, this.options));
			this.atDirectives && this.onError(t, "MISSING_CHAR", "Missing directives-end indicator line"), e.range = [
				0,
				t,
				t
			], this.decorate(e, !1), yield e;
		}
	}
}, xr = Symbol("break visit"), Sr = Symbol("skip children"), Cr = Symbol("remove item");
function wr(e, t) {
	"type" in e && e.type === "document" && (e = {
		start: e.start,
		value: e.value
	}), Tr(Object.freeze([]), e, t);
}
wr.BREAK = xr, wr.SKIP = Sr, wr.REMOVE = Cr, wr.itemAtPath = (e, t) => {
	let n = e;
	for (let [e, r] of t) {
		let t = n?.[e];
		if (t && "items" in t) n = t.items[r];
		else return;
	}
	return n;
}, wr.parentCollection = (e, t) => {
	let n = wr.itemAtPath(e, t.slice(0, -1)), r = t[t.length - 1][0], i = n?.[r];
	if (i && "items" in i) return i;
	throw Error("Parent collection not found");
};
function Tr(e, t, n) {
	let r = n(t, e);
	if (typeof r == "symbol") return r;
	for (let i of ["key", "value"]) {
		let a = t[i];
		if (a && "items" in a) {
			for (let t = 0; t < a.items.length; ++t) {
				let r = Tr(Object.freeze(e.concat([[i, t]])), a.items[t], n);
				if (typeof r == "number") t = r - 1;
				else if (r === xr) return xr;
				else r === Cr && (a.items.splice(t, 1), --t);
			}
			typeof r == "function" && i === "key" && (r = r(t, e));
		}
	}
	return typeof r == "function" ? r(t, e) : r;
}
function Er(e) {
	switch (e) {
		case "﻿": return "byte-order-mark";
		case "": return "doc-mode";
		case "": return "flow-error-end";
		case "": return "scalar";
		case "---": return "doc-start";
		case "...": return "doc-end";
		case "":
		case "\n":
		case "\r\n": return "newline";
		case "-": return "seq-item-ind";
		case "?": return "explicit-key-ind";
		case ":": return "map-value-ind";
		case "{": return "flow-map-start";
		case "}": return "flow-map-end";
		case "[": return "flow-seq-start";
		case "]": return "flow-seq-end";
		case ",": return "comma";
	}
	switch (e[0]) {
		case " ":
		case "	": return "space";
		case "#": return "comment";
		case "%": return "directive-line";
		case "*": return "alias";
		case "&": return "anchor";
		case "!": return "tag";
		case "'": return "single-quoted-scalar";
		case "\"": return "double-quoted-scalar";
		case "|":
		case ">": return "block-scalar-header";
	}
	return null;
}
//#endregion
//#region node_modules/yaml/browser/dist/parse/lexer.js
function Dr(e) {
	switch (e) {
		case void 0:
		case " ":
		case "\n":
		case "\r":
		case "	": return !0;
		default: return !1;
	}
}
var Or = /* @__PURE__ */ new Set("0123456789ABCDEFabcdef"), kr = /* @__PURE__ */ new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), Ar = /* @__PURE__ */ new Set(",[]{}"), jr = /* @__PURE__ */ new Set(" ,[]{}\n\r	"), Mr = (e) => !e || jr.has(e), Nr = class {
	constructor() {
		this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
	}
	*lex(e, t = !1) {
		if (e) {
			if (typeof e != "string") throw TypeError("source is not a string");
			this.buffer = this.buffer ? this.buffer + e : e, this.lineEndPos = null;
		}
		this.atEnd = !t;
		let n = this.next ?? "stream";
		for (; n && (t || this.hasChars(1));) n = yield* this.parseNext(n);
	}
	atLineEnd() {
		let e = this.pos, t = this.buffer[e];
		for (; t === " " || t === "	";) t = this.buffer[++e];
		return !t || t === "#" || t === "\n" || t === "\r" && this.buffer[e + 1] === "\n";
	}
	charAt(e) {
		return this.buffer[this.pos + e];
	}
	continueScalar(e) {
		let t = this.buffer[e];
		if (this.indentNext > 0) {
			let n = 0;
			for (; t === " ";) t = this.buffer[++n + e];
			if (t === "\r") {
				let t = this.buffer[n + e + 1];
				if (t === "\n" || !t && !this.atEnd) return e + n + 1;
			}
			return t === "\n" || n >= this.indentNext || !t && !this.atEnd ? e + n : -1;
		}
		if (t === "-" || t === ".") {
			let t = this.buffer.substr(e, 3);
			if ((t === "---" || t === "...") && Dr(this.buffer[e + 3])) return -1;
		}
		return e;
	}
	getLine() {
		let e = this.lineEndPos;
		return (typeof e != "number" || e !== -1 && e < this.pos) && (e = this.buffer.indexOf("\n", this.pos), this.lineEndPos = e), e === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[e - 1] === "\r" && --e, this.buffer.substring(this.pos, e));
	}
	hasChars(e) {
		return this.pos + e <= this.buffer.length;
	}
	setNext(e) {
		return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = e, null;
	}
	peek(e) {
		return this.buffer.substr(this.pos, e);
	}
	*parseNext(e) {
		switch (e) {
			case "stream": return yield* this.parseStream();
			case "line-start": return yield* this.parseLineStart();
			case "block-start": return yield* this.parseBlockStart();
			case "doc": return yield* this.parseDocument();
			case "flow": return yield* this.parseFlowCollection();
			case "quoted-scalar": return yield* this.parseQuotedScalar();
			case "block-scalar": return yield* this.parseBlockScalar();
			case "plain-scalar": return yield* this.parsePlainScalar();
		}
	}
	*parseStream() {
		let e = this.getLine();
		if (e === null) return this.setNext("stream");
		if (e[0] === "﻿" && (yield* this.pushCount(1), e = e.substring(1)), e[0] === "%") {
			let t = e.length, n = e.indexOf("#");
			for (; n !== -1;) {
				let r = e[n - 1];
				if (r === " " || r === "	") {
					t = n - 1;
					break;
				} else n = e.indexOf("#", n + 1);
			}
			for (;;) {
				let n = e[t - 1];
				if (n === " " || n === "	") --t;
				else break;
			}
			let r = (yield* this.pushCount(t)) + (yield* this.pushSpaces(!0));
			return yield* this.pushCount(e.length - r), this.pushNewline(), "stream";
		}
		if (this.atLineEnd()) {
			let t = yield* this.pushSpaces(!0);
			return yield* this.pushCount(e.length - t), yield* this.pushNewline(), "stream";
		}
		return yield "", yield* this.parseLineStart();
	}
	*parseLineStart() {
		let e = this.charAt(0);
		if (!e && !this.atEnd) return this.setNext("line-start");
		if (e === "-" || e === ".") {
			if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
			let e = this.peek(3);
			if ((e === "---" || e === "...") && Dr(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, e === "---" ? "doc" : "stream";
		}
		return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !Dr(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
	}
	*parseBlockStart() {
		let [e, t] = this.peek(2);
		if (!t && !this.atEnd) return this.setNext("block-start");
		if ((e === "-" || e === "?" || e === ":") && Dr(t)) {
			let e = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
			return this.indentNext = this.indentValue + 1, this.indentValue += e, "block-start";
		}
		return "doc";
	}
	*parseDocument() {
		yield* this.pushSpaces(!0);
		let e = this.getLine();
		if (e === null) return this.setNext("doc");
		let t = yield* this.pushIndicators();
		switch (e[t]) {
			case "#": yield* this.pushCount(e.length - t);
			case void 0: return yield* this.pushNewline(), yield* this.parseLineStart();
			case "{":
			case "[": return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
			case "}":
			case "]": return yield* this.pushCount(1), "doc";
			case "*": return yield* this.pushUntil(Mr), "doc";
			case "\"":
			case "'": return yield* this.parseQuotedScalar();
			case "|":
			case ">": return t += yield* this.parseBlockScalarHeader(), t += yield* this.pushSpaces(!0), yield* this.pushCount(e.length - t), yield* this.pushNewline(), yield* this.parseBlockScalar();
			default: return yield* this.parsePlainScalar();
		}
	}
	*parseFlowCollection() {
		let e, t, n = -1;
		do
			e = yield* this.pushNewline(), e > 0 ? (t = yield* this.pushSpaces(!1), this.indentValue = n = t) : t = 0, t += yield* this.pushSpaces(!0);
		while (e + t > 0);
		let r = this.getLine();
		if (r === null) return this.setNext("flow");
		if ((n !== -1 && n < this.indentNext && r[0] !== "#" || n === 0 && (r.startsWith("---") || r.startsWith("...")) && Dr(r[3])) && !(n === this.indentNext - 1 && this.flowLevel === 1 && (r[0] === "]" || r[0] === "}"))) return this.flowLevel = 0, yield "", yield* this.parseLineStart();
		let i = 0;
		for (; r[i] === ",";) i += yield* this.pushCount(1), i += yield* this.pushSpaces(!0), this.flowKey = !1;
		switch (i += yield* this.pushIndicators(), r[i]) {
			case void 0: return "flow";
			case "#": return yield* this.pushCount(r.length - i), "flow";
			case "{":
			case "[": return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
			case "}":
			case "]": return yield* this.pushCount(1), this.flowKey = !0, --this.flowLevel, this.flowLevel ? "flow" : "doc";
			case "*": return yield* this.pushUntil(Mr), "flow";
			case "\"":
			case "'": return this.flowKey = !0, yield* this.parseQuotedScalar();
			case ":": {
				let e = this.charAt(1);
				if (this.flowKey || Dr(e) || e === ",") return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
			}
			default: return this.flowKey = !1, yield* this.parsePlainScalar();
		}
	}
	*parseQuotedScalar() {
		let e = this.charAt(0), t = this.buffer.indexOf(e, this.pos + 1);
		if (e === "'") for (; t !== -1 && this.buffer[t + 1] === "'";) t = this.buffer.indexOf("'", t + 2);
		else for (; t !== -1;) {
			let e = 0;
			for (; this.buffer[t - 1 - e] === "\\";) e += 1;
			if (e % 2 == 0) break;
			t = this.buffer.indexOf("\"", t + 1);
		}
		let n = this.buffer.substring(0, t), r = n.indexOf("\n", this.pos);
		if (r !== -1) {
			for (; r !== -1;) {
				let e = this.continueScalar(r + 1);
				if (e === -1) break;
				r = n.indexOf("\n", e);
			}
			r !== -1 && (t = r - (n[r - 1] === "\r" ? 2 : 1));
		}
		if (t === -1) {
			if (!this.atEnd) return this.setNext("quoted-scalar");
			t = this.buffer.length;
		}
		return yield* this.pushToIndex(t + 1, !1), this.flowLevel ? "flow" : "doc";
	}
	*parseBlockScalarHeader() {
		this.blockScalarIndent = -1, this.blockScalarKeep = !1;
		let e = this.pos;
		for (;;) {
			let t = this.buffer[++e];
			if (t === "+") this.blockScalarKeep = !0;
			else if (t > "0" && t <= "9") this.blockScalarIndent = Number(t) - 1;
			else if (t !== "-") break;
		}
		return yield* this.pushUntil((e) => Dr(e) || e === "#");
	}
	*parseBlockScalar() {
		let e = this.pos - 1, t = 0, n;
		loop: for (let r = this.pos; n = this.buffer[r]; ++r) switch (n) {
			case " ":
				t += 1;
				break;
			case "\n":
				e = r, t = 0;
				break;
			case "\r": {
				let e = this.buffer[r + 1];
				if (!e && !this.atEnd) return this.setNext("block-scalar");
				if (e === "\n") break;
			}
			default: break loop;
		}
		if (!n && !this.atEnd) return this.setNext("block-scalar");
		if (t >= this.indentNext) {
			this.blockScalarIndent === -1 ? this.indentNext = t : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
			do {
				let t = this.continueScalar(e + 1);
				if (t === -1) break;
				e = this.buffer.indexOf("\n", t);
			} while (e !== -1);
			if (e === -1) {
				if (!this.atEnd) return this.setNext("block-scalar");
				e = this.buffer.length;
			}
		}
		let r = e + 1;
		for (n = this.buffer[r]; n === " ";) n = this.buffer[++r];
		if (n === "	") {
			for (; n === "	" || n === " " || n === "\r" || n === "\n";) n = this.buffer[++r];
			e = r - 1;
		} else if (!this.blockScalarKeep) do {
			let n = e - 1, r = this.buffer[n];
			r === "\r" && (r = this.buffer[--n]);
			let i = n;
			for (; r === " ";) r = this.buffer[--n];
			if (r === "\n" && n >= this.pos && n + 1 + t > i) e = n;
			else break;
		} while (!0);
		return yield "", yield* this.pushToIndex(e + 1, !0), yield* this.parseLineStart();
	}
	*parsePlainScalar() {
		let e = this.flowLevel > 0, t = this.pos - 1, n = this.pos - 1, r;
		for (; r = this.buffer[++n];) if (r === ":") {
			let r = this.buffer[n + 1];
			if (Dr(r) || e && Ar.has(r)) break;
			t = n;
		} else if (Dr(r)) {
			let i = this.buffer[n + 1];
			if (r === "\r" && (i === "\n" ? (n += 1, r = "\n", i = this.buffer[n + 1]) : t = n), i === "#" || e && Ar.has(i)) break;
			if (r === "\n") {
				let e = this.continueScalar(n + 1);
				if (e === -1) break;
				n = Math.max(n, e - 2);
			}
		} else {
			if (e && Ar.has(r)) break;
			t = n;
		}
		return !r && !this.atEnd ? this.setNext("plain-scalar") : (yield "", yield* this.pushToIndex(t + 1, !0), e ? "flow" : "doc");
	}
	*pushCount(e) {
		return e > 0 ? (yield this.buffer.substr(this.pos, e), this.pos += e, e) : 0;
	}
	*pushToIndex(e, t) {
		let n = this.buffer.slice(this.pos, e);
		return n ? (yield n, this.pos += n.length, n.length) : (t && (yield ""), 0);
	}
	*pushIndicators() {
		let e = 0;
		loop: for (;;) {
			switch (this.charAt(0)) {
				case "!":
					e += yield* this.pushTag(), e += yield* this.pushSpaces(!0);
					continue loop;
				case "&":
					e += yield* this.pushUntil(Mr), e += yield* this.pushSpaces(!0);
					continue loop;
				case "-":
				case "?":
				case ":": {
					let t = this.flowLevel > 0, n = this.charAt(1);
					if (Dr(n) || t && Ar.has(n)) {
						t ? this.flowKey &&= !1 : this.indentNext = this.indentValue + 1, e += yield* this.pushCount(1), e += yield* this.pushSpaces(!0);
						continue loop;
					}
				}
			}
			break loop;
		}
		return e;
	}
	*pushTag() {
		if (this.charAt(1) === "<") {
			let e = this.pos + 2, t = this.buffer[e];
			for (; !Dr(t) && t !== ">";) t = this.buffer[++e];
			return yield* this.pushToIndex(t === ">" ? e + 1 : e, !1);
		} else {
			let e = this.pos + 1, t = this.buffer[e];
			for (; t;) if (kr.has(t)) t = this.buffer[++e];
			else if (t === "%" && Or.has(this.buffer[e + 1]) && Or.has(this.buffer[e + 2])) t = this.buffer[e += 3];
			else break;
			return yield* this.pushToIndex(e, !1);
		}
	}
	*pushNewline() {
		let e = this.buffer[this.pos];
		return e === "\n" ? yield* this.pushCount(1) : e === "\r" && this.charAt(1) === "\n" ? yield* this.pushCount(2) : 0;
	}
	*pushSpaces(e) {
		let t = this.pos - 1, n;
		do
			n = this.buffer[++t];
		while (n === " " || e && n === "	");
		let r = t - this.pos;
		return r > 0 && (yield this.buffer.substr(this.pos, r), this.pos = t), r;
	}
	*pushUntil(e) {
		let t = this.pos, n = this.buffer[t];
		for (; !e(n);) n = this.buffer[++t];
		return yield* this.pushToIndex(t, !1);
	}
}, Pr = class {
	constructor() {
		this.lineStarts = [], this.addNewLine = (e) => this.lineStarts.push(e), this.linePos = (e) => {
			let t = 0, n = this.lineStarts.length;
			for (; t < n;) {
				let r = t + n >> 1;
				this.lineStarts[r] < e ? t = r + 1 : n = r;
			}
			if (this.lineStarts[t] === e) return {
				line: t + 1,
				col: 1
			};
			if (t === 0) return {
				line: 0,
				col: e
			};
			let r = this.lineStarts[t - 1];
			return {
				line: t,
				col: e - r + 1
			};
		};
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/parse/parser.js
function Fr(e, t) {
	for (let n = 0; n < e.length; ++n) if (e[n].type === t) return !0;
	return !1;
}
function Ir(e) {
	for (let t = 0; t < e.length; ++t) switch (e[t].type) {
		case "space":
		case "comment":
		case "newline": break;
		default: return t;
	}
	return -1;
}
function Lr(e) {
	switch (e?.type) {
		case "alias":
		case "scalar":
		case "single-quoted-scalar":
		case "double-quoted-scalar":
		case "flow-collection": return !0;
		default: return !1;
	}
}
function Rr(e) {
	switch (e.type) {
		case "document": return e.start;
		case "block-map": {
			let t = e.items[e.items.length - 1];
			return t.sep ?? t.start;
		}
		case "block-seq": return e.items[e.items.length - 1].start;
		/* istanbul ignore next should not happen */
		default: return [];
	}
}
function zr(e) {
	if (e.length === 0) return [];
	let t = e.length;
	loop: for (; --t >= 0;) switch (e[t].type) {
		case "doc-start":
		case "explicit-key-ind":
		case "map-value-ind":
		case "seq-item-ind":
		case "newline": break loop;
	}
	for (; e[++t]?.type === "space";);
	return e.splice(t, e.length);
}
function Br(e, t) {
	if (t.length < 1e5) Array.prototype.push.apply(e, t);
	else for (let n = 0; n < t.length; ++n) e.push(t[n]);
}
function Vr(e) {
	if (e.start.type === "flow-seq-start") for (let t of e.items) t.sep && !t.value && !Fr(t.start, "explicit-key-ind") && !Fr(t.sep, "map-value-ind") && (t.key && (t.value = t.key), delete t.key, Lr(t.value) ? t.value.end ? Br(t.value.end, t.sep) : t.value.end = t.sep : Br(t.start, t.sep), delete t.sep);
}
var Hr = class {
	constructor(e) {
		this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new Nr(), this.onNewLine = e;
	}
	*parse(e, t = !1) {
		this.onNewLine && this.offset === 0 && this.onNewLine(0);
		for (let n of this.lexer.lex(e, t)) yield* this.next(n);
		t || (yield* this.end());
	}
	*next(e) {
		if (this.source = e, this.atScalar) {
			this.atScalar = !1, yield* this.step(), this.offset += e.length;
			return;
		}
		let t = Er(e);
		if (!t) {
			let t = `Not a YAML token: ${e}`;
			yield* this.pop({
				type: "error",
				offset: this.offset,
				message: t,
				source: e
			}), this.offset += e.length;
		} else if (t === "scalar") this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
		else {
			switch (this.type = t, yield* this.step(), t) {
				case "newline":
					this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e.length);
					break;
				case "space":
					this.atNewLine && e[0] === " " && (this.indent += e.length);
					break;
				case "explicit-key-ind":
				case "map-value-ind":
				case "seq-item-ind":
					this.atNewLine && (this.indent += e.length);
					break;
				case "doc-mode":
				case "flow-error-end": return;
				default: this.atNewLine = !1;
			}
			this.offset += e.length;
		}
	}
	*end() {
		for (; this.stack.length > 0;) yield* this.pop();
	}
	get sourceToken() {
		return {
			type: this.type,
			offset: this.offset,
			indent: this.indent,
			source: this.source
		};
	}
	*step() {
		let e = this.peek(1);
		if (this.type === "doc-end" && e?.type !== "doc-end") {
			for (; this.stack.length > 0;) yield* this.pop();
			this.stack.push({
				type: "doc-end",
				offset: this.offset,
				source: this.source
			});
			return;
		}
		if (!e) return yield* this.stream();
		switch (e.type) {
			case "document": return yield* this.document(e);
			case "alias":
			case "scalar":
			case "single-quoted-scalar":
			case "double-quoted-scalar": return yield* this.scalar(e);
			case "block-scalar": return yield* this.blockScalar(e);
			case "block-map": return yield* this.blockMap(e);
			case "block-seq": return yield* this.blockSequence(e);
			case "flow-collection": return yield* this.flowCollection(e);
			case "doc-end": return yield* this.documentEnd(e);
		}
		/* istanbul ignore next should not happen */
		yield* this.pop();
	}
	peek(e) {
		return this.stack[this.stack.length - e];
	}
	*pop(e) {
		let t = e ?? this.stack.pop();
		/* istanbul ignore if should not happen */
		if (!t) yield {
			type: "error",
			offset: this.offset,
			source: "",
			message: "Tried to pop an empty stack"
		};
		else if (this.stack.length === 0) yield t;
		else {
			let e = this.peek(1);
			switch (t.type === "block-scalar" ? t.indent = "indent" in e ? e.indent : 0 : t.type === "flow-collection" && e.type === "document" && (t.indent = 0), t.type === "flow-collection" && Vr(t), e.type) {
				case "document":
					e.value = t;
					break;
				case "block-scalar":
					e.props.push(t);
					break;
				case "block-map": {
					let n = e.items[e.items.length - 1];
					if (n.value) {
						e.items.push({
							start: [],
							key: t,
							sep: []
						}), this.onKeyLine = !0;
						return;
					} else if (n.sep) n.value = t;
					else {
						Object.assign(n, {
							key: t,
							sep: []
						}), this.onKeyLine = !n.explicitKey;
						return;
					}
					break;
				}
				case "block-seq": {
					let n = e.items[e.items.length - 1];
					n.value ? e.items.push({
						start: [],
						value: t
					}) : n.value = t;
					break;
				}
				case "flow-collection": {
					let n = e.items[e.items.length - 1];
					!n || n.value ? e.items.push({
						start: [],
						key: t,
						sep: []
					}) : n.sep ? n.value = t : Object.assign(n, {
						key: t,
						sep: []
					});
					return;
				}
				/* istanbul ignore next should not happen */
				default: yield* this.pop(), yield* this.pop(t);
			}
			if ((e.type === "document" || e.type === "block-map" || e.type === "block-seq") && (t.type === "block-map" || t.type === "block-seq")) {
				let n = t.items[t.items.length - 1];
				n && !n.sep && !n.value && n.start.length > 0 && Ir(n.start) === -1 && (t.indent === 0 || n.start.every((e) => e.type !== "comment" || e.indent < t.indent)) && (e.type === "document" ? e.end = n.start : e.items.push({ start: n.start }), t.items.splice(-1, 1));
			}
		}
	}
	*stream() {
		switch (this.type) {
			case "directive-line":
				yield {
					type: "directive",
					offset: this.offset,
					source: this.source
				};
				return;
			case "byte-order-mark":
			case "space":
			case "comment":
			case "newline":
				yield this.sourceToken;
				return;
			case "doc-mode":
			case "doc-start": {
				let e = {
					type: "document",
					offset: this.offset,
					start: []
				};
				this.type === "doc-start" && e.start.push(this.sourceToken), this.stack.push(e);
				return;
			}
		}
		yield {
			type: "error",
			offset: this.offset,
			message: `Unexpected ${this.type} token in YAML stream`,
			source: this.source
		};
	}
	*document(e) {
		if (e.value) return yield* this.lineEnd(e);
		switch (this.type) {
			case "doc-start":
				Ir(e.start) === -1 ? e.start.push(this.sourceToken) : (yield* this.pop(), yield* this.step());
				return;
			case "anchor":
			case "tag":
			case "space":
			case "comment":
			case "newline":
				e.start.push(this.sourceToken);
				return;
		}
		let t = this.startBlockValue(e);
		t ? this.stack.push(t) : yield {
			type: "error",
			offset: this.offset,
			message: `Unexpected ${this.type} token in YAML document`,
			source: this.source
		};
	}
	*scalar(e) {
		if (this.type === "map-value-ind") {
			let t = zr(Rr(this.peek(2))), n;
			e.end ? (n = e.end, n.push(this.sourceToken), delete e.end) : n = [this.sourceToken];
			let r = {
				type: "block-map",
				offset: e.offset,
				indent: e.indent,
				items: [{
					start: t,
					key: e,
					sep: n
				}]
			};
			this.onKeyLine = !0, this.stack[this.stack.length - 1] = r;
		} else yield* this.lineEnd(e);
	}
	*blockScalar(e) {
		switch (this.type) {
			case "space":
			case "comment":
			case "newline":
				e.props.push(this.sourceToken);
				return;
			case "scalar":
				if (e.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
					let e = this.source.indexOf("\n") + 1;
					for (; e !== 0;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1;
				}
				yield* this.pop();
				break;
			/* istanbul ignore next should not happen */
			default: yield* this.pop(), yield* this.step();
		}
	}
	*blockMap(e) {
		let t = e.items[e.items.length - 1];
		switch (this.type) {
			case "newline":
				if (this.onKeyLine = !1, t.value) {
					let n = "end" in t.value ? t.value.end : void 0;
					(Array.isArray(n) ? n[n.length - 1] : void 0)?.type === "comment" ? n?.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
				} else t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
				return;
			case "space":
			case "comment":
				if (t.value) e.items.push({ start: [this.sourceToken] });
				else if (t.sep) t.sep.push(this.sourceToken);
				else {
					if (this.atIndentedComment(t.start, e.indent)) {
						let n = e.items[e.items.length - 2]?.value?.end;
						if (Array.isArray(n)) {
							Br(n, t.start), n.push(this.sourceToken), e.items.pop();
							return;
						}
					}
					t.start.push(this.sourceToken);
				}
				return;
		}
		if (this.indent >= e.indent) {
			let n = !this.onKeyLine && this.indent === e.indent, r = n && (t.sep || t.explicitKey) && this.type !== "seq-item-ind", i = [];
			if (r && t.sep && !t.value) {
				let n = [];
				for (let r = 0; r < t.sep.length; ++r) {
					let i = t.sep[r];
					switch (i.type) {
						case "newline":
							n.push(r);
							break;
						case "space": break;
						case "comment":
							i.indent > e.indent && (n.length = 0);
							break;
						default: n.length = 0;
					}
				}
				n.length >= 2 && (i = t.sep.splice(n[1]));
			}
			switch (this.type) {
				case "anchor":
				case "tag":
					r || t.value ? (i.push(this.sourceToken), e.items.push({ start: i }), this.onKeyLine = !0) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
					return;
				case "explicit-key-ind":
					!t.sep && !t.explicitKey ? (t.start.push(this.sourceToken), t.explicitKey = !0) : r || t.value ? (i.push(this.sourceToken), e.items.push({
						start: i,
						explicitKey: !0
					})) : this.stack.push({
						type: "block-map",
						offset: this.offset,
						indent: this.indent,
						items: [{
							start: [this.sourceToken],
							explicitKey: !0
						}]
					}), this.onKeyLine = !0;
					return;
				case "map-value-ind":
					if (t.explicitKey) if (!t.sep) if (Fr(t.start, "newline")) Object.assign(t, {
						key: null,
						sep: [this.sourceToken]
					});
					else {
						let e = zr(t.start);
						this.stack.push({
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start: e,
								key: null,
								sep: [this.sourceToken]
							}]
						});
					}
					else if (t.value) e.items.push({
						start: [],
						key: null,
						sep: [this.sourceToken]
					});
					else if (Fr(t.sep, "map-value-ind")) this.stack.push({
						type: "block-map",
						offset: this.offset,
						indent: this.indent,
						items: [{
							start: i,
							key: null,
							sep: [this.sourceToken]
						}]
					});
					else if (Lr(t.key) && !Fr(t.sep, "newline")) {
						let e = zr(t.start), n = t.key, r = t.sep;
						r.push(this.sourceToken), delete t.key, delete t.sep, this.stack.push({
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start: e,
								key: n,
								sep: r
							}]
						});
					} else i.length > 0 ? t.sep = t.sep.concat(i, this.sourceToken) : t.sep.push(this.sourceToken);
					else t.sep ? t.value || r ? e.items.push({
						start: i,
						key: null,
						sep: [this.sourceToken]
					}) : Fr(t.sep, "map-value-ind") ? this.stack.push({
						type: "block-map",
						offset: this.offset,
						indent: this.indent,
						items: [{
							start: [],
							key: null,
							sep: [this.sourceToken]
						}]
					}) : t.sep.push(this.sourceToken) : Object.assign(t, {
						key: null,
						sep: [this.sourceToken]
					});
					this.onKeyLine = !0;
					return;
				case "alias":
				case "scalar":
				case "single-quoted-scalar":
				case "double-quoted-scalar": {
					let n = this.flowScalar(this.type);
					r || t.value ? (e.items.push({
						start: i,
						key: n,
						sep: []
					}), this.onKeyLine = !0) : t.sep ? this.stack.push(n) : (Object.assign(t, {
						key: n,
						sep: []
					}), this.onKeyLine = !0);
					return;
				}
				default: {
					let r = this.startBlockValue(e);
					if (r) {
						if (r.type === "block-seq") {
							if (!t.explicitKey && t.sep && !Fr(t.sep, "newline")) {
								yield* this.pop({
									type: "error",
									offset: this.offset,
									message: "Unexpected block-seq-ind on same line with key",
									source: this.source
								});
								return;
							}
						} else n && e.items.push({ start: i });
						this.stack.push(r);
						return;
					}
				}
			}
		}
		yield* this.pop(), yield* this.step();
	}
	*blockSequence(e) {
		let t = e.items[e.items.length - 1];
		switch (this.type) {
			case "newline":
				if (t.value) {
					let n = "end" in t.value ? t.value.end : void 0;
					(Array.isArray(n) ? n[n.length - 1] : void 0)?.type === "comment" ? n?.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
				} else t.start.push(this.sourceToken);
				return;
			case "space":
			case "comment":
				if (t.value) e.items.push({ start: [this.sourceToken] });
				else {
					if (this.atIndentedComment(t.start, e.indent)) {
						let n = e.items[e.items.length - 2]?.value?.end;
						if (Array.isArray(n)) {
							Br(n, t.start), n.push(this.sourceToken), e.items.pop();
							return;
						}
					}
					t.start.push(this.sourceToken);
				}
				return;
			case "anchor":
			case "tag":
				if (t.value || this.indent <= e.indent) break;
				t.start.push(this.sourceToken);
				return;
			case "seq-item-ind":
				if (this.indent !== e.indent) break;
				t.value || Fr(t.start, "seq-item-ind") ? e.items.push({ start: [this.sourceToken] }) : t.start.push(this.sourceToken);
				return;
		}
		if (this.indent > e.indent) {
			let t = this.startBlockValue(e);
			if (t) {
				this.stack.push(t);
				return;
			}
		}
		yield* this.pop(), yield* this.step();
	}
	*flowCollection(e) {
		let t = e.items[e.items.length - 1];
		if (this.type === "flow-error-end") {
			let e;
			do
				yield* this.pop(), e = this.peek(1);
			while (e?.type === "flow-collection");
		} else if (e.end.length === 0) {
			switch (this.type) {
				case "comma":
				case "explicit-key-ind":
					!t || t.sep ? e.items.push({ start: [this.sourceToken] }) : t.start.push(this.sourceToken);
					return;
				case "map-value-ind":
					!t || t.value ? e.items.push({
						start: [],
						key: null,
						sep: [this.sourceToken]
					}) : t.sep ? t.sep.push(this.sourceToken) : Object.assign(t, {
						key: null,
						sep: [this.sourceToken]
					});
					return;
				case "space":
				case "comment":
				case "newline":
				case "anchor":
				case "tag":
					!t || t.value ? e.items.push({ start: [this.sourceToken] }) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
					return;
				case "alias":
				case "scalar":
				case "single-quoted-scalar":
				case "double-quoted-scalar": {
					let n = this.flowScalar(this.type);
					!t || t.value ? e.items.push({
						start: [],
						key: n,
						sep: []
					}) : t.sep ? this.stack.push(n) : Object.assign(t, {
						key: n,
						sep: []
					});
					return;
				}
				case "flow-map-end":
				case "flow-seq-end":
					e.end.push(this.sourceToken);
					return;
			}
			let n = this.startBlockValue(e);
			/* istanbul ignore else should not happen */
			n ? this.stack.push(n) : (yield* this.pop(), yield* this.step());
		} else {
			let t = this.peek(2);
			if (t.type === "block-map" && (this.type === "map-value-ind" && t.indent === e.indent || this.type === "newline" && !t.items[t.items.length - 1].sep)) yield* this.pop(), yield* this.step();
			else if (this.type === "map-value-ind" && t.type !== "flow-collection") {
				let n = zr(Rr(t));
				Vr(e);
				let r = e.end.splice(1, e.end.length);
				r.push(this.sourceToken);
				let i = {
					type: "block-map",
					offset: e.offset,
					indent: e.indent,
					items: [{
						start: n,
						key: e,
						sep: r
					}]
				};
				this.onKeyLine = !0, this.stack[this.stack.length - 1] = i;
			} else yield* this.lineEnd(e);
		}
	}
	flowScalar(e) {
		if (this.onNewLine) {
			let e = this.source.indexOf("\n") + 1;
			for (; e !== 0;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1;
		}
		return {
			type: e,
			offset: this.offset,
			indent: this.indent,
			source: this.source
		};
	}
	startBlockValue(e) {
		switch (this.type) {
			case "alias":
			case "scalar":
			case "single-quoted-scalar":
			case "double-quoted-scalar": return this.flowScalar(this.type);
			case "block-scalar-header": return {
				type: "block-scalar",
				offset: this.offset,
				indent: this.indent,
				props: [this.sourceToken],
				source: ""
			};
			case "flow-map-start":
			case "flow-seq-start": return {
				type: "flow-collection",
				offset: this.offset,
				indent: this.indent,
				start: this.sourceToken,
				items: [],
				end: []
			};
			case "seq-item-ind": return {
				type: "block-seq",
				offset: this.offset,
				indent: this.indent,
				items: [{ start: [this.sourceToken] }]
			};
			case "explicit-key-ind": {
				this.onKeyLine = !0;
				let t = zr(Rr(e));
				return t.push(this.sourceToken), {
					type: "block-map",
					offset: this.offset,
					indent: this.indent,
					items: [{
						start: t,
						explicitKey: !0
					}]
				};
			}
			case "map-value-ind": {
				this.onKeyLine = !0;
				let t = zr(Rr(e));
				return {
					type: "block-map",
					offset: this.offset,
					indent: this.indent,
					items: [{
						start: t,
						key: null,
						sep: [this.sourceToken]
					}]
				};
			}
		}
		return null;
	}
	atIndentedComment(e, t) {
		return this.type !== "comment" || this.indent <= t ? !1 : e.every((e) => e.type === "newline" || e.type === "space");
	}
	*documentEnd(e) {
		this.type !== "doc-mode" && (e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
	}
	*lineEnd(e) {
		switch (this.type) {
			case "comma":
			case "doc-start":
			case "doc-end":
			case "flow-seq-end":
			case "flow-map-end":
			case "map-value-ind":
				yield* this.pop(), yield* this.step();
				break;
			case "newline": this.onKeyLine = !1;
			default: e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
		}
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/public-api.js
function Ur(e) {
	let t = e.prettyErrors !== !1;
	return {
		lineCounter: e.lineCounter || t && new Pr() || null,
		prettyErrors: t
	};
}
function Wr(e, t = {}) {
	let { lineCounter: n, prettyErrors: r } = Ur(t), i = new Hr(n?.addNewLine), a = new br(t), o = null;
	for (let t of a.compose(i.parse(e), !0, e.length)) if (!o) o = t;
	else if (o.options.logLevel !== "silent") {
		o.errors.push(new In(t.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
		break;
	}
	return r && n && (o.errors.forEach(Rn(e, n)), o.warnings.forEach(Rn(e, n))), o;
}
function Gr(e, t, n) {
	let r;
	typeof t == "function" ? r = t : n === void 0 && t && typeof t == "object" && (n = t);
	let i = Wr(e, n);
	if (!i) return null;
	if (i.warnings.forEach((e) => ht(i.options.logLevel, e)), i.errors.length > 0) {
		if (i.options.logLevel !== "silent") throw i.errors[0];
		i.errors = [];
	}
	return i.toJS(Object.assign({ reviver: r }, n));
}
//#endregion
//#region src/components/SparqlConnection.vue
var Kr = {
	name: "SparqlConnection",
	setup() {
		return {
			store: n(),
			selection: t()
		};
	},
	data() {
		return {
			configure_endpoint_modal: null,
			endpoint_type: "quit",
			query_url: "",
			update_url: "",
			quit_url: ""
		};
	},
	mounted() {
		this.configure_endpoint_modal = new r(this.$refs.configure_endpoint), this.$refs.configure_endpoint.addEventListener("show.bs.modal", (e) => {
			this.get_endpoint_configuration();
		});
	},
	computed: {
		...le(n, { store_ready: (e) => e.ready }),
		store_capability: { get() {
			return this.store.sparqlEndpoint.capability;
		} },
		graph_iri: {
			get() {
				return this.selection.graph_iri;
			},
			set(e) {
				this.store.changeGraphIri(e);
			}
		},
		resource_iri: {
			get() {
				return this.selection.resource_iri;
			},
			set(e) {
				this.selection.changeResourceIri(e);
			}
		}
	},
	methods: {
		push() {
			this.store.push();
		},
		pull() {
			this.store.pull();
		},
		get_endpoint_configuration() {
			let e = this.store.sparqlEndpoint;
			this.quit_url = "", this.query_url = "", this.update_url = "", this.endpoint_type = e.type, e.type === "quit" ? this.quit_url = e.quitUrl : e.type === "query_only" ? this.query_url = e.queryUrl : e.type === "query_update" && (this.query_url = e.queryUrl, this.update_url = e.updateUrl);
		},
		configure_endpoint() {
			let e = {};
			if (this.endpoint_type === "quit" && this.quit_url) e.quit_url = this.quit_url;
			else {
				if (!this.query_url) {
					console.error("Not even a query_url is given. Not chaning the endpoint configuration.");
					return;
				}
				e.query_url = this.query_url, this.update_url && (e.update_url = this.update_url);
			}
			this.store.updateEndpointConfiguration(e);
		}
	}
}, qr = {
	key: 0,
	inline: "",
	class: "col-12"
}, Jr = {
	class: "btn-group col-1 mb-2 mr-sm-2 mb-sm-0",
	role: "group"
}, Yr = {
	class: "modal fade",
	ref: "configure_endpoint",
	tabindex: "-1",
	"aria-hidden": "true",
	"data-bs-backdrop": "static",
	size: "lg"
}, Xr = { class: "modal-dialog modal-lg" }, Zr = { class: "modal-content" }, Qr = { class: "modal-header" }, $r = { class: "modal-body" }, ei = {
	class: "form-group",
	label: "Endpoint Type"
}, ti = {
	key: 0,
	class: "form-group"
}, ni = {
	key: 1,
	class: "form-group"
}, ri = {
	key: 2,
	class: "form-group"
}, ii = { class: "modal-footer" };
function ai(e, t, n, r, i, a) {
	return C(), m(l, null, [e.store_ready ? (C(), m("form", qr, [
		h("div", Jr, [
			h("button", {
				type: "button",
				class: "btn btn-outline-secondary mb-0",
				onClick: t[0] ||= (e) => i.configure_endpoint_modal.show(),
				title: "Configure Endpoint",
				"aria-label": "Configure Endpoint"
			}, [...t[14] ||= [h("i", { class: "bi bi-gear" }, null, -1)]]),
			a.store_capability.quit ? (C(), m("button", {
				key: 0,
				type: "button",
				class: "btn btn-outline-secondary mb-0",
				onClick: t[1] ||= (e) => a.push(),
				title: "Push To Remote Repository",
				"aria-label": "Push To Remote Repository"
			}, [...t[15] ||= [h("i", { class: "bi bi-cloud-upload" }, null, -1)]])) : p("", !0),
			a.store_capability.quit ? (C(), m("button", {
				key: 1,
				type: "button",
				class: "btn btn-outline-secondary mb-0",
				onClick: t[2] ||= (e) => a.pull(),
				title: "Pull From Remote Repository",
				"aria-label": "Pull From Remote Repository"
			}, [...t[16] ||= [h("i", { class: "bi bi-cloud-download" }, null, -1)]])) : p("", !0)
		]),
		t[17] ||= h("label", {
			for: "select_url",
			class: "col-1 mr-sm-2"
		}, "Graph IRI", -1),
		A(h("input", {
			type: "text",
			class: "form-control col-2",
			id: "graph_iri",
			"onUpdate:modelValue": t[3] ||= (e) => a.graph_iri = e
		}, null, 512), [[ae, a.graph_iri]]),
		t[18] ||= h("label", {
			for: "select_url",
			class: "col-1 mr-sm-2"
		}, "Resource IRI", -1),
		A(h("input", {
			type: "text",
			class: "form-control col-6",
			id: "resource_iri",
			"onUpdate:modelValue": t[4] ||= (e) => a.resource_iri = e
		}, null, 512), [[ae, a.resource_iri]])
	])) : p("", !0), h("div", Yr, [h("div", Xr, [h("div", Zr, [
		h("div", Qr, [t[19] ||= h("h5", { class: "modal-title" }, "Configure Endpoint", -1), h("button", {
			type: "button",
			class: "btn-close",
			onClick: t[5] ||= (e) => i.configure_endpoint_modal.hide(),
			"aria-label": "Close"
		})]),
		h("div", $r, [h("form", null, [
			h("div", ei, [
				A(h("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[6] ||= (e) => i.endpoint_type = e,
					id: "query_only",
					value: "query_only"
				}, null, 512), [[ie, i.endpoint_type]]),
				t[20] ||= h("label", {
					class: "form-check-label",
					for: "query_only"
				}, "Query only", -1),
				A(h("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[7] ||= (e) => i.endpoint_type = e,
					id: "query_update",
					value: "query_update"
				}, null, 512), [[ie, i.endpoint_type]]),
				t[21] ||= h("label", {
					class: "form-check-label",
					for: "query_update"
				}, "Query & Update", -1),
				A(h("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[8] ||= (e) => i.endpoint_type = e,
					id: "quit",
					value: "quit"
				}, null, 512), [[ie, i.endpoint_type]]),
				t[22] ||= h("label", {
					class: "form-check-label",
					for: "quit"
				}, "Quit Store", -1)
			]),
			i.endpoint_type == "quit" ? (C(), m("div", ti, [t[23] ||= h("label", { for: "quit_url" }, "Quit URL", -1), h("div", null, [A(h("input", {
				type: "text",
				class: "form-control",
				id: "quit_url",
				"onUpdate:modelValue": t[9] ||= (e) => i.quit_url = e,
				placeholder: "http://your.quit.store.org/"
			}, null, 512), [[ae, i.quit_url]])])])) : p("", !0),
			i.endpoint_type == "query_only" || i.endpoint_type == "query_update" ? (C(), m("div", ni, [t[24] ||= h("label", { for: "query_url" }, "Query URL", -1), h("div", null, [A(h("input", {
				type: "text",
				class: "form-control",
				id: "query_url",
				"onUpdate:modelValue": t[10] ||= (e) => i.query_url = e,
				placeholder: "http://your.sparql.store.org/query"
			}, null, 512), [[ae, i.query_url]])])])) : p("", !0),
			i.endpoint_type == "query_update" ? (C(), m("div", ri, [t[25] ||= h("label", { for: "update_url" }, "Update URL", -1), h("div", null, [A(h("input", {
				type: "text",
				class: "form-control",
				id: "update_url",
				"onUpdate:modelValue": t[11] ||= (e) => i.update_url = e,
				placeholder: "http://your.sparql.store.org/update"
			}, null, 512), [[ae, i.update_url]])])])) : p("", !0)
		])]),
		h("div", ii, [h("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[12] ||= (e) => i.configure_endpoint_modal.hide()
		}, "Close"), h("button", {
			type: "button",
			class: "btn btn-primary",
			onClick: t[13] ||= (e) => {
				a.configure_endpoint(), i.configure_endpoint_modal.hide();
			}
		}, "Save changes")])
	])])], 512)], 64);
}
var oi = /*#__PURE__*/ i(Kr, [["render", ai]]), si = {
	name: "GraphList",
	setup() {
		return { store: n() };
	},
	components: {
		TermInput: o,
		QueryResultList: a
	},
	props: {
		graph_iri: String,
		selectGraph: Function
	},
	data() {
		return {
			graphs: [],
			new_graph_iri: e.namedNode(""),
			add_graph_modal: null
		};
	},
	mounted() {
		this.add_graph_modal = new r(this.$refs.add_graph);
	},
	methods: { async add_graph() {
		let t = [e.quad(this.new_graph_iri, e.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), e.namedNode("http://www.w3.org/2000/01/rdf-schema#Graph"))];
		console.log(this.new_graph_iri);
		try {
			await this.store.deleteInsertData({
				insertArray: t,
				graphIri: this.new_graph_iri.value
			}), this.add_graph_modal.hide();
		} catch (e) {
			console.error(e);
		}
	} }
}, ci = {
	class: "modal fade",
	ref: "add_graph",
	tabindex: "-1",
	"aria-hidden": "true",
	"data-bs-backdrop": "static",
	size: "lg"
}, li = { class: "modal-dialog modal-lg" }, ui = { class: "modal-content" }, di = { class: "modal-header" }, fi = { class: "modal-body" }, pi = { class: "form-group" }, mi = { class: "modal-footer" };
function hi(e, t, n, r, i, a) {
	let o = D("QueryResultList"), s = D("TermInput");
	return C(), m("div", null, [_(o, {
		title: "Graph List",
		search: "",
		query: "select distinct ?graph { graph ?graph {?s ?p ?o}} order by ?graph",
		"query-quads": "",
		"select-variable": "graph",
		ref: "classList",
		add: () => {
			i.add_graph_modal.show();
		},
		selectResource: n.selectGraph,
		activeResource: n.graph_iri
	}, null, 8, [
		"add",
		"selectResource",
		"activeResource"
	]), h("div", ci, [h("div", li, [h("div", ui, [
		h("div", di, [t[4] ||= h("h5", { class: "modal-title" }, "Create New Graph", -1), h("button", {
			type: "button",
			class: "btn-close",
			onClick: t[0] ||= (e) => i.add_graph_modal.hide(),
			"aria-label": "Close"
		})]),
		h("div", fi, [h("form", null, [h("div", pi, [t[5] ||= h("label", { for: "new_graph_iri" }, "IRI", -1), h("div", null, [_(s, {
			type: "iri",
			id: "new_graph_iri",
			term: i.new_graph_iri,
			"onUpdate:term": t[1] ||= (e) => i.new_graph_iri = e
		}, null, 8, ["term"])])])])]),
		h("div", mi, [h("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[2] ||= (e) => i.add_graph_modal.hide()
		}, "Close"), h("button", {
			type: "button",
			class: "btn btn-primary",
			onClick: t[3] ||= (e) => a.add_graph()
		}, "Save changes")])
	])])], 512)]);
}
var gi = /*#__PURE__*/ i(si, [["render", hi]]), _i = {
	name: "ClassList",
	props: {
		class_iri: String,
		selectClass: Function
	},
	watch: { graph_iri(e) {
		console.log("graph_iri changed" + e), this.$refs.classList.updateList();
	} },
	computed: { ...le(t, ["graph_iri"]) }
}, vi = /*@__PURE__*/ Object.assign(_i, { setup(e) {
	return (t, n) => (C(), f(a, {
		title: "Class List",
		search: "",
		query: "select distinct ?class { {?s a ?class} union {?class a <http://www.w3.org/2000/01/rdf-schema#Class>} union {?class a <http://www.w3.org/2002/07/owl#Class>} } order by ?class",
		"select-variable": "class",
		ref: "classList",
		activeResource: e.class_iri,
		selectResource: e.selectClass
	}, null, 8, ["activeResource", "selectResource"]));
} });
//#endregion
//#region node_modules/nostics/dist/index.mjs
function yi(e) {
	let t = `[${e.name}] ${e.message}`, n = [];
	return e.fix && n.push(`fix: ${e.fix}`), e.sources?.length && n.push(`sources: ${e.sources.join(", ")}`), e.docs && n.push(`see: ${e.docs}`), n.length === 0 ? t : [t, ...n.map((e, t) => `${t < n.length - 1 ? "├▶" : "╰▶"} ${e}`)].join("\n");
}
function bi(e, ...t) {
	return typeof e == "function" ? e(...t) : e;
}
/* @__NO_SIDE_EFFECTS__ */
function xi({ method: e = "warn", formatter: t = yi } = {}) {
	return (n, { method: r = e } = {}) => {
		console[r](t(n));
	};
}
var Si = Error.captureStackTrace, Ci = class e extends Error {
	name = "Diagnostic";
	docs;
	fix;
	sources;
	get why() {
		return this.message;
	}
	constructor(t, n = e) {
		super(t.why, { cause: t.cause }), this.fix = t.fix, this.docs = t.docs, this.sources = t.sources, Si?.(this, n);
	}
	toJSON() {
		return {
			name: this.name,
			why: this.why,
			fix: this.fix,
			docs: this.docs,
			sources: this.sources,
			cause: this.cause,
			stack: this.stack
		};
	}
};
function wi(e, t) {
	return typeof e == "string" ? `${e}/${t.toLowerCase()}` : e?.(t);
}
/* @__NO_SIDE_EFFECTS__ */
function Ti(e) {
	let t = e.reporters ?? [], n = {}, { docsBase: r } = e;
	for (let i of Object.keys(e.codes)) {
		let a = e.codes[i], o = a.docs === !1 ? void 0 : a.docs || wi(r, i), s = (e = {}, n = {}) => {
			let r = new Ci({
				why: bi(a.why, e),
				fix: bi(a.fix, e),
				docs: o,
				cause: e.cause,
				sources: e.sources
			}, s);
			r.name = i;
			for (let e of t) e(r, n);
			return r;
		};
		n[i] = s;
	}
	return n;
}
//#endregion
//#region node_modules/vue-router/dist/useApi-CROJJdhE.js
function Ei(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Di(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ei(e.default);
}
var U = Object.assign;
function Oi(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = W(i) ? i.map(e) : e(i);
	}
	return n;
}
var ki = () => {}, W = Array.isArray;
function Ai(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var ji = Symbol(process.env.NODE_ENV === "production" ? "" : "navigation failure"), Mi = {
	1({ location: e, currentLocation: t }) {
		return `No match for\n ${JSON.stringify(e)}${t ? "\nwhile being at\n" + JSON.stringify(t) : ""}`;
	},
	2({ from: e, to: t }) {
		return `Redirected from "${e.fullPath}" to "${Ii(t)}" via a navigation guard.`;
	},
	4({ from: e, to: t }) {
		return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
	},
	8({ from: e, to: t }) {
		return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
	},
	16({ from: e, to: t }) {
		return `Avoided redundant navigation to current location: "${e.fullPath}".`;
	}
};
function Ni(e, t) {
	return process.env.NODE_ENV === "production" ? U(/* @__PURE__ */ Error(), {
		type: e,
		[ji]: !0
	}, t) : U(Error(Mi[e](t)), {
		type: e,
		[ji]: !0
	}, t);
}
function Pi(e, t) {
	return e instanceof Error && ji in e && (t == null || !!(e.type & t));
}
var Fi = [
	"params",
	"query",
	"hash"
];
function Ii(e) {
	if (!e || typeof e == "string") return e;
	if (e.path != null) return e.path;
	let t = {};
	for (let n of Fi) n in e && (t[n] = e[n]);
	return JSON.stringify(t, null, 2);
}
var G = /*#__PURE__*/ Ti({
	reporters: [/*#__PURE__*/ xi()],
	codes: {
		VUE_ROUTER_R0001: {
			why: (e) => `Parent route "${e.name}" not found when adding child route`,
			fix: "Add the parent route before its children, or check the parent name for typos.",
			docs: "https://router.vuejs.org/guide/advanced/dynamic-routing.html#Adding-nested-routes"
		},
		VUE_ROUTER_R0002: {
			why: (e) => `Cannot remove non-existent route "${e.name}"`,
			fix: "Check the route name; it may already have been removed or was never added.",
			docs: "https://router.vuejs.org/guide/advanced/dynamic-routing.html#Removing-routes"
		},
		VUE_ROUTER_R0003: {
			why: (e) => `Location "${Ii(e.location)}" resolved to "${e.href}". A resolved location cannot start with multiple slashes.`,
			fix: "Remove the leading slashes from the location or fix the route configuration."
		},
		VUE_ROUTER_R0004: {
			why: (e) => `No match found for location with path "${Ii(e.path)}"`,
			fix: "Add a route matching this path or check for typos in the location.",
			docs: "https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route"
		},
		VUE_ROUTER_R0005: {
			why: (e) => `router.resolve() was passed an invalid location. This will fail in production.\nLocation: ${Ii(e.rawLocation)}`,
			fix: "Pass a valid route location: a string path or an object with `path` or `name`."
		},
		VUE_ROUTER_R0006: {
			why: (e) => `Path "${e.path}" was passed with params but they will be ignored because a "path" was passed.`,
			fix: "Use a named route `{ name, params }` instead of `{ path, params }`.",
			docs: "https://router.vuejs.org/guide/essentials/navigation.html#Navigate-to-a-different-location"
		},
		VUE_ROUTER_R0007: {
			why: (e) => `A \`hash\` should always start with the character "#" but received "${e.hash}".`,
			fix: (e) => `Prepend "#" to the hash in your route location: use "#${e.hash}".`
		},
		VUE_ROUTER_R0008: {
			why: (e) => `Invalid redirect found:\n${e.target}\n when navigating to "${e.to}".\nThis will break in production.`,
			fix: "A redirect must resolve to a location with a `name` or `path`; return one of those (or a string path) from `redirect`.",
			docs: "https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Redirect"
		},
		VUE_ROUTER_R0009: {
			why: (e) => `Detected a possibly infinite redirection in a navigation guard when going from "${e.from}" to "${e.to}". Aborting to avoid a Stack Overflow. This might break in production if not fixed.`,
			fix: "A guard is returning a new location on every call; make that return conditional so it only redirects when actually needed.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Global-Before-Guards"
		},
		VUE_ROUTER_R0010: {
			why: "Uncaught error during route navigation",
			fix: "Register an error handler with `router.onError()` to handle navigation errors."
		},
		VUE_ROUTER_R0011: {
			why: "Unexpected error when starting the router:",
			fix: "Inspect the actual cause; a navigation guard or async component likely threw during the initial navigation."
		},
		VUE_ROUTER_R0020: {
			why: (e) => `No active route record was found when calling \`${e.fn}()\`. Maybe you called it inside of App.vue?`,
			fix: "Call it from a component rendered inside <router-view> (a page component or one of its children), not from App.vue.",
			docs: "https://router.vuejs.org/guide/advanced/composition-api.html#Navigation-Guards"
		},
		VUE_ROUTER_R0021: {
			why: "No active route record was found when reactivating component with navigation guard. This is likely a bug in vue-router.",
			fix: "Report with a minimal reproduction at https://github.com/vuejs/router/issues/new/choose."
		},
		VUE_ROUTER_R0022: {
			why: (e) => `${e.fn}() was called outside of component setup but it must be called at the top of a setup function`,
			fix: "Call it synchronously at the top of `setup()`, before any `await`.",
			docs: "https://router.vuejs.org/guide/advanced/composition-api.html#Navigation-Guards"
		},
		VUE_ROUTER_R0023: {
			why: (e) => `The "next" callback was never called inside of ${e.name ? `"${e.name}"` : ""}:\n${e.guard}`,
			fix: "Make sure `next()` runs on every branch, including early returns and async paths, or drop the `next` parameter and return the value instead.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0024: {
			why: (e) => `The "next" callback was called more than once in one navigation guard when going from "${e.from}" to "${e.to}". This will fail in production.`,
			fix: "Call `next()` exactly once per guard: remove the extra call, or migrate to returning the value you passed to `next()`.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0025: {
			why: "The `next()` callback in navigation guards is deprecated.",
			fix: "Return the value instead: `next()` becomes `return`, `next(false)` becomes `return false`, `next(\"/path\")` becomes `return \"/path\"`.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0026: {
			why: (e) => `Record with path "${e.path}" is either missing a "component(s)" or "children" property.`,
			fix: "Add a `component`, `components`, or `children` to the route record.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html"
		},
		VUE_ROUTER_R0027: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is not a valid component. Received "${e.received}".`,
			fix: "Pass a component or a function returning a Promise that resolves to one."
		},
		VUE_ROUTER_R0028: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is a Promise instead of a function that returns a Promise. This will break in production if not fixed.`,
			fix: "Defer the import in an arrow function so it loads lazily: write \"() => import('./MyPage.vue')\", not \"import('./MyPage.vue')\".",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html"
		},
		VUE_ROUTER_R0029: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is defined using "defineAsyncComponent()".`,
			fix: "Drop the wrapper and pass \"() => import('./MyPage.vue')\" directly; the router handles lazy components itself.",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html#Relationship-to-async-components"
		},
		VUE_ROUTER_R0030: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is a function that does not return a Promise. This will break in production if not fixed.`,
			fix: "Return a dynamic import (`() => import(\"./MyPage.vue\")`) from the function, or add a `displayName` if it is a functional component.",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html"
		},
		VUE_ROUTER_R0040: {
			why: (e) => `Because "${e.el}" starts with "#", scrollBehavior resolves it as an element id via document.getElementById("${e.el.slice(1)}"), not as a CSS selector. No element has that id, but "${e.el}" does match an element with document.querySelector().`,
			fix: (e) => `Resolve the element yourself and return the node: el: document.querySelector('${e.el}').`,
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0041: {
			why: (e) => `The selector "${e.el}" is invalid. See https://mathiasbynens.be/notes/css-escapes or CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape) for the escaping rules.`,
			fix: "Build an id selector as `#${CSS.escape(id)}` so special characters in the id are escaped.",
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0042: {
			why: (e) => `Couldn't find element using selector "${e.el}" returned by scrollBehavior.`,
			fix: "Return a selector that matches an existing element, or guard against missing elements.",
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0050: {
			why: (e) => {
				let t;
				try {
					t = e.to === void 0 ? "undefined" : JSON.stringify(e.to);
				} catch {
					t = String(e.to);
				}
				return `Invalid value for prop "to" in useLink()\n- to: ${t}`;
			},
			fix: "Pass a valid route location (a string path or an object) to the \"to\" prop."
		},
		VUE_ROUTER_R0060: {
			why: (e) => `<router-view> can no longer be used directly inside <${e.comp}>.`,
			fix: (e) => `Wrap the slot's resolved component with <${e.comp}> instead of nesting <router-view> in it:\n\n<router-view v-slot="{ Component }">\n  <${e.comp}>\n    <component :is="Component" />\n  </${e.comp}>\n</router-view>`,
			docs: "https://router.vuejs.org/guide/advanced/router-view-slot.html#KeepAlive-Transition"
		},
		VUE_ROUTER_R0070: {
			why: (e) => `Cannot resolve a relative location without an absolute path. Trying to resolve "${e.to}" from "${e.from}".`,
			fix: (e) => `Resolve from an absolute \`from\` path that starts with "/", e.g. "/${e.from}".`
		},
		VUE_ROUTER_R0080: {
			why: (e) => `Error decoding "${e.text}". Using original value`,
			fix: "Ensure the value is correctly percent-encoded."
		},
		VUE_ROUTER_R0090: {
			why: (e) => `Found duplicated params with name "${e.name}" for path "${e.path}". Only the last one will be available on "$route.params".`,
			fix: "Give each param a unique name within the path.",
			docs: "https://router.vuejs.org/guide/essentials/route-matching-syntax.html"
		},
		VUE_ROUTER_R0100: {
			why: (e) => `Discarded invalid param(s) "${e.params}" when navigating.` + e.inherited + " See https://github.com/vuejs/router/commit/e887570 for more details.",
			fix: "Only pass params that exist on the target route."
		},
		VUE_ROUTER_R0101: {
			why: (e) => `The Matcher cannot resolve relative paths but received "${e.path}". Unless you directly called \`matcher.resolve("${e.path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`,
			fix: "Pass an absolute path (starting with \"/\") to the matcher."
		},
		VUE_ROUTER_R0102: {
			why: (e) => `Alias "${e.alias}" and the original record: "${e.original}" must have the exact same param named "${e.name}"`,
			fix: "Use the same param names in the alias as in the original route.",
			docs: "https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Alias"
		},
		VUE_ROUTER_R0103: {
			why: (e) => `The route named "${e.name}" has a child without a name, an empty path, and no children. Using that name won't render the empty path child, so this is probably a mistake.`,
			fix: "Move the `name` onto the empty-path child; or, if intentional, give the child its own name to silence this.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html#Nested-Named-Routes"
		},
		VUE_ROUTER_R0104: {
			why: (e) => `Absolute path "${e.path}" must have the exact same param named "${e.name}" as its parent "${e.parent}".`,
			fix: "Include the parent route params in the absolute child path.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html"
		},
		VUE_ROUTER_R0105: {
			why: (e) => `Finding ancestor route "${e.ancestor}" failed for "${e.record}"`,
			fix: "Report a reproduction at https://github.com/vuejs/router/issues/new/choose."
		},
		VUE_ROUTER_R0110: {
			why: "A hash base must end with a \"#\"",
			fix: (e) => `Append "#" to the "base" argument passed to "createWebHashHistory()": "${e.base}" should be "${e.suggestion}".`
		},
		VUE_ROUTER_R0120: {
			why: "Error with push/replace State",
			fix: "The browser rejected the history API call; check for cross-origin or rate-limit issues."
		},
		VUE_ROUTER_R0121: {
			why: "history.state seems to have been manually replaced without preserving the necessary values.\nYou can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state",
			fix: "Merge the router's state into your own when calling it manually: `history.replaceState({ ...history.state, ...yourState }, '', url)`.",
			docs: "https://router.vuejs.org/guide/migration.html#Usage-of-history-state"
		},
		VUE_ROUTER_R1001: {
			why: (e) => `Data loader "${String(e.key)}" has a different parent than the current context. This shouldn't be happening.`,
			fix: "Report a bug with a minimal reproduction at https://github.com/vuejs/router/."
		},
		VUE_ROUTER_R1002: {
			why: "Returning a NavigationResult is deprecated.",
			fix: "Replace `return new NavigationResult(to)` with `reroute(to)`, which throws internally to reroute.",
			docs: "https://router.vuejs.org/data-loaders/navigation-aware.html#Controlling-the-navigation-with-reroute-"
		},
		VUE_ROUTER_R1003: {
			why: (e) => `Loader "${e.key}"'s "commit()" was called but there is no staged data.`,
			fix: "Ensure the loader resolved before calling `commit()`.",
			docs: "https://router.vuejs.org/data-loaders/defining-loaders.html#Delaying-data-updates-with-commit"
		},
		VUE_ROUTER_R1004: {
			why: (e) => "A loader returned a NavigationResult but is not registered on the route." + e.key,
			fix: "Export the loader from the page component so it gets registered, e.g. `export const useUserData = defineLoader(...)`.",
			docs: "https://router.vuejs.org/data-loaders/organization.html"
		},
		VUE_ROUTER_R1005: {
			why: (e) => `Data loader "${e.key}" has itself as parent. This shouldn't be happening.`,
			fix: "Report a bug with a minimal reproduction at https://github.com/vuejs/router/."
		},
		VUE_ROUTER_R1006: {
			why: (e) => `A query was defined with the same key as the loader "[${e.key}]".\nSee https://pinia-colada.esm.dev/#TODO`,
			fix: "If the key is meant to match, use the data loader directly; otherwise rename the `useQuery()` key so it no longer collides.",
			docs: "https://router.vuejs.org/data-loaders/colada.html"
		},
		VUE_ROUTER_R1007: {
			why: "Data Loader was setup twice.",
			fix: "Register `DataLoaderPlugin` a single time via `app.use()`.",
			docs: "https://router.vuejs.org/data-loaders.html#Installation"
		},
		VUE_ROUTER_R1008: {
			why: "Data Loader is experimental and subject to breaking changes in the future.",
			docs: "https://router.vuejs.org/data-loaders.html"
		},
		VUE_ROUTER_R1009: {
			why: "Returning a NavigationResult from a loader is deprecated.",
			fix: "Call `reroute(to)` inside the loader instead of returning `new NavigationResult(to)`; it throws internally to reroute.",
			docs: "https://router.vuejs.org/data-loaders/navigation-aware.html#Controlling-the-navigation-with-reroute-"
		}
	}
}), Li = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location matched"), Ri = Symbol(process.env.NODE_ENV === "production" ? "" : "router view depth"), zi = Symbol(process.env.NODE_ENV === "production" ? "" : "router"), Bi = Symbol(process.env.NODE_ENV === "production" ? "" : "route location"), Vi = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location"), Hi = Object.create, Ui = Object.defineProperty, Wi = Object.getOwnPropertyDescriptor, Gi = Object.getOwnPropertyNames, Ki = Object.getPrototypeOf, qi = Object.prototype.hasOwnProperty, Ji = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Yi = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Gi(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !qi.call(e, s) && s !== n && Ui(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Wi(t, s)) || r.enumerable
	});
	return e;
}, Xi = (e, t, n) => (n = e == null ? {} : Hi(Ki(e)), Yi(t || !e || !e.__esModule ? Ui(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Zi = typeof navigator < "u", K = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
K.chrome !== void 0 && K.chrome.devtools, Zi && (K.self, K.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__;
var Qi = /* @__PURE__ */ Xi((/* @__PURE__ */ Ji(((e, t) => {
	t.exports = r;
	function n(e) {
		return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
	}
	function r(e) {
		if (e ||= {}, e.circles) return i(e);
		let t = /* @__PURE__ */ new Map();
		if (t.set(Date, (e) => new Date(e)), t.set(Map, (e, t) => new Map(a(Array.from(e), t))), t.set(Set, (e, t) => new Set(a(Array.from(e), t))), e.constructorHandlers) for (let n of e.constructorHandlers) t.set(n[0], n[1]);
		let r = null;
		return e.proto ? s : o;
		function a(e, i) {
			let a = Object.keys(e), o = Array(a.length);
			for (let s = 0; s < a.length; s++) {
				let c = a[s], l = e[c];
				typeof l != "object" || !l ? o[c] = l : l.constructor !== Object && (r = t.get(l.constructor)) ? o[c] = r(l, i) : ArrayBuffer.isView(l) ? o[c] = n(l) : o[c] = i(l);
			}
			return o;
		}
		function o(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, o);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, o);
			let i = {};
			for (let a in e) {
				if (Object.hasOwnProperty.call(e, a) === !1) continue;
				let s = e[a];
				typeof s != "object" || !s ? i[a] = s : s.constructor !== Object && (r = t.get(s.constructor)) ? i[a] = r(s, o) : ArrayBuffer.isView(s) ? i[a] = n(s) : i[a] = o(s);
			}
			return i;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, s);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, s);
			let i = {};
			for (let a in e) {
				let o = e[a];
				typeof o != "object" || !o ? i[a] = o : o.constructor !== Object && (r = t.get(o.constructor)) ? i[a] = r(o, s) : ArrayBuffer.isView(o) ? i[a] = n(o) : i[a] = s(o);
			}
			return i;
		}
	}
	function i(e) {
		let t = [], r = [], i = /* @__PURE__ */ new Map();
		if (i.set(Date, (e) => new Date(e)), i.set(Map, (e, t) => new Map(o(Array.from(e), t))), i.set(Set, (e, t) => new Set(o(Array.from(e), t))), e.constructorHandlers) for (let t of e.constructorHandlers) i.set(t[0], t[1]);
		let a = null;
		return e.proto ? c : s;
		function o(e, o) {
			let s = Object.keys(e), c = Array(s.length);
			for (let l = 0; l < s.length; l++) {
				let u = s[l], d = e[u];
				if (typeof d != "object" || !d) c[u] = d;
				else if (d.constructor !== Object && (a = i.get(d.constructor))) c[u] = a(d, o);
				else if (ArrayBuffer.isView(d)) c[u] = n(d);
				else {
					let e = t.indexOf(d);
					e === -1 ? c[u] = o(d) : c[u] = r[e];
				}
			}
			return c;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, s);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, s);
			let c = {};
			t.push(e), r.push(c);
			for (let o in e) {
				if (Object.hasOwnProperty.call(e, o) === !1) continue;
				let l = e[o];
				if (typeof l != "object" || !l) c[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) c[o] = a(l, s);
				else if (ArrayBuffer.isView(l)) c[o] = n(l);
				else {
					let e = t.indexOf(l);
					e === -1 ? c[o] = s(l) : c[o] = r[e];
				}
			}
			return t.pop(), r.pop(), c;
		}
		function c(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, c);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, c);
			let s = {};
			t.push(e), r.push(s);
			for (let o in e) {
				let l = e[o];
				if (typeof l != "object" || !l) s[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) s[o] = a(l, c);
				else if (ArrayBuffer.isView(l)) s[o] = n(l);
				else {
					let e = t.indexOf(l);
					e === -1 ? s[o] = c(l) : s[o] = r[e];
				}
			}
			return t.pop(), r.pop(), s;
		}
	}
})))(), 1), $i = /(?:^|[-_/])(\w)/g;
function ea(e, t) {
	return t ? t.toUpperCase() : "";
}
function ta(e) {
	return e && `${e}`.replace($i, ea);
}
function na(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var ra = (0, Qi.default)({ circles: !0 }), ia = { trailing: !0 };
function aa(e, t = 25, n = {}) {
	if (n = {
		...ia,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = oa(e, t, r), o.finally(() => {
		if (o = null, n.trailing && s && !i) {
			let e = c(t, s);
			return s = null, e;
		}
	}), o), l = function(...e) {
		return n.trailing && (s = e), o || new Promise((o) => {
			let l = !i && n.leading;
			clearTimeout(i), i = setTimeout(() => {
				i = null;
				let t = n.leading ? r : c(this, e);
				s = null;
				for (let e of a) e(t);
				a = [];
			}, t), l ? (r = c(this, e), o(r)) : a.push(o);
		});
	}, u = (e) => {
		e && (clearTimeout(e), i = null);
	};
	return l.isPending = () => !!i, l.cancel = () => {
		u(i), a = [], s = null;
	}, l.flush = () => {
		if (u(i), !s || o) return;
		let e = s;
		return s = null, c(this, e);
	}, l;
}
async function oa(e, t, n) {
	return await e.apply(t, n);
}
//#endregion
//#region node_modules/hookable/dist/index.mjs
function sa(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? sa(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var ca = { run: (e) => e() }, la = console.createTask === void 0 ? () => ca : console.createTask;
function ua(e, t) {
	let n = la(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function da(e, t) {
	let n = la(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function fa(e, t) {
	for (let n of [...e]) n(t);
}
var pa = class {
	constructor() {
		this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
	}
	hook(e, t, n = {}) {
		if (!e || typeof t != "function") return () => {};
		let r = e, i;
		for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
		if (i && !n.allowDeprecated) {
			let e = i.message;
			e ||= `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : ""), this._deprecatedMessages ||= /* @__PURE__ */ new Set(), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e));
		}
		if (!t.name) try {
			Object.defineProperty(t, "name", {
				get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
				configurable: !0
			});
		} catch {}
		return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t &&= (this.removeHook(e, t), void 0);
		};
	}
	hookOnce(e, t) {
		let n, r = (...e) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...e));
		return n = this.hook(e, r), n;
	}
	removeHook(e, t) {
		if (this._hooks[e]) {
			let n = this._hooks[e].indexOf(t);
			n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
		}
	}
	deprecateHook(e, t) {
		this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
		let n = this._hooks[e] || [];
		delete this._hooks[e];
		for (let t of n) this.hook(e, t);
	}
	deprecateHooks(e) {
		Object.assign(this._deprecatedHooks, e);
		for (let t in e) this.deprecateHook(t, e[t]);
	}
	addHooks(e) {
		let t = sa(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = sa(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(ua, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(da, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && fa(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && fa(this._after, r);
		}) : (this._after && r && fa(this._after, r), i);
	}
	beforeEach(e) {
		return this._before = this._before || [], this._before.push(e), () => {
			if (this._before !== void 0) {
				let t = this._before.indexOf(e);
				t !== -1 && this._before.splice(t, 1);
			}
		};
	}
	afterEach(e) {
		return this._after = this._after || [], this._after.push(e), () => {
			if (this._after !== void 0) {
				let t = this._after.indexOf(e);
				t !== -1 && this._after.splice(t, 1);
			}
		};
	}
};
function ma() {
	return new pa();
}
//#endregion
//#region node_modules/@vue/devtools-kit/dist/index.js
var ha = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
function ga(e) {
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function _a(e) {
	let t = e.__file;
	if (t) return ta(na(t, ".vue"));
}
function va(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function ya(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function ba(e) {
	let t = e.subTree?.type, n = ya(e);
	return n ? n?.types?.Fragment === t : !1;
}
function xa(e) {
	let t = ga(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return va(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return va(e, t);
	return _a(e?.type || {}) || "Anonymous Component";
}
function Sa(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function Ca(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function wa() {
	let e = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return e.right - e.left;
		},
		get height() {
			return e.bottom - e.top;
		}
	};
	return e;
}
var Ta;
function Ea(e) {
	return Ta ||= document.createRange(), Ta.selectNode(e), Ta.getBoundingClientRect();
}
function Da(e) {
	let t = wa();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = Aa(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = Ea(e));
		}
		i && Oa(t, i);
	}
	return t;
}
function Oa(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var ka = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function Aa(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? ka : ba(e) ? Da(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Aa(e.subTree.component) : ka;
}
function ja(e) {
	return ba(e) ? Ma(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Ma(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...ja(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var Na = "__vue-devtools-component-inspector__", Pa = "__vue-devtools-component-inspector__card__", Fa = "__vue-devtools-component-inspector__name__", Ia = "__vue-devtools-component-inspector__indicator__", La = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, Ra = {
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "5px 8px",
	borderRadius: "4px",
	textAlign: "left",
	position: "absolute",
	left: 0,
	color: "#e9e9e9",
	fontSize: "14px",
	fontWeight: 600,
	lineHeight: "24px",
	backgroundColor: "#42b883",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, za = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function Ba() {
	return document.getElementById(Na);
}
function Va() {
	return document.getElementById(Pa);
}
function Ha() {
	return document.getElementById(Ia);
}
function Ua() {
	return document.getElementById(Fa);
}
function Wa(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function Ga(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? Na, Object.assign(t.style, {
		...La,
		...Wa(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Pa, Object.assign(n.style, {
		...Ra,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = Fa, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = Ia, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, za), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function Ka(e) {
	let t = Ba(), n = Va(), r = Ua(), i = Ha();
	t && (Object.assign(t.style, {
		...La,
		...Wa(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function qa(e) {
	let t = Aa(e);
	if (!t.width && !t.height) return;
	let n = xa(e);
	Ba() ? Ka({
		bounds: t,
		name: n
	}) : Ga({
		bounds: t,
		name: n
	});
}
function Ja() {
	let e = Ba();
	e && (e.style.display = "none");
}
var Ya = null;
function Xa(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (Ya = e, e.vnode.el)) {
			let t = Aa(e), n = xa(e);
			Ba() ? Ka({
				bounds: t,
				name: n
			}) : Ga({
				bounds: t,
				name: n
			});
		}
	}
}
function Za(e, t) {
	e.preventDefault(), e.stopPropagation(), Ya && t(Sa(Ya));
}
var Qa = null;
function $a() {
	Ja(), window.removeEventListener("mouseover", Xa), window.removeEventListener("click", Qa, !0), Qa = null;
}
function eo() {
	return window.addEventListener("mouseover", Xa), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), Za(n, (n) => {
				window.removeEventListener("click", t, !0), Qa = null, window.removeEventListener("mouseover", Xa);
				let r = Ba();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		Qa = t, window.addEventListener("click", t, !0);
	});
}
function to(e) {
	let t = Ca(Y.value, e.id);
	if (t) {
		let [n] = ja(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = Aa(t), n = document.createElement("div"), r = {
				...Wa(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = Aa(t);
			if (n.width || n.height) {
				let r = xa(t), i = Ba();
				i ? Ka({
					...e,
					name: r,
					bounds: n
				}) : Ga({
					...e,
					name: r,
					bounds: n
				}), setTimeout(() => {
					i && (i.style.display = "none");
				}, 1500);
			}
		}, 1200);
	}
}
K.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= !0;
function no(e) {
	let t = 0, n = setInterval(() => {
		K.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function ro() {
	let e = K.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function io() {
	return new Promise((e) => {
		function t() {
			ro(), e(K.__VUE_INSPECTOR__);
		}
		K.__VUE_INSPECTOR__ ? t() : no(() => {
			t();
		});
	});
}
var ao = /* @__PURE__ */ function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function oo(e) {
	return !!(e && e[ao.IS_READONLY]);
}
function so(e) {
	return oo(e) ? so(e[ao.RAW]) : !!(e && e[ao.IS_REACTIVE]);
}
function co(e) {
	return !!(e && e.__v_isRef === !0);
}
function lo(e) {
	let t = e && e[ao.RAW];
	return t ? lo(t) : e;
}
var uo = class {
	constructor() {
		this.refEditor = new fo();
	}
	set(e, t, n, r) {
		let i = Array.isArray(t) ? t : t.split(".");
		for (; i.length > 1;) {
			let t = i.shift();
			e = e instanceof Map ? e.get(t) : e instanceof Set ? Array.from(e.values())[t] : e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		let a = i[0], o = this.refEditor.get(e)[a];
		r ? r(e, a, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[a] = n;
	}
	get(e, t) {
		let n = Array.isArray(t) ? t : t.split(".");
		for (let t = 0; t < n.length; t++) if (e = e instanceof Map ? e.get(n[t]) : e[n[t]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
		return e;
	}
	has(e, t, n = !1) {
		if (e === void 0) return !1;
		let r = Array.isArray(t) ? t.slice() : t.split("."), i = n ? 2 : 1;
		for (; e && r.length > i;) {
			let t = r.shift();
			e = e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
	}
	createDefaultSetCallback(e) {
		return (t, n, r) => {
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : lo(t) instanceof Map ? t.delete(n) : lo(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : lo(t) instanceof Map ? t.set(e.newKey || n, r) : lo(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, fo = class {
	set(e, t) {
		if (co(e)) e.value = t;
		else {
			if (e instanceof Set && Array.isArray(t)) {
				e.clear(), t.forEach((t) => e.add(t));
				return;
			}
			let n = Object.keys(t);
			if (e instanceof Map) {
				let r = new Set(e.keys());
				n.forEach((n) => {
					e.set(n, Reflect.get(t, n)), r.delete(n);
				}), r.forEach((t) => e.delete(t));
				return;
			}
			let r = new Set(Object.keys(e));
			n.forEach((n) => {
				Reflect.set(e, n, Reflect.get(t, n)), r.delete(n);
			}), r.forEach((t) => Reflect.deleteProperty(e, t));
		}
	}
	get(e) {
		return co(e) ? e.value : e;
	}
	isRef(e) {
		return co(e) || so(e);
	}
};
new uo();
var po = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function mo() {
	if (typeof window > "u" || !Zi || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(po);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
K.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var ho = new Proxy(K.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function go(e, t) {
	X.timelineLayersState[t.id] = !1, ho.push({
		...e,
		descriptorId: t.id,
		appRecord: ya(t.app)
	});
}
K.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var _o = new Proxy(K.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), vo = aa(() => {
	ns.hooks.callHook(So.SEND_INSPECTOR_TO_CLIENT, bo());
});
function yo(e, t) {
	_o.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: ya(t.app)
	}), vo();
}
function bo() {
	return _o.filter((e) => e.descriptor.app === Y.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
		let t = e.descriptor, n = e.options;
		return {
			id: n.id,
			label: n.label,
			logo: t.logo,
			icon: `custom-ic-baseline-${n?.icon?.replace(/_/g, "-")}`,
			packageName: t.packageName,
			homepage: t.homepage,
			pluginId: t.id
		};
	});
}
function xo(e, t) {
	return _o.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var q = /* @__PURE__ */ function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), J = /* @__PURE__ */ function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), So = /* @__PURE__ */ function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function Co() {
	let e = ma();
	e.hook(J.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		yo(e, t.descriptor);
	});
	let t = aa(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || X.highPerfModeEnabled) return;
		let r = xo(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			filter: r?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i))), t();
			}, q.GET_INSPECTOR_TREE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				rootNodes: i.rootNodes
			})));
		}, So.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	e.hook(J.SEND_INSPECTOR_TREE, t);
	let n = aa(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || X.highPerfModeEnabled) return;
		let r = xo(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			nodeId: r?.selectedNodeId || "",
			state: null
		}, a = { currentTab: `custom-inspector:${t}` };
		i.nodeId && await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i, a))), t();
			}, q.GET_INSPECTOR_STATE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				nodeId: i.nodeId,
				state: i.state
			})));
		}, So.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	return e.hook(J.SEND_INSPECTOR_STATE, n), e.hook(J.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = xo(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(J.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		go(e, t.descriptor);
	}), e.hook(J.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		X.highPerfModeEnabled || !X.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, So.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(J.GET_COMPONENT_INSTANCES, async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook(J.GET_COMPONENT_BOUNDS, async ({ instance: e }) => Aa(e)), e.hook(J.GET_COMPONENT_NAME, ({ instance: e }) => xa(e)), e.hook(J.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = Y.value.instanceMap.get(e);
		t && qa(t);
	}), e.hook(J.COMPONENT_UNHIGHLIGHT, () => {
		Ja();
	}), e;
}
K.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [], K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {}, K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "", K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [], K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var wo = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function To() {
	return {
		connected: !1,
		clientConnected: !1,
		vitePluginDetected: !0,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: !0,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: mo()
	};
}
K[wo] ??= To();
var Eo = aa((e) => {
	ns.hooks.callHook(So.DEVTOOLS_STATE_UPDATED, { state: e });
});
aa((e, t) => {
	ns.hooks.callHook(So.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var Do = new Proxy(K.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? K.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : K.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), Y = new Proxy(K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function Oo() {
	Eo({
		...K[wo],
		appRecords: Do.value,
		activeAppRecordId: Y.id,
		tabs: K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function ko(e) {
	K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Oo();
}
function Ao(e) {
	K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Oo();
}
var X = new Proxy(K[wo], {
	get(e, t) {
		return t === "appRecords" ? Do : t === "activeAppRecordId" ? Y.id : t === "tabs" ? K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : K[wo][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, K[wo][t] = n, !0;
	}
});
function jo(e = {}) {
	let { file: t, host: n, baseUrl: r = window.location.origin, line: i = 0, column: a = 0 } = e;
	if (t) {
		if (n === "chrome-extension") {
			let e = t.replace(/\\/g, "\\\\"), n = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${n}__open-in-editor?file=${encodeURI(t)}`).then((t) => {
				if (!t.ok) {
					let t = `Opening component ${e} failed`;
					console.log(`%c${t}`, "color:red");
				}
			});
		} else if (X.vitePluginDetected) {
			let e = K.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
			K.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
K.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var Mo = new Proxy(K.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function No(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function Po(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Fo(e) {
	return (Mo.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function Io(e, t) {
	let n = Po(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return No(e ? (Mo.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Lo(e, t) {
	let n = Po(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(No(t)));
}
function Ro(e, t, n) {
	let r = Po(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), ns.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, q.SET_PLUGIN_SETTINGS);
}
var Z = /* @__PURE__ */ function(e) {
	return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
}({}), Q = K.__VUE_DEVTOOLS_HOOK ??= ma(), zo = {
	on: {
		vueAppInit(e) {
			Q.hook(Z.APP_INIT, e);
		},
		vueAppUnmount(e) {
			Q.hook(Z.APP_UNMOUNT, e);
		},
		vueAppConnected(e) {
			Q.hook(Z.APP_CONNECTED, e);
		},
		componentAdded(e) {
			return Q.hook(Z.COMPONENT_ADDED, e);
		},
		componentEmit(e) {
			return Q.hook(Z.COMPONENT_EMIT, e);
		},
		componentUpdated(e) {
			return Q.hook(Z.COMPONENT_UPDATED, e);
		},
		componentRemoved(e) {
			return Q.hook(Z.COMPONENT_REMOVED, e);
		},
		setupDevtoolsPlugin(e) {
			Q.hook(Z.SETUP_DEVTOOLS_PLUGIN, e);
		},
		perfStart(e) {
			return Q.hook(Z.PERFORMANCE_START, e);
		},
		perfEnd(e) {
			return Q.hook(Z.PERFORMANCE_END, e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return Q.callHook(Z.SETUP_DEVTOOLS_PLUGIN, e, t);
	}
}, Bo = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook(q.VISIT_COMPONENT_TREE, e);
			},
			inspectComponent: (e) => {
				this.hooks.hook(q.INSPECT_COMPONENT, e);
			},
			editComponentState: (e) => {
				this.hooks.hook(q.EDIT_COMPONENT_STATE, e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook(q.GET_INSPECTOR_TREE, e);
			},
			getInspectorState: (e) => {
				this.hooks.hook(q.GET_INSPECTOR_STATE, e);
			},
			editInspectorState: (e) => {
				this.hooks.hook(q.EDIT_INSPECTOR_STATE, e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook(q.INSPECT_TIMELINE_EVENT, e);
			},
			timelineCleared: (e) => {
				this.hooks.hook(q.TIMELINE_CLEARED, e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook(q.SET_PLUGIN_SETTINGS, e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (X.highPerfModeEnabled) return;
		let t = bo().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t?.id) {
			if (e) {
				let t = [
					e.appContext.app,
					e.uid,
					e.parent?.uid,
					e
				];
				Q.callHook(Z.COMPONENT_UPDATED, ...t);
			} else Q.callHook(Z.COMPONENT_UPDATED);
			this.hooks.callHook(J.SEND_INSPECTOR_STATE, {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook(J.ADD_INSPECTOR, {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && Lo(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		X.highPerfModeEnabled || this.hooks.callHook(J.SEND_INSPECTOR_TREE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		X.highPerfModeEnabled || this.hooks.callHook(J.SEND_INSPECTOR_STATE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook(J.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook(q.VISIT_COMPONENT_TREE, e);
	}
	now() {
		return X.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook(J.TIMELINE_LAYER_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		X.highPerfModeEnabled || this.hooks.callHook(J.TIMELINE_EVENT_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return Io(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook(J.GET_COMPONENT_INSTANCES, { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook(J.GET_COMPONENT_BOUNDS, { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook(J.GET_COMPONENT_NAME, { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(J.COMPONENT_HIGHLIGHT, { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook(J.COMPONENT_UNHIGHLIGHT);
	}
}, Vo = "__vue_devtool_undefined__", Ho = "__vue_devtool_infinity__", Uo = "__vue_devtool_negative_infinity__", Wo = "__vue_devtool_nan__";
Object.entries({
	[Vo]: "undefined",
	[Wo]: "NaN",
	[Ho]: "Infinity",
	[Uo]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function Go(e, t) {
	return zo.setupDevToolsPlugin(e, t);
}
function Ko(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Bo({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: ns
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function qo(e, t) {
	K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || X.highPerfModeEnabled && !t?.inspectingComponent || (K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Mo.forEach((t) => {
		Ko(t, e);
	}));
}
var Jo = "__VUE_DEVTOOLS_ROUTER__", Yo = "__VUE_DEVTOOLS_ROUTER_INFO__";
K[Yo] ??= {
	currentRoute: null,
	routes: []
}, K[Jo] ??= {}, new Proxy(K[Yo], { get(e, t) {
	return K[Yo][t];
} }), new Proxy(K[Jo], { get(e, t) {
	if (t === "value") return K[Jo];
} });
function Xo(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function Zo(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = Zo(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function Qo(e) {
	if (e) {
		let { fullPath: t, hash: n, href: r, path: i, name: a, matched: o, params: s, query: c } = e;
		return {
			fullPath: t,
			hash: n,
			href: r,
			path: i,
			name: a,
			params: s,
			query: c,
			matched: Zo(o)
		};
	}
	return e;
}
function $o(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = Qo(t?.currentRoute.value), r = Zo(Xo(t)), i = console.warn;
		console.warn = () => {}, K[Yo] = {
			currentRoute: n ? ra(n) : {},
			routes: ra(r)
		}, K[Jo] = t, console.warn = i;
	}
	n(), zo.on.componentUpdated(aa(() => {
		t.value?.app === e.app && (n(), !X.highPerfModeEnabled && ns.hooks.callHook(So.ROUTER_INFO_UPDATED, { state: K[Yo] }));
	}, 200));
}
function es(e) {
	return {
		async getInspectorTree(t) {
			let n = {
				...t,
				app: Y.value.app,
				rootNodes: []
			};
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n))), t();
				}, q.GET_INSPECTOR_TREE);
			}), n.rootNodes;
		},
		async getInspectorState(t) {
			let n = {
				...t,
				app: Y.value.app,
				state: null
			}, r = { currentTab: `custom-inspector:${t.inspectorId}` };
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n, r))), t();
				}, q.GET_INSPECTOR_STATE);
			}), n.state;
		},
		editInspectorState(t) {
			let n = new uo(), r = {
				...t,
				app: Y.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			};
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, q.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(t) {
			let n = xo(t);
			e.callHook(J.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return eo();
		},
		cancelInspectComponentInspector() {
			return $a();
		},
		getComponentRenderCode(e) {
			let t = Ca(Y.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return to({ id: e });
		},
		openInEditor: jo,
		getVueInspector: io,
		toggleApp(e, t) {
			let n = Do.value.find((t) => t.id === e);
			n && (Ao(e), ko(n), $o(n, Y), vo(), qo(n.app, t));
		},
		inspectDOM(e) {
			let t = Ca(Y.value, e);
			if (t) {
				let [e] = ja(t);
				e && (K.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			Ro(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Fo(e),
				values: Io(e)
			};
		}
	};
}
K.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
var ts = Co();
K.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks: ts,
	get state() {
		return {
			...X,
			activeAppRecordId: Y.id,
			activeAppRecord: Y.value,
			appRecords: Do.value
		};
	},
	api: es(ts)
};
var ns = K.__VUE_DEVTOOLS_KIT_CONTEXT__, rs = /* @__PURE__ */ ha(((e, t) => {
	(function(e) {
		var n = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "Ae",
			Å: "A",
			Æ: "AE",
			Ç: "C",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			Ð: "D",
			Ñ: "N",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "Oe",
			Ő: "O",
			Ø: "O",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "Ue",
			Ű: "U",
			Ý: "Y",
			Þ: "TH",
			ß: "ss",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "ae",
			å: "a",
			æ: "ae",
			ç: "c",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			ð: "d",
			ñ: "n",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "oe",
			ő: "o",
			ø: "o",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "ue",
			ű: "u",
			ý: "y",
			þ: "th",
			ÿ: "y",
			ẞ: "SS",
			ا: "a",
			أ: "a",
			إ: "i",
			آ: "aa",
			ؤ: "u",
			ئ: "e",
			ء: "a",
			ب: "b",
			ت: "t",
			ث: "th",
			ج: "j",
			ح: "h",
			خ: "kh",
			د: "d",
			ذ: "th",
			ر: "r",
			ز: "z",
			س: "s",
			ش: "sh",
			ص: "s",
			ض: "dh",
			ط: "t",
			ظ: "z",
			ع: "a",
			غ: "gh",
			ف: "f",
			ق: "q",
			ك: "k",
			ل: "l",
			م: "m",
			ن: "n",
			ه: "h",
			و: "w",
			ي: "y",
			ى: "a",
			ة: "h",
			ﻻ: "la",
			ﻷ: "laa",
			ﻹ: "lai",
			ﻵ: "laa",
			گ: "g",
			چ: "ch",
			پ: "p",
			ژ: "zh",
			ک: "k",
			ی: "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
			"٠": "0",
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"۰": "0",
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			က: "k",
			ခ: "kh",
			ဂ: "g",
			ဃ: "ga",
			င: "ng",
			စ: "s",
			ဆ: "sa",
			ဇ: "z",
			စျ: "za",
			ည: "ny",
			ဋ: "t",
			ဌ: "ta",
			ဍ: "d",
			ဎ: "da",
			ဏ: "na",
			တ: "t",
			ထ: "ta",
			ဒ: "d",
			ဓ: "da",
			န: "n",
			ပ: "p",
			ဖ: "pa",
			ဗ: "b",
			ဘ: "ba",
			မ: "m",
			ယ: "y",
			ရ: "ya",
			လ: "l",
			ဝ: "w",
			သ: "th",
			ဟ: "h",
			ဠ: "la",
			အ: "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			ဧ: "e",
			"၏": "-e",
			ဣ: "i",
			ဤ: "-i",
			ဉ: "u",
			ဦ: "-u",
			ဩ: "aw",
			သြော: "aw",
			ဪ: "aw",
			"၀": "0",
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"္": "",
			"့": "",
			"း": "",
			č: "c",
			ď: "d",
			ě: "e",
			ň: "n",
			ř: "r",
			š: "s",
			ť: "t",
			ů: "u",
			ž: "z",
			Č: "C",
			Ď: "D",
			Ě: "E",
			Ň: "N",
			Ř: "R",
			Š: "S",
			Ť: "T",
			Ů: "U",
			Ž: "Z",
			ހ: "h",
			ށ: "sh",
			ނ: "n",
			ރ: "r",
			ބ: "b",
			ޅ: "lh",
			ކ: "k",
			އ: "a",
			ވ: "v",
			މ: "m",
			ފ: "f",
			ދ: "dh",
			ތ: "th",
			ލ: "l",
			ގ: "g",
			ޏ: "gn",
			ސ: "s",
			ޑ: "d",
			ޒ: "z",
			ޓ: "t",
			ޔ: "y",
			ޕ: "p",
			ޖ: "j",
			ޗ: "ch",
			ޘ: "tt",
			ޙ: "hh",
			ޚ: "kh",
			ޛ: "th",
			ޜ: "z",
			ޝ: "sh",
			ޞ: "s",
			ޟ: "d",
			ޠ: "t",
			ޡ: "z",
			ޢ: "a",
			ޣ: "gh",
			ޤ: "q",
			ޥ: "w",
			"ަ": "a",
			"ާ": "aa",
			"ި": "i",
			"ީ": "ee",
			"ު": "u",
			"ޫ": "oo",
			"ެ": "e",
			"ޭ": "ey",
			"ޮ": "o",
			"ޯ": "oa",
			"ް": "",
			ა: "a",
			ბ: "b",
			გ: "g",
			დ: "d",
			ე: "e",
			ვ: "v",
			ზ: "z",
			თ: "t",
			ი: "i",
			კ: "k",
			ლ: "l",
			მ: "m",
			ნ: "n",
			ო: "o",
			პ: "p",
			ჟ: "zh",
			რ: "r",
			ს: "s",
			ტ: "t",
			უ: "u",
			ფ: "p",
			ქ: "k",
			ღ: "gh",
			ყ: "q",
			შ: "sh",
			ჩ: "ch",
			ც: "ts",
			ძ: "dz",
			წ: "ts",
			ჭ: "ch",
			ხ: "kh",
			ჯ: "j",
			ჰ: "h",
			α: "a",
			β: "v",
			γ: "g",
			δ: "d",
			ε: "e",
			ζ: "z",
			η: "i",
			θ: "th",
			ι: "i",
			κ: "k",
			λ: "l",
			μ: "m",
			ν: "n",
			ξ: "ks",
			ο: "o",
			π: "p",
			ρ: "r",
			σ: "s",
			τ: "t",
			υ: "y",
			φ: "f",
			χ: "x",
			ψ: "ps",
			ω: "o",
			ά: "a",
			έ: "e",
			ί: "i",
			ό: "o",
			ύ: "y",
			ή: "i",
			ώ: "o",
			ς: "s",
			ϊ: "i",
			ΰ: "y",
			ϋ: "y",
			ΐ: "i",
			Α: "A",
			Β: "B",
			Γ: "G",
			Δ: "D",
			Ε: "E",
			Ζ: "Z",
			Η: "I",
			Θ: "TH",
			Ι: "I",
			Κ: "K",
			Λ: "L",
			Μ: "M",
			Ν: "N",
			Ξ: "KS",
			Ο: "O",
			Π: "P",
			Ρ: "R",
			Σ: "S",
			Τ: "T",
			Υ: "Y",
			Φ: "F",
			Χ: "X",
			Ψ: "PS",
			Ω: "O",
			Ά: "A",
			Έ: "E",
			Ί: "I",
			Ό: "O",
			Ύ: "Y",
			Ή: "I",
			Ώ: "O",
			Ϊ: "I",
			Ϋ: "Y",
			ā: "a",
			ē: "e",
			ģ: "g",
			ī: "i",
			ķ: "k",
			ļ: "l",
			ņ: "n",
			ū: "u",
			Ā: "A",
			Ē: "E",
			Ģ: "G",
			Ī: "I",
			Ķ: "k",
			Ļ: "L",
			Ņ: "N",
			Ū: "U",
			Ќ: "Kj",
			ќ: "kj",
			Љ: "Lj",
			љ: "lj",
			Њ: "Nj",
			њ: "nj",
			Тс: "Ts",
			тс: "ts",
			ą: "a",
			ć: "c",
			ę: "e",
			ł: "l",
			ń: "n",
			ś: "s",
			ź: "z",
			ż: "z",
			Ą: "A",
			Ć: "C",
			Ę: "E",
			Ł: "L",
			Ń: "N",
			Ś: "S",
			Ź: "Z",
			Ż: "Z",
			Є: "Ye",
			І: "I",
			Ї: "Yi",
			Ґ: "G",
			є: "ye",
			і: "i",
			ї: "yi",
			ґ: "g",
			ă: "a",
			Ă: "A",
			ș: "s",
			Ș: "S",
			ț: "t",
			Ț: "T",
			ţ: "t",
			Ţ: "T",
			а: "a",
			б: "b",
			в: "v",
			г: "g",
			д: "d",
			е: "e",
			ё: "yo",
			ж: "zh",
			з: "z",
			и: "i",
			й: "i",
			к: "k",
			л: "l",
			м: "m",
			н: "n",
			о: "o",
			п: "p",
			р: "r",
			с: "s",
			т: "t",
			у: "u",
			ф: "f",
			х: "kh",
			ц: "c",
			ч: "ch",
			ш: "sh",
			щ: "sh",
			ъ: "",
			ы: "y",
			ь: "",
			э: "e",
			ю: "yu",
			я: "ya",
			А: "A",
			Б: "B",
			В: "V",
			Г: "G",
			Д: "D",
			Е: "E",
			Ё: "Yo",
			Ж: "Zh",
			З: "Z",
			И: "I",
			Й: "I",
			К: "K",
			Л: "L",
			М: "M",
			Н: "N",
			О: "O",
			П: "P",
			Р: "R",
			С: "S",
			Т: "T",
			У: "U",
			Ф: "F",
			Х: "Kh",
			Ц: "C",
			Ч: "Ch",
			Ш: "Sh",
			Щ: "Sh",
			Ъ: "",
			Ы: "Y",
			Ь: "",
			Э: "E",
			Ю: "Yu",
			Я: "Ya",
			ђ: "dj",
			ј: "j",
			ћ: "c",
			џ: "dz",
			Ђ: "Dj",
			Ј: "j",
			Ћ: "C",
			Џ: "Dz",
			ľ: "l",
			ĺ: "l",
			ŕ: "r",
			Ľ: "L",
			Ĺ: "L",
			Ŕ: "R",
			ş: "s",
			Ş: "S",
			ı: "i",
			İ: "I",
			ğ: "g",
			Ğ: "G",
			ả: "a",
			Ả: "A",
			ẳ: "a",
			Ẳ: "A",
			ẩ: "a",
			Ẩ: "A",
			đ: "d",
			Đ: "D",
			ẹ: "e",
			Ẹ: "E",
			ẽ: "e",
			Ẽ: "E",
			ẻ: "e",
			Ẻ: "E",
			ế: "e",
			Ế: "E",
			ề: "e",
			Ề: "E",
			ệ: "e",
			Ệ: "E",
			ễ: "e",
			Ễ: "E",
			ể: "e",
			Ể: "E",
			ỏ: "o",
			ọ: "o",
			Ọ: "o",
			ố: "o",
			Ố: "O",
			ồ: "o",
			Ồ: "O",
			ổ: "o",
			Ổ: "O",
			ộ: "o",
			Ộ: "O",
			ỗ: "o",
			Ỗ: "O",
			ơ: "o",
			Ơ: "O",
			ớ: "o",
			Ớ: "O",
			ờ: "o",
			Ờ: "O",
			ợ: "o",
			Ợ: "O",
			ỡ: "o",
			Ỡ: "O",
			Ở: "o",
			ở: "o",
			ị: "i",
			Ị: "I",
			ĩ: "i",
			Ĩ: "I",
			ỉ: "i",
			Ỉ: "i",
			ủ: "u",
			Ủ: "U",
			ụ: "u",
			Ụ: "U",
			ũ: "u",
			Ũ: "U",
			ư: "u",
			Ư: "U",
			ứ: "u",
			Ứ: "U",
			ừ: "u",
			Ừ: "U",
			ự: "u",
			Ự: "U",
			ữ: "u",
			Ữ: "U",
			ử: "u",
			Ử: "ư",
			ỷ: "y",
			Ỷ: "y",
			ỳ: "y",
			Ỳ: "Y",
			ỵ: "y",
			Ỵ: "Y",
			ỹ: "y",
			Ỹ: "Y",
			ạ: "a",
			Ạ: "A",
			ấ: "a",
			Ấ: "A",
			ầ: "a",
			Ầ: "A",
			ậ: "a",
			Ậ: "A",
			ẫ: "a",
			Ẫ: "A",
			ắ: "a",
			Ắ: "A",
			ằ: "a",
			Ằ: "A",
			ặ: "a",
			Ặ: "A",
			ẵ: "a",
			Ẵ: "A",
			"⓪": "0",
			"①": "1",
			"②": "2",
			"③": "3",
			"④": "4",
			"⑤": "5",
			"⑥": "6",
			"⑦": "7",
			"⑧": "8",
			"⑨": "9",
			"⑩": "10",
			"⑪": "11",
			"⑫": "12",
			"⑬": "13",
			"⑭": "14",
			"⑮": "15",
			"⑯": "16",
			"⑰": "17",
			"⑱": "18",
			"⑲": "18",
			"⑳": "18",
			"⓵": "1",
			"⓶": "2",
			"⓷": "3",
			"⓸": "4",
			"⓹": "5",
			"⓺": "6",
			"⓻": "7",
			"⓼": "8",
			"⓽": "9",
			"⓾": "10",
			"⓿": "0",
			"⓫": "11",
			"⓬": "12",
			"⓭": "13",
			"⓮": "14",
			"⓯": "15",
			"⓰": "16",
			"⓱": "17",
			"⓲": "18",
			"⓳": "19",
			"⓴": "20",
			"Ⓐ": "A",
			"Ⓑ": "B",
			"Ⓒ": "C",
			"Ⓓ": "D",
			"Ⓔ": "E",
			"Ⓕ": "F",
			"Ⓖ": "G",
			"Ⓗ": "H",
			"Ⓘ": "I",
			"Ⓙ": "J",
			"Ⓚ": "K",
			"Ⓛ": "L",
			"Ⓜ": "M",
			"Ⓝ": "N",
			"Ⓞ": "O",
			"Ⓟ": "P",
			"Ⓠ": "Q",
			"Ⓡ": "R",
			"Ⓢ": "S",
			"Ⓣ": "T",
			"Ⓤ": "U",
			"Ⓥ": "V",
			"Ⓦ": "W",
			"Ⓧ": "X",
			"Ⓨ": "Y",
			"Ⓩ": "Z",
			"ⓐ": "a",
			"ⓑ": "b",
			"ⓒ": "c",
			"ⓓ": "d",
			"ⓔ": "e",
			"ⓕ": "f",
			"ⓖ": "g",
			"ⓗ": "h",
			"ⓘ": "i",
			"ⓙ": "j",
			"ⓚ": "k",
			"ⓛ": "l",
			"ⓜ": "m",
			"ⓝ": "n",
			"ⓞ": "o",
			"ⓟ": "p",
			"ⓠ": "q",
			"ⓡ": "r",
			"ⓢ": "s",
			"ⓣ": "t",
			"ⓤ": "u",
			"ⓦ": "v",
			"ⓥ": "w",
			"ⓧ": "x",
			"ⓨ": "y",
			"ⓩ": "z",
			"“": "\"",
			"”": "\"",
			"‘": "'",
			"’": "'",
			"∂": "d",
			ƒ: "f",
			"™": "(TM)",
			"©": "(C)",
			œ: "oe",
			Œ: "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			º: "o",
			ª: "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			$: "USD",
			"€": "EUR",
			"₢": "BRN",
			"₣": "FRF",
			"£": "GBP",
			"₤": "ITL",
			"₦": "NGN",
			"₧": "ESP",
			"₩": "KRW",
			"₪": "ILS",
			"₫": "VND",
			"₭": "LAK",
			"₮": "MNT",
			"₯": "GRD",
			"₱": "ARS",
			"₲": "PYG",
			"₳": "ARA",
			"₴": "UAH",
			"₵": "GHS",
			"¢": "cent",
			"¥": "CNY",
			元: "CNY",
			円: "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			лв: "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			ден: "MKD",
			zł: "PLN",
			"₽": "RUB",
			"₾": "GEL"
		}, r = ["်", "ް"], i = {
			"ာ": "a",
			"ါ": "a",
			"ေ": "e",
			"ဲ": "e",
			"ိ": "i",
			"ီ": "i",
			"ို": "o",
			"ု": "u",
			"ူ": "u",
			"ေါင်": "aung",
			"ော": "aw",
			"ော်": "aw",
			"ေါ": "aw",
			"ေါ်": "aw",
			"်": "်",
			က်: "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			င်: "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			စ်: "it",
			ည်: "i",
			တ်: "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			ဒ်: "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			န်: "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			ပ်: "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			န်ုပ်: "nub",
			မ်: "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			ယ်: "e",
			"ိုလ်": "ol",
			ဉ်: "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		}, a = {
			en: {},
			az: {
				ç: "c",
				ə: "e",
				ğ: "g",
				ı: "i",
				ö: "o",
				ş: "s",
				ü: "u",
				Ç: "C",
				Ə: "E",
				Ğ: "G",
				İ: "I",
				Ö: "O",
				Ş: "S",
				Ü: "U"
			},
			cs: {
				č: "c",
				ď: "d",
				ě: "e",
				ň: "n",
				ř: "r",
				š: "s",
				ť: "t",
				ů: "u",
				ž: "z",
				Č: "C",
				Ď: "D",
				Ě: "E",
				Ň: "N",
				Ř: "R",
				Š: "S",
				Ť: "T",
				Ů: "U",
				Ž: "Z"
			},
			fi: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			hu: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O",
				ü: "u",
				Ü: "U",
				ű: "u",
				Ű: "U"
			},
			lt: {
				ą: "a",
				č: "c",
				ę: "e",
				ė: "e",
				į: "i",
				š: "s",
				ų: "u",
				ū: "u",
				ž: "z",
				Ą: "A",
				Č: "C",
				Ę: "E",
				Ė: "E",
				Į: "I",
				Š: "S",
				Ų: "U",
				Ū: "U"
			},
			lv: {
				ā: "a",
				č: "c",
				ē: "e",
				ģ: "g",
				ī: "i",
				ķ: "k",
				ļ: "l",
				ņ: "n",
				š: "s",
				ū: "u",
				ž: "z",
				Ā: "A",
				Č: "C",
				Ē: "E",
				Ģ: "G",
				Ī: "i",
				Ķ: "k",
				Ļ: "L",
				Ņ: "N",
				Š: "S",
				Ū: "u",
				Ž: "Z"
			},
			pl: {
				ą: "a",
				ć: "c",
				ę: "e",
				ł: "l",
				ń: "n",
				ó: "o",
				ś: "s",
				ź: "z",
				ż: "z",
				Ą: "A",
				Ć: "C",
				Ę: "e",
				Ł: "L",
				Ń: "N",
				Ó: "O",
				Ś: "S",
				Ź: "Z",
				Ż: "Z"
			},
			sv: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			sk: {
				ä: "a",
				Ä: "A"
			},
			sr: {
				љ: "lj",
				њ: "nj",
				Љ: "Lj",
				Њ: "Nj",
				đ: "dj",
				Đ: "Dj"
			},
			tr: {
				Ü: "U",
				Ö: "O",
				ü: "u",
				ö: "o"
			}
		}, o = {
			ar: {
				"∆": "delta",
				"∞": "la-nihaya",
				"♥": "hob",
				"&": "wa",
				"|": "aw",
				"<": "aqal-men",
				">": "akbar-men",
				"∑": "majmou",
				"¤": "omla"
			},
			az: {},
			ca: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "amor",
				"&": "i",
				"|": "o",
				"<": "menys que",
				">": "mes que",
				"∑": "suma dels",
				"¤": "moneda"
			},
			cs: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "nebo",
				"<": "mensi nez",
				">": "vetsi nez",
				"∑": "soucet",
				"¤": "mena"
			},
			de: {
				"∆": "delta",
				"∞": "unendlich",
				"♥": "Liebe",
				"&": "und",
				"|": "oder",
				"<": "kleiner als",
				">": "groesser als",
				"∑": "Summe von",
				"¤": "Waehrung"
			},
			dv: {
				"∆": "delta",
				"∞": "kolunulaa",
				"♥": "loabi",
				"&": "aai",
				"|": "noonee",
				"<": "ah vure kuda",
				">": "ah vure bodu",
				"∑": "jumula",
				"¤": "faisaa"
			},
			en: {
				"∆": "delta",
				"∞": "infinity",
				"♥": "love",
				"&": "and",
				"|": "or",
				"<": "less than",
				">": "greater than",
				"∑": "sum",
				"¤": "currency"
			},
			es: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "y",
				"|": "u",
				"<": "menos que",
				">": "mas que",
				"∑": "suma de los",
				"¤": "moneda"
			},
			fa: {
				"∆": "delta",
				"∞": "bi-nahayat",
				"♥": "eshgh",
				"&": "va",
				"|": "ya",
				"<": "kamtar-az",
				">": "bishtar-az",
				"∑": "majmooe",
				"¤": "vahed"
			},
			fi: {
				"∆": "delta",
				"∞": "aarettomyys",
				"♥": "rakkaus",
				"&": "ja",
				"|": "tai",
				"<": "pienempi kuin",
				">": "suurempi kuin",
				"∑": "summa",
				"¤": "valuutta"
			},
			fr: {
				"∆": "delta",
				"∞": "infiniment",
				"♥": "Amour",
				"&": "et",
				"|": "ou",
				"<": "moins que",
				">": "superieure a",
				"∑": "somme des",
				"¤": "monnaie"
			},
			ge: {
				"∆": "delta",
				"∞": "usasruloba",
				"♥": "siqvaruli",
				"&": "da",
				"|": "an",
				"<": "naklebi",
				">": "meti",
				"∑": "jami",
				"¤": "valuta"
			},
			gr: {},
			hu: {
				"∆": "delta",
				"∞": "vegtelen",
				"♥": "szerelem",
				"&": "es",
				"|": "vagy",
				"<": "kisebb mint",
				">": "nagyobb mint",
				"∑": "szumma",
				"¤": "penznem"
			},
			it: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amore",
				"&": "e",
				"|": "o",
				"<": "minore di",
				">": "maggiore di",
				"∑": "somma",
				"¤": "moneta"
			},
			lt: {
				"∆": "delta",
				"∞": "begalybe",
				"♥": "meile",
				"&": "ir",
				"|": "ar",
				"<": "maziau nei",
				">": "daugiau nei",
				"∑": "suma",
				"¤": "valiuta"
			},
			lv: {
				"∆": "delta",
				"∞": "bezgaliba",
				"♥": "milestiba",
				"&": "un",
				"|": "vai",
				"<": "mazak neka",
				">": "lielaks neka",
				"∑": "summa",
				"¤": "valuta"
			},
			my: {
				"∆": "kwahkhyaet",
				"∞": "asaonasme",
				"♥": "akhyait",
				"&": "nhin",
				"|": "tho",
				"<": "ngethaw",
				">": "kyithaw",
				"∑": "paungld",
				"¤": "ngwekye"
			},
			mk: {},
			nl: {
				"∆": "delta",
				"∞": "oneindig",
				"♥": "liefde",
				"&": "en",
				"|": "of",
				"<": "kleiner dan",
				">": "groter dan",
				"∑": "som",
				"¤": "valuta"
			},
			pl: {
				"∆": "delta",
				"∞": "nieskonczonosc",
				"♥": "milosc",
				"&": "i",
				"|": "lub",
				"<": "mniejsze niz",
				">": "wieksze niz",
				"∑": "suma",
				"¤": "waluta"
			},
			pt: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "e",
				"|": "ou",
				"<": "menor que",
				">": "maior que",
				"∑": "soma",
				"¤": "moeda"
			},
			ro: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "dragoste",
				"&": "si",
				"|": "sau",
				"<": "mai mic ca",
				">": "mai mare ca",
				"∑": "suma",
				"¤": "valuta"
			},
			ru: {
				"∆": "delta",
				"∞": "beskonechno",
				"♥": "lubov",
				"&": "i",
				"|": "ili",
				"<": "menshe",
				">": "bolshe",
				"∑": "summa",
				"¤": "valjuta"
			},
			sk: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "alebo",
				"<": "menej ako",
				">": "viac ako",
				"∑": "sucet",
				"¤": "mena"
			},
			sr: {},
			tr: {
				"∆": "delta",
				"∞": "sonsuzluk",
				"♥": "ask",
				"&": "ve",
				"|": "veya",
				"<": "kucuktur",
				">": "buyuktur",
				"∑": "toplam",
				"¤": "para birimi"
			},
			uk: {
				"∆": "delta",
				"∞": "bezkinechnist",
				"♥": "lubov",
				"&": "i",
				"|": "abo",
				"<": "menshe",
				">": "bilshe",
				"∑": "suma",
				"¤": "valjuta"
			},
			vn: {
				"∆": "delta",
				"∞": "vo cuc",
				"♥": "yeu",
				"&": "va",
				"|": "hoac",
				"<": "nho hon",
				">": "lon hon",
				"∑": "tong",
				"¤": "tien te"
			}
		}, s = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join(""), c = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join(""), l = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join(""), u = function(e, t) {
			var u = "-", d = "", m = "", h = !0, g = {}, _, v, y, b, x, S, C, w, ee, T, E, D, te, ne, O = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), C = o.en, w = a.en, typeof t == "object") for (E in _ = t.maintainCase || !1, g = t.custom && typeof t.custom == "object" ? t.custom : g, y = +t.truncate > 1 && t.truncate || !1, b = t.uric || !1, x = t.uricNoSlash || !1, S = t.mark || !1, h = !(t.symbols === !1 || t.lang === !1), u = t.separator || u, b && (O += s), x && (O += c), S && (O += l), C = t.lang && o[t.lang] && h ? o[t.lang] : h ? o.en : {}, w = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				g[e + ""] = e + "";
			}), v = !0) : v = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				g[e + ""] = e + "";
			}), Object.keys(g).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, g[t]);
			}), g) O += E;
			for (O += u, O = f(O), e = e.replace(/(^\s+|\s+$)/g, ""), te = !1, ne = !1, T = 0, D = e.length; T < D; T++) E = e[T], p(E, g) ? te = !1 : w[E] ? (E = te && w[E].match(/[A-Za-z0-9]/) ? " " + w[E] : w[E], te = !1) : E in n ? (T + 1 < D && r.indexOf(e[T + 1]) >= 0 ? (m += E, E = "") : ne === !0 ? (E = i[m] + n[E], m = "") : E = te && n[E].match(/[A-Za-z0-9]/) ? " " + n[E] : n[E], te = !1, ne = !1) : E in i ? (m += E, E = "", T === D - 1 && (E = i[m]), ne = !0) : C[E] && !(b && s.indexOf(E) !== -1) && !(x && c.indexOf(E) !== -1) ? (E = te || d.substr(-1).match(/[A-Za-z0-9]/) ? u + C[E] : C[E], E += e[T + 1] !== void 0 && e[T + 1].match(/[A-Za-z0-9]/) ? u : "", te = !0) : (ne === !0 ? (E = i[m] + E, m = "", ne = !1) : te && (/[A-Za-z0-9]/.test(E) || d.substr(-1).match(/A-Za-z0-9]/)) && (E = " " + E), te = !1), d += E.replace(RegExp("[^\\w\\s" + O + "_-]", "g"), u);
			return v && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(g).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), y && d.length > y && (ee = d.charAt(y) === u, d = d.slice(0, y), ee || (d = d.slice(0, d.lastIndexOf(u)))), !_ && !v && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, p = function(e, t) {
			for (var n in t) if (t[n] === e) return !0;
		};
		if (t !== void 0 && t.exports) t.exports = u, t.exports.createSlug = d;
		else if (typeof define < "u" && define.amd) define([], function() {
			return u;
		});
		else try {
			if (e.getSlug || e.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			e.getSlug = u, e.createSlug = d;
		} catch {}
	})(e);
}));
(/* @__PURE__ */ ha(((e, t) => {
	t.exports = rs();
})))(), K.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function is(e) {
	X.highPerfModeEnabled = e ?? !X.highPerfModeEnabled, !e && Y.value && qo(Y.value.app);
}
function as(e) {
	X.devtoolsClientDetected = {
		...X.devtoolsClientDetected,
		...e
	}, is(!Object.values(X.devtoolsClientDetected).some(Boolean));
}
K.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= as;
var os = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(e, t) {
		this.keyToValue.set(e, t), this.valueToKey.set(t, e);
	}
	getByKey(e) {
		return this.keyToValue.get(e);
	}
	getByValue(e) {
		return this.valueToKey.get(e);
	}
	clear() {
		this.keyToValue.clear(), this.valueToKey.clear();
	}
}, ss = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new os();
	}
	register(e, t) {
		this.kv.getByValue(e) || (t ||= this.generateIdentifier(e), this.kv.set(t, e));
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(e) {
		return this.kv.getByValue(e);
	}
	getValue(e) {
		return this.kv.getByKey(e);
	}
}, cs = class extends ss {
	constructor() {
		super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(e, t) {
		typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
	}
	getAllowedProps(e) {
		return this.classToAllowedProps.get(e);
	}
};
function ls(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function us(e, t) {
	let n = ls(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function ds(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function fs(e, t) {
	return e.indexOf(t) !== -1;
}
function ps(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var ms = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return us(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, hs = (e) => Object.prototype.toString.call(e).slice(8, -1), gs = (e) => e === void 0, _s = (e) => e === null, vs = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, ys = (e) => vs(e) && Object.keys(e).length === 0, bs = (e) => Array.isArray(e), xs = (e) => typeof e == "string", Ss = (e) => typeof e == "number" && !isNaN(e), Cs = (e) => typeof e == "boolean", ws = (e) => e instanceof RegExp, Ts = (e) => e instanceof Map, Es = (e) => e instanceof Set, Ds = (e) => hs(e) === "Symbol", Os = (e) => e instanceof Date && !isNaN(e.valueOf()), ks = (e) => e instanceof Error, As = (e) => typeof e == "number" && isNaN(e), js = (e) => Cs(e) || _s(e) || gs(e) || Ss(e) || xs(e) || Ds(e), Ms = (e) => typeof e == "bigint", Ns = (e) => e === Infinity || e === -Infinity, Ps = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Fs = (e) => e instanceof URL, Is = (e) => e.replace(/\./g, "\\."), Ls = (e) => e.map(String).map(Is).join("."), Rs = (e) => {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "\\" && e.charAt(r + 1) === ".") {
			n += ".", r++;
			continue;
		}
		if (i === ".") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	let r = n;
	return t.push(r), t;
};
function zs(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Bs = [
	zs(gs, "undefined", () => null, () => void 0),
	zs(Ms, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	zs(Os, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	zs(ks, "Error", (e, t) => {
		let n = {
			name: e.name,
			message: e.message
		};
		return t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}, (e, t) => {
		let n = Error(e.message);
		return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}),
	zs(ws, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	zs(Es, "set", (e) => [...e.values()], (e) => new Set(e)),
	zs(Ts, "map", (e) => [...e.entries()], (e) => new Map(e)),
	zs((e) => As(e) || Ns(e), "number", (e) => As(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	zs((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	zs(Fs, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Vs(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Hs = Vs((e, t) => Ds(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Us = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Ws = Vs(Ps, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Us[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function Gs(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Ks = Vs(Gs, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
	let n = t.classRegistry.getAllowedProps(e.constructor);
	if (!n) return { ...e };
	let r = {};
	return n.forEach((t) => {
		r[t] = e[t];
	}), r;
}, (e, t, n) => {
	let r = n.classRegistry.getValue(t[1]);
	if (!r) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(r.prototype), e);
}), qs = Vs((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), Js = [
	Ks,
	Hs,
	qs,
	Ws
], Ys = (e, t) => {
	let n = ps(Js, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = ps(Bs, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, Xs = {};
Bs.forEach((e) => {
	Xs[e.annotation] = e;
});
var Zs = (e, t, n) => {
	if (bs(t)) switch (t[0]) {
		case "symbol": return Hs.untransform(e, t, n);
		case "class": return Ks.untransform(e, t, n);
		case "custom": return qs.untransform(e, t, n);
		case "typed-array": return Ws.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = Xs[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, Qs = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function $s(e) {
	if (fs(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (fs(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (fs(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var ec = (e, t) => {
	$s(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Es(e)) e = Qs(e, +r);
		else if (Ts(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = Qs(e, i);
			switch (a) {
				case "key":
					e = o;
					break;
				case "value":
					e = e.get(o);
					break;
			}
		} else e = e[r];
	}
	return e;
}, tc = (e, t, n) => {
	if ($s(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (bs(r)) {
			let e = +n;
			r = r[e];
		} else if (vs(r)) r = r[n];
		else if (Es(r)) {
			let e = +n;
			r = Qs(r, e);
		} else if (Ts(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = Qs(r, i);
			switch (a) {
				case "key":
					r = o;
					break;
				case "value":
					r = r.get(o);
					break;
			}
		}
	}
	let i = t[t.length - 1];
	if (bs(r) ? r[+i] = n(r[+i]) : vs(r) && (r[i] = n(r[i])), Es(r)) {
		let e = Qs(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (Ts(r)) {
		let e = +t[t.length - 2], a = Qs(r, e);
		switch (+i == 0 ? "key" : "value") {
			case "key": {
				let e = n(a);
				r.set(e, r.get(a)), e !== a && r.delete(a);
				break;
			}
			case "value":
				r.set(a, n(r.get(a)));
				break;
		}
	}
	return e;
};
function nc(e, t, n = []) {
	if (!e) return;
	if (!bs(e)) {
		ds(e, (e, r) => nc(e, t, [...n, ...Rs(r)]));
		return;
	}
	let [r, i] = e;
	i && ds(i, (e, r) => {
		nc(e, t, [...n, ...Rs(r)]);
	}), t(r, n);
}
function rc(e, t, n) {
	return nc(t, (t, r) => {
		e = tc(e, r, (e) => Zs(e, t, n));
	}), e;
}
function ic(e, t) {
	function n(t, n) {
		let r = ec(e, Rs(n));
		t.map(Rs).forEach((t) => {
			e = tc(e, t, () => r);
		});
	}
	if (bs(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = tc(e, Rs(t), () => e);
		}), i && ds(i, n);
	} else ds(t, n);
	return e;
}
var ac = (e, t) => vs(e) || bs(e) || Ts(e) || Es(e) || Gs(e, t);
function oc(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function sc(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(Ls) : n[Ls(i)] = a.map(Ls);
	}), r ? ys(n) ? [r] : [r, n] : ys(n) ? void 0 : n;
}
var cc = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = js(e);
	if (!s) {
		oc(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!ac(e, n)) {
		let t = Ys(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (fs(a, e)) return { transformedValue: null };
	let c = Ys(e, n), l = c?.value ?? e, u = bs(l) ? [] : {}, d = {};
	ds(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = cc(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, bs(l.annotations) ? d[c] = l.annotations : vs(l.annotations) && ds(l.annotations, (e, t) => {
			d[Is(c) + "." + t] = e;
		});
	});
	let f = ys(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
function lc(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function uc(e) {
	return lc(e) === "Array";
}
function dc(e) {
	if (lc(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function fc(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function pc(e, t = {}) {
	if (uc(e)) return e.map((e) => pc(e, t));
	if (!dc(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (uc(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return fc(n, r, pc(i, t), e, t.nonenumerable), n;
	}, {});
}
var $ = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new cs(), this.symbolRegistry = new ss((e) => e.description ?? ""), this.customTransformerRegistry = new ms(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = cc(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = sc(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = pc(t);
		return n?.values && (r = rc(r, n.values, this)), n?.referentialEqualities && (r = ic(r, n.referentialEqualities)), r;
	}
	stringify(e) {
		return JSON.stringify(this.serialize(e));
	}
	parse(e) {
		return this.deserialize(JSON.parse(e));
	}
	registerClass(e, t) {
		this.classRegistry.register(e, t);
	}
	registerSymbol(e, t) {
		this.symbolRegistry.register(e, t);
	}
	registerCustom(e, t) {
		this.customTransformerRegistry.register({
			name: t,
			...e
		});
	}
	allowErrorProps(...e) {
		this.allowedErrorProps.push(...e);
	}
};
$.defaultInstance = new $(), $.serialize = $.defaultInstance.serialize.bind($.defaultInstance), $.deserialize = $.defaultInstance.deserialize.bind($.defaultInstance), $.stringify = $.defaultInstance.stringify.bind($.defaultInstance), $.parse = $.defaultInstance.parse.bind($.defaultInstance), $.registerClass = $.defaultInstance.registerClass.bind($.defaultInstance), $.registerSymbol = $.defaultInstance.registerSymbol.bind($.defaultInstance), $.registerCustom = $.defaultInstance.registerCustom.bind($.defaultInstance), $.allowErrorProps = $.defaultInstance.allowErrorProps.bind($.defaultInstance), $.serialize, $.deserialize, $.stringify, $.parse, $.registerClass, $.registerCustom, $.registerSymbol, $.allowErrorProps, K.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [], K.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null, K.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null, K.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null, K.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null, K.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
//#endregion
//#region node_modules/vue-router/dist/devtools-Bpr7ZAVB.js
var mc = typeof document < "u", hc = /#/g, gc = /&/g, _c = /\//g, vc = /=/g, yc = /\?/g, bc = /\+/g, xc = /%5B/g, Sc = /%5D/g, Cc = /%5E/g, wc = /%60/g, Tc = /%7B/g, Ec = /%7C/g, Dc = /%7D/g, Oc = /%20/g;
function kc(e) {
	return e == null ? "" : encodeURI("" + e).replace(Ec, "|").replace(xc, "[").replace(Sc, "]");
}
function Ac(e) {
	return kc(e).replace(Tc, "{").replace(Dc, "}").replace(Cc, "^");
}
function jc(e) {
	return kc(e).replace(bc, "%2B").replace(Oc, "+").replace(hc, "%23").replace(gc, "%26").replace(wc, "`").replace(Tc, "{").replace(Dc, "}").replace(Cc, "^");
}
function Mc(e) {
	return jc(e).replace(vc, "%3D");
}
function Nc(e) {
	return kc(e).replace(hc, "%23").replace(yc, "%3F");
}
function Pc(e) {
	return Nc(e).replace(_c, "%2F");
}
function Fc(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {
		process.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0080({ text: "" + e });
	}
	return "" + e;
}
var Ic = /\/$/, Lc = (e) => e.replace(Ic, "");
function Rc(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Kc(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Fc(o)
	};
}
function zc(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Bc(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Vc(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Hc(t.matched[r], n.matched[i]) && Uc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Hc(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Uc(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Wc(e[n], t[n])) return !1;
	return !0;
}
function Wc(e, t) {
	return W(e) ? Gc(e, t) : W(t) ? Gc(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Gc(e, t) {
	return W(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Kc(e, t) {
	if (e.startsWith("/")) return e;
	if (process.env.NODE_ENV !== "production" && !t.startsWith("/")) return G.VUE_ROUTER_R0070({
		to: e,
		from: t
	}), e;
	if (!e) return t;
	let n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
	(i === ".." || i === ".") && r.push("");
	let a = n.length - 1, o, s;
	for (o = 0; o < r.length; o++) if (s = r[o], s !== ".") if (s === "..") a > 1 && a--;
	else break;
	return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
var qc = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
function Jc(e) {
	if (!e) if (mc) {
		let t = document.querySelector("base");
		e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
	} else e = "/";
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Lc(e);
}
var Yc = /^[^#]+#/;
function Xc(e, t) {
	return e.replace(Yc, "#") + t;
}
function Zc(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Qc = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function $c(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#");
		if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1)))) try {
			let t = document.querySelector(e.el);
			if (r && t) {
				G.VUE_ROUTER_R0040({ el: e.el });
				return;
			}
		} catch {
			G.VUE_ROUTER_R0041({ el: e.el });
			return;
		}
		let i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) {
			process.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0042({ el: e.el });
			return;
		}
		t = Zc(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function el(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var tl = /* @__PURE__ */ new Map();
function nl(e, t) {
	tl.set(e, t);
}
function rl(e) {
	let t = tl.get(e);
	return tl.delete(e), t;
}
function il(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function al(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function ol(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(bc, " "), i = r.indexOf("="), a = Fc(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Fc(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			W(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function sl(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = Mc(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(W(r) ? r.map((e) => e && jc(e)) : [r && jc(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function cl(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = W(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function ll() {
	let e = [];
	function t(t) {
		return e.push(t), () => {
			let n = e.indexOf(t);
			n > -1 && e.splice(n, 1);
		};
	}
	function n() {
		e = [];
	}
	return {
		add: t,
		list: () => e.slice(),
		reset: n
	};
}
function ul(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Ni(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : il(e) ? c(Ni(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, process.env.NODE_ENV === "production" ? l : dl(fl(l, t, n)))), d = Promise.resolve(u);
		if (e.length < 3 && (d = d.then(l)), process.env.NODE_ENV !== "production" && e.length > 2) {
			let t = {
				name: e.name,
				guard: e.toString()
			};
			if (typeof u == "object" && "then" in u) d = d.then((e) => l._called ? e : (G.VUE_ROUTER_R0023(t), Promise.reject(/* @__PURE__ */ Error("Invalid navigation guard"))));
			else if (u !== void 0 && !l._called) {
				G.VUE_ROUTER_R0023(t), c(/* @__PURE__ */ Error("Invalid navigation guard"));
				return;
			}
		}
		d.catch((e) => c(e));
	});
}
function dl(e) {
	let t = !1;
	return function() {
		return t || (t = !0, G.VUE_ROUTER_R0025()), e.apply(this, arguments);
	};
}
function fl(e, t, n) {
	let r = 0;
	return function() {
		r++ === 1 && G.VUE_ROUTER_R0024({
			from: n.fullPath,
			to: t.fullPath
		}), e._called = !0, r === 1 && e.apply(null, arguments);
	};
}
function pl(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) {
		process.env.NODE_ENV !== "production" && !o.components && o.children && !o.children.length && G.VUE_ROUTER_R0026({ path: o.path });
		for (let e in o.components) {
			let s = o.components[e];
			if (process.env.NODE_ENV !== "production") {
				if (!s || typeof s != "object" && typeof s != "function") throw G.VUE_ROUTER_R0027({
					name: e,
					path: o.path,
					received: String(s)
				}), Error("Invalid route component");
				if ("then" in s) {
					G.VUE_ROUTER_R0028({
						name: e,
						path: o.path
					});
					let t = s;
					s = () => t;
				} else s.__asyncLoader && !s.__warnedDefineAsync && (s.__warnedDefineAsync = !0, G.VUE_ROUTER_R0029({
					name: e,
					path: o.path
				}));
			}
			if (!(t !== "beforeRouteEnter" && !o.instances[e])) if (Ei(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(ul(c, n, r, o, e, i));
			} else {
				let c = s();
				process.env.NODE_ENV !== "production" && !("catch" in c) && (G.VUE_ROUTER_R0030({
					name: e,
					path: o.path
				}), c = Promise.resolve(c)), a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Di(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && ul(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function ml(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Hc(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Hc(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
function hl(e, t) {
	let n = U({}, e, { matched: e.matched.map((e) => Fl(e, [
		"instances",
		"children",
		"aliasOf"
	])) });
	return { _custom: {
		type: null,
		readOnly: !0,
		display: e.fullPath,
		tooltip: t,
		value: n
	} };
}
function gl(e) {
	return { _custom: { display: e } };
}
var _l = 0;
function vl(e, t, n) {
	if (t.__hasDevtools) return;
	t.__hasDevtools = !0;
	let r = _l++;
	Go({
		id: "org.vuejs.router" + (r ? "." + r : ""),
		label: "Vue Router",
		packageName: "vue-router",
		homepage: "https://router.vuejs.org",
		logo: "https://router.vuejs.org/logo.png",
		componentStateTypes: ["Routing"],
		app: e
	}, (i) => {
		i.on.inspectComponent((e) => {
			e.instanceData && e.instanceData.state.push({
				type: "Routing",
				key: "$route",
				editable: !1,
				value: hl(t.currentRoute.value, "Current Route")
			});
		}), i.on.visitComponentTree(({ treeNode: e, componentInstance: t }) => {
			if (t.__vrv_devtools) {
				let n = t.__vrv_devtools;
				e.tags.push({
					label: (n.name ? `${n.name.toString()}: ` : "") + n.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: xl
				});
			}
			W(t.__vrl_devtools) && (t.__devtoolsApi = i, t.__vrl_devtools.forEach((t) => {
				let n = t.route.path, r = Tl, i = "", a = 0;
				t.error ? (n = t.error, r = Dl, a = Ol) : t.isExactActive ? (r = Cl, i = "This is exactly active") : t.isActive && (r = Sl, i = "This link is active"), e.tags.push({
					label: n,
					textColor: a,
					tooltip: i,
					backgroundColor: r
				});
			}));
		}), oe(t.currentRoute, () => {
			c(), i.notifyComponentUpdate(), i.sendInspectorTree(s), i.sendInspectorState(s);
		});
		let a = "router:navigations:" + r;
		i.addTimelineLayer({
			id: a,
			label: `Router${r ? " " + r : ""} Navigations`,
			color: 4237508
		}), t.onError((e, t) => {
			i.addTimelineEvent({
				layerId: a,
				event: {
					title: "Error during Navigation",
					subtitle: t.fullPath,
					logType: "error",
					time: i.now(),
					data: { error: e },
					groupId: t.meta.__navigationId
				}
			});
		});
		let o = 0;
		t.beforeEach((e, t) => {
			let n = {
				guard: gl("beforeEach"),
				from: hl(t, "Current Location during this navigation"),
				to: hl(e, "Target location")
			};
			Object.defineProperty(e.meta, "__navigationId", { value: o++ }), i.addTimelineEvent({
				layerId: a,
				event: {
					time: i.now(),
					title: "Start of navigation",
					subtitle: e.fullPath,
					data: n,
					groupId: e.meta.__navigationId
				}
			});
		}), t.afterEach((e, t, n) => {
			let r = { guard: gl("afterEach") };
			n ? (r.failure = { _custom: {
				type: Error,
				readOnly: !0,
				display: n ? n.message : "",
				tooltip: "Navigation Failure",
				value: n
			} }, r.status = gl("❌")) : r.status = gl("✅"), r.from = hl(t, "Current Location during this navigation"), r.to = hl(e, "Target location"), i.addTimelineEvent({
				layerId: a,
				event: {
					title: "End of navigation",
					subtitle: e.fullPath,
					time: i.now(),
					data: r,
					logType: n ? "warning" : "default",
					groupId: e.meta.__navigationId
				}
			});
		});
		let s = "router-inspector:" + r;
		i.addInspector({
			id: s,
			label: "Routes" + (r ? " " + r : ""),
			icon: "book",
			treeFilterPlaceholder: "Search routes"
		});
		function c() {
			if (!l) return;
			let e = l, r = n.getRoutes().filter((e) => !e.parent || !e.parent.record.components);
			r.forEach(Nl), e.filter && (r = r.filter((t) => Pl(t, e.filter.toLowerCase()))), r.forEach((e) => Ml(e, t.currentRoute.value)), e.rootNodes = r.map(kl);
		}
		let l;
		i.on.getInspectorTree((t) => {
			l = t, t.app === e && t.inspectorId === s && c();
		}), i.on.getInspectorState((t) => {
			if (t.app === e && t.inspectorId === s) {
				let e = n.getRoutes().find((e) => e.record.__vd_id === t.nodeId);
				e && (t.state = { options: bl(e) });
			}
		}), i.sendInspectorTree(s), i.sendInspectorState(s);
	});
}
function yl(e) {
	return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function bl(e) {
	let { record: t } = e, n = [{
		editable: !1,
		key: "path",
		value: t.path
	}];
	return t.name != null && n.push({
		editable: !1,
		key: "name",
		value: t.name
	}), n.push({
		editable: !1,
		key: "regexp",
		value: e.re
	}), e.keys.length && n.push({
		editable: !1,
		key: "keys",
		value: { _custom: {
			type: null,
			readOnly: !0,
			display: e.keys.map((e) => `${e.name}${yl(e)}`).join(" "),
			tooltip: "Param keys",
			value: e.keys
		} }
	}), t.redirect != null && n.push({
		editable: !1,
		key: "redirect",
		value: t.redirect
	}), e.alias.length && n.push({
		editable: !1,
		key: "aliases",
		value: e.alias.map((e) => e.record.path)
	}), Object.keys(e.record.meta).length && n.push({
		editable: !1,
		key: "meta",
		value: e.record.meta
	}), n.push({
		key: "score",
		editable: !1,
		value: { _custom: {
			type: null,
			readOnly: !0,
			display: e.score.map((e) => e.join(", ")).join(" | "),
			tooltip: "Score used to sort routes",
			value: e.score
		} }
	}), n;
}
var xl = 15485081, Sl = 2450411, Cl = 8702998, wl = 2282478, Tl = 16486972, El = 6710886, Dl = 16704226, Ol = 12131356;
function kl(e) {
	let t = [], { record: n } = e;
	n.name != null && t.push({
		label: String(n.name),
		textColor: 0,
		backgroundColor: wl
	}), n.aliasOf && t.push({
		label: "alias",
		textColor: 0,
		backgroundColor: Tl
	}), e.__vd_match && t.push({
		label: "matches",
		textColor: 0,
		backgroundColor: xl
	}), e.__vd_exactActive && t.push({
		label: "exact",
		textColor: 0,
		backgroundColor: Cl
	}), e.__vd_active && t.push({
		label: "active",
		textColor: 0,
		backgroundColor: Sl
	}), n.redirect && t.push({
		label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: El
	});
	let r = n.__vd_id;
	return r ?? (r = String(Al++), n.__vd_id = r), {
		id: r,
		label: n.path,
		tags: t,
		children: e.children.map(kl)
	};
}
var Al = 0, jl = /^\/(.*)\/([a-z]*)$/;
function Ml(e, t) {
	let n = t.matched.length && Hc(t.matched[t.matched.length - 1], e.record);
	e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((t) => Hc(t, e.record))), e.children.forEach((e) => Ml(e, t));
}
function Nl(e) {
	e.__vd_match = !1, e.children.forEach(Nl);
}
function Pl(e, t) {
	let n = String(e.re).match(jl);
	if (e.__vd_match = !1, !n || n.length < 3) return !1;
	if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t)) return e.children.forEach((e) => Pl(e, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
	let r = e.record.path.toLowerCase(), i = Fc(r);
	return !t.startsWith("/") && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((e) => Pl(e, t));
}
function Fl(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || (n[r] = e[r]);
	return n;
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
var Il = () => location.protocol + "//" + location.host;
function Ll(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Bc(n, "");
	}
	return Bc(n, e) + r + i;
}
function Rl(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Ll(e, location), c = n.value, l = t.value, u = 0;
		if (a) {
			if (n.value = s, t.value = a, o && o === c) {
				o = null;
				return;
			}
			u = l ? a.position - l.position : 0;
		} else r(s);
		i.forEach((e) => {
			e(n.value, c, {
				delta: u,
				type: "pop",
				direction: u ? u > 0 ? "forward" : "back" : ""
			});
		});
	};
	function c() {
		o = n.value;
	}
	function l(e) {
		i.push(e);
		let t = () => {
			let t = i.indexOf(e);
			t > -1 && i.splice(t, 1);
		};
		return a.push(t), t;
	}
	function u() {
		if (document.visibilityState === "hidden") {
			let { history: e } = window;
			if (!e.state) return;
			e.replaceState(U({}, e.state, { scroll: Qc() }), "");
		}
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function zl(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? Qc() : null
	};
}
function Bl(e) {
	let { history: t, location: n } = window, r = { value: Ll(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : Il() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			process.env.NODE_ENV === "production" ? console.error(e) : G.VUE_ROUTER_R0120({ cause: e }), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, U({}, t.state, zl(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = U({}, i.value, t.state, {
			forward: e,
			scroll: Qc()
		});
		process.env.NODE_ENV !== "production" && !t.state && G.VUE_ROUTER_R0121(), a(o.current, o, !0), a(e, U({}, zl(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function Vl(e) {
	e = Jc(e);
	let t = Bl(e), n = Rl(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = U({
		location: "",
		base: e,
		go: r,
		createHref: Xc.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function Hl(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && G.VUE_ROUTER_R0110({
		base: e,
		suggestion: e.replace(/#.*$/, "#")
	}), Vl(e);
}
var Ul = {
	type: 0,
	value: ""
}, Wl = /[a-zA-Z0-9_]/;
function Gl(e) {
	if (!e) return [[]];
	if (e === "/") return [[Ul]];
	if (!e.startsWith("/")) throw Error(process.env.NODE_ENV === "production" ? `Invalid path "${e}"` : `Route paths should start with a "/": "${e}" should be "/${e}".`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = 0, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === 0 ? a.push({
			type: 0,
			value: l
		}) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: 1,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) switch (c = e[s++], n) {
		case 0:
			c === "\\" ? (r = n, n = 4) : c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = 1) : f();
			break;
		case 4:
			f(), n = r;
			break;
		case 1:
			c === "(" ? n = 2 : Wl.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case 2:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
			break;
		case 3:
			d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default:
			t("Unknown state");
			break;
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var Kl = "[^/]+?", ql = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Jl = /[.+*?^${}()[\]/\\]/g;
function Yl(e, t) {
	let n = U({}, ql, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(Jl, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Kl;
				if (u !== Kl) {
					s += 10;
					try {
						RegExp(`(${u})`);
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += 20, c && (s += -8), n && (s += -20), u === ".*" && (s += -50);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += .7000000000000001;
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
	let o = new RegExp(i, n.sensitive ? "" : "i");
	function s(e) {
		let t = e.match(o), n = {};
		if (!t) return null;
		for (let e = 1; e < t.length; e++) {
			let r = t[e] || "", i = a[e - 1];
			n[i.name] = r && i.repeatable ? r.split("/") : r;
		}
		return n;
	}
	function c(t) {
		let n = "", r = !1;
		for (let i of e) {
			(!r || !n.endsWith("/")) && (n += "/"), r = !1;
			for (let e of i) if (e.type === 0) n += e.value;
			else if (e.type === 1) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (W(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = W(c) ? c.join("/") : c;
				if (!l) if (s) i.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0);
				else throw Error(`Missing required param "${a}"`);
				n += l;
			}
		}
		return n || "/";
	}
	return {
		re: o,
		score: r,
		keys: a,
		parse: s,
		stringify: c
	};
}
function Xl(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Zl(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = Xl(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (Ql(r)) return 1;
		if (Ql(i)) return -1;
	}
	return i.length - r.length;
}
function Ql(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var $l = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function eu(e, t, n) {
	let r = Yl(Gl(e.path), n);
	if (process.env.NODE_ENV !== "production") {
		let t = /* @__PURE__ */ new Set();
		for (let n of r.keys) t.has(n.name) && G.VUE_ROUTER_R0090({
			name: n.name,
			path: e.path
		}), t.add(n.name);
	}
	let i = U(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function tu(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Ai($l, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = ru(e);
		process.env.NODE_ENV !== "production" && lu(s, n), s.aliasOf = r && r.record;
		let l = Ai(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(ru(U({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && u[0] !== "/") {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (process.env.NODE_ENV !== "production" && t.path === "*") throw Error("Catch all routes (\"*\") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.");
			if (d = eu(t, n, l), process.env.NODE_ENV !== "production" && n && u[0] === "/" && du(d, n), r ? (r.alias.push(d), process.env.NODE_ENV !== "production" && cu(r, d)) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !au(d) && (process.env.NODE_ENV !== "production" && uu(e, n), o(e.name))), mu(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : ki;
	}
	function o(e) {
		if (al(e)) {
			let t = r.get(e);
			t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
		} else {
			let t = n.indexOf(e);
			t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
		}
	}
	function s() {
		return n;
	}
	function c(e) {
		let t = fu(e, n);
		n.splice(t, 0, e), e.record.name && !au(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Ni(1, { location: e });
			if (process.env.NODE_ENV !== "production") {
				let n = Object.keys(e.params || {}).filter((e) => !i.keys.find((t) => t.name === e));
				if (n.length) {
					let e = !i.keys.length && n.some((e) => e in t.params);
					G.VUE_ROUTER_R0100({
						params: n.join("\", \""),
						inherited: e ? " If you are using a catch-all route with a named redirect, pass an empty `params` object: `redirect: { name: '...', params: {} }`." : ""
					});
				}
			}
			s = i.record.name, a = U(nu(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && nu(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, process.env.NODE_ENV !== "production" && !o.startsWith("/") && G.VUE_ROUTER_R0101({ path: o }), i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Ni(1, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = U({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: ou(c)
		};
	}
	e.forEach((e) => a(e));
	function u() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		clearRoutes: u,
		getRoutes: s,
		getRecordMatcher: i
	};
}
function nu(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function ru(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: iu(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function iu(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function au(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function ou(e) {
	return e.reduce((e, t) => U(e, t.meta), {});
}
function su(e, t) {
	return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function cu(e, t) {
	for (let n of e.keys) if (!n.optional && !t.keys.find(su.bind(null, n))) {
		G.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
	for (let n of t.keys) if (!n.optional && !e.keys.find(su.bind(null, n))) {
		G.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
}
function lu(e, t) {
	t && t.record.name && !e.name && !e.path && e.children.length === 0 && G.VUE_ROUTER_R0103({ name: String(t.record.name) });
}
function uu(e, t) {
	for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function du(e, t) {
	for (let n of t.keys) if (!e.keys.find(su.bind(null, n))) {
		G.VUE_ROUTER_R0104({
			path: e.record.path,
			name: n.name,
			parent: t.record.path
		});
		return;
	}
}
function fu(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Zl(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = pu(e);
	return i && (r = t.lastIndexOf(i, r - 1), process.env.NODE_ENV !== "production" && r < 0 && G.VUE_ROUTER_R0105({
		ancestor: i.record.path,
		record: e.record.path
	})), r;
}
function pu(e) {
	let t = e;
	for (; t = t.parent;) if (mu(t) && Zl(e, t) === 0) return t;
}
function mu({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function hu(e) {
	let t = x(zi), n = x(Bi), r = !1, i = null, a = u(() => {
		let n = re(e.to);
		return process.env.NODE_ENV !== "production" && (!r || n !== i) && (il(n) || G.VUE_ROUTER_R0050({ to: n }), i = n, r = !0), t.resolve(n);
	}), o = u(() => {
		let { matched: e } = a.value, { length: t } = e, r = e[t - 1], i = n.matched;
		if (!r || !i.length) return -1;
		let o = i.findIndex(Hc.bind(null, r));
		if (o > -1) return o;
		let s = bu(e[t - 2]);
		return t > 1 && bu(r) === s && i[i.length - 1].path !== s ? i.findIndex(Hc.bind(null, e[t - 2])) : o;
	}), s = u(() => o.value > -1 && yu(n.params, a.value.params)), c = u(() => o.value > -1 && o.value === n.matched.length - 1 && Uc(n.params, a.value.params));
	function l(n = {}) {
		if (vu(n)) {
			let n = t[re(e.replace) ? "replace" : "push"](re(e.to)).catch(ki);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	if (process.env.NODE_ENV !== "production" && mc) {
		let t = y();
		if (t) {
			let n = {
				route: a.value,
				isActive: s.value,
				isExactActive: c.value,
				error: null
			};
			t.__vrl_devtools = t.__vrl_devtools || [], t.__vrl_devtools.push(n), se(() => {
				n.route = a.value, n.isActive = s.value, n.isExactActive = c.value, n.error = il(re(e.to)) ? null : "Invalid \"to\" value";
			}, { flush: "post" });
		}
	}
	return {
		route: a,
		href: u(() => a.value.href),
		isActive: s,
		isExactActive: c,
		navigate: l
	};
}
function gu(e) {
	return e.length === 1 ? e[0] : e;
}
var _u = /* @__PURE__ */ v({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: hu,
	setup(e, { slots: t }) {
		let n = ee(hu(e)), { options: r } = x(zi), i = u(() => ({
			[xu(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[xu(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && gu(t.default(n));
			return e.custom ? r : b("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function vu(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function yu(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!W(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function bu(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var xu = (e, t, n) => e ?? t ?? n, Su = /*#__PURE__*/ v({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: n }) {
		process.env.NODE_ENV !== "production" && Tu();
		let r = x(Vi), i = u(() => e.route || r.value), a = x(Ri, 0), o = u(() => {
			let e = re(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = u(() => i.value.matched[o.value]);
		w(Ri, u(() => o.value + 1)), w(Li, s), w(Vi, i);
		let c = T();
		return oe(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Hc(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, l = s.value, u = l && l.components[a];
			if (!u) return Cu(n.default, {
				Component: u,
				route: r
			});
			let d = l.props[a], f = b(u, U({}, d ? d === !0 ? r.params : typeof d == "function" ? d(r) : d : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (l.instances[a] = null);
				},
				ref: c
			}));
			if (process.env.NODE_ENV !== "production" && mc && f.ref) {
				let e = {
					depth: o.value,
					name: l.name,
					path: l.path,
					meta: l.meta
				};
				(W(f.ref) ? f.ref.map((e) => e.i) : [f.ref.i]).forEach((t) => {
					t.__vrv_devtools = e;
				});
			}
			return Cu(n.default, {
				Component: f,
				route: r
			}) || f;
		};
	}
});
function Cu(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var wu = Su;
function Tu() {
	let e = y(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
	if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
		let e = t === "KeepAlive" ? "keep-alive" : "transition";
		G.VUE_ROUTER_R0060({ comp: e });
	}
}
function Eu(e) {
	let t = tu(e.routes, e), n = e.parseQuery || ol, r = e.stringifyQuery || sl, i = e.history;
	if (process.env.NODE_ENV !== "production" && !i) throw Error("Provide the \"history\" option when calling \"createRouter()\": https://router.vuejs.org/api/interfaces/RouterOptions.html#history");
	let a = ll(), o = ll(), s = ll(), c = ne(qc), l = qc;
	mc && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Oi.bind(null, (e) => "" + e), d = Oi.bind(null, Pc), f = Oi.bind(null, Fc);
	function p(e, n) {
		let r, i;
		return al(e) ? (r = t.getRecordMatcher(e), process.env.NODE_ENV !== "production" && !r && G.VUE_ROUTER_R0001({ name: String(e) }), i = n) : i = e, t.addRoute(i, r);
	}
	function m(e) {
		let n = t.getRecordMatcher(e);
		n ? t.removeRoute(n) : process.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0002({ name: String(e) });
	}
	function h() {
		return t.getRoutes().map((e) => e.record);
	}
	function g(e) {
		return !!t.getRecordMatcher(e);
	}
	function _(e, a) {
		if (a = U({}, a || c.value), typeof e == "string") {
			let r = Rc(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return process.env.NODE_ENV !== "production" && (s.startsWith("//") ? G.VUE_ROUTER_R0003({
				location: e,
				href: s
			}) : o.matched.length || G.VUE_ROUTER_R0004({ path: e })), U(r, o, {
				params: f(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		if (process.env.NODE_ENV !== "production" && !il(e)) return G.VUE_ROUTER_R0005({ rawLocation: e }), _({});
		let o;
		if (e.path != null) process.env.NODE_ENV !== "production" && "params" in e && !("name" in e) && Object.keys(e.params).length && G.VUE_ROUTER_R0006({ path: e.path }), o = U({}, e, { path: Rc(n, e.path, a.path).path });
		else {
			let t = U({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = U({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		process.env.NODE_ENV !== "production" && l && !l.startsWith("#") && G.VUE_ROUTER_R0007({ hash: l }), s.params = u(f(s.params));
		let p = zc(r, U({}, e, {
			hash: Ac(l),
			path: s.path
		})), m = i.createHref(p);
		return process.env.NODE_ENV !== "production" && (m.startsWith("//") ? G.VUE_ROUTER_R0003({
			location: e,
			href: m
		}) : s.matched.length || G.VUE_ROUTER_R0004({ path: e.path == null ? e : e.path })), U({
			fullPath: p,
			hash: l,
			query: r === sl ? cl(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? Rc(n, e, c.value.path) : U({}, e);
	}
	function y(e, t) {
		if (l !== e) return Ni(8, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return w(e);
	}
	function x(e) {
		return b(U(v(e), { replace: !0 }));
	}
	function C(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			if (typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = v(i) : { path: i }, i.params = {}), process.env.NODE_ENV !== "production" && i.path == null && !("name" in i)) throw G.VUE_ROUTER_R0008({
				target: JSON.stringify(i, null, 2),
				to: e.fullPath
			}), Error("Invalid redirect");
			return U({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function w(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = C(n, i);
		if (u) return w(U(v(u), {
			state: typeof u == "object" ? U({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && Vc(r, i, n) && (f = Ni(16, {
			to: d,
			from: i
		}), ue(i, i, !0, !1)), (f ? Promise.resolve(f) : E(d, i)).catch((e) => Pi(e) ? Pi(e, 2) ? e : le(e) : A(e, d, i)).then((e) => {
			if (e) {
				if (Pi(e, 2)) return process.env.NODE_ENV !== "production" && Vc(r, _(e.to), d) && t && (t._count = t._count ? t._count + 1 : 1) > 30 ? (G.VUE_ROUTER_R0009({
					from: i.fullPath,
					to: d.fullPath
				}), Promise.reject(/* @__PURE__ */ Error("Infinite redirect in navigation guard"))) : w(U({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? U({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = O(d, i, !0, s, a);
			return D(d, i, e), e;
		});
	}
	function ee(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function T(e) {
		let t = pe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function E(e, t) {
		let n, [r, i, s] = ml(e, t);
		n = pl(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(ul(r, e, t));
		});
		let c = ee.bind(null, e, t);
		return n.push(c), M(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(ul(r, e, t));
			return n.push(c), M(n);
		}).then(() => {
			n = pl(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(ul(r, e, t));
			});
			return n.push(c), M(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) if (W(r.beforeEnter)) for (let i of r.beforeEnter) n.push(ul(i, e, t));
			else n.push(ul(r.beforeEnter, e, t));
			return n.push(c), M(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = pl(s, "beforeRouteEnter", e, t, T), n.push(c), M(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(ul(r, e, t));
			return n.push(c), M(n);
		}).catch((e) => Pi(e, 8) ? e : Promise.reject(e));
	}
	function D(e, t, n) {
		s.list().forEach((r) => T(() => r(e, t, n)));
	}
	function O(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === qc, l = mc ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, U({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, ue(e, t, n, s), le();
	}
	let ie;
	function ae() {
		ie ||= i.listen((e, t, n) => {
			if (!j.listening) return;
			let r = _(e), a = C(r, j.currentRoute.value);
			if (a) {
				w(U(a, {
					replace: !0,
					force: !0
				}), r).catch(ki);
				return;
			}
			l = r;
			let o = c.value;
			mc && nl(el(o.fullPath, n.delta), Qc()), E(r, o).catch((e) => Pi(e, 12) ? e : Pi(e, 2) ? (w(U(v(e.to), { force: !0 }), r).then((e) => {
				Pi(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(ki), Promise.reject()) : (n.delta && i.go(-n.delta, !1), A(e, r, o))).then((e) => {
				e ||= O(r, o, !1), e && (n.delta && !Pi(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && Pi(e, 20) && i.go(-1, !1)), D(r, o, e);
			}).catch(ki);
		});
	}
	let oe = ll(), se = ll(), k;
	function A(e, t, n) {
		le(e);
		let r = se.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : (process.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0010(), console.error(e)), Promise.reject(e);
	}
	function ce() {
		return k && c.value !== qc ? Promise.resolve() : new Promise((e, t) => {
			oe.add([e, t]);
		});
	}
	function le(e) {
		return k || (k = !e, ae(), oe.list().forEach(([t, n]) => e ? n(e) : t()), oe.reset()), e;
	}
	function ue(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!mc || !a) return Promise.resolve();
		let o = !r && rl(el(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return S().then(() => a(t, n, o)).then((e) => t === c.value && e && $c(e)).catch((e) => t === c.value && A(e, t, n));
	}
	let de = (e) => i.go(e), fe, pe = /* @__PURE__ */ new Set(), j = {
		currentRoute: c,
		listening: !0,
		addRoute: p,
		removeRoute: m,
		clearRoutes: t.clearRoutes,
		hasRoute: g,
		getRoutes: h,
		resolve: _,
		options: e,
		push: b,
		replace: x,
		go: de,
		back: () => de(-1),
		forward: () => de(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: se.add,
		isReady: ce,
		install(e) {
			e.component("RouterLink", _u), e.component("RouterView", wu), e.config.globalProperties.$router = j, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => re(c)
			}), mc && !fe && c.value === qc && (fe = !0, b(i.location).catch((e) => {
				process.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0011({ cause: e });
			}));
			let n = {};
			for (let e in qc) Object.defineProperty(n, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(zi, j), e.provide(Bi, te(n)), e.provide(Vi, c);
			let r = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (l = qc, ie && ie(), ie = null, c.value = qc, fe = !1, k = !1), r();
			}, process.env.NODE_ENV !== "production" && mc && vl(e, j, t);
		}
	};
	function M(e) {
		return e.reduce((e, t) => e.then(() => T(t)), Promise.resolve());
	}
	return j;
}
//#endregion
//#region src/App.vue
var Du = {
	name: "App",
	computed: {
		...le(n, { store_ready: (e) => e.ready }),
		...le(t, ["graph_iri", "resource_iri"])
	},
	components: {
		SparqlConnection: oi,
		GraphList: gi,
		ClassList: vi,
		Splitpanes: s,
		Pane: c,
		RouterLink: _u,
		RouterView: wu
	},
	methods: { useSelectionStore: t },
	props: {
		title: {
			type: String,
			default: "OntoPad"
		},
		config: {
			type: Object,
			default: {}
		}
	},
	created() {
		let e = n(), r = t();
		e.updateEndpointConfiguration(this.config), r.initConfig(this.config), this.$navigation = this.$navigation || {}, this.$navigation.main = this.$navigation.main || [], this.$navigation.main = [
			{
				to: "/dashboard",
				title: "Home"
			},
			{
				to: "/instances",
				title: "Instances"
			},
			{
				to: "/voc",
				title: "Vocabulary"
			},
			{
				to: "/edit",
				title: "Edit"
			},
			{
				to: "/form",
				title: "Form"
			},
			{
				to: "/add",
				title: "Add"
			},
			{
				to: "/kanban",
				title: "Kanban"
			},
			{
				to: "/source",
				title: "Source"
			}
		].concat(this.$navigation.main);
	}
}, Ou = { class: "container-fluid" }, ku = { class: "row connection" }, Au = { key: 0 }, ju = { key: 1 }, Mu = {
	key: 0,
	class: "row"
}, Nu = { class: "nav nav-tabs" }, Pu = { key: 1 };
function Fu(e, t, n, r, i, a) {
	let o = D("SparqlConnection"), s = D("GraphList"), c = D("pane"), u = D("ClassList"), d = D("splitpanes"), f = D("RouterLink"), p = D("RouterView");
	return C(), m("div", Ou, [h("div", ku, [
		h("h1", null, O(n.title), 1),
		e.store_ready ? (C(), m("div", Au, "🟢 Store is ready")) : (C(), m("div", ju, "🔄 Loading")),
		_(o)
	]), e.store_ready ? (C(), m("div", Mu, [_(d, { class: "default-theme" }, {
		default: k(() => [_(c, { size: "30" }, {
			default: k(() => [_(d, {
				horizontal: "",
				style: { height: "80vh" }
			}, {
				default: k(() => [_(c, { size: "30" }, {
					default: k(() => [_(s, {
						graph_iri: e.graph_iri,
						selectGraph: (e) => {
							a.useSelectionStore().changeGraphIri(e), a.useSelectionStore().changeResourceIri(e);
						}
					}, null, 8, ["graph_iri", "selectGraph"])]),
					_: 1
				}), _(c, { size: "70" }, {
					default: k(() => [_(u, {
						class_iri: e.resource_iri,
						selectClass: (e) => {
							a.useSelectionStore().changeResourceIri(e);
						}
					}, null, 8, ["class_iri", "selectClass"])]),
					_: 1
				})]),
				_: 1
			})]),
			_: 1
		}), _(c, { size: "90" }, {
			default: k(() => [h("ul", Nu, [(C(!0), m(l, null, E(e.$navigation.main, (e, t) => (C(), m("li", {
				key: t,
				class: "nav-item"
			}, [_(f, {
				class: "nav-link",
				"active-class": "active",
				to: e.to
			}, {
				default: k(() => [g(O(e.title), 1)]),
				_: 2
			}, 1032, ["to"])]))), 128))]), _(p)]),
			_: 1
		})]),
		_: 1
	})])) : (C(), m("div", Pu, " Waiting for Store to be configured … "))]);
}
var Iu = /*#__PURE__*/ i(Du, [["render", Fu], ["__scopeId", "data-v-b5ac3aac"]]), Lu = Eu({
	history: Hl("./"),
	routes: [
		{
			path: "/",
			redirect: { path: "/dashboard" }
		},
		{
			path: "/about",
			name: "about",
			component: () => import("./AboutView-C-AyOzLx.js")
		},
		{
			path: "/dashboard",
			name: "DashboardView",
			component: () => import("./DashboardView-DDwWY9Y5.js")
		},
		{
			path: "/instances",
			name: "InstanceList",
			component: () => import("./InstanceList-CYgEelzK.js")
		},
		{
			path: "/voc",
			name: "VocPad",
			component: () => import("./VocPad-czTz4iN8.js")
		},
		{
			path: "/edit",
			name: "EditForm",
			component: () => import("./EditForm-C18KhXhM.js")
		},
		{
			path: "/form",
			name: "FormDemo",
			component: () => import("./FormDemo-CfaAYdHR.js")
		},
		{
			path: "/add",
			name: "InputForm",
			component: () => import("./InputForm-C8xXRcb-.js")
		},
		{
			path: "/source",
			name: "Source",
			component: () => import("./Source-CNZ0vQl7.js")
		}
	]
});
//#endregion
//#region src/helpers/plugin.js
function Ru(e, t) {
	console.log("Register new OntoPad plugin"), e.config.globalProperties.$router.addRoute({
		path: t.path,
		name: t.name,
		component: t.component
	}), e.config.globalProperties.$navigation = e.config.globalProperties.$navigation || {}, e.config.globalProperties.$navigation.main = e.config.globalProperties.$navigation.main || [], e.config.globalProperties.$navigation.main.push({
		to: t.path,
		title: t.title
	});
}
//#endregion
//#region src/plugins/HelloPlugin.js
var zu = { install: (e, t) => {
	Ru(e, {
		name: "hello",
		component: () => import("./HelloView-Cw25i5mt.js"),
		path: "/hello",
		title: "Hello"
	});
} }, Bu = d(Iu, {
	title: "OntoPad next ⏩",
	config: Gr(document.querySelector("#ontopad_configuration").text)
});
Bu.use(ce()), Bu.use(Lu), Bu.use(zu), Bu.mount("#app");
//#endregion
