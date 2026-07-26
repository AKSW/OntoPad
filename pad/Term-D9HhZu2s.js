import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, getCurrentInstance as s, h as c, inject as l, nextTick as u, normalizeStyle as d, onBeforeUnmount as f, onMounted as p, openBlock as m, provide as h, ref as g, renderSlot as _, resolveDynamicComponent as v, toDisplayString as y, unref as b, useAttrs as x, useSlots as S, watch as C, withModifiers as w } from "vue";
//#region node_modules/splitpanes/dist/splitpanes.esm.js
var T = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "splitpanes",
	props: {
		horizontal: {
			type: Boolean,
			default: !1
		},
		pushOtherPanes: {
			type: Boolean,
			default: !0
		},
		maximizePanes: {
			type: Boolean,
			default: !0
		},
		rtl: {
			type: Boolean,
			default: !1
		},
		firstSplitter: {
			type: Boolean,
			default: !1
		},
		keyboardStep: {
			type: Number,
			default: 5
		}
	},
	emits: [
		"ready",
		"resize",
		"resized",
		"pane-click",
		"pane-maximize",
		"pane-add",
		"pane-remove",
		"splitter-click",
		"splitter-dblclick",
		"direction-changed"
	],
	setup(e, { emit: r }) {
		let i = r, a = e, o = x(), s = S(), l = g([]), d = t(() => l.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), _ = t(() => l.value.length), y = g(null), b = g(!1), w = g({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), T = g({
			splitter: null,
			timeoutId: null
		}), E = t(() => ({
			[`splitpanes splitpanes--${a.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": w.value.dragging,
			"splitpanes--ready": b.value
		})), D = () => {
			document.addEventListener("mousemove", A, { passive: !1 }), document.addEventListener("mouseup", j), "ontouchstart" in window && (document.addEventListener("touchmove", A, { passive: !1 }), document.addEventListener("touchend", j));
		}, O = () => {
			document.removeEventListener("mousemove", A, { passive: !1 }), document.removeEventListener("mouseup", j), "ontouchstart" in window && (document.removeEventListener("touchmove", A, { passive: !1 }), document.removeEventListener("touchend", j));
		}, k = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: r } = n.getBoundingClientRect(), { clientX: i, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				w.value.cursorOffset = a.horizontal ? o - r : i - t;
			}
			D(), w.value.mouseDown = !0, w.value.activeSplitter = t, document.documentElement.style.cursor = a.horizontal ? "row-resize" : "col-resize";
		}, A = (e) => {
			w.value.mouseDown && (e.preventDefault(), w.value.dragging || (window.getSelection()?.removeAllRanges(), w.value.dragging = !0), requestAnimationFrame(() => {
				L(F(e)), $("resize", { event: e }, !0);
			}));
		}, j = (e) => {
			w.value.dragging && (window.getSelection()?.removeAllRanges(), $("resized", { event: e }, !0)), w.value.mouseDown = !1, w.value.activeSplitter = null, setTimeout(() => {
				w.value.dragging = !1, O(), document.documentElement.style.cursor = "";
			}, 100);
		}, M = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), T.value.splitter === t ? (clearTimeout(T.value.timeoutId), T.value.timeoutId = null, N(e, t), T.value.splitter = null) : (T.value.splitter = t, T.value.timeoutId = setTimeout(() => T.value.splitter = null, 500))), w.value.dragging || $("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, N = (e, t) => {
			if ($("splitter-dblclick", {
				event: e,
				index: t
			}, !0), a.maximizePanes) {
				let n = 0;
				l.value = l.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), l.value[t].size -= n, $("pane-maximize", {
					event: e,
					index: t,
					pane: l.value[t]
				}), $("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, ee = (e, t) => {
			if (!a.keyboardStep) return;
			let n = a.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", r = a.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !r) return;
			e.preventDefault(), w.value.activeSplitter = t;
			let i = (n ? 1 : -1) * (a.rtl && !a.horizontal ? -1 : 1), o = B(t) + l.value[t].size;
			R(Math.min(Math.max(o + i * a.keyboardStep, 0), 100)), $("resize", { event: e }, !0), $("resized", { event: e }, !0), w.value.activeSplitter = null;
		}, P = (e, t) => {
			let n = d.value[t];
			n && $("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, F = (e) => {
			let t = y.value.getBoundingClientRect(), { clientX: n, clientY: r } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (a.horizontal ? 0 : w.value.cursorOffset) - t.left,
				y: r - (a.horizontal ? w.value.cursorOffset : 0) - t.top
			};
		}, I = (e) => {
			e = e[a.horizontal ? "y" : "x"];
			let t = y.value[a.horizontal ? "clientHeight" : "clientWidth"];
			return a.rtl && !a.horizontal && (e = t - e), e * 100 / t;
		}, L = (e) => {
			R(I(e));
		}, R = (e) => {
			let t = w.value.activeSplitter;
			if (t === null || t >= l.value.length - 1) return;
			let n = {
				prevPanesSize: B(t),
				nextPanesSize: V(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, r = 0 + (a.pushOtherPanes ? 0 : n.prevPanesSize), i = 100 - (a.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, i), r);
			let o = [t, t + 1], s = l.value[o[0]] || null, c = l.value[o[1]] || null, u = s !== null && s.max < 100 && e >= s.max + n.prevPanesSize, d = c !== null && c.max < 100 && e <= 100 - (c.max + V(t + 1));
			if (u || d) {
				u ? (s.size = s.max, c.size = Math.min(Math.max(100 - s.max - n.prevPanesSize - n.nextPanesSize, c.min), c.max)) : (s.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - V(t + 1), s.min), s.max), c.size = c.max);
				return;
			}
			if (a.pushOtherPanes) {
				let t = z(n, e);
				if (!t) return;
				({sums: n, panesToResize: o} = t), s = l.value[o[0]] || null, c = l.value[o[1]] || null;
			}
			s !== null && (s.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, s.min), s.max)), c !== null && (c.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, c.min), c.max));
		}, z = (e, t) => {
			let n = w.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + l.value[r[0]].min) {
				if (r[0] = H(n).index, e.prevReachedMinPanes = 0, r[0] < n && l.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, l.value[0].size = l.value[0].min, l.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), l.value[r[1]].size = 100 - e.prevReachedMinPanes - l.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = B(r[0]);
			}
			return t > 100 - e.nextPanesSize - l.value[r[1]].min && (r[1] = U(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && l.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : V(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, l.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (l.value[r[0]].size = 100 - e.prevPanesSize - V(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, B = (e) => l.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), V = (e) => l.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), H = (e) => [...l.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, U = (e) => l.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, W = () => {
			let e = Array.from(y.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, G = (e, t, n = !1) => {
			let r = e - 1, i = document.createElement("div");
			i.classList.add("splitpanes__splitter"), n || (i.onmousedown = (e) => k(e, r), typeof window < "u" && "ontouchstart" in window && (i.ontouchstart = (e) => k(e, r)), i.onclick = (e) => M(e, r + 1), a.keyboardStep && (i.setAttribute("tabindex", "0"), i.setAttribute("role", "separator"), i.setAttribute("aria-orientation", a.horizontal ? "horizontal" : "vertical"), i.onkeydown = (e) => ee(e, r))), i.ondblclick = (e) => N(e, r + 1), t.parentNode.insertBefore(i, t);
		}, K = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, q = () => {
			let e = Array.from(y.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && K(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && a.firstSplitter ? G(t, n, !0) : t && G(t, n), t++);
		}, J = ({ uid: e, ...t }) => {
			let n = d.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, Y = !1, X = (e) => {
			let t = -1;
			Array.from(y.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), l.value.splice(t, 0, {
				...e,
				index: t
			}), l.value.forEach((e, t) => e.index = t), b.value && !Y && (Y = !0, u(() => {
				q(), Z({ addedPane: l.value[t] }), $("pane-add", { pane: l.value[t] }), Y = !1;
			}));
		}, te = (e) => {
			let t = l.value.findIndex((t) => t.id === e);
			l.value[t].el = null;
			let n = l.value.splice(t, 1)[0];
			l.value.forEach((e, t) => e.index = t), u(() => {
				q(), $("pane-remove", { pane: n }), Z({ removedPane: {
					...n,
					index: t
				} });
			});
		}, Z = (e = {}) => {
			!e.addedPane && !e.removedPane ? re() : l.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? ie(e) : ne(), b.value && $("resized");
		}, ne = () => {
			let e = 100 / _.value, t = 100, n = [], r = [];
			for (let i of l.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && Q(t, n, r);
		}, re = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of l.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of l.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (_.value - r), t.max), t.min)), i -= t.size;
				i > .1 && Q(i, t, n);
			}
		}, ie = ({ addedPane: e, removedPane: t } = {}) => {
			let n = l.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = l.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, o = [], s = [];
			for (let e of l.value) a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && s.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of l.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && s.push(e.id);
				Math.abs(a) > .1 && Q(a, o, s);
			}
		}, Q = (e, t, n) => {
			let r;
			r = e > 0 ? e / (_.value - t.length) : e / (_.value - n.length), l.value.forEach((i, a) => {
				if (e > 0 && !t.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				} else if (!n.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				}
			}), Math.abs(e) > .1 && b.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
		}, $ = (e, t = void 0, n = !1) => {
			let r = t?.index ?? w.value.activeSplitter ?? null;
			i(e, {
				...t,
				...r !== null && { index: r },
				...n && r !== null && {
					prevPane: l.value[r - +!!a.firstSplitter],
					nextPane: l.value[r + +!a.firstSplitter]
				},
				panes: l.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		};
		C(() => a.firstSplitter, () => q()), C(() => a.horizontal, (e) => u(() => {
			i("direction-changed", {
				horizontal: e,
				panes: l.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), p(() => {
			W(), q(), Z(), $("ready"), b.value = !0;
		}), f(() => b.value = !1);
		let ae = () => {
			let { class: e, ...t } = o;
			return c("div", {
				ref: y,
				class: [E.value, e],
				...t
			}, s.default?.());
		};
		return h("panes", l), h("indexedPanes", d), h("horizontal", t(() => a.horizontal)), h("requestUpdate", J), h("onPaneAdd", X), h("onPaneRemove", te), h("onPaneClick", P), (e, t) => (m(), n(v(ae)));
	}
}), E = {
	__name: "pane",
	props: {
		size: { type: [Number, String] },
		minSize: {
			type: [Number, String],
			default: 0
		},
		maxSize: {
			type: [Number, String],
			default: 100
		}
	},
	setup(e) {
		let n = e, r = l("requestUpdate"), a = l("onPaneAdd"), o = l("horizontal"), c = l("onPaneRemove"), u = l("onPaneClick"), h = s()?.uid, v = l("indexedPanes"), y = t(() => v.value[h]), x = g(null), S = t(() => {
			let e = isNaN(n.size) || n.size === void 0 ? 0 : parseFloat(n.size);
			return Math.max(Math.min(e, T.value), w.value);
		}), w = t(() => {
			let e = parseFloat(n.minSize);
			return isNaN(e) ? 0 : e;
		}), T = t(() => {
			let e = parseFloat(n.maxSize);
			return isNaN(e) ? 100 : e;
		}), E = t(() => {
			let e = y.value?.size ?? (n.size === void 0 ? void 0 : S.value);
			return e === void 0 ? "" : `${o.value ? "height" : "width"}: ${e}%`;
		});
		return C(() => S.value, (e) => r({
			uid: h,
			size: e
		})), C(() => w.value, (e) => r({
			uid: h,
			min: e
		})), C(() => T.value, (e) => r({
			uid: h,
			max: e
		})), p(() => {
			a({
				id: h,
				el: x.value,
				min: w.value,
				max: T.value,
				givenSize: n.size === void 0 ? null : S.value,
				size: S.value
			});
		}), f(() => c(h)), (e, t) => (m(), i("div", {
			ref_key: "paneEl",
			ref: x,
			class: "splitpanes__pane",
			onClick: t[0] ||= (t) => b(u)(t, e._.uid),
			style: d(E.value)
		}, [_(e.$slots, "default")], 4));
	}
}, D = {
	name: "Term",
	props: ["term"],
	emits: ["click"],
	methods: { selectResource: function(e) {
		this.$emit("click", e);
	} }
}, O = { key: 0 }, k = { key: 1 }, A = { key: 2 };
function j(e, t, n, s, c, l) {
	return m(), i("div", null, [n.term.termType === "NamedNode" ? (m(), i("span", O, [
		t[2] ||= o(" <", -1),
		a("a", {
			href: "#",
			onClick: t[0] ||= w((e) => l.selectResource(n.term.value), ["prevent"])
		}, y(n.term.value), 1),
		t[3] ||= o("> ", -1)
	])) : n.term.termType === "Literal" && n.term.language ? (m(), i("span", k, "\"" + y(n.term.value) + "\"@" + y(n.term.language), 1)) : n.term.termType === "Literal" && n.term.datatype.value ? (m(), i("span", A, [
		o("\"" + y(n.term.value) + "\"^^<", 1),
		a("a", {
			href: "#",
			onClick: t[1] ||= w((e) => l.selectResource(n.term.datatype.value), ["prevent"])
		}, y(n.term.datatype.value), 1),
		t[4] ||= o(">", -1)
	])) : r("", !0)]);
}
var M = /*#__PURE__*/ e(D, [["render", j]]);
//#endregion
export { E as n, T as r, M as t };
