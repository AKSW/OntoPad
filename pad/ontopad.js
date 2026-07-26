import { D as e, L as t, M as n, N as r, O as i, S as a, i as o, j as s, n as c, r as l, t as u, w as d } from "./rdf-O-dOZMGs.js";
import { t as f } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as p } from "./prefixes-Cxd5DCXT.js";
import { n as m, r as h } from "./InstanceList-DL0ta8l3.js";
import { t as g } from "./TermInput-CKePcYiT.js";
import { n as _, r as v, t as y } from "./Term-D9HhZu2s.js";
import { t as b } from "./n3-compare-Dt_o6ZFO.js";
import { mapState as x } from "pinia";
import { Fragment as S, computed as C, createBlock as w, createCommentVNode as T, createElementBlock as E, createElementVNode as D, createTextVNode as O, createVNode as k, defineComponent as A, getCurrentInstance as j, h as M, inject as ee, nextTick as te, normalizeClass as ne, openBlock as N, provide as re, reactive as ie, ref as ae, renderList as oe, resolveComponent as P, shallowReactive as se, shallowRef as ce, toDisplayString as le, unref as ue, vModelRadio as F, vModelText as I, watch as de, watchEffect as fe, withCtx as pe, withDirectives as L } from "vue";
var me = "bottom", he = "right", ge = "left", _e = "auto", ve = [
	"top",
	me,
	he,
	ge
], ye = "start", be = "clippingParents", xe = "viewport", Se = "popper", Ce = "reference", we = /*#__PURE__*/ ve.reduce(function(e, t) {
	return e.concat([t + "-" + ye, t + "-end"]);
}, []), Te = /*#__PURE__*/ [].concat(ve, [_e]).reduce(function(e, t) {
	return e.concat([
		t,
		t + "-" + ye,
		t + "-end"
	]);
}, []), Ee = "beforeRead", De = "read", Oe = "afterRead", ke = "beforeMain", Ae = "main", je = "afterMain", Me = "beforeWrite", Ne = "write", Pe = "afterWrite", Fe = [
	Ee,
	De,
	Oe,
	ke,
	Ae,
	je,
	Me,
	Ne,
	Pe
];
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function Ie(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function R(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return t && t.defaultView || window;
	}
	return e;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function Le(e) {
	return e instanceof R(e).Element || e instanceof Element;
}
function Re(e) {
	return e instanceof R(e).HTMLElement || e instanceof HTMLElement;
}
function ze(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof R(e).ShadowRoot || e instanceof ShadowRoot;
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function Be(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function(e) {
		var n = t.styles[e] || {}, r = t.attributes[e] || {}, i = t.elements[e];
		!Re(i) || !Ie(i) || (Object.assign(i.style, n), Object.keys(r).forEach(function(e) {
			var t = r[e];
			t === !1 ? i.removeAttribute(e) : i.setAttribute(e, t === !0 ? "" : t);
		}));
	});
}
function Ve(e) {
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
			!Re(r) || !Ie(r) || (Object.assign(r.style, a), Object.keys(i).forEach(function(e) {
				r.removeAttribute(e);
			}));
		});
	};
}
var He = {
	name: "applyStyles",
	enabled: !0,
	phase: "write",
	fn: Be,
	effect: Ve,
	requires: ["computeStyles"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function Ue(e) {
	return e.split("-")[0];
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/math.js
var We = Math.max, Ge = Math.min, Ke = Math.round;
//#endregion
//#region node_modules/@popperjs/core/lib/utils/userAgent.js
function qe() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
		return e.brand + "/" + e.version;
	}).join(" ") : navigator.userAgent;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function Je() {
	return !/^((?!chrome|android).)*safari/i.test(qe());
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function Ye(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(), i = 1, a = 1;
	t && Re(e) && (i = e.offsetWidth > 0 && Ke(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ke(r.height) / e.offsetHeight || 1);
	var o = (Le(e) ? R(e) : window).visualViewport, s = !Je() && n, c = (r.left + (s && o ? o.offsetLeft : 0)) / i, l = (r.top + (s && o ? o.offsetTop : 0)) / a, u = r.width / i, d = r.height / a;
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
function Xe(e) {
	var t = Ye(e), n = e.offsetWidth, r = e.offsetHeight;
	return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
		x: e.offsetLeft,
		y: e.offsetTop,
		width: n,
		height: r
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/contains.js
function Ze(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && ze(n)) {
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
function Qe(e) {
	return R(e).getComputedStyle(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function $e(e) {
	return [
		"table",
		"td",
		"th"
	].indexOf(Ie(e)) >= 0;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function et(e) {
	return ((Le(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function tt(e) {
	return Ie(e) === "html" ? e : e.assignedSlot || e.parentNode || (ze(e) ? e.host : null) || et(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function nt(e) {
	return !Re(e) || Qe(e).position === "fixed" ? null : e.offsetParent;
}
function rt(e) {
	var t = /firefox/i.test(qe());
	if (/Trident/i.test(qe()) && Re(e) && Qe(e).position === "fixed") return null;
	var n = tt(e);
	for (ze(n) && (n = n.host); Re(n) && ["html", "body"].indexOf(Ie(n)) < 0;) {
		var r = Qe(n);
		if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return n;
		n = n.parentNode;
	}
	return null;
}
function it(e) {
	for (var t = R(e), n = nt(e); n && $e(n) && Qe(n).position === "static";) n = nt(n);
	return n && (Ie(n) === "html" || Ie(n) === "body" && Qe(n).position === "static") ? t : n || rt(e) || t;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function at(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/within.js
function ot(e, t, n) {
	return We(e, Ge(t, n));
}
function st(e, t, n) {
	var r = ot(e, t, n);
	return r > n ? n : r;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function ct() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function lt(e) {
	return Object.assign({}, ct(), e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function ut(e, t) {
	return t.reduce(function(t, n) {
		return t[n] = e, t;
	}, {});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/arrow.js
var dt = function(e, t) {
	return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, lt(typeof e == "number" ? ut(e, ve) : e);
};
function ft(e) {
	var t, n = e.state, r = e.name, i = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, s = Ue(n.placement), c = at(s), l = ["left", "right"].indexOf(s) >= 0 ? "height" : "width";
	if (!(!a || !o)) {
		var u = dt(i.padding, n), d = Xe(a), f = c === "y" ? "top" : ge, p = c === "y" ? me : he, m = n.rects.reference[l] + n.rects.reference[c] - o[c] - n.rects.popper[l], h = o[c] - n.rects.reference[c], g = it(a), _ = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = m / 2 - h / 2, y = u[f], b = _ - d[l] - u[p], x = _ / 2 - d[l] / 2 + v, S = ot(y, x, b), C = c;
		n.modifiersData[r] = (t = {}, t[C] = S, t.centerOffset = S - x, t);
	}
}
function pt(e) {
	var t = e.state, n = e.options.element, r = n === void 0 ? "[data-popper-arrow]" : n;
	r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Ze(t.elements.popper, r) && (t.elements.arrow = r));
}
var mt = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: ft,
	effect: pt,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getVariation.js
function ht(e) {
	return e.split("-")[1];
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var gt = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function _t(e, t) {
	var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
	return {
		x: Ke(n * i) / i || 0,
		y: Ke(r * i) / i || 0
	};
}
function vt(e) {
	var t, n = e.popper, r = e.popperRect, i = e.placement, a = e.variation, o = e.offsets, s = e.position, c = e.gpuAcceleration, l = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, p = f === void 0 ? 0 : f, m = o.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
		x: p,
		y: h
	}) : {
		x: p,
		y: h
	};
	p = g.x, h = g.y;
	var _ = o.hasOwnProperty("x"), v = o.hasOwnProperty("y"), y = ge, b = "top", x = window;
	if (l) {
		var S = it(n), C = "clientHeight", w = "clientWidth";
		if (S === R(n) && (S = et(n), Qe(S).position !== "static" && s === "absolute" && (C = "scrollHeight", w = "scrollWidth")), S = S, i === "top" || (i === "left" || i === "right") && a === "end") {
			b = me;
			var T = d && S === x && x.visualViewport ? x.visualViewport.height : S[C];
			h -= T - r.height, h *= c ? 1 : -1;
		}
		if (i === "left" || (i === "top" || i === "bottom") && a === "end") {
			y = he;
			var E = d && S === x && x.visualViewport ? x.visualViewport.width : S[w];
			p -= E - r.width, p *= c ? 1 : -1;
		}
	}
	var D = Object.assign({ position: s }, l && gt), O = u === !0 ? _t({
		x: p,
		y: h
	}, R(n)) : {
		x: p,
		y: h
	};
	if (p = O.x, h = O.y, c) {
		var k;
		return Object.assign({}, D, (k = {}, k[b] = v ? "0" : "", k[y] = _ ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
	}
	return Object.assign({}, D, (t = {}, t[b] = v ? h + "px" : "", t[y] = _ ? p + "px" : "", t.transform = "", t));
}
function yt(e) {
	var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 || r, a = n.adaptive, o = a === void 0 || a, s = n.roundOffsets, c = s === void 0 || s, l = {
		placement: Ue(t.placement),
		variation: ht(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: i,
		isFixed: t.options.strategy === "fixed"
	};
	t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, vt(Object.assign({}, l, {
		offsets: t.modifiersData.popperOffsets,
		position: t.options.strategy,
		adaptive: o,
		roundOffsets: c
	})))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, vt(Object.assign({}, l, {
		offsets: t.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: c
	})))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var bt = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: yt,
	data: {}
}, xt = { passive: !0 };
function St(e) {
	var t = e.state, n = e.instance, r = e.options, i = r.scroll, a = i === void 0 || i, o = r.resize, s = o === void 0 || o, c = R(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return a && l.forEach(function(e) {
		e.addEventListener("scroll", n.update, xt);
	}), s && c.addEventListener("resize", n.update, xt), function() {
		a && l.forEach(function(e) {
			e.removeEventListener("scroll", n.update, xt);
		}), s && c.removeEventListener("resize", n.update, xt);
	};
}
var Ct = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function() {},
	effect: St,
	data: {}
}, wt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Tt(e) {
	return e.replace(/left|right|bottom|top/g, function(e) {
		return wt[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var Et = {
	start: "end",
	end: "start"
};
function Dt(e) {
	return e.replace(/start|end/g, function(e) {
		return Et[e];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function Ot(e) {
	var t = R(e);
	return {
		scrollLeft: t.pageXOffset,
		scrollTop: t.pageYOffset
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function kt(e) {
	return Ye(et(e)).left + Ot(e).scrollLeft;
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function At(e, t) {
	var n = R(e), r = et(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		var l = Je();
		(l || !l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	return {
		width: a,
		height: o,
		x: s + kt(e),
		y: c
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function jt(e) {
	var t = et(e), n = Ot(e), r = e.ownerDocument?.body, i = We(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = We(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), o = -n.scrollLeft + kt(e), s = -n.scrollTop;
	return Qe(r || t).direction === "rtl" && (o += We(t.clientWidth, r ? r.clientWidth : 0) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function Mt(e) {
	var t = Qe(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + i + r);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function Nt(e) {
	return [
		"html",
		"body",
		"#document"
	].indexOf(Ie(e)) >= 0 ? e.ownerDocument.body : Re(e) && Mt(e) ? e : Nt(tt(e));
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function Pt(e, t) {
	t === void 0 && (t = []);
	var n = Nt(e), r = n === e.ownerDocument?.body, i = R(n), a = r ? [i].concat(i.visualViewport || [], Mt(n) ? n : []) : n, o = t.concat(a);
	return r ? o : o.concat(Pt(tt(a)));
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function Ft(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function It(e, t) {
	var n = Ye(e, !1, t === "fixed");
	return n.top += e.clientTop, n.left += e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Lt(e, t, n) {
	return t === "viewport" ? Ft(At(e, n)) : Le(t) ? It(t, n) : Ft(jt(et(e)));
}
function Rt(e) {
	var t = Pt(tt(e)), n = ["absolute", "fixed"].indexOf(Qe(e).position) >= 0 && Re(e) ? it(e) : e;
	return Le(n) ? t.filter(function(e) {
		return Le(e) && Ze(e, n) && Ie(e) !== "body";
	}) : [];
}
function zt(e, t, n, r) {
	var i = t === "clippingParents" ? Rt(e) : [].concat(t), a = [].concat(i, [n]), o = a[0], s = a.reduce(function(t, n) {
		var i = Lt(e, n, r);
		return t.top = We(i.top, t.top), t.right = Ge(i.right, t.right), t.bottom = Ge(i.bottom, t.bottom), t.left = We(i.left, t.left), t;
	}, Lt(e, o, r));
	return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/computeOffsets.js
function Bt(e) {
	var t = e.reference, n = e.element, r = e.placement, i = r ? Ue(r) : null, a = r ? ht(r) : null, o = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, c;
	switch (i) {
		case "top":
			c = {
				x: o,
				y: t.y - n.height
			};
			break;
		case me:
			c = {
				x: o,
				y: t.y + t.height
			};
			break;
		case he:
			c = {
				x: t.x + t.width,
				y: s
			};
			break;
		case ge:
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
	var l = i ? at(i) : null;
	if (l != null) {
		var u = l === "y" ? "height" : "width";
		switch (a) {
			case ye:
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
function Vt(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, s = n.boundary, c = s === void 0 ? be : s, l = n.rootBoundary, u = l === void 0 ? xe : l, d = n.elementContext, f = d === void 0 ? Se : d, p = n.altBoundary, m = p !== void 0 && p, h = n.padding, g = h === void 0 ? 0 : h, _ = lt(typeof g == "number" ? ut(g, ve) : g), v = f === "popper" ? Ce : Se, y = e.rects.popper, b = e.elements[m ? v : f], x = zt(Le(b) ? b : b.contextElement || et(e.elements.popper), c, u, o), S = Ye(e.elements.reference), C = Bt({
		reference: S,
		element: y,
		strategy: "absolute",
		placement: i
	}), w = Ft(Object.assign({}, y, C)), T = f === "popper" ? w : S, E = {
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
function Ht(e, t) {
	t === void 0 && (t = {});
	var n = t, r = n.placement, i = n.boundary, a = n.rootBoundary, o = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, l = c === void 0 ? Te : c, u = ht(r), d = u ? s ? we : we.filter(function(e) {
		return ht(e) === u;
	}) : ve, f = d.filter(function(e) {
		return l.indexOf(e) >= 0;
	});
	f.length === 0 && (f = d);
	var p = f.reduce(function(t, n) {
		return t[n] = Vt(e, {
			placement: n,
			boundary: i,
			rootBoundary: a,
			padding: o
		})[Ue(n)], t;
	}, {});
	return Object.keys(p).sort(function(e, t) {
		return p[e] - p[t];
	});
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/flip.js
function Ut(e) {
	if (Ue(e) === "auto") return [];
	var t = Tt(e);
	return [
		Dt(e),
		t,
		Dt(t)
	];
}
function Wt(e) {
	var t = e.state, n = e.options, r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (var i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o === void 0 || o, c = n.fallbackPlacements, l = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, m = p === void 0 || p, h = n.allowedAutoPlacements, g = t.options.placement, _ = Ue(g) === g, v = c || (_ || !m ? [Tt(g)] : Ut(g)), y = [g].concat(v).reduce(function(e, n) {
			return e.concat(Ue(n) === "auto" ? Ht(t, {
				placement: n,
				boundary: u,
				rootBoundary: d,
				padding: l,
				flipVariations: m,
				allowedAutoPlacements: h
			}) : n);
		}, []), b = t.rects.reference, x = t.rects.popper, S = /* @__PURE__ */ new Map(), C = !0, w = y[0], T = 0; T < y.length; T++) {
			var E = y[T], D = Ue(E), O = ht(E) === ye, k = ["top", me].indexOf(D) >= 0, A = k ? "width" : "height", j = Vt(t, {
				placement: E,
				boundary: u,
				rootBoundary: d,
				altBoundary: f,
				padding: l
			}), M = k ? O ? he : ge : O ? me : "top";
			b[A] > x[A] && (M = Tt(M));
			var ee = Tt(M), te = [];
			if (a && te.push(j[D] <= 0), s && te.push(j[M] <= 0, j[ee] <= 0), te.every(function(e) {
				return e;
			})) {
				w = E, C = !1;
				break;
			}
			S.set(E, te);
		}
		if (C) for (var ne = m ? 3 : 1, N = function(e) {
			var t = y.find(function(t) {
				var n = S.get(t);
				if (n) return n.slice(0, e).every(function(e) {
					return e;
				});
			});
			if (t) return w = t, "break";
		}, re = ne; re > 0 && N(re) !== "break"; re--);
		t.placement !== w && (t.modifiersData[r]._skip = !0, t.placement = w, t.reset = !0);
	}
}
var Gt = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: Wt,
	requiresIfExists: ["offset"],
	data: { _skip: !1 }
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/hide.js
function Kt(e, t, n) {
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
function qt(e) {
	return [
		"top",
		he,
		me,
		ge
	].some(function(t) {
		return e[t] >= 0;
	});
}
function Jt(e) {
	var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, a = t.modifiersData.preventOverflow, o = Vt(t, { elementContext: "reference" }), s = Vt(t, { altBoundary: !0 }), c = Kt(o, r), l = Kt(s, i, a), u = qt(c), d = qt(l);
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
var Yt = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: Jt
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/offset.js
function Xt(e, t, n) {
	var r = Ue(e), i = ["left", "top"].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, o = a[0], s = a[1];
	return o ||= 0, s = (s || 0) * i, ["left", "right"].indexOf(r) >= 0 ? {
		x: s,
		y: o
	} : {
		x: o,
		y: s
	};
}
function Zt(e) {
	var t = e.state, n = e.options, r = e.name, i = n.offset, a = i === void 0 ? [0, 0] : i, o = Te.reduce(function(e, n) {
		return e[n] = Xt(n, t.rects, a), e;
	}, {}), s = o[t.placement], c = s.x, l = s.y;
	t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = o;
}
var Qt = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: Zt
};
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function $t(e) {
	var t = e.state, n = e.name;
	t.modifiersData[n] = Bt({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement
	});
}
var en = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: $t,
	data: {}
};
//#endregion
//#region node_modules/@popperjs/core/lib/utils/getAltAxis.js
function tn(e) {
	return e === "x" ? "y" : "x";
}
//#endregion
//#region node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function nn(e) {
	var t = e.state, n = e.options, r = e.name, i = n.mainAxis, a = i === void 0 || i, o = n.altAxis, s = o !== void 0 && o, c = n.boundary, l = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 || f, m = n.tetherOffset, h = m === void 0 ? 0 : m, g = Vt(t, {
		boundary: c,
		rootBoundary: l,
		padding: d,
		altBoundary: u
	}), _ = Ue(t.placement), v = ht(t.placement), y = !v, b = at(_), x = tn(b), S = t.modifiersData.popperOffsets, C = t.rects.reference, w = t.rects.popper, T = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, E = typeof T == "number" ? {
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
			var k = b === "y" ? "top" : ge, A = b === "y" ? me : he, j = b === "y" ? "height" : "width", M = S[b], ee = M + g[k], te = M - g[A], ne = p ? -w[j] / 2 : 0, N = v === "start" ? C[j] : w[j], re = v === "start" ? -w[j] : -C[j], ie = t.elements.arrow, ae = p && ie ? Xe(ie) : {
				width: 0,
				height: 0
			}, oe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ct(), P = oe[k], se = oe[A], ce = ot(0, C[j], ae[j]), le = y ? C[j] / 2 - ne - ce - P - E.mainAxis : N - ce - P - E.mainAxis, ue = y ? -C[j] / 2 + ne + ce + se + E.mainAxis : re + ce + se + E.mainAxis, F = t.elements.arrow && it(t.elements.arrow), I = F ? b === "y" ? F.clientTop || 0 : F.clientLeft || 0 : 0, de = D?.[b] ?? 0, fe = M + le - de - I, pe = M + ue - de, L = ot(p ? Ge(ee, fe) : ee, M, p ? We(te, pe) : te);
			S[b] = L, O[b] = L - M;
		}
		if (s) {
			var _e = b === "x" ? "top" : ge, ve = b === "x" ? me : he, ye = S[x], be = x === "y" ? "height" : "width", xe = ye + g[_e], Se = ye - g[ve], Ce = ["top", ge].indexOf(_) !== -1, we = D?.[x] ?? 0, Te = Ce ? xe : ye - C[be] - w[be] - we + E.altAxis, Ee = Ce ? ye + C[be] + w[be] - we - E.altAxis : Se, De = p && Ce ? st(Te, ye, Ee) : ot(p ? Te : xe, ye, p ? Ee : Se);
			S[x] = De, O[x] = De - ye;
		}
		t.modifiersData[r] = O;
	}
}
var rn = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: nn,
	requiresIfExists: ["offset"]
};
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function an(e) {
	return {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function on(e) {
	return e === R(e) || !Re(e) ? Ot(e) : an(e);
}
//#endregion
//#region node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function sn(e) {
	var t = e.getBoundingClientRect(), n = Ke(t.width) / e.offsetWidth || 1, r = Ke(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function cn(e, t, n) {
	n === void 0 && (n = !1);
	var r = Re(t), i = Re(t) && sn(t), a = et(t), o = Ye(e, i, n), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = {
		x: 0,
		y: 0
	};
	return (r || !r && !n) && ((Ie(t) !== "body" || Mt(a)) && (s = on(t)), Re(t) ? (c = Ye(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = kt(a))), {
		x: o.left + s.scrollLeft - c.x,
		y: o.top + s.scrollTop - c.y,
		width: o.width,
		height: o.height
	};
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/orderModifiers.js
function ln(e) {
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
function un(e) {
	var t = ln(e);
	return Fe.reduce(function(e, n) {
		return e.concat(t.filter(function(e) {
			return e.phase === n;
		}));
	}, []);
}
//#endregion
//#region node_modules/@popperjs/core/lib/utils/debounce.js
function dn(e) {
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
function fn(e) {
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
var pn = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function mn() {
	return ![...arguments].some(function(e) {
		return !(e && typeof e.getBoundingClientRect == "function");
	});
}
function hn(e) {
	e === void 0 && (e = {});
	var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, a = i === void 0 ? pn : i;
	return function(e, t, n) {
		n === void 0 && (n = a);
		var i = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, pn, a),
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
					reference: Le(e) ? Pt(e) : e.contextElement ? Pt(e.contextElement) : [],
					popper: Pt(t)
				};
				var s = un(fn([].concat(r, i.options.modifiers)));
				return i.orderedModifiers = s.filter(function(e) {
					return e.enabled;
				}), l(), c.update();
			},
			forceUpdate: function() {
				if (!s) {
					var e = i.elements, t = e.reference, n = e.popper;
					if (mn(t, n)) {
						i.rects = {
							reference: cn(t, it(n), i.options.strategy === "fixed"),
							popper: Xe(n)
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
			update: dn(function() {
				return new Promise(function(e) {
					c.forceUpdate(), e(i);
				});
			}),
			destroy: function() {
				u(), s = !0;
			}
		};
		if (!mn(e, t)) return c;
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
var gn = /*#__PURE__*/ hn(), _n = /*#__PURE__*/ hn({ defaultModifiers: [
	Ct,
	en,
	bt,
	He
] }), vn = /*#__PURE__*/ hn({ defaultModifiers: [
	Ct,
	en,
	bt,
	He,
	Qt,
	Gt,
	rn,
	mt,
	Yt
] }), yn = /* @__PURE__ */ t({
	afterMain: () => je,
	afterRead: () => Oe,
	afterWrite: () => Pe,
	applyStyles: () => He,
	arrow: () => mt,
	auto: () => _e,
	basePlacements: () => ve,
	beforeMain: () => ke,
	beforeRead: () => Ee,
	beforeWrite: () => Me,
	bottom: () => me,
	clippingParents: () => be,
	computeStyles: () => bt,
	createPopper: () => vn,
	createPopperBase: () => gn,
	createPopperLite: () => _n,
	detectOverflow: () => Vt,
	end: () => "end",
	eventListeners: () => Ct,
	flip: () => Gt,
	hide: () => Yt,
	left: () => ge,
	main: () => Ae,
	modifierPhases: () => Fe,
	offset: () => Qt,
	placements: () => Te,
	popper: () => Se,
	popperGenerator: () => hn,
	popperOffsets: () => en,
	preventOverflow: () => rn,
	read: () => De,
	reference: () => Ce,
	right: () => he,
	start: () => ye,
	top: () => "top",
	variationPlacements: () => we,
	viewport: () => xe,
	write: () => Ne
}), bn = /* @__PURE__ */ new Map(), xn = {
	set(e, t, n) {
		bn.has(e) || bn.set(e, /* @__PURE__ */ new Map());
		let r = bn.get(e);
		if (!r.has(t) && r.size !== 0) {
			console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);
			return;
		}
		r.set(t, n);
	},
	get(e, t) {
		return bn.has(e) && bn.get(e).get(t) || null;
	},
	remove(e, t) {
		if (!bn.has(e)) return;
		let n = bn.get(e);
		n.delete(t), n.size === 0 && bn.delete(e);
	}
}, Sn = 1e6, Cn = 1e3, wn = "transitionend", Tn = (e) => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), e), En = (e) => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), Dn = (e) => {
	do
		e += Math.floor(Math.random() * Sn);
	while (document.getElementById(e));
	return e;
}, On = (e) => {
	if (!e) return 0;
	let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
	return !Number.parseFloat(t) && !Number.parseFloat(n) ? 0 : (t = t.split(",")[0], n = n.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(n)) * Cn);
}, kn = (e) => {
	e.dispatchEvent(new Event(wn));
}, An = (e) => !e || typeof e != "object" ? !1 : (e.jquery !== void 0 && (e = e[0]), e.nodeType !== void 0), jn = (e) => An(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Tn(e)) : null, Mn = (e) => {
	if (!An(e) || e.getClientRects().length === 0) return !1;
	let t = getComputedStyle(e).getPropertyValue("visibility") === "visible", n = e.closest("details:not([open])");
	if (!n) return t;
	if (n !== e) {
		let t = e.closest("summary");
		if (t && t.parentNode !== n || t === null) return !1;
	}
	return t;
}, Nn = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : e.disabled === void 0 ? e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false" : e.disabled, Pn = (e) => {
	if (!document.documentElement.attachShadow) return null;
	if (typeof e.getRootNode == "function") {
		let t = e.getRootNode();
		return t instanceof ShadowRoot ? t : null;
	}
	return e instanceof ShadowRoot ? e : e.parentNode ? Pn(e.parentNode) : null;
}, Fn = () => {}, In = (e) => {
	e.offsetHeight;
}, Ln = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Rn = [], zn = (e) => {
	document.readyState === "loading" ? (Rn.length || document.addEventListener("DOMContentLoaded", () => {
		for (let e of Rn) e();
	}), Rn.push(e)) : e();
}, Bn = () => document.documentElement.dir === "rtl", z = (e) => {
	zn(() => {
		let t = Ln();
		/* istanbul ignore if */
		if (t) {
			let n = e.NAME, r = t.fn[n];
			t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface);
		}
	});
}, B = (e, t = [], n = e) => typeof e == "function" ? e.call(...t) : n, Vn = (e, t, n = !0) => {
	if (!n) {
		B(e);
		return;
	}
	let r = On(t) + 5, i = !1, a = ({ target: n }) => {
		n === t && (i = !0, t.removeEventListener(wn, a), B(e));
	};
	t.addEventListener(wn, a), setTimeout(() => {
		i || kn(t);
	}, r);
}, Hn = (e, t, n, r) => {
	let i = e.length, a = e.indexOf(t);
	return a === -1 ? !n && r ? e[i - 1] : e[0] : (a += n ? 1 : -1, r && (a = (a + i) % i), e[Math.max(0, Math.min(a, i - 1))]);
}, Un = /[^.]*(?=\..*)\.|.*/, Wn = /\..*/, Gn = /::\d+$/, Kn = {}, qn = 1, Jn = {
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, Yn = /* @__PURE__ */ new Set(/* @__PURE__ */ "click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll".split("."));
function Xn(e, t) {
	return t && `${t}::${qn++}` || e.uidEvent || qn++;
}
function Zn(e) {
	let t = Xn(e);
	return e.uidEvent = t, Kn[t] = Kn[t] || {}, Kn[t];
}
function Qn(e, t) {
	return function n(r) {
		return or(r, { delegateTarget: e }), n.oneOff && V.off(e, r.type, t), t.apply(e, [r]);
	};
}
function $n(e, t, n) {
	return function r(i) {
		let a = e.querySelectorAll(t);
		for (let { target: o } = i; o && o !== this; o = o.parentNode) for (let s of a) if (s === o) return or(i, { delegateTarget: o }), r.oneOff && V.off(e, i.type, t, n), n.apply(o, [i]);
	};
}
function er(e, t, n = null) {
	return Object.values(e).find((e) => e.callable === t && e.delegationSelector === n);
}
function tr(e, t, n) {
	let r = typeof t == "string", i = r ? n : t || n, a = ar(e);
	return Yn.has(a) || (a = e), [
		r,
		i,
		a
	];
}
function nr(e, t, n, r, i) {
	if (typeof t != "string" || !e) return;
	let [a, o, s] = tr(t, n, r);
	t in Jn && (o = ((e) => function(t) {
		if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
	})(o));
	let c = Zn(e), l = c[s] || (c[s] = {}), u = er(l, o, a ? n : null);
	if (u) {
		u.oneOff = u.oneOff && i;
		return;
	}
	let d = Xn(o, t.replace(Un, "")), f = a ? $n(e, n, o) : Qn(e, o);
	f.delegationSelector = a ? n : null, f.callable = o, f.oneOff = i, f.uidEvent = d, l[d] = f, e.addEventListener(s, f, a);
}
function rr(e, t, n, r, i) {
	let a = er(t[n], r, i);
	a && (e.removeEventListener(n, a, !!i), delete t[n][a.uidEvent]);
}
function ir(e, t, n, r) {
	let i = t[n] || {};
	for (let [a, o] of Object.entries(i)) a.includes(r) && rr(e, t, n, o.callable, o.delegationSelector);
}
function ar(e) {
	return e = e.replace(Wn, ""), Jn[e] || e;
}
var V = {
	on(e, t, n, r) {
		nr(e, t, n, r, !1);
	},
	one(e, t, n, r) {
		nr(e, t, n, r, !0);
	},
	off(e, t, n, r) {
		if (typeof t != "string" || !e) return;
		let [i, a, o] = tr(t, n, r), s = o !== t, c = Zn(e), l = c[o] || {}, u = t.startsWith(".");
		if (a !== void 0) {
			if (!Object.keys(l).length) return;
			rr(e, c, o, a, i ? n : null);
			return;
		}
		if (u) for (let n of Object.keys(c)) ir(e, c, n, t.slice(1));
		for (let [n, r] of Object.entries(l)) {
			let i = n.replace(Gn, "");
			(!s || t.includes(i)) && rr(e, c, o, r.callable, r.delegationSelector);
		}
	},
	trigger(e, t, n) {
		if (typeof t != "string" || !e) return null;
		let r = Ln(), i = t !== ar(t), a = null, o = !0, s = !0, c = !1;
		i && r && (a = r.Event(t, n), r(e).trigger(a), o = !a.isPropagationStopped(), s = !a.isImmediatePropagationStopped(), c = a.isDefaultPrevented());
		let l = or(new Event(t, {
			bubbles: o,
			cancelable: !0
		}), n);
		return c && l.preventDefault(), s && e.dispatchEvent(l), l.defaultPrevented && a && a.preventDefault(), l;
	}
};
function or(e, t = {}) {
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
function sr(e) {
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
function cr(e) {
	return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
var lr = {
	setDataAttribute(e, t, n) {
		e.setAttribute(`data-bs-${cr(t)}`, n);
	},
	removeDataAttribute(e, t) {
		e.removeAttribute(`data-bs-${cr(t)}`);
	},
	getDataAttributes(e) {
		if (!e) return {};
		let t = {}, n = Object.keys(e.dataset).filter((e) => e.startsWith("bs") && !e.startsWith("bsConfig"));
		for (let r of n) {
			let n = r.replace(/^bs/, "");
			n = n.charAt(0).toLowerCase() + n.slice(1), t[n] = sr(e.dataset[r]);
		}
		return t;
	},
	getDataAttribute(e, t) {
		return sr(e.getAttribute(`data-bs-${cr(t)}`));
	}
}, ur = class {
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
		let n = An(t) ? lr.getDataAttribute(t, "config") : {};
		return {
			...this.constructor.Default,
			...typeof n == "object" ? n : {},
			...An(t) ? lr.getDataAttributes(t) : {},
			...typeof e == "object" ? e : {}
		};
	}
	_typeCheckConfig(e, t = this.constructor.DefaultType) {
		for (let [n, r] of Object.entries(t)) {
			let t = e[n], i = An(t) ? "element" : En(t);
			if (!new RegExp(r).test(i)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`);
		}
	}
}, dr = "5.3.8", fr = class extends ur {
	constructor(e, t) {
		super(), e = jn(e), e && (this._element = e, this._config = this._getConfig(t), xn.set(this._element, this.constructor.DATA_KEY, this));
	}
	dispose() {
		xn.remove(this._element, this.constructor.DATA_KEY), V.off(this._element, this.constructor.EVENT_KEY);
		for (let e of Object.getOwnPropertyNames(this)) this[e] = null;
	}
	_queueCallback(e, t, n = !0) {
		Vn(e, t, n);
	}
	_getConfig(e) {
		return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
	}
	static getInstance(e) {
		return xn.get(jn(e), this.DATA_KEY);
	}
	static getOrCreateInstance(e, t = {}) {
		return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
	}
	static get VERSION() {
		return dr;
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
}, pr = (e) => {
	let t = e.getAttribute("data-bs-target");
	if (!t || t === "#") {
		let n = e.getAttribute("href");
		if (!n || !n.includes("#") && !n.startsWith(".")) return null;
		n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && n !== "#" ? n.trim() : null;
	}
	return t ? t.split(",").map((e) => Tn(e)).join(",") : null;
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
		return this.find(t, e).filter((e) => !Nn(e) && Mn(e));
	},
	getSelectorFromElement(e) {
		let t = pr(e);
		return t && H.findOne(t) ? t : null;
	},
	getElementFromSelector(e) {
		let t = pr(e);
		return t ? H.findOne(t) : null;
	},
	getMultipleElementsFromSelector(e) {
		let t = pr(e);
		return t ? H.find(t) : [];
	}
}, mr = (e, t = "hide") => {
	let n = `click.dismiss${e.EVENT_KEY}`, r = e.NAME;
	V.on(document, n, `[data-bs-dismiss="${r}"]`, function(n) {
		if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Nn(this)) return;
		let i = H.getElementFromSelector(this) || this.closest(`.${r}`);
		e.getOrCreateInstance(i)[t]();
	});
}, hr = "alert", gr = ".bs.alert", _r = `close${gr}`, vr = `closed${gr}`, yr = "fade", br = "show", xr = class e extends fr {
	static get NAME() {
		return hr;
	}
	close() {
		if (V.trigger(this._element, _r).defaultPrevented) return;
		this._element.classList.remove(br);
		let e = this._element.classList.contains(yr);
		this._queueCallback(() => this._destroyElement(), this._element, e);
	}
	_destroyElement() {
		this._element.remove(), V.trigger(this._element, vr), this.dispose();
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
mr(xr, "close"), z(xr);
var Sr = "button", Cr = ".bs.button", wr = ".data-api", Tr = "active", Er = "[data-bs-toggle=\"button\"]", Dr = `click${Cr}${wr}`, Or = class e extends fr {
	static get NAME() {
		return Sr;
	}
	toggle() {
		this._element.setAttribute("aria-pressed", this._element.classList.toggle(Tr));
	}
	static jQueryInterface(t) {
		return this.each(function() {
			let n = e.getOrCreateInstance(this);
			t === "toggle" && n[t]();
		});
	}
};
V.on(document, Dr, Er, (e) => {
	e.preventDefault();
	let t = e.target.closest(Er);
	Or.getOrCreateInstance(t).toggle();
}), z(Or);
var kr = "swipe", Ar = ".bs.swipe", jr = `touchstart${Ar}`, Mr = `touchmove${Ar}`, Nr = `touchend${Ar}`, Pr = `pointerdown${Ar}`, Fr = `pointerup${Ar}`, Ir = "touch", Lr = "pen", Rr = "pointer-event", zr = 40, Br = {
	endCallback: null,
	leftCallback: null,
	rightCallback: null
}, Vr = {
	endCallback: "(function|null)",
	leftCallback: "(function|null)",
	rightCallback: "(function|null)"
}, Hr = class e extends ur {
	constructor(t, n) {
		super(), this._element = t, !(!t || !e.isSupported()) && (this._config = this._getConfig(n), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
	}
	static get Default() {
		return Br;
	}
	static get DefaultType() {
		return Vr;
	}
	static get NAME() {
		return kr;
	}
	dispose() {
		V.off(this._element, Ar);
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
		if (e <= zr) return;
		let t = e / this._deltaX;
		this._deltaX = 0, t && B(t > 0 ? this._config.rightCallback : this._config.leftCallback);
	}
	_initEvents() {
		this._supportPointerEvents ? (V.on(this._element, Pr, (e) => this._start(e)), V.on(this._element, Fr, (e) => this._end(e)), this._element.classList.add(Rr)) : (V.on(this._element, jr, (e) => this._start(e)), V.on(this._element, Mr, (e) => this._move(e)), V.on(this._element, Nr, (e) => this._end(e)));
	}
	_eventIsPointerPenTouch(e) {
		return this._supportPointerEvents && (e.pointerType === Lr || e.pointerType === Ir);
	}
	static isSupported() {
		return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
	}
}, Ur = "carousel", Wr = ".bs.carousel", Gr = ".data-api", Kr = "ArrowLeft", qr = "ArrowRight", Jr = 500, Yr = "next", Xr = "prev", Zr = "left", Qr = "right", $r = `slide${Wr}`, ei = `slid${Wr}`, ti = `keydown${Wr}`, ni = `mouseenter${Wr}`, ri = `mouseleave${Wr}`, ii = `dragstart${Wr}`, ai = `load${Wr}${Gr}`, oi = `click${Wr}${Gr}`, si = "carousel", ci = "active", li = "slide", ui = "carousel-item-end", di = "carousel-item-start", fi = "carousel-item-next", pi = "carousel-item-prev", mi = ".active", hi = ".carousel-item", gi = ".active.carousel-item", _i = ".carousel-item img", vi = ".carousel-indicators", yi = "[data-bs-slide], [data-bs-slide-to]", bi = "[data-bs-ride=\"carousel\"]", xi = {
	[Kr]: Qr,
	[qr]: Zr
}, Si = {
	interval: 5e3,
	keyboard: !0,
	pause: "hover",
	ride: !1,
	touch: !0,
	wrap: !0
}, Ci = {
	interval: "(number|boolean)",
	keyboard: "boolean",
	pause: "(string|boolean)",
	ride: "(boolean|string)",
	touch: "boolean",
	wrap: "boolean"
}, wi = class e extends fr {
	constructor(e, t) {
		super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = H.findOne(vi, this._element), this._addEventListeners(), this._config.ride === si && this.cycle();
	}
	static get Default() {
		return Si;
	}
	static get DefaultType() {
		return Ci;
	}
	static get NAME() {
		return Ur;
	}
	next() {
		this._slide(Yr);
	}
	nextWhenVisible() {
		!document.hidden && Mn(this._element) && this.next();
	}
	prev() {
		this._slide(Xr);
	}
	pause() {
		this._isSliding && kn(this._element), this._clearInterval();
	}
	cycle() {
		this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
	}
	_maybeEnableCycle() {
		if (this._config.ride) {
			if (this._isSliding) {
				V.one(this._element, ei, () => this.cycle());
				return;
			}
			this.cycle();
		}
	}
	to(e) {
		let t = this._getItems();
		if (e > t.length - 1 || e < 0) return;
		if (this._isSliding) {
			V.one(this._element, ei, () => this.to(e));
			return;
		}
		let n = this._getItemIndex(this._getActive());
		if (n === e) return;
		let r = e > n ? Yr : Xr;
		this._slide(r, t[e]);
	}
	dispose() {
		this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
	}
	_configAfterMerge(e) {
		return e.defaultInterval = e.interval, e;
	}
	_addEventListeners() {
		this._config.keyboard && V.on(this._element, ti, (e) => this._keydown(e)), this._config.pause === "hover" && (V.on(this._element, ni, () => this.pause()), V.on(this._element, ri, () => this._maybeEnableCycle())), this._config.touch && Hr.isSupported() && this._addTouchEventListeners();
	}
	_addTouchEventListeners() {
		for (let e of H.find(_i, this._element)) V.on(e, ii, (e) => e.preventDefault());
		let e = {
			leftCallback: () => this._slide(this._directionToOrder(Zr)),
			rightCallback: () => this._slide(this._directionToOrder(Qr)),
			endCallback: () => {
				this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Jr + this._config.interval));
			}
		};
		this._swipeHelper = new Hr(this._element, e);
	}
	_keydown(e) {
		if (/input|textarea/i.test(e.target.tagName)) return;
		let t = xi[e.key];
		t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
	}
	_getItemIndex(e) {
		return this._getItems().indexOf(e);
	}
	_setActiveIndicatorElement(e) {
		if (!this._indicatorsElement) return;
		let t = H.findOne(mi, this._indicatorsElement);
		t.classList.remove(ci), t.removeAttribute("aria-current");
		let n = H.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
		n && (n.classList.add(ci), n.setAttribute("aria-current", "true"));
	}
	_updateInterval() {
		let e = this._activeElement || this._getActive();
		if (!e) return;
		let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
		this._config.interval = t || this._config.defaultInterval;
	}
	_slide(e, t = null) {
		if (this._isSliding) return;
		let n = this._getActive(), r = e === Yr, i = t || Hn(this._getItems(), n, r, this._config.wrap);
		if (i === n) return;
		let a = this._getItemIndex(i), o = (t) => V.trigger(this._element, t, {
			relatedTarget: i,
			direction: this._orderToDirection(e),
			from: this._getItemIndex(n),
			to: a
		});
		if (o($r).defaultPrevented || !n || !i) return;
		let s = !!this._interval;
		this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(a), this._activeElement = i;
		let c = r ? di : ui, l = r ? fi : pi;
		i.classList.add(l), In(i), n.classList.add(c), i.classList.add(c), this._queueCallback(() => {
			i.classList.remove(c, l), i.classList.add(ci), n.classList.remove(ci, l, c), this._isSliding = !1, o(ei);
		}, n, this._isAnimated()), s && this.cycle();
	}
	_isAnimated() {
		return this._element.classList.contains(li);
	}
	_getActive() {
		return H.findOne(gi, this._element);
	}
	_getItems() {
		return H.find(hi, this._element);
	}
	_clearInterval() {
		this._interval &&= (clearInterval(this._interval), null);
	}
	_directionToOrder(e) {
		return Bn() ? e === Zr ? Xr : Yr : e === Zr ? Yr : Xr;
	}
	_orderToDirection(e) {
		return Bn() ? e === Xr ? Zr : Qr : e === Xr ? Qr : Zr;
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
V.on(document, oi, yi, function(e) {
	let t = H.getElementFromSelector(this);
	if (!t || !t.classList.contains(si)) return;
	e.preventDefault();
	let n = wi.getOrCreateInstance(t), r = this.getAttribute("data-bs-slide-to");
	if (r) {
		n.to(r), n._maybeEnableCycle();
		return;
	}
	if (lr.getDataAttribute(this, "slide") === "next") {
		n.next(), n._maybeEnableCycle();
		return;
	}
	n.prev(), n._maybeEnableCycle();
}), V.on(window, ai, () => {
	let e = H.find(bi);
	for (let t of e) wi.getOrCreateInstance(t);
}), z(wi);
var Ti = "collapse", Ei = ".bs.collapse", Di = ".data-api", Oi = `show${Ei}`, ki = `shown${Ei}`, Ai = `hide${Ei}`, ji = `hidden${Ei}`, Mi = `click${Ei}${Di}`, Ni = "show", Pi = "collapse", Fi = "collapsing", Ii = "collapsed", Li = `:scope .${Pi} .${Pi}`, Ri = "collapse-horizontal", zi = "width", Bi = "height", Vi = ".collapse.show, .collapse.collapsing", Hi = "[data-bs-toggle=\"collapse\"]", Ui = {
	parent: null,
	toggle: !0
}, Wi = {
	parent: "(null|element)",
	toggle: "boolean"
}, Gi = class e extends fr {
	constructor(e, t) {
		super(e, t), this._isTransitioning = !1, this._triggerArray = [];
		let n = H.find(Hi);
		for (let e of n) {
			let t = H.getSelectorFromElement(e), n = H.find(t).filter((e) => e === this._element);
			t !== null && n.length && this._triggerArray.push(e);
		}
		this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
	}
	static get Default() {
		return Ui;
	}
	static get DefaultType() {
		return Wi;
	}
	static get NAME() {
		return Ti;
	}
	toggle() {
		this._isShown() ? this.hide() : this.show();
	}
	show() {
		if (this._isTransitioning || this._isShown()) return;
		let t = [];
		if (this._config.parent && (t = this._getFirstLevelChildren(Vi).filter((e) => e !== this._element).map((t) => e.getOrCreateInstance(t, { toggle: !1 }))), t.length && t[0]._isTransitioning || V.trigger(this._element, Oi).defaultPrevented) return;
		for (let e of t) e.hide();
		let n = this._getDimension();
		this._element.classList.remove(Pi), this._element.classList.add(Fi), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
		let r = () => {
			this._isTransitioning = !1, this._element.classList.remove(Fi), this._element.classList.add(Pi, Ni), this._element.style[n] = "", V.trigger(this._element, ki);
		}, i = `scroll${n[0].toUpperCase() + n.slice(1)}`;
		this._queueCallback(r, this._element, !0), this._element.style[n] = `${this._element[i]}px`;
	}
	hide() {
		if (this._isTransitioning || !this._isShown() || V.trigger(this._element, Ai).defaultPrevented) return;
		let e = this._getDimension();
		this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, In(this._element), this._element.classList.add(Fi), this._element.classList.remove(Pi, Ni);
		for (let e of this._triggerArray) {
			let t = H.getElementFromSelector(e);
			t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
		}
		this._isTransitioning = !0;
		let t = () => {
			this._isTransitioning = !1, this._element.classList.remove(Fi), this._element.classList.add(Pi), V.trigger(this._element, ji);
		};
		this._element.style[e] = "", this._queueCallback(t, this._element, !0);
	}
	_isShown(e = this._element) {
		return e.classList.contains(Ni);
	}
	_configAfterMerge(e) {
		return e.toggle = !!e.toggle, e.parent = jn(e.parent), e;
	}
	_getDimension() {
		return this._element.classList.contains(Ri) ? zi : Bi;
	}
	_initializeChildren() {
		if (!this._config.parent) return;
		let e = this._getFirstLevelChildren(Hi);
		for (let t of e) {
			let e = H.getElementFromSelector(t);
			e && this._addAriaAndCollapsedClass([t], this._isShown(e));
		}
	}
	_getFirstLevelChildren(e) {
		let t = H.find(Li, this._config.parent);
		return H.find(e, this._config.parent).filter((e) => !t.includes(e));
	}
	_addAriaAndCollapsedClass(e, t) {
		if (e.length) for (let n of e) n.classList.toggle(Ii, !t), n.setAttribute("aria-expanded", t);
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
V.on(document, Mi, Hi, function(e) {
	(e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
	for (let e of H.getMultipleElementsFromSelector(this)) Gi.getOrCreateInstance(e, { toggle: !1 }).toggle();
}), z(Gi);
var Ki = "dropdown", qi = ".bs.dropdown", Ji = ".data-api", Yi = "Escape", Xi = "Tab", Zi = "ArrowUp", Qi = "ArrowDown", $i = 2, ea = `hide${qi}`, ta = `hidden${qi}`, na = `show${qi}`, ra = `shown${qi}`, ia = `click${qi}${Ji}`, aa = `keydown${qi}${Ji}`, oa = `keyup${qi}${Ji}`, sa = "show", ca = "dropup", la = "dropend", ua = "dropstart", da = "dropup-center", fa = "dropdown-center", pa = "[data-bs-toggle=\"dropdown\"]:not(.disabled):not(:disabled)", ma = `${pa}.${sa}`, ha = ".dropdown-menu", ga = ".navbar", _a = ".navbar-nav", va = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", ya = Bn() ? "top-end" : "top-start", ba = Bn() ? "top-start" : "top-end", xa = Bn() ? "bottom-end" : "bottom-start", Sa = Bn() ? "bottom-start" : "bottom-end", Ca = Bn() ? "left-start" : "right-start", wa = Bn() ? "right-start" : "left-start", Ta = "top", Ea = "bottom", Da = {
	autoClose: !0,
	boundary: "clippingParents",
	display: "dynamic",
	offset: [0, 2],
	popperConfig: null,
	reference: "toggle"
}, Oa = {
	autoClose: "(boolean|string)",
	boundary: "(string|element)",
	display: "string",
	offset: "(array|string|function)",
	popperConfig: "(null|object|function)",
	reference: "(string|element|object)"
}, ka = class e extends fr {
	constructor(e, t) {
		super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = H.next(this._element, ha)[0] || H.prev(this._element, ha)[0] || H.findOne(ha, this._parent), this._inNavbar = this._detectNavbar();
	}
	static get Default() {
		return Da;
	}
	static get DefaultType() {
		return Oa;
	}
	static get NAME() {
		return Ki;
	}
	toggle() {
		return this._isShown() ? this.hide() : this.show();
	}
	show() {
		if (Nn(this._element) || this._isShown()) return;
		let e = { relatedTarget: this._element };
		if (!V.trigger(this._element, na, e).defaultPrevented) {
			if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(_a)) for (let e of [].concat(...document.body.children)) V.on(e, "mouseover", Fn);
			this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(sa), this._element.classList.add(sa), V.trigger(this._element, ra, e);
		}
	}
	hide() {
		if (Nn(this._element) || !this._isShown()) return;
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
		if (!V.trigger(this._element, ea, e).defaultPrevented) {
			if ("ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) V.off(e, "mouseover", Fn);
			this._popper && this._popper.destroy(), this._menu.classList.remove(sa), this._element.classList.remove(sa), this._element.setAttribute("aria-expanded", "false"), lr.removeDataAttribute(this._menu, "popper"), V.trigger(this._element, ta, e);
		}
	}
	_getConfig(e) {
		if (e = super._getConfig(e), typeof e.reference == "object" && !An(e.reference) && typeof e.reference.getBoundingClientRect != "function") throw TypeError(`${Ki.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
		return e;
	}
	_createPopper() {
		if (yn === void 0) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
		let e = this._element;
		this._config.reference === "parent" ? e = this._parent : An(this._config.reference) ? e = jn(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
		let t = this._getPopperConfig();
		this._popper = vn(e, this._menu, t);
	}
	_isShown() {
		return this._menu.classList.contains(sa);
	}
	_getPlacement() {
		let e = this._parent;
		if (e.classList.contains(la)) return Ca;
		if (e.classList.contains(ua)) return wa;
		if (e.classList.contains(da)) return Ta;
		if (e.classList.contains(fa)) return Ea;
		let t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
		return e.classList.contains(ca) ? t ? ba : ya : t ? Sa : xa;
	}
	_detectNavbar() {
		return this._element.closest(ga) !== null;
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
		return (this._inNavbar || this._config.display === "static") && (lr.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
			name: "applyStyles",
			enabled: !1
		}]), {
			...e,
			...B(this._config.popperConfig, [void 0, e])
		};
	}
	_selectMenuItem({ key: e, target: t }) {
		let n = H.find(va, this._menu).filter((e) => Mn(e));
		n.length && Hn(n, t, e === Qi, !n.includes(t)).focus();
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
		if (t.button === $i || t.type === "keyup" && t.key !== Xi) return;
		let n = H.find(ma);
		for (let r of n) {
			let n = e.getInstance(r);
			if (!n || n._config.autoClose === !1) continue;
			let i = t.composedPath(), a = i.includes(n._menu);
			if (i.includes(n._element) || n._config.autoClose === "inside" && !a || n._config.autoClose === "outside" && a || n._menu.contains(t.target) && (t.type === "keyup" && t.key === Xi || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
			let o = { relatedTarget: n._element };
			t.type === "click" && (o.clickEvent = t), n._completeHide(o);
		}
	}
	static dataApiKeydownHandler(t) {
		let n = /input|textarea/i.test(t.target.tagName), r = t.key === Yi, i = [Zi, Qi].includes(t.key);
		if (!i && !r || n && !r) return;
		t.preventDefault();
		let a = this.matches(pa) ? this : H.prev(this, pa)[0] || H.next(this, pa)[0] || H.findOne(pa, t.delegateTarget.parentNode), o = e.getOrCreateInstance(a);
		if (i) {
			t.stopPropagation(), o.show(), o._selectMenuItem(t);
			return;
		}
		o._isShown() && (t.stopPropagation(), o.hide(), a.focus());
	}
};
V.on(document, aa, pa, ka.dataApiKeydownHandler), V.on(document, aa, ha, ka.dataApiKeydownHandler), V.on(document, ia, ka.clearMenus), V.on(document, oa, ka.clearMenus), V.on(document, ia, pa, function(e) {
	e.preventDefault(), ka.getOrCreateInstance(this).toggle();
}), z(ka);
var Aa = "backdrop", ja = "fade", Ma = "show", Na = `mousedown.bs.${Aa}`, Pa = {
	className: "modal-backdrop",
	clickCallback: null,
	isAnimated: !1,
	isVisible: !0,
	rootElement: "body"
}, Fa = {
	className: "string",
	clickCallback: "(function|null)",
	isAnimated: "boolean",
	isVisible: "boolean",
	rootElement: "(element|string)"
}, Ia = class extends ur {
	constructor(e) {
		super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
	}
	static get Default() {
		return Pa;
	}
	static get DefaultType() {
		return Fa;
	}
	static get NAME() {
		return Aa;
	}
	show(e) {
		if (!this._config.isVisible) {
			B(e);
			return;
		}
		this._append();
		let t = this._getElement();
		this._config.isAnimated && In(t), t.classList.add(Ma), this._emulateAnimation(() => {
			B(e);
		});
	}
	hide(e) {
		if (!this._config.isVisible) {
			B(e);
			return;
		}
		this._getElement().classList.remove(Ma), this._emulateAnimation(() => {
			this.dispose(), B(e);
		});
	}
	dispose() {
		this._isAppended &&= (V.off(this._element, Na), this._element.remove(), !1);
	}
	_getElement() {
		if (!this._element) {
			let e = document.createElement("div");
			e.className = this._config.className, this._config.isAnimated && e.classList.add(ja), this._element = e;
		}
		return this._element;
	}
	_configAfterMerge(e) {
		return e.rootElement = jn(e.rootElement), e;
	}
	_append() {
		if (this._isAppended) return;
		let e = this._getElement();
		this._config.rootElement.append(e), V.on(e, Na, () => {
			B(this._config.clickCallback);
		}), this._isAppended = !0;
	}
	_emulateAnimation(e) {
		Vn(e, this._getElement(), this._config.isAnimated);
	}
}, La = "focustrap", Ra = ".bs.focustrap", za = `focusin${Ra}`, Ba = `keydown.tab${Ra}`, Va = "Tab", Ha = "forward", Ua = "backward", Wa = {
	autofocus: !0,
	trapElement: null
}, Ga = {
	autofocus: "boolean",
	trapElement: "element"
}, Ka = class extends ur {
	constructor(e) {
		super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
	}
	static get Default() {
		return Wa;
	}
	static get DefaultType() {
		return Ga;
	}
	static get NAME() {
		return La;
	}
	activate() {
		this._isActive ||= (this._config.autofocus && this._config.trapElement.focus(), V.off(document, Ra), V.on(document, za, (e) => this._handleFocusin(e)), V.on(document, Ba, (e) => this._handleKeydown(e)), !0);
	}
	deactivate() {
		this._isActive && (this._isActive = !1, V.off(document, Ra));
	}
	_handleFocusin(e) {
		let { trapElement: t } = this._config;
		if (e.target === document || e.target === t || t.contains(e.target)) return;
		let n = H.focusableChildren(t);
		n.length === 0 ? t.focus() : this._lastTabNavDirection === Ua ? n[n.length - 1].focus() : n[0].focus();
	}
	_handleKeydown(e) {
		e.key === Va && (this._lastTabNavDirection = e.shiftKey ? Ua : Ha);
	}
}, qa = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Ja = ".sticky-top", Ya = "padding-right", Xa = "margin-right", Za = class {
	constructor() {
		this._element = document.body;
	}
	getWidth() {
		let e = document.documentElement.clientWidth;
		return Math.abs(window.innerWidth - e);
	}
	hide() {
		let e = this.getWidth();
		this._disableOverFlow(), this._setElementAttributes(this._element, Ya, (t) => t + e), this._setElementAttributes(qa, Ya, (t) => t + e), this._setElementAttributes(Ja, Xa, (t) => t - e);
	}
	reset() {
		this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ya), this._resetElementAttributes(qa, Ya), this._resetElementAttributes(Ja, Xa);
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
		n && lr.setDataAttribute(e, t, n);
	}
	_resetElementAttributes(e, t) {
		this._applyManipulationCallback(e, (e) => {
			let n = lr.getDataAttribute(e, t);
			if (n === null) {
				e.style.removeProperty(t);
				return;
			}
			lr.removeDataAttribute(e, t), e.style.setProperty(t, n);
		});
	}
	_applyManipulationCallback(e, t) {
		if (An(e)) {
			t(e);
			return;
		}
		for (let n of H.find(e, this._element)) t(n);
	}
}, Qa = "modal", $a = ".bs.modal", eo = ".data-api", to = "Escape", no = `hide${$a}`, ro = `hidePrevented${$a}`, io = `hidden${$a}`, ao = `show${$a}`, oo = `shown${$a}`, so = `resize${$a}`, co = `click.dismiss${$a}`, lo = `mousedown.dismiss${$a}`, uo = `keydown.dismiss${$a}`, fo = `click${$a}${eo}`, po = "modal-open", mo = "fade", ho = "show", go = "modal-static", _o = ".modal.show", vo = ".modal-dialog", yo = ".modal-body", bo = "[data-bs-toggle=\"modal\"]", xo = {
	backdrop: !0,
	focus: !0,
	keyboard: !0
}, So = {
	backdrop: "(boolean|string)",
	focus: "boolean",
	keyboard: "boolean"
}, Co = class e extends fr {
	constructor(e, t) {
		super(e, t), this._dialog = H.findOne(vo, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Za(), this._addEventListeners();
	}
	static get Default() {
		return xo;
	}
	static get DefaultType() {
		return So;
	}
	static get NAME() {
		return Qa;
	}
	toggle(e) {
		return this._isShown ? this.hide() : this.show(e);
	}
	show(e) {
		this._isShown || this._isTransitioning || V.trigger(this._element, ao, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(po), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
	}
	hide() {
		!this._isShown || this._isTransitioning || V.trigger(this._element, no).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(ho), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
	}
	dispose() {
		V.off(window, $a), V.off(this._dialog, $a), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
	}
	handleUpdate() {
		this._adjustDialog();
	}
	_initializeBackDrop() {
		return new Ia({
			isVisible: !!this._config.backdrop,
			isAnimated: this._isAnimated()
		});
	}
	_initializeFocusTrap() {
		return new Ka({ trapElement: this._element });
	}
	_showElement(e) {
		document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
		let t = H.findOne(yo, this._dialog);
		t && (t.scrollTop = 0), In(this._element), this._element.classList.add(ho), this._queueCallback(() => {
			this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, V.trigger(this._element, oo, { relatedTarget: e });
		}, this._dialog, this._isAnimated());
	}
	_addEventListeners() {
		V.on(this._element, uo, (e) => {
			if (e.key === to) {
				if (this._config.keyboard) {
					this.hide();
					return;
				}
				this._triggerBackdropTransition();
			}
		}), V.on(window, so, () => {
			this._isShown && !this._isTransitioning && this._adjustDialog();
		}), V.on(this._element, lo, (e) => {
			V.one(this._element, co, (t) => {
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
			document.body.classList.remove(po), this._resetAdjustments(), this._scrollBar.reset(), V.trigger(this._element, io);
		});
	}
	_isAnimated() {
		return this._element.classList.contains(mo);
	}
	_triggerBackdropTransition() {
		if (V.trigger(this._element, ro).defaultPrevented) return;
		let e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._element.style.overflowY;
		t === "hidden" || this._element.classList.contains(go) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(go), this._queueCallback(() => {
			this._element.classList.remove(go), this._queueCallback(() => {
				this._element.style.overflowY = t;
			}, this._dialog);
		}, this._dialog), this._element.focus());
	}
	_adjustDialog() {
		let e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), n = t > 0;
		if (n && !e) {
			let e = Bn() ? "paddingLeft" : "paddingRight";
			this._element.style[e] = `${t}px`;
		}
		if (!n && e) {
			let e = Bn() ? "paddingRight" : "paddingLeft";
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
V.on(document, fo, bo, function(e) {
	let t = H.getElementFromSelector(this);
	["A", "AREA"].includes(this.tagName) && e.preventDefault(), V.one(t, ao, (e) => {
		e.defaultPrevented || V.one(t, io, () => {
			Mn(this) && this.focus();
		});
	});
	let n = H.findOne(_o);
	n && Co.getInstance(n).hide(), Co.getOrCreateInstance(t).toggle(this);
}), mr(Co), z(Co);
var wo = "offcanvas", To = ".bs.offcanvas", Eo = ".data-api", Do = `load${To}${Eo}`, Oo = "Escape", ko = "show", Ao = "showing", jo = "hiding", Mo = "offcanvas-backdrop", No = ".offcanvas.show", Po = `show${To}`, Fo = `shown${To}`, Io = `hide${To}`, Lo = `hidePrevented${To}`, Ro = `hidden${To}`, zo = `resize${To}`, Bo = `click${To}${Eo}`, Vo = `keydown.dismiss${To}`, Ho = "[data-bs-toggle=\"offcanvas\"]", Uo = {
	backdrop: !0,
	keyboard: !0,
	scroll: !1
}, Wo = {
	backdrop: "(boolean|string)",
	keyboard: "boolean",
	scroll: "boolean"
}, Go = class e extends fr {
	constructor(e, t) {
		super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
	}
	static get Default() {
		return Uo;
	}
	static get DefaultType() {
		return Wo;
	}
	static get NAME() {
		return wo;
	}
	toggle(e) {
		return this._isShown ? this.hide() : this.show(e);
	}
	show(e) {
		this._isShown || V.trigger(this._element, Po, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Za().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ao), this._queueCallback(() => {
			(!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(ko), this._element.classList.remove(Ao), V.trigger(this._element, Fo, { relatedTarget: e });
		}, this._element, !0));
	}
	hide() {
		!this._isShown || V.trigger(this._element, Io).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(jo), this._backdrop.hide(), this._queueCallback(() => {
			this._element.classList.remove(ko, jo), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Za().reset(), V.trigger(this._element, Ro);
		}, this._element, !0));
	}
	dispose() {
		this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
	}
	_initializeBackDrop() {
		let e = () => {
			if (this._config.backdrop === "static") {
				V.trigger(this._element, Lo);
				return;
			}
			this.hide();
		}, t = !!this._config.backdrop;
		return new Ia({
			className: Mo,
			isVisible: t,
			isAnimated: !0,
			rootElement: this._element.parentNode,
			clickCallback: t ? e : null
		});
	}
	_initializeFocusTrap() {
		return new Ka({ trapElement: this._element });
	}
	_addEventListeners() {
		V.on(this._element, Vo, (e) => {
			if (e.key === Oo) {
				if (this._config.keyboard) {
					this.hide();
					return;
				}
				V.trigger(this._element, Lo);
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
V.on(document, Bo, Ho, function(e) {
	let t = H.getElementFromSelector(this);
	if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Nn(this)) return;
	V.one(t, Ro, () => {
		Mn(this) && this.focus();
	});
	let n = H.findOne(No);
	n && n !== t && Go.getInstance(n).hide(), Go.getOrCreateInstance(t).toggle(this);
}), V.on(window, Do, () => {
	for (let e of H.find(No)) Go.getOrCreateInstance(e).show();
}), V.on(window, zo, () => {
	for (let e of H.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(e).position !== "fixed" && Go.getOrCreateInstance(e).hide();
}), mr(Go), z(Go);
var Ko = {
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
}, qo = /* @__PURE__ */ new Set([
	"background",
	"cite",
	"href",
	"itemtype",
	"longdesc",
	"poster",
	"src",
	"xlink:href"
]), Jo = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Yo = (e, t) => {
	let n = e.nodeName.toLowerCase();
	return t.includes(n) ? !qo.has(n) || !!Jo.test(e.nodeValue) : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
};
function Xo(e, t, n) {
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
		for (let t of r) Yo(t, i) || e.removeAttribute(t.nodeName);
	}
	return r.body.innerHTML;
}
var Zo = "TemplateFactory", Qo = {
	allowList: Ko,
	content: {},
	extraClass: "",
	html: !1,
	sanitize: !0,
	sanitizeFn: null,
	template: "<div></div>"
}, $o = {
	allowList: "object",
	content: "object",
	extraClass: "(string|function)",
	html: "boolean",
	sanitize: "boolean",
	sanitizeFn: "(null|function)",
	template: "string"
}, es = {
	entry: "(string|element|function|null)",
	selector: "(string|element)"
}, ts = class extends ur {
	constructor(e) {
		super(), this._config = this._getConfig(e);
	}
	static get Default() {
		return Qo;
	}
	static get DefaultType() {
		return $o;
	}
	static get NAME() {
		return Zo;
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
		}, es);
	}
	_setContent(e, t, n) {
		let r = H.findOne(n, e);
		if (r) {
			if (t = this._resolvePossibleFunction(t), !t) {
				r.remove();
				return;
			}
			if (An(t)) {
				this._putElementInTemplate(jn(t), r);
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
		return this._config.sanitize ? Xo(e, this._config.allowList, this._config.sanitizeFn) : e;
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
}, ns = "tooltip", rs = /* @__PURE__ */ new Set([
	"sanitize",
	"allowList",
	"sanitizeFn"
]), is = "fade", as = "modal", os = "show", ss = ".tooltip-inner", cs = `.${as}`, ls = "hide.bs.modal", us = "hover", ds = "focus", fs = "click", ps = "manual", ms = "hide", hs = "hidden", gs = "show", _s = "shown", vs = "inserted", ys = "click", bs = "focusin", xs = "focusout", Ss = "mouseenter", Cs = "mouseleave", ws = {
	AUTO: "auto",
	TOP: "top",
	RIGHT: Bn() ? "left" : "right",
	BOTTOM: "bottom",
	LEFT: Bn() ? "right" : "left"
}, Ts = {
	allowList: Ko,
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
}, Es = {
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
}, Ds = class e extends fr {
	constructor(e, t) {
		if (yn === void 0) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
		super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
	}
	static get Default() {
		return Ts;
	}
	static get DefaultType() {
		return Es;
	}
	static get NAME() {
		return ns;
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
		clearTimeout(this._timeout), V.off(this._element.closest(cs), ls, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
	}
	show() {
		if (this._element.style.display === "none") throw Error("Please use show on visible elements");
		if (!(this._isWithContent() && this._isEnabled)) return;
		let e = V.trigger(this._element, this.constructor.eventName(gs)), t = (Pn(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
		if (e.defaultPrevented || !t) return;
		this._disposePopper();
		let n = this._getTipElement();
		this._element.setAttribute("aria-describedby", n.getAttribute("id"));
		let { container: r } = this._config;
		if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(n), V.trigger(this._element, this.constructor.eventName(vs))), this._popper = this._createPopper(n), n.classList.add(os), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) V.on(e, "mouseover", Fn);
		this._queueCallback(() => {
			V.trigger(this._element, this.constructor.eventName(_s)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
		}, this.tip, this._isAnimated());
	}
	hide() {
		if (!(!this._isShown() || V.trigger(this._element, this.constructor.eventName(ms)).defaultPrevented)) {
			if (this._getTipElement().classList.remove(os), "ontouchstart" in document.documentElement) for (let e of [].concat(...document.body.children)) V.off(e, "mouseover", Fn);
			this._activeTrigger[fs] = !1, this._activeTrigger[ds] = !1, this._activeTrigger[us] = !1, this._isHovered = null, this._queueCallback(() => {
				this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), V.trigger(this._element, this.constructor.eventName(hs)));
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
		t.classList.remove(is, os), t.classList.add(`bs-${this.constructor.NAME}-auto`);
		let n = Dn(this.constructor.NAME).toString();
		return t.setAttribute("id", n), this._isAnimated() && t.classList.add(is), t;
	}
	setContent(e) {
		this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
	}
	_getTemplateFactory(e) {
		return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new ts({
			...this._config,
			content: e,
			extraClass: this._resolvePossibleFunction(this._config.customClass)
		}), this._templateFactory;
	}
	_getContentForTemplate() {
		return { [ss]: this._getTitle() };
	}
	_getTitle() {
		return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
	}
	_initializeOnDelegatedTarget(e) {
		return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
	}
	_isAnimated() {
		return this._config.animation || this.tip && this.tip.classList.contains(is);
	}
	_isShown() {
		return this.tip && this.tip.classList.contains(os);
	}
	_createPopper(e) {
		let t = ws[B(this._config.placement, [
			this,
			e,
			this._element
		]).toUpperCase()];
		return vn(this._element, e, this._getPopperConfig(t));
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
		for (let t of e) if (t === "click") V.on(this._element, this.constructor.eventName(ys), this._config.selector, (e) => {
			let t = this._initializeOnDelegatedTarget(e);
			t._activeTrigger[fs] = !(t._isShown() && t._activeTrigger[fs]), t.toggle();
		});
		else if (t !== ps) {
			let e = t === us ? this.constructor.eventName(Ss) : this.constructor.eventName(bs), n = t === us ? this.constructor.eventName(Cs) : this.constructor.eventName(xs);
			V.on(this._element, e, this._config.selector, (e) => {
				let t = this._initializeOnDelegatedTarget(e);
				t._activeTrigger[e.type === "focusin" ? ds : us] = !0, t._enter();
			}), V.on(this._element, n, this._config.selector, (e) => {
				let t = this._initializeOnDelegatedTarget(e);
				t._activeTrigger[e.type === "focusout" ? ds : us] = t._element.contains(e.relatedTarget), t._leave();
			});
		}
		this._hideModalHandler = () => {
			this._element && this.hide();
		}, V.on(this._element.closest(cs), ls, this._hideModalHandler);
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
		let t = lr.getDataAttributes(this._element);
		for (let e of Object.keys(t)) rs.has(e) && delete t[e];
		return e = {
			...t,
			...typeof e == "object" && e ? e : {}
		}, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
	}
	_configAfterMerge(e) {
		return e.container = e.container === !1 ? document.body : jn(e.container), typeof e.delay == "number" && (e.delay = {
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
z(Ds);
var Os = "popover", ks = ".popover-header", As = ".popover-body", js = {
	...Ds.Default,
	content: "",
	offset: [0, 8],
	placement: "right",
	template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>",
	trigger: "click"
}, Ms = {
	...Ds.DefaultType,
	content: "(null|string|element|function)"
};
z(class e extends Ds {
	static get Default() {
		return js;
	}
	static get DefaultType() {
		return Ms;
	}
	static get NAME() {
		return Os;
	}
	_isWithContent() {
		return this._getTitle() || this._getContent();
	}
	_getContentForTemplate() {
		return {
			[ks]: this._getTitle(),
			[As]: this._getContent()
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
var Ns = "scrollspy", Ps = ".bs.scrollspy", Fs = ".data-api", Is = `activate${Ps}`, Ls = `click${Ps}`, Rs = `load${Ps}${Fs}`, zs = "dropdown-item", Bs = "active", Vs = "[data-bs-spy=\"scroll\"]", Hs = "[href]", Us = ".nav, .list-group", Ws = ".nav-link", Gs = `${Ws}, .nav-item > ${Ws}, .list-group-item`, Ks = ".dropdown", qs = ".dropdown-toggle", Js = {
	offset: null,
	rootMargin: "0px 0px -25%",
	smoothScroll: !1,
	target: null,
	threshold: [
		.1,
		.5,
		1
	]
}, Ys = {
	offset: "(number|null)",
	rootMargin: "string",
	smoothScroll: "boolean",
	target: "element",
	threshold: "array"
}, Xs = class e extends fr {
	constructor(e, t) {
		super(e, t), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
			visibleEntryTop: 0,
			parentScrollTop: 0
		}, this.refresh();
	}
	static get Default() {
		return Js;
	}
	static get DefaultType() {
		return Ys;
	}
	static get NAME() {
		return Ns;
	}
	refresh() {
		this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
		for (let e of this._observableSections.values()) this._observer.observe(e);
	}
	dispose() {
		this._observer.disconnect(), super.dispose();
	}
	_configAfterMerge(e) {
		return e.target = jn(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((e) => Number.parseFloat(e))), e;
	}
	_maybeEnableSmoothScroll() {
		this._config.smoothScroll && (V.off(this._config.target, Ls), V.on(this._config.target, Ls, Hs, (e) => {
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
		let e = H.find(Hs, this._config.target);
		for (let t of e) {
			if (!t.hash || Nn(t)) continue;
			let e = H.findOne(decodeURI(t.hash), this._element);
			Mn(e) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, e));
		}
	}
	_process(e) {
		this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(Bs), this._activateParents(e), V.trigger(this._element, Is, { relatedTarget: e }));
	}
	_activateParents(e) {
		if (e.classList.contains(zs)) {
			H.findOne(qs, e.closest(Ks)).classList.add(Bs);
			return;
		}
		for (let t of H.parents(e, Us)) for (let e of H.prev(t, Gs)) e.classList.add(Bs);
	}
	_clearActiveClass(e) {
		e.classList.remove(Bs);
		let t = H.find(`${Hs}.${Bs}`, e);
		for (let e of t) e.classList.remove(Bs);
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
V.on(window, Rs, () => {
	for (let e of H.find(Vs)) Xs.getOrCreateInstance(e);
}), z(Xs);
var Zs = "tab", Qs = ".bs.tab", $s = `hide${Qs}`, ec = `hidden${Qs}`, tc = `show${Qs}`, nc = `shown${Qs}`, rc = `click${Qs}`, ic = `keydown${Qs}`, ac = `load${Qs}`, oc = "ArrowLeft", sc = "ArrowRight", cc = "ArrowUp", lc = "ArrowDown", uc = "Home", dc = "End", fc = "active", pc = "fade", mc = "show", hc = "dropdown", gc = ".dropdown-toggle", _c = ".dropdown-menu", vc = `:not(${gc})`, yc = ".list-group, .nav, [role=\"tablist\"]", bc = ".nav-item, .list-group-item", xc = `.nav-link${vc}, .list-group-item${vc}, [role="tab"]${vc}`, Sc = "[data-bs-toggle=\"tab\"], [data-bs-toggle=\"pill\"], [data-bs-toggle=\"list\"]", Cc = `${xc}, ${Sc}`, wc = `.${fc}[data-bs-toggle="tab"], .${fc}[data-bs-toggle="pill"], .${fc}[data-bs-toggle="list"]`, Tc = class e extends fr {
	constructor(e) {
		super(e), this._parent = this._element.closest(yc), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), V.on(this._element, ic, (e) => this._keydown(e)));
	}
	static get NAME() {
		return Zs;
	}
	show() {
		let e = this._element;
		if (this._elemIsActive(e)) return;
		let t = this._getActiveElem(), n = t ? V.trigger(t, $s, { relatedTarget: e }) : null;
		V.trigger(e, tc, { relatedTarget: t }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
	}
	_activate(e, t) {
		e && (e.classList.add(fc), this._activate(H.getElementFromSelector(e)), this._queueCallback(() => {
			if (e.getAttribute("role") !== "tab") {
				e.classList.add(mc);
				return;
			}
			e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), V.trigger(e, nc, { relatedTarget: t });
		}, e, e.classList.contains(pc)));
	}
	_deactivate(e, t) {
		e && (e.classList.remove(fc), e.blur(), this._deactivate(H.getElementFromSelector(e)), this._queueCallback(() => {
			if (e.getAttribute("role") !== "tab") {
				e.classList.remove(mc);
				return;
			}
			e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), V.trigger(e, ec, { relatedTarget: t });
		}, e, e.classList.contains(pc)));
	}
	_keydown(t) {
		if (![
			oc,
			sc,
			cc,
			lc,
			uc,
			dc
		].includes(t.key)) return;
		t.stopPropagation(), t.preventDefault();
		let n = this._getChildren().filter((e) => !Nn(e)), r;
		if ([uc, dc].includes(t.key)) r = n[t.key === uc ? 0 : n.length - 1];
		else {
			let e = [sc, lc].includes(t.key);
			r = Hn(n, t.target, e, !0);
		}
		r && (r.focus({ preventScroll: !0 }), e.getOrCreateInstance(r).show());
	}
	_getChildren() {
		return H.find(Cc, this._parent);
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
		if (!n.classList.contains(hc)) return;
		let r = (e, r) => {
			let i = H.findOne(e, n);
			i && i.classList.toggle(r, t);
		};
		r(gc, fc), r(_c, mc), n.setAttribute("aria-expanded", t);
	}
	_setAttributeIfNotExists(e, t, n) {
		e.hasAttribute(t) || e.setAttribute(t, n);
	}
	_elemIsActive(e) {
		return e.classList.contains(fc);
	}
	_getInnerElement(e) {
		return e.matches(Cc) ? e : H.findOne(Cc, e);
	}
	_getOuterElement(e) {
		return e.closest(bc) || e;
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
V.on(document, rc, Sc, function(e) {
	["A", "AREA"].includes(this.tagName) && e.preventDefault(), !Nn(this) && Tc.getOrCreateInstance(this).show();
}), V.on(window, ac, () => {
	for (let e of H.find(wc)) Tc.getOrCreateInstance(e);
}), z(Tc);
var Ec = "toast", Dc = ".bs.toast", Oc = `mouseover${Dc}`, kc = `mouseout${Dc}`, Ac = `focusin${Dc}`, jc = `focusout${Dc}`, Mc = `hide${Dc}`, Nc = `hidden${Dc}`, Pc = `show${Dc}`, Fc = `shown${Dc}`, Ic = "fade", Lc = "hide", Rc = "show", zc = "showing", Bc = {
	animation: "boolean",
	autohide: "boolean",
	delay: "number"
}, Vc = {
	animation: !0,
	autohide: !0,
	delay: 5e3
}, Hc = class e extends fr {
	constructor(e, t) {
		super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
	}
	static get Default() {
		return Vc;
	}
	static get DefaultType() {
		return Bc;
	}
	static get NAME() {
		return Ec;
	}
	show() {
		V.trigger(this._element, Pc).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add(Ic), this._element.classList.remove(Lc), In(this._element), this._element.classList.add(Rc, zc), this._queueCallback(() => {
			this._element.classList.remove(zc), V.trigger(this._element, Fc), this._maybeScheduleHide();
		}, this._element, this._config.animation));
	}
	hide() {
		!this.isShown() || V.trigger(this._element, Mc).defaultPrevented || (this._element.classList.add(zc), this._queueCallback(() => {
			this._element.classList.add(Lc), this._element.classList.remove(zc, Rc), V.trigger(this._element, Nc);
		}, this._element, this._config.animation));
	}
	dispose() {
		this._clearTimeout(), this.isShown() && this._element.classList.remove(Rc), super.dispose();
	}
	isShown() {
		return this._element.classList.contains(Rc);
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
		V.on(this._element, Oc, (e) => this._onInteraction(e, !0)), V.on(this._element, kc, (e) => this._onInteraction(e, !1)), V.on(this._element, Ac, (e) => this._onInteraction(e, !0)), V.on(this._element, jc, (e) => this._onInteraction(e, !1));
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
mr(Hc), z(Hc);
//#endregion
//#region src/components/SparqlConnection.vue
var Uc = {
	name: "SparqlConnection",
	setup() {
		return { store: u() };
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
		this.configure_endpoint_modal = new Co(this.$refs.configure_endpoint), this.$refs.configure_endpoint.addEventListener("show.bs.modal", () => {
			this.get_endpoint_configuration();
		});
	},
	computed: {
		...x(u, { store_ready: (e) => e.ready }),
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
}, Wc = {
	key: 0,
	inline: "",
	class: "col-12"
}, Gc = {
	class: "btn-group col-1 mb-2 mr-sm-2 mb-sm-0",
	role: "group"
}, Kc = {
	class: "modal fade",
	ref: "configure_endpoint",
	tabindex: "-1",
	"aria-hidden": "true",
	"data-bs-backdrop": "static",
	size: "lg"
}, qc = { class: "modal-dialog modal-lg" }, Jc = { class: "modal-content" }, Yc = { class: "modal-header" }, Xc = { class: "modal-body" }, Zc = {
	class: "form-group",
	label: "Endpoint Type"
}, Qc = {
	key: 0,
	class: "form-group"
}, $c = {
	key: 1,
	class: "form-group"
}, el = { class: "input-group mb-3" }, tl = ["title"], nl = {
	key: 0,
	class: "mt-2"
}, rl = { class: "card card-body mt-2" }, il = { class: "form-group" }, al = { class: "form-group" }, ol = {
	key: 2,
	class: "form-group"
}, sl = { class: "input-group mb-3" }, cl = ["title"], ll = {
	key: 0,
	class: "mt-2"
}, ul = { class: "card card-body mt-2" }, dl = { class: "form-group" }, fl = { class: "form-group" }, pl = { class: "modal-footer" };
function ml(e, t, n, r, i, a) {
	return N(), E(S, null, [e.store_ready ? (N(), E("form", Wc, [D("div", Gc, [
		D("button", {
			type: "button",
			class: "btn btn-outline-secondary mb-0",
			onClick: t[0] ||= (e) => i.configure_endpoint_modal.show(),
			title: "Configure Endpoint",
			"aria-label": "Configure Endpoint"
		}, [...t[19] ||= [D("i", { class: "bi bi-gear" }, null, -1)]]),
		a.store_capability.quit ? (N(), E("button", {
			key: 0,
			type: "button",
			class: "btn btn-outline-secondary mb-0",
			onClick: t[1] ||= (e) => a.push(),
			title: "Push To Remote Repository",
			"aria-label": "Push To Remote Repository"
		}, [...t[20] ||= [D("i", { class: "bi bi-cloud-upload" }, null, -1)]])) : T("", !0),
		a.store_capability.quit ? (N(), E("button", {
			key: 1,
			type: "button",
			class: "btn btn-outline-secondary mb-0",
			onClick: t[2] ||= (e) => a.pull(),
			title: "Pull From Remote Repository",
			"aria-label": "Pull From Remote Repository"
		}, [...t[21] ||= [D("i", { class: "bi bi-cloud-download" }, null, -1)]])) : T("", !0)
	])])) : T("", !0), D("div", Kc, [D("div", qc, [D("div", Jc, [
		D("div", Yc, [t[22] ||= D("h5", { class: "modal-title" }, "Configure Endpoint", -1), D("button", {
			type: "button",
			class: "btn-close",
			onClick: t[3] ||= (e) => i.configure_endpoint_modal.hide(),
			"aria-label": "Close"
		})]),
		D("div", Xc, [D("form", null, [
			D("div", Zc, [
				L(D("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[4] ||= (e) => i.endpoint_type = e,
					id: "in_memory",
					value: "in_memory"
				}, null, 512), [[F, i.endpoint_type]]),
				t[23] ||= D("label", {
					class: "form-check-label",
					for: "in_memory"
				}, "In Memory", -1),
				L(D("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[5] ||= (e) => i.endpoint_type = e,
					id: "query_only",
					value: "query_only"
				}, null, 512), [[F, i.endpoint_type]]),
				t[24] ||= D("label", {
					class: "form-check-label",
					for: "query_only"
				}, "Query only", -1),
				L(D("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[6] ||= (e) => i.endpoint_type = e,
					id: "query_update",
					value: "query_update"
				}, null, 512), [[F, i.endpoint_type]]),
				t[25] ||= D("label", {
					class: "form-check-label",
					for: "query_update"
				}, "Query & Update", -1),
				L(D("input", {
					class: "form-check-input",
					type: "radio",
					name: "endpoint_type",
					"onUpdate:modelValue": t[7] ||= (e) => i.endpoint_type = e,
					id: "quit",
					value: "quit"
				}, null, 512), [[F, i.endpoint_type]]),
				t[26] ||= D("label", {
					class: "form-check-label",
					for: "quit"
				}, "Quit Store", -1)
			]),
			i.endpoint_type == "quit" ? (N(), E("div", Qc, [t[27] ||= D("label", { for: "quit_url" }, "Quit URL", -1), D("div", null, [L(D("input", {
				type: "text",
				class: "form-control",
				id: "quit_url",
				"onUpdate:modelValue": t[8] ||= (e) => i.quit_url = e,
				placeholder: "http://your.quit.store.org/"
			}, null, 512), [[I, i.quit_url]])])])) : T("", !0),
			i.endpoint_type == "query_only" || i.endpoint_type == "query_update" ? (N(), E("div", $c, [
				t[31] ||= D("label", { for: "query_url" }, "Query URL", -1),
				D("div", null, [D("div", el, [L(D("input", {
					type: "text",
					class: "form-control",
					id: "query_url",
					"onUpdate:modelValue": t[9] ||= (e) => i.query_url = e,
					placeholder: "http://your.sparql.store.org/query"
				}, null, 512), [[I, i.query_url]]), D("button", {
					class: "btn btn-outline-secondary",
					type: "button",
					onClick: t[10] ||= (e) => i.query_auth_enabled = !i.query_auth_enabled,
					title: i.query_auth_enabled ? "Disable Query Authentication" : "Enable Query Authentication"
				}, [D("i", { class: ne(["bi", i.query_auth_enabled ? "bi-lock-fill" : "bi-unlock"]) }, null, 2)], 8, tl)])]),
				i.query_auth_enabled ? (N(), E("div", nl, [D("div", rl, [
					t[30] ||= D("h6", { class: "card-title" }, "Authentication for Query URL", -1),
					D("div", il, [t[28] ||= D("label", { for: "query_username" }, "Username", -1), L(D("input", {
						type: "text",
						class: "form-control",
						id: "query_username",
						"onUpdate:modelValue": t[11] ||= (e) => i.query_username = e,
						placeholder: "Username"
					}, null, 512), [[I, i.query_username]])]),
					D("div", al, [t[29] ||= D("label", { for: "query_password" }, "Password", -1), L(D("input", {
						type: "password",
						class: "form-control",
						id: "query_password",
						"onUpdate:modelValue": t[12] ||= (e) => i.query_password = e,
						placeholder: "Password"
					}, null, 512), [[I, i.query_password]])])
				])])) : T("", !0)
			])) : T("", !0),
			i.endpoint_type == "query_update" ? (N(), E("div", ol, [
				t[35] ||= D("label", { for: "update_url" }, "Update URL", -1),
				D("div", null, [D("div", sl, [L(D("input", {
					type: "text",
					class: "form-control",
					id: "update_url",
					"onUpdate:modelValue": t[13] ||= (e) => i.update_url = e,
					placeholder: "http://your.sparql.store.org/update"
				}, null, 512), [[I, i.update_url]]), D("button", {
					class: "btn btn-outline-secondary",
					type: "button",
					onClick: t[14] ||= (e) => i.update_auth_enabled = !i.update_auth_enabled,
					title: i.update_auth_enabled ? "Disable Update Authentication" : "Enable Update Authentication"
				}, [D("i", { class: ne(["bi", i.update_auth_enabled ? "bi-lock-fill" : "bi-unlock"]) }, null, 2)], 8, cl)])]),
				i.update_auth_enabled ? (N(), E("div", ll, [D("div", ul, [
					t[34] ||= D("h6", { class: "card-title" }, "Authentication for Update URL", -1),
					D("div", dl, [t[32] ||= D("label", { for: "update_username" }, "Username", -1), L(D("input", {
						type: "text",
						class: "form-control",
						id: "update_username",
						"onUpdate:modelValue": t[15] ||= (e) => i.update_username = e,
						placeholder: "Username"
					}, null, 512), [[I, i.update_username]])]),
					D("div", fl, [t[33] ||= D("label", { for: "update_password" }, "Password", -1), L(D("input", {
						type: "password",
						class: "form-control",
						id: "update_password",
						"onUpdate:modelValue": t[16] ||= (e) => i.update_password = e,
						placeholder: "Password"
					}, null, 512), [[I, i.update_password]])])
				])])) : T("", !0)
			])) : T("", !0)
		])]),
		D("div", pl, [D("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[17] ||= (e) => i.configure_endpoint_modal.hide()
		}, "Close"), D("button", {
			type: "button",
			class: "btn btn-primary",
			onClick: t[18] ||= (e) => {
				a.configure_endpoint(), i.configure_endpoint_modal.hide();
			}
		}, "Save changes")])
	])])], 512)], 64);
}
var hl = /*#__PURE__*/ f(Uc, [["render", ml]]), gl = {
	name: "GraphList",
	setup() {
		return { store: u() };
	},
	components: {
		TermInput: g,
		QueryResultList: h
	},
	props: {
		graph_iri: String,
		selectGraph: Function
	},
	data() {
		return {
			graphs: [],
			new_graph_iri: r.namedNode(""),
			add_graph_modal: null
		};
	},
	mounted() {
		this.add_graph_modal = new Co(this.$refs.add_graph);
	},
	methods: { async add_graph() {
		let e = [r.quad(this.new_graph_iri, r.namedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), r.namedNode("http://www.w3.org/2000/01/rdf-schema#Graph"))];
		console.log(this.new_graph_iri);
		try {
			await this.store.deleteInsertData({
				insertArray: e,
				graphIri: this.new_graph_iri.value
			}), this.add_graph_modal.hide();
		} catch (e) {
			console.error(e);
		}
	} }
}, _l = {
	class: "modal fade",
	ref: "add_graph",
	tabindex: "-1",
	"aria-hidden": "true",
	"data-bs-backdrop": "static",
	size: "lg"
}, vl = { class: "modal-dialog modal-lg" }, yl = { class: "modal-content" }, bl = { class: "modal-header" }, xl = { class: "modal-body" }, Sl = { class: "form-group" }, Cl = { class: "modal-footer" };
function wl(e, t, n, r, i, a) {
	let o = P("QueryResultList"), s = P("TermInput");
	return N(), E("div", null, [k(o, {
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
	]), D("div", _l, [D("div", vl, [D("div", yl, [
		D("div", bl, [t[4] ||= D("h5", { class: "modal-title" }, "Create New Graph", -1), D("button", {
			type: "button",
			class: "btn-close",
			onClick: t[0] ||= (e) => i.add_graph_modal.hide(),
			"aria-label": "Close"
		})]),
		D("div", xl, [D("form", null, [D("div", Sl, [t[5] ||= D("label", { for: "new_graph_iri" }, "IRI", -1), D("div", null, [k(s, {
			type: "iri",
			id: "new_graph_iri",
			term: i.new_graph_iri,
			"onUpdate:term": t[1] ||= (e) => i.new_graph_iri = e
		}, null, 8, ["term"])])])])]),
		D("div", Cl, [D("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[2] ||= (e) => i.add_graph_modal.hide()
		}, "Close"), D("button", {
			type: "button",
			class: "btn btn-primary",
			onClick: t[3] ||= (e) => a.add_graph()
		}, "Save changes")])
	])])], 512)]);
}
var Tl = /*#__PURE__*/ f(gl, [["render", wl]]), El = {
	name: "ClassList",
	props: {
		class_iri: String,
		selectClass: Function
	},
	watch: { graph_iri(e) {
		console.log("graph_iri changed" + e), this.$refs.classList.updateList();
	} },
	computed: { ...x(l, ["graph_iri"]) }
}, Dl = /*@__PURE__*/ Object.assign(El, { setup(e) {
	return (t, n) => (N(), w(h, {
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
e();
function Ol(e) {
	let t = `[${e.name}] ${e.message}`, n = [];
	return e.fix && n.push(`fix: ${e.fix}`), e.sources?.length && n.push(`sources: ${e.sources.join(", ")}`), e.docs && n.push(`see: ${e.docs}`), n.length === 0 ? t : [t, ...n.map((e, t) => `${t < n.length - 1 ? "├▶" : "╰▶"} ${e}`)].join("\n");
}
function kl(e, ...t) {
	return typeof e == "function" ? e(...t) : e;
}
/* @__NO_SIDE_EFFECTS__ */
function Al({ method: e = "warn", formatter: t = Ol } = {}) {
	return (n, { method: r = e } = {}) => {
		console[r](t(n));
	};
}
var jl = Error.captureStackTrace, Ml = class e extends Error {
	name = "Diagnostic";
	docs;
	fix;
	sources;
	get why() {
		return this.message;
	}
	constructor(t, n = e) {
		super(t.why, { cause: t.cause }), this.fix = t.fix, this.docs = t.docs, this.sources = t.sources, jl?.(this, n);
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
function Nl(e, t) {
	return typeof e == "string" ? `${e}/${t.toLowerCase()}` : e?.(t);
}
/* @__NO_SIDE_EFFECTS__ */
function Pl(e) {
	let t = e.reporters ?? [], n = {}, { docsBase: r } = e;
	for (let i of Object.keys(e.codes)) {
		let a = e.codes[i], o = a.docs === !1 ? void 0 : a.docs || Nl(r, i), s = (e = {}, n = {}) => {
			let r = new Ml({
				why: kl(a.why, e),
				fix: kl(a.fix, e),
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
function Fl(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Il(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Fl(e.default);
}
var U = Object.assign;
function Ll(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = W(i) ? i.map(e) : e(i);
	}
	return n;
}
var Rl = () => {}, W = Array.isArray;
function zl(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var Bl = Symbol(i.env.NODE_ENV === "production" ? "" : "navigation failure"), Vl = {
	1({ location: e, currentLocation: t }) {
		return `No match for\n ${JSON.stringify(e)}${t ? "\nwhile being at\n" + JSON.stringify(t) : ""}`;
	},
	2({ from: e, to: t }) {
		return `Redirected from "${e.fullPath}" to "${Gl(t)}" via a navigation guard.`;
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
function Hl(e, t) {
	return i.env.NODE_ENV === "production" ? U(/* @__PURE__ */ Error(), {
		type: e,
		[Bl]: !0
	}, t) : U(Error(Vl[e](t)), {
		type: e,
		[Bl]: !0
	}, t);
}
function Ul(e, t) {
	return e instanceof Error && Bl in e && (t == null || !!(e.type & t));
}
var Wl = [
	"params",
	"query",
	"hash"
];
function Gl(e) {
	if (!e || typeof e == "string") return e;
	if (e.path != null) return e.path;
	let t = {};
	for (let n of Wl) n in e && (t[n] = e[n]);
	return JSON.stringify(t, null, 2);
}
var G = /*#__PURE__*/ Pl({
	reporters: [/*#__PURE__*/ Al()],
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
			why: (e) => `Location "${Gl(e.location)}" resolved to "${e.href}". A resolved location cannot start with multiple slashes.`,
			fix: "Remove the leading slashes from the location or fix the route configuration."
		},
		VUE_ROUTER_R0004: {
			why: (e) => `No match found for location with path "${Gl(e.path)}"`,
			fix: "Add a route matching this path or check for typos in the location.",
			docs: "https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route"
		},
		VUE_ROUTER_R0005: {
			why: (e) => `router.resolve() was passed an invalid location. This will fail in production.\nLocation: ${Gl(e.rawLocation)}`,
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
}), Kl = Symbol(i.env.NODE_ENV === "production" ? "" : "router view location matched"), ql = Symbol(i.env.NODE_ENV === "production" ? "" : "router view depth"), Jl = Symbol(i.env.NODE_ENV === "production" ? "" : "router"), Yl = Symbol(i.env.NODE_ENV === "production" ? "" : "route location"), Xl = Symbol(i.env.NODE_ENV === "production" ? "" : "router view location");
d(), n();
var Zl = Object.create, Ql = Object.defineProperty, $l = Object.getOwnPropertyDescriptor, eu = Object.getOwnPropertyNames, tu = Object.getPrototypeOf, nu = Object.prototype.hasOwnProperty, ru = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), iu = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = eu(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !nu.call(e, s) && s !== n && Ql(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = $l(t, s)) || r.enumerable
	});
	return e;
}, au = (e, t, n) => (n = e == null ? {} : Zl(tu(e)), iu(t || !e || !e.__esModule ? Ql(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), ou = typeof navigator < "u", K = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : s === void 0 ? {} : s;
K.chrome !== void 0 && K.chrome.devtools, ou && (K.self, K.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__;
var su = /* @__PURE__ */ au((/* @__PURE__ */ ru(((e, t) => {
	t.exports = r;
	function n(e) {
		return e instanceof a ? a.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
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
})))(), 1), cu = /(?:^|[-_/])(\w)/g;
function lu(e, t) {
	return t ? t.toUpperCase() : "";
}
function uu(e) {
	return e && `${e}`.replace(cu, lu);
}
function du(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var fu = (0, su.default)({ circles: !0 }), pu = { trailing: !0 };
function mu(e, t = 25, n = {}) {
	if (n = {
		...pu,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = hu(e, t, r), o.finally(() => {
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
async function hu(e, t, n) {
	return await e.apply(t, n);
}
//#endregion
//#region node_modules/hookable/dist/index.mjs
function gu(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? gu(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var _u = { run: (e) => e() }, vu = console.createTask === void 0 ? () => _u : console.createTask;
function yu(e, t) {
	let n = vu(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function bu(e, t) {
	let n = vu(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function xu(e, t) {
	for (let n of [...e]) n(t);
}
var Su = class {
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
		let t = gu(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = gu(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(yu, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(bu, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && xu(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && xu(this._after, r);
		}) : (this._after && r && xu(this._after, r), i);
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
function Cu() {
	return new Su();
}
//#endregion
//#region node_modules/@vue/devtools-kit/dist/index.js
var wu = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
function Tu(e) {
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function Eu(e) {
	let t = e.__file;
	if (t) return uu(du(t, ".vue"));
}
function Du(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Ou(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function ku(e) {
	let t = e.subTree?.type, n = Ou(e);
	return n ? n?.types?.Fragment === t : !1;
}
function Au(e) {
	let t = Tu(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return Du(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return Du(e, t);
	return Eu(e?.type || {}) || "Anonymous Component";
}
function ju(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function Mu(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Nu() {
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
var Pu;
function Fu(e) {
	return Pu ||= document.createRange(), Pu.selectNode(e), Pu.getBoundingClientRect();
}
function Iu(e) {
	let t = Nu();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = zu(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = Fu(e));
		}
		i && Lu(t, i);
	}
	return t;
}
function Lu(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Ru = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function zu(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? Ru : ku(e) ? Iu(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? zu(e.subTree.component) : Ru;
}
function Bu(e) {
	return ku(e) ? Vu(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Vu(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...Bu(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var Hu = "__vue-devtools-component-inspector__", Uu = "__vue-devtools-component-inspector__card__", Wu = "__vue-devtools-component-inspector__name__", Gu = "__vue-devtools-component-inspector__indicator__", Ku = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, qu = {
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
}, Ju = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function Yu() {
	return document.getElementById(Hu);
}
function Xu() {
	return document.getElementById(Uu);
}
function Zu() {
	return document.getElementById(Gu);
}
function Qu() {
	return document.getElementById(Wu);
}
function $u(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function ed(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? Hu, Object.assign(t.style, {
		...Ku,
		...$u(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Uu, Object.assign(n.style, {
		...qu,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = Wu, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = Gu, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Ju), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function td(e) {
	let t = Yu(), n = Xu(), r = Qu(), i = Zu();
	t && (Object.assign(t.style, {
		...Ku,
		...$u(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function nd(e) {
	let t = zu(e);
	if (!t.width && !t.height) return;
	let n = Au(e);
	Yu() ? td({
		bounds: t,
		name: n
	}) : ed({
		bounds: t,
		name: n
	});
}
function rd() {
	let e = Yu();
	e && (e.style.display = "none");
}
var id = null;
function ad(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (id = e, e.vnode.el)) {
			let t = zu(e), n = Au(e);
			Yu() ? td({
				bounds: t,
				name: n
			}) : ed({
				bounds: t,
				name: n
			});
		}
	}
}
function od(e, t) {
	e.preventDefault(), e.stopPropagation(), id && t(ju(id));
}
var sd = null;
function cd() {
	rd(), window.removeEventListener("mouseover", ad), window.removeEventListener("click", sd, !0), sd = null;
}
function ld() {
	return window.addEventListener("mouseover", ad), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), od(n, (n) => {
				window.removeEventListener("click", t, !0), sd = null, window.removeEventListener("mouseover", ad);
				let r = Yu();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		sd = t, window.addEventListener("click", t, !0);
	});
}
function ud(e) {
	let t = Mu(Y.value, e.id);
	if (t) {
		let [n] = Bu(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = zu(t), n = document.createElement("div"), r = {
				...$u(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = zu(t);
			if (n.width || n.height) {
				let r = Au(t), i = Yu();
				i ? td({
					...e,
					name: r,
					bounds: n
				}) : ed({
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
function dd(e) {
	let t = 0, n = setInterval(() => {
		K.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function fd() {
	let e = K.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function pd() {
	return new Promise((e) => {
		function t() {
			fd(), e(K.__VUE_INSPECTOR__);
		}
		K.__VUE_INSPECTOR__ ? t() : dd(() => {
			t();
		});
	});
}
var md = /* @__PURE__ */ function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function hd(e) {
	return !!(e && e[md.IS_READONLY]);
}
function gd(e) {
	return hd(e) ? gd(e[md.RAW]) : !!(e && e[md.IS_REACTIVE]);
}
function _d(e) {
	return !!(e && e.__v_isRef === !0);
}
function vd(e) {
	let t = e && e[md.RAW];
	return t ? vd(t) : e;
}
var yd = class {
	constructor() {
		this.refEditor = new bd();
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
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : vd(t) instanceof Map ? t.delete(n) : vd(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : vd(t) instanceof Map ? t.set(e.newKey || n, r) : vd(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, bd = class {
	set(e, t) {
		if (_d(e)) e.value = t;
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
		return _d(e) ? e.value : e;
	}
	isRef(e) {
		return _d(e) || gd(e);
	}
};
new yd();
var xd = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Sd() {
	if (typeof window > "u" || !ou || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(xd);
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
var Cd = new Proxy(K.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function wd(e, t) {
	X.timelineLayersState[t.id] = !1, Cd.push({
		...e,
		descriptorId: t.id,
		appRecord: Ou(t.app)
	});
}
K.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var Td = new Proxy(K.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), Ed = mu(() => {
	df.hooks.callHook(Ad.SEND_INSPECTOR_TO_CLIENT, Od());
});
function Dd(e, t) {
	Td.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: Ou(t.app)
	}), Ed();
}
function Od() {
	return Td.filter((e) => e.descriptor.app === Y.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function kd(e, t) {
	return Td.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var q = /* @__PURE__ */ function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), J = /* @__PURE__ */ function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), Ad = /* @__PURE__ */ function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function jd() {
	let e = Cu();
	e.hook(J.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		Dd(e, t.descriptor);
	});
	let t = mu(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || X.highPerfModeEnabled) return;
		let r = kd(t, n.descriptor.app), i = {
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
		}, Ad.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	e.hook(J.SEND_INSPECTOR_TREE, t);
	let n = mu(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || X.highPerfModeEnabled) return;
		let r = kd(t, n.descriptor.app), i = {
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
		}, Ad.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	return e.hook(J.SEND_INSPECTOR_STATE, n), e.hook(J.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = kd(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(J.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		wd(e, t.descriptor);
	}), e.hook(J.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		X.highPerfModeEnabled || !X.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, Ad.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(J.GET_COMPONENT_INSTANCES, async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook(J.GET_COMPONENT_BOUNDS, async ({ instance: e }) => zu(e)), e.hook(J.GET_COMPONENT_NAME, ({ instance: e }) => Au(e)), e.hook(J.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = Y.value.instanceMap.get(e);
		t && nd(t);
	}), e.hook(J.COMPONENT_UNHIGHLIGHT, () => {
		rd();
	}), e;
}
K.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [], K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {}, K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "", K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [], K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var Md = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Nd() {
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
		timelineLayersState: Sd()
	};
}
K[Md] ??= Nd();
var Pd = mu((e) => {
	df.hooks.callHook(Ad.DEVTOOLS_STATE_UPDATED, { state: e });
});
mu((e, t) => {
	df.hooks.callHook(Ad.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var Fd = new Proxy(K.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? K.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : K.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), Y = new Proxy(K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function Id() {
	Pd({
		...K[Md],
		appRecords: Fd.value,
		activeAppRecordId: Y.id,
		tabs: K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function Ld(e) {
	K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Id();
}
function Rd(e) {
	K.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Id();
}
var X = new Proxy(K[Md], {
	get(e, t) {
		return t === "appRecords" ? Fd : t === "activeAppRecordId" ? Y.id : t === "tabs" ? K.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? K.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : K[Md][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, K[Md][t] = n, !0;
	}
});
function zd(e = {}) {
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
var Bd = new Proxy(K.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function Vd(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function Hd(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Ud(e) {
	return (Bd.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function Wd(e, t) {
	let n = Hd(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return Vd(e ? (Bd.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Gd(e, t) {
	let n = Hd(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Vd(t)));
}
function Kd(e, t, n) {
	let r = Hd(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), df.hooks.callHookWith((r) => {
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
}({}), Q = K.__VUE_DEVTOOLS_HOOK ??= Cu(), qd = {
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
}, Jd = class {
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
		let t = Od().find((e) => e.packageName === this.plugin.descriptor.packageName);
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
		}), this.plugin.descriptor.settings && Gd(e.id, this.plugin.descriptor.settings);
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
		return Wd(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
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
}, Yd = "__vue_devtool_undefined__", Xd = "__vue_devtool_infinity__", Zd = "__vue_devtool_negative_infinity__", Qd = "__vue_devtool_nan__";
Object.entries({
	[Yd]: "undefined",
	[Qd]: "NaN",
	[Xd]: "Infinity",
	[Zd]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function $d(e, t) {
	return qd.setupDevToolsPlugin(e, t);
}
function ef(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Jd({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: df
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function tf(e, t) {
	K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || X.highPerfModeEnabled && !t?.inspectingComponent || (K.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Bd.forEach((t) => {
		ef(t, e);
	}));
}
var nf = "__VUE_DEVTOOLS_ROUTER__", rf = "__VUE_DEVTOOLS_ROUTER_INFO__";
K[rf] ??= {
	currentRoute: null,
	routes: []
}, K[nf] ??= {}, new Proxy(K[rf], { get(e, t) {
	return K[rf][t];
} }), new Proxy(K[nf], { get(e, t) {
	if (t === "value") return K[nf];
} });
function af(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function of(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = of(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function sf(e) {
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
			matched: of(o)
		};
	}
	return e;
}
function cf(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = sf(t?.currentRoute.value), r = of(af(t)), i = console.warn;
		console.warn = () => {}, K[rf] = {
			currentRoute: n ? fu(n) : {},
			routes: fu(r)
		}, K[nf] = t, console.warn = i;
	}
	n(), qd.on.componentUpdated(mu(() => {
		t.value?.app === e.app && (n(), !X.highPerfModeEnabled && df.hooks.callHook(Ad.ROUTER_INFO_UPDATED, { state: K[rf] }));
	}, 200));
}
function lf(e) {
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
			let n = new yd(), r = {
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
			let n = kd(t);
			e.callHook(J.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return ld();
		},
		cancelInspectComponentInspector() {
			return cd();
		},
		getComponentRenderCode(e) {
			let t = Mu(Y.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return ud({ id: e });
		},
		openInEditor: zd,
		getVueInspector: pd,
		toggleApp(e, t) {
			let n = Fd.value.find((t) => t.id === e);
			n && (Rd(e), Ld(n), cf(n, Y), Ed(), tf(n.app, t));
		},
		inspectDOM(e) {
			let t = Mu(Y.value, e);
			if (t) {
				let [e] = Bu(t);
				e && (K.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			Kd(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Ud(e),
				values: Wd(e)
			};
		}
	};
}
K.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
var uf = jd();
K.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks: uf,
	get state() {
		return {
			...X,
			activeAppRecordId: Y.id,
			activeAppRecord: Y.value,
			appRecords: Fd.value
		};
	},
	api: lf(uf)
};
var df = K.__VUE_DEVTOOLS_KIT_CONTEXT__, ff = /* @__PURE__ */ wu(((e, t) => {
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
(/* @__PURE__ */ wu(((e, t) => {
	t.exports = ff();
})))(), K.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function pf(e) {
	X.highPerfModeEnabled = e ?? !X.highPerfModeEnabled, !e && Y.value && tf(Y.value.app);
}
function mf(e) {
	X.devtoolsClientDetected = {
		...X.devtoolsClientDetected,
		...e
	}, pf(!Object.values(X.devtoolsClientDetected).some(Boolean));
}
K.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= mf;
var hf = class {
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
}, gf = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new hf();
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
}, _f = class extends gf {
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
function vf(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function yf(e, t) {
	let n = vf(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function bf(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function xf(e, t) {
	return e.indexOf(t) !== -1;
}
function Sf(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var Cf = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return yf(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, wf = (e) => Object.prototype.toString.call(e).slice(8, -1), Tf = (e) => e === void 0, Ef = (e) => e === null, Df = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, Of = (e) => Df(e) && Object.keys(e).length === 0, kf = (e) => Array.isArray(e), Af = (e) => typeof e == "string", jf = (e) => typeof e == "number" && !isNaN(e), Mf = (e) => typeof e == "boolean", Nf = (e) => e instanceof RegExp, Pf = (e) => e instanceof Map, Ff = (e) => e instanceof Set, If = (e) => wf(e) === "Symbol", Lf = (e) => e instanceof Date && !isNaN(e.valueOf()), Rf = (e) => e instanceof Error, zf = (e) => typeof e == "number" && isNaN(e), Bf = (e) => Mf(e) || Ef(e) || Tf(e) || jf(e) || Af(e) || If(e), Vf = (e) => typeof e == "bigint", Hf = (e) => e === Infinity || e === -Infinity, Uf = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Wf = (e) => e instanceof URL, Gf = (e) => e.replace(/\./g, "\\."), Kf = (e) => e.map(String).map(Gf).join("."), qf = (e) => {
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
function Jf(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Yf = [
	Jf(Tf, "undefined", () => null, () => void 0),
	Jf(Vf, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	Jf(Lf, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	Jf(Rf, "Error", (e, t) => {
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
	Jf(Nf, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	Jf(Ff, "set", (e) => [...e.values()], (e) => new Set(e)),
	Jf(Pf, "map", (e) => [...e.entries()], (e) => new Map(e)),
	Jf((e) => zf(e) || Hf(e), "number", (e) => zf(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	Jf((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	Jf(Wf, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Xf(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Zf = Xf((e, t) => If(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Qf = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), $f = Xf(Uf, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Qf[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function ep(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var tp = Xf(ep, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), np = Xf((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), rp = [
	tp,
	Zf,
	np,
	$f
], ip = (e, t) => {
	let n = Sf(rp, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = Sf(Yf, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, ap = {};
Yf.forEach((e) => {
	ap[e.annotation] = e;
});
var op = (e, t, n) => {
	if (kf(t)) switch (t[0]) {
		case "symbol": return Zf.untransform(e, t, n);
		case "class": return tp.untransform(e, t, n);
		case "custom": return np.untransform(e, t, n);
		case "typed-array": return $f.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = ap[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, sp = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function cp(e) {
	if (xf(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (xf(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (xf(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var lp = (e, t) => {
	cp(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Ff(e)) e = sp(e, +r);
		else if (Pf(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = sp(e, i);
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
}, up = (e, t, n) => {
	if (cp(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (kf(r)) {
			let e = +n;
			r = r[e];
		} else if (Df(r)) r = r[n];
		else if (Ff(r)) {
			let e = +n;
			r = sp(r, e);
		} else if (Pf(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = sp(r, i);
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
	if (kf(r) ? r[+i] = n(r[+i]) : Df(r) && (r[i] = n(r[i])), Ff(r)) {
		let e = sp(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (Pf(r)) {
		let e = +t[t.length - 2], a = sp(r, e);
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
function dp(e, t, n = []) {
	if (!e) return;
	if (!kf(e)) {
		bf(e, (e, r) => dp(e, t, [...n, ...qf(r)]));
		return;
	}
	let [r, i] = e;
	i && bf(i, (e, r) => {
		dp(e, t, [...n, ...qf(r)]);
	}), t(r, n);
}
function fp(e, t, n) {
	return dp(t, (t, r) => {
		e = up(e, r, (e) => op(e, t, n));
	}), e;
}
function pp(e, t) {
	function n(t, n) {
		let r = lp(e, qf(n));
		t.map(qf).forEach((t) => {
			e = up(e, t, () => r);
		});
	}
	if (kf(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = up(e, qf(t), () => e);
		}), i && bf(i, n);
	} else bf(t, n);
	return e;
}
var mp = (e, t) => Df(e) || kf(e) || Pf(e) || Ff(e) || ep(e, t);
function hp(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function gp(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(Kf) : n[Kf(i)] = a.map(Kf);
	}), r ? Of(n) ? [r] : [r, n] : Of(n) ? void 0 : n;
}
var _p = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = Bf(e);
	if (!s) {
		hp(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!mp(e, n)) {
		let t = ip(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (xf(a, e)) return { transformedValue: null };
	let c = ip(e, n), l = c?.value ?? e, u = kf(l) ? [] : {}, d = {};
	bf(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = _p(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, kf(l.annotations) ? d[c] = l.annotations : Df(l.annotations) && bf(l.annotations, (e, t) => {
			d[Gf(c) + "." + t] = e;
		});
	});
	let f = Of(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
function vp(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function yp(e) {
	return vp(e) === "Array";
}
function bp(e) {
	if (vp(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function xp(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function Sp(e, t = {}) {
	if (yp(e)) return e.map((e) => Sp(e, t));
	if (!bp(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (yp(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return xp(n, r, Sp(i, t), e, t.nonenumerable), n;
	}, {});
}
var $ = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new _f(), this.symbolRegistry = new gf((e) => e.description ?? ""), this.customTransformerRegistry = new Cf(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = _p(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = gp(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = Sp(t);
		return n?.values && (r = fp(r, n.values, this)), n?.referentialEqualities && (r = pp(r, n.referentialEqualities)), r;
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
//#endregion
//#region node_modules/vue-router/dist/devtools-Bpr7ZAVB.js
$.defaultInstance = new $(), $.serialize = $.defaultInstance.serialize.bind($.defaultInstance), $.deserialize = $.defaultInstance.deserialize.bind($.defaultInstance), $.stringify = $.defaultInstance.stringify.bind($.defaultInstance), $.parse = $.defaultInstance.parse.bind($.defaultInstance), $.registerClass = $.defaultInstance.registerClass.bind($.defaultInstance), $.registerSymbol = $.defaultInstance.registerSymbol.bind($.defaultInstance), $.registerCustom = $.defaultInstance.registerCustom.bind($.defaultInstance), $.allowErrorProps = $.defaultInstance.allowErrorProps.bind($.defaultInstance), $.serialize, $.deserialize, $.stringify, $.parse, $.registerClass, $.registerCustom, $.registerSymbol, $.allowErrorProps, K.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [], K.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null, K.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null, K.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null, K.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null, K.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null, e();
var Cp = typeof document < "u", wp = /#/g, Tp = /&/g, Ep = /\//g, Dp = /=/g, Op = /\?/g, kp = /\+/g, Ap = /%5B/g, jp = /%5D/g, Mp = /%5E/g, Np = /%60/g, Pp = /%7B/g, Fp = /%7C/g, Ip = /%7D/g, Lp = /%20/g;
function Rp(e) {
	return e == null ? "" : encodeURI("" + e).replace(Fp, "|").replace(Ap, "[").replace(jp, "]");
}
function zp(e) {
	return Rp(e).replace(Pp, "{").replace(Ip, "}").replace(Mp, "^");
}
function Bp(e) {
	return Rp(e).replace(kp, "%2B").replace(Lp, "+").replace(wp, "%23").replace(Tp, "%26").replace(Np, "`").replace(Pp, "{").replace(Ip, "}").replace(Mp, "^");
}
function Vp(e) {
	return Bp(e).replace(Dp, "%3D");
}
function Hp(e) {
	return Rp(e).replace(wp, "%23").replace(Op, "%3F");
}
function Up(e) {
	return Hp(e).replace(Ep, "%2F");
}
function Wp(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {
		i.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0080({ text: "" + e });
	}
	return "" + e;
}
var Gp = /\/$/, Kp = (e) => e.replace(Gp, "");
function qp(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = tm(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Wp(o)
	};
}
function Jp(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Yp(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Xp(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Zp(t.matched[r], n.matched[i]) && Qp(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Zp(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Qp(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!$p(e[n], t[n])) return !1;
	return !0;
}
function $p(e, t) {
	return W(e) ? em(e, t) : W(t) ? em(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function em(e, t) {
	return W(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function tm(e, t) {
	if (e.startsWith("/")) return e;
	if (i.env.NODE_ENV !== "production" && !t.startsWith("/")) return G.VUE_ROUTER_R0070({
		to: e,
		from: t
	}), e;
	if (!e) return t;
	let n = t.split("/"), r = e.split("/"), a = r[r.length - 1];
	(a === ".." || a === ".") && r.push("");
	let o = n.length - 1, s, c;
	for (s = 0; s < r.length; s++) if (c = r[s], c !== ".") if (c === "..") o > 1 && o--;
	else break;
	return n.slice(0, o).join("/") + "/" + r.slice(s).join("/");
}
var nm = {
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
function rm(e) {
	if (!e) if (Cp) {
		let t = document.querySelector("base");
		e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
	} else e = "/";
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Kp(e);
}
var im = /^[^#]+#/;
function am(e, t) {
	return e.replace(im, "#") + t;
}
function om(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var sm = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function cm(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#");
		if (i.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1)))) try {
			let t = document.querySelector(e.el);
			if (r && t) {
				G.VUE_ROUTER_R0040({ el: e.el });
				return;
			}
		} catch {
			G.VUE_ROUTER_R0041({ el: e.el });
			return;
		}
		let a = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!a) {
			i.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0042({ el: e.el });
			return;
		}
		t = om(a, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function lm(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var um = /* @__PURE__ */ new Map();
function dm(e, t) {
	um.set(e, t);
}
function fm(e) {
	let t = um.get(e);
	return um.delete(e), t;
}
function pm(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function mm(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function hm(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(kp, " "), i = r.indexOf("="), a = Wp(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Wp(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			W(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function gm(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = Vp(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(W(r) ? r.map((e) => e && Bp(e)) : [r && Bp(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function _m(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = W(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function vm() {
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
function ym(e, t, n, r, a, o = (e) => e()) {
	let s = r && (r.enterCallbacks[a] = r.enterCallbacks[a] || []);
	return () => new Promise((c, l) => {
		let u = (e) => {
			e === !1 ? l(Hl(4, {
				from: n,
				to: t
			})) : e instanceof Error ? l(e) : pm(e) ? l(Hl(2, {
				from: t,
				to: e
			})) : (s && r.enterCallbacks[a] === s && typeof e == "function" && s.push(e), c());
		}, d = o(() => e.call(r && r.instances[a], t, n, i.env.NODE_ENV === "production" ? u : bm(xm(u, t, n)))), f = Promise.resolve(d);
		if (e.length < 3 && (f = f.then(u)), i.env.NODE_ENV !== "production" && e.length > 2) {
			let t = {
				name: e.name,
				guard: e.toString()
			};
			if (typeof d == "object" && "then" in d) f = f.then((e) => u._called ? e : (G.VUE_ROUTER_R0023(t), Promise.reject(/* @__PURE__ */ Error("Invalid navigation guard"))));
			else if (d !== void 0 && !u._called) {
				G.VUE_ROUTER_R0023(t), l(/* @__PURE__ */ Error("Invalid navigation guard"));
				return;
			}
		}
		f.catch((e) => l(e));
	});
}
function bm(e) {
	let t = !1;
	return function() {
		return t || (t = !0, G.VUE_ROUTER_R0025()), e.apply(this, arguments);
	};
}
function xm(e, t, n) {
	let r = 0;
	return function() {
		r++ === 1 && G.VUE_ROUTER_R0024({
			from: n.fullPath,
			to: t.fullPath
		}), e._called = !0, r === 1 && e.apply(null, arguments);
	};
}
function Sm(e, t, n, r, a = (e) => e()) {
	let o = [];
	for (let s of e) {
		i.env.NODE_ENV !== "production" && !s.components && s.children && !s.children.length && G.VUE_ROUTER_R0026({ path: s.path });
		for (let e in s.components) {
			let c = s.components[e];
			if (i.env.NODE_ENV !== "production") {
				if (!c || typeof c != "object" && typeof c != "function") throw G.VUE_ROUTER_R0027({
					name: e,
					path: s.path,
					received: String(c)
				}), Error("Invalid route component");
				if ("then" in c) {
					G.VUE_ROUTER_R0028({
						name: e,
						path: s.path
					});
					let t = c;
					c = () => t;
				} else c.__asyncLoader && !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, G.VUE_ROUTER_R0029({
					name: e,
					path: s.path
				}));
			}
			if (!(t !== "beforeRouteEnter" && !s.instances[e])) if (Fl(c)) {
				let i = (c.__vccOpts || c)[t];
				i && o.push(ym(i, n, r, s, e, a));
			} else {
				let l = c();
				i.env.NODE_ENV !== "production" && !("catch" in l) && (G.VUE_ROUTER_R0030({
					name: e,
					path: s.path
				}), l = Promise.resolve(l)), o.push(() => l.then((i) => {
					if (!i) throw Error(`Couldn't resolve component "${e}" at "${s.path}"`);
					let o = Il(i) ? i.default : i;
					s.mods[e] = i, s.components[e] = o;
					let c = (o.__vccOpts || o)[t];
					return c && ym(c, n, r, s, e, a)();
				}));
			}
		}
	}
	return o;
}
function Cm(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Zp(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Zp(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
function wm(e, t) {
	let n = U({}, e, { matched: e.matched.map((e) => Wm(e, [
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
function Tm(e) {
	return { _custom: { display: e } };
}
var Em = 0;
function Dm(e, t, n) {
	if (t.__hasDevtools) return;
	t.__hasDevtools = !0;
	let r = Em++;
	$d({
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
				value: wm(t.currentRoute.value, "Current Route")
			});
		}), i.on.visitComponentTree(({ treeNode: e, componentInstance: t }) => {
			if (t.__vrv_devtools) {
				let n = t.__vrv_devtools;
				e.tags.push({
					label: (n.name ? `${n.name.toString()}: ` : "") + n.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: Am
				});
			}
			W(t.__vrl_devtools) && (t.__devtoolsApi = i, t.__vrl_devtools.forEach((t) => {
				let n = t.route.path, r = Pm, i = "", a = 0;
				t.error ? (n = t.error, r = Im, a = Lm) : t.isExactActive ? (r = Mm, i = "This is exactly active") : t.isActive && (r = jm, i = "This link is active"), e.tags.push({
					label: n,
					textColor: a,
					tooltip: i,
					backgroundColor: r
				});
			}));
		}), de(t.currentRoute, () => {
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
				guard: Tm("beforeEach"),
				from: wm(t, "Current Location during this navigation"),
				to: wm(e, "Target location")
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
			let r = { guard: Tm("afterEach") };
			n ? (r.failure = { _custom: {
				type: Error,
				readOnly: !0,
				display: n ? n.message : "",
				tooltip: "Navigation Failure",
				value: n
			} }, r.status = Tm("❌")) : r.status = Tm("✅"), r.from = wm(t, "Current Location during this navigation"), r.to = wm(e, "Target location"), i.addTimelineEvent({
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
			r.forEach(Hm), e.filter && (r = r.filter((t) => Um(t, e.filter.toLowerCase()))), r.forEach((e) => Vm(e, t.currentRoute.value)), e.rootNodes = r.map(Rm);
		}
		let l;
		i.on.getInspectorTree((t) => {
			l = t, t.app === e && t.inspectorId === s && c();
		}), i.on.getInspectorState((t) => {
			if (t.app === e && t.inspectorId === s) {
				let e = n.getRoutes().find((e) => e.record.__vd_id === t.nodeId);
				e && (t.state = { options: km(e) });
			}
		}), i.sendInspectorTree(s), i.sendInspectorState(s);
	});
}
function Om(e) {
	return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function km(e) {
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
			display: e.keys.map((e) => `${e.name}${Om(e)}`).join(" "),
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
var Am = 15485081, jm = 2450411, Mm = 8702998, Nm = 2282478, Pm = 16486972, Fm = 6710886, Im = 16704226, Lm = 12131356;
function Rm(e) {
	let t = [], { record: n } = e;
	n.name != null && t.push({
		label: String(n.name),
		textColor: 0,
		backgroundColor: Nm
	}), n.aliasOf && t.push({
		label: "alias",
		textColor: 0,
		backgroundColor: Pm
	}), e.__vd_match && t.push({
		label: "matches",
		textColor: 0,
		backgroundColor: Am
	}), e.__vd_exactActive && t.push({
		label: "exact",
		textColor: 0,
		backgroundColor: Mm
	}), e.__vd_active && t.push({
		label: "active",
		textColor: 0,
		backgroundColor: jm
	}), n.redirect && t.push({
		label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: Fm
	});
	let r = n.__vd_id;
	return r ?? (r = String(zm++), n.__vd_id = r), {
		id: r,
		label: n.path,
		tags: t,
		children: e.children.map(Rm)
	};
}
var zm = 0, Bm = /^\/(.*)\/([a-z]*)$/;
function Vm(e, t) {
	let n = t.matched.length && Zp(t.matched[t.matched.length - 1], e.record);
	e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((t) => Zp(t, e.record))), e.children.forEach((e) => Vm(e, t));
}
function Hm(e) {
	e.__vd_match = !1, e.children.forEach(Hm);
}
function Um(e, t) {
	let n = String(e.re).match(Bm);
	if (e.__vd_match = !1, !n || n.length < 3) return !1;
	if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t)) return e.children.forEach((e) => Um(e, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
	let r = e.record.path.toLowerCase(), i = Wp(r);
	return !t.startsWith("/") && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((e) => Um(e, t));
}
function Wm(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || (n[r] = e[r]);
	return n;
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
e();
var Gm = () => location.protocol + "//" + location.host;
function Km(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Yp(n, "");
	}
	return Yp(n, e) + r + i;
}
function qm(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Km(e, location), c = n.value, l = t.value, u = 0;
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
			e.replaceState(U({}, e.state, { scroll: sm() }), "");
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
function Jm(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? sm() : null
	};
}
function Ym(e) {
	let { history: t, location: n } = window, r = { value: Km(e, n) }, a = { value: t.state };
	a.value || o(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function o(r, o, s) {
		let c = e.indexOf("#"), l = c > -1 ? (n.host && document.querySelector("base") ? e : e.slice(c)) + r : Gm() + e + r;
		try {
			t[s ? "replaceState" : "pushState"](o, "", l), a.value = o;
		} catch (e) {
			i.env.NODE_ENV === "production" ? console.error(e) : G.VUE_ROUTER_R0120({ cause: e }), n[s ? "replace" : "assign"](l);
		}
	}
	function s(e, n) {
		o(e, U({}, t.state, Jm(a.value.back, e, a.value.forward, !0), n, { position: a.value.position }), !0), r.value = e;
	}
	function c(e, n) {
		let s = U({}, a.value, t.state, {
			forward: e,
			scroll: sm()
		});
		i.env.NODE_ENV !== "production" && !t.state && G.VUE_ROUTER_R0121(), o(s.current, s, !0), o(e, U({}, Jm(r.value, e, null), { position: s.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: a,
		push: c,
		replace: s
	};
}
function Xm(e) {
	e = rm(e);
	let t = Ym(e), n = qm(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = U({
		location: "",
		base: e,
		go: r,
		createHref: am.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function Zm(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), i.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && G.VUE_ROUTER_R0110({
		base: e,
		suggestion: e.replace(/#.*$/, "#")
	}), Xm(e);
}
var Qm = {
	type: 0,
	value: ""
}, $m = /[a-zA-Z0-9_]/;
function eh(e) {
	if (!e) return [[]];
	if (e === "/") return [[Qm]];
	if (!e.startsWith("/")) throw Error(i.env.NODE_ENV === "production" ? `Invalid path "${e}"` : `Route paths should start with a "/": "${e}" should be "/${e}".`);
	function t(e) {
		throw Error(`ERR (${n})/"${u}": ${e}`);
	}
	let n = 0, r = n, a = [], o;
	function s() {
		o && a.push(o), o = [];
	}
	let c = 0, l, u = "", d = "";
	function f() {
		u &&= (n === 0 ? o.push({
			type: 0,
			value: u
		}) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({
			type: 1,
			value: u,
			regexp: d,
			repeatable: l === "*" || l === "+",
			optional: l === "*" || l === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function p() {
		u += l;
	}
	for (; c < e.length;) switch (l = e[c++], n) {
		case 0:
			l === "\\" ? (r = n, n = 4) : l === "/" ? (u && f(), s()) : l === ":" ? (f(), n = 1) : p();
			break;
		case 4:
			p(), n = r;
			break;
		case 1:
			l === "(" ? n = 2 : $m.test(l) ? p() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
			break;
		case 2:
			l === ")" ? d[d.length - 1] == "\\" ? d = d.slice(0, -1) + l : n = 3 : d += l;
			break;
		case 3:
			f(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--, d = "";
			break;
		default:
			t("Unknown state");
			break;
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), s(), a;
}
var th = "[^/]+?", nh = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, rh = /[.+*?^${}()[\]/\\]/g;
function ih(e, t) {
	let n = U({}, nh, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(rh, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || th;
				if (u !== th) {
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
function ah(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function oh(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = ah(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (sh(r)) return 1;
		if (sh(i)) return -1;
	}
	return i.length - r.length;
}
function sh(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var ch = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function lh(e, t, n) {
	let r = ih(eh(e.path), n);
	if (i.env.NODE_ENV !== "production") {
		let t = /* @__PURE__ */ new Set();
		for (let n of r.keys) t.has(n.name) && G.VUE_ROUTER_R0090({
			name: n.name,
			path: e.path
		}), t.add(n.name);
	}
	let a = U(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function uh(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = zl(ch, t);
	function a(e) {
		return r.get(e);
	}
	function o(e, n, r) {
		let a = !r, c = fh(e);
		i.env.NODE_ENV !== "production" && vh(c, n), c.aliasOf = r && r.record;
		let u = zl(t, e), d = [c];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) d.push(fh(U({}, c, {
				components: r ? r.record.components : c.components,
				path: e,
				aliasOf: r ? r.record : c
			})));
		}
		let f, p;
		for (let t of d) {
			let { path: d } = t;
			if (n && d[0] !== "/") {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (d && r + d);
			}
			if (i.env.NODE_ENV !== "production" && t.path === "*") throw Error("Catch all routes (\"*\") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.");
			if (f = lh(t, n, u), i.env.NODE_ENV !== "production" && n && d[0] === "/" && bh(f, n), r ? (r.alias.push(f), i.env.NODE_ENV !== "production" && _h(r, f)) : (p ||= f, p !== f && p.alias.push(f), a && e.name && !mh(f) && (i.env.NODE_ENV !== "production" && yh(e, n), s(e.name))), Ch(f) && l(f), c.children) {
				let e = c.children;
				for (let t = 0; t < e.length; t++) o(e[t], f, r && r.children[t]);
			}
			r ||= f;
		}
		return p ? () => {
			s(p);
		} : Rl;
	}
	function s(e) {
		if (mm(e)) {
			let t = r.get(e);
			t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(s), t.alias.forEach(s));
		} else {
			let t = n.indexOf(e);
			t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(s), e.alias.forEach(s));
		}
	}
	function c() {
		return n;
	}
	function l(e) {
		let t = xh(e, n);
		n.splice(t, 0, e), e.record.name && !mh(e) && r.set(e.record.name, e);
	}
	function u(e, t) {
		let a, o = {}, s, c;
		if ("name" in e && e.name) {
			if (a = r.get(e.name), !a) throw Hl(1, { location: e });
			if (i.env.NODE_ENV !== "production") {
				let n = Object.keys(e.params || {}).filter((e) => !a.keys.find((t) => t.name === e));
				if (n.length) {
					let e = !a.keys.length && n.some((e) => e in t.params);
					G.VUE_ROUTER_R0100({
						params: n.join("\", \""),
						inherited: e ? " If you are using a catch-all route with a named redirect, pass an empty `params` object: `redirect: { name: '...', params: {} }`." : ""
					});
				}
			}
			c = a.record.name, o = U(dh(t.params, a.keys.filter((e) => !e.optional).concat(a.parent ? a.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && dh(e.params, a.keys.map((e) => e.name))), s = a.stringify(o);
		} else if (e.path != null) s = e.path, i.env.NODE_ENV !== "production" && !s.startsWith("/") && G.VUE_ROUTER_R0101({ path: s }), a = n.find((e) => e.re.test(s)), a && (o = a.parse(s), c = a.record.name, a.keys.forEach((e) => {
			e.optional && !o[e.name] && delete o[e.name];
		}));
		else {
			if (a = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !a) throw Hl(1, {
				location: e,
				currentLocation: t
			});
			c = a.record.name, o = U({}, t.params, e.params), s = a.stringify(o);
		}
		let l = [], u = a;
		for (; u;) l.unshift(u.record), u = u.parent;
		return {
			name: c,
			path: s,
			params: o,
			matched: l,
			meta: hh(l)
		};
	}
	e.forEach((e) => o(e));
	function d() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: o,
		resolve: u,
		removeRoute: s,
		clearRoutes: d,
		getRoutes: c,
		getRecordMatcher: a
	};
}
function dh(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function fh(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: ph(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function ph(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function mh(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function hh(e) {
	return e.reduce((e, t) => U(e, t.meta), {});
}
function gh(e, t) {
	return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function _h(e, t) {
	for (let n of e.keys) if (!n.optional && !t.keys.find(gh.bind(null, n))) {
		G.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
	for (let n of t.keys) if (!n.optional && !e.keys.find(gh.bind(null, n))) {
		G.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
}
function vh(e, t) {
	t && t.record.name && !e.name && !e.path && e.children.length === 0 && G.VUE_ROUTER_R0103({ name: String(t.record.name) });
}
function yh(e, t) {
	for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function bh(e, t) {
	for (let n of t.keys) if (!e.keys.find(gh.bind(null, n))) {
		G.VUE_ROUTER_R0104({
			path: e.record.path,
			name: n.name,
			parent: t.record.path
		});
		return;
	}
}
function xh(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		oh(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let a = Sh(e);
	return a && (r = t.lastIndexOf(a, r - 1), i.env.NODE_ENV !== "production" && r < 0 && G.VUE_ROUTER_R0105({
		ancestor: a.record.path,
		record: e.record.path
	})), r;
}
function Sh(e) {
	let t = e;
	for (; t = t.parent;) if (Ch(t) && oh(e, t) === 0) return t;
}
function Ch({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function wh(e) {
	let t = ee(Jl), n = ee(Yl), r = !1, a = null, o = C(() => {
		let n = ue(e.to);
		return i.env.NODE_ENV !== "production" && (!r || n !== a) && (pm(n) || G.VUE_ROUTER_R0050({ to: n }), a = n, r = !0), t.resolve(n);
	}), s = C(() => {
		let { matched: e } = o.value, { length: t } = e, r = e[t - 1], i = n.matched;
		if (!r || !i.length) return -1;
		let a = i.findIndex(Zp.bind(null, r));
		if (a > -1) return a;
		let s = kh(e[t - 2]);
		return t > 1 && kh(r) === s && i[i.length - 1].path !== s ? i.findIndex(Zp.bind(null, e[t - 2])) : a;
	}), c = C(() => s.value > -1 && Oh(n.params, o.value.params)), l = C(() => s.value > -1 && s.value === n.matched.length - 1 && Qp(n.params, o.value.params));
	function u(n = {}) {
		if (Dh(n)) {
			let n = t[ue(e.replace) ? "replace" : "push"](ue(e.to)).catch(Rl);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	if (i.env.NODE_ENV !== "production" && Cp) {
		let t = j();
		if (t) {
			let n = {
				route: o.value,
				isActive: c.value,
				isExactActive: l.value,
				error: null
			};
			t.__vrl_devtools = t.__vrl_devtools || [], t.__vrl_devtools.push(n), fe(() => {
				n.route = o.value, n.isActive = c.value, n.isExactActive = l.value, n.error = pm(ue(e.to)) ? null : "Invalid \"to\" value";
			}, { flush: "post" });
		}
	}
	return {
		route: o,
		href: C(() => o.value.href),
		isActive: c,
		isExactActive: l,
		navigate: u
	};
}
function Th(e) {
	return e.length === 1 ? e[0] : e;
}
var Eh = /* @__PURE__ */ A({
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
	useLink: wh,
	setup(e, { slots: t }) {
		let n = ie(wh(e)), { options: r } = ee(Jl), i = C(() => ({
			[Ah(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Ah(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && Th(t.default(n));
			return e.custom ? r : M("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function Dh(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Oh(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!W(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function kh(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Ah = (e, t, n) => e ?? t ?? n, jh = /*#__PURE__*/ A({
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
		i.env.NODE_ENV !== "production" && Ph();
		let r = ee(Xl), a = C(() => e.route || r.value), o = ee(ql, 0), s = C(() => {
			let e = ue(o), { matched: t } = a.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), c = C(() => a.value.matched[s.value]);
		re(ql, C(() => s.value + 1)), re(Kl, c), re(Xl, a);
		let l = ae();
		return de(() => [
			l.value,
			c.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Zp(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = a.value, o = e.name, u = c.value, d = u && u.components[o];
			if (!d) return Mh(n.default, {
				Component: d,
				route: r
			});
			let f = u.props[o], p = M(d, U({}, f ? f === !0 ? r.params : typeof f == "function" ? f(r) : f : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (u.instances[o] = null);
				},
				ref: l
			}));
			if (i.env.NODE_ENV !== "production" && Cp && p.ref) {
				let e = {
					depth: s.value,
					name: u.name,
					path: u.path,
					meta: u.meta
				};
				(W(p.ref) ? p.ref.map((e) => e.i) : [p.ref.i]).forEach((t) => {
					t.__vrv_devtools = e;
				});
			}
			return Mh(n.default, {
				Component: p,
				route: r
			}) || p;
		};
	}
});
function Mh(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Nh = jh;
function Ph() {
	let e = j(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
	if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
		let e = t === "KeepAlive" ? "keep-alive" : "transition";
		G.VUE_ROUTER_R0060({ comp: e });
	}
}
function Fh(e) {
	let t = uh(e.routes, e), n = e.parseQuery || hm, r = e.stringifyQuery || gm, a = e.history;
	if (i.env.NODE_ENV !== "production" && !a) throw Error("Provide the \"history\" option when calling \"createRouter()\": https://router.vuejs.org/api/interfaces/RouterOptions.html#history");
	let o = vm(), s = vm(), c = vm(), l = ce(nm), u = nm;
	Cp && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let d = Ll.bind(null, (e) => "" + e), f = Ll.bind(null, Up), p = Ll.bind(null, Wp);
	function m(e, n) {
		let r, a;
		return mm(e) ? (r = t.getRecordMatcher(e), i.env.NODE_ENV !== "production" && !r && G.VUE_ROUTER_R0001({ name: String(e) }), a = n) : a = e, t.addRoute(a, r);
	}
	function h(e) {
		let n = t.getRecordMatcher(e);
		n ? t.removeRoute(n) : i.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0002({ name: String(e) });
	}
	function g() {
		return t.getRoutes().map((e) => e.record);
	}
	function _(e) {
		return !!t.getRecordMatcher(e);
	}
	function v(e, o) {
		if (o = U({}, o || l.value), typeof e == "string") {
			let r = qp(n, e, o.path), s = t.resolve({ path: r.path }, o), c = a.createHref(r.fullPath);
			return i.env.NODE_ENV !== "production" && (c.startsWith("//") ? G.VUE_ROUTER_R0003({
				location: e,
				href: c
			}) : s.matched.length || G.VUE_ROUTER_R0004({ path: e })), U(r, s, {
				params: p(s.params),
				redirectedFrom: void 0,
				href: c
			});
		}
		if (i.env.NODE_ENV !== "production" && !pm(e)) return G.VUE_ROUTER_R0005({ rawLocation: e }), v({});
		let s;
		if (e.path != null) i.env.NODE_ENV !== "production" && "params" in e && !("name" in e) && Object.keys(e.params).length && G.VUE_ROUTER_R0006({ path: e.path }), s = U({}, e, { path: qp(n, e.path, o.path).path });
		else {
			let t = U({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			s = U({}, e, { params: f(t) }), o.params = f(o.params);
		}
		let c = t.resolve(s, o), u = e.hash || "";
		i.env.NODE_ENV !== "production" && u && !u.startsWith("#") && G.VUE_ROUTER_R0007({ hash: u }), c.params = d(p(c.params));
		let m = Jp(r, U({}, e, {
			hash: zp(u),
			path: c.path
		})), h = a.createHref(m);
		return i.env.NODE_ENV !== "production" && (h.startsWith("//") ? G.VUE_ROUTER_R0003({
			location: e,
			href: h
		}) : c.matched.length || G.VUE_ROUTER_R0004({ path: e.path == null ? e : e.path })), U({
			fullPath: m,
			hash: u,
			query: r === gm ? _m(e.query) : e.query || {}
		}, c, {
			redirectedFrom: void 0,
			href: h
		});
	}
	function y(e) {
		return typeof e == "string" ? qp(n, e, l.value.path) : U({}, e);
	}
	function b(e, t) {
		if (u !== e) return Hl(8, {
			from: t,
			to: e
		});
	}
	function x(e) {
		return w(e);
	}
	function S(e) {
		return x(U(y(e), { replace: !0 }));
	}
	function C(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, a = typeof r == "function" ? r(e, t) : r;
			if (typeof a == "string" && (a = a.includes("?") || a.includes("#") ? a = y(a) : { path: a }, a.params = {}), i.env.NODE_ENV !== "production" && a.path == null && !("name" in a)) throw G.VUE_ROUTER_R0008({
				target: JSON.stringify(a, null, 2),
				to: e.fullPath
			}), Error("Invalid redirect");
			return U({
				query: e.query,
				hash: e.hash,
				params: a.path == null ? e.params : {}
			}, a);
		}
	}
	function w(e, t) {
		let n = u = v(e), a = l.value, o = e.state, s = e.force, c = e.replace === !0, d = C(n, a);
		if (d) return w(U(y(d), {
			state: typeof d == "object" ? U({}, o, d.state) : o,
			force: s,
			replace: c
		}), t || n);
		let f = n;
		f.redirectedFrom = t;
		let p;
		return !s && Xp(r, a, n) && (p = Hl(16, {
			to: f,
			from: a
		}), ae(a, a, !0, !1)), (p ? Promise.resolve(p) : D(f, a)).catch((e) => Ul(e) ? Ul(e, 2) ? e : ie(e) : N(e, f, a)).then((e) => {
			if (e) {
				if (Ul(e, 2)) return i.env.NODE_ENV !== "production" && Xp(r, v(e.to), f) && t && (t._count = t._count ? t._count + 1 : 1) > 30 ? (G.VUE_ROUTER_R0009({
					from: a.fullPath,
					to: f.fullPath
				}), Promise.reject(/* @__PURE__ */ Error("Infinite redirect in navigation guard"))) : w(U({ replace: c }, y(e.to), {
					state: typeof e.to == "object" ? U({}, o, e.to.state) : o,
					force: s
				}), t || f);
			} else e = k(f, a, !0, c, o);
			return O(f, a, e), e;
		});
	}
	function T(e, t) {
		let n = b(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function E(e) {
		let t = le.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function D(e, t) {
		let n, [r, i, a] = Cm(e, t);
		n = Sm(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(ym(r, e, t));
		});
		let c = T.bind(null, e, t);
		return n.push(c), I(n).then(() => {
			n = [];
			for (let r of o.list()) n.push(ym(r, e, t));
			return n.push(c), I(n);
		}).then(() => {
			n = Sm(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(ym(r, e, t));
			});
			return n.push(c), I(n);
		}).then(() => {
			n = [];
			for (let r of a) if (r.beforeEnter) if (W(r.beforeEnter)) for (let i of r.beforeEnter) n.push(ym(i, e, t));
			else n.push(ym(r.beforeEnter, e, t));
			return n.push(c), I(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Sm(a, "beforeRouteEnter", e, t, E), n.push(c), I(n))).then(() => {
			n = [];
			for (let r of s.list()) n.push(ym(r, e, t));
			return n.push(c), I(n);
		}).catch((e) => Ul(e, 8) ? e : Promise.reject(e));
	}
	function O(e, t, n) {
		c.list().forEach((r) => E(() => r(e, t, n)));
	}
	function k(e, t, n, r, i) {
		let o = b(e, t);
		if (o) return o;
		let s = t === nm, c = Cp ? history.state : {};
		n && (r || s ? a.replace(e.fullPath, U({ scroll: s && c && c.scroll }, i)) : a.push(e.fullPath, i)), l.value = e, ae(e, t, n, s), ie();
	}
	let A;
	function j() {
		A ||= a.listen((e, t, n) => {
			if (!F.listening) return;
			let r = v(e), i = C(r, F.currentRoute.value);
			if (i) {
				w(U(i, {
					replace: !0,
					force: !0
				}), r).catch(Rl);
				return;
			}
			u = r;
			let o = l.value;
			Cp && dm(lm(o.fullPath, n.delta), sm()), D(r, o).catch((e) => Ul(e, 12) ? e : Ul(e, 2) ? (w(U(y(e.to), { force: !0 }), r).then((e) => {
				Ul(e, 20) && !n.delta && n.type === "pop" && a.go(-1, !1);
			}).catch(Rl), Promise.reject()) : (n.delta && a.go(-n.delta, !1), N(e, r, o))).then((e) => {
				e ||= k(r, o, !1), e && (n.delta && !Ul(e, 8) ? a.go(-n.delta, !1) : n.type === "pop" && Ul(e, 20) && a.go(-1, !1)), O(r, o, e);
			}).catch(Rl);
		});
	}
	let M = vm(), ee = vm(), ne;
	function N(e, t, n) {
		ie(e);
		let r = ee.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : (i.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0010(), console.error(e)), Promise.reject(e);
	}
	function re() {
		return ne && l.value !== nm ? Promise.resolve() : new Promise((e, t) => {
			M.add([e, t]);
		});
	}
	function ie(e) {
		return ne || (ne = !e, j(), M.list().forEach(([t, n]) => e ? n(e) : t()), M.reset()), e;
	}
	function ae(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Cp || !a) return Promise.resolve();
		let o = !r && fm(lm(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return te().then(() => a(t, n, o)).then((e) => t === l.value && e && cm(e)).catch((e) => t === l.value && N(e, t, n));
	}
	let oe = (e) => a.go(e), P, le = /* @__PURE__ */ new Set(), F = {
		currentRoute: l,
		listening: !0,
		addRoute: m,
		removeRoute: h,
		clearRoutes: t.clearRoutes,
		hasRoute: _,
		getRoutes: g,
		resolve: v,
		options: e,
		push: x,
		replace: S,
		go: oe,
		back: () => oe(-1),
		forward: () => oe(1),
		beforeEach: o.add,
		beforeResolve: s.add,
		afterEach: c.add,
		onError: ee.add,
		isReady: re,
		install(e) {
			e.component("RouterLink", Eh), e.component("RouterView", Nh), e.config.globalProperties.$router = F, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => ue(l)
			}), Cp && !P && l.value === nm && (P = !0, x(a.location).catch((e) => {
				i.env.NODE_ENV !== "production" && G.VUE_ROUTER_R0011({ cause: e });
			}));
			let n = {};
			for (let e in nm) Object.defineProperty(n, e, {
				get: () => l.value[e],
				enumerable: !0
			});
			e.provide(Jl, F), e.provide(Yl, se(n)), e.provide(Xl, l);
			let r = e.unmount;
			le.add(e), e.unmount = function() {
				le.delete(e), le.size < 1 && (u = nm, A && A(), A = null, l.value = nm, P = !1, ne = !1), r();
			}, i.env.NODE_ENV !== "production" && Cp && Dm(e, F, t);
		}
	};
	function I(e) {
		return e.reduce((e, t) => e.then(() => E(t)), Promise.resolve());
	}
	return F;
}
//#endregion
//#region src/App.vue
var Ih = {
	name: "App",
	computed: {
		...x(u, { store_ready: (e) => e.ready }),
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
		SparqlConnection: hl,
		GraphList: Tl,
		ClassList: Dl,
		Splitpanes: v,
		Pane: _,
		RouterLink: Eh,
		RouterView: Nh
	},
	methods: { useSelectionStore: l },
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
		let t = u(), n = l();
		return t.updateEndpointConfiguration(e.config), n.initConfig(e.config), {
			rdfStore: t,
			selectionStore: n
		};
	}
}, Lh = { class: "navbar navbar-expand-lg bg-body-tertiary" }, Rh = { class: "container-fluid" }, zh = {
	class: "navbar-brand",
	href: "#"
}, Bh = {
	class: "collapse navbar-collapse",
	id: "navbarNav"
}, Vh = {
	key: 0,
	class: "d-flex ms-auto me-auto w-75",
	role: "graph-navigation"
}, Hh = { class: "form-floating col-6" }, Uh = { class: "form-floating col-6" }, Wh = { class: "navbar-nav" }, Gh = { class: "nav-item" }, Kh = {
	key: 0,
	class: "nav-link"
}, qh = {
	key: 1,
	class: "nav-link"
}, Jh = { class: "nav-item" }, Yh = { class: "container-fluid" }, Xh = {
	key: 0,
	class: "row"
}, Zh = { class: "nav nav-tabs" }, Qh = { key: 1 };
function $h(e, t, n, r, i, a) {
	let o = P("SparqlConnection"), s = P("GraphList"), c = P("pane"), l = P("ClassList"), u = P("splitpanes"), d = P("RouterLink"), f = P("RouterView");
	return N(), E(S, null, [D("nav", Lh, [D("div", Rh, [
		D("a", zh, [t[2] ||= D("img", {
			src: "/OntoPad/pad/logo.svg",
			alt: "{{ title }}",
			width: "30",
			height: "24"
		}, null, -1), O(" " + le(n.title), 1)]),
		t[5] ||= D("button", {
			class: "navbar-toggler",
			type: "button",
			"data-bs-toggle": "collapse",
			"data-bs-target": "#navbarNav",
			"aria-controls": "navbarNav",
			"aria-expanded": "false",
			"aria-label": "Toggle navigation"
		}, [D("span", { class: "navbar-toggler-icon" })], -1),
		D("div", Bh, [e.store_ready ? (N(), E("form", Vh, [D("div", Hh, [L(D("input", {
			type: "text",
			class: "form-control",
			id: "graph_iri",
			"aria-label": "Graph IRI",
			"onUpdate:modelValue": t[0] ||= (e) => a.graph_iri = e,
			placeholder: "Graph IRI"
		}, null, 512), [[I, a.graph_iri]]), t[3] ||= D("label", { for: "graph_iri" }, "Graph IRI", -1)]), D("div", Uh, [L(D("input", {
			type: "text",
			class: "form-control",
			id: "resource_iri",
			"aria-label": "Resource IRI",
			"onUpdate:modelValue": t[1] ||= (e) => a.resource_iri = e,
			placeholder: "Resource IRI"
		}, null, 512), [[I, a.resource_iri]]), t[4] ||= D("label", { for: "resource_iri" }, "Resource IRI", -1)])])) : T("", !0), D("ul", Wh, [D("li", Gh, [e.store_ready ? (N(), E("span", Kh, "🟢 Store is ready")) : (N(), E("span", qh, "🔄 Loading"))]), D("li", Jh, [k(o)])])])
	])]), D("div", Yh, [e.store_ready ? (N(), E("div", Xh, [k(u, { class: "default-theme" }, {
		default: pe(() => [k(c, { size: "30" }, {
			default: pe(() => [k(u, {
				horizontal: "",
				style: { height: "80vh" }
			}, {
				default: pe(() => [k(c, { size: "30" }, {
					default: pe(() => [k(s, {
						graph_iri: a.graph_iri,
						selectGraph: (e) => {
							a.useSelectionStore().changeGraphIri(e), a.useSelectionStore().changeResourceIri(e);
						}
					}, null, 8, ["graph_iri", "selectGraph"])]),
					_: 1
				}), k(c, { size: "70" }, {
					default: pe(() => [k(l, {
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
		}), k(c, { size: "90" }, {
			default: pe(() => [D("ul", Zh, [(N(!0), E(S, null, oe(e.$navigation.main, (e, t) => (N(), E("li", {
				key: t,
				class: "nav-item"
			}, [k(d, {
				class: "nav-link",
				"active-class": "active",
				to: e.to
			}, {
				default: pe(() => [O(le(e.title), 1)]),
				_: 2
			}, 1032, ["to"])]))), 128))]), k(f)]),
			_: 1
		})]),
		_: 1
	})])) : (N(), E("div", Qh, " Waiting for Store to be configured … "))])], 64);
}
var eg = /*#__PURE__*/ f(Ih, [["render", $h], ["__scopeId", "data-v-6a99b717"]]), tg = Fh({
	history: Zm("/OntoPad/pad/"),
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
			component: () => import("./DashboardView-BCjSicjN.js")
		},
		{
			path: "/instances",
			name: "InstanceList",
			component: () => import("./InstanceList-DL0ta8l3.js").then((e) => e.t)
		},
		{
			path: "/edit",
			name: "EditForm",
			component: () => import("./EditForm-Q6OAjd0k.js")
		},
		{
			path: "/add",
			name: "InputForm",
			component: () => import("./InputForm-BeN3Gv9R.js")
		},
		{
			path: "/source",
			name: "Source",
			component: () => import("./Source-D3pJY3N-.js")
		}
	]
});
//#endregion
//#region src/helpers/plugin.js
function ng(e, t) {
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
export { m as InstanceList, eg as OntoPad, tg as OntoPadRouter, y as Term, g as TermInput, b as diff, c as getResourceQuery, o as quadStreamToString, ng as register, p as usePrefixesStore, u as useRdfStore, l as useSelectionStore };
