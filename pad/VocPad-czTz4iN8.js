import { O as e, a as t, t as n, x as r } from "./rdf-IzXhxt-d.js";
import { t as i } from "./bootstrap.esm-DJp0GTtI.js";
import { t as a } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as o } from "./prefixes-BGYAmMl-.js";
import { t as s } from "./TermInput-BvnaE9cR.js";
import { t as c } from "./n3-compare-CX0DzKOp.js";
import { t as l } from "./v4-DIjJgmR0.js";
import { Fragment as u, createBlock as d, createCommentVNode as f, createElementBlock as p, createElementVNode as m, createSlots as h, createTextVNode as g, createVNode as _, defineComponent as v, nextTick as ee, normalizeClass as y, normalizeStyle as b, onMounted as x, openBlock as S, ref as C, renderList as w, renderSlot as T, resolveComponent as E, resolveDynamicComponent as D, toDisplayString as O, useSlots as te, vModelText as ne, withCtx as k, withDirectives as re, withModifiers as ie } from "vue";
import { mapState as ae } from "pinia";
//#region node_modules/vue-diagrams/dist/vue-diagrams.mjs
var oe = Object.defineProperty, se = (e, t, n) => t in e ? oe(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, A = (e, t, n) => se(e, typeof t == "symbol" ? t : t + "", n), ce = Object.defineProperty, le = Object.defineProperties, ue = Object.getOwnPropertyDescriptors, de = Object.getOwnPropertySymbols, fe = Object.prototype.hasOwnProperty, pe = Object.prototype.propertyIsEnumerable, me = (e, t, n) => t in e ? ce(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, he = (e, t) => {
	for (var n in t ||= {}) fe.call(t, n) && me(e, n, t[n]);
	if (de) for (var n of de(t)) pe.call(t, n) && me(e, n, t[n]);
	return e;
}, ge = (e, t) => le(e, ue(t)), _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ve = function() {
	var e = "", t, n, r, i = [], a = { passive: !0 };
	window.addEventListener ? (t = "addEventListener", n = "removeEventListener") : (t = "attachEvent", n = "detachEvent", e = "on"), r = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel === void 0 ? "DOMMouseScroll" : "mousewheel";
	function o(e, t) {
		var n = function(e) {
			!e && (e = window.event);
			var n = {
				originalEvent: e,
				target: e.target || e.srcElement,
				type: "wheel",
				deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
				deltaX: 0,
				delatZ: 0,
				preventDefault: function() {
					e.preventDefault ? e.preventDefault() : e.returnValue = !1;
				}
			};
			return r == "mousewheel" ? (n.deltaY = -.025 * e.wheelDelta, e.wheelDeltaX && (n.deltaX = -.025 * e.wheelDeltaX)) : n.deltaY = e.detail, t(n);
		};
		return i.push({
			element: e,
			fn: n
		}), n;
	}
	function s(e) {
		for (var t = 0; t < i.length; t++) if (i[t].element === e) return i[t].fn;
		return function() {};
	}
	function c(e) {
		for (var t = 0; t < i.length; t++) if (i[t].element === e) return i.splice(t, 1);
	}
	function l(n, i, s, c) {
		var l = r === "wheel" ? s : o(n, s);
		n[t](e + i, l, c ? a : !1);
	}
	function u(t, i, o, l) {
		var u = r === "wheel" ? o : s(t);
		t[n](e + i, u, l ? a : !1), c(t);
	}
	function d(e, t, n) {
		l(e, r, t, n), r == "DOMMouseScroll" && l(e, "MozMousePixelScroll", t, n);
	}
	function f(e, t, n) {
		u(e, r, t, n), r == "DOMMouseScroll" && u(e, "MozMousePixelScroll", t, n);
	}
	return {
		on: d,
		off: f
	};
}(), j = {
	extend: function(e, t) {
		for (var n in e ||= {}, t) this.isObject(t[n]) ? e[n] = this.extend(e[n], t[n]) : e[n] = t[n];
		return e;
	},
	isElement: function(e) {
		return e instanceof HTMLElement || e instanceof SVGElement || e instanceof SVGSVGElement || e && typeof e == "object" && !!e && e.nodeType === 1 && typeof e.nodeName == "string";
	},
	isObject: function(e) {
		return Object.prototype.toString.call(e) === "[object Object]";
	},
	isNumber: function(e) {
		return !isNaN(parseFloat(e)) && isFinite(e);
	},
	getSvg: function(e) {
		var t, n;
		if (this.isElement(e)) t = e;
		else if (typeof e == "string" || e instanceof String) {
			if (t = document.querySelector(e), !t) throw Error("Provided selector did not find any elements. Selector: " + e);
		} else throw Error("Provided selector is not an HTML object nor String");
		if (t.tagName.toLowerCase() === "svg") n = t;
		else if (t.tagName.toLowerCase() === "object") n = t.contentDocument.documentElement;
		else if (t.tagName.toLowerCase() === "embed") n = t.getSVGDocument().documentElement;
		else throw t.tagName.toLowerCase() === "img" ? /* @__PURE__ */ Error("Cannot script an SVG in an \"img\" element. Please use an \"object\" element or an in-line SVG.") : /* @__PURE__ */ Error("Cannot get SVG.");
		return n;
	},
	proxy: function(e, t) {
		return function() {
			return e.apply(t, arguments);
		};
	},
	getType: function(e) {
		return Object.prototype.toString.apply(e).replace(/^\[object\s/, "").replace(/\]$/, "");
	},
	mouseAndTouchNormalize: function(e, t) {
		if (e.clientX === void 0 || e.clientX === null) if (e.clientX = 0, e.clientY = 0, e.touches !== void 0 && e.touches.length) {
			if (e.touches[0].clientX !== void 0) e.clientX = e.touches[0].clientX, e.clientY = e.touches[0].clientY;
			else if (e.touches[0].pageX !== void 0) {
				var n = t.getBoundingClientRect();
				e.clientX = e.touches[0].pageX - n.left, e.clientY = e.touches[0].pageY - n.top;
			}
		} else e.originalEvent !== void 0 && e.originalEvent.clientX !== void 0 && (e.clientX = e.originalEvent.clientX, e.clientY = e.originalEvent.clientY);
	},
	isDblClick: function(e, t) {
		if (e.detail === 2) return !0;
		if (t != null) {
			var n = e.timeStamp - t.timeStamp, r = Math.sqrt((e.clientX - t.clientX) ** 2 + (e.clientY - t.clientY) ** 2);
			return n < 250 && r < 10;
		}
		return !1;
	},
	now: Date.now || function() {
		return (/* @__PURE__ */ new Date()).getTime();
	},
	throttle: function(e, t, n) {
		var r = this, i, a, o, s = null, c = 0;
		n ||= {};
		var l = function() {
			c = n.leading === !1 ? 0 : r.now(), s = null, o = e.apply(i, a), s || (i = a = null);
		};
		return function() {
			var u = r.now();
			!c && n.leading === !1 && (c = u);
			var d = t - (u - c);
			return i = this, a = arguments, d <= 0 || d > t ? (clearTimeout(s), s = null, c = u, o = e.apply(i, a), s || (i = a = null)) : !s && n.trailing !== !1 && (s = setTimeout(l, d)), o;
		};
	},
	createRequestAnimationFrame: function(e) {
		var t = null;
		return e !== "auto" && e < 60 && e > 1 && (t = Math.floor(1e3 / e)), t === null ? window.requestAnimationFrame || M(33) : M(t);
	}
};
function M(e) {
	return function(t) {
		window.setTimeout(t, e);
	};
}
var N = j, P = "unknown";
document.documentMode && (P = "ie");
var F = {
	svgNS: "http://www.w3.org/2000/svg",
	xmlNS: "http://www.w3.org/XML/1998/namespace",
	xmlnsNS: "http://www.w3.org/2000/xmlns/",
	xlinkNS: "http://www.w3.org/1999/xlink",
	evNS: "http://www.w3.org/2001/xml-events",
	getBoundingClientRectNormalized: function(e) {
		if (e.clientWidth && e.clientHeight) return {
			width: e.clientWidth,
			height: e.clientHeight
		};
		if (e.getBoundingClientRect()) return e.getBoundingClientRect();
		throw Error("Cannot get BoundingClientRect for SVG.");
	},
	getOrCreateViewport: function(e, t) {
		var n = null;
		if (n = N.isElement(t) ? t : e.querySelector(t), !n) {
			var r = Array.prototype.slice.call(e.childNodes || e.children).filter(function(e) {
				return e.nodeName !== "defs" && e.nodeName !== "#text";
			});
			r.length === 1 && r[0].nodeName === "g" && r[0].getAttribute("transform") === null && (n = r[0]);
		}
		if (!n) {
			var i = "viewport-" + (/* @__PURE__ */ new Date()).toISOString().replace(/\D/g, "");
			n = document.createElementNS(this.svgNS, "g"), n.setAttribute("id", i);
			var a = e.childNodes || e.children;
			if (a && a.length > 0) for (var o = a.length; o > 0; o--) a[a.length - o].nodeName !== "defs" && n.appendChild(a[a.length - o]);
			e.appendChild(n);
		}
		var s = [];
		return n.getAttribute("class") && (s = n.getAttribute("class").split(" ")), ~s.indexOf("svg-pan-zoom_viewport") || (s.push("svg-pan-zoom_viewport"), n.setAttribute("class", s.join(" "))), n;
	},
	setupSvgAttributes: function(e) {
		if (e.setAttribute("xmlns", this.svgNS), e.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS), e.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS), e.parentNode !== null) {
			var t = e.getAttribute("style") || "";
			t.toLowerCase().indexOf("overflow") === -1 && e.setAttribute("style", "overflow: hidden; " + t);
		}
	},
	internetExplorerRedisplayInterval: 300,
	refreshDefsGlobal: N.throttle(function() {
		for (var e = document.querySelectorAll("defs"), t = e.length, n = 0; n < t; n++) {
			var r = e[n];
			r.parentNode.insertBefore(r, r);
		}
	}, _e ? _e.internetExplorerRedisplayInterval : null),
	setCTM: function(e, t, n) {
		var r = this, i = "matrix(" + t.a + "," + t.b + "," + t.c + "," + t.d + "," + t.e + "," + t.f + ")";
		e.setAttributeNS(null, "transform", i), "transform" in e.style ? e.style.transform = i : "-ms-transform" in e.style ? e.style["-ms-transform"] = i : "-webkit-transform" in e.style && (e.style["-webkit-transform"] = i), P === "ie" && n && (n.parentNode.insertBefore(n, n), window.setTimeout(function() {
			r.refreshDefsGlobal();
		}, r.internetExplorerRedisplayInterval));
	},
	getEventPoint: function(e, t) {
		var n = t.createSVGPoint();
		return N.mouseAndTouchNormalize(e, t), n.x = e.clientX, n.y = e.clientY, n;
	},
	getSvgCenterPoint: function(e, t, n) {
		return this.createSVGPoint(e, t / 2, n / 2);
	},
	createSVGPoint: function(e, t, n) {
		var r = e.createSVGPoint();
		return r.x = t, r.y = n, r;
	}
}, I = F, ye = {
	enable: function(e) {
		var t = e.svg.querySelector("defs");
		if (t || (t = document.createElementNS(I.svgNS, "defs"), e.svg.appendChild(t)), !t.querySelector("style#svg-pan-zoom-controls-styles")) {
			var n = document.createElementNS(I.svgNS, "style");
			n.setAttribute("id", "svg-pan-zoom-controls-styles"), n.setAttribute("type", "text/css"), n.textContent = ".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }", t.appendChild(n);
		}
		var r = document.createElementNS(I.svgNS, "g");
		r.setAttribute("id", "svg-pan-zoom-controls"), r.setAttribute("transform", "translate(" + (e.width - 70) + " " + (e.height - 76) + ") scale(0.75)"), r.setAttribute("class", "svg-pan-zoom-control"), r.appendChild(this._createZoomIn(e)), r.appendChild(this._createZoomReset(e)), r.appendChild(this._createZoomOut(e)), e.svg.appendChild(r), e.controlIcons = r;
	},
	_createZoomIn: function(e) {
		var t = document.createElementNS(I.svgNS, "g");
		t.setAttribute("id", "svg-pan-zoom-zoom-in"), t.setAttribute("transform", "translate(30.5 5) scale(0.015)"), t.setAttribute("class", "svg-pan-zoom-control"), t.addEventListener("click", function() {
			e.getPublicInstance().zoomIn();
		}, !1), t.addEventListener("touchstart", function() {
			e.getPublicInstance().zoomIn();
		}, !1);
		var n = document.createElementNS(I.svgNS, "rect");
		n.setAttribute("x", "0"), n.setAttribute("y", "0"), n.setAttribute("width", "1500"), n.setAttribute("height", "1400"), n.setAttribute("class", "svg-pan-zoom-control-background"), t.appendChild(n);
		var r = document.createElementNS(I.svgNS, "path");
		return r.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"), r.setAttribute("class", "svg-pan-zoom-control-element"), t.appendChild(r), t;
	},
	_createZoomReset: function(e) {
		var t = document.createElementNS(I.svgNS, "g");
		t.setAttribute("id", "svg-pan-zoom-reset-pan-zoom"), t.setAttribute("transform", "translate(5 35) scale(0.4)"), t.setAttribute("class", "svg-pan-zoom-control"), t.addEventListener("click", function() {
			e.getPublicInstance().reset();
		}, !1), t.addEventListener("touchstart", function() {
			e.getPublicInstance().reset();
		}, !1);
		var n = document.createElementNS(I.svgNS, "rect");
		n.setAttribute("x", "2"), n.setAttribute("y", "2"), n.setAttribute("width", "182"), n.setAttribute("height", "58"), n.setAttribute("class", "svg-pan-zoom-control-background"), t.appendChild(n);
		var r = document.createElementNS(I.svgNS, "path");
		r.setAttribute("d", "M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"), r.setAttribute("class", "svg-pan-zoom-control-element"), t.appendChild(r);
		var i = document.createElementNS(I.svgNS, "path");
		return i.setAttribute("d", "M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"), i.setAttribute("class", "svg-pan-zoom-control-element"), t.appendChild(i), t;
	},
	_createZoomOut: function(e) {
		var t = document.createElementNS(I.svgNS, "g");
		t.setAttribute("id", "svg-pan-zoom-zoom-out"), t.setAttribute("transform", "translate(30.5 70) scale(0.015)"), t.setAttribute("class", "svg-pan-zoom-control"), t.addEventListener("click", function() {
			e.getPublicInstance().zoomOut();
		}, !1), t.addEventListener("touchstart", function() {
			e.getPublicInstance().zoomOut();
		}, !1);
		var n = document.createElementNS(I.svgNS, "rect");
		n.setAttribute("x", "0"), n.setAttribute("y", "0"), n.setAttribute("width", "1500"), n.setAttribute("height", "1400"), n.setAttribute("class", "svg-pan-zoom-control-background"), t.appendChild(n);
		var r = document.createElementNS(I.svgNS, "path");
		return r.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"), r.setAttribute("class", "svg-pan-zoom-control-element"), t.appendChild(r), t;
	},
	disable: function(e) {
		e.controlIcons &&= (e.controlIcons.parentNode.removeChild(e.controlIcons), null);
	}
}, be = F, L = j, R = function(e, t) {
	this.init(e, t);
};
R.prototype.init = function(e, t) {
	this.viewport = e, this.options = t, this.originalState = {
		zoom: 1,
		x: 0,
		y: 0
	}, this.activeState = {
		zoom: 1,
		x: 0,
		y: 0
	}, this.updateCTMCached = L.proxy(this.updateCTM, this), this.requestAnimationFrame = L.createRequestAnimationFrame(this.options.refreshRate), this.viewBox = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}, this.cacheViewBox();
	var n = this.processCTM();
	this.setCTM(n), this.updateCTM();
}, R.prototype.cacheViewBox = function() {
	var e = this.options.svg.getAttribute("viewBox");
	if (e) {
		var t = e.split(/[\s\,]/).filter(function(e) {
			return e;
		}).map(parseFloat);
		this.viewBox.x = t[0], this.viewBox.y = t[1], this.viewBox.width = t[2], this.viewBox.height = t[3];
		var n = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
		this.activeState.zoom = n, this.activeState.x = (this.options.width - this.viewBox.width * n) / 2, this.activeState.y = (this.options.height - this.viewBox.height * n) / 2, this.updateCTMOnNextFrame(), this.options.svg.removeAttribute("viewBox");
	} else this.simpleViewBoxCache();
}, R.prototype.simpleViewBoxCache = function() {
	var e = this.viewport.getBBox();
	this.viewBox.x = e.x, this.viewBox.y = e.y, this.viewBox.width = e.width, this.viewBox.height = e.height;
}, R.prototype.getViewBox = function() {
	return L.extend({}, this.viewBox);
}, R.prototype.processCTM = function() {
	var e = this.getCTM();
	if (this.options.fit || this.options.contain) {
		var t = this.options.fit ? Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height) : Math.max(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
		e.a = t, e.d = t, e.e = -this.viewBox.x * t, e.f = -this.viewBox.y * t;
	}
	if (this.options.center) {
		var n = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * e.a) * .5, r = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * e.a) * .5;
		e.e = n, e.f = r;
	}
	return this.originalState.zoom = e.a, this.originalState.x = e.e, this.originalState.y = e.f, e;
}, R.prototype.getOriginalState = function() {
	return L.extend({}, this.originalState);
}, R.prototype.getState = function() {
	return L.extend({}, this.activeState);
}, R.prototype.getZoom = function() {
	return this.activeState.zoom;
}, R.prototype.getRelativeZoom = function() {
	return this.activeState.zoom / this.originalState.zoom;
}, R.prototype.computeRelativeZoom = function(e) {
	return e / this.originalState.zoom;
}, R.prototype.getPan = function() {
	return {
		x: this.activeState.x,
		y: this.activeState.y
	};
}, R.prototype.getCTM = function() {
	var e = this.options.svg.createSVGMatrix();
	return e.a = this.activeState.zoom, e.b = 0, e.c = 0, e.d = this.activeState.zoom, e.e = this.activeState.x, e.f = this.activeState.y, e;
}, R.prototype.setCTM = function(e) {
	var t = this.isZoomDifferent(e), n = this.isPanDifferent(e);
	if (t || n) {
		if (t && (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(e.a)) === !1 ? (e.a = e.d = this.activeState.zoom, t = !1) : (this.updateCache(e), this.options.onZoom(this.getRelativeZoom()))), n) {
			var r = this.options.beforePan(this.getPan(), {
				x: e.e,
				y: e.f
			}), i = !1, a = !1;
			r === !1 ? (e.e = this.getPan().x, e.f = this.getPan().y, i = a = !0) : L.isObject(r) && (r.x === !1 ? (e.e = this.getPan().x, i = !0) : L.isNumber(r.x) && (e.e = r.x), r.y === !1 ? (e.f = this.getPan().y, a = !0) : L.isNumber(r.y) && (e.f = r.y)), i && a || !this.isPanDifferent(e) ? n = !1 : (this.updateCache(e), this.options.onPan(this.getPan()));
		}
		(t || n) && this.updateCTMOnNextFrame();
	}
}, R.prototype.isZoomDifferent = function(e) {
	return this.activeState.zoom !== e.a;
}, R.prototype.isPanDifferent = function(e) {
	return this.activeState.x !== e.e || this.activeState.y !== e.f;
}, R.prototype.updateCache = function(e) {
	this.activeState.zoom = e.a, this.activeState.x = e.e, this.activeState.y = e.f;
}, R.prototype.pendingUpdate = !1, R.prototype.updateCTMOnNextFrame = function() {
	this.pendingUpdate || (this.pendingUpdate = !0, this.requestAnimationFrame.call(window, this.updateCTMCached));
}, R.prototype.updateCTM = function() {
	var e = this.getCTM();
	be.setCTM(this.viewport, e, this.defs), this.pendingUpdate = !1, this.options.onUpdatedCTM && this.options.onUpdatedCTM(e);
};
var xe = function(e, t) {
	return new R(e, t);
}, z = ve, B = ye, V = j, H = F, Se = xe, U = function(e, t) {
	this.init(e, t);
}, Ce = {
	viewportSelector: ".svg-pan-zoom_viewport",
	panEnabled: !0,
	controlIconsEnabled: !1,
	zoomEnabled: !0,
	dblClickZoomEnabled: !0,
	mouseWheelZoomEnabled: !0,
	preventMouseEventsDefault: !0,
	zoomScaleSensitivity: .1,
	minZoom: .5,
	maxZoom: 10,
	fit: !0,
	contain: !1,
	center: !0,
	refreshRate: "auto",
	beforeZoom: null,
	onZoom: null,
	beforePan: null,
	onPan: null,
	customEventsHandler: null,
	eventsListenerElement: null,
	onUpdatedCTM: null
}, W = { passive: !0 };
U.prototype.init = function(e, t) {
	var n = this;
	this.svg = e, this.defs = e.querySelector("defs"), H.setupSvgAttributes(this.svg), this.options = V.extend(V.extend({}, Ce), t), this.state = "none";
	var r = H.getBoundingClientRectNormalized(e);
	this.width = r.width, this.height = r.height, this.viewport = Se(H.getOrCreateViewport(this.svg, this.options.viewportSelector), {
		svg: this.svg,
		width: this.width,
		height: this.height,
		fit: this.options.fit,
		contain: this.options.contain,
		center: this.options.center,
		refreshRate: this.options.refreshRate,
		beforeZoom: function(e, t) {
			if (n.viewport && n.options.beforeZoom) return n.options.beforeZoom(e, t);
		},
		onZoom: function(e) {
			if (n.viewport && n.options.onZoom) return n.options.onZoom(e);
		},
		beforePan: function(e, t) {
			if (n.viewport && n.options.beforePan) return n.options.beforePan(e, t);
		},
		onPan: function(e) {
			if (n.viewport && n.options.onPan) return n.options.onPan(e);
		},
		onUpdatedCTM: function(e) {
			if (n.viewport && n.options.onUpdatedCTM) return n.options.onUpdatedCTM(e);
		}
	});
	var i = this.getPublicInstance();
	i.setBeforeZoom(this.options.beforeZoom), i.setOnZoom(this.options.onZoom), i.setBeforePan(this.options.beforePan), i.setOnPan(this.options.onPan), i.setOnUpdatedCTM(this.options.onUpdatedCTM), this.options.controlIconsEnabled && B.enable(this), this.lastMouseWheelEventTime = Date.now(), this.setupHandlers();
}, U.prototype.setupHandlers = function() {
	var e = this, t = null;
	if (this.eventListeners = {
		mousedown: function(n) {
			var r = e.handleMouseDown(n, t);
			return t = n, r;
		},
		touchstart: function(n) {
			var r = e.handleMouseDown(n, t);
			return t = n, r;
		},
		mouseup: function(t) {
			return e.handleMouseUp(t);
		},
		touchend: function(t) {
			return e.handleMouseUp(t);
		},
		mousemove: function(t) {
			return e.handleMouseMove(t);
		},
		touchmove: function(t) {
			return e.handleMouseMove(t);
		},
		mouseleave: function(t) {
			return e.handleMouseUp(t);
		},
		touchleave: function(t) {
			return e.handleMouseUp(t);
		},
		touchcancel: function(t) {
			return e.handleMouseUp(t);
		}
	}, this.options.customEventsHandler != null) {
		this.options.customEventsHandler.init({
			svgElement: this.svg,
			eventsListenerElement: this.options.eventsListenerElement,
			instance: this.getPublicInstance()
		});
		var n = this.options.customEventsHandler.haltEventListeners;
		if (n && n.length) for (var r = n.length - 1; r >= 0; r--) this.eventListeners.hasOwnProperty(n[r]) && delete this.eventListeners[n[r]];
	}
	for (var i in this.eventListeners) (this.options.eventsListenerElement || this.svg).addEventListener(i, this.eventListeners[i], !this.options.preventMouseEventsDefault && W);
	this.options.mouseWheelZoomEnabled && (this.options.mouseWheelZoomEnabled = !1, this.enableMouseWheelZoom());
}, U.prototype.enableMouseWheelZoom = function() {
	if (!this.options.mouseWheelZoomEnabled) {
		var e = this;
		this.wheelListener = function(t) {
			return e.handleMouseWheel(t);
		};
		var t = !this.options.preventMouseEventsDefault;
		z.on(this.options.eventsListenerElement || this.svg, this.wheelListener, t), this.options.mouseWheelZoomEnabled = !0;
	}
}, U.prototype.disableMouseWheelZoom = function() {
	if (this.options.mouseWheelZoomEnabled) {
		var e = !this.options.preventMouseEventsDefault;
		z.off(this.options.eventsListenerElement || this.svg, this.wheelListener, e), this.options.mouseWheelZoomEnabled = !1;
	}
}, U.prototype.handleMouseWheel = function(e) {
	if (!(!this.options.zoomEnabled || this.state !== "none")) {
		this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
		var t = e.deltaY || 1, n = Date.now() - this.lastMouseWheelEventTime, r = 3 + Math.max(0, 30 - n);
		this.lastMouseWheelEventTime = Date.now(), "deltaMode" in e && e.deltaMode === 0 && e.wheelDelta && (t = e.deltaY === 0 ? 0 : Math.abs(e.wheelDelta) / e.deltaY), t = -.3 < t && t < .3 ? t : (t > 0 ? 1 : -1) * Math.log(Math.abs(t) + 10) / r;
		var i = this.svg.getScreenCTM().inverse(), a = H.getEventPoint(e, this.svg).matrixTransform(i), o = (1 + this.options.zoomScaleSensitivity) ** (-1 * t);
		this.zoomAtPoint(o, a);
	}
}, U.prototype.zoomAtPoint = function(e, t, n) {
	var r = this.viewport.getOriginalState();
	n ? (e = Math.max(this.options.minZoom * r.zoom, Math.min(this.options.maxZoom * r.zoom, e)), e /= this.getZoom()) : this.getZoom() * e < this.options.minZoom * r.zoom ? e = this.options.minZoom * r.zoom / this.getZoom() : this.getZoom() * e > this.options.maxZoom * r.zoom && (e = this.options.maxZoom * r.zoom / this.getZoom());
	var i = this.viewport.getCTM(), a = t.matrixTransform(i.inverse()), o = this.svg.createSVGMatrix().translate(a.x, a.y).scale(e).translate(-a.x, -a.y), s = i.multiply(o);
	s.a !== i.a && this.viewport.setCTM(s);
}, U.prototype.zoom = function(e, t) {
	this.zoomAtPoint(e, H.getSvgCenterPoint(this.svg, this.width, this.height), t);
}, U.prototype.publicZoom = function(e, t) {
	t && (e = this.computeFromRelativeZoom(e)), this.zoom(e, t);
}, U.prototype.publicZoomAtPoint = function(e, t, n) {
	if (n && (e = this.computeFromRelativeZoom(e)), V.getType(t) !== "SVGPoint") if ("x" in t && "y" in t) t = H.createSVGPoint(this.svg, t.x, t.y);
	else throw Error("Given point is invalid");
	this.zoomAtPoint(e, t, n);
}, U.prototype.getZoom = function() {
	return this.viewport.getZoom();
}, U.prototype.getRelativeZoom = function() {
	return this.viewport.getRelativeZoom();
}, U.prototype.computeFromRelativeZoom = function(e) {
	return e * this.viewport.getOriginalState().zoom;
}, U.prototype.resetZoom = function() {
	var e = this.viewport.getOriginalState();
	this.zoom(e.zoom, !0);
}, U.prototype.resetPan = function() {
	this.pan(this.viewport.getOriginalState());
}, U.prototype.reset = function() {
	this.resetZoom(), this.resetPan();
}, U.prototype.handleDblClick = function(e) {
	if (this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), this.options.controlIconsEnabled && (e.target.getAttribute("class") || "").indexOf("svg-pan-zoom-control") > -1) return !1;
	var t = e.shiftKey ? 1 / ((1 + this.options.zoomScaleSensitivity) * 2) : (1 + this.options.zoomScaleSensitivity) * 2, n = H.getEventPoint(e, this.svg).matrixTransform(this.svg.getScreenCTM().inverse());
	this.zoomAtPoint(t, n);
}, U.prototype.handleMouseDown = function(e, t) {
	this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), V.mouseAndTouchNormalize(e, this.svg), this.options.dblClickZoomEnabled && V.isDblClick(e, t) ? this.handleDblClick(e) : (this.state = "pan", this.firstEventCTM = this.viewport.getCTM(), this.stateOrigin = H.getEventPoint(e, this.svg).matrixTransform(this.firstEventCTM.inverse()));
}, U.prototype.handleMouseMove = function(e) {
	if (this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), this.state === "pan" && this.options.panEnabled) {
		var t = H.getEventPoint(e, this.svg).matrixTransform(this.firstEventCTM.inverse()), n = this.firstEventCTM.translate(t.x - this.stateOrigin.x, t.y - this.stateOrigin.y);
		this.viewport.setCTM(n);
	}
}, U.prototype.handleMouseUp = function(e) {
	this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), this.state === "pan" && (this.state = "none");
}, U.prototype.fit = function() {
	var e = this.viewport.getViewBox(), t = Math.min(this.width / e.width, this.height / e.height);
	this.zoom(t, !0);
}, U.prototype.contain = function() {
	var e = this.viewport.getViewBox(), t = Math.max(this.width / e.width, this.height / e.height);
	this.zoom(t, !0);
}, U.prototype.center = function() {
	var e = this.viewport.getViewBox(), t = (this.width - (e.width + e.x * 2) * this.getZoom()) * .5, n = (this.height - (e.height + e.y * 2) * this.getZoom()) * .5;
	this.getPublicInstance().pan({
		x: t,
		y: n
	});
}, U.prototype.updateBBox = function() {
	this.viewport.simpleViewBoxCache();
}, U.prototype.pan = function(e) {
	var t = this.viewport.getCTM();
	t.e = e.x, t.f = e.y, this.viewport.setCTM(t);
}, U.prototype.panBy = function(e) {
	var t = this.viewport.getCTM();
	t.e += e.x, t.f += e.y, this.viewport.setCTM(t);
}, U.prototype.getPan = function() {
	var e = this.viewport.getState();
	return {
		x: e.x,
		y: e.y
	};
}, U.prototype.resize = function() {
	var e = H.getBoundingClientRectNormalized(this.svg);
	this.width = e.width, this.height = e.height;
	var t = this.viewport;
	t.options.width = this.width, t.options.height = this.height, t.processCTM(), this.options.controlIconsEnabled && (this.getPublicInstance().disableControlIcons(), this.getPublicInstance().enableControlIcons());
}, U.prototype.destroy = function() {
	var e = this;
	for (var t in this.beforeZoom = null, this.onZoom = null, this.beforePan = null, this.onPan = null, this.onUpdatedCTM = null, this.options.customEventsHandler != null && this.options.customEventsHandler.destroy({
		svgElement: this.svg,
		eventsListenerElement: this.options.eventsListenerElement,
		instance: this.getPublicInstance()
	}), this.eventListeners) (this.options.eventsListenerElement || this.svg).removeEventListener(t, this.eventListeners[t], !this.options.preventMouseEventsDefault && W);
	this.disableMouseWheelZoom(), this.getPublicInstance().disableControlIcons(), this.reset(), G = G.filter(function(t) {
		return t.svg !== e.svg;
	}), delete this.options, delete this.viewport, delete this.publicInstance, delete this.pi, this.getPublicInstance = function() {
		return null;
	};
}, U.prototype.getPublicInstance = function() {
	var e = this;
	return this.publicInstance ||= this.pi = {
		enablePan: function() {
			return e.options.panEnabled = !0, e.pi;
		},
		disablePan: function() {
			return e.options.panEnabled = !1, e.pi;
		},
		isPanEnabled: function() {
			return !!e.options.panEnabled;
		},
		pan: function(t) {
			return e.pan(t), e.pi;
		},
		panBy: function(t) {
			return e.panBy(t), e.pi;
		},
		getPan: function() {
			return e.getPan();
		},
		setBeforePan: function(t) {
			return e.options.beforePan = t === null ? null : V.proxy(t, e.publicInstance), e.pi;
		},
		setOnPan: function(t) {
			return e.options.onPan = t === null ? null : V.proxy(t, e.publicInstance), e.pi;
		},
		enableZoom: function() {
			return e.options.zoomEnabled = !0, e.pi;
		},
		disableZoom: function() {
			return e.options.zoomEnabled = !1, e.pi;
		},
		isZoomEnabled: function() {
			return !!e.options.zoomEnabled;
		},
		enableControlIcons: function() {
			return e.options.controlIconsEnabled || (e.options.controlIconsEnabled = !0, B.enable(e)), e.pi;
		},
		disableControlIcons: function() {
			return e.options.controlIconsEnabled && (e.options.controlIconsEnabled = !1, B.disable(e)), e.pi;
		},
		isControlIconsEnabled: function() {
			return !!e.options.controlIconsEnabled;
		},
		enableDblClickZoom: function() {
			return e.options.dblClickZoomEnabled = !0, e.pi;
		},
		disableDblClickZoom: function() {
			return e.options.dblClickZoomEnabled = !1, e.pi;
		},
		isDblClickZoomEnabled: function() {
			return !!e.options.dblClickZoomEnabled;
		},
		enableMouseWheelZoom: function() {
			return e.enableMouseWheelZoom(), e.pi;
		},
		disableMouseWheelZoom: function() {
			return e.disableMouseWheelZoom(), e.pi;
		},
		isMouseWheelZoomEnabled: function() {
			return !!e.options.mouseWheelZoomEnabled;
		},
		setZoomScaleSensitivity: function(t) {
			return e.options.zoomScaleSensitivity = t, e.pi;
		},
		setMinZoom: function(t) {
			return e.options.minZoom = t, e.pi;
		},
		setMaxZoom: function(t) {
			return e.options.maxZoom = t, e.pi;
		},
		setBeforeZoom: function(t) {
			return e.options.beforeZoom = t === null ? null : V.proxy(t, e.publicInstance), e.pi;
		},
		setOnZoom: function(t) {
			return e.options.onZoom = t === null ? null : V.proxy(t, e.publicInstance), e.pi;
		},
		zoom: function(t) {
			return e.publicZoom(t, !0), e.pi;
		},
		zoomBy: function(t) {
			return e.publicZoom(t, !1), e.pi;
		},
		zoomAtPoint: function(t, n) {
			return e.publicZoomAtPoint(t, n, !0), e.pi;
		},
		zoomAtPointBy: function(t, n) {
			return e.publicZoomAtPoint(t, n, !1), e.pi;
		},
		zoomIn: function() {
			return this.zoomBy(1 + e.options.zoomScaleSensitivity), e.pi;
		},
		zoomOut: function() {
			return this.zoomBy(1 / (1 + e.options.zoomScaleSensitivity)), e.pi;
		},
		getZoom: function() {
			return e.getRelativeZoom();
		},
		setOnUpdatedCTM: function(t) {
			return e.options.onUpdatedCTM = t === null ? null : V.proxy(t, e.publicInstance), e.pi;
		},
		resetZoom: function() {
			return e.resetZoom(), e.pi;
		},
		resetPan: function() {
			return e.resetPan(), e.pi;
		},
		reset: function() {
			return e.reset(), e.pi;
		},
		fit: function() {
			return e.fit(), e.pi;
		},
		contain: function() {
			return e.contain(), e.pi;
		},
		center: function() {
			return e.center(), e.pi;
		},
		updateBBox: function() {
			return e.updateBBox(), e.pi;
		},
		resize: function() {
			return e.resize(), e.pi;
		},
		getSizes: function() {
			return {
				width: e.width,
				height: e.height,
				realZoom: e.getZoom(),
				viewBox: e.viewport.getViewBox()
			};
		},
		destroy: function() {
			return e.destroy(), e.pi;
		}
	}, this.publicInstance;
};
var G = [], we = function(e, t) {
	var n = V.getSvg(e);
	if (n === null) return null;
	for (var r = G.length - 1; r >= 0; r--) if (G[r].svg === n) return G[r].instance.getPublicInstance();
	return G.push({
		svg: n,
		instance: new U(n, t)
	}), G[G.length - 1].instance.getPublicInstance();
}, Te = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ee = [
	"x",
	"y",
	"width",
	"height"
], De = /* @__PURE__ */ Te(/* @__PURE__ */ v({
	__name: "Scope",
	props: {
		mainSPZ: null,
		thumbnailSPZ: null
	},
	setup(e) {
		let t = e, n = C(0), r = C(0), i = C(0), a = C(0), o = C(null), s = () => {
			if (!t.mainSPZ || !t.thumbnailSPZ) return;
			let e = t.mainSPZ.getPan().x, o = t.mainSPZ.getPan().y, s = t.mainSPZ.getSizes().width, c = t.mainSPZ.getSizes().height, l = t.mainSPZ.getSizes().realZoom, u = t.thumbnailSPZ.getPan().x, d = t.thumbnailSPZ.getPan().y, f = t.thumbnailSPZ.getSizes().realZoom / l, p = u - e * f, m = d - o * f, h = s * f, g = c * f;
			n.value = p + 1, r.value = m + 1, i.value = h - 2, a.value = g - 2;
		}, c = (e) => {
			if (e.which == 0 && e.button == 0 || !o.value) return;
			let n = t.mainSPZ, r = t.thumbnailSPZ, i = o.value.getBoundingClientRect();
			n.getSizes().width, n.getSizes().height;
			let a = n.getSizes().realZoom, s = r.getSizes().width, c = r.getSizes().height, l = r.getSizes().realZoom;
			var u = e.clientX - i.left - s / 2, d = e.clientY - i.top - c / 2, f = -u * a / l, p = -d * a / l;
			n.pan({
				x: f,
				y: p
			});
		};
		return x(() => {
			s(), t.mainSPZ.setOnPan(() => s()), t.mainSPZ.setOnZoom(() => s());
		}), (e, t) => (S(), p("svg", {
			class: "svg-pan-zoom__scope",
			onClick: c,
			onMousemove: c,
			ref_key: "scopeSVG",
			ref: o
		}, [m("rect", {
			class: "scope",
			x: n.value,
			y: r.value,
			width: i.value,
			height: a.value
		}, null, 8, Ee)], 544));
	}
}), [["__scopeId", "data-v-169415fd"]]), Oe = /* @__PURE__ */ Te(/* @__PURE__ */ v({
	__name: "SvgPanZoomThumbnail",
	props: { mainSPZ: null },
	emits: ["thumbnailCreated"],
	setup(e, { emit: t }) {
		let n = e, r = C(null), i = (e) => {
			n.mainSPZ[e.deltaY < 0 ? "zoomIn" : "zoomOut"]();
		}, a = (e) => {
			r.value = e, t("thumbnailCreated", e);
		};
		return (t, n) => (S(), p("div", {
			class: "svg-pan-zoom__thumbnail",
			onWheel: i
		}, [_(Ae, {
			class: "thumbnail",
			zoomEnabled: !1,
			panEnabled: !1,
			controlIconsEnabled: !1,
			dblClickZoomEnabled: !1,
			preventMouseEventsDefault: !0,
			onCreated: a
		}, {
			default: k(() => [T(t.$slots, "default", {}, void 0, !0)]),
			_: 3
		}), r.value ? (S(), d(De, {
			key: 0,
			mainSPZ: e.mainSPZ,
			thumbnailSPZ: r.value
		}, null, 8, ["mainSPZ", "thumbnailSPZ"])) : f("", !0)], 32));
	}
}), [["__scopeId", "data-v-093287c4"]]), ke = { class: "svg-pan-zoom" }, Ae = v({
	__name: "SvgPanZoom",
	props: {
		viewportSelector: {
			type: [String, Object],
			default: ".svg-pan-zoom"
		},
		panEnabled: {
			type: Boolean,
			default: !0
		},
		controlIconsEnabled: {
			type: Boolean,
			default: !1
		},
		zoomEnabled: {
			type: Boolean,
			default: !0
		},
		dblClickZoomEnabled: {
			type: Boolean,
			default: !0
		},
		mouseWheelZoomEnabled: {
			type: Boolean,
			default: !0
		},
		preventMouseEventsDefault: {
			type: Boolean,
			default: !0
		},
		zoomScaleSensitivity: {
			type: Number,
			default: .2
		},
		minZoom: {
			type: Number,
			default: .5
		},
		maxZoom: {
			type: Number,
			default: 10
		},
		fit: {
			type: Boolean,
			default: !0
		},
		contain: {
			type: Boolean,
			default: !0
		},
		center: {
			type: Boolean,
			default: !0
		},
		refreshRate: {
			type: [Number, String],
			default: "auto"
		}
	},
	emits: [
		"beforeZoom",
		"onZoom",
		"beforePan",
		"onPan",
		"onUpdatedCTM",
		"created",
		"thumbnailCreated"
	],
	setup(e, { emit: t }) {
		let n = e, r = C(null), i = te(), a = C({});
		Object.keys(n).filter((e) => n[e] !== void 0).forEach((e) => {
			a.value = ge(he({}, a.value), { [e]: n[e] });
		});
		let o = C(null), s = (e) => {
			if (e && e.tagName === "svg") return e;
			let t = Array.from(e.children);
			if (!t) return !1;
			for (let e of t) {
				let t = s(e);
				if (t) return t;
			}
			return !1;
		};
		return x(() => {
			if (a.value.onZoom = (e) => t("onZoom", e), a.value.onPan = (e) => t("onPan", e), !(i.default && r.value)) return;
			let e = s(r.value);
			e && (o.value = we(e, a.value), t("created", o.value));
		}), (e, t) => (S(), p("div", ke, [m("div", {
			class: "svg-pan-zoom__default",
			ref_key: "defaultSlot",
			ref: r
		}, [T(e.$slots, "default")], 512), e.$slots.thumbnail && o.value ? (S(), d(Oe, {
			key: 0,
			onThumbnailCreated: t[0] ||= (t) => e.$emit("thumbnailCreated", t),
			mainSPZ: o.value
		}, {
			default: k(() => [T(e.$slots, "thumbnail")]),
			_: 3
		}, 8, ["mainSPZ"])) : f("", !0)]));
	}
}), je = v({
	data() {
		return {
			onContextMenu: (e) => {
				e.preventDefault();
			},
			onMouseDown: (e) => {
				let t = this, n = e?.target.closest(".diagram-context-menu"), r = e?.target.closest(".has-menu");
				this.menuX = e.pageX, this.menuY = e.pageY, n ? (e.stopPropagation(), this.menuItemClick(e, this.showMenuComponent), t.showMenuComponent = void 0) : r && e.button === 2 ? (this.showMenuComponent = r.vueComponent, window.elmenu = r, e.stopPropagation()) : t.showMenuComponent = void 0;
			},
			menuX: 0,
			menuY: 0,
			showMenuComponent: void 0
		};
	},
	mounted() {
		this.$parent.$el.addEventListener("mousedown", this.onMouseDown, { capture: !0 }), this.$parent.$el.addEventListener("contextmenu", this.onContextMenu);
	},
	beforeUnmount() {
		this.$parent.$el.removeEventListener("mousedown", this.onMouseDown), this.$parent.$el.addEventListener("contextmenu", this.onContextMenu);
	},
	methods: { menuItemClick(e, t) {
		let n = e?.target?.dataset;
		console.log("dataset.menuItemKey", n.menuItemKey), n != null && n.childItemKey ? (console.log("dataset.childItemKey", n.childItemKey, t.menu[n.menuItemKey].children[n.childItemKey]), t.menu[n.menuItemKey].children[n.childItemKey].handler.call(t)) : t.menu[n.menuItemKey].handler.call(t);
	} }
}), K = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Me = ["data-menu-item-key"], Ne = {
	key: 0,
	style: { float: "right" }
}, Pe = {
	key: 1,
	class: "menu-item-children-container"
}, Fe = ["data-menu-item-key", "data-child-item-key"];
function Ie(e, t, n, r, i, a) {
	return S(), p("div", null, [e.showMenuComponent ? (S(), p("div", {
		key: 0,
		class: y("menu diagram-context-menu"),
		style: b(`left: ${e.menuX}px; top: ${e.menuY}px`)
	}, [(S(!0), p(u, null, w(e.showMenuComponent.menu, (e, t) => (S(), p("div", {
		key: t,
		class: y(`menu-item ${e.classes ? e.classes.join(" ") : ""}`),
		"data-menu-item-key": t
	}, [
		g(O(e.label) + " ", 1),
		e.children ? (S(), p("span", Ne, " > ")) : f("", !0),
		e.children ? (S(), p("div", Pe, [(S(!0), p(u, null, w(e.children, (e, n) => (S(), p("div", {
			key: n,
			class: y(`menu-item child-menu-item ${e.classes ? e.classes.join(" ") : ""}`),
			"data-menu-item-key": t,
			"data-child-item-key": n
		}, O(e.label), 11, Fe))), 128))])) : f("", !0)
	], 10, Me))), 128))], 4)) : f("", !0)]);
}
var Le = /* @__PURE__ */ K(je, [["render", Ie], ["__scopeId", "data-v-bb820404"]]), Re = v({
	data() {
		return {
			style: "display: none;",
			object: void 0,
			property: "",
			element: void 0
		};
	},
	computed: { value: {
		get() {
			if (this.object) return this.object[this.property];
		},
		set(e) {
			this.object && (this.object[this.property] = e, this.computeStyle());
		}
	} },
	watch: { element(e, t) {
		t && t.classList.remove("opacity-0"), e && e.classList.add("opacity-0");
	} },
	methods: {
		computeStyle() {
			this.element ? this.style = `
          top: ${this.element.getBoundingClientRect().top}px;
          left: ${this.element.getBoundingClientRect().left}px;
          width: ${this.element.getBoundingClientRect().width}px;
          height: ${this.element.getBoundingClientRect().height}px;
        ` : this.style = "display: none;";
		},
		editText(e, t, n) {
			this.object = e, this.property = t, this.element = n, this.computeStyle();
		}
	}
});
function ze(e, t, n, r, i, a) {
	return re((S(), p("input", {
		type: "text",
		class: "text-input",
		style: b(e.style),
		"onUpdate:modelValue": t[0] ||= (t) => e.value = t
	}, null, 4)), [[ne, e.value]]);
}
var Be = /* @__PURE__ */ K(Re, [["render", ze], ["__scopeId", "data-v-d2660cae"]]), q = () => Math.trunc(Math.random() * 1e5), Ve = class {
	constructor(e, t, n, r, i, a, o, s) {
		A(this, "id"), A(this, "title"), A(this, "diagram"), A(this, "x"), A(this, "y"), A(this, "width"), A(this, "height"), A(this, "options"), A(this, "ports"), A(this, "type"), this.diagram = e, this.id = t, this.title = n, this.x = r || 0, this.y = i || 0, this.width = a || 72, this.height = o || 100, this.options = s || {}, this.ports = [];
	}
	addInPort(e, t) {
		let n = {
			id: q(),
			type: "in",
			name: e,
			options: t
		};
		return this.ports.push(n), n;
	}
	addOutPort(e, t) {
		let n = {
			id: q(),
			type: "out",
			name: e,
			options: t
		};
		return this.ports.push(n), n;
	}
	removePortLinks(e) {
		throw "FIXME";
	}
	deletePort(e) {
		throw "FIXME";
	}
};
function He(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var J = { exports: {} }, Ue;
function We() {
	if (Ue) return J.exports;
	Ue = 1;
	function e() {}
	return e.prototype = {
		on: function(e, t, n) {
			var r = this.e ||= {};
			return (r[e] || (r[e] = [])).push({
				fn: t,
				ctx: n
			}), this;
		},
		once: function(e, t, n) {
			var r = this;
			function i() {
				r.off(e, i), t.apply(n, arguments);
			}
			return i._ = t, this.on(e, i, n);
		},
		emit: function(e) {
			for (var t = [].slice.call(arguments, 1), n = ((this.e ||= {})[e] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, t);
			return this;
		},
		off: function(e, t) {
			var n = this.e ||= {}, r = n[e], i = [];
			if (r && t) for (var a = 0, o = r.length; a < o; a++) r[a].fn !== t && r[a].fn._ !== t && i.push(r[a]);
			return i.length ? n[e] = i : delete n[e], this;
		}
	}, J.exports = e, J.exports.TinyEmitter = e, J.exports;
}
var Ge = /* @__PURE__ */ He(We()), Ke = class {
	constructor() {
		A(this, "_model"), A(this, "emitter"), this._model = {
			nodes: [],
			links: []
		}, this.emitter = new Ge();
	}
	addNode(e, t, n, r, i, a) {
		a === void 0 && (a = {});
		let o = new Ve(this, q(), e, t, n, r, i, a);
		return this._model.nodes.push(o), o;
	}
	deleteNode(e) {
		let t = -1;
		for (let n = 0; n < this._model.nodes.length; n++) e.id === this._model.nodes[n].id && (t = n);
		if (e.ports.length) for (let t = 0; t < e.ports.length; t++) for (let n = 0; n < this._model.links.length; n++) {
			let r = this._model.links[n], i = e.ports[t];
			(r.from === i.id || r.to === i.id) && (this.deleteLink(r), n--);
		}
		this._model.nodes.splice(t, 1);
	}
	deleteLink(e) {
		let t = this._model.links.indexOf(e);
		this.emitter.emit("deleteLink", e), this._model.links.splice(t, 1);
	}
	addLink(e, t, n = [], r = {}) {
		return this._model.links.push({
			id: q(),
			from: e.id || e,
			to: t.id || t,
			positionFrom: {},
			positionTo: {},
			points: n,
			options: r
		}), this._model.links[this._model.links.length - 1];
	}
	serialize() {
		let e = {
			nodes: [],
			links: []
		};
		for (let t of this._model.nodes) {
			let n = {}, r = t;
			for (let e of Object.keys(t)) e !== "diagram" && (n[e] = r[e]);
			e.nodes.push(n);
		}
		for (let t of this._model.links) {
			let n = {}, r = t;
			for (let e of Object.keys(t)) e !== "diagram" && (n[e] = r[e]);
			e.links.push(n);
		}
		return JSON.stringify(e);
	}
	deserialize(e) {
		this._model = JSON.parse(e);
		for (let e = 0; e <= this._model.nodes.length; e++) {
			let t = this._model.nodes[e];
			if (t) {
				this._model.nodes[e] = new Ve(this, t.id, t.title);
				for (let n of Object.keys(t)) this._model.nodes[e][n] = t[n];
			}
		}
		this.emitter.emit("deserialize");
	}
}, qe = [
	"nw",
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w"
], Je = class {
	constructor(e, t, n, r) {
		A(this, "container"), A(this, "startDragHandler");
		var i;
		this.container = e, e.innerHTML = "\n      <rect class=\"resize-handle edge nw\" data-direction=\"nw\" x=\"-2\" y=\"-5\" width=\"5\" height=\"5\" />\n      <rect class=\"resize-handle horizontal n\" data-direction=\"n\" x=\"0\" y=\"-3\" height=\"3\" />\n      <rect class=\"resize-handle edge ne\" data-direction=\"ne\" y=\"-5\" width=\"5\" height=\"5\" />\n      <rect class=\"resize-handle vertical e\" data-direction=\"e\" y=\"0\" width=\"3\" />\n      <rect class=\"resize-handle edge se\" data-direction=\"se\" width=\"5\" height=\"5\" />\n      <rect class=\"resize-handle horizontal s\" data-direction=\"s\" x=\"0\" height=\"3\" />\n      <rect class=\"resize-handle edge sw\" data-direction=\"sw\" x=\"-2\" width=\"5\" height=\"5\" />\n      <rect class=\"resize-handle vertical w\" data-direction=\"w\" x=\"-2\" y=\"0\" width=\"3\" />\n    ", this.startDragHandler = r, this.mouseDownHandler = this.mouseDownHandler.bind(this);
		for (let t of qe) (i = e.querySelector(`[data-direction="${t}"]`)) == null || i.addEventListener("mousedown", this.mouseDownHandler);
		this.updatePosition(t, n);
	}
	updatePosition(e, t) {
		let n = this.container.querySelector("[data-direction=\"n\"]"), r = this.container.querySelector("[data-direction=\"ne\"]"), i = this.container.querySelector("[data-direction=\"e\"]"), a = this.container.querySelector("[data-direction=\"se\"]"), o = this.container.querySelector("[data-direction=\"s\"]"), s = this.container.querySelector("[data-direction=\"sw\"]"), c = this.container.querySelector("[data-direction=\"w\"]");
		n?.setAttribute("width", e.toString()), r?.setAttribute("x", e.toString()), i?.setAttribute("x", e.toString()), i?.setAttribute("height", t.toString()), a?.setAttribute("x", e.toString()), a?.setAttribute("y", t.toString()), o?.setAttribute("y", t.toString()), o?.setAttribute("width", e.toString()), s?.setAttribute("y", t.toString()), c?.setAttribute("height", t.toString());
	}
	unmount() {
		var e;
		if (this.startDragHandler) for (let t of qe) (e = this.container.querySelector(`[data-direction="${t}"]`)) == null || e.removeEventListener("mousedown", this.mouseDownHandler);
		this.container.innerHTML = "";
	}
	mouseDownHandler(e) {
		if (console.log("mouseDownHandler"), e.target) {
			let t = e.target;
			this.startDragHandler && this.startDragHandler(t.dataset.direction);
		}
	}
}, Ye = {
	props: { nodeModel: { type: Object } },
	computed: {
		options() {
			return this.nodeModel?.options || {};
		},
		parentDiagram() {
			return this.$parent?.$parent?.$parent;
		}
	}
}, Xe = [
	"x",
	"y",
	"width"
], Ze = { class: "prevent-node-drag" };
function Qe(e, t, n, r, i, a) {
	return S(), p("g", null, [m("text", {
		class: y(a.options.editableTitle ? "title-editable" : ""),
		x: n.nodeModel?.width || 0 / 2,
		y: n.nodeModel?.height || 0 / 2,
		width: n.nodeModel?.width,
		ref: "title",
		"text-anchor": "middle",
		"font-size": "14",
		"font-weight": "bold",
		fill: "#000000",
		style: b(a.options.titleStyle || ""),
		onClick: t[0] ||= (t) => a.options.editableTitle ? a.parentDiagram?.editText(n.nodeModel, "title", e.$refs.title) : void 0
	}, O(n.nodeModel?.title), 15, Xe), m("g", Ze, [T(e.$slots, "default")])]);
}
var $e = /* @__PURE__ */ K(Ye, [["render", Qe]]), et = v({
	props: {
		nodeModel: {
			type: Object,
			required: !0
		},
		selected: {
			type: Boolean,
			default: !1
		}
	},
	data() {
		return { menu: void 0 };
	},
	computed: { mainDiagramComponent() {
		if ((this == null ? void 0 : this.$parent)?.$parent?.$parent instanceof X) return this.$parent.$parent.$parent;
		throw "Main Diagram component not found";
	} },
	mounted() {}
}), tt = ["width", "height"], nt = { transform: "translate(5, 5)" }, rt = ["d"], it = { class: "prevent-node-drag" };
function at(e, t, n, r, i, a) {
	return S(), p("g", null, [
		m("rect", {
			fill: "#ffffff",
			stroke: "#333",
			"stroke-width": "1",
			x: "0",
			y: "0",
			width: e.nodeModel.width,
			height: e.nodeModel.height
		}, null, 8, tt),
		t[1] ||= m("rect", {
			fill: "#ddd",
			x: "1",
			y: "1",
			width: "32",
			height: "32"
		}, null, -1),
		m("g", nt, [m("path", { d: e.nodeModel.iconPath }, null, 8, rt)]),
		m("text", {
			x: 37,
			y: 21,
			class: y(e.nodeModel.options.editableTitle ? "title-editable" : ""),
			"font-size": "14",
			"font-weight": "bold",
			fill: "#000000",
			ref: "title",
			onClick: t[0] ||= (t) => e.nodeModel.options.editableTitle ? e.mainDiagramComponent.editText(e.nodeModel, "title", e.$refs.title) : void 0
		}, O(e.nodeModel.title), 3),
		m("g", it, [T(e.$slots, "default")])
	]);
}
var ot = /* @__PURE__ */ K(et, [["render", at]]), st = v({
	props: { nodeModel: { type: Object } },
	computed: {
		options() {
			return this.nodeModel?.options || {};
		},
		parentDiagram() {
			return this.$parent?.$parent?.$parent;
		}
	}
}), ct = [
	"href",
	"width",
	"height"
], lt = [
	"x",
	"y",
	"width"
], ut = { class: "prevent-node-drag" };
function dt(e, t, n, r, i, a) {
	return S(), p("g", null, [
		m("image", {
			href: e.options.image,
			x: "5",
			width: e.nodeModel?.width - 10,
			height: e.nodeModel?.height
		}, null, 8, ct),
		m("text", {
			class: y(e.options.editableTitle ? "title-editable" : ""),
			x: e.nodeModel?.width / 2,
			y: e.nodeModel?.height + 14,
			width: e.nodeModel?.width,
			ref: "title",
			"text-anchor": "middle",
			"font-size": "14",
			"font-weight": "bold",
			fill: "#000000",
			style: b(e.options.titleStyle || ""),
			onClick: t[0] ||= (t) => e.options.editableTitle ? e.parentDiagram.editText(e.nodeModel, "title", e.$refs.title) : void 0
		}, O(e.nodeModel?.title), 15, lt),
		m("g", ut, [T(e.$slots, "default")])
	]);
}
var ft = /* @__PURE__ */ K(st, [["render", dt]]), pt = v({
	props: {
		nodeModel: { type: Object },
		selected: {
			type: Boolean,
			default: !1
		}
	},
	data() {
		return { titleFillOpacity: .25 };
	},
	computed: {
		NodePreviewExists() {
			return typeof D("NodePreview") != "string";
		},
		options() {
			return this.nodeModel?.options || {};
		},
		color() {
			return this.nodeModel?.color;
		},
		parentDiagram() {
			return this.$parent?.$parent?.$parent;
		}
	}
}), mt = { class: "node" }, ht = [
	"fill",
	"width",
	"height"
], gt = ["fill-opacity", "width"], _t = ["x"], vt = ["x1", "x2"], yt = ["x1", "x2"], bt = ["width", "height"], xt = { class: "prevent-node-drag" };
function St(e, t, n, r, i, a) {
	var o;
	return S(), p("g", mt, [
		m("rect", {
			fill: e.color,
			x: "0",
			y: "0",
			rx: "3",
			ry: "3",
			width: e.nodeModel?.width,
			height: e.nodeModel?.height,
			class: "node-rect node-dark-background"
		}, null, 8, ht),
		m("rect", {
			"fill-opacity": e.titleFillOpacity,
			x: "2",
			y: "2",
			rx: "3",
			ry: "3",
			width: e.nodeModel?.width - 4,
			height: "16",
			class: "node-dark-background title-rect"
		}, null, 8, gt),
		m("text", {
			x: "5",
			y: "15",
			class: y(e.options.editableTitle ? "title title-editable" : "title"),
			ref: "title",
			style: b(e.options.titleStyle || ""),
			onClick: t[0] ||= (t) => e.options.editableTitle ? e.parentDiagram.editText(e.nodeModel, "title", e.$refs.title) : void 0
		}, O(e.nodeModel?.options?.title || e.nodeModel?.title), 7),
		(o = e.nodeModel) != null && o.deletable ? (S(), p("g", {
			key: 0,
			onClick: t[1] ||= (t) => e.$emit("deleteNode")
		}, [
			m("rect", {
				x: e.nodeModel?.width - 12,
				y: "3",
				width: "14",
				height: "14",
				rx: "2",
				ry: "2",
				fill: "#ffffff",
				"fill-opacity": .25
			}, null, 8, _t),
			m("line", {
				x1: e.nodeModel?.width,
				y1: 5,
				x2: e.nodeModel?.width - 10,
				y2: 15,
				style: { stroke: "rgb(0,0,0)" },
				"stroke-width": "2"
			}, null, 8, vt),
			m("line", {
				x1: e.nodeModel?.width - 10,
				y1: 5,
				x2: e.nodeModel?.width,
				y2: 15,
				style: { stroke: "rgb(0,0,0)" },
				"stroke-width": "2"
			}, null, 8, yt)
		])) : f("", !0),
		m("rect", {
			x: "2",
			y: "20",
			rx: "3",
			ry: "3",
			width: e.nodeModel?.width - 4,
			height: e.nodeModel?.height - 22,
			class: "node-content node-light-background"
		}, null, 8, bt),
		m("g", xt, [T(e.$slots, "default", {}, void 0, !0)])
	]);
}
var Ct = /* @__PURE__ */ K(pt, [["render", St], ["__scopeId", "data-v-5f3275f8"]]), Y = { mounted() {
	this.$el.vueComponent = this;
} }, wt = v({
	name: "DiagramNode",
	props: {
		index: Number,
		id: {
			type: Number,
			required: !0
		},
		ports: {
			type: Array,
			default: () => []
		},
		width: {
			type: Number,
			required: !0
		},
		height: {
			type: Number,
			required: !0
		},
		deletable: {
			type: Boolean,
			default: !0
		},
		options: {
			type: Object,
			default: () => ({})
		},
		mainSelection: {
			type: Boolean,
			default: !1
		},
		selected: Boolean,
		nodeModel: {
			type: Object,
			required: !0
		},
		diagram: {
			type: Object,
			required: !0
		}
	},
	components: {
		"vue-diagrams-node-text": $e,
		"vue-diagrams-node-image": ft,
		"vue-diagrams-node-shader": Ct,
		"vue-diagrams-node-card": ot
	},
	mixins: [Y],
	data() {
		let e = this;
		return {
			resizeHandles: void 0,
			titleFillOpacity: 1,
			menu: [{
				label: "Delete node",
				handler() {
					var t;
					if (e.diagram.deleteNode(e.nodeModel), e.$parent?.$parent instanceof X) (t = e.$parent?.$parent) == null || t.updateLinksPositions();
					else throw "Main diagram component not found";
				},
				classes: []
			}]
		};
	},
	beforeUnmount() {
		this.resizeHandles && this.resizeHandles.unmount();
	},
	watch: {
		"nodeModel.x": "resizeNode",
		"nodeModel.y": "resizeNode",
		"nodeModel.width": "resizeNode",
		"nodeModel.height": "resizeNode",
		"options.resizable": {
			handler(e) {
				this.$nextTick(() => {
					e ? this.resizeHandles = new Je(this.$refs.resizeHandles, this.nodeModel.width, this.nodeModel.height, this.startDragResizeHandle) : this.resizeHandles &&= (this.resizeHandles.unmount(), void 0);
				});
			},
			immediate: !0
		},
		"options.type": {
			handler() {
				this.menu = this.menu.filter((e) => e.from !== "nodeType"), this.$nextTick(() => {
					let e = this.$refs.nodeType;
					if (e && e.menu) {
						e.menu.length && this.menu.unshift({
							classes: ["separator"],
							from: "nodeType"
						});
						for (let t of e.menu) this.menu.unshift({
							...t,
							from: "nodeType"
						});
					}
				});
			},
			immediate: !0
		}
	},
	computed: {
		x() {
			return this.nodeModel.x;
		},
		y() {
			return this.nodeModel.y;
		}
	},
	methods: {
		resizeNode() {
			this.resizeHandles && this.resizeHandles.updatePosition(this.nodeModel.width, this.nodeModel.height);
		},
		deleteNode() {
			this.$emit("delete");
		},
		mouseDown(e) {
			let t = (this == null ? void 0 : this.$parent)?.$parent;
			if (t.editable && !e.target.classList.contains("title-editable") && e.target.closest(".prevent-node-drag") === null) {
				let n = t.convertXYtoViewPort(e.x, e.y);
				this.$emit("onStartDrag", {
					type: "nodes",
					index: this.index,
					node: this.nodeModel
				}, n.x - this.nodeModel.x, n.y - this.nodeModel.y);
			}
		},
		mouseenter() {
			this.titleFillOpacity = .5;
		},
		mouseleave() {
			this.titleFillOpacity = .25;
		},
		startDragResizeHandle(e) {
			((this == null ? void 0 : this.$parent)?.$parent).editable && this.$emit("onStartDrag", {
				type: "resizeHandle",
				index: this.index,
				node: this.nodeModel,
				direction: e
			}, 0 - this.nodeModel.x, 0 - this.nodeModel.y);
		},
		nodeClick() {
			((this == null ? void 0 : this.$parent)?.$parent).$emit("nodeClick", this.nodeModel);
		}
	}
}), Tt = [
	"x",
	"y",
	"data-node-id"
], Et = [
	"stroke-width",
	"width",
	"height"
], Dt = { ref: "resizeHandles" };
function Ot(e, t, n, r, i, a) {
	return S(), p("svg", {
		x: e.nodeModel.x,
		y: e.nodeModel.y,
		class: y({
			"diagram-node": !0,
			selected: e.selected,
			"main-selection": e.mainSelection,
			"has-menu": !0
		}),
		"data-node-id": e.id,
		onClick: t[3] ||= (...t) => e.nodeClick && e.nodeClick(...t)
	}, [
		m("rect", {
			"stroke-width": e.selected ? 2 : 0,
			x: "0",
			y: "0",
			rx: "3",
			ry: "3",
			width: e.nodeModel.width,
			height: e.nodeModel.height,
			class: y({
				"node-rect": !0,
				"node-dark-background": !0,
				selected: e.selected,
				"main-selection": e.mainSelection
			})
		}, null, 10, Et),
		m("g", Dt, null, 512),
		m("g", {
			class: "diagram-node-content-wrapper mouse-events-wrapper",
			onMousedown: t[0] ||= (...t) => e.mouseDown && e.mouseDown(...t),
			onMouseenter: t[1] ||= (...t) => e.mouseenter && e.mouseenter(...t),
			onMouseleave: t[2] ||= (...t) => e.mouseleave && e.mouseleave(...t)
		}, [(S(), d(D(`vue-diagrams-node-${e.options.type || e.$parent.$parent.defaultNodeType}`), {
			ref: "nodeType",
			nodeModel: e.nodeModel,
			selected: e.selected,
			onDeleteNode: e.deleteNode
		}, {
			default: k(() => [T(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 40, [
			"nodeModel",
			"selected",
			"onDeleteNode"
		]))], 32)
	], 10, Tt);
}
var kt = /* @__PURE__ */ K(wt, [["render", Ot], ["__scopeId", "data-v-893eb1a1"]]), At = v({
	name: "DiagramPoint",
	props: {
		x: {
			type: Number,
			required: !0
		},
		y: {
			type: Number,
			required: !0
		}
	},
	mixins: [Y],
	data() {
		return {
			hover: !1,
			menu: [{
				label: "Delete point",
				handler: () => {
					this.$emit("delete");
				}
			}]
		};
	},
	methods: {
		mouseEnter() {
			this.hover = !0;
		},
		mouseLeave() {
			this.hover = !1;
		}
	}
}), jt = { class: "has-menu" }, Mt = ["cx", "cy"];
function Nt(e, t, n, r, i, a) {
	return S(), p("g", jt, [m("circle", {
		style: b(e.hover ? "stroke:rgba(255,0,0,0.5);" : "stroke:rgba(255,0,0,0.0);"),
		"stroke-width": "6",
		onMouseenter: t[0] ||= (...t) => e.mouseEnter && e.mouseEnter(...t),
		onMouseleave: t[1] ||= (...t) => e.mouseLeave && e.mouseLeave(...t),
		onMousedown: t[2] ||= (t) => e.$emit("mousedown", t),
		cx: e.x,
		cy: e.y,
		r: "5",
		fill: "black"
	}, null, 44, Mt)]);
}
var Pt = v({
	name: "DiagramLink",
	props: [
		"positionFrom",
		"positionTo",
		"id",
		"index",
		"points",
		"options",
		"linkModel",
		"diagram"
	],
	components: { DiagramPoint: /* @__PURE__ */ K(At, [["render", Nt]]) },
	mixins: [Y],
	data() {
		let e = this;
		return {
			largeStrokeStyle: "stroke:rgba(255,0,0,0.0);",
			pointStyleNormal: "stroke:rgba(255,0,0,0.0); stroke-width: 6",
			pointStyleHover: "stroke:rgba(255,0,0,0.5); stroke-width: 6",
			beginCurvePath: void 0,
			endCurvePath: void 0,
			menu: [{
				label: "Delete link",
				handler() {
					e.diagram.deleteLink(e.linkModel);
				}
			}]
		};
	},
	computed: {
		x1() {
			return this.positionFrom?.x;
		},
		y1() {
			return this.positionFrom?.y - 8;
		},
		x2() {
			return this.positionTo?.x - 4;
		},
		y2() {
			return this.positionTo?.y - 8;
		},
		curve() {
			if (this.x1 && this.y1 && this.x2 && this.y2) {
				let e = Math.trunc(this.x1), t = Math.trunc(this.y1), n = Math.trunc(this.x2), r = Math.trunc(this.y2), i = Math.trunc(4 * Math.sqrt(Math.abs(e - n)));
				return `M${e},${t} C${e + i},${t} ${n - i},${r} ${n},${r}`;
			}
		}
	},
	methods: {
		refreshLink() {},
		mouseEnter() {
			this.largeStrokeStyle = "stroke:rgba(255,0,0,0.5);";
		},
		mouseLeave() {
			this.largeStrokeStyle = "stroke:rgba(255,0,0,0.0);";
		},
		mouseEnterPoint() {},
		mouseLeavePoint() {},
		mouseDownPoint(e, t) {
			this.$emit("onStartDrag", {
				$event: e,
				type: "points",
				linkIndex: this.index,
				pointIndex: t
			});
		},
		mouseDownSegment(e, t) {
			(this.$parent?.$parent).editable && e.button !== 2 && (this.createPoint(e.x, e.y, t), this.mouseDownPoint(e, t));
		},
		createPoint(e, t, n) {
			this.$emit("onCreatePoint", e, t, this.index, n);
		}
	}
}), Ft = { class: "diagram-link has-menu" }, It = ["onMousedown"], Lt = [
	"x1",
	"y1",
	"x2",
	"y2"
], Rt = [
	"x1",
	"y1",
	"x2",
	"y2"
], zt = [
	"x1",
	"y1",
	"x2",
	"y2"
], Bt = [
	"x1",
	"y1",
	"x2",
	"y2"
], Vt = ["d"], Ht = ["d"];
function Ut(e, t, n, r, i, a) {
	let o = E("DiagramPoint");
	return S(), p("g", Ft, [e.points && e.points.length ? (S(), p("g", {
		key: 0,
		onMouseenter: t[1] ||= (...t) => e.mouseEnter && e.mouseEnter(...t),
		onMouseleave: t[2] ||= (...t) => e.mouseLeave && e.mouseLeave(...t)
	}, [(S(!0), p(u, null, w(e.points, (t, n) => (S(), p("g", {
		key: n,
		onMousedown: (t) => e.mouseDownSegment(t, n)
	}, [m("line", {
		x1: n === 0 ? e.x1 : e.points[n - 1].x,
		y1: n === 0 ? e.y1 : e.points[n - 1].y,
		x2: t.x,
		y2: t.y,
		style: b(e.largeStrokeStyle),
		"stroke-width": "8"
	}, null, 12, Lt), m("line", {
		x1: n === 0 ? e.x1 : e.points[n - 1].x,
		y1: n === 0 ? e.y1 : e.points[n - 1].y,
		x2: t.x,
		y2: t.y,
		class: "link-line",
		"stroke-width": "2"
	}, null, 8, Rt)], 40, It))), 128)), m("g", { onMousedown: t[0] ||= (t) => e.mouseDownSegment(t, e.points.length) }, [m("line", {
		x1: e.points[e.points.length - 1].x,
		y1: e.points[e.points.length - 1].y,
		x2: e.x2,
		y2: e.y2,
		style: b(e.largeStrokeStyle),
		"stroke-width": "8"
	}, null, 12, zt), m("line", {
		x1: e.points[e.points.length - 1].x,
		y1: e.points[e.points.length - 1].y,
		x2: e.x2,
		y2: e.y2,
		class: "link-line",
		"stroke-width": "2"
	}, null, 8, Bt)], 32)], 32)) : (S(), p("g", {
		key: 1,
		onMouseenter: t[4] ||= (...t) => e.mouseEnter && e.mouseEnter(...t),
		onMouseleave: t[5] ||= (...t) => e.mouseLeave && e.mouseLeave(...t)
	}, [m("g", { onMousedown: t[3] ||= (t) => e.mouseDownSegment(t, 0) }, [m("path", {
		d: e.curve,
		style: b(e.largeStrokeStyle),
		"stroke-width": "8",
		fill: "none"
	}, null, 12, Vt), m("path", {
		d: e.curve,
		ref: "curvePath",
		class: "link-line",
		"stroke-width": "2",
		fill: "none"
	}, null, 8, Ht)], 32)], 32)), (S(!0), p(u, null, w(e.points, (n, r) => (S(), d(o, {
		key: r,
		onMouseenter: t[6] ||= (t) => e.mouseEnterPoint(),
		onMouseleave: t[7] ||= (t) => e.mouseLeavePoint(),
		onMousedown: (t) => e.mouseDownPoint(t, r),
		x: n.x,
		y: n.y,
		onDelete: (t) => e.points.splice(r, 1)
	}, null, 8, [
		"onMousedown",
		"x",
		"y",
		"onDelete"
	]))), 128))]);
}
var Wt = /* @__PURE__ */ K(Pt, [["render", Ut], ["__scopeId", "data-v-ce8d1ca6"]]), Gt = {
	class: "port-shape",
	cx: "5",
	cy: "9",
	r: "4"
}, Kt = /* @__PURE__ */ v({
	__name: "DotPort",
	props: { port: Object },
	setup(e) {
		return (e, t) => (S(), p("circle", Gt));
	}
}), qt = ["x"], Jt = 10, Yt = v({
	name: "DiagramPort",
	props: [
		"id",
		"x",
		"y",
		"node",
		"nodeIndex",
		"port",
		"getPortComponents"
	],
	components: {
		"vue-diagrams-port-shape-dot": Kt,
		PortLabel: /* @__PURE__ */ v({
			__name: "PortLabel",
			props: {
				port: {
					type: Object,
					required: !0
				},
				width: Number
			},
			setup(e) {
				let t = e;
				return (n, r) => (S(), p("span", {
					class: y(`port-name port-${t.port.type}`),
					y: "8",
					x: (e.width || 0) - Jt
				}, O(t.port.name), 11, qt));
			}
		})
	},
	data() {
		return {
			hover: !1,
			fill: "#666666",
			menu: [{
				label: "Delete port",
				handler: () => {
					var e;
					let t = this.$parent;
					t.nodeModel.deletePort(this.id), (e = t.$parent) == null || e.$parent.updateLinksPositions();
				}
			}, {
				label: "Remove port links",
				handler: () => {
					console.warn("deleteLink event not fired here"), this.$parent.nodeModel.removePortLinks(this.id);
				}
			}]
		};
	},
	mixins: [Y],
	computed: {
		width() {
			return this.node.width || 72;
		},
		displayedY() {
			return this.port.options && this.port.options.y ? this.port.options.y : this.y + 30;
		},
		displayedX() {
			return this.port.options && this.port.options.x ? this.port.options.x : this.port.type === "out" ? this.width - 5 : -5;
		}
	},
	methods: {
		getPortShapeComponent(e) {
			return e === void 0 || typeof E(`vue-diagrams-port-shape-${e}`) == "string" ? "DotShapePort" : `vue-diagrams-port-shape-${e}`;
		},
		getPortLabelComponent(e) {
			if (this.getPortComponents) {
				let e = this.getPortComponents(this.port);
				if (e != null && e.label) return e.label;
			}
			if (e) {
				let t = E(`vue-diagrams-port-label-${e}`);
				return console.log("component?", e, t, `vue-diagrams-port-label-${e}`), typeof t == "string" ? void 0 : `vue-diagrams-port-label-${e}`;
			}
		},
		mouseup() {
			this.$emit("mouseUpPort", this.id);
		},
		enter() {
			this.fill = "#999999", this.hover = !0;
		},
		leave() {
			this.hover = !1, this.fill = "#666666";
		},
		startDragNewLink() {
			this.$emit("onStartDragNewLink", this.id);
		}
	}
});
function Xt(e, t, n, r, i, a) {
	let o = E("PortLabel");
	return S(), p("div", {
		class: y({
			"diagram-port": !0,
			"has-menu": !0,
			hover: e.hover
		}),
		style: {
			overflow: "visible",
			position: "relative",
			"padding-left": "10px"
		}
	}, [e.port.type === "option" ? f("", !0) : (S(), p("svg", {
		key: 0,
		onMouseenter: t[0] ||= (...t) => e.enter && e.enter(...t),
		onMouseleave: t[1] ||= (...t) => e.leave && e.leave(...t),
		onMousedown: t[2] ||= (...t) => e.startDragNewLink && e.startDragNewLink(...t),
		onMouseup: t[3] ||= (...t) => e.mouseup && e.mouseup(...t),
		class: y({
			"port-shape-container": !0,
			[`port-type-${e.port.type}`]: !0
		})
	}, [(S(), d(D(`vue-diagrams-port-shape-${e.port.display_shape || "dot"}`), { port: e.port }, null, 8, ["port"]))], 34)), m("div", { class: y({
		"label-wrapper": !0,
		[`port-type-${e.port.type}`]: !0
	}) }, [e.getPortLabelComponent(e.port.value_type) ? (S(), d(D(e.getPortLabelComponent(e.port.value_type)), {
		key: 0,
		port: e.port,
		width: e.width
	}, null, 8, ["port", "width"])) : (S(), d(o, {
		key: 1,
		port: e.port,
		width: e.width
	}, null, 8, ["port", "width"]))], 2)], 2);
}
var Zt = /* @__PURE__ */ K(Yt, [["render", Xt], ["__scopeId", "data-v-a63c184d"]]);
function Qt(e, t) {
	let n = null, r = t, i = function(...t) {
		clearTimeout(n), n = setTimeout(() => {
			n = null, e.apply(this, t);
		}, r), n || e.apply(this, t);
	};
	return i.cancel = () => {
		clearTimeout(n), n = null;
	}, i;
}
var $t = () => Math.trunc(Math.random() * 1e3), en = (e, t) => t * Math.round(e / t), tn = v({
	name: "Diagram",
	Model: Ke,
	props: {
		getPortComponents: {
			type: Function,
			default: void 0
		},
		defaultNodeType: {
			type: String,
			default: "shader"
		},
		model: {
			type: Object,
			required: !0
		},
		width: { default: 500 },
		height: { default: 500 },
		gridSnap: { default: 1 },
		showMenu: {
			type: Boolean,
			default: !1
		},
		showThumbnail: {
			type: Boolean,
			default: !1
		},
		editable: {
			type: Boolean,
			default: !0
		},
		controlIconsEnabled: {
			type: Boolean,
			default: !0
		}
	},
	data() {
		return {
			reactiveModel: this.model,
			mode: "move",
			document,
			displayLinks: !1,
			zoomEnabled: !0,
			panEnabled: !0,
			draggedItem: void 0,
			mainSelectedItem: {
				index: void 0,
				type: void 0
			},
			secondarySelectedNodes: [],
			initialDragX: 0,
			initialDragY: 0,
			mouseButtonIsPressed: !1,
			mouseDownViewportPos: {
				x: void 0,
				y: void 0
			},
			viewportMousePos: {
				x: void 0,
				y: void 0
			},
			newLink: void 0,
			mouseX: 0,
			mouseY: 0,
			viewPosition: void 0,
			magnetismAnchors: [],
			spz: void 0
		};
	},
	mounted() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.updateLinksPositions(), this.displayLinks = !0;
			}, 100);
		});
	},
	components: {
		Menu: Le,
		TextInput: Be,
		DiagramNode: kt,
		DiagramLink: Wt,
		DiagramPort: Zt,
		SvgPanZoom: Ae
	},
	computed: { querySelector() {
		return document.querySelector("#viewport");
	} },
	watch: {
		mode: {
			handler(e) {
				this.$emit("changeMode", e), this.$nextTick(() => {
					var t, n, r;
					e === "move" ? this.panEnabled ? (t = this.spz) == null || t.enablePan() : (n = this.spz) == null || n.disablePan() : (r = this.spz) == null || r.disablePan();
				});
			},
			immediate: !0
		},
		model: {
			handler(e) {
				e.emitter.on("deleteNode", (e) => {
					this.notifyDeleteNode(e);
				}), e.emitter.on("deserialize", () => {
					ee(() => this.updateLinksPositions());
				}), e.emitter.on("deletePort", () => {
					this.updateLinksPositions();
				}), e.emitter.on("deleteLink", (e) => {
					this.notifyDeleteLink(e), this.updateLinksPositions();
				});
			},
			immediate: !0
		},
		"model._model": {
			handler() {
				Qt(() => {
					this.$emit("model-updated", this.reactiveModel._model);
				}, 500)();
			},
			deep: !0
		},
		"model._model.links"() {
			this.updateLinksPositions();
		}
	},
	methods: {
		detectClickOnBg(e) {
			e.target.classList.contains("svg-pan-zoom_viewport") && (this.$emit("clickOnBackground"), this.clearSelection());
		},
		getAbsoluteXY(e) {
			let t = e.getBoundingClientRect();
			return {
				x: t.left,
				y: t.top
			};
		},
		notifyDeleteNode(e) {
			this.$emit("deleteNode", e);
		},
		notifyDeleteLink(e) {
			this.$emit("deleteLink", e);
		},
		spzCreated(e) {
			this.spz = e, e.setBeforePan((...e) => this.beforePan.apply(this, e));
		},
		editText(e, t, n) {
			this.editable && this.$refs.textInput.editText(e, t, n);
		},
		min(e, t) {
			return e === void 0 ? t : t === void 0 ? e : Math.min(e, t);
		},
		max(e, t) {
			return e === void 0 ? t : t === void 0 ? e : Math.max(e, t);
		},
		convertXYtoViewPort(e, t) {
			let n = this.$refs.dragramRoot, r = this.$refs.viewPort, i = n.createSVGPoint(), a = this.getAbsoluteXY(this.$el);
			i.x = e - a.x, i.y = t - a.y;
			let o = r.getCTM().inverse();
			return i.matrixTransform(o);
		},
		beforePan() {
			return !(this.mainSelectedItem.type || this.draggedItem || this.newLink);
		},
		createPoint(e, t, n, r) {
			let i = this.convertXYtoViewPort(e, t), a = this.reactiveModel._model.links;
			a[n].points === void 0 && (a[n].points = []);
			var o = a[n].points;
			o.splice(r, 0, i), a[n].points = o;
		},
		clearSelection(e, t, n) {
			e || (this.mainSelectedItem = {}, n || this.$emit("primarySelectionChanged", this.mainSelectedItem)), t || (this.secondarySelectedNodes = [], n || this.$emit("secondarySelectionChanged", this.secondarySelectedNodes));
		},
		updateLinksPositions() {
			let e = [];
			this.reactiveModel && this.reactiveModel._model && (e = this.reactiveModel._model.links);
			for (let t = 0; t < e.length; t++) {
				let n;
				if (n = this.getPortHandlePosition(e[t].from), e[t].positionFrom = {
					x: n?.x,
					y: n?.y
				}, n = this.getPortHandlePosition(e[t].to), e[t].positionTo = {
					x: n?.x,
					y: n?.y
				}, this.$refs["link-" + e[t].id]) {
					let n = this.$refs["link-" + e[t].id];
					Array.isArray(n) && (n = n[0]), n && n.refreshLink && n.refreshLink();
				}
			}
		},
		startDragNewLink(e) {
			this.editable && (this.newLink = { startPortId: e });
		},
		getPortHandlePosition(e) {
			if (this.$refs["port-" + e] && this.$refs["port-" + e][0]) {
				let t = this.$refs["port-" + e][0], n = this.$refs["node-" + t.nodeIndex][0], r, i;
				return t.port.type, r = n.x + t.displayedX + 5, i = n.y + t.displayedY + 9, {
					x: r,
					y: i
				};
			} else {
				console.warn(`port "${e}" not found. you must call this method after the first render`);
				return;
			}
		},
		mouseMoveMagnetismAnchors(e) {
			for (let t of this.magnetismAnchors) t.show = !1, t.x && Math.abs(t.x - (e.x - this.initialDragX)) < 10 && (e.x = t.x + this.initialDragX, t.show = !0), t.y && Math.abs(t.y - (e.y - this.initialDragY)) < 10 && (e.y = t.y + this.initialDragY, t.show = !0), this.draggedItem.node && (t.x && Math.abs(t.x - (e.x - this.initialDragX + this.draggedItem.node.width)) < 10 && (e.x = t.x + this.initialDragX - this.draggedItem.node.width, t.show = !0), t.y && Math.abs(t.y - (e.y - this.initialDragY + this.draggedItem.node.height)) < 10 && (e.y = t.y + this.initialDragY - this.draggedItem.node.height, t.show = !0));
		},
		mouseMove(e) {
			if (!this.editable) return;
			let t = this.reactiveModel._model.links;
			if (this.mouseX = e.clientX, this.mouseY = e.clientY, this.viewportMousePos = this.convertXYtoViewPort(e.x, e.y), this.mode === "move" && this.draggedItem) {
				let e = this.draggedItem.index, n = this.draggedItem.type, r = this.convertXYtoViewPort(this.mouseX, this.mouseY);
				if (r.x = en(r.x, this.gridSnap) - this.gridSnap / 2, r.y = en(r.y, this.gridSnap), this.mouseMoveMagnetismAnchors(r), n === "points") {
					let e = this.draggedItem.linkIndex, n = this.draggedItem.pointIndex;
					t[e].points[n].x = r.x, t[e].points[n].y = r.y;
				}
				if (n === "resizeHandle") {
					if (this.draggedItem.direction.indexOf("e") !== -1 && (this.reactiveModel._model.nodes[e].width = r.x - this.reactiveModel._model.nodes[e].x), this.draggedItem.direction.indexOf("s") !== -1 && (this.reactiveModel._model.nodes[e].height = r.y - this.reactiveModel._model.nodes[e].y), this.draggedItem.direction.indexOf("n") !== -1) {
						let t = this.reactiveModel._model.nodes[e].y + this.reactiveModel._model.nodes[e].height;
						this.reactiveModel._model.nodes[e].y = r.y, this.reactiveModel._model.nodes[e].height = t - r.y;
					}
					if (this.draggedItem.direction.indexOf("w") !== -1) {
						let t = this.reactiveModel._model.nodes[e].x + this.reactiveModel._model.nodes[e].width;
						this.reactiveModel._model.nodes[e].x = r.x, this.reactiveModel._model.nodes[e].width = t - r.x;
					}
				} else if (this.reactiveModel._model[n] && this.reactiveModel._model[n][e]) {
					let t = this.reactiveModel._model[n][e].x, i = this.reactiveModel._model[n][e].y;
					this.reactiveModel._model[n][e].x = r.x - this.initialDragX, this.reactiveModel._model[n][e].y = r.y - this.initialDragY;
					let a = this.reactiveModel._model[n][e].x - t, o = this.reactiveModel._model[n][e].y - i;
					for (let t of this.secondarySelectedNodes) n === "nodes" && t === this.reactiveModel._model[n][e] || (t.x += a, t.y += o);
				}
				this.updateLinksPositions();
			}
		},
		mouseDown(e) {
			this.editable && (this.mouseButtonIsPressed = !0, e.target.classList.contains("title-editable") || this.$refs.textInput.editText(), this.mode === "select" && (this.mouseDownViewportPos = this.convertXYtoViewPort(e.x, e.y)));
		},
		mouseUp() {
			if (this.editable && (this.mouseButtonIsPressed = !1, this.mode === "move" && this.secondarySelectedNodes && this.secondarySelectedNodes.length && (!this.draggedItem || this.draggedItem.type !== "nodes" || this.secondarySelectedNodes.filter((e) => e === this.reactiveModel._model.nodes[this.draggedItem.index]).length === 0) && (this.secondarySelectedNodes = [], this.$emit("secondarySelectionChanged", this.secondarySelectedNodes)), this.draggedItem = void 0, this.newLink = void 0, this.mode === "select")) {
				this.secondarySelectedNodes = [];
				for (let e of this.reactiveModel._model.nodes) {
					let t = Math.min(this.viewportMousePos.x, this.mouseDownViewportPos.x), n = Math.min(this.viewportMousePos.y, this.mouseDownViewportPos.y), r = Math.max(this.viewportMousePos.x, this.mouseDownViewportPos.x), i = Math.max(this.viewportMousePos.y, this.mouseDownViewportPos.y);
					e.x < r && e.y < i && e.x + e.width > t && e.y + e.height > n && this.secondarySelectedNodes.push(e), this.mode = "move";
				}
				this.$emit("secondarySelectionChanged", this.secondarySelectedNodes);
			}
		},
		mouseUpPort(e) {
			if (!this.editable) return;
			let t = this.reactiveModel._model.links;
			if (this.draggedItem && this.draggedItem.type === "points") {
				let n = this.draggedItem.pointIndex, r = this.draggedItem.linkIndex;
				if (this.$refs["port-" + e][0].type === "in") {
					let e = t[r].points.length;
					t[r].points.splice(n, e - this.draggedItem.pointIndex);
				} else t[r].points.splice(0, n + 1);
				this.updateLinksPositions();
			}
			if (this.newLink !== void 0) {
				let n = this.newLink.startPortId, r = e, i = this.$refs["port-" + n][0], a = this.$refs["port-" + r][0], o;
				i.type === "in" && a.type === "out" ? o = {
					id: $t(),
					from: a.id,
					to: i.id,
					points: []
				} : a.port.type === "in" && i.port.type === "out" ? o = {
					id: $t(),
					from: i.id,
					to: a.id,
					points: []
				} : console.warn("You must link one out port and one in port"), o && t.push(o), this.$emit("newLink", o), this.updateLinksPositions();
			}
		},
		startDragPoint(e) {
			this.draggedItem = e;
		},
		startDragItem(e, t, n) {
			this.draggedItem = e, this.mainSelectedItem = e, this.$emit("primarySelectionChanged", this.mainSelectedItem), this.initialDragX = t, this.initialDragY = n, this.listMagnetismAnchors();
		},
		listMagnetismAnchors() {
			let e = [];
			for (let t of this.reactiveModel._model.nodes) t.id !== this.draggedItem.node.id && (e.push({
				x: t.x || 0,
				node: t
			}), e.push({
				y: t.y || 0,
				node: t
			}), e.push({
				x: t.x + t.width || 0,
				node: t
			}), e.push({
				y: t.y + t.height || 0,
				node: t
			}));
			this.magnetismAnchors = e;
		}
	}
}), nn = { class: "vue-diagrams" }, rn = [
	"viewBox",
	"width",
	"height"
], an = {
	ref: "viewPort",
	id: "viewport",
	x: "50",
	y: "50"
}, on = { key: 0 }, sn = [
	"x1",
	"y1",
	"x2",
	"y2"
], cn = [
	"fill",
	"stroke",
	"x",
	"y"
], ln = ["x", "y"], un = ["width", "height"], dn = { class: "diagram-node-content-wrapper" }, fn = [
	"x",
	"y",
	"width",
	"height"
], pn = { class: "thumbViewClass" }, mn = [
	"x",
	"y",
	"width",
	"height",
	"fill"
];
function hn(e, t, n, r, i, a) {
	let o = E("Menu"), s = E("TextInput"), c = E("DiagramLink"), l = E("DiagramPort"), g = E("DiagramNode"), v = E("SvgPanZoom");
	return S(), p("div", nn, [
		e.showMenu ? (S(), d(o, {
			key: 0,
			ref: "menu"
		}, null, 512)) : f("", !0),
		_(s, { ref: "textInput" }, null, 512),
		_(v, {
			ref: "svgpanzoom",
			class: "svgpanzoom",
			style: b({
				width: e.width + "px",
				height: e.height + "px"
			}),
			zoomEnabled: e.zoomEnabled,
			id: "svgroot",
			panEnabled: e.panEnabled,
			controlIconsEnabled: !1,
			fit: !1,
			center: !0,
			viewportSelector: "#svgroot2",
			preventMouseEventsDefault: !1,
			beforePan: e.beforePan,
			onCreated: e.spzCreated
		}, h({
			default: k(() => [(S(), p("svg", {
				id: "svgroot2",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 " + e.width + " " + e.height,
				width: e.width,
				height: e.height,
				preserveAspectRatio: "xMinYMin meet",
				class: "svg-content",
				ref: "dragramRoot",
				onMousemove: t[1] ||= (...t) => e.mouseMove && e.mouseMove(...t),
				onMouseup: t[2] ||= (...t) => e.mouseUp && e.mouseUp(...t),
				onMousedown: t[3] ||= (...t) => e.mouseDown && e.mouseDown(...t)
			}, [
				t[5] ||= m("defs", null, [m("pattern", {
					id: "smallGrid",
					width: "16",
					height: "16",
					patternUnits: "userSpaceOnUse"
				}, [m("path", {
					d: "M 16 0 L 0 0 0 16",
					fill: "none",
					"stroke-width": "1"
				})]), m("pattern", {
					id: "grid",
					width: "80",
					height: "80",
					patternUnits: "userSpaceOnUse"
				}, [m("rect", {
					width: "80",
					height: "80",
					fill: "url(#smallGrid)"
				}), m("path", {
					d: "M 80 0 L 0 0 0 80",
					fill: "none",
					"stroke-width": "1"
				})])], -1),
				m("rect", {
					ref: "grid",
					class: "svg-pan-zoom_viewport",
					x: "-5000px",
					y: "-5000px",
					width: "10000px",
					height: "10000px",
					fill: "url(#grid)",
					onMousedown: t[0] ||= (t) => e.mode === "select" ? void 0 : e.detectClickOnBg(t)
				}, null, 544),
				m("g", an, [
					e.displayLinks ? (S(), p("g", on, [(S(!0), p(u, null, w(e.reactiveModel._model.links, (t, n) => (S(), d(c, {
						ref_for: !0,
						ref: "link-" + t.id,
						positionFrom: t.positionFrom,
						positionTo: t.positionTo,
						points: t.points,
						id: t.id,
						key: t.id,
						index: n,
						options: t.options,
						linkModel: t,
						diagram: e.model,
						onOnStartDrag: e.startDragPoint,
						onOnCreatePoint: e.createPoint,
						onDelete: (n) => e.model.deleteLink(t)
					}, null, 8, [
						"positionFrom",
						"positionTo",
						"points",
						"id",
						"index",
						"options",
						"linkModel",
						"diagram",
						"onOnStartDrag",
						"onOnCreatePoint",
						"onDelete"
					]))), 128)), e.newLink ? (S(), p("line", {
						key: 0,
						x1: e.getPortHandlePosition(e.newLink.startPortId)?.x,
						y1: (e.getPortHandlePosition(e.newLink.startPortId)?.y || 0) - 8,
						x2: e.convertXYtoViewPort(e.mouseX, 0).x,
						y2: e.convertXYtoViewPort(0, e.mouseY).y,
						style: {
							stroke: "rgb(255,0,0)",
							"stroke-width": "2"
						}
					}, null, 8, sn)) : f("", !0)])) : f("", !0),
					(S(!0), p(u, null, w(e.reactiveModel._model.nodes, (n, r) => (S(), d(g, {
						ref_for: !0,
						ref: "node-" + r,
						class: "node-abstract-wrapper",
						title: n.title,
						nodeModel: n,
						diagram: e.model,
						x: n.x,
						y: n.y,
						id: n.id,
						key: n.id,
						width: n.width,
						height: n.height,
						ports: n.ports,
						mainSelection: e.mainSelectedItem.type === "nodes" && e.mainSelectedItem.node.id === n.id,
						selected: e.mainSelectedItem.type === "nodes" && e.mainSelectedItem.index === r || e.secondarySelectedNodes.indexOf(n) !== -1,
						options: n.options,
						index: r,
						onOnStartDrag: e.startDragItem,
						onDelete: (t) => e.model.deleteNode(n)
					}, {
						default: k(() => [
							t[4] ||= m("g", { class: "tooltips" }, null, -1),
							(S(!0), p(u, null, w(n.ports, (e, t) => {
								var r;
								return S(), p(u, null, [(r = e.options?.tooltip) != null && r.text ? (S(), p("g", {
									key: 0,
									class: y({
										tooltip: !0,
										"tooltip-show-on-port-hover": e.options?.tooltip?.trigger === "hoverPort"
									}),
									style: b({ opacity: e.options?.tooltip?.opacity })
								}, [m("rect", {
									fill: e.options?.tooltip?.fill || "#eeeeee",
									stroke: e.options?.tooltip?.stroke || "#bbbbbb",
									x: e.type === "in" ? -50 : n.width + 10,
									y: t * 20 + 25,
									rx: 3,
									ry: 3,
									width: 40,
									height: 16
								}, null, 8, cn), m("text", {
									x: e.type === "in" ? -42 : n.width + 18,
									y: t * 20 + 36,
									"font-size": "8pt",
									fill: "#000000"
								}, O(e.options?.tooltip?.text), 9, ln)], 6)) : f("", !0)], 64);
							}), 256)),
							(S(), p("foreignObject", {
								width: n.width + 10,
								x: "-5",
								height: n.height - 20,
								y: "20"
							}, [m("div", dn, [(S(!0), p(u, null, w(n.ports, (t, i) => (S(), d(l, {
								key: i,
								ref_for: !0,
								ref: "port-" + t.id,
								id: t.id,
								nodeIndex: r,
								y: i * 20,
								node: n,
								port: t,
								getPortComponents: e.getPortComponents,
								onOnStartDragNewLink: e.startDragNewLink,
								onMouseUpPort: e.mouseUpPort
							}, null, 8, [
								"id",
								"nodeIndex",
								"y",
								"node",
								"port",
								"getPortComponents",
								"onOnStartDragNewLink",
								"onMouseUpPort"
							]))), 128))])], 8, un))
						]),
						_: 2
					}, 1032, [
						"title",
						"nodeModel",
						"diagram",
						"x",
						"y",
						"id",
						"width",
						"height",
						"ports",
						"mainSelection",
						"selected",
						"options",
						"index",
						"onOnStartDrag",
						"onDelete"
					]))), 128)),
					e.mode === "select" && e.mouseButtonIsPressed ? (S(), p("rect", {
						key: 1,
						x: e.min(e.viewportMousePos.x, e.mouseDownViewportPos.x),
						y: e.min(e.viewportMousePos.y, e.mouseDownViewportPos.y),
						width: (e.max(e.viewportMousePos.x, e.mouseDownViewportPos.x) || 0) - (e.min(e.viewportMousePos.x, e.mouseDownViewportPos.x) || 0),
						height: (e.max(e.viewportMousePos.y, e.mouseDownViewportPos.y) || 0) - (e.min(e.viewportMousePos.y, e.mouseDownViewportPos.y) || 0),
						fill: "#000000",
						"fill-opacity": .5
					}, null, 8, fn)) : f("", !0)
				], 512)
			], 40, rn))]),
			_: 2
		}, [e.showThumbnail ? {
			name: "thumbnail",
			fn: k(() => [(S(), p("svg", pn, [(S(!0), p(u, null, w(e.model._model.nodes, (e) => (S(), p("rect", {
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height,
				fill: e.color || "#66cc00",
				key: e.id
			}, null, 8, mn))), 128)), (S(!0), p(u, null, w(e.model._model.links, (t, n) => (S(), d(c, {
				positionFrom: t.positionFrom,
				positionTo: t.positionTo,
				points: t.points,
				id: t.id,
				index: n,
				options: t.options,
				linkModel: t,
				diagram: e.model,
				key: n
			}, null, 8, [
				"positionFrom",
				"positionTo",
				"points",
				"id",
				"index",
				"options",
				"linkModel",
				"diagram"
			]))), 128))]))]),
			key: "0"
		} : void 0]), 1032, [
			"style",
			"zoomEnabled",
			"panEnabled",
			"beforePan",
			"onCreated"
		])
	]);
}
var X = /* @__PURE__ */ K(tn, [["render", hn], ["__scopeId", "data-v-954c890f"]]);
//#endregion
//#region src/views/VocPad.vue
r();
var { triple: Z, namedNode: Q, literal: $ } = e, gn = {
	name: "VocPad",
	setup() {
		return {
			store: n(),
			selection: t()
		};
	},
	components: {
		TermInput: s,
		Diagram: X
	},
	data() {
		return {
			classes: [],
			properties: [],
			class_iri: Q("http://example.org/classes#"),
			class_label: $(""),
			class_comment: $(""),
			property_iri: Q("http://example.org/properties#"),
			property_label: $(""),
			property_comment: $(""),
			nodes: [],
			portIds: [],
			model: new X.Model(),
			originalDataModel: [],
			next_x: null,
			next_y: null,
			hover_note_shown: !1,
			add_class_modal: null,
			add_property_modal: null
		};
	},
	computed: { ...ae(t, ["graph_iri"]) },
	mounted() {
		this.getLists(), this.getShapes(), this.add_class_modal = new i(this.$refs.add_class), this.add_property_modal = new i(this.$refs.add_property);
	},
	watch: { graph_iri(e) {
		console.log("graph_iri changed" + e), this.getLists(), this.getShapes();
	} },
	methods: {
		select(e) {
			console.log(e), this.selection.changeResourceIri(e);
		},
		async getLists() {
			this.getList("select distinct ?resourceIri {           {             ?sc a ?resourceIri           } union {             ?resourceIri a <http://www.w3.org/2000/01/rdf-schema#Class>           } union {             ?resourceIri a <http://www.w3.org/2002/07/owl#Class>           }         } order by ?resourceIri", "class").then((e) => {
				this.classes = e;
			}), this.getList("select distinct ?resourceIri {           {             ?sp ?resourceIri ?op           } union {             ?resourceIri a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>           } union {             ?resourceIri a <http://www.w3.org/2002/07/owl#ObjectProperty>           } union {             ?resourceIri a <http://www.w3.org/2002/07/owl#DatatypeProperty>           }         } order by ?resourceIri", "property").then((e) => {
				this.properties = e;
			});
		},
		async getList(e, t) {
			let n = await this.store.sendQuery(e);
			if (n.resultType === "bindings") {
				let e = [], r = await n.execute();
				for await (let n of r) n.has("resourceIri") && e.push({
					iri: n.get("resourceIri").value,
					termType: t
				});
				return e;
			}
		},
		async add_term(e) {
			let t = [];
			e === "class" ? t = [
				Z(this.class_iri, Q("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), Q("http://www.w3.org/2000/01/rdf-schema#Class")),
				Z(this.class_iri, Q("http://www.w3.org/2000/01/rdf-schema#label"), this.class_label),
				Z(this.class_iri, Q("http://www.w3.org/2000/01/rdf-schema#comment"), this.class_comment)
			] : e === "property" && (t = [
				Z(this.property_iri, Q("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), Q("http://www.w3.org/1999/02/22-rdf-syntax-ns#Property")),
				Z(this.property_iri, Q("http://www.w3.org/2000/01/rdf-schema#label"), this.property_label),
				Z(this.property_iri, Q("http://www.w3.org/2000/01/rdf-schema#comment"), this.property_comment)
			]);
			try {
				await this.store.deleteInsertData({
					insertArray: t,
					graphIri: this.graph_iri
				}), this.getLists();
			} catch (e) {
				console.error(e);
			}
		},
		startDrag: (e, t) => {
			e.dataTransfer.dropEffect = "move", e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("iri", t.iri), e.dataTransfer.setData("termType", t.termType), console.log("start dragging " + t.iri);
		},
		onDrop(e) {
			let t = e.dataTransfer.getData("iri"), n = e.dataTransfer.getData("termType");
			console.log("received " + t), console.log(t), console.log(n), n === "class" && this.addNodeShape("urn:nodeshape:" + l(), t, e.layerX, e.layerY);
		},
		onDropNode(e, t) {
			let n = e.dataTransfer.getData("iri"), r = e.dataTransfer.getData("termType");
			console.log("received on diagram node " + n), console.log(n), r === "property" && this.addPropertyShape(t, "urn:propertyshape:" + l(), n);
		},
		configureProperty(e, t) {
			console.log(e), console.log(t), console.log("configure " + e.object.shapeIri.id + " port" + t.object.shapeIri.id);
		},
		shortenIri(e) {
			return o().shortenIri(e);
		},
		getShapeByPortId(e) {
			return Q(this.portIds[e]);
		},
		getPortIdByShape(e) {
			let t = this.portIds.indexOf(e);
			if (t !== -1) return t;
		},
		setShapePortIdMapping(e, t) {
			let n = this.portIds.indexOf(e);
			n > -1 && n !== t && console.log("Duplicate shapeIri should not happen"), this.portIds[t] = e;
		},
		async saveShapes() {
			let e = this.model._model;
			console.log(this.model.serialize());
			let t = [];
			for (let n in e.nodes) {
				let r = e.nodes[n], i = r.object.shapeIri, a = r.object.targetClass;
				for (let e in r.ports) {
					let n = r.ports[e];
					if (n.name === "IRI") this.setShapePortIdMapping(i.id, n.id);
					else {
						let e = n.object.shapeIri, r = n.object.path;
						this.setShapePortIdMapping(e.id, n.id), t.push(Z(i, Q("http://www.w3.org/ns/shacl#property"), e)), t.push(Z(e, Q("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), Q("http://www.w3.org/ns/shacl#PropertyShape"))), t.push(Z(e, Q("http://www.w3.org/ns/shacl#path"), r));
					}
				}
				t.push(Z(i, Q("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"), Q("http://www.w3.org/ns/shacl#NodeShape"))), t.push(Z(i, Q("http://www.w3.org/ns/shacl#targetClass"), a));
			}
			for (let n in e.links) {
				let r = e.links[n];
				t.push(Z(this.getShapeByPortId(r.from), Q("http://www.w3.org/ns/shacl#node"), this.getShapeByPortId(r.to)));
			}
			let n = c(this.originalDataModel, t);
			console.log(n);
			try {
				await this.store.deleteInsertData({
					insertArray: n.add,
					deleteArray: n.del,
					graphIri: this.graph_iri
				}), this.$bvToast.toast("Shapes where saved to the store", {
					title: "Save Shapes",
					autoHideDelay: 500
				});
			} catch (e) {
				this.$bvToast.toast("Storing the Shapes failed", {
					title: "Save Shapes",
					variant: "danger",
					autoHideDelay: 5e3
				}), console.error(e);
			}
		},
		nextPosition(e = !1) {
			return e || this.next_x === null ? (this.next_x = -1.75, this.next_y = 0) : this.next_x < 1 ? this.next_x += 1 : (this.next_x = -1.75, this.next_y += 1), {
				x: this.next_x * 240,
				y: this.next_y * 180
			};
		},
		addNodeShape(e, t, n = null, r = null, i = 200) {
			if (this.nodes[e] !== void 0) return this.nodes[e];
			{
				let a = {
					title: this.shortenIri(t),
					targetClass: Q(t),
					shapeIri: Q(e)
				};
				if (n === null || r === null) {
					let e = this.nextPosition();
					n = e.x, r = e.y;
				}
				let o = this.model.addNode(a, n, r, i);
				return this.nodes[e] = o, this.setShapePortIdMapping(e, o.addInPort("IRI")), o;
			}
		},
		addPropertyShape(e, t, n) {
			if (this.getPortIdByShape(t)) return this.getPortIdByShape(t);
			let r = {
				title: this.shortenIri(n),
				path: Q(n),
				shapeIri: Q(t)
			}, i = e.addOutPort(r);
			return this.setShapePortIdMapping(t, i), i;
		},
		getShapes() {
			this.store.sendQuery("PREFIX sh: <http://www.w3.org/ns/shacl#>\n        select distinct ?nodeShape ?targetClass ?propertyShape ?path ?nodeShapeRef ?targetClassRef {\n          ?nodeShape a sh:NodeShape ;\n            sh:targetClass ?targetClass .\n          optional {\n            ?nodeShape sh:property ?propertyShape .\n            ?propertyShape sh:path ?path .\n            optional {\n              ?propertyShape sh:node ?nodeShapeRef .\n              ?nodeShapeRef sh:targetClass ?targetClassRef .\n            }\n          }\n        } order by ?nodeShape ?propertyShape").then(async (e) => {
				if (e.resultType === "bindings") {
					let t = await e.execute();
					for await (let e of t) {
						let t = this.addNodeShape(e.get("nodeShape").value, e.get("targetClass").value);
						if (e.has("propertyShape") && e.has("path")) {
							let n = this.addPropertyShape(t, e.get("propertyShape").value, e.get("path").value);
							e.has("nodeShapeRef") && e.has("targetClassRef") && (this.addNodeShape(e.get("nodeShapeRef").value, e.get("targetClassRef").value), this.model.addLink(n, this.getPortIdByShape(e.get("nodeShapeRef").value)));
						}
					}
				}
				this.nextPosition(!0);
			}), this.store.sendQuery("PREFIX sh: <http://www.w3.org/ns/shacl#>\n          construct {\n            ?nodeShape a sh:NodeShape ;\n              sh:targetClass ?targetClass ;\n              sh:property ?propertyShape .\n            ?propertyShape a ?propertyShapeType ;\n              sh:path ?path ;\n              sh:node ?nodeShapeRef .\n            ?nodeShapeRef sh:targetClass ?targetClassRef .\n          } where {\n            ?nodeShape a sh:NodeShape ;\n              sh:targetClass ?targetClass .\n            optional {\n              ?nodeShape sh:property ?propertyShape .\n              ?propertyShape sh:path ?path .\n              optional {\n                ?propertyShape sh:node ?nodeShapeRef .\n                ?nodeShapeRef sh:targetClass ?targetClassRef .\n              }\n              optional {\n                ?propertyShape a ?propertyShapeType .\n              }\n            }\n          }").then(async (e) => {
				e.resultType === "quads" && (this.originalDataModel = await (await e.execute()).toArray());
			});
		},
		hoverTerms(e) {
			e && !this.hover_note_shown && (this.$bvToast.toast("You can drag a class from the left hand side to the canvas to create a NodeShape. In the same way you can drag a property from the left hand side onto a NodeShape to create a PropertyShape.", {
				title: "Pro Tip!",
				variant: "info",
				noAutoHide: !0
			}), this.hover_note_shown = !0);
		}
	}
}, _n = { class: "row" }, vn = {
	class: "col-3",
	style: {
		height: "80vh",
		"overflow-y": "scroll"
	}
}, yn = { class: "card" }, bn = { class: "card-header d-flex justify-content-between align-items-center" }, xn = { class: "list-group list-group-flush" }, Sn = [
	"for",
	"onDragstart",
	"title",
	"onClick"
], Cn = { class: "card" }, wn = { class: "card-header" }, Tn = { class: "d-flex justify-content-between align-items-center" }, En = { class: "list-group list-group-flush" }, Dn = [
	"for",
	"title",
	"onDragstart",
	"onClick"
], On = { class: "col-9" }, kn = { class: "card" }, An = { class: "card-header d-flex justify-content-between align-items-center" }, jn = { class: "card-body" }, Mn = {
	class: "modal",
	ref: "add_class",
	"data-bs-backdrop": "static"
}, Nn = { class: "modal-dialog modal-lg" }, Pn = { class: "modal-content" }, Fn = { class: "modal-header" }, In = { class: "modal-body" }, Ln = { class: "form-group" }, Rn = { class: "form-group" }, zn = { class: "form-group" }, Bn = { class: "modal-footer" }, Vn = {
	class: "modal fade",
	ref: "add_property",
	"data-bs-backdrop": "static"
}, Hn = { class: "modal-dialog modal-lg" }, Un = { class: "modal-content" }, Wn = { class: "modal-header" }, Gn = { class: "modal-body" }, Kn = { class: "form-group" }, qn = { class: "form-group" }, Jn = { class: "form-group" }, Yn = { class: "modal-footer" }, Xn = {
	class: "modal fade",
	ref: "configure_property",
	"data-bs-backdrop": "static"
}, Zn = { class: "modal-content" }, Qn = { class: "modal-header" }, $n = { class: "modal-body" }, er = { class: "form-group" }, tr = { class: "form-group" }, nr = { class: "form-group" }, rr = { class: "form-group" }, ir = { class: "modal-footer" };
function ar(e, t, n, r, i, a) {
	let o = E("diagram"), s = E("TermInput");
	return S(), p(u, null, [
		m("div", _n, [m("div", vn, [m("div", yn, [m("div", bn, [t[27] ||= m("h6", { class: "mb-0" }, "Class List", -1), m("div", null, [m("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[0] ||= (...e) => a.getLists && a.getLists(...e),
			title: "Reload",
			"aria-label": "Reload"
		}, [...t[25] ||= [m("i", { class: "bi bi-arrow-repeat" }, null, -1)]]), m("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[1] ||= () => {
				i.add_class_modal.show();
			},
			title: "Create Class",
			"aria-label": "Create Class"
		}, [...t[26] ||= [m("i", { class: "bi bi-plus-square" }, null, -1)]])])]), m("div", xn, [(S(!0), p(u, null, w(i.classes, (e, t) => (S(), p("li", {
			class: "list-group-item py-2",
			key: "class-" + t,
			for: "class-" + t,
			style: { cursor: "move" },
			draggable: "true",
			onDragstart: (t) => a.startDrag(t, e),
			title: e.iri,
			onClick: (t) => a.select(e.iri)
		}, O(a.shortenIri(e.iri)), 41, Sn))), 128))])]), m("div", Cn, [m("div", wn, [m("div", Tn, [t[29] ||= m("h6", { class: "mb-0" }, "Property List", -1), m("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[2] ||= () => {
				i.add_property_modal.show();
			},
			title: "Create Property",
			"aria-label": "Create Property"
		}, [...t[28] ||= [m("i", { class: "bi bi-plus-square" }, null, -1)]])])]), m("div", En, [(S(!0), p(u, null, w(i.properties, (e, t) => (S(), p("li", {
			class: "list-group-item py-2",
			key: "property-" + t,
			for: "property-" + t,
			style: { cursor: "move" },
			draggable: "true",
			title: e.iri,
			onDragstart: (t) => a.startDrag(t, e),
			onClick: (t) => a.select(e.iri)
		}, O(a.shortenIri(e.iri)), 41, Dn))), 128))])])]), m("div", On, [m("div", kn, [m("div", An, [t[32] ||= m("h6", { class: "mb-0" }, "Shape Composer", -1), m("div", null, [m("button", {
			type: "button",
			class: "btn btn-secondary mb-0",
			onClick: t[3] ||= (...e) => a.getShapes && a.getShapes(...e),
			title: "Reload",
			"aria-label": "Reload"
		}, [...t[30] ||= [m("i", { class: "bi bi-arrow-repeat" }, null, -1)]]), m("button", {
			type: "button",
			class: "btn btn-secondary",
			onClick: t[4] ||= (...e) => a.saveShapes && a.saveShapes(...e),
			title: "Save Schema/Shapes",
			"aria-label": "Save Schema/Shapes"
		}, [...t[31] ||= [m("i", { class: "bi bi-save" }, null, -1)]])])]), m("div", jn, [_(o, {
			model: i.model,
			width: "100%",
			height: "600",
			onDrop: t[5] ||= (e) => a.onDrop(e),
			onDropNode: a.onDropNode,
			onConfigurePort: a.configureProperty,
			onDragover: ie(() => {}, ["prevent"])
		}, null, 8, [
			"model",
			"onDropNode",
			"onConfigurePort"
		])])])])]),
		m("div", Mn, [m("div", Nn, [m("div", Pn, [
			m("div", Fn, [t[33] ||= m("h5", { class: "modal-title" }, "Add Class", -1), m("button", {
				type: "button",
				class: "btn-close",
				onClick: t[6] ||= (e) => i.add_class_modal.hide(),
				"aria-label": "Close"
			})]),
			m("div", In, [m("form", null, [
				m("div", Ln, [t[34] ||= m("label", { for: "class_iri" }, "Class IRI", -1), m("div", null, [_(s, {
					type: "iri",
					id: "class_iri",
					term: i.class_iri,
					"onUpdate:term": t[7] ||= (e) => i.class_iri = e
				}, null, 8, ["term"])])]),
				m("div", Rn, [t[35] ||= m("label", { for: "class_label" }, "Label (rdfs:label)", -1), m("div", null, [_(s, {
					type: "literal",
					id: "class_label",
					term: i.class_label,
					"onUpdate:term": t[8] ||= (e) => i.class_label = e
				}, null, 8, ["term"])])]),
				m("div", zn, [t[36] ||= m("label", { for: "class_comment" }, "Comment (rdfs:comment)", -1), m("div", null, [_(s, {
					type: "literal",
					id: "class_comment",
					term: i.class_comment,
					"onUpdate:term": t[9] ||= (e) => i.class_comment = e
				}, null, 8, ["term"])])])
			])]),
			m("div", Bn, [m("button", {
				type: "button",
				class: "btn btn-secondary",
				onClick: t[10] ||= (e) => i.add_class_modal.hide()
			}, "Close"), m("button", {
				type: "button",
				class: "btn btn-primary",
				onClick: t[11] ||= (e) => a.add_term("class")
			}, "Save changes")])
		])])], 512),
		m("div", Vn, [m("div", Hn, [m("div", Un, [
			m("div", Wn, [t[37] ||= m("h5", { class: "modal-title" }, "Add Property", -1), m("button", {
				type: "button",
				class: "btn-close",
				onClick: t[12] ||= (e) => i.add_property_modal.hide(),
				"aria-label": "Close"
			})]),
			m("div", Gn, [m("form", null, [
				m("div", Kn, [t[38] ||= m("label", { for: "property_iri" }, "Property IRI", -1), m("div", null, [_(s, {
					type: "iri",
					id: "property_iri",
					term: i.property_iri,
					"onUpdate:term": t[13] ||= (e) => i.property_iri = e
				}, null, 8, ["term"])])]),
				m("div", qn, [t[39] ||= m("label", { for: "property_label" }, "Label (rdfs:label)", -1), m("div", null, [_(s, {
					type: "literal",
					id: "property_label",
					term: i.property_label,
					"onUpdate:term": t[14] ||= (e) => i.property_label = e
				}, null, 8, ["term"])])]),
				m("div", Jn, [t[40] ||= m("label", { for: "property_comment" }, "Comment (rdfs:comment)", -1), m("div", null, [_(s, {
					type: "literal",
					id: "property_comment",
					term: i.property_comment,
					"onUpdate:term": t[15] ||= (e) => i.property_comment = e
				}, null, 8, ["term"])])])
			])]),
			m("div", Yn, [m("button", {
				type: "button",
				class: "btn btn-secondary",
				onClick: t[16] ||= (e) => i.add_property_modal.hide()
			}, "Close"), m("button", {
				type: "button",
				class: "btn btn-primary",
				onClick: t[17] ||= (e) => a.add_term("property")
			}, "Save changes")])
		])])], 512),
		m("div", Xn, [m("div", Zn, [
			m("div", Qn, [t[41] ||= m("h5", { class: "modal-title" }, "Configure Property Shape", -1), m("button", {
				type: "button",
				class: "btn-close",
				onClick: t[18] ||= (t) => e.configure_property.hide(),
				"aria-label": "Close"
			})]),
			m("div", $n, [m("form", null, [
				m("div", er, [t[42] ||= m("label", { for: "property_iri" }, "Type", -1), m("div", null, [_(s, {
					type: "iri",
					id: "property_iri",
					term: i.property_iri,
					"onUpdate:term": t[19] ||= (e) => i.property_iri = e
				}, null, 8, ["term"])])]),
				m("div", tr, [t[43] ||= m("label", { for: "property_iri" }, "Datatype", -1), m("div", null, [_(s, {
					type: "iri",
					id: "property_iri",
					term: i.property_iri,
					"onUpdate:term": t[20] ||= (e) => i.property_iri = e
				}, null, 8, ["term"])])]),
				m("div", nr, [t[44] ||= m("label", { for: "property_label" }, "Class", -1), m("div", null, [_(s, {
					type: "literal",
					id: "property_label",
					term: i.property_label,
					"onUpdate:term": t[21] ||= (e) => i.property_label = e
				}, null, 8, ["term"])])]),
				m("div", rr, [t[45] ||= m("label", { for: "property_comment" }, "Cardinality", -1), m("div", null, [_(s, {
					type: "literal",
					id: "property_cartinality",
					term: e.property_cartinality,
					"onUpdate:term": t[22] ||= (t) => e.property_cartinality = t
				}, null, 8, ["term"])])])
			])]),
			m("div", ir, [m("button", {
				type: "button",
				class: "btn btn-secondary",
				onClick: t[23] ||= (t) => e.configure_property.hide()
			}, "Close"), m("button", {
				type: "button",
				class: "btn btn-primary",
				onClick: t[24] ||= (t) => e.editProp()
			}, "Save changes")])
		])], 512)
	], 64);
}
var or = /*#__PURE__*/ a(gn, [["render", ar]]);
//#endregion
export { or as default };
