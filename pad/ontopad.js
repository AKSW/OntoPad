import { E as e, i as t, j as n, n as r, r as i, t as a } from "./rdf-DOyOO-ow.js";
import { t as o } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as s } from "./prefixes-CjyPZiq3.js";
import { n as c, r as l } from "./InstanceList-Dcryss9Q.js";
import { t as u } from "./TermInput-CmTga0pf.js";
import { n as d, r as f, t as p } from "./Term-D9HhZu2s.js";
import { t as m } from "./n3-compare-IJ8DLW5l.js";
import { mapState as h } from "pinia";
import { Fragment as g, computed as _, createBlock as v, createCommentVNode as y, createElementBlock as b, createElementVNode as x, createTextVNode as S, createVNode as C, defineComponent as w, getCurrentInstance as T, h as E, inject as D, nextTick as O, normalizeClass as k, openBlock as A, provide as j, reactive as M, ref as ee, renderList as te, resolveComponent as N, shallowReactive as ne, shallowRef as re, toDisplayString as ie, unref as ae, vModelRadio as oe, vModelText as P, watch as se, watchEffect as ce, withCtx as le, withDirectives as F } from "vue";
var I = "bottom", ue = "right", de = "left", fe = "auto", pe = [
	"top",
	I,
	ue,
	de
], me = "start", he = "clippingParents", ge = "viewport", _e = "popper", ve = "reference", ye = /*#__PURE__*/ pe.reduce(function(e, t) {
	return e.concat([t + "-" + me, t + "-end"]);
}, []), be = /*#__PURE__*/ [].concat(pe, [fe]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + me,
		t + "-end"
	]);
}, []), xe = "beforeRead", Se = "read", Ce = "afterRead", we = "beforeMain", Te = "main", Ee = "afterMain", De = "beforeWrite", Oe = "write", ke = "afterWrite", Ae = [
	xe,
	Se,
	Ce,
	we,
	Te,
	Ee,
	De,
	Oe,
	ke
];
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function je(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function L(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function Me(e) {
	return e instanceof L(e).Element || e instanceof Element;
}
function R(e) {
	return e instanceof L(e).HTMLElement || e instanceof HTMLElement;
}
function Ne(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof L(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function Pe(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!R(i) || !je(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function Fe(e) {
	var t = e.state, n = {
		popper: {
			position: t.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
		Object.keys(t.elements).forEach(function(e) {
			var r = t.elements[e], i = t.attributes[e] || {}, a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
				return e[t] = "", e;
			}, {});
			!R(r) || !je(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var Ie = {
	name: "applyStyles",
	enabled: !0,
	phase: "write",
	fn: Pe,
	effect: Fe,
	requires: ["computeStyles"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function Le(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/math.js
var Re = Math.max, ze = Math.min, Be = Math.round;
//#endregion
//#region node_modules/@popperjs/core/lib/utils/userAgent.js
function Ve() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function He() {
	return !/^((?!chrome|android).)*safari/i.test(Ve());
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Ue(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && R(e) && (i = e.offsetWidth > 0 && Be(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Be(r.height) / e.offsetHeight || 1);
	var o = (Me(e) ? L(e) : window).visualViewport, s = !He() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
	return {
		width: u,
		height: d,
		top: l,
		right: c + u,
		bottom: l + d,
		left: c,
		x: c,
		y: l
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function We(e) {
	var t = Ue(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/contains.js
function Ge(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && Ne(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function Ke(e) {
	return L(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function qe(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(je(e)) >= 0;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function Je(e) {
	return ((Me(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function Ye(e) {
	return je(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ne(e) ? e.host : null) || Je(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function Xe(e) {
	return !R(e) || Ke(e).position === "fixed" ? null : e.offsetParent;
}
function Ze(e) {
	var t = /firefox/i.test(Ve());
	if (/Trident/i.test(Ve()) && R(e) && Ke(e).position === "fixed") return null;
	var n = Ye(e);
	for (Ne(n) && (n = n.host); R(n) && ["html", "body"].indexOf(je(n)) < 0;) {
		var r = Ke(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function Qe(e) {
	for (var t = L(e), n = Xe(e); n && qe(n) && Ke(n).position === "static";) n = Xe(n);
	return n && (je(n) === "html" || je(n) === "body" && Ke(n).position === "static") ? t : n || Ze(e) || t;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function $e(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/within.js
function et(e, t, n) {
	return Re(e, ze(t, n));
}
function tt(e, t, n) {
	var r = et(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function nt() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function rt(e) {
	return Object.assign({}, nt(), e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function it(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/arrow.js
var at = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, rt(typeof e == "number" ? it(e, pe) : e);
};
function ot(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Le(n.placement), c = $e(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = at(i.padding, n), d = We(a), f = c === "y" ? "top" : de, p = c === "y" ? I : ue, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = Qe(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = et(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function st(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ge(t.elements.popper, r) && (t.elements.arrow = r));
}
var ct = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: ot,
	effect: st,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getVariation.js
function lt(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var ut = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function dt(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Be(n * i) / i || 0,
		y: Be(r * i) / i || 0
	};
}
function ft(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = de, b = "top", x = window;
	if (l) {
		var S = Qe(n), C = "clientHeight", w = "clientWidth";
		if (S === L(n) && (S = Je(n), Ke(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = I;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = ue;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && ut), O = u === !0 ? dt({
		x: p,
		y: h
	}, L(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function pt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 || r, a = n.adaptive, o = a === void 0 || a, s = n.roundOffsets, c = s === void 0 || s, l = {
		placement: Le(t.placement),
		variation: lt(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ft(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ft(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var mt = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: pt,
	data: {}
}, ht = { passive: !0 };
function gt(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 || i, o = r.resize, s = o === void 0 || o, c = L(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, ht);
	}), s && c.addEventListener("resize", n.update, ht), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, ht);
		}), s && c.removeEventListener("resize", n.update, ht);
	};
}
var _t = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: gt,
	data: {}
}, vt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function yt(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return vt[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var bt = {
	start: "end",
	end: "start"
};
function xt(e) {
	return e.replace(/start|end/g, function(e) {
		return bt[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function St(e) {
	var t = L(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function Ct(e) {
	return Ue(Je(e)).left + St(e).scrollLeft;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function wt(e, t) {
	var n = L(e), r = Je(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = He();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + Ct(e),
		y: c
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function Tt(e) {
	var t = Je(e), n = St(e), r = e.ownerDocument?.body, i = Re(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Re(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + Ct(e), s = -n.scrollTop;
	return Ke(r || t).direction === "rtl" && (o += Re(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function Et(e) {
	var t = Ke(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Dt(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(je(e)) >= 0 ? e.ownerDocument.body : R(e) && Et(e) ? e : Dt(Ye(e));
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function Ot(e, t) {
	t === void 0 && (t = []);
	var n = Dt(e), r = n === e.ownerDocument?.body, i = L(n), a = r ? [i].concat(i.visualViewport || [], Et(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(Ot(Ye(a)));
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function kt(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function At(e, t) {
	var n = Ue(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function jt(e, t, n) {
	return t === "viewport" ? kt(wt(e, n)) : Me(t) ? At(t, n) : kt(Tt(Je(e)));
}
function Mt(e) {
	var t = Ot(Ye(e)), n = ["absolute", "fixed"].indexOf(Ke(e).position) >= 0 && R(e) ? Qe(e) : e;
	return Me(n) ? t.filter(function(e) {
		return Me(e) && Ge(e, n) && je(e) !== "body";
	}) : [];
}
function Nt(e, t, n, r) {
	var i = t === "clippingParents" ? Mt(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = jt(e, n, r);
		return t.top = Re(i.top, t.top), t.right = ze(i.right, t.right), t.bottom = ze(i.bottom, t.bottom), t.left = Re(i.left, t.left), t;
	}, jt(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/computeOffsets.js
function Pt(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Le(r) : null, a = r ? lt(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case I:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case ue:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case de:
			c = {
				x: t.x - n.width,
				y: s
			};
			break;
		default: c = {
			x: t.x,
			y: t.y
		};
	}
	var l = i ? $e(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case me:
				c[l] = c[l] - (t[u] / 2 - n[u] / 2);
				break;
			case "end":
				c[l] = c[l] + (t[u] / 2 - n[u] / 2);
				break;
			default:
		}
	}
	return c;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/detectOverflow.js
function Ft(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? he : s, l = n.rootBoundary, u = l === void 0 ? ge : l, d = n.elementContext, f = d === void 0 ? _e : d, p = n.altBoundary, m = p !== void 0 && p, h = n.padding, g = h === void 0 ? 0 : h, _ = rt(typeof g == "number" ? it(g, pe) : g), v = f === "popper" ? ve : _e, y = e.rects.popper, b = e.elements[m ? v : f], x = Nt(Me(b) ? b : b.contextElement || Je(e.elements.popper), c, u, o), S = Ue(e.elements.reference), C = Pt({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = kt(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
		top: x.top - T.top + _.top,
		bottom: T.bottom - x.bottom + _.bottom,
		left: x.left - T.left + _.left,
		right: T.right - x.right + _.right
	}, D = e.modifiersData.offset;
	if (f === "popper" && D) {
		var O = D[i];
		Object.keys(E).forEach(function(e) {
			var t = ["right", "bottom"].indexOf(e) >= 0 ? 1 : -1, n = ["top", "bottom"].indexOf(e) >= 0 ? "y" : "x";
			E[e] += O[n] * t;
		});
	}
	return E;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function It(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? be : c, u = lt(r), d = u ? s ? ye : ye.filter(function(e) {
		return lt(e) === u;
	}) : pe, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = Ft(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Le(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/flip.js
function Lt(e) {
	if (Le(e) === "auto") return [];
	var t = yt(e);
	return [
		xt(e),
		t,
		xt(t)
	];
}
function Rt(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o === void 0 || o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 || p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Le(g) === g, v = c || (_ || !m ? [yt(g)] : Lt(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Le(n) === "auto" ? It(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Le(E), O = lt(E) === me, k = ["top", I].indexOf(D) >= 0, A = k ? "width" : "height", j = Ft(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? ue : de : O ? I : "top";
			b[A] > x[A] && (M = yt(M));
			var ee = yt(M), te = [];
			if (a && te.push(j[D] <= 0), s && te.push(j[M] <= 0, j[ee] <= 0), te.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, te);
		}
		if (C) for (var N = m ? 3 : 1, ne = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, re = N; re > 0 && ne(re) !== "break"; re--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var zt = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Rt,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/hide.js
function Bt(e, t, n) {
	return n === void 0 && (n = {
		x: 0,
		y: 0
	}), {
		top: e.top - t.height - n.y,
		right: e.right - t.width + n.x,
		bottom: e.bottom - t.height + n.y,
		left: e.left - t.width - n.x
	};
}
function Vt(e) {
	return [
		"top",
		ue,
		I,
		de
	].some(function(t) {
		return e[t] >= 0;
	});
}
function Ht(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Ft(t, { elementContext: "reference" }), s = Ft(t, { altBoundary: !0 }), c = Bt(o, r), l = Bt(s, i, a), u = Vt(c), d = Vt(l);
	t.modifiersData[n] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: l,
		isReferenceHidden: u,
		hasPopperEscaped: d
	}, t.attributes.popper = Object.assign({}, t.attributes.popper, {
		"data-popper-reference-hidden": u,
		"data-popper-escaped": d
	});
}
var Ut = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: Ht
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/offset.js
function Wt(e, t, n) {
	var r = Le(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Gt(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = be.reduce(function(e, n) {
		return e[n] = Wt(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Kt = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Gt
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function qt(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Pt({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var Jt = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: qt,
	data: {}
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getAltAxis.js
function Yt(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function Xt(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o !== void 0 && o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 || f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = Ft(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Le(t.placement), v = lt(t.placement), y = !v, b = $e(_), x = Yt(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
		mainAxis: T,
		altAxis: T
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, T), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, O = {
		x: 0,
		y: 0
	};
	if (S) {
		if (a) {
			var k = b === "y" ? "top" : de, A = b === "y" ? I : ue, j = b === "y" ? "height" : "width", M = S[b], ee = M + g[k], te = M - g[A], N = p ? -w[j] / 2 : 0, ne = v === "start" ? C[j] : w[j], re = v === "start" ? -w[j] : -C[j], ie = t.elements.arrow, ae = p && ie ? We(ie) : {
				width: 0,
				height: 0
			}, oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : nt(), P = oe[k], se = oe[A], ce = et(0, C[j], ae[j]), le = y ? C[j] / 2 - N - ce - P - E.mainAxis : ne - ce - P - E.mainAxis, F = y ? -C[j] / 2 + N + ce + se + E.mainAxis : re + ce + se + E.mainAxis, fe = t.elements.arrow && Qe(t.elements.arrow), pe = fe ? b === "y" ? fe.clientTop || 0 : fe.clientLeft || 0 : 0, me = D?.[b] ?? 0, he = M + le - me - pe, ge = M + F - me, _e = et(p ? ze(ee, he) : ee, M, p ? Re(te, ge) : te);
			S[b] = _e, O[b] = _e - M;
		}
		if (s) {
			var ve = b === "x" ? "top" : de, ye = b === "x" ? I : ue, be = S[x], xe = x === "y" ? "height" : "width", Se = be + g[ve], Ce = be - g[ye], we = ["top", de].indexOf(_) !== -1, Te = D?.[x] ?? 0, Ee = we ? Se : be - C[xe] - w[xe] - Te + E.altAxis, De = we ? be + C[xe] + w[xe] - Te - E.altAxis : Ce, Oe = p && we ? tt(Ee, be, De) : et(p ? Ee : Se, be, p ? De : Ce);
			S[x] = Oe, O[x] = Oe - be;
		}
		t.modifiersData[r] = O;
	}
}
var Zt = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: Xt,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function Qt(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function $t(e) {
	return e === L(e) || !R(e) ? St(e) : Qt(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function en(e) {
	var t = e.getBoundingClientRect(), n = Be(t.width) / e.offsetWidth || 1, r = Be(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function tn(e, t, n) {
	n === void 0 && (n = !1);
	var r = R(t), i = R(t) && en(t), a = Je(t), o = Ue(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((je(t) !== "body" || Et(a)) && (s = $t(t)), R(t) ? (c = Ue(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = Ct(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/orderModifiers.js
function nn(e) {
	var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
	e.forEach(function(e) {
		t.set(e.name, e);
	});
	function i(e) {
		n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
			if (!n.has(e)) {
				var r = t.get(e);
				r && i(r);
			}
		}), r.push(e);
	}
	return e.forEach(function(e) {
		n.has(e.name) || i(e);
	}), r;
}
function rn(e) {
	var t = nn(e);
	return Ae.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/debounce.js
function an(e) {
	var t;
	return function() {
		return t ||= new Promise(function(n) {
			Promise.resolve().then(function() {
				t = void 0, n(e());
			});
		}), t;
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/mergeByName.js
function on(e) {
	var t = e.reduce(function(e, t) {
		var n = e[t.name];
		return e[t.name] = n ? Object.assign({}, n, t, {
			options: Object.assign({}, n.options, t.options),
			data: Object.assign({}, n.data, t.data)
		}) : t, e;
	}, {});
	return Object.keys(t).map(function(e) {
		return t[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/createPopper.js
var sn = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function cn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function ln(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? sn : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, sn, a),
			modifiersData: {},
			elements: {
				reference: e,
				popper: t
			},
			attributes: {},
			styles: {}
		}, o = [], s = !1, c = {
			state: i,
			setOptions: function(n) {
				var o = typeof n == "function" ? n(i.options) : n;
				u(), i.options = Object.assign({}, a, i.options, o), i.scrollParents = {
					reference: Me(e) ? Ot(e) : e.contextElement ? Ot(e.contextElement) : [],
					popper: Ot(t)
				};
				var s = rn(on([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (cn(t, n)) {
						i.rects = {
							reference: tn(t, Qe(n), i.options.strategy === "fixed"),
							popper: We(n)
						}, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function(e) {
							return i.modifiersData[e.name] = Object.assign({}, e.data);
						});
						for (var r = 0; r < i.orderedModifiers.length; r++) {
							if (i.reset === !0) {
								i.reset = !1, r = -1;
								continue;
							}
							var a = i.orderedModifiers[r], o = a.fn, l = a.options, u = l === void 0 ? {} : l, d = a.name;
							typeof o == "function" && (i = o({
								state: i,
								options: u,
								name: d,
								instance: c
							}) || i);
						}
					}
				}
			},
			update: an(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!cn(e, t)) return c;
		c.setOptions(n).then(function(e) {
			!s && n.onFirstUpdate && n.onFirstUpdate(e);
		});
		function l() {
			i.orderedModifiers.forEach(function(e) {
				var t = e.name, n = e.options, r = n === void 0 ? {} : n, a = e.effect;
				if (typeof a == "function") {
					var s = a({
						state: i,
						name: t,
						instance: c,
						options: r
					});
					o.push(s || function() {});
				}
			});
		}
		function u() {
			o.forEach(function(e) {
				return e();
			}), o = [];
		}
		return c;
	};
}
var un = /*#__PURE__*/ ln(), dn = /*#__PURE__*/ ln({ defaultModifiers: [
	_t,
	Jt,
	mt,
	Ie
] }), fn = /*#__PURE__*/ ln({ defaultModifiers: [
	_t,
	Jt,
	mt,
	Ie,
	Kt,
	zt,
	Zt,
	ct,
	Ut
] }), pn = /* @__PURE__ */ n({
	afterMain: () => Ee,
	afterRead: () => Ce,
	afterWrite: () => ke,
	applyStyles: () => Ie,
	arrow: () => ct,
	auto: () => fe,
	basePlacements: () => pe,
	beforeMain: () => we,
	beforeRead: () => xe,
	beforeWrite: () => De,
	bottom: () => I,
	clippingParents: () => he,
	computeStyles: () => mt,
	createPopper: () => fn,
	createPopperBase: () => un,
	createPopperLite: () => dn,
	detectOverflow: () => Ft,
	end: () => "end",
	eventListeners: () => _t,
	flip: () => zt,
	hide: () => Ut,
	left: () => de,
	main: () => Te,
	modifierPhases: () => Ae,
	offset: () => Kt,
	placements: () => be,
	popper: () => _e,
	popperGenerator: () => ln,
	popperOffsets: () => Jt,
	preventOverflow: () => Zt,
	read: () => Se,
	reference: () => ve,
	right: () => ue,
	start: () => me,
	top: () => "top",
	variationPlacements: () => ye,
	viewport: () => ge,
	write: () => Oe
}), mn = /* @__PURE__ */ new Map(), hn = {
	set(e, t, n) {
		mn.has(e) || mn.set(e, /* @__PURE__ */ new Map());
		let r = mn.get(e);
		if (!r.has(t) && r.size !== 0) {
			console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);
			return;
		}
		r.set(t, n);
	},
	get(e, t) {
		return mn.has(e) && mn.get(e).get(t) || null;
	},
	remove(e, t) {
		if (!mn.has(e)) return;
		let n = mn.get(e);
		n.delete(t), n.size === 0 && mn.delete(e);
	}
}, gn = 1e6, _n = 1e3, vn = "transitionend", yn = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), e), bn = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), xn = (e) => {
	do
		e += Math.floor(Math.random() * gn);
	while (document.getElementById(e));
	return e;
}, Sn = (e) => {
	if (!e) return 0;
	let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
	return !Number.parseFloat(t) && !Number.parseFloat(n) ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * _n);
}, Cn = (e) => {
	e.dispatchEvent(new Event(vn));
}, wn = (e) => !e || typeof e != "object" ? !1 : (e.jquery !== void 0 && (e = e[0]), e.nodeType !== void 0), Tn = (e) => wn(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(yn(e)) : null, En = (e) => {
	if (!wn(e) || e.getClientRects().length === 0) return !1;
	let t = getComputedStyle(e).getPropertyValue("visibility") === "visible", n = e.closest("details:not([open])");
	if (!n) return t;
	if (n !== e) {
		let t = e.closest("summary");
		if (t && t.parentNode !== n || t === null) return !1;
	}
	return t;
}, Dn = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : e.disabled === void 0 ? e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false" : e.disabled, On = (e) => {
	if (!document.documentElement.attachShadow) return null;
	if (typeof e.getRootNode == "function") {
		let t = e.getRootNode();
		return t instanceof ShadowRoot ? t : null;
	}
	return e instanceof ShadowRoot ? e : e.parentNode ? On(e.parentNode) : null;
}, kn = () => {}, An = (e) => {
	e.offsetHeight;
}, jn = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Mn = [], Nn = (e) => {
	document.readyState === "loading" ? (Mn.length || document.addEventListener("DOMContentLoaded", () => {
		for (let e of Mn) e();
	}), Mn.push(e)) : e();
}, z = () => document.documentElement.dir === "rtl", Pn = (e) => {
	Nn(() => {
		let t = jn();
		/* istanbul ignore if */
		if (t) {
			let n = e.NAME, r = t.fn[n];
			t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
		}
	});
}, B = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Fn = (e, t, n = !0) => {
	if (!n) {
		B(e);
		return;
	}
	let r = Sn(t) + 5, i = !1, a = ({ target: n }) => {
		n === t && (i = !0, t.removeEventListener(vn, a), B(e));
	};
	t.addEventListener(vn, a), setTimeout(() => {
		i || Cn(t);
	}, r);
}, In = (e, t, n, r) => {
	let i = e.length, a = e.indexOf(t);
	return a === -1 ? !n && r ? e[i - 1] : e[0] : (a += n ? 1 : -1, r && (a = (a + i) % i), e[Math.max(0, Math.min(a, i - 1))]);
}, Ln = /[^.]*(?=\..*)\.|.*/, Rn = /\..*/, zn = /::\d+$/, Bn = {}, Vn = 1, Hn = {
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, Un = /* @__PURE__ */ new Set(/* @__PURE__ */ "click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll".split("."));
function Wn(e, t) {
	return t && `${t}::${Vn++}` || e.uidEvent || Vn++;
}
function Gn(e) {
	let t = Wn(e);
	return e.uidEvent = t, Bn[t] = Bn[t] || {}, Bn[t];
}
function Kn(e, t) {
	return function n(r) {
		return er(r, { delegateTarget: e }), n.oneOff && V.off(e, r.type, t), t.apply(e, [r]);
	};
}
function qn(e, t, n) {
	return function r(i) {
		let a = e.querySelectorAll(t);
		for (let { target: o } = i; o && o !== this; o = o.parentNode) for (let s of a) if (s === o) return er(i, { delegateTarget: o }), r.oneOff && V.off(e, i.type, t, n), n.apply(o, [i]);
	};
}
function Jn(e, t, n = null) {
	return Object.values(e).find((e) => e.callable === t && e.delegationSelector === n);
}
function Yn(e, t, n) {
	let r = typeof t == "string", i = r ? n : t || n, a = $n(e);
	return Un.has(a) || (a = e), [
		r,
		i,
		a
	];
}
function Xn(e, t, n, r, i) {
	if (typeof t != "string" || !e) return;
	let [a, o, s] = Yn(t, n, r);
	t in Hn && (o = ((e) => function(t) {
		if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
	})(o));
	let c = Gn(e), l = c[s] || (c[s] = {}), u = Jn(l, o, a ? n : null);
	if (u) {
		u.oneOff = u.oneOff && i;
		return;
	}
	let d = Wn(o, t.replace(Ln, "")), f = a ? qn(e, n, o) : Kn(e, o);
	f.delegationSelector = a ? n : null, f.callable = o, f.oneOff = i, f.uidEvent = d, l[d] = f, e.addEventListener(s, f, a);
}
function Zn(e, t, n, r, i) {
	let a = Jn(t[n], r, i);
	a && (e.removeEventListener(n, a, !!i), delete t[n][a.uidEvent]);
}
function Qn(e, t, n, r) {
	let i = t[n] || {};
	for (let [a, o] of Object.entries(i)) a.includes(r) && Zn(e, t, n, o.callable, o.delegationSelector);
}
function $n(e) {
	return e = e.replace(Rn, ""), Hn[e] || e;
}
var V = {
	on(e, t, n, r) {
		Xn(e, t, n, r, !1);
	},
	one(e, t, n, r) {
		Xn(e, t, n, r, !0);
	},
	off(e, t, n, r) {
		if (typeof t != "string" || !e) return;
		let [i, a, o] = Yn(t, n, r), s = o !== t, c = Gn(e), l = c[o] || {}, u = t.startsWith(".");
		if (a !== void 0) {
			if (!Object.keys(l).length) return;
			Zn(e, c, o, a, i ? n : null);
			return;
		}
		if (u) for (let n of Object.keys(c)) Qn(e, c, n, t.slice(1));
		for (let [n, r] of Object.entries(l)) {
			let i = n.replace(zn, "");
			(!s || t.includes(i)) && Zn(e, c, o, r.callable, r.delegationSelector);
		}
	},
	trigger(e, t, n) {
		if (typeof t != "string" || !e) return null;
		let r = jn(), i = t !== $n(t), a = null, o = !0, s = !0, c = !1;
		i && r && (a = r.Event(t, n), r(e).trigger(a), o = !a.isPropagationStopped(), s = !a.isImmediatePropagationStopped(), c = a.isDefaultPrevented());
		let l = er(new Event(t, {
			bubbles: o,
			cancelable: !0
		}), n);
		return c && l.preventDefault(), s && e.dispatchEvent(l), l.defaultPrevented && a && a.preventDefault(), l;
	}
};
function er(e, t = {}) {
	for (let [n, r] of Object.entries(t)) try {
		e[n] = r;
	} catch {
		Object.defineProperty(e, n, {
			configurable: !0,
			get() {
				return r;
			}
		});
	}
	return e;
}
function tr(e) {
	if (e === "true") return !0;
	if (e === "false") return !1;
	if (e === Number(e).toString()) return Number(e);
	if (e === "" || e === "null") return null;
	if (typeof e != "string") return e;
	try {
		return JSON.parse(decodeURIComponent(e));
	} catch {
		return e;
	}
}
function nr(e) {
	return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
var rr = {
	setDataAttribute(e, t, n) {
		e.setAttribute(`data-bs-${nr(t)}`, n);
	},
	removeDataAttribute(e, t) {
		e.removeAttribute(`data-bs-${nr(t)}`);
	},
	getDataAttributes(e) {
		if (!e) return {};
		let t = {}, n = Object.keys(e.dataset).filter((e) => e.startsWith("bs") && !e.startsWith("bsConfig"));
		for (let r of n) {
			let n = r.replace(/^bs/, "");
			n = n.charAt(0).toLowerCase() + n.slice(1), t[n] = tr(e.dataset[r]);
		}
		return t;
	},
	getDataAttribute(e, t) {
		return tr(e.getAttribute(`data-bs-${nr(t)}`));
	}
}, ir = class {
	static get Default() {
		return {};
	}
	static get DefaultType() {
		return {};
	}
	static get NAME() {
		throw Error("You have to implement the static method \"NAME\", for each component!");
	}
	_getConfig(e) {
		return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
	}
	_configAfterMerge(e) {
		return e;
	}
	_mergeConfigObj(e, t) {
		let n = wn(t) ? rr.getDataAttribute(t, "config") : {};
		return {
			...this.constructor.Default,
			...typeof n == "object" ? n : {},
			...wn(t) ? rr.getDataAttributes(t) : {},
			...typeof e == "object" ? e : {}
		};
	}
	_typeCheckConfig(e, t = this.constructor.DefaultType) {
		for (let [n, r] of Object.entries(t)) {
			let t = e[n], i = wn(t) ? "element" : bn(t);
			if (!new RegExp(r).test(i)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`);
		}
	}
}, ar = "5.3.8", or = class extends ir {
	constructor(e, t) {
		super(), e = Tn(e), e && (this._element = e, this._config = this._getConfig(t), hn.set(this._element, this.constructor.DATA_KEY, this));
	}
	dispose() {
		hn.remove(this._element, this.constructor.DATA_KEY), V.off(this._element, this.constructor.EVENT_KEY);
		for (let e of Object.getOwnPropertyNames(this)) this[e] = null;
	}
	_queueCallback(e, t, n = !0) {
		Fn(e, t, n);
	}
	_getConfig(e) {
		return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
	}
	static getInstance(e) {
		return hn.get(Tn(e), this.DATA_KEY);
	}
	static getOrCreateInstance(e, t = {}) {
		return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
	}
	static get VERSION() {
		return ar;
	}
	static get DATA_KEY() {
		return `bs.${this.NAME}`;
	}
	static get EVENT_KEY() {
		return `.${this.DATA_KEY}`;
	}
	static eventName(e) {
		return `${e}${this.EVENT_KEY}`;
	}
}, sr = (e) => {
	let t = e.getAttribute("data-bs-target");
	if (!t || t === "#") {
		let n = e.getAttribute("href");
		if (!n || !n.includes("#") && !n.startsWith(".")) return null;
		n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
	}
	return t ? t.split(",").map((e) => yn(e)).join(",") : null;
}, H = {
	find(e, t = document.documentElement) {
		return [].concat(...Element.prototype.querySelectorAll.call(t, e));
	},
	findOne(e, t = document.documentElement) {
		return Element.prototype.querySelector.call(t, e);
	},
	children(e, t) {
		return [].concat(...e.children).filter((e) => e.matches(t));
	},
	parents(e, t) {
		let n = [], r = e.parentNode.closest(t);
		for (; r;) n.push(r), r = r.parentNode.closest(t);
		return n;
	},
	prev(e, t) {
		let n = e.previousElementSibling;
		for (; n;) {
			if (n.matches(t)) return [n];
			n = n.previousElementSibling;
		}
		return [];
	},
	next(e, t) {
		let n = e.nextElementSibling;
		for (; n;) {
			if (n.matches(t)) return [n];
			n = n.nextElementSibling;
		}
		return [];
	},
	focusableChildren(e) {
		let t = [
			"a",
			"button",
			"input",
			"textarea",
			"select",
			"details",
			"[tabindex]",
			"[contenteditable=\"true\"]"
		].map((e) => `${e}:not([tabindex^="-"])`).join(",");
		return this.find(t, e).filter((e) => !Dn(e) && En(e));
	},
	getSelectorFromElement(e) {
		let t = sr(e);
		return t && H.findOne(t) ? t : null;
	},
	getElementFromSelector(e) {
		let t = sr(e);
		return t ? H.findOne(t) : null;
	},
	getMultipleElementsFromSelector(e) {
		let t = sr(e);
		return t ? H.find(t) : [];
	}
}, cr = (e, t = "hide") => {
	let n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
	V.on(document, n, `[data-bs-dismiss="${r}"]`, function(n) {
		if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Dn(this)) return;
		let i = H.getElementFromSelector(this) || this.closest(`.${r}`);
		e.getOrCreateInstance(i)[t]();
	});
}, lr = "alert", ur = ".bs.alert", dr = `close${ur}`, fr = `closed${ur}`, pr = "fade", mr = "show", hr = class e extends or {
	static get NAME() {
		return lr;
	}
	close() {
		if (V.trigger(this._element, dr).defaultPrevented) return;
		this._element.classList.remove(mr);
		let e = this._element.classList.contains(pr);
		this._queueCallback(() => this._destroyElement(), this._element, e);
	}
	_destroyElement() {
		this._element.remove(), V.trigger(this._element, fr), this.dispose();
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this);
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t](this);
			}
		});
	}
};
cr(hr, "close"), Pn(hr);
var gr = "button", _r = ".bs.button", vr = ".data-api", yr = "active", br = "[data-bs-toggle=\"button\"]", xr = `click${_r}${vr}`, Sr = class e extends or {
	static get NAME() {
		return gr;
	}
	toggle() {
		this._element.setAttribute("aria-pressed", this._element.classList.toggle(yr));
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this);
			t === "toggle" && n[t]();
		});
	}
};
V.on(document, xr, br, (e) => {
	e.preventDefault();
	let t = e.target.closest(br);
	Sr.getOrCreateInstance(t).toggle();
}), Pn(Sr);
var Cr = "swipe", wr = ".bs.swipe", Tr = `touchstart${wr}`, Er = `touchmove${wr}`, Dr = `touchend${wr}`, Or = `pointerdown${wr}`, kr = `pointerup${wr}`, Ar = "touch", jr = "pen", Mr = "pointer-event", Nr = 40, Pr = {
	endCallback: null,
	leftCallback: null,
	rightCallback: null
}, Fr = {
	endCallback: "(function|null)",
	leftCallback: "(function|null)",
	rightCallback: "(function|null)"
}, Ir = class e extends ir {
	constructor(t, n) {
		super(), this._element = t, !(!t || !e.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
	}
	static get Default() {
		return Pr;
	}
	static get DefaultType() {
		return Fr;
	}
	static get NAME() {
		return Cr;
	}
	dispose() {
		V.off(this._element, wr);
	}
	_start(e) {
		if (!this._supportPointerEvents) {
			this._deltaX = e.touches[0].clientX;
			return;
		}
		this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
	}
	_end(e) {
		this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), B(this._config.endCallback);
	}
	_move(e) {
		this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
	}
	_handleSwipe() {
		let e = Math.abs(this._deltaX);
		if (e <= Nr) return;
		let t = e / this._deltaX;
		this._deltaX = 0, t && B(t > 0 ? this._config.rightCallback : this._config.leftCallback);
	}
	_initEvents() {
		this._supportPointerEvents ? (V.on(this._element, Or, (e) => this._start(e)), V.on(this._element, kr, (e) => this._end(e)), this._element.classList.add(Mr)) : (V.on(this._element, Tr, (e) => this._start(e)), V.on(this._element, Er, (e) => this._move(e)), V.on(this._element, Dr, (e) => this._end(e)));
	}
	_eventIsPointerPenTouch(e) {
		return this._supportPointerEvents && (e.pointerType === jr || e.pointerType === Ar);
	}
	static isSupported() {
		return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
	}
}, Lr = "carousel", Rr = ".bs.carousel", zr = ".data-api", Br = "ArrowLeft", Vr = "ArrowRight", Hr = 500, Ur = "next", Wr = "prev", Gr = "left", Kr = "right", qr = `slide${Rr}`, Jr = `slid${Rr}`, Yr = `keydown${Rr}`, Xr = `mouseenter${Rr}`, Zr = `mouseleave${Rr}`, Qr = `dragstart${Rr}`, $r = `load${Rr}${zr}`, ei = `click${Rr}${zr}`, ti = "carousel", ni = "active", ri = "slide", ii = "carousel-item-end", ai = "carousel-item-start", oi = "carousel-item-next", si = "carousel-item-prev", ci = ".active", li = ".carousel-item", ui = ".active.carousel-item", di = ".carousel-item img", fi = ".carousel-indicators", pi = "[data-bs-slide], [data-bs-slide-to]", mi = "[data-bs-ride=\"carousel\"]", hi = {
	[Br]: Kr,
	[Vr]: Gr
}, gi = {
	interval: 5e3,
	keyboard: !0,
	pause: "hover",
	ride: !1,
	touch: !0,
	wrap: !0
}, _i = {
	interval: "(number|boolean)",
	keyboard: "boolean",
	pause: "(string|boolean)",
	ride: "(boolean|string)",
	touch: "boolean",
	wrap: "boolean"
}, vi = class e extends or {
	constructor(e, t) {
		super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = H.findOne(fi, this._element), this._addEventListeners(), this._config.ride === ti && this.cycle();
	}
	static get Default() {
		return gi;
	}
	static get DefaultType() {
		return _i;
	}
	static get NAME() {
		return Lr;
	}
	next() {
		this._slide(Ur);
	}
	nextWhenVisible() {
		!document.hidden && En(this._element) && this.next();
	}
	prev() {
		this._slide(Wr);
	}
	pause() {
		this._isSliding && Cn(this._element), this._clearInterval();
	}
	cycle() {
		this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
	}
	_maybeEnableCycle() {
		if (this._config.ride) {
			if (this._isSliding) {
				V.one(this._element, Jr, () => this.cycle());
				return;
			}
			this.cycle();
		}
	}
	to(e) {
		let t = this._getItems();
		if (e > t.length - 1 || e < 0) return;
		if (this._isSliding) {
			V.one(this._element, Jr, () => this.to(e));
			return;
		}
		let n = this._getItemIndex(this._getActive());
		if (n === e) return;
		let r = e > n ? Ur : Wr;
		this._slide(r, t[e]);
	}
	dispose() {
		this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
	}
	_configAfterMerge(e) {
		return e.defaultInterval = e.interval, e;
	}
	_addEventListeners() {
		this._config.keyboard && V.on(this._element, Yr, (e) => this._keydown(e)), this._config.pause === "hover" && (V.on(this._element, Xr, () => this.pause()), V.on(this._element, Zr, () => this._maybeEnableCycle())), this._config.touch && Ir.isSupported() && this._addTouchEventListeners();
	}
	_addTouchEventListeners() {
		for (let e of H.find(di, this._element)) V.on(e, Qr, (e) => e.preventDefault());
		let e = {
			leftCallback: () => this._slide(this._directionToOrder(Gr)),
			rightCallback: () => this._slide(this._directionToOrder(Kr)),
			endCallback: () => {
				this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Hr + this._config.interval));
			}
		};
		this._swipeHelper = new Ir(this._element, e);
	}
	_keydown(e) {
		if (/input|textarea/i.test(e.target.tagName)) return;
		let t = hi[e.key];
		t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
	}
	_getItemIndex(e) {
		return this._getItems().indexOf(e);
	}
	_setActiveIndicatorElement(e) {
		if (!this._indicatorsElement) return;
		let t = H.findOne(ci, this._indicatorsElement);
		t.classList.remove(ni), t.removeAttribute("aria-current");
		let n = H.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
		n && (n.classList.add(ni), n.setAttribute("aria-current", "true"));
	}
	_updateInterval() {
		let e = this._activeElement || this._getActive();
		if (!e) return;
		let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
		this._config.interval = t || this._config.defaultInterval;
	}
	_slide(e, t = null) {
		if (this._isSliding) return;
		let n = this._getActive(), r = e === Ur, i = t || In(this._getItems(), n, r, this._config.wrap);
		if (i === n) return;
		let a = this._getItemIndex(i), o = (t) => V.trigger(this._element, t, {
			relatedTarget: i,
			direction: this._orderToDirection(e),
			from: this._getItemIndex(n),
			to: a
		});
		if (o(qr).defaultPrevented || !n || !i) return;
		let s = !!this._interval;
		this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(a), this._activeElement = i;
		let c = r ? ai : ii, l = r ? oi : si;
		i.classList.add(l), An(i), n.classList.add(c), i.classList.add(c), this._queueCallback(() => {
			i.classList.remove(c, l), i.classList.add(ni), n.classList.remove(ni, l, c), this._isSliding = !1, o(Jr);
		}, n, this._isAnimated()), s && this.cycle();
	}
	_isAnimated() {
		return this._element.classList.contains(ri);
	}
	_getActive() {
		return H.findOne(ui, this._element);
	}
	_getItems() {
		return H.find(li, this._element);
	}
	_clearInterval() {
		this._interval &&= (clearInterval(this._interval), null);
	}
	_directionToOrder(e) {
		return z() ? e === Gr ? Wr : Ur : e === Gr ? Ur : Wr;
	}
	_orderToDirection(e) {
		return z() ? e === Wr ? Gr : Kr : e === Wr ? Kr : Gr;
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "number") {
				n.to(t);
				return;
			}
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
};
V.on(document, ei, pi, function(e) {
	let t = H.getElementFromSelector(this);
	if (!t || !t.classList.contains(ti)) return;
	e.preventDefault();
	let n = vi.getOrCreateInstance(t), r = this.getAttribute("data-bs-slide-to");
	if (r) {
		n.to(r), n._maybeEnableCycle();
		return;
	}
	if (rr.getDataAttribute(this, "slide") === "next") {
		n.next(), n._maybeEnableCycle();
		return;
	}
	n.prev(), n._maybeEnableCycle();
}), V.on(window, $r, () => {
	let e = H.find(mi);
	for (let t of e) vi.getOrCreateInstance(t);
}), Pn(vi);
var yi = "collapse", bi = ".bs.collapse", xi = ".data-api", Si = `show${bi}`, Ci = `shown${bi}`, wi = `hide${bi}`, Ti = `hidden${bi}`, Ei = `click${bi}${xi}`, Di = "show", Oi = "collapse", ki = "collapsing", Ai = "collapsed", ji = `:scope .${Oi} .${Oi}`, Mi = "collapse-horizontal", Ni = "width", Pi = "height", Fi = ".collapse.show, .collapse.collapsing", Ii = "[data-bs-toggle=\"collapse\"]", Li = {
	parent: null,
	toggle: !0
}, Ri = {
	parent: "(null|element)",
	toggle: "boolean"
}, zi = class e extends or {
	constructor(e, t) {
		super(e, t), this._isTransitioning = !1, this._triggerArray = [];
		let n = H.find(Ii);
		for (let e of n) {
			let t = H.getSelectorFromElement(e), n = H.find(t).filter((e) => e === this._element);
			t !== null && n.length && this._triggerArray.push(e);
		}
		this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
	}
	static get Default() {
		return Li;
	}
	static get DefaultType() {
		return Ri;
	}
	static get NAME() {
		return yi;
	}
	toggle() {
		this._isShown() ? this.hide() : this.show();
	}
	show() {
		if (this._isTransitioning || this._isShown()) return;
		let t = [];
		if (this._config.parent && (t = this._getFirstLevelChildren(Fi).filter((e) => e !== this._element).map((t) => e.getOrCreateInstance(t, { toggle: !1 }))), t.length && t[0]._isTransitioning || V.trigger(this._element, Si).defaultPrevented) return;
		for (let e of t) e.hide();
		let n = this._getDimension();
		this._element.classList.remove(Oi), this._element.classList.add(ki), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
		let r = () => {
			this._isTransitioning = !1, this._element.classList.remove(ki), this._element.classList.add(Oi, Di), this._element.style[n] = "", V.trigger(this._element, Ci);
		}, i = `scroll${n[0].toUpperCase() + n.slice(1)}`;
		this._queueCallback(r, this._element, !0), this._element.style[n] = `${this._element[i]}px`;
	}
	hide() {
		if (this._isTransitioning || !this._isShown() || V.trigger(this._element, wi).defaultPrevented) return;
		let e = this._getDimension();
		this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, An(this._element), this._element.classList.add(ki), this._element.classList.remove(Oi, Di);
		for (let e of this._triggerArray) {
			let t = H.getElementFromSelector(e);
			t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
		}
		this._isTransitioning = !0;
		let t = () => {
			this._isTransitioning = !1, this._element.classList.remove(ki), this._element.classList.add(Oi), V.trigger(this._element, Ti);
		};
		this._element.style[e] = "", this._queueCallback(t, this._element, !0);
	}
	_isShown(e = this._element) {
		return e.classList.contains(Di);
	}
	_configAfterMerge(e) {
		return e.toggle = !!e.toggle, e.parent = Tn(e.parent), e;
	}
	_getDimension() {
		return this._element.classList.contains(Mi) ? Ni : Pi;
	}
	_initializeChildren() {
		if (!this._config.parent) return;
		let e = this._getFirstLevelChildren(Ii);
		for (let t of e) {
			let e = H.getElementFromSelector(t);
			e && this._addAriaAndCollapsedClass([t], this._isShown(e));
		}
	}
	_getFirstLevelChildren(e) {
		let t = H.find(ji, this._config.parent);
		return H.find(e, this._config.parent).filter((e) => !t.includes(e));
	}
	_addAriaAndCollapsedClass(e, t) {
		if (e.length) for (let n of e) n.classList.toggle(Ai, !t), n.setAttribute("aria-expanded", t);
	}
	static jQueryInterface(t) {
		let n = {};
		return typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1), this.each(function() {
			let r = e.getOrCreateInstance(this, n);
			if (typeof t == "string") {
				if (r[t] === void 0) throw TypeError(`No method named "${t}"`);
				r[t]();
			}
		});
	}
};
V.on(document, Ei, Ii, function(e) {
	(e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
	for (let e of H.getMultipleElementsFromSelector(this)) zi.getOrCreateInstance(e, { toggle: !1 }).toggle();
}), Pn(zi);
var Bi = "dropdown", Vi = ".bs.dropdown", Hi = ".data-api", Ui = "Escape", Wi = "Tab", Gi = "ArrowUp", Ki = "ArrowDown", qi = 2, Ji = `hide${Vi}`, Yi = `hidden${Vi}`, Xi = `show${Vi}`, Zi = `shown${Vi}`, Qi = `click${Vi}${Hi}`, $i = `keydown${Vi}${Hi}`, ea = `keyup${Vi}${Hi}`, ta = "show", na = "dropup", ra = "dropend", ia = "dropstart", aa = "dropup-center", oa = "dropdown-center", sa = "[data-bs-toggle=\"dropdown\"]:not(.disabled):not(:disabled)", ca = `${sa}.${ta}`, la = ".dropdown-menu", ua = ".navbar", da = ".navbar-nav", fa = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", pa = z() ? "top-end" : "top-start", ma = z() ? "top-start" : "top-end", ha = z() ? "bottom-end" : "bottom-start", ga = z() ? "bottom-start" : "bottom-end", _a = z() ? "left-start" : "right-start", va = z() ? "right-start" : "left-start", ya = "top", ba = "bottom", xa = {
	autoClose: !0,
	boundary: "clippingParents",
	display: "dynamic",
	offset: [0, 2],
	popperConfig: null,
	reference: "toggle"
}, Sa = {
	autoClose: "(boolean|string)",
	boundary: "(string|element)",
	display: "string",
	offset: "(array|string|function)",
	popperConfig: "(null|object|function)",
	reference: "(string|element|object)"
}, Ca = class e extends or {
	constructor(e, t) {
		super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = H.next(this._element, la)[0] || H.prev(this._element, la)[0] || H.findOne(la, this._parent), this._inNavbar = this._detectNavbar();
	}
	static get Default() {
		return xa;
	}
	static get DefaultType() {
		return Sa;
	}
	static get NAME() {
		return Bi;
	}
	toggle() {
		return this._isShown() ? this.hide() : this.show();
	}
	show() {
		if (Dn(this._element) || this._isShown()) return;
		let e = { relatedTarget: this._element };
		if (!V.trigger(this._element, Xi, e).defaultPrevented) {
			if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(da)) for (let e of [].concat(...document.body.children)) V.on(e, "mouseover", kn);
			this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ta), this._element.classList.add(ta), V.trigger(this._element, Zi, e);
		}
	}
	hide() {
		if (Dn(this._element) || !this._isShown()) return;
		let e = { relatedTarget: this._element };
		this._completeHide(e);
	}
	dispose() {
		this._popper && this._popper.destroy(), super.dispose();
	}
	update() {
		this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
	}
	_completeHide(e) {
		if (!V.trigger(this._element, Ji, e).defaultPrevented) {
			if ("ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) V.off(e, "mouseover", kn);
			this._popper && this._popper.destroy(), this._menu.classList.remove(ta), this._element.classList.remove(ta), this._element.setAttribute("aria-expanded", "false"), rr.removeDataAttribute(this._menu, "popper"), V.trigger(this._element, Yi, e);
		}
	}
	_getConfig(e) {
		if (e = super._getConfig(e), typeof e.reference == "object" && !wn(e.reference) && typeof e.reference.getBoundingClientRect != "function") throw TypeError(`${Bi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
		return e;
	}
	_createPopper() {
		if (pn === void 0) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
		let e = this._element;
		this._config.reference === "parent" ? e = this._parent : wn(this._config.reference) ? e = Tn(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
		let t = this._getPopperConfig();
		this._popper = fn(e, this._menu, t);
	}
	_isShown() {
		return this._menu.classList.contains(ta);
	}
	_getPlacement() {
		let e = this._parent;
		if (e.classList.contains(ra)) return _a;
		if (e.classList.contains(ia)) return va;
		if (e.classList.contains(aa)) return ya;
		if (e.classList.contains(oa)) return ba;
		let t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
		return e.classList.contains(na) ? t ? ma : pa : t ? ga : ha;
	}
	_detectNavbar() {
		return this._element.closest(ua) !== null;
	}
	_getOffset() {
		let { offset: e } = this._config;
		return typeof e == "string" ? e.split(",").map((e) => Number.parseInt(e, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
	}
	_getPopperConfig() {
		let e = {
			placement: this._getPlacement(),
			modifiers: [{
				name: "preventOverflow",
				options: { boundary: this._config.boundary }
			}, {
				name: "offset",
				options: { offset: this._getOffset() }
			}]
		};
		return (this._inNavbar || this._config.display === "static") && (rr.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
			name: "applyStyles",
			enabled: !1
		}]), {
			...e,
			...B(this._config.popperConfig, [void 0, e])
		};
	}
	_selectMenuItem({ key: e, target: t }) {
		let n = H.find(fa, this._menu).filter((e) => En(e));
		n.length && In(n, t, e === Ki, !n.includes(t)).focus();
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0) throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
	static clearMenus(t) {
		if (t.button === qi || t.type === "keyup" && t.key !== Wi) return;
		let n = H.find(ca);
		for (let r of n) {
			let n = e.getInstance(r);
			if (!n || n._config.autoClose === !1) continue;
			let i = t.composedPath(), a = i.includes(n._menu);
			if (i.includes(n._element) || n._config.autoClose === "inside" && !a || n._config.autoClose === "outside" && a || n._menu.contains(t.target) && (t.type === "keyup" && t.key === Wi || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
			let o = { relatedTarget: n._element };
			t.type === "click" && (o.clickEvent = t), n._completeHide(o);
		}
	}
	static dataApiKeydownHandler(t) {
		let n = /input|textarea/i.test(t.target.tagName), r = t.key === Ui, i = [Gi, Ki].includes(t.key);
		if (!i && !r || n && !r) return;
		t.preventDefault();
		let a = this.matches(sa) ? this : H.prev(this, sa)[0] || H.next(this, sa)[0] || H.findOne(sa, t.delegateTarget.parentNode), o = e.getOrCreateInstance(a);
		if (i) {
			t.stopPropagation(), o.show(), o._selectMenuItem(t);
			return;
		}
		o._isShown() && (t.stopPropagation(), o.hide(), a.focus());
	}
};
V.on(document, $i, sa, Ca.dataApiKeydownHandler), V.on(document, $i, la, Ca.dataApiKeydownHandler), V.on(document, Qi, Ca.clearMenus), V.on(document, ea, Ca.clearMenus), V.on(document, Qi, sa, function(e) {
	e.preventDefault(), Ca.getOrCreateInstance(this).toggle();
}), Pn(Ca);
var wa = "backdrop", Ta = "fade", Ea = "show", Da = `mousedown.bs.${wa}`, Oa = {
	className: "modal-backdrop",
	clickCallback: null,
	isAnimated: !1,
	isVisible: !0,
	rootElement: "body"
}, ka = {
	className: "string",
	clickCallback: "(function|null)",
	isAnimated: "boolean",
	isVisible: "boolean",
	rootElement: "(element|string)"
}, Aa = class extends ir {
	constructor(e) {
		super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
	}
	static get Default() {
		return Oa;
	}
	static get DefaultType() {
		return ka;
	}
	static get NAME() {
		return wa;
	}
	show(e) {
		if (!this._config.isVisible) {
			B(e);
			return;
		}
		this._append();
		let t = this._getElement();
		this._config.isAnimated && An(t), t.classList.add(Ea), this._emulateAnimation(() => {
			B(e);
		});
	}
	hide(e) {
		if (!this._config.isVisible) {
			B(e);
			return;
		}
		this._getElement().classList.remove(Ea), this._emulateAnimation(() => {
			this.dispose(), B(e);
		});
	}
	dispose() {
		this._isAppended &&= (V.off(this._element, Da), this._element.remove(), !1);
	}
	_getElement() {
		if (!this._element) {
			let e = document.createElement("div");
			e.className = this._config.className, this._config.isAnimated && e.classList.add(Ta), this._element = e;
		}
		return this._element;
	}
	_configAfterMerge(e) {
		return e.rootElement = Tn(e.rootElement), e;
	}
	_append() {
		if (this._isAppended) return;
		let e = this._getElement();
		this._config.rootElement.append(e), V.on(e, Da, () => {
			B(this._config.clickCallback);
		}), this._isAppended = !0;
	}
	_emulateAnimation(e) {
		Fn(e, this._getElement(), this._config.isAnimated);
	}
}, ja = "focustrap", Ma = ".bs.focustrap", Na = `focusin${Ma}`, Pa = `keydown.tab${Ma}`, Fa = "Tab", Ia = "forward", La = "backward", Ra = {
	autofocus: !0,
	trapElement: null
}, za = {
	autofocus: "boolean",
	trapElement: "element"
}, Ba = class extends ir {
	constructor(e) {
		super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
	}
	static get Default() {
		return Ra;
	}
	static get DefaultType() {
		return za;
	}
	static get NAME() {
		return ja;
	}
	activate() {
		this._isActive ||= (this._config.autofocus && this._config.trapElement.focus(), V.off(document, Ma), V.on(document, Na, (e) => this._handleFocusin(e)), V.on(document, Pa, (e) => this._handleKeydown(e)), !0);
	}
	deactivate() {
		this._isActive && (this._isActive = !1, V.off(document, Ma));
	}
	_handleFocusin(e) {
		let { trapElement: t } = this._config;
		if (e.target === document || e.target === t || t.contains(e.target)) return;
		let n = H.focusableChildren(t);
		n.length === 0 ? t.focus() : this._lastTabNavDirection === La ? n[n.length - 1].focus() : n[0].focus();
	}
	_handleKeydown(e) {
		e.key === Fa && (this._lastTabNavDirection = e.shiftKey ? La : Ia);
	}
}, Va = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ha = ".sticky-top", Ua = "padding-right", Wa = "margin-right", Ga = class {
	constructor() {
		this._element = document.body;
	}
	getWidth() {
		let e = document.documentElement.clientWidth;
		return Math.abs(window.innerWidth - e);
	}
	hide() {
		let e = this.getWidth();
		this._disableOverFlow(), this._setElementAttributes(this._element, Ua, (t) => t + e), this._setElementAttributes(Va, Ua, (t) => t + e), this._setElementAttributes(Ha, Wa, (t) => t - e);
	}
	reset() {
		this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ua), this._resetElementAttributes(Va, Ua), this._resetElementAttributes(Ha, Wa);
	}
	isOverflowing() {
		return this.getWidth() > 0;
	}
	_disableOverFlow() {
		this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
	}
	_setElementAttributes(e, t, n) {
		let r = this.getWidth();
		this._applyManipulationCallback(e, (e) => {
			if (e !== this._element && window.innerWidth > e.clientWidth + r) return;
			this._saveInitialAttribute(e, t);
			let i = window.getComputedStyle(e).getPropertyValue(t);
			e.style.setProperty(t, `${n(Number.parseFloat(i))}px`);
		});
	}
	_saveInitialAttribute(e, t) {
		let n = e.style.getPropertyValue(t);
		n && rr.setDataAttribute(e, t, n);
	}
	_resetElementAttributes(e, t) {
		this._applyManipulationCallback(e, (e) => {
			let n = rr.getDataAttribute(e, t);
			if (n === null) {
				e.style.removeProperty(t);
				return;
			}
			rr.removeDataAttribute(e, t), e.style.setProperty(t, n);
		});
	}
	_applyManipulationCallback(e, t) {
		if (wn(e)) {
			t(e);
			return;
		}
		for (let n of H.find(e, this._element)) t(n);
	}
}, Ka = "modal", qa = ".bs.modal", Ja = ".data-api", Ya = "Escape", Xa = `hide${qa}`, Za = `hidePrevented${qa}`, Qa = `hidden${qa}`, $a = `show${qa}`, eo = `shown${qa}`, to = `resize${qa}`, no = `click.dismiss${qa}`, ro = `mousedown.dismiss${qa}`, io = `keydown.dismiss${qa}`, ao = `click${qa}${Ja}`, oo = "modal-open", so = "fade", co = "show", lo = "modal-static", uo = ".modal.show", fo = ".modal-dialog", po = ".modal-body", mo = "[data-bs-toggle=\"modal\"]", ho = {
	backdrop: !0,
	focus: !0,
	keyboard: !0
}, go = {
	backdrop: "(boolean|string)",
	focus: "boolean",
	keyboard: "boolean"
}, _o = class e extends or {
	constructor(e, t) {
		super(e, t), this._dialog = H.findOne(fo, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ga(), this._addEventListeners();
	}
	static get Default() {
		return ho;
	}
	static get DefaultType() {
		return go;
	}
	static get NAME() {
		return Ka;
	}
	toggle(e) {
		return this._isShown ? this.hide() : this.show(e);
	}
	show(e) {
		this._isShown || this._isTransitioning || V.trigger(this._element, $a, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(oo), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
	}
	hide() {
		!this._isShown || this._isTransitioning || V.trigger(this._element, Xa).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(co), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
	}
	dispose() {
		V.off(window, qa), V.off(this._dialog, qa), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
	}
	handleUpdate() {
		this._adjustDialog();
	}
	_initializeBackDrop() {
		return new Aa({
			isVisible: !!this._config.backdrop,
			isAnimated: this._isAnimated()
		});
	}
	_initializeFocusTrap() {
		return new Ba({ trapElement: this._element });
	}
	_showElement(e) {
		document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
		let t = H.findOne(po, this._dialog);
		t && (t.scrollTop = 0), An(this._element), this._element.classList.add(co), this._queueCallback(() => {
			this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, V.trigger(this._element, eo, { relatedTarget: e });
		}, this._dialog, this._isAnimated());
	}
	_addEventListeners() {
		V.on(this._element, io, (e) => {
			if (e.key === Ya) {
				if (this._config.keyboard) {
					this.hide();
					return;
				}
				this._triggerBackdropTransition();
			}
		}), V.on(window, to, () => {
			this._isShown && !this._isTransitioning && this._adjustDialog();
		}), V.on(this._element, ro, (e) => {
			V.one(this._element, no, (t) => {
				if (!(this._element !== e.target || this._element !== t.target)) {
					if (this._config.backdrop === "static") {
						this._triggerBackdropTransition();
						return;
					}
					this._config.backdrop && this.hide();
				}
			});
		});
	}
	_hideModal() {
		this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
			document.body.classList.remove(oo), this._resetAdjustments(), this._scrollBar.reset(), V.trigger(this._element, Qa);
		});
	}
	_isAnimated() {
		return this._element.classList.contains(so);
	}
	_triggerBackdropTransition() {
		if (V.trigger(this._element, Za).defaultPrevented) return;
		let e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._element.style.overflowY;
		t === "hidden" || this._element.classList.contains(lo) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(lo), this._queueCallback(() => {
			this._element.classList.remove(lo), this._queueCallback(() => {
				this._element.style.overflowY = t;
			}, this._dialog);
		}, this._dialog), this._element.focus());
	}
	_adjustDialog() {
		let e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), n = t > 0;
		if (n && !e) {
			let e = z() ? "paddingLeft" : "paddingRight";
			this._element.style[e] = `${t}px`;
		}
		if (!n && e) {
			let e = z() ? "paddingRight" : "paddingLeft";
			this._element.style[e] = `${t}px`;
		}
	}
	_resetAdjustments() {
		this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
	}
	static jQueryInterface(t, n) {
		return this.each(function() {
			let r = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (r[t] === void 0) throw TypeError(`No method named "${t}"`);
				r[t](n);
			}
		});
	}
};
V.on(document, ao, mo, function(e) {
	let t = H.getElementFromSelector(this);
	["A", "AREA"].includes(this.tagName) && e.preventDefault(), V.one(t, $a, (e) => {
		e.defaultPrevented || V.one(t, Qa, () => {
			En(this) && this.focus();
		});
	});
	let n = H.findOne(uo);
	n && _o.getInstance(n).hide(), _o.getOrCreateInstance(t).toggle(this);
}), cr(_o), Pn(_o);
var vo = "offcanvas", yo = ".bs.offcanvas", bo = ".data-api", xo = `load${yo}${bo}`, So = "Escape", Co = "show", wo = "showing", To = "hiding", Eo = "offcanvas-backdrop", Do = ".offcanvas.show", Oo = `show${yo}`, ko = `shown${yo}`, Ao = `hide${yo}`, jo = `hidePrevented${yo}`, Mo = `hidden${yo}`, No = `resize${yo}`, Po = `click${yo}${bo}`, Fo = `keydown.dismiss${yo}`, Io = "[data-bs-toggle=\"offcanvas\"]", Lo = {
	backdrop: !0,
	keyboard: !0,
	scroll: !1
}, Ro = {
	backdrop: "(boolean|string)",
	keyboard: "boolean",
	scroll: "boolean"
}, zo = class e extends or {
	constructor(e, t) {
		super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
	}
	static get Default() {
		return Lo;
	}
	static get DefaultType() {
		return Ro;
	}
	static get NAME() {
		return vo;
	}
	toggle(e) {
		return this._isShown ? this.hide() : this.show(e);
	}
	show(e) {
		this._isShown || V.trigger(this._element, Oo, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ga().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(wo), this._queueCallback(() => {
			(!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Co), this._element.classList.remove(wo), V.trigger(this._element, ko, { relatedTarget: e });
		}, this._element, !0));
	}
	hide() {
		!this._isShown || V.trigger(this._element, Ao).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(To), this._backdrop.hide(), this._queueCallback(() => {
			this._element.classList.remove(Co, To), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ga().reset(), V.trigger(this._element, Mo);
		}, this._element, !0));
	}
	dispose() {
		this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
	}
	_initializeBackDrop() {
		let e = () => {
			if (this._config.backdrop === "static") {
				V.trigger(this._element, jo);
				return;
			}
			this.hide();
		}, t = !!this._config.backdrop;
		return new Aa({
			className: Eo,
			isVisible: t,
			isAnimated: !0,
			rootElement: this._element.parentNode,
			clickCallback: t ? e : null
		});
	}
	_initializeFocusTrap() {
		return new Ba({ trapElement: this._element });
	}
	_addEventListeners() {
		V.on(this._element, Fo, (e) => {
			if (e.key === So) {
				if (this._config.keyboard) {
					this.hide();
					return;
				}
				V.trigger(this._element, jo);
			}
		});
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t](this);
			}
		});
	}
};
V.on(document, Po, Io, function(e) {
	let t = H.getElementFromSelector(this);
	if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Dn(this)) return;
	V.one(t, Mo, () => {
		En(this) && this.focus();
	});
	let n = H.findOne(Do);
	n && n !== t && zo.getInstance(n).hide(), zo.getOrCreateInstance(t).toggle(this);
}), V.on(window, xo, () => {
	for (let e of H.find(Do)) zo.getOrCreateInstance(e).show();
}), V.on(window, No, () => {
	for (let e of H.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(e).position !== "fixed" && zo.getOrCreateInstance(e).hide();
}), cr(zo), Pn(zo);
var Bo = {
	"*": [
		"class",
		"dir",
		"id",
		"lang",
		"role",
		/^aria-[\w-]*$/i
	],
	a: [
		"target",
		"href",
		"title",
		"rel"
	],
	area: [],
	b: [],
	br: [],
	col: [],
	code: [],
	dd: [],
	div: [],
	dl: [],
	dt: [],
	em: [],
	hr: [],
	h1: [],
	h2: [],
	h3: [],
	h4: [],
	h5: [],
	h6: [],
	i: [],
	img: [
		"src",
		"srcset",
		"alt",
		"title",
		"width",
		"height"
	],
	li: [],
	ol: [],
	p: [],
	pre: [],
	s: [],
	small: [],
	span: [],
	sub: [],
	sup: [],
	strong: [],
	u: [],
	ul: []
}, Vo = /* @__PURE__ */ new Set([
	"background",
	"cite",
	"href",
	"itemtype",
	"longdesc",
	"poster",
	"src",
	"xlink:href"
]), Ho = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Uo = (e, t) => {
	let n = e.nodeName.toLowerCase();
	return t.includes(n) ? !Vo.has(n) || !!Ho.test(e.nodeValue) : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
};
function Wo(e, t, n) {
	if (!e.length) return e;
	if (n && typeof n == "function") return n(e);
	let r = new window.DOMParser().parseFromString(e, "text/html"), i = [].concat(...r.body.querySelectorAll("*"));
	for (let e of i) {
		let n = e.nodeName.toLowerCase();
		if (!Object.keys(t).includes(n)) {
			e.remove();
			continue;
		}
		let r = [].concat(...e.attributes), i = [].concat(t["*"] || [], t[n] || []);
		for (let t of r) Uo(t, i) || e.removeAttribute(t.nodeName);
	}
	return r.body.innerHTML;
}
var Go = "TemplateFactory", Ko = {
	allowList: Bo,
	content: {},
	extraClass: "",
	html: !1,
	sanitize: !0,
	sanitizeFn: null,
	template: "<div></div>"
}, qo = {
	allowList: "object",
	content: "object",
	extraClass: "(string|function)",
	html: "boolean",
	sanitize: "boolean",
	sanitizeFn: "(null|function)",
	template: "string"
}, Jo = {
	entry: "(string|element|function|null)",
	selector: "(string|element)"
}, Yo = class extends ir {
	constructor(e) {
		super(), this._config = this._getConfig(e);
	}
	static get Default() {
		return Ko;
	}
	static get DefaultType() {
		return qo;
	}
	static get NAME() {
		return Go;
	}
	getContent() {
		return Object.values(this._config.content).map((e) => this._resolvePossibleFunction(e)).filter(Boolean);
	}
	hasContent() {
		return this.getContent().length > 0;
	}
	changeContent(e) {
		return this._checkContent(e), this._config.content = {
			...this._config.content,
			...e
		}, this;
	}
	toHtml() {
		let e = document.createElement("div");
		e.innerHTML = this._maybeSanitize(this._config.template);
		for (let [t, n] of Object.entries(this._config.content)) this._setContent(e, n, t);
		let t = e.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
		return n && t.classList.add(...n.split(" ")), t;
	}
	_typeCheckConfig(e) {
		super._typeCheckConfig(e), this._checkContent(e.content);
	}
	_checkContent(e) {
		for (let [t, n] of Object.entries(e)) super._typeCheckConfig({
			selector: t,
			entry: n
		}, Jo);
	}
	_setContent(e, t, n) {
		let r = H.findOne(n, e);
		if (r) {
			if (t = this._resolvePossibleFunction(t), !t) {
				r.remove();
				return;
			}
			if (wn(t)) {
				this._putElementInTemplate(Tn(t), r);
				return;
			}
			if (this._config.html) {
				r.innerHTML = this._maybeSanitize(t);
				return;
			}
			r.textContent = t;
		}
	}
	_maybeSanitize(e) {
		return this._config.sanitize ? Wo(e, this._config.allowList, this._config.sanitizeFn) : e;
	}
	_resolvePossibleFunction(e) {
		return B(e, [void 0, this]);
	}
	_putElementInTemplate(e, t) {
		if (this._config.html) {
			t.innerHTML = "", t.append(e);
			return;
		}
		t.textContent = e.textContent;
	}
}, Xo = "tooltip", Zo = /* @__PURE__ */ new Set([
	"sanitize",
	"allowList",
	"sanitizeFn"
]), Qo = "fade", $o = "modal", es = "show", ts = ".tooltip-inner", ns = `.${$o}`, rs = "hide.bs.modal", is = "hover", as = "focus", os = "click", ss = "manual", cs = "hide", ls = "hidden", us = "show", ds = "shown", fs = "inserted", ps = "click", ms = "focusin", hs = "focusout", gs = "mouseenter", _s = "mouseleave", vs = {
	AUTO: "auto",
	TOP: "top",
	RIGHT: z() ? "left" : "right",
	BOTTOM: "bottom",
	LEFT: z() ? "right" : "left"
}, ys = {
	allowList: Bo,
	animation: !0,
	boundary: "clippingParents",
	container: !1,
	customClass: "",
	delay: 0,
	fallbackPlacements: [
		"top",
		"right",
		"bottom",
		"left"
	],
	html: !1,
	offset: [0, 6],
	placement: "top",
	popperConfig: null,
	sanitize: !0,
	sanitizeFn: null,
	selector: !1,
	template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
	title: "",
	trigger: "hover focus"
}, bs = {
	allowList: "object",
	animation: "boolean",
	boundary: "(string|element)",
	container: "(string|element|boolean)",
	customClass: "(string|function)",
	delay: "(number|object)",
	fallbackPlacements: "array",
	html: "boolean",
	offset: "(array|string|function)",
	placement: "(string|function)",
	popperConfig: "(null|object|function)",
	sanitize: "boolean",
	sanitizeFn: "(null|function)",
	selector: "(string|boolean)",
	template: "string",
	title: "(string|element|function)",
	trigger: "string"
}, xs = class e extends or {
	constructor(e, t) {
		if (pn === void 0) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
		super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
	}
	static get Default() {
		return ys;
	}
	static get DefaultType() {
		return bs;
	}
	static get NAME() {
		return Xo;
	}
	enable() {
		this._isEnabled = !0;
	}
	disable() {
		this._isEnabled = !1;
	}
	toggleEnabled() {
		this._isEnabled = !this._isEnabled;
	}
	toggle() {
		if (this._isEnabled) {
			if (this._isShown()) {
				this._leave();
				return;
			}
			this._enter();
		}
	}
	dispose() {
		clearTimeout(this._timeout), V.off(this._element.closest(ns), rs, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
	}
	show() {
		if (this._element.style.display === "none") throw Error("Please use show on visible elements");
		if (!(this._isWithContent() && this._isEnabled)) return;
		let e = V.trigger(this._element, this.constructor.eventName(us)), t = (On(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
		if (e.defaultPrevented || !t) return;
		this._disposePopper();
		let n = this._getTipElement();
		this._element.setAttribute("aria-describedby", n.getAttribute("id"));
		let { container: r } = this._config;
		if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(n), V.trigger(this._element, this.constructor.eventName(fs))), this._popper = this._createPopper(n), n.classList.add(es), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) V.on(e, "mouseover", kn);
		this._queueCallback(() => {
			V.trigger(this._element, this.constructor.eventName(ds)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
		}, this.tip, this._isAnimated());
	}
	hide() {
		if (!(!this._isShown() || V.trigger(this._element, this.constructor.eventName(cs)).defaultPrevented)) {
			if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) V.off(e, "mouseover", kn);
			this._activeTrigger[os] = !1, this._activeTrigger[as] = !1, this._activeTrigger[is] = !1, this._isHovered = null, this._queueCallback(() => {
				this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), V.trigger(this._element, this.constructor.eventName(ls)));
			}, this.tip, this._isAnimated());
		}
	}
	update() {
		this._popper && this._popper.update();
	}
	_isWithContent() {
		return !!this._getTitle();
	}
	_getTipElement() {
		return this.tip ||= this._createTipElement(this._newContent || this._getContentForTemplate()), this.tip;
	}
	_createTipElement(e) {
		let t = this._getTemplateFactory(e).toHtml();
		if (!t) return null;
		t.classList.remove(Qo, es), t.classList.add(`bs-${this.constructor.NAME}-auto`);
		let n = xn(this.constructor.NAME).toString();
		return t.setAttribute("id", n), this._isAnimated() && t.classList.add(Qo), t;
	}
	setContent(e) {
		this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
	}
	_getTemplateFactory(e) {
		return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Yo({
			...this._config,
			content: e,
			extraClass: this._resolvePossibleFunction(this._config.customClass)
		}), this._templateFactory;
	}
	_getContentForTemplate() {
		return { [ts]: this._getTitle() };
	}
	_getTitle() {
		return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
	}
	_initializeOnDelegatedTarget(e) {
		return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
	}
	_isAnimated() {
		return this._config.animation || this.tip && this.tip.classList.contains(Qo);
	}
	_isShown() {
		return this.tip && this.tip.classList.contains(es);
	}
	_createPopper(e) {
		let t = vs[B(this._config.placement, [
			this,
			e,
			this._element
		]).toUpperCase()];
		return fn(this._element, e, this._getPopperConfig(t));
	}
	_getOffset() {
		let { offset: e } = this._config;
		return typeof e == "string" ? e.split(",").map((e) => Number.parseInt(e, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
	}
	_resolvePossibleFunction(e) {
		return B(e, [this._element, this._element]);
	}
	_getPopperConfig(e) {
		let t = {
			placement: e,
			modifiers: [
				{
					name: "flip",
					options: { fallbackPlacements: this._config.fallbackPlacements }
				},
				{
					name: "offset",
					options: { offset: this._getOffset() }
				},
				{
					name: "preventOverflow",
					options: { boundary: this._config.boundary }
				},
				{
					name: "arrow",
					options: { element: `.${this.constructor.NAME}-arrow` }
				},
				{
					name: "preSetPlacement",
					enabled: !0,
					phase: "beforeMain",
					fn: (e) => {
						this._getTipElement().setAttribute("data-popper-placement", e.state.placement);
					}
				}
			]
		};
		return {
			...t,
			...B(this._config.popperConfig, [void 0, t])
		};
	}
	_setListeners() {
		let e = this._config.trigger.split(" ");
		for (let t of e) if (t === "click") V.on(this._element, this.constructor.eventName(ps), this._config.selector, (e) => {
			let t = this._initializeOnDelegatedTarget(e);
			t._activeTrigger[os] = !(t._isShown() && t._activeTrigger[os]), t.toggle();
		});
		else if (t !== ss) {
			let e = t === is ? this.constructor.eventName(gs) : this.constructor.eventName(ms), n = t === is ? this.constructor.eventName(_s) : this.constructor.eventName(hs);
			V.on(this._element, e, this._config.selector, (e) => {
				let t = this._initializeOnDelegatedTarget(e);
				t._activeTrigger[e.type === "focusin" ? as : is] = !0, t._enter();
			}), V.on(this._element, n, this._config.selector, (e) => {
				let t = this._initializeOnDelegatedTarget(e);
				t._activeTrigger[e.type === "focusout" ? as : is] = t._element.contains(e.relatedTarget), t._leave();
			});
		}
		this._hideModalHandler = () => {
			this._element && this.hide();
		}, V.on(this._element.closest(ns), rs, this._hideModalHandler);
	}
	_fixTitle() {
		let e = this._element.getAttribute("title");
		e && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"));
	}
	_enter() {
		if (this._isShown() || this._isHovered) {
			this._isHovered = !0;
			return;
		}
		this._isHovered = !0, this._setTimeout(() => {
			this._isHovered && this.show();
		}, this._config.delay.show);
	}
	_leave() {
		this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
			this._isHovered || this.hide();
		}, this._config.delay.hide));
	}
	_setTimeout(e, t) {
		clearTimeout(this._timeout), this._timeout = setTimeout(e, t);
	}
	_isWithActiveTrigger() {
		return Object.values(this._activeTrigger).includes(!0);
	}
	_getConfig(e) {
		let t = rr.getDataAttributes(this._element);
		for (let e of Object.keys(t)) Zo.has(e) && delete t[e];
		return e = {
			...t,
			...typeof e == "object" && e ? e : {}
		}, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
	}
	_configAfterMerge(e) {
		return e.container = e.container === !1 ? document.body : Tn(e.container), typeof e.delay == "number" && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
	}
	_getDelegateConfig() {
		let e = {};
		for (let [t, n] of Object.entries(this._config)) this.constructor.Default[t] !== n && (e[t] = n);
		return e.selector = !1, e.trigger = "manual", e;
	}
	_disposePopper() {
		this._popper &&= (this._popper.destroy(), null), this.tip &&= (this.tip.remove(), null);
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0) throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
};
Pn(xs);
var Ss = "popover", Cs = ".popover-header", ws = ".popover-body", Ts = {
	...xs.Default,
	content: "",
	offset: [0, 8],
	placement: "right",
	template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>",
	trigger: "click"
}, Es = {
	...xs.DefaultType,
	content: "(null|string|element|function)"
};
Pn(class e extends xs {
	static get Default() {
		return Ts;
	}
	static get DefaultType() {
		return Es;
	}
	static get NAME() {
		return Ss;
	}
	_isWithContent() {
		return this._getTitle() || this._getContent();
	}
	_getContentForTemplate() {
		return {
			[Cs]: this._getTitle(),
			[ws]: this._getContent()
		};
	}
	_getContent() {
		return this._resolvePossibleFunction(this._config.content);
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0) throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
});
var Ds = "scrollspy", Os = ".bs.scrollspy", ks = ".data-api", As = `activate${Os}`, js = `click${Os}`, Ms = `load${Os}${ks}`, Ns = "dropdown-item", Ps = "active", Fs = "[data-bs-spy=\"scroll\"]", Is = "[href]", Ls = ".nav, .list-group", Rs = ".nav-link", zs = `${Rs}, .nav-item > ${Rs}, .list-group-item`, Bs = ".dropdown", Vs = ".dropdown-toggle", Hs = {
	offset: null,
	rootMargin: "0px 0px -25%",
	smoothScroll: !1,
	target: null,
	threshold: [
		.1,
		.5,
		1
	]
}, Us = {
	offset: "(number|null)",
	rootMargin: "string",
	smoothScroll: "boolean",
	target: "element",
	threshold: "array"
}, Ws = class e extends or {
	constructor(e, t) {
		super(e, t), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
			visibleEntryTop: 0,
			parentScrollTop: 0
		}, this.refresh();
	}
	static get Default() {
		return Hs;
	}
	static get DefaultType() {
		return Us;
	}
	static get NAME() {
		return Ds;
	}
	refresh() {
		this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
		for (let e of this._observableSections.values()) this._observer.observe(e);
	}
	dispose() {
		this._observer.disconnect(), super.dispose();
	}
	_configAfterMerge(e) {
		return e.target = Tn(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((e) => Number.parseFloat(e))), e;
	}
	_maybeEnableSmoothScroll() {
		this._config.smoothScroll && (V.off(this._config.target, js), V.on(this._config.target, js, Is, (e) => {
			let t = this._observableSections.get(e.target.hash);
			if (t) {
				e.preventDefault();
				let n = this._rootElement || window, r = t.offsetTop - this._element.offsetTop;
				if (n.scrollTo) {
					n.scrollTo({
						top: r,
						behavior: "smooth"
					});
					return;
				}
				n.scrollTop = r;
			}
		}));
	}
	_getNewObserver() {
		let e = {
			root: this._rootElement,
			threshold: this._config.threshold,
			rootMargin: this._config.rootMargin
		};
		return new IntersectionObserver((e) => this._observerCallback(e), e);
	}
	_observerCallback(e) {
		let t = (e) => this._targetLinks.get(`#${e.target.id}`), n = (e) => {
			this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e));
		}, r = (this._rootElement || document.documentElement).scrollTop, i = r >= this._previousScrollData.parentScrollTop;
		this._previousScrollData.parentScrollTop = r;
		for (let a of e) {
			if (!a.isIntersecting) {
				this._activeTarget = null, this._clearActiveClass(t(a));
				continue;
			}
			let e = a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
			if (i && e) {
				if (n(a), !r) return;
				continue;
			}
			!i && !e && n(a);
		}
	}
	_initializeTargetsAndObservables() {
		this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
		let e = H.find(Is, this._config.target);
		for (let t of e) {
			if (!t.hash || Dn(t)) continue;
			let e = H.findOne(decodeURI(t.hash), this._element);
			En(e) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, e));
		}
	}
	_process(e) {
		this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(Ps), this._activateParents(e), V.trigger(this._element, As, { relatedTarget: e }));
	}
	_activateParents(e) {
		if (e.classList.contains(Ns)) {
			H.findOne(Vs, e.closest(Bs)).classList.add(Ps);
			return;
		}
		for (let t of H.parents(e, Ls)) for (let e of H.prev(t, zs)) e.classList.add(Ps);
	}
	_clearActiveClass(e) {
		e.classList.remove(Ps);
		let t = H.find(`${Is}.${Ps}`, e);
		for (let e of t) e.classList.remove(Ps);
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
};
V.on(window, Ms, () => {
	for (let e of H.find(Fs)) Ws.getOrCreateInstance(e);
}), Pn(Ws);
var Gs = "tab", Ks = ".bs.tab", qs = `hide${Ks}`, Js = `hidden${Ks}`, Ys = `show${Ks}`, Xs = `shown${Ks}`, Zs = `click${Ks}`, Qs = `keydown${Ks}`, $s = `load${Ks}`, ec = "ArrowLeft", tc = "ArrowRight", nc = "ArrowUp", rc = "ArrowDown", ic = "Home", ac = "End", oc = "active", sc = "fade", cc = "show", lc = "dropdown", uc = ".dropdown-toggle", dc = ".dropdown-menu", fc = `:not(${uc})`, pc = ".list-group, .nav, [role=\"tablist\"]", mc = ".nav-item, .list-group-item", hc = `.nav-link${fc}, .list-group-item${fc}, [role="tab"]${fc}`, gc = "[data-bs-toggle=\"tab\"], [data-bs-toggle=\"pill\"], [data-bs-toggle=\"list\"]", _c = `${hc}, ${gc}`, vc = `.${oc}[data-bs-toggle="tab"], .${oc}[data-bs-toggle="pill"], .${oc}[data-bs-toggle="list"]`, yc = class e extends or {
	constructor(e) {
		super(e), this._parent = this._element.closest(pc), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), V.on(this._element, Qs, (e) => this._keydown(e)));
	}
	static get NAME() {
		return Gs;
	}
	show() {
		let e = this._element;
		if (this._elemIsActive(e)) return;
		let t = this._getActiveElem(), n = t ? V.trigger(t, qs, { relatedTarget: e }) : null;
		V.trigger(e, Ys, { relatedTarget: t }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
	}
	_activate(e, t) {
		e && (e.classList.add(oc), this._activate(H.getElementFromSelector(e)), this._queueCallback(() => {
			if (e.getAttribute("role") !== "tab") {
				e.classList.add(cc);
				return;
			}
			e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), V.trigger(e, Xs, { relatedTarget: t });
		}, e, e.classList.contains(sc)));
	}
	_deactivate(e, t) {
		e && (e.classList.remove(oc), e.blur(), this._deactivate(H.getElementFromSelector(e)), this._queueCallback(() => {
			if (e.getAttribute("role") !== "tab") {
				e.classList.remove(cc);
				return;
			}
			e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), V.trigger(e, Js, { relatedTarget: t });
		}, e, e.classList.contains(sc)));
	}
	_keydown(t) {
		if (![
			ec,
			tc,
			nc,
			rc,
			ic,
			ac
		].includes(t.key)) return;
		t.stopPropagation(), t.preventDefault();
		let n = this._getChildren().filter((e) => !Dn(e)), r;
		if ([ic, ac].includes(t.key)) r = n[t.key === ic ? 0 : n.length - 1];
		else {
			let e = [tc, rc].includes(t.key);
			r = In(n, t.target, e, !0);
		}
		r && (r.focus({ preventScroll: !0 }), e.getOrCreateInstance(r).show());
	}
	_getChildren() {
		return H.find(_c, this._parent);
	}
	_getActiveElem() {
		return this._getChildren().find((e) => this._elemIsActive(e)) || null;
	}
	_setInitialAttributes(e, t) {
		this._setAttributeIfNotExists(e, "role", "tablist");
		for (let e of t) this._setInitialAttributesOnChild(e);
	}
	_setInitialAttributesOnChild(e) {
		e = this._getInnerElement(e);
		let t = this._elemIsActive(e), n = this._getOuterElement(e);
		e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
	}
	_setInitialAttributesOnTargetPanel(e) {
		let t = H.getElementFromSelector(e);
		t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
	}
	_toggleDropDown(e, t) {
		let n = this._getOuterElement(e);
		if (!n.classList.contains(lc)) return;
		let r = (e, r) => {
			let i = H.findOne(e, n);
			i && i.classList.toggle(r, t);
		};
		r(uc, oc), r(dc, cc), n.setAttribute("aria-expanded", t);
	}
	_setAttributeIfNotExists(e, t, n) {
		e.hasAttribute(t) || e.setAttribute(t, n);
	}
	_elemIsActive(e) {
		return e.classList.contains(oc);
	}
	_getInnerElement(e) {
		return e.matches(_c) ? e : H.findOne(_c, e);
	}
	_getOuterElement(e) {
		return e.closest(mc) || e;
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this);
			if (typeof t == "string") {
				if (n[t] === void 0 || t.startsWith("_") || t === "constructor") throw TypeError(`No method named "${t}"`);
				n[t]();
			}
		});
	}
};
V.on(document, Zs, gc, function(e) {
	["A", "AREA"].includes(this.tagName) && e.preventDefault(), !Dn(this) && yc.getOrCreateInstance(this).show();
}), V.on(window, $s, () => {
	for (let e of H.find(vc)) yc.getOrCreateInstance(e);
}), Pn(yc);
var bc = "toast", xc = ".bs.toast", Sc = `mouseover${xc}`, Cc = `mouseout${xc}`, wc = `focusin${xc}`, Tc = `focusout${xc}`, Ec = `hide${xc}`, Dc = `hidden${xc}`, Oc = `show${xc}`, kc = `shown${xc}`, Ac = "fade", jc = "hide", Mc = "show", Nc = "showing", Pc = {
	animation: "boolean",
	autohide: "boolean",
	delay: "number"
}, Fc = {
	animation: !0,
	autohide: !0,
	delay: 5e3
}, Ic = class e extends or {
	constructor(e, t) {
		super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
	}
	static get Default() {
		return Fc;
	}
	static get DefaultType() {
		return Pc;
	}
	static get NAME() {
		return bc;
	}
	show() {
		V.trigger(this._element, Oc).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add(Ac), this._element.classList.remove(jc), An(this._element), this._element.classList.add(Mc, Nc), this._queueCallback(() => {
			this._element.classList.remove(Nc), V.trigger(this._element, kc), this._maybeScheduleHide();
		}, this._element, this._config.animation));
	}
	hide() {
		!this.isShown() || V.trigger(this._element, Ec).defaultPrevented || (this._element.classList.add(Nc), this._queueCallback(() => {
			this._element.classList.add(jc), this._element.classList.remove(Nc, Mc), V.trigger(this._element, Dc);
		}, this._element, this._config.animation));
	}
	dispose() {
		this._clearTimeout(), this.isShown() && this._element.classList.remove(Mc), super.dispose();
	}
	isShown() {
		return this._element.classList.contains(Mc);
	}
	_maybeScheduleHide() {
		this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
			this.hide();
		}, this._config.delay)));
	}
	_onInteraction(e, t) {
		switch (e.type) {
			case "mouseover":
			case "mouseout":
				this._hasMouseInteraction = t;
				break;
			case "focusin":
			case "focusout":
				this._hasKeyboardInteraction = t;
				break;
		}
		if (t) {
			this._clearTimeout();
			return;
		}
		let n = e.relatedTarget;
		this._element === n || this._element.contains(n) || this._maybeScheduleHide();
	}
	_setListeners() {
		V.on(this._element, Sc, (e) => this._onInteraction(e, !0)), V.on(this._element, Cc, (e) => this._onInteraction(e, !1)), V.on(this._element, wc, (e) => this._onInteraction(e, !0)), V.on(this._element, Tc, (e) => this._onInteraction(e, !1));
	}
	_clearTimeout() {
		clearTimeout(this._timeout), this._timeout = null;
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this, t);
			if (typeof t == "string") {
				if (n[t] === void 0) throw TypeError(`No method named "${t}"`);
				n[t](this);
			}
		});
	}
};
cr(Ic), Pn(Ic);
//#endregion
//#region src/components/SparqlConnection.vue
var Lc = {
	name: "SparqlConnection",
	setup() {
		return { store: a() };
	},
	data() {
		return {
			configure_endpoint_modal: null,
			endpoint_type: "quit",
			query_url: "",
			update_url: "",
			quit_url: "",
			query_auth_enabled: !1,
			query_username: "",
			query_password: "",
			update_auth_enabled: !1,
			update_username: "",
			update_password: ""
		};
	},
	mounted() {
		this.configure_endpoint_modal = new _o(this.$refs.configure_endpoint), this.$refs.configure_endpoint.addEventListener("show.bs.modal", () => {
			this.get_endpoint_configuration();
		});
	},
	computed: {
		...h(a, { store_ready: (e) => e.ready }),
		store_capability: { get() {
			return this.store.sparqlEndpoint.capability;
		} }
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
			if (this.quit_url = "", this.query_url = "", this.update_url = "", this.query_auth_enabled = !1, this.query_username = "", this.query_password = "", this.update_auth_enabled = !1, this.update_username = "", this.update_password = "", this.endpoint_type = e.type, e.type === "quit") this.quit_url = e.quitUrl;
			else if (e.type === "query_only" || e.type === "query_update") {
				this.query_url = e.queryUrl;
				let t = e.getAuthForUrl ? e.getAuthForUrl(this.query_url) : void 0;
				if (t && (this.query_auth_enabled = !0, this.query_username = t.username || "", this.query_password = t.password || ""), e.type === "query_update") {
					this.update_url = e.updateUrl;
					let t = e.getAuthForUrl ? e.getAuthForUrl(this.update_url) : void 0;
					t && (this.update_auth_enabled = !0, this.update_username = t.username || "", this.update_password = t.password || "");
				}
			}
		},
		configure_endpoint() {
			let e = {};
			if (this.endpoint_type === "quit" && this.quit_url) e.quit_url = this.quit_url;
			else {
				if (!this.query_url) {
					console.error("Not even a query_url is given. Not changing the endpoint configuration.");
					return;
				}
				this.query_auth_enabled && (this.query_username || this.query_password) ? e.query_url = {
					value: this.query_url,
					auth: {
						username: this.query_username,
						password: this.query_password
					}
				} : e.query_url = this.query_url, this.update_url && (this.update_auth_enabled && (this.update_username || this.update_password) ? e.update_url = {
					value: this.update_url,
					auth: {
						username: this.update_username,
						password: this.update_password
					}
				} : e.update_url = this.update_url);
			}
			this.store.updateEndpointConfiguration({ sources: [e] });
		}
	}
}, Rc = {
	key: 0,
	inline: "",
	class: "col-12"
}, zc = {
	class: "btn-group col-1 mb-2 mr-sm-2 mb-sm-0",
	role: "group"
}, Bc = {
	class: "modal fade",
	ref: "configure_endpoint",
	tabindex: "-1",
	"aria-hidden": "true",
	"data-bs-backdrop": "static",
	size: "lg"
}, Vc = { class: "modal-dialog modal-lg" }, Hc = { class: "modal-content" }, Uc = { class: "modal-header" }, Wc = { class: "modal-body" }, Gc = {
	class: "form-group",
	label: "Endpoint Type"
}, Kc = {
	key: 0,
	class: "form-group"
}, qc = {
	key: 1,
	class: "form-group"
}, Jc = { class: "input-group mb-3" }, Yc = ["title"], Xc = {
	key: 0,
	class: "mt-2"
}, Zc = { class: "card card-body mt-2" }, Qc = { class: "form-group" }, $c = { class: "form-group" }, el = {
	key: 2,
	class: "form-group"
}, tl = { class: "input-group mb-3" }, nl = ["title"], rl = {
	key: 0,
	class: "mt-2"
}, il = { class: "card card-body mt-2" }, al = { class: "form-group" }, ol = { class: "form-group" }, sl = { class: "modal-footer" };
function cl(e, t, n, r, i, a) {
	return A(), b(g, null, [e.store_ready ? (A(), b("form", Rc, [x("div", zc, [
		x("button", {
			type: "button",
			class: "btn btn-outline-secondary mb-0",
			onClick: t[0] ||= (e) => i.configure_endpoint_modal.show(),
			title: "Configure Endpoint",
			"aria-label": "Configure Endpoint"
		}, [...t[19] ||= [x("i", { class: "bi bi-gear" }, null, -1)]]),
		a.store_capability.quit ? (A(), b("button", {
			key: 0,
			type: "button",
			class: "btn btn-outline-secondary mb-0",
			onClick: t[1] ||= (e) => a.push(),
			title: "Push To Remote Repository",
			"aria-label": "Push To Remote Repository"
		}, [...t[20] ||= [x("i", { class: "bi bi-cloud-upload" }, null, -1)]])) : y("", !0),
		a.store_capability.quit ? (A(), b("button", {
			key: 1,
			type: "button",
			class: "btn btn-outline-secondary mb-0",
			onClick: t[2] ||= (e) => a.pull(),
			title: "Pull From Remote Repository",
			"aria-label": "Pull From Remote Repository"
		}, [...t[21] ||= [x("i", { class: "bi bi-cloud-download" }, null, -1)]])) : y("", !0)
	])])) : y("", !0), x("div", Bc, [x("div", Vc, [x("div", Hc, [
		x("div", Uc, [t[22] ||= x("h5", { class: "modal-title" }, "Configure Endpoint", -1), x("button", {
			type: "button",
			class: "btn-close",
			onClick: t[3] ||= (e) => i.configure_endpoint_modal.hide(),
			"aria-label": "Close"
		})]),
		x("div", Wc, [x("form", null, [
			x("div", Gc, [
				F(x("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[4] ||= (e) => i.endpoint_type = e,
					id: "in_memory",
					value: "in_memory"
				}, null, 512), [[oe, i.endpoint_type]]),
				t[23] ||= x("label", {
					class: "form-check-label",
					for: "in_memory"
				}, "In Memory", -1),
				F(x("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[5] ||= (e) => i.endpoint_type = e,
					id: "query_only",
					value: "query_only"
				}, null, 512), [[oe, i.endpoint_type]]),
				t[24] ||= x("label", {
					class: "form-check-label",
					for: "query_only"
				}, "Query only", -1),
				F(x("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[6] ||= (e) => i.endpoint_type = e,
					id: "query_update",
					value: "query_update"
				}, null, 512), [[oe, i.endpoint_type]]),
				t[25] ||= x("label", {
					class: "form-check-label",
					for: "query_update"
				}, "Query & Update", -1),
				F(x("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[7] ||= (e) => i.endpoint_type = e,
					id: "quit",
					value: "quit"
				}, null, 512), [[oe, i.endpoint_type]]),
				t[26] ||= x("label", {
					class: "form-check-label",
					for: "quit"
				}, "Quit Store", -1)
			]),
			i.endpoint_type == "quit" ? (A(), b("div", Kc, [t[27] ||= x("label", { for: "quit_url" }, "Quit URL", -1), x("div", null, [F(x("input", {
				type: "text",
				class: "form-control",
				id: "quit_url",
				"onUpdate:modelValue": t[8] ||= (e) => i.quit_url = e,
				placeholder: "http://your.quit.store.org/"
			}, null, 512), [[P, i.quit_url]])])])) : y("", !0),
			i.endpoint_type == "query_only" || i.endpoint_type == "query_update" ? (A(), b("div", qc, [
				t[31] ||= x("label", { for: "query_url" }, "Query URL", -1),
				x("div", null, [x("div", Jc, [F(x("input", {
					type: "text",
					class: "form-control",
					id: "query_url",
					"onUpdate:modelValue": t[9] ||= (e) => i.query_url = e,
					placeholder: "http://your.sparql.store.org/query"
				}, null, 512), [[P, i.query_url]]), x("button", {
					class: "btn btn-outline-secondary",
					type: "button",
					onClick: t[10] ||= (e) => i.query_auth_enabled = !i.query_auth_enabled,
					title: i.query_auth_enabled ? "Disable Query Authentication" : "Enable Query Authentication"
				}, [x("i", { class: k(["bi", i.query_auth_enabled ? "bi-lock-fill" : "bi-unlock"]) }, null, 2)], 8, Yc)])]),
				i.query_auth_enabled ? (A(), b("div", Xc, [x("div", Zc, [
					t[30] ||= x("h6", { class: "card-title" }, "Authentication for Query URL", -1),
					x("div", Qc, [t[28] ||= x("label", { for: "query_username" }, "Username", -1), F(x("input", {
						type: "text",
						class: "form-control",
						id: "query_username",
						"onUpdate:modelValue": t[11] ||= (e) => i.query_username = e,
						placeholder: "Username"
					}, null, 512), [[P, i.query_username]])]),
					x("div", $c, [t[29] ||= x("label", { for: "query_password" }, "Password", -1), F(x("input", {
						type: "password",
						class: "form-control",
						id: "query_password",
						"onUpdate:modelValue": t[12] ||= (e) => i.query_password = e,
						placeholder: "Password"
					}, null, 512), [[P, i.query_password]])])
				])])) : y("", !0)
			])) : y("", !0),
			i.endpoint_type == "query_update" ? (A(), b("div", el, [
				t[35] ||= x("label", { for: "update_url" }, "Update URL", -1),
				x("div", null, [x("div", tl, [F(x("input", {
					type: "text",
					class: "form-control",
					id: "update_url",
					"onUpdate:modelValue": t[13] ||= (e) => i.update_url = e,
					placeholder: "http://your.sparql.store.org/update"
				}, null, 512), [[P, i.update_url]]), x("button", {
					class: "btn btn-outline-secondary",
					type: "button",
					onClick: t[14] ||= (e) => i.update_auth_enabled = !i.update_auth_enabled,
					title: i.update_auth_enabled ? "Disable Update Authentication" : "Enable Update Authentication"
				}, [x("i", { class: k(["bi", i.update_auth_enabled ? "bi-lock-fill" : "bi-unlock"]) }, null, 2)], 8, nl)])]),
				i.update_auth_enabled ? (A(), b("div", rl, [x("div", il, [
					t[34] ||= x("h6", { class: "card-title" }, "Authentication for Update URL", -1),
					x("div", al, [t[32] ||= x("label", { for: "update_username" }, "Username", -1), F(x("input", {
						type: "text",
						class: "form-control",
						id: "update_username",
						"onUpdate:modelValue": t[15] ||= (e) => i.update_username = e,
						placeholder: "Username"
					}, null, 512), [[P, i.update_username]])]),
					x("div", ol, [t[33] ||= x("label", { for: "update_password" }, "Password", -1), F(x("input", {
						type: "password",
						class: "form-control",
						id: "update_password",
						"onUpdate:modelValue": t[16] ||= (e) => i.update_password = e,
						placeholder: "Password"
					}, null, 512), [[P, i.update_password]])])
				])])) : y("", !0)
			])) : y("", !0)
		])]),
		x("div", sl, [x("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[17] ||= (e) => i.configure_endpoint_modal.hide()
		}, "Close"), x("button", {
			type: "button",
			class: "btn btn-primary",
			onClick: t[18] ||= (e) => {
				a.configure_endpoint(), i.configure_endpoint_modal.hide();
			}
		}, "Save changes")])
	])])], 512)], 64);
}
var ll = /*#__PURE__*/ o(Lc, [["render", cl]]), ul = {
	name: "GraphList",
	setup() {
		return { store: a() };
	},
	components: {
		TermInput: u,
		QueryResultList: l
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
		this.add_graph_modal = new _o(this.$refs.add_graph);
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
}, dl = {
	class: "modal fade",
	ref: "add_graph",
	tabindex: "-1",
	"aria-hidden": "true",
	"data-bs-backdrop": "static",
	size: "lg"
}, fl = { class: "modal-dialog modal-lg" }, pl = { class: "modal-content" }, ml = { class: "modal-header" }, hl = { class: "modal-body" }, gl = { class: "form-group" }, _l = { class: "modal-footer" };
function vl(e, t, n, r, i, a) {
	let o = N("QueryResultList"), s = N("TermInput");
	return A(), b("div", null, [C(o, {
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
	]), x("div", dl, [x("div", fl, [x("div", pl, [
		x("div", ml, [t[4] ||= x("h5", { class: "modal-title" }, "Create New Graph", -1), x("button", {
			type: "button",
			class: "btn-close",
			onClick: t[0] ||= (e) => i.add_graph_modal.hide(),
			"aria-label": "Close"
		})]),
		x("div", hl, [x("form", null, [x("div", gl, [t[5] ||= x("label", { for: "new_graph_iri" }, "IRI", -1), x("div", null, [C(s, {
			type: "iri",
			id: "new_graph_iri",
			term: i.new_graph_iri,
			"onUpdate:term": t[1] ||= (e) => i.new_graph_iri = e
		}, null, 8, ["term"])])])])]),
		x("div", _l, [x("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[2] ||= (e) => i.add_graph_modal.hide()
		}, "Close"), x("button", {
			type: "button",
			class: "btn btn-primary",
			onClick: t[3] ||= (e) => a.add_graph()
		}, "Save changes")])
	])])], 512)]);
}
var yl = /*#__PURE__*/ o(ul, [["render", vl]]), bl = {
	name: "ClassList",
	props: {
		class_iri: String,
		selectClass: Function
	},
	watch: { graph_iri(e) {
		console.log("graph_iri changed" + e), this.$refs.classList.updateList();
	} },
	computed: { ...h(i, ["graph_iri"]) }
}, xl = /*@__PURE__*/ Object.assign(bl, { setup(e) {
	return (t, n) => (A(), v(l, {
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
function Sl(e) {
	let t = `[${e.name}] ${e.message}`, n = [];
	return e.fix && n.push(`fix: ${e.fix}`), e.sources?.length && n.push(`sources: ${e.sources.join(", ")}`), e.docs && n.push(`see: ${e.docs}`), n.length === 0 ? t : [t, ...n.map((e, t) => `${t < n.length - 1 ? "├▶" : "╰▶"} ${e}`)].join("\n");
}
function Cl(e, ...t) {
	return typeof e == "function" ? e(...t) : e;
}
/* @__NO_SIDE_EFFECTS__ */
function wl({ method: e = "warn", formatter: t = Sl } = {}) {
	return (n, { method: r = e } = {}) => {
		console[r](t(n));
	};
}
var Tl = Error.captureStackTrace, El = class e extends Error {
	name = "Diagnostic";
	docs;
	fix;
	sources;
	get why() {
		return this.message;
	}
	constructor(t, n = e) {
		super(t.why, { cause: t.cause }), this.fix = t.fix, this.docs = t.docs, this.sources = t.sources, Tl?.(this, n);
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
function Dl(e, t) {
	return typeof e == "string" ? `${e}/${t.toLowerCase()}` : e?.(t);
}
/* @__NO_SIDE_EFFECTS__ */
function Ol(e) {
	let t = e.reporters ?? [], n = {}, { docsBase: r } = e;
	for (let i of Object.keys(e.codes)) {
		let a = e.codes[i], o = a.docs === !1 ? void 0 : a.docs || Dl(r, i), s = (e = {}, n = {}) => {
			let r = new El({
				why: Cl(a.why, e),
				fix: Cl(a.fix, e),
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
function kl(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Al(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && kl(e.default);
}
var U = Object.assign;
function jl(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = W(i) ? i.map(e) : e(i);
	}
	return n;
}
var Ml = () => {}, W = Array.isArray;
function Nl(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Pl = Symbol(process.env.NODE_ENV === "production" ? "" : "navigation failure"), Fl = {
	1({ location: e, currentLocation: t }) {
		return `No match for\n ${JSON.stringify(e)}${t ? "\nwhile being at\n" + JSON.stringify(t) : ""}`;
	},
	2({ from: e, to: t }) {
		return `Redirected from "${e.fullPath}" to "${zl(t)}" via a navigation guard.`;
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
function Il(e, t) {
	return process.env.NODE_ENV === "production" ? U(/* @__PURE__ */ Error(), {
		type: e,
		[Pl]: !0
	}, t) : U(Error(Fl[e](t)), {
		type: e,
		[Pl]: !0
	}, t);
}
function Ll(e, t) {
	return e instanceof Error && Pl in e && (t == null || !!(e.type & t));
}
var Rl = [
	"params",
	"query",
	"hash"
];
function zl(e) {
	if (!e || typeof e == "string") return e;
	if (e.path != null) return e.path;
	let t = {};
	for (let n of Rl) n in e && (t[n] = e[n]);
	return JSON.stringify(t, null, 2);
}
var G = /*#__PURE__*/ Ol({
	reporters: [/*#__PURE__*/ wl()],
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
			why: (e) => `Location "${zl(e.location)}" resolved to "${e.href}". A resolved location cannot start with multiple slashes.`,
			fix: "Remove the leading slashes from the location or fix the route configuration."
		},
		VUE_ROUTER_R0004: {
			why: (e) => `No match found for location with path "${zl(e.path)}"`,
			fix: "Add a route matching this path or check for typos in the location.",
			docs: "https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route"
		},
		VUE_ROUTER_R0005: {
			why: (e) => `router.resolve() was passed an invalid location. This will fail in production.\nLocation: ${zl(e.rawLocation)}`,
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
}), Bl = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location matched"), Vl = Symbol(process.env.NODE_ENV === "production" ? "" : "router view depth"), Hl = Symbol(process.env.NODE_ENV === "production" ? "" : "router"), Ul = Symbol(process.env.NODE_ENV === "production" ? "" : "route location"), Wl = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location"), Gl = Object.create, Kl = Object.defineProperty, ql = Object.getOwnPropertyDescriptor, Jl = Object.getOwnPropertyNames, Yl = Object.getPrototypeOf, Xl = Object.prototype.hasOwnProperty, Zl = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ql = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Jl(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Xl.call(e, s) && s !== n && Kl(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ql(t, s)) || r.enumerable
	});
	return e;
}, $l = (e, t, n) => (n = e == null ? {} : Gl(Yl(e)), Ql(t || !e || !e.__esModule ? Kl(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), eu = typeof navigator < "u", K = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
K.chrome !== void 0 && K.chrome.devtools, eu && (K.self, K.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__;
var tu = /* @__PURE__ */ $l((/* @__PURE__ */ Zl(((e, t) => {
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
})))(), 1), nu = /(?:^|[-_/])(\w)/g;
function ru(e, t) {
	return t ? t.toUpperCase() : "";
}
function iu(e) {
	return e && `${e}`.replace(nu, ru);
}
function au(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var ou = (0, tu.default)({ circles: !0 }), su = { trailing: !0 };
function cu(e, t = 25, n = {}) {
	if (n = {
		...su,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = lu(e, t, r), o.finally(() => {
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
async function lu(e, t, n) {
	return await e.apply(t, n);
}
//#endregion
//#region node_modules/hookable/dist/index.mjs
function uu(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? uu(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var du = { run: (e) => e() }, fu = console.createTask === void 0 ? () => du : console.createTask;
function pu(e, t) {
	let n = fu(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function mu(e, t) {
	let n = fu(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function hu(e, t) {
	for (let n of [...e]) n(t);
}
var gu = class {
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
		let t = uu(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = uu(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(pu, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(mu, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && hu(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && hu(this._after, r);
		}) : (this._after && r && hu(this._after, r), i);
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
function _u() {
	return new gu();
}
//#endregion
//#region node_modules/@vue/devtools-kit/dist/index.js
var vu = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
function yu(e) {
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function bu(e) {
	let t = e.__file;
	if (t) return iu(au(t, ".vue"));
}
function xu(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Su(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Cu(e) {
	let t = e.subTree?.type, n = Su(e);
	return n ? n?.types?.Fragment === t : !1;
}
function wu(e) {
	let t = yu(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return xu(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return xu(e, t);
	return bu(e?.type || {}) || "Anonymous Component";
}
function Tu(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function Eu(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Du() {
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
var Ou;
function ku(e) {
	return Ou ||= document.createRange(), Ou.selectNode(e), Ou.getBoundingClientRect();
}
function Au(e) {
	let t = Du();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = Nu(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = ku(e));
		}
		i && ju(t, i);
	}
	return t;
}
function ju(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Mu = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function Nu(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? Mu : Cu(e) ? Au(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? Nu(e.subTree.component) : Mu;
}
function Pu(e) {
	return Cu(e) ? Fu(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Fu(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...Pu(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var Iu = "__vue-devtools-component-inspector__", Lu = "__vue-devtools-component-inspector__card__", Ru = "__vue-devtools-component-inspector__name__", zu = "__vue-devtools-component-inspector__indicator__", Bu = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, Vu = {
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
}, Hu = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function Uu() {
	return document.getElementById(Iu);
}
function Wu() {
	return document.getElementById(Lu);
}
function Gu() {
	return document.getElementById(zu);
}
function Ku() {
	return document.getElementById(Ru);
}
function qu(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function Ju(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? Iu, Object.assign(t.style, {
		...Bu,
		...qu(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Lu, Object.assign(n.style, {
		...Vu,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = Ru, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = zu, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Hu), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function Yu(e) {
	let t = Uu(), n = Wu(), r = Ku(), i = Gu();
	t && (Object.assign(t.style, {
		...Bu,
		...qu(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function Xu(e) {
	let t = Nu(e);
	if (!t.width && !t.height) return;
	let n = wu(e);
	Uu() ? Yu({
		bounds: t,
		name: n
	}) : Ju({
		bounds: t,
		name: n
	});
}
function Zu() {
	let e = Uu();
	e && (e.style.display = "none");
}
var Qu = null;
function $u(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (Qu = e, e.vnode.el)) {
			let t = Nu(e), n = wu(e);
			Uu() ? Yu({
				bounds: t,
				name: n
			}) : Ju({
				bounds: t,
				name: n
			});
		}
	}
}
function ed(e, t) {
	e.preventDefault(), e.stopPropagation(), Qu && t(Tu(Qu));
}
var td = null;
function nd() {
	Zu(), window.removeEventListener("mouseover", $u), window.removeEventListener("click", td, !0), td = null;
}
function rd() {
	return window.addEventListener("mouseover", $u), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), ed(n, (n) => {
				window.removeEventListener("click", t, !0), td = null, window.removeEventListener("mouseover", $u);
				let r = Uu();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		td = t, window.addEventListener("click", t, !0);
	});
}
function id(e) {
	let t = Eu(Y.value, e.id);
	if (t) {
		let [n] = Pu(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = Nu(t), n = document.createElement("div"), r = {
				...qu(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = Nu(t);
			if (n.width || n.height) {
				let r = wu(t), i = Uu();
				i ? Yu({
					...e,
					name: r,
					bounds: n
				}) : Ju({
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
function ad(e) {
	let t = 0, n = setInterval(() => {
		K.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function od() {
	let e = K.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function sd() {
	return new Promise((e) => {
		function t() {
			od(), e(K.__VUE_INSPECTOR__);
		}
		K.__VUE_INSPECTOR__ ? t() : ad(() => {
			t();
		});
	});
}
var cd = /* @__PURE__ */ function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function ld(e) {
	return !!(e && e[cd.IS_READONLY]);
}
function ud(e) {
	return ld(e) ? ud(e[cd.RAW]) : !!(e && e[cd.IS_REACTIVE]);
}
function dd(e) {
	return !!(e && e.__v_isRef === !0);
}
function fd(e) {
	let t = e && e[cd.RAW];
	return t ? fd(t) : e;
}
var pd = class {
	constructor() {
		this.refEditor = new md();
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
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : fd(t) instanceof Map ? t.delete(n) : fd(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : fd(t) instanceof Map ? t.set(e.newKey || n, r) : fd(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, md = class {
	set(e, t) {
		if (dd(e)) e.value = t;
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
		return dd(e) ? e.value : e;
	}
	isRef(e) {
		return dd(e) || ud(e);
	}
};
new pd();
var hd = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function gd() {
	if (typeof window > "u" || !eu || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(hd);
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
var _d = new Proxy(K.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function vd(e, t) {
	X.timelineLayersState[t.id] = !1, _d.push({
		...e,
		descriptorId: t.id,
		appRecord: Su(t.app)
	});
}
K.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var yd = new Proxy(K.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), bd = cu(() => {
	af.hooks.callHook(wd.SEND_INSPECTOR_TO_CLIENT, Sd());
});
function xd(e, t) {
	yd.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: Su(t.app)
	}), bd();
}
function Sd() {
	return yd.filter((e) => e.descriptor.app === Y.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function Cd(e, t) {
	return yd.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var q = /* @__PURE__ */ function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), J = /* @__PURE__ */ function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), wd = /* @__PURE__ */ function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function Td() {
	let e = _u();
	e.hook(J.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		xd(e, t.descriptor);
	});
	let t = cu(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || X.highPerfModeEnabled) return;
		let r = Cd(t, n.descriptor.app), i = {
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
		}, wd.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	e.hook(J.SEND_INSPECTOR_TREE, t);
	let n = cu(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || X.highPerfModeEnabled) return;
		let r = Cd(t, n.descriptor.app), i = {
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
		}, wd.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	return e.hook(J.SEND_INSPECTOR_STATE, n), e.hook(J.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = Cd(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(J.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		vd(e, t.descriptor);
	}), e.hook(J.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		X.highPerfModeEnabled || !X.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, wd.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(J.GET_COMPONENT_INSTANCES, async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook(J.GET_COMPONENT_BOUNDS, async ({ instance: e }) => Nu(e)), e.hook(J.GET_COMPONENT_NAME, ({ instance: e }) => wu(e)), e.hook(J.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = Y.value.instanceMap.get(e);
		t && Xu(t);
	}), e.hook(J.COMPONENT_UNHIGHLIGHT, () => {
		Zu();
	}), e;
}
K.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [], K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {}, K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "", K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [], K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var Ed = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Dd() {
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
		timelineLayersState: gd()
	};
}
K[Ed] ??= Dd();
var Od = cu((e) => {
	af.hooks.callHook(wd.DEVTOOLS_STATE_UPDATED, { state: e });
});
cu((e, t) => {
	af.hooks.callHook(wd.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var kd = new Proxy(K.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? K.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : K.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), Y = new Proxy(K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function Ad() {
	Od({
		...K[Ed],
		appRecords: kd.value,
		activeAppRecordId: Y.id,
		tabs: K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function jd(e) {
	K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Ad();
}
function Md(e) {
	K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Ad();
}
var X = new Proxy(K[Ed], {
	get(e, t) {
		return t === "appRecords" ? kd : t === "activeAppRecordId" ? Y.id : t === "tabs" ? K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : K[Ed][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, K[Ed][t] = n, !0;
	}
});
function Nd(e = {}) {
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
var Pd = new Proxy(K.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function Fd(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function Id(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Ld(e) {
	return (Pd.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function Rd(e, t) {
	let n = Id(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return Fd(e ? (Pd.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function zd(e, t) {
	let n = Id(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Fd(t)));
}
function Bd(e, t, n) {
	let r = Id(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), af.hooks.callHookWith((r) => {
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
}({}), Q = K.__VUE_DEVTOOLS_HOOK ??= _u(), Vd = {
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
}, Hd = class {
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
		let t = Sd().find((e) => e.packageName === this.plugin.descriptor.packageName);
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
		}), this.plugin.descriptor.settings && zd(e.id, this.plugin.descriptor.settings);
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
		return Rd(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, Ud = "__vue_devtool_undefined__", Wd = "__vue_devtool_infinity__", Gd = "__vue_devtool_negative_infinity__", Kd = "__vue_devtool_nan__";
Object.entries({
	[Ud]: "undefined",
	[Kd]: "NaN",
	[Wd]: "Infinity",
	[Gd]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function qd(e, t) {
	return Vd.setupDevToolsPlugin(e, t);
}
function Jd(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Hd({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: af
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function Yd(e, t) {
	K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || X.highPerfModeEnabled && !t?.inspectingComponent || (K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Pd.forEach((t) => {
		Jd(t, e);
	}));
}
var Xd = "__VUE_DEVTOOLS_ROUTER__", Zd = "__VUE_DEVTOOLS_ROUTER_INFO__";
K[Zd] ??= {
	currentRoute: null,
	routes: []
}, K[Xd] ??= {}, new Proxy(K[Zd], { get(e, t) {
	return K[Zd][t];
} }), new Proxy(K[Xd], { get(e, t) {
	if (t === "value") return K[Xd];
} });
function Qd(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function $d(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = $d(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function ef(e) {
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
			matched: $d(o)
		};
	}
	return e;
}
function tf(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = ef(t?.currentRoute.value), r = $d(Qd(t)), i = console.warn;
		console.warn = () => {}, K[Zd] = {
			currentRoute: n ? ou(n) : {},
			routes: ou(r)
		}, K[Xd] = t, console.warn = i;
	}
	n(), Vd.on.componentUpdated(cu(() => {
		t.value?.app === e.app && (n(), !X.highPerfModeEnabled && af.hooks.callHook(wd.ROUTER_INFO_UPDATED, { state: K[Zd] }));
	}, 200));
}
function nf(e) {
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
			let n = new pd(), r = {
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
			let n = Cd(t);
			e.callHook(J.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return rd();
		},
		cancelInspectComponentInspector() {
			return nd();
		},
		getComponentRenderCode(e) {
			let t = Eu(Y.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return id({ id: e });
		},
		openInEditor: Nd,
		getVueInspector: sd,
		toggleApp(e, t) {
			let n = kd.value.find((t) => t.id === e);
			n && (Md(e), jd(n), tf(n, Y), bd(), Yd(n.app, t));
		},
		inspectDOM(e) {
			let t = Eu(Y.value, e);
			if (t) {
				let [e] = Pu(t);
				e && (K.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			Bd(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Ld(e),
				values: Rd(e)
			};
		}
	};
}
K.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
var rf = Td();
K.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks: rf,
	get state() {
		return {
			...X,
			activeAppRecordId: Y.id,
			activeAppRecord: Y.value,
			appRecords: kd.value
		};
	},
	api: nf(rf)
};
var af = K.__VUE_DEVTOOLS_KIT_CONTEXT__, of = /* @__PURE__ */ vu(((e, t) => {
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
			var u = "-", d = "", m = "", h = !0, g = {}, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), C = o.en, w = a.en, typeof t == "object") for (D in _ = t.maintainCase || !1, g = t.custom && typeof t.custom == "object" ? t.custom : g, y = +t.truncate > 1 && t.truncate || !1, b = t.uric || !1, x = t.uricNoSlash || !1, S = t.mark || !1, h = !(t.symbols === !1 || t.lang === !1), u = t.separator || u, b && (j += s), x && (j += c), S && (j += l), C = t.lang && o[t.lang] && h ? o[t.lang] : h ? o.en : {}, w = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				g[e + ""] = e + "";
			}), v = !0) : v = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				g[e + ""] = e + "";
			}), Object.keys(g).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, g[t]);
			}), g) j += D;
			for (j += u, j = f(j), e = e.replace(/(^\s+|\s+$)/g, ""), k = !1, A = !1, E = 0, O = e.length; E < O; E++) D = e[E], p(D, g) ? k = !1 : w[D] ? (D = k && w[D].match(/[A-Za-z0-9]/) ? " " + w[D] : w[D], k = !1) : D in n ? (E + 1 < O && r.indexOf(e[E + 1]) >= 0 ? (m += D, D = "") : A === !0 ? (D = i[m] + n[D], m = "") : D = k && n[D].match(/[A-Za-z0-9]/) ? " " + n[D] : n[D], k = !1, A = !1) : D in i ? (m += D, D = "", E === O - 1 && (D = i[m]), A = !0) : C[D] && !(b && s.indexOf(D) !== -1) && !(x && c.indexOf(D) !== -1) ? (D = k || d.substr(-1).match(/[A-Za-z0-9]/) ? u + C[D] : C[D], D += e[E + 1] !== void 0 && e[E + 1].match(/[A-Za-z0-9]/) ? u : "", k = !0) : (A === !0 ? (D = i[m] + D, m = "", A = !1) : k && (/[A-Za-z0-9]/.test(D) || d.substr(-1).match(/A-Za-z0-9]/)) && (D = " " + D), k = !1), d += D.replace(RegExp("[^\\w\\s" + j + "_-]", "g"), u);
			return v && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(g).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), y && d.length > y && (T = d.charAt(y) === u, d = d.slice(0, y), T || (d = d.slice(0, d.lastIndexOf(u)))), !_ && !v && (d = d.toLowerCase()), d;
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
(/* @__PURE__ */ vu(((e, t) => {
	t.exports = of();
})))(), K.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function sf(e) {
	X.highPerfModeEnabled = e ?? !X.highPerfModeEnabled, !e && Y.value && Yd(Y.value.app);
}
function cf(e) {
	X.devtoolsClientDetected = {
		...X.devtoolsClientDetected,
		...e
	}, sf(!Object.values(X.devtoolsClientDetected).some(Boolean));
}
K.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= cf;
var lf = class {
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
}, uf = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new lf();
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
}, df = class extends uf {
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
function ff(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function pf(e, t) {
	let n = ff(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function mf(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function hf(e, t) {
	return e.indexOf(t) !== -1;
}
function gf(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var _f = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return pf(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, vf = (e) => Object.prototype.toString.call(e).slice(8, -1), yf = (e) => e === void 0, bf = (e) => e === null, xf = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, Sf = (e) => xf(e) && Object.keys(e).length === 0, Cf = (e) => Array.isArray(e), wf = (e) => typeof e == "string", Tf = (e) => typeof e == "number" && !isNaN(e), Ef = (e) => typeof e == "boolean", Df = (e) => e instanceof RegExp, Of = (e) => e instanceof Map, kf = (e) => e instanceof Set, Af = (e) => vf(e) === "Symbol", jf = (e) => e instanceof Date && !isNaN(e.valueOf()), Mf = (e) => e instanceof Error, Nf = (e) => typeof e == "number" && isNaN(e), Pf = (e) => Ef(e) || bf(e) || yf(e) || Tf(e) || wf(e) || Af(e), Ff = (e) => typeof e == "bigint", If = (e) => e === Infinity || e === -Infinity, Lf = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Rf = (e) => e instanceof URL, zf = (e) => e.replace(/\./g, "\\."), Bf = (e) => e.map(String).map(zf).join("."), Vf = (e) => {
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
function Hf(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Uf = [
	Hf(yf, "undefined", () => null, () => void 0),
	Hf(Ff, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	Hf(jf, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	Hf(Mf, "Error", (e, t) => {
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
	Hf(Df, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	Hf(kf, "set", (e) => [...e.values()], (e) => new Set(e)),
	Hf(Of, "map", (e) => [...e.entries()], (e) => new Map(e)),
	Hf((e) => Nf(e) || If(e), "number", (e) => Nf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	Hf((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	Hf(Rf, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Wf(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Gf = Wf((e, t) => Af(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Kf = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), qf = Wf(Lf, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Kf[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function Jf(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Yf = Wf(Jf, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Xf = Wf((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), Zf = [
	Yf,
	Gf,
	Xf,
	qf
], Qf = (e, t) => {
	let n = gf(Zf, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = gf(Uf, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, $f = {};
Uf.forEach((e) => {
	$f[e.annotation] = e;
});
var ep = (e, t, n) => {
	if (Cf(t)) switch (t[0]) {
		case "symbol": return Gf.untransform(e, t, n);
		case "class": return Yf.untransform(e, t, n);
		case "custom": return Xf.untransform(e, t, n);
		case "typed-array": return qf.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = $f[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, tp = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function np(e) {
	if (hf(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (hf(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (hf(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var rp = (e, t) => {
	np(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (kf(e)) e = tp(e, +r);
		else if (Of(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = tp(e, i);
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
}, ip = (e, t, n) => {
	if (np(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (Cf(r)) {
			let e = +n;
			r = r[e];
		} else if (xf(r)) r = r[n];
		else if (kf(r)) {
			let e = +n;
			r = tp(r, e);
		} else if (Of(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = tp(r, i);
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
	if (Cf(r) ? r[+i] = n(r[+i]) : xf(r) && (r[i] = n(r[i])), kf(r)) {
		let e = tp(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (Of(r)) {
		let e = +t[t.length - 2], a = tp(r, e);
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
function ap(e, t, n = []) {
	if (!e) return;
	if (!Cf(e)) {
		mf(e, (e, r) => ap(e, t, [...n, ...Vf(r)]));
		return;
	}
	let [r, i] = e;
	i && mf(i, (e, r) => {
		ap(e, t, [...n, ...Vf(r)]);
	}), t(r, n);
}
function op(e, t, n) {
	return ap(t, (t, r) => {
		e = ip(e, r, (e) => ep(e, t, n));
	}), e;
}
function sp(e, t) {
	function n(t, n) {
		let r = rp(e, Vf(n));
		t.map(Vf).forEach((t) => {
			e = ip(e, t, () => r);
		});
	}
	if (Cf(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = ip(e, Vf(t), () => e);
		}), i && mf(i, n);
	} else mf(t, n);
	return e;
}
var cp = (e, t) => xf(e) || Cf(e) || Of(e) || kf(e) || Jf(e, t);
function lp(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function up(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(Bf) : n[Bf(i)] = a.map(Bf);
	}), r ? Sf(n) ? [r] : [r, n] : Sf(n) ? void 0 : n;
}
var dp = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = Pf(e);
	if (!s) {
		lp(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!cp(e, n)) {
		let t = Qf(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (hf(a, e)) return { transformedValue: null };
	let c = Qf(e, n), l = c?.value ?? e, u = Cf(l) ? [] : {}, d = {};
	mf(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = dp(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, Cf(l.annotations) ? d[c] = l.annotations : xf(l.annotations) && mf(l.annotations, (e, t) => {
			d[zf(c) + "." + t] = e;
		});
	});
	let f = Sf(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
function fp(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function pp(e) {
	return fp(e) === "Array";
}
function mp(e) {
	if (fp(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function hp(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function gp(e, t = {}) {
	if (pp(e)) return e.map((e) => gp(e, t));
	if (!mp(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (pp(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return hp(n, r, gp(i, t), e, t.nonenumerable), n;
	}, {});
}
var $ = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new df(), this.symbolRegistry = new uf((e) => e.description ?? ""), this.customTransformerRegistry = new _f(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = dp(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = up(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = gp(t);
		return n?.values && (r = op(r, n.values, this)), n?.referentialEqualities && (r = sp(r, n.referentialEqualities)), r;
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
var _p = typeof document < "u", vp = /#/g, yp = /&/g, bp = /\//g, xp = /=/g, Sp = /\?/g, Cp = /\+/g, wp = /%5B/g, Tp = /%5D/g, Ep = /%5E/g, Dp = /%60/g, Op = /%7B/g, kp = /%7C/g, Ap = /%7D/g, jp = /%20/g;
function Mp(e) {
	return e == null ? "" : encodeURI("" + e).replace(kp, "|").replace(wp, "[").replace(Tp, "]");
}
function Np(e) {
	return Mp(e).replace(Op, "{").replace(Ap, "}").replace(Ep, "^");
}
function Pp(e) {
	return Mp(e).replace(Cp, "%2B").replace(jp, "+").replace(vp, "%23").replace(yp, "%26").replace(Dp, "`").replace(Op, "{").replace(Ap, "}").replace(Ep, "^");
}
function Fp(e) {
	return Pp(e).replace(xp, "%3D");
}
function Ip(e) {
	return Mp(e).replace(vp, "%23").replace(Sp, "%3F");
}
function Lp(e) {
	return Ip(e).replace(bp, "%2F");
}
function Rp(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {
		process.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0080({ text: "" + e });
	}
	return "" + e;
}
var zp = /\/$/, Bp = (e) => e.replace(zp, "");
function Vp(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = Yp(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Rp(o)
	};
}
function Hp(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Up(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Wp(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Gp(t.matched[r], n.matched[i]) && Kp(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Gp(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Kp(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!qp(e[n], t[n])) return !1;
	return !0;
}
function qp(e, t) {
	return W(e) ? Jp(e, t) : W(t) ? Jp(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Jp(e, t) {
	return W(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Yp(e, t) {
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
var Xp = {
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
function Zp(e) {
	if (!e) if (_p) {
		let t = document.querySelector("base");
		e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
	} else e = "/";
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Bp(e);
}
var Qp = /^[^#]+#/;
function $p(e, t) {
	return e.replace(Qp, "#") + t;
}
function em(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var tm = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function nm(e) {
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
		t = em(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function rm(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var im = /* @__PURE__ */ new Map();
function am(e, t) {
	im.set(e, t);
}
function om(e) {
	let t = im.get(e);
	return im.delete(e), t;
}
function sm(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function cm(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function lm(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(Cp, " "), i = r.indexOf("="), a = Rp(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Rp(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			W(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function um(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = Fp(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(W(r) ? r.map((e) => e && Pp(e)) : [r && Pp(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function dm(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = W(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function fm() {
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
function pm(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Il(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : sm(e) ? c(Il(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, process.env.NODE_ENV === "production" ? l : mm(hm(l, t, n)))), d = Promise.resolve(u);
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
function mm(e) {
	let t = !1;
	return function() {
		return t || (t = !0, G.VUE_ROUTER_R0025()), e.apply(this, arguments);
	};
}
function hm(e, t, n) {
	let r = 0;
	return function() {
		r++ === 1 && G.VUE_ROUTER_R0024({
			from: n.fullPath,
			to: t.fullPath
		}), e._called = !0, r === 1 && e.apply(null, arguments);
	};
}
function gm(e, t, n, r, i = (e) => e()) {
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
			if (!(t !== "beforeRouteEnter" && !o.instances[e])) if (kl(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(pm(c, n, r, o, e, i));
			} else {
				let c = s();
				process.env.NODE_ENV !== "production" && !("catch" in c) && (G.VUE_ROUTER_R0030({
					name: e,
					path: o.path
				}), c = Promise.resolve(c)), a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = Al(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && pm(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function _m(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Gp(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Gp(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
function vm(e, t) {
	let n = U({}, e, { matched: e.matched.map((e) => Rm(e, [
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
function ym(e) {
	return { _custom: { display: e } };
}
var bm = 0;
function xm(e, t, n) {
	if (t.__hasDevtools) return;
	t.__hasDevtools = !0;
	let r = bm++;
	qd({
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
				value: vm(t.currentRoute.value, "Current Route")
			});
		}), i.on.visitComponentTree(({ treeNode: e, componentInstance: t }) => {
			if (t.__vrv_devtools) {
				let n = t.__vrv_devtools;
				e.tags.push({
					label: (n.name ? `${n.name.toString()}: ` : "") + n.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: wm
				});
			}
			W(t.__vrl_devtools) && (t.__devtoolsApi = i, t.__vrl_devtools.forEach((t) => {
				let n = t.route.path, r = Om, i = "", a = 0;
				t.error ? (n = t.error, r = Am, a = jm) : t.isExactActive ? (r = Em, i = "This is exactly active") : t.isActive && (r = Tm, i = "This link is active"), e.tags.push({
					label: n,
					textColor: a,
					tooltip: i,
					backgroundColor: r
				});
			}));
		}), se(t.currentRoute, () => {
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
				guard: ym("beforeEach"),
				from: vm(t, "Current Location during this navigation"),
				to: vm(e, "Target location")
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
			let r = { guard: ym("afterEach") };
			n ? (r.failure = { _custom: {
				type: Error,
				readOnly: !0,
				display: n ? n.message : "",
				tooltip: "Navigation Failure",
				value: n
			} }, r.status = ym("❌")) : r.status = ym("✅"), r.from = vm(t, "Current Location during this navigation"), r.to = vm(e, "Target location"), i.addTimelineEvent({
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
			r.forEach(Im), e.filter && (r = r.filter((t) => Lm(t, e.filter.toLowerCase()))), r.forEach((e) => Fm(e, t.currentRoute.value)), e.rootNodes = r.map(Mm);
		}
		let l;
		i.on.getInspectorTree((t) => {
			l = t, t.app === e && t.inspectorId === s && c();
		}), i.on.getInspectorState((t) => {
			if (t.app === e && t.inspectorId === s) {
				let e = n.getRoutes().find((e) => e.record.__vd_id === t.nodeId);
				e && (t.state = { options: Cm(e) });
			}
		}), i.sendInspectorTree(s), i.sendInspectorState(s);
	});
}
function Sm(e) {
	return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Cm(e) {
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
			display: e.keys.map((e) => `${e.name}${Sm(e)}`).join(" "),
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
var wm = 15485081, Tm = 2450411, Em = 8702998, Dm = 2282478, Om = 16486972, km = 6710886, Am = 16704226, jm = 12131356;
function Mm(e) {
	let t = [], { record: n } = e;
	n.name != null && t.push({
		label: String(n.name),
		textColor: 0,
		backgroundColor: Dm
	}), n.aliasOf && t.push({
		label: "alias",
		textColor: 0,
		backgroundColor: Om
	}), e.__vd_match && t.push({
		label: "matches",
		textColor: 0,
		backgroundColor: wm
	}), e.__vd_exactActive && t.push({
		label: "exact",
		textColor: 0,
		backgroundColor: Em
	}), e.__vd_active && t.push({
		label: "active",
		textColor: 0,
		backgroundColor: Tm
	}), n.redirect && t.push({
		label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: km
	});
	let r = n.__vd_id;
	return r ?? (r = String(Nm++), n.__vd_id = r), {
		id: r,
		label: n.path,
		tags: t,
		children: e.children.map(Mm)
	};
}
var Nm = 0, Pm = /^\/(.*)\/([a-z]*)$/;
function Fm(e, t) {
	let n = t.matched.length && Gp(t.matched[t.matched.length - 1], e.record);
	e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((t) => Gp(t, e.record))), e.children.forEach((e) => Fm(e, t));
}
function Im(e) {
	e.__vd_match = !1, e.children.forEach(Im);
}
function Lm(e, t) {
	let n = String(e.re).match(Pm);
	if (e.__vd_match = !1, !n || n.length < 3) return !1;
	if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t)) return e.children.forEach((e) => Lm(e, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
	let r = e.record.path.toLowerCase(), i = Rp(r);
	return !t.startsWith("/") && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((e) => Lm(e, t));
}
function Rm(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || (n[r] = e[r]);
	return n;
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
var zm = () => location.protocol + "//" + location.host;
function Bm(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Up(n, "");
	}
	return Up(n, e) + r + i;
}
function Vm(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Bm(e, location), c = n.value, l = t.value, u = 0;
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
			e.replaceState(U({}, e.state, { scroll: tm() }), "");
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
function Hm(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? tm() : null
	};
}
function Um(e) {
	let { history: t, location: n } = window, r = { value: Bm(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : zm() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			process.env.NODE_ENV === "production" ? console.error(e) : G.VUE_ROUTER_R0120({ cause: e }), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, U({}, t.state, Hm(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = U({}, i.value, t.state, {
			forward: e,
			scroll: tm()
		});
		process.env.NODE_ENV !== "production" && !t.state && G.VUE_ROUTER_R0121(), a(o.current, o, !0), a(e, U({}, Hm(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function Wm(e) {
	e = Zp(e);
	let t = Um(e), n = Vm(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = U({
		location: "",
		base: e,
		go: r,
		createHref: $p.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function Gm(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && G.VUE_ROUTER_R0110({
		base: e,
		suggestion: e.replace(/#.*$/, "#")
	}), Wm(e);
}
var Km = {
	type: 0,
	value: ""
}, qm = /[a-zA-Z0-9_]/;
function Jm(e) {
	if (!e) return [[]];
	if (e === "/") return [[Km]];
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
			c === "(" ? n = 2 : qm.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
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
var Ym = "[^/]+?", Xm = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Zm = /[.+*?^${}()[\]/\\]/g;
function Qm(e, t) {
	let n = U({}, Xm, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(Zm, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Ym;
				if (u !== Ym) {
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
function $m(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function eh(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = $m(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (th(r)) return 1;
		if (th(i)) return -1;
	}
	return i.length - r.length;
}
function th(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var nh = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function rh(e, t, n) {
	let r = Qm(Jm(e.path), n);
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
function ih(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = Nl(nh, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = oh(e);
		process.env.NODE_ENV !== "production" && fh(s, n), s.aliasOf = r && r.record;
		let l = Nl(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(oh(U({}, s, {
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
			if (d = rh(t, n, l), process.env.NODE_ENV !== "production" && n && u[0] === "/" && mh(d, n), r ? (r.alias.push(d), process.env.NODE_ENV !== "production" && dh(r, d)) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !ch(d) && (process.env.NODE_ENV !== "production" && ph(e, n), o(e.name))), _h(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Ml;
	}
	function o(e) {
		if (cm(e)) {
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
		let t = hh(e, n);
		n.splice(t, 0, e), e.record.name && !ch(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Il(1, { location: e });
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
			s = i.record.name, a = U(ah(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && ah(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, process.env.NODE_ENV !== "production" && !o.startsWith("/") && G.VUE_ROUTER_R0101({ path: o }), i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Il(1, {
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
			meta: lh(c)
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
function ah(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function oh(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: sh(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function sh(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function ch(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function lh(e) {
	return e.reduce((e, t) => U(e, t.meta), {});
}
function uh(e, t) {
	return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function dh(e, t) {
	for (let n of e.keys) if (!n.optional && !t.keys.find(uh.bind(null, n))) {
		G.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
	for (let n of t.keys) if (!n.optional && !e.keys.find(uh.bind(null, n))) {
		G.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
}
function fh(e, t) {
	t && t.record.name && !e.name && !e.path && e.children.length === 0 && G.VUE_ROUTER_R0103({ name: String(t.record.name) });
}
function ph(e, t) {
	for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function mh(e, t) {
	for (let n of t.keys) if (!e.keys.find(uh.bind(null, n))) {
		G.VUE_ROUTER_R0104({
			path: e.record.path,
			name: n.name,
			parent: t.record.path
		});
		return;
	}
}
function hh(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		eh(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = gh(e);
	return i && (r = t.lastIndexOf(i, r - 1), process.env.NODE_ENV !== "production" && r < 0 && G.VUE_ROUTER_R0105({
		ancestor: i.record.path,
		record: e.record.path
	})), r;
}
function gh(e) {
	let t = e;
	for (; t = t.parent;) if (_h(t) && eh(e, t) === 0) return t;
}
function _h({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function vh(e) {
	let t = D(Hl), n = D(Ul), r = !1, i = null, a = _(() => {
		let n = ae(e.to);
		return process.env.NODE_ENV !== "production" && (!r || n !== i) && (sm(n) || G.VUE_ROUTER_R0050({ to: n }), i = n, r = !0), t.resolve(n);
	}), o = _(() => {
		let { matched: e } = a.value, { length: t } = e, r = e[t - 1], i = n.matched;
		if (!r || !i.length) return -1;
		let o = i.findIndex(Gp.bind(null, r));
		if (o > -1) return o;
		let s = Ch(e[t - 2]);
		return t > 1 && Ch(r) === s && i[i.length - 1].path !== s ? i.findIndex(Gp.bind(null, e[t - 2])) : o;
	}), s = _(() => o.value > -1 && Sh(n.params, a.value.params)), c = _(() => o.value > -1 && o.value === n.matched.length - 1 && Kp(n.params, a.value.params));
	function l(n = {}) {
		if (xh(n)) {
			let n = t[ae(e.replace) ? "replace" : "push"](ae(e.to)).catch(Ml);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	if (process.env.NODE_ENV !== "production" && _p) {
		let t = T();
		if (t) {
			let n = {
				route: a.value,
				isActive: s.value,
				isExactActive: c.value,
				error: null
			};
			t.__vrl_devtools = t.__vrl_devtools || [], t.__vrl_devtools.push(n), ce(() => {
				n.route = a.value, n.isActive = s.value, n.isExactActive = c.value, n.error = sm(ae(e.to)) ? null : "Invalid \"to\" value";
			}, { flush: "post" });
		}
	}
	return {
		route: a,
		href: _(() => a.value.href),
		isActive: s,
		isExactActive: c,
		navigate: l
	};
}
function yh(e) {
	return e.length === 1 ? e[0] : e;
}
var bh = /* @__PURE__ */ w({
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
	useLink: vh,
	setup(e, { slots: t }) {
		let n = M(vh(e)), { options: r } = D(Hl), i = _(() => ({
			[wh(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[wh(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && yh(t.default(n));
			return e.custom ? r : E("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function xh(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Sh(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!W(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function Ch(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var wh = (e, t, n) => e ?? t ?? n, Th = /*#__PURE__*/ w({
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
		process.env.NODE_ENV !== "production" && Oh();
		let r = D(Wl), i = _(() => e.route || r.value), a = D(Vl, 0), o = _(() => {
			let e = ae(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = _(() => i.value.matched[o.value]);
		j(Vl, _(() => o.value + 1)), j(Bl, s), j(Wl, i);
		let c = ee();
		return se(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Gp(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, l = s.value, u = l && l.components[a];
			if (!u) return Eh(n.default, {
				Component: u,
				route: r
			});
			let d = l.props[a], f = E(u, U({}, d ? d === !0 ? r.params : typeof d == "function" ? d(r) : d : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (l.instances[a] = null);
				},
				ref: c
			}));
			if (process.env.NODE_ENV !== "production" && _p && f.ref) {
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
			return Eh(n.default, {
				Component: f,
				route: r
			}) || f;
		};
	}
});
function Eh(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Dh = Th;
function Oh() {
	let e = T(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
	if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
		let e = t === "KeepAlive" ? "keep-alive" : "transition";
		G.VUE_ROUTER_R0060({ comp: e });
	}
}
function kh(e) {
	let t = ih(e.routes, e), n = e.parseQuery || lm, r = e.stringifyQuery || um, i = e.history;
	if (process.env.NODE_ENV !== "production" && !i) throw Error("Provide the \"history\" option when calling \"createRouter()\": https://router.vuejs.org/api/interfaces/RouterOptions.html#history");
	let a = fm(), o = fm(), s = fm(), c = re(Xp), l = Xp;
	_p && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = jl.bind(null, (e) => "" + e), d = jl.bind(null, Lp), f = jl.bind(null, Rp);
	function p(e, n) {
		let r, i;
		return cm(e) ? (r = t.getRecordMatcher(e), process.env.NODE_ENV !== "production" && !r && G.VUE_ROUTER_R0001({ name: String(e) }), i = n) : i = e, t.addRoute(i, r);
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
			let r = Vp(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return process.env.NODE_ENV !== "production" && (s.startsWith("//") ? G.VUE_ROUTER_R0003({
				location: e,
				href: s
			}) : o.matched.length || G.VUE_ROUTER_R0004({ path: e })), U(r, o, {
				params: f(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		if (process.env.NODE_ENV !== "production" && !sm(e)) return G.VUE_ROUTER_R0005({ rawLocation: e }), _({});
		let o;
		if (e.path != null) process.env.NODE_ENV !== "production" && "params" in e && !("name" in e) && Object.keys(e.params).length && G.VUE_ROUTER_R0006({ path: e.path }), o = U({}, e, { path: Vp(n, e.path, a.path).path });
		else {
			let t = U({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = U({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		process.env.NODE_ENV !== "production" && l && !l.startsWith("#") && G.VUE_ROUTER_R0007({ hash: l }), s.params = u(f(s.params));
		let p = Hp(r, U({}, e, {
			hash: Np(l),
			path: s.path
		})), m = i.createHref(p);
		return process.env.NODE_ENV !== "production" && (m.startsWith("//") ? G.VUE_ROUTER_R0003({
			location: e,
			href: m
		}) : s.matched.length || G.VUE_ROUTER_R0004({ path: e.path == null ? e : e.path })), U({
			fullPath: p,
			hash: l,
			query: r === um ? dm(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? Vp(n, e, c.value.path) : U({}, e);
	}
	function y(e, t) {
		if (l !== e) return Il(8, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return C(e);
	}
	function x(e) {
		return b(U(v(e), { replace: !0 }));
	}
	function S(e, t) {
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
	function C(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = S(n, i);
		if (u) return C(U(v(u), {
			state: typeof u == "object" ? U({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && Wp(r, i, n) && (f = Il(16, {
			to: d,
			from: i
		}), P(i, i, !0, !1)), (f ? Promise.resolve(f) : E(d, i)).catch((e) => Ll(e) ? Ll(e, 2) ? e : oe(e) : N(e, d, i)).then((e) => {
			if (e) {
				if (Ll(e, 2)) return process.env.NODE_ENV !== "production" && Wp(r, _(e.to), d) && t && (t._count = t._count ? t._count + 1 : 1) > 30 ? (G.VUE_ROUTER_R0009({
					from: i.fullPath,
					to: d.fullPath
				}), Promise.reject(/* @__PURE__ */ Error("Infinite redirect in navigation guard"))) : C(U({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? U({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = k(d, i, !0, s, a);
			return D(d, i, e), e;
		});
	}
	function w(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function T(e) {
		let t = le.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function E(e, t) {
		let n, [r, i, s] = _m(e, t);
		n = gm(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(pm(r, e, t));
		});
		let c = w.bind(null, e, t);
		return n.push(c), I(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(pm(r, e, t));
			return n.push(c), I(n);
		}).then(() => {
			n = gm(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(pm(r, e, t));
			});
			return n.push(c), I(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) if (W(r.beforeEnter)) for (let i of r.beforeEnter) n.push(pm(i, e, t));
			else n.push(pm(r.beforeEnter, e, t));
			return n.push(c), I(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = gm(s, "beforeRouteEnter", e, t, T), n.push(c), I(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(pm(r, e, t));
			return n.push(c), I(n);
		}).catch((e) => Ll(e, 8) ? e : Promise.reject(e));
	}
	function D(e, t, n) {
		s.list().forEach((r) => T(() => r(e, t, n)));
	}
	function k(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === Xp, l = _p ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, U({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, P(e, t, n, s), oe();
	}
	let A;
	function j() {
		A ||= i.listen((e, t, n) => {
			if (!F.listening) return;
			let r = _(e), a = S(r, F.currentRoute.value);
			if (a) {
				C(U(a, {
					replace: !0,
					force: !0
				}), r).catch(Ml);
				return;
			}
			l = r;
			let o = c.value;
			_p && am(rm(o.fullPath, n.delta), tm()), E(r, o).catch((e) => Ll(e, 12) ? e : Ll(e, 2) ? (C(U(v(e.to), { force: !0 }), r).then((e) => {
				Ll(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(Ml), Promise.reject()) : (n.delta && i.go(-n.delta, !1), N(e, r, o))).then((e) => {
				e ||= k(r, o, !1), e && (n.delta && !Ll(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && Ll(e, 20) && i.go(-1, !1)), D(r, o, e);
			}).catch(Ml);
		});
	}
	let M = fm(), ee = fm(), te;
	function N(e, t, n) {
		oe(e);
		let r = ee.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : (process.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0010(), console.error(e)), Promise.reject(e);
	}
	function ie() {
		return te && c.value !== Xp ? Promise.resolve() : new Promise((e, t) => {
			M.add([e, t]);
		});
	}
	function oe(e) {
		return te || (te = !e, j(), M.list().forEach(([t, n]) => e ? n(e) : t()), M.reset()), e;
	}
	function P(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!_p || !a) return Promise.resolve();
		let o = !r && om(rm(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return O().then(() => a(t, n, o)).then((e) => t === c.value && e && nm(e)).catch((e) => t === c.value && N(e, t, n));
	}
	let se = (e) => i.go(e), ce, le = /* @__PURE__ */ new Set(), F = {
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
		go: se,
		back: () => se(-1),
		forward: () => se(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: ee.add,
		isReady: ie,
		install(e) {
			e.component("RouterLink", bh), e.component("RouterView", Dh), e.config.globalProperties.$router = F, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => ae(c)
			}), _p && !ce && c.value === Xp && (ce = !0, b(i.location).catch((e) => {
				process.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0011({ cause: e });
			}));
			let n = {};
			for (let e in Xp) Object.defineProperty(n, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Hl, F), e.provide(Ul, ne(n)), e.provide(Wl, c);
			let r = e.unmount;
			le.add(e), e.unmount = function() {
				le.delete(e), le.size < 1 && (l = Xp, A && A(), A = null, c.value = Xp, ce = !1, te = !1), r();
			}, process.env.NODE_ENV !== "production" && _p && xm(e, F, t);
		}
	};
	function I(e) {
		return e.reduce((e, t) => e.then(() => T(t)), Promise.resolve());
	}
	return F;
}
//#endregion
//#region src/App.vue
var Ah = {
	name: "App",
	computed: {
		...h(a, { store_ready: (e) => e.ready }),
		graph_iri: {
			get() {
				return this.selectionStore.graph_iri;
			},
			set(e) {
				this.selectionStore.changeGraphIri(e);
			}
		},
		resource_iri: {
			get() {
				return this.selectionStore.resource_iri;
			},
			set(e) {
				this.selectionStore.changeResourceIri(e);
			}
		}
	},
	components: {
		SparqlConnection: ll,
		GraphList: yl,
		ClassList: xl,
		Splitpanes: f,
		Pane: d,
		RouterLink: bh,
		RouterView: Dh
	},
	methods: { useSelectionStore: i },
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
		console.log("OntoPad-next created"), this.$navigation = this.$navigation || {}, this.$navigation.main = this.$navigation.main || [], this.$navigation.main = [
			{
				to: "/dashboard",
				title: "Home"
			},
			{
				to: "/instances",
				title: "Instances"
			},
			{
				to: "/edit",
				title: "Edit"
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
	},
	setup(e) {
		console.log("OntoPad-next mounted");
		let t = a(), n = i();
		return t.updateEndpointConfiguration(e.config), n.initConfig(e.config), {
			rdfStore: t,
			selectionStore: n
		};
	}
}, jh = { class: "navbar navbar-expand-lg bg-body-tertiary" }, Mh = { class: "container-fluid" }, Nh = {
	class: "navbar-brand",
	href: "#"
}, Ph = {
	class: "collapse navbar-collapse",
	id: "navbarNav"
}, Fh = {
	key: 0,
	class: "d-flex ms-auto me-auto w-75",
	role: "graph-navigation"
}, Ih = { class: "form-floating col-6" }, Lh = { class: "form-floating col-6" }, Rh = { class: "navbar-nav" }, zh = { class: "nav-item" }, Bh = {
	key: 0,
	class: "nav-link"
}, Vh = {
	key: 1,
	class: "nav-link"
}, Hh = { class: "nav-item" }, Uh = { class: "container-fluid" }, Wh = {
	key: 0,
	class: "row"
}, Gh = { class: "nav nav-tabs" }, Kh = { key: 1 };
function qh(e, t, n, r, i, a) {
	let o = N("SparqlConnection"), s = N("GraphList"), c = N("pane"), l = N("ClassList"), u = N("splitpanes"), d = N("RouterLink"), f = N("RouterView");
	return A(), b(g, null, [x("nav", jh, [x("div", Mh, [
		x("a", Nh, [t[2] ||= x("img", {
			src: "/OntoPad/pad/logo.svg",
			alt: "{{ title }}",
			width: "30",
			height: "24"
		}, null, -1), S(" " + ie(n.title), 1)]),
		t[5] ||= x("button", {
			class: "navbar-toggler",
			type: "button",
			"data-bs-toggle": "collapse",
			"data-bs-target": "#navbarNav",
			"aria-controls": "navbarNav",
			"aria-expanded": "false",
			"aria-label": "Toggle navigation"
		}, [x("span", { class: "navbar-toggler-icon" })], -1),
		x("div", Ph, [e.store_ready ? (A(), b("form", Fh, [x("div", Ih, [F(x("input", {
			type: "text",
			class: "form-control",
			id: "graph_iri",
			"aria-label": "Graph IRI",
			"onUpdate:modelValue": t[0] ||= (e) => a.graph_iri = e,
			placeholder: "Graph IRI"
		}, null, 512), [[P, a.graph_iri]]), t[3] ||= x("label", { for: "graph_iri" }, "Graph IRI", -1)]), x("div", Lh, [F(x("input", {
			type: "text",
			class: "form-control",
			id: "resource_iri",
			"aria-label": "Resource IRI",
			"onUpdate:modelValue": t[1] ||= (e) => a.resource_iri = e,
			placeholder: "Resource IRI"
		}, null, 512), [[P, a.resource_iri]]), t[4] ||= x("label", { for: "resource_iri" }, "Resource IRI", -1)])])) : y("", !0), x("ul", Rh, [x("li", zh, [e.store_ready ? (A(), b("span", Bh, "🟢 Store is ready")) : (A(), b("span", Vh, "🔄 Loading"))]), x("li", Hh, [C(o)])])])
	])]), x("div", Uh, [e.store_ready ? (A(), b("div", Wh, [C(u, { class: "default-theme" }, {
		default: le(() => [C(c, { size: "30" }, {
			default: le(() => [C(u, {
				horizontal: "",
				style: { height: "80vh" }
			}, {
				default: le(() => [C(c, { size: "30" }, {
					default: le(() => [C(s, {
						graph_iri: a.graph_iri,
						selectGraph: (e) => {
							a.useSelectionStore().changeGraphIri(e), a.useSelectionStore().changeResourceIri(e);
						}
					}, null, 8, ["graph_iri", "selectGraph"])]),
					_: 1
				}), C(c, { size: "70" }, {
					default: le(() => [C(l, {
						class_iri: a.resource_iri,
						selectClass: (e) => {
							a.useSelectionStore().changeResourceIri(e);
						}
					}, null, 8, ["class_iri", "selectClass"])]),
					_: 1
				})]),
				_: 1
			})]),
			_: 1
		}), C(c, { size: "90" }, {
			default: le(() => [x("ul", Gh, [(A(!0), b(g, null, te(e.$navigation.main, (e, t) => (A(), b("li", {
				key: t,
				class: "nav-item"
			}, [C(d, {
				class: "nav-link",
				"active-class": "active",
				to: e.to
			}, {
				default: le(() => [S(ie(e.title), 1)]),
				_: 2
			}, 1032, ["to"])]))), 128))]), C(f)]),
			_: 1
		})]),
		_: 1
	})])) : (A(), b("div", Kh, " Waiting for Store to be configured … "))])], 64);
}
var Jh = /*#__PURE__*/ o(Ah, [["render", qh], ["__scopeId", "data-v-6a99b717"]]), Yh = kh({
	history: Gm("/OntoPad/pad/"),
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
			component: () => import("./DashboardView-CQl_3xpP.js")
		},
		{
			path: "/instances",
			name: "InstanceList",
			component: () => import("./InstanceList-Dcryss9Q.js").then((e) => e.t)
		},
		{
			path: "/edit",
			name: "EditForm",
			component: () => import("./EditForm-lyYthlMP.js")
		},
		{
			path: "/add",
			name: "InputForm",
			component: () => import("./InputForm-VtdTg9c4.js")
		},
		{
			path: "/source",
			name: "Source",
			component: () => import("./Source-BQ_njD0B.js")
		}
	]
});
//#endregion
//#region src/helpers/plugin.js
function Xh(e, t) {
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
export { c as InstanceList, Jh as OntoPad, Yh as OntoPadRouter, p as Term, u as TermInput, m as diff, r as getResourceQuery, t as quadStreamToString, Xh as register, s as usePrefixesStore, a as useRdfStore, i as useSelectionStore };
