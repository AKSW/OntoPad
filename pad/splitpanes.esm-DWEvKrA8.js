import { computed as e, createBlock as t, createElementBlock as n, getCurrentInstance as r, h as i, inject as a, nextTick as o, normalizeStyle as s, onBeforeUnmount as c, onMounted as l, openBlock as u, provide as d, ref as f, renderSlot as p, resolveDynamicComponent as m, unref as h, useAttrs as g, useSlots as _, watch as v } from "vue";
//#region node_modules/splitpanes/dist/splitpanes.esm.js
var y = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
	setup(n, { emit: r }) {
		let a = r, s = n, p = g(), h = _(), y = f([]), b = e(() => y.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), x = e(() => y.value.length), S = f(null), C = f(!1), w = f({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), T = f({
			splitter: null,
			timeoutId: null
		}), E = e(() => ({
			[`splitpanes splitpanes--${s.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": w.value.dragging,
			"splitpanes--ready": C.value
		})), ee = () => {
			document.addEventListener("mousemove", k, { passive: !1 }), document.addEventListener("mouseup", A), "ontouchstart" in window && (document.addEventListener("touchmove", k, { passive: !1 }), document.addEventListener("touchend", A));
		}, D = () => {
			document.removeEventListener("mousemove", k, { passive: !1 }), document.removeEventListener("mouseup", A), "ontouchstart" in window && (document.removeEventListener("touchmove", k, { passive: !1 }), document.removeEventListener("touchend", A));
		}, O = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: r } = n.getBoundingClientRect(), { clientX: i, clientY: a } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				w.value.cursorOffset = s.horizontal ? a - r : i - t;
			}
			ee(), w.value.mouseDown = !0, w.value.activeSplitter = t, document.documentElement.style.cursor = s.horizontal ? "row-resize" : "col-resize";
		}, k = (e) => {
			w.value.mouseDown && (e.preventDefault(), w.value.dragging || (window.getSelection()?.removeAllRanges(), w.value.dragging = !0), requestAnimationFrame(() => {
				L(F(e)), $("resize", { event: e }, !0);
			}));
		}, A = (e) => {
			w.value.dragging && (window.getSelection()?.removeAllRanges(), $("resized", { event: e }, !0)), w.value.mouseDown = !1, w.value.activeSplitter = null, setTimeout(() => {
				w.value.dragging = !1, D(), document.documentElement.style.cursor = "";
			}, 100);
		}, j = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), T.value.splitter === t ? (clearTimeout(T.value.timeoutId), T.value.timeoutId = null, M(e, t), T.value.splitter = null) : (T.value.splitter = t, T.value.timeoutId = setTimeout(() => T.value.splitter = null, 500))), w.value.dragging || $("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, M = (e, t) => {
			if ($("splitter-dblclick", {
				event: e,
				index: t
			}, !0), s.maximizePanes) {
				let n = 0;
				y.value = y.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), y.value[t].size -= n, $("pane-maximize", {
					event: e,
					index: t,
					pane: y.value[t]
				}), $("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, N = (e, t) => {
			if (!s.keyboardStep) return;
			let n = s.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", r = s.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !r) return;
			e.preventDefault(), w.value.activeSplitter = t;
			let i = (n ? 1 : -1) * (s.rtl && !s.horizontal ? -1 : 1), a = z(t) + y.value[t].size;
			R(Math.min(Math.max(a + i * s.keyboardStep, 0), 100)), $("resize", { event: e }, !0), $("resized", { event: e }, !0), w.value.activeSplitter = null;
		}, P = (e, t) => {
			let n = b.value[t];
			n && $("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, F = (e) => {
			let t = S.value.getBoundingClientRect(), { clientX: n, clientY: r } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (s.horizontal ? 0 : w.value.cursorOffset) - t.left,
				y: r - (s.horizontal ? w.value.cursorOffset : 0) - t.top
			};
		}, I = (e) => {
			e = e[s.horizontal ? "y" : "x"];
			let t = S.value[s.horizontal ? "clientHeight" : "clientWidth"];
			return s.rtl && !s.horizontal && (e = t - e), e * 100 / t;
		}, L = (e) => {
			R(I(e));
		}, R = (e) => {
			let t = w.value.activeSplitter;
			if (t === null || t >= y.value.length - 1) return;
			let n = {
				prevPanesSize: z(t),
				nextPanesSize: B(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, r = 0 + (s.pushOtherPanes ? 0 : n.prevPanesSize), i = 100 - (s.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, i), r);
			let a = [t, t + 1], o = y.value[a[0]] || null, c = y.value[a[1]] || null, l = o !== null && o.max < 100 && e >= o.max + n.prevPanesSize, u = c !== null && c.max < 100 && e <= 100 - (c.max + B(t + 1));
			if (l || u) {
				l ? (o.size = o.max, c.size = Math.min(Math.max(100 - o.max - n.prevPanesSize - n.nextPanesSize, c.min), c.max)) : (o.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - B(t + 1), o.min), o.max), c.size = c.max);
				return;
			}
			if (s.pushOtherPanes) {
				let t = te(n, e);
				if (!t) return;
				({sums: n, panesToResize: a} = t), o = y.value[a[0]] || null, c = y.value[a[1]] || null;
			}
			o !== null && (o.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, o.min), o.max)), c !== null && (c.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, c.min), c.max));
		}, te = (e, t) => {
			let n = w.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + y.value[r[0]].min) {
				if (r[0] = V(n).index, e.prevReachedMinPanes = 0, r[0] < n && y.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, y.value[0].size = y.value[0].min, y.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), y.value[r[1]].size = 100 - e.prevReachedMinPanes - y.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = z(r[0]);
			}
			return t > 100 - e.nextPanesSize - y.value[r[1]].min && (r[1] = H(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && y.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : B(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, y.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (y.value[r[0]].size = 100 - e.prevPanesSize - B(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, z = (e) => y.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), B = (e) => y.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), V = (e) => [...y.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, H = (e) => y.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, U = () => {
			let e = Array.from(S.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, W = (e, t, n = !1) => {
			let r = e - 1, i = document.createElement("div");
			i.classList.add("splitpanes__splitter"), n || (i.onmousedown = (e) => O(e, r), typeof window < "u" && "ontouchstart" in window && (i.ontouchstart = (e) => O(e, r)), i.onclick = (e) => j(e, r + 1), s.keyboardStep && (i.setAttribute("tabindex", "0"), i.setAttribute("role", "separator"), i.setAttribute("aria-orientation", s.horizontal ? "horizontal" : "vertical"), i.onkeydown = (e) => N(e, r))), i.ondblclick = (e) => M(e, r + 1), t.parentNode.insertBefore(i, t);
		}, G = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, K = () => {
			let e = Array.from(S.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && G(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && s.firstSplitter ? W(t, n, !0) : t && W(t, n), t++);
		}, q = ({ uid: e, ...t }) => {
			let n = b.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, J = !1, Y = (e) => {
			let t = -1;
			Array.from(S.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), y.value.splice(t, 0, {
				...e,
				index: t
			}), y.value.forEach((e, t) => e.index = t), C.value && !J && (J = !0, o(() => {
				K(), Z({ addedPane: y.value[t] }), $("pane-add", { pane: y.value[t] }), J = !1;
			}));
		}, X = (e) => {
			let t = y.value.findIndex((t) => t.id === e);
			y.value[t].el = null;
			let n = y.value.splice(t, 1)[0];
			y.value.forEach((e, t) => e.index = t), o(() => {
				K(), $("pane-remove", { pane: n }), Z({ removedPane: {
					...n,
					index: t
				} });
			});
		}, Z = (e = {}) => {
			!e.addedPane && !e.removedPane ? re() : y.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? ie(e) : ne(), C.value && $("resized");
		}, ne = () => {
			let e = 100 / x.value, t = 100, n = [], r = [];
			for (let i of y.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && Q(t, n, r);
		}, re = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of y.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of y.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (x.value - r), t.max), t.min)), i -= t.size;
				i > .1 && Q(i, t, n);
			}
		}, ie = ({ addedPane: e, removedPane: t } = {}) => {
			let n = y.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = y.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, o = [], s = [];
			for (let e of y.value) a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && s.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of y.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && s.push(e.id);
				Math.abs(a) > .1 && Q(a, o, s);
			}
		}, Q = (e, t, n) => {
			let r;
			r = e > 0 ? e / (x.value - t.length) : e / (x.value - n.length), y.value.forEach((i, a) => {
				if (e > 0 && !t.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				} else if (!n.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				}
			}), Math.abs(e) > .1 && C.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
		}, $ = (e, t = void 0, n = !1) => {
			let r = t?.index ?? w.value.activeSplitter ?? null;
			a(e, {
				...t,
				...r !== null && { index: r },
				...n && r !== null && {
					prevPane: y.value[r - +!!s.firstSplitter],
					nextPane: y.value[r + +!s.firstSplitter]
				},
				panes: y.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		};
		v(() => s.firstSplitter, () => K()), v(() => s.horizontal, (e) => o(() => {
			a("direction-changed", {
				horizontal: e,
				panes: y.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), l(() => {
			U(), K(), Z(), $("ready"), C.value = !0;
		}), c(() => C.value = !1);
		let ae = () => {
			let { class: e, ...t } = p;
			return i("div", {
				ref: S,
				class: [E.value, e],
				...t
			}, h.default?.());
		};
		return d("panes", y), d("indexedPanes", b), d("horizontal", e(() => s.horizontal)), d("requestUpdate", q), d("onPaneAdd", Y), d("onPaneRemove", X), d("onPaneClick", P), (e, n) => (u(), t(m(ae)));
	}
}), b = {
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
	setup(t) {
		let i = t, o = a("requestUpdate"), d = a("onPaneAdd"), m = a("horizontal"), g = a("onPaneRemove"), _ = a("onPaneClick"), y = r()?.uid, b = a("indexedPanes"), x = e(() => b.value[y]), S = f(null), C = e(() => {
			let e = isNaN(i.size) || i.size === void 0 ? 0 : parseFloat(i.size);
			return Math.max(Math.min(e, T.value), w.value);
		}), w = e(() => {
			let e = parseFloat(i.minSize);
			return isNaN(e) ? 0 : e;
		}), T = e(() => {
			let e = parseFloat(i.maxSize);
			return isNaN(e) ? 100 : e;
		}), E = e(() => {
			let e = x.value?.size ?? (i.size === void 0 ? void 0 : C.value);
			return e === void 0 ? "" : `${m.value ? "height" : "width"}: ${e}%`;
		});
		return v(() => C.value, (e) => o({
			uid: y,
			size: e
		})), v(() => w.value, (e) => o({
			uid: y,
			min: e
		})), v(() => T.value, (e) => o({
			uid: y,
			max: e
		})), l(() => {
			d({
				id: y,
				el: S.value,
				min: w.value,
				max: T.value,
				givenSize: i.size === void 0 ? null : C.value,
				size: C.value
			});
		}), c(() => g(y)), (e, t) => (u(), n("div", {
			ref_key: "paneEl",
			ref: S,
			class: "splitpanes__pane",
			onClick: t[0] ||= (t) => h(_)(t, e._.uid),
			style: s(E.value)
		}, [p(e.$slots, "default")], 4));
	}
};
//#endregion
export { y as n, b as t };
