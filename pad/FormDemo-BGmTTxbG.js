import { A as e, B as t, E as n, G as r, H as i, L as a, O as o, S as s, U as c, V as l, W as u, Y as d, Z as f, a as p, i as m, k as h, n as g, o as _, q as v, r as y, t as b, v as x, w as S, x as C } from "./rdf-D2-Nb4_o.js";
import { t as w } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { n as T, t as ee } from "./splitpanes.esm-DWEvKrA8.js";
import E from "./InstanceList-DgPxECvf.js";
import { t as D } from "./Term-DjvlK-Mw.js";
import { t as te } from "./dist-BOW-KdzQ.js";
import { t as O } from "./v4-DIjJgmR0.js";
import { mapState as k } from "pinia";
import { createBlock as A, createElementVNode as ne, createVNode as j, openBlock as re, resolveComponent as M, toDisplayString as N, withCtx as ie } from "vue";
//#region node_modules/rdf-canonize/lib/IdentifierIssuer.js
var ae = /* @__PURE__ */ v(((e, t) => {
	t.exports = class e {
		constructor(e, t = /* @__PURE__ */ new Map(), n = 0) {
			this.prefix = e, this._existing = t, this.counter = n;
		}
		clone() {
			let { prefix: t, _existing: n, counter: r } = this;
			return new e(t, new Map(n), r);
		}
		getId(e) {
			let t = e && this._existing.get(e);
			if (t) return t;
			let n = this.prefix + this.counter;
			return this.counter++, e && this._existing.set(e, n), n;
		}
		hasId(e) {
			return this._existing.has(e);
		}
		getOldIds() {
			return [...this._existing.keys()];
		}
	};
})), oe = /* @__PURE__ */ v((() => {
	(function(e, t) {
		if (e.setImmediate) return;
		var n = 1, r = {}, i = !1, a = e.document, o;
		function s(e) {
			typeof e != "function" && (e = Function("" + e));
			for (var t = Array(arguments.length - 1), i = 0; i < t.length; i++) t[i] = arguments[i + 1];
			return r[n] = {
				callback: e,
				args: t
			}, o(n), n++;
		}
		function c(e) {
			delete r[e];
		}
		function l(e) {
			var n = e.callback, r = e.args;
			switch (r.length) {
				case 0:
					n();
					break;
				case 1:
					n(r[0]);
					break;
				case 2:
					n(r[0], r[1]);
					break;
				case 3:
					n(r[0], r[1], r[2]);
					break;
				default:
					n.apply(t, r);
					break;
			}
		}
		function u(e) {
			if (i) setTimeout(u, 0, e);
			else {
				var t = r[e];
				if (t) {
					i = !0;
					try {
						l(t);
					} finally {
						c(e), i = !1;
					}
				}
			}
		}
		function d() {
			o = function(e) {
				process.nextTick(function() {
					u(e);
				});
			};
		}
		function f() {
			if (e.postMessage && !e.importScripts) {
				var t = !0, n = e.onmessage;
				return e.onmessage = function() {
					t = !1;
				}, e.postMessage("", "*"), e.onmessage = n, t;
			}
		}
		function p() {
			var t = "setImmediate$" + Math.random() + "$", n = function(n) {
				n.source === e && typeof n.data == "string" && n.data.indexOf(t) === 0 && u(+n.data.slice(t.length));
			};
			e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), o = function(n) {
				e.postMessage(t + n, "*");
			};
		}
		function m() {
			var e = new MessageChannel();
			e.port1.onmessage = function(e) {
				var t = e.data;
				u(t);
			}, o = function(t) {
				e.port2.postMessage(t);
			};
		}
		function h() {
			var e = a.documentElement;
			o = function(t) {
				var n = a.createElement("script");
				n.onreadystatechange = function() {
					u(t), n.onreadystatechange = null, e.removeChild(n), n = null;
				}, e.appendChild(n);
			};
		}
		function g() {
			o = function(e) {
				setTimeout(u, 0, e);
			};
		}
		var _ = Object.getPrototypeOf && Object.getPrototypeOf(e);
		_ = _ && _.setTimeout ? _ : e, {}.toString.call(e.process) === "[object process]" ? d() : f() ? p() : e.MessageChannel ? m() : a && "onreadystatechange" in a.createElement("script") ? h() : g(), _.setImmediate = s, _.clearImmediate = c;
	})(typeof self > "u" ? typeof global > "u" ? void 0 : global : self);
})), se = /* @__PURE__ */ v(((e) => {
	oe(), e.setImmediate = setImmediate, e.crypto = globalThis.crypto;
	var t = [];
	for (let e = 0; e <= 255; ++e) t.push(e.toString(16).padStart(2, "0"));
	e.bufferToHex = function(e) {
		let n = "", r = new Uint8Array(e);
		for (let e = 0; e < r.length; ++e) n += t[r[e]];
		return n;
	};
})), ce = /* @__PURE__ */ v(((e, t) => {
	var { bufferToHex: n, crypto: r } = se(), i = /* @__PURE__ */ new Map([
		["sha256", "SHA-256"],
		["SHA256", "SHA-256"],
		["SHA-256", "SHA-256"],
		["sha384", "SHA-384"],
		["SHA384", "SHA-384"],
		["SHA-384", "SHA-384"],
		["sha512", "SHA-512"],
		["SHA512", "SHA-512"],
		["SHA-512", "SHA-512"]
	]);
	t.exports = class {
		constructor(e) {
			if (!(r && r.subtle)) throw Error("crypto.subtle not found.");
			if (!i.has(e)) throw Error(`Unsupported algorithm "${e}".`);
			this.algorithm = i.get(e), this._content = "";
		}
		update(e) {
			this._content += e;
		}
		async digest() {
			let e = new TextEncoder().encode(this._content);
			return n(await r.subtle.digest(this.algorithm, e));
		}
	};
})), le = /* @__PURE__ */ v(((e, t) => {
	t.exports = class {
		constructor(e) {
			this.current = e.sort(), this.done = !1, this.dir = /* @__PURE__ */ new Map();
			for (let t = 0; t < e.length; ++t) this.dir.set(e[t], !0);
		}
		hasNext() {
			return !this.done;
		}
		next() {
			let { current: e, dir: t } = this, n = e.slice(), r = null, i = 0, a = e.length;
			for (let n = 0; n < a; ++n) {
				let o = e[n], s = t.get(o);
				(r === null || o > r) && (s && n > 0 && o > e[n - 1] || !s && n < a - 1 && o > e[n + 1]) && (r = o, i = n);
			}
			if (r === null) this.done = !0;
			else {
				let n = t.get(r) ? i - 1 : i + 1;
				e[i] = e[n], e[n] = r;
				for (let n of e) n > r && t.set(n, !t.get(n));
			}
			return n;
		}
	};
})), ue = /* @__PURE__ */ v(((e, t) => {
	var n = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString", r = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", a = "BlankNode", o = "Literal", s = {};
	s.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, s.empty = /* @__PURE__ */ RegExp("^[ \\t]*$"), s.quad = /* @__PURE__ */ RegExp("^[ \\t]*(?:(?:<((?:[^\0- <>\"{}|^`\\\\]|\\\\u[0-9A-Fa-f]{4}|\\\\U[0-9A-Fa-f]{8})*)>)|_:((?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?))[ \\t]+(?:<((?:[^\0- <>\"{}|^`\\\\]|\\\\u[0-9A-Fa-f]{4}|\\\\U[0-9A-Fa-f]{8})*)>)[ \\t]+(?:(?:<((?:[^\0- <>\"{}|^`\\\\]|\\\\u[0-9A-Fa-f]{4}|\\\\U[0-9A-Fa-f]{8})*)>)|_:((?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?)|(?:\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"(?:(?:\\^\\^(?:<((?:[^\0- <>\"{}|^`\\\\]|\\\\u[0-9A-Fa-f]{4}|\\\\U[0-9A-Fa-f]{8})*)>))|(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*)))?))[ \\t]*(?:\\.|(?:(?:(?:<((?:[^\0- <>\"{}|^`\\\\]|\\\\u[0-9A-Fa-f]{4}|\\\\U[0-9A-Fa-f]{8})*)>)|_:((?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9])(?:(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀.])*(?:[A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�_0-9-·̀-ͯ‿-⁀]))?))[ \\t]*\\.))[ \\t]*$"), t.exports = class e {
		static parse(e) {
			let t = [], l = {}, u = e.split(s.eoln), d = 0;
			for (let e of u) {
				if (d++, s.empty.test(e)) continue;
				let u = e.match(s.quad);
				if (u === null) throw Error("N-Quads parse error on line " + d + ".");
				let f = {
					subject: null,
					predicate: null,
					object: null,
					graph: null
				};
				if (u[1] === void 0 ? f.subject = {
					termType: a,
					value: u[2]
				} : f.subject = {
					termType: i,
					value: v(u[1])
				}, f.predicate = {
					termType: i,
					value: v(u[3])
				}, u[4] === void 0 ? u[5] === void 0 ? (f.object = {
					termType: o,
					value: void 0,
					datatype: { termType: i }
				}, u[7] === void 0 ? u[8] === void 0 ? f.object.datatype.value = r : (f.object.datatype.value = n, f.object.language = u[8]) : f.object.datatype.value = v(u[7]), f.object.value = p(u[6])) : f.object = {
					termType: a,
					value: u[5]
				} : f.object = {
					termType: i,
					value: v(u[4])
				}, u[9] === void 0 ? u[10] === void 0 ? f.graph = {
					termType: "DefaultGraph",
					value: ""
				} : f.graph = {
					termType: a,
					value: u[10]
				} : f.graph = {
					termType: i,
					value: v(u[9])
				}, !(f.graph.value in l)) l[f.graph.value] = [f], t.push(f);
				else {
					let e = !0, n = l[f.graph.value];
					for (let t of n) if (c(t, f)) {
						e = !1;
						break;
					}
					e && (n.push(f), t.push(f));
				}
			}
			return t;
		}
		static serialize(t) {
			let n = [];
			for (let r of t) n.push(e.serializeQuad(r));
			return n.sort().join("");
		}
		static serializeQuadComponents(e, t, o, s) {
			let c = "";
			return e.termType === i ? c += `<${g(e.value)}>` : c += `_:${e.value}`, t.termType === i ? c += ` <${g(t.value)}> ` : c += ` _:${t.value} `, o.termType === i ? c += `<${g(o.value)}>` : o.termType === a ? c += `_:${o.value}` : (c += `"${d(o.value)}"`, o.datatype.value === n ? o.language && (c += `@${o.language}`) : o.datatype.value !== r && (c += `^^<${g(o.datatype.value)}>`)), s.termType === i ? c += ` <${g(s.value)}>` : s.termType === a && (c += ` _:${s.value}`), c += " .\n", c;
		}
		static serializeQuad(t) {
			return e.serializeQuadComponents(t.subject, t.predicate, t.object, t.graph);
		}
	};
	function c(e, t) {
		return !(e.subject.termType === t.subject.termType && e.object.termType === t.object.termType) || !(e.subject.value === t.subject.value && e.predicate.value === t.predicate.value && e.object.value === t.object.value) ? !1 : e.object.termType !== o || e.object.datatype.termType === t.object.datatype.termType && e.object.language === t.object.language && e.object.datatype.value === t.object.datatype.value;
	}
	var l = /[\u0000-\u001F\u007F"\\]/g, u = [];
	for (let e = 0; e <= 127; ++e) l.test(String.fromCharCode(e)) && (u[e] = "\\u" + e.toString(16).toUpperCase().padStart(4, "0"), l.lastIndex = 0);
	u["\b".codePointAt(0)] = "\\b", u["	".codePointAt(0)] = "\\t", u["\n".codePointAt(0)] = "\\n", u["\f".codePointAt(0)] = "\\f", u["\r".codePointAt(0)] = "\\r", u["\"".codePointAt(0)] = "\\\"", u["\\".codePointAt(0)] = "\\\\";
	function d(e) {
		return l.test(e) ? e.replace(l, function(e) {
			return u[e.codePointAt(0)];
		}) : e;
	}
	var f = /(?:\\([btnfr"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
	function p(e) {
		return f.test(e) ? e.replace(f, function(e, t, n, r) {
			if (t) switch (t) {
				case "b": return "\b";
				case "t": return "	";
				case "n": return "\n";
				case "f": return "\f";
				case "r": return "\r";
				case "\"": return "\"";
				case "'": return "'";
				case "\\": return "\\";
			}
			if (n) return String.fromCharCode(parseInt(n, 16));
			if (r) return String.fromCodePoint(parseInt(r, 16));
		}) : e;
	}
	var m = /[\u0000-\u0020<>"{}|^`\\]/g, h = [];
	for (let e = 0; e <= 127; ++e) m.test(String.fromCharCode(e)) && (h[e] = "\\u" + e.toString(16).toUpperCase().padStart(4, "0"), m.lastIndex = 0);
	function g(e) {
		return m.test(e) ? e.replace(m, function(e) {
			return h[e.codePointAt(0)];
		}) : e;
	}
	var _ = /(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
	function v(e) {
		return _.test(e) ? e.replace(_, function(e, t, n) {
			if (t) return String.fromCharCode(parseInt(t, 16));
			if (n) return String.fromCodePoint(parseInt(n, 16));
		}) : e;
	}
})), de = /* @__PURE__ */ v(((e, t) => {
	var n = ae(), r = ce(), i = le(), a = ue(), { setImmediate: o } = se();
	t.exports = class {
		constructor({ createMessageDigest: e = null, messageDigestAlgorithm: t = "sha256", canonicalIdMap: i = /* @__PURE__ */ new Map(), maxWorkFactor: a = 1, maxDeepIterations: o = -1, signal: s = null } = {}) {
			this.name = "RDFC-1.0", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new n("c14n", i), this.createMessageDigest = e || (() => new r(t)), this.maxWorkFactor = a, this.maxDeepIterations = o, this.remainingDeepIterations = 0, this.signal = s, this.quads = null;
		}
		async main(e) {
			this.quads = e;
			for (let t of e) this._addBlankNodeQuadInfo({
				quad: t,
				component: t.subject
			}), this._addBlankNodeQuadInfo({
				quad: t,
				component: t.object
			}), this._addBlankNodeQuadInfo({
				quad: t,
				component: t.graph
			});
			let t = /* @__PURE__ */ new Map(), r = [...this.blankNodeInfo.keys()], i = 0;
			for (let e of r) ++i % 100 == 0 && await this._yield(), await this._hashAndTrackBlankNode({
				id: e,
				hashToBlankNodes: t
			});
			let o = [...t.keys()].sort(), c = [];
			for (let e of o) {
				let n = t.get(e);
				if (n.length > 1) {
					c.push(n);
					continue;
				}
				let r = n[0];
				this.canonicalIssuer.getId(r);
			}
			if (this.maxDeepIterations < 0) if (this.maxWorkFactor === 0) this.maxDeepIterations = 0;
			else if (this.maxWorkFactor === Infinity) this.maxDeepIterations = Infinity;
			else {
				let e = c.reduce((e, t) => e + t.length, 0);
				this.maxDeepIterations = e ** this.maxWorkFactor;
			}
			this.maxDeepIterations > 2 ** 53 - 1 && (this.maxDeepIterations = Infinity), this.remainingDeepIterations = this.maxDeepIterations;
			for (let e of c) {
				let t = [];
				for (let r of e) {
					if (this.canonicalIssuer.hasId(r)) continue;
					let e = new n("b");
					e.getId(r);
					let i = await this.hashNDegreeQuads(r, e);
					t.push(i);
				}
				t.sort(s);
				for (let e of t) {
					let t = e.issuer.getOldIds();
					for (let e of t) this.canonicalIssuer.getId(e);
				}
			}
			let l = [];
			for (let e of this.quads) {
				let t = a.serializeQuadComponents(this._componentWithCanonicalId(e.subject), e.predicate, this._componentWithCanonicalId(e.object), this._componentWithCanonicalId(e.graph));
				l.push(t);
			}
			return l.sort(), l.join("");
		}
		async hashFirstDegreeQuads(e) {
			let t = [], n = this.blankNodeInfo.get(e), r = n.quads;
			for (let n of r) t.push(a.serializeQuadComponents(this.modifyFirstDegreeComponent(e, n.subject, "subject"), n.predicate, this.modifyFirstDegreeComponent(e, n.object, "object"), this.modifyFirstDegreeComponent(e, n.graph, "graph")));
			t.sort();
			let i = this.createMessageDigest();
			for (let e of t) i.update(e);
			return n.hash = await i.digest(), n.hash;
		}
		async hashRelatedBlankNode(e, t, n, r) {
			let i = this.createMessageDigest();
			i.update(r), r !== "g" && i.update(this.getRelatedPredicate(t));
			let a;
			return a = this.canonicalIssuer.hasId(e) ? "_:" + this.canonicalIssuer.getId(e) : n.hasId(e) ? "_:" + n.getId(e) : this.blankNodeInfo.get(e).hash, i.update(a), i.digest();
		}
		async hashNDegreeQuads(e, t) {
			if (this.remainingDeepIterations === 0) throw Error(`Maximum deep iterations exceeded (${this.maxDeepIterations}).`);
			this.remainingDeepIterations--;
			let n = this.createMessageDigest(), r = await this.createHashToRelated(e, t), a = [...r.keys()].sort();
			for (let e of a) {
				n.update(e);
				let a = "", o, s = new i(r.get(e)), c = 0;
				for (; s.hasNext();) {
					let e = s.next();
					if (++c % 3 == 0) {
						if (this.signal && this.signal.aborted) throw Error(`Abort signal received: "${this.signal.reason}".`);
						await this._yield();
					}
					let n = t.clone(), r = "", i = [], l = !1;
					for (let t of e) if (this.canonicalIssuer.hasId(t) ? r += "_:" + this.canonicalIssuer.getId(t) : (n.hasId(t) || i.push(t), r += "_:" + n.getId(t)), a.length !== 0 && r > a) {
						l = !0;
						break;
					}
					if (!l) {
						for (let e of i) {
							let t = await this.hashNDegreeQuads(e, n);
							if (r += "_:" + n.getId(e), r += `<${t.hash}>`, n = t.issuer, a.length !== 0 && r > a) {
								l = !0;
								break;
							}
						}
						l || (a.length === 0 || r < a) && (a = r, o = n);
					}
				}
				n.update(a), t = o;
			}
			return {
				hash: await n.digest(),
				issuer: t
			};
		}
		modifyFirstDegreeComponent(e, t) {
			return t.termType === "BlankNode" ? {
				termType: "BlankNode",
				value: t.value === e ? "a" : "z"
			} : t;
		}
		getRelatedPredicate(e) {
			return `<${e.predicate.value}>`;
		}
		async createHashToRelated(e, t) {
			let n = /* @__PURE__ */ new Map(), r = this.blankNodeInfo.get(e).quads, i = 0;
			for (let a of r) ++i % 100 == 0 && await this._yield(), await Promise.all([
				this._addRelatedBlankNodeHash({
					quad: a,
					component: a.subject,
					position: "s",
					id: e,
					issuer: t,
					hashToRelated: n
				}),
				this._addRelatedBlankNodeHash({
					quad: a,
					component: a.object,
					position: "o",
					id: e,
					issuer: t,
					hashToRelated: n
				}),
				this._addRelatedBlankNodeHash({
					quad: a,
					component: a.graph,
					position: "g",
					id: e,
					issuer: t,
					hashToRelated: n
				})
			]);
			return n;
		}
		async _hashAndTrackBlankNode({ id: e, hashToBlankNodes: t }) {
			let n = await this.hashFirstDegreeQuads(e), r = t.get(n);
			r ? r.push(e) : t.set(n, [e]);
		}
		_addBlankNodeQuadInfo({ quad: e, component: t }) {
			if (t.termType !== "BlankNode") return;
			let n = t.value, r = this.blankNodeInfo.get(n);
			r ? r.quads.add(e) : this.blankNodeInfo.set(n, {
				quads: /* @__PURE__ */ new Set([e]),
				hash: null
			});
		}
		async _addRelatedBlankNodeHash({ quad: e, component: t, position: n, id: r, issuer: i, hashToRelated: a }) {
			if (!(t.termType === "BlankNode" && t.value !== r)) return;
			let o = t.value, s = await this.hashRelatedBlankNode(o, e, i, n), c = a.get(s);
			c ? c.push(o) : a.set(s, [o]);
		}
		_componentWithCanonicalId(e) {
			return e.termType === "BlankNode" && !e.value.startsWith(this.canonicalIssuer.prefix) ? {
				termType: "BlankNode",
				value: this.canonicalIssuer.getId(e.value)
			} : e;
		}
		async _yield() {
			return new Promise((e) => o(e));
		}
	};
	function s(e, t) {
		return e.hash < t.hash ? -1 : +(e.hash > t.hash);
	}
})), fe = /* @__PURE__ */ v(((e, t) => {
	var n = ae(), r = ce(), i = le(), a = ue();
	t.exports = class {
		constructor({ createMessageDigest: e = null, messageDigestAlgorithm: t = "sha256", canonicalIdMap: i = /* @__PURE__ */ new Map(), maxWorkFactor: a = 1, maxDeepIterations: o = -1, timeout: s = 0 } = {}) {
			this.name = "RDFC-1.0", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new n("c14n", i), this.createMessageDigest = e || (() => new r(t)), this.maxWorkFactor = a, this.maxDeepIterations = o, this.remainingDeepIterations = 0, this.timeout = s, s > 0 && (this.startTime = Date.now()), this.quads = null;
		}
		main(e) {
			this.quads = e;
			for (let t of e) this._addBlankNodeQuadInfo({
				quad: t,
				component: t.subject
			}), this._addBlankNodeQuadInfo({
				quad: t,
				component: t.object
			}), this._addBlankNodeQuadInfo({
				quad: t,
				component: t.graph
			});
			let t = /* @__PURE__ */ new Map(), r = [...this.blankNodeInfo.keys()];
			for (let e of r) this._hashAndTrackBlankNode({
				id: e,
				hashToBlankNodes: t
			});
			let i = [...t.keys()].sort(), s = [];
			for (let e of i) {
				let n = t.get(e);
				if (n.length > 1) {
					s.push(n);
					continue;
				}
				let r = n[0];
				this.canonicalIssuer.getId(r);
			}
			if (this.maxDeepIterations < 0) if (this.maxWorkFactor === 0) this.maxDeepIterations = 0;
			else if (this.maxWorkFactor === Infinity) this.maxDeepIterations = Infinity;
			else {
				let e = s.reduce((e, t) => e + t.length, 0);
				this.maxDeepIterations = e ** this.maxWorkFactor;
			}
			this.maxDeepIterations > 2 ** 53 - 1 && (this.maxDeepIterations = Infinity), this.remainingDeepIterations = this.maxDeepIterations;
			for (let e of s) {
				let t = [];
				for (let r of e) {
					if (this.canonicalIssuer.hasId(r)) continue;
					let e = new n("b");
					e.getId(r);
					let i = this.hashNDegreeQuads(r, e);
					t.push(i);
				}
				t.sort(o);
				for (let e of t) {
					let t = e.issuer.getOldIds();
					for (let e of t) this.canonicalIssuer.getId(e);
				}
			}
			let c = [];
			for (let e of this.quads) {
				let t = a.serializeQuadComponents(this._componentWithCanonicalId(e.subject), e.predicate, this._componentWithCanonicalId(e.object), this._componentWithCanonicalId(e.graph));
				c.push(t);
			}
			return c.sort(), c.join("");
		}
		hashFirstDegreeQuads(e) {
			let t = [], n = this.blankNodeInfo.get(e), r = n.quads;
			for (let n of r) t.push(a.serializeQuadComponents(this.modifyFirstDegreeComponent(e, n.subject, "subject"), n.predicate, this.modifyFirstDegreeComponent(e, n.object, "object"), this.modifyFirstDegreeComponent(e, n.graph, "graph")));
			t.sort();
			let i = this.createMessageDigest();
			for (let e of t) i.update(e);
			return n.hash = i.digest(), n.hash;
		}
		hashRelatedBlankNode(e, t, n, r) {
			let i = this.createMessageDigest();
			i.update(r), r !== "g" && i.update(this.getRelatedPredicate(t));
			let a;
			return a = this.canonicalIssuer.hasId(e) ? "_:" + this.canonicalIssuer.getId(e) : n.hasId(e) ? "_:" + n.getId(e) : this.blankNodeInfo.get(e).hash, i.update(a), i.digest();
		}
		hashNDegreeQuads(e, t) {
			if (this.remainingDeepIterations === 0) throw Error(`Maximum deep iterations exceeded (${this.maxDeepIterations}).`);
			this.remainingDeepIterations--;
			let n = this.createMessageDigest(), r = this.createHashToRelated(e, t), a = [...r.keys()].sort();
			for (let e of a) {
				n.update(e);
				let a = "", o, s = new i(r.get(e)), c = 0;
				for (; s.hasNext();) {
					let e = s.next();
					if (++c % 3 == 0 && this.timeout > 0 && Date.now() - this.startTime > this.timeout) throw Error("Canonize timeout.");
					let n = t.clone(), r = "", i = [], l = !1;
					for (let t of e) if (this.canonicalIssuer.hasId(t) ? r += "_:" + this.canonicalIssuer.getId(t) : (n.hasId(t) || i.push(t), r += "_:" + n.getId(t)), a.length !== 0 && r > a) {
						l = !0;
						break;
					}
					if (!l) {
						for (let e of i) {
							let t = this.hashNDegreeQuads(e, n);
							if (r += "_:" + n.getId(e), r += `<${t.hash}>`, n = t.issuer, a.length !== 0 && r > a) {
								l = !0;
								break;
							}
						}
						l || (a.length === 0 || r < a) && (a = r, o = n);
					}
				}
				n.update(a), t = o;
			}
			return {
				hash: n.digest(),
				issuer: t
			};
		}
		modifyFirstDegreeComponent(e, t) {
			return t.termType === "BlankNode" ? {
				termType: "BlankNode",
				value: t.value === e ? "a" : "z"
			} : t;
		}
		getRelatedPredicate(e) {
			return `<${e.predicate.value}>`;
		}
		createHashToRelated(e, t) {
			let n = /* @__PURE__ */ new Map(), r = this.blankNodeInfo.get(e).quads;
			for (let i of r) this._addRelatedBlankNodeHash({
				quad: i,
				component: i.subject,
				position: "s",
				id: e,
				issuer: t,
				hashToRelated: n
			}), this._addRelatedBlankNodeHash({
				quad: i,
				component: i.object,
				position: "o",
				id: e,
				issuer: t,
				hashToRelated: n
			}), this._addRelatedBlankNodeHash({
				quad: i,
				component: i.graph,
				position: "g",
				id: e,
				issuer: t,
				hashToRelated: n
			});
			return n;
		}
		_hashAndTrackBlankNode({ id: e, hashToBlankNodes: t }) {
			let n = this.hashFirstDegreeQuads(e), r = t.get(n);
			r ? r.push(e) : t.set(n, [e]);
		}
		_addBlankNodeQuadInfo({ quad: e, component: t }) {
			if (t.termType !== "BlankNode") return;
			let n = t.value, r = this.blankNodeInfo.get(n);
			r ? r.quads.add(e) : this.blankNodeInfo.set(n, {
				quads: /* @__PURE__ */ new Set([e]),
				hash: null
			});
		}
		_addRelatedBlankNodeHash({ quad: e, component: t, position: n, id: r, issuer: i, hashToRelated: a }) {
			if (!(t.termType === "BlankNode" && t.value !== r)) return;
			let o = t.value, s = this.hashRelatedBlankNode(o, e, i, n), c = a.get(s);
			c ? c.push(o) : a.set(s, [o]);
		}
		_componentWithCanonicalId(e) {
			return e.termType === "BlankNode" && !e.value.startsWith(this.canonicalIssuer.prefix) ? {
				termType: "BlankNode",
				value: this.canonicalIssuer.getId(e.value)
			} : e;
		}
	};
	function o(e, t) {
		return e.hash < t.hash ? -1 : +(e.hash > t.hash);
	}
})), pe = /* @__PURE__ */ v(((e) => {
	var t = de(), n = fe();
	function r(t, n) {
		if (n.inputFormat) {
			if (n.inputFormat === "application/n-quads") {
				if (typeof t != "string") throw Error("N-Quads input must be a string.");
				return e.NQuads.parse(t);
			}
			throw Error(`Unknown canonicalization input format: "${n.inputFormat}".`);
		}
		return t;
	}
	function i(e) {
		if (e.format && e.format !== "application/n-quads") throw Error(`Unknown canonicalization output format: "${e.format}".`);
	}
	function a() {
		globalThis.RDF_CANONIZE_TRACE_URDNA2015 && console.trace("[rdf-canonize] URDNA2015 is deprecated, use RDFC-1.0");
	}
	e.NQuads = ue(), e.IdentifierIssuer = ae(), e.canonize = async function(e, n = {}) {
		let o = r(e, n);
		if (i(n), !("algorithm" in n)) throw Error("No RDF Dataset Canonicalization algorithm specified.");
		if (n.algorithm === "RDFC-1.0") return new t(n).main(o);
		if (n.algorithm === "URDNA2015" && !n.rejectURDNA2015) return a(), new t(n).main(o);
		throw Error("Invalid RDF Dataset Canonicalization algorithm: " + n.algorithm);
	}, e._canonizeSync = function(e, t = {}) {
		let o = r(e, t);
		if (i(t), !("algorithm" in t)) throw Error("No RDF Dataset Canonicalization algorithm specified.");
		if (t.algorithm === "RDFC-1.0") return new n(t).main(o);
		if (t.algorithm === "URDNA2015" && !t.rejectURDNA2015) return a(), new n(t).main(o);
		throw Error("Invalid RDF Dataset Canonicalization algorithm: " + t.algorithm);
	};
})), me = /* @__PURE__ */ v(((e, t) => {
	t.exports = pe();
})), he = /* @__PURE__ */ v(((e, t) => {
	var n = {};
	t.exports = n, n.isArray = Array.isArray, n.isBoolean = (e) => typeof e == "boolean" || Object.prototype.toString.call(e) === "[object Boolean]", n.isDouble = (e) => n.isNumber(e) && (String(e).indexOf(".") !== -1 || Math.abs(e) >= 1e21), n.isEmptyObject = (e) => n.isObject(e) && Object.keys(e).length === 0, n.isNumber = (e) => typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]", n.isNumeric = (e) => !isNaN(parseFloat(e)) && isFinite(e), n.isObject = (e) => Object.prototype.toString.call(e) === "[object Object]", n.isString = (e) => typeof e == "string" || Object.prototype.toString.call(e) === "[object String]", n.isUndefined = (e) => e === void 0;
})), ge = /* @__PURE__ */ v(((e, t) => {
	var n = he(), r = {};
	t.exports = r, r.isSubject = (e) => n.isObject(e) && !("@value" in e || "@set" in e || "@list" in e) ? Object.keys(e).length > 1 || !("@id" in e) : !1, r.isSubjectReference = (e) => n.isObject(e) && Object.keys(e).length === 1 && "@id" in e, r.isValue = (e) => n.isObject(e) && "@value" in e, r.isList = (e) => n.isObject(e) && "@list" in e, r.isGraph = (e) => n.isObject(e) && "@graph" in e && Object.keys(e).filter((e) => e !== "@id" && e !== "@index").length === 1, r.isSimpleGraph = (e) => r.isGraph(e) && !("@id" in e), r.isBlankNode = (e) => {
		if (n.isObject(e)) {
			if ("@id" in e) {
				let t = e["@id"];
				return !n.isString(t) || t.indexOf("_:") === 0;
			}
			return Object.keys(e).length === 0 || !("@value" in e || "@set" in e || "@list" in e);
		}
		return !1;
	};
})), _e = /* @__PURE__ */ v(((e, t) => {
	t.exports = class extends Error {
		constructor(e = "An unspecified JSON-LD error occurred.", t = "jsonld.Error", n = {}) {
			super(e), this.name = t, this.message = e, this.details = n;
		}
	};
})), ve = /* @__PURE__ */ v(((e, t) => {
	var n = ge(), r = he(), i = me().IdentifierIssuer, a = _e(), o = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, s = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, c = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, l = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, u = /^@[a-zA-Z]+$/, d = { headers: { accept: "application/ld+json, application/json" } }, f = {};
	t.exports = f, f.IdentifierIssuer = i, f.REGEX_BCP47 = o, f.REGEX_KEYWORD = u, f.clone = function(e) {
		if (e && typeof e == "object") {
			let t;
			if (r.isArray(e)) {
				t = [];
				for (let n = 0; n < e.length; ++n) t[n] = f.clone(e[n]);
			} else if (e instanceof Map) {
				t = /* @__PURE__ */ new Map();
				for (let [n, r] of e) t.set(n, f.clone(r));
			} else if (e instanceof Set) {
				t = /* @__PURE__ */ new Set();
				for (let n of e) t.add(f.clone(n));
			} else if (r.isObject(e)) {
				t = {};
				for (let n in e) t[n] = f.clone(e[n]);
			} else t = e.toString();
			return t;
		}
		return e;
	}, f.asArray = function(e) {
		return Array.isArray(e) ? e : [e];
	}, f.buildHeaders = (e = {}) => {
		if (Object.keys(e).some((e) => e.toLowerCase() === "accept")) throw RangeError("Accept header may not be specified; only \"" + d.headers.accept + "\" is supported.");
		return Object.assign({ Accept: d.headers.accept }, e);
	}, f.parseLinkHeader = (e) => {
		let t = {}, n = e.match(s);
		for (let e = 0; e < n.length; ++e) {
			let r = n[e].match(c);
			if (!r) continue;
			let i = { target: r[1] }, a = r[2];
			for (; r = l.exec(a);) i[r[1]] = r[2] === void 0 ? r[3] : r[2];
			let o = i.rel || "";
			Array.isArray(t[o]) ? t[o].push(i) : t.hasOwnProperty(o) ? t[o] = [t[o], i] : t[o] = i;
		}
		return t;
	}, f.validateTypeValue = (e, t) => {
		if (!r.isString(e) && !(r.isArray(e) && e.every((e) => r.isString(e)))) {
			if (t && r.isObject(e)) switch (Object.keys(e).length) {
				case 0: return;
				case 1: if ("@default" in e && f.asArray(e["@default"]).every((e) => r.isString(e))) return;
			}
			throw new a("Invalid JSON-LD syntax; \"@type\" value must a string, an array of strings, an empty object, or a default object.", "jsonld.SyntaxError", {
				code: "invalid type value",
				value: e
			});
		}
	}, f.hasProperty = (e, t) => {
		if (e.hasOwnProperty(t)) {
			let n = e[t];
			return !r.isArray(n) || n.length > 0;
		}
		return !1;
	}, f.hasValue = (e, t, i) => {
		if (f.hasProperty(e, t)) {
			let a = e[t], o = n.isList(a);
			if (r.isArray(a) || o) {
				o && (a = a["@list"]);
				for (let e = 0; e < a.length; ++e) if (f.compareValues(i, a[e])) return !0;
			} else if (!r.isArray(i)) return f.compareValues(i, a);
		}
		return !1;
	}, f.addValue = (e, t, n, i) => {
		if (i ||= {}, "propertyIsArray" in i || (i.propertyIsArray = !1), "valueIsArray" in i || (i.valueIsArray = !1), "allowDuplicate" in i || (i.allowDuplicate = !0), "prependValue" in i || (i.prependValue = !1), i.valueIsArray) e[t] = n;
		else if (r.isArray(n)) {
			n.length === 0 && i.propertyIsArray && !e.hasOwnProperty(t) && (e[t] = []), i.prependValue && (n = n.concat(e[t]), e[t] = []);
			for (let r = 0; r < n.length; ++r) f.addValue(e, t, n[r], i);
		} else if (e.hasOwnProperty(t)) {
			let a = !i.allowDuplicate && f.hasValue(e, t, n);
			!r.isArray(e[t]) && (!a || i.propertyIsArray) && (e[t] = [e[t]]), a || (i.prependValue ? e[t].unshift(n) : e[t].push(n));
		} else e[t] = i.propertyIsArray ? [n] : n;
	}, f.getValues = (e, t) => [].concat(e[t] || []), f.removeProperty = (e, t) => {
		delete e[t];
	}, f.removeValue = (e, t, n, r) => {
		r ||= {}, "propertyIsArray" in r || (r.propertyIsArray = !1);
		let i = f.getValues(e, t).filter((e) => !f.compareValues(e, n));
		i.length === 0 ? f.removeProperty(e, t) : i.length === 1 && !r.propertyIsArray ? e[t] = i[0] : e[t] = i;
	}, f.relabelBlankNodes = (e, t) => (t ||= {}, p(t.issuer || new i("_:b"), e)), f.compareValues = (e, t) => e === t || n.isValue(e) && n.isValue(t) && e["@value"] === t["@value"] && e["@type"] === t["@type"] && e["@language"] === t["@language"] && e["@index"] === t["@index"] ? !0 : r.isObject(e) && "@id" in e && r.isObject(t) && "@id" in t ? e["@id"] === t["@id"] : !1, f.compareShortestLeast = (e, t) => e.length < t.length ? -1 : t.length < e.length ? 1 : e === t ? 0 : e < t ? -1 : 1;
	function p(e, t) {
		if (r.isArray(t)) for (let n = 0; n < t.length; ++n) t[n] = p(e, t[n]);
		else if (n.isList(t)) t["@list"] = p(e, t["@list"]);
		else if (r.isObject(t)) {
			n.isBlankNode(t) && (t["@id"] = e.getId(t["@id"]));
			let r = Object.keys(t).sort();
			for (let n = 0; n < r.length; ++n) {
				let i = r[n];
				i !== "@id" && (t[i] = p(e, t[i]));
			}
		}
		return t;
	}
})), ye = /* @__PURE__ */ v(((e, t) => {
	t.exports = {
		LINK_HEADER_REL: "http://www.w3.org/ns/json-ld#context",
		LINK_HEADER_CONTEXT: "http://www.w3.org/ns/json-ld#context",
		RDF: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
		RDF_LIST: "http://www.w3.org/1999/02/22-rdf-syntax-ns#List",
		RDF_FIRST: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
		RDF_REST: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
		RDF_NIL: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil",
		RDF_TYPE: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
		RDF_PLAIN_LITERAL: "http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral",
		RDF_XML_LITERAL: "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral",
		RDF_JSON_LITERAL: "http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON",
		RDF_OBJECT: "http://www.w3.org/1999/02/22-rdf-syntax-ns#object",
		RDF_LANGSTRING: "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
		XSD: "http://www.w3.org/2001/XMLSchema#",
		XSD_BOOLEAN: "http://www.w3.org/2001/XMLSchema#boolean",
		XSD_DOUBLE: "http://www.w3.org/2001/XMLSchema#double",
		XSD_INTEGER: "http://www.w3.org/2001/XMLSchema#integer",
		XSD_STRING: "http://www.w3.org/2001/XMLSchema#string"
	};
})), be = /* @__PURE__ */ v(((e, t) => {
	t.exports = class {
		constructor() {
			this._requests = {};
		}
		wrapLoader(e) {
			let t = this;
			return t._loader = e, function() {
				return t.add.apply(t, arguments);
			};
		}
		async add(e) {
			let t = this._requests[e];
			if (t) return Promise.resolve(t);
			t = this._requests[e] = this._loader(e);
			try {
				return await t;
			} finally {
				delete this._requests[e];
			}
		}
	};
})), xe = /* @__PURE__ */ v(((e, t) => {
	var n = he(), r = {};
	t.exports = r, r.parsers = {
		simple: {
			keys: [
				"href",
				"scheme",
				"authority",
				"path",
				"query",
				"fragment"
			],
			regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
		},
		full: {
			keys: [
				"href",
				"protocol",
				"scheme",
				"authority",
				"auth",
				"user",
				"password",
				"hostname",
				"port",
				"path",
				"directory",
				"file",
				"query",
				"fragment"
			],
			regex: /^(([a-zA-Z][a-zA-Z0-9+-.]*):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	}, r.parse = (e, t) => {
		let n = {}, i = r.parsers[t || "full"], a = i.regex.exec(e), o = i.keys.length;
		for (; o--;) n[i.keys[o]] = a[o] === void 0 ? null : a[o];
		return (n.scheme === "https" && n.port === "443" || n.scheme === "http" && n.port === "80") && (n.href = n.href.replace(":" + n.port, ""), n.authority = n.authority.replace(":" + n.port, ""), n.port = null), n.normalizedPath = r.removeDotSegments(n.path), n;
	}, r.prependBase = (e, t) => {
		if (e === null || r.isAbsolute(t)) return t;
		(!e || n.isString(e)) && (e = r.parse(e || ""));
		let i = r.parse(t), a = { protocol: e.protocol || "" };
		if (i.authority !== null) a.authority = i.authority, a.path = i.path, a.query = i.query;
		else if (a.authority = e.authority, i.path === "") a.path = e.path, i.query === null ? a.query = e.query : a.query = i.query;
		else {
			if (i.path.indexOf("/") === 0) a.path = i.path;
			else {
				let t = e.path;
				t = t.substr(0, t.lastIndexOf("/") + 1), (t.length > 0 || e.authority) && t.substr(-1) !== "/" && (t += "/"), t += i.path, a.path = t;
			}
			a.query = i.query;
		}
		i.path !== "" && (a.path = r.removeDotSegments(a.path));
		let o = a.protocol;
		return a.authority !== null && (o += "//" + a.authority), o += a.path, a.query !== null && (o += "?" + a.query), i.fragment !== null && (o += "#" + i.fragment), o === "" && (o = "./"), o;
	}, r.removeBase = (e, t) => {
		if (e === null) return t;
		(!e || n.isString(e)) && (e = r.parse(e || ""));
		let i = "";
		if (e.href === "" ? t.indexOf("//") && (i += "//") : i += (e.protocol || "") + "//" + (e.authority || ""), t.indexOf(i) !== 0) return t;
		let a = r.parse(t.substr(i.length)), o = e.normalizedPath.split("/"), s = a.normalizedPath.split("/"), c = a.fragment || a.query ? 0 : 1;
		for (; o.length > 0 && s.length > c && o[0] === s[0];) o.shift(), s.shift();
		let l = "";
		if (o.length > 0) {
			o.pop();
			for (let e = 0; e < o.length; ++e) l += "../";
		}
		return l += s.join("/"), a.query !== null && (l += "?" + a.query), a.fragment !== null && (l += "#" + a.fragment), l === "" && (l = "./"), l;
	}, r.removeDotSegments = (e) => {
		if (e.length === 0) return "";
		let t = e.split("/"), n = [];
		for (; t.length > 0;) {
			let e = t.shift(), r = t.length === 0;
			if (e === ".") {
				r && n.push("");
				continue;
			}
			if (e === "..") {
				n.pop(), r && n.push("");
				continue;
			}
			n.push(e);
		}
		return e[0] === "/" && n.length > 0 && n[0] !== "" && n.unshift(""), n.length === 1 && n[0] === "" ? "/" : n.join("/");
	};
	var i = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
	r.isAbsolute = (e) => n.isString(e) && i.test(e), r.isRelative = (e) => n.isString(e);
})), Se = /* @__PURE__ */ v(((e, t) => {
	var { parseLinkHeader: n, buildHeaders: r } = ve(), { LINK_HEADER_CONTEXT: i } = ye(), a = _e(), o = be(), { prependBase: s } = xe(), c = /(^|(\r\n))link:/i;
	t.exports = ({ secure: e, headers: t = {}, xhr: u } = { headers: {} }) => {
		return t = r(t), new o().wrapLoader(d);
		async function d(r) {
			if (r.indexOf("http:") !== 0 && r.indexOf("https:") !== 0) throw new a("URL could not be dereferenced; only \"http\" and \"https\" URLs are supported.", "jsonld.InvalidUrl", {
				code: "loading document failed",
				url: r
			});
			if (e && r.indexOf("https") !== 0) throw new a("URL could not be dereferenced; secure mode is enabled and the URL's scheme is not \"https\".", "jsonld.InvalidUrl", {
				code: "loading document failed",
				url: r
			});
			let o;
			try {
				o = await l(u, r, t);
			} catch (e) {
				throw new a("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", {
					code: "loading document failed",
					url: r,
					cause: e
				});
			}
			if (o.status >= 400) throw new a("URL could not be dereferenced: " + o.statusText, "jsonld.LoadDocumentError", {
				code: "loading document failed",
				url: r,
				httpStatusCode: o.status
			});
			let f = {
				contextUrl: null,
				documentUrl: r,
				document: o.response
			}, p = null, m = o.getResponseHeader("Content-Type"), h;
			if (c.test(o.getAllResponseHeaders()) && (h = o.getResponseHeader("Link")), h && m !== "application/ld+json") {
				let e = n(h), t = e[i];
				if (Array.isArray(t)) throw new a("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", {
					code: "multiple context link headers",
					url: r
				});
				t && (f.contextUrl = t.target), p = e.alternate, p && p.type == "application/ld+json" && !(m || "").match(/^application\/(\w*\+)?json$/) && (f = await d(s(r, p.target)));
			}
			return f;
		}
	};
	function l(e, t, n) {
		e ||= XMLHttpRequest;
		let r = new e();
		return new Promise((e, i) => {
			r.onload = () => e(r), r.onerror = (e) => i(e), r.open("GET", t, !0);
			for (let e in n) r.setRequestHeader(e, n[e]);
			r.send();
		});
	}
})), Ce = /* @__PURE__ */ v(((e, t) => {
	var n = Se(), r = {};
	t.exports = r, r.setupDocumentLoaders = function(e) {
		typeof XMLHttpRequest < "u" && (e.documentLoaders.xhr = n, e.useDocumentLoader("xhr"));
	}, r.setupGlobals = function(e) {
		globalThis.JsonLdProcessor === void 0 && Object.defineProperty(globalThis, "JsonLdProcessor", {
			writable: !0,
			enumerable: !1,
			configurable: !0,
			value: e.JsonLdProcessor
		});
	};
})), we = /* @__PURE__ */ v(((e, t) => {
	t.exports = function(e) {
		e.prototype[Symbol.iterator] = function* () {
			for (let e = this.head; e; e = e.next) yield e.value;
		};
	};
})), Te = /* @__PURE__ */ v(((e, t) => {
	t.exports = n, n.Node = o, n.create = n;
	function n(e) {
		var t = this;
		if (t instanceof n || (t = new n()), t.tail = null, t.head = null, t.length = 0, e && typeof e.forEach == "function") e.forEach(function(e) {
			t.push(e);
		});
		else if (arguments.length > 0) for (var r = 0, i = arguments.length; r < i; r++) t.push(arguments[r]);
		return t;
	}
	n.prototype.removeNode = function(e) {
		if (e.list !== this) throw Error("removing node which does not belong to this list");
		var t = e.next, n = e.prev;
		return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null, t;
	}, n.prototype.unshiftNode = function(e) {
		if (e !== this.head) {
			e.list && e.list.removeNode(e);
			var t = this.head;
			e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail ||= e, this.length++;
		}
	}, n.prototype.pushNode = function(e) {
		if (e !== this.tail) {
			e.list && e.list.removeNode(e);
			var t = this.tail;
			e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head ||= e, this.length++;
		}
	}, n.prototype.push = function() {
		for (var e = 0, t = arguments.length; e < t; e++) i(this, arguments[e]);
		return this.length;
	}, n.prototype.unshift = function() {
		for (var e = 0, t = arguments.length; e < t; e++) a(this, arguments[e]);
		return this.length;
	}, n.prototype.pop = function() {
		if (this.tail) {
			var e = this.tail.value;
			return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e;
		}
	}, n.prototype.shift = function() {
		if (this.head) {
			var e = this.head.value;
			return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e;
		}
	}, n.prototype.forEach = function(e, t) {
		t ||= this;
		for (var n = this.head, r = 0; n !== null; r++) e.call(t, n.value, r, this), n = n.next;
	}, n.prototype.forEachReverse = function(e, t) {
		t ||= this;
		for (var n = this.tail, r = this.length - 1; n !== null; r--) e.call(t, n.value, r, this), n = n.prev;
	}, n.prototype.get = function(e) {
		for (var t = 0, n = this.head; n !== null && t < e; t++) n = n.next;
		if (t === e && n !== null) return n.value;
	}, n.prototype.getReverse = function(e) {
		for (var t = 0, n = this.tail; n !== null && t < e; t++) n = n.prev;
		if (t === e && n !== null) return n.value;
	}, n.prototype.map = function(e, t) {
		t ||= this;
		for (var r = new n(), i = this.head; i !== null;) r.push(e.call(t, i.value, this)), i = i.next;
		return r;
	}, n.prototype.mapReverse = function(e, t) {
		t ||= this;
		for (var r = new n(), i = this.tail; i !== null;) r.push(e.call(t, i.value, this)), i = i.prev;
		return r;
	}, n.prototype.reduce = function(e, t) {
		var n, r = this.head;
		if (arguments.length > 1) n = t;
		else if (this.head) r = this.head.next, n = this.head.value;
		else throw TypeError("Reduce of empty list with no initial value");
		for (var i = 0; r !== null; i++) n = e(n, r.value, i), r = r.next;
		return n;
	}, n.prototype.reduceReverse = function(e, t) {
		var n, r = this.tail;
		if (arguments.length > 1) n = t;
		else if (this.tail) r = this.tail.prev, n = this.tail.value;
		else throw TypeError("Reduce of empty list with no initial value");
		for (var i = this.length - 1; r !== null; i--) n = e(n, r.value, i), r = r.prev;
		return n;
	}, n.prototype.toArray = function() {
		for (var e = Array(this.length), t = 0, n = this.head; n !== null; t++) e[t] = n.value, n = n.next;
		return e;
	}, n.prototype.toArrayReverse = function() {
		for (var e = Array(this.length), t = 0, n = this.tail; n !== null; t++) e[t] = n.value, n = n.prev;
		return e;
	}, n.prototype.slice = function(e, t) {
		t ||= this.length, t < 0 && (t += this.length), e ||= 0, e < 0 && (e += this.length);
		var r = new n();
		if (t < e || t < 0) return r;
		e < 0 && (e = 0), t > this.length && (t = this.length);
		for (var i = 0, a = this.head; a !== null && i < e; i++) a = a.next;
		for (; a !== null && i < t; i++, a = a.next) r.push(a.value);
		return r;
	}, n.prototype.sliceReverse = function(e, t) {
		t ||= this.length, t < 0 && (t += this.length), e ||= 0, e < 0 && (e += this.length);
		var r = new n();
		if (t < e || t < 0) return r;
		e < 0 && (e = 0), t > this.length && (t = this.length);
		for (var i = this.length, a = this.tail; a !== null && i > t; i--) a = a.prev;
		for (; a !== null && i > e; i--, a = a.prev) r.push(a.value);
		return r;
	}, n.prototype.splice = function(e, t, ...n) {
		e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
		for (var i = 0, a = this.head; a !== null && i < e; i++) a = a.next;
		for (var o = [], i = 0; a && i < t; i++) o.push(a.value), a = this.removeNode(a);
		a === null && (a = this.tail), a !== this.head && a !== this.tail && (a = a.prev);
		for (var i = 0; i < n.length; i++) a = r(this, a, n[i]);
		return o;
	}, n.prototype.reverse = function() {
		for (var e = this.head, t = this.tail, n = e; n !== null; n = n.prev) {
			var r = n.prev;
			n.prev = n.next, n.next = r;
		}
		return this.head = t, this.tail = e, this;
	};
	function r(e, t, n) {
		var r = t === e.head ? new o(n, null, t, e) : new o(n, t, t.next, e);
		return r.next === null && (e.tail = r), r.prev === null && (e.head = r), e.length++, r;
	}
	function i(e, t) {
		e.tail = new o(t, e.tail, null, e), e.head ||= e.tail, e.length++;
	}
	function a(e, t) {
		e.head = new o(t, null, e.head, e), e.tail ||= e.head, e.length++;
	}
	function o(e, t, n, r) {
		if (!(this instanceof o)) return new o(e, t, n, r);
		this.list = r, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null;
	}
	try {
		we()(n);
	} catch {}
})), Ee = /* @__PURE__ */ v(((e, t) => {
	var n = Te(), r = Symbol("max"), i = Symbol("length"), a = Symbol("lengthCalculator"), o = Symbol("allowStale"), s = Symbol("maxAge"), c = Symbol("dispose"), l = Symbol("noDisposeOnSet"), u = Symbol("lruList"), d = Symbol("cache"), f = Symbol("updateAgeOnGet"), p = () => 1, m = class {
		constructor(e) {
			if (typeof e == "number" && (e = { max: e }), e ||= {}, e.max && (typeof e.max != "number" || e.max < 0)) throw TypeError("max must be a non-negative number");
			this[r] = e.max || Infinity;
			let t = e.length || p;
			if (this[a] = typeof t == "function" ? t : p, this[o] = e.stale || !1, e.maxAge && typeof e.maxAge != "number") throw TypeError("maxAge must be a number");
			this[s] = e.maxAge || 0, this[c] = e.dispose, this[l] = e.noDisposeOnSet || !1, this[f] = e.updateAgeOnGet || !1, this.reset();
		}
		set max(e) {
			if (typeof e != "number" || e < 0) throw TypeError("max must be a non-negative number");
			this[r] = e || Infinity, _(this);
		}
		get max() {
			return this[r];
		}
		set allowStale(e) {
			this[o] = !!e;
		}
		get allowStale() {
			return this[o];
		}
		set maxAge(e) {
			if (typeof e != "number") throw TypeError("maxAge must be a non-negative number");
			this[s] = e, _(this);
		}
		get maxAge() {
			return this[s];
		}
		set lengthCalculator(e) {
			typeof e != "function" && (e = p), e !== this[a] && (this[a] = e, this[i] = 0, this[u].forEach((e) => {
				e.length = this[a](e.value, e.key), this[i] += e.length;
			})), _(this);
		}
		get lengthCalculator() {
			return this[a];
		}
		get length() {
			return this[i];
		}
		get itemCount() {
			return this[u].length;
		}
		rforEach(e, t) {
			t ||= this;
			for (let n = this[u].tail; n !== null;) {
				let r = n.prev;
				b(this, e, n, t), n = r;
			}
		}
		forEach(e, t) {
			t ||= this;
			for (let n = this[u].head; n !== null;) {
				let r = n.next;
				b(this, e, n, t), n = r;
			}
		}
		keys() {
			return this[u].toArray().map((e) => e.key);
		}
		values() {
			return this[u].toArray().map((e) => e.value);
		}
		reset() {
			this[c] && this[u] && this[u].length && this[u].forEach((e) => this[c](e.key, e.value)), this[d] = /* @__PURE__ */ new Map(), this[u] = new n(), this[i] = 0;
		}
		dump() {
			return this[u].map((e) => !g(this, e) && {
				k: e.key,
				v: e.value,
				e: e.now + (e.maxAge || 0)
			}).toArray().filter((e) => e);
		}
		dumpLru() {
			return this[u];
		}
		set(e, t, n) {
			if (n ||= this[s], n && typeof n != "number") throw TypeError("maxAge must be a number");
			let o = n ? Date.now() : 0, f = this[a](t, e);
			if (this[d].has(e)) {
				if (f > this[r]) return v(this, this[d].get(e)), !1;
				let a = this[d].get(e).value;
				return this[c] && (this[l] || this[c](e, a.value)), a.now = o, a.maxAge = n, a.value = t, this[i] += f - a.length, a.length = f, this.get(e), _(this), !0;
			}
			let p = new y(e, t, f, o, n);
			return p.length > this[r] ? (this[c] && this[c](e, t), !1) : (this[i] += p.length, this[u].unshift(p), this[d].set(e, this[u].head), _(this), !0);
		}
		has(e) {
			if (!this[d].has(e)) return !1;
			let t = this[d].get(e).value;
			return !g(this, t);
		}
		get(e) {
			return h(this, e, !0);
		}
		peek(e) {
			return h(this, e, !1);
		}
		pop() {
			let e = this[u].tail;
			return e ? (v(this, e), e.value) : null;
		}
		del(e) {
			v(this, this[d].get(e));
		}
		load(e) {
			this.reset();
			let t = Date.now();
			for (let n = e.length - 1; n >= 0; n--) {
				let r = e[n], i = r.e || 0;
				if (i === 0) this.set(r.k, r.v);
				else {
					let e = i - t;
					e > 0 && this.set(r.k, r.v, e);
				}
			}
		}
		prune() {
			this[d].forEach((e, t) => h(this, t, !1));
		}
	}, h = (e, t, n) => {
		let r = e[d].get(t);
		if (r) {
			let t = r.value;
			if (g(e, t)) {
				if (v(e, r), !e[o]) return;
			} else n && (e[f] && (r.value.now = Date.now()), e[u].unshiftNode(r));
			return t.value;
		}
	}, g = (e, t) => {
		if (!t || !t.maxAge && !e[s]) return !1;
		let n = Date.now() - t.now;
		return t.maxAge ? n > t.maxAge : e[s] && n > e[s];
	}, _ = (e) => {
		if (e[i] > e[r]) for (let t = e[u].tail; e[i] > e[r] && t !== null;) {
			let n = t.prev;
			v(e, t), t = n;
		}
	}, v = (e, t) => {
		if (t) {
			let n = t.value;
			e[c] && e[c](n.key, n.value), e[i] -= n.length, e[d].delete(n.key), e[u].removeNode(t);
		}
	}, y = class {
		constructor(e, t, n, r, i) {
			this.key = e, this.value = t, this.length = n, this.now = r, this.maxAge = i || 0;
		}
	}, b = (e, t, n, r) => {
		let i = n.value;
		g(e, i) && (v(e, n), e[o] || (i = void 0)), i && t.call(r, i.value, i.key, e);
	};
	t.exports = m;
})), De = /* @__PURE__ */ v(((e, t) => {
	var n = Ee(), r = 10;
	t.exports = class {
		constructor({ document: e }) {
			this.document = e, this.cache = new n({ max: r });
		}
		getProcessed(e) {
			return this.cache.get(e);
		}
		setProcessed(e, t) {
			this.cache.set(e, t);
		}
	};
})), Oe = /* @__PURE__ */ v(((e, t) => {
	var { isArray: n, isObject: r, isString: i } = he(), { asArray: a } = ve(), { prependBase: o } = xe(), s = _e(), c = De(), l = 10;
	t.exports = class {
		constructor({ sharedCache: e }) {
			this.perOpCache = /* @__PURE__ */ new Map(), this.sharedCache = e;
		}
		async resolve({ activeCtx: e, context: t, documentLoader: o, base: s, cycles: l = /* @__PURE__ */ new Set() }) {
			t && r(t) && t["@context"] && (t = t["@context"]), t = a(t);
			let d = [];
			for (let a of t) {
				if (i(a)) {
					let t = this._get(a);
					t ||= await this._resolveRemoteContext({
						activeCtx: e,
						url: a,
						documentLoader: o,
						base: s,
						cycles: l
					}), n(t) ? d.push(...t) : d.push(t);
					continue;
				}
				if (a === null) {
					d.push(new c({ document: null }));
					continue;
				}
				r(a) || u(t);
				let f = JSON.stringify(a), p = this._get(f);
				p || (p = new c({ document: a }), this._cacheResolvedContext({
					key: f,
					resolved: p,
					tag: "static"
				})), d.push(p);
			}
			return d;
		}
		_get(e) {
			let t = this.perOpCache.get(e);
			if (!t) {
				let n = this.sharedCache.get(e);
				n && (t = n.get("static"), t && this.perOpCache.set(e, t));
			}
			return t;
		}
		_cacheResolvedContext({ key: e, resolved: t, tag: n }) {
			if (this.perOpCache.set(e, t), n !== void 0) {
				let r = this.sharedCache.get(e);
				r || (r = /* @__PURE__ */ new Map(), this.sharedCache.set(e, r)), r.set(n, t);
			}
			return t;
		}
		async _resolveRemoteContext({ activeCtx: e, url: t, documentLoader: n, base: r, cycles: i }) {
			t = o(r, t);
			let { context: a, remoteDoc: s } = await this._fetchContext({
				activeCtx: e,
				url: t,
				documentLoader: n,
				cycles: i
			});
			r = s.documentUrl || t, d({
				context: a,
				base: r
			});
			let c = await this.resolve({
				activeCtx: e,
				context: a,
				documentLoader: n,
				base: r,
				cycles: i
			});
			return this._cacheResolvedContext({
				key: t,
				resolved: c,
				tag: s.tag
			}), c;
		}
		async _fetchContext({ activeCtx: e, url: t, documentLoader: a, cycles: o }) {
			if (o.size > l) throw new s("Maximum number of @context URLs exceeded.", "jsonld.ContextUrlError", {
				code: e.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
				max: l
			});
			if (o.has(t)) throw new s("Cyclical @context URLs detected.", "jsonld.ContextUrlError", {
				code: e.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
				url: t
			});
			o.add(t);
			let c, u;
			try {
				u = await a(t), c = u.document || null, i(c) && (c = JSON.parse(c));
			} catch (e) {
				throw new s(`Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${t}".`, "jsonld.InvalidUrl", {
					code: "loading remote context failed",
					url: t,
					cause: e
				});
			}
			if (!r(c)) throw new s(`Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${t}".`, "jsonld.InvalidUrl", {
				code: "invalid remote context",
				url: t
			});
			return c = "@context" in c ? { "@context": c["@context"] } : { "@context": {} }, u.contextUrl && (n(c["@context"]) || (c["@context"] = [c["@context"]]), c["@context"].push(u.contextUrl)), {
				context: c,
				remoteDoc: u
			};
		}
	};
	function u(e) {
		throw new s("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", {
			code: "invalid local context",
			context: e
		});
	}
	function d({ context: e, base: t }) {
		if (!e) return;
		let a = e["@context"];
		if (i(a)) {
			e["@context"] = o(t, a);
			return;
		}
		if (n(a)) {
			for (let e = 0; e < a.length; ++e) {
				let n = a[e];
				if (i(n)) {
					a[e] = o(t, n);
					continue;
				}
				r(n) && d({
					context: { "@context": n },
					base: t
				});
			}
			return;
		}
		if (r(a)) for (let e in a) d({
			context: a[e],
			base: t
		});
	}
})), ke = /* @__PURE__ */ v(((e, t) => {
	t.exports = me().NQuads;
})), Ae = /* @__PURE__ */ v(((e, t) => {
	var n = _e(), { isArray: r } = he(), { asArray: i } = ve(), a = {};
	t.exports = a, a.defaultEventHandler = null, a.setupEventHandler = ({ options: e = {} }) => {
		let t = [].concat(e.safe ? a.safeEventHandler : [], e.eventHandler ? i(e.eventHandler) : [], a.defaultEventHandler ? a.defaultEventHandler : []);
		return t.length === 0 ? null : t;
	}, a.handleEvent = ({ event: e, options: t }) => {
		o({
			event: e,
			handlers: t.eventHandler
		});
	};
	function o({ event: e, handlers: t }) {
		let i = !0;
		for (let a = 0; i && a < t.length; ++a) {
			i = !1;
			let s = t[a];
			if (r(s)) i = o({
				event: e,
				handlers: s
			});
			else if (typeof s == "function") s({
				event: e,
				next: () => {
					i = !0;
				}
			});
			else if (typeof s == "object") e.code in s ? s[e.code]({
				event: e,
				next: () => {
					i = !0;
				}
			}) : i = !0;
			else throw new n("Invalid event handler.", "jsonld.InvalidEventHandler", { event: e });
		}
		return i;
	}
	var s = /* @__PURE__ */ new Set([
		"empty object",
		"free-floating scalar",
		"invalid @language value",
		"invalid property",
		"null @id value",
		"null @value value",
		"object with only @id",
		"object with only @language",
		"object with only @list",
		"object with only @value",
		"relative @id reference",
		"relative @type reference",
		"relative @vocab reference",
		"reserved @id value",
		"reserved @reverse value",
		"reserved term",
		"blank node predicate",
		"relative graph reference",
		"relative object reference",
		"relative predicate reference",
		"relative subject reference",
		"rdfDirection not set"
	]);
	a.safeEventHandler = function({ event: e, next: t }) {
		if (e.level === "warning" && s.has(e.code)) throw new n("Safe mode validation error.", "jsonld.ValidationError", { event: e });
		t();
	}, a.logEventHandler = function({ event: e, next: t }) {
		console.log(`EVENT: ${e.message}`, { event: e }), t();
	}, a.logWarningEventHandler = function({ event: e, next: t }) {
		e.level === "warning" && console.warn(`WARNING: ${e.message}`, { event: e }), t();
	}, a.unhandledEventHandler = function({ event: e }) {
		throw new n("No handler for event.", "jsonld.UnhandledEvent", { event: e });
	}, a.setDefaultEventHandler = function({ eventHandler: e } = {}) {
		a.defaultEventHandler = e ? i(e) : null;
	};
})), je = /* @__PURE__ */ v(((e, t) => {
	var n = ve(), r = _e(), { isArray: i, isObject: a, isString: o, isUndefined: s } = he(), { isAbsolute: c, isRelative: l, prependBase: u } = xe(), { handleEvent: d } = Ae(), { REGEX_BCP47: f, REGEX_KEYWORD: p, asArray: m, compareShortestLeast: h } = ve(), g = /* @__PURE__ */ new Map(), _ = 1e4, v = {};
	t.exports = v, v.process = async ({ activeCtx: e, localCtx: t, options: n, propagate: s = !0, overrideProtected: p = !1, cycles: h = /* @__PURE__ */ new Set() }) => {
		if (a(t) && "@context" in t && i(t["@context"]) && (t = t["@context"]), m(t).length === 0) return e;
		let g = [], _ = [({ event: e, next: t }) => {
			g.push(e), t();
		}];
		n.eventHandler && _.push(n.eventHandler);
		let b = n;
		n = {
			...n,
			eventHandler: _
		};
		let x = await n.contextResolver.resolve({
			activeCtx: e,
			context: t,
			documentLoader: n.documentLoader,
			base: n.base
		});
		a(x[0].document) && typeof x[0].document["@propagate"] == "boolean" && (s = x[0].document["@propagate"]);
		let S = e;
		!s && !S.previousContext && (S = S.clone(), S.previousContext = e);
		for (let i of x) {
			let { document: s } = i;
			if (e = S, s === null) {
				if (!p && Object.keys(e.protected).length !== 0) throw new r("Tried to nullify a context with protected terms outside of a term definition.", "jsonld.SyntaxError", { code: "invalid context nullification" });
				S = e = v.getInitialContext(n).clone();
				continue;
			}
			let m = i.getProcessed(e);
			if (m) {
				if (b.eventHandler) for (let e of m.events) d({
					event: e,
					options: b
				});
				S = e = m.context;
				continue;
			}
			if (a(s) && "@context" in s && (s = s["@context"]), !a(s)) throw new r("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", {
				code: "invalid local context",
				context: s
			});
			S = S.clone();
			let _ = /* @__PURE__ */ new Map();
			if ("@version" in s) {
				if (s["@version"] !== 1.1) throw new r("Unsupported JSON-LD version: " + s["@version"], "jsonld.UnsupportedVersion", {
					code: "invalid @version value",
					context: s
				});
				if (e.processingMode && e.processingMode === "json-ld-1.0") throw new r("@version: " + s["@version"] + " not compatible with " + e.processingMode, "jsonld.ProcessingModeConflict", {
					code: "processing mode conflict",
					context: s
				});
				S.processingMode = "json-ld-1.1", S["@version"] = s["@version"], _.set("@version", !0);
			}
			if (S.processingMode = S.processingMode || e.processingMode, "@base" in s) {
				let e = s["@base"];
				if (!(e === null || c(e))) if (l(e)) e = u(S["@base"], e);
				else throw new r("Invalid JSON-LD syntax; the value of \"@base\" in a @context must be an absolute IRI, a relative IRI, or null.", "jsonld.SyntaxError", {
					code: "invalid base IRI",
					context: s
				});
				S["@base"] = e, _.set("@base", !0);
			}
			if ("@vocab" in s) {
				let e = s["@vocab"];
				if (e === null) delete S["@vocab"];
				else if (!o(e)) throw new r("Invalid JSON-LD syntax; the value of \"@vocab\" in a @context must be a string or null.", "jsonld.SyntaxError", {
					code: "invalid vocab mapping",
					context: s
				});
				else if (!c(e) && v.processingMode(S, 1)) throw new r("Invalid JSON-LD syntax; the value of \"@vocab\" in a @context must be an absolute IRI.", "jsonld.SyntaxError", {
					code: "invalid vocab mapping",
					context: s
				});
				else {
					let t = y(S, e, {
						vocab: !0,
						base: !0
					}, void 0, void 0, n);
					c(t) || n.eventHandler && d({
						event: {
							type: ["JsonLdEvent"],
							code: "relative @vocab reference",
							level: "warning",
							message: "Relative @vocab reference found.",
							details: { vocab: t }
						},
						options: n
					}), S["@vocab"] = t;
				}
				_.set("@vocab", !0);
			}
			if ("@language" in s) {
				let e = s["@language"];
				if (e === null) delete S["@language"];
				else if (o(e)) e.match(f) || n.eventHandler && d({
					event: {
						type: ["JsonLdEvent"],
						code: "invalid @language value",
						level: "warning",
						message: "@language value must be valid BCP47.",
						details: { language: e }
					},
					options: n
				}), S["@language"] = e.toLowerCase();
				else throw new r("Invalid JSON-LD syntax; the value of \"@language\" in a @context must be a string or null.", "jsonld.SyntaxError", {
					code: "invalid default language",
					context: s
				});
				_.set("@language", !0);
			}
			if ("@direction" in s) {
				let t = s["@direction"];
				if (e.processingMode === "json-ld-1.0") throw new r("Invalid JSON-LD syntax; @direction not compatible with " + e.processingMode, "jsonld.SyntaxError", {
					code: "invalid context member",
					context: s
				});
				if (t === null) delete S["@direction"];
				else if (t !== "ltr" && t !== "rtl") throw new r("Invalid JSON-LD syntax; the value of \"@direction\" in a @context must be null, \"ltr\", or \"rtl\".", "jsonld.SyntaxError", {
					code: "invalid base direction",
					context: s
				});
				else S["@direction"] = t;
				_.set("@direction", !0);
			}
			if ("@propagate" in s) {
				let n = s["@propagate"];
				if (e.processingMode === "json-ld-1.0") throw new r("Invalid JSON-LD syntax; @propagate not compatible with " + e.processingMode, "jsonld.SyntaxError", {
					code: "invalid context entry",
					context: s
				});
				if (typeof n != "boolean") throw new r("Invalid JSON-LD syntax; @propagate value must be a boolean.", "jsonld.SyntaxError", {
					code: "invalid @propagate value",
					context: t
				});
				_.set("@propagate", !0);
			}
			if ("@import" in s) {
				let i = s["@import"];
				if (e.processingMode === "json-ld-1.0") throw new r("Invalid JSON-LD syntax; @import not compatible with " + e.processingMode, "jsonld.SyntaxError", {
					code: "invalid context entry",
					context: s
				});
				if (!o(i)) throw new r("Invalid JSON-LD syntax; @import must be a string.", "jsonld.SyntaxError", {
					code: "invalid @import value",
					context: t
				});
				let a = await n.contextResolver.resolve({
					activeCtx: e,
					context: i,
					documentLoader: n.documentLoader,
					base: n.base
				});
				if (a.length !== 1) throw new r("Invalid JSON-LD syntax; @import must reference a single context.", "jsonld.SyntaxError", {
					code: "invalid remote context",
					context: t
				});
				let c = a[0].getProcessed(e);
				if (c) s = c;
				else {
					let n = a[0].document;
					if ("@import" in n) throw new r("Invalid JSON-LD syntax: imported context must not include @import.", "jsonld.SyntaxError", {
						code: "invalid context entry",
						context: t
					});
					for (let e in n) s.hasOwnProperty(e) || (s[e] = n[e]);
					a[0].setProcessed(e, s);
				}
				_.set("@import", !0);
			}
			_.set("@protected", s["@protected"] || !1);
			for (let e in s) if (v.createTermDefinition({
				activeCtx: S,
				localCtx: s,
				term: e,
				defined: _,
				options: n,
				overrideProtected: p
			}), a(s[e]) && "@context" in s[e]) {
				let t = s[e]["@context"], i = !0;
				if (o(t)) {
					let e = u(n.base, t);
					h.has(e) ? i = !1 : h.add(e);
				}
				if (i) try {
					await v.process({
						activeCtx: S.clone(),
						localCtx: s[e]["@context"],
						overrideProtected: !0,
						options: n,
						cycles: h
					});
				} catch {
					throw new r("Invalid JSON-LD syntax; invalid scoped context.", "jsonld.SyntaxError", {
						code: "invalid scoped context",
						context: s[e]["@context"],
						term: e
					});
				}
			}
			i.setProcessed(e, {
				context: S,
				events: g
			});
		}
		return S;
	}, v.createTermDefinition = ({ activeCtx: e, localCtx: t, term: n, defined: s, options: l, overrideProtected: u = !1 }) => {
		if (s.has(n)) {
			if (s.get(n)) return;
			throw new r("Cyclical context definition detected.", "jsonld.CyclicalContext", {
				code: "cyclic IRI mapping",
				context: t,
				term: n
			});
		}
		s.set(n, !1);
		let f;
		if (t.hasOwnProperty(n) && (f = t[n]), n === "@type" && a(f) && (f["@container"] || "@set") === "@set" && v.processingMode(e, 1.1)) {
			let e = [
				"@container",
				"@id",
				"@protected"
			], i = Object.keys(f);
			if (i.length === 0 || i.some((t) => !e.includes(t))) throw new r("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", {
				code: "keyword redefinition",
				context: t,
				term: n
			});
		} else if (v.isKeyword(n)) throw new r("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", {
			code: "keyword redefinition",
			context: t,
			term: n
		});
		else if (n.match(p)) {
			l.eventHandler && d({
				event: {
					type: ["JsonLdEvent"],
					code: "reserved term",
					level: "warning",
					message: "Terms beginning with \"@\" are reserved for future use and dropped.",
					details: { term: n }
				},
				options: l
			});
			return;
		} else if (n === "") throw new r("Invalid JSON-LD syntax; a term cannot be an empty string.", "jsonld.SyntaxError", {
			code: "invalid term definition",
			context: t
		});
		let m = e.mappings.get(n);
		e.mappings.has(n) && e.mappings.delete(n);
		let h = !1;
		if ((o(f) || f === null) && (h = !0, f = { "@id": f }), !a(f)) throw new r("Invalid JSON-LD syntax; @context term values must be strings or objects.", "jsonld.SyntaxError", {
			code: "invalid term definition",
			context: t
		});
		let g = {};
		e.mappings.set(n, g), g.reverse = !1;
		let _ = [
			"@container",
			"@id",
			"@language",
			"@reverse",
			"@type"
		];
		v.processingMode(e, 1.1) && _.push("@context", "@direction", "@index", "@nest", "@prefix", "@protected");
		for (let e in f) if (!_.includes(e)) throw new r("Invalid JSON-LD syntax; a term definition must not contain " + e, "jsonld.SyntaxError", {
			code: "invalid term definition",
			context: t
		});
		let x = n.indexOf(":");
		if (g._termHasColon = x > 0, "@reverse" in f) {
			if ("@id" in f) throw new r("Invalid JSON-LD syntax; a @reverse term definition must not contain @id.", "jsonld.SyntaxError", {
				code: "invalid reverse property",
				context: t
			});
			if ("@nest" in f) throw new r("Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.", "jsonld.SyntaxError", {
				code: "invalid reverse property",
				context: t
			});
			let i = f["@reverse"];
			if (!o(i)) throw new r("Invalid JSON-LD syntax; a @context @reverse value must be a string.", "jsonld.SyntaxError", {
				code: "invalid IRI mapping",
				context: t
			});
			if (i.match(p)) {
				l.eventHandler && d({
					event: {
						type: ["JsonLdEvent"],
						code: "reserved @reverse value",
						level: "warning",
						message: "@reverse values beginning with \"@\" are reserved for future use and dropped.",
						details: { reverse: i }
					},
					options: l
				}), m ? e.mappings.set(n, m) : e.mappings.delete(n);
				return;
			}
			let a = y(e, i, {
				vocab: !0,
				base: !1
			}, t, s, l);
			if (!c(a)) throw new r("Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.", "jsonld.SyntaxError", {
				code: "invalid IRI mapping",
				context: t
			});
			g["@id"] = a, g.reverse = !0;
		} else if ("@id" in f) {
			let i = f["@id"];
			if (i && !o(i)) throw new r("Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.", "jsonld.SyntaxError", {
				code: "invalid IRI mapping",
				context: t
			});
			if (i === null) g["@id"] = null;
			else if (!v.isKeyword(i) && i.match(p)) {
				l.eventHandler && d({
					event: {
						type: ["JsonLdEvent"],
						code: "reserved @id value",
						level: "warning",
						message: "@id values beginning with \"@\" are reserved for future use and dropped.",
						details: { id: i }
					},
					options: l
				}), m ? e.mappings.set(n, m) : e.mappings.delete(n);
				return;
			} else if (i !== n) {
				if (i = y(e, i, {
					vocab: !0,
					base: !1
				}, t, s, l), !c(i) && !v.isKeyword(i)) throw new r("Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.", "jsonld.SyntaxError", {
					code: "invalid IRI mapping",
					context: t
				});
				if (n.match(/(?::[^:])|\//) && y(e, n, {
					vocab: !0,
					base: !1
				}, t, new Map(s).set(n, !0), l) !== i) throw new r("Invalid JSON-LD syntax; term in form of IRI must expand to definition.", "jsonld.SyntaxError", {
					code: "invalid IRI mapping",
					context: t
				});
				g["@id"] = i, g._prefix = h && !g._termHasColon && i.match(/[:\/\?#\[\]@]$/) !== null;
			}
		}
		if (!("@id" in g)) if (g._termHasColon) {
			let r = n.substr(0, x);
			if (t.hasOwnProperty(r) && v.createTermDefinition({
				activeCtx: e,
				localCtx: t,
				term: r,
				defined: s,
				options: l
			}), e.mappings.has(r)) {
				let t = n.substr(x + 1);
				g["@id"] = e.mappings.get(r)["@id"] + t;
			} else g["@id"] = n;
		} else if (n === "@type") g["@id"] = n;
		else {
			if (!("@vocab" in e)) throw new r("Invalid JSON-LD syntax; @context terms must define an @id.", "jsonld.SyntaxError", {
				code: "invalid IRI mapping",
				context: t,
				term: n
			});
			g["@id"] = e["@vocab"] + n;
		}
		if ((f["@protected"] === !0 || s.get("@protected") === !0 && f["@protected"] !== !1) && (e.protected[n] = !0, g.protected = !0), s.set(n, !0), "@type" in f) {
			let n = f["@type"];
			if (!o(n)) throw new r("Invalid JSON-LD syntax; an @context @type value must be a string.", "jsonld.SyntaxError", {
				code: "invalid type mapping",
				context: t
			});
			if (n === "@json" || n === "@none") {
				if (v.processingMode(e, 1)) throw new r(`Invalid JSON-LD syntax; an @context @type value must not be "${n}" in JSON-LD 1.0 mode.`, "jsonld.SyntaxError", {
					code: "invalid type mapping",
					context: t
				});
			} else if (n !== "@id" && n !== "@vocab") {
				if (n = y(e, n, {
					vocab: !0,
					base: !1
				}, t, s, l), !c(n)) throw new r("Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.", "jsonld.SyntaxError", {
					code: "invalid type mapping",
					context: t
				});
				if (n.indexOf("_:") === 0) throw new r("Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.", "jsonld.SyntaxError", {
					code: "invalid type mapping",
					context: t
				});
			}
			g["@type"] = n;
		}
		if ("@container" in f) {
			let n = o(f["@container"]) ? [f["@container"]] : f["@container"] || [], a = [
				"@list",
				"@set",
				"@index",
				"@language"
			], s = !0, c = n.includes("@set");
			if (v.processingMode(e, 1.1)) {
				if (a.push("@graph", "@id", "@type"), n.includes("@list")) {
					if (n.length !== 1) throw new r("Invalid JSON-LD syntax; @context @container with @list must have no other values", "jsonld.SyntaxError", {
						code: "invalid container mapping",
						context: t
					});
				} else if (n.includes("@graph")) {
					if (n.some((e) => e !== "@graph" && e !== "@id" && e !== "@index" && e !== "@set")) throw new r("Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set", "jsonld.SyntaxError", {
						code: "invalid container mapping",
						context: t
					});
				} else s &= n.length <= (c ? 2 : 1);
				if (n.includes("@type") && (g["@type"] = g["@type"] || "@id", !["@id", "@vocab"].includes(g["@type"]))) throw new r("Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.", "jsonld.SyntaxError", {
					code: "invalid type mapping",
					context: t
				});
			} else s &= !i(f["@container"]), s &= n.length <= 1;
			if (s &= n.every((e) => a.includes(e)), s &= !(c && n.includes("@list")), !s) throw new r("Invalid JSON-LD syntax; @context @container value must be one of the following: " + a.join(", "), "jsonld.SyntaxError", {
				code: "invalid container mapping",
				context: t
			});
			if (g.reverse && !n.every((e) => ["@index", "@set"].includes(e))) throw new r("Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.", "jsonld.SyntaxError", {
				code: "invalid reverse property",
				context: t
			});
			g["@container"] = n;
		}
		if ("@index" in f) {
			if (!("@container" in f) || !g["@container"].includes("@index")) throw new r(`Invalid JSON-LD syntax; @index without @index in @container: "${f["@index"]}" on term "${n}".`, "jsonld.SyntaxError", {
				code: "invalid term definition",
				context: t
			});
			if (!o(f["@index"]) || f["@index"].indexOf("@") === 0) throw new r(`Invalid JSON-LD syntax; @index must expand to an IRI: "${f["@index"]}" on term "${n}".`, "jsonld.SyntaxError", {
				code: "invalid term definition",
				context: t
			});
			g["@index"] = f["@index"];
		}
		if ("@context" in f && (g["@context"] = f["@context"]), "@language" in f && !("@type" in f)) {
			let e = f["@language"];
			if (e !== null && !o(e)) throw new r("Invalid JSON-LD syntax; @context @language value must be a string or null.", "jsonld.SyntaxError", {
				code: "invalid language mapping",
				context: t
			});
			e !== null && (e = e.toLowerCase()), g["@language"] = e;
		}
		if ("@prefix" in f) {
			if (n.match(/:|\//)) throw new r("Invalid JSON-LD syntax; @context @prefix used on a compact IRI term", "jsonld.SyntaxError", {
				code: "invalid term definition",
				context: t
			});
			if (v.isKeyword(g["@id"])) throw new r("Invalid JSON-LD syntax; keywords may not be used as prefixes", "jsonld.SyntaxError", {
				code: "invalid term definition",
				context: t
			});
			if (typeof f["@prefix"] == "boolean") g._prefix = f["@prefix"] === !0;
			else throw new r("Invalid JSON-LD syntax; @context value for @prefix must be boolean", "jsonld.SyntaxError", {
				code: "invalid @prefix value",
				context: t
			});
		}
		if ("@direction" in f) {
			let e = f["@direction"];
			if (e !== null && e !== "ltr" && e !== "rtl") throw new r("Invalid JSON-LD syntax; @direction value must be null, \"ltr\", or \"rtl\".", "jsonld.SyntaxError", {
				code: "invalid base direction",
				context: t
			});
			g["@direction"] = e;
		}
		if ("@nest" in f) {
			let e = f["@nest"];
			if (!o(e) || e !== "@nest" && e.indexOf("@") === 0) throw new r("Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.", "jsonld.SyntaxError", {
				code: "invalid @nest value",
				context: t
			});
			g["@nest"] = e;
		}
		let S = g["@id"];
		if (S === "@context" || S === "@preserve") throw new r("Invalid JSON-LD syntax; @context and @preserve cannot be aliased.", "jsonld.SyntaxError", {
			code: "invalid keyword alias",
			context: t
		});
		if (m && m.protected && !u && (e.protected[n] = !0, g.protected = !0, !b(m, g))) throw new r("Invalid JSON-LD syntax; tried to redefine a protected term.", "jsonld.SyntaxError", {
			code: "protected term redefinition",
			context: t,
			term: n
		});
	}, v.expandIri = (e, t, n, r) => y(e, t, n, void 0, void 0, r);
	function y(e, t, n, r, i, s) {
		if (t === null || !o(t) || v.isKeyword(t)) return t;
		if (t.match(p)) return null;
		if (r && r.hasOwnProperty(t) && i.get(t) !== !0 && v.createTermDefinition({
			activeCtx: e,
			localCtx: r,
			term: t,
			defined: i,
			options: s
		}), n ||= {}, n.vocab) {
			let n = e.mappings.get(t);
			if (n === null) return null;
			if (a(n) && "@id" in n) return n["@id"];
		}
		let l = t.indexOf(":");
		if (l > 0) {
			let n = t.substr(0, l), a = t.substr(l + 1);
			if (n === "_" || a.indexOf("//") === 0) return t;
			r && r.hasOwnProperty(n) && v.createTermDefinition({
				activeCtx: e,
				localCtx: r,
				term: n,
				defined: i,
				options: s
			});
			let o = e.mappings.get(n);
			if (o && o._prefix) return o["@id"] + a;
			if (c(t)) return t;
		}
		if (n.vocab && "@vocab" in e) t = e["@vocab"] + t;
		else if (n.base) {
			let n, r;
			"@base" in e ? e["@base"] ? (r = u(s.base, e["@base"]), n = u(r, t)) : (r = e["@base"], n = t) : (r = s.base, n = u(s.base, t)), t = n;
		}
		return t;
	}
	v.getInitialContext = (e) => {
		let t = JSON.stringify({ processingMode: e.processingMode }), r = g.get(t);
		if (r) return r;
		let i = {
			processingMode: e.processingMode,
			mappings: /* @__PURE__ */ new Map(),
			inverse: null,
			getInverse: a,
			clone: c,
			revertToPreviousContext: l,
			protected: {}
		};
		return g.size === _ && g.clear(), g.set(t, i), i;
		function a() {
			let e = this;
			if (e.inverse) return e.inverse;
			let t = e.inverse = {}, n = e.fastCurieMap = {}, r = {}, i = (e["@language"] || "@none").toLowerCase(), a = e["@direction"], c = e.mappings, l = [...c.keys()].sort(h);
			for (let e of l) {
				let o = c.get(e);
				if (o === null) continue;
				let l = o["@container"] || "@none";
				if (l = [].concat(l).sort().join(""), o["@id"] === null) continue;
				let u = m(o["@id"]);
				for (let c of u) {
					let u = t[c], d = v.isKeyword(c);
					if (u) !d && !o._termHasColon && r[c].push(e);
					else if (t[c] = u = {}, !d && !o._termHasColon) {
						r[c] = [e];
						let t = {
							iri: c,
							terms: r[c]
						};
						c[0] in n ? n[c[0]].push(t) : n[c[0]] = [t];
					}
					if (u[l] || (u[l] = {
						"@language": {},
						"@type": {},
						"@any": {}
					}), u = u[l], s(e, u["@any"], "@none"), o.reverse) s(e, u["@type"], "@reverse");
					else if (o["@type"] === "@none") s(e, u["@any"], "@none"), s(e, u["@language"], "@none"), s(e, u["@type"], "@none");
					else if ("@type" in o) s(e, u["@type"], o["@type"]);
					else if ("@language" in o && "@direction" in o) {
						let t = o["@language"], n = o["@direction"];
						t && n ? s(e, u["@language"], `${t}_${n}`.toLowerCase()) : t ? s(e, u["@language"], t.toLowerCase()) : n ? s(e, u["@language"], `_${n}`) : s(e, u["@language"], "@null");
					} else "@language" in o ? s(e, u["@language"], (o["@language"] || "@null").toLowerCase()) : "@direction" in o ? o["@direction"] ? s(e, u["@language"], `_${o["@direction"]}`) : s(e, u["@language"], "@none") : a ? (s(e, u["@language"], `_${a}`), s(e, u["@language"], "@none"), s(e, u["@type"], "@none")) : (s(e, u["@language"], i), s(e, u["@language"], "@none"), s(e, u["@type"], "@none"));
				}
			}
			for (let e in n) o(n, e, 1);
			return t;
		}
		function o(e, t, n) {
			let r = e[t], i = e[t] = {}, a, s;
			for (let e of r) a = e.iri, s = n >= a.length ? "" : a[n], s in i ? i[s].push(e) : i[s] = [e];
			for (let e in i) e !== "" && o(i, e, n + 1);
		}
		function s(e, t, n) {
			t.hasOwnProperty(n) || (t[n] = e);
		}
		function c() {
			let e = {};
			return e.mappings = n.clone(this.mappings), e.clone = this.clone, e.inverse = null, e.getInverse = this.getInverse, e.protected = n.clone(this.protected), this.previousContext && (e.previousContext = this.previousContext.clone()), e.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (e["@base"] = this["@base"]), "@language" in this && (e["@language"] = this["@language"]), "@vocab" in this && (e["@vocab"] = this["@vocab"]), e;
		}
		function l() {
			return this.previousContext ? this.previousContext.clone() : this;
		}
	}, v.getContextValue = (e, t, n) => {
		if (t === null) return n === "@context" ? void 0 : null;
		if (e.mappings.has(t)) {
			let r = e.mappings.get(t);
			if (s(n)) return r;
			if (r.hasOwnProperty(n)) return r[n];
		}
		if (n === "@language" && n in e || n === "@direction" && n in e) return e[n];
		if (n !== "@context") return null;
	}, v.processingMode = (e, t) => t.toString() >= "1.1" ? !e.processingMode || e.processingMode >= "json-ld-" + t.toString() : e.processingMode === "json-ld-1.0", v.isKeyword = (e) => {
		if (!o(e) || e[0] !== "@") return !1;
		switch (e) {
			case "@base":
			case "@container":
			case "@context":
			case "@default":
			case "@direction":
			case "@embed":
			case "@explicit":
			case "@graph":
			case "@id":
			case "@included":
			case "@index":
			case "@json":
			case "@language":
			case "@list":
			case "@nest":
			case "@none":
			case "@omitDefault":
			case "@prefix":
			case "@preserve":
			case "@protected":
			case "@requireAll":
			case "@reverse":
			case "@set":
			case "@type":
			case "@value":
			case "@version":
			case "@vocab": return !0;
		}
		return !1;
	};
	function b(e, t) {
		if (!(e && typeof e == "object") || !(t && typeof t == "object")) return e === t;
		let n = Array.isArray(e);
		if (n !== Array.isArray(t)) return !1;
		if (n) {
			if (e.length !== t.length) return !1;
			for (let n = 0; n < e.length; ++n) if (!b(e[n], t[n])) return !1;
			return !0;
		}
		let r = Object.keys(e), i = Object.keys(t);
		if (r.length !== i.length) return !1;
		for (let n in e) {
			let r = e[n], i = t[n];
			if (n === "@container" && Array.isArray(r) && Array.isArray(i) && (r = r.slice().sort(), i = i.slice().sort()), !b(r, i)) return !1;
		}
		return !0;
	}
})), Me = /* @__PURE__ */ v(((e, t) => {
	var n = _e(), { isArray: r, isObject: i, isEmptyObject: a, isString: o, isUndefined: s } = he(), { isList: c, isValue: l, isGraph: u, isSubject: d } = ge(), { expandIri: f, getContextValue: p, isKeyword: m, process: h, processingMode: g } = je(), { isAbsolute: _ } = xe(), { REGEX_BCP47: v, REGEX_KEYWORD: y, addValue: b, asArray: x, getValues: S, validateTypeValue: C } = ve(), { handleEvent: w } = Ae(), T = {};
	t.exports = T, T.expand = async ({ activeCtx: e, activeProperty: t = null, element: c, options: l = {}, insideList: u = !1, insideIndex: d = !1, typeScopedContext: m = null }) => {
		if (c == null) return null;
		if (t === "@default" && (l = Object.assign({}, l, { isFrame: !1 })), !r(c) && !i(c)) return !u && (t === null || f(e, t, { vocab: !0 }, l) === "@graph") ? (l.eventHandler && w({
			event: {
				type: ["JsonLdEvent"],
				code: "free-floating scalar",
				level: "warning",
				message: "Dropping free-floating scalar not in a list.",
				details: { value: c }
			},
			options: l
		}), null) : D({
			activeCtx: e,
			activeProperty: t,
			value: c,
			options: l
		});
		if (r(c)) {
			let n = [], i = p(e, t, "@container") || [];
			u ||= i.includes("@list");
			for (let i = 0; i < c.length; ++i) {
				let a = await T.expand({
					activeCtx: e,
					activeProperty: t,
					element: c[i],
					options: l,
					insideIndex: d,
					typeScopedContext: m
				});
				u && r(a) && (a = { "@list": a }), a !== null && (r(a) ? n = n.concat(a) : n.push(a));
			}
			return n;
		}
		let v = f(e, t, { vocab: !0 }, l), y = p(e, t, "@context");
		m ||= e.previousContext ? e : null;
		let b = Object.keys(c).sort(), C = !d;
		if (C && m && b.length <= 2 && !b.includes("@context")) for (let t of b) {
			let n = f(m, t, { vocab: !0 }, l);
			if (n === "@value") {
				C = !1, e = m;
				break;
			}
			if (n === "@id" && b.length === 1) {
				C = !1;
				break;
			}
		}
		C && (e = e.revertToPreviousContext()), s(y) || (e = await h({
			activeCtx: e,
			localCtx: y,
			propagate: !0,
			overrideProtected: !0,
			options: l
		})), "@context" in c && (e = await h({
			activeCtx: e,
			localCtx: c["@context"],
			options: l
		})), m = e;
		let te = null;
		for (let t of b) if (f(e, t, { vocab: !0 }, l) === "@type") {
			te ||= t;
			let n = c[t], r = Array.isArray(n) ? n.length > 1 ? n.slice().sort() : n : [n];
			for (let t of r) {
				let n = p(m, t, "@context");
				s(n) || (e = await h({
					activeCtx: e,
					localCtx: n,
					options: l,
					propagate: !1
				}));
			}
		}
		let O = {};
		await E({
			activeCtx: e,
			activeProperty: t,
			expandedActiveProperty: v,
			element: c,
			expandedParent: O,
			options: l,
			insideList: u,
			typeKey: te,
			typeScopedContext: m
		}), b = Object.keys(O);
		let k = b.length;
		if ("@value" in O) {
			if ("@type" in O && ("@language" in O || "@direction" in O)) throw new n("Invalid JSON-LD syntax; an element containing \"@value\" may not contain both \"@type\" and either \"@language\" or \"@direction\".", "jsonld.SyntaxError", {
				code: "invalid value object",
				element: O
			});
			let t = k - 1;
			if ("@type" in O && --t, "@index" in O && --t, "@language" in O && --t, "@direction" in O && --t, t !== 0) throw new n("Invalid JSON-LD syntax; an element containing \"@value\" may only have an \"@index\" property and either \"@type\" or either or both \"@language\" or \"@direction\".", "jsonld.SyntaxError", {
				code: "invalid value object",
				element: O
			});
			let r = O["@value"] === null ? [] : x(O["@value"]), i = S(O, "@type");
			if (!(g(e, 1.1) && i.includes("@json") && i.length === 1)) {
				if (r.length === 0) l.eventHandler && w({
					event: {
						type: ["JsonLdEvent"],
						code: "null @value value",
						level: "warning",
						message: "Dropping null @value value.",
						details: { value: O }
					},
					options: l
				}), O = null;
				else if (!r.every((e) => o(e) || a(e)) && "@language" in O) throw new n("Invalid JSON-LD syntax; only strings may be language-tagged.", "jsonld.SyntaxError", {
					code: "invalid language-tagged value",
					element: O
				});
				else if (!i.every((e) => _(e) && !(o(e) && e.indexOf("_:") === 0) || a(e))) throw new n("Invalid JSON-LD syntax; an element containing \"@value\" and \"@type\" must have an absolute IRI for the value of \"@type\".", "jsonld.SyntaxError", {
					code: "invalid typed value",
					element: O
				});
			}
		} else if ("@type" in O && !r(O["@type"])) O["@type"] = [O["@type"]];
		else if ("@set" in O || "@list" in O) {
			if (k > 1 && !(k === 2 && "@index" in O)) throw new n("Invalid JSON-LD syntax; if an element has the property \"@set\" or \"@list\", then it can have at most one other property that is \"@index\".", "jsonld.SyntaxError", {
				code: "invalid set or list object",
				element: O
			});
			"@set" in O && (O = O["@set"], b = Object.keys(O), k = b.length);
		} else k === 1 && "@language" in O && (l.eventHandler && w({
			event: {
				type: ["JsonLdEvent"],
				code: "object with only @language",
				level: "warning",
				message: "Dropping object with only @language.",
				details: { value: O }
			},
			options: l
		}), O = null);
		return i(O) && !l.keepFreeFloatingNodes && !u && (t === null || v === "@graph" || (p(e, t, "@container") || []).includes("@graph")) && (O = ee({
			value: O,
			count: k,
			options: l
		})), O;
	};
	function ee({ value: e, count: t, options: n }) {
		if (t === 0 || "@value" in e || "@list" in e || t === 1 && "@id" in e) {
			if (n.eventHandler) {
				let r, i;
				t === 0 ? (r = "empty object", i = "Dropping empty object.") : "@value" in e ? (r = "object with only @value", i = "Dropping object with only @value.") : "@list" in e ? (r = "object with only @list", i = "Dropping object with only @list.") : t === 1 && "@id" in e && (r = "object with only @id", i = "Dropping object with only @id."), w({
					event: {
						type: ["JsonLdEvent"],
						code: r,
						level: "warning",
						message: i,
						details: { value: e }
					},
					options: n
				});
			}
			return null;
		}
		return e;
	}
	async function E({ activeCtx: e, activeProperty: t, expandedActiveProperty: u, element: y, expandedParent: S, options: D = {}, insideList: k, typeKey: A, typeScopedContext: ne }) {
		let j = Object.keys(y).sort(), re = [], M, N = y[A] && f(e, r(y[A]) ? y[A][0] : y[A], { vocab: !0 }, {
			...D,
			typeExpansion: !0
		}) === "@json";
		for (let E of j) {
			let k = y[E], A;
			if (E === "@context") continue;
			let j = f(e, E, { vocab: !0 }, D);
			if (j === null || !(_(j) || m(j))) {
				D.eventHandler && w({
					event: {
						type: ["JsonLdEvent"],
						code: "invalid property",
						level: "warning",
						message: "Dropping property that did not expand into an absolute IRI or keyword.",
						details: {
							property: E,
							expandedProperty: j
						}
					},
					options: D
				});
				continue;
			}
			if (m(j)) {
				if (u === "@reverse") throw new n("Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.", "jsonld.SyntaxError", {
					code: "invalid reverse property map",
					value: k
				});
				if (j in S && j !== "@included" && j !== "@type") throw new n("Invalid JSON-LD syntax; colliding keywords detected.", "jsonld.SyntaxError", {
					code: "colliding keywords",
					keyword: j
				});
			}
			if (j === "@id") {
				if (!o(k)) {
					if (!D.isFrame) throw new n("Invalid JSON-LD syntax; \"@id\" value must a string.", "jsonld.SyntaxError", {
						code: "invalid @id value",
						value: k
					});
					if (i(k)) {
						if (!a(k)) throw new n("Invalid JSON-LD syntax; \"@id\" value an empty object or array of strings, if framing", "jsonld.SyntaxError", {
							code: "invalid @id value",
							value: k
						});
					} else if (r(k)) {
						if (!k.every((e) => o(e))) throw new n("Invalid JSON-LD syntax; \"@id\" value an empty object or array of strings, if framing", "jsonld.SyntaxError", {
							code: "invalid @id value",
							value: k
						});
					} else throw new n("Invalid JSON-LD syntax; \"@id\" value an empty object or array of strings, if framing", "jsonld.SyntaxError", {
						code: "invalid @id value",
						value: k
					});
				}
				b(S, "@id", x(k).map((t) => {
					if (o(t)) {
						let n = f(e, t, { base: !0 }, D);
						return D.eventHandler && (n === null ? w(t === null ? {
							event: {
								type: ["JsonLdEvent"],
								code: "null @id value",
								level: "warning",
								message: "Null @id found.",
								details: { id: t }
							},
							options: D
						} : {
							event: {
								type: ["JsonLdEvent"],
								code: "reserved @id value",
								level: "warning",
								message: "Reserved @id found.",
								details: { id: t }
							},
							options: D
						}) : _(n) || w({
							event: {
								type: ["JsonLdEvent"],
								code: "relative @id reference",
								level: "warning",
								message: "Relative @id reference found.",
								details: {
									id: t,
									expandedId: n
								}
							},
							options: D
						})), n;
					}
					return t;
				}), { propertyIsArray: D.isFrame });
				continue;
			}
			if (j === "@type") {
				i(k) && (k = Object.fromEntries(Object.entries(k).map(([e, t]) => [f(ne, e, { vocab: !0 }), x(t).map((e) => f(ne, e, {
					base: !0,
					vocab: !0
				}, {
					...D,
					typeExpansion: !0
				}))]))), C(k, D.isFrame), b(S, "@type", x(k).map((e) => {
					if (o(e)) {
						let t = f(ne, e, {
							base: !0,
							vocab: !0
						}, {
							...D,
							typeExpansion: !0
						});
						return t !== "@json" && !_(t) && D.eventHandler && w({
							event: {
								type: ["JsonLdEvent"],
								code: "relative @type reference",
								level: "warning",
								message: "Relative @type reference found.",
								details: { type: e }
							},
							options: D
						}), t;
					}
					return e;
				}), { propertyIsArray: !!D.isFrame });
				continue;
			}
			if (j === "@included" && g(e, 1.1)) {
				let r = x(await T.expand({
					activeCtx: e,
					activeProperty: t,
					element: k,
					options: D
				}));
				if (!r.every((e) => d(e))) throw new n("Invalid JSON-LD syntax; values of @included must expand to node objects.", "jsonld.SyntaxError", {
					code: "invalid @included value",
					value: k
				});
				b(S, "@included", r, { propertyIsArray: !0 });
				continue;
			}
			if (j === "@graph" && !(i(k) || r(k))) throw new n("Invalid JSON-LD syntax; \"@graph\" value must not be an object or an array.", "jsonld.SyntaxError", {
				code: "invalid @graph value",
				value: k
			});
			if (j === "@value") {
				M = k, N && g(e, 1.1) ? S["@value"] = k : b(S, "@value", k, { propertyIsArray: D.isFrame });
				continue;
			}
			if (j === "@language") {
				if (k === null) continue;
				if (!o(k) && !D.isFrame) throw new n("Invalid JSON-LD syntax; \"@language\" value must be a string.", "jsonld.SyntaxError", {
					code: "invalid language-tagged string",
					value: k
				});
				k = x(k).map((e) => o(e) ? e.toLowerCase() : e);
				for (let e of k) o(e) && !e.match(v) && D.eventHandler && w({
					event: {
						type: ["JsonLdEvent"],
						code: "invalid @language value",
						level: "warning",
						message: "@language value must be valid BCP47.",
						details: { language: e }
					},
					options: D
				});
				b(S, "@language", k, { propertyIsArray: D.isFrame });
				continue;
			}
			if (j === "@direction") {
				if (!o(k) && !D.isFrame) throw new n("Invalid JSON-LD syntax; \"@direction\" value must be a string.", "jsonld.SyntaxError", {
					code: "invalid base direction",
					value: k
				});
				k = x(k);
				for (let e of k) if (o(e) && e !== "ltr" && e !== "rtl") throw new n("Invalid JSON-LD syntax; \"@direction\" must be \"ltr\" or \"rtl\".", "jsonld.SyntaxError", {
					code: "invalid base direction",
					value: k
				});
				b(S, "@direction", k, { propertyIsArray: D.isFrame });
				continue;
			}
			if (j === "@index") {
				if (!o(k)) throw new n("Invalid JSON-LD syntax; \"@index\" value must be a string.", "jsonld.SyntaxError", {
					code: "invalid @index value",
					value: k
				});
				b(S, "@index", k);
				continue;
			}
			if (j === "@reverse") {
				if (!i(k)) throw new n("Invalid JSON-LD syntax; \"@reverse\" value must be an object.", "jsonld.SyntaxError", {
					code: "invalid @reverse value",
					value: k
				});
				if (A = await T.expand({
					activeCtx: e,
					activeProperty: "@reverse",
					element: k,
					options: D
				}), "@reverse" in A) for (let e in A["@reverse"]) b(S, e, A["@reverse"][e], { propertyIsArray: !0 });
				let t = S["@reverse"] || null;
				for (let e in A) {
					if (e === "@reverse") continue;
					t === null && (t = S["@reverse"] = {}), b(t, e, [], { propertyIsArray: !0 });
					let r = A[e];
					for (let i = 0; i < r.length; ++i) {
						let a = r[i];
						if (l(a) || c(a)) throw new n("Invalid JSON-LD syntax; \"@reverse\" value must not be a @value or an @list.", "jsonld.SyntaxError", {
							code: "invalid reverse property value",
							value: A
						});
						b(t, e, a, { propertyIsArray: !0 });
					}
				}
				continue;
			}
			if (j === "@nest") {
				re.push(E);
				continue;
			}
			let ie = e, ae = p(e, E, "@context");
			s(ae) || (ie = await h({
				activeCtx: e,
				localCtx: ae,
				propagate: !0,
				overrideProtected: !0,
				options: D
			}));
			let oe = p(e, E, "@container") || [];
			if (oe.includes("@language") && i(k)) {
				let e = p(ie, E, "@direction");
				A = te(ie, k, e, D);
			} else if (oe.includes("@index") && i(k)) {
				let t = oe.includes("@graph"), n = p(ie, E, "@index") || "@index", r = n !== "@index" && f(e, n, { vocab: !0 }, D);
				A = await O({
					activeCtx: ie,
					options: D,
					activeProperty: E,
					value: k,
					asGraph: t,
					indexKey: n,
					propertyIndex: r
				});
			} else if (oe.includes("@id") && i(k)) {
				let e = oe.includes("@graph");
				A = await O({
					activeCtx: ie,
					options: D,
					activeProperty: E,
					value: k,
					asGraph: e,
					indexKey: "@id"
				});
			} else if (oe.includes("@type") && i(k)) A = await O({
				activeCtx: ie.revertToPreviousContext(),
				options: D,
				activeProperty: E,
				value: k,
				asGraph: !1,
				indexKey: "@type"
			});
			else {
				let n = j === "@list";
				if (n || j === "@set") {
					let e = t;
					n && u === "@graph" && (e = null), A = await T.expand({
						activeCtx: ie,
						activeProperty: e,
						element: k,
						options: D,
						insideList: n
					});
				} else A = p(e, E, "@type") === "@json" ? {
					"@type": "@json",
					"@value": k
				} : await T.expand({
					activeCtx: ie,
					activeProperty: E,
					element: k,
					options: D,
					insideList: !1
				});
			}
			if (!(A === null && j !== "@value")) {
				if (j !== "@list" && !c(A) && oe.includes("@list") && (A = { "@list": x(A) }), oe.includes("@graph") && !oe.some((e) => e === "@id" || e === "@index")) {
					if (A = x(A), D.isFrame || (A = A.filter((e) => {
						let t = Object.keys(e).length;
						return ee({
							value: e,
							count: t,
							options: D
						}) !== null;
					})), A.length === 0) continue;
					A = A.map((e) => ({ "@graph": x(e) }));
				}
				if (ie.mappings.has(E) && ie.mappings.get(E).reverse) {
					let e = S["@reverse"] = S["@reverse"] || {};
					A = x(A);
					for (let t = 0; t < A.length; ++t) {
						let r = A[t];
						if (l(r) || c(r)) throw new n("Invalid JSON-LD syntax; \"@reverse\" value must not be a @value or an @list.", "jsonld.SyntaxError", {
							code: "invalid reverse property value",
							value: A
						});
						b(e, j, r, { propertyIsArray: !0 });
					}
					continue;
				}
				b(S, j, A, { propertyIsArray: !0 });
			}
		}
		if ("@value" in S && !(S["@type"] === "@json" && g(e, 1.1)) && (i(M) || r(M)) && !D.isFrame) throw new n("Invalid JSON-LD syntax; \"@value\" value must not be an object or an array.", "jsonld.SyntaxError", {
			code: "invalid value object value",
			value: M
		});
		for (let a of re) {
			let o = r(y[a]) ? y[a] : [y[a]];
			for (let r of o) {
				if (!i(r) || Object.keys(r).some((t) => f(e, t, { vocab: !0 }, D) === "@value")) throw new n("Invalid JSON-LD syntax; nested value must be a node object.", "jsonld.SyntaxError", {
					code: "invalid @nest value",
					value: r
				});
				await E({
					activeCtx: e,
					activeProperty: t,
					expandedActiveProperty: u,
					element: r,
					expandedParent: S,
					options: D,
					insideList: k,
					typeScopedContext: ne,
					typeKey: A
				});
			}
		}
	}
	function D({ activeCtx: e, activeProperty: t, value: n, options: r }) {
		if (n == null) return null;
		let i = f(e, t, { vocab: !0 }, r);
		if (i === "@id") return f(e, n, { base: !0 }, r);
		if (i === "@type") return f(e, n, {
			vocab: !0,
			base: !0
		}, {
			...r,
			typeExpansion: !0
		});
		let a = p(e, t, "@type");
		if ((a === "@id" || i === "@graph") && o(n)) {
			let i = f(e, n, { base: !0 }, r);
			return i === null && n.match(y) && r.eventHandler && w({
				event: {
					type: ["JsonLdEvent"],
					code: "reserved @id value",
					level: "warning",
					message: "Reserved @id found.",
					details: { id: t }
				},
				options: r
			}), { "@id": i };
		}
		if (a === "@vocab" && o(n)) return { "@id": f(e, n, {
			vocab: !0,
			base: !0
		}, r) };
		if (m(i)) return n;
		let s = {};
		if (a && ![
			"@id",
			"@vocab",
			"@none"
		].includes(a)) s["@type"] = a;
		else if (o(n)) {
			let n = p(e, t, "@language");
			n !== null && (s["@language"] = n);
			let r = p(e, t, "@direction");
			r !== null && (s["@direction"] = r);
		}
		return [
			"boolean",
			"number",
			"string"
		].includes(typeof n) || (n = n.toString()), s["@value"] = n, s;
	}
	function te(e, t, i, a) {
		let s = [], c = Object.keys(t).sort();
		for (let l of c) {
			let c = f(e, l, { vocab: !0 }, a), u = t[l];
			r(u) || (u = [u]);
			for (let e of u) {
				if (e === null) continue;
				if (!o(e)) throw new n("Invalid JSON-LD syntax; language map values must be strings.", "jsonld.SyntaxError", {
					code: "invalid language map value",
					languageMap: t
				});
				let r = { "@value": e };
				c !== "@none" && (l.match(v) || a.eventHandler && w({
					event: {
						type: ["JsonLdEvent"],
						code: "invalid @language value",
						level: "warning",
						message: "@language value must be valid BCP47.",
						details: { language: l }
					},
					options: a
				}), r["@language"] = l.toLowerCase()), i && (r["@direction"] = i), s.push(r);
			}
		}
		return s;
	}
	async function O({ activeCtx: e, options: t, activeProperty: i, value: a, asGraph: o, indexKey: c, propertyIndex: d }) {
		let m = [], g = Object.keys(a).sort(), _ = c === "@type";
		for (let v of g) {
			if (_) {
				let n = p(e, v, "@context");
				s(n) || (e = await h({
					activeCtx: e,
					localCtx: n,
					propagate: !1,
					options: t
				}));
			}
			let g = a[v];
			r(g) || (g = [g]), g = await T.expand({
				activeCtx: e,
				activeProperty: i,
				element: g,
				options: t,
				insideList: !1,
				insideIndex: !0
			});
			let y;
			y = d ? v === "@none" ? "@none" : D({
				activeCtx: e,
				activeProperty: c,
				value: v,
				options: t
			}) : f(e, v, { vocab: !0 }, t), c === "@id" ? v = f(e, v, { base: !0 }, t) : _ && (v = y);
			for (let e of g) {
				if (o && !u(e) && (e = { "@graph": [e] }), c === "@type") y === "@none" || (e["@type"] ? e["@type"] = [v].concat(e["@type"]) : e["@type"] = [v]);
				else if (l(e) && ![
					"@language",
					"@type",
					"@index"
				].includes(c)) throw new n(`Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${c}".`, "jsonld.SyntaxError", {
					code: "invalid value object",
					value: e
				});
				else d ? y !== "@none" && b(e, d, y, {
					propertyIsArray: !0,
					prependValue: !0
				}) : y !== "@none" && !(c in e) && (e[c] = v);
				m.push(e);
			}
		}
		return m;
	}
})), Ne = /* @__PURE__ */ v(((e, t) => {
	var { isKeyword: n } = je(), r = ge(), i = he(), a = ve(), o = _e(), s = {};
	t.exports = s, s.createMergedNodeMap = (e, t) => {
		t ||= {};
		let n = t.issuer || new a.IdentifierIssuer("_:b"), r = { "@default": {} };
		return s.createNodeMap(e, r, "@default", n), s.mergeNodeMaps(r);
	}, s.createNodeMap = (e, t, c, l, u, d) => {
		if (i.isArray(e)) {
			for (let n of e) s.createNodeMap(n, t, c, l, void 0, d);
			return;
		}
		if (!i.isObject(e)) {
			d && d.push(e);
			return;
		}
		if (r.isValue(e)) {
			if ("@type" in e) {
				let t = e["@type"];
				t.indexOf("_:") === 0 && (e["@type"] = t = l.getId(t));
			}
			d && d.push(e);
			return;
		} else if (d && r.isList(e)) {
			let n = [];
			s.createNodeMap(e["@list"], t, c, l, u, n), d.push({ "@list": n });
			return;
		}
		if ("@type" in e) {
			let t = e["@type"];
			for (let e of t) e.indexOf("_:") === 0 && l.getId(e);
		}
		i.isUndefined(u) && (u = r.isBlankNode(e) ? l.getId(e["@id"]) : e["@id"]), d && d.push({ "@id": u });
		let f = t[c], p = f[u] = f[u] || {};
		p["@id"] = u;
		let m = Object.keys(e).sort();
		for (let i of m) {
			if (i === "@id") continue;
			if (i === "@reverse") {
				let n = { "@id": u }, i = e["@reverse"];
				for (let e in i) {
					let o = i[e];
					for (let i of o) {
						let o = i["@id"];
						r.isBlankNode(i) && (o = l.getId(o)), s.createNodeMap(i, t, c, l, o), a.addValue(f[o], e, n, {
							propertyIsArray: !0,
							allowDuplicate: !1
						});
					}
				}
				continue;
			}
			if (i === "@graph") {
				u in t || (t[u] = {}), s.createNodeMap(e[i], t, u, l);
				continue;
			}
			if (i === "@included") {
				s.createNodeMap(e[i], t, c, l);
				continue;
			}
			if (i !== "@type" && n(i)) {
				if (i === "@index" && i in p && (e[i] !== p[i] || e[i]["@id"] !== p[i]["@id"])) throw new o("Invalid JSON-LD syntax; conflicting @index property detected.", "jsonld.SyntaxError", {
					code: "conflicting indexes",
					subject: p
				});
				p[i] = e[i];
				continue;
			}
			let d = e[i];
			if (i.indexOf("_:") === 0 && (i = l.getId(i)), d.length === 0) {
				a.addValue(p, i, [], { propertyIsArray: !0 });
				continue;
			}
			for (let e of d) if (i === "@type" && (e = e.indexOf("_:") === 0 ? l.getId(e) : e), r.isSubject(e) || r.isSubjectReference(e)) {
				if ("@id" in e && !e["@id"]) continue;
				let n = r.isBlankNode(e) ? l.getId(e["@id"]) : e["@id"];
				a.addValue(p, i, { "@id": n }, {
					propertyIsArray: !0,
					allowDuplicate: !1
				}), s.createNodeMap(e, t, c, l, n);
			} else if (r.isValue(e)) a.addValue(p, i, e, {
				propertyIsArray: !0,
				allowDuplicate: !1
			});
			else if (r.isList(e)) {
				let n = [];
				s.createNodeMap(e["@list"], t, c, l, u, n), e = { "@list": n }, a.addValue(p, i, e, {
					propertyIsArray: !0,
					allowDuplicate: !1
				});
			} else s.createNodeMap(e, t, c, l, u), a.addValue(p, i, e, {
				propertyIsArray: !0,
				allowDuplicate: !1
			});
		}
	}, s.mergeNodeMapGraphs = (e) => {
		let t = {};
		for (let r of Object.keys(e).sort()) for (let i of Object.keys(e[r]).sort()) {
			let o = e[r][i];
			i in t || (t[i] = { "@id": i });
			let s = t[i];
			for (let e of Object.keys(o).sort()) if (n(e) && e !== "@type") s[e] = a.clone(o[e]);
			else for (let t of o[e]) a.addValue(s, e, a.clone(t), {
				propertyIsArray: !0,
				allowDuplicate: !1
			});
		}
		return t;
	}, s.mergeNodeMaps = (e) => {
		let t = e["@default"], n = Object.keys(e).sort();
		for (let i of n) {
			if (i === "@default") continue;
			let n = e[i], a = t[i];
			a ? "@graph" in a || (a["@graph"] = []) : t[i] = a = {
				"@id": i,
				"@graph": []
			};
			let o = a["@graph"];
			for (let e of Object.keys(n).sort()) {
				let t = n[e];
				r.isSubjectReference(t) || o.push(t);
			}
		}
		return t;
	};
})), Pe = /* @__PURE__ */ v(((e, t) => {
	var { isSubjectReference: n } = ge(), { createMergedNodeMap: r } = Ne(), i = {};
	t.exports = i, i.flatten = (e) => {
		let t = r(e), i = [], a = Object.keys(t).sort();
		for (let e = 0; e < a.length; ++e) {
			let r = t[a[e]];
			n(r) || i.push(r);
		}
		return i;
	};
})), Fe = /* @__PURE__ */ v(((e, t) => {
	var n = _e(), r = ge(), i = he(), { REGEX_BCP47: a, addValue: o } = ve(), { handleEvent: s } = Ae(), { RDF_LIST: c, RDF_FIRST: l, RDF_REST: u, RDF_NIL: d, RDF_TYPE: f, RDF_JSON_LITERAL: p, XSD_BOOLEAN: m, XSD_DOUBLE: h, XSD_INTEGER: g, XSD_STRING: _ } = ye(), v = {};
	t.exports = v, v.fromRDF = async (e, t) => {
		let { useRdfType: a = !1, useNativeTypes: s = !1, rdfDirection: p = null } = t, m = {}, h = { "@default": m }, g = {};
		if (p) {
			if (p === "compound-literal") throw new n("Unsupported rdfDirection value.", "jsonld.InvalidRdfDirection", { value: p });
			if (p !== "i18n-datatype") throw new n("Unknown rdfDirection value.", "jsonld.InvalidRdfDirection", { value: p });
		}
		for (let n of e) {
			let e = n.graph.termType === "DefaultGraph" ? "@default" : n.graph.value;
			e in h || (h[e] = {}), e !== "@default" && !(e in m) && (m[e] = { "@id": e });
			let r = h[e], i = b(n.subject), c = n.predicate.value, l = n.object;
			i in r || (r[i] = { "@id": i });
			let u = r[i], _ = b(l), v = !!_;
			if (v && !(_ in r) && (r[_] = { "@id": _ }), c === f && !a && v) {
				o(u, "@type", _, { propertyIsArray: !0 });
				continue;
			}
			let x = y(l, s, p, t);
			if (o(u, c, x, { propertyIsArray: !0 }), v) if (_ === d) {
				let e = r[_];
				"usages" in e || (e.usages = []), e.usages.push({
					node: u,
					property: c,
					value: x
				});
			} else _ in g ? g[_] = !1 : g[_] = {
				node: u,
				property: c,
				value: x
			};
		}
		for (let e in h) {
			let t = h[e];
			if (!(d in t)) continue;
			let n = t[d];
			if (n.usages) {
				for (let e of n.usages) {
					let n = e.node, a = e.property, o = e.value, s = [], d = [], f = Object.keys(n).length;
					for (; a === u && i.isObject(g[n["@id"]]) && i.isArray(n[l]) && n[l].length === 1 && i.isArray(n[u]) && n[u].length === 1 && (f === 3 || f === 4 && i.isArray(n["@type"]) && n["@type"].length === 1 && n["@type"][0] === c) && (s.push(n[l][0]), d.push(n["@id"]), e = g[n["@id"]], n = e.node, a = e.property, o = e.value, f = Object.keys(n).length, r.isBlankNode(n)););
					delete o["@id"], o["@list"] = s.reverse();
					for (let e of d) delete t[e];
				}
				delete n.usages;
			}
		}
		let _ = [], v = Object.keys(m).sort();
		for (let e of v) {
			let t = m[e];
			if (e in h) {
				let n = t["@graph"] = [], i = h[e], a = Object.keys(i).sort();
				for (let e of a) {
					let t = i[e];
					r.isSubjectReference(t) || n.push(t);
				}
			}
			r.isSubjectReference(t) || _.push(t);
		}
		return _;
	};
	function y(e, t, r, o) {
		let c = b(e);
		if (c) return { "@id": c };
		let l = { "@value": e.value };
		if (e.language) e.language.match(a) || o.eventHandler && s({
			event: {
				type: ["JsonLdEvent"],
				code: "invalid @language value",
				level: "warning",
				message: "@language value must be valid BCP47.",
				details: { language: e.language }
			},
			options: o
		}), l["@language"] = e.language;
		else {
			let c = e.datatype.value;
			if (c ||= _, c === p) {
				c = "@json";
				try {
					l["@value"] = JSON.parse(l["@value"]);
				} catch (e) {
					throw new n("JSON literal could not be parsed.", "jsonld.InvalidJsonLiteral", {
						code: "invalid JSON literal",
						value: l["@value"],
						cause: e
					});
				}
			}
			if (t) if (c === m) l["@value"] === "true" || l["@value"] === "1" ? l["@value"] = !0 : l["@value"] === "false" || l["@value"] === "0" ? l["@value"] = !1 : l["@type"] = c;
			else if (c === g) if (i.isNumeric(l["@value"])) {
				let e = parseInt(l["@value"], 10);
				e.toFixed(0) === l["@value"] && (l["@value"] = e);
			} else l["@type"] = c;
			else c === h && i.isNumeric(l["@value"]) ? l["@value"] = parseFloat(l["@value"]) : l["@type"] = c;
			else if (r === "i18n-datatype" && c.startsWith("https://www.w3.org/ns/i18n#")) {
				let [, e, t] = c.split(/[#_]/);
				e.length > 0 && (l["@language"] = e, e.match(a) || o.eventHandler && s({
					event: {
						type: ["JsonLdEvent"],
						code: "invalid @language value",
						level: "warning",
						message: "@language value must be valid BCP47.",
						details: { language: e }
					},
					options: o
				})), l["@direction"] = t;
			} else c !== _ && (l["@type"] = c);
		}
		return l;
	}
	function b(e) {
		return e.termType === "NamedNode" ? e.value : e.termType === "BlankNode" ? "_:" + e.value : null;
	}
})), Ie = /* @__PURE__ */ v(((e, t) => {
	t.exports = function e(t) {
		if (typeof t == "number" && isNaN(t)) throw Error("NaN is not allowed");
		if (typeof t == "number" && !isFinite(t)) throw Error("Infinity is not allowed");
		return typeof t != "object" || !t ? JSON.stringify(t) : t.toJSON instanceof Function ? e(t.toJSON()) : Array.isArray(t) ? `[${t.reduce((t, n, r) => `${t}${r === 0 ? "" : ","}${e(n === void 0 || typeof n == "symbol" ? null : n)}`, "")}]` : `{${Object.keys(t).sort().reduce((n, r) => t[r] === void 0 || typeof t[r] == "symbol" ? n : `${n}${n.length === 0 ? "" : ","}${e(r)}:${e(t[r])}`, "")}}`;
	};
})), Le = /* @__PURE__ */ v(((e, t) => {
	var { createNodeMap: n } = Ne(), { isKeyword: r } = je(), i = ge(), a = Ie(), o = _e(), s = he(), c = ve(), { handleEvent: l } = Ae(), { RDF_FIRST: u, RDF_REST: d, RDF_NIL: f, RDF_TYPE: p, RDF_JSON_LITERAL: m, RDF_LANGSTRING: h, XSD_BOOLEAN: g, XSD_DOUBLE: _, XSD_INTEGER: v, XSD_STRING: y } = ye(), { isAbsolute: b } = xe(), x = {};
	t.exports = x, x.toRDF = (e, t) => {
		let r = new c.IdentifierIssuer("_:b"), i = { "@default": {} };
		n(e, i, "@default", r);
		let a = [], o = Object.keys(i).sort();
		for (let e of o) {
			let n;
			if (e === "@default") n = {
				termType: "DefaultGraph",
				value: ""
			};
			else if (b(e)) n = T(e);
			else {
				t.eventHandler && l({
					event: {
						type: ["JsonLdEvent"],
						code: "relative graph reference",
						level: "warning",
						message: "Relative graph reference found.",
						details: { graph: e }
					},
					options: t
				});
				continue;
			}
			S(a, i[e], n, r, t);
		}
		return a;
	};
	function S(e, t, n, i, a) {
		let o = Object.keys(t).sort();
		for (let s of o) {
			let o = t[s], c = Object.keys(o).sort();
			for (let t of c) {
				let c = o[t];
				if (t === "@type") t = p;
				else if (r(t)) continue;
				for (let r of c) {
					let o = T(s);
					if (!b(s)) {
						a.eventHandler && l({
							event: {
								type: ["JsonLdEvent"],
								code: "relative subject reference",
								level: "warning",
								message: "Relative subject reference found.",
								details: { subject: s }
							},
							options: a
						});
						continue;
					}
					let c = T(t);
					if (!b(t)) {
						a.eventHandler && l({
							event: {
								type: ["JsonLdEvent"],
								code: "relative predicate reference",
								level: "warning",
								message: "Relative predicate reference found.",
								details: { predicate: t }
							},
							options: a
						});
						continue;
					}
					if (c.termType === "BlankNode" && !a.produceGeneralizedRdf) {
						a.eventHandler && l({
							event: {
								type: ["JsonLdEvent"],
								code: "blank node predicate",
								level: "warning",
								message: "Dropping blank node predicate.",
								details: { property: i.getOldIds().find((e) => i.getId(e) === t) }
							},
							options: a
						});
						continue;
					}
					let u = w(r, i, e, n, a.rdfDirection, a);
					u && e.push({
						subject: o,
						predicate: c,
						object: u,
						graph: n
					});
				}
			}
		}
	}
	function C(e, t, n, r, i, a) {
		let o = {
			termType: "NamedNode",
			value: u
		}, s = {
			termType: "NamedNode",
			value: d
		}, c = {
			termType: "NamedNode",
			value: f
		}, l = e.pop(), p = l ? {
			termType: "BlankNode",
			value: t.getId().slice(2)
		} : c, m = p;
		for (let c of e) {
			let e = w(c, t, n, r, i, a), l = {
				termType: "BlankNode",
				value: t.getId().slice(2)
			};
			n.push({
				subject: m,
				predicate: o,
				object: e,
				graph: r
			}), n.push({
				subject: m,
				predicate: s,
				object: l,
				graph: r
			}), m = l;
		}
		if (l) {
			let e = w(l, t, n, r, i, a);
			n.push({
				subject: m,
				predicate: o,
				object: e,
				graph: r
			}), n.push({
				subject: m,
				predicate: s,
				object: c,
				graph: r
			});
		}
		return p;
	}
	function w(e, t, n, r, c, u) {
		let d;
		if (i.isValue(e)) {
			d = {
				termType: "Literal",
				value: void 0,
				datatype: { termType: "NamedNode" }
			};
			let t = e["@value"], n = e["@type"] || null;
			if (n === "@json") d.value = a(t), d.datatype.value = m;
			else if (s.isBoolean(t)) d.value = t.toString(), d.datatype.value = n || g;
			else if (s.isDouble(t) || n === _) s.isDouble(t) || (t = parseFloat(t)), d.value = t.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), d.datatype.value = n || _;
			else if (s.isNumber(t)) d.value = t.toFixed(0), d.datatype.value = n || v;
			else if ("@direction" in e && c === "i18n-datatype") {
				let n = `https://www.w3.org/ns/i18n#${(e["@language"] || "").toLowerCase()}_${e["@direction"]}`;
				d.datatype.value = n, d.value = t;
			} else if ("@direction" in e && c === "compound-literal") throw new o("Unsupported rdfDirection value.", "jsonld.InvalidRdfDirection", { value: c });
			else if ("@direction" in e && c) throw new o("Unknown rdfDirection value.", "jsonld.InvalidRdfDirection", { value: c });
			else "@language" in e ? ("@direction" in e && !c && u.eventHandler && l({
				event: {
					type: ["JsonLdEvent"],
					code: "rdfDirection not set",
					level: "warning",
					message: "rdfDirection not set for @direction.",
					details: { object: d.value }
				},
				options: u
			}), d.value = t, d.datatype.value = n || h, d.language = e["@language"]) : ("@direction" in e && !c && u.eventHandler && l({
				event: {
					type: ["JsonLdEvent"],
					code: "rdfDirection not set",
					level: "warning",
					message: "rdfDirection not set for @direction.",
					details: { object: d.value }
				},
				options: u
			}), d.value = t, d.datatype.value = n || y);
		} else if (i.isList(e)) {
			let i = C(e["@list"], t, n, r, c, u);
			d = {
				termType: i.termType,
				value: i.value
			};
		} else d = T(s.isObject(e) ? e["@id"] : e);
		return d.termType === "NamedNode" && !b(d.value) ? (u.eventHandler && l({
			event: {
				type: ["JsonLdEvent"],
				code: "relative object reference",
				level: "warning",
				message: "Relative object reference found.",
				details: { object: d.value }
			},
			options: u
		}), null) : d;
	}
	function T(e) {
		return e.startsWith("_:") ? {
			termType: "BlankNode",
			value: e.slice(2)
		} : {
			termType: "NamedNode",
			value: e
		};
	}
})), Re = /* @__PURE__ */ v(((e, t) => {
	var { isKeyword: n } = je(), r = ge(), i = he(), a = ve(), o = xe(), s = _e(), { createNodeMap: c, mergeNodeMapGraphs: l } = Ne(), u = {};
	t.exports = u, u.frameMergedOrDefault = (e, t, n) => {
		let r = {
			options: n,
			embedded: !1,
			graph: "@default",
			graphMap: { "@default": {} },
			subjectStack: [],
			link: {},
			bnodeMap: {}
		}, i = new a.IdentifierIssuer("_:b");
		c(e, r.graphMap, "@default", i), n.merged && (r.graphMap["@merged"] = l(r.graphMap), r.graph = "@merged"), r.subjects = r.graphMap[r.graph];
		let o = [];
		return u.frame(r, Object.keys(r.subjects).sort(), t, o), n.pruneBlankNodeIdentifiers && (n.bnodesToClear = Object.keys(r.bnodeMap).filter((e) => r.bnodeMap[e].length === 1)), n.link = {}, v(o, n);
	}, u.frame = (e, t, o, c, l = null) => {
		m(o), o = o[0];
		let g = e.options, v = {
			embed: p(o, g, "embed"),
			explicit: p(o, g, "explicit"),
			requireAll: p(o, g, "requireAll")
		};
		e.link.hasOwnProperty(e.graph) || (e.link[e.graph] = {});
		let b = e.link[e.graph], S = h(e, t, o, v), C = Object.keys(S).sort();
		for (let m of C) {
			let h = S[m];
			if (l === null ? e.uniqueEmbeds = { [e.graph]: {} } : e.uniqueEmbeds[e.graph] = e.uniqueEmbeds[e.graph] || {}, v.embed === "@link" && m in b) {
				y(c, l, b[m]);
				continue;
			}
			let C = { "@id": m };
			if (m.indexOf("_:") === 0 && a.addValue(e.bnodeMap, m, C, { propertyIsArray: !0 }), b[m] = C, (v.embed === "@first" || v.embed === "@last") && e.is11) throw new s("Invalid JSON-LD syntax; invalid value of @embed.", "jsonld.SyntaxError", {
				code: "invalid @embed value",
				frame: o
			});
			if (!(!e.embedded && e.uniqueEmbeds[e.graph].hasOwnProperty(m))) {
				if (e.embedded && (v.embed === "@never" || f(h, e.graph, e.subjectStack))) {
					y(c, l, C);
					continue;
				}
				if (e.embedded && (v.embed == "@first" || v.embed == "@once") && e.uniqueEmbeds[e.graph].hasOwnProperty(m)) {
					y(c, l, C);
					continue;
				}
				if (v.embed === "@last" && m in e.uniqueEmbeds[e.graph] && _(e, m), e.uniqueEmbeds[e.graph][m] = {
					parent: c,
					property: l
				}, e.subjectStack.push({
					subject: h,
					graph: e.graph
				}), m in e.graphMap) {
					let t = !1, n = null;
					"@graph" in o ? (n = o["@graph"][0], t = !(m === "@merged" || m === "@default"), i.isObject(n) || (n = {})) : (t = e.graph !== "@merged", n = {}), t && u.frame({
						...e,
						graph: m,
						embedded: !1
					}, Object.keys(e.graphMap[m]).sort(), [n], C, "@graph");
				}
				"@included" in o && u.frame({
					...e,
					embedded: !1
				}, t, o["@included"], C, "@included");
				for (let t of Object.keys(h).sort()) {
					if (n(t)) {
						if (C[t] = a.clone(h[t]), t === "@type") for (let t of h["@type"]) t.indexOf("_:") === 0 && a.addValue(e.bnodeMap, t, C, { propertyIsArray: !0 });
						continue;
					}
					if (!(v.explicit && !(t in o))) for (let n of h[t]) {
						let i = t in o ? o[t] : d(v);
						if (r.isList(n)) {
							let i = o[t] && o[t][0] && o[t][0]["@list"] ? o[t][0]["@list"] : d(v), s = { "@list": [] };
							y(C, t, s);
							let c = n["@list"];
							for (let t of c) r.isSubjectReference(t) ? u.frame({
								...e,
								embedded: !0
							}, [t["@id"]], i, s, "@list") : y(s, "@list", a.clone(t));
						} else r.isSubjectReference(n) ? u.frame({
							...e,
							embedded: !0
						}, [n["@id"]], i, C, t) : x(i[0], n) && y(C, t, a.clone(n));
					}
				}
				for (let e of Object.keys(o).sort()) {
					if (e === "@type") {
						if (!i.isObject(o[e][0]) || !("@default" in o[e][0])) continue;
					} else if (n(e)) continue;
					let t = o[e][0] || {};
					if (!p(t, g, "omitDefault") && !(e in C)) {
						let n = "@null";
						"@default" in t && (n = a.clone(t["@default"])), i.isArray(n) || (n = [n]), C[e] = [{ "@preserve": n }];
					}
				}
				for (let t of Object.keys(o["@reverse"] || {}).sort()) {
					let n = o["@reverse"][t];
					for (let r of Object.keys(e.subjects)) a.getValues(e.subjects[r], t).some((e) => e["@id"] === m) && (C["@reverse"] = C["@reverse"] || {}, a.addValue(C["@reverse"], t, [], { propertyIsArray: !0 }), u.frame({
						...e,
						embedded: !0
					}, [r], n, C["@reverse"][t], l));
				}
				y(c, l, C), e.subjectStack.pop();
			}
		}
	}, u.cleanupNull = (e, t) => {
		if (i.isArray(e)) return e.map((e) => u.cleanupNull(e, t)).filter((e) => e);
		if (e === "@null") return null;
		if (i.isObject(e)) {
			if ("@id" in e) {
				let n = e["@id"];
				if (t.link.hasOwnProperty(n)) {
					let r = t.link[n].indexOf(e);
					if (r !== -1) return t.link[n][r];
					t.link[n].push(e);
				} else t.link[n] = [e];
			}
			for (let n in e) e[n] = u.cleanupNull(e[n], t);
		}
		return e;
	};
	function d(e) {
		let t = {};
		for (let n in e) e[n] !== void 0 && (t["@" + n] = [e[n]]);
		return [t];
	}
	function f(e, t, n) {
		for (let r = n.length - 1; r >= 0; --r) {
			let i = n[r];
			if (i.graph === t && i.subject["@id"] === e["@id"]) return !0;
		}
		return !1;
	}
	function p(e, t, n) {
		let r = "@" + n, i = r in e ? e[r][0] : t[n];
		if (n === "embed") {
			if (i === !0) i = "@once";
			else if (i === !1) i = "@never";
			else if (i !== "@always" && i !== "@never" && i !== "@link" && i !== "@first" && i !== "@last" && i !== "@once") throw new s("Invalid JSON-LD syntax; invalid value of @embed.", "jsonld.SyntaxError", {
				code: "invalid @embed value",
				frame: e
			});
		}
		return i;
	}
	function m(e) {
		if (!i.isArray(e) || e.length !== 1 || !i.isObject(e[0])) throw new s("Invalid JSON-LD syntax; a JSON-LD frame must be a single object.", "jsonld.SyntaxError", { frame: e });
		if ("@id" in e[0]) {
			for (let t of a.asArray(e[0]["@id"])) if (!(i.isObject(t) || o.isAbsolute(t)) || i.isString(t) && t.indexOf("_:") === 0) throw new s("Invalid JSON-LD syntax; invalid @id in frame.", "jsonld.SyntaxError", {
				code: "invalid frame",
				frame: e
			});
		}
		if ("@type" in e[0]) {
			for (let t of a.asArray(e[0]["@type"])) if (!(i.isObject(t) || o.isAbsolute(t) || t === "@json") || i.isString(t) && t.indexOf("_:") === 0) throw new s("Invalid JSON-LD syntax; invalid @type in frame.", "jsonld.SyntaxError", {
				code: "invalid frame",
				frame: e
			});
		}
	}
	function h(e, t, n, r) {
		let i = {};
		for (let a of t) {
			let t = e.graphMap[e.graph][a];
			g(e, t, n, r) && (i[a] = t);
		}
		return i;
	}
	function g(e, t, o, s) {
		let c = !0, l = !1;
		for (let u in o) {
			let d = !1, f = a.getValues(t, u), p = a.getValues(o, u).length === 0;
			if (u === "@id") {
				if (i.isEmptyObject(o["@id"][0] || {}) ? d = !0 : o["@id"].length >= 0 && (d = o["@id"].includes(f[0])), !s.requireAll) return d;
			} else if (u === "@type") {
				if (c = !1, p) {
					if (f.length > 0) return !1;
					d = !0;
				} else if (o["@type"].length === 1 && i.isEmptyObject(o["@type"][0])) d = f.length > 0;
				else for (let e of o["@type"]) i.isObject(e) && "@default" in e ? d = !0 : d ||= f.some((t) => t === e);
				if (!s.requireAll) return d;
			} else if (n(u)) continue;
			else {
				let t = a.getValues(o, u)[0], n = !1;
				if (t && (m([t]), n = "@default" in t), c = !1, f.length === 0 && n) continue;
				if (f.length > 0 && p) return !1;
				if (t === void 0) {
					if (f.length > 0) return !1;
					d = !0;
				} else if (r.isList(t)) {
					let n = t["@list"][0];
					if (r.isList(f[0])) {
						let t = f[0]["@list"];
						r.isValue(n) ? d = t.some((e) => x(n, e)) : (r.isSubject(n) || r.isSubjectReference(n)) && (d = t.some((t) => b(e, n, t, s)));
					}
				} else d = r.isValue(t) ? f.some((e) => x(t, e)) : r.isSubjectReference(t) ? f.some((n) => b(e, t, n, s)) : i.isObject(t) ? f.length > 0 : !1;
			}
			if (!d && s.requireAll) return !1;
			l ||= d;
		}
		return c || l;
	}
	function _(e, t) {
		let n = e.uniqueEmbeds[e.graph], r = n[t], o = r.parent, s = r.property, c = { "@id": t };
		if (i.isArray(o)) {
			for (let e = 0; e < o.length; ++e) if (a.compareValues(o[e], c)) {
				o[e] = c;
				break;
			}
		} else {
			let e = i.isArray(o[s]);
			a.removeValue(o, s, c, { propertyIsArray: e }), a.addValue(o, s, c, { propertyIsArray: e });
		}
		let l = (e) => {
			let t = Object.keys(n);
			for (let r of t) r in n && i.isObject(n[r].parent) && n[r].parent["@id"] === e && (delete n[r], l(r));
		};
		l(t);
	}
	function v(e, t) {
		if (i.isArray(e)) return e.map((e) => v(e, t));
		if (i.isObject(e)) {
			if ("@preserve" in e) return e["@preserve"][0];
			if (r.isValue(e)) return e;
			if (r.isList(e)) return e["@list"] = v(e["@list"], t), e;
			if ("@id" in e) {
				let n = e["@id"];
				if (t.link.hasOwnProperty(n)) {
					let r = t.link[n].indexOf(e);
					if (r !== -1) return t.link[n][r];
					t.link[n].push(e);
				} else t.link[n] = [e];
			}
			for (let n in e) {
				if (n === "@id" && t.bnodesToClear.includes(e[n])) {
					delete e["@id"];
					continue;
				}
				e[n] = v(e[n], t);
			}
		}
		return e;
	}
	function y(e, t, n) {
		i.isObject(e) ? a.addValue(e, t, n, { propertyIsArray: !0 }) : e.push(n);
	}
	function b(e, t, n, r) {
		if (!("@id" in n)) return !1;
		let i = e.subjects[n["@id"]];
		return i && g(e, i, t, r);
	}
	function x(e, t) {
		let n = t["@value"], r = t["@type"], a = t["@language"], o = e["@value"] ? i.isArray(e["@value"]) ? e["@value"] : [e["@value"]] : [], s = e["@type"] ? i.isArray(e["@type"]) ? e["@type"] : [e["@type"]] : [], c = e["@language"] ? i.isArray(e["@language"]) ? e["@language"] : [e["@language"]] : [];
		return o.length === 0 && s.length === 0 && c.length === 0 || !(!(o.includes(n) || i.isEmptyObject(o[0])) || !(!r && s.length === 0 || s.includes(r) || r && i.isEmptyObject(s[0])) || !(!a && c.length === 0 || c.includes(a) || a && i.isEmptyObject(c[0])));
	}
})), ze = /* @__PURE__ */ v(((e, t) => {
	var n = _e(), { isArray: r, isObject: i, isString: a, isUndefined: o } = he(), { isList: s, isValue: c, isGraph: l, isSimpleGraph: u, isSubjectReference: d } = ge(), { expandIri: f, getContextValue: p, isKeyword: m, process: h, processingMode: g } = je(), { removeBase: _, prependBase: v } = xe(), { REGEX_KEYWORD: y, addValue: b, asArray: x, compareShortestLeast: S } = ve(), C = {};
	t.exports = C, C.compact = async ({ activeCtx: e, activeProperty: t = null, element: f, options: _ = {} }) => {
		if (r(f)) {
			let n = [];
			for (let r = 0; r < f.length; ++r) {
				let i = await C.compact({
					activeCtx: e,
					activeProperty: t,
					element: f[r],
					options: _
				});
				i !== null && n.push(i);
			}
			return _.compactArrays && n.length === 1 && (p(e, t, "@container") || []).length === 0 && (n = n[0]), n;
		}
		let v = p(e, t, "@context");
		if (o(v) || (e = await h({
			activeCtx: e,
			localCtx: v,
			propagate: !0,
			overrideProtected: !0,
			options: _
		})), i(f)) {
			if (_.link && "@id" in f && _.link.hasOwnProperty(f["@id"])) {
				let e = _.link[f["@id"]];
				for (let t = 0; t < e.length; ++t) if (e[t].expanded === f) return e[t].compacted;
			}
			if (c(f) || d(f)) {
				let n = C.compactValue({
					activeCtx: e,
					activeProperty: t,
					value: f,
					options: _
				});
				return _.link && d(f) && (_.link.hasOwnProperty(f["@id"]) || (_.link[f["@id"]] = []), _.link[f["@id"]].push({
					expanded: f,
					compacted: n
				})), n;
			}
			if (s(f) && (p(e, t, "@container") || []).includes("@list")) return C.compact({
				activeCtx: e,
				activeProperty: t,
				element: f["@list"],
				options: _
			});
			let v = t === "@reverse", y = {}, S = e;
			!c(f) && !d(f) && (e = e.revertToPreviousContext());
			let w = p(S, t, "@context");
			o(w) || (e = await h({
				activeCtx: e,
				localCtx: w,
				propagate: !0,
				overrideProtected: !0,
				options: _
			})), _.link && "@id" in f && (_.link.hasOwnProperty(f["@id"]) || (_.link[f["@id"]] = []), _.link[f["@id"]].push({
				expanded: f,
				compacted: y
			}));
			let ee = f["@type"] || [];
			ee.length > 1 && (ee = Array.from(ee).sort());
			let E = e;
			for (let t of ee) {
				let n = p(S, C.compactIri({
					activeCtx: E,
					iri: t,
					relativeTo: { vocab: !0 }
				}), "@context");
				o(n) || (e = await h({
					activeCtx: e,
					localCtx: n,
					options: _,
					propagate: !1
				}));
			}
			let D = Object.keys(f).sort();
			for (let o of D) {
				let d = f[o];
				if (o === "@id") {
					let t = x(d).map((t) => C.compactIri({
						activeCtx: e,
						iri: t,
						relativeTo: { vocab: !1 },
						base: _.base
					}));
					t.length === 1 && (t = t[0]);
					let n = C.compactIri({
						activeCtx: e,
						iri: "@id",
						relativeTo: { vocab: !0 }
					});
					y[n] = t;
					continue;
				}
				if (o === "@type") {
					let t = x(d).map((e) => C.compactIri({
						activeCtx: S,
						iri: e,
						relativeTo: { vocab: !0 }
					}));
					t.length === 1 && (t = t[0]);
					let n = C.compactIri({
						activeCtx: e,
						iri: "@type",
						relativeTo: { vocab: !0 }
					}), i = (p(e, n, "@container") || []).includes("@set") && g(e, 1.1) || r(t) && d.length === 0;
					b(y, n, t, { propertyIsArray: i });
					continue;
				}
				if (o === "@reverse") {
					let t = await C.compact({
						activeCtx: e,
						activeProperty: "@reverse",
						element: d,
						options: _
					});
					for (let n in t) if (e.mappings.has(n) && e.mappings.get(n).reverse) {
						let r = t[n];
						b(y, n, r, { propertyIsArray: (p(e, n, "@container") || []).includes("@set") || !_.compactArrays }), delete t[n];
					}
					Object.keys(t).length > 0 && b(y, C.compactIri({
						activeCtx: e,
						iri: o,
						relativeTo: { vocab: !0 }
					}), t);
					continue;
				}
				if (o === "@preserve") {
					let n = await C.compact({
						activeCtx: e,
						activeProperty: t,
						element: d,
						options: _
					});
					r(n) && n.length === 0 || b(y, o, n);
					continue;
				}
				if (o === "@index") {
					if ((p(e, t, "@container") || []).includes("@index")) continue;
					b(y, C.compactIri({
						activeCtx: e,
						iri: o,
						relativeTo: { vocab: !0 }
					}), d);
					continue;
				}
				if (o !== "@graph" && o !== "@list" && o !== "@included" && m(o)) {
					b(y, C.compactIri({
						activeCtx: e,
						iri: o,
						relativeTo: { vocab: !0 }
					}), d);
					continue;
				}
				if (!r(d)) throw new n("JSON-LD expansion error; expanded value must be an array.", "jsonld.SyntaxError");
				if (d.length === 0) {
					let t = C.compactIri({
						activeCtx: e,
						iri: o,
						value: d,
						relativeTo: { vocab: !0 },
						reverse: v
					}), n = e.mappings.has(t) ? e.mappings.get(t)["@nest"] : null, r = y;
					n && (T(e, n, _), i(y[n]) || (y[n] = {}), r = y[n]), b(r, t, d, { propertyIsArray: !0 });
				}
				for (let t of d) {
					let n = C.compactIri({
						activeCtx: e,
						iri: o,
						value: t,
						relativeTo: { vocab: !0 },
						reverse: v
					}), d = e.mappings.has(n) ? e.mappings.get(n)["@nest"] : null, f = y;
					d && (T(e, d, _), i(y[d]) || (y[d] = {}), f = y[d]);
					let m = p(e, n, "@container") || [], h = l(t), g = s(t), S;
					g ? S = t["@list"] : h && (S = t["@graph"]);
					let w = await C.compact({
						activeCtx: e,
						activeProperty: n,
						element: g || h ? S : t,
						options: _
					});
					if (g) if (r(w) || (w = [w]), !m.includes("@list")) w = { [C.compactIri({
						activeCtx: e,
						iri: "@list",
						relativeTo: { vocab: !0 }
					})]: w }, "@index" in t && (w[C.compactIri({
						activeCtx: e,
						iri: "@index",
						relativeTo: { vocab: !0 }
					})] = t["@index"]);
					else {
						b(f, n, w, {
							valueIsArray: !0,
							allowDuplicate: !0
						});
						continue;
					}
					if (h) if (m.includes("@graph") && (m.includes("@id") || m.includes("@index") && u(t))) {
						let r;
						f.hasOwnProperty(n) ? r = f[n] : f[n] = r = {};
						let i = (m.includes("@id") ? t["@id"] : t["@index"]) || C.compactIri({
							activeCtx: e,
							iri: "@none",
							relativeTo: { vocab: !0 }
						});
						b(r, i, w, { propertyIsArray: !_.compactArrays || m.includes("@set") });
					} else m.includes("@graph") && u(t) ? (r(w) && w.length > 1 && (w = { "@included": w }), b(f, n, w, { propertyIsArray: !_.compactArrays || m.includes("@set") })) : (r(w) && w.length === 1 && _.compactArrays && (w = w[0]), w = { [C.compactIri({
						activeCtx: e,
						iri: "@graph",
						relativeTo: { vocab: !0 }
					})]: w }, "@id" in t && (w[C.compactIri({
						activeCtx: e,
						iri: "@id",
						relativeTo: { vocab: !0 }
					})] = t["@id"]), "@index" in t && (w[C.compactIri({
						activeCtx: e,
						iri: "@index",
						relativeTo: { vocab: !0 }
					})] = t["@index"]), b(f, n, w, { propertyIsArray: !_.compactArrays || m.includes("@set") }));
					else if (m.includes("@language") || m.includes("@index") || m.includes("@id") || m.includes("@type")) {
						let r;
						f.hasOwnProperty(n) ? r = f[n] : f[n] = r = {};
						let i;
						if (m.includes("@language")) c(w) && (w = w["@value"]), i = t["@language"];
						else if (m.includes("@index")) {
							let r = p(e, n, "@index") || "@index", o = C.compactIri({
								activeCtx: e,
								iri: r,
								relativeTo: { vocab: !0 }
							});
							if (r === "@index") i = t["@index"], delete w[o];
							else {
								let e;
								if ([i, ...e] = x(w[r] || []), !a(i)) i = null;
								else switch (e.length) {
									case 0:
										delete w[r];
										break;
									case 1:
										w[r] = e[0];
										break;
									default:
										w[r] = e;
										break;
								}
							}
						} else if (m.includes("@id")) {
							let t = C.compactIri({
								activeCtx: e,
								iri: "@id",
								relativeTo: { vocab: !0 }
							});
							i = w[t], delete w[t];
						} else if (m.includes("@type")) {
							let r = C.compactIri({
								activeCtx: e,
								iri: "@type",
								relativeTo: { vocab: !0 }
							}), a;
							switch ([i, ...a] = x(w[r] || []), a.length) {
								case 0:
									delete w[r];
									break;
								case 1:
									w[r] = a[0];
									break;
								default:
									w[r] = a;
									break;
							}
							Object.keys(w).length === 1 && "@id" in t && (w = await C.compact({
								activeCtx: e,
								activeProperty: n,
								element: { "@id": t["@id"] },
								options: _
							}));
						}
						i ||= C.compactIri({
							activeCtx: e,
							iri: "@none",
							relativeTo: { vocab: !0 }
						}), b(r, i, w, { propertyIsArray: m.includes("@set") });
					} else {
						let e = !_.compactArrays || m.includes("@set") || m.includes("@list") || r(w) && w.length === 0 || o === "@list" || o === "@graph";
						b(f, n, w, { propertyIsArray: e });
					}
				}
			}
			return y;
		}
		return f;
	}, C.compactIri = ({ activeCtx: e, iri: t, value: r = null, relativeTo: a = { vocab: !1 }, reverse: o = !1, base: u = null }) => {
		if (t === null) return t;
		e.isPropertyTermScoped && e.previousContext && (e = e.previousContext);
		let d = e.getInverse();
		if (m(t) && t in d && "@none" in d[t] && "@type" in d[t]["@none"] && "@none" in d[t]["@none"]["@type"]) return d[t]["@none"]["@type"]["@none"];
		if (a.vocab && t in d) {
			let n = e["@language"] || "@none", a = [];
			i(r) && "@index" in r && !("@graph" in r) && a.push("@index", "@index@set"), i(r) && "@preserve" in r && (r = r["@preserve"][0]), l(r) ? ("@index" in r && a.push("@graph@index", "@graph@index@set", "@index", "@index@set"), "@id" in r && a.push("@graph@id", "@graph@id@set"), a.push("@graph", "@graph@set", "@set"), "@index" in r || a.push("@graph@index", "@graph@index@set", "@index", "@index@set"), "@id" in r || a.push("@graph@id", "@graph@id@set")) : i(r) && !c(r) && a.push("@id", "@id@set", "@type", "@set@type");
			let u = "@language", d = "@null";
			if (o) u = "@type", d = "@reverse", a.push("@set");
			else if (s(r)) {
				"@index" in r || a.push("@list");
				let e = r["@list"];
				if (e.length === 0) u = "@any", d = "@none";
				else {
					let t = e.length === 0 ? n : null, r = null;
					for (let n = 0; n < e.length; ++n) {
						let i = e[n], a = "@none", o = "@none";
						if (c(i) ? "@direction" in i ? a = `${(i["@language"] || "").toLowerCase()}_${i["@direction"]}` : "@language" in i ? a = i["@language"].toLowerCase() : "@type" in i ? o = i["@type"] : a = "@null" : o = "@id", t === null ? t = a : a !== t && c(i) && (t = "@none"), r === null ? r = o : o !== r && (r = "@none"), t === "@none" && r === "@none") break;
					}
					t ||= "@none", r ||= "@none", r === "@none" ? d = t : (u = "@type", d = r);
				}
			} else {
				if (c(r)) if ("@language" in r && !("@index" in r)) {
					a.push("@language", "@language@set"), d = r["@language"];
					let e = r["@direction"];
					e && (d = `${d}_${e}`);
				} else "@direction" in r && !("@index" in r) ? d = `_${r["@direction"]}` : "@type" in r && (u = "@type", d = r["@type"]);
				else u = "@type", d = "@id";
				a.push("@set");
			}
			a.push("@none"), i(r) && !("@index" in r) && a.push("@index", "@index@set"), c(r) && Object.keys(r).length === 1 && a.push("@language", "@language@set");
			let f = w(e, t, r, a, u, d);
			if (f !== null) return f;
		}
		if (a.vocab && "@vocab" in e) {
			let n = e["@vocab"];
			if (t.indexOf(n) === 0 && t !== n) {
				let r = t.substr(n.length);
				if (!e.mappings.has(r)) return r;
			}
		}
		let f = null, p = [], h = e.fastCurieMap, g = t.length - 1;
		for (let e = 0; e < g && t[e] in h; ++e) h = h[t[e]], "" in h && p.push(h[""][0]);
		for (let n = p.length - 1; n >= 0; --n) {
			let i = p[n], a = i.terms;
			for (let n of a) {
				let a = n + ":" + t.substr(i.iri.length);
				e.mappings.get(n)._prefix && (!e.mappings.has(a) || r === null && e.mappings.get(a)["@id"] === t) && (f === null || S(a, f) < 0) && (f = a);
			}
		}
		if (f !== null) return f;
		for (let [r, i] of e.mappings) if (i && i._prefix && t.startsWith(r + ":")) throw new n(`Absolute IRI "${t}" confused with prefix "${r}".`, "jsonld.SyntaxError", {
			code: "IRI confused with prefix",
			context: e
		});
		if (!a.vocab) if ("@base" in e) if (e["@base"]) {
			let n = _(v(u, e["@base"]), t);
			return y.test(n) ? `./${n}` : n;
		} else return t;
		else return _(u, t);
		return t;
	}, C.compactValue = ({ activeCtx: e, activeProperty: t, value: n, options: r }) => {
		if (c(n)) {
			let r = p(e, t, "@type"), i = p(e, t, "@language"), o = p(e, t, "@direction"), s = p(e, t, "@container") || [], c = "@index" in n && !s.includes("@index");
			if (!c && r !== "@none" && (n["@type"] === r || "@language" in n && n["@language"] === i && "@direction" in n && n["@direction"] === o || "@language" in n && n["@language"] === i || "@direction" in n && n["@direction"] === o)) return n["@value"];
			let l = Object.keys(n).length, u = l === 1 || l === 2 && "@index" in n && !c, d = "@language" in e, f = a(n["@value"]), m = e.mappings.has(t) && e.mappings.get(t)["@language"] === null;
			if (u && r !== "@none" && (!d || !f || m)) return n["@value"];
			let h = {};
			return c && (h[C.compactIri({
				activeCtx: e,
				iri: "@index",
				relativeTo: { vocab: !0 }
			})] = n["@index"]), "@type" in n ? h[C.compactIri({
				activeCtx: e,
				iri: "@type",
				relativeTo: { vocab: !0 }
			})] = C.compactIri({
				activeCtx: e,
				iri: n["@type"],
				relativeTo: { vocab: !0 }
			}) : "@language" in n && (h[C.compactIri({
				activeCtx: e,
				iri: "@language",
				relativeTo: { vocab: !0 }
			})] = n["@language"]), "@direction" in n && (h[C.compactIri({
				activeCtx: e,
				iri: "@direction",
				relativeTo: { vocab: !0 }
			})] = n["@direction"]), h[C.compactIri({
				activeCtx: e,
				iri: "@value",
				relativeTo: { vocab: !0 }
			})] = n["@value"], h;
		}
		let i = f(e, t, { vocab: !0 }, r), o = p(e, t, "@type"), s = C.compactIri({
			activeCtx: e,
			iri: n["@id"],
			relativeTo: { vocab: o === "@vocab" },
			base: r.base
		});
		return o === "@id" || o === "@vocab" || i === "@graph" ? s : { [C.compactIri({
			activeCtx: e,
			iri: "@id",
			relativeTo: { vocab: !0 }
		})]: s };
	};
	function w(e, t, n, r, a, o) {
		o === null && (o = "@null");
		let s = [];
		if ((o === "@id" || o === "@reverse") && i(n) && "@id" in n) {
			o === "@reverse" && s.push("@reverse");
			let t = C.compactIri({
				activeCtx: e,
				iri: n["@id"],
				relativeTo: { vocab: !0 }
			});
			e.mappings.has(t) && e.mappings.get(t) && e.mappings.get(t)["@id"] === n["@id"] ? s.push.apply(s, ["@vocab", "@id"]) : s.push.apply(s, ["@id", "@vocab"]);
		} else {
			s.push(o);
			let e = s.find((e) => e.includes("_"));
			e && s.push(e.replace(/^[^_]+_/, "_"));
		}
		s.push("@none");
		let c = e.inverse[t];
		for (let e of r) {
			if (!(e in c)) continue;
			let t = c[e][a];
			for (let e of s) if (e in t) return t[e];
		}
		return null;
	}
	function T(e, t, r) {
		if (f(e, t, { vocab: !0 }, r) !== "@nest") throw new n("JSON-LD compact error; nested property must have an @nest value resolving to @nest.", "jsonld.SyntaxError", { code: "invalid @nest value" });
	}
})), Be = /* @__PURE__ */ v(((e, t) => {
	t.exports = (e) => {
		class t {
			toString() {
				return "[object JsonLdProcessor]";
			}
		}
		return Object.defineProperty(t, "prototype", {
			writable: !1,
			enumerable: !1
		}), Object.defineProperty(t.prototype, "constructor", {
			writable: !0,
			enumerable: !1,
			configurable: !0,
			value: t
		}), t.compact = function(t, n) {
			return arguments.length < 2 ? Promise.reject(/* @__PURE__ */ TypeError("Could not compact, too few arguments.")) : e.compact(t, n);
		}, t.expand = function(t) {
			return arguments.length < 1 ? Promise.reject(/* @__PURE__ */ TypeError("Could not expand, too few arguments.")) : e.expand(t);
		}, t.flatten = function(t) {
			return arguments.length < 1 ? Promise.reject(/* @__PURE__ */ TypeError("Could not flatten, too few arguments.")) : e.flatten(t);
		}, t;
	};
})), Ve = /* @__PURE__ */ v(((e, t) => {
	var n = me(), r = Ce(), i = ve(), a = Oe(), o = i.IdentifierIssuer, s = _e(), c = Ee(), l = ke(), { expand: u } = Me(), { flatten: d } = Pe(), { fromRDF: f } = Fe(), { toRDF: p } = Le(), { frameMergedOrDefault: m, cleanupNull: h } = Re(), { isArray: g, isObject: _, isString: v } = he(), { isSubjectReference: y } = ge(), { expandIri: b, getInitialContext: x, process: S, processingMode: C } = je(), { compact: w, compactIri: T } = ze(), { createNodeMap: ee, createMergedNodeMap: E, mergeNodeMaps: D } = Ne(), { logEventHandler: te, logWarningEventHandler: O, safeEventHandler: k, setDefaultEventHandler: A, setupEventHandler: ne, strictEventHandler: j, unhandledEventHandler: re } = Ae(), M = function(e) {
		let t = {}, M = new c({ max: 100 });
		e.compact = async function(t, n, r) {
			if (arguments.length < 2) throw TypeError("Could not compact, too few arguments.");
			if (n === null) throw new s("The compaction context must not be null.", "jsonld.CompactError", { code: "invalid local context" });
			if (t === null) return null;
			r = N(r, {
				base: v(t) ? t : "",
				compactArrays: !0,
				compactToRelative: !0,
				graph: !1,
				skipExpansion: !1,
				link: !1,
				issuer: new o("_:b"),
				contextResolver: new a({ sharedCache: M })
			}), r.link && (r.skipExpansion = !0), r.compactToRelative || delete r.base;
			let c;
			c = r.skipExpansion ? t : await e.expand(t, r);
			let l = await e.processContext(x(r), n, r), u = await w({
				activeCtx: l,
				element: c,
				options: r
			});
			r.compactArrays && !r.graph && g(u) ? u.length === 1 ? u = u[0] : u.length === 0 && (u = {}) : r.graph && _(u) && (u = [u]), _(n) && "@context" in n && (n = n["@context"]), n = i.clone(n), g(n) || (n = [n]);
			let d = n;
			n = [];
			for (let e = 0; e < d.length; ++e) (!_(d[e]) || Object.keys(d[e]).length > 0) && n.push(d[e]);
			let f = n.length > 0;
			if (n.length === 1 && (n = n[0]), g(u)) {
				let e = T({
					activeCtx: l,
					iri: "@graph",
					relativeTo: { vocab: !0 }
				}), t = u;
				u = {}, f && (u["@context"] = n), u[e] = t;
			} else if (_(u) && f) {
				let e = u;
				u = { "@context": n };
				for (let t in e) u[t] = e[t];
			}
			return u;
		}, e.expand = async function(t, n) {
			if (arguments.length < 1) throw TypeError("Could not expand, too few arguments.");
			n = N(n, {
				keepFreeFloatingNodes: !1,
				contextResolver: new a({ sharedCache: M })
			});
			let r = {}, o = [];
			if ("expandContext" in n) {
				let e = i.clone(n.expandContext);
				_(e) && "@context" in e ? r.expandContext = e : r.expandContext = { "@context": e }, o.push(r.expandContext);
			}
			let s;
			if (!v(t)) r.input = i.clone(t);
			else {
				let i = await e.get(t, n);
				s = i.documentUrl, r.input = i.document, i.contextUrl && (r.remoteContext = { "@context": i.contextUrl }, o.push(r.remoteContext));
			}
			"base" in n || (n.base = s || "");
			let c = x(n);
			for (let e of o) c = await S({
				activeCtx: c,
				localCtx: e,
				options: n
			});
			let l = await u({
				activeCtx: c,
				element: r.input,
				options: n
			});
			return _(l) && "@graph" in l && Object.keys(l).length === 1 ? l = l["@graph"] : l === null && (l = []), g(l) || (l = [l]), l;
		}, e.flatten = async function(t, n, r) {
			if (arguments.length < 1) return /* @__PURE__ */ TypeError("Could not flatten, too few arguments.");
			typeof n == "function" ? n = null : n ||= null, r = N(r, {
				base: v(t) ? t : "",
				contextResolver: new a({ sharedCache: M })
			});
			let i = d(await e.expand(t, r));
			return n === null ? i : (r.graph = !0, r.skipExpansion = !0, await e.compact(i, n, r));
		}, e.frame = async function(t, n, r) {
			if (arguments.length < 2) throw TypeError("Could not frame, too few arguments.");
			if (r = N(r, {
				base: v(t) ? t : "",
				embed: "@once",
				explicit: !1,
				requireAll: !1,
				omitDefault: !1,
				bnodesToClear: [],
				contextResolver: new a({ sharedCache: M })
			}), v(n)) {
				let t = await e.get(n, r);
				if (n = t.document, t.contextUrl) {
					let e = n["@context"];
					e ? g(e) ? e.push(t.contextUrl) : e = [e, t.contextUrl] : e = t.contextUrl, n["@context"] = e;
				}
			}
			let i = n && n["@context"] || {}, o = await e.processContext(x(r), i, r);
			r.hasOwnProperty("omitGraph") || (r.omitGraph = C(o, 1.1)), r.hasOwnProperty("pruneBlankNodeIdentifiers") || (r.pruneBlankNodeIdentifiers = C(o, 1.1));
			let s = await e.expand(t, r), c = { ...r };
			c.isFrame = !0, c.keepFreeFloatingNodes = !0;
			let l = await e.expand(n, c);
			c.merged = !Object.keys(n).map((e) => b(o, e, { vocab: !0 })).includes("@graph"), c.is11 = C(o, 1.1);
			let u = m(s, l, c);
			c.graph = !r.omitGraph, c.skipExpansion = !0, c.link = {}, c.framing = !0;
			let d = await e.compact(u, i, c);
			return c.link = {}, d = h(d, c), d;
		}, e.link = async function(t, n, r) {
			let i = {};
			return n && (i["@context"] = n), i["@embed"] = "@link", e.frame(t, i, r);
		}, e.normalize = e.canonize = async function(t, r) {
			if (arguments.length < 1) throw TypeError("Could not canonize, too few arguments.");
			r = N(r, {
				skipExpansion: !1,
				safe: !0,
				contextResolver: new a({ sharedCache: M })
			});
			let i = Object.assign({}, { algorithm: "RDFC-1.0" }, r.canonizeOptions || null);
			if ("inputFormat" in r) {
				if (r.inputFormat !== "application/n-quads") throw new s("Unknown canonicalization input format.", "jsonld.CanonizeError");
				let e = l.parse(t);
				return n.canonize(e, i);
			}
			let o = { ...r };
			delete o.format, delete o.canonizeOptions, o.produceGeneralizedRdf = !1;
			let c = await e.toRDF(t, o);
			return n.canonize(c, i);
		}, e.fromRDF = async function(e, n) {
			if (arguments.length < 1) throw TypeError("Could not convert from RDF, too few arguments.");
			n = N(n, { format: v(e) ? "application/n-quads" : void 0 });
			let { format: r } = n, { rdfParser: i } = n;
			if (r) {
				if (i ||= t[r], !i) throw new s("Unknown input format.", "jsonld.UnknownFormat", { format: r });
			} else i = () => e;
			return f(await i(e), n);
		}, e.toRDF = async function(t, n) {
			if (arguments.length < 1) throw TypeError("Could not convert to RDF, too few arguments.");
			n = N(n, {
				skipExpansion: !1,
				contextResolver: new a({ sharedCache: M })
			});
			let r;
			r = n.skipExpansion ? t : await e.expand(t, n);
			let i = p(r, n);
			if (n.format) {
				if (n.format === "application/n-quads") return l.serialize(i);
				throw new s("Unknown output format.", "jsonld.UnknownFormat", { format: n.format });
			}
			return i;
		}, e.createNodeMap = async function(t, n) {
			if (arguments.length < 1) throw TypeError("Could not create node map, too few arguments.");
			return n = N(n, {
				base: v(t) ? t : "",
				contextResolver: new a({ sharedCache: M })
			}), E(await e.expand(t, n), n);
		}, e.merge = async function(t, n, r) {
			if (arguments.length < 1) throw TypeError("Could not merge, too few arguments.");
			if (!g(t)) throw TypeError("Could not merge, \"docs\" must be an array.");
			typeof n == "function" ? n = null : n ||= null, r = N(r, { contextResolver: new a({ sharedCache: M }) });
			let s = await Promise.all(t.map((t) => {
				let n = { ...r };
				return e.expand(t, n);
			})), c = !0;
			"mergeNodes" in r && (c = r.mergeNodes);
			let l = r.issuer || new o("_:b"), u = { "@default": {} };
			for (let e = 0; e < s.length; ++e) {
				let t = i.relabelBlankNodes(s[e], { issuer: new o("_:b" + e + "-") }), n = c || e === 0 ? u : { "@default": {} };
				if (ee(t, n, "@default", l), n !== u) for (let e in n) {
					let t = n[e];
					if (!(e in u)) {
						u[e] = t;
						continue;
					}
					let r = u[e];
					for (let e in t) e in r || (r[e] = t[e]);
				}
			}
			let d = D(u), f = [], p = Object.keys(d).sort();
			for (let e = 0; e < p.length; ++e) {
				let t = d[p[e]];
				y(t) || f.push(t);
			}
			return n === null ? f : (r.graph = !0, r.skipExpansion = !0, await e.compact(f, n, r));
		}, Object.defineProperty(e, "documentLoader", {
			get: () => e._documentLoader,
			set: (t) => e._documentLoader = t
		}), e.documentLoader = async (e) => {
			throw new s("Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.", "jsonld.LoadDocumentError", {
				code: "loading document failed",
				url: e
			});
		}, e.get = async function(t, n) {
			let r;
			r = typeof n.documentLoader == "function" ? n.documentLoader : e.documentLoader;
			let i = await r(t);
			try {
				if (!i.document) throw new s("No remote document found at the given URL.", "jsonld.NullRemoteDocument");
				v(i.document) && (i.document = JSON.parse(i.document));
			} catch (e) {
				throw new s("Could not retrieve a JSON-LD document from the URL.", "jsonld.LoadDocumentError", {
					code: "loading document failed",
					cause: e,
					remoteDoc: i
				});
			}
			return i;
		}, e.processContext = async function(e, t, n) {
			return n = N(n, {
				base: "",
				contextResolver: new a({ sharedCache: M })
			}), t === null ? x(n) : (t = i.clone(t), _(t) && "@context" in t || (t = { "@context": t }), S({
				activeCtx: e,
				localCtx: t,
				options: n
			}));
		}, e.getContextValue = je().getContextValue, e.documentLoaders = {}, e.useDocumentLoader = function(t) {
			if (!(t in e.documentLoaders)) throw new s("Unknown document loader type: \"" + t + "\"", "jsonld.UnknownDocumentLoader", { type: t });
			e.documentLoader = e.documentLoaders[t].apply(e, Array.prototype.slice.call(arguments, 1));
		}, e.registerRDFParser = function(e, n) {
			t[e] = n;
		}, e.unregisterRDFParser = function(e) {
			delete t[e];
		}, e.registerRDFParser("application/n-quads", l.parse), e.url = xe(), e.logEventHandler = te, e.logWarningEventHandler = O, e.safeEventHandler = k, e.setDefaultEventHandler = A, e.strictEventHandler = j, e.unhandledEventHandler = re, e.util = i, Object.assign(e, i), e.promises = e, e.RequestQueue = be(), e.JsonLdProcessor = Be()(e), r.setupGlobals(e), r.setupDocumentLoaders(e);
		function N(t, { documentLoader: n = e.documentLoader, ...r }) {
			if (t && "compactionMap" in t) throw new s("\"compactionMap\" not supported.", "jsonld.OptionsError");
			if (t && "expansionMap" in t) throw new s("\"expansionMap\" not supported.", "jsonld.OptionsError");
			return Object.assign({}, { documentLoader: n }, r, t, { eventHandler: ne({ options: t }) });
		}
		return e;
	}, N = function() {
		return M(function() {
			return N();
		});
	};
	M(N), t.exports = N;
}));
r(), C();
var He = x(), Ue = /* @__PURE__ */ f(Ve(), 1), We = globalThis, Ge = We.ShadowRoot && (We.ShadyCSS === void 0 || We.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ke = Symbol(), qe = /* @__PURE__ */ new WeakMap(), Je = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== Ke) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (Ge && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = qe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && qe.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, Ye = (e) => new Je(typeof e == "string" ? e : e + "", void 0, Ke), Xe = (e, ...t) => new Je(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, Ke), Ze = (e, t) => {
	if (Ge) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = We.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, Qe = Ge ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return Ye(t);
})(e) : e, { is: $e, defineProperty: et, getOwnPropertyDescriptor: tt, getOwnPropertyNames: nt, getOwnPropertySymbols: rt, getPrototypeOf: it } = Object, at = globalThis, ot = at.trustedTypes, st = ot ? ot.emptyScript : "", ct = at.reactiveElementPolyfillSupport, lt = (e, t) => e, ut = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? st : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, dt = (e, t) => !$e(e, t), ft = {
	attribute: !0,
	type: String,
	converter: ut,
	reflect: !1,
	useDefault: !1,
	hasChanged: dt
};
Symbol.metadata ??= Symbol("metadata"), at.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var pt = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = ft) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && et(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = tt(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? ft;
	}
	static _$Ei() {
		if (this.hasOwnProperty(lt("elementProperties"))) return;
		let e = it(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(lt("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(lt("properties"))) {
			let e = this.properties, t = [...nt(e), ...rt(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(Qe(e));
		} else e !== void 0 && t.push(Qe(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return Ze(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? ut : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? ut : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? dt)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
pt.elementStyles = [], pt.shadowRootOptions = { mode: "open" }, pt[lt("elementProperties")] = /* @__PURE__ */ new Map(), pt[lt("finalized")] = /* @__PURE__ */ new Map(), ct?.({ ReactiveElement: pt }), (at.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
var mt = globalThis, ht = (e) => e, gt = mt.trustedTypes, _t = gt ? gt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, vt = "$lit$", yt = `lit$${Math.random().toFixed(9).slice(2)}$`, bt = "?" + yt, xt = `<${bt}>`, St = document, Ct = () => St.createComment(""), wt = (e) => e === null || typeof e != "object" && typeof e != "function", Tt = Array.isArray, Et = (e) => Tt(e) || typeof e?.[Symbol.iterator] == "function", Dt = "[ 	\n\f\r]", Ot = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, kt = /-->/g, At = />/g, jt = RegExp(`>|${Dt}(?:([^\\s"'>=/]+)(${Dt}*=${Dt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), Mt = /'/g, Nt = /"/g, Pt = /^(?:script|style|textarea|title)$/i, P = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), Ft = Symbol.for("lit-noChange"), F = Symbol.for("lit-nothing"), It = /* @__PURE__ */ new WeakMap(), Lt = St.createTreeWalker(St, 129);
function Rt(e, t) {
	if (!Tt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return _t === void 0 ? t : _t.createHTML(t);
}
var zt = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = Ot;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === Ot ? c[1] === "!--" ? o = kt : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = jt) : (Pt.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = jt) : o = At : o === jt ? c[0] === ">" ? (o = i ?? Ot, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? jt : c[3] === "\"" ? Nt : Mt) : o === Nt || o === Mt ? o = jt : o === kt || o === At ? o = Ot : (o = jt, i = void 0);
		let d = o === jt && e[t + 1].startsWith("/>") ? " " : "";
		a += o === Ot ? n + xt : l >= 0 ? (r.push(s), n.slice(0, l) + vt + n.slice(l) + yt + d) : n + yt + (l === -2 ? t : d);
	}
	return [Rt(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Bt = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = zt(t, n);
		if (this.el = e.createElement(l, r), Lt.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = Lt.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(vt)) {
					let t = u[o++], n = i.getAttribute(e).split(yt), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Gt : r[1] === "?" ? Kt : r[1] === "@" ? qt : Wt
					}), i.removeAttribute(e);
				} else e.startsWith(yt) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Pt.test(i.tagName)) {
					let e = i.textContent.split(yt), t = e.length - 1;
					if (t > 0) {
						i.textContent = gt ? gt.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], Ct()), Lt.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], Ct());
					}
				}
			} else if (i.nodeType === 8) if (i.data === bt) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(yt, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += yt.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = St.createElement("template");
		return n.innerHTML = e, n;
	}
};
function Vt(e, t, n = e, r) {
	if (t === Ft) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = wt(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = Vt(e, i._$AS(e, t.values), i, r)), t;
}
var Ht = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? St).importNode(t, !0);
		Lt.currentNode = r;
		let i = Lt.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Ut(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Jt(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Lt.nextNode(), a++);
		}
		return Lt.currentNode = St, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Ut = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = F, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = Vt(this, e, t), wt(e) ? e === F || e == null || e === "" ? (this._$AH !== F && this._$AR(), this._$AH = F) : e !== this._$AH && e !== Ft && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? Et(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== F && wt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(St.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Bt.createElement(Rt(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Ht(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = It.get(e.strings);
		return t === void 0 && It.set(e.strings, t = new Bt(e)), t;
	}
	k(t) {
		Tt(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(Ct()), this.O(Ct()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ht(e).nextSibling;
			ht(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Wt = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = F, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = F;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = Vt(this, e, t, 0), a = !wt(e) || e !== this._$AH && e !== Ft, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = Vt(this, r[n + o], t, o), s === Ft && (s = this._$AH[o]), a ||= !wt(s) || s !== this._$AH[o], s === F ? e = F : e !== F && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === F ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Gt = class extends Wt {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === F ? void 0 : e;
	}
}, Kt = class extends Wt {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== F);
	}
}, qt = class extends Wt {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = Vt(this, e, t, 0) ?? F) === Ft) return;
		let n = this._$AH, r = e === F && n !== F || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== F && (n === F || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Jt = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		Vt(this, e);
	}
}, Yt = mt.litHtmlPolyfillSupport;
Yt?.(Bt, Ut), (mt.litHtmlVersions ??= []).push("3.3.3");
var Xt = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Ut(t.insertBefore(Ct(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Zt = globalThis, Qt = class extends pt {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Xt(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return Ft;
	}
};
Qt._$litElement$ = !0, Qt.finalized = !0, Zt.litElementHydrateSupport?.({ LitElement: Qt });
var $t = Zt.litElementPolyfillSupport;
$t?.({ LitElement: Qt }), (Zt.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region node_modules/@lit/reactive-element/decorators/custom-element.js
var en = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer(() => {
		customElements.define(e, t);
	});
}, tn = {
	attribute: !0,
	type: String,
	converter: ut,
	reflect: !1,
	hasChanged: dt
}, nn = (e = tn, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function I(e) {
	return (t, n) => typeof n == "object" ? nn(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
function rn(e) {
	return I({
		...e,
		state: !0,
		attribute: !1
	});
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/base.js
var an = (e, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, n), n);
//#endregion
//#region node_modules/@lit/reactive-element/decorators/query.js
function L(e, t) {
	return (n, r, i) => {
		let a = (t) => t.renderRoot?.querySelector(e) ?? null;
		if (t) {
			let { get: e, set: t } = typeof r == "object" ? n : i ?? (() => {
				let e = Symbol();
				return {
					get() {
						return this[e];
					},
					set(t) {
						this[e] = t;
					}
				};
			})();
			return an(n, r, { get() {
				let n = e.call(this);
				return n === void 0 && (n = a(this), (n !== null || this.hasUpdated) && t.call(this, n)), n;
			} });
		}
		return an(n, r, { get() {
			return a(this);
		} });
	};
}
//#endregion
//#region node_modules/@ro-kit/ui-widgets/dist/index.js
var on = (e) => {
	throw TypeError(e);
}, sn = (e, t, n) => t.has(e) || on("Cannot " + n), cn = (e, t, n) => (sn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ln = (e, t, n) => t.has(e) ? on("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), un = (e, t, n, r) => (sn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), dn = Object.defineProperty, fn = (e, t, n, r) => {
	for (var i = void 0, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = o(t, n, i) || i);
	return i && dn(t, n, i), i;
}, pn = class extends Qt {
	constructor() {
		super(...arguments), this.dense = !1;
	}
};
pn.shadowRootOptions = {
	...Qt.shadowRootOptions,
	delegatesFocus: !0
}, pn.styles = [Xe`
    :host {
        --rokit-primary-color-inner: var(--rokit-primary-color, #008877);
        --rokit-primary-color-transparent-inner: color-mix(in srgb, var(--rokit-primary-color-inner) 40%, transparent);
        --rokit-error-color-inner: var(--rokit-error-color, #F03333);
        --rokit-background-color-inner: var(--rokit-background-color, #FFF);
        --rokit-light-background-color-inner: var(--rokit-light-background-color, color-mix(in srgb, var(--rokit-background-color-inner) 97%, currentColor));
        --rokit-light-background-darker-color-inner: var(--rokit-light-background-darker-color, color-mix(in srgb, var(--rokit-light-background-color-inner) 80%, currentColor));
        --rokit-shadow-color-inner: var(--rokit-shadow-color, color-mix(in srgb, currentColor 40%, transparent));
        --rokit-list-indent-inner: var(--rokit-list-indent, 1em);
        --rokit-list-max-height-inner: var(--rokit-list-max-height, 300);
        --rokit-caret-size-inner: var(--rokit-caret-size, 0.5em);
        --rokit-transition-duration-inner: var(--rokit-transition-duration, 0.2s);
        display: inline-flex;
        font-size: 16px;
        position: relative;
    }
    :host(.loading)::part(loader):before {
        content: '';
        width: 0.7em;
        height: 0.7em;
        border: 0.15em solid;
        border-bottom-color: transparent;
        border-radius: 50%;
        animation: rotation-animation 0.8s linear infinite;
    }
    :host([dense]) { font-size: 14px; }
    @keyframes rotation-animation {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    `];
var mn = pn;
fn([I({
	type: Boolean,
	reflect: !0
})], mn.prototype, "dense");
var hn, gn = class extends mn {
	constructor() {
		super(), ln(this, hn), this.value = "", this.clearable = !1, this.required = !1, this.disabled = !1, un(this, hn, this.attachInternals());
	}
	checkValidity() {
		return cn(this, hn).checkValidity();
	}
	reportValidity() {
		let e = cn(this, hn).reportValidity();
		return this.classList.toggle("invalid", !e), e;
	}
	get validity() {
		return cn(this, hn).validity;
	}
	get validationMessage() {
		return cn(this, hn).validationMessage;
	}
	setCustomValidity(e, t) {
		e ? cn(this, hn).setValidity({ customError: !0 }, e, t) : cn(this, hn).setValidity({}), this.classList.toggle("invalid", !cn(this, hn).validity.valid);
	}
	updateValidity(e, t, n) {
		cn(this, hn).setValidity(e, t, n), this.classList.toggle("invalid", !cn(this, hn).validity.valid);
	}
	setFormValue(e, t) {
		cn(this, hn).setFormValue(e, t);
	}
};
hn = /* @__PURE__ */ new WeakMap(), gn.formAssociated = !0, gn.styles = [...mn.styles, Xe`
    :host { align-items: center; padding: 6px 8px; border-bottom: 2px solid var(--rokit-light-background-darker-color-inner); box-sizing: border-box; }
    :host(:focus) { border-color: var(--rokit-primary-color-inner); }
    :host(.invalid) { border-color: var(--rokit-error-color-inner); }
    `];
var _n = gn;
fn([I()], _n.prototype, "name"), fn([I()], _n.prototype, "value"), fn([I({ type: Boolean })], _n.prototype, "clearable"), fn([I({
	type: Boolean,
	reflect: !0
})], _n.prototype, "required"), fn([I({
	type: Boolean,
	reflect: !0
})], _n.prototype, "disabled"), fn([I()], _n.prototype, "label"), fn([I()], _n.prototype, "placeholder");
function vn(e) {
	let t = e.trim();
	if (t.endsWith("ms")) {
		let e = Number(t.slice(0, -2));
		return Number.isFinite(e) ? e : 0;
	}
	if (t.endsWith("s")) {
		let e = Number(t.slice(0, -1));
		return Number.isFinite(e) ? e * 1e3 : 0;
	}
	return 0;
}
var yn = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, xn = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? bn(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && yn(t, n, i), i;
}, Sn = class extends mn {
	constructor() {
		super(...arguments), this.icon = !1, this.disabled = !1, this.href = "";
	}
	renderContent() {
		return this.classList.contains("clear") ? P`<span part="icon clear-icon" class="icon clear-icon" aria-hidden="true"></span>` : this.classList.contains("caret") ? P`<span part="icon caret-icon" class="icon caret-icon" aria-hidden="true"></span>` : P`<slot></slot>`;
	}
	render() {
		return this.href ? P`<a
                part="button loader"
                class="button"
                href="${this.disabled ? F : this.href}"
                aria-disabled="${this.disabled ? "true" : "false"}"
                tabindex="${this.disabled ? "-1" : "0"}"
                @click="${(e) => {
			this.disabled && (e.preventDefault(), e.stopPropagation());
		}}"
            >${this.renderContent()}</a>` : P`<button part="button loader" class="button" type="button" ?disabled="${this.disabled}">${this.renderContent()}</button>`;
	}
};
Sn.styles = [...mn.styles, Xe`
    :host { display: inline-flex; align-items: center; }
    :host([disabled]) { pointer-events: none; opacity: 0.5; }
    :host([rounded]) .button { border-radius: 200px; }
    :host([primary]) .button { color: white; background-color: var(--rokit-primary-color-inner); border-color: var(--rokit-primary-color-transparent-inner); }
    :host([primary][text]) .button { color: var(--rokit-primary-color-inner); }
    :host([primary]:not([text])) .button:hover { filter: brightness(115%); }
    :host([text]) .button { background-color: inherit; border-color: transparent; }
    :host([icon]) .button {
        width: 2em;
        height: 2em;
        padding: 0;
        line-height: 1;
        border-radius: 50%;
        border-color: transparent;
        background-color: inherit;
    }
    :host([icon]) .button:hover, :host([text]) .button:hover { background-color: transparent; backdrop-filter: invert(20%) }
    .icon {
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1em;
        height: 1em;
        line-height: 0;
        vertical-align: middle;
        position: relative;
        top: var(--rokit-button-icon-offset-y, 0);
    }
    .clear-icon {
        position: relative;
        width: 0.9em;
        height: 0.9em;
    }
    .clear-icon:before,
    .clear-icon:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 2px;
        border-radius: 999px;
        background-color: currentColor;
    }
    .clear-icon:before { transform: translate(-50%, -50%) rotate(45deg); }
    .clear-icon:after { transform: translate(-50%, -50%) rotate(-45deg); }
    .caret-icon {
        display: block;
        width: var(--rokit-caret-size-inner);
        height: var(--rokit-caret-size-inner);
        box-sizing: border-box;
        border-color: currentColor;
        border-style: none solid solid none;
        border-width: calc(0.2 * var(--rokit-caret-size-inner));
        transform: translate(0, -0.15em) rotate(45deg);
        transition: transform var(--rokit-transition-duration-inner) ease-out;
    }
    :host(.caret.down) .caret-icon { transform: translate(0, 0.15em) rotate(225deg); }
    :host(.caret.right) .caret-icon { transform: translate(-0.15em, 0) rotate(-45deg); }
    .button {
        display: inline-flex;
        flex-grow: 1;
        gap: 0.5em;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        text-decoration: none;
        appearance: none;
        -webkit-appearance: none;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        margin: 0;
        line-height: 1.2em;
        font-family: inherit;
        font-size: inherit;
        font-weight: 500;
        color: inherit;
        padding: 0.4em 0.6em;
        background-color: var(--rokit-light-background-color-inner);
        border: 1px solid var(--rokit-light-background-darker-color-inner);
        border-radius: 3px;
    }
    .button:hover { filter: brightness(102%); }
    `], xn([I({
	type: Boolean,
	reflect: !0
})], Sn.prototype, "icon", 2), xn([I({
	type: Boolean,
	reflect: !0
})], Sn.prototype, "disabled", 2), xn([I()], Sn.prototype, "href", 2), Sn = xn([en("rokit-button")], Sn);
var Cn = Object.defineProperty, wn = Object.getOwnPropertyDescriptor, Tn = (e) => {
	throw TypeError(e);
}, En = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? wn(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && Cn(t, n, i), i;
}, Dn = (e, t, n) => t.has(e) || Tn("Cannot " + n), On = (e, t, n) => (Dn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), kn = (e, t, n) => t.has(e) ? Tn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), An = (e, t, n, r) => (Dn(e, t, "write to private field"), t.set(e, n), n), jn = (e, t, n) => (Dn(e, t, "access private method"), n), Mn, Nn, Pn, Fn, In, Ln, Rn, R = class extends mn {
	constructor() {
		super(...arguments), kn(this, Fn), this.open = !1, this.disabled = !1, this.headerInactive = !1, this.transitioning = !1, this.closedBeforeTransition = !1, kn(this, Mn), kn(this, Nn, new MutationObserver(() => this.updateContentHeight())), kn(this, Pn, new IntersectionObserver((e) => {
			e.length && e[0].isIntersecting && this.updateContentHeight();
		})), this.onMouseDown = (() => {
			this.closedBeforeTransition = !this.open && !this.transitioning;
		}).bind(this), this.onClickToggles = (() => {
			this.toggle(this.closedBeforeTransition, !0);
		}).bind(this), this.onClickOpens = (() => {
			this.toggle(!0, !0);
		}).bind(this), this.onHeaderKeyDown = ((e) => {
			this.disabled || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.headerInactive ? this.toggle(!0, !0) : this.toggle(!this.open, !0));
		}).bind(this), this.onToggleClick = ((e) => {
			e.stopPropagation(), this.onClickToggles();
		}).bind(this), this.onToggleKeyDown = ((e) => {
			this.disabled || (e.key === " " || e.key === "Enter") && (e.preventDefault(), e.stopPropagation(), this.toggle(!this.open, !0));
		}).bind(this);
	}
	firstUpdated() {
		this.transitionDuration = vn(getComputedStyle(this).getPropertyValue("--rokit-transition-duration-inner")), On(this, Pn).observe(this), jn(this, Fn, Ln).call(this), jn(this, Fn, Rn).call(this);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), On(this, Nn).disconnect(), On(this, Pn).disconnect(), jn(this, Fn, In).call(this), On(this, Mn) !== void 0 && clearTimeout(On(this, Mn));
	}
	updated(e) {
		e.has("transitioning") && this.classList.toggle("transitioning", this.transitioning), (e.has("disabled") || e.has("headerInactive")) && (this.toggleButton.disabled = this.disabled, jn(this, Fn, Ln).call(this)), (e.has("disabled") || e.has("headerInactive") || e.has("open")) && jn(this, Fn, Rn).call(this), e.has("open") && !this.transitioning && !this.disabled && this.toggle(this.open);
	}
	updateContentHeight() {
		setTimeout(() => {
			this.content.style.maxHeight = (this.maxHeight === void 0 ? this.content.scrollHeight : Math.min(this.maxHeight, this.content.scrollHeight)) + "px", this.classList.toggle("has-content", this.content.style.maxHeight !== "0px");
		});
	}
	onSlotChange() {
		let e = this.shadowRoot.querySelector("#content > slot").assignedElements({ flatten: !0 });
		On(this, Nn).disconnect();
		for (let t of e) On(this, Nn).observe(t, {
			subtree: !0,
			childList: !0,
			characterData: !0,
			attributes: !0
		});
		this.updateContentHeight();
	}
	toggle(e = !this.open, t = !1) {
		this.disabled || (this.transitioning = this.open !== e, this.open = e, this.toggleButton.classList.toggle("down", e), On(this, Mn) !== void 0 && clearTimeout(On(this, Mn)), An(this, Mn, window.setTimeout(() => {
			this.transitioning = !1, this.open && t && this.content.scrollIntoView({ block: "nearest" });
		}, this.transitionDuration)));
	}
	render() {
		return P`
            <header part="header">
                <slot name="prefix" part="prefix"></slot>
                <span class="label"><slot name="label" part="label">${this.label}</slot></span>
                <slot name="pre-suffix" part="suffix"></slot>
                <rokit-button id="toggle" part="toggle" class="caret" icon ?dense="${this.dense}" title="${this.open ? "Collapse" : "Expand"}"></rokit-button>
                <slot name="suffix" part="suffix loader"></slot>
            </header>
            <div id="content" part="content" ?hidden="${!this.open && !this.transitioning}">
                <slot @slotchange=${this.onSlotChange}></slot>
            </div>
        `;
	}
};
Mn = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakSet(), In = function() {
	this.header.removeEventListener("mousedown", this.onMouseDown), this.header.removeEventListener("click", this.onClickToggles), this.header.removeEventListener("click", this.onClickOpens), this.header.removeEventListener("keydown", this.onHeaderKeyDown), this.toggleButton.removeEventListener("mousedown", this.onMouseDown), this.toggleButton.removeEventListener("click", this.onToggleClick), this.toggleButton.removeEventListener("keydown", this.onToggleKeyDown);
}, Ln = function() {
	if (jn(this, Fn, In).call(this), !this.disabled) {
		if (this.headerInactive) {
			this.toggleButton.addEventListener("mousedown", this.onMouseDown), this.toggleButton.addEventListener("click", this.onToggleClick), this.toggleButton.addEventListener("keydown", this.onToggleKeyDown), this.header.addEventListener("click", this.onClickOpens), this.header.addEventListener("keydown", this.onHeaderKeyDown);
			return;
		}
		this.header.addEventListener("mousedown", this.onMouseDown), this.header.addEventListener("click", this.onClickToggles), this.header.addEventListener("keydown", this.onHeaderKeyDown);
	}
}, Rn = function() {
	this.header.tabIndex = this.disabled ? -1 : 0, this.header.setAttribute("role", (this.headerInactive, "button")), this.header.setAttribute("aria-disabled", String(this.disabled)), this.header.setAttribute("aria-expanded", String(this.open)), this.header.setAttribute("aria-controls", "content");
}, R.styles = [...mn.styles, Xe`
        :host { display: flex; flex-direction: column; align-items: stretch; border-bottom: 2px solid var(--rokit-light-background-darker-color-inner); }
        :host header { cursor: pointer; }
        :host([dense]) header { padding: 2px 4px; }
        :host([maxheight]) #content { overflow:auto }
        :host(:not([open])) #content { max-height: 0 !important; }
        :host(:not([open])) #content, :host(.transitioning) #content { overflow: hidden !important; }
        :host([open]) #content, :host(.transitioning) #content { padding-top: 4px; }
        header { display: flex; align-items: center; padding: 6px 8px; background-color: var(--rokit-light-background-color-inner); user-select: none; }
        .label { flex-grow: 1; overflow: hidden; }
        #content { display: flex; transition: max-height var(--rokit-transition-duration-inner) ease-in-out; position: relative; scrollbar-width: thin; }
        #toggle { margin-left: 3px; }
    `], En([I({
	type: Boolean,
	reflect: !0
})], R.prototype, "open", 2), En([I()], R.prototype, "label", 2), En([I({ reflect: !0 })], R.prototype, "maxHeight", 2), En([I({ type: Boolean })], R.prototype, "disabled", 2), En([I({ type: Boolean })], R.prototype, "headerInactive", 2), En([L("#content")], R.prototype, "content", 2), En([L("#toggle")], R.prototype, "toggleButton", 2), En([L("header")], R.prototype, "header", 2), En([rn()], R.prototype, "transitioning", 2), R = En([en("rokit-collapsible")], R);
var zn = Object.defineProperty, Bn = Object.getOwnPropertyDescriptor, Vn = (e) => {
	throw TypeError(e);
}, Hn = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? Bn(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && zn(t, n, i), i;
}, Un = (e, t, n) => t.has(e) || Vn("Cannot " + n), Wn = (e, t, n) => (Un(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Gn = (e, t, n) => t.has(e) ? Vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Kn = (e, t, n, r) => (Un(e, t, "write to private field"), t.set(e, n), n), qn, Jn, Yn, Xn, Zn, Qn, $n, er, z = class extends _n {
	constructor() {
		super(), this.type = "text", this.readonly = !1, this.sticky = !1, this.minWidth = 80, this.autoGrowLabelWidth = !1, Gn(this, qn, ""), Gn(this, Jn, !0), Gn(this, Yn), Gn(this, Xn, (e) => {
			e.code === "Escape" && this.blur();
		}), Gn(this, Zn, () => {
			this.classList.add("has-focus");
		}), Gn(this, Qn, () => {
			this.inputElement && (this.inputElement.scrollLeft = 0), this.classList.remove("has-focus");
		}), Gn(this, $n, () => {
			this.value = this.inputElement.value, this.updateValidity(this.inputElement.validity, this.inputElement.validationMessage, this.inputElement), this.dispatchEvent(new Event("input", {
				bubbles: !0,
				composed: !0
			}));
		}), Gn(this, er, () => {
			this.value = this.inputElement.value, this.updateValidity(this.inputElement.validity, this.inputElement.validationMessage, this.inputElement), this.dispatchEvent(new Event("change", {
				bubbles: !0,
				composed: !0
			}));
		}), this.addEventListener("keydown", Wn(this, Xn)), this.addEventListener("focusin", Wn(this, Zn)), this.addEventListener("focusout", Wn(this, Qn));
	}
	firstUpdated() {
		Kn(this, qn, this.value), this.inputElement.addEventListener("input", Wn(this, $n)), this.inputElement.addEventListener("change", Wn(this, er)), this.autoGrowLabelWidth && (Kn(this, Yn, new IntersectionObserver((e) => {
			e.length && e[0].isIntersecting && this.updateMinWidth();
		})), Wn(this, Yn).observe(this));
	}
	disconnectedCallback() {
		this.inputElement?.removeEventListener("input", Wn(this, $n)), this.inputElement?.removeEventListener("change", Wn(this, er)), Wn(this, Yn)?.disconnect(), Kn(this, Yn, void 0), this.removeEventListener("keydown", Wn(this, Xn)), this.removeEventListener("focusin", Wn(this, Zn)), this.removeEventListener("focusout", Wn(this, Qn)), super.disconnectedCallback();
	}
	updateMinWidth() {
		let e = this.shadowRoot.querySelector(".wrapper");
		if (e) {
			let t = this.shadowRoot?.querySelector("label")?.scrollWidth || 0, n = this.minWidth > t ? this.minWidth : t;
			e.style.minWidth = n > 0 ? n + "px" : "";
		}
	}
	updated(e) {
		e.has("label") && (this.classList.toggle("has-label", this.label !== void 0 && this.label !== ""), this.autoGrowLabelWidth && this.updateMinWidth()), e.has("disabled") && (this.inputElement.disabled = this.disabled, this.disabled && this.matches(":focus-within") && this.blur()), e.has("readonly") && (this.inputElement.readOnly = this.readonly), e.has("required") && (this.inputElement.required = this.required), e.has("min") && (this.inputElement.min = this.min || ""), e.has("max") && (this.inputElement.max = this.max || ""), e.has("step") && (this.inputElement.step = this.step || ""), e.has("placeholder") && (this.inputElement.placeholder = this.placeholder || ""), e.has("pattern") && (this.inputElement.pattern = this.pattern || ""), e.has("minLength") && (this.inputElement.minLength = this.minLength === void 0 ? -1 : this.minLength), e.has("maxLength") && (this.inputElement.maxLength = this.maxLength === void 0 ? -1 : this.maxLength), e.has("value") && (this.type !== "file" && this.inputElement.value !== this.value && (this.inputElement.value = this.value), this.classList.toggle("has-value", this.value !== ""), this.setFormValue(this.value), Wn(this, Jn) && this.required && this.value === "" ? this.updateValidity({}) : this.updateValidity(this.inputElement.validity, this.inputElement.validationMessage, this.inputElement), Kn(this, Jn, !1), this.value !== Wn(this, qn) && Kn(this, qn, this.value));
	}
	clear() {
		this.disabled || this.readonly || (this.inputElement.value = "", this.value = "", this.setFormValue(this.value), this.updateValidity(this.inputElement.validity, this.inputElement.validationMessage, this.inputElement), this.dispatchEvent(new Event("input", {
			bubbles: !0,
			composed: !0
		})), this.dispatchEvent(new CustomEvent("change", {
			bubbles: !0,
			composed: !0
		})), this.blur());
	}
	renderInput() {
		return P`<input id="input" part="input" size="1" name="${this.name}" type="${this.type}" autocomplete="off" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?required="${this.required}" .value="${this.type === "file" ? "" : this.value}">`;
	}
	render() {
		return P`
            <slot name="prefix" part="prefix"></slot>
            <div class="wrapper">
                <label for="input" part="label">${this.label}</label>
                ${this.renderInput()}
                ${this.clearable ? P`
                    <rokit-button class="clear" icon ?dense="${this.dense}" @mousedown="${(e) => {
			e.preventDefault();
		}}" @click="${(e) => {
			e.stopPropagation(), this.clear();
		}}" title="Clear"></rokit-button>
                ` : F}
            </div>
            <slot name="suffix" part="suffix loader"></slot>
            <div class="supporting-text" part="supportingText">
                <slot name="supportingText">${this.supportingText}</slot>
            </div>
        `;
	}
};
qn = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), z.styles = [..._n.styles, Xe`
        :host { background-color: var(--rokit-light-background-color-inner); user-select: none; flex-wrap: wrap; }
        :host([dense]) { padding: 2px 4px; }
        :host(.has-focus:not([readonly])) label, :host(.has-value) label, :host([sticky]) label { font-size: 0.75em; top: 0.5em; font-weight: 600; }
        :host(.has-focus) label { color: var(--rokit-primary-color-inner); }
        .wrapper { display: flex; position: relative; flex-grow: 1; align-items: center; }
        label { position: absolute; top: 50%; transform: translate(0, -50%); transition-property: top, font-size; transition-duration: var(--rokit-transition-duration-inner); max-width: 100%; overflow: hidden; pointer-events: none; white-space: nowrap; }
        #input { height: 1.3em; border: 0; outline: 0; flex-grow: 1; font-size: 1em; background: none; padding: 0; color: currentColor; font-family: inherit; text-overflow: ellipsis; }
        #input[type='file'] { padding-bottom: 3px; }
        #input[readonly] { caret-color: transparent; }
        #input[readonly]::placeholder { color: transparent; }
        :host(.has-label) #input { margin-top: 0.9em; }
        :host(.has-label:not(.has-focus):not(.has-value):not([sticky])) #input { clip-path: polygon(0 0, 0 0, 0 0, 0 0); }
        :host(:not(.has-value)) .clear { visibility: hidden; }
        .supporting-text { width: 100%; font-size: 0.8em; }
    `], Hn([I()], z.prototype, "type", 2), Hn([I({
	type: Boolean,
	reflect: !0
})], z.prototype, "readonly", 2), Hn([I({
	type: Boolean,
	reflect: !0
})], z.prototype, "sticky", 2), Hn([I()], z.prototype, "pattern", 2), Hn([I()], z.prototype, "minLength", 2), Hn([I()], z.prototype, "maxLength", 2), Hn([I()], z.prototype, "min", 2), Hn([I()], z.prototype, "max", 2), Hn([I()], z.prototype, "step", 2), Hn([I()], z.prototype, "minWidth", 2), Hn([I({ type: Boolean })], z.prototype, "autoGrowLabelWidth", 2), Hn([I()], z.prototype, "supportingText", 2), Hn([L("#input")], z.prototype, "inputElement", 2), z = Hn([en("rokit-input")], z);
var tr = Object.defineProperty, nr = Object.getOwnPropertyDescriptor, rr = (e) => {
	throw TypeError(e);
}, B = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? nr(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && tr(t, n, i), i;
}, ir = (e, t, n) => t.has(e) || rr("Cannot " + n), V = (e, t, n) => (ir(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => t.has(e) ? rr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ar = (e, t, n, r) => (ir(e, t, "write to private field"), t.set(e, n), n), or = (e, t, n) => (ir(e, t, "access private method"), n), sr = (e, t, n, r) => ({
	set _(n) {
		ar(e, t, n);
	},
	get _() {
		return V(e, t, r);
	}
}), cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, U = class extends _n {
	constructor() {
		super(), H(this, Sr), this.emptyMessage = "Nothing to select", this.collapsibleOrientationLeft = "0", this.collapsibleOrientationRight = "0", this.collapsibleWidth = "", this.autoGrowLabelWidth = !1, this.fixedOpen = !1, this.collapse = !1, this.filterableThreshold = 15, this.itemCount = 0, this.selectedItem = null, H(this, cr, ""), H(this, lr, ""), H(this, ur, 0), H(this, dr, !1), H(this, fr, !1), H(this, pr), H(this, mr, () => {
			let e = this.collapsible?.content;
			if (!e?.matches(":popover-open")) return;
			let t = this.getBoundingClientRect(), n = document.documentElement.clientWidth, r = document.documentElement.clientHeight, i = this.collapsibleWidth || `${t.width}px`;
			this.style.setProperty("--rokit-select-overlay-width", i);
			let a = e.getBoundingClientRect().width, o = Math.max(0, Math.min(t.left, n - a));
			this.style.setProperty("--rokit-select-overlay-left", `${o}px`), this.style.setProperty("--rokit-select-overlay-right", "auto");
			let s = this.collapsible.maxHeight ?? e.scrollHeight, c = Math.min(s, e.scrollHeight), l = Math.max(0, r - t.bottom - 2), u = Math.max(0, t.top - 2);
			l < c && u > l ? (this.style.setProperty("--rokit-select-overlay-top", "auto"), this.style.setProperty("--rokit-select-overlay-bottom", `${r - t.top + 2}px`), this.style.setProperty("--rokit-select-overlay-max-height", `${Math.min(s, u)}px`)) : (this.style.setProperty("--rokit-select-overlay-top", `${t.bottom + 2}px`), this.style.setProperty("--rokit-select-overlay-bottom", "auto"), this.style.setProperty("--rokit-select-overlay-max-height", `${Math.min(s, l)}px`));
		}), H(this, hr, new MutationObserver(() => this.onSlotChange())), H(this, gr, () => {
			V(this, dr) || this.openList();
		}), H(this, _r, (e) => {
			let t = e.relatedTarget;
			t && (this.contains(t) || this.shadowRoot?.contains(t)) || (this.checkInputValue(), this.closeList(!1, !0));
		}), H(this, vr, () => {
			V(this, dr) || this.openList(!1);
		}), H(this, yr, (e) => {
			!this.clearable || !this.input.readonly || e.composedPath().find((e) => e instanceof Sn && e.classList.contains("clear")) && this.selectItem(null);
		}), H(this, br, (e) => {
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), this.openList(), this.highlightNextItem();
					break;
				case "ArrowUp":
					e.preventDefault(), this.openList(), this.highlightPreviousItem(!0);
					break;
				case "Enter": {
					let t = this.activeItem();
					if (t) {
						e.preventDefault(), this.selectItem(t, !0, !0);
						break;
					}
					let n = this.findItem(this.input.value);
					n ? (e.preventDefault(), this.selectItem(n, !0, !0)) : this.checkInputValue();
					break;
				}
				case "Escape":
					this.collapsible.open && (e.preventDefault(), this.restoreSelection(), this.closeList(!1));
					break;
				case "Tab":
					this.checkInputValue(), this.closeList(!1);
					break;
			}
		}), H(this, xr, (e) => {
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), this.highlightNextItem();
					break;
				case "ArrowUp":
					e.preventDefault(), this.highlightPreviousItem();
					break;
				case "Home":
					e.preventDefault(), this.highlightFirstItem();
					break;
				case "End":
					e.preventDefault(), this.highlightLastItem();
					break;
				case "Enter": {
					e.preventDefault();
					let t = this.activeItem();
					t && this.selectItem(t, !0, !0);
					break;
				}
				case "ArrowRight":
					if (this.collapse) {
						let t = this.activeItem();
						t && (e.preventDefault(), this.toggleNestedList(t, !0));
					}
					break;
				case "ArrowLeft":
					if (this.collapse) {
						let t = this.activeItem();
						t && (e.preventDefault(), this.toggleNestedList(t, !1));
					}
					break;
				case "Escape":
					e.preventDefault(), this.restoreSelection(), this.closeList(!1), this.input.inputElement.focus();
					break;
				case "Tab":
					this.checkInputValue(), this.closeList(!1);
					break;
			}
		}), this.addEventListener("focusin", V(this, gr)), this.addEventListener("focusout", V(this, _r)), this.addEventListener("input", V(this, vr));
	}
	disconnectedCallback() {
		or(this, Sr, Tr).call(this), V(this, hr).disconnect(), this.input?.removeEventListener("click", V(this, yr), !0), this.removeEventListener("focusin", V(this, gr)), this.removeEventListener("focusout", V(this, _r)), this.removeEventListener("input", V(this, vr)), super.disconnectedCallback();
	}
	firstUpdated() {
		ar(this, cr, this.value), ar(this, lr, getComputedStyle(this).getPropertyValue("--rokit-list-indent-inner")), this.input.addEventListener("click", V(this, yr), !0), this.input.placeholder = this.placeholder === void 0 ? "Type to filter list..." : this.placeholder, this.input.label = this.label, this.inputMinWidth !== void 0 && (this.input.minWidth = this.inputMinWidth), setTimeout(() => {
			this.collapsible.maxHeight = parseInt(this.collapsibleMaxHeight === void 0 ? getComputedStyle(this).getPropertyValue("--rokit-list-max-height-inner") : this.collapsibleMaxHeight), this.collapsible.content.style.width = this.collapsibleWidth, this.collapsible.content.style.left = this.collapsibleOrientationLeft, this.collapsible.content.style.right = this.collapsibleOrientationRight;
		}), this.collapsible.updateComplete.then(() => or(this, Sr, Cr).call(this)), this.syncInputAccessibilityState();
	}
	updated(e) {
		e.has("value") && this.value !== (this.selectedItem ? this.itemValue(this.selectedItem) : "") && (this.selectedItem = this.findItem(this.value), this.syncSelectionState(String(e.get("value") ?? ""), !1), this.filter("")), e.has("disabled") && (this.input.disabled = this.disabled, this.collapsible.disabled = this.disabled || this.fixedOpen), e.has("supportingText") && (this.input.supportingText = this.supportingText), e.has("filterableThreshold") && this.applyFilterability(), this.collapsible?.toggleButton && (this.collapsible.toggleButton.style.display = this.listContainer.childElementCount === 0 ? "none" : ""), e.has("fixedOpen") && (this.collapsible.open = this.fixedOpen, this.collapsible.disabled = this.fixedOpen, or(this, Sr, Cr).call(this)), e.has("label") && (this.input.label = this.label), e.has("placeholder") && (this.input.placeholder = this.placeholder === void 0 ? "Type to filter list..." : this.placeholder), this.syncInputAccessibilityState();
	}
	checkInputValue(e = !0) {
		let t = this.input.value.trim();
		if (t) {
			if (this.selectedItem && (this.itemText(this.selectedItem) === t || this.itemValue(this.selectedItem) === t)) return;
			let e = this.findItem(t);
			if (e) {
				this.selectItem(e);
				return;
			}
		}
		e && (t === "" ? (ar(this, cr, ""), this.selectItem(null, !1)) : this.restoreSelection());
	}
	filter(e) {
		e = e.toLowerCase();
		let t = !1;
		for (let n of this.listContainer.querySelectorAll("li")) if (n.id !== "noresult") {
			let r = e !== "" && this.itemText(n).toLowerCase().indexOf(e) === -1 && (!n.dataset.value || n.dataset.value.toLowerCase().indexOf(e) === -1);
			n.classList.toggle("hidden", r), this.collapse && (n.classList.remove("open"), n.querySelector("ul")?.classList.remove("open")), r || (t = !0);
		}
		for (let n of this.visibleItems()) for (let r = n.parentElement?.closest("li"); r; r = r.parentElement?.closest("li")) r.classList.remove("hidden"), t = !0, e && this.collapse && (r.classList.add("open"), r.querySelector(":scope > ul")?.classList.add("open"));
		this.listContainer.querySelector("#noresult")?.classList.toggle("hidden", t), this.highlightItem(e ? this.visibleItems()[0] ?? null : this.selectedItem ?? null, !1);
	}
	selectItem(e, t = !0, n = !1) {
		this.isSelectableItem(e) || (e = null);
		let r = this.value;
		this.selectedItem = e, this.value = e ? this.itemValue(e) : "", this.syncSelectionState(r), this.filter(""), this.highlightItem(e, !1), t && ar(this, cr, this.value), n && (ar(this, dr, !0), this.closeList(!1), window.setTimeout(() => {
			this.fixedOpen || (this.collapsible?.toggle(!1), this.syncInputAccessibilityState()), ar(this, dr, !1);
		}));
	}
	findItem(e) {
		let t = null;
		if (e) {
			for (let n of this.listContainer.querySelectorAll("li")) if (this.isSelectableItem(n)) {
				if (n.dataset.value === e) return n;
				this.itemText(n) === e && (t = n);
			}
		}
		return t;
	}
	highlightItem(e, t = !0) {
		if (this.listContainer.querySelector("li.active")?.classList.remove("active"), e && this.isSelectableItem(e) && !e.classList.contains("hidden")) {
			if (t && this.listContainer.focus(), e.classList.add("active"), this.listContainer.setAttribute("aria-activedescendant", e.id), this.collapse) for (let t = e.closest("ul"); t; t = t.parentElement.closest("ul")) t.classList.add("open"), t.closest("li")?.classList.add("open");
			this.collapsible.open && e.scrollIntoView({ block: "nearest" });
			return;
		}
		this.listContainer.removeAttribute("aria-activedescendant");
	}
	highlightNextItem() {
		let e = this.visibleItems(), t = this.activeItem();
		if (!e.length) {
			this.highlightItem(null);
			return;
		}
		if (!t) {
			this.highlightItem(e[0]);
			return;
		}
		let n = e.indexOf(t);
		this.highlightItem(e[Math.min(e.length - 1, n + 1)] || e[0]);
	}
	highlightPreviousItem(e = !1) {
		let t = this.visibleItems(), n = this.activeItem();
		if (!t.length) {
			this.highlightItem(null);
			return;
		}
		if (!n) {
			this.highlightItem(e ? t[t.length - 1] : t[0]);
			return;
		}
		let r = t.indexOf(n);
		this.highlightItem(t[Math.max(0, r - 1)] || t[0]);
	}
	highlightFirstItem() {
		this.highlightItem(this.visibleItems()[0] || null);
	}
	highlightLastItem() {
		let e = this.visibleItems();
		this.highlightItem(e[e.length - 1] ?? null);
	}
	itemValue(e) {
		return e.dataset.value || this.itemText(e) || "";
	}
	itemText(e) {
		return e.querySelector("div > div")?.innerText || "";
	}
	elementText(e) {
		let t = "";
		for (let n of e.childNodes) n.nodeType == 3 && (t += n.nodeValue?.trim());
		return t;
	}
	onSlotChange() {
		this.listContainer.replaceChildren(), this.itemCount = 0, ar(this, ur, 0);
		let e = null, t = this.shadowRoot.querySelector("#list-container-slot").assignedElements();
		if (t?.length === 1 && (e = Array.prototype.slice.call(t[0].querySelectorAll(":scope > li")), this.copyItems(e, this.listContainer), V(this, hr).disconnect(), V(this, hr).observe(t[0], {
			subtree: !0,
			childList: !0,
			characterData: !0,
			attributes: !0
		})), this.emptyMessage) {
			let t = document.createElement("li");
			t.id = "noresult", t.setAttribute("disabled", ""), t.innerText = this.emptyMessage, this.listContainer.appendChild(t), e && e.length > 0 && t.classList.add("hidden");
		}
		this.value = this.value || V(this, cr), this.selectItem(this.findItem(this.value)), this.applyFilterability();
	}
	copyItems(e, t, n = 0) {
		if (this.sort !== void 0) {
			let t = this.sort || "asc";
			e = e.sort((e, n) => t === "desc" ? (this.elementText(n) || this.itemValue(n)).localeCompare(this.elementText(e) || this.itemValue(e)) : (this.elementText(e) || this.itemValue(e)).localeCompare(this.elementText(n) || this.itemValue(n)));
		}
		let r = "";
		n > 0 && (r = `calc(0.3em + ${n}*${V(this, lr)})`);
		for (let i of e) {
			let e = i.cloneNode();
			e.replaceChildren(), e.id = i.id || `${this.id || "rokit-select"}-option-${sr(this, ur)._++}`;
			let a = document.createElement("div");
			r && (a.style.paddingLeft = r);
			let o = document.createElement("div");
			a.appendChild(o);
			for (let e of i.childNodes) if (e.nodeName !== "UL") {
				let t = e.cloneNode(!0);
				t.nodeType === 3 && t.nodeValue && (t.nodeValue = t.nodeValue.trim()), o.appendChild(t);
			}
			e.appendChild(a), e.title = e.title || this.itemText(e), e.setAttribute("role", i.classList.contains("divider") || i.classList.contains("header") ? "presentation" : "option"), e.setAttribute("aria-disabled", String(i.getAttribute("disabled") !== null));
			let s = i.querySelector("ul");
			if (s?.childElementCount) {
				let t = document.createElement("ul");
				if (t.setAttribute("role", "group"), e.appendChild(t), this.copyItems(Array.prototype.slice.call(s.children), t, n + 1), this.collapse) {
					let t = new Sn();
					t.dense = !0, t.icon = !0, t.classList.add("toggle-node", "caret"), t.title = "Toggle nested options", t.addEventListener("mousedown", (e) => {
						e.preventDefault(), e.stopPropagation();
					}), t.addEventListener("click", (t) => {
						t.stopPropagation(), this.toggleNestedList(e);
					}), a.prepend(t);
				} else t.classList.add("open");
			}
			t.appendChild(e), this.itemCount++;
		}
	}
	activeItem() {
		return this.listContainer.querySelector("li.active");
	}
	visibleItems() {
		return Array.from(this.listContainer.querySelectorAll("ul.open > li:not(.hidden)")).filter((e) => this.isSelectableItem(e));
	}
	isSelectableItem(e) {
		return !!e && e.id !== "noresult" && e.getAttribute("disabled") === null && !e.classList.contains("divider") && !e.classList.contains("header");
	}
	restoreSelection() {
		let e = this.selectedItem || this.findItem(V(this, cr));
		this.selectItem(e, !1);
	}
	openList(e = !this.input?.value) {
		this.disabled || this.fixedOpen || (this.collapsible?.toggle(!0), this.collapsible.updateComplete.then(() => {
			this.collapsible.open && or(this, Sr, wr).call(this);
		}), e && this.highlightItem(this.selectedItem ?? null, !1), this.syncInputAccessibilityState());
	}
	closeList(e = !0, t = !1) {
		this.fixedOpen || (e && this.checkInputValue(), this.filter(""), t && this.collapsible.content.matches(":popover-open") ? (this.collapsible.toggle(!1), ar(this, pr, window.setTimeout(() => {
			ar(this, pr, void 0), or(this, Sr, Tr).call(this);
		}, this.collapsible.transitionDuration))) : (or(this, Sr, Tr).call(this), this.collapsible?.toggle(!1)), this.syncInputAccessibilityState());
	}
	inputShouldBeReadonly() {
		return this.filterableThreshold < 0 || this.itemCount < this.filterableThreshold;
	}
	applyFilterability() {
		let e = this.inputShouldBeReadonly();
		this.input.readonly = e, this.collapsible.headerInactive = !e;
	}
	toggleNestedList(e, t = !e.classList.contains("open")) {
		e.classList.toggle("open", t), e.querySelector(":scope > ul")?.classList.toggle("open", t), this.collapsible.updateContentHeight(), this.highlightItem(e, !1);
	}
	syncInputAccessibilityState() {
		this.input?.inputElement && (this.input.inputElement.setAttribute("role", "combobox"), this.input.inputElement.setAttribute("aria-expanded", String(this.fixedOpen || this.collapsible?.open)), this.input.inputElement.setAttribute("aria-controls", "list-container"), this.input.inputElement.setAttribute("aria-autocomplete", this.input.readonly ? "none" : "list"), this.listContainer?.setAttribute("role", "listbox"));
	}
	syncSelectionAccessibilityState() {
		for (let e of this.listContainer.querySelectorAll("li[role=\"option\"]")) e.setAttribute("aria-selected", String(e === this.selectedItem));
	}
	syncSelectionState(e, t = e !== this.value) {
		this.input.value = this.selectedItem ? this.itemText(this.selectedItem) : this.value, this.title || (this.input.title = this.input.value), this.classList.toggle("has-value", this.value !== ""), this.setFormValue(this.value), this.required && this.value === "" ? this.updateValidity({ valueMissing: !0 }, "Please select a value", this.listContainer) : this.updateValidity(), t && this.dispatchEvent(new CustomEvent("change", { bubbles: !0 })), this.syncSelectionAccessibilityState();
	}
	render() {
		return P`
            <rokit-collapsible ?dense="${this.dense}" part="collapsible" ?headerInactive="${!this.inputShouldBeReadonly()}">
                <slot name="prefix" part="prefix" slot="prefix"></slot>
                <slot name="suffix" part="suffix loader" slot="suffix"></slot>
                <rokit-input id="input" slot="label" exportparts="supportingText"
                    ?clearable="${this.clearable}"
                    ?dense="${this.dense}"
                    @change="${() => {
			this.checkInputValue(this.input.inputElement.value === "" || !this.collapsible.open);
		}}"
                    @input="${() => {
			this.filter(this.input.inputElement.value);
		}}"
                    ?autoGrowLabelWidth="${this.autoGrowLabelWidth}"
                    @keydown="${V(this, br)}"
                ></rokit-input>
                <ul id="list-container" tabindex="-1" part="list" class="open"
                    @mousedown="${(e) => {
			e.preventDefault();
		}}"
                    @click="${(e) => {
			let t = e.target.closest("li");
			this.isSelectableItem(t) && this.selectItem(t, !0, !0);
		}}"
                    @keydown="${V(this, xr)}">
                </ul>
                <slot id="list-container-slot" @slotchange=${this.onSlotChange}></slot>
            </rokit-collapsible>
        `;
	}
};
cr = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakSet(), Cr = function() {
	let e = this.collapsible?.content;
	e && (this.fixedOpen ? (or(this, Sr, Tr).call(this), e.removeAttribute("popover"), this.listContainer.hidden = !1) : (e.setAttribute("popover", "manual"), e.matches(":popover-open") || (this.listContainer.hidden = !0)));
}, wr = function() {
	let e = this.collapsible.content;
	this.fixedOpen || !this.isConnected || !e.hasAttribute("popover") || (V(this, pr) !== void 0 && (window.clearTimeout(V(this, pr)), ar(this, pr, void 0)), this.listContainer.hidden = !1, this.style.setProperty("--rokit-select-overlay-visibility", "visible"), e.matches(":popover-open") || e.showPopover(), V(this, mr).call(this), V(this, fr) || (window.addEventListener("resize", V(this, mr)), window.addEventListener("scroll", V(this, mr), !0), ar(this, fr, !0)));
}, Tr = function() {
	V(this, pr) !== void 0 && (window.clearTimeout(V(this, pr)), ar(this, pr, void 0));
	let e = this.collapsible?.content;
	this.listContainer && (this.listContainer.hidden = !0), this.style.setProperty("--rokit-select-overlay-visibility", "hidden"), e?.matches(":popover-open") && e.hidePopover();
	for (let e of [
		"--rokit-select-overlay-top",
		"--rokit-select-overlay-right",
		"--rokit-select-overlay-bottom",
		"--rokit-select-overlay-left",
		"--rokit-select-overlay-width",
		"--rokit-select-overlay-max-height"
	]) this.style.removeProperty(e);
	V(this, fr) && (window.removeEventListener("resize", V(this, mr)), window.removeEventListener("scroll", V(this, mr), !0), ar(this, fr, !1));
}, U.styles = [..._n.styles, Xe`
        :host { background-color: var(--rokit-light-background-color-inner); user-select: none; padding: 0; }
        :host([dense]) {
            li > div { padding: 4px 2px; }
            li.large > div, li.header > div { padding-top: 6px; padding-bottom: 6px; }
        }
        #input { padding: 0; background-color: inherit; --rokit-button-icon-offset-y: 1px; }
        rokit-collapsible, #input { display: flex; flex-grow: 1; border: 0; max-width: 100%; }
        rokit-collapsible::part(content) { display: flex; flex-direction: column; padding-top: 0; outline: 0; background-color: var(--rokit-background-color-inner); border-color: var(--rokit-light-background-color-inner); border-width: 0 2px 0 2px; border-style: solid; }
        rokit-collapsible::part(header) { background-color: inherit !important; }
        :host(:not([fixedOpen])) {
            rokit-collapsible::part(content) {
                position: fixed;
                z-index: 1000;
                inset: auto;
                top: var(--rokit-select-overlay-top, auto);
                right: var(--rokit-select-overlay-right, auto);
                bottom: var(--rokit-select-overlay-bottom, auto);
                left: var(--rokit-select-overlay-left, auto);
                width: var(--rokit-select-overlay-width, auto);
                max-height: var(--rokit-select-overlay-max-height, none);
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                visibility: var(--rokit-select-overlay-visibility, hidden);
            }
            rokit-collapsible[open].has-content::part(content), rokit-collapsible.has-content.transitioning::part(content) { box-shadow: 0 0 10px var(--rokit-shadow-color-inner); clip-path: inset(0 -13px -13px 0); }
        }
        #list-container { outline: 0; }
        #list-container-slot, ::slotted(ul) { display: none !important; }
        ul { list-style-type: none; margin: 0; padding: 0; width: 100%; box-sizing: border-box; }
        li > div, #noresult { display: flex; align-items:center; line-height: 1em; padding: 8px; white-space: nowrap; transition: all calc(0.5 * var(--rokit-transition-duration-inner)); }
        li:not([disabled]):not(.divider) { cursor: pointer }
        li:not([disabled]):not(.divider) > div:hover { background-color: var(--rokit-light-background-color-inner); }
        li.active > div { color: var(--rokit-primary-color-inner); background-color: var(--rokit-light-background-color-inner); }
        li.divider { border-top: 1px solid var(--rokit-light-background-darker-color-inner); height: 0; padding: 0; }
        li.divider, li.header { pointer-events: none; }
        li.header > div { font-size: 0.7rem; font-weight: bold; padding-top: 8px; }
        li.large > div { padding-top: 10px; padding-bottom: 10px; }
        .hidden { display: none !important; }
        :host([collapse]) li > div { padding-left: 0; }
        :host([collapse]) .toggle-node { position: absolute }
        :host([collapse]) li > div > div { padding-left: 1.8em; }
        :host([collapse]) ul:not(.open) { display: none; }
        :host([collapse]) li:not(.open) > div > .toggle-node::part(caret-icon) { transform: translate(0, 0) rotate(-45deg); }
    `], B([I()], U.prototype, "emptyMessage", 2), B([I()], U.prototype, "sort", 2), B([I()], U.prototype, "collapsibleMaxHeight", 2), B([I()], U.prototype, "collapsibleOrientationLeft", 2), B([I()], U.prototype, "collapsibleOrientationRight", 2), B([I()], U.prototype, "collapsibleWidth", 2), B([I({ type: Boolean })], U.prototype, "autoGrowLabelWidth", 2), B([I({
	type: Boolean,
	reflect: !0
})], U.prototype, "fixedOpen", 2), B([I()], U.prototype, "inputMinWidth", 2), B([I({
	type: Boolean,
	reflect: !0
})], U.prototype, "collapse", 2), B([I()], U.prototype, "filterableThreshold", 2), B([I()], U.prototype, "supportingText", 2), B([L("rokit-collapsible")], U.prototype, "collapsible", 2), B([L("#input")], U.prototype, "input", 2), B([L("#list-container")], U.prototype, "listContainer", 2), U = B([en("rokit-select")], U);
var Er = Object.defineProperty, Dr = Object.getOwnPropertyDescriptor, Or = (e) => {
	throw TypeError(e);
}, kr = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? Dr(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && Er(t, n, i), i;
}, Ar = (e, t, n) => t.has(e) || Or("Cannot " + n), jr = (e, t, n) => (Ar(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Mr = (e, t, n) => t.has(e) ? Or("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Nr = (e, t, n, r) => (Ar(e, t, "write to private field"), t.set(e, n), n), Pr, Fr, Ir = class extends z {
	constructor() {
		super(...arguments), this.resize = "none", this.rows = 3, Mr(this, Pr), Mr(this, Fr, () => this.autoResize());
	}
	firstUpdated() {
		super.firstUpdated(), this.applyDimensions(), this.applyResizeBehavior();
	}
	updated(e) {
		super.updated(e), (e.has("rows") || e.has("cols")) && this.applyDimensions(), e.has("resize") && this.applyResizeBehavior(), this.resize === "auto" && e.has("value") && this.autoResize();
	}
	disconnectedCallback() {
		this.textareaElement?.removeEventListener("input", jr(this, Fr)), jr(this, Pr)?.disconnect(), Nr(this, Pr, void 0), super.disconnectedCallback();
	}
	applyDimensions() {
		this.textareaElement.rows = this.rows, this.textareaElement.cols = this.cols === void 0 ? 20 : this.cols;
	}
	applyResizeBehavior() {
		if (this.textareaElement.removeEventListener("input", jr(this, Fr)), jr(this, Pr)?.disconnect(), Nr(this, Pr, void 0), this.resize === "auto") {
			this.textareaElement.style.resize = "none", this.textareaElement.addEventListener("input", jr(this, Fr)), Nr(this, Pr, new IntersectionObserver((e) => {
				e.length && e[0].isIntersecting && this.autoResize();
			})), jr(this, Pr).observe(this), this.autoResize();
			return;
		}
		this.textareaElement.style.resize = this.resize, this.textareaElement.style.height = "";
	}
	autoResize() {
		this.textareaElement.style.height = "", this.textareaElement.style.height = this.textareaElement.scrollHeight + "px";
	}
	onSlotChange() {
		let e = this.shadowRoot.querySelector("#content").assignedNodes().map((e) => e.textContent).join("");
		e.trim() !== "" && (this.value = e);
	}
	renderInput() {
		return P`
        <textarea id="input" part="input" autocomplete="off" name="${this.name}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?required="${this.required}" .value="${this.value}"></textarea>
        <slot id="content" @slotchange=${this.onSlotChange}></slot>
        `;
	}
};
Pr = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Ir.styles = [...z.styles, Xe`
        :host, .wrapper { align-items: flex-start; }
        #input { height: initial; }
        #content { display: none; }
    `], kr([I()], Ir.prototype, "resize", 2), kr([I({ type: Number })], Ir.prototype, "rows", 2), kr([I({ type: Number })], Ir.prototype, "cols", 2), kr([L("#input")], Ir.prototype, "textareaElement", 2), Ir = kr([en("rokit-textarea")], Ir);
var Lr = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, zr = (e) => {
	throw TypeError(e);
}, Br = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? Rr(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && Lr(t, n, i), i;
}, Vr = (e, t, n) => t.has(e) || zr("Cannot " + n), W = (e, t, n) => (Vr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Hr = (e, t, n) => t.has(e) ? zr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), G = (e, t, n, r) => (Vr(e, t, "write to private field"), t.set(e, n), n), K, q, Ur, Wr, Gr, Kr, qr, Jr, Yr = 18, Xr = class extends z {
	constructor() {
		super(...arguments), this.labelFormatter = (e) => String(Math.round(e * 1e3) / 1e3), Hr(this, K, [0, 1]), Hr(this, q, [W(this, K)[0], W(this, K)[1]]), Hr(this, Ur), Hr(this, Wr, "start"), Hr(this, Gr, null), Hr(this, Kr, ""), Hr(this, qr), Hr(this, Jr), this.onPointerDown = (e) => {
			if (this.disabled || !e.isPrimary && e.pointerType !== "touch" || e.pointerType !== "touch" && e.button !== 0) return;
			e.preventDefault(), G(this, Kr, this.value), this.sliderElement.focus(), this.sliderElement.setPointerCapture(e.pointerId), G(this, Gr, e.pointerId);
			let t = e.target instanceof Zr, n = t ? e.target : this.chooseKnob(e.clientX - this.track.getBoundingClientRect().left);
			G(this, qr, n), this.setActiveKnob(n), n.classList.add("focus"), t || this.updateFromClientX(e.clientX);
		}, this.onPointerMove = (e) => {
			W(this, Gr) === e.pointerId && this.updateFromClientX(e.clientX);
		}, this.onPointerEnd = (e) => {
			if (W(this, Gr) !== e.pointerId) return;
			let t = W(this, qr);
			G(this, Gr, null), G(this, qr, void 0), this.sliderElement.hasPointerCapture(e.pointerId) && this.sliderElement.releasePointerCapture(e.pointerId), t?.classList.remove("focus"), this.value !== W(this, Kr) && this.dispatchEvent(new Event("change", {
				bubbles: !0,
				composed: !0
			}));
		}, this.onSliderKeyDown = (e) => {
			if (this.disabled) return;
			let t = this.currentKnob(), n = this.currentStep(), r;
			switch (e.key) {
				case "ArrowLeft":
				case "ArrowDown":
					e.preventDefault(), r = t.value - n;
					break;
				case "ArrowRight":
				case "ArrowUp":
					e.preventDefault(), r = t.value + n;
					break;
				case "Home":
					e.preventDefault(), r = W(this, K)[0];
					break;
				case "End":
					e.preventDefault(), r = W(this, K)[1];
					break;
			}
			r !== void 0 && this.updateKnobValue(t, r, !0);
		};
	}
	firstUpdated() {
		super.firstUpdated(), G(this, Jr, new ResizeObserver(() => {
			this.updateKnobPositions();
		})), W(this, Jr).observe(this.sliderElement);
	}
	disconnectedCallback() {
		W(this, Jr)?.disconnect(), G(this, Jr, void 0), G(this, Gr, null), G(this, qr, void 0), super.disconnectedCallback();
	}
	updated(e) {
		if (super.updated(e), e.has("min") && (W(this, K)[0] = parseFloat(this.min || "0"), W(this, K)[1] = Math.max(W(this, K)[0], W(this, K)[1])), e.has("max") && (W(this, K)[1] = parseFloat(this.max || "1"), W(this, K)[0] = Math.min(W(this, K)[0], W(this, K)[1])), e.has("step")) {
			let e = this.step ? parseFloat(this.step) : void 0;
			G(this, Ur, e && Number.isFinite(e) && e > 0 ? e : void 0);
		}
		(e.has("value") || e.has("min") || e.has("max") || e.has("step") || e.has("range")) && this.syncValuesFromProperty(), this.updateKnobPositions(), this.syncAccessibilityState();
	}
	updateValidity(e, t) {
		super.updateValidity(e, t, this.sliderElement);
	}
	syncValuesFromProperty() {
		if (this.value !== void 0 && this.value !== "") if (this.range !== void 0) try {
			let e = JSON.parse(this.value);
			if (Array.isArray(e) && e.length === 2 && Number.isFinite(e[0]) && Number.isFinite(e[1])) {
				let t = this.applyBaseConstraints(Number(e[0])), n = this.applyBaseConstraints(Number(e[1])), r = Math.min(t, n), i = Math.max(t, n);
				G(this, q, [r, i]);
			} else G(this, q, [W(this, K)[0], W(this, K)[1]]);
		} catch {
			G(this, q, [W(this, K)[0], W(this, K)[1]]);
		}
		else {
			let e = parseFloat(this.value);
			G(this, q, [this.applyBaseConstraints(Number.isFinite(e) ? e : W(this, K)[0])]);
		}
		else G(this, q, this.range === void 0 ? [W(this, K)[0]] : [W(this, K)[0], W(this, K)[1]]);
	}
	chooseKnob(e) {
		if (!this.endKnob) return this.startKnob;
		let t = Math.abs(e - this.startKnob.offsetLeft) < Math.abs(e - this.endKnob.offsetLeft) ? this.startKnob : this.endKnob;
		return this.startKnob.value === this.endKnob.value && (t.id === "start" && t.value === W(this, K)[0] ? t = this.endKnob : t.id === "end" && t.value === W(this, K)[1] && (t = this.startKnob)), t;
	}
	toScreenSpace(e) {
		let t = this.track.offsetWidth, n = W(this, K)[1] - W(this, K)[0];
		return t <= 0 || n <= 0 ? 0 : (e - W(this, K)[0]) / n * t;
	}
	toValueSpace(e) {
		let t = this.track.offsetWidth, n = W(this, K)[1] - W(this, K)[0];
		return t <= 0 || n <= 0 ? W(this, K)[0] : e / t * n + W(this, K)[0];
	}
	applyBaseConstraints(e) {
		let t = Math.min(Math.max(e, W(this, K)[0]), W(this, K)[1]);
		return W(this, Ur) && (t = W(this, K)[0] + Math.round((t - W(this, K)[0]) / W(this, Ur)) * W(this, Ur)), t;
	}
	applyConstraints(e, t, n) {
		let r = this.applyBaseConstraints(e);
		if (this.endKnob) {
			let e = n ?? (t === "start" ? W(this, q)[1] : W(this, q)[0]);
			r = t === "start" ? Math.min(r, e) : Math.max(r, e);
		}
		return r;
	}
	currentStep() {
		if (W(this, Ur)) return W(this, Ur);
		let e = W(this, K)[1] - W(this, K)[0];
		return e > 0 ? Math.max(e / 100, 1) : 1;
	}
	updateKnob(e, t) {
		e.id === "start" ? W(this, q)[0] = t : W(this, q)[1] = t, e.value = t, e.offset = this.toScreenSpace(t), e.label = this.labelFormatter(t), this.endKnob && (e.id === "start" ? this.track.style.borderLeftWidth = e.offset + "px" : this.track.style.borderRightWidth = this.track.offsetWidth - e.offset + "px");
	}
	updateKnobPositions() {
		this.updateKnob(this.startKnob, W(this, q)[0]), this.endKnob && this.updateKnob(this.endKnob, W(this, q)[1]);
	}
	setActiveKnob(e) {
		G(this, Wr, e.id === "end" ? "end" : "start");
	}
	currentKnob() {
		return W(this, Wr) === "end" && this.endKnob ? this.endKnob : this.startKnob;
	}
	syncAccessibilityState() {
		let e = this.range !== void 0 && !!this.endKnob;
		this.sliderElement.setAttribute("role", e ? "group" : "slider"), this.sliderElement.setAttribute("aria-label", this.label || "Slider"), e ? (this.sliderElement.removeAttribute("aria-valuemin"), this.sliderElement.removeAttribute("aria-valuemax"), this.sliderElement.removeAttribute("aria-valuenow"), this.sliderElement.removeAttribute("aria-valuetext")) : (this.sliderElement.setAttribute("aria-valuemin", String(W(this, K)[0])), this.sliderElement.setAttribute("aria-valuemax", String(W(this, K)[1])), this.sliderElement.setAttribute("aria-valuenow", String(W(this, q)[0])), this.sliderElement.setAttribute("aria-valuetext", this.labelFormatter(W(this, q)[0]))), this.startKnob.configureAccessibility("Minimum value", W(this, K)[0], W(this, K)[1], W(this, q)[0], this.labelFormatter(W(this, q)[0])), this.endKnob?.configureAccessibility("Maximum value", W(this, K)[0], W(this, K)[1], W(this, q)[1], this.labelFormatter(W(this, q)[1]));
	}
	commitInternalValue(e = !1) {
		let t = this.range === void 0 ? String(W(this, q)[0]) : JSON.stringify([W(this, q)[0], W(this, q)[1]]), n = this.value !== t;
		return n && (this.value = t, this.dispatchEvent(new Event("input", {
			bubbles: !0,
			composed: !0
		}))), e && n && this.dispatchEvent(new Event("change", {
			bubbles: !0,
			composed: !0
		})), n;
	}
	updateKnobValue(e, t, n = !1) {
		this.setActiveKnob(e), this.updateKnob(e, this.applyConstraints(t, e.id === "end" ? "end" : "start")), this.commitInternalValue(n);
	}
	updateFromClientX(e) {
		if (!W(this, qr)) return;
		let t = e - this.track.getBoundingClientRect().left;
		this.updateKnobValue(W(this, qr), this.toValueSpace(t));
	}
	renderInput() {
		return P`
        ${super.renderInput()}
        <div
            id="slider"
            part="slider"
            tabindex="0"
            ?range="${this.range !== void 0}"
            @pointerdown="${this.onPointerDown}"
            @pointermove="${this.onPointerMove}"
            @pointerup="${this.onPointerEnd}"
            @pointercancel="${this.onPointerEnd}"
            @keydown="${this.onSliderKeyDown}"
        >
            <div id="track"></div>
            <rokit-slider-knob id="start"></rokit-slider-knob>
            ${this.range === void 0 ? F : P`
                <rokit-slider-knob id="end"></rokit-slider-knob>
            `}
        </div>
        `;
	}
};
K = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Xr.styles = [...z.styles, Xe`
        :host(.has-label:not(:focus):not(.has-value):not([sticky])) #slider > * { visibility: hidden; }
        :host(.has-label) .wrapper { padding-top: 1em; }
        :host([sticky]) #slider { margin-top: ${26.5}px; }
        #input { display: none; }
        #slider { display: flex; position: relative; align-items: center; width: 100%; height: ${Yr}px; padding: 0 ${Yr / 2}px; outline: 0; }
        :host(:not([sticky])) #slider:not(:focus) rokit-slider-knob::part(label) { color: transparent; background-color: transparent; border-color: transparent; top: 0; }
        #track { height: 2px;  flex-grow: 1; background-color: #CCC; }
        #slider[range] #track { background-color: color-mix(in srgb, var(--rokit-primary-color-inner) 60%, transparent); border-width: 0; border-color: #CCC; border-style: solid; }
    `], Br([I()], Xr.prototype, "range", 2), Br([I()], Xr.prototype, "labelFormatter", 2), Br([L("#slider")], Xr.prototype, "sliderElement", 2), Br([L("#track")], Xr.prototype, "track", 2), Br([L("#start")], Xr.prototype, "startKnob", 2), Br([L("#end")], Xr.prototype, "endKnob", 2), Xr = Br([en("rokit-slider")], Xr);
var Zr = class extends Qt {
	constructor() {
		super(...arguments), this.offset = 0, this.label = "", this.value = 0;
	}
	configureAccessibility(e, t, n, r, i) {
		this.setAttribute("role", "slider"), this.setAttribute("aria-label", e), this.setAttribute("aria-valuemin", String(t)), this.setAttribute("aria-valuemax", String(n)), this.setAttribute("aria-valuenow", String(r)), this.setAttribute("aria-valuetext", i);
	}
	updated(e) {
		e.has("offset") && (this.style.left = this.offset + "px");
	}
	render() {
		return P`<label part="label">${this.label}</label>`;
	}
};
Zr.styles = [Xe`
        :host { position: absolute; width: ${Yr}px; height: ${Yr}px; border-radius: ${Yr}px; background-color: var(--rokit-primary-color-inner); }
        :host(.focus), :host(:hover) { box-shadow: 0 0 0 ${Yr / 2}px var(--rokit-primary-color-transparent-inner); z-index: 1; }
        label {
            position: absolute;
            top: calc(-2em - ${Yr / 4}px);
            left: 50%;
            transform: translate(-50%, 0);
            white-space: nowrap;
            font-size: 0.75em;
            font-weight: 500;
            transition-property: top color background-color;
            transition-duration: var(--rokit-transition-duration-inner);
            pointer-events: none;
            color: white;
            background-color: var(--rokit-primary-color-inner);
            padding: 0 4px;
            border-radius: 3px;
        }
        label:after {
            content: '';
            width: 10px;
            height: 10px;
            position: absolute;
            left: 50%;
            bottom: -4px;
            transform: translate(-50%, 0);
            background-color: inherit;
            clip-path: polygon(50% 50%, 100% 50%, 50% 100%, 0 50%);
        }
    `], Br([I()], Zr.prototype, "offset", 2), Br([I()], Zr.prototype, "label", 2), Zr = Br([en("rokit-slider-knob")], Zr);
var Qr = Object.defineProperty, $r = Object.getOwnPropertyDescriptor, ei = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? $r(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && Qr(t, n, i), i;
}, ti = class extends mn {
	constructor() {
		super(...arguments), this.open = !1, this.closable = !1, this.title = "", this.previousBodyOverflow = "", this.layoutLocked = !1, this.onDialogCancel = (e) => {
			if (!this.closable) {
				e.preventDefault();
				return;
			}
			this.open = !1;
		}, this.onDialogClose = () => {
			this.unlockLayout(), this.open = !1, this.dispatchEvent(new Event("close"));
		};
	}
	lockLayout() {
		this.layoutLocked || (this.layoutLocked = !0, this.previousBodyOverflow = document.body.style.overflow, document.body.classList.add("dialog-open"), document.body.style.overflow = "hidden");
	}
	unlockLayout() {
		this.layoutLocked && (this.layoutLocked = !1, document.body.classList.remove("dialog-open"), document.body.style.overflow = this.previousBodyOverflow, this.previousBodyOverflow = "");
	}
	firstUpdated() {
		this.dialogElement.addEventListener("close", this.onDialogClose), this.dialogElement.addEventListener("cancel", this.onDialogCancel);
	}
	disconnectedCallback() {
		this.dialogElement?.removeEventListener("close", this.onDialogClose), this.dialogElement?.removeEventListener("cancel", this.onDialogCancel), this.dialogElement?.open && this.dialogElement.close(), this.unlockLayout(), super.disconnectedCallback();
	}
	updated(e) {
		if (e.has("open")) {
			if (this.open) {
				if (this.lockLayout(), !this.dialogElement.open) try {
					this.dialogElement.showModal();
				} catch {
					this.unlockLayout(), this.open = !1;
				}
				return;
			}
			this.unlockLayout(), this.dialogElement.open && this.dialogElement.close();
		}
	}
	render() {
		return P`
            <dialog id="dialog" part="dialog">
                <header>
                    <div class="title" part="title">
                        <slot name="header">${this.title}</slot>
                    </div>
                    ${this.closable ? P`
                        <rokit-button class="clear" icon ?dense="${this.dense}" @click="${() => {
			this.open = !1;
		}}" title="Close"></rokit-button>
                    ` : F}
                </header>
                <main part="main">
                    <slot></slot>
                </main>
            </dialog>
        `;
	}
};
ti.styles = [...mn.styles, Xe`
        dialog[open] { display: flex; flex-direction: column; width: 100%; max-width: 90vw; max-height: 90vh; margin: auto; outline: 0; border: 0; border-radius: 1em; padding: 0; }
        dialog::backdrop { background-color: #0007; }
        header { display: flex; align-items: center; padding: 14px; }
        .title { font-weight: 600; flex-grow: 1; text-align: center; }
        .clear { justify-self: flex-end; }
        main { flex-grow: 1; overflow: auto; display: flex; flex-direction: column; padding: 0 16px 14px 16px; }
    `], ei([I({
	type: Boolean,
	reflect: !0
})], ti.prototype, "open", 2), ei([I({ type: Boolean })], ti.prototype, "closable", 2), ei([I()], ti.prototype, "title", 2), ei([L("#dialog")], ti.prototype, "dialogElement", 2), ti = ei([en("rokit-dialog")], ti);
var ni = Object.defineProperty, ri = Object.getOwnPropertyDescriptor, ii = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? ri(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && ni(t, n, i), i;
}, ai = class extends mn {
	updated(e) {
		if (e.has("percent")) {
			let e = Number(this.percent);
			if (Number.isFinite(e)) {
				let t = Math.min(100, Math.max(0, e));
				this.bar.style.width = `${t}%`;
			} else this.bar.style.width = "";
		}
	}
	render() {
		let e = Number.isFinite(Number(this.percent));
		return P`
            <div
                part="bar"
                class="bar ${e ? "" : "indeterminate"}"
                role="progressbar"
                aria-valuemin="${e ? "0" : F}"
                aria-valuemax="${e ? "100" : F}"
                aria-valuenow="${e ? String(Math.min(100, Math.max(0, Number(this.percent)))) : F}"
            ></div>
        `;
	}
};
ai.styles = [...mn.styles, Xe`
    :host { display: flex; background-color: var(--rokit-primary-color-transparent-inner); color: var(--rokit-primary-color-inner); }
    .bar { height: 3px; background-color: var(--rokit-primary-color-inner); }
    .bar.indeterminate { width: 100%; --c: no-repeat linear-gradient(currentColor 0 0); background: var(--c), var(--c); background-size: 60% 100%; animation: indeterminate 3s infinite; }
    @keyframes indeterminate {
        0%   { background-position:-150% 0,-150% 0 }
        66%  { background-position: 250% 0,-150% 0 }
        100% { background-position: 250% 0, 250% 0 }
    }
    `], ii([I({ type: Number })], ai.prototype, "percent", 2), ii([L(".bar")], ai.prototype, "bar", 2), ai = ii([en("rokit-progressbar")], ai);
var oi = Object.getOwnPropertyDescriptor, si = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? oi(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = o(i) || i);
	return i;
}, ci = "RokitSnackbarEvent", li = "0.2s", ui = vn(li), di = 3e3, fi = class extends Qt {
	constructor() {
		super(), this.listener = (e) => {
			e.stopImmediatePropagation(), pi(e.detail, this);
		}, this.container = document.createElement("div"), this.container.classList.add("snackbar"), this.container.setAttribute("part", "snackbar"), this.container.setAttribute("aria-live", "polite"), this.container.setAttribute("aria-atomic", "true");
	}
	connectedCallback() {
		super.connectedCallback(), this.shadowRoot.appendChild(this.container), document.addEventListener(ci, this.listener);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), document.removeEventListener(ci, this.listener);
	}
};
fi.styles = Xe`
    :host { display: flex; justify-content: center; width: 100%; position: fixed; bottom: 10px; pointer-events: none; }
    :host(.left)  { right: auto; left: 10px; width: auto; }
    :host(.right) { right: 10px; left: auto; width: auto; }
    :host(.top) { top: 10px; bottom: auto; }
    :host(.top) .snackbar { flex-direction: column-reverse; }
    .snackbar { display: flex; flex-direction: column; width: 300px; }
    .message { max-height: 0; margin-bottom: 0; overflow: hidden; background-color: #333; color: #FFF; border-radius: 4px; transition: all ${Ye(li)} ease-in-out; font-weight: 500; pointer-events: auto; }
    .message.error { background-color: #C22; }
    .message.success { background-color: #0a8f0a; }
    .message:not(.closable) .text { text-align: center; }
    .inner { display: flex; padding: 10px; }
    .text { flex-grow: 1; word-break: break-all; }
    .text a { color: inherit; }
    `, fi = si([en("rokit-snackbar")], fi);
function pi(e, t) {
	t || (t = document.querySelector("rokit-snackbar") || void 0, t || (t = new fi(), document.body.appendChild(t)));
	let n = document.createElement("div");
	n.classList.add("message"), n.setAttribute("role", "status");
	let r = document.createElement("div");
	r.classList.add("inner");
	let i = document.createElement("div");
	if (i.classList.add("text"), i.innerHTML = e.message, r.appendChild(i), n.appendChild(r), e.closable === void 0 ? e.ttl === 0 : e.closable) {
		n.classList.add("closable");
		let e = new Sn();
		e.setAttribute("icon", ""), e.setAttribute("dense", ""), e.classList.add("clear"), e.title = "Dismiss", e.addEventListener("click", () => {
			a(n);
		}), r.append(e);
	}
	e.cssStyle && (n.style.cssText = e.cssStyle), e.cssClass && n.classList.add(e.cssClass), t.container.appendChild(n), setTimeout(() => {
		n.style.maxHeight = n.scrollHeight + "px", n.style.marginBottom = "10px";
	}), e.ttl !== 0 && setTimeout(() => {
		a(n);
	}, e.ttl || di);
	let a = (e) => {
		e.style.maxHeight = "", e.style.marginBottom = "", setTimeout(() => {
			e.remove();
		}, ui);
	};
}
var mi = Object.defineProperty, hi = Object.getOwnPropertyDescriptor, gi = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? hi(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && mi(t, n, i), i;
}, _i = class extends mn {
	constructor() {
		super(...arguments), this.pos = "50%", this.minPos = 10, this.maxPos = 90, this.dir = "horizontal", this.sep = "4px", this.dragging = !1, this.storageKey = "", this._restoredKey = "", this._activePointerId = null, this.posFromPointer = (e) => {
			let t = this.getBoundingClientRect(), n = this.dir === "horizontal" ? e.clientX - t.left : e.clientY - t.top, r = this.dir === "horizontal" ? t.width : t.height, i = r > 0 ? n / r * 100 : 50;
			return `${Math.min(this.maxPos, Math.max(this.minPos, i))}%`;
		}, this.startDrag = (e) => {
			e.button == 0 && (this.dragging = !0, this._activePointerId = e.pointerId, e.currentTarget.setPointerCapture(e.pointerId), this.pos = this.posFromPointer(e));
		}, this.drag = (e) => {
			this.dragging && this._activePointerId == e.pointerId && (this.pos = this.posFromPointer(e));
		}, this.endDrag = (e) => {
			this._activePointerId == e.pointerId && (this.dragging = !1, this._activePointerId = null);
		}, this.onKeyDown = (e) => {
			let t = e.shiftKey ? 10 : 1;
			switch (e.key) {
				case "ArrowLeft":
					this.dir === "horizontal" && (e.preventDefault(), this.updatePosFromNumber(this.currentPos() - t));
					break;
				case "ArrowRight":
					this.dir === "horizontal" && (e.preventDefault(), this.updatePosFromNumber(this.currentPos() + t));
					break;
				case "ArrowUp":
					this.dir === "vertical" && (e.preventDefault(), this.updatePosFromNumber(this.currentPos() - t));
					break;
				case "ArrowDown":
					this.dir === "vertical" && (e.preventDefault(), this.updatePosFromNumber(this.currentPos() + t));
					break;
				case "Home":
					e.preventDefault(), this.updatePosFromNumber(this.minPos);
					break;
				case "End":
					e.preventDefault(), this.updatePosFromNumber(this.maxPos);
					break;
			}
		};
	}
	updated(e) {
		if (this.storageKey ||= `rokit-splitpane:${this.id || "default"}`, this.storageKey && this.storageKey !== this._restoredKey) {
			try {
				let e = localStorage.getItem(this.storageKey);
				e && (this.pos = e);
			} catch {}
			this._restoredKey = this.storageKey;
		}
		if (e.has("minPos") && (this.minPos = Math.max(0, Math.min(100, this.minPos))), e.has("maxPos") && (this.maxPos = Math.max(0, Math.min(100, this.maxPos))), this.minPos > this.maxPos && ([this.minPos, this.maxPos] = [this.maxPos, this.minPos]), (e.has("pos") || e.has("dir")) && (this.dir === "horizontal" ? (this.style.gridTemplateColumns = this.template(), this.style.gridTemplateRows = "") : (this.style.gridTemplateRows = this.template(), this.style.gridTemplateColumns = ""), this.storageKey)) try {
			localStorage.setItem(this.storageKey, this.pos);
		} catch {}
		this.separator && (e.has("pos") || e.has("minPos") || e.has("maxPos") || e.has("dir")) && (this.separator.setAttribute("aria-valuemin", String(this.minPos)), this.separator.setAttribute("aria-valuemax", String(this.maxPos)), this.separator.setAttribute("aria-valuenow", String(this.currentPos())));
	}
	template() {
		return `${this.pos} ${this.sep} 1fr`;
	}
	currentPos() {
		let e = Number.parseFloat(this.pos);
		return Number.isFinite(e) ? Math.min(this.maxPos, Math.max(this.minPos, e)) : 50;
	}
	updatePosFromNumber(e) {
		let t = Math.min(this.maxPos, Math.max(this.minPos, e));
		this.pos = `${t}%`;
	}
	render() {
		return P`
            <div><slot name="pane1"></slot></div>
            <div
                id="separator"
                part="separator"
                role="separator"
                tabindex="0"
                aria-orientation="${this.dir}"
                aria-valuemin="${this.minPos}"
                aria-valuemax="${this.maxPos}"
                aria-valuenow="${this.currentPos()}"
                @pointerdown="${this.startDrag}"
                @pointermove="${this.drag}"
                @pointerup="${this.endDrag}"
                @pointercancel="${this.endDrag}"
                @keydown="${this.onKeyDown}">
            </div>
            <div><slot name="pane2"></slot></div>
        `;
	}
};
_i.styles = [...mn.styles, Xe`
    :host { display: grid; }
    :host([dragging]) { user-select: none; }
    :host([dragging][dir="horizontal"]) { cursor: col-resize; }
    :host([dragging][dir="vertical"]) { cursor: row-resize; }
    :host([dir="horizontal"]) {
        #separator { cursor: col-resize; }
    }
    :host([dir="vertical"]) {
        #separator { cursor: row-resize; }
    }
    #separator { background-color: var(--rokit-light-background-darker-color-inner); }
    `], gi([I()], _i.prototype, "pos", 2), gi([I()], _i.prototype, "minPos", 2), gi([I()], _i.prototype, "maxPos", 2), gi([I({ reflect: !0 })], _i.prototype, "dir", 2), gi([I()], _i.prototype, "sep", 2), gi([I({
	reflect: !0,
	type: Boolean
})], _i.prototype, "dragging", 2), gi([I()], _i.prototype, "storageKey", 2), gi([L("#separator")], _i.prototype, "separator", 2), _i = gi([en("rokit-splitpane")], _i);
//#endregion
//#region node_modules/@rdfjs/term-map/TermMap.js
var vi = class {
	constructor(e) {
		if (this.index = /* @__PURE__ */ new Map(), e) for (let [t, n] of e) this.set(t, n);
	}
	get size() {
		return this.index.size;
	}
	clear() {
		this.index.clear();
	}
	delete(e) {
		return this.index.delete(t(e));
	}
	*entries() {
		for (let [, { term: e, value: t }] of this.index) yield [e, t];
	}
	forEach(e, t) {
		for (let n of this.entries()) e.call(t, n[1], n[0], this);
	}
	get(e) {
		let n = this.index.get(t(e));
		return n && n.value;
	}
	has(e) {
		return this.index.has(t(e));
	}
	*keys() {
		for (let [, { term: e }] of this.index) yield e;
	}
	set(e, n) {
		let r = t(e);
		return this.index.set(r, {
			term: e,
			value: n
		}), this;
	}
	*values() {
		for (let [, { value: e }] of this.index) yield e;
	}
	[Symbol.iterator]() {
		return this.entries()[Symbol.iterator]();
	}
}, yi = class {
	constructor({ dataset: e, end: t, quad: n, start: r }) {
		this.dataset = e, this.end = t, this.quad = n, this.start = r;
	}
	get term() {
		return this.quad[this.end];
	}
	get graph() {
		return this.quad.graph;
	}
	get startTerm() {
		return this.quad[this.start];
	}
};
//#endregion
//#region node_modules/@rdfjs/term-set/TermSet.js
function bi(e) {
	try {
		return t(e);
	} catch {
		return null;
	}
}
var xi = class {
	constructor(e) {
		if (this.index = /* @__PURE__ */ new Map(), e) for (let t of e) this.add(t);
	}
	get size() {
		return this.index.size;
	}
	add(e) {
		let n = t(e);
		return this.index.has(n) || this.index.set(n, e), this;
	}
	clear() {
		this.index.clear();
	}
	delete(e) {
		return e ? this.index.delete(bi(e)) : !1;
	}
	entries() {
		return this.values().entries();
	}
	forEach(e, t) {
		return this.values().forEach(e, t);
	}
	has(e) {
		return e ? this.index.has(bi(e)) : !1;
	}
	values() {
		return new Set(this.index.values());
	}
	keys() {
		return this.values();
	}
	[Symbol.iterator]() {
		return this.index.values();
	}
}, Si = {
	apply: (e, t, n) => e(n[0]),
	get: (e, t) => e(t)
};
function Ci(e, { factory: t = u } = {}) {
	let n = (n = "") => t.namedNode(`${e}${n.raw || n}`);
	return typeof Proxy > "u" ? n : new Proxy(n, Si);
}
Ci("http://www.w3.org/2001/XMLSchema#");
var wi = Ci("http://www.w3.org/1999/02/22-rdf-syntax-ns#");
Ci("http://www.w3.org/2000/01/rdf-schema#");
//#endregion
//#region node_modules/grapoi/Processor.js
var Ti = class e {
	static add({ ptr: e, start: t, end: n, subjects: r = [null], predicates: i = [null], objects: a = [null], graphs: o, callback: s } = {}) {
		if (!e.factory) throw Error("add operation requires a factory");
		let c = () => {};
		s && (c = (r) => {
			s(new yi({
				dataset: e.dataset,
				start: t,
				end: n,
				quad: r
			}));
		});
		for (let n of r) for (let r of i) for (let i of a) for (let a of o) {
			let o = {
				subject: n,
				predicate: r,
				object: i,
				graph: a
			};
			o[t] = e.term;
			let s = e.factory.quad(o.subject, o.predicate, o.object, o.graph);
			e.dataset.add(s), c(s);
		}
		return e;
	}
	static addList({ ptr: e, predicates: t, items: n, graphs: r }) {
		if (e.isAny()) throw Error("can't attach a list to an any ptr");
		for (let i of t) for (let t of r) {
			let r = n.map(() => e.factory.blankNode());
			e.dataset.add(e.factory.quad(e.term, i, r[0] || wi.nil, t));
			for (let i = 0; i < r.length; i++) e.dataset.add(e.factory.quad(r[i], wi.first, n[i], t)), e.dataset.add(e.factory.quad(r[i], wi.rest, r[i + 1] || wi.nil, t));
		}
		return e;
	}
	static delete({ ptr: e, start: t, subjects: n = [null], predicates: r = [null], objects: i = [null] }) {
		for (let a of n) for (let n of r) for (let r of i) {
			let i = {
				subject: a,
				predicate: n,
				object: r
			};
			i[t] = e.term;
			let o = e.dataset.match(i.subject, i.predicate, i.object);
			for (let t of o) e.dataset.delete(t);
		}
		return e;
	}
	static deleteList({ ptr: e, predicates: t }) {
		let n = [];
		for (let r of t) for (let t of e.dataset.match(e.term, r)) {
			let r = t.object;
			for (n.push(t); !wi.nil.equals(r);) {
				r = n[n.length - 1].object;
				let t = e.dataset.match(r);
				if (t.size === 0) break;
				for (let e of t) n.push(e);
			}
		}
		for (let t of n) e.dataset.delete(t);
		return e;
	}
	static execute({ ptr: t, operation: n = "traverse", quantifier: r, start: i, end: a, subjects: o, predicates: s, objects: c, graphs: l, items: u, callback: d } = {}) {
		if (n === "add") return e.add({
			ptr: t,
			start: i,
			end: a,
			subjects: o,
			predicates: s,
			objects: c,
			graphs: l,
			callback: d
		});
		if (n === "addList") return e.addList({
			ptr: t,
			predicates: s,
			items: u,
			graphs: l
		});
		if (n === "delete") return e.delete({
			ptr: t,
			start: i,
			subjects: o,
			predicates: s,
			objects: c
		});
		if (n === "deleteList") return e.deleteList({
			ptr: t,
			predicates: s
		});
		if (n === "isList") return e.isList({ ptr: t });
		if (n === "list") return e.list({ ptr: t });
		if (n === "traverse") return e.traverse({
			ptr: t,
			quantifier: r,
			start: i,
			end: a,
			subjects: o,
			predicates: s,
			objects: c,
			graphs: l
		});
		throw Error(`unknown operation ${n}`);
	}
	static isList({ ptr: t }) {
		return !t.isAny() && !!(wi.nil.equals(t.term) || e.traverse({
			ptr: t,
			predicates: [wi.first]
		}).length === 1);
	}
	static list({ ptr: e }) {
		if (e.isList()) return { *[Symbol.iterator]() {
			let t = new xi();
			for (; e && !e.term.equals(wi.nil);) {
				if (t.has(e.term)) throw Error(`Invalid list: circular reference on ${e.value}`);
				t.add(e.term);
				let n = e.out([wi.first]);
				if (n.length !== 1) throw Error(`Invalid list: rdf:first count not equals one on ${e.value}`);
				let r = e.out([wi.rest]);
				if (r.length !== 1) throw Error(`Invalid list: rdf:rest count not equals one on ${e.value}`);
				yield n[0], e = r[0];
			}
		} };
	}
	static traverse({ ptr: t, quantifier: n = "one", start: r = "subject", end: i = "object", subjects: a = [null], predicates: o = [null], objects: s = [null], graphs: c = [null], callback: l }) {
		if (n === "one") return e.traverseOne({
			ptr: t,
			start: r,
			end: i,
			subjects: a,
			predicates: o,
			objects: s,
			graphs: c,
			callback: l
		});
		if (n === "oneOrMore") {
			let n = e.traverse({
				ptr: t,
				end: i,
				start: r,
				subjects: a,
				predicates: o,
				objects: s,
				graphs: c,
				callback: l
			});
			return e.traverseMore({
				ptrs: n,
				end: i,
				start: r,
				subjects: a,
				predicates: o,
				objects: s,
				graphs: c,
				callback: l
			});
		}
		if (n === "zeroOrMore") return e.traverseMore({
			ptrs: [t],
			end: i,
			start: r,
			subjects: a,
			predicates: o,
			objects: s,
			graphs: c,
			callback: l
		});
		if (n === "zeroOrOne") return [t, ...e.traverse({
			ptr: t,
			end: i,
			start: r,
			subjects: a,
			predicates: o,
			objects: s,
			graphs: c,
			callback: l
		})];
		throw Error(`unknown quantifier ${n}`);
	}
	static traverseMore({ ptrs: t, end: n, start: r, subjects: i, predicates: a, objects: o, graphs: s, callback: c } = {}) {
		let l = [...t], u, d;
		do {
			u = [];
			for (let l of t) u = [...u, ...e.traverseOne({
				ptr: l,
				end: n,
				start: r,
				subjects: i,
				predicates: a,
				objects: o,
				graphs: s,
				callback: c
			})];
			d && (u = u.filter((e) => !d.has(e.term))), t = u, l = [...l, ...u], d = new xi(l.map((e) => e.term));
		} while (u.length > 0);
		return l;
	}
	static traverseOne({ ptr: e, start: t, end: n, subjects: r, predicates: i, objects: a, graphs: o, callback: s = (e, t) => t.extend(e) } = {}) {
		let c = [];
		for (let l of r) for (let r of i) for (let i of a) for (let a of o) {
			let o = {
				subject: l,
				predicate: r,
				object: i,
				graph: a
			};
			o[t] = e.term;
			for (let r of e.dataset.match(o.subject, o.predicate, o.object, o.graph)) c.push(s(new yi({
				dataset: e.dataset,
				end: n,
				quad: r,
				start: t
			}), e));
		}
		return c;
	}
};
//#endregion
//#region node_modules/grapoi/Path.js
function Ei(e, t) {
	return t ? (n) => t(e.extend(n)) : () => {};
}
var Di = class {
	constructor({ dataset: e, edges: t = [], factory: n, graph: r, term: i }) {
		if (!e && t.length === 0) throw Error("dataset or edges is required");
		if (t.length === 0 && i === void 0 || t.length > 0 && i) throw Error("edges or term must be given");
		this.dataset = e || t[t.length - 1].dataset, this.edges = t, this.factory = n, this._graph = r, t.length === 0 && (this._term = i);
	}
	get edge() {
		return this.edges[this.edges.length - 1];
	}
	get graph() {
		return typeof this._graph == "object" ? this._graph : this.edge && this.edge.graph;
	}
	get length() {
		return this._term === void 0 ? this.edges.length + 1 : 1;
	}
	get startTerm() {
		return this._term || this.edges[0].startTerm;
	}
	get term() {
		return this._term === void 0 ? this.edge.term : this._term;
	}
	get value() {
		let e = this.term;
		return e === null ? void 0 : e.value;
	}
	addIn(e, t, n) {
		return Ti.add({
			ptr: this,
			start: "object",
			end: "subject",
			subjects: t,
			predicates: e,
			graphs: [this.graph || this.factory.defaultGraph()],
			callback: Ei(this, n)
		});
	}
	addList(e, t) {
		return Ti.addList({
			ptr: this,
			predicates: e,
			graphs: [this.graph || this.factory.defaultGraph()],
			items: t
		});
	}
	addOut(e, t, n) {
		return Ti.add({
			ptr: this,
			start: "subject",
			end: "object",
			predicates: e,
			objects: t,
			graphs: [this.graph || this.factory.defaultGraph()],
			callback: Ei(this, n)
		});
	}
	deleteIn(e, t) {
		return Ti.delete({
			ptr: this,
			start: "object",
			subjects: t,
			predicates: e
		});
	}
	deleteList(e) {
		return Ti.deleteList({
			ptr: this,
			predicates: e
		});
	}
	deleteOut(e, t) {
		return Ti.delete({
			ptr: this,
			start: "subject",
			predicates: e,
			objects: t
		});
	}
	execute({ operation: e, quantifier: t, start: n, end: r, subjects: i, predicates: a, objects: o, graphs: s, items: c, callback: l }) {
		return Ti.execute({
			ptr: this,
			operation: e,
			quantifier: t,
			start: n,
			end: r,
			subjects: i,
			predicates: a,
			objects: o,
			graphs: s,
			items: c,
			callback: l
		});
	}
	extend(e) {
		return new this.constructor({
			dataset: this.dataset,
			edges: [...this.edges, e],
			factory: this.factory,
			graph: this._graph
		});
	}
	hasIn(e, t) {
		return Ti.traverse({
			ptr: this,
			start: "object",
			end: "object",
			subjects: t,
			predicates: e,
			graphs: [this.graph]
		});
	}
	hasOut(e, t) {
		return Ti.traverse({
			ptr: this,
			start: "subject",
			end: "subject",
			predicates: e,
			objects: t,
			graphs: [this.graph]
		});
	}
	in(e, t) {
		return Ti.traverse({
			ptr: this,
			start: "object",
			end: "subject",
			subjects: t,
			predicates: e,
			graphs: [this.graph]
		});
	}
	isAny() {
		return !this.term;
	}
	isList() {
		return Ti.isList({ ptr: this });
	}
	list() {
		return Ti.list({ ptr: this });
	}
	*nodes() {
		for (let e = 0; e < this.length; e++) this._term === void 0 ? this.edges.length > e ? yield {
			dataset: this.edges[e].dataset,
			term: this.edges[e].startTerm
		} : this.edges.length === e && (yield {
			dataset: this.edges[e - 1].dataset,
			term: this.edges[e - 1].term
		}) : yield {
			dataset: this.dataset,
			term: this._term
		};
	}
	out(e, t) {
		return Ti.traverse({
			ptr: this,
			predicates: e,
			objects: t,
			graphs: [this.graph]
		});
	}
	*quads() {
		for (let { quad: e } of this.edges) yield e;
	}
	trim() {
		return new this.constructor({
			dataset: this.dataset,
			factory: this.factory,
			graph: this.graph,
			term: this.term
		});
	}
};
//#endregion
//#region node_modules/grapoi/lib/termIsEqual.js
function Oi(e, t) {
	return e ? e.equals(t) : e === t;
}
//#endregion
//#region node_modules/grapoi/lib/ptrIsEqual.js
function ki(e, t) {
	return !(e.dataset !== t.dataset || !Oi(e.graph, t.graph) || !Oi(e.term, t.term));
}
//#endregion
//#region node_modules/grapoi/PathList.js
function Ai(e, t) {
	return t ? (n) => t(new e.constructor({
		factory: e.factory,
		ptrs: [n]
	})) : () => {};
}
var ji = class {
	constructor({ dataset: e, factory: t, ptrs: n, terms: r, graphs: i }) {
		if (this.factory = t, n) this.ptrs = [...n];
		else {
			this.ptrs = [];
			for (let n of r || [null]) for (let r of i || [null]) this.ptrs.push(new Di({
				dataset: e,
				factory: t,
				graph: r,
				term: n
			}));
		}
	}
	get dataset() {
		let e = new Set(this.datasets);
		return e.size === 1 ? e[Symbol.iterator]().next().value : null;
	}
	get datasets() {
		return this.ptrs.map((e) => e.dataset);
	}
	get length() {
		return this.ptrs.length;
	}
	get term() {
		let e = new xi(this.terms);
		if (e.size === 1) return e[Symbol.iterator]().next().value;
	}
	get terms() {
		return this.ptrs.map((e) => e.term);
	}
	get value() {
		return this.term?.value;
	}
	get values() {
		return this.ptrs.map((e) => e.value);
	}
	addIn(e, t, n) {
		let r = Ai(this, n);
		for (let n of this.ptrs) n.addIn(e, t, r);
		return this;
	}
	addList(e, t) {
		if (this.isAny()) throw Error("can't attach a list to an any ptr");
		for (let n of this.ptrs) n.addList(e, t);
		return this;
	}
	addOut(e, t, n) {
		let r = Ai(this, n);
		for (let n of this.ptrs) n.addOut(e, t, r);
		return this;
	}
	clone(e) {
		return new this.constructor({
			factory: this.factory,
			ptrs: this.ptrs,
			...e
		});
	}
	deleteIn(e, t) {
		for (let n of this.ptrs) n.deleteIn(e, t);
		return this;
	}
	deleteList(e) {
		for (let t of this.ptrs) t.deleteList(e);
		return this;
	}
	deleteOut(e, t) {
		for (let n of this.ptrs) n.deleteOut(e, t);
		return this;
	}
	distinct() {
		let e = this.ptrs.reduce((e, t) => (e.some((e) => ki(e, t)) || e.push(t.trim()), e), []);
		return this.clone({ ptrs: e });
	}
	execute(e) {
		return this.clone({ ptrs: this.ptrs.flatMap((t) => t.execute(e)) });
	}
	executeAll(e) {
		let t = this;
		for (let n of e) t = t.execute(n);
		return t;
	}
	filter(e) {
		return this.clone({ ptrs: [...this].filter(e).map((e) => e.ptrs[0]) });
	}
	hasIn(e, t) {
		return this.clone({ ptrs: this.ptrs.flatMap((n) => n.hasIn(e, t)) });
	}
	hasOut(e, t) {
		return this.clone({ ptrs: this.ptrs.flatMap((n) => n.hasOut(e, t)) });
	}
	in(e, t) {
		return this.clone({ ptrs: this.ptrs.flatMap((n) => n.in(e, t)) });
	}
	isAny() {
		return this.ptrs.length > 0 && this.ptrs.some((e) => e.isAny());
	}
	isList() {
		return this.ptrs.length === 1 && this.ptrs[0].isList();
	}
	list() {
		if (!this.isList()) return;
		let e = this.ptrs[0].list(), t = this;
		return (function* () {
			for (let n of e) yield t.clone({ ptrs: [n] });
		})();
	}
	map(e) {
		return [...this].map(e);
	}
	node(e) {
		let t = this.dataset, n = [...e].map((e) => new Di({
			dataset: t,
			factory: this.factory,
			term: e
		}));
		return this.clone({ ptrs: n });
	}
	out(e, t) {
		return this.clone({ ptrs: this.ptrs.flatMap((n) => n.out(e, t)) });
	}
	*quads() {
		for (let { edges: e } of this.ptrs) for (let { quad: t } of e) yield t;
	}
	trim() {
		return this.clone({ ptrs: this.ptrs.map((e) => e.trim()) });
	}
	*[Symbol.iterator]() {
		for (let e of this.ptrs) yield this.clone({ ptrs: [e] });
	}
};
Ci("http://www.w3.org/2002/07/owl#");
var Mi = Ci("http://www.w3.org/1999/02/22-rdf-syntax-ns#"), Ni = Ci("http://www.w3.org/2000/01/rdf-schema#"), J = Ci("http://www.w3.org/ns/shacl#"), Pi = Ci("https://schemas.link/shacl-next#"), Fi = Ci("http://www.w3.org/2001/XMLSchema#");
//#endregion
//#region node_modules/shacl-engine/lib/pathsToString.js
function Ii(e) {
	return e ? `{${[...e.quads()].map((e) => t(e)).join(" ")}}` : "{}";
}
function Li(e) {
	return e ? `{${e.map((e) => Ii(e)).join(" ")}}` : "{}";
}
//#endregion
//#region node_modules/lodash/_trimmedEndIndex.js
var Ri = /* @__PURE__ */ v(((e, t) => {
	var n = /\s/;
	function r(e) {
		for (var t = e.length; t-- && n.test(e.charAt(t)););
		return t;
	}
	t.exports = r;
})), zi = /* @__PURE__ */ v(((e, t) => {
	var n = Ri(), r = /^\s+/;
	function i(e) {
		return e && e.slice(0, n(e) + 1).replace(r, "");
	}
	t.exports = i;
})), Bi = /* @__PURE__ */ v(((e, t) => {
	var n = c(), r = l(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), Vi = /* @__PURE__ */ v(((e, t) => {
	var n = zi(), r = i(), a = Bi(), o = NaN, s = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt;
	function d(e) {
		if (typeof e == "number") return e;
		if (a(e)) return o;
		if (r(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = r(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = n(e);
		var i = c.test(e);
		return i || l.test(e) ? u(e.slice(2), i ? 2 : 8) : s.test(e) ? o : +e;
	}
	t.exports = d;
})), Hi = /* @__PURE__ */ v(((e, t) => {
	var n = Vi(), r = Infinity, i = 17976931348623157e292;
	function a(e) {
		return e ? (e = n(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	t.exports = a;
})), Ui = /* @__PURE__ */ v(((e, t) => {
	var n = Hi();
	function r(e) {
		var t = n(e), r = t % 1;
		return t === t ? r ? t - r : t : 0;
	}
	t.exports = r;
})), Wi = /* @__PURE__ */ v(((e, t) => {
	var n = Ui(), r = "Expected a function";
	function i(e, t) {
		var i;
		if (typeof t != "function") throw TypeError(r);
		return e = n(e), function() {
			return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = void 0), i;
		};
	}
	t.exports = i;
})), Gi = /* @__PURE__ */ f((/* @__PURE__ */ v(((e, t) => {
	var n = Wi();
	function r(e) {
		return n(2, e);
	}
	t.exports = r;
})))(), 1), Ki = class {
	constructor({ details: e, factory: t, options: n, results: r = [] } = {}) {
		this.details = e, this.factory = t, this.options = n, this.results = r, this._conforms = (0, Gi.default)(() => !this.results.some((e) => e.severity.equals(J.Info) || e.severity.equals(J.Violation) || e.severity.equals(J.Warning))), this._ptr = (0, Gi.default)(() => this.build());
	}
	get conforms() {
		return this._conforms();
	}
	get dataset() {
		return this.ptr.dataset;
	}
	get ptr() {
		return this._ptr();
	}
	get term() {
		return this.ptr.term;
	}
	build() {
		let e = new ji({
			dataset: this.factory.dataset(),
			factory: this.factory,
			terms: [this.factory.blankNode()]
		});
		e.addOut([Mi.type], [J.ValidationReport]).addOut([J.conforms], [this.factory.literal(this.conforms.toString(), Fi.boolean)]);
		for (let t of this.results) e.addOut([J.result], [this.factory.blankNode()], (e) => {
			t.build(e, this.options);
		});
		return e;
	}
	coverage() {
		return this.results.flatMap((e) => e.coverage());
	}
};
//#endregion
//#region node_modules/shacl-engine/lib/Result.js
function qi(e, n) {
	return Object.entries(n).reduce((e, [n, r]) => (r && r.termType && (r = t(r)), e.replace(`{$${n}}`, r).replace(`{?${n}}`, r)), e);
}
var Ji = class {
	constructor({ args: e = {}, constraintComponent: t, factory: n, focusNode: r, message: i = [], path: a, results: o = [], severity: s, shape: c, source: l = [], value: u, valuePaths: d = [] } = {}) {
		this.args = e, this.constraintComponent = t, this.factory = n, this.focusNode = r, this.path = a || c.path, this.results = o, this.severity = s, this.shape = c, this.source = l, this.value = u, this.valuePaths = d, this._message = (0, Gi.default)(() => (this.shape.message.length > 0 && (i = this.shape.message), i.length === 0 && (i = this.shape.ptr.node([this.constraintComponent]).out([J.message]).terms), i.map((t) => n.literal(qi(t.value, e, n), t.language || void 0))));
	}
	get message() {
		return this._message();
	}
	build(e, { details: t } = {}) {
		e.addOut([Mi.type], [J.ValidationResult]).addOut([J.focusNode], this.focusNode.terms).addOut([J.resultSeverity], [this.severity]).addOut([J.sourceConstraint], this.source).addOut([J.sourceConstraintComponent], [this.constraintComponent]).addOut([J.sourceShape], this.shape.ptr.terms), this.message && e.addOut([J.resultMessage], this.message);
		let n = (t) => {
			if (t.quantifier === "one") return t.predicates.length > 1 ? e.node([this.factory.blankNode()]).addList([J.alternativePath], t.predicates) : t.start === "object" ? e.node([this.factory.blankNode()]).addOut([J.inversePath], [t.predicates[0]]) : e.node([t.predicates[0]]);
			if (t.quantifier === "oneOrMore") return e.node([this.factory.blankNode()]).addOut([J.oneOrMorePath], [t.predicates[0]]);
			if (t.quantifier === "zeroOrMore") return e.node([this.factory.blankNode()]).addOut([J.zeroOrMorePath], [t.predicates[0]]);
			if (t.quantifier === "zeroOrOne") return e.node([this.factory.blankNode()]).addOut([J.zeroOrOnePath], [t.predicates[0]]);
		};
		if (this.path && (this.path.length === 1 ? e.addOut([J.resultPath], n(this.path[0]).terms) : e.addList([J.resultPath], this.path.map((e) => n(e).term))), this.value !== void 0 && e.addOut([J.value], this.value.terms), t) for (let n of this.results) e.addOut([J.detail], [this.factory.blankNode()], (e) => {
			n.build(e, { details: t });
		});
	}
	coverage() {
		return [...this.valuePaths.flatMap((e) => [...e.quads()]), ...this.results.flatMap((e) => e.coverage())];
	}
}, Yi = class e {
	constructor({ factory: e, focusNode: t, options: n = {
		debug: !1,
		details: !1
	}, processed: r = /* @__PURE__ */ new Set(), report: i = new Ki({
		factory: e,
		options: n
	}), results: a = /* @__PURE__ */ new Map(), shape: o, value: s, valueOrNode: c, valuePaths: l, values: u } = {}) {
		this.factory = e, this.focusNode = t, this.options = n, this.processed = r, this.report = i, this.results = a, this.shape = o, this.value = s, this.valuePaths = l, this.valueOrNode = c, this.values = u;
	}
	create({ child: t, focusNode: n = this.focusNode, shape: r = this.shape, value: i = this.value, valueOrNode: a = this.valueOrNode, valuePaths: o = this.valuePaths, values: s = this.values } = {}) {
		return new e({
			factory: this.factory,
			focusNode: n,
			options: this.options,
			processed: this.processed,
			report: t ? new Ki({
				factory: this.factory,
				options: this.options
			}) : this.report,
			results: this.results,
			shape: r,
			value: i,
			valueOrNode: a,
			valuePaths: o,
			values: s
		});
	}
	id({ shape: e = this.shape } = {}) {
		return `${t(e.ptr.term)} - ${t(this.focusNode.term)} - ${Li(this.valuePaths)}`;
	}
	result(e) {
		let t = new Ji({
			factory: this.factory,
			focusNode: this.focusNode,
			shape: this.shape,
			value: this.value,
			valuePaths: this.valuePaths,
			...e
		}), n = this.id();
		this.results.has(n) ? this.results.get(n).add(t) : this.results.set(n, /* @__PURE__ */ new Set([t])), this.report.results.push(t);
	}
	debug(e, t) {
		this.options.debug && this.result({
			severity: Pi.Debug,
			constraintComponent: e,
			...t
		});
	}
	trace(e, t) {
		this.options.trace && this.result({
			severity: Pi.Trace,
			constraintComponent: e,
			...t
		});
	}
	test(e, t, n) {
		e ? this.debug(t, n) : this.violation(t, n);
	}
	violation(e, t) {
		this.result({
			constraintComponent: e,
			severity: this.shape.severity || J.Violation,
			...t
		});
	}
};
//#endregion
//#region node_modules/shacl-engine/lib/validations/traversal.js
function Xi() {
	return { generic: Zi() };
}
function Zi() {
	return (e) => {
		e.trace(Pi.TraversalConstraintComponent, {
			args: {},
			message: [e.factory.literal("Traversal")],
			value: e.valueOrNode
		});
	};
}
//#endregion
//#region node_modules/shacl-engine/lib/Registry.js
var Qi = class {
	constructor(e) {
		this.validations = new vi(e);
	}
	compile(e) {
		let t = e.validator.options.coverage;
		if (e.deactivated) return [];
		let n = !1, r = /* @__PURE__ */ new Set();
		for (let t of e.ptr.execute({
			start: "subject",
			end: "predicate"
		})) {
			let e = this.validations.get(t.term);
			e && (r.add(e), t.term.equals(J.property) && (n = !0));
		}
		return t && e.isPropertyShape && !n && r.add(Xi), [...r].map((t) => t(e)).filter(Boolean);
	}
}, $i = /* @__PURE__ */ v(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Translator = void 0, e.Translator = class {
		constructor() {
			this.supportedRdfDatatypes = [], this.fromRdfHandlers = {}, this.toRdfHandlers = {};
		}
		static incorrectRdfDataType(e) {
			throw Error(`Invalid RDF ${e.datatype.value} value: '${e.value}'`);
		}
		registerHandler(e, t, n) {
			for (let n of t) this.supportedRdfDatatypes.push(n), this.fromRdfHandlers[n.value] = e;
			for (let t of n) {
				let n = this.toRdfHandlers[t];
				n || (this.toRdfHandlers[t] = n = []), n.push(e);
			}
		}
		fromRdf(e, t) {
			let n = this.fromRdfHandlers[e.datatype.value];
			return n ? n.fromRdf(e, t) : e.value;
		}
		toRdf(e, t) {
			let n = this.toRdfHandlers[typeof e];
			if (n) for (let r of n) {
				let n = r.toRdf(e, t);
				if (n) return n;
			}
			throw Error(`Invalid JavaScript value: '${e}'`);
		}
		getSupportedRdfDatatypes() {
			return this.supportedRdfDatatypes;
		}
		getSupportedJavaScriptPrimitives() {
			return Object.keys(this.toRdfHandlers);
		}
	};
})), ea = /* @__PURE__ */ v(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeHandlerBoolean = void 0;
	var t = $i(), n = class e {
		fromRdf(e, n) {
			switch (e.value) {
				case "true": return !0;
				case "false": return !1;
				case "1": return !0;
				case "0": return !1;
			}
			return n && t.Translator.incorrectRdfDataType(e), !1;
		}
		toRdf(t, { datatype: n, dataFactory: r }) {
			return r.literal(t ? "true" : "false", n || r.namedNode(e.TYPE));
		}
	};
	e.TypeHandlerBoolean = n, n.TYPE = "http://www.w3.org/2001/XMLSchema#boolean";
})), ta = /* @__PURE__ */ v(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeHandlerDate = void 0;
	var t = $i(), n = class e {
		fromRdf(n, r) {
			switch (r && !n.value.match(e.VALIDATORS[n.datatype.value.substr(33, n.datatype.value.length)]) && t.Translator.incorrectRdfDataType(n), n.datatype.value) {
				case "http://www.w3.org/2001/XMLSchema#gDay": return new Date(0, 0, parseInt(n.value, 10));
				case "http://www.w3.org/2001/XMLSchema#gMonthDay":
					let e = n.value.split("-");
					return new Date(0, parseInt(e[0], 10) - 1, parseInt(e[1], 10));
				case "http://www.w3.org/2001/XMLSchema#gYear": return /* @__PURE__ */ new Date(n.value + "-01-01");
				case "http://www.w3.org/2001/XMLSchema#gYearMonth": return /* @__PURE__ */ new Date(n.value + "-01");
				default: return new Date(n.value);
			}
		}
		toRdf(t, { datatype: n, dataFactory: r }) {
			if (n ||= r.namedNode(e.TYPES[0]), !(t instanceof Date)) return null;
			let i = t, a;
			switch (n.value) {
				case "http://www.w3.org/2001/XMLSchema#gDay":
					a = String(i.getUTCDate());
					break;
				case "http://www.w3.org/2001/XMLSchema#gMonthDay":
					a = i.getUTCMonth() + 1 + "-" + i.getUTCDate();
					break;
				case "http://www.w3.org/2001/XMLSchema#gYear":
					a = String(i.getUTCFullYear());
					break;
				case "http://www.w3.org/2001/XMLSchema#gYearMonth":
					a = i.getUTCFullYear() + "-" + (i.getUTCMonth() + 1);
					break;
				case "http://www.w3.org/2001/XMLSchema#date":
					a = i.toISOString().replace(/T.*$/, "");
					break;
				default: a = i.toISOString();
			}
			return r.literal(a, n);
		}
	};
	e.TypeHandlerDate = n, n.TYPES = [
		"http://www.w3.org/2001/XMLSchema#dateTime",
		"http://www.w3.org/2001/XMLSchema#date",
		"http://www.w3.org/2001/XMLSchema#gDay",
		"http://www.w3.org/2001/XMLSchema#gMonthDay",
		"http://www.w3.org/2001/XMLSchema#gYear",
		"http://www.w3.org/2001/XMLSchema#gYearMonth"
	], n.VALIDATORS = {
		date: /^[0-9]+-[0-9][0-9]-[0-9][0-9]Z?$/,
		dateTime: /^[0-9]+-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9](\.[0-9][0-9][0-9])?((Z?)|([\+-][0-9][0-9]:[0-9][0-9]))$/,
		gDay: /^[0-9]+$/,
		gMonthDay: /^[0-9]+-[0-9][0-9]$/,
		gYear: /^[0-9]+$/,
		gYearMonth: /^[0-9]+-[0-9][0-9]$/
	};
})), na = /* @__PURE__ */ v(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeHandlerNumberDouble = void 0;
	var t = $i(), n = class e {
		fromRdf(e, n) {
			let r = parseFloat(e.value);
			return n && isNaN(r) && t.Translator.incorrectRdfDataType(e), r;
		}
		toRdf(t, { datatype: n, dataFactory: r }) {
			return n ||= r.namedNode(e.TYPES[0]), isNaN(t) ? r.literal("NaN", n) : isFinite(t) ? t % 1 == 0 ? null : r.literal(t.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), n) : r.literal(t > 0 ? "INF" : "-INF", n);
		}
	};
	e.TypeHandlerNumberDouble = n, n.TYPES = [
		"http://www.w3.org/2001/XMLSchema#double",
		"http://www.w3.org/2001/XMLSchema#decimal",
		"http://www.w3.org/2001/XMLSchema#float"
	];
})), ra = /* @__PURE__ */ v(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeHandlerNumberInteger = void 0;
	var t = $i(), n = class e {
		fromRdf(e, n) {
			let r = parseInt(e.value, 10);
			return n && (isNaN(r) || e.value.indexOf(".") >= 0) && t.Translator.incorrectRdfDataType(e), r;
		}
		toRdf(t, { datatype: n, dataFactory: r }) {
			return r.literal(String(t), n || (t <= e.MAX_INT && t >= e.MIN_INT ? r.namedNode(e.TYPES[0]) : r.namedNode(e.TYPES[1])));
		}
	};
	e.TypeHandlerNumberInteger = n, n.TYPES = [
		"http://www.w3.org/2001/XMLSchema#integer",
		"http://www.w3.org/2001/XMLSchema#long",
		"http://www.w3.org/2001/XMLSchema#int",
		"http://www.w3.org/2001/XMLSchema#byte",
		"http://www.w3.org/2001/XMLSchema#short",
		"http://www.w3.org/2001/XMLSchema#negativeInteger",
		"http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
		"http://www.w3.org/2001/XMLSchema#nonPositiveInteger",
		"http://www.w3.org/2001/XMLSchema#positiveInteger",
		"http://www.w3.org/2001/XMLSchema#unsignedByte",
		"http://www.w3.org/2001/XMLSchema#unsignedInt",
		"http://www.w3.org/2001/XMLSchema#unsignedLong",
		"http://www.w3.org/2001/XMLSchema#unsignedShort"
	], n.MAX_INT = 2147483647, n.MIN_INT = -2147483648;
})), ia = /* @__PURE__ */ v(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeHandlerString = void 0;
	var t = class {
		fromRdf(e) {
			return e.value;
		}
		toRdf(e, { datatype: t, dataFactory: n }) {
			return n.literal(e, t);
		}
	};
	e.TypeHandlerString = t, t.TYPES = [
		"http://www.w3.org/2001/XMLSchema#string",
		"http://www.w3.org/2001/XMLSchema#normalizedString",
		"http://www.w3.org/2001/XMLSchema#anyURI",
		"http://www.w3.org/2001/XMLSchema#base64Binary",
		"http://www.w3.org/2001/XMLSchema#language",
		"http://www.w3.org/2001/XMLSchema#Name",
		"http://www.w3.org/2001/XMLSchema#NCName",
		"http://www.w3.org/2001/XMLSchema#NMTOKEN",
		"http://www.w3.org/2001/XMLSchema#token",
		"http://www.w3.org/2001/XMLSchema#hexBinary",
		"http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
		"http://www.w3.org/1999/02/22-rdf-syntax-ns#dirLangString",
		"http://www.w3.org/2001/XMLSchema#time",
		"http://www.w3.org/2001/XMLSchema#duration"
	];
})), aa = /* @__PURE__ */ v(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), n(ea(), e), n(ta(), e), n(na(), e), n(ra(), e), n(ia(), e);
})), oa = /* @__PURE__ */ v(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
})), sa = (/* @__PURE__ */ v(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.fromRdf = l, e.toRdf = u, e.getTermRaw = d, e.getSupportedRdfDatatypes = f, e.getSupportedJavaScriptPrimitives = p;
	var r = a(), i = aa(), o = $i();
	n(aa(), e), n(oa(), e), n($i(), e);
	var s = new r.DataFactory(), c = new o.Translator();
	c.registerHandler(new i.TypeHandlerString(), i.TypeHandlerString.TYPES.map((e) => s.namedNode(e)), ["string"]), c.registerHandler(new i.TypeHandlerBoolean(), [i.TypeHandlerBoolean.TYPE].map((e) => s.namedNode(e)), ["boolean"]), c.registerHandler(new i.TypeHandlerNumberDouble(), i.TypeHandlerNumberDouble.TYPES.map((e) => s.namedNode(e)), ["number"]), c.registerHandler(new i.TypeHandlerNumberInteger(), i.TypeHandlerNumberInteger.TYPES.map((e) => s.namedNode(e)), ["number"]), c.registerHandler(new i.TypeHandlerDate(), i.TypeHandlerDate.TYPES.map((e) => s.namedNode(e)), ["object"]);
	function l(e, t) {
		return c.fromRdf(e, t);
	}
	function u(e, t) {
		return t && "namedNode" in t && (t = { dataFactory: t }), t ||= {}, t && !t.dataFactory && (t.dataFactory = s), c.toRdf(e, t);
	}
	function d(e, t) {
		return e.termType === "Literal" ? l(e, t) : e.value;
	}
	function f() {
		return c.getSupportedRdfDatatypes();
	}
	function p() {
		return c.getSupportedJavaScriptPrimitives();
	}
})))();
function ca(e) {
	if (e.term.termType !== "BlankNode") return {
		quantifier: "one",
		start: "subject",
		end: "object",
		predicates: [e.term]
	};
	let t = e.out([J.alternativePath]);
	if (t.ptrs.length === 1 && t.ptrs[0].isList()) return {
		quantifier: "one",
		start: "subject",
		end: "object",
		predicates: [...t.list()].map((e) => e.term)
	};
	let n = e.out([J.inversePath]);
	if (n.term) return {
		quantifier: "one",
		start: "object",
		end: "subject",
		predicates: [n.term]
	};
	let r = e.out([J.oneOrMorePath]);
	if (r.term) return {
		quantifier: "oneOrMore",
		start: "subject",
		end: "object",
		predicates: [r.term]
	};
	let i = e.out([J.zeroOrMorePath]);
	if (i.term) return {
		quantifier: "zeroOrMore",
		start: "subject",
		end: "object",
		predicates: [i.term]
	};
	let a = e.out([J.zeroOrOnePath]);
	if (a.term) return {
		quantifier: "zeroOrOne",
		start: "subject",
		end: "object",
		predicates: [a.term]
	};
}
function la(e) {
	return e.terms.length === 0 ? null : e.ptrs[0].isList() ? [...e.list()].map((e) => ca(e)) : [ca(e)];
}
//#endregion
//#region node_modules/shacl-engine/lib/ShapeValidator.js
var ua = class {
	constructor(e) {
		this.shape = e, this._compiled = (0, Gi.default)(() => this.shape.validator.registry.compile(e));
	}
	get compiled() {
		return this._compiled();
	}
	async validate(e) {
		return e.focusNode.dataset.size === 0 || (this.shape.isPropertyShape ? await this.validateProperty(e) : await this.validateNode(e)), e;
	}
	async validateNode(e) {
		let t = e.create({
			shape: this.shape,
			valueOrNode: e.value || e.focusNode
		});
		for (let e of this.compiled) e.node && await e.node(t), e.generic && await e.generic(t);
	}
	async validateProperty(e) {
		let t;
		t = this.shape.isSparqlShape ? e.focusNode : e.focusNode.executeAll(this.shape.path);
		let n = t.node(new xi(t.terms)), r = [...t].reduce((e, n) => {
			let r = n.term, i = t.node([r]);
			return e.has(r) || e.set(r, {
				value: i,
				valuePaths: []
			}), e.get(r).valuePaths.push(n), e;
		}, new vi()).values(), i = e.create({
			shape: this.shape,
			values: n
		});
		for (let e of this.compiled) e.property && await e.property(i);
		for (let { value: t, valuePaths: n } of r) {
			let r = e.create({
				shape: this.shape,
				value: t,
				valueOrNode: t,
				valuePaths: n
			});
			for (let e of this.compiled) e.generic && await e.generic(r);
		}
	}
};
//#endregion
//#region node_modules/shacl-engine/lib/resolveClasses.js
function da(e) {
	let t = new xi(), n = new ji({
		dataset: e.dataset,
		terms: e.terms
	}).execute({
		quantifier: "zeroOrMore",
		start: "object",
		end: "subject",
		predicates: [Ni.subClassOf]
	});
	for (let e of n.ptrs) for (let { term: n } of e.nodes()) t.add(n);
	return t;
}
//#endregion
//#region node_modules/shacl-engine/lib/TargetResolver.js
var fa = class {
	constructor(e, { registry: t }) {
		this.registry = t, this.targetClass = new xi([...da(e.hasOut([Mi.type], [J.NodeShape])), ...da(e.out([J.targetClass]))]), this.targetNode = e.out([J.targetNode]).terms, this.targetObjectsOf = e.out([J.targetObjectsOf]).terms, this.targetSubjectsOf = e.out([J.targetSubjectsOf]).terms, this.targets = [...e.out([J.target])];
	}
	async resolve(e) {
		let t = e.focusNode.node([null]), n = [
			...e.focusNode.hasOut([Mi.type], this.targetClass).ptrs,
			...e.focusNode.node(this.targetNode).ptrs,
			...t.execute({
				start: "object",
				end: "object",
				predicates: this.targetObjectsOf
			}).ptrs,
			...t.execute({
				start: "subject",
				end: "subject",
				predicates: this.targetSubjectsOf
			}).ptrs
		];
		for (let t of this.targets) for (let [, r] of this.registry.targetResolvers) {
			let i = await r(t, e);
			n.push(...e.focusNode.node(i).ptrs);
		}
		let r = e.focusNode.clone({ ptrs: n });
		return r.node([...new xi(r.terms)]);
	}
}, pa = class {
	constructor(e, { validator: t }) {
		this.ptr = e, this.validator = t, this._deactivated = (0, Gi.default)(() => {
			let e = this.ptr.out([J.deactivated]).term;
			return e && (0, sa.fromRdf)(e);
		}), this._message = (0, Gi.default)(() => this.ptr.out([J.message]).terms), this._path = (0, Gi.default)(() => la(this.ptr.out([J.path]))), this._severity = (0, Gi.default)(() => this.ptr.out([J.severity]).term), this._shapeValidator = (0, Gi.default)(() => new ua(this)), this._sparql = (0, Gi.default)(() => this.ptr.out([J.sparql])), this._targetResolver = (0, Gi.default)(() => new fa(this.ptr, { registry: this.validator.targetResolverRegistry }));
	}
	get deactivated() {
		return this._deactivated();
	}
	get isPropertyShape() {
		return !!this.path;
	}
	get isSparqlShape() {
		return this.sparql.terms.length > 0;
	}
	get path() {
		return this._path();
	}
	get targetResolver() {
		return this._targetResolver();
	}
	get message() {
		return this._message();
	}
	get severity() {
		return this._severity();
	}
	get shapeValidator() {
		return this._shapeValidator();
	}
	get sparql() {
		return this._sparql();
	}
	async resolveTargets(e) {
		return this.targetResolver.resolve(e);
	}
	async validate(e) {
		let t = e.id({ shape: this });
		if (e.processed.has(t)) {
			if (e.results.has(t)) for (let n of e.results.get(t)) e.report.results.push(n);
			return e;
		}
		return e.processed.add(t), this.shapeValidator.validate(e);
	}
}, ma = class {
	constructor(e) {
		this.targetResolvers = new vi(e);
	}
};
//#endregion
//#region node_modules/shacl-engine/lib/validations/cardinality.js
function ha(e) {
	return { property: ga(parseInt(e.ptr.out([J.maxCount]).value)) };
}
function ga(e) {
	return (t) => {
		t.test(t.values.terms.length <= e, J.MaxCountConstraintComponent, {
			args: { maxCount: e },
			message: [t.factory.literal("More than {$maxCount} values")]
		});
	};
}
function _a(e) {
	return { property: va(parseInt(e.ptr.out([J.minCount]).value)) };
}
function va(e) {
	return (t) => {
		t.test(t.values.terms.length >= e, J.MinCountConstraintComponent, {
			args: { minCount: e },
			message: [t.factory.literal("Less than {$minCount} values")]
		});
	};
}
//#endregion
//#region node_modules/shacl-engine/lib/async.js
async function ya(e, t) {
	for (let n of e) if (!await t(n)) return !1;
	return !0;
}
async function ba(e, t) {
	return (await Promise.all(e.map((e) => t(e)))).filter(Boolean);
}
async function xa(e, t) {
	return Promise.all(e.map(t));
}
async function Sa(e, t) {
	for (let n of e) if (await t(n)) return !0;
	return !1;
}
//#endregion
//#region node_modules/shacl-engine/lib/validations/logical.js
function Ca(e) {
	return { generic: wa([...e.ptr.out([J.and])].flatMap((e) => [...e.list()]).map((t) => e.validator.shape(t))) };
}
function wa(e) {
	return async (t) => {
		let n = await xa(e, async (e) => (await e.validate(t.create({
			child: !0,
			focusNode: t.valueOrNode
		}))).report), r = n.every((e) => e.conforms);
		t.test(r, J.AndConstraintComponent, {
			results: n.flatMap((e) => e.results),
			value: t.valueOrNode
		});
	};
}
function Ta(e) {
	return { generic: Ea(e.validator.shape(e.ptr.out([J.not]))) };
}
function Ea(e) {
	return async (t) => {
		let n = (await e.validate(t.create({
			child: !0,
			focusNode: t.valueOrNode
		}))).report, r = !n.conforms;
		t.test(r, J.NotConstraintComponent, {
			args: { not: e.ptr.term },
			message: [t.factory.literal("Value does have shape {$not}")],
			results: n.results,
			value: t.valueOrNode
		});
	};
}
function Da(e) {
	return { generic: Oa([...e.ptr.out([J.or])].flatMap((e) => [...e.list()]).map((t) => e.validator.shape(t))) };
}
function Oa(e) {
	return async (t) => {
		let n = [], r;
		if (t.options.debug || t.options.details) {
			let i = await xa(e, async (e) => (await e.validate(t.create({
				child: !0,
				focusNode: t.valueOrNode
			}))).report);
			n = i.flatMap((e) => e.results), r = i.some((e) => e.conforms);
		} else r = await Sa(e, async (e) => (await e.validate(t.create({
			child: !0,
			focusNode: t.valueOrNode
		}))).report.conforms);
		t.test(r, J.OrConstraintComponent, {
			results: n,
			value: t.valueOrNode
		});
	};
}
function ka(e) {
	return { generic: Aa([...e.ptr.out([J.xone])].flatMap((e) => [...e.list()]).map((t) => e.validator.shape(t))) };
}
function Aa(e) {
	return async (t) => {
		let n = await xa(e, async (e) => (await e.validate(t.create({
			child: !0,
			focusNode: t.valueOrNode
		}))).report), r = n.filter((e) => e.conforms).length === 1;
		t.test(r, J.XoneConstraintComponent, {
			results: n.flatMap((e) => e.results),
			value: t.valueOrNode
		});
	};
}
//#endregion
//#region node_modules/shacl-engine/lib/validations/other.js
function ja(e) {
	return (0, sa.fromRdf)(e.ptr.out([J.closed]).term) ? { node: Ma(new xi(e.ptr.out([J.property]).map((t) => e.validator.shape(t)).filter((e) => !e.deactivated).map((e) => e.path[0].predicates[0])), new xi([...e.ptr.out([J.ignoredProperties]).list() || []].map((e) => e.term))) } : null;
}
function Ma(e, t) {
	return (n) => {
		let r = n.focusNode.execute({
			start: "subject",
			end: "predicate"
		}).filter((n) => !t.has(n.term) && !e.has(n.term));
		if (r.ptrs.length > 0) for (let e of r) n.violation(J.ClosedConstraintComponent, {
			message: [n.factory.literal("Predicate is not allowed (closed shape)")],
			path: [{
				quantifier: "one",
				start: "subject",
				end: "object",
				predicates: [e.term]
			}],
			value: n.focusNode.node([[...e.quads()][0].object])
		});
		else n.debug(J.ClosedConstraintComponent);
	};
}
function Na(e) {
	let t = e.ptr.out([J.hasValue]).term;
	return {
		node: Pa(t),
		property: Fa(t)
	};
}
function Pa(e) {
	return (t) => {
		t.test(e.equals(t.valueOrNode.term), J.HasValueConstraintComponent, {
			args: { hasValue: e },
			message: [t.factory.literal("Value must be {$hasValue}")]
		});
	};
}
function Fa(e) {
	return (t) => {
		let n = [...t.values].some((t) => e.equals(t.term));
		t.test(n, J.HasValueConstraintComponent, {
			args: { hasValue: e },
			message: [t.factory.literal("Missing expected value {$hasValue}")]
		});
	};
}
function Ia(e) {
	return { generic: La(new xi([...e.ptr.out([J.in]).list()].map((e) => e.term))) };
}
function La(e) {
	return (t) => {
		t.test(e.has(t.valueOrNode.term), J.InConstraintComponent, {
			args: { in: [...e].map((e) => e.value).join(", ") },
			message: [t.factory.literal("Value is not in {$in}")],
			value: t.valueOrNode
		});
	};
}
//#endregion
//#region node_modules/shacl-engine/lib/compareTerms.js
function Ra(e, t) {
	if (!e || e.termType !== "Literal" || !t || t.termType !== "Literal" || za(e) !== za(t)) return null;
	let n = (0, sa.fromRdf)(e), r = (0, sa.fromRdf)(t);
	return typeof n == typeof r ? typeof n == "string" ? n.localeCompare(r) : n - r : null;
}
function za(e) {
	return Fi.dateTime.equals(e.datatype) && /^.*(((\+|-)\d{2}:\d{2})|Z)$/.test(e.value);
}
//#endregion
//#region node_modules/shacl-engine/lib/validations/pair.js
function Ba(e) {
	let t = e.ptr.out([J.disjoint]).term;
	return { generic: Va(t) };
}
function Va(e) {
	return (t) => {
		let n = t.focusNode.dataset.match(t.focusNode.term, e, t.valueOrNode.term);
		t.test(n.size === 0, J.DisjointConstraintComponent, {
			args: { disjoint: e },
			message: [t.factory.literal("Value node must not also be one of the values of {$disjoint}")],
			value: t.valueOrNode
		});
	};
}
function Ha(e) {
	let t = e.ptr.out([J.equals]).term;
	return {
		node: Ua(t),
		property: Wa(t)
	};
}
function Ua(e) {
	return (t) => {
		let n = t.focusNode.out([e]), r = n.filter((e) => !e.term.equals(t.focusNode.term)), i = n.terms.length !== 0 && r.terms.length === 0;
		t.test(i, J.EqualsConstraintComponent, {
			args: { equals: e },
			message: [t.factory.literal("Must have same values as {$equals}")],
			value: r.terms[0] && t.focusNode.node([r.terms[0]]) || t.focusNode
		});
	};
}
function Wa(e) {
	return (t) => {
		let n = new xi(t.focusNode.out([e]).terms), r = new xi(t.values.terms), i = [...r].filter((e) => !n.has(e)), a = [...n].filter((e) => !r.has(e)), o = [...i, ...a];
		for (let n of o) t.violation(J.EqualsConstraintComponent, {
			args: { equals: e },
			message: [t.factory.literal("Must have same values as {$equals}")],
			value: t.focusNode.node([n])
		});
		o.length === 0 && t.debug(J.EqualsConstraintComponent, {
			args: { equals: e },
			message: [t.factory.literal("Must have same values as {$equals}")]
		});
	};
}
function Ga(e) {
	let t = e.ptr.out([J.lessThan]).term;
	return { property: Ka(t) };
}
function Ka(e) {
	return (t) => {
		let n = t.focusNode.out([e]).terms;
		for (let r of t.values) for (let i of n) {
			let n = Ra(r.term, i);
			n === null || n >= 0 ? t.violation(J.LessThanConstraintComponent, {
				args: { lessThan: e },
				message: [t.factory.literal("Value is not less than value of {$lessThan}")],
				value: r
			}) : t.debug(J.LessThanConstraintComponent, {
				args: { lessThan: e },
				message: [t.factory.literal("Value is not less than value of {$lessThan}")],
				value: r
			});
		}
	};
}
function qa(e) {
	let t = e.ptr.out([J.lessThanOrEquals]).term;
	return { property: Ja(t) };
}
function Ja(e) {
	return (t) => {
		let n = t.focusNode.out([e]).terms;
		for (let r of t.values) for (let i of n) {
			let n = Ra(r.term, i);
			n === null || n > 0 ? t.violation(J.LessThanOrEqualsConstraintComponent, {
				args: { lessThanOrEquals: e },
				message: [t.factory.literal("Value is not less than or equal to value of {$lessThanOrEquals}")],
				value: r
			}) : t.debug(J.LessThanOrEqualsConstraintComponent, {
				args: { lessThanOrEquals: e },
				message: [t.factory.literal("Value is not less than or equal to value of {$lessThanOrEquals}")],
				value: r
			});
		}
	};
}
//#endregion
//#region node_modules/shacl-engine/lib/validations/range.js
function Ya(e) {
	let t = e.ptr.out([J.maxExclusive]).term;
	return { generic: Xa(t) };
}
function Xa(e) {
	return (t) => {
		let n = Ra(t.valueOrNode.term, e);
		t.test(n !== null && n < 0, J.MaxExclusiveConstraintComponent, {
			args: { maxExclusive: e },
			message: [t.factory.literal("Value is not less than {$maxExclusive}")],
			value: t.valueOrNode
		});
	};
}
function Za(e) {
	let t = e.ptr.out([J.maxInclusive]).term;
	return { generic: Qa(t) };
}
function Qa(e) {
	return (t) => {
		let n = Ra(t.valueOrNode.term, e);
		t.test(n !== null && n <= 0, J.MaxInclusiveConstraintComponent, {
			args: { maxInclusive: e },
			message: [t.factory.literal("Value is not less than or equal to {$maxInclusive}")],
			value: t.valueOrNode
		});
	};
}
function $a(e) {
	let t = e.ptr.out([J.minExclusive]).term;
	return { generic: eo(t) };
}
function eo(e) {
	return (t) => {
		let n = Ra(t.valueOrNode.term, e);
		t.test(n !== null && n > 0, J.MinExclusiveConstraintComponent, {
			args: { minExclusive: e },
			message: [t.factory.literal("Value is not greater than {$minExclusive}")],
			value: t.valueOrNode
		});
	};
}
function to(e) {
	let t = e.ptr.out([J.minInclusive]).term;
	return { generic: no(t) };
}
function no(e) {
	return (t) => {
		let n = Ra(t.valueOrNode.term, e);
		t.test(n !== null && n >= 0, J.MinInclusiveConstraintComponent, {
			args: { minInclusive: e },
			message: [t.factory.literal("Value is not greater than or equal to {$minInclusive}")],
			value: t.valueOrNode
		});
	};
}
//#endregion
//#region node_modules/shacl-engine/lib/validations/shape.js
function ro(e) {
	return { generic: io([...e.ptr.out([J.node])].map((t) => e.validator.shape(t))) };
}
function io(e) {
	return async (t) => {
		for (let n of e) {
			let e = await n.validate(t.create({
				child: !0,
				focusNode: t.valueOrNode
			}));
			t.test(e.report.conforms, J.NodeConstraintComponent, {
				args: { node: n.ptr.term },
				message: [t.factory.literal("Value does not have shape {$node}")],
				results: e.report.results,
				value: t.valueOrNode
			});
		}
	};
}
function ao(e) {
	return { generic: oo([...e.ptr.out([J.property])].map((t) => e.validator.shape(t))) };
}
function oo(e) {
	return async (t) => {
		let n = t.create({ focusNode: t.valueOrNode });
		for (let t of e) await t.validate(n);
	};
}
function so(e) {
	let t = e.validator.shape(e.ptr.out([J.qualifiedValueShape])), n = e.ptr.out([J.qualifiedValueShapesDisjoint]).term, r = n ? (0, sa.fromRdf)(n) : !1, i = e.ptr.out([J.qualifiedMaxCount]).term, a = i ? parseInt(i.value) : null, o = e.ptr.out([J.qualifiedMinCount]).term;
	return { property: co(t, r, a, o ? parseInt(o.value) : null) };
}
function co(e, t, n, r) {
	return async (i) => {
		let a = [], o = [];
		t && (o = new Set(i.shape.ptr.in([J.property]).out([J.property]).out([J.qualifiedValueShape]).filter((t) => !t.term.equals(e.ptr.term)).map((e) => i.shape.validator.shape(e))));
		let s = (await ba(i.values, async (t) => {
			let n = (await e.validate(i.create({
				child: !0,
				focusNode: t
			}))).report;
			if (a.push(n.results), !n.conforms) return !1;
			if (o.length === 0) return !0;
			if (i.options.debug || i.options.details) {
				let e = await xa([...o], async (e) => (await e.validate(i.create({
					child: !0,
					focusNode: t
				}))).report);
				return a.push(e.flatMap((e) => e.results)), !e.every((e) => e.conforms);
			} else return !await ya([...o], async (e) => (await e.validate(i.create({
				child: !0,
				focusNode: t
			}))).report.conforms);
		})).length;
		n !== null && i.test(s <= n, J.QualifiedMaxCountConstraintComponent, {
			args: {
				qualifiedMaxCount: n,
				qualifiedValueShape: e.ptr.term,
				qualifiedValueShapesDisjoint: t
			},
			message: [i.factory.literal("More than {$qualifiedMaxCount} values have shape {$qualifiedValueShape}")],
			results: a.flat()
		}), r !== null && i.test(s >= r, J.QualifiedMinCountConstraintComponent, {
			args: {
				qualifiedMinCount: r,
				qualifiedValueShape: e.ptr.term,
				qualifiedValueShapesDisjoint: t
			},
			message: [i.factory.literal("Less than {$qualifiedMinCount} values have shape {$qualifiedValueShape}")],
			results: a.flat()
		});
	};
}
//#endregion
//#region node_modules/shacl-engine/lib/validations/string.js
function lo(e, t) {
	return t ? t.slice(0, e.length) === e : !1;
}
function uo(e) {
	return { generic: fo([...new Set([...e.ptr.out([J.languageIn]).list()].map((e) => e.value))]) };
}
function fo(e) {
	return (t) => {
		let n = e.some((e) => lo(e, t.valueOrNode.term.language));
		t.test(n, J.LanguageInConstraintComponent, {
			args: { languageIn: e.join(", ") },
			message: [t.factory.literal("Language does not match any of {$languageIn}")],
			value: t.valueOrNode
		});
	};
}
function po(e) {
	return { generic: mo(parseInt(e.ptr.out([J.maxLength]).value)) };
}
function mo(e) {
	return (t) => {
		let n = t.valueOrNode.term.termType !== "BlankNode" && t.valueOrNode.value.length <= e;
		t.test(n, J.MaxLengthConstraintComponent, {
			args: { maxLength: e },
			message: [t.factory.literal("Value has more than {$maxLength} characters")],
			value: t.valueOrNode
		});
	};
}
function ho(e) {
	return { generic: go(parseInt(e.ptr.out([J.minLength]).value)) };
}
function go(e) {
	return (t) => {
		let n = t.valueOrNode.term.termType !== "BlankNode" && t.valueOrNode.value.length >= e;
		t.test(n, J.MinLengthConstraintComponent, {
			args: { minLength: e },
			message: [t.factory.literal("Value has less than {$minLength} characters")],
			value: t.valueOrNode
		});
	};
}
function _o(e) {
	let t = e.ptr.out([J.pattern]).value, n = e.ptr.out([J.flags]).value;
	return { generic: vo(t, n, new RegExp(t, n)) };
}
function vo(e, t, n) {
	return (r) => {
		r.test(n.test(r.valueOrNode.term.value), J.PatternConstraintComponent, {
			args: {
				flags: t,
				pattern: e
			},
			message: [r.factory.literal("Value does not match pattern \"{$pattern}\"")],
			value: r.valueOrNode
		});
	};
}
function yo(e) {
	let t = e.ptr.out([J.uniqueLang]).term;
	return t.value === "true" && Fi.boolean.equals(t.datatype) ? { property: bo() } : null;
}
function bo() {
	return (e) => {
		let t = Object.entries(e.values.terms.reduce((e, t) => (t.language && (e[t.language] = (e[t.language] || 0) + 1), e), {})).filter(([, e]) => e > 1);
		for (let [n] of t) e.violation(J.UniqueLangConstraintComponent, {
			args: { lang: n },
			message: [e.factory.literal("Language \"{?lang}\" used more than once")]
		});
		t.length === 0 && e.debug(J.UniqueLangConstraintComponent);
	};
}
//#endregion
//#region node_modules/rdf-validation/lib/namespaces.js
var xo = Ci("http://www.w3.org/ns/shacl#"), So = Ci("https://schemas.link/shacl-next#"), Co = class {
	constructor({ results: e = [] } = {}) {
		this.results = e;
	}
	get conforms() {
		return !this.results.some((e) => e.severity.equals(xo.Info) || e.severity.equals(xo.Violation) || e.severity.equals(xo.Warning));
	}
};
//#endregion
//#region node_modules/rdf-validation/lib/Result.js
function wo(e, n) {
	return Object.entries(n).reduce((e, [n, r]) => (r && r.termType && (r = t(r)), e.replace(`{$${n}}`, r).replace(`{?${n}}`, r)), e);
}
var To = class {
	constructor({ args: e = {}, factory: t, message: n = [], severity: r = xo.Violation } = {}) {
		this.severity = r, this.message = n.map((n) => t.literal(wo(n.value, e), n.language || null));
	}
}, Eo = class e {
	constructor({ factory: e = u } = {}) {
		this.factory = e;
	}
	clone({ factory: t } = {}) {
		return new e({ factory: t || this.factory });
	}
	validate() {
		return new Co();
	}
	validateSimple() {
		return !0;
	}
}, Do = class e extends Eo {
	constructor({ datatypes: e, factory: t } = {}) {
		super({ factory: t }), this.datatypes = [];
		for (let t of Array.isArray(e) ? e : [e]) t && this.datatypes.push(this.factory.fromTerm(t));
	}
	clone({ factory: t } = {}) {
		return new e({
			datatypes: this.datatypes,
			factory: t || this.factory
		});
	}
}, Oo = class {
	constructor({ factory: e = u, validations: t } = {}) {
		if (this.factory = e, this.validations = new vi(), t) for (let e of Object.values(t)) {
			let t = e.clone({ factory: this.factory });
			for (let e of t.datatypes) this.validations.set(e, t);
		}
	}
	validate(e) {
		let t = this.validations.get(e.datatype);
		return t ? t.validate(e) : new Co();
	}
	validateSimple(e) {
		let t = this.validations.get(e.datatype);
		return !t || t.validateSimple(e);
	}
}, Y = class e extends Do {
	constructor(e, t, { factory: n } = {}) {
		super({
			datatypes: t,
			factory: n
		}), this.message = [this.factory.literal("term value {$this} matches pattern {$pattern}")], this.patterns = Array.isArray(e) ? e : [e];
	}
	clone({ factory: t } = {}) {
		return new e(this.patterns, this.datatypes, { factory: t || this.factory });
	}
	validate(e) {
		return new Co({ results: this.patterns.map((t) => {
			let n;
			return t.test(e.value) && (n = So.Debug), new To({
				args: {
					pattern: this.factory.literal(t.toString()),
					this: e
				},
				factory: this.factory,
				message: this.message,
				severity: n
			});
		}) });
	}
	validateSimple(e) {
		return this.patterns.every((t) => t.test(e.value));
	}
}, ko = /^([-+]?[0-9]+)$/, Ao = class e extends Y {
	constructor(e = null, t = null, n, { factory: r } = {}) {
		super(ko, n, { factory: r }), this.maxInclusive = null, this.minInclusive = null, typeof t == "string" && (this.maxInclusive = BigInt(t)), typeof e == "string" && (this.minInclusive = BigInt(e));
	}
	clone({ factory: t } = {}) {
		return new e(this.minInclusive?.toString(), this.maxInclusive?.toString(), this.datatypes, { factory: t || this.factory });
	}
	validate(e) {
		let t = super.validate(e).results;
		if (!So.Debug.equals(t[0].severity)) return new Co({ results: t });
		let n = BigInt(e.value);
		if (this.minInclusive !== null && n < this.minInclusive) {
			let n = `term value "${e.value}" is less than "${this.minInclusive.toString()}"`, r = [this.factory.literal(n)];
			t.push(new To({
				factory: this.factory,
				message: r
			}));
		}
		if (this.maxInclusive !== null && n > this.maxInclusive) {
			let n = `term value "${e.value}" is greater than "${this.maxInclusive.toString()}"`, r = [this.factory.literal(n)];
			t.push(new To({
				factory: this.factory,
				message: r
			}));
		}
		return new Co({ results: t });
	}
	validateSimple(e) {
		if (!super.validateSimple(e)) return !1;
		let t = BigInt(e.value);
		return !(this.minInclusive !== null && t < this.minInclusive || this.maxInclusive !== null && t > this.maxInclusive);
	}
}, jo = class e extends Do {
	constructor(e, t, { factory: n } = {}) {
		super({
			datatypes: t,
			factory: n
		}), this.values = new Set(e);
	}
	clone({ factory: t } = {}) {
		return new e(this.values, this.datatypes, { factory: t || this.factory });
	}
	validate(e) {
		let t = [];
		if (!this.values.has(e.value)) {
			let n = `term value "${e.value}" is not included in the list: ${[...this.values].join(",")}`, r = [this.factory.literal(n)];
			t.push(new To({
				factory: this.factory,
				message: r
			}));
		}
		return new Co({ results: t });
	}
	validateSimple(e) {
		return this.values.has(e.value);
	}
}, Mo = /* @__PURE__ */ d({
	anyAtomicType: () => Po,
	anySimpleType: () => No,
	anyURI: () => ds,
	base64Binary: () => us,
	boolean: () => Xo,
	byte: () => Ds,
	date: () => rs,
	dateTime: () => ts,
	dateTimeStamp: () => Is,
	dayTimeDuration: () => Fs,
	decimal: () => Zo,
	double: () => $o,
	duration: () => es,
	float: () => Qo,
	gDay: () => ss,
	gMonth: () => cs,
	gMonthDay: () => os,
	gYear: () => as,
	gYearMonth: () => is,
	hexBinary: () => ls,
	int: () => Ts,
	integer: () => xs,
	language: () => bs,
	long: () => ws,
	negativeInteger: () => Cs,
	nonNegativeInteger: () => Os,
	nonPositiveInteger: () => Ss,
	normalizedString: () => vs,
	positiveInteger: () => Ns,
	short: () => Es,
	string: () => Yo,
	time: () => ns,
	token: () => ys,
	unsignedByte: () => Ms,
	unsignedInt: () => As,
	unsignedLong: () => ks,
	unsignedShort: () => js,
	yearMonthDuration: () => Ps
}), X = { xsd: Ci("http://www.w3.org/2001/XMLSchema#") }, No = new Do({ datatypes: X.xsd.anySimpleType }), Po = new Do({ datatypes: X.xsd.anyAtomicType }), Fo = /^([^\ud8ff-\udfff\ufffe-\uffff]*)$/, Io = /^((\+|-)?([0-9]+(\.[0-9]*)?|\.[0-9]+))$/, Lo = /^((\+|-)?([0-9]+(\.[0-9]*)?|\.[0-9]+)([Ee](\+|-)?[0-9]+)?|(\+|-)?INF|NaN)$/, Ro = /^(-?P((([0-9]+Y([0-9]+M)?([0-9]+D)?|([0-9]+M)([0-9]+D)?|([0-9]+D))(T(([0-9]+H)([0-9]+M)?([0-9]+(\.[0-9]+)?S)?|([0-9]+M)([0-9]+(\.[0-9]+)?S)?|([0-9]+(\.[0-9]+)?S)))?)|(T(([0-9]+H)([0-9]+M)?([0-9]+(\.[0-9]+)?S)?|([0-9]+M)([0-9]+(\.[0-9]+)?S)?|([0-9]+(\.[0-9]+)?S)))))$/, zo = /^(-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?|(24:00:00(\.0+)?))(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/, Bo = /^((([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?|(24:00:00(\.0+)?))(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/, Vo = /^(-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/, Ho = /^(-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/, Uo = /^(-?([1-9][0-9]{3,}|0[0-9]{3})(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/, Wo = /^(--(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/, Go = /^(---(0[1-9]|[12][0-9]|3[01])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/, Ko = /^(--(0[1-9]|1[0-2])(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?)$/, qo = /^(([0-9a-fA-F]{2})*)$/, Jo = /^(((([A-Za-z0-9+/] ?){4})*(([A-Za-z0-9+/] ?){3}[A-Za-z0-9+/]|([A-Za-z0-9+/] ?){2}[AEIMQUYcgkosw048] ?=|[A-Za-z0-9+/] ?[AQgw] ?= ?=))?)$/, Yo = new Y(Fo, X.xsd.string), Xo = new jo([
	"1",
	"true",
	"0",
	"false"
], X.xsd.boolean), Zo = new Y(Io, X.xsd.decimal), Qo = new Y(Lo, X.xsd.float), $o = new Y(Lo, X.xsd.double), es = new Y(Ro, X.xsd.duration), ts = new Y(zo, X.xsd.dateTime), ns = new Y(Bo, X.xsd.time), rs = new Y(Vo, X.xsd.date), is = new Y(Ho, X.xsd.gYearMonth), as = new Y(Uo, X.xsd.gYear), os = new Y(Wo, X.xsd.gMonthDay), ss = new Y(Go, X.xsd.gDay), cs = new Y(Ko, X.xsd.gMonth), ls = new Y(qo, X.xsd.hexBinary), us = new Y(Jo, X.xsd.base64Binary), ds = new Y(Fo, X.xsd.anyURI), fs = /^([^\u000d\u000a\u0009]*)$/, ps = /^([^ ]+( [^ ]+)*)*$/, ms = /^([a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*)$/, hs = /^([^DT]*)$/, gs = /^([^YM]*[DT].*)$/, _s = /^(.*(Z|(\+|-)[0-9][0-9]:[0-9][0-9]))$/, vs = new Y([Fo, fs], X.xsd.normalizedString), ys = new Y([
	Fo,
	fs,
	ps
], X.xsd.token), bs = new Y(ms, X.xsd.language), xs = new Ao(null, null, X.xsd.integer), Ss = new Ao(null, "0", X.xsd.nonPositiveInteger), Cs = new Ao(null, "-1", X.xsd.negativeInteger), ws = new Ao("-9223372036854775808", "9223372036854775807", X.xsd.long), Ts = new Ao("-2147483648", "2147483647", X.xsd.int), Es = new Ao("-32768", "32767", X.xsd.short), Ds = new Ao("-128", "127", X.xsd.byte), Os = new Ao("0", null, X.xsd.nonNegativeInteger), ks = new Ao("0", "18446744073709551615", X.xsd.unsignedLong), As = new Ao("0", "4294967295", X.xsd.unsignedInt), js = new Ao("0", "65535", X.xsd.unsignedShort), Ms = new Ao("0", "255", X.xsd.unsignedByte), Ns = new Ao("1", null, X.xsd.positiveInteger), Ps = new Y([Ro, hs], X.xsd.yearMonthDuration), Fs = new Y([Ro, gs], X.xsd.dayTimeDuration), Is = new Y([zo, _s], X.xsd.dateTimeStamp), Ls = class extends Oo {
	constructor({ factory: e } = {}) {
		super({
			factory: e,
			validations: { ...Mo }
		});
	}
}, Rs = new vi([
	[J.BlankNode, /* @__PURE__ */ new Set(["BlankNode"])],
	[J.BlankNodeOrIRI, /* @__PURE__ */ new Set(["BlankNode", "NamedNode"])],
	[J.BlankNodeOrLiteral, /* @__PURE__ */ new Set(["BlankNode", "Literal"])],
	[J.IRI, /* @__PURE__ */ new Set(["NamedNode"])],
	[J.IRIOrLiteral, /* @__PURE__ */ new Set(["NamedNode", "Literal"])],
	[J.Literal, /* @__PURE__ */ new Set(["Literal"])]
]);
function zs(e) {
	return { generic: Bs(e.ptr.out([J.class]).map((e) => da(e))) };
}
function Bs(e) {
	return (t) => {
		let n = new xi(t.valueOrNode.out([Mi.type]).terms);
		for (let r of e) {
			let e = [...n].some((e) => r.has(e));
			t.test(e, J.ClassConstraintComponent, { value: t.valueOrNode });
		}
	};
}
function Vs(e) {
	let t = e.ptr.out([J.datatype]).term;
	return { generic: Hs(t, new Ls()) };
}
function Hs(e, t) {
	return (n) => {
		let r = e.equals(n.valueOrNode.term.datatype) && t.validateSimple(n.valueOrNode.term);
		n.test(r, J.DatatypeConstraintComponent, {
			args: { datatype: e },
			message: [n.factory.literal("Value does not have datatype {$datatype}")],
			value: n.valueOrNode
		});
	};
}
function Us(e) {
	let t = e.ptr.out([J.nodeKind]).term;
	return { generic: Ws(t, Rs.get(t)) };
}
function Ws(e, t) {
	return (n) => {
		n.test(t.has(n.valueOrNode.term.termType), J.NodeKindConstraintComponent, {
			args: { nodeKind: e },
			message: [n.factory.literal("Value does not have node kind {$nodeKind}")],
			value: n.valueOrNode
		});
	};
}
//#endregion
//#region node_modules/shacl-engine/lib/validations.js
var Gs = new vi([
	[J.maxCount, ha],
	[J.minCount, _a],
	[J.and, Ca],
	[J.not, Ta],
	[J.or, Da],
	[J.xone, ka],
	[J.closed, ja],
	[J.hasValue, Na],
	[J.in, Ia],
	[J.disjoint, Ba],
	[J.equals, Ha],
	[J.lessThan, Ga],
	[J.lessThanOrEquals, qa],
	[J.maxExclusive, Ya],
	[J.maxInclusive, Za],
	[J.minExclusive, $a],
	[J.minInclusive, to],
	[J.node, ro],
	[J.property, ao],
	[J.qualifiedValueShape, so],
	[J.languageIn, uo],
	[J.maxLength, po],
	[J.minLength, ho],
	[J.pattern, _o],
	[J.uniqueLang, yo],
	[J.class, zs],
	[J.datatype, Vs],
	[J.nodeKind, Us]
]), Ks = class {
	constructor(e, { factory: t, ...n }) {
		if (this.factory = t, this.options = n, this.registry = new Qi(Gs), this.targetResolverRegistry = new ma(this.options.targetResolvers || []), this.shapesPtr = new ji({
			dataset: e,
			factory: t
		}), this.shapes = new vi(), this.options.coverage && (this.options.debug = !0, this.options.details = !0, this.options.trace = !0), this.options.validations) for (let [e, t] of this.options.validations) this.registry.validations.set(e, t);
		let r = [
			...this.shapesPtr.hasOut([J.targetClass]),
			...this.shapesPtr.hasOut([J.targetNode]),
			...this.shapesPtr.hasOut([J.targetObjectsOf]),
			...this.shapesPtr.hasOut([J.targetSubjectsOf]),
			...this.shapesPtr.hasOut([J.target]),
			...this.shapesPtr.hasOut([Mi.type], [J.NodeShape]),
			...this.shapesPtr.hasOut([Mi.type], [J.PropertyShape])
		];
		for (let e of r) this.shape(e);
	}
	shape(e) {
		if (!e.term) return null;
		let t = this.shapes.get(e.term);
		return t || (t = new pa(e, { validator: this }), this.shapes.set(e.term, t)), t;
	}
	async validate(e, t) {
		let n = new ji({
			...e,
			factory: this.factory
		}), r = new Yi({
			factory: this.factory,
			focusNode: n,
			options: this.options,
			validator: this
		});
		t = t ? t.map((e) => this.shape(this.shapesPtr.node(e.terms))) : this.shapes.values();
		for (let e of t) {
			let t = r.create({ shape: e }), i;
			i = n.isAny() ? await e.resolveTargets(t) : n;
			for (let n of i) await e.validate(t.create({ focusNode: n }));
		}
		return r.report;
	}
}, Z = "http://www.w3.org/ns/shacl#", qs = "http://datashapes.org/dash#", Js = "http://www.w3.org/2001/XMLSchema#", Ys = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", Xs = "http://www.w3.org/2000/01/rdf-schema#", Zs = "http://www.w3.org/ns/oa#", Qs = "http://purl.org/dc/terms/", $s = o.namedNode("loaded-shapes"), Q = o.namedNode("loaded-data"), $ = o.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), ec = o.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"), tc = o.namedNode("http://purl.org/dc/terms/conformsTo"), nc = o.namedNode("http://www.w3.org/2000/01/rdf-schema#subClassOf"), rc = o.namedNode("http://www.w3.org/2002/07/owl#imports"), ic = o.namedNode("http://www.w3.org/2004/02/skos/core#broader"), ac = o.namedNode("http://www.w3.org/2004/02/skos/core#narrower"), oc = o.namedNode("http://www.w3.org/ns/shacl#NodeShape"), sc = o.namedNode("http://www.w3.org/ns/shacl#IRI"), cc = o.namedNode("http://www.w3.org/ns/shacl#property"), lc = o.namedNode("http://www.w3.org/ns/shacl#class"), uc = o.namedNode("http://www.w3.org/ns/shacl#node"), dc = o.namedNode("http://www.w3.org/ns/shacl#targetClass"), fc = o.namedNode("http://www.w3.org/ns/shacl#nodeKind"), pc = o.namedNode("http://www.w3.org/2001/XMLSchema#string"), mc = o.namedNode("http://www.w3.org/2001/XMLSchema#boolean");
function hc(e, t, n = Z, r) {
	let i = "", a = gc(e, t, n, r);
	return a && (i = a.value), i;
}
function gc(e, t, n = Z, r) {
	let i, a = n + t;
	if (r?.length) {
		for (let t of r) for (let n of e) if (n.predicate.value === a) {
			if (n.object.id.endsWith(`@${t}`)) return n.object;
			n.object.id.indexOf("@") < 0 ? i = n.object : i ||= n.object;
		}
	} else for (let t of e) if (t.predicate.value === a) return t.object;
	return i;
}
function _c(e) {
	e.querySelector(".editor")?.focus();
}
function vc(e, t) {
	return hc(e, "prefLabel", "http://www.w3.org/2004/02/skos/core#", t) || hc(e, "label", "http://www.w3.org/2000/01/rdf-schema#", t) || hc(e, "title", "http://purl.org/dc/terms/", t) || hc(e, "name", "http://xmlns.com/foaf/0.1/", t);
}
function yc(e, t, n) {
	let r = [];
	for (let i of e) r.push({
		value: i,
		label: vc(t.getQuads(i, null, null, null), n),
		children: []
	});
	return r;
}
function bc(e, t) {
	for (let n in t) {
		let r = t[n];
		e.startsWith(r) && (e = e.slice(r.length));
	}
	return e;
}
function xc(e, t, n, r, i = /* @__PURE__ */ new Set()) {
	for (let a of t.owlImports) i.has(a.id) || (i.add(a.id), r.push(...n.getSubjects($, e, a)));
	t.parent && xc(e, t.parent, n, r, i);
}
function Sc(e, t) {
	if (t.in) {
		let e = t.config.lists[t.in];
		return yc(e?.length ? e : [], t.config.store, t.config.languages);
	} else {
		let n = t.config.store.getSubjects($, e, $s);
		n.push(...t.config.store.getSubjects($, e, Q)), xc(e, t, t.config.store, n);
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
		for (let e of n) r.set(e.id, {
			value: e,
			label: vc(t.config.store.getQuads(e, null, null, null), t.config.languages),
			children: []
		});
		for (let e of n) {
			for (let n of t.config.store.getObjects(e, ic, null)) r.has(n.id) && i.set(e.id, n.id);
			for (let n of t.config.store.getObjects(e, ac, null)) r.has(n.id) && i.set(n.id, e.id);
			for (let n of t.config.store.getObjects(e, nc, null)) r.has(n.id) && i.set(e.id, n.id);
		}
		for (let [e, t] of i.entries()) r.get(t)?.children?.push(r.get(e));
		let a = [];
		for (let [e, t] of r.entries()) i.has(e) || a.push(t);
		for (let n of t.config.store.getSubjects(nc, e, null)) a.push(...Sc(n, t));
		return a;
	}
}
function Cc(e) {
	let t;
	try {
		t = new URL(e);
	} catch {
		return !1;
	}
	return t.protocol === "http:" || t.protocol === "https:";
}
function wc(e, t, n) {
	if (t === void 0) return n;
	if (n === void 0) return t;
	let r = e.indexOf(t.language);
	if (r < 0) return n;
	let i = e.indexOf(n.language);
	return i < 0 || i > r ? t : n;
}
function Tc(e, t) {
	let n;
	for (let r of t) n = wc(e, n, r);
	return n ? n.value : "";
}
var Ec = /^(-?\d{4,}-\d{2}-\d{2})(Z|[+-]\d{2}:\d{2})?$/, Dc = /^(-?\d{4,}-\d{2}-\d{2})T(\d{2}:\d{2})(?::(\d{2})(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?$/, Oc = /^(-?\d{4,}-\d{2}-\d{2}T\d{2}:\d{2})(?::(\d{2})(\.\d+)?)?$/;
function kc(e) {
	let t = e.match(Ec);
	if (!t) {
		let t = e.match(Dc);
		return t ? {
			value: t[1],
			suffix: t[5] || ""
		} : void 0;
	}
	return {
		value: t[1],
		suffix: t[2] || ""
	};
}
function Ac(e) {
	let t = e.match(Dc);
	if (!t) {
		let t = e.match(Ec);
		return t ? {
			value: `${t[1]}T00:00:00`,
			suffix: t[2] || ""
		} : void 0;
	}
	return {
		value: `${t[1]}T${t[2]}:${t[3] || "00"}`,
		suffix: t[5] || ""
	};
}
function jc(e, t = "") {
	let n = e.match(Ec);
	return n ? `${n[1]}${t}` : e;
}
function Mc(e, t = "") {
	let n = e.match(Oc);
	return n ? `${n[1]}:${n[2] || "00"}${n[3] || ""}${t}` : e;
}
function Nc(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.getObjects(null, lc, $s)) t.add(n.value);
	for (let n of e.getObjects(null, dc, $s)) t.add(n.value);
	return t;
}
function Pc(e, t) {
	return e instanceof Set ? [...t].filter((t) => !e.has(t)) : [...t].filter((t) => !e.includes(t));
}
function Fc(e, { remove: t = !1, ignoreErrors: n = !1 } = {}) {
	let r = {}, i = n ? () => !0 : (e, t) => {
		throw Error(`${e.value} ${t}`);
	}, a = e.getQuads(null, Ys + "rest", Ys + "nil", null), o = t ? [...a] : [];
	return a.forEach((n) => {
		let a = [], s = !1, c, l, u = n.graph, d = n.subject;
		for (; d && !s;) {
			let t = e.getQuads(null, null, d, null), n = e.getQuads(d, null, null, null).filter((e) => !e.predicate.equals($)), r, f = null, p = null, m = null;
			for (let e = 0; e < n.length && !s; e++) r = n[e], r.graph.equals(u) ? c ? s = i(d, "has non-list arcs out") : r.predicate.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#first" ? f ? s = i(d, "has multiple rdf:first arcs") : o.push(f = r) : r.predicate.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest" ? p ? s = i(d, "has multiple rdf:rest arcs") : o.push(p = r) : t.length ? s = i(d, "can't be subject and object") : (c = r, l = "subject") : s = i(d, "not confined to single graph");
			for (let e = 0; e < t.length && !s; ++e) r = t[e], c ? s = i(d, "can't have coreferences") : r.predicate.value === "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest" ? m ? s = i(d, "has incoming rdf:rest arcs") : m = r : (c = r, l = "object");
			f ? a.unshift(f.object) : s = i(d, "has no list head"), d = m && m.subject;
		}
		s ? t = !1 : c && (r[c[l].value] = a);
	}), t && e.removeQuads(o), r;
}
var Ic = {}, Lc = {};
async function Rc(e) {
	return "rdf" in e ? Bc(e.rdf) : e.rdfUrlResolver ? Bc(await e.rdfUrlResolver(e.url)) : zc(e.url, e.proxy);
}
async function zc(e, t) {
	return e in Ic || (Ic[e] = (async () => {
		let n = e;
		t && (n = t + encodeURIComponent(e));
		let r = await fetch(n, { headers: { Accept: "text/turtle, application/trig, application/n-triples, application/n-quads, text/n3, application/ld+json" } });
		return r.ok ? Bc(await r.text()) : (console.warn("failed fetching RDF from", e), []);
	})()), Ic[e];
}
async function Bc(e) {
	if (!e.trim()) return [];
	let t = Vc(e);
	if (t === "json") try {
		e = await Ue.default.toRDF(JSON.parse(e), { format: "application/n-quads" });
	} catch (e) {
		console.error(e);
	}
	let n = [];
	return await new Promise((r, i) => {
		let a = t === "xml" ? new He.RdfXmlParser() : new s();
		a.on("data", (e) => {
			n.push(o.quad(e.subject, e.predicate, e.object, e.graph));
		}).on("error", (e) => {
			i(e);
		}).on("prefix", (e, t) => {
			e && (Lc[e] = t);
		}).on("end", () => {
			r(null);
		}), a.write(e), a.end();
	}), n;
}
function Vc(e) {
	return /^\s*[\\[{]/.test(e) ? "json" : /^\s*<\?xml/.test(e) ? "xml" : "ttl";
}
var Hc = {
	[`${Z}name`]: (e, t) => {
		let n = t;
		e.name = wc(e.config.languages, e.name, n);
	},
	[`${Z}description`]: (e, t) => {
		let n = t;
		e.description = wc(e.config.languages, e.description, n);
	},
	[`${Z}path`]: (e, t) => {
		e.path = t.value;
	},
	[`${Z}group`]: (e, t) => {
		e.group = t.id;
	},
	[`${Z}datatype`]: (e, t) => {
		e.datatype = t;
	},
	[`${Z}nodeKind`]: (e, t) => {
		e.nodeKind = t;
	},
	[`${Z}minCount`]: (e, t) => {
		e.minCount = parseInt(t.value);
	},
	[`${Z}maxCount`]: (e, t) => {
		e.maxCount = parseInt(t.value);
	},
	[`${Z}minLength`]: (e, t) => {
		e.minLength = parseInt(t.value);
	},
	[`${Z}maxLength`]: (e, t) => {
		e.maxLength = parseInt(t.value);
	},
	[`${Z}minInclusive`]: (e, t) => {
		e.minInclusive = parseInt(t.value);
	},
	[`${Z}maxInclusive`]: (e, t) => {
		e.maxInclusive = parseInt(t.value);
	},
	[`${Z}minExclusive`]: (e, t) => {
		e.minExclusive = parseInt(t.value);
	},
	[`${Z}maxExclusive`]: (e, t) => {
		e.maxExclusive = parseInt(t.value);
	},
	[`${Z}pattern`]: (e, t) => {
		e.pattern = t.value;
	},
	[`${Z}order`]: (e, t) => {
		e.order = parseInt(t.value);
	},
	[`${qs}singleLine`]: (e, t) => {
		e.singleLine = t.value === "true";
	},
	[`${qs}readonly`]: (e, t) => {
		e.readonly = t.value === "true";
	},
	[`${Zs}styleClass`]: (e, t) => {
		e.cssClass = t.value;
	},
	[`${Z}in`]: (e, t) => {
		e.in = t.value;
	},
	[`${Z}languageIn`]: (e, t) => {
		e.languageIn = e.config.lists[t.value], e.datatype = ec;
	},
	[`${Z}defaultValue`]: (e, t) => {
		e.defaultValue = t;
	},
	[`${Z}hasValue`]: (e, t) => {
		e.hasValue = t;
	},
	[`${Z}node`]: (e, t) => {
		e.node = t, e.nodeShapes.add(e.config.getNodeTemplate(t, e));
	},
	[`${Z}and`]: (e, t) => {
		e.and = t.value;
		let n = e.config.lists[e.and];
		if (n?.length) for (let t of n) e.nodeShapes.add(e.config.getNodeTemplate(t, e));
	},
	[`${Z}qualifiedValueShape`]: (e, t) => {
		let n = e.config.getNodeTemplate(t, e);
		e.qualifiedValueShape = n, e.nodeShapes.add(n);
	},
	[`${Z}qualifiedMinCount`]: (e, t) => {
		e.qualifiedMinCount = parseInt(t.value);
	},
	[`${Z}qualifiedMaxCount`]: (e, t) => {
		e.qualifiedMaxCount = parseInt(t.value);
	},
	[rc.id]: (e, t) => {
		e.owlImports.add(t);
	},
	[lc.id]: (e, t) => {
		e.class = t;
		let n = e.config.store.getSubjects(dc, t, null);
		n.length > 0 && (e.node = n[0]);
	},
	[`${Z}or`]: (e, t) => {
		let n = e.config.lists[t.value];
		n?.length ? e.or = n : console.error("list for sh:or not found:", t.value, "existing lists:", e.config.lists);
	},
	[`${Z}xone`]: (e, t) => {
		let n = e.config.lists[t.value];
		n?.length ? e.xone = n : console.error("list for sh:xone not found:", t.value, "existing lists:", e.config.lists);
	}
}, Uc = class {
	constructor(e, t) {
		this.label = "", this.nodeShapes = /* @__PURE__ */ new Set(), this.owlImports = /* @__PURE__ */ new Set(), this.id = e, this.parent = t, this.config = t.config, this.config.registerPropertyTemplate(this), qc(this, this.config.store.getQuads(e, null, null, null));
	}
};
function Wc(e) {
	return Math.max(e.minCount ?? 0, e.qualifiedMinCount ?? 0);
}
function Gc(e) {
	return Math.min(e.maxCount ?? 2 ** 53 - 1, e.qualifiedMaxCount ?? 2 ** 53 - 1);
}
function Kc(e) {
	let t = Object.assign({}, e);
	return t.nodeShapes = new Set(e.nodeShapes), t.owlImports = new Set(e.owlImports), e.languageIn && (t.languageIn = [...e.languageIn]), e.or && (t.or = [...e.or]), e.xone && (t.xone = [...e.xone]), t;
}
function qc(e, t) {
	for (let n of t) Hc[n.predicate.id]?.call(e, e, n.object);
	return e.label = e.name?.value || vc(t, e.config.languages), e.label ||= e.path ? bc(e.path, Lc) : "unknown", e;
}
function Jc(e, t) {
	let n = t, r = e;
	for (let e in t) if (e !== "parent" && e !== "config" && e !== "id") {
		let t = n[e];
		if (t !== void 0 && t !== "") if (Array.isArray(t)) {
			let n = r[e];
			Array.isArray(n) ? n.push(...t) : r[e] = [...t];
		} else if (t instanceof Set && t.size) {
			let n = r[e];
			r[e] = /* @__PURE__ */ new Set([...n instanceof Set ? n : [], ...t]);
		} else r[e] = t;
	}
}
function Yc(e, t, n) {
	let r = document.createElement("div");
	r.classList.add("shacl-or-constraint"), r.setAttribute("part", "constraint");
	let i = [];
	if (t instanceof Il) {
		let a = [], o = !1;
		e.length && (o = n.store.countQuads(e[0], cc, null, null) > 0);
		for (let r = 0; r < e.length; r++) if (o) {
			let o = n.store.getObjects(e[r], cc, null), s = [], c = "";
			for (let e of o) {
				let r = new Cl(n.getPropertyTemplate(e, t.template), t);
				s.push(r), c += (c.length > 0 ? " / " : "") + r.template.label;
			}
			a.push(s), i.push({
				label: c,
				value: r.toString()
			});
		} else {
			let o = e[r], s = new Cl(n.getPropertyTemplate(o, t.template), t);
			a.push([s]), i.push({
				label: s.template.label,
				value: r.toString()
			});
		}
		let s = n.theme.createListEditor("Please choose", null, !1, i);
		s.setAttribute("part", "constraint-editor");
		let c = s.querySelector(".editor");
		c.onchange = async () => {
			if (c.value) {
				let e = a[parseInt(c.value)], n;
				if (e.length) {
					for (let n of e) await n.bindValues(t.nodeId, !1);
					n = e[0], r.replaceWith(e[0]), n.updateControls();
				}
				for (let t = 1; t < e.length; t++) n.after(e[t]), n = e[t], n.updateControls();
			}
		}, r.appendChild(s);
	} else {
		let a = [];
		for (let t = 0; t < e.length; t++) {
			let r = n.store.getQuads(e[t], null, null, null);
			if (r.length) {
				a.push(r);
				let e = vc(r, n.languages);
				for (let t of r) t.predicate.equals(uc) && (e = vc(n.store.getQuads(t.object, null, null, null), n.languages));
				i.push({
					label: e || bc(r[0].predicate.value, Lc) + " = " + bc(r[0].object.value, Lc),
					value: t.toString()
				});
			}
		}
		let o = n.theme.createListEditor(t.template.label + "?", null, !1, i, t.template);
		o.setAttribute("part", "constraint-editor");
		let s = o.querySelector(".editor");
		s.onchange = async () => {
			if (s.value) {
				let e = await wl(qc(Kc(t.template), a[parseInt(s.value)]), void 0, !0), n = e.querySelector(":scope > label");
				n && n.classList.add("persistent"), r.replaceWith(e);
			}
		}, r.appendChild(o);
	}
	return r;
}
function Xc(e, t, n) {
	if (t.termType === "Literal") {
		let r = t.datatype;
		for (let t of e) {
			let e = n.store.getQuads(t, null, null, null);
			for (let t of e) if (t.predicate.value === "http://www.w3.org/ns/shacl#datatype" && t.object.equals(r)) return e;
		}
	} else {
		let r = n.store.getObjects(t, $, null);
		for (let t of e) {
			let e = n.store.getQuads(t, null, null, null);
			for (let t of e) if (r.length > 0) {
				if (t.predicate.value === "http://www.w3.org/ns/shacl#node") {
					for (let i of r) if (n.store.getQuads(t.object, dc, i, null).length > 0) return e;
				}
				if (t.predicate.equals(lc)) {
					for (let n of r) if (t.object.equals(n)) return e;
				}
			} else if (t.predicate.equals(fc) && t.object.equals(sc)) return e;
		}
	}
	return console.error("couldn't resolve sh:or/sh:xone on property for value", t), [];
}
function Zc(e, t, n) {
	for (let r of e) {
		let e = !1, i = n.store.getObjects(r, cc, null);
		for (let r of i) {
			let i = n.store.getObjects(r, `${Z}path`, null);
			for (let r of i) if (e = n.store.countQuads(t, r, null, null) > 0, e) break;
		}
		if (e) return i;
	}
	return console.error("couldn't resolve sh:or/sh:xone on node for value", t), [];
}
var Qc = ":host {\n    --shacl-font-family: inherit;\n    --shacl-font-size: 14px;\n    --shacl-text-color: #333;\n    --shacl-muted-color: #555;\n    --shacl-border-color: #DDD;\n    --shacl-bg: #FFF;\n    --shacl-row-alt-bg: #F8F8F8;\n    --shacl-error-color: #C00;\n    --shacl-label-width: 8em;\n}\nform { display:block; --label-width: var(--shacl-label-width, 8em); --caret-size: 10px; font-family: var(--shacl-font-family); font-size: var(--shacl-font-size); color: var(--shacl-text-color); background-color: var(--shacl-bg); }\nform.mode-edit { padding-left: 1em;  }\nform, form * { box-sizing: border-box; }\nshacl-node, .collapsible::part(content) { display: flex; flex-direction: column; width: 100%; position: relative; }\nshacl-node .remove-button { margin-top: 1px; }\nshacl-node .add-button-wrapper { display: flex; width: 100%; justify-content: flex-end; gap: 20px; padding-right: 24px; color: var(--shacl-muted-color); font-size: 14px; }\nshacl-node .add-button::part(button)::before { content: '+ ' }\nshacl-node .link-button::part(button)::before { content: '🔗 '; font-size: 10px; }\nshacl-node h1 { font-size: 16px; border-bottom: 1px solid #AAA; margin-top: 4px; color: var(--shacl-muted-color); }\nshacl-property:not(:has(>.collapsible)), shacl-property>.collapsible::part(content) { display: flex; flex-direction: column; align-items: end; position: relative; }\nshacl-property:not(.may-add) > .add-button-wrapper, shacl-property:not(.may-add) > .collapsible > .add-button-wrapper { display: none; }\nshacl-property:not(.may-remove) > .property-instance > .remove-button-wrapper > .remove-button:not(.persistent) { visibility: hidden; }\nshacl-property:not(.may-remove) > .collapsible > .property-instance > .remove-button-wrapper > .remove-button:not(.persistent) { visibility: hidden; }\nshacl-property:not(.may-remove) > .shacl-or-constraint > .remove-button-wrapper > .remove-button:not(.persistent) { visibility: hidden; }\n.mode-view .shacl-group:not(:has(shacl-property)) { display: none; }\n.property-instance, .shacl-or-constraint { display: flex; align-items: flex-start; padding: 4px 0; width: 100%; position: relative; }\n.shacl-or-constraint > div { display: flex; align-items: flex-start; }\n.shacl-or-constraint > div:first-child { flex-grow: 1 }\n.shacl-or-constraint label { display: inline-block; word-break: break-word; width: var(--label-width); line-height: 1em; padding-top: 0.15em; padding-right: 1em; flex-shrink: 0; position: relative; }\n.property-instance label[title] { cursor: help; text-decoration: underline dashed #AAA; }\n.property-instance.linked label:after, label.linked:after { content: '\\1F517'; font-size: 0.6em; position: absolute; top: 3px; right: 3px; }\n.mode-edit .property-instance label.required::before, .add-button-wrapper.required > .add-button::before, .add-button-wrapper.required > .link-button::before { color: var(--shacl-error-color); content: '\\2736'; font-size: 0.6rem; position: absolute; left: -1.4em; }\n.mode-edit .add-button-wrapper.required > .add-button::before, .add-button-wrapper.required > .link-button::before { left: -0.5em; }\n.mode-edit .property-instance label.required::before { top: 0.15rem; }\n.property-instance.valid::before { content: ''; position: absolute; left: calc(var(--label-width) - 1em); top:0.5em; width: 0.9em; height: 0.9em; background: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 1024 1024\" fill=\"green\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M866.133333 258.133333L362.666667 761.6l-204.8-204.8L98.133333 618.666667 362.666667 881.066667l563.2-563.2z\"/></svg>'); }\n.editor:not([type='checkbox']) { flex-grow: 1; }\ntextarea.editor { resize: vertical; }\n.lang-chooser { border: 0; background-color: #e9e9ed; padding: 2px 4px; align-self: flex-start; }\n.validation-error { position: absolute; left: calc(var(--label-width) - 1em); color: var(--shacl-error-color); cursor: help; }\n.validation-error::before { content: '\\26a0' }\n.validation-error.node { left: -1em; }\n.invalid > .editor { border-color: red !important; }\n.ml-0  { margin-left: 0 !important; }\n.pr-0  { padding-right: 0 !important; }\n.mode-view .property-instance:not(:first-child) > label { visibility: hidden; }\n.mode-view .property-instance label { width: var(--label-width); }\n\n.d-flex { display: flex; }\n.lang { opacity: 0.65; font-size: 0.6em; }\na, a:visited { color: inherit; }\nh3 { margin-top: 0; }\n\n.fadeIn, .fadeOut { animation: fadeIn 0.2s ease-out; }\n.fadeOut { animation-direction: reverse; animation-timing-function: ease-out;}\n@keyframes fadeIn {\n    0% { opacity: 0; transform: scaleY(0.8); }\n    100% { opacity: 1; transform: scaleY(1); }\n}\n.collapsible::part(label) { font-weight: 600; }\n.collapsible > .property-instance:nth-child(even) { background-color: var(--shacl-row-alt-bg); }\n.collapsible > .property-instance > shacl-node > h1 { display: none; }\n.ref-link { cursor: pointer; }\n.ref-link:hover { text-decoration: underline; }\n.node-id-display { color: var(--shacl-muted-color); font-size: 11px; }\n/* hierarchy colors */\n.colorize { --hierarchy-color-width: 3px; padding: 0 1px 0 calc(1px + var(--hierarchy-color-width)); align-self: stretch; position: relative; }\n.colorize::before {\n    content: '';\n    position: absolute;\n    width: var(--hierarchy-color-width);\n    top: 0; bottom: 0; left: 0;\n    --index: mod(var(--hierarchy-level), var(--hierarchy-colors-length));\n    background: linear-gradient(var(--hierarchy-colors)) no-repeat 0 calc(var(--index) * 100% / (var(--hierarchy-colors-length) - 1)) / 100% calc(1px * infinity);\n }\n.property-instance:not(:has(shacl-node)) > .colorize::before { background: 0; }\n.colorize:not(:has(.remove-button)) { padding-left: calc(8px + var(--hierarchy-color-width)); }\n.mode-view .property-instance > .colorize { order: -1; }\n.link-option { padding: 10px; }\n.link-option:hover { background-color: #F5F5F5; cursor: pointer; }\nrokit-dialog.link-chooser::part(dialog) { min-height: min(434px, 90vh); width: min(90vw, 600px); }\n", $c = class {
	constructor(e) {
		this.dense = !0;
		let t = Qc;
		e && (t += "\n" + e), this.stylesheet = new CSSStyleSheet(), this.stylesheet.replaceSync(t);
	}
	apply(e) {}
	setDense(e) {
		this.dense = e;
	}
	createViewer(t, n, r) {
		let i = document.createElement("div"), a = document.createElement("label");
		a.textContent = `${t}:`, r.description && a.setAttribute("title", r.description.value), i.appendChild(a);
		let o = n.value, s = null;
		if (n instanceof e) {
			let e = r.config.store.getQuads(o, null, null, null);
			if (e.length) {
				let t = vc(e, r.config.languages);
				t && (o = t);
			}
		} else n instanceof h && (n.language ? (s = document.createElement("span"), s.classList.add("lang"), s.innerText = `@${n.language}`) : n.datatype.value === "http://www.w3.org/2001/XMLSchema#date" ? o = new Date(Date.parse(n.value)).toDateString() : n.datatype.value === "http://www.w3.org/2001/XMLSchema#dateTime" && (o = new Date(Date.parse(n.value)).toLocaleString()));
		let c;
		return Cc(n.value) ? (c = document.createElement("a"), c.setAttribute("href", n.value)) : c = document.createElement("div"), c.classList.add("d-flex"), c.innerText = o, s && c.appendChild(s), i.appendChild(c), i;
	}
};
function el(e, t, n) {
	if (n) {
		let n = Wc(e) > 0;
		if (e.class && !e.hasValue) return e.config.theme.createListEditor(e.label, t, n, Sc(e.class, e), e);
		if (e.in) {
			let r = e.config.lists[e.in];
			if (r?.length) {
				let i = yc(r, e.config.store, e.config.languages);
				return e.config.theme.createListEditor(e.label, t, n, i, e);
			} else console.error("list not found:", e.in, "existing lists:", e.config.lists);
		}
		if (e.datatype?.equals(ec) || e.languageIn?.length || e.datatype === void 0 && t instanceof h && t.language) return e.config.theme.createLangStringEditor(e.label, t, n, e);
		switch (e.datatype?.value.replace(Js, "")) {
			case "integer":
			case "float":
			case "double":
			case "decimal": return e.config.theme.createNumberEditor(e.label, t, n, e);
			case "date":
			case "dateTime": return e.config.theme.createDateEditor(e.label, t, n, e);
			case "boolean": return e.config.theme.createBooleanEditor(e.label, t, n, e);
			case "base64Binary": return e.config.theme.createFileEditor(e.label, t, n, e);
		}
		return e.config.theme.createTextEditor(e.label, t, n, e);
	} else return t ? e.config.theme.createViewer(e.label, t, e) : document.createElement("div");
}
function tl(e, t, r) {
	if (t === "application/ld+json") return nl(e);
	{
		let i = new n({
			format: t,
			prefixes: r
		});
		i.addQuads(e);
		let a = "";
		return i.end((e, t) => {
			e && console.error(e), a = t;
		}), a;
	}
}
function nl(e) {
	let t = [];
	for (let n of e) {
		let e = { "@id": n.subject.id };
		if (n.predicate === $) e["@type"] = n.object.id;
		else {
			let t = n.object.value;
			n.object instanceof h ? n.object.language ? t = {
				"@language": n.object.language,
				"@value": n.object.value
			} : n.object.datatype && n.object.datatype.value !== "http://www.w3.org/2001/XMLSchema##string" && (t = {
				"@type": n.object.datatype.value,
				"@value": n.object.value
			}) : t = { "@id": n.object.id }, e[n.predicate.value] = t;
		}
		t.push(e);
	}
	return JSON.stringify(t);
}
function rl(t) {
	let n = t.shaclDatatype, r = t.dataset.value || t.value;
	if ((t.type === "file" || t.getAttribute("type") === "file") && t.binaryData) r = t.binaryData;
	else if ((t.type === "checkbox" || t.getAttribute("type") === "checkbox") && (t.checked || parseInt(t.dataset.minCount || "0") > 0)) return o.literal(t.checked ? "true" : "false", n);
	if (r) {
		if (r.startsWith("<") && r.endsWith(">") && r.indexOf(":") > -1) return o.namedNode(r.substring(1, r.length - 1));
		if (t.dataset.class || t.dataset.nodeKind === "http://www.w3.org/ns/shacl#IRI") return o.namedNode(r);
		if (t.dataset.link) return JSON.parse(t.dataset.link);
		if (t.dataset.lang ? n = t.dataset.lang : t.type === "number" ? r = parseFloat(r) : t.type === "datetime-local" ? r = Mc(r, t.dataset.xsdTemporalSuffix) : t.type === "date" && n instanceof e && n.value === "http://www.w3.org/2001/XMLSchema#date" && (r = jc(r, t.dataset.xsdTemporalSuffix)), (!n || n instanceof e && pc.equals(n)) && typeof r == "string") {
			let e = r.split("^^");
			e.length === 2 && e[0].startsWith("\"") && e[0].endsWith("\"") && e[1].split(":").length === 2 ? (r = e[0].substring(1, e[0].length - 1), n = o.namedNode(e[1])) : (e = r.split("@"), e.length === 2 && e[0].startsWith("\"") && e[0].endsWith("\"") ? (r = e[0].substring(1, e[0].length - 1), n = e[1]) : r.startsWith("\"") && r.endsWith("\"") && (r = r.substring(1, r.length - 1)));
		}
		return o.literal(r, n);
	}
}
var il = {};
function al(e) {
	e.predicate === void 0 && e.datatype === void 0 ? console.warn("not registering plugin because it does neither define \"predicate\" nor \"datatype\"", e) : il[`${e.predicate}^${e.datatype}`] = e;
}
function ol() {
	return Object.entries(il).map((e) => e[1]);
}
function sl(e, t) {
	let n = il[`${e}^${t}`];
	return n || (n = il[`${e}^undefined`], n) ? n : il[`undefined^${t}`];
}
function cl(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.getQuads(null, tc, null, Q)) n.subject.termType === "NamedNode" && t.add(n.subject.value);
	if (t.size === 1) return t.values().next().value;
}
function ll(e, t) {
	let n = o.namedNode(t);
	for (let t of e.getObjects(n, tc, Q)) if (t.termType === "NamedNode" && e.getQuads(t, $, oc, null).length > 0) return t;
}
async function ul(e) {
	let t = {
		store: new S(),
		importedUrls: [],
		atts: e
	}, n = [];
	if (e.shapes ? n.push(dl(Rc({ rdf: e.shapes }), t, $s)) : e.shapesUrl && n.push(dl(Rc({
		url: e.shapesUrl,
		proxy: t.atts.proxy,
		rdfUrlResolver: t.atts.rdfUrlResolver
	}), t, $s)), e.values ? n.push(dl(Rc({ rdf: e.values }), t, Q)) : e.valuesUrl && n.push(dl(Rc({
		url: e.valuesUrl,
		proxy: t.atts.proxy,
		rdfUrlResolver: t.atts.rdfUrlResolver
	}), t, Q)), await Promise.all(n), e.classInstanceProvider) try {
		let n = Nc(t.store), r = await e.classInstanceProvider(n);
		r && await dl(Rc({ rdf: r }), t, $s);
	} catch (e) {
		console.error("failed loading class instances", e);
	}
	if (e.valuesSubject ||= cl(t.store) || null, e.valuesSubject && t.store.countQuads(null, null, null, $s) === 0) {
		let n = [...t.store.getObjects(e.valuesSubject, $, Q), ...t.store.getObjects(e.valuesSubject, tc, Q)], r = [];
		for (let e of n) {
			let n = fl(e.value);
			!n && e.value.startsWith("urn:") && t.atts.proxy && (n = e.value), n && t.importedUrls.indexOf(n) < 0 && (t.importedUrls.push(n), r.push(dl(Rc({
				url: n,
				proxy: t.atts.proxy,
				rdfUrlResolver: t.atts.rdfUrlResolver
			}), t, $s)));
		}
		try {
			await Promise.allSettled(r);
		} catch (e) {
			console.warn(e);
		}
	}
	return t.store;
}
async function dl(e, t, n) {
	let r = await e, i = [];
	for (let e of r) {
		let r = n;
		if (t.atts.valuesSubject && Q.equals(n) && e.graph.id && e.graph.id !== t.atts.valuesSubject && (r = e.graph), t.store.add(o.quad(e.subject, e.predicate, e.object, r)), t.atts.loadOwlImports && rc.equals(e.predicate)) {
			let n = fl(e.object.value);
			n && t.importedUrls.indexOf(n) < 0 && (t.importedUrls.push(n), i.push(dl(Rc({
				url: n,
				proxy: t.atts.proxy,
				rdfUrlResolver: t.atts.rdfUrlResolver
			}), t, o.namedNode(n))));
		}
	}
	await Promise.allSettled(i);
}
function fl(e) {
	if (Cc(e)) return e;
	let t = e.split(":");
	if (t.length === 2) {
		let n = Lc[t[0]];
		if (n && (e = e.replace(`${t[0]}:`, n), Cc(e))) return e;
	}
	return null;
}
async function pl(e) {
	if (e.template.nodeShapes.size === 0) return;
	let t = e.template.config.resourceLinkProvider;
	if ((!t || t && !t.lazyLoad) && (await _l(e.template), hl(e).length === 0)) return;
	let n = e.template.config.theme.createButton(e.template.label, !1);
	n.title = "Link existing " + e.template.label, n.classList.add("link-button"), n.setAttribute("text", "");
	let r = n.getAttribute("part");
	return n.setAttribute("part", `${r ? r + " " : ""}link-button`), n.addEventListener("click", async () => {
		t?.lazyLoad && (n.classList.add("loading"), await _l(e.template), n.classList.remove("loading"));
		let r = hl(e);
		if (r.length === 0) n.innerText = "No linkable resources found", n.setAttribute("disabled", ""), setTimeout(() => n.remove(), 2e3);
		else {
			let t = e.template.config.form.querySelector("#dialog");
			t || (t = new ti(), t.classList.add("link-chooser"), t.closable = !0, e.template.config.form.appendChild(t)), t.title = "Link existing " + e.template.label, ml(t, e, r), t.open = !0;
		}
	}), n;
}
function ml(e, t, n) {
	let r = document.createElement("div");
	for (let i of n) {
		let n = document.createElement("div");
		n.classList.add("link-option"), n.title = "Link this resource", n.innerText = i.label || i.value, n.addEventListener("click", () => {
			gl(i.value, t), e.open = !1;
		}), r.appendChild(n);
	}
	e.replaceChildren(r);
}
function hl(e) {
	let t = [];
	if (e.template.config.resourceLinkProvider) {
		for (let n of e.template.nodeShapes) if (e.template.config.providedConformingResourceIds[n.id.value]) for (let r of e.template.config.providedConformingResourceIds[n.id.value]) e.querySelector(`:scope > .property-instance > shacl-node[data-node-id='${r}'], :scope > .collapsible > .property-instance > shacl-node[data-node-id='${r}']`) === null && t.push({
			value: r,
			label: e.template.config.providedResourceLabels[r] || vc(e.template.config.store.getQuads(o.namedNode(r), null, null, null), e.template.config.languages),
			children: []
		});
	}
	return t;
}
async function gl(e, t) {
	let n = o.namedNode(e);
	if (t.template.config.providedResources[e]?.length > 0) {
		let n = {
			store: t.template.config.store,
			importedUrls: [],
			atts: { loadOwlImports: !1 }
		};
		await dl(Rc({ rdf: t.template.config.providedResources[e] }), n, $s), t.template.config.providedResources[e] = "";
	}
	let r = await wl(t.template, n, !0, !0);
	t.container.insertBefore(r, t.querySelector(":scope > .add-button-wrapper")), await t.updateControls();
}
async function _l(e) {
	let t = e.config.resourceLinkProvider;
	if (!t) return;
	let n = new Set(Array.from(e.nodeShapes).map((e) => e.id.value));
	if (n.size === 0) return;
	let r = Pc(Object.keys(e.config.providedConformingResourceIds), n);
	if (r.length !== 0) try {
		let n = await t.listConformingResources(r, e);
		if (n) {
			for (let t of Object.keys(n)) {
				let r = new Set(n[t]);
				e.config.providedConformingResourceIds[t] = r, await vl(r, !1, e.config);
			}
			for (let t of r) e.config.providedConformingResourceIds[t] || (e.config.providedConformingResourceIds[t] = /* @__PURE__ */ new Set());
		}
	} catch (e) {
		console.error("failed loading conforming resources", e);
	}
}
async function vl(e, t, n) {
	if (n.resourceLinkProvider && e.size > 0) {
		let r = [];
		for (let t of e) n.providedResources[t] || r.push(t);
		if (r.length === 0) return [];
		try {
			let e = await n.resourceLinkProvider.loadResources(r);
			if (e) {
				let r = {
					store: n.store,
					importedUrls: [],
					atts: { loadOwlImports: !1 }
				};
				for (let i of e) {
					n.providedResources[i.resourceId] = i.resourceRDF;
					let e = await Rc({ rdf: i.resourceRDF });
					n.providedResourceLabels[i.resourceId] = vc(e.filter((e) => e.subject.value === i.resourceId), n.languages), t && await dl(Promise.resolve(e), r, $s);
				}
				return e;
			}
			for (let e of r) n.providedResources[e] || (n.providedResources[e] = "");
		} catch (e) {
			console.error("failed loading resources", e);
		}
	}
	return [];
}
async function yl(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.store.getQuads(null, null, null, Q)) bl(n.object, e.store) && t.add(n.object.value);
	await vl(t, !0, e);
}
function bl(e, t) {
	return e.termType === "NamedNode" && t.countQuads(e, null, null, null) === 0;
}
var xl = ":scope > .add-button-wrapper, :scope > .collapsible > .add-button-wrapper", Sl = ":scope > .property-instance, :scope > .shacl-or-constraint, :scope > shacl-node, :scope > .collapsible > .property-instance", Cl = class extends HTMLElement {
	constructor(e, t) {
		if (super(), this.template = e, this.parent = t, this.container = this, this.setAttribute("part", "property"), this.template.nodeShapes.size && this.template.config.attributes.collapse !== null && (this.template.maxCount === void 0 || this.template.maxCount > 1)) {
			let t = new R();
			t.classList.add("collapsible", "shacl-group"), t.open = e.config.attributes.collapse === "open", t.label = this.template.label, t.setAttribute("part", "collapsible"), this.container = t, this.appendChild(this.container);
		}
		this.template.order !== void 0 && (this.style.order = `${this.template.order}`), this.template.cssClass && this.classList.add(this.template.cssClass), e.config.editMode && !t.linked && this.addEventListener("change", async () => {
			await this.updateControls();
		});
	}
	async bindValues(e, t) {
		if (this.template.path) {
			let n = !1;
			if (e) {
				let r = this.template.config.store.getQuads(e, this.template.path, null, this.parent.linked ? null : Q);
				t && (r = await this.filterValidValues(r, e));
				for (let e of r) this.parent.linked || this.template.config.store.delete(e), await this.addPropertyInstance(e.object, !Q.equals(e.graph) || this.template.config.providedResources[e.object.value] !== void 0, this.template.config.providedResources[e.object.value] !== void 0), this.template.hasValue && e.object.equals(this.template.hasValue) && (n = !0);
			}
			this.template.config.editMode && this.template.hasValue && !n && !this.parent.linked && await this.addPropertyInstance(this.template.hasValue);
		}
	}
	async addPropertyInstance(e, t, n = !1) {
		let r;
		if (this.template.or?.length || this.template.xone?.length) {
			let t = this.template.or?.length ? this.template.or : this.template.xone, n = !1;
			if (e) {
				let i = Xc(t, e, this.template.config);
				i.length && (r = await wl(qc(Kc(this.template), i), e, !this.parent.linked, this.parent.linked, this.parent), n = !0);
			}
			!n && this.template.config.editMode && (r = Yc(t, this, this.template.config), Tl(r, "", this.template.config.theme.dense, this.template.config.hierarchyColorsStyleSheet !== void 0));
		} else r = await wl(this.template, e, n, t || this.parent.linked, this.parent);
		return r && this.container.insertBefore(r, this.querySelector(xl)), r;
	}
	async updateControls() {
		this.template.config.editMode && !this.parent.linked && !this.querySelector(xl) && this.container.appendChild(await this.createAddControls());
		let e = Wc(this.template), t = this.template.nodeShapes.size === 0, n = this.querySelector(":scope > .add-button-wrapper > .link-button, :scope > .collapsible > .add-button-wrapper > .link-button") === null, r = t || !this.hasRecursiveNodeShape(), i = this.instanceCount();
		i === 0 && r && (t || n && e > 0) && (await this.addPropertyInstance(), i = 1), t || this.querySelector(xl)?.classList.toggle("required", i < e);
		let a;
		a = e > 0 ? i > e : !t || i > 1;
		let o = i < Gc(this.template);
		this.classList.toggle("may-remove", a), this.classList.toggle("may-add", o);
	}
	instanceCount() {
		return this.querySelectorAll(Sl).length;
	}
	hasRecursiveNodeShape() {
		let e = /* @__PURE__ */ new Set();
		this.parent.ancestorShapeIds.forEach((t) => e.add(t)), e.add(this.parent.template.id.value);
		for (let t of this.template.nodeShapes) if (e.has(t.id.value)) return !0;
		return !1;
	}
	toRDF(e, t) {
		let n = o.namedNode(this.template.path);
		for (let r of this.querySelectorAll(":scope > .property-instance, :scope > .collapsible > .property-instance")) if (r.firstChild instanceof Il) {
			let i = r.firstChild.toRDF(e);
			e.addQuad(t, n, i, this.template.config.valuesGraphId);
		} else if (this.template.config.editMode) for (let i of r.querySelectorAll(":scope > .editor")) {
			let r = rl(i);
			r && e.addQuad(t, n, r, this.template.config.valuesGraphId);
		}
		else {
			let i = rl(r);
			i && e.addQuad(t, n, i, this.template.config.valuesGraphId);
		}
	}
	async filterValidValues(e, t) {
		let n = this.template.id, r = [t];
		if (this.template.qualifiedValueShape) {
			n = this.template.qualifiedValueShape.id, r = [];
			for (let t of e) r.push(t.object);
		}
		let i = await this.template.config.validator.validate({
			dataset: this.template.config.store,
			terms: r
		}, [{ terms: [n] }]), a = /* @__PURE__ */ new Set();
		for (let e of i.results) {
			let t = this.template.qualifiedValueShape ? e.focusNode : e.value;
			t?.ptrs?.length && a.add(t.ptrs[0]._term.id);
		}
		return e.filter((e) => !a.has(e.object.id));
	}
	async createAddControls() {
		let e = document.createElement("div");
		e.classList.add("add-button-wrapper"), e.setAttribute("part", "add-controls");
		let t = await pl(this);
		t && e.appendChild(t);
		let n = this.template.config.theme.createButton(this.template.label, !1);
		n.title = "Add " + this.template.label, n.classList.add("add-button"), n.setAttribute("text", "");
		let r = n.getAttribute("part");
		return n.setAttribute("part", `${r ? r + " " : ""}add-button`), n.addEventListener("click", async () => {
			let e = await this.addPropertyInstance();
			e && (e.classList.add("fadeIn"), await this.updateControls(), setTimeout(() => {
				_c(e), e.classList.remove("fadeIn");
			}, 200));
		}), e.appendChild(n), e;
	}
};
async function wl(e, t, n = !1, r = !1, i) {
	let a;
	if (e.nodeShapes.size) {
		a = document.createElement("div"), a.classList.add("property-instance"), a.setAttribute("part", "property-instance");
		let n = new Set(i?.ancestorShapeIds ?? []);
		i && n.add(i.template.id.value);
		for (let i of e.nodeShapes) {
			let o = new Il(i, t, e.nodeKind, e.label, r, n);
			a.appendChild(o), await o.ready;
		}
	} else {
		let n = sl(e.path, e.datatype?.value);
		a = n ? e.config.editMode && !r ? n.createEditor(e, t) : n.createViewer(e, t) : el(e, t || null, e.config.editMode && !r), a.childNodes.length > 0 && (a.classList.add("property-instance"), a.setAttribute("part", "property-instance")), r && a.classList.add("linked");
	}
	return e.config.editMode && (!r || n) ? Tl(a, e.label, e.config.theme.dense, e.config.hierarchyColorsStyleSheet !== void 0, n) : e.config.hierarchyColorsStyleSheet !== void 0 && a.appendChild(El(!0)), t && !e.config.editMode && (t instanceof h ? (a.dataset.value = t.value, t.language.length > 0 ? a.dataset.lang = t.language : a.shaclDatatype = t.datatype) : a.dataset.value = "<" + t.value + ">"), a.dataset.path = e.path, a;
}
function Tl(e, t, n, r, i = !1) {
	let a = El(r), o = new Sn();
	o.classList.add("remove-button", "clear"), o.title = "Remove " + t, o.dense = n, o.icon = !0;
	let s = o.getAttribute("part");
	o.setAttribute("part", `${s ? s + " " : ""}remove-button`), o.addEventListener("click", () => {
		e.classList.remove("fadeIn"), e.classList.add("fadeOut"), setTimeout(() => {
			let t = e.parentElement;
			e.remove(), t?.dispatchEvent(new Event("change", {
				bubbles: !0,
				cancelable: !0
			}));
		}, 200);
	}), i && o.classList.add("persistent"), a.appendChild(o), e.appendChild(a);
}
function El(e) {
	let t = document.createElement("div");
	return t.className = "remove-button-wrapper", t.setAttribute("part", "remove-controls"), e && t.classList.add("colorize"), t;
}
window.customElements.define("shacl-property", Cl);
function Dl(e, t) {
	let n = e, r = t.store.getQuads(e, null, null, null), i = hc(r, "label", Xs, t.languages);
	i && (n = i);
	let a;
	if (t.attributes.collapse !== null) a = new R(), a.classList.add("collapsible"), a.open = t.attributes.collapse === "open", a.label = n, a.setAttribute("part", "group collapsible");
	else {
		a = document.createElement("div");
		let e = document.createElement("h1");
		e.innerText = n, e.setAttribute("part", "group-title"), a.appendChild(e), a.setAttribute("part", "group");
	}
	a.dataset.subject = e, a.classList.add("shacl-group");
	let o = hc(r, "order");
	return o && (a.style.order = o), a;
}
var Ol = {
	[`${Z}node`]: (e, t) => {
		e.extendedShapes.add(new kl(t, e.config, e));
	},
	[`${Z}and`]: (e, t) => {
		for (let n of e.config.lists[t.value]) e.extendedShapes.add(new kl(n, e.config, e));
	},
	[`${Z}property`]: (e, t) => {
		let n = e.config.getPropertyTemplate(t, e);
		if (n.path) {
			let t = e.properties[n.path];
			if (t || (t = [], e.properties[n.path] = t), n.qualifiedValueShape) t.push(n);
			else {
				let r;
				for (let t = 0; t < e.properties[n.path].length && !r; t++) e.properties[n.path][t].qualifiedValueShape || (r = e.properties[n.path][t]);
				r ? Jc(r, n) : t.push(n);
			}
		}
	},
	[`${Z}nodeKind`]: (e, t) => {
		e.nodeKind = t;
	},
	[`${Z}targetClass`]: (e, t) => {
		e.targetClass = t;
	},
	[`${Z}or`]: (e, t) => {
		e.or = e.config.lists[t.value];
	},
	[`${Z}xone`]: (e, t) => {
		e.xone = e.config.lists[t.value];
	},
	[rc.id]: (e, t) => {
		e.owlImports.add(t);
	},
	[`${Qs}title`]: (e, t) => {
		let n = t;
		e.label = wc(e.config.languages, e.label, n);
	},
	[`${Xs}label`]: (e, t) => {
		let n = t;
		e.label = wc(e.config.languages, e.label, n);
	}
}, kl = class {
	constructor(e, t, n) {
		this.extendedShapes = /* @__PURE__ */ new Set(), this.properties = {}, this.owlImports = /* @__PURE__ */ new Set(), this.merged = !1, this.id = e, this.config = t, this.parent = n, t.registerNodeTemplate(this), Al(this, this.config.store.getQuads(e, null, null, null));
	}
};
function Al(e, t) {
	for (let n of t) Ol[n.predicate.id]?.call(e, e, n.object);
	return e;
}
function jl(e) {
	if (!e.merged) {
		e.merged = !0;
		for (let t of Object.values(e.properties)) for (let n of t) {
			let [t, r] = Fl(e, n.path);
			if (t.length > 1 && r) {
				let e = t[t.length - 1];
				for (let n = t.length - 2; n >= 0; n--) {
					let r = t[n];
					delete r.parent.properties[r.path], Jc(e, r);
				}
				Ml(e);
			}
		}
	}
}
function Ml(e) {
	for (let t of ["xone", "or"]) {
		let n = e[t];
		if (!n?.length) continue;
		let r = n.filter((t) => Nl(t, e));
		r.length < n.length && (e[t] = r.length > 1 ? r : void 0);
	}
}
function Nl(e, t) {
	let n = t.config.store.getQuads(e, null, null, null);
	return Pl(n, "http://www.w3.org/ns/shacl#datatype", t.datatype) && Pl(n, lc.id, t.class) && Pl(n, "http://www.w3.org/ns/shacl#nodeKind", t.nodeKind);
}
function Pl(e, t, n) {
	if (!n) return !0;
	let r = !1;
	for (let i of e) if (i.predicate.value === t && (r = !0, i.object.equals(n))) return !0;
	return !r;
}
function Fl(e, t, n = /* @__PURE__ */ new Set(), r = [], i = !1) {
	if (!n.has(e.id.value)) {
		n.add(e.id.value);
		let a = e.properties[t];
		if (a?.length === 1) {
			r.push(a[0]), i ||= a[0].maxCount === 1;
			for (let e of a[0].nodeShapes) {
				let [a, o] = Fl(e, t, n, r, i);
				i ||= o;
			}
		}
		for (let a of e.extendedShapes) {
			let [e, o] = Fl(a, t, n, r, i);
			i ||= o;
		}
	}
	return [r, i];
}
var Il = class e extends HTMLElement {
	constructor(t, n, r, i, a, s = /* @__PURE__ */ new Set()) {
		super(), this.template = t, this.linked = a ?? !1, this.ancestorShapeIds = s, this.setAttribute("part", "node");
		let c = n;
		c ||= (!r && t.nodeKind && (r = t.nodeKind), r === void 0 && t.config.attributes.valuesNamespace || r?.value === "http://www.w3.org/ns/shacl#IRI" ? o.namedNode(t.config.attributes.valuesNamespace + O()) : o.blankNode(O())), this.nodeId = c;
		let l = JSON.stringify([t.id, n]);
		if (n && t.config.renderedNodes.has(l)) {
			i ||= "Link";
			let e = document.createElement("label");
			e.innerText = i, e.classList.add("linked"), this.appendChild(e);
			let t = this.getAttribute("part");
			this.setAttribute("part", `${t ? t + " " : ""}linked-node`), this.dataset.nodeId = this.nodeId.id;
			let r = document.createElement("a"), a = n.termType === "BlankNode" ? "_:" + n.value : n.value;
			r.innerText = a, r.classList.add("ref-link"), r.onclick = () => {
				this.template.config.form.querySelector(`shacl-node[data-node-id='${a}']:not([part~='linked-node'])`)?.scrollIntoView();
			}, this.appendChild(r), this.style.flexDirection = "row", this.ready = Promise.resolve();
		} else {
			n && t.config.renderedNodes.add(l);
			let r = this.ancestorShapeIds, o = this.template.id.value;
			if (this.dataset.nodeId = this.nodeId.id, this.template.config.attributes.showNodeIds !== null) {
				let e = document.createElement("div");
				e.innerText = `id: ${this.nodeId.id}`, e.classList.add("node-id-display"), this.appendChild(e);
			}
			jl(t), this.ready = (async () => {
				let s = new Set(r);
				s.add(o);
				for (let [e, r] of Object.entries(t.properties)) for (let e of r) await this.addPropertyInstance(e, n, r.length > 1);
				for (let r of t.extendedShapes) {
					let t = new e(r, n, void 0, void 0, a, s);
					this.prepend(t), await t.ready;
				}
				if (t.or?.length && await this.tryResolve(t.or, n, t.config), t.xone?.length && await this.tryResolve(t.xone, n, t.config), i) {
					let e = document.createElement("h1");
					e.innerText = i, e.setAttribute("part", "node-title"), this.prepend(e);
				}
			})();
		}
	}
	toRDF(e, t, n = "") {
		if (t ||= this.nodeId, !this.linked) {
			for (let n of this.querySelectorAll(":scope > shacl-node, :scope > .shacl-group > shacl-node, :scope > shacl-property, :scope > .shacl-group > shacl-property")) n.toRDF(e, t);
			this.template.targetClass && e.addQuad(t, $, this.template.targetClass, this.template.config.valuesGraphId), n && e.addQuad(t, o.namedNode(n), this.template.id, this.template.config.valuesGraphId);
		}
		return t;
	}
	async addPropertyInstance(e, t, n) {
		let r = null;
		if (e.group) if (e.config.groups.indexOf(e.group) > -1) {
			let t = this.querySelector(`:scope > .shacl-group[data-subject='${e.group}']`);
			t || (t = Dl(e.group, e.config), this.appendChild(t)), r = t;
		} else console.warn("ignoring unknown group reference", e.group, "existing groups:", e.config.groups);
		let i = new Cl(e, this);
		await i.bindValues(t, n), (e.config.editMode || i.instanceCount() > 0) && (r ? r.appendChild(i) : this.appendChild(i), await i.updateControls());
	}
	async tryResolve(e, t, n) {
		let r = !1;
		if (t) {
			let i = Zc(e, t, n);
			if (i.length) {
				for (let e of i) await this.addPropertyInstance(n.getPropertyTemplate(e, this.template), t);
				r = !0;
			}
		}
		r || this.appendChild(Yc(e, this, n));
	}
};
window.customElements.define("shacl-node", Il);
var Ll = "\n.editor:not([type='checkbox']) { border: 1px solid var(--shacl-border-color, #DDD); }\n.property-instance label { display: inline-flex; word-break: break-word; line-height: 1em; padding-top: 0.15em; padding-right: 1em; flex-shrink: 0; position: relative; }\n.property-instance:not(:first-child) > label:not(.persistent) { visibility: hidden; max-height: 0; }\n.mode-edit .property-instance label { width: var(--label-width); }\n", Rl = class extends $c {
	constructor(e) {
		super(e || Ll), this.idCtr = 0;
	}
	createDefaultTemplate(t, n, r, i, a) {
		if (i.id = `e${this.idCtr++}`, i.classList.add("editor"), i.setAttribute("part", "editor"), a?.datatype ? i.shaclDatatype = a.datatype : n instanceof h && (i.shaclDatatype = n.datatype), a && Wc(a) > 0 && (i.dataset.minCount = String(Wc(a))), a?.class && (i.dataset.class = a.class.value), a?.nodeKind) i.dataset.nodeKind = a.nodeKind.value;
		else if (n && (n instanceof e || a?.nodeKind?.equals(sc)) && (i.dataset.nodeKind = Z + "IRI", a)) {
			let e = vc(a.config.store.getQuads(n, null, null, null), a.config.languages);
			e && (i.dataset.value = "<" + n.value + ">", n = o.literal(e));
		}
		(a?.hasValue && n || a?.readonly) && (i.disabled = !0);
		let s = n?.value || a?.defaultValue?.value || "";
		a?.datatype?.equals(mc) ? i.checked = n?.value === "true" || a?.defaultValue?.value === "true" : i.type === "file" ? i.binaryData = s || void 0 : i.value = s;
		let c = document.createElement("label");
		c.htmlFor = i.id, c.innerText = t, c.setAttribute("part", "label"), a?.description && c.setAttribute("title", a.description.value);
		let l = a?.description ? a.description.value : a?.pattern ? a.pattern : null;
		l && i.setAttribute("placeholder", l), r && (i.setAttribute("required", "true"), c.classList.add("required"));
		let u = document.createElement("div");
		return u.setAttribute("part", "field"), u.appendChild(c), u.appendChild(i), u;
	}
	createDateEditor(e, t, n, r) {
		let i = new z();
		r.datatype?.value === "http://www.w3.org/2001/XMLSchema#dateTime" ? (i.type = "datetime-local", i.setAttribute("step", "1")) : i.type = "date", i.clearable = !0, i.dense = this.dense, i.classList.add("pr-0");
		let a = this.createDefaultTemplate(e, null, n, i, r);
		if (t) {
			let e = r.datatype?.value === "http://www.w3.org/2001/XMLSchema#dateTime" ? Ac(t.value) : kc(t.value);
			e ? (i.value = e.value, e.suffix && (i.dataset.xsdTemporalSuffix = e.suffix)) : console.error("unable to parse xsd date literal", t);
		}
		return a;
	}
	createTextEditor(e, t, n, r) {
		let i;
		return r.singleLine === !1 ? (i = new Ir(), i.resize = "auto") : i = new z(), i.dense = this.dense, r.pattern && (i.pattern = r.pattern), r.minLength && (i.minLength = r.minLength), r.maxLength && (i.maxLength = r.maxLength), this.createDefaultTemplate(e, t, n, i, r);
	}
	createLangStringEditor(e, t, n, r) {
		let i = this.createTextEditor(e, t, n, r), a = i.querySelector(":scope .editor"), o;
		if (r.languageIn?.length) {
			o = document.createElement("select");
			for (let e of r.languageIn) {
				let t = document.createElement("option");
				t.innerText = e.value, o.appendChild(t);
			}
		} else o = document.createElement("input"), o.maxLength = 5, o.size = 5, o.placeholder = "lang?";
		return o.title = "Language of the text", o.classList.add("lang-chooser"), o.setAttribute("part", "lang-chooser"), o.slot = "suffix", a.addEventListener("change", () => {
			o.required = a.value !== "";
		}), o.addEventListener("change", (e) => {
			e.stopPropagation(), a && (a.dataset.lang = o.value, a.dispatchEvent(new Event("change", { bubbles: !0 })));
		}), t instanceof h && (o.value = t.language), a.dataset.lang = o.value, a.appendChild(o), i;
	}
	createBooleanEditor(e, t, n, r) {
		let i = document.createElement("input");
		i.type = "checkbox", i.classList.add("ml-0");
		let a = this.createDefaultTemplate(e, null, n, i, r);
		return i.removeAttribute("required"), a.querySelector(":scope label")?.classList.remove("required"), t instanceof h && (i.checked = t.value === "true"), a;
	}
	createFileEditor(e, t, n, r) {
		let i = document.createElement("input");
		return i.type = "file", i.addEventListener("change", (e) => {
			if (i.files?.length) {
				e.stopPropagation();
				let t = new FileReader();
				t.readAsDataURL(i.files[0]), t.onload = () => {
					i.binaryData = btoa(t.result), i.parentElement?.dispatchEvent(new Event("change", { bubbles: !0 }));
				};
			} else i.binaryData = void 0;
		}), this.createDefaultTemplate(e, t, n, i, r);
	}
	createNumberEditor(e, t, n, r) {
		let i = new z();
		i.type = "number", i.clearable = !0, i.dense = this.dense, i.classList.add("pr-0");
		let a = r.minInclusive === void 0 ? r.minExclusive === void 0 ? void 0 : r.minExclusive + 1 : r.minInclusive, o = r.maxInclusive === void 0 ? r.maxExclusive === void 0 ? void 0 : r.maxExclusive - 1 : r.maxInclusive;
		return a !== void 0 && (i.min = String(a)), o !== void 0 && (i.max = String(o)), r.datatype?.value !== "http://www.w3.org/2001/XMLSchema#integer" && (i.step = "any"), this.createDefaultTemplate(e, t, n, i, r);
	}
	createListEditor(t, n, r, i, a) {
		let o = new U();
		o.clearable = !0, o.dense = this.dense;
		let s = this.createDefaultTemplate(t, null, r, o, a), c = document.createElement("ul"), l = !0, u = (t, n) => {
			let r = document.createElement("li");
			if (typeof t.value == "string" ? (r.dataset.value = t.value, r.innerText = t.label ? t.label : t.value) : (r.dataset.value = t.value.id, t.value instanceof e && (r.dataset.value = "<" + r.dataset.value + ">"), r.innerText = t.label ? t.label : t.value.value), n.appendChild(r), t.children?.length) {
				l = !1;
				let e = document.createElement("ul");
				r.appendChild(e);
				for (let n of t.children) u(n, e);
			}
		};
		for (let e of i) u(e, c);
		return l || (o.collapse = !0), o.appendChild(c), n = n ?? a?.defaultValue ?? null, n && (o.value = n.id, n instanceof e && (o.value = "<" + o.value + ">")), s;
	}
	createButton(e, t) {
		let n = new Sn();
		return n.dense = this.dense, n.innerHTML = e, t ? (n.setAttribute("primary", ""), n.setAttribute("part", "button primary")) : n.setAttribute("part", "button"), n;
	}
}, zl = class {
	constructor() {
		this.shapes = null, this.shapesUrl = null, this.shapeSubject = null, this.values = null, this.valuesUrl = null, this.valueSubject = null, this.valuesSubject = null, this.valuesNamespace = "", this.valuesGraph = null, this.view = null, this.language = null, this.loading = "Loading…", this.proxy = null, this.ignoreOwlImports = null, this.collapse = null, this.hierarchyColors = null, this.submitButton = null, this.generateNodeShapeReference = tc.value, this.showNodeIds = null, this.showRootShapeLabel = null, this.dense = "true", this.useShadowRoot = "true";
	}
}, Bl = "#4c93d785, #f85e9a85, #00327385, #87001f85", Vl = class {
	constructor(e) {
		this.attributes = new zl(), this.editMode = !0, this.lists = {}, this.groups = [], this.renderedNodes = /* @__PURE__ */ new Set(), this._store = new S(), this._nodeTemplates = {}, this._propertyTemplates = {}, this.validator = new Ks(this._store, {
			details: !0,
			factory: o
		}), this.providedConformingResourceIds = {}, this.providedResources = {}, this.providedResourceLabels = {}, this.form = e, this._theme = new Rl(), this.languages = [...new Set(navigator.languages.flatMap((e) => e.length > 2 ? [e.toLocaleLowerCase(), e.substring(0, 2)] : e)), ""];
	}
	reset() {
		this.lists = {}, this.groups = [], this.renderedNodes.clear(), this.providedConformingResourceIds = {}, this.providedResources = {}, this.providedResourceLabels = {}, this._nodeTemplates = {}, this._propertyTemplates = {};
	}
	updateAttributes(e) {
		let t = new zl();
		if (Object.keys(t).forEach((n) => {
			let r = e.dataset[n];
			r !== void 0 && (t[n] = r);
		}), this.editMode = t.view === null, this.theme.setDense(t.dense === "true"), this.attributes = t, this.attributes.valueSubject && !this.attributes.valuesSubject && (this.attributes.valuesSubject = this.attributes.valueSubject), t.language) {
			let e = this.languages.indexOf(t.language);
			e > -1 && this.languages.splice(e, 1), this.languages.unshift(t.language);
		}
		if (t.valuesGraph && (this.valuesGraphId = o.namedNode(t.valuesGraph)), t.hierarchyColors != null) {
			let e = t.hierarchyColors.length ? t.hierarchyColors : Bl, n = `:host { --hierarchy-colors: ${e}; --hierarchy-colors-length: ${e.split(",").length} }`;
			for (let e = 8; e >= 0; e--) {
				let t = `shacl-property { --hierarchy-level: ${e} }`;
				for (let n = 0; n < e; n++) t = "shacl-property " + t;
				n = n + "\n" + t;
			}
			this.hierarchyColorsStyleSheet = new CSSStyleSheet(), this.hierarchyColorsStyleSheet.replaceSync(n);
		}
	}
	static dataAttributes() {
		let e = new zl();
		return Object.keys(e).map((e) => (e = e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()), "data-" + e));
	}
	buildTemplateKey(e, t) {
		let n = e.value;
		return t && (t instanceof Uc ? n += "*" + t.id.value : n += "*" + this.buildTemplateKey(t.id, t.parent)), n;
	}
	registerNodeTemplate(e) {
		this._nodeTemplates[this.buildTemplateKey(e.id, e.parent)] = e;
	}
	registerPropertyTemplate(e) {
		this._propertyTemplates[this.buildTemplateKey(e.id, e.parent)] = e;
	}
	getNodeTemplateIds() {
		let e = /* @__PURE__ */ new Set();
		for (let t of Object.values(this._nodeTemplates)) e.add(t.id.value);
		return e;
	}
	getNodeTemplate(e, t) {
		let n = this.buildTemplateKey(e, t), r = this._nodeTemplates[n];
		return r ||= new kl(e, this, t), r;
	}
	getPropertyTemplate(e, t) {
		let n = this.buildTemplateKey(e, t), r = this._propertyTemplates[n];
		return r ||= new Uc(e, t), r;
	}
	get nodeTemplates() {
		return Object.values(this._nodeTemplates);
	}
	get theme() {
		return this._theme;
	}
	set theme(e) {
		this._theme = e, e.setDense(this.attributes.dense === "true");
	}
	get store() {
		return this._store;
	}
	set store(e) {
		this._store = e, this.lists = Fc(e, { ignoreErrors: !0 }), this.groups = [], e.forSubjects((e) => {
			this.groups.push(e.id);
		}, $, `${Z}PropertyGroup`, null), this.validator = new Ks(e, {
			details: !0,
			factory: o
		});
	}
}, Hl = class extends HTMLElement {
	static get observedAttributes() {
		return Vl.dataAttributes();
	}
	constructor() {
		super(), this.shape = null, this.styleElement = null, this.form = document.createElement("form"), this.form.setAttribute("part", "form"), this.config = new Vl(this.form), this.form.addEventListener("change", (e) => {
			e.stopPropagation(), this.config.editMode && this.validate(!0).then((e) => {
				this.dispatchEvent(new CustomEvent("change", {
					bubbles: !0,
					cancelable: !1,
					composed: !0,
					detail: {
						valid: e.conforms,
						report: e
					}
				}));
			}).catch((e) => {
				console.warn(e);
			});
		});
	}
	connectedCallback() {
		this.config.updateAttributes(this), this.ensureRenderRoot(), this.initialize();
	}
	attributeChangedCallback() {
		this.config.updateAttributes(this), this.ensureRenderRoot(), this.initialize();
	}
	initialize() {
		clearTimeout(this.initDebounceTimeout), this.setAttribute("loading", ""), this.form.replaceChildren(document.createTextNode(this.config.attributes.loading)), this.initDebounceTimeout = setTimeout(async () => {
			try {
				this.config.reset(), this.config.store = await ul({
					shapes: this.config.attributes.shapes,
					shapesUrl: this.config.attributes.shapesUrl,
					values: this.config.attributes.values,
					valuesUrl: this.config.attributes.valuesUrl,
					valuesSubject: this.config.attributes.valuesSubject,
					loadOwlImports: this.config.attributes.ignoreOwlImports === null,
					classInstanceProvider: this.config.classInstanceProvider,
					rdfUrlResolver: this.config.rdfUrlResolver,
					proxy: this.config.attributes.proxy
				}), this.config.resourceLinkProvider && await yl(this.config), this.config.attributes.valuesSubject || (this.config.attributes.valuesSubject = cl(this.config.store) || null), this.form.replaceChildren();
				let e = this.findRootShaclShapeSubject();
				if (e) {
					this.form.classList.forEach((e) => {
						this.form.classList.remove(e);
					}), this.form.classList.toggle("mode-edit", this.config.editMode), this.form.classList.toggle("mode-view", !this.config.editMode), this.config.theme.apply(this.form);
					let t = [this.config.theme.stylesheet];
					this.config.hierarchyColorsStyleSheet && t.push(this.config.hierarchyColorsStyleSheet);
					for (let e of ol()) e.stylesheet && t.push(e.stylesheet);
					this.applyStyles(t);
					let n = new kl(e, this.config);
					for (let e of this.config.nodeTemplates) jl(e);
					if (this.shape = new Il(n, this.config.attributes.valuesSubject ? o.namedNode(this.config.attributes.valuesSubject) : void 0), this.form.appendChild(this.shape), this.config.attributes.showRootShapeLabel !== null && n.label) {
						let e = document.createElement("h3");
						e.innerText = n.label.value, this.form.prepend(e);
					}
					if (this.config.editMode) {
						if (this.config.attributes.submitButton !== null) {
							let e = this.config.theme.createButton(this.config.attributes.submitButton || "Submit", !0);
							e.classList.add("submit-button");
							let t = e.getAttribute("part");
							e.setAttribute("part", `${t ? t + " " : ""}submit-button`), e.addEventListener("click", (e) => {
								e.preventDefault(), this.form.reportValidity() && this.validate().then((e) => {
									if (e?.conforms) this.dispatchEvent(new Event("submit", {
										bubbles: !0,
										cancelable: !0
									}));
									else {
										let e = this.form.querySelector(":scope .invalid > .editor");
										e ? e.focus() : this.form.querySelector(":scope .invalid")?.scrollIntoView();
									}
								});
							}), this.form.appendChild(e);
						}
						(async () => {
							await this.shape?.ready, this.config.attributes.valuesSubject && this.removeFromDataGraph(o.namedNode(this.config.attributes.valuesSubject)), this.validate(!0);
						})();
					}
				} else if (this.config.store.countQuads(null, null, null, $s) > 0) throw Error("shacl root node shape not found");
			} catch (e) {
				console.error(e);
				let t = document.createElement("div");
				t.innerText = String(e), this.form.replaceChildren(t);
			}
			this.removeAttribute("loading"), await this.shape?.ready, this.dispatchEvent(new Event("ready"));
		}, 200);
	}
	ensureRenderRoot() {
		this.config.attributes.useShadowRoot === "false" ? (this.shadowRoot?.contains(this.form) && this.shadowRoot.removeChild(this.form), this.contains(this.form) || this.prepend(this.form)) : (this.shadowRoot || this.attachShadow({ mode: "open" }), this.shadowRoot.contains(this.form) || this.shadowRoot.prepend(this.form));
	}
	applyStyles(e) {
		if (this.config.attributes.useShadowRoot !== "false" && this.shadowRoot) {
			this.shadowRoot.adoptedStyleSheets = e, this.styleElement &&= (this.styleElement.remove(), null);
			return;
		}
		let t = e.map((e) => Array.from(e.cssRules).map((e) => e.cssText).join("\n").replace(/:host\b/g, "shacl-form")).join("\n");
		this.styleElement || (this.styleElement = document.createElement("style"), this.prepend(this.styleElement)), this.styleElement.textContent = t;
	}
	serialize(e = "text/turtle", t = this.toRDF()) {
		return tl(t.getQuads(null, null, null, null), e, Lc);
	}
	toRDF(e = new S()) {
		return this.shape?.toRDF(e, void 0, this.config.attributes.generateNodeShapeReference), e;
	}
	registerPlugin(e) {
		al(e), this.initialize();
	}
	setTheme(e) {
		this.config.theme = e, this.initialize();
	}
	setClassInstanceProvider(e) {
		this.config.classInstanceProvider = e, this.initialize();
	}
	setRdfUrlResolver(e) {
		this.config.rdfUrlResolver = e, this.initialize();
	}
	setResourceLinkProvider(e) {
		this.config.resourceLinkProvider = e, this.initialize();
	}
	async validate(e = !1) {
		for (let e of this.form.querySelectorAll(":scope .validation-error")) e.remove();
		for (let e of this.form.querySelectorAll(":scope .property-instance")) e.classList.remove("invalid"), e.querySelector(":scope > .editor")?.value ? e.classList.add("valid") : e.classList.remove("valid");
		for (let e of this.form.querySelectorAll(".add-button-wrapper")) e.classList.remove("invalid", "validation-error");
		if (!this.shape) return {
			conforms: !0,
			results: []
		};
		if (!e) {
			let e = this.form.querySelectorAll(".add-button-wrapper.required");
			for (let t of e) t.classList.add("invalid"), t.after(this.createValidationErrorDisplay("Value is required", "node"));
			if (e.length > 0) return {
				conforms: !1,
				results: []
			};
		}
		let t = this.shape;
		return new Promise((n) => {
			this.config.store.deleteGraph(this.config.valuesGraphId || "").on("end", async () => {
				t.toRDF(this.config.store, void 0, this.config.attributes.generateNodeShapeReference);
				try {
					let r = await this.config.validator.validate({
						dataset: this.config.store,
						terms: [t.nodeId]
					}, [{ terms: [t.template.id] }]);
					for (let t of r.results) if (t.focusNode?.ptrs?.length) for (let n of t.focusNode.ptrs) {
						let r = n._term;
						if (t.path?.length) {
							let n = t.path[0].predicates[0], i = this.form.querySelectorAll(`
                                        :scope shacl-node[data-node-id='${r.id}'] > shacl-property > .property-instance[data-path='${n.id}'] > .editor,
                                        :scope shacl-node[data-node-id='${r.id}'] > shacl-property > .shacl-group > .property-instance[data-path='${n.id}'] > .editor,
                                        :scope shacl-node[data-node-id='${r.id}'] > .shacl-group > shacl-property > .property-instance[data-path='${n.id}'] > .editor,
                                        :scope shacl-node[data-node-id='${r.id}'] > .shacl-group > shacl-property > .shacl-group > .property-instance[data-path='${n.id}'] > .editor`);
							i.length === 0 && (i = this.form.querySelectorAll(`
                                            :scope [data-node-id='${r.id}']  > shacl-property > .property-instance[data-path='${n.id}'],
                                            :scope [data-node-id='${r.id}']  > shacl-property > .shacl-group > .property-instance[data-path='${n.id}']`));
							for (let n of i) if (n.classList.contains("editor")) {
								if (!e || n.value) {
									let e = n.parentElement;
									e.classList.add("invalid"), e.classList.remove("valid"), e.appendChild(this.createValidationErrorDisplay(t));
									do
										e instanceof R && (e.open = !0), e = e.parentElement;
									while (e);
								}
							} else e || (n.classList.add("invalid"), n.classList.remove("valid"), n.appendChild(this.createValidationErrorDisplay(t, "node")));
						} else e || this.form.querySelector(`:scope [data-node-id='${r.id}']:not([part~='linked-node'])`)?.prepend(this.createValidationErrorDisplay(t, "node"));
					}
					n(r);
				} catch (e) {
					console.error(e), n({
						conforms: !1,
						results: []
					});
				}
			});
		});
	}
	createValidationErrorDisplay(e, t) {
		let n = document.createElement("span");
		n.classList.add("validation-error"), t && n.classList.add(t);
		let r = typeof e == "object" && e ? e : null;
		return r ? r.message?.length ? n.title += Tc(this.config.languages, r.message) : r.sourceConstraintComponent?.value && (n.title = r.sourceConstraintComponent.value) : typeof e == "string" && (n.title = e), n;
	}
	findRootShaclShapeSubject() {
		if (this.config.attributes.shapeSubject) {
			let e = o.namedNode(this.config.attributes.shapeSubject);
			if (this.config.store.getQuads(e, $, oc, null).length === 0) {
				console.warn(`shapes graph does not contain requested node shape ${this.config.attributes.shapeSubject}`);
				return;
			} else return e;
		} else {
			if (this.config.attributes.valuesSubject && this.config.store.countQuads(null, null, null, Q) > 0) {
				let e = o.namedNode(this.config.attributes.valuesSubject), t = ll(this.config.store, this.config.attributes.valuesSubject), n = this.config.store.getQuads(e, $, null, Q);
				if (n.length === 0 && console.warn(`value subject '${this.config.attributes.valuesSubject}' has neither ${$.id} nor ${tc.id} statement`), t) return t;
				for (let e of n) if (this.config.store.getQuads(e.object, $, oc, null).length > 0) return e.object;
				let r = this.config.store.getObjects(e, $, Q);
				for (let e of r) for (let t of this.config.store.getQuads(null, dc, e, null)) return t.subject;
			}
			let e = this.config.store.getQuads(null, $, oc, null);
			if (e.length == 0) {
				console.warn("shapes graph does not contain any node shapes");
				return;
			}
			return e.length > 1 && (console.warn("shapes graph contains", e.length, "node shapes. choosing first found which is", e[0].subject.value), console.info("hint: set the node shape to use with element attribute \"data-shape-subject\"")), e[0].subject;
		}
	}
	removeFromDataGraph(e) {
		for (let t of this.config.store.getQuads(e, null, null, Q)) this.config.store.delete(t), (t.object.termType === "NamedNode" || t.object.termType === "BlankNode") && this.removeFromDataGraph(t.object);
	}
};
window.customElements.define("shacl-form", Hl);
//#endregion
//#region src/helpers/rdf-data.js
var Ul = "@prefix sh: <http://www.w3.org/ns/shacl#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix ex: <http://example.org#> .\n\nex:DefaultShape\n  a sh:NodeShape, rdf:Class ;\n  sh:property [\n    sh:name 'class' ;\n    sh:path rdf:type ;\n    sh:minCount 1 ;\n    sh:maxCount 1 ;\n  ] ;\n  sh:property [\n    sh:name 'label' ;\n    sh:path rdfs:label ;\n    sh:maxCount 1 ;\n  ] .", Wl = "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n\n<http://example.org/Example> rdf:type rdf:Class ;\n<http://www.w3.org/2000/01/rdf-schema#label> 'Example resource'. ";
C(), te();
var Gl = {
	name: "FormDemo",
	setup() {
		return {
			store: b(),
			selection: p()
		};
	},
	components: {
		Term: D,
		InstanceList: E,
		Splitpanes: T,
		Pane: ee
	},
	mounted() {
		this.getFormData();
	},
	watch: {
		resource_iri(e) {
			this.getResource();
		},
		resource_iri(e) {
			this.getFormData();
		}
	},
	data() {
		return {
			dataModel: {},
			dataTurtle: Wl,
			dataSubject: "",
			shapeTurtle: Ul,
			subject: u.namedNode("")
		};
	},
	computed: {
		...k(p, [
			"graph_iri",
			"resource_iri",
			"is_class"
		]),
		res_type() {
			if (this.dataModel.getQuads !== void 0) {
				let e = this.dataModel.getQuads(u.namedNode(this.resource_iri), u.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), null)[0];
				if (e) return e.object;
			}
			return "";
		}
	},
	methods: {
		getFormTurtle(e) {
			let t = this.$refs.myform;
			if (e.detail?.valid) {
				let e = t.serialize();
				console.log("entered form data", e);
			}
		},
		async getResource() {
			this.subject = u.namedNode(this.resource_iri);
			let e = await this.store.getResource(this.resource_iri), t = (await quadStreamToStore(e)).store;
			return await _(t.match(), {
				format: "application/n-triples",
				prefixes: this.prefixes_flat
			});
		},
		async getInstance() {
			var e = await this.store.sendQuery({ query: await g(this.resource_iri) });
			if (e.resultType === "quads") var t = await (await e.execute()).toArray();
			return (await this.serialize(t, {
				format: "application/n-triples",
				prefixes: this.prefixes
			})).replaceAll("\"", "'");
		},
		async getFormData() {
			console.log("Form: Get form data");
			let e = [], t = "", n = "";
			this.is_class ? t = await this.store.sendQuery({ query: await m(this.resource_iri) }) : (t = await this.store.sendQuery({ query: await y(this.resource_iri) }), n = this.resource_iri), t.resultType === "quads" && (e = await (await t.execute()).toArray());
			let r = "", i = "";
			e.length < 1 ? (console.log("Form: Use default shape"), r = Ul) : (console.log("Form: Use found shape"), this.is_class == 0 && (i = (await this.getInstance()).replaceAll("\"", "'")), r = (await this.serialize(e, {
				format: "application/n-triples",
				prefixes: this.prefixes
			})).replaceAll("\"", "'")), console.log("Form: Shape as n-triples"), console.log(r), console.log("Form: Instance as n-triples"), console.log(i), console.log("Form: dataSubject"), console.log(n), this.shapeTurtle = r, this.dataSubject = n, this.dataTurtle = i;
		},
		selectResource(e) {
			this.selection.changeResourceIri(e);
		},
		serialize(e, t = {}) {
			return new Promise((r, i) => {
				let a = new n(t);
				e.forEach((e) => {
					a.addQuad(e);
				}), a.end((e, t) => {
					e !== null && i(e), r(t);
				});
			});
		}
	}
};
function Kl(e, t, n, r, i, a) {
	let o = M("Term"), s = M("shacl-form"), c = M("pane"), l = M("InstanceList"), u = M("splitpanes");
	return re(), A(u, { class: "default-theme" }, {
		default: ie(() => [j(c, { size: "70" }, {
			default: ie(() => [ne("div", null, [ne("dl", null, [
				t[1] ||= ne("dt", null, "IRI", -1),
				ne("dd", null, N(e.resource_iri), 1),
				t[2] ||= ne("dt", null, "Type", -1),
				ne("dd", null, [j(o, {
					term: a.res_type,
					"onUpdate:term": t[0] ||= (e) => a.res_type = e,
					onClick: a.selectResource
				}, null, 8, ["term", "onClick"])])
			])]), ne("div", null, [j(s, {
				onChange: a.getFormTurtle,
				ref: "myform",
				"data-submit-button": "",
				"data-generate-node-shape-reference": "",
				"data-show-node-ids": "",
				"data-values": i.dataTurtle,
				"data-shapes": i.shapeTurtle,
				"data-values-subject": i.dataSubject
			}, null, 8, [
				"onChange",
				"data-values",
				"data-shapes",
				"data-values-subject"
			])])]),
			_: 1
		}), j(c, { size: "30" }, {
			default: ie(() => [j(l, { style: {
				height: "80vh",
				"overflow-y": "scroll"
			} })]),
			_: 1
		})]),
		_: 1
	});
}
var ql = /*#__PURE__*/ w(Gl, [["render", Kl]]);
//#endregion
export { ql as default };
