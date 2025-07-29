var Ob = Object.defineProperty;
var ym = (s) => {
  throw TypeError(s);
};
var Fb = (s, e, t) =>
  e in s
    ? Ob(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var x = (s, e, t) => Fb(s, typeof e != "symbol" ? e + "" : e, t),
  hh = (s, e, t) => e.has(s) || ym("Cannot " + t);
var getProperty = (s, e, t) => (
    hh(s, e, "read from private field"), t ? t.call(s) : e.get(s)
  ),
  b = (s, e, t) =>
    e.has(s)
      ? ym("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(s)
      : e.set(s, t),
  S = (s, e, t, r) => (
    hh(s, e, "write to private field"), r ? r.call(s, t) : e.set(s, t), t
  ),
  P = (s, e, t) => (hh(s, e, "access private method"), t);
var ze = (s, e, t, r) => ({
  set _(i) {
    S(s, e, i, t);
  },
  get _() {
    return getProperty(s, e, r);
  },
});
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const o of n.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const n = {};
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = t(i);
    fetch(i.href, n);
  }
})();
function hr(s, e) {
  const t = s.length;
  if (t !== e.length) return !1;
  for (let r = 0; r < t; r++) if (s[r] !== e[r]) return !1;
  return !0;
}
function tp(s) {
  if (typeof s !== "object" || s === null) return !1;
  const t = s.constructor;
  return (
    t === Uint8Array ||
    t === Uint16Array ||
    t === Uint32Array ||
    t === Int8Array ||
    t === Int16Array ||
    t === Int32Array ||
    t === Float32Array ||
    t === Float64Array ||
    t === BigUint64Array ||
    t === BigInt64Array
  );
}
class Db {
  appendDescriptionOf(e) {
    throw new Error("Not Implemented");
  }
  appendList(e, t, r, i) {
    throw new Error("Not Implemented");
  }
  appendText(e) {
    throw new Error("Not Implemented");
  }
  appendValue(e) {
    throw new Error("Not Implemented");
  }
  appendValueList(e, t, r, i) {
    throw new Error("Not Implemented");
  }
}
class Gb {
  describeTo(e) {
    throw new Error("Not Implemented");
  }
}
class Vb extends Gb {
  constructor(t) {
    super();
    x(this, "value");
    this.value = t;
  }
  describeTo(t) {
    t.appendValue(this.value);
  }
}
var cl;
class $b {
  constructor(e) {
    b(this, cl);
    S(this, cl, e);
  }
  *[Symbol.iterator]() {
    for (const e of getProperty(this, cl)) yield new Vb(e);
  }
}
cl = new WeakMap();
function qb(s) {
  try {
    return String(s);
  } catch {
    return "VALUE@0";
  }
}
function Hb(s) {
  return String(s);
}
var Pu, o0;
class Yb extends Db {
  constructor() {
    super(...arguments);
    b(this, Pu);
  }
  appendDescriptionOf(t) {
    return t.describeTo(this), this;
  }
  appendValue(t) {
    return (
      t == null
        ? this.appendText("null")
        : t === false
        ? this.appendText("undefined")
        : typeof t == "string"
        ? P(this, Pu, o0).call(this, t)
        : typeof t == "number"
        ? this.appendText(Hb(t))
        : Array.isArray(t)
        ? this.appendValueList("[", ", ", "]", t)
        : (this.appendText("<"), this.appendText(qb(t)), this.appendText(">")),
      this
    );
  }
  appendValueList(t, r, i, n) {
    return this.appendList(t, r, i, new $b(n)), this;
  }
  appendList(t, r, i, n) {
    let o = !1;
    this.appendText(t);
    const a = n[Symbol.iterator]();
    for (let c = a.next(); c.done !== !0; c = a.next())
      o && this.appendText(r), this.appendDescriptionOf(c.value), (o = !0);
    return this.appendText(i), this;
  }
}
(Pu = new WeakSet()),
  (o0 = function (t) {
    this.appendText('"'), this.appendText(t), this.appendText('"');
  });
class jb extends Yb {
  constructor() {
    super(...arguments);
    x(this, "value", "");
  }
  appendText(t) {
    return (this.value += t), this;
  }
}
function Xb(s, e, t) {
  if (s !== e) {
    const r = `${s} !== ${e}`,
      i = t !== false && t !== "" ? `${t}. ${r}` : r;
    throw new Error(i);
  }
}
function Wb(s, e, t) {
  Se(s !== e, t);
}
function Jb(s, e) {
  Se(!s, e);
}
function Zb(s, e, t) {}
function Se(s, e) {
  if (!s) throw new Error(e || "AssertionError");
}
function Kb(s, e, t) {
  if (!(s > e)) {
    let r = "";
    throw (
      (t !== false && (r += t + ". "),
      (r += `Expected ${s} > ${e}.`),
      new Error(r))
    );
  }
}
function Qb(s, e, t) {
  if (!(s < e)) {
    let r = "";
    throw (
      (t !== false && (r += t + ". "),
      (r += `Expected ${s} < ${e}.`),
      new Error(r))
    );
  }
}
function ey(s, e, t) {
  if (!(s >= e)) {
    let r = "";
    throw (
      (t !== false && (r += t + ". "),
      (r += `Expected ${s} >= ${e}.`),
      new Error(r))
    );
  }
}
function ty(s, e, t) {
  if (!(s <= e)) {
    let r = "";
    throw (
      (t !== false && (r += t + ". "),
      (r += `Expected ${s} <= ${e}.`),
      new Error(r))
    );
  }
}
function ry(s, e, t = "value") {
  const r = typeof s;
  if (r !== e)
    throw new Error(`expected ${t} to be ${e}, instead was '${r}'(=${s})`);
}
function iy(s, e, t = "Array does not contain the item") {}
function sy(s, e, t = "Array contains the item") {}
function ny(s, e, t = "Arrays are not equal") {
  if (!hr(s, e)) throw new Error(t);
}
Se.enum = function (s, e, t = "value") {
  for (let r in e) if (e[r] === s) return;
  throw new Error(
    `${t}(=${s}) is not a valid enumerable value, valid values are: [${Object.values(
      e
    ).join(", ")}]`
  );
};
Se.notEqual = Wb;
Se.notOk = Jb;
Se.equal = Xb;
Se.logicalyEqual = Zb;
Se.ok = Se;
Se.greaterThan = Kb;
Se.greaterThanOrEqual = ey;
Se.lessThan = Qb;
Se.lessThanOrEqual = ty;
Se.typeOf = ry;
Se.arrayHas = iy;
Se.arrayHasNo = sy;
Se.arrayEqual = ny;
Se.isInstanceOf = function (s, e, t = "value", r = e.name) {};
Se.isNumber = function (s, e = "value") {
  const t = typeof s;
  if (t !== "number")
    throw new Error(`expected ${e} to be a number, instead was '${t}'(=${s})`);
};
Se.isString = function (s, e = "value") {
  const t = typeof s;
  if (t !== "string")
    throw new Error(`expected ${e} to be a string, instead was '${t}'(=${s})`);
};
Se.isBoolean = function (s, e = "value") {
  const t = typeof s;
  if (t !== "boolean")
    throw new Error(`expected ${e} to be a boolean, instead was '${t}'(=${s})`);
};
Se.isFunction = function (s, e = "value") {
  const t = typeof s;
  if (t !== "function")
    throw new Error(
      `expected ${e} to be a function, instead was '${t}'(=${s})`
    );
};
Se.isObject = function (s, e = "value") {
  const t = typeof s;
  if (t !== "object")
    throw new Error(`expected ${e} to be an object, instead was '${t}'(=${s})`);
};
Se.isInteger = function (s, e = "value") {
  if (!Number.isInteger(s))
    throw new Error(`${e} must be an integer, instead was ${s}`);
};
Se.isNonNegativeInteger = function (s, e = "value") {
  if (s < 0) throw new Error(`${e} must be >= 0, instead was ${s}`);
};
Se.isArray = function (s, e = "value") {
  if (!Array.isArray(s))
    throw new Error(
      `expected ${e} to be an array, instead was something else (typeof ='${typeof s}')`
    );
};
Se.isArrayLike = function (s, e = "value") {
  if (!Array.isArray(s) && !tp(s))
    throw new Error(
      `expected ${e} to be an array-like structure, instead was something else (typeof ='${typeof s}')`
    );
};
Se.defined = function (s, e = "value") {
  if (s === false) throw new Error(`${e} is undefined`);
};
Se.isNull = function (s, e) {
  if (s !== null) throw new Error(`${e} is NOT null`);
};
Se.notNull = function (s, e = "value") {
  if (s === null) throw new Error(`${e} is null`);
};
Se.notNaN = function (s, e = "value") {
  if (Number.isNaN(s))
    throw new Error(`${e} must be a valid number, instead was NaN`);
};
Se.isFiniteNumber = function (s, e = "value") {
  if (!Number.isFinite(s))
    throw new Error(`${e} must be a finite number, instead was ${s}`);
};
Se.that = function (s, e, t) {
  if (t.matches(s)) return;
  const r = new jb();
  throw (
    (r.appendText(`Expected ${e} to be `),
    t.describeTo(r),
    r.appendText(" instead "),
    t.describeMismatch(s, r),
    new Error(r.value))
  );
};
function pt(s) {
  return Math.round(s * 255);
}
function pu(s) {
  return s / 255;
}
function oy(s, e, t) {
  let r = s;
  for (;;) {
    if (r.handle === e && r.context === t) return r;
    if (((r = r.next), r === null)) return null;
  }
}
const xr = { Silent: 1 },
  Bi = { RemoveAfterExecution: 1 };
class rf {
  constructor(e, t) {
    x(this, "next", null);
    x(this, "flags", 0);
    x(this, "generation", -1);
    (this.handle = e), (this.context = t);
  }
  setFlag(e) {
    this.flags |= e;
  }
  clearFlag(e) {
    this.flags &= ~e;
  }
  writeFlag(e, t) {
    t ? this.setFlag(e) : this.clearFlag(e);
  }
  getFlag(e) {
    return (this.flags & e) === e;
  }
}
rf.prototype.isSignalHandler = !0;
var Gt, sf, Gi;
const tm = class tm {
  constructor() {
    b(this, Gt);
    x(this, "handlers", new Map());
    x(this, "flags", 0);
    x(this, "generation", 0);
  }
  get silent() {
    return this.getFlag(xr.Silent);
  }
  set silent(e) {
    this.writeFlag(xr.Silent, e);
  }
  setFlag(e) {
    this.flags |= e;
  }
  clearFlag(e) {
    this.flags &= ~e;
  }
  writeFlag(e, t) {
    t ? this.setFlag(e) : this.clearFlag(e);
  }
  getFlag(e) {
    return (this.flags & e) === e;
  }
  contains(e, t) {
    const i = this.handlers.get(e);
    return i === false ? !1 : oy(i, e, t) !== null;
  }
  mute() {
    this.setFlag(xr.Silent);
  }
  unmute() {
    this.clearFlag(xr.Silent);
  }
  hasHandlers() {
    return this.handlers.size > 0;
  }
  addOne(e, t) {
    const r = new rf(e, t);
    r.setFlag(Bi.RemoveAfterExecution), P(this, Gt, sf).call(this, r);
  }
  add(e, t) {
    const r = new rf(e, t);
    P(this, Gt, sf).call(this, r);
  }
  remove(e, t) {
    const r = this.handlers.get(e);
    if (r === false) return !1;
    if (r.handle === e && r.context === t)
      return (
        r.next === null
          ? this.handlers.delete(e)
          : this.handlers.set(e, r.next),
        !0
      );
    let i = r,
      n = r.next;
    for (; n !== null; ) {
      if (n.handle === e && n.context === t) return (i.next = n.next), !0;
      (i = n), (n = n.next);
    }
    return !1;
  }
  removeAll() {
    this.handlers.clear();
  }
  dispatch(...e) {
    if (this.flags & xr.Silent) return;
    this.generation++;
    const t = this.handlers;
    for (const r of t.values()) {
      let i = r;
      do {
        if (i.generation >= this.generation) break;
        const n = i.next;
        i.getFlag(Bi.RemoveAfterExecution) && P(this, Gt, Gi).call(this, i);
        const o = i.handle;
        try {
          o.apply(i.context, e);
        } catch {}
        i = n;
      } while (i !== null);
    }
  }
  send0() {
    if (this.flags & xr.Silent) return;
    this.generation++;
    const e = this.handlers;
    for (const t of e.values()) {
      let r = t;
      do {
        if (r.generation >= this.generation) break;
        const i = r.next;
        r.getFlag(Bi.RemoveAfterExecution) && P(this, Gt, Gi).call(this, r);
        const n = r.handle;
        try {
          n.call(r.context);
        } catch {}
        r = i;
      } while (r !== null);
    }
  }
  send1(e) {
    if (this.flags & xr.Silent) return;
    this.generation++;
    const t = this.handlers;
    for (const r of t.values()) {
      let i = r;
      do {
        if (i.generation >= this.generation) break;
        const n = i.next;
        i.getFlag(Bi.RemoveAfterExecution) && P(this, Gt, Gi).call(this, i);
        const o = i.handle;
        try {
          o.call(i.context, e);
        } catch {}
        i = n;
      } while (i !== null);
    }
  }
  send2(e, t) {
    if (this.flags & xr.Silent) return;
    this.generation++;
    const r = this.handlers;
    for (const i of r.values()) {
      let n = i;
      do {
        if (n.generation >= this.generation) break;
        const o = n.next;
        n.getFlag(Bi.RemoveAfterExecution) && P(this, Gt, Gi).call(this, n);
        const a = n.handle;
        try {
          a.call(n.context, e, t);
        } catch {}
        n = o;
      } while (n !== null);
    }
  }
  send3(e, t, r) {
    if (this.flags & xr.Silent) return;
    this.generation++;
    const i = this.handlers;
    for (const n of i.values()) {
      let o = n;
      do {
        if (o.generation >= this.generation) break;
        const a = o.next;
        o.getFlag(Bi.RemoveAfterExecution) && P(this, Gt, Gi).call(this, o);
        const c = o.handle;
        try {
          c.call(o.context, e, t, r);
        } catch {}
        o = a;
      } while (o !== null);
    }
  }
  send4(e, t, r, i) {
    if (this.flags & xr.Silent) return;
    this.generation++;
    const n = this.handlers;
    for (const o of n.values()) {
      let a = o;
      do {
        if (a.generation >= this.generation) break;
        const c = a.next;
        a.getFlag(Bi.RemoveAfterExecution) && P(this, Gt, Gi).call(this, a);
        const _ = a.handle;
        try {
          _.call(a.context, e, t, r, i);
        } catch {}
        a = c;
      } while (a !== null);
    }
  }
  send6(e, t, r, i, n, o) {
    if (this.flags & xr.Silent) return;
    this.generation++;
    const a = this.handlers;
    for (const c of a.values()) {
      let _ = c;
      do {
        if (_.generation >= this.generation) break;
        const u = _.next;
        _.getFlag(Bi.RemoveAfterExecution) && P(this, Gt, Gi).call(this, _);
        const d = _.handle;
        try {
          d.call(_.context, e, t, r, i, n, o);
        } catch {}
        _ = u;
      } while (_ !== null);
    }
  }
  send8(e, t, r, i, n, o, a, c) {
    if (this.flags & xr.Silent) return;
    this.generation++;
    const _ = this.handlers;
    for (const u of _.values()) {
      let d = u;
      do {
        if (d.generation >= this.generation) break;
        const h = d.next;
        d.getFlag(Bi.RemoveAfterExecution) && P(this, Gt, Gi).call(this, d);
        const p = d.handle;
        try {
          p.call(d.context, e, t, r, i, n, o, a, c);
        } catch {}
        d = h;
      } while (d !== null);
    }
  }
  merge(e) {
    const t = new tm();
    function r() {
      t.dispatch(arguments);
    }
    return this.add(r), e.add(r), t;
  }
};
(Gt = new WeakSet()),
  (sf = function (e) {
    e.generation = this.generation;
    const t = e.handle,
      r = this.handlers.get(t);
    r === false
      ? this.handlers.set(t, e)
      : ((e.next = r), this.handlers.set(t, e));
  }),
  (Gi = function (e) {
    const t = this.handlers.get(e.handle);
    if (t === false) return !1;
    if (t === e)
      return (
        t.next === null
          ? this.handlers.delete(e.handle)
          : this.handlers.set(e.handle, t.next),
        !0
      );
    let r = t,
      i = t.next;
    for (; i !== null; ) {
      const n = i.next;
      if (i === e) return (r.next = n), !0;
      (r = i), (i = n);
    }
    return !1;
  });
let ge = tm;
ge.prototype.isSignal = !0;
function $t(s) {
  return s < 0 ? 0 : s > 1 ? 1 : s;
}
function We(s, e, t) {
  return (e - s) * t + s;
}
function ne(s, e) {
  return s < e ? e : s;
}
function ke(s, e) {
  return s < e ? s : e;
}
function oa(s, e, t) {
  let r = s;
  return r > e && (r = e), r > t && (r = t), r;
}
function fh(s) {
  const e = Math.round(s).toString(16);
  return e.length === 1 ? "0" + e : e;
}
function ay(s, e, t) {
  return fh(s) + fh(e) + fh(t);
}
function cy(s, e, t) {
  const r = Math.max(s, e, t),
    i = Math.min(s, e, t);
  let n,
    o,
    a = r;
  const c = r - i;
  if (((o = r === 0 ? 0 : c / r), r === i)) n = 0;
  else {
    switch (r) {
      case s:
        n = (e - t) / c + (e < t ? 6 : 0);
        break;
      case e:
        n = (t - s) / c + 2;
        break;
      case t:
        n = (s - e) / c + 4;
        break;
    }
    n /= 6;
  }
  return { h: n, s: o, v: a };
}
function K_(s) {
  return parseInt(s, 16);
}
function ly(s) {
  const e = {
    r: K_(s.slice(1, 3)),
    g: K_(s.slice(3, 5)),
    b: K_(s.slice(5, 7)),
  };
  return s.length > 7 ? (e.a = K_(s.slice(7, 9))) : (e.a = 255), e;
}
function _y(s, e, t) {
  let r = s;
  r < 0 && (r = r + Math.ceil(Math.abs(r))), (r = r % 1);
  const i = $t(e),
    n = $t(t);
  let o, a, c, _, u, d, h, p;
  switch (
    ((_ = Math.floor(r * 6)),
    (u = r * 6 - _),
    (d = n * (1 - i)),
    (h = n * (1 - u * i)),
    (p = n * (1 - (1 - u) * i)),
    _ % 6)
  ) {
    case 0:
      (o = n), (a = p), (c = d);
      break;
    case 1:
      (o = h), (a = n), (c = d);
      break;
    case 2:
      (o = d), (a = n), (c = p);
      break;
    case 3:
      (o = d), (a = h), (c = n);
      break;
    case 4:
      (o = p), (a = d), (c = n);
      break;
    case 5:
      (o = n), (a = d), (c = h);
      break;
  }
  return { r: pt(o), g: pt(a), b: pt(c) };
}
const uy = /rgb\(\s*([0-9]+),\s*([0-9]+),\s*([0-9]+)\s*\)/,
  dy =
    /rgba\(\s*([0-9]+(?:\.[0-9]*)?),\s*([0-9]+(?:\.[0-9]*)?),\s*([0-9]+(?:\.[0-9]*)?),\s*([0-9]+(?:\.[0-9]*)?)\s*\)/,
  hy =
    /hsv\(([0-9]+(?:\.[0-9]*)?),\s*([0-9]+(?:\.[0-9]*)?),\s*([0-9]+(?:\.[0-9]*)?)\)/;
function fy(s) {
  const e = [],
    t = typeof s;
  let r,
    i,
    n,
    o = 1;
  if (t === "string") {
    const a = s.toLowerCase();
    let c;
    if ((c = a.match(uy)) !== null)
      (r = parseInt(c[1])), (i = parseInt(c[2])), (n = parseInt(c[3]));
    else if ((c = a.match(dy)) !== null)
      (r = parseFloat(c[1])),
        (i = parseFloat(c[2])),
        (n = parseFloat(c[3])),
        (o = parseFloat(c[4]));
    else if ((c = a.match(hy)) !== null) {
      const _ = _y(parseFloat(c[1]), parseFloat(c[2]), parseFloat(c[3]));
      (r = _.r), (i = _.g), (n = _.b);
    } else if (a.startsWith("#")) {
      const _ = ly(a);
      (r = _.r), (i = _.g), (n = _.b), (o = pu(_.a));
    } else throw new Error(`Failed to decode color string '${s}' `);
  } else if (t === "number") (r = s >> 16), (i = (s >> 8) & 255), (n = s & 255);
  else throw new Error(`Failed to decode color '${s}'`);
  return (e[0] = r), (e[1] = i), (e[2] = n), (e[3] = o), e;
}
function a0(s, e, t) {
  const r = pt(s),
    i = pt(e);
  return (pt(t) & 255) | ((i & 255) << 8) | ((r & 255) << 16);
}
function py(s, e, t, r) {
  const i = a0(s, t, e),
    n = pt(r);
  return (i << 8) | (n & 255);
}
function my(s, e, t) {
  return 0.299 * s + 0.587 * e + 0.114 * t;
}
function ph(s) {
  return s < 0.0031308
    ? s * 12.92
    : 1.055 * Math.pow(s, 0.4166666666666667) - 0.055;
}
function c0(s, e, t, r) {
  const i = t[r],
    n = t[r + 1],
    o = t[r + 2];
  (s[e] = ph(i)), (s[e + 1] = ph(n)), (s[e + 2] = ph(o));
}
function mh(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function gy(s, e, t, r) {
  const i = t[r],
    n = t[r + 1],
    o = t[r + 2];
  (s[e] = mh(i)), (s[e + 1] = mh(n)), (s[e + 2] = mh(o));
}
class me {
  constructor(e = 0, t = 0, r = 0, i = 1) {
    (this.r = e),
      (this.g = t),
      (this.b = r),
      (this.a = i),
      (this.onChanged = new ge());
  }
  get 0() {
    return this.r;
  }
  set 0(e) {
    this.r = e;
  }
  get 1() {
    return this.g;
  }
  set 1(e) {
    this.g = e;
  }
  get 2() {
    return this.b;
  }
  set 2(e) {
    this.b = e;
  }
  get 3() {
    return this.a;
  }
  set 3(e) {
    this.a = e;
  }
  get length() {
    return 4;
  }
  setRGB(e, t, r) {
    this.set(e, t, r, this.a);
  }
  setRGBUint8(e, t, r) {
    this.setRGB(pu(e), pu(t), pu(r));
  }
  setA(e) {
    this.set(this.r, this.g, this.b, e);
  }
  set(e, t, r, i = 1) {
    const n = this.r,
      o = this.g,
      a = this.b,
      c = this.a;
    (n === e && o === t && a === r && c === i) ||
      ((this.r = e),
      (this.g = t),
      (this.b = r),
      (this.a = i),
      this.onChanged.send8(e, t, r, i, n, o, a, c));
  }
  setHSL(e, t, r) {
    let i = e % 1;
    i < 0 && (i = i + Math.ceil(Math.abs(i)));
    const n = (i * 12) % 12,
      o = (8 + i * 12) % 12,
      a = (4 + i * 12) % 12,
      c = t * ke(r, 1 - r),
      _ = r - c * ne(-1, oa(n - 3, 9 - n, 1)),
      u = r - c * ne(-1, oa(o - 3, 9 - o, 1)),
      d = r - c * ne(-1, oa(a - 3, 9 - a, 1));
    this.setRGB(_, u, d);
  }
  setHCL(e, t, r) {
    let i = e % 1;
    i < 0 && (i = i + Math.ceil(Math.abs(i)));
    const n = i * 6,
      o = t * (1 - Math.abs((n % 2) - 1));
    let a, c, _;
    switch (Math.floor(n)) {
      case 0:
        (a = t), (c = o), (_ = 0);
        break;
      case 1:
        (a = o), (c = t), (_ = 0);
        break;
      case 2:
        (a = 0), (c = t), (_ = o);
        break;
      case 3:
        (a = 0), (c = o), (_ = t);
        break;
      case 4:
        (a = o), (c = 0), (_ = t);
        break;
      case 5:
        (a = t), (c = 0), (_ = o);
    }
    const u = r - (0.3 * a + 0.59 * c + 0.11 * _);
    this.setRGB(a + u, c + u, _ + u);
  }
  setHSI(e, t, r) {
    let i = e % 1;
    i < 0 && (i = i + Math.ceil(Math.abs(i)));
    const n = i * 6,
      o = 1 - Math.abs((n % 2) - 1),
      a = (3 * r * t) / (1 + o),
      c = a * o;
    let _, u, d;
    switch (Math.floor(n)) {
      case 0:
        (_ = a), (u = c), (d = 0);
        break;
      case 1:
        (_ = c), (u = a), (d = 0);
        break;
      case 2:
        (_ = 0), (u = a), (d = c);
        break;
      case 3:
        (_ = 0), (u = c), (d = a);
        break;
      case 4:
        (_ = c), (u = 0), (d = a);
        break;
      case 5:
        (_ = a), (u = 0), (d = c);
    }
    const h = r * (1 - t);
    this.setRGB(_ + h, u + h, d + h);
  }
  setHSV(e, t, r) {
    let i = e;
    i < 0 && (i = i + Math.ceil(Math.abs(i))), (i = i % 1);
    const n = $t(t),
      o = $t(r);
    let a, c, _;
    const u = Math.floor(i * 6),
      d = i * 6 - u,
      h = o * (1 - n),
      p = o * (1 - d * n),
      v = o * (1 - (1 - d) * n);
    switch (u % 6) {
      case 0:
        (a = o), (c = v), (_ = h);
        break;
      case 1:
        (a = p), (c = o), (_ = h);
        break;
      case 2:
        (a = h), (c = o), (_ = v);
        break;
      case 3:
        (a = h), (c = p), (_ = o);
        break;
      case 4:
        (a = v), (c = h), (_ = o);
        break;
      case 5:
        (a = o), (c = h), (_ = p);
        break;
    }
    this.setRGB(a, c, _);
  }
  computeLuminance() {
    return my(this.r, this.g, this.b);
  }
  getHSV() {
    return cy(this.r, this.g, this.b);
  }
  toUint() {
    return a0(this.r, this.g, this.b);
  }
  toUint32() {
    return py(this.r, this.g, this.b, this.a);
  }
  fromUint(e) {
    const t = e >> 16,
      r = (e >> 8) & 255,
      i = e & 255;
    this.setRGBUint8(t, r, i);
  }
  toHex() {
    return "#" + ay(pt(this.r), pt(this.g), pt(this.b));
  }
  toCssRGBAString() {
    return `rgba(${pt(this.r)},${pt(this.g)},${pt(this.b)},${this.a})`;
  }
  equals(e) {
    return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a;
  }
  copy(e) {
    (this.a = e.a), this.setRGB(e.r, e.g, e.b);
  }
  clone() {
    const e = new me();
    return e.copy(this), e;
  }
  hash() {
    return this.toUint();
  }
  fromJSON({ r: e, g: t, b: r, a: i = 1 }) {
    this.set(e, t, r, i);
  }
  toJSON() {
    return { r: this.r, g: this.g, b: this.b, a: this.a };
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b, yield this.a;
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.r),
      (e[t + 1] = this.g),
      (e[t + 2] = this.b),
      (e[t + 3] = this.a),
      e
    );
  }
  fromArray(e, t = 0) {
    const r = e[t + 0],
      i = e[t + 1],
      n = e[t + 2],
      o = e[t + 3];
    this.set(r, i, n, o);
  }
  toBinaryBuffer(e) {
    e.writeFloat32(this.r),
      e.writeFloat32(this.g),
      e.writeFloat32(this.b),
      e.writeFloat32(this.a);
  }
  fromBinaryBuffer(e) {
    const t = e.readFloat32(),
      r = e.readFloat32(),
      i = e.readFloat32(),
      n = e.readFloat32();
    this.set(t, r, i, n);
  }
  parse(e) {
    const t = fy(e);
    typeof t[3] == "number" ? (this.a = t[3]) : (this.a = 1),
      this.setRGB(t[0] / 255, t[1] / 255, t[2] / 255);
  }
  lerpColors(e, t, r) {
    (this.r = We(e.r, t.r, r)),
      (this.g = We(e.g, t.g, r)),
      (this.b = We(e.b, t.b, r)),
      (this.a = We(e.a, t.a, r));
  }
  static fromRGB(e, t, r) {
    return new me(e, t, r);
  }
  static fromHSV(e, t, r) {
    const i = new me();
    return i.setHSV(e, t, r), i;
  }
  static parse(e) {
    const t = new me();
    return t.parse(e), t;
  }
  static from_linear_to_sRGB(e, t = new me()) {
    return c0(t, 0, e, 0), t;
  }
  static from_sRGB_to_linear(e, t = new me()) {
    return gy(t, 0, e, 0), t;
  }
}
me.prototype.writeToArray = me.prototype.toArray;
me.red = Object.freeze(new me(1, 0, 0));
me.green = Object.freeze(new me(0, 1, 0));
me.blue = Object.freeze(new me(0, 0, 1));
me.yellow = Object.freeze(new me(1, 1, 0));
me.cyan = Object.freeze(new me(0, 1, 1));
me.magenta = Object.freeze(new me(1, 0, 1));
me.white = Object.freeze(new me(1, 1, 1));
me.black = Object.freeze(new me(0, 0, 0));
me.transparent = Object.freeze(new me(0, 0, 0, 0));
const Nn = 1e-6;
function Ai(s, e, t = Nn) {
  return Math.abs(s - e) <= t;
}
function aa(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
const _r = 4294967295;
function xt(s) {
  const e = s >> 0;
  return ((s - e) * _r) ^ e;
}
function Ye(s, e, t) {
  return s < e ? e : s > t ? t : s;
}
function dt(s, e, t, r, i, n) {
  return s * r + e * i + t * n;
}
function ur(s, e, t) {
  return Math.sqrt(s * s + e * e + t * t);
}
function vy(s, e, t, r, i, n) {
  const o = dt(s, e, t, r, i, n),
    a = ur(s, e, t),
    c = ur(r, i, n),
    _ = a * c;
  return _ === 0 ? 0 : Ye(o / _, -1, 1);
}
function xy(s, e, t, r, i, n) {
  const o = vy(s, e, t, r, i, n);
  return Math.acos(o);
}
function rp(s, e, t, r, i, n) {
  return ur(r - s, i - e, n - t);
}
function mu(s, e, t) {
  return s * s + e * e + t * t;
}
function l0(s, e, t, r, i, n, o, a) {
  const c = We(e, i, a),
    _ = We(t, n, a),
    u = We(r, o, a);
  s.set(c, _, u);
}
function by(s, e, t, r, i, n, o, a) {
  const c = dt(e, t, r, i, n, o);
  if (c >= 1 || c <= -1) {
    l0(s, e, t, r, i, n, o, a);
    return;
  }
  const _ = Math.acos(c),
    d = 1 / Math.sin(_),
    h = Math.sin((1 - a) * _) * d,
    p = Math.sin(a * _) * d,
    v = e * h + i * p,
    f = t * h + n * p,
    m = r * h + o * p;
  s.set(v, f, m);
}
class Z {
  constructor(e = 0, t = 0, r = 0) {
    (this.x = e), (this.y = t), (this.z = r), (this.onChanged = new ge());
  }
  readFromArray(e, t = 0) {
    this.set(e[t], e[t + 1], e[t + 2]);
  }
  writeToArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  set(e, t, r) {
    const i = this.x,
      n = this.y,
      o = this.z;
    return (
      (e !== i || t !== n || r !== o) &&
        ((this.x = e),
        (this.y = t),
        (this.z = r),
        this.onChanged.hasHandlers() && this.onChanged.send6(e, t, r, i, n, o)),
      this
    );
  }
  setScalar(e) {
    this.set(e, e, e);
  }
  setX(e) {
    return this.set(e, this.y, this.z);
  }
  setY(e) {
    return this.set(this.x, e, this.z);
  }
  setZ(e) {
    return this.set(this.x, this.y, e);
  }
  setXY(e, t) {
    return this.set(e, t, this.z);
  }
  setXZ(e, t) {
    return this.set(e, this.y, t);
  }
  setYZ(e, t) {
    return this.set(this.x, e, t);
  }
  addVectors(e, t) {
    const r = e.x + t.x,
      i = e.y + t.y,
      n = e.z + t.z;
    this.set(r, i, n);
  }
  add(e) {
    return this._add(e.x, e.y, e.z);
  }
  _add(e, t, r) {
    return this.set(this.x + e, this.y + t, this.z + r);
  }
  subVectors(e, t) {
    const r = e.x - t.x,
      i = e.y - t.y,
      n = e.z - t.z;
    this.set(r, i, n);
  }
  sub(e) {
    return this._sub(e.x, e.y, e.z);
  }
  _sub(e, t, r) {
    const i = this.x - e,
      n = this.y - t,
      o = this.z - r;
    return this.set(i, n, o);
  }
  _multiply(e, t, r) {
    return this.set(this.x * e, this.y * t, this.z * r);
  }
  multiply(e) {
    return this._multiply(e.x, e.y, e.z);
  }
  multiplyVectors(e, t) {
    this.set(e.x * t.x, e.y * t.y, e.z * t.z);
  }
  _divide(e, t, r) {
    return this.set(this.x / e, this.y / t, this.z / r);
  }
  divide(e) {
    return this._divide(e.x, e.y, e.z);
  }
  subScalar(e) {
    return this.set(this.x - e, this.y - e, this.z - e);
  }
  addScalar(e) {
    return this.set(this.x + e, this.y + e, this.z + e);
  }
  clone() {
    return new Z(this.x, this.y, this.z);
  }
  multiplyScalar(e) {
    return this.set(this.x * e, this.y * e, this.z * e);
  }
  isZero() {
    return this.x === 0 && this.y === 0 && this.z === 0;
  }
  cross(e) {
    return this.crossVectors(this, e), this;
  }
  crossVectors(e, t) {
    const r = e.x,
      i = e.y,
      n = e.z,
      o = t.x,
      a = t.y,
      c = t.z;
    this._crossVectors(r, i, n, o, a, c);
  }
  _crossVectors(e, t, r, i, n, o) {
    const a = t * o - r * n,
      c = r * i - e * o,
      _ = e * n - t * i;
    this.set(a, c, _);
  }
  abs() {
    return this.set(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
  }
  dot(e) {
    return Z.dot(this, e);
  }
  length() {
    return ur(this.x, this.y, this.z);
  }
  lengthSqr() {
    return mu(this.x, this.y, this.z);
  }
  normalize() {
    const e = this.length();
    if (e === 0) return;
    const t = 1 / e;
    this.multiplyScalar(t);
  }
  isNormalized(e = 1e-5) {
    const t = this.lengthSqr();
    return Ai(t, 1, e);
  }
  copy(e) {
    return this.set(e.x, e.y, e.z);
  }
  negate() {
    return this.set(-this.x, -this.y, -this.z);
  }
  distanceTo(e) {
    return this._distanceTo(e.x, e.y, e.z);
  }
  _distanceTo(e, t, r) {
    return rp(this.x, this.y, this.z, e, t, r);
  }
  distanceSqrTo(e) {
    return mu(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  _distanceSqrTo(e, t, r) {
    return mu(this.x - e, this.y - t, this.z - r);
  }
  angleTo(e) {
    return xy(this.x, this.y, this.z, e.x, e.y, e.z);
  }
  applyQuaternion(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = e.x,
      o = e.y,
      a = e.z,
      c = e.w,
      _ = c * t + o * i - a * r,
      u = c * r + a * t - n * i,
      d = c * i + n * r - o * t,
      h = -n * t - o * r - a * i,
      p = _ * c + h * -n + u * -a - d * -o,
      v = u * c + h * -o + d * -n - _ * -a,
      f = d * c + h * -a + _ * -o - u * -n;
    this.set(p, v, f);
  }
  sign() {
    return this.set(aa(this.x), aa(this.y), aa(this.z));
  }
  lerp(e, t) {
    const r = We(this.x, e.x, t),
      i = We(this.y, e.y, t),
      n = We(this.z, e.z, t);
    return this.set(r, i, n);
  }
  lerpVectors(e, t, r) {
    l0(this, e.x, e.y, e.z, t.x, t.y, t.z, r);
  }
  slerpVectors(e, t, r) {
    by(this, e.x, e.y, e.z, t.x, t.y, t.z, r);
  }
  applyMatrix4_three(e) {
    this.applyMatrix4(e.elements);
  }
  applyMatrix4(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = 1 / (e[3] * t + e[7] * r + e[11] * i + e[15]),
      o = (e[0] * t + e[4] * r + e[8] * i + e[12]) * n,
      a = (e[1] * t + e[5] * r + e[9] * i + e[13]) * n,
      c = (e[2] * t + e[6] * r + e[10] * i + e[14]) * n;
    this.set(o, a, c);
  }
  applyDirectionMatrix4(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = e[0] * t + e[4] * r + e[8] * i,
      o = e[1] * t + e[5] * r + e[9] * i,
      a = e[2] * t + e[6] * r + e[10] * i,
      c = 1 / ur(n, o, a);
    this.set(n * c, o * c, a * c);
  }
  transformDirection_three(e) {
    const t = e.elements;
    this.applyDirectionMatrix4(t);
  }
  applyMatrix3_three(e) {
    return this.applyMatrix3(e.elements), this;
  }
  applyMatrix3(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = e[0] * t + e[3] * r + e[6] * i,
      o = e[1] * t + e[4] * r + e[7] * i,
      a = e[2] * t + e[5] * r + e[8] * i;
    this.set(n, o, a);
  }
  threejs_setFromMatrixPosition(e) {
    this.setFromMatrixPosition(e.elements);
  }
  setFromMatrixPosition(e) {
    const t = e[12],
      r = e[13],
      i = e[14];
    this.set(t, r, i);
  }
  equals(e) {
    return this._equals(e.x, e.y, e.z);
  }
  _equals(e, t, r) {
    return this.x === e && this.y === t && this.z === r;
  }
  roughlyEquals(e, t) {
    return this._roughlyEquals(e.x, e.y, e.z, t);
  }
  _roughlyEquals(e, t, r, i = Nn) {
    return Ai(this.x, e, i) && Ai(this.y, t, i) && Ai(this.z, r, i);
  }
  floor() {
    const e = this.x | 0,
      t = this.y | 0,
      r = this.z | 0;
    this.set(e, t, r);
  }
  projectOntoVector3(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = e.x,
      o = e.y,
      a = e.z;
    this._projectVectors(t, r, i, n, o, a);
  }
  _projectVectors(e, t, r, i, n, o) {
    const a = dt(e, t, r, i, n, o),
      c = i * i + n * n + o * o,
      _ = a / c,
      u = i * _,
      d = n * _,
      h = o * _;
    this.set(u, d, h);
  }
  setFromSphericalCoords(e, t, r) {
    const i = Math.sin(t),
      n = Math.cos(t),
      o = Math.sin(r),
      a = Math.cos(r),
      c = e * i * o,
      _ = e * n,
      u = e * i * a;
    this.set(c, _, u);
  }
  process(e, t) {
    return e.call(t, this.x, this.y, this.z), this.onChanged.add(e, t), this;
  }
  toJSON() {
    return { x: this.x, y: this.y, z: this.z };
  }
  fromJSON(e) {
    typeof e == "number" ? this.setScalar(e) : this.copy(e);
  }
  toString() {
    return `Vector3{ x:${this.x}, y:${this.y}, z:${this.z} }`;
  }
  toBinaryBuffer(e) {
    e.writeFloat64(this.x), e.writeFloat64(this.y), e.writeFloat64(this.z);
  }
  fromBinaryBuffer(e) {
    const t = e.readFloat64(),
      r = e.readFloat64(),
      i = e.readFloat64();
    this.set(t, r, i);
  }
  toBinaryBufferFloat32(e) {
    e.writeFloat32(this.x), e.writeFloat32(this.y), e.writeFloat32(this.z);
  }
  fromBinaryBufferFloat32(e) {
    const t = e.readFloat32(),
      r = e.readFloat32(),
      i = e.readFloat32();
    this.set(t, r, i);
  }
  hash() {
    const e = xt(this.x),
      t = xt(this.y),
      r = xt(this.z);
    return e ^ (t << 1) ^ (r << 2);
  }
  get 0() {
    return this.x;
  }
  get 1() {
    return this.y;
  }
  get 2() {
    return this.z;
  }
  set 0(e) {
    this.x = e;
  }
  set 1(e) {
    this.y = e;
  }
  set 2(e) {
    this.z = e;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
  static dot(e, t) {
    return dt(e.x, e.y, e.z, t.x, t.y, t.z);
  }
  static distance(e, t) {
    return ur(e.x - t.x, e.y - t.y, e.z - t.z);
  }
  static fromArray(e, t = 0) {
    return new Z(e[t], e[t + 1], e[t + 2]);
  }
  static fromScalar(e) {
    return new Z(e, e, e);
  }
}
Z.prototype.distanceToSquared = Z.prototype.distanceSqrTo;
Z.prototype.lengthSq = Z.prototype.lengthSqr;
Z.prototype.fromArray = Z.prototype.readFromArray;
Z.prototype.toArray = Z.prototype.writeToArray;
Z.prototype.asArray = Z.prototype.writeToArray;
Z.zero = Object.freeze(new Z(0, 0, 0));
Z.one = Object.freeze(new Z(1, 1, 1));
Z.minus_one = Object.freeze(new Z(-1, -1, -1));
Z.up = Object.freeze(new Z(0, 1, 0));
Z.down = Object.freeze(new Z(0, -1, 0));
Z.left = Object.freeze(new Z(-1, 0, 0));
Z.right = Object.freeze(new Z(1, 0, 0));
Z.forward = Object.freeze(new Z(0, 0, 1));
Z.back = Object.freeze(new Z(0, 0, -1));
Z.prototype.isVector3 = !0;
Z.typeName = "Vector3";
function yy(s, e, t, r) {
  return (
    e >= s[0] && e <= s[3] && t >= s[1] && t <= s[4] && r >= s[2] && r <= s[5]
  );
}
function wy(s, e, t, r, i, n, o, a) {
  (s[e] = t),
    (s[e + 1] = r),
    (s[e + 2] = i),
    (s[e + 3] = n),
    (s[e + 4] = r),
    (s[e + 5] = i),
    (s[e + 6] = t),
    (s[e + 7] = o),
    (s[e + 8] = i),
    (s[e + 9] = n),
    (s[e + 10] = o),
    (s[e + 11] = i),
    (s[e + 12] = t),
    (s[e + 13] = r),
    (s[e + 14] = a),
    (s[e + 15] = n),
    (s[e + 16] = r),
    (s[e + 17] = a),
    (s[e + 18] = t),
    (s[e + 19] = o),
    (s[e + 20] = a),
    (s[e + 21] = n),
    (s[e + 22] = o),
    (s[e + 23] = a);
}
function _0(s, e, t, r, i, n, o, a, c, _) {
  const u = s > 0 ? a : i,
    d = e > 0 ? c : n,
    h = t > 0 ? _ : o;
  return r + s * u + e * d + t * h;
}
function u0(s, e, t, r, i, n, o, a, c, _) {
  let u, d, h, p, v, f;
  s > 0 ? ((u = i), (p = a)) : ((u = a), (p = i)),
    e > 0 ? ((d = n), (v = c)) : ((d = c), (v = n)),
    t > 0 ? ((h = o), (f = _)) : ((h = _), (f = o));
  const m = -r;
  return dt(p, v, f, s, e, t) < m ? -2 : dt(s, e, t, u, d, h) >= m ? 2 : 0;
}
function nf(s, e, t, r, i, n) {
  const o = r - s,
    a = i - e,
    c = n - t;
  return (a * (o + c) + c * o) * 2;
}
function Ty(s, e, t, r, i, n, o, a, c) {
  const _ = c * 4;
  for (let u = 0; u < _; u += 4) {
    const d = a + u,
      h = o[d],
      p = o[d + 1],
      v = o[d + 2],
      f = o[d + 3];
    if (_0(h, p, v, f, s, e, t, r, i, n) < 0) return !1;
  }
  return !0;
}
function d0(s, e, t, r, i, n, o) {
  let a = 2;
  for (let c = 0; c < 24; c += 4) {
    const _ = o[c],
      u = o[c + 1],
      d = o[c + 2],
      h = o[c + 3],
      p = u0(_, u, d, h, s, e, t, r, i, n);
    if (p < 0) return 0;
    p === 0 && (a = 1);
  }
  return a;
}
function Oi(s) {
  return s >= 0 ? s : -s;
}
function Ey(s, e, t, r, i, n, o, a, c, _, u, d) {
  let h, p, v, f, m, g, E, y, A, T, z, C, U, k, N;
  if (
    ((E = 0.5 * (_ - o)),
    (h = (r - s) / 2),
    (T = s + h),
    (f = 0.5 * (_ + o) - T),
    (U = Oi(E)),
    Oi(f) > h + U ||
      ((y = 0.5 * (u - a)),
      (p = (i - e) / 2),
      (z = e + p),
      (m = 0.5 * (u + a) - z),
      (k = Oi(y)),
      Oi(m) > p + k) ||
      ((A = 0.5 * (d - c)),
      (v = (n - t) / 2),
      (C = t + v),
      (g = 0.5 * (d + c) - C),
      (N = Oi(A)),
      Oi(g) > v + N))
  )
    return !1;
  let M;
  return (
    (M = y * g - A * m),
    !(
      Oi(M) > p * N + v * k ||
      ((M = A * f - E * g), Oi(M) > h * N + v * U) ||
      ((M = E * m - y * f), Oi(M) > h * k + p * U)
    )
  );
}
const Fi = Math.abs;
function Ay(s, e, t, r, i, n, o, a, c, _, u, d) {
  const h = (r - s) * 0.5,
    p = s + h,
    v = o - p;
  if (v * _ >= 0 && Fi(v) > h) return !1;
  const f = (i - e) * 0.5,
    m = e + f,
    g = a - m;
  if (g * u >= 0 && Fi(g) > f) return !1;
  const E = (n - t) * 0.5,
    y = t + E,
    A = c - y;
  if (A * d >= 0 && Fi(A) > E) return !1;
  const T = Fi(u),
    z = Fi(d);
  if (Fi(u * A - d * g) > f * z + E * T) return !1;
  const U = Fi(_);
  return Fi(d * v - _ * A) > h * z + E * U
    ? !1
    : Fi(_ * g - u * v) <= h * T + f * U;
}
function h0(s, e, t) {
  (s[0] = s[3] = t[12]), (s[1] = s[4] = t[13]), (s[2] = s[5] = t[14]);
  for (let r = 0; r < 3; r++)
    for (let i = 0; i < 3; i++) {
      const n = r + i * 4,
        o = t[n],
        a = o * e[i],
        c = o * e[i + 3];
      a < c ? ((s[r] += a), (s[r + 3] += c)) : ((s[r] += c), (s[r + 3] += a));
    }
}
function Sy(s, e, t, r, i, n, o, a, c) {
  const _ = s - o,
    u = o - r,
    d = e - a,
    h = a - i,
    p = t - c,
    v = c - n;
  let f = ne(_, u),
    m = ne(d, h),
    g = ne(p, v);
  return f > 0 || m > 0 || g > 0
    ? ((f = ne(f, 0)), (m = ne(m, 0)), (g = ne(g, 0)), f * f + m * m + g * g)
    : -(f * f + m * m + g * g);
}
function zy(s, e, t, r, i, n, o, a, c, _, u, d) {
  const h = o - r,
    p = s - _,
    v = a - i,
    f = e - u,
    m = c - n,
    g = t - d,
    E = Math.max(h, p),
    y = Math.max(v, f),
    A = Math.max(m, g);
  let T = Math.sqrt(E * E + y * y + A * A);
  return E < 0 && y < 0 && A < 0 ? -T : T;
}
class fr {
  constructor(e = 0, t = 0, r = 0, i = 0, n = 0, o = 0) {
    this.setBounds(e, t, r, i, n, o);
  }
  *[Symbol.iterator]() {
    yield this.x0,
      yield this.y0,
      yield this.z0,
      yield this.x1,
      yield this.y1,
      yield this.z1;
  }
  get 0() {
    return this.x0;
  }
  get 1() {
    return this.y0;
  }
  get 2() {
    return this.z0;
  }
  get 3() {
    return this.x1;
  }
  get 4() {
    return this.y1;
  }
  get 5() {
    return this.z1;
  }
  set 0(e) {
    this.x0 = e;
  }
  set 1(e) {
    this.y0 = e;
  }
  set 2(e) {
    this.z0 = e;
  }
  set 3(e) {
    this.x1 = e;
  }
  set 4(e) {
    this.y1 = e;
  }
  set 5(e) {
    this.z1 = e;
  }
  containsPoint(e, t, r) {
    return yy(this, e, t, r);
  }
  containsPointWithTolerance(e, t, r, i) {
    return !(
      e + i < this.x0 ||
      e - i > this.x1 ||
      t + i < this.y0 ||
      t - i > this.y1 ||
      r + i < this.z0 ||
      r - i > this.z1
    );
  }
  computeSurfaceArea() {
    return nf(this.x0, this.y0, this.z0, this.x1, this.y1, this.z1);
  }
  getSurfaceArea() {
    return this.computeSurfaceArea();
  }
  computeVolume() {
    return this.getExtentsX() * this.getExtentsY() * this.getExtentsZ();
  }
  copy(e) {
    this.setBounds(e.x0, e.y0, e.z0, e.x1, e.y1, e.z1);
  }
  setBounds(e, t, r, i, n, o) {
    (this.x0 = e),
      (this.y0 = t),
      (this.z0 = r),
      (this.x1 = i),
      (this.y1 = n),
      (this.z1 = o);
  }
  equals(e) {
    return this._equals(e.x0, e.y0, e.z0, e.x1, e.y1, e.z1);
  }
  _equals(e, t, r, i, n, o) {
    return (
      this.x0 === e &&
      this.y0 === t &&
      this.z0 === r &&
      this.x1 === i &&
      this.y1 === n &&
      this.z1 === o
    );
  }
  setBoundsUnordered(e, t, r, i, n, o) {
    let a, c, _, u, d, h;
    e < i ? ((a = e), (u = i)) : ((a = i), (u = e)),
      t < n ? ((c = t), (d = n)) : ((c = n), (d = t)),
      r < o ? ((_ = r), (h = o)) : ((_ = o), (h = r)),
      this.setBounds(a, c, _, u, d, h);
  }
  setNegativelyInfiniteBounds() {
    this.setBounds(
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY
    );
  }
  setInfiniteBounds() {
    this.setBounds(
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      Number.POSITIVE_INFINITY
    );
  }
  _translate(e, t, r) {
    this.setBounds(
      this.x0 + e,
      this.y0 + t,
      this.z0 + r,
      this.x1 + e,
      this.y1 + t,
      this.z1 + r
    );
  }
  distanceToPoint2(e, t, r) {
    return Sy(this.x0, this.y0, this.z0, this.x1, this.y1, this.z1, e, t, r);
  }
  distanceToBox(e) {
    return this._distanceToBox(e.x0, e.y0, e.z0, e.x1, e.y1, e.z1);
  }
  _distanceToBox(e, t, r, i, n, o) {
    const a = this.x0,
      c = this.y0,
      _ = this.z0,
      u = this.x1,
      d = this.y1,
      h = this.z1;
    return zy(a, c, _, u, d, h, e, t, r, i, n, o);
  }
  costForInclusion(e) {
    return this._costForInclusion(e.x0, e.y0, e.z0, e.x1, e.y1, e.z1);
  }
  _costForInclusion(e, t, r, i, n, o) {
    let a = 0,
      c = 0,
      _ = 0;
    const u = this.x0,
      d = this.y0,
      h = this.z0,
      p = this.x1,
      v = this.y1,
      f = this.z1;
    u > e && (a += u - e),
      p < i && (a += i - p),
      d > t && (c += d - t),
      v < n && (c += n - v),
      h > r && (_ += h - r),
      f < o && (_ += o - f);
    const m = p - u,
      g = v - d,
      E = f - h;
    return a * (g + E) + c * (m + E) + _ * (m + g);
  }
  _expandToFitPoint(e, t, r) {
    let i = !1;
    return (
      e < this.x0 && ((this.x0 = e), (i = !0)),
      t < this.y0 && ((this.y0 = t), (i = !0)),
      r < this.z0 && ((this.z0 = r), (i = !0)),
      e > this.x1 && ((this.x1 = e), (i = !0)),
      t > this.y1 && ((this.y1 = t), (i = !0)),
      r > this.z1 && ((this.z1 = r), (i = !0)),
      i
    );
  }
  expandToFit(e) {
    return this._expandToFit(e.x0, e.y0, e.z0, e.x1, e.y1, e.z1);
  }
  _expandToFit(e, t, r, i, n, o) {
    let a = !1;
    return (
      e < this.x0 && ((this.x0 = e), (a = !0)),
      t < this.y0 && ((this.y0 = t), (a = !0)),
      r < this.z0 && ((this.z0 = r), (a = !0)),
      i > this.x1 && ((this.x1 = i), (a = !0)),
      n > this.y1 && ((this.y1 = n), (a = !0)),
      o > this.z1 && ((this.z1 = o), (a = !0)),
      a
    );
  }
  _containsBox(e, t, r, i, n, o) {
    return (
      e >= this.x0 &&
      t >= this.y0 &&
      r >= this.z0 &&
      i <= this.x1 &&
      n <= this.y1 &&
      o <= this.z1
    );
  }
  containsBox(e) {
    return this._containsBox(e.x0, e.y0, e.z0, e.x1, e.y1, e.z1);
  }
  getExtentsX() {
    return this.x1 - this.x0;
  }
  get width() {
    return this.getExtentsX();
  }
  getExtentsY() {
    return this.y1 - this.y0;
  }
  get height() {
    return this.getExtentsY();
  }
  getExtentsZ() {
    return this.z1 - this.z0;
  }
  get depth() {
    return this.getExtentsZ();
  }
  getHalfExtentsX() {
    return this.getExtentsX() / 2;
  }
  getHalfExtentsY() {
    return this.getExtentsY() / 2;
  }
  getHalfExtentsZ() {
    return this.getExtentsZ() / 2;
  }
  getExtents(e) {
    e.set(this.width, this.height, this.height);
  }
  getCenterX() {
    return (this.x0 + this.x1) * 0.5;
  }
  get centerX() {
    return this.getCenterX();
  }
  getCenterY() {
    return (this.y0 + this.y1) * 0.5;
  }
  get centerY() {
    return this.getCenterY();
  }
  getCenterZ() {
    return (this.z0 + this.z1) * 0.5;
  }
  get centerZ() {
    return this.getCenterZ();
  }
  getCenter(e = new Z()) {
    const t = this.getCenterX(),
      r = this.getCenterY(),
      i = this.getCenterZ();
    return e.set(t, r, i), e;
  }
  intersectRay(e, t, r, i, n, o) {
    return Ay(
      this.x0,
      this.y0,
      this.z0,
      this.x1,
      this.y1,
      this.z1,
      e,
      t,
      r,
      i,
      n,
      o
    );
  }
  intersectSegment(e, t, r, i, n, o) {
    return Ey(
      this.x0,
      this.y0,
      this.z0,
      this.x1,
      this.y1,
      this.z1,
      e,
      t,
      r,
      i,
      n,
      o
    );
  }
  threeContainsBox(e) {
    const t = e.min,
      r = e.max;
    return this._containsBox(t.x, t.y, t.z, r.x, r.y, r.z);
  }
  traverseCorners(e, t) {
    const r = this.x0,
      i = this.y0,
      n = this.z0,
      o = this.x1,
      a = this.y1,
      c = this.z1;
    e.call(t, r, i, n),
      e.call(t, r, i, c),
      e.call(t, r, a, n),
      e.call(t, r, a, c),
      e.call(t, o, i, n),
      e.call(t, o, i, c),
      e.call(t, o, a, n),
      e.call(t, o, a, c);
  }
  getCorners(e) {
    wy(e, 0, this.x0, this.y0, this.z0, this.x1, this.y1, this.z1);
  }
  writeToArray(e = [], t = 0) {
    return (
      (e[t] = this.x0),
      (e[t + 1] = this.y0),
      (e[t + 2] = this.z0),
      (e[t + 3] = this.x1),
      (e[t + 4] = this.y1),
      (e[t + 5] = this.z1),
      e
    );
  }
  readFromArray(e, t = 0) {
    const r = e[t],
      i = e[t + 1],
      n = e[t + 2],
      o = e[t + 3],
      a = e[t + 4],
      c = e[t + 5];
    this.setBounds(r, i, n, o, a, c);
  }
  computePlaneSide(e) {
    const t = e.normal;
    return u0(
      t.x,
      t.y,
      t.z,
      e.constant,
      this.x0,
      this.y0,
      this.z0,
      this.x1,
      this.y1,
      this.z1
    );
  }
  computeDistanceAbovePlane(e, t, r, i) {
    return _0(e, t, r, i, this.x0, this.y0, this.z0, this.x1, this.y1, this.z1);
  }
  _isBelowPlane(e, t, r, i) {
    return this.computeDistanceAbovePlane(e, t, r, i) < 0;
  }
  isBelowPlane(e) {
    const t = e.normal;
    return this._isBelowPlane(t.x, t.y, t.z, e.constant);
  }
  intersectSpace(e) {
    let t = 0;
    const r = e.length;
    for (; t < r; t++) {
      const i = e[t];
      if (this.isBelowPlane(i)) return !1;
    }
    return !0;
  }
  intersectFrustumDegree(e) {
    const t = e.planes;
    let r = 0,
      i = 2;
    for (; r < 6; r++) {
      const n = t[r],
        o = this.computePlaneSide(n);
      if (o < 0) return 0;
      o === 0 && (i = 1);
    }
    return i;
  }
  intersectFrustumDegree_array(e) {
    return d0(this.x0, this.y0, this.z0, this.x1, this.y1, this.z1, e);
  }
  intersectFrustum(e) {
    const t = e.planes;
    for (let r = 0; r < 6; r++) {
      const i = t[r];
      if (this.isBelowPlane(i)) return !1;
    }
    return !0;
  }
  intersectFrustum_array(e) {
    const t = this.x0,
      r = this.y0,
      i = this.z0,
      n = this.x1,
      o = this.y1,
      a = this.z1;
    return Ty(t, r, i, n, o, a, e, 0, 6);
  }
  applyMatrix4(e) {
    const t = [],
      r = [];
    this.writeToArray(t, 0), h0(r, t, e), this.readFromArray(r, 0);
  }
  grow(e) {
    (this.x0 -= e),
      (this.y0 -= e),
      (this.z0 -= e),
      (this.x1 += e),
      (this.y1 += e),
      (this.z1 += e);
  }
  clone() {
    const e = new fr();
    return e.copy(this), e;
  }
  fromJSON({ x0: e, y0: t, z0: r, x1: i, y1: n, z1: o }) {
    this.setBounds(e, t, r, i, n, o);
  }
}
fr.prototype.isAABB3 = !0;
fr.prototype.toArray = fr.prototype.writeToArray;
fr.prototype.fromArray = fr.prototype.readFromArray;
fr.prototype.length = 6;
const gh = Math.SQRT1_2 / 511;
function Cy(s, e, t) {
  const r = t & 3,
    i = (t >> 2) & 1023,
    n = (t >> 12) & 1023,
    o = (t >> 22) & 1023,
    a = i * gh - Math.SQRT1_2,
    c = n * gh - Math.SQRT1_2,
    _ = o * gh - Math.SQRT1_2,
    u = 1 - a * a - c * c - _ * _,
    d = Math.sqrt(u);
  let h, p, v, f;
  r === 0
    ? ((h = d), (p = a), (v = c), (f = _))
    : r === 1
    ? ((h = a), (p = d), (v = c), (f = _))
    : r === 2
    ? ((h = a), (p = c), (v = d), (f = _))
    : ((h = a), (p = c), (v = _), (f = d)),
    (s[e] = h),
    (s[e + 1] = p),
    (s[e + 2] = v),
    (s[e + 3] = f);
}
function Uy(s, e, t, r) {
  return s * s + e * e + t * t + r * r;
}
function f0(s, e, t, r) {
  return Math.sqrt(Uy(s, e, t, r));
}
function Iy(s, e, t, r) {
  const i = Math.abs(s),
    n = Math.abs(e),
    o = Math.abs(t),
    a = Math.abs(r);
  let c, _, u, d, h;
  n > i
    ? n > o
      ? n > a
        ? (h = 1)
        : (h = 3)
      : o > a
      ? (h = 2)
      : (h = 3)
    : i > o
    ? i > a
      ? (h = 0)
      : (h = 3)
    : o > a
    ? (h = 2)
    : (h = 3),
    h === 0
      ? ((c = e), (_ = t), (u = r), (d = s))
      : h === 1
      ? ((c = s), (_ = t), (u = r), (d = e))
      : h === 2
      ? ((c = s), (_ = e), (u = r), (d = t))
      : ((c = s), (_ = e), (u = t), (d = r)),
    d < 0 && ((c = -c), (_ = -_), (u = -u));
  const v = 511 / (f0(c, _, u, d) * Math.SQRT1_2),
    f = Math.round(c * v + 511),
    m = Math.round(_ * v + 511),
    g = Math.round(u * v + 511);
  return (h & 3) | ((f & 1023) << 2) | ((m & 1023) << 12) | ((g & 1023) << 22);
}
const qe = new Z(),
  Q_ = new Z(),
  Es = new Z(),
  Fe = Math.sin,
  tt = Math.cos;
class $e {
  constructor(e = 0, t = 0, r = 0, i = 1) {
    (this.x = e),
      (this.y = t),
      (this.z = r),
      (this.w = i),
      (this.onChanged = new ge());
  }
  get 0() {
    return this.x;
  }
  get 1() {
    return this.y;
  }
  get 2() {
    return this.z;
  }
  get 3() {
    return this.w;
  }
  set 0(e) {
    this.x = e;
  }
  set 1(e) {
    this.y = e;
  }
  set 2(e) {
    this.z = e;
  }
  set 3(e) {
    this.w = e;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
  _lookRotation(e, t, r, i, n, o) {
    qe.set(e, t, r),
      qe.normalize(),
      Es._crossVectors(i, n, o, qe.x, qe.y, qe.z),
      Es.lengthSq() === 0 &&
        (Math.abs(o) === 1 ? (qe.x += 0.001) : (qe.z += 0.001),
        qe.normalize(),
        Es._crossVectors(i, n, o, qe.x, qe.y, qe.z)),
      Es.normalize(),
      Q_.crossVectors(qe, Es);
    const a = Es.x,
      c = Es.y,
      _ = Es.z,
      u = Q_.x,
      d = Q_.y,
      h = Q_.z,
      p = qe.x,
      v = qe.y,
      f = qe.z;
    this.__setFromRotationMatrix(a, u, p, c, d, v, _, h, f);
  }
  lookRotation(e, t = Z.up) {
    this._lookRotation(e.x, e.y, e.z, t.x, t.y, t.z);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  copyInverse(e) {
    this.copy(e), this.invert();
  }
  invert() {
    const e = this.x,
      t = this.y,
      r = this.z,
      i = this.w,
      n = e * e + t * t + r * r + i * i;
    if (n === 0) {
      this.set(0, 0, 0, 1);
      return;
    }
    const o = 1 / n,
      a = -e * o,
      c = -t * o,
      _ = -r * o,
      u = i * o;
    this.set(a, c, _, u);
  }
  angleTo(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = this.w,
      o = e.x,
      a = e.y,
      c = e.z,
      _ = e.w,
      u = t * o + r * a + i * c + n * _,
      d = Ye(u, -1, 1),
      h = Math.abs(d);
    return Math.acos(h) * 2;
  }
  fromAxisAngle(e, t) {
    this._fromAxisAngle(e.x, e.y, e.z, t);
  }
  _fromAxisAngle(e, t, r, i) {
    const n = i * 0.5,
      o = Fe(n),
      a = tt(n),
      c = e * o,
      _ = t * o,
      u = r * o,
      d = a,
      p = 1 / Math.sqrt(c * c + _ * _ + u * u + d * d),
      v = c * p,
      f = _ * p,
      m = u * p,
      g = d * p;
    this.set(v, f, m, g);
  }
  computeSwingAndTwist(e, t, r) {
    const i = this.x,
      n = this.y,
      o = this.z,
      a = this.w,
      c = dt(i, n, o, e.x, e.y, e.z),
      _ = e.x * e.x + e.y * e.y + e.z * e.z,
      u = c / _,
      d = e.x * u,
      h = e.y * u,
      p = e.z * u;
    c < 0 ? r.set(-d, -h, -p, -a) : r.set(d, h, p, a),
      r.normalize(),
      t._multiplyQuaternions(i, n, o, a, -r.x, -r.y, -r.z, r.w);
  }
  computeTwistAngle(e) {
    const t = new $e(),
      r = new $e();
    return this.computeSwingAndTwist(e, t, r), Math.acos(r.w) * 2;
  }
  toAxisAngle(e) {
    const t = Math.acos(this.w) * 2,
      r = Fe(t * 0.5);
    return (
      Math.abs(r) > Nn
        ? e.set(this.x / r, this.y / r, this.z / r)
        : e.set(1, 0, 0),
      t
    );
  }
  normalize() {
    let e = this.length();
    if (e < Nn) this.set(0, 0, 0, 1);
    else {
      const t = 1 / e;
      this.multiplyScalar(t);
    }
  }
  multiplyScalar(e) {
    return this.set(this.x * e, this.y * e, this.z * e, this.w * e);
  }
  multiply(e) {
    this.multiplyQuaternions(this, e);
  }
  multiplyQuaternions(e, t) {
    const r = e.x,
      i = e.y,
      n = e.z,
      o = e.w,
      a = t.x,
      c = t.y,
      _ = t.z,
      u = t.w;
    this._multiplyQuaternions(r, i, n, o, a, c, _, u);
  }
  _multiplyQuaternions(e, t, r, i, n, o, a, c) {
    const _ = e * c + i * n + t * a - r * o,
      u = t * c + i * o + r * n - e * a,
      d = r * c + i * a + e * o - t * n,
      h = i * c - e * n - t * o - r * a;
    return this.set(_, u, d, h);
  }
  length() {
    const e = this.x,
      t = this.y,
      r = this.z,
      i = this.w;
    return f0(e, t, r, i);
  }
  rotateTowards(e, t) {
    $e.rotateTowards(this, this, e, t);
  }
  lookAt(e, t, r = Z.up) {
    const i = qe;
    i.subVectors(t, e), i.normalize(), this.lookRotation(i, r);
  }
  setRandom(e) {
    this.set(e(), e(), e(), e()), this.normalize();
  }
  __setFromEuler(e, t, r, i = "XYZ") {
    if (i === "XYZ") this.fromEulerAnglesXYZ(e, t, r);
    else if (i === "YXZ") this.fromEulerAnglesYXZ(e, t, r);
    else if (i === "ZXY") this.fromEulerAnglesZXY(e, t, r);
    else if (i === "ZYX") this.fromEulerAnglesZYX(e, t, r);
    else if (i === "YZX") this.fromEulerAnglesYZX(e, t, r);
    else if (i === "XZY") this.fromEulerAnglesXZY(e, t, r);
    else
      throw new Error(
        `Invalid order '${i}', bust be 3 capital letters consisting of X,Y and Z`
      );
    return this;
  }
  toEulerAnglesXYZ(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = this.w,
      o = n * n,
      a = t * t,
      c = r * r,
      _ = i * i,
      u = 2 * (t * n - r * i),
      d = o - a - c + _,
      h = Math.atan2(u, d),
      p = 2 * (t * i + r * n),
      v = Math.asin(p),
      f = 2 * (i * n - t * r),
      m = o + a - c - _,
      g = Math.atan2(f, m);
    e.set(h, v, g);
  }
  toEulerAnglesYXZ(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = this.w,
      o = i * i,
      a = t * t,
      c = n * n,
      _ = r * r,
      u = 2 * (t * i + n * r),
      d = c - a - _ + o,
      h = -2 * (r * i - n * t),
      p = 2 * (t * r + n * i),
      v = c - a + _ - o,
      f = Math.atan2(p, v),
      m = Math.asin(h),
      g = Math.atan2(u, d);
    e.set(m, g, f);
  }
  toEulerAnglesZYX(e) {
    const t = this.x,
      r = this.y,
      i = this.z,
      n = this.w,
      o = t * t,
      a = r * r,
      c = i * i,
      _ = n * n,
      u = 2 * (t * r + n * i),
      d = _ + o - a - c,
      h = -2 * (t * i - n * r),
      p = 2 * (r * i + n * t),
      v = _ - o - a + c,
      f = Math.atan2(p, v),
      m = Math.asin(h),
      g = Math.atan2(u, d);
    e.set(f, m, g);
  }
  fromEulerAnglesXYZ(e, t, r) {
    const i = e * 0.5,
      n = t * 0.5,
      o = r * 0.5,
      a = Fe(i),
      c = Fe(n),
      _ = Fe(o),
      u = tt(i),
      d = tt(n),
      h = tt(o),
      p = a * d * h + u * c * _,
      v = u * c * h - a * d * _,
      f = u * d * _ + a * c * h,
      m = u * d * h - a * c * _;
    this.set(p, v, f, m);
  }
  fromEulerAnglesYXZ(e, t, r) {
    const i = e * 0.5,
      n = t * 0.5,
      o = r * 0.5,
      a = Fe(i),
      c = Fe(n),
      _ = Fe(o),
      u = tt(i),
      d = tt(n),
      h = tt(o),
      p = a * d * h + u * c * _,
      v = u * c * h - a * d * _,
      f = u * d * _ - a * c * h,
      m = u * d * h + a * c * _;
    this.set(p, v, f, m);
  }
  fromEulerAnglesZXY(e, t, r) {
    const i = e * 0.5,
      n = t * 0.5,
      o = r * 0.5,
      a = Fe(i),
      c = Fe(n),
      _ = Fe(o),
      u = tt(i),
      d = tt(n),
      h = tt(o),
      p = a * d * h - u * c * _,
      v = u * c * h + a * d * _,
      f = u * d * _ + a * c * h,
      m = u * d * h - a * c * _;
    this.set(p, v, f, m);
  }
  fromEulerAnglesZYX(e, t, r) {
    const i = e * 0.5,
      n = t * 0.5,
      o = r * 0.5,
      a = Fe(i),
      c = Fe(n),
      _ = Fe(o),
      u = tt(i),
      d = tt(n),
      h = tt(o),
      p = a * d * h - u * c * _,
      v = u * c * h + a * d * _,
      f = u * d * _ - a * c * h,
      m = u * d * h + a * c * _;
    this.set(p, v, f, m);
  }
  fromEulerAnglesYZX(e, t, r) {
    const i = e * 0.5,
      n = t * 0.5,
      o = r * 0.5,
      a = Fe(i),
      c = Fe(n),
      _ = Fe(o),
      u = tt(i),
      d = tt(n),
      h = tt(o),
      p = a * d * h + u * c * _,
      v = u * c * h + a * d * _,
      f = u * d * _ - a * c * h,
      m = u * d * h - a * c * _;
    this.set(p, v, f, m);
  }
  fromEulerAnglesXZY(e, t, r) {
    const i = e * 0.5,
      n = t * 0.5,
      o = r * 0.5,
      a = Fe(i),
      c = Fe(n),
      _ = Fe(o),
      u = tt(i),
      d = tt(n),
      h = tt(o),
      p = a * d * h - u * c * _,
      v = u * c * h - a * d * _,
      f = u * d * _ + a * c * h,
      m = u * d * h + a * c * _;
    this.set(p, v, f, m);
  }
  fromUnitVectors(e, t) {
    const r = e.x,
      i = e.y,
      n = e.z,
      o = t.x,
      a = t.y,
      c = t.z,
      _ = dt(r, i, n, o, a, c);
    if (_ < -0.9999999) {
      qe.crossVectors(Z.left, e),
        qe.lengthSqr() < 1e-5 && qe.crossVectors(Z.up, e),
        qe.normalize(),
        this.set(qe.x, qe.y, qe.z, 0);
      return;
    }
    const u = Math.sqrt(2 + 2 * _),
      d = 1 / u,
      h = i * c - n * a,
      p = n * o - r * c,
      v = r * a - i * o,
      f = d * h,
      m = d * p,
      g = d * v;
    this.set(f, m, g, 0.5 * u);
  }
  setFromRotationMatrix(e) {
    const t = e.elements;
    this.__setFromRotationMatrix(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    );
  }
  __setFromRotationMatrix(e, t, r, i, n, o, a, c, _) {
    const u = e + n + _;
    let d, h, p, v, f;
    return (
      u > 0
        ? ((f = Math.sqrt(u + 1)),
          (v = 0.5 * f),
          (f = 0.5 / f),
          (d = (c - o) * f),
          (h = (r - a) * f),
          (p = (i - t) * f))
        : e > n && e > _
        ? ((f = Math.sqrt(1 + e - n - _)),
          (d = 0.5 * f),
          (f = 0.5 / f),
          (v = (c - o) * f),
          (h = (t + i) * f),
          (p = (r + a) * f))
        : n > _
        ? ((f = Math.sqrt(1 + n - e - _)),
          (h = 0.5 * f),
          (f = 0.5 / f),
          (v = (r - a) * f),
          (d = (t + i) * f),
          (p = (o + c) * f))
        : ((f = Math.sqrt(1 + _ - e - n)),
          (p = 0.5 * f),
          (f = 0.5 / f),
          (v = (i - t) * f),
          (d = (r + a) * f),
          (h = (o + c) * f)),
      this.set(d, h, p, v)
    );
  }
  lerp(e, t) {
    this.lerpQuaternions(this, e, t);
  }
  lerpQuaternions(e, t, r) {
    const i = We(e.x, t.x, r),
      n = We(e.y, t.y, r),
      o = We(e.z, t.z, r),
      a = We(e.w, t.w, r);
    this.set(i, n, o, a);
  }
  slerpQuaternions(e, t, r) {
    const i = e.x,
      n = e.y,
      o = e.z,
      a = e.w;
    let c = t.x,
      _ = t.y,
      u = t.z,
      d = t.w,
      h,
      p,
      v,
      f,
      m;
    (p = i * c + n * _ + o * u + a * d),
      p < 0 && ((p = -p), (c = -c), (_ = -_), (u = -u), (d = -d)),
      1 - p > Nn
        ? ((h = Math.acos(p)),
          (v = Fe(h)),
          (f = Fe((1 - r) * h) / v),
          (m = Fe(r * h) / v))
        : ((f = 1 - r), (m = r));
    const g = f * i + m * c,
      E = f * n + m * _,
      y = f * o + m * u,
      A = f * a + m * d;
    this.set(g, E, y, A);
  }
  slerp(e, t) {
    this.slerpQuaternions(this, e, t);
  }
  process(e) {
    e(this.x, this.y, this.z, this.w), this.onChanged.add(e);
  }
  copy(e) {
    return this.set(e.x, e.y, e.z, e.w);
  }
  clone() {
    const e = new $e();
    return e.copy(this), e;
  }
  set(e, t, r, i) {
    const n = this.x,
      o = this.y,
      a = this.z,
      c = this.w;
    return (
      (n !== e || o !== t || a !== r || c !== i) &&
        ((this.x = e),
        (this.y = t),
        (this.z = r),
        (this.w = i),
        this.onChanged.hasHandlers() &&
          this.onChanged.send8(e, t, r, i, n, o, a, c)),
      this
    );
  }
  conjugate() {
    return this.set(-this.x, -this.y, -this.z, this.w);
  }
  toJSON() {
    return { x: this.x, y: this.y, z: this.z, w: this.w };
  }
  fromJSON(e) {
    this.set(e.x, e.y, e.z, e.w);
  }
  toBinaryBuffer(e) {
    e.writeFloat64(this.x),
      e.writeFloat64(this.y),
      e.writeFloat64(this.z),
      e.writeFloat64(this.w);
  }
  fromBinaryBuffer(e) {
    const t = e.readFloat64(),
      r = e.readFloat64(),
      i = e.readFloat64(),
      n = e.readFloat64();
    this.set(t, r, i, n);
  }
  toBinaryBufferFloat32(e) {
    e.writeFloat32(this.x),
      e.writeFloat32(this.y),
      e.writeFloat32(this.z),
      e.writeFloat32(this.w);
  }
  fromBinaryBufferFloat32(e) {
    const t = e.readFloat32(),
      r = e.readFloat32(),
      i = e.readFloat32(),
      n = e.readFloat32();
    this.set(t, r, i, n);
  }
  decodeFromUint32(e) {
    Cy(this, 0, e);
  }
  encodeToUint32() {
    return Iy(this.x, this.y, this.z, this.w);
  }
  readFromArray(e, t = 0) {
    this.set(e[t], e[t + 1], e[t + 2], e[t + 3]);
  }
  writeToArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  equals(e) {
    return this.x === e.x && this.y === e.y && this.z === e.z && this.w === e.w;
  }
  hash() {
    return (
      xt(this.x) ^ (xt(this.y) >> 2) ^ (xt(this.z) >> 1) ^ (xt(this.w) << 2)
    );
  }
  roughlyEquals(e, t) {
    return this._roughlyEquals(e.x, e.y, e.z, e.w, t);
  }
  _roughlyEquals(e, t, r, i, n = Nn) {
    return (
      Ai(this.x, e, n) &&
      Ai(this.y, t, n) &&
      Ai(this.z, r, n) &&
      Ai(this.w, i, n)
    );
  }
  random(e = Math.random) {
    const t = e(),
      r = Math.sqrt(1 - t),
      i = Math.sqrt(t),
      n = 2 * Math.PI * e(),
      o = 2 * Math.PI * e();
    return this.set(r * tt(n), i * Fe(o), i * tt(o), r * Fe(n));
  }
  toString() {
    return `{ x: ${this.x}, y: ${this.y}, z: ${this.z}, w: ${this.w} }`;
  }
  static random(e = Math.random) {
    const t = new $e();
    return t.random(e), t;
  }
  static fromEulerAngles(e, t, r) {
    const i = new $e();
    return i.fromEulerAnglesXYZ(e, t, r), i;
  }
  static rotateTowards(e, t, r, i) {
    const n = t.angleTo(r);
    if (n === 0) e.copy(r);
    else {
      const o = $t(i / n);
      e.slerpQuaternions(t, r, o);
    }
  }
}
$e.prototype.fromArray = $e.prototype.readFromArray;
$e.prototype.toArray = $e.prototype.writeToArray;
$e.prototype.asArray = $e.prototype.writeToArray;
$e.prototype.fromEulerAngles = $e.prototype.fromEulerAnglesXYZ;
$e.identity = Object.freeze(new $e(0, 0, 0, 1));
const p0 = Math.PI / 180;
function Ny(s = 0) {
  let e = s;
  function t() {
    e += 1831565813;
    let r = e;
    return (
      (r = Math.imul(r ^ (r >>> 15), r | 1)),
      (r ^= r + Math.imul(r ^ (r >>> 7), r | 61)),
      ((r ^ (r >>> 14)) >>> 0) / 4294967296
    );
  }
  return (
    (t.setCurrentSeed = function (r) {
      e = r;
    }),
    (t.getCurrentSeed = function () {
      return e;
    }),
    t
  );
}
const My = Ny;
function m0(s) {
  return new Promise((e, t) => {
    setTimeout(e, s);
  });
}
class ky extends Error {
  constructor(e) {
    super(e);
  }
}
function g0(s, e) {
  for (let t in s) if (s[t] === e) return t;
}
const jo = { EndSuccess: 0, EndFailure: 1, Continue: 2, Yield: 3 },
  Tt = {
    INITIAL: 0,
    READY: 1,
    RUNNING: 2,
    FAILED: 3,
    SUCCEEDED: 4,
    CANCELLED: 5,
  };
function wm(s) {
  return s.children instanceof Array;
}
var ll, Bu, Xt, v0, x0, of, b0, Ou, af;
const Fu = class Fu {
  constructor(e = 1, t = 15) {
    b(this, Xt);
    b(this, ll, 0);
    b(this, Bu, -1);
    b(this, Ou, P(this, Xt, af).bind(this));
    (this.quietTime = e),
      (this.workTime = t),
      (this.queueUnresolved = []),
      (this.queueReady = []),
      (this.on = {
        task_started: new ge(),
        task_completed: new ge(),
        completed: new ge(),
      }),
      (this.busy = !1),
      (this.policy = y0.ROUND_ROBIN);
  }
  runGroup(e) {
    const t = e.state.getValue();
    if (t !== Tt.INITIAL)
      throw new ky(`Expected task state INITIAL, instead got ${g0(Tt, t)}`);
    const r = this,
      i = e.children,
      n = i.length;
    let o = n,
      a = !1;
    function c() {
      a ||
        ((a = !0), e.state.set(Tt.SUCCEEDED), e.on.completed.send0(), r.prod());
    }
    function _(h) {
      a || ((a = !0), e.state.set(Tt.FAILED), e.on.failed.send1(h), r.prod());
    }
    function u() {
      o--, o <= 0 && c();
    }
    function d(h) {
      _(h);
    }
    if (n > 0) {
      e.state.set(Tt.RUNNING);
      let h = 0;
      for (; h < n; h++) {
        const p = i[h];
        p.on.completed.add(u),
          p.on.failed.add(d),
          wm(p) ? this.runGroup(p) : this.run(p);
      }
    } else c();
  }
  removeGroup(e) {
    const t = e.children,
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      wm(n) ? this.removeGroup(n) : this.removeTask(n);
    }
  }
  removeTask(e) {
    const t = this.queueReady.indexOf(e);
    if (t !== -1) return this.queueReady.splice(t, 1), !0;
    const r = this.queueUnresolved.indexOf(e);
    return r !== -1 ? (this.queueUnresolved.splice(r, 1), !0) : !1;
  }
  run(e) {
    this.queueUnresolved.push(e), this.prod();
  }
  runMany(e) {
    Array.prototype.push.apply(this.queueUnresolved, e), this.prod();
  }
  startTask(e) {
    const t = performance.now();
    try {
      e.initialize(e, this);
    } catch (r) {
      return e.state.set(Tt.FAILED), e.on.failed.dispatch(r), !1;
    } finally {
      const i = performance.now() - t;
      e.__executedCpuTime += i;
    }
    return (
      e.state.set(Tt.RUNNING),
      e.on.started.send1(this),
      this.queueReady.push(e),
      this.on.task_started.send1(e),
      !0
    );
  }
  resolveTasks() {
    const e = this.queueUnresolved;
    let t = 0,
      r = e.length;
    for (; t < r; t++) {
      const i = e[t];
      switch (Ry(i)) {
        case Yc.READY:
          e.splice(t, 1),
            i.state.set(Tt.READY),
            this.startTask(i),
            (t = 0),
            (r = e.length);
          break;
        case Yc.FAILED:
          e.splice(t, 1), r--, t--;
          break;
      }
    }
  }
  contains(e) {
    return (
      this.queueUnresolved.indexOf(e) !== -1 ||
      this.queueReady.indexOf(e) !== -1
    );
  }
  prod() {
    this.resolveTasks(),
      !this.busy &&
        this.queueReady.length > 0 &&
        ((this.busy = !0), P(this, Xt, af).call(this));
  }
  join(e) {
    this.queueReady.length === 0 && this.queueUnresolved.length === 0
      ? e()
      : this.on.completed.addOne(e);
  }
};
(ll = new WeakMap()),
  (Bu = new WeakMap()),
  (Xt = new WeakSet()),
  (v0 = function () {
    const e = this.queueReady;
    switch (this.policy) {
      case Fu.POLICY.ROUND_ROBIN:
        return e[getProperty(this, ll) % e.length];
      default:
      case Fu.POLICY.SEQUENTIAL:
        return e[0];
    }
  }),
  (x0 = function (e) {
    const t = this.queueReady,
      r = t.indexOf(e);
    r !== -1 && t.splice(r, 1),
      e.state.set(Tt.SUCCEEDED),
      e.on.completed.send1(this),
      this.resolveTasks(),
      this.on.task_completed.send1(e);
  }),
  (of = function (e, t) {
    const r = this.queueReady,
      i = r.indexOf(e);
    i !== -1 && r.splice(i, 1),
      e.state.set(Tt.FAILED),
      e.on.failed.send1(t),
      e.on.failed.hasHandlers(),
      this.resolveTasks(),
      this.on.task_completed.send1(e);
  }),
  (b0 = function (e, t) {
    let r = 0;
    const i = e.cycle,
      n = performance.now(),
      o = n + t;
    let a = n + 1e-6,
      c;
    for (; a < o; )
      if ((r++, (c = i()), (a = performance.now()), c !== jo.Continue)) {
        if (c === jo.Yield || c === jo.EndSuccess) break;
        if (c === jo.EndFailure) break;
        throw new Error(`Task '${e.name}' produced unknown signal: ` + c);
      }
    const _ = a - n;
    return (
      (e.__executedCpuTime += _),
      (e.__executedCycleCount += r),
      c === jo.EndSuccess
        ? P(this, Xt, x0).call(this, e)
        : c === jo.EndFailure &&
          P(this, Xt, of).call(this, e, "Task signalled failure"),
      _
    );
  }),
  (Ou = new WeakMap()),
  (af = function () {
    let e = this.workTime,
      t = 0;
    const r = this.queueReady;
    for (; r.length > 0; ) {
      const i = P(this, Xt, v0).call(this);
      if (i === false) break;
      try {
        t = P(this, Xt, b0).call(this, i, e);
      } catch (n) {
        const o = new Error("Task threw an exception");
        (o.cause = n), P(this, Xt, of).call(this, i, o);
      }
      if ((ze(this, ll)._++, (e -= Math.max(t, 1)), e <= 0)) break;
    }
    this.queueReady.length === 0
      ? ((this.busy = !1), this.on.completed.send0())
      : S(this, Bu, setTimeout(getProperty(this, Ou), this.quietTime));
  });
let zu = Fu;
const y0 = { ROUND_ROBIN: 0, SEQUENTIAL: 1, TIME_SLICE: 2 };
zu.POLICY = y0;
const Yc = { READY: 0, FAILED: 1, UNRESOLVED: 2 };
function Ry(s) {
  const e = s.dependencies;
  let t = 0;
  const r = e.length;
  for (; t < r; t++)
    switch (e[t].state.getValue()) {
      case Tt.INITIAL:
      case Tt.RUNNING:
      case Tt.READY:
        return Yc.UNRESOLVED;
      case Tt.SUCCEEDED:
        break;
      default:
      case Tt.FAILED:
        return Yc.FAILED;
    }
  return Yc.READY;
}
function cf(s, e, t, r) {
  const i = t.x,
    n = t.y,
    o = t.z,
    a = t.w,
    c = i + i,
    _ = n + n,
    u = o + o,
    d = i * c,
    h = i * _,
    p = i * u,
    v = n * _,
    f = n * u,
    m = o * u,
    g = a * c,
    E = a * _,
    y = a * u,
    A = r.x,
    T = r.y,
    z = r.z;
  (s[0] = (1 - (v + m)) * A),
    (s[1] = (h + y) * A),
    (s[2] = (p - E) * A),
    (s[3] = 0),
    (s[4] = (h - y) * T),
    (s[5] = (1 - (d + m)) * T),
    (s[6] = (f + g) * T),
    (s[7] = 0),
    (s[8] = (p + E) * z),
    (s[9] = (f - g) * z),
    (s[10] = (1 - (d + v)) * z),
    (s[11] = 0),
    (s[12] = e.x),
    (s[13] = e.y),
    (s[14] = e.z),
    (s[15] = 1);
}
function w0(s, e, t, r) {
  const i = s[0],
    n = s[1],
    o = s[2],
    a = ur(i, n, o),
    c = s[4],
    _ = s[5],
    u = s[6],
    d = ur(c, _, u),
    h = s[8],
    p = s[9],
    v = s[10],
    f = ur(h, p, v),
    m = a !== 0 ? 1 / a : 1e7,
    g = d !== 0 ? 1 / d : 1e7,
    E = f !== 0 ? 1 / f : 1e7,
    y = i * m,
    A = n * m,
    T = o * m,
    z = c * g,
    C = _ * g,
    U = u * g,
    k = h * E,
    N = p * E,
    M = v * E;
  e.set(s[12], s[13], s[14]),
    r.set(a, d, f),
    t.__setFromRotationMatrix(y, z, k, A, C, N, T, U, M);
}
const Cu = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  lf = 16;
let Tm = null,
  eu = lf;
const Em = 4 * 16;
function Ly() {
  eu >= lf && ((Tm = new ArrayBuffer(lf * Em)), (eu = 0));
  const s = new Float32Array(Tm, eu * Em, 16);
  return s.set(Cu), eu++, s;
}
function Ir(s, e, t) {
  const r = e[0],
    i = e[1],
    n = e[2],
    o = e[3],
    a = e[4],
    c = e[5],
    _ = e[6],
    u = e[7],
    d = e[8],
    h = e[9],
    p = e[10],
    v = e[11],
    f = e[12],
    m = e[13],
    g = e[14],
    E = e[15];
  let y = t[0],
    A = t[1],
    T = t[2],
    z = t[3];
  (s[0] = y * r + A * a + T * d + z * f),
    (s[1] = y * i + A * c + T * h + z * m),
    (s[2] = y * n + A * _ + T * p + z * g),
    (s[3] = y * o + A * u + T * v + z * E),
    (y = t[4]),
    (A = t[5]),
    (T = t[6]),
    (z = t[7]),
    (s[4] = y * r + A * a + T * d + z * f),
    (s[5] = y * i + A * c + T * h + z * m),
    (s[6] = y * n + A * _ + T * p + z * g),
    (s[7] = y * o + A * u + T * v + z * E),
    (y = t[8]),
    (A = t[9]),
    (T = t[10]),
    (z = t[11]),
    (s[8] = y * r + A * a + T * d + z * f),
    (s[9] = y * i + A * c + T * h + z * m),
    (s[10] = y * n + A * _ + T * p + z * g),
    (s[11] = y * o + A * u + T * v + z * E),
    (y = t[12]),
    (A = t[13]),
    (T = t[14]),
    (z = t[15]),
    (s[12] = y * r + A * a + T * d + z * f),
    (s[13] = y * i + A * c + T * h + z * m),
    (s[14] = y * n + A * _ + T * p + z * g),
    (s[15] = y * o + A * u + T * v + z * E);
}
const ra = { MatrixNeedsUpdate: 1, AutomaticChangeDetection: 2 },
  Am = new Float32Array(16),
  Py = ra.AutomaticChangeDetection;
var Du, T0;
const Kc = class Kc {
  constructor() {
    b(this, Du);
    x(this, "position", new Z(0, 0, 0));
    x(this, "rotation", new $e(0, 0, 0, 1));
    x(this, "scale", new Z(1, 1, 1));
    x(this, "matrix", Ly());
    x(this, "flags", Py);
    this.subscribe(P(this, Du, T0), this);
  }
  get forward() {
    const e = Z.forward.clone();
    return e.applyDirectionMatrix4(this.matrix), e;
  }
  get up() {
    const e = Z.up.clone();
    return e.applyDirectionMatrix4(this.matrix), e;
  }
  get right() {
    const e = Z.right.clone();
    return e.applyDirectionMatrix4(this.matrix), e;
  }
  subscribe(e, t) {
    this.position.onChanged.add(e, t),
      this.rotation.onChanged.add(e, t),
      this.scale.onChanged.add(e, t);
  }
  unsubscribe(e, t) {
    this.position.onChanged.remove(e, t),
      this.rotation.onChanged.remove(e, t),
      this.scale.onChanged.remove(e, t);
  }
  setFlag(e) {
    this.flags |= e;
  }
  clearFlag(e) {
    this.flags &= ~e;
  }
  writeFlag(e, t) {
    t ? this.setFlag(e) : this.clearFlag(e);
  }
  getFlag(e) {
    return (this.flags & e) === e;
  }
  updateMatrix() {
    cf(this.matrix, this.position, this.rotation, this.scale);
  }
  lookAt(e, t = Z.up) {
    const r = this.position,
      i = e.x - r.x,
      n = e.y - r.y,
      o = e.z - r.z;
    (i === 0 && n === 0 && o === 0) ||
      this.rotation._lookRotation(i, n, o, t.x, t.y, t.z);
  }
  fromJSON(e) {
    const t = e.position;
    t !== false ? this.position.fromJSON(t) : this.position.copy(Z.zero);
    const r = e.rotation;
    r !== false ? this.rotation.fromJSON(r) : this.rotation.copy($e.identity);
    const i = e.scale;
    i !== false ? this.scale.fromJSON(i) : this.scale.copy(Z.one);
  }
  toJSON() {
    return {
      position: this.position.toJSON(),
      rotation: this.rotation.toJSON(),
      scale: this.scale.toJSON(),
    };
  }
  copy(e) {
    this.clearFlag(ra.AutomaticChangeDetection),
      this.matrix.set(e.matrix),
      this.position.copy(e.position),
      this.rotation.copy(e.rotation),
      this.scale.copy(e.scale),
      (this.flags = e.flags);
  }
  clone() {
    const e = new Kc();
    return e.copy(this), e;
  }
  equals(e) {
    return (
      this.position.equals(e.position) &&
      this.rotation.equals(e.rotation) &&
      this.scale.equals(e.scale)
    );
  }
  hash() {
    return this.position.hash();
  }
  static fromJSON(e) {
    const t = new Kc();
    return t.fromJSON(e), t;
  }
  static fromMatrix(e) {
    const t = new Kc();
    return t.fromMatrix4(e), t;
  }
  multiplyTransforms(e, t) {
    Ir(Am, e.matrix, t.matrix), this.fromMatrix4(Am);
  }
  fromMatrix4(e) {
    const t = this.getFlag(ra.AutomaticChangeDetection);
    this.clearFlag(ra.AutomaticChangeDetection),
      this.matrix.set(e),
      w0(e, this.position, this.rotation, this.scale),
      this.writeFlag(ra.AutomaticChangeDetection, t);
  }
  toMatrix4(e) {
    cf(e, this.position, this.rotation, this.scale);
  }
  makeIdentity() {
    this.fromMatrix4(Cu);
  }
  toString() {
    return `{ position: ${this.position}, rotation: ${this.rotation}, scale: ${this.scale} }`;
  }
  static adjustRotation(e, t, r = 1 / 0) {
    const i = new $e();
    i.lookRotation(t), e.rotateTowards(i, r);
  }
};
(Du = new WeakSet()),
  (T0 = function () {
    this.getFlag(ra.AutomaticChangeDetection) && this.updateMatrix();
  });
let Mo = Kc;
Mo.typeName = "Transform";
Mo.prototype.isTransform = !0;
class Ci {
  constructor(e, t, r, i, n = "div") {
    (this.parent = e),
      (this.object = t),
      (this.property = r),
      (this._disabled = !1),
      (this._hidden = !1),
      (this.initialValue = this.getValue()),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("controller"),
      this.domElement.classList.add(i),
      (this.$name = document.createElement("div")),
      this.$name.classList.add("name"),
      (Ci.nextNameID = Ci.nextNameID || 0),
      (this.$name.id = `lil-gui-name-${++Ci.nextNameID}`),
      (this.$widget = document.createElement(n)),
      this.$widget.classList.add("widget"),
      (this.$disable = this.$widget),
      this.domElement.appendChild(this.$name),
      this.domElement.appendChild(this.$widget),
      this.parent.children.push(this),
      this.parent.controllers.push(this),
      this.parent.$children.appendChild(this.domElement),
      (this._listenCallback = this._listenCallback.bind(this)),
      this.name(r);
  }
  name(e) {
    return (this._name = e), (this.$name.innerHTML = e), this;
  }
  onChange(e) {
    return (this._onChange = e), this;
  }
  _callOnChange() {
    this.parent._callOnChange(this),
      this._onChange !== false && this._onChange.call(this, this.getValue()),
      (this._changed = !0);
  }
  onFinishChange(e) {
    return (this._onFinishChange = e), this;
  }
  _callOnFinishChange() {
    this._changed &&
      (this.parent._callOnFinishChange(this),
      this._onFinishChange !== false &&
        this._onFinishChange.call(this, this.getValue())),
      (this._changed = !1);
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(e = !0) {
    return this.disable(!e);
  }
  disable(e = !0) {
    return e === this._disabled
      ? this
      : ((this._disabled = e),
        this.domElement.classList.toggle("disabled", e),
        this.$disable.toggleAttribute("disabled", e),
        this);
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  options(e) {
    const t = this.parent.add(this.object, this.property, e);
    return t.name(this._name), this.destroy(), t;
  }
  min(e) {
    return this;
  }
  max(e) {
    return this;
  }
  step(e) {
    return this;
  }
  decimals(e) {
    return this;
  }
  listen(e = !0) {
    return (
      (this._listening = e),
      this._listenCallbackID !== false &&
        (cancelAnimationFrame(this._listenCallbackID),
        (this._listenCallbackID = false)),
      this._listening && this._listenCallback(),
      this
    );
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    e !== this._listenPrevValue && this.updateDisplay(),
      (this._listenPrevValue = e);
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(e) {
    return (
      (this.object[this.property] = e),
      this._callOnChange(),
      this.updateDisplay(),
      this
    );
  }
  updateDisplay() {
    return this;
  }
  load(e) {
    return this.setValue(e), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(!1),
      this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
      this.parent.$children.removeChild(this.domElement);
  }
}
class By extends Ci {
  constructor(e, t, r) {
    super(e, t, r, "boolean", "label"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "checkbox"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      this.$input.addEventListener("change", () => {
        this.setValue(this.$input.checked), this._callOnFinishChange();
      }),
      (this.$disable = this.$input),
      this.updateDisplay();
  }
  updateDisplay() {
    return (this.$input.checked = this.getValue()), this;
  }
}
function _f(s) {
  let e, t;
  return (
    (e = s.match(/(#|0x)?([a-f0-9]{6})/i))
      ? (t = e[2])
      : (e = s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
      ? (t =
          parseInt(e[1]).toString(16).padStart(2, 0) +
          parseInt(e[2]).toString(16).padStart(2, 0) +
          parseInt(e[3]).toString(16).padStart(2, 0))
      : (e = s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
        (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
    t ? "#" + t : !1
  );
}
const Oy = {
    isPrimitive: !0,
    match: (s) => typeof s == "string",
    fromHexString: _f,
    toHexString: _f,
  },
  el = {
    isPrimitive: !0,
    match: (s) => typeof s == "number",
    fromHexString: (s) => parseInt(s.substring(1), 16),
    toHexString: (s) => "#" + s.toString(16).padStart(6, 0),
  },
  Fy = {
    isPrimitive: !1,
    match: Array.isArray,
    fromHexString(s, e, t = 1) {
      const r = el.fromHexString(s);
      (e[0] = (((r >> 16) & 255) / 255) * t),
        (e[1] = (((r >> 8) & 255) / 255) * t),
        (e[2] = ((r & 255) / 255) * t);
    },
    toHexString([s, e, t], r = 1) {
      r = 255 / r;
      const i = ((s * r) << 16) ^ ((e * r) << 8) ^ ((t * r) << 0);
      return el.toHexString(i);
    },
  },
  Dy = {
    isPrimitive: !1,
    match: (s) => Object(s) === s,
    fromHexString(s, e, t = 1) {
      const r = el.fromHexString(s);
      (e.r = (((r >> 16) & 255) / 255) * t),
        (e.g = (((r >> 8) & 255) / 255) * t),
        (e.b = ((r & 255) / 255) * t);
    },
    toHexString({ r: s, g: e, b: t }, r = 1) {
      r = 255 / r;
      const i = ((s * r) << 16) ^ ((e * r) << 8) ^ ((t * r) << 0);
      return el.toHexString(i);
    },
  },
  Gy = [Oy, el, Fy, Dy];
function Vy(s) {
  return Gy.find((e) => e.match(s));
}
class $y extends Ci {
  constructor(e, t, r, i) {
    super(e, t, r, "color"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "color"),
      this.$input.setAttribute("tabindex", -1),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      (this.$text = document.createElement("input")),
      this.$text.setAttribute("type", "text"),
      this.$text.setAttribute("spellcheck", "false"),
      this.$text.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      this.$display.appendChild(this.$input),
      this.$widget.appendChild(this.$display),
      this.$widget.appendChild(this.$text),
      (this._format = Vy(this.initialValue)),
      (this._rgbScale = i),
      (this._initialValueHexString = this.save()),
      (this._textFocused = !1),
      this.$input.addEventListener("input", () => {
        this._setValueFromHexString(this.$input.value);
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$text.addEventListener("input", () => {
        const n = _f(this.$text.value);
        n && this._setValueFromHexString(n);
      }),
      this.$text.addEventListener("focus", () => {
        (this._textFocused = !0), this.$text.select();
      }),
      this.$text.addEventListener("blur", () => {
        (this._textFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange();
      }),
      (this.$disable = this.$text),
      this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const t = this._format.fromHexString(e);
      this.setValue(t);
    } else
      this._format.fromHexString(e, this.getValue(), this._rgbScale),
        this._callOnChange(),
        this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return this._setValueFromHexString(e), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return (
      (this.$input.value = this._format.toHexString(
        this.getValue(),
        this._rgbScale
      )),
      this._textFocused || (this.$text.value = this.$input.value.substring(1)),
      (this.$display.style.backgroundColor = this.$input.value),
      this
    );
  }
}
class vh extends Ci {
  constructor(e, t, r) {
    super(e, t, r, "function"),
      (this.$button = document.createElement("button")),
      this.$button.appendChild(this.$name),
      this.$widget.appendChild(this.$button),
      this.$button.addEventListener("click", (i) => {
        i.preventDefault(), this.getValue().call(this.object);
      }),
      this.$button.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$disable = this.$button);
  }
}
class qy extends Ci {
  constructor(e, t, r, i, n, o) {
    super(e, t, r, "number"), this._initInput(), this.min(i), this.max(n);
    const a = o !== false;
    this.step(a ? o : this._getImplicitStep(), a), this.updateDisplay();
  }
  decimals(e) {
    return (this._decimals = e), this.updateDisplay(), this;
  }
  min(e) {
    return (this._min = e), this._onUpdateMinMax(), this;
  }
  max(e) {
    return (this._max = e), this._onUpdateMinMax(), this;
  }
  step(e, t = !0) {
    return (this._step = e), (this._stepExplicit = t), this;
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let t = (e - this._min) / (this._max - this._min);
      (t = Math.max(0, Math.min(t, 1))),
        (this.$fill.style.width = t * 100 + "%");
    }
    return (
      this._inputFocused ||
        (this.$input.value =
          this._decimals === false ? e : e.toFixed(this._decimals)),
      this
    );
  }
  _initInput() {
    (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "number"),
      this.$input.setAttribute("step", "any"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input);
    const e = () => {
        let g = parseFloat(this.$input.value);
        isNaN(g) ||
          (this._stepExplicit && (g = this._snap(g)),
          this.setValue(this._clamp(g)));
      },
      t = (g) => {
        const E = parseFloat(this.$input.value);
        isNaN(E) ||
          (this._snapClampSetValue(E + g),
          (this.$input.value = this.getValue()));
      },
      r = (g) => {
        g.code === "Enter" && this.$input.blur(),
          g.code === "ArrowUp" &&
            (g.preventDefault(), t(this._step * this._arrowKeyMultiplier(g))),
          g.code === "ArrowDown" &&
            (g.preventDefault(),
            t(this._step * this._arrowKeyMultiplier(g) * -1));
      },
      i = (g) => {
        this._inputFocused &&
          (g.preventDefault(), t(this._step * this._normalizeMouseWheel(g)));
      };
    let n = !1,
      o,
      a,
      c,
      _,
      u;
    const d = 5,
      h = (g) => {
        (o = g.clientX),
          (a = c = g.clientY),
          (n = !0),
          (_ = this.getValue()),
          (u = 0),
          window.addEventListener("mousemove", p),
          window.addEventListener("mouseup", v);
      },
      p = (g) => {
        if (n) {
          const E = g.clientX - o,
            y = g.clientY - a;
          Math.abs(y) > d
            ? (g.preventDefault(),
              this.$input.blur(),
              (n = !1),
              this._setDraggingStyle(!0, "vertical"))
            : Math.abs(E) > d && v();
        }
        if (!n) {
          const E = g.clientY - c;
          (u -= E * this._step * this._arrowKeyMultiplier(g)),
            _ + u > this._max
              ? (u = this._max - _)
              : _ + u < this._min && (u = this._min - _),
            this._snapClampSetValue(_ + u);
        }
        c = g.clientY;
      },
      v = () => {
        this._setDraggingStyle(!1, "vertical"),
          this._callOnFinishChange(),
          window.removeEventListener("mousemove", p),
          window.removeEventListener("mouseup", v);
      },
      f = () => {
        this._inputFocused = !0;
      },
      m = () => {
        (this._inputFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange();
      };
    this.$input.addEventListener("input", e),
      this.$input.addEventListener("keydown", r),
      this.$input.addEventListener("wheel", i, { passive: !1 }),
      this.$input.addEventListener("mousedown", h),
      this.$input.addEventListener("focus", f),
      this.$input.addEventListener("blur", m);
  }
  _initSlider() {
    (this._hasSlider = !0),
      (this.$slider = document.createElement("div")),
      this.$slider.classList.add("slider"),
      (this.$fill = document.createElement("div")),
      this.$fill.classList.add("fill"),
      this.$slider.appendChild(this.$fill),
      this.$widget.insertBefore(this.$slider, this.$input),
      this.domElement.classList.add("hasSlider");
    const e = (g, E, y, A, T) => ((g - E) / (y - E)) * (T - A) + A,
      t = (g) => {
        const E = this.$slider.getBoundingClientRect();
        let y = e(g, E.left, E.right, this._min, this._max);
        this._snapClampSetValue(y);
      },
      r = (g) => {
        this._setDraggingStyle(!0),
          t(g.clientX),
          window.addEventListener("mousemove", i),
          window.addEventListener("mouseup", n);
      },
      i = (g) => {
        t(g.clientX);
      },
      n = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("mousemove", i),
          window.removeEventListener("mouseup", n);
      };
    let o = !1,
      a,
      c;
    const _ = (g) => {
        g.preventDefault(),
          this._setDraggingStyle(!0),
          t(g.touches[0].clientX),
          (o = !1);
      },
      u = (g) => {
        g.touches.length > 1 ||
          (this._hasScrollBar
            ? ((a = g.touches[0].clientX), (c = g.touches[0].clientY), (o = !0))
            : _(g),
          window.addEventListener("touchmove", d, { passive: !1 }),
          window.addEventListener("touchend", h));
      },
      d = (g) => {
        if (o) {
          const E = g.touches[0].clientX - a,
            y = g.touches[0].clientY - c;
          Math.abs(E) > Math.abs(y)
            ? _(g)
            : (window.removeEventListener("touchmove", d),
              window.removeEventListener("touchend", h));
        } else g.preventDefault(), t(g.touches[0].clientX);
      },
      h = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("touchmove", d),
          window.removeEventListener("touchend", h);
      },
      p = this._callOnFinishChange.bind(this),
      v = 400;
    let f;
    const m = (g) => {
      if (Math.abs(g.deltaX) < Math.abs(g.deltaY) && this._hasScrollBar) return;
      g.preventDefault();
      const y = this._normalizeMouseWheel(g) * this._step;
      this._snapClampSetValue(this.getValue() + y),
        (this.$input.value = this.getValue()),
        clearTimeout(f),
        (f = setTimeout(p, v));
    };
    this.$slider.addEventListener("mousedown", r),
      this.$slider.addEventListener("touchstart", u, { passive: !1 }),
      this.$slider.addEventListener("wheel", m, { passive: !1 });
  }
  _setDraggingStyle(e, t = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", e),
      document.body.classList.toggle("lil-gui-dragging", e),
      document.body.classList.toggle(`lil-gui-${t}`, e);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider &&
      this._hasMin &&
      this._hasMax &&
      (this._stepExplicit || this.step(this._getImplicitStep(), !1),
      this._initSlider(),
      this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: t, deltaY: r } = e;
    return (
      Math.floor(e.deltaY) !== e.deltaY &&
        e.wheelDelta &&
        ((t = 0),
        (r = -e.wheelDelta / 120),
        (r *= this._stepExplicit ? 1 : 10)),
      t + -r
    );
  }
  _arrowKeyMultiplier(e) {
    let t = this._stepExplicit ? 1 : 10;
    return e.shiftKey ? (t *= 10) : e.altKey && (t /= 10), t;
  }
  _snap(e) {
    const t = Math.round(e / this._step) * this._step;
    return parseFloat(t.toPrecision(15));
  }
  _clamp(e) {
    return (
      e < this._min && (e = this._min), e > this._max && (e = this._max), e
    );
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== false;
  }
  get _hasMax() {
    return this._max !== false;
  }
}
class Hy extends Ci {
  constructor(e, t, r, i) {
    super(e, t, r, "option"),
      (this.$select = document.createElement("select")),
      this.$select.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      (this._values = Array.isArray(i) ? i : Object.values(i)),
      (this._names = Array.isArray(i) ? i : Object.keys(i)),
      this._names.forEach((n) => {
        const o = document.createElement("option");
        (o.innerHTML = n), this.$select.appendChild(o);
      }),
      this.$select.addEventListener("change", () => {
        this.setValue(this._values[this.$select.selectedIndex]),
          this._callOnFinishChange();
      }),
      this.$select.addEventListener("focus", () => {
        this.$display.classList.add("focus");
      }),
      this.$select.addEventListener("blur", () => {
        this.$display.classList.remove("focus");
      }),
      this.$widget.appendChild(this.$select),
      this.$widget.appendChild(this.$display),
      (this.$disable = this.$select),
      this.updateDisplay();
  }
  updateDisplay() {
    const e = this.getValue(),
      t = this._values.indexOf(e);
    return (
      (this.$select.selectedIndex = t),
      (this.$display.innerHTML = t === -1 ? e : this._names[t]),
      this
    );
  }
}
class Yy extends Ci {
  constructor(e, t, r) {
    super(e, t, r, "string"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$input.addEventListener("input", () => {
        this.setValue(this.$input.value);
      }),
      this.$input.addEventListener("keydown", (i) => {
        i.code === "Enter" && this.$input.blur();
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input),
      this.updateDisplay();
  }
  updateDisplay() {
    return (this.$input.value = this.getValue()), this;
  }
}
const jy = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function Xy(s) {
  const e = document.createElement("style");
  e.innerHTML = s;
  const t = document.querySelector("head link[rel=stylesheet], head style");
  t ? document.head.insertBefore(e, t) : document.head.appendChild(e);
}
let Sm = !1;
class ip {
  constructor({
    parent: e,
    autoPlace: t = e === false,
    container: r,
    width: i,
    title: n = "Controls",
    injectStyles: o = !0,
    touchStyles: a = !0,
  } = {}) {
    if (
      ((this.parent = e),
      (this.root = e ? e.root : this),
      (this.children = []),
      (this.controllers = []),
      (this.folders = []),
      (this._closed = !1),
      (this._hidden = !1),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("lil-gui"),
      (this.$title = document.createElement("div")),
      this.$title.classList.add("title"),
      this.$title.setAttribute("role", "button"),
      this.$title.setAttribute("aria-expanded", !0),
      this.$title.setAttribute("tabindex", 0),
      this.$title.addEventListener("click", () =>
        this.openAnimated(this._closed)
      ),
      this.$title.addEventListener("keydown", (c) => {
        (c.code === "Enter" || c.code === "Space") &&
          (c.preventDefault(), this.$title.click());
      }),
      this.$title.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$children = document.createElement("div")),
      this.$children.classList.add("children"),
      this.domElement.appendChild(this.$title),
      this.domElement.appendChild(this.$children),
      this.title(n),
      a && this.domElement.classList.add("allow-touch-styles"),
      this.parent)
    ) {
      this.parent.children.push(this),
        this.parent.folders.push(this),
        this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"),
      !Sm && o && (Xy(jy), (Sm = !0)),
      r
        ? r.appendChild(this.domElement)
        : t &&
          (this.domElement.classList.add("autoPlace"),
          document.body.appendChild(this.domElement)),
      i && this.domElement.style.setProperty("--width", i + "px"),
      this.domElement.addEventListener("keydown", (c) => c.stopPropagation()),
      this.domElement.addEventListener("keyup", (c) => c.stopPropagation());
  }
  add(e, t, r, i, n) {
    if (Object(r) === r) return new Hy(this, e, t, r);
    switch (typeof e[t]) {
      case "number":
        return new qy(this, e, t, r, i, n);
      case "boolean":
        return new By(this, e, t);
      case "string":
        return new Yy(this, e, t);
      case "function":
        return new vh(this, e, t);
    }
  }
  addColor(e, t, r = 1) {
    return new $y(this, e, t, r);
  }
  addFolder(e) {
    return new ip({ parent: this, title: e });
  }
  load(e, t = !0) {
    return (
      e.controllers &&
        this.controllers.forEach((r) => {
          r instanceof vh ||
            (r._name in e.controllers && r.load(e.controllers[r._name]));
        }),
      t &&
        e.folders &&
        this.folders.forEach((r) => {
          r._title in e.folders && r.load(e.folders[r._title]);
        }),
      this
    );
  }
  save(e = !0) {
    const t = { controllers: {}, folders: {} };
    return (
      this.controllers.forEach((r) => {
        if (!(r instanceof vh)) {
          if (r._name in t.controllers)
            throw new Error(
              `Cannot save GUI with duplicate property "${r._name}"`
            );
          t.controllers[r._name] = r.save();
        }
      }),
      e &&
        this.folders.forEach((r) => {
          if (r._title in t.folders)
            throw new Error(
              `Cannot save GUI with duplicate folder "${r._title}"`
            );
          t.folders[r._title] = r.save();
        }),
      t
    );
  }
  open(e = !0) {
    return (
      (this._closed = !e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      this.domElement.classList.toggle("closed", this._closed),
      this
    );
  }
  close() {
    return this.open(!1);
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  openAnimated(e = !0) {
    return (
      (this._closed = !e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      requestAnimationFrame(() => {
        const t = this.$children.clientHeight;
        (this.$children.style.height = t + "px"),
          this.domElement.classList.add("transition");
        const r = (n) => {
          n.target === this.$children &&
            ((this.$children.style.height = ""),
            this.domElement.classList.remove("transition"),
            this.$children.removeEventListener("transitionend", r));
        };
        this.$children.addEventListener("transitionend", r);
        const i = e ? this.$children.scrollHeight : 0;
        this.domElement.classList.toggle("closed", !e),
          requestAnimationFrame(() => {
            this.$children.style.height = i + "px";
          });
      }),
      this
    );
  }
  title(e) {
    return (this._title = e), (this.$title.innerHTML = e), this;
  }
  reset(e = !0) {
    return (
      (e ? this.controllersRecursive() : this.controllers).forEach((r) =>
        r.reset()
      ),
      this
    );
  }
  onChange(e) {
    return (this._onChange = e), this;
  }
  _callOnChange(e) {
    this.parent && this.parent._callOnChange(e),
      this._onChange !== false &&
        this._onChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        });
  }
  onFinishChange(e) {
    return (this._onFinishChange = e), this;
  }
  _callOnFinishChange(e) {
    this.parent && this.parent._callOnFinishChange(e),
      this._onFinishChange !== false &&
        this._onFinishChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        });
  }
  destroy() {
    this.parent &&
      (this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
      this.domElement.parentElement &&
        this.domElement.parentElement.removeChild(this.domElement),
      Array.from(this.children).forEach((e) => e.destroy());
  }
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.controllersRecursive());
      }),
      e
    );
  }
  foldersRecursive() {
    let e = Array.from(this.folders);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.foldersRecursive());
      }),
      e
    );
  }
}
var jc = function () {
  var s = 0,
    e = document.createElement("div");
  (e.style.cssText =
    "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
    e.addEventListener(
      "click",
      function (u) {
        u.preventDefault(), r(++s % e.children.length);
      },
      !1
    );
  function t(u) {
    return e.appendChild(u.dom), u;
  }
  function r(u) {
    for (var d = 0; d < e.children.length; d++)
      e.children[d].style.display = d === u ? "block" : "none";
    s = u;
  }
  var i = (performance || Date).now(),
    n = i,
    o = 0,
    a = t(new jc.Panel("FPS", "#0ff", "#002")),
    c = t(new jc.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory)
    var _ = t(new jc.Panel("MB", "#f08", "#201"));
  return (
    r(0),
    {
      REVISION: 16,
      dom: e,
      addPanel: t,
      showPanel: r,
      begin: function () {
        i = (performance || Date).now();
      },
      end: function () {
        o++;
        var u = (performance || Date).now();
        if (
          (c.update(u - i, 200),
          u > n + 1e3 &&
            (a.update((o * 1e3) / (u - n), 100), (n = u), (o = 0), _))
        ) {
          var d = performance.memory;
          _.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
        }
        return u;
      },
      update: function () {
        i = this.end();
      },
      domElement: e,
      setMode: r,
    }
  );
};
jc.Panel = function (s, e, t) {
  var r = 1 / 0,
    i = 0,
    n = Math.round,
    o = n(window.devicePixelRatio || 1),
    a = 80 * o,
    c = 48 * o,
    _ = 3 * o,
    u = 2 * o,
    d = 3 * o,
    h = 15 * o,
    p = 74 * o,
    v = 30 * o,
    f = document.createElement("canvas");
  (f.width = a), (f.height = c), (f.style.cssText = "width:80px;height:48px");
  var m = f.getContext("2d");
  return (
    (m.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif"),
    (m.textBaseline = "top"),
    (m.fillStyle = t),
    m.fillRect(0, 0, a, c),
    (m.fillStyle = e),
    m.fillText(s, _, u),
    m.fillRect(d, h, p, v),
    (m.fillStyle = t),
    (m.globalAlpha = 0.9),
    m.fillRect(d, h, p, v),
    {
      dom: f,
      update: function (g, E) {
        (r = Math.min(r, g)),
          (i = Math.max(i, g)),
          (m.fillStyle = t),
          (m.globalAlpha = 1),
          m.fillRect(0, 0, a, h),
          (m.fillStyle = e),
          m.fillText(n(g) + " " + s + " (" + n(r) + "-" + n(i) + ")", _, u),
          m.drawImage(f, d + o, h, p - o, v, d, h, p - o, v),
          m.fillRect(d + p - o, h, o, v),
          (m.fillStyle = t),
          (m.globalAlpha = 0.9),
          m.fillRect(d + p - o, h, o, n((1 - g / E) * v));
      },
    }
  );
};
function Wy(s, e, t, r, i, n) {
  const o = n[0] * t + n[4] * r + n[8] * i,
    a = n[1] * t + n[5] * r + n[9] * i,
    c = n[2] * t + n[6] * r + n[10] * i,
    _ = 1 / ur(o, a, c);
  (s[e] = o * _), (s[e + 1] = a * _), (s[e + 2] = c * _);
}
function Jy(s, e, t) {
  const r = e - s,
    i = t - s;
  return r === 0 ? 0 : i / r;
}
class pn {
  constructor(e = Number.NEGATIVE_INFINITY, t = Number.POSITIVE_INFINITY) {
    (this.min = e), (this.max = t), (this.onChanged = new ge());
  }
  set(e, t) {
    const r = this.min,
      i = this.max;
    (e === r && t === i) ||
      ((this.min = e),
      (this.max = t),
      this.onChanged.hasHandlers() && this.onChanged.send4(e, t, r, i));
  }
  multiplyScalar(e) {
    const t = this.min * e,
      r = this.max * e;
    t > r ? this.set(r, t) : this.set(t, r);
  }
  normalizeValue(e) {
    return Jy(this.min, this.max, e);
  }
  isZero() {
    return this.min === 0 && this.max === 0;
  }
  isExact() {
    return this.min === this.max;
  }
  computeAverage() {
    return (this.min + this.max) * 0.5;
  }
  sampleRandom(e) {
    return this.min + e() * (this.max - this.min);
  }
  fromJSON(e) {
    this.set(e.min, e.max);
  }
  toJSON() {
    return { min: this.min, max: this.max };
  }
  toString() {
    return `NumericInterval{ min=${this.min}, max=${this.max} }`;
  }
  toBinaryBuffer(e) {
    e.writeFloat64(this.min), e.writeFloat64(this.max);
  }
  fromBinaryBuffer(e) {
    (this.min = e.readFloat64()), (this.max = e.readFloat64());
  }
  copy(e) {
    this.set(e.min, e.max);
  }
  equals(e) {
    return this.min === e.min && this.max === e.max;
  }
  hash() {
    let e = xt(this.min);
    return (e = (e << 5) - e + xt(this.max)), e;
  }
  get span() {
    return this.max - this.min;
  }
}
pn.prototype.isNumericInterval = !0;
pn.zero_zero = Object.freeze(new pn(0, 0));
pn.zero_one = Object.freeze(new pn(0, 1));
pn.one_one = Object.freeze(new pn(1, 1));
const Zy = typeof performance > "u" ? Date : performance;
function Bo() {
  return Zy.now() * 0.001;
}
const tu = { KeyUp: "keyup", KeyDown: "keydown" };
class E0 {
  constructor() {
    x(this, "down", new ge());
    x(this, "up", new ge());
    x(this, "is_down", !1);
  }
  press() {
    this.is_down || ((this.is_down = !0), this.down.send0());
  }
  release() {
    this.is_down && ((this.is_down = !1), this.up.send0());
  }
}
function Xo(s, e) {
  return e === false || e === null || typeof e != "object"
    ? !1
    : s instanceof e;
}
function Ky(s) {
  return (
    Xo(s, HTMLInputElement) ||
    Xo(s, HTMLSelectElement) ||
    Xo(s, HTMLTextAreaElement) ||
    Xo(s, HTMLAnchorElement) ||
    Xo(s, HTMLButtonElement) ||
    Xo(s, HTMLAreaElement)
  );
}
const zm = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pause_break: 19,
    caps_lock: 20,
    escape: 27,
    space: 32,
    page_up: 33,
    page_down: 34,
    end: 35,
    home: 36,
    left_arrow: 37,
    up_arrow: 38,
    right_arrow: 39,
    down_arrow: 40,
    insert: 45,
    delete: 46,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    "left_window key": 91,
    "right_window key": 92,
    select_key: 93,
    numpad_0: 96,
    numpad_1: 97,
    numpad_2: 98,
    numpad_3: 99,
    numpad_4: 100,
    numpad_5: 101,
    numpad_6: 102,
    numpad_7: 103,
    numpad_8: 104,
    numpad_9: 105,
    multiply: 106,
    add: 107,
    subtract: 109,
    decimal_point: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    num_lock: 144,
    scroll_lock: 145,
    semi_colon: 186,
    equal_sign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forward_slash: 191,
    grave_accent: 192,
    open_bracket: 219,
    backslash: 220,
    close_bracket: 221,
    single_quote: 222,
    back_quote: 223,
  },
  xh = [];
var _l, ul;
class Qy {
  constructor(e) {
    x(this, "on", { down: new ge(), up: new ge() });
    x(this, "keys", {});
    b(this, _l, (e) => {
      if (e.repeat) return;
      this.on.down.send1(e);
      let t = !1;
      const r = e.keyCode,
        i = xh[r];
      if (i !== false) {
        const n = this.keys[i];
        n.press(), n.down.hasHandlers() && (t = !0);
      }
      t && e.preventDefault();
    });
    b(this, ul, (e) => {
      this.on.up.send1(e);
      let t = !1;
      const r = e.keyCode,
        i = xh[r];
      if (i !== false) {
        const n = this.keys[i];
        n.release(), n.down.hasHandlers() && (t = !0);
      }
      t && e.preventDefault();
    });
    !Ky(e) && e.getAttribute("tabindex"), (this.domElement = e);
    for (let t in zm) {
      const r = zm[t];
      (xh[r] = t), (this.keys[t] = new E0());
    }
  }
  start() {
    this.domElement.addEventListener(tu.KeyDown, getProperty(this, _l)),
      this.domElement.addEventListener(tu.KeyUp, getProperty(this, ul));
  }
  stop() {
    this.domElement.removeEventListener(tu.KeyDown, getProperty(this, _l)),
      this.domElement.removeEventListener(tu.KeyUp, getProperty(this, ul));
  }
}
(_l = new WeakMap()), (ul = new WeakMap());
function A0(s, e) {
  return s * s + e * e;
}
function S0(s, e) {
  return Math.sqrt(A0(s, e));
}
function e3(s, e, t, r) {
  return S0(t - s, r - e);
}
function t3(s, e, t, r) {
  return s * t + e * r;
}
class Be {
  constructor(e = 0, t = 0) {
    (this.x = e), (this.y = t), (this.onChanged = new ge());
  }
  fromArray(e, t = 0) {
    this.set(e[t], e[t + 1]);
  }
  toArray(e, t = 0) {
    (e[t] = this.x), (e[t + 1] = this.y);
  }
  asArray() {
    const e = [];
    return this.writeToArray(e, 0), e;
  }
  set(e, t) {
    const r = this.x,
      i = this.y;
    return (
      (r !== e || i !== t) &&
        ((this.x = e),
        (this.y = t),
        this.onChanged.hasHandlers() && this.onChanged.send4(e, t, r, i)),
      this
    );
  }
  setSilent(e, t) {
    (this.x = e), (this.y = t);
  }
  setX(e) {
    return this.set(e, this.y);
  }
  setY(e) {
    return this.set(this.x, e);
  }
  _sub(e, t) {
    return this.set(this.x - e, this.y - t);
  }
  sub(e) {
    return this._sub(e.x, e.y);
  }
  subVectors(e, t) {
    this.set(e.x - t.x, e.y - t.y);
  }
  floor() {
    return this.set(Math.floor(this.x), Math.floor(this.y));
  }
  ceil() {
    return this.set(Math.ceil(this.x), Math.ceil(this.y));
  }
  round() {
    const e = Math.round(this.x),
      t = Math.round(this.y);
    this.set(e, t);
  }
  abs() {
    return this.set(Math.abs(this.x), Math.abs(this.y));
  }
  _mod(e, t) {
    return this.set(this.x % e, this.y % t);
  }
  mod(e) {
    return this._mod(e.x, e.y);
  }
  divide(e) {
    return this.set(this.x / e.x, this.y / e.y);
  }
  multiply(e) {
    return this._multiply(e.x, e.y);
  }
  _multiply(e, t) {
    return this.set(this.x * e, this.y * t);
  }
  max(e) {
    const t = ne(this.x, e.x),
      r = ne(this.y, e.y);
    return this.set(t, r);
  }
  dot(e) {
    return t3(this.x, this.y, e.x, e.y);
  }
  copy(e) {
    return this.set(e.x, e.y);
  }
  clone() {
    return new Be(this.x, this.y);
  }
  negate() {
    return this.set(-this.x, -this.y);
  }
  _add(e, t) {
    return this.set(this.x + e, this.y + t);
  }
  add(e) {
    return this._add(e.x, e.y);
  }
  addScalar(e) {
    return this._add(e, e);
  }
  setScalar(e) {
    this.set(e, e);
  }
  divideScalar(e) {
    this.multiplyScalar(1 / e);
  }
  multiplyScalar(e) {
    return this.set(this.x * e, this.y * e);
  }
  toJSON() {
    return { x: this.x, y: this.y };
  }
  fromJSON(e) {
    if (typeof e == "number") this.set(e, e);
    else {
      const { x: t = 0, y: r = 0 } = e;
      this.set(t, r);
    }
  }
  toBinaryBuffer(e) {
    e.writeFloat64(this.x), e.writeFloat64(this.y);
  }
  fromBinaryBuffer(e) {
    const t = e.readFloat64(),
      r = e.readFloat64();
    this.set(t, r);
  }
  toBinaryBufferFloat32(e) {
    e.writeFloat32(this.x), e.writeFloat32(this.y);
  }
  fromBinaryBufferFloat32(e) {
    const t = e.readFloat32(),
      r = e.readFloat32();
    this.set(t, r);
  }
  isZero() {
    return this.x === 0 && this.y === 0;
  }
  clamp(e, t, r, i) {
    const n = Ye(this.x, e, r),
      o = Ye(this.y, t, i);
    return this.set(n, o);
  }
  clampLow(e, t) {
    const r = ne(this.x, e),
      i = ne(this.y, t);
    return this.set(r, i);
  }
  clampHigh(e, t) {
    const r = ke(this.x, e),
      i = ke(this.y, t);
    return this.set(r, i);
  }
  distanceSqrTo(e) {
    return this._distanceSqrTo(e.x, e.y);
  }
  _distanceSqrTo(e, t) {
    const r = this.x - e,
      i = this.y - t;
    return A0(r, i);
  }
  lerpVectors(e, t, r) {
    const i = We(e.x, t.x, r),
      n = We(e.y, t.y, r);
    this.set(i, n);
  }
  applyMatrix3(e) {
    const t = this.x,
      r = this.y,
      i = e[0] * t + e[3] * r + e[6],
      n = e[1] * t + e[4] * r + e[7];
    this.set(i, n);
  }
  distanceTo(e) {
    return this._distanceTo(e.x, e.y);
  }
  _distanceTo(e, t) {
    return Math.sqrt(this._distanceSqrTo(e, t));
  }
  manhattanDistanceTo(e) {
    const t = Math.abs(this.x - e.x),
      r = Math.abs(this.y - e.y);
    return t + r;
  }
  length() {
    return S0(this.x, this.y);
  }
  normalize() {
    const e = this.length();
    if (e === 0) return;
    const t = 1 / e;
    this.multiplyScalar(t);
  }
  hash() {
    const e = xt(this.x),
      t = xt(this.y);
    return (e << 5) - e + t;
  }
  rotate(e) {
    const t = Math.sin(e),
      r = Math.cos(e),
      i = this.x,
      n = this.y,
      o = i * r - n * t,
      a = i * t + n * r;
    this.set(o, a);
  }
  process(e, t) {
    return e.call(t, this.x, this.y), this.onChanged.add(e, t), this;
  }
  toString() {
    return `Vector2{ x:${this.x}, y:${this.y} }`;
  }
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  roughlyEquals(e, t) {
    return this._roughlyEquals(e.x, e.y, t);
  }
  _roughlyEquals(e, t, r = Nn) {
    return Ai(this.x, e, r) && Ai(this.y, t, r);
  }
  get 0() {
    return this.x;
  }
  get 1() {
    return this.y;
  }
  set 0(e) {
    this.x = e;
  }
  set 1(e) {
    this.y = e;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
Be.up = Object.freeze(new Be(0, 1));
Be.down = Object.freeze(new Be(0, -1));
Be.left = Object.freeze(new Be(-1, 0));
Be.right = Object.freeze(new Be(1, 0));
Be.zero = Object.freeze(new Be(0, 0));
Be.one = Object.freeze(new Be(1, 1));
Be.prototype.isVector2 = !0;
Be._distance = e3;
Be.prototype.writeToArray = Be.prototype.toArray;
Be.prototype.readFromArray = Be.prototype.fromArray;
const Cm = {
    Down: "mousedown",
    Up: "mouseup",
    Move: "mousemove",
    Enter: "mouseenter",
    Leave: "mouseleave",
    Out: "mouseout",
    Over: "mouseover",
    Wheel: "wheel",
    Click: "click",
    DoubleClick: "dblclick",
  },
  As = {
    Up: "pointerup",
    Down: "pointerdown",
    Move: "pointermove",
    Over: "pointerover",
    Out: "pointerout",
    Enter: "pointerenter",
    Leave: "pointerleave",
    Cancel: "pointercancel",
    GotCapture: "gotpointercapture",
    LostCapture: "lostpointercapture",
  };
class sp {
  constructor() {
    x(this, "timestamp", Bo());
    x(this, "position", new Be());
  }
  static from(e) {
    const t = new sp();
    return t.position.copy(e), t;
  }
}
function Um(s) {
  return s.preventDefault(), s.stopPropagation(), !1;
}
function r3({
  up: s,
  down: e,
  move: t = new ge(),
  maxDistance: r = 10,
  maxDelay: i = 1,
  signal: n,
}) {
  const o = new Map();
  function a(d) {
    o.delete(d) && (s.remove(c), t.remove(_));
  }
  function c(d, h) {
    const p = h.pointerId,
      v = o.get(p);
    v === false || (a(p), Bo() - v.timestamp > i) || n.send2(d, h);
  }
  function _(d, h) {
    const p = h.pointerId,
      v = o.get(p);
    if (v === false) {
      a(p);
      return;
    }
    v.position.distanceTo(d) > r && a(p);
  }
  function u(d, h) {
    const p = h.pointerId;
    a(p), o.set(p, sp.from(d)), s.addOne(c), t.add(_);
  }
  e.add(u);
}
function i3(s, e, t, r, i, n) {
  const o = new Be();
  function a(p) {
    s.remove(a), t.remove(_);
  }
  function c(p) {
    s.remove(c), t.remove(d), i.send1(p);
  }
  function _(p, v) {
    t.remove(_),
      t.add(d),
      s.remove(a),
      s.add(c),
      u.copy(o),
      r.send2(o, v),
      d(p, v);
  }
  const u = new Be();
  function d(p, v) {
    n.send4(p, o, u, v), u.copy(p);
  }
  function h(p) {
    o.copy(p), s.add(a), t.add(_);
  }
  e.add(h);
}
function s3(s, e, t = e.target) {
  let r = e.clientX,
    i = e.clientY;
  if (typeof t.getBoundingClientRect == "function") {
    const n = t.getBoundingClientRect();
    (i -= n.top), (r -= n.left);
  }
  s.set(r, i);
}
var dl, hl, Ms, fl, pl, ml, gl, vl;
class n3 {
  constructor(e) {
    x(this, "position", new Be());
    b(this, dl, new ge());
    x(this, "on", {
      down: new ge(),
      up: new ge(),
      move: new ge(),
      tap: new ge(),
      drag: new ge(),
      dragStart: new ge(),
      dragEnd: new ge(),
      wheel: new ge(),
      pinch: new ge(),
      pinchStart: new ge(),
      pinchEnd: new ge(),
    });
    b(this, hl, null);
    b(this, Ms, null);
    x(this, "isRunning", !1);
    x(this, "buttons", new Array(32));
    b(this, fl, (e) => {
      this.readPointerPositionFromEvent(this.position, e),
        this.on.down.send2(this.position, e);
      const t = e.button,
        r = this.buttons[t];
      r == null || r.press();
    });
    b(this, pl, (e) => {
      this.readPointerPositionFromEvent(this.position, e),
        this.on.up.send2(this.position, e);
    });
    b(this, ml, (e) => {
      this.readPointerPositionFromEvent(this.position, e),
        getProperty(this, dl).send2(this.position, e);
      const t = e.button,
        r = this.buttons[t];
      r == null || r.release();
    });
    b(this, gl, (e) => {
      e.preventDefault();
      const t = aa(e.deltaX),
        r = aa(e.deltaY),
        i = aa(e.deltaZ),
        n = new Z(t, r, i);
      this.readPointerPositionFromEvent(this.position, e),
        this.on.wheel.send3(n, this.position, e);
    });
    b(this, vl, (e) => {
      e.preventDefault(),
        S(this, hl, e.target),
        this.readPointerPositionFromEvent(this.position, e),
        this.on.move.send3(this.position, e, new Be(e.movementX, e.movementY));
    });
    for (let t = 0; t < this.buttons.length; t++) this.buttons[t] = new E0();
    S(this, Ms, e),
      r3({
        up: this.on.up,
        down: this.on.down,
        move: this.on.move,
        maxDistance: 10,
        signal: this.on.tap,
      }),
      i3(
        getProperty(this, dl),
        this.on.down,
        this.on.move,
        this.on.dragStart,
        this.on.dragEnd,
        this.on.drag
      );
  }
  get mouseButtonLeft() {
    return this.buttons[0];
  }
  get mouseButtonRight() {
    return this.buttons[2];
  }
  get mouseButtonMiddle() {
    return this.buttons[1];
  }
  getTargetElement() {
    return getProperty(this, hl);
  }
  set domElement(e) {
    if (getProperty(this, Ms) === e) return;
    let t = this.isRunning;
    t && this.stop(), S(this, Ms, e), t && this.start();
  }
  get domElement() {
    return getProperty(this, Ms);
  }
  readPointerPositionFromEvent(e, t) {
    s3(e, t, this.domElement);
  }
  start() {
    if (this.isRunning) return;
    this.isRunning = !0;
    const e = getProperty(this, Ms);
    e.addEventListener(As.Move, getProperty(this, vl)),
      e.addEventListener(As.Up, getProperty(this, pl)),
      e.addEventListener(As.Down, getProperty(this, fl)),
      window.addEventListener(As.Up, getProperty(this, ml)),
      e.addEventListener(Cm.Wheel, getProperty(this, gl), { passive: !1 }),
      e.addEventListener("contextmenu", Um);
  }
  stop() {
    if (!this.isRunning) return;
    this.isRunning = !1;
    const e = this.domElement;
    e.removeEventListener(As.Move, getProperty(this, vl)),
      e.removeEventListener(As.Up, getProperty(this, pl)),
      e.removeEventListener(As.Down, getProperty(this, fl)),
      window.removeEventListener(As.Up, getProperty(this, ml)),
      e.removeEventListener(Cm.Wheel, getProperty(this, gl)),
      e.removeEventListener("contextmenu", Um);
  }
}
(dl = new WeakMap()),
  (hl = new WeakMap()),
  (Ms = new WeakMap()),
  (fl = new WeakMap()),
  (pl = new WeakMap()),
  (ml = new WeakMap()),
  (gl = new WeakMap()),
  (vl = new WeakMap());
var bh = 1e-6,
  mn = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot ||
  (Math.hypot = function () {
    for (var s = 0, e = arguments.length; e--; )
      s += arguments[e] * arguments[e];
    return Math.sqrt(s);
  });
function Si() {
  var s = new mn(16);
  return (
    mn != Float32Array &&
      ((s[1] = 0),
      (s[2] = 0),
      (s[3] = 0),
      (s[4] = 0),
      (s[6] = 0),
      (s[7] = 0),
      (s[8] = 0),
      (s[9] = 0),
      (s[11] = 0),
      (s[12] = 0),
      (s[13] = 0),
      (s[14] = 0)),
    (s[0] = 1),
    (s[5] = 1),
    (s[10] = 1),
    (s[15] = 1),
    s
  );
}
function Im(s) {
  var e = new mn(16);
  return (
    (e[0] = s[0]),
    (e[1] = s[1]),
    (e[2] = s[2]),
    (e[3] = s[3]),
    (e[4] = s[4]),
    (e[5] = s[5]),
    (e[6] = s[6]),
    (e[7] = s[7]),
    (e[8] = s[8]),
    (e[9] = s[9]),
    (e[10] = s[10]),
    (e[11] = s[11]),
    (e[12] = s[12]),
    (e[13] = s[13]),
    (e[14] = s[14]),
    (e[15] = s[15]),
    e
  );
}
function o3(s) {
  return (
    (s[0] = 1),
    (s[1] = 0),
    (s[2] = 0),
    (s[3] = 0),
    (s[4] = 0),
    (s[5] = 1),
    (s[6] = 0),
    (s[7] = 0),
    (s[8] = 0),
    (s[9] = 0),
    (s[10] = 1),
    (s[11] = 0),
    (s[12] = 0),
    (s[13] = 0),
    (s[14] = 0),
    (s[15] = 1),
    s
  );
}
function a3(s, e) {
  if (s === e) {
    var t = e[1],
      r = e[2],
      i = e[3],
      n = e[6],
      o = e[7],
      a = e[11];
    (s[1] = e[4]),
      (s[2] = e[8]),
      (s[3] = e[12]),
      (s[4] = t),
      (s[6] = e[9]),
      (s[7] = e[13]),
      (s[8] = r),
      (s[9] = n),
      (s[11] = e[14]),
      (s[12] = i),
      (s[13] = o),
      (s[14] = a);
  } else
    (s[0] = e[0]),
      (s[1] = e[4]),
      (s[2] = e[8]),
      (s[3] = e[12]),
      (s[4] = e[1]),
      (s[5] = e[5]),
      (s[6] = e[9]),
      (s[7] = e[13]),
      (s[8] = e[2]),
      (s[9] = e[6]),
      (s[10] = e[10]),
      (s[11] = e[14]),
      (s[12] = e[3]),
      (s[13] = e[7]),
      (s[14] = e[11]),
      (s[15] = e[15]);
  return s;
}
function c3(s, e) {
  var t = e[0],
    r = e[1],
    i = e[2],
    n = e[3],
    o = e[4],
    a = e[5],
    c = e[6],
    _ = e[7],
    u = e[8],
    d = e[9],
    h = e[10],
    p = e[11],
    v = e[12],
    f = e[13],
    m = e[14],
    g = e[15],
    E = t * a - r * o,
    y = t * c - i * o,
    A = t * _ - n * o,
    T = r * c - i * a,
    z = r * _ - n * a,
    C = i * _ - n * c,
    U = u * f - d * v,
    k = u * m - h * v,
    N = u * g - p * v,
    M = d * m - h * f,
    I = d * g - p * f,
    L = h * g - p * m,
    F = E * L - y * I + A * M + T * N - z * k + C * U;
  return F
    ? ((F = 1 / F),
      (s[0] = (a * L - c * I + _ * M) * F),
      (s[1] = (i * I - r * L - n * M) * F),
      (s[2] = (f * C - m * z + g * T) * F),
      (s[3] = (h * z - d * C - p * T) * F),
      (s[4] = (c * N - o * L - _ * k) * F),
      (s[5] = (t * L - i * N + n * k) * F),
      (s[6] = (m * A - v * C - g * y) * F),
      (s[7] = (u * C - h * A + p * y) * F),
      (s[8] = (o * I - a * N + _ * U) * F),
      (s[9] = (r * N - t * I - n * U) * F),
      (s[10] = (v * z - f * A + g * E) * F),
      (s[11] = (d * A - u * z - p * E) * F),
      (s[12] = (a * k - o * M - c * U) * F),
      (s[13] = (t * M - r * k + i * U) * F),
      (s[14] = (f * y - v * T - m * E) * F),
      (s[15] = (u * T - d * y + h * E) * F),
      s)
    : null;
}
function z0(s, e, t) {
  var r = e[0],
    i = e[1],
    n = e[2],
    o = e[3],
    a = e[4],
    c = e[5],
    _ = e[6],
    u = e[7],
    d = e[8],
    h = e[9],
    p = e[10],
    v = e[11],
    f = e[12],
    m = e[13],
    g = e[14],
    E = e[15],
    y = t[0],
    A = t[1],
    T = t[2],
    z = t[3];
  return (
    (s[0] = y * r + A * a + T * d + z * f),
    (s[1] = y * i + A * c + T * h + z * m),
    (s[2] = y * n + A * _ + T * p + z * g),
    (s[3] = y * o + A * u + T * v + z * E),
    (y = t[4]),
    (A = t[5]),
    (T = t[6]),
    (z = t[7]),
    (s[4] = y * r + A * a + T * d + z * f),
    (s[5] = y * i + A * c + T * h + z * m),
    (s[6] = y * n + A * _ + T * p + z * g),
    (s[7] = y * o + A * u + T * v + z * E),
    (y = t[8]),
    (A = t[9]),
    (T = t[10]),
    (z = t[11]),
    (s[8] = y * r + A * a + T * d + z * f),
    (s[9] = y * i + A * c + T * h + z * m),
    (s[10] = y * n + A * _ + T * p + z * g),
    (s[11] = y * o + A * u + T * v + z * E),
    (y = t[12]),
    (A = t[13]),
    (T = t[14]),
    (z = t[15]),
    (s[12] = y * r + A * a + T * d + z * f),
    (s[13] = y * i + A * c + T * h + z * m),
    (s[14] = y * n + A * _ + T * p + z * g),
    (s[15] = y * o + A * u + T * v + z * E),
    s
  );
}
function l3(s, e, t, r) {
  var i = e[0],
    n = e[1],
    o = e[2],
    a = e[3],
    c = i + i,
    _ = n + n,
    u = o + o,
    d = i * c,
    h = i * _,
    p = i * u,
    v = n * _,
    f = n * u,
    m = o * u,
    g = a * c,
    E = a * _,
    y = a * u,
    A = r[0],
    T = r[1],
    z = r[2];
  return (
    (s[0] = (1 - (v + m)) * A),
    (s[1] = (h + y) * A),
    (s[2] = (p - E) * A),
    (s[3] = 0),
    (s[4] = (h - y) * T),
    (s[5] = (1 - (d + m)) * T),
    (s[6] = (f + g) * T),
    (s[7] = 0),
    (s[8] = (p + E) * z),
    (s[9] = (f - g) * z),
    (s[10] = (1 - (d + v)) * z),
    (s[11] = 0),
    (s[12] = t[0]),
    (s[13] = t[1]),
    (s[14] = t[2]),
    (s[15] = 1),
    s
  );
}
function _3(s, e, t, r, i) {
  var n = 1 / Math.tan(e / 2),
    o;
  return (
    (s[0] = n / t),
    (s[1] = 0),
    (s[2] = 0),
    (s[3] = 0),
    (s[4] = 0),
    (s[5] = n),
    (s[6] = 0),
    (s[7] = 0),
    (s[8] = 0),
    (s[9] = 0),
    (s[11] = -1),
    (s[12] = 0),
    (s[13] = 0),
    (s[15] = 0),
    i != null && i !== 1 / 0
      ? ((o = 1 / (r - i)), (s[10] = i * o), (s[14] = i * r * o))
      : ((s[10] = -1), (s[14] = -r)),
    s
  );
}
function u3(s, e, t, r) {
  var i,
    n,
    o,
    a,
    c,
    _,
    u,
    d,
    h,
    p,
    v = e[0],
    f = e[1],
    m = e[2],
    g = r[0],
    E = r[1],
    y = r[2],
    A = t[0],
    T = t[1],
    z = t[2];
  return Math.abs(v - A) < bh && Math.abs(f - T) < bh && Math.abs(m - z) < bh
    ? o3(s)
    : ((u = v - A),
      (d = f - T),
      (h = m - z),
      (p = 1 / Math.hypot(u, d, h)),
      (u *= p),
      (d *= p),
      (h *= p),
      (i = E * h - y * d),
      (n = y * u - g * h),
      (o = g * d - E * u),
      (p = Math.hypot(i, n, o)),
      p
        ? ((p = 1 / p), (i *= p), (n *= p), (o *= p))
        : ((i = 0), (n = 0), (o = 0)),
      (a = d * o - h * n),
      (c = h * i - u * o),
      (_ = u * n - d * i),
      (p = Math.hypot(a, c, _)),
      p
        ? ((p = 1 / p), (a *= p), (c *= p), (_ *= p))
        : ((a = 0), (c = 0), (_ = 0)),
      (s[0] = i),
      (s[1] = a),
      (s[2] = u),
      (s[3] = 0),
      (s[4] = n),
      (s[5] = c),
      (s[6] = d),
      (s[7] = 0),
      (s[8] = o),
      (s[9] = _),
      (s[10] = h),
      (s[11] = 0),
      (s[12] = -(i * v + n * f + o * m)),
      (s[13] = -(a * v + c * f + _ * m)),
      (s[14] = -(u * v + d * f + h * m)),
      (s[15] = 1),
      s);
}
function d3() {
  var s = new mn(3);
  return mn != Float32Array && ((s[0] = 0), (s[1] = 0), (s[2] = 0)), s;
}
function gu(s, e, t) {
  var r = new mn(3);
  return (r[0] = s), (r[1] = e), (r[2] = t), r;
}
function Nm(s, e) {
  return (s[0] = e[0]), (s[1] = e[1]), (s[2] = e[2]), s;
}
function Mm(s, e, t, r) {
  return (s[0] = e), (s[1] = t), (s[2] = r), s;
}
function km(s, e, t) {
  return (
    (s[0] = Math.min(e[0], t[0])),
    (s[1] = Math.min(e[1], t[1])),
    (s[2] = Math.min(e[2], t[2])),
    s
  );
}
function Rm(s, e, t) {
  return (
    (s[0] = Math.max(e[0], t[0])),
    (s[1] = Math.max(e[1], t[1])),
    (s[2] = Math.max(e[2], t[2])),
    s
  );
}
function h3(s, e) {
  var t = e[0] - s[0],
    r = e[1] - s[1],
    i = e[2] - s[2];
  return Math.hypot(t, r, i);
}
function f3(s, e, t) {
  var r = e[0],
    i = e[1],
    n = e[2],
    o = t[3] * r + t[7] * i + t[11] * n + t[15];
  return (
    (o = o || 1),
    (s[0] = (t[0] * r + t[4] * i + t[8] * n + t[12]) / o),
    (s[1] = (t[1] * r + t[5] * i + t[9] * n + t[13]) / o),
    (s[2] = (t[2] * r + t[6] * i + t[10] * n + t[14]) / o),
    s
  );
}
(function () {
  var s = d3();
  return function (e, t, r, i, n, o) {
    var a, c;
    for (
      t || (t = 3),
        r || (r = 0),
        i ? (c = Math.min(i * t + r, e.length)) : (c = e.length),
        a = r;
      a < c;
      a += t
    )
      (s[0] = e[a]),
        (s[1] = e[a + 1]),
        (s[2] = e[a + 2]),
        n(s, s, o),
        (e[a] = s[0]),
        (e[a + 1] = s[1]),
        (e[a + 2] = s[2]);
    return e;
  };
})();
function C0() {
  var s = new mn(2);
  return mn != Float32Array && ((s[0] = 0), (s[1] = 0)), s;
}
(function () {
  var s = C0();
  return function (e, t, r, i, n, o) {
    var a, c;
    for (
      t || (t = 2),
        r || (r = 0),
        i ? (c = Math.min(i * t + r, e.length)) : (c = e.length),
        a = r;
      a < c;
      a += t
    )
      (s[0] = e[a]),
        (s[1] = e[a + 1]),
        n(s, s, o),
        (e[a] = s[0]),
        (e[a + 1] = s[1]);
    return e;
  };
})();
var pa, xl, ki, U0, I0, N0, M0;
class p3 {
  constructor(e, t) {
    b(this, ki);
    x(this, "pointer", new n3(null));
    x(this, "keyboard", new Qy(document.body));
    x(this, "camera");
    x(this, "rotation_delta", C0());
    x(this, "pan_offset", new Z());
    x(this, "spherical", gu(0, 0, 0));
    x(this, "distanceLimits", new pn(0.1, 1e3));
    x(this, "distance", 1);
    x(this, "distance_delta", 0);
    x(this, "target", new Z());
    b(this, pa, new Mo());
    b(this, xl, 0);
    (this.camera = e),
      (this.pointer.domElement = t),
      this.pointer.start(),
      (this.keyboard.domElement = t),
      this.keyboard.start(),
      P(this, ki, U0).call(this, e.transform),
      this.pointer.on.drag.add((r, i, n, o) => {
        const a = n.clone().sub(r),
          c = (Math.PI * 2) / t.clientHeight;
        this.pointer.mouseButtonRight.is_down
          ? this.pan(a.x, a.y)
          : ((this.rotation_delta[1] += a.x * c),
            (this.rotation_delta[0] += a.y * c));
      }),
      this.pointer.on.wheel.add((r) => {
        const i = $t(this.distanceLimits.normalizeValue(this.distance));
        let n = r.x;
        Math.abs(r.y) > Math.abs(n) && (n = r.y),
          Math.abs(r.z) > Math.abs(n) && (n = r.z),
          (this.distance_delta +=
            n * 0.01 * We(this.distanceLimits.min, this.distanceLimits.max, i));
      });
  }
  look(e, t) {
    this.target.copy(t), (this.distance = e.distanceTo(t));
    const r = e.x - t.x,
      i = e.y - t.y,
      n = e.z - t.z,
      o = this.distance;
    let a = 0,
      c = 0;
    o !== 0 && ((a = Math.atan2(r, n)), (c = Math.acos(Ye(i / o, -1, 1)))),
      (this.spherical[0] = c),
      (this.spherical[1] = a),
      (this.spherical[2] = o),
      getProperty(this, pa).copy(this.camera.transform);
  }
  pan(e, t) {
    const r = this.camera.transform.position,
      i = new Z();
    i.copy(r), i.sub(this.target);
    let n = i.length();
    n *= Math.tan(this.camera.fov / 2);
    const o = this.pointer.domElement;
    P(this, ki, I0).call(
      this,
      (2 * e * n) / o.clientHeight,
      this.camera.transform.matrix
    ),
      P(this, ki, N0).call(
        this,
        (2 * t * n) / o.clientHeight,
        this.camera.transform.matrix
      );
  }
  update() {
    const e = Bo(),
      t = e - getProperty(this, xl);
    P(this, ki, M0).call(this, t), S(this, xl, e);
    const r = this.camera.transform;
    if (getProperty(this, pa).equals(r)) {
      (this.spherical[0] += this.rotation_delta[0]),
        (this.spherical[1] += this.rotation_delta[1]);
      const i = 1e-6;
      this.spherical[0] = Math.max(i, Math.min(Math.PI - i, this.spherical[0]));
      const n = this.spherical[0],
        o = this.spherical[1],
        a = this.distance,
        c = Math.sin(n) * a,
        _ = new Z(c * Math.sin(o), Math.cos(n) * a, c * Math.cos(o)),
        u = $e.identity.clone();
      u.fromUnitVectors(Z.up, Z.up),
        u.invert(),
        _.applyQuaternion(u),
        this.target.add(this.pan_offset),
        r.position.copy(this.target),
        r.position.add(_),
        r.lookAt(this.target),
        (this.distance += this.distance_delta),
        (this.distance = Ye(
          this.distance,
          this.distanceLimits.min,
          this.distanceLimits.max
        ));
    } else {
      const i = new Z();
      i.copy(r.forward),
        i.multiplyScalar(-this.distance),
        i.add(r.position),
        this.look(r.position, i);
    }
    (this.rotation_delta[0] = 0),
      (this.rotation_delta[1] = 0),
      (this.distance_delta = 0),
      this.pan_offset.set(0, 0, 0),
      getProperty(this, pa).copy(r);
  }
}
(pa = new WeakMap()),
  (xl = new WeakMap()),
  (ki = new WeakSet()),
  (U0 = function (e) {
    const t = new Z();
    t.copy(e.forward),
      t.multiplyScalar(this.distance),
      t.add(e.position),
      this.look(e.position, t);
  }),
  (I0 = function (e, t) {
    (this.pan_offset[0] -= e * t[0]),
      (this.pan_offset[1] -= e * t[1]),
      (this.pan_offset[2] -= e * t[2]);
  }),
  (N0 = function (e, t) {
    (this.pan_offset[0] -= e * t[4]),
      (this.pan_offset[1] -= e * t[5]),
      (this.pan_offset[2] -= e * t[6]);
  }),
  (M0 = function (e) {
    const t = this.keyboard,
      r = (t.keys.w.is_down ? 1 : 0) + (t.keys.s.is_down ? -1 : 0),
      i = (t.keys.a.is_down ? 1 : 0) + (t.keys.d.is_down ? -1 : 0),
      n = 1,
      o = new Z(i, 0, r);
    if (o.isZero()) return;
    const a = o.length() * n * e;
    o.normalize();
    const c = new Z();
    Wy(c, 0, o.x, o.y, o.z, this.camera.transform.matrix), c.multiplyScalar(a);
    const _ = this.distance;
    _ > 0 && c.multiplyScalar(_), this.pan_offset.add(c);
  });
function k0(s, e, t) {
  const r = s | e | t;
  return r & 3 ? (r & 1 ? 1 : 2) : 4;
}
function tl(s, e) {
  if (s === e) return !0;
  const t = s.length,
    r = e.length;
  if (t !== r) return !1;
  const i = s.constructor,
    n = e.constructor;
  if (i !== n) return !1;
  if (t === 0) return !0;
  if (t < 128) return hr(s, e);
  const o = s.byteLength;
  if (o !== e.byteLength) return !1;
  const a = s.buffer,
    c = e.buffer,
    _ = s.byteOffset,
    u = e.byteOffset;
  if (a === c && _ === u) return !0;
  let d = s,
    h = e;
  const p = i.BYTES_PER_ELEMENT,
    v = k0(_, u, o);
  return (
    p < 4 && v === 4
      ? ((d = new Uint32Array(a, _, o >>> 2)),
        (h = new Uint32Array(c, u, o >>> 2)))
      : p < 2 &&
        v === 2 &&
        ((d = new Uint16Array(a, _, o >>> 1)),
        (h = new Uint16Array(c, u, o >>> 1))),
    hr(d, h)
  );
}
function Wo(s, e, t, r, i, n) {
  const a = 1 / ur(t, r, i);
  (s[e] = t * a), (s[e + 1] = r * a), (s[e + 2] = i * a), (s[e + 3] = n * a);
}
function m3(s, e) {
  const t = e[0],
    r = e[3],
    i = e[4],
    n = e[7],
    o = e[8],
    a = e[11],
    c = e[12],
    _ = e[15];
  Wo(s, 0, r - t, n - i, a - o, _ - c), Wo(s, 4, r + t, n + i, a + o, _ + c);
  const u = e[1],
    d = e[5],
    h = e[9],
    p = e[13];
  Wo(s, 8, r + u, n + d, a + h, _ + p), Wo(s, 12, r - u, n - d, a - h, _ - p);
  const v = e[2],
    f = e[6],
    m = e[10],
    g = e[14];
  Wo(s, 16, r - v, n - f, a - m, _ - g), Wo(s, 20, r + v, n + f, a + m, _ + g);
}
function R0(s) {
  const e = s.length;
  let t = e;
  for (let r = 0; r < e; r++) {
    const i = s[r],
      n = xt(i);
    (t = (t << 5) - t + n), (t |= 0);
  }
  return t;
}
let g3 = 0;
var Gu, kn, Rn, Ln;
class Camera {
  constructor() {
    b(this, Gu, g3++);
    x(this, "transform", new Mo());
    x(this, "view_matrix", Si());
    x(this, "projection_matrix", Si());
    x(this, "view_projection_matrix", Si());
    x(this, "frustum", new Float32Array(4 * 6));
    b(this, kn, 0.1);
    b(this, Rn, 2e3);
    b(this, Ln, 1);
  }
  set near(e) {
    S(this, kn, e);
  }
  get near() {
    return getProperty(this, kn);
  }
  set far(e) {
    S(this, Rn, e);
  }
  get far() {
    return getProperty(this, Rn);
  }
  set aspect(e) {
    S(this, Ln, e);
  }
  get aspect() {
    return getProperty(this, Ln);
  }
  copy(e) {
    S(this, kn, getProperty(e, kn)),
      S(this, Rn, getProperty(e, Rn)),
      S(this, Ln, getProperty(e, Ln)),
      this.frustum.set(e.frustum),
      this.transform.copy(e.transform),
      this.view_matrix.set(e.view_matrix),
      this.projection_matrix.set(e.projection_matrix),
      this.view_projection_matrix.set(e.view_projection_matrix);
  }
  clone() {
    const e = new this.constructor();
    return e.copy(this), e;
  }
  get id() {
    return getProperty(this, Gu);
  }
  hash() {
    return R0(this.view_matrix);
  }
  equals(e) {
    return (
      tl(this.view_matrix, e.view_matrix) &&
      tl(this.projection_matrix, e.projection_matrix)
    );
  }
  update_matrices() {}
  update() {
    this.update_matrices(),
      z0(this.view_projection_matrix, this.projection_matrix, this.view_matrix),
      m3(this.frustum, this.view_projection_matrix);
  }
}
(Gu = new WeakMap()),
  (kn = new WeakMap()),
  (Rn = new WeakMap()),
  (Ln = new WeakMap());
var Pn, Vu, L0;
class EX_Camera extends Camera {
  constructor() {
    super(...arguments);
    b(this, Vu);
    b(this, Pn, 45 * p0);
  }
  set fov(t) {
    S(this, Pn, t);
  }
  get fov() {
    return getProperty(this, Pn);
  }
  copy(t) {
    super.copy(t), S(this, Pn, getProperty(t, Pn));
  }
  update_matrices() {
    P(this, Vu, L0).call(this);
    const t = this.transform,
      r = t.forward,
      i = t.up,
      n = t.position.clone();
    n.add(r), u3(this.view_matrix, t.position, n, i);
  }
}
(Pn = new WeakMap()),
  (Vu = new WeakSet()),
  (L0 = function () {
    _3(this.projection_matrix, this.fov, this.aspect, this.near, this.far);
  });
function b3(s, e = 1 / 0) {
  const t = Number.isFinite(e) ? 1e3 / e : 0;
  let r = performance.now(),
    i = 0,
    n = performance.now(),
    o = requestAnimationFrame(a);
  function a() {
    const c = performance.now(),
      _ = c - n;
    o = requestAnimationFrame(a);
    const u = c - n;
    if (r + t + i < c) {
      s();
      const d = c - r;
      r = c;
      const h = d - t;
      (i -= h), (i = Math.min(_, i));
    }
    (n = c), u > t && (i = Math.max(0, i));
  }
  return () => {
    cancelAnimationFrame(o);
  };
}
function y3(s, e, t, r) {
  let i = t;
  for (let n = e; n < t; n += r) {
    const o = s[n] >>> 0;
    i = (i << 5) - i + o;
  }
  return i >>> 0;
}
function P0(s, e, t) {
  return y3(s, e, t, 1);
}
function ot(...s) {
  return P0(s, 0, s.length);
}
const se = {
  Uint8: "uint8",
  Uint16: "uint16",
  Uint32: "uint32",
  Uint64: "uint64",
  Int8: "int8",
  Int16: "int16",
  Int32: "int32",
  Int64: "int64",
  Float16: "float16",
  Float32: "float32",
  Float64: "float64",
};
function B0(s) {
  const e = Object.getPrototypeOf(s).constructor;
  switch (e) {
    case Uint8Array:
    case Uint8ClampedArray:
      return se.Uint8;
    case Uint16Array:
      return se.Uint16;
    case Uint32Array:
      return se.Uint32;
    case Int8Array:
      return se.Int8;
    case Int16Array:
      return se.Int16;
    case Int32Array:
      return se.Int32;
    case Float32Array:
      return se.Float32;
    case Float64Array:
      return se.Float64;
    default:
      throw new Error(`unsupported constructor type ${e.name}`);
  }
}
function w3(s, e, t, r, i, n) {
  let o = t;
  for (let a = e; a < t; a += r) {
    const c = i.call(n, s[a]);
    o = (o << 5) - o + c;
  }
  return o >>> 0;
}
function O0(s, e, t, r = 31) {
  const i = ke(t, 1024),
    n = Math.max(1, Math.ceil(i / r));
  return w3(s, 0, i, n, xt);
}
const F0 = {
  [se.Uint8]: 1,
  [se.Uint16]: 2,
  [se.Uint32]: 4,
  [se.Uint64]: 8,
  [se.Int8]: 1,
  [se.Int16]: 2,
  [se.Int32]: 4,
  [se.Int64]: 8,
  [se.Float16]: 2,
  [se.Float32]: 4,
  [se.Float64]: 8,
};
function T3(s) {
  const e = F0[s];
  if (e === false) throw new Error(`Unsupported type '${s}'`);
  return e;
}
function Re(s, e, t) {
  if (s === null) return 0;
  if (s === false) return 1;
  let r = e ?? 0,
    i = t ?? s.length - r,
    n = i;
  const o = r + i;
  for (let a = r; a < o; a++) {
    const c = s.charCodeAt(a);
    n = (n << 5) - n + c;
  }
  return n >>> 0;
}
class fc {
  constructor() {
    x(this, "name", "");
    x(this, "type", se.Float32);
    x(this, "itemSize", 1);
    x(this, "normalized", !1);
  }
  static fromJSON(e) {
    const t = new fc();
    return t.fromJSON(e), t;
  }
  fromJSON({ name: e, type: t, itemSize: r, normalized: i = !1 }) {
    (this.name = e),
      (this.type = t),
      (this.itemSize = r),
      (this.normalized = i);
  }
  toJSON() {
    return {
      name: this.name,
      type: this.type,
      itemSize: this.itemSize,
      normalized: this.normalized,
    };
  }
  hash() {
    return Re(this.name);
  }
  equals(e) {
    return (
      this.type === e.type &&
      this.itemSize === e.itemSize &&
      this.normalized === e.normalized &&
      this.name === e.name
    );
  }
  copy(e) {
    (this.type = e.type),
      (this.name = e.name),
      (this.itemSize = e.itemSize),
      (this.normalized = e.normalized);
  }
  clone() {
    const e = new fc();
    return e.copy(this), e;
  }
  getByteSize() {
    return this.itemSize * F0[this.type];
  }
  static byName(e, t) {
    return e.name.localeCompare(t.name);
  }
}
fc.prototype.isAttributeSpec = !0;
var $u;
const qu = class qu {
  constructor() {
    x(this, "spec", new fc());
    x(this, "data");
    x(this, "count", 0);
    b(this, $u, 0);
  }
  get version() {
    return getProperty(this, $u);
  }
  get name() {
    return this.spec.name;
  }
  get itemSize() {
    return this.spec.itemSize;
  }
  equals(e) {
    return (
      this.spec.equals(e.spec) &&
      this.count === e.count &&
      tl(this.data, e.data)
    );
  }
  hash() {
    return ot(this.spec.hash(), this.count, O0(this.data, 0, this.data.length));
  }
  copy(e) {
    this.spec.copy(e.spec), (this.count = e.count);
    const t = e.data.constructor;
    this.data = new t(e.data);
  }
  clone() {
    const e = new qu();
    return e.copy(this), e;
  }
  static from(e, t = 1, r = "") {
    const i = B0(e),
      n = new qu();
    return (
      (n.spec.type = i),
      (n.spec.name = r),
      (n.spec.itemSize = t),
      (n.count = e.length / t),
      (n.data = e),
      n
    );
  }
};
$u = new WeakMap();
let ca = qu;
function Ld(s, e, t) {
  const r = s.length;
  let i = r;
  for (let n = 0; n < r; n++) {
    const o = s[n],
      a = e.call(t, o);
    (i = (i << 5) - i + a), (i |= 0);
  }
  return i;
}
function yn(s, e) {
  const t = s.length;
  if (t !== e.length) return !1;
  let r = 0;
  for (; r < t; r++) {
    const i = s[r],
      n = e[r];
    if (i !== n) {
      if (i == null || n === false || n === null) return !1;
      if (typeof i == "object" && typeof i.equals == "function") {
        if (!i.equals(n)) return !1;
      } else return !1;
    }
  }
  return !0;
}
function E3(s, e, t, r, i, n, o, a) {
  (s[e] = t),
    (s[e + 1] = r),
    (s[e + 2] = i),
    (s[e + 3] = n),
    (s[e + 4] = o),
    (s[e + 5] = a);
}
function D0(s, e, t) {
  let r = 1 / 0,
    i = 1 / 0,
    n = 1 / 0,
    o = -1 / 0,
    a = -1 / 0,
    c = -1 / 0;
  for (let _ = 0; _ < t; _ += 3) {
    const u = e[_],
      d = e[_ + 1],
      h = e[_ + 2];
    (r = ke(u, r)),
      (i = ke(d, i)),
      (n = ke(h, n)),
      (o = ne(u, o)),
      (a = ne(d, a)),
      (c = ne(h, c));
  }
  E3(s, 0, r, i, n, o, a, c);
}
function Lm(s) {
  return s * s;
}
function Xc(s, e, t) {
  let r = s;
  return r < e && (r = e), r < t && (r = t), r;
}
function A3(s) {
  return ((s + 31) >>> 5) << 5;
}
const S3 = new Uint8Array([
  0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 31, 27, 13, 23, 21,
  19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9,
]);
function ru(s) {
  return S3[((s & -s) * 125613361) >>> 27];
}
const z3 = 1.3,
  C3 = 0.5,
  Pm = 128,
  U3 = 64;
class Ac {
  constructor(e = U3) {
    (this.__length = 0),
      (this.__capacity = A3(e)),
      (this.__data_uint32 = new Uint32Array(this.__capacity >> 5)),
      (this.__shrinkFactor = C3);
  }
  preventShrink() {
    this.setShrinkFactor(0);
  }
  setShrinkFactor(e) {
    this.__shrinkFactor = e;
  }
  setCapacity(e) {
    if (this.__length > e)
      throw new Error(
        `Current length(=${this.__length}) is greater than requested size(=${e})`
      );
    this.__resize(e);
  }
  size() {
    return this.__length;
  }
  capacity() {
    return this.__capacity;
  }
  __resize(e) {
    const t = Math.ceil(e / 32),
      r = this.__data_uint32,
      i = new Uint32Array(t);
    r.length < t ? i.set(r) : i.set(r.subarray(0, t)),
      (this.__data_uint32 = i),
      (this.__capacity = t * 32);
  }
  __updateLength() {
    const e = this.previousSetBit(this.__length) + 1;
    e < this.__length && this.__setLength(e);
  }
  __setLength(e) {
    this.__length = e;
    const t = this.__capacity;
    if (e > t) {
      const r = Math.ceil(Xc(e, t + Pm, t * z3));
      this.__resize(r);
    } else e < t - Pm && e < t * this.__shrinkFactor && this.__resize(e);
  }
  previousSetBit(e) {
    const t = ke(e, this.__length - 1);
    let r = t >> 5,
      i = t & 31;
    const n = this.__data_uint32;
    let o = n[r];
    for (; i >= 0; i--) if (o & (1 << i)) return r * 32 + i;
    for (r--; r >= 0; r--)
      for (o = n[r], i = 31; i >= 0; i--) if (o & (1 << i)) return r * 32 + i;
    return -1;
  }
  nextSetBit(e) {
    const t = this.__length;
    if (e >= t) return -1;
    const r = this.__data_uint32;
    let i = e >> 5,
      n,
      o,
      a = e & 31;
    if (a !== 0) {
      const _ = ~((1 << a) - 1),
        u = r[i] & _;
      if (u !== 0) return (a = ru(u)), (i << 5) + a;
      i++;
    }
    const c = (t + 31) >> 5;
    for (; i < c; i++)
      if (((n = r[i]), n !== 0)) return (a = ru(n)), (o = (i << 5) + a), o;
    return -1;
  }
  nextClearBit(e) {
    let t = e >> 5,
      r,
      i = e & 31;
    const n = this.__data_uint32;
    if (i !== 0) {
      r = n[t];
      const c = (1 << i) - 1,
        _ = (r | c) >>> 0;
      if (_ !== 4294967295) return (i = ru(~_)), i + t * 32;
      t++;
    }
    const o = this.__length,
      a = (o + 31) >> 5;
    for (; t < a; t++)
      if (((r = n[t]), r !== 4294967295)) return (i = ru(~r)), i + t * 32;
    return o;
  }
  set(e, t) {
    const r = e >> 5,
      n = 1 << (e & 31);
    if (t) {
      const o = e + 1;
      o > this.__length && this.__setLength(o), (this.__data_uint32[r] |= n);
    } else
      e < this.__length &&
        ((this.__data_uint32[r] &= ~n), this.__updateLength());
  }
  clear(e) {
    this.set(e, !1);
  }
  setRange(e, t) {
    for (let r = e; r <= t; r++) this.set(r, !0);
  }
  clearRange(e, t) {
    for (let r = e; r < t; r++) this.set(r, !1);
  }
  get(e) {
    if (e >= this.__length) return !1;
    const t = e >> 5,
      r = e & 31;
    return (this.__data_uint32[t] & (1 << r)) !== 0;
  }
  getAndSet(e) {
    const t = this.get(e);
    return t || this.set(e, !0), t;
  }
  getAndClear(e) {
    const t = this.get(e);
    return t && this.set(e, !1), t;
  }
  shift_right(e, t, r) {
    for (let i = r; i >= t; i--) {
      const n = this.get(i);
      this.set(i + e, n);
    }
  }
  shift_left(e, t, r) {
    for (let i = t; i <= r; i++) {
      const n = this.get(i);
      this.set(i - e, n);
    }
  }
  shift(e, t, r) {
    e > 0 ? this.shift_right(e, t, r) : this.shift_right(-e, t, r);
  }
  reset() {
    const e = this.__length;
    e <= 0 ||
      (e <= 32
        ? (this.__data_uint32[0] = 0)
        : this.__data_uint32.fill(0, 0, Math.ceil(e / 32)),
      (this.__length = 0));
  }
  copy(e) {
    const t = e.__length,
      r = t >> 5,
      i = this.__length;
    i !== t &&
      (i < t ? this.__resize(t) : this.__data_uint32.fill(0, r),
      (this.__length = t));
    for (let a = 0; a < r; a++) this.__data_uint32[a] = e.__data_uint32[a];
    const n = r << 5,
      o = t - n;
    for (let a = 0; a < o; a++) {
      const c = n + a;
      this.set(c, e.get(c));
    }
  }
  static fixedSize(e) {
    const t = new Ac(e);
    return t.preventShrink(), t;
  }
}
class I3 {
  constructor(e, t, r) {
    (this.S = null),
      (this.membership = null),
      (this.dim = 0),
      (this.members = null),
      (this.Q = null),
      (this.R = null),
      (this.u = null),
      (this.w = null),
      (this.r = 0),
      (this.c = 0),
      (this.s = 0),
      this.initialize(e, t, r);
  }
  initialize(e, t, r) {
    (this.S = t),
      (this.dim = e),
      (this.membership = Ac.fixedSize(t.size())),
      (this.members = new Int32Array(e + 1)),
      (this.r = 0);
    const i = new Array(e),
      n = new Array(e);
    (this.Q = i), (this.R = n);
    for (let o = 0; o < e; o++) (i[o] = new Array(e)), (n[o] = new Array(e));
    (this.u = new Array(e)), (this.w = new Array(e));
    for (let o = 0; o < e; o++)
      for (let a = 0; a < e; a++) i[a][o] = o === a ? 1 : 0;
    (this.members[this.r] = r), this.membership.set(r, !0);
  }
  dimension() {
    return this.dim;
  }
  size() {
    return this.r + 1;
  }
  isMember(e) {
    return this.membership.get(e);
  }
  anyMember() {
    return this.members[this.r];
  }
  globalIndex(e) {
    return this.members[e];
  }
  ind(e, t) {
    return e * this.dim + t;
  }
  origin() {
    return this.members[this.r];
  }
  givens(e, t) {
    if (t === 0) (this.c = 1), (this.s = 0);
    else if (Math.abs(t) > Math.abs(e)) {
      const r = e / t;
      (this.s = 1 / Math.sqrt(1 + r * r)), (this.c = this.s * r);
    } else {
      const r = t / e;
      (this.c = 1 / Math.sqrt(1 + r * r)), (this.s = this.c * r);
    }
  }
  appendColumn() {
    const e = this.R,
      t = this.Q,
      r = this.dim;
    for (let i = 0; i < r; ++i) {
      e[this.r][i] = 0;
      for (let n = 0; n < r; ++n) e[this.r][i] += t[i][n] * this.u[n];
    }
    for (let i = r - 1; i > this.r; --i) {
      this.givens(e[this.r][i - 1], e[this.r][i]),
        (e[this.r][i - 1] = this.c * e[this.r][i - 1] + this.s * e[this.r][i]);
      for (let n = 0; n < r; ++n) {
        let o = t[i - 1][n],
          a = t[i][n];
        (t[i - 1][n] = this.c * o + this.s * a),
          (t[i][n] = this.c * a - this.s * o);
      }
    }
  }
  add(e) {
    let t = this.origin();
    const r = this.dim,
      i = this.u,
      n = this.S;
    for (let o = 0; o < r; ++o) i[o] = n.coord(e, o) - n.coord(t, o);
    this.appendColumn(),
      this.membership.set(e, !0),
      (this.members[this.r + 1] = this.members[this.r]),
      (this.members[this.r] = e),
      ++this.r;
  }
  shortestVectorToSpan(e, t) {
    const r = this.origin(),
      i = this.dim,
      n = this.S;
    for (let _ = 0; _ < i; ++_) t[_] = n.coord(r, _) - e[_];
    const o = this.Q,
      a = this.r;
    for (let _ = 0; _ < a; ++_) {
      let u = 0;
      const d = o[_];
      for (let h = 0; h < i; ++h) u += t[h] * d[h];
      for (let h = 0; h < i; ++h) t[h] -= u * d[h];
    }
    let c = 0;
    for (let _ = 0; _ < i; ++_) c += t[_] * t[_];
    return c;
  }
  representationError() {
    const e = this.size(),
      t = new Float64Array(e),
      r = this.dim,
      i = new Float64Array(r);
    let n = 0;
    for (let o = 0; o < e; ++o) {
      for (let c = 0; c < r; ++c) i[c] = this.S.coord(this.globalIndex(o), c);
      this.findAffineCoefficients(i, t);
      let a = Math.abs(t[o] - 1);
      a > n && (n = a);
      for (let c = 0; c < o; ++c) (a = Math.abs(t[c])), a > n && (n = a);
      for (let c = o + 1; c < e; ++c) (a = Math.abs(t[c])), a > n && (n = a);
    }
    return n;
  }
  findAffineCoefficients(e, t) {
    let r = this.origin();
    const i = this.dim,
      n = this.u;
    for (let u = 0; u < i; ++u) n[u] = e[u] - this.S.coord(r, u);
    const o = this.w,
      a = this.Q;
    for (let u = 0; u < i; ++u) {
      o[u] = 0;
      for (let d = 0; d < i; ++d) o[u] += a[u][d] * n[d];
    }
    let c = 1;
    const _ = this.R;
    for (let u = this.r - 1; u >= 0; --u) {
      for (let h = u + 1; h < this.r; ++h) o[u] -= t[h] * _[h][u];
      const d = o[u] / _[u][u];
      (t[u] = d), (c -= d);
    }
    t[this.r] = c;
  }
  hessenberg_clear(e) {
    let t = e;
    const r = this.R,
      i = this.Q,
      n = this.dim;
    for (; t < this.r; ++t) {
      this.givens(r[t][t], r[t][t + 1]),
        (r[t][t] = this.c * r[t][t] + this.s * r[t][t + 1]);
      for (let o = t + 1; o < this.r; ++o) {
        const a = r[o][t],
          c = r[o][t + 1];
        (r[o][t] = this.c * a + this.s * c),
          (r[o][t + 1] = this.c * c - this.s * a);
      }
      for (let o = 0; o < n; ++o) {
        const a = i[t][o],
          c = i[t + 1][o];
        (i[t][o] = this.c * a + this.s * c),
          (i[t + 1][o] = this.c * c - this.s * a);
      }
    }
  }
  special_rank_1_update() {
    const e = this.dim,
      t = this.w,
      r = this.u,
      i = this.Q,
      n = this.R;
    for (let o = 0; o < e; ++o) {
      t[o] = 0;
      for (let a = 0; a < e; ++a) t[o] += i[o][a] * r[a];
    }
    for (let o = e - 1; o > 0; --o) {
      this.givens(t[o - 1], t[o]),
        (t[o - 1] = this.c * t[o - 1] + this.s * t[o]),
        (n[o - 1][o] = -this.s * n[o - 1][o - 1]),
        (n[o - 1][o - 1] *= this.c);
      for (let a = o; a < this.r; ++a) {
        const c = n[a][o - 1],
          _ = n[a][o];
        (n[a][o - 1] = this.c * c + this.s * _),
          (n[a][o] = this.c * _ - this.s * c);
      }
      for (let a = 0; a < e; ++a) {
        const c = i[o - 1][a],
          _ = i[o][a];
        (i[o - 1][a] = this.c * c + this.s * _),
          (i[o][a] = this.c * _ - this.s * c);
      }
    }
    for (let o = 0; o < this.r; ++o) n[o][0] += t[0];
    this.hessenberg_clear(0);
  }
  remove(e) {
    if ((this.membership.clear(this.globalIndex(e)), e === this.r)) {
      let t = this.origin(),
        r = this.globalIndex(this.r - 1);
      const i = this.dim,
        n = this.S,
        o = this.u;
      for (let a = 0; a < i; ++a) o[a] = n.coord(t, a) - n.coord(r, a);
      --this.r, this.special_rank_1_update();
    } else {
      const t = this.R,
        r = t[e],
        i = this.members;
      for (let n = e + 1; n < this.r; ++n) (t[n - 1] = t[n]), (i[n - 1] = i[n]);
      (i[this.r - 1] = i[this.r]), (t[--this.r] = r), this.hessenberg_clear(e);
    }
  }
}
const Bm = 1e-14,
  N3 = 1e4;
class M3 {
  constructor(e) {
    (this.iteration = 0),
      (this.distToAff = 0),
      (this.distToAffSquare = 0),
      (this.__squaredRadius = 0),
      (this.__radius = 0),
      (this.stopper = 0),
      (this.S = e),
      (this.__size = this.S.size());
    const t = this.S.dimension();
    this.dim = t;
    const r = new ArrayBuffer(8 * (t * 4 + 1));
    (this.__center = new Float64Array(r, 0, t)),
      (this.centerToAff = new Float64Array(r, 8 * t, t)),
      (this.centerToPoint = new Float64Array(r, 8 * 2 * t, t)),
      (this.lambdas = new Float64Array(r, 8 * 3 * t, t + 1)),
      (this.__support = this.initBall()),
      this.compute();
  }
  isEmpty() {
    return this.__size === 0;
  }
  radius() {
    return this.__radius;
  }
  center() {
    return this.__center;
  }
  get support() {
    return this.__support;
  }
  size() {
    return this.__size;
  }
  initBall() {
    let e, t;
    const r = this.dim,
      i = this.__center,
      n = this.S;
    for (e = 0; e < r; ++e) i[e] = n.coord(0, e);
    this.__squaredRadius = 0;
    let o = 0;
    const a = n.size();
    for (t = 1; t < a; ++t) {
      let c = 0;
      for (e = 0; e < r; ++e) c += Lm(n.coord(t, e) - i[e]);
      c >= this.__squaredRadius && ((this.__squaredRadius = c), (o = t));
    }
    return (
      (this.__radius = Math.sqrt(this.__squaredRadius)), new I3(this.dim, n, o)
    );
  }
  computeDistToAff() {
    (this.distToAffSquare = this.__support.shortestVectorToSpan(
      this.__center,
      this.centerToAff
    )),
      (this.distToAff = Math.sqrt(this.distToAffSquare));
  }
  updateRadius() {
    const e = this.__support.anyMember();
    this.__squaredRadius = 0;
    const t = this.dim,
      r = this.__center,
      i = this.S;
    for (let n = 0; n < t; ++n)
      this.__squaredRadius += Lm(i.coord(e, n) - r[n]);
    this.__radius = Math.sqrt(this.__squaredRadius);
  }
  compute() {
    const e = this.__center,
      t = this.__support,
      r = this.dim,
      i = this.centerToAff;
    for (this.iteration = 0; this.iteration < N3; this.iteration++) {
      for (
        this.computeDistToAff();
        this.distToAff <= Bm * this.__radius || t.size() === r + 1;

      ) {
        if (!this.successfulDrop()) return;
        this.computeDistToAff();
      }
      const n = this.findStopFraction();
      if (this.stopper >= 0) {
        for (let o = 0; o < r; ++o) e[o] += n * i[o];
        this.updateRadius(), t.add(this.stopper);
      } else {
        for (let o = 0; o < r; ++o) e[o] += i[o];
        if ((this.updateRadius(), !this.successfulDrop())) return;
      }
    }
  }
  successfulDrop() {
    const e = this.lambdas,
      t = this.__support;
    t.findAffineCoefficients(this.__center, e);
    let r = 0,
      i = 1;
    const n = t.size();
    for (let o = 0; o < n; ++o) {
      const a = e[o];
      a < i && ((i = a), (r = o));
    }
    return i <= 0 ? (t.remove(r), !0) : !1;
  }
  findStopFraction() {
    let e = 1;
    this.stopper = -1;
    let t, r;
    const i = this.dim,
      n = this.__center,
      o = this.S,
      a = this.__support,
      c = this.centerToPoint,
      _ = this.centerToAff,
      u = this.__size;
    for (r = 0; r < u; ++r) {
      if (a.isMember(r)) continue;
      for (t = 0; t < i; ++t) c[t] = o.coord(r, t) - n[t];
      let d = 0;
      for (t = 0; t < i; ++t) d += _[t] * c[t];
      if (this.distToAffSquare - d < Bm * this.__radius * this.distToAff)
        continue;
      let h = 0;
      for (t = 0; t < i; ++t) h += c[t] * c[t];
      (h = (this.__squaredRadius - h) / 2 / (this.distToAffSquare - d)),
        h > 0 && h < e && ((e = h), (this.stopper = r));
    }
    return e;
  }
  toString() {
    let e = "Miniball [";
    if (this.isEmpty()) e += "isEmpty=true";
    else {
      e += "center=(";
      for (let t = 0; t < this.dim; ++t)
        (e += this.__center[t]), t < this.dim - 1 && (e += ", ");
      e += `), radius=${this.__radius}, squaredRadius=${this.__squaredRadius}`;
    }
    return (e += "]"), e;
  }
}
class k3 {
  constructor(e, t, r) {
    (this.__data = r), (this.__size = e), (this.__dimensions = t);
  }
  size() {
    return this.__size;
  }
  dimension() {
    return this.__dimensions;
  }
  coord(e, t) {
    return this.__data[e * this.__dimensions + t];
  }
}
function Jo(s, e, t, r, i) {
  (s[e] += t), (s[e + 1] += r), (s[e + 2] += i);
}
function Kr(s) {
  return s.hash();
}
function yh(s, e, t, r) {
  const i = t[r],
    n = t[r + 1],
    o = t[r + 2];
  (s[e] += i), (s[e + 1] += n), (s[e + 2] += o);
}
function R3(s, e, t, r, i, n, o, a, c, _, u) {
  const d = c - n,
    h = _ - o,
    p = u - a,
    v = t - n,
    f = r - o,
    m = i - a,
    g = h * m - p * f,
    E = p * v - d * m,
    y = d * f - h * v,
    A = mu(g, E, y);
  if (A === 0) {
    (s[e] = 0), (s[e + 1] = 1), (s[e + 2] = 0);
    return;
  }
  const T = 1 / Math.sqrt(A),
    z = g * T,
    C = E * T,
    U = y * T;
  (s[e] = z), (s[e + 1] = C), (s[e + 2] = U);
}
function G0(s, e, t, r, i, n) {
  const o = t * 3,
    a = r * 3,
    c = i * 3,
    _ = n[o],
    u = n[o + 1],
    d = n[o + 2],
    h = n[a],
    p = n[a + 1],
    v = n[a + 2],
    f = n[c],
    m = n[c + 1],
    g = n[c + 2];
  R3(s, e, _, u, d, h, p, v, f, m, g);
}
function L3(s, e, t, r) {
  const i = t[r],
    n = t[r + 1],
    o = t[r + 2],
    a = 1 / ur(i, n, o);
  (s[e] = i * a), (s[e + 1] = n * a), (s[e + 2] = o * a);
}
function P3(s, e = 0, t = s.length - e) {
  const r = e + t;
  for (let i = e; i < r; i += 3) L3(s, i, s, i);
}
const iu = new Float64Array(3);
function B3(s, e, t) {
  const r = t.length;
  for (let i = 0; i < r; i += 3) {
    const n = t[i],
      o = t[i + 1],
      a = t[i + 2];
    G0(iu, 0, n, o, a, s),
      yh(e, n * 3, iu, 0),
      yh(e, o * 3, iu, 0),
      yh(e, a * 3, iu, 0);
  }
  P3(e);
}
function st(s, e, t, r, i) {
  let n, o, a;
  for (a = 0; a < i; a++) (n = e + a), (o = r + a), (t[o] = s[n]);
}
const su = new Float64Array(3);
function O3(s, e, t) {
  for (let r = 0; r < t; r += 3) {
    const i = r,
      n = r + 1,
      o = r + 2;
    G0(su, 0, i, n, o, s),
      st(su, 0, e, i * 3, 3),
      st(su, 0, e, n * 3, 3),
      st(su, 0, e, o * 3, 3);
  }
}
function St(s, e) {
  return s === e
    ? !0
    : s === false || e === false || s === null || e === null
    ? !1
    : s.equals(e);
}
function lr(s) {
  return s === false ? 0 : s.hash();
}
const Me = {
  Position: "position",
  Normal: "normal",
  Tangent: "tangent",
  UV: "uv",
};
let F3 = 0;
const Wc = { BoundsNeedUpdate: 1 },
  D3 = Wc.BoundsNeedUpdate;
function Om(s, e, t, r, i) {
  let n, o, a, c, _, u;
  if (t < 0) {
    const p = 1 / (1 - t),
      v = s * e * p;
    (n = 1 - s * s * p),
      (o = -v),
      (a = s),
      (c = v),
      (_ = e * e * p - 1),
      (u = -e);
  } else {
    const p = 1 / (1 + t),
      v = -s * e * p;
    (n = 1 - s * s * p),
      (o = v),
      (a = -s),
      (c = v),
      (_ = 1 - e * e * p),
      (u = -e);
  }
  const d = V0(s, e, t, n, o, a, c, _, u),
    h = r << 2;
  (i[h] = n), (i[h + 1] = o), (i[h + 2] = a), (i[h + 3] = d);
}
function V0(s, e, t, r, i, n, o, a, c) {
  const _ = a * n - c * i,
    u = c * r - o * n,
    d = o * i - a * r;
  return s * _ + e * u + t * d > 0 ? 1 : -1;
}
var Hu, bs, df, $0, q0;
const rm = class rm {
  constructor() {
    b(this, bs);
    b(this, Hu, F3++);
    x(this, "name", "");
    x(this, "is_resident", !1);
    x(this, "context_index_offset", 0);
    x(this, "context_vertex_offset", 0);
    x(this, "context_index", 0);
    x(this, "attributes", []);
    x(this, "index", null);
    x(this, "bounding_box", new Float32Array(6));
    x(this, "bounding_sphere", new Float32Array(4));
    x(this, "flags", D3);
  }
  get id() {
    return getProperty(this, Hu);
  }
  setFlag(e) {
    this.flags |= e;
  }
  clearFlag(e) {
    this.flags &= ~e;
  }
  writeFlag(e, t) {
    t ? this.setFlag(e) : this.clearFlag(e);
  }
  getFlag(e) {
    return (this.flags & e) === e;
  }
  equals(e) {
    return this === e
      ? !0
      : this.name === e.name &&
          St(this.index, e.index) &&
          yn(this.attributes, e.attributes);
  }
  hash() {
    return ot(Re(this.name), lr(this.index), Ld(this.attributes, Kr));
  }
  getAttribute(e) {
    const t = this.attributes,
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      if (n.spec.name === e) return n;
    }
  }
  hasAttribute(e) {
    return this.getAttribute(e) !== false;
  }
  addAttribute(e) {
    this.attributes.push(e);
  }
  getVertexCount() {
    const e = this.attributes;
    return e.length === 0 ? 0 : e[0].count;
  }
  getIndexCount() {
    const e = this.index;
    return e != null ? e.count : this.getVertexCount();
  }
  getPrimitiveCount() {
    return this.getIndexCount() / 3;
  }
  ensureIndex() {
    this.index === null && this.buildIndex();
  }
  buildIndex() {
    const e = this.getVertexCount(),
      t = new Uint32Array(e);
    for (let r = 0; r < e; r++) t[r] = r;
    this.index = ca.from(t, 1, "index");
  }
  ensureBounds() {
    this.getFlag(Wc.BoundsNeedUpdate) && this.computeBoundingShapes();
  }
  computeBoundingSphereFromBox() {
    const e = this.bounding_box,
      t = e[0],
      r = e[3],
      i = e[1],
      n = e[4],
      o = e[2],
      a = e[5];
    (this.bounding_sphere[0] = (t + r) * 0.5),
      (this.bounding_sphere[1] = (i + n) * 0.5),
      (this.bounding_sphere[2] = (o + a) * 0.5),
      (this.bounding_sphere[3] = rp(t, i, o, r, n, a));
  }
  computeBoundingSphere() {
    const e = this.getAttribute(Me.Position),
      t = new k3(e.count, 3, e.data),
      r = new M3(t),
      i = r.center();
    (this.bounding_sphere[0] = i[0]),
      (this.bounding_sphere[1] = i[1]),
      (this.bounding_sphere[2] = i[2]),
      (this.bounding_sphere[3] = r.radius());
  }
  computeBoundingShapes() {
    this.computeBoundingSphere(),
      this.computeBoundingBox(),
      this.clearFlag(Wc.BoundsNeedUpdate);
  }
  computeBoundingBox() {
    const e = this.getAttribute(Me.Position);
    D0(this.bounding_box, e.data, e.count * e.spec.itemSize),
      this.clearFlag(Wc.BoundsNeedUpdate);
  }
  computeNormals() {
    const e = this.getVertexCount(),
      t = this.getAttribute(Me.Position);
    let r = this.getAttribute(Me.Normal);
    r === false
      ? ((r = ca.from(new Float32Array(e * 3), 3, Me.Normal)),
        this.addAttribute(r))
      : r.data.fill(0, 0, e * 3);
    const i = this.index;
    i === null ? O3(t.data, r.data, e) : B3(t.data, r.data, i.data);
  }
  computeTangents() {
    this.hasAttribute(Me.Normal) || this.computeNormals(),
      this.hasAttribute(Me.UV) &&
      this.hasAttribute(Me.Position) &&
      this.hasAttribute(Me.Normal)
        ? P(this, bs, $0).call(this)
        : P(this, bs, q0).call(this);
  }
  copy(e) {
    e.index !== null ? (this.index = e.index.clone()) : (this.index = null),
      (this.attributes = e.attributes.map((t) => t.clone())),
      (this.flags = e.flags),
      this.bounding_box.set(e.bounding_box);
  }
  clone() {
    const e = new rm();
    return e.copy(this), e;
  }
  update() {
    this.ensureBounds();
  }
};
(Hu = new WeakMap()),
  (bs = new WeakSet()),
  (df = function () {
    if (!this.hasAttribute(Me.Tangent)) {
      const e = this.getVertexCount();
      this.addAttribute(ca.from(new Float32Array(4 * e), 4, Me.Tangent));
    }
    return this.getAttribute(Me.Tangent);
  }),
  ($0 = function () {
    const e = this.index,
      t = this.getAttribute(Me.Position),
      r = this.getAttribute(Me.Normal),
      i = this.getAttribute(Me.UV);
    if (e === null || t === false || r === false || i === false)
      throw new Error(
        " .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
    const n = t.data,
      o = i.data,
      a = r.data,
      _ = P(this, bs, df).call(this).data,
      u = t.count,
      d = new Float32Array(3 * u),
      h = new Float32Array(3 * u),
      p = e.count,
      v = e.data;
    for (let f = 0; f < p; f += 3) {
      const m = v[f],
        g = v[f + 1],
        E = v[f + 2],
        y = m << 1,
        A = o[y],
        T = o[y + 1],
        z = g << 1,
        C = o[z],
        U = o[z + 1],
        k = E << 1,
        N = o[k],
        M = o[k + 1],
        I = C - A,
        L = U - T,
        F = N - A,
        D = M - T,
        H = I * D - F * L;
      if (H === 0) continue;
      const J = 1 / H,
        R = y + m,
        O = n[R],
        q = n[R + 1],
        Y = n[R + 2],
        $ = z + g,
        K = n[$],
        V = n[$ + 1],
        j = n[$ + 2],
        te = k + E,
        re = n[te],
        ie = n[te + 1],
        _e = n[te + 2],
        ae = K - O,
        ue = V - q,
        be = j - Y,
        ye = re - O,
        he = ie - q,
        Ae = _e - Y,
        we = (ae * D - ye * L) * J,
        Te = (ue * D - he * L) * J,
        Ue = (be * D - Ae * L) * J,
        Ze = (ye * I - ae * F) * J,
        Ke = (he * I - ue * F) * J,
        Qe = (Ae * I - be * F) * J;
      Jo(d, R, we, Te, Ue),
        Jo(d, $, we, Te, Ue),
        Jo(d, te, we, Te, Ue),
        Jo(h, R, Ze, Ke, Qe),
        Jo(h, $, Ze, Ke, Qe),
        Jo(h, te, Ze, Ke, Qe);
    }
    for (let f = 0; f < u; f++) {
      const m = f * 3,
        g = a[m],
        E = a[m + 1],
        y = a[m + 2],
        A = d[m],
        T = d[m + 1],
        z = d[m + 2];
      if (A === 0 && T === 0 && z === 0) {
        Om(g, E, y, f, _);
        continue;
      }
      const C = h[m],
        U = h[m + 1],
        k = h[m + 2],
        N = dt(g, E, y, A, T, z);
      let M = A - g * N,
        I = T - E * N,
        L = z - y * N;
      const F = 1 / ur(M, I, L);
      (M *= F), (I *= F), (L *= F);
      const D = V0(g, E, y, A, T, z, C, U, k),
        H = f << 2;
      (_[H] = M), (_[H + 1] = I), (_[H + 2] = L), (_[H + 3] = D);
    }
  }),
  (q0 = function () {
    const e = this.getAttribute(Me.Normal),
      r = P(this, bs, df).call(this).data,
      i = e.data,
      n = this.getVertexCount();
    for (let o = 0; o < n; o++) {
      const a = o * 3,
        c = i[a],
        _ = i[a + 1],
        u = i[a + 2];
      Om(c, _, u, o, r);
    }
  });
let uf = rm;
function G3(s, e) {
  for (let t = e.next(); !t.done; t = e.next()) s.push(t.value);
  return s;
}
function V3(s) {
  let e = s,
    t = 0;
  return (
    e & 65535 || ((e >>= 16), (t += 16)),
    e & 255 || ((e >>= 8), (t += 8)),
    e & 15 || ((e >>= 4), (t += 4)),
    e & 3 || ((e >>= 2), (t += 2)),
    e & 1 || ((e >>= 1), (t += 1)),
    e === 0 && (t += 1),
    t
  );
}
function np(s) {
  let e = s - 1;
  return (
    (e |= e >> 1),
    (e |= e >> 2),
    (e |= e >> 4),
    (e |= e >> 8),
    (e |= e >> 16),
    e++,
    e
  );
}
function Fm(s) {
  return (s & (s - 1)) === 0;
}
function ko(s, e) {
  return s.equals(e);
}
function $3(s) {
  if (s <= 256) return Uint8Array;
  if (s <= 65536) return Uint16Array;
  if (s <= 4294967295) return Uint32Array;
  throw new Error(`Unsupported size ${s}`);
}
function nu(s, e) {
  return ((s << 2) + s + 1) & e;
}
class q3 {
  constructor(e, t, r) {
    (this.key = e), (this.value = t), (this.hash = r);
  }
}
const H3 = 4,
  Y3 = 2 ** H3,
  Dm = 0.75,
  En = 0,
  Ss = 1,
  ii = 2,
  Bc = 4294967295,
  j3 = 0,
  wh = -1,
  X3 = new Uint32Array(0);
var Pe, hf, Gc, vu, H0, ff, Y0, j0, pf, W3;
class Ct {
  constructor({
    keyHashFunction: e = Kr,
    keyEqualityFunction: t = ko,
    capacity: r = Y3,
    loadFactor: i = Dm,
  } = {}) {
    b(this, Pe);
    x(this, "__bins", X3);
    x(this, "__entries", new Array(0));
    x(this, "__entries_bound", 0);
    x(this, "__entries_start", 0);
    x(this, "__size", 0);
    x(this, "__bin_count", 0);
    x(this, "__entries_allocated_count", 0);
    x(this, "__bin_count_power_of_two", 0);
    x(this, "__entries_count_power_of_two", 0);
    x(this, "__bin_count_mask", 0);
    x(this, "__load_factor", Dm);
    x(this, "__version", 0);
    (this.keyHashFunction = e),
      (this.keyEqualityFunction = t),
      (this.__load_factor = i),
      P(this, Pe, hf).call(this, np(r));
  }
  get size() {
    return this.__size;
  }
  getCurrentLoad() {
    return this.__size / this.__bin_count;
  }
  compute_bin_index(e) {
    return (((e >>> 16) ^ e) >>> 0) & this.__bin_count_mask;
  }
  set(e, t) {
    P(this, Pe, Y0).call(this);
    const r = P(this, Pe, Gc).call(this, e);
    let i = this.compute_bin_index(r),
      n = wh;
    for (;;) {
      const u = this.__bins[i];
      if (u > Ss) {
        const d = this.__entries[u - ii];
        if (P(this, Pe, vu).call(this, d, r, e)) {
          d.value = t;
          return;
        }
      } else if (u === En) {
        n !== wh && (i = n);
        const h = P(this, Pe, H0).call(this, e, t, r) + ii;
        this.__bins[i] = h;
        break;
      } else n === wh && (n = i);
      i = nu(i, this.__bin_count_mask);
    }
    const a = this.__size + 1;
    this.__size = a;
    const c = this.__bin_count;
    a / c > this.__load_factor && P(this, Pe, pf).call(this);
  }
  get(e) {
    const t = P(this, Pe, Gc).call(this, e);
    let r = this.compute_bin_index(t);
    for (;;) {
      const i = this.__bins[r];
      if (i > Ss) {
        const n = this.__entries[i - ii];
        if (P(this, Pe, vu).call(this, n, t, e)) return n.value;
      } else if (i === En) return;
      r = nu(r, this.__bin_count_mask);
    }
  }
  getOrCompute(e, t, r) {
    const i = this.get(e);
    if (i !== false) return i;
    const n = t.call(r, e);
    return this.set(e, n), n;
  }
  getOrSet(e, t) {
    const r = this.get(e);
    return r !== false ? r : (this.set(e, t), t);
  }
  delete(e) {
    const t = P(this, Pe, Gc).call(this, e);
    let r = this.compute_bin_index(t);
    const i = this.__bins,
      n = this.__entries;
    for (;;) {
      const o = i[r];
      if (o > Ss) {
        const a = o - ii,
          c = n[a];
        if (P(this, Pe, vu).call(this, c, t, e))
          return (
            P(this, Pe, ff).call(this, c),
            (i[r] = Ss),
            this.__size--,
            P(this, Pe, j0).call(this, a),
            !0
          );
      } else if (o === En) return !1;
      r = nu(r, this.__bin_count_mask);
    }
  }
  verifyHashes(e, t) {
    let r = !0;
    const i = this.__bin_count;
    for (let n = 0; n < i; n++) {
      const o = this.__bins[n];
      if (o <= Ss) continue;
      const a = this.__entries[o - ii],
        c = P(this, Pe, Gc).call(this, a.key);
      a.hash !== c &&
        (e.call(
          t,
          `Hash stored on the entry(=${a.hash}) is different from the computed key hash(=${c}).`,
          a.key,
          a.value
        ),
        (r = !1));
    }
    return r;
  }
  rebuild() {
    const e = this.__entries_bound,
      t = this.__entries,
      r = this.__bins;
    r.fill(En);
    let i = 0;
    for (let n = this.__entries_start; n < e; n++) {
      const a = t[n].hash;
      if (a === Bc) continue;
      const c = i;
      if ((i++, c !== n)) {
        const u = t[c];
        (t[c] = t[n]), (t[n] = u);
      }
      let _ = this.compute_bin_index(a);
      for (;;) {
        if (r[_] === En) {
          r[_] = c + ii;
          break;
        }
        _ = nu(_, this.__bin_count_mask);
      }
    }
    (this.__entries_start = 0),
      (this.__entries_bound = this.__size),
      this.__version++;
  }
  forEach(e, t) {
    const r = this.__bin_count,
      i = this.__entries,
      n = this.__bins;
    this.__version;
    for (let o = 0; o < r; o++) {
      const a = n[o];
      if (a <= Ss) continue;
      const c = i[a - ii];
      e.call(t, c.value, c.key, this);
    }
  }
  has(e) {
    return this.get(e) !== false;
  }
  clear() {
    const e = this.__bins,
      t = this.__bin_count;
    for (let r = 0; r < t; r++) {
      const i = e[r];
      if (i !== En) {
        if (i !== Ss) {
          const n = i - ii;
          P(this, Pe, ff).call(this, this.__entries[n]);
        }
        e[r] = En;
      }
    }
    (this.__size = 0), (this.__entries_start = 0), (this.__entries_bound = 0);
  }
  *[Symbol.iterator]() {
    const e = this.__bin_count,
      t = this.__bins,
      r = this.__entries;
    this.__version;
    for (let i = 0; i < e; i++) {
      const n = t[i];
      if (n <= Ss) continue;
      const o = r[n - ii];
      yield [o.key, o.value];
    }
  }
  *values() {
    for (const [e, t] of this) yield t;
  }
  *keys() {
    for (const [e, t] of this) yield e;
  }
}
(Pe = new WeakSet()),
  (hf = function (e) {
    if (e < this.__size)
      throw new Error(
        `count must be at least equal to must of records in the map (=${this.__size}), instead was ${e}`
      );
    (this.__entries_count_power_of_two = V3(e)),
      (this.__bin_count_power_of_two = this.__entries_count_power_of_two + 1),
      (this.__bin_count = 2 ** this.__bin_count_power_of_two),
      (this.__bin_count_mask = this.__bin_count - 1);
    const t = this.__entries_allocated_count;
    this.__entries_allocated_count = 2 ** this.__entries_count_power_of_two;
    const r = $3(this.__entries_allocated_count + ii);
    this.__bins = new r(this.__bin_count);
    const i = new Array(this.__entries_allocated_count),
      n = this.__entries;
    (this.__entries = i),
      st(n, 0, i, 0, ke(t, this.__entries_allocated_count)),
      this.__size > 0 && this.rebuild();
  }),
  (Gc = function (e) {
    const t = this.keyHashFunction(e);
    return t === Bc ? j3 : t;
  }),
  (vu = function (e, t, r) {
    return e.hash !== t
      ? !1
      : e.key === r
      ? !0
      : this.keyEqualityFunction(e.key, r);
  }),
  (H0 = function (e, t, r) {
    const i = this.__entries_bound;
    this.__entries_bound++;
    const n = this.__entries[i];
    return (
      n !== false
        ? ((n.hash = r), (n.key = e), (n.value = t))
        : (this.__entries[i] = new q3(e, t, r)),
      i
    );
  }),
  (ff = function (e) {
    (e.key = null), (e.value = null), (e.hash = Bc);
  }),
  (Y0 = function () {
    this.__entries_bound === this.__entries_allocated_count &&
      (this.__size === this.__entries_allocated_count
        ? P(this, Pe, pf).call(this)
        : this.rebuild());
  }),
  (j0 = function (e) {
    if (this.__entries_start !== e) return;
    let t = e + 1,
      r = this.__entries_bound;
    const i = this.__entries;
    for (; t < r && i[t].hash === Bc; ) t++;
    this.__entries_start = t;
  }),
  (pf = function () {
    P(this, Pe, hf).call(this, this.__entries_allocated_count * 2);
  }),
  (W3 = function () {
    let e = 0;
    for (let t = this.__entries_start; t < this.__entries_bound; t++)
      this.__entries[t].hash !== Bc && e++;
    return e;
  });
function J3() {
  return 1;
}
function Z3() {
  return 0;
}
class X0 {
  constructor() {
    (this.key = null),
      (this.value = null),
      (this.weight = 0),
      (this.next = null),
      (this.previous = null);
  }
  unlink() {
    const e = this.next,
      t = this.previous;
    t !== null && (t.next = e), e !== null && (e.previous = t);
  }
  toString() {
    return `CacheElement{ hasNext:${this.next !== null}, hasPrevious:${
      this.previous !== null
    }, weight:${this.weight}, key:${this.key}, value:${this.value} }`;
  }
}
var yr, Qt;
class pr {
  constructor({
    maxWeight: e = Number.POSITIVE_INFINITY,
    keyWeigher: t = Z3,
    valueWeigher: r = J3,
    keyHashFunction: i = Kr,
    keyEqualityFunction: n = ko,
    capacity: o,
  } = {}) {
    b(this, yr, Number.POSITIVE_INFINITY);
    b(this, Qt, 0);
    S(this, yr, e),
      (this.keyWeigher = t),
      (this.valueWeigher = r),
      (this.__first = null),
      (this.__last = null),
      (this.data = new Ct({
        keyHashFunction: i,
        keyEqualityFunction: n,
        capacity: o,
      })),
      (this.onEvicted = new ge()),
      (this.onRemoved = new ge()),
      (this.onSet = new ge());
  }
  __promote(e) {
    e !== this.__first &&
      (e === this.__last && (this.__last = e.previous),
      e.unlink(),
      (e.previous = null),
      this.__first !== null
        ? ((e.next = this.__first), (this.__first.previous = e))
        : (e.next = null),
      (this.__first = e));
  }
  size() {
    return this.data.size;
  }
  setMaxWeight(e) {
    this.maxWeight = e;
  }
  get weight() {
    return getProperty(this, Qt);
  }
  set maxWeight(e) {
    if (typeof e != "number" || e < 0)
      throw new Error(
        `Weight must be a non-negative number, instead was '${e}'`
      );
    S(this, yr, e), this.evictUntilWeight(getProperty(this, yr));
  }
  get maxWeight() {
    return getProperty(this, yr);
  }
  recomputeWeight() {
    let e = 0;
    for (let [t, r] of this.data) {
      const i = this.computeElementWeight(t, r.value);
      (r.weight = i), (e += i);
    }
    S(this, Qt, e), this.evictUntilWeight(getProperty(this, yr));
  }
  updateElementWeight(e) {
    const t = this.data.get(e);
    if (t === false) return !1;
    const r = t.weight,
      i = this.computeElementWeight(e, t.value);
    if (i === r) return !0;
    t.weight = i;
    const n = i - r;
    return (
      S(this, Qt, getProperty(this, Qt) + n),
      getProperty(this, Qt) > getProperty(this, yr) &&
        i <= getProperty(this, yr) &&
        this.evictUntilWeight(getProperty(this, yr)),
      !0
    );
  }
  computeElementWeight(e, t) {
    const r = this.keyWeigher(e),
      i = this.valueWeigher(t);
    return r + i;
  }
  findEvictionVictim() {
    return this.__last;
  }
  evictOne() {
    const e = this.findEvictionVictim();
    return e !== null
      ? (this.remove(e.key), this.onEvicted.send2(e.key, e.value), !0)
      : !1;
  }
  evictUntilWeight(e) {
    const t = Math.max(e, 0);
    for (; getProperty(this, Qt) > t; ) this.evictOne();
  }
  put(e, t) {
    let r = this.data.get(e);
    if (r === false) {
      const i = this.computeElementWeight(e, t),
        n = getProperty(this, yr) - i;
      if (n < 0) return;
      (r = new X0()),
        (r.key = e),
        (r.value = t),
        (r.next = this.__first),
        this.__first !== null && (this.__first.previous = r),
        (this.__first = r),
        this.__last === null && (this.__last = r),
        (r.weight = i),
        this.evictUntilWeight(n),
        this.data.set(e, r),
        S(this, Qt, getProperty(this, Qt) + i);
    } else {
      if (t !== r.value) {
        S(this, Qt, getProperty(this, Qt) - r.weight);
        const i = this.computeElementWeight(e, t);
        S(this, Qt, getProperty(this, Qt) + i), (r.weight = i), (r.value = t);
      }
      this.__promote(r);
    }
    this.onSet.send2(e, t);
  }
  contains(e) {
    return this.data.has(e);
  }
  get(e) {
    const t = this.data.get(e);
    return t === false ? null : (this.__promote(t), t.value);
  }
  getOrCompute(e, t, r) {
    const i = this.get(e);
    if (i !== null) return i;
    const n = t.call(r, e);
    return this.set(e, n), n;
  }
  __removeElement(e) {
    e.value,
      e === this.__first && (this.__first = e.next),
      e === this.__last && (this.__last = e.previous),
      e.unlink();
    const t = e.key;
    this.data.delete(t), S(this, Qt, getProperty(this, Qt) - e.weight);
  }
  remove(e) {
    const t = this.data.get(e);
    return t === false
      ? !1
      : (this.__removeElement(t), this.onRemoved.send2(e, t.value), !0);
  }
  silentRemove(e) {
    const t = this.data.get(e);
    return t === false ? !1 : (this.__removeElement(t), !0);
  }
  clear() {
    const e = [];
    G3(e, this.data.keys());
    const t = e.length;
    for (let r = 0; r < t; r++) {
      const i = e[r];
      this.remove(i);
    }
  }
  drop() {
    this.data.clear(),
      (this.__first = null),
      (this.__last = null),
      S(this, Qt, 0);
  }
  validate(e, t) {
    return this.data.verifyHashes((r, i, n) => {
      e.call(t, r, i, n.value);
    });
  }
}
(yr = new WeakMap()), (Qt = new WeakMap());
pr.prototype.set = pr.prototype.put;
pr.prototype.delete = pr.prototype.remove;
pr.prototype.has = pr.prototype.contains;
const Ei = [],
  br = [],
  Th = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (let s = 0, e = Th.length; s < e; ++s)
  (Ei[s] = Th[s]), (br[Th.charCodeAt(s)] = s);
br[45] = 62;
br[95] = 63;
function K3(s) {
  const e = s.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  let t = s.indexOf("=");
  t === -1 && (t = e);
  const r = t === e ? 0 : 4 - (t % 4);
  return [t, r];
}
function Q3(s, e) {
  return ((s + e) * 3) / 4 - e;
}
function e1(s) {
  let e;
  const t = K3(s),
    r = t[0],
    i = t[1],
    n = new Uint8Array(Q3(r, i));
  let o = 0;
  const a = i > 0 ? r - 4 : r;
  let c = 0;
  for (; c < a; c += 4) {
    const _ = s.charCodeAt(c),
      u = s.charCodeAt(c + 1),
      d = s.charCodeAt(c + 2),
      h = s.charCodeAt(c + 3);
    (e = (br[_] << 18) | (br[u] << 12) | (br[d] << 6) | br[h]),
      (n[o++] = (e >> 16) & 255),
      (n[o++] = (e >> 8) & 255),
      (n[o++] = e & 255);
  }
  if (i === 2) {
    const _ = s.charCodeAt(c),
      u = s.charCodeAt(c + 1);
    (e = (br[_] << 2) | (br[u] >> 4)), (n[o++] = e & 255);
  }
  if (i === 1) {
    const _ = s.charCodeAt(c),
      u = s.charCodeAt(c + 1),
      d = s.charCodeAt(c + 2);
    (e = (br[_] << 10) | (br[u] << 4) | (br[d] >> 2)),
      (n[o++] = (e >> 8) & 255),
      (n[o++] = e & 255);
  }
  return n;
}
function t1(s) {
  return (
    Ei[(s >> 18) & 63] + Ei[(s >> 12) & 63] + Ei[(s >> 6) & 63] + Ei[s & 63]
  );
}
function r1(s, e, t) {
  const r = [];
  for (let i = e; i < t; i += 3) {
    const n =
      ((s[i] << 16) & 16711680) + ((s[i + 1] << 8) & 65280) + (s[i + 2] & 255);
    r.push(t1(n));
  }
  return r.join("");
}
const Eh = 16383;
function i1(s) {
  const e = s.length,
    t = e % 3,
    r = [],
    i = e - t;
  for (let n = 0; n < i; n += Eh) {
    const o = n + Eh > i ? i : n + Eh,
      a = r1(s, n, o);
    r.push(a);
  }
  if (t === 1) {
    const n = s[e - 1];
    r.push(Ei[n >> 2] + Ei[(n << 4) & 63] + "==");
  } else if (t === 2) {
    const n = (s[e - 2] << 8) + s[e - 1];
    r.push(Ei[n >> 10] + Ei[(n >> 4) & 63] + Ei[(n << 2) & 63] + "=");
  }
  return r.join("");
}
class Uu {
  static encode(e) {
    const t = new Uint8Array(e);
    return i1(t);
  }
  static decode(e) {
    return e1(e).buffer;
  }
}
const s1 = {
  [se.Uint8]: Uint8Array,
  [se.Uint16]: Uint16Array,
  [se.Uint32]: Uint32Array,
  [se.Int8]: Int8Array,
  [se.Int16]: Int16Array,
  [se.Int32]: Int32Array,
  [se.Float16]: Uint16Array,
  [se.Float32]: Float32Array,
  [se.Float64]: Float64Array,
};
function n1(s) {
  const e = s1[s];
  if (e === false) throw new Error(`Unsupported data type '${s}'`);
  return e;
}
function o1(s, e, t) {
  let r = t,
    i = e;
  for (t & 1 && (r = (r << 5) - r + s[i++]); i < t; i += 2) {
    const n = s[i],
      o = s[i + 1],
      a = (n << 16) | o;
    r = (r << 5) - r + a;
  }
  return r;
}
function a1(s, e, t) {
  let r = t;
  for (let i = e; i < t; ++i) {
    const n = s[i];
    r = (r << 5) - r + n;
  }
  return r;
}
function c1(s, e, t) {
  let r = t,
    i = e;
  const n = t & 3;
  for (; i < e + n; i++) r = (r << 5) - r + s[i];
  for (; i < t; i += 4) {
    const o = s[i],
      a = s[i + 1],
      c = s[i + 2],
      _ = s[i + 3],
      u = o | (a << 8) | (c << 16) | (_ << 24);
    r = (r << 5) - r + u;
  }
  return r;
}
function l1(s, e, t) {
  const r = e | t;
  return r & 3
    ? r & 2
      ? c1(new Uint8Array(s, e, t), 0, t)
      : o1(new Uint16Array(s, e, t >>> 1), 0, t >>> 1)
    : a1(new Uint32Array(s, e, t >>> 2), 0, t >>> 2);
}
function _1(s) {
  if (s instanceof Int8Array) return Int8Array;
  if (s instanceof Int16Array) return Int16Array;
  if (s instanceof Int32Array) return Int32Array;
  if (s instanceof Uint8Array) return Uint8Array;
  if (s instanceof Uint8ClampedArray) return Uint8ClampedArray;
  if (s instanceof Uint16Array) return Uint16Array;
  if (s instanceof Uint32Array) return Uint32Array;
  if (s instanceof Float32Array) return Float32Array;
  if (s instanceof Float64Array) return Float64Array;
  if (Array.isArray(s)) return Array;
  throw new TypeError("Unsupported array type");
}
function Oc(s, e, t, r, i) {
  return (
    0.5 *
      (r - e + (2 * e - 5 * t + 4 * r - i + (3 * (t - r) + i - e) * s) * s) *
      s +
    t
  );
}
class et {
  constructor(e = [], t = 1, r = 0, i = 0) {
    if (!Number.isInteger(t) || t < 0)
      throw new Error(
        `itemSize must be a non-negative integer, instead was ${t}`
      );
    if (!Number.isInteger(r) || r < 0)
      throw new Error(`width must be a non-negative integer, instead was ${r}`);
    if (!Number.isInteger(i) || r < 0)
      throw new Error(
        `height must be a non-negative integer, instead was ${i}`
      );
    if (e === false) throw new Error("data was undefined");
    if (e.length < r * i * t)
      throw new Error(
        `Buffer underflow, data.length(=${
          e.length
        }) is too small. Expected at least ${r * i * t}`
      );
    (this.width = r),
      (this.height = i),
      (this.itemSize = t),
      (this.data = e),
      (this.version = 0);
  }
  sampleCatmullRomUV(e, t, r) {
    const i = this.itemSize;
    for (let n = 0; n < i; n++) r[n] = this.sampleChannelCatmullRomUV(e, t, n);
  }
  sampleChannelCatmullRomUV(e, t, r) {
    const i = e * this.width - 0.5,
      n = t * this.height - 0.5;
    return this.sampleChannelCatmullRom(i, n, r);
  }
  sampleChannelCatmullRom(e, t, r) {
    const i = Math.floor(e),
      n = Math.floor(t),
      o = e - i,
      a = t - n,
      c = o * (-0.5 + o * (1 - 0.5 * o)),
      _ = a * (-0.5 + a * (1 - 0.5 * a)),
      u = 1 + o * o * (-2.5 + 1.5 * o),
      d = 1 + a * a * (-2.5 + 1.5 * a),
      h = o * (0.5 + o * (2 - 1.5 * o)),
      p = a * (0.5 + a * (2 - 1.5 * a)),
      v = o * o * (-0.5 + 0.5 * o),
      f = a * a * (-0.5 + 0.5 * a),
      m = u + h,
      g = d + p,
      E = h / m,
      y = p / g,
      A = i - 1,
      T = n - 1,
      z = i + 2,
      C = n + 2,
      U = i + E,
      k = n + y;
    let N = 0;
    return (
      (N += this.sampleChannelBilinear(A, T, r) * c * _),
      (N += this.sampleChannelBilinear(U, T, r) * m * _),
      (N += this.sampleChannelBilinear(z, T, r) * v * _),
      (N += this.sampleChannelBilinear(A, k, r) * c * g),
      (N += this.sampleChannelBilinear(U, k, r) * m * g),
      (N += this.sampleChannelBilinear(z, k, r) * v * g),
      (N += this.sampleChannelBilinear(A, C, r) * c * f),
      (N += this.sampleChannelBilinear(U, C, r) * m * f),
      (N += this.sampleChannelBilinear(z, C, r) * v * f),
      N
    );
  }
  sampleBicubicUV(e, t, r) {
    const i = this.itemSize;
    for (let n = 0; n < i; n++) r[n] = this.sampleChannelBicubicUV(e, t, n);
  }
  sampleBicubic(e, t, r, i) {
    const n = this.itemSize;
    for (let o = 0; o < n; o++) r[o + i] = this.sampleChannelBicubic(e, t, o);
  }
  sampleChannelBicubicUV(e, t, r) {
    const i = e * this.width,
      n = t * this.height;
    return this.sampleChannelBicubic(i - 0.5, n - 0.5, r);
  }
  sampleChannelBicubic(e, t, r) {
    const i = this.itemSize,
      n = this.width,
      o = this.height,
      a = this.data,
      c = n * i,
      _ = n - 1,
      u = o - 1,
      d = Ye(e, 0, _),
      h = Ye(t, 0, u),
      p = d | 0,
      v = h | 0,
      f = d - p,
      m = h - v,
      g = ne(0, p - 1),
      E = ne(0, v - 1),
      y = ke(_, p + 1),
      A = ke(u, v + 1),
      T = ke(_, y + 1),
      z = ke(u, A + 1),
      C = E * c,
      U = v * c,
      k = A * c,
      N = z * c,
      M = C + r,
      I = U + r,
      L = k + r,
      F = N + r,
      D = g * i,
      H = p * i,
      J = y * i,
      R = T * i,
      O = a[M + D],
      q = a[M + H],
      Y = a[M + J],
      $ = a[M + R],
      K = a[I + D],
      V = a[I + H],
      j = a[I + J],
      te = a[I + R],
      re = a[L + D],
      ie = a[L + H],
      _e = a[L + J],
      ae = a[L + R],
      ue = a[F + D],
      be = a[F + H],
      ye = a[F + J],
      he = a[F + R],
      Ae = Oc(f, O, q, Y, $),
      we = Oc(f, K, V, j, te),
      Te = Oc(f, re, ie, _e, ae),
      Ue = Oc(f, ue, be, ye, he);
    return Oc(m, Ae, we, Te, Ue);
  }
  sampleBilinearUV(e, t, r, i = 0) {
    const n = this.itemSize;
    for (let o = 0; o < n; o++)
      r[o + i] = this.sampleChannelBilinearUV(e, t, o);
  }
  sampleBilinear(e, t, r, i = 0) {
    const n = this.itemSize;
    for (let o = 0; o < n; o++) r[o + i] = this.sampleChannelBilinear(e, t, o);
  }
  sampleChannelBilinearUV(e, t, r) {
    const i = e * this.width - 0.5,
      n = t * this.height - 0.5;
    return this.sampleChannelBilinear(i, n, r);
  }
  sampleChannelBilinear(e, t, r) {
    const i = this.itemSize,
      n = this.width,
      o = this.height,
      a = n * i,
      c = n - 1,
      _ = o - 1,
      u = Ye(e, 0, c),
      d = Ye(t, 0, _),
      h = u >>> 0,
      p = d >>> 0,
      v = p * a,
      f = h * i + r,
      m = v + f;
    let g, E;
    u === h ? (g = h) : (g = h + 1), d === p ? (E = p) : (E = p + 1);
    const y = this.data,
      A = y[m];
    if (h === g && p === E) return A;
    const T = u - h,
      z = d - p,
      C = g * i + r,
      U = v + C,
      k = E * a,
      N = k + f,
      M = k + C,
      I = y[U],
      L = y[N],
      F = y[M],
      D = We(A, I, T),
      H = We(L, F, T);
    return We(D, H, z);
  }
  sampleNearestUV(e, t, r) {
    const i = this.width,
      n = this.height,
      o = Math.round(e * i - 0.5),
      a = Math.round(t * n - 0.5);
    this.read(Ye(o, 0, i - 1), Ye(a, 0, n - 1), r);
  }
  readChannel(e, t, r) {
    const i = (t * this.width + e) * this.itemSize + r;
    return this.data[i];
  }
  read(e, t, r) {
    const i = this.width,
      n = this.itemSize,
      o = (t * i + e) * n;
    for (let a = 0; a < n; a++) r[a] = this.data[o + a];
  }
  write(e, t, r) {
    const i = this.width,
      n = this.itemSize,
      o = (t * i + e) * n;
    for (let a = 0; a < n; a++) this.data[o + a] = r[a];
    this.version++;
  }
  point2index(e, t) {
    return e + t * this.width;
  }
  index2point(e, t) {
    const r = this.width,
      i = e % r,
      n = (e / r) | 0;
    t.set(i, n);
  }
  copy(e, t, r, i, n, o, a) {
    const c = Math.min(o, e.width - t, this.width - i),
      _ = Math.min(a, e.height - r, this.height - n),
      u = this.itemSize,
      d = e.itemSize,
      h = Math.min(u, d),
      p = u * this.width,
      v = d * e.width,
      f = e.data,
      m = this.data;
    let g, E, y;
    for (E = 0; E < _; E++) {
      const A = (E + n) * p,
        T = (E + r) * v;
      for (g = 0; g < c; g++) {
        const z = A + (g + i) * u,
          C = T + (g + t) * d;
        for (y = 0; y < h; y++) m[z + y] = f[C + y];
      }
    }
    this.version++;
  }
  zeroFill(e, t, r, i) {
    const n = Ye(e, 0, this.width),
      o = Ye(t, 0, this.height),
      a = Ye(e + r, 0, this.width),
      c = Ye(t + i, 0, this.height),
      _ = this.data,
      u = this.itemSize,
      d = u * this.width,
      h = n * u,
      p = a * u;
    let v;
    for (v = o; v < c; v++) {
      const f = v * d;
      _.fill(0, f + h, f + p);
    }
    this.version++;
  }
  channelFill(e, t) {
    const r = this.itemSize,
      i = this.data,
      n = i.length;
    for (let o = e; o < n; o += r) i[o] = t;
    this.version++;
  }
  fill(e, t, r, i, n) {
    const o = this.width,
      a = this.height,
      c = Ye(e, 0, o),
      _ = Ye(t, 0, a),
      u = Ye(e + r, 0, o),
      d = Ye(t + i, 0, a),
      h = this.data,
      p = this.itemSize,
      v = p * o;
    let f, m, g;
    for (f = _; f < d; f++) {
      const E = f * v;
      for (m = c; m < u; m++) {
        const y = E + m * p;
        for (g = 0; g < p; g++) h[y + g] = n[g];
      }
    }
    this.version++;
  }
  writeChannel(e, t, r, i) {
    const a = (t * this.width + e) * this.itemSize + r;
    (this.data[a] = i), this.version++;
  }
  traverseCircle(e, t, r, i) {
    let n, o;
    const a = e | 0,
      c = t | 0,
      _ = r * r,
      u = Math.ceil(r);
    for (o = -u; o <= u; o++) {
      const d = o * o;
      for (n = -u; n <= u; n++) n * n + d <= _ && i(a + n, c + o, this);
    }
  }
  resize(e, t, r = !0) {
    const i = this.width,
      n = this.height;
    if (i === e && n === t) return;
    const o = this.itemSize,
      a = e * t * o,
      c = this.data,
      _ = _1(c),
      u = new _(a);
    if (r)
      if (e === i) u.set(c.subarray(0, Math.min(c.length, a)));
      else {
        const d = ke(t, n),
          h = ke(e, i);
        for (let p = 0; p < d; p++)
          for (let v = 0; v < h; v++) {
            const f = (p * e + v) * o,
              m = (p * i + v) * o;
            for (let g = 0; g < o; g++) u[f + g] = c[m + g];
          }
      }
    (this.width = e), (this.height = t), (this.data = u), this.version++;
  }
  computeByteSize() {
    let e;
    const t = this.data;
    return Array.isArray(t) ? (e = 8 * t.length) : (e = t.byteLength), e + 280;
  }
  equals(e) {
    return this === e
      ? !0
      : this.width !== e.width ||
        this.height !== e.height ||
        this.itemSize !== e.itemSize
      ? !1
      : tl(this.data, e.data);
  }
  hash() {
    const e = this.itemSize,
      t = this.width,
      r = this.height,
      i = this.data;
    let n = (((t & 65535) << 16) | (r & 65535)) ^ e;
    const a = t * r * e;
    if (tp(i)) n ^= l1(i.buffer, i.byteOffset, i.byteLength);
    else
      for (let c = 0; c < a; ++c) {
        const _ = i[c];
        n = (n << 5) - n + xt(_);
      }
    return n;
  }
  clone() {
    let e;
    if (Array.isArray(this.data)) e = this.data.slice();
    else {
      const t = this.data.constructor;
      e = new t(this.data);
    }
    return new et(e, this.itemSize, this.width, this.height);
  }
  toJSON() {
    const e = Uu.encode(this.data.buffer);
    return {
      height: this.height,
      width: this.width,
      itemSize: this.itemSize,
      type: B0(this.data),
      data: e,
    };
  }
  fromJSON({ height: e, width: t, itemSize: r, type: i, data: n }) {
    const o = n1(i);
    if (typeof n == "string") {
      const a = Uu.decode(n);
      this.data = new o(a);
    } else if (Array.isArray(n)) this.data = new o(n);
    else throw new Error("Unsupported data format");
    (this.height = e), (this.width = t), (this.itemSize = r);
  }
  static uint8clamped(e, t, r) {
    const i = new Uint8ClampedArray(t * r * e);
    return new et(i, e, t, r);
  }
  static uint8(e, t, r) {
    const i = new Uint8Array(t * r * e);
    return new et(i, e, t, r);
  }
  static uint16(e, t, r) {
    const i = new Uint16Array(t * r * e);
    return new et(i, e, t, r);
  }
  static uint32(e, t, r) {
    const i = new Uint32Array(t * r * e);
    return new et(i, e, t, r);
  }
  static int8(e, t, r) {
    const i = new Int8Array(t * r * e);
    return new et(i, e, t, r);
  }
  static int16(e, t, r) {
    const i = new Int16Array(t * r * e);
    return new et(i, e, t, r);
  }
  static int32(e, t, r) {
    const i = new Int32Array(t * r * e);
    return new et(i, e, t, r);
  }
  static float32(e, t, r) {
    const i = new Float32Array(t * r * e);
    return new et(i, e, t, r);
  }
  static float64(e, t, r) {
    const i = new Float64Array(t * r * e);
    return new et(i, e, t, r);
  }
}
et.prototype.set = et.prototype.write;
et.prototype.isSampler2D = !0;
et.typeName = "Sampler2D";
const Jr = { SRGB: 0, LinearSRGB: 1, None: 20 },
  Pd = { GenerateMipMaps: 1 },
  ft = {
    Nearest: 0,
    Linear: 1,
    NearestMipmapNearest: 4,
    NearestMipmapLinear: 5,
    LinearMipmapNearest: 6,
    LinearMipmapLinear: 7,
  },
  Nr = { ClampToEdge: 0, Repeat: 1, MirroredRepeat: 2 },
  u1 = Pd.GenerateMipMaps;
var ks;
const im = class im {
  constructor() {
    b(this, ks);
    x(this, "flags", u1);
    x(this, "minFilter", ft.LinearMipmapLinear);
    x(this, "magFilter", ft.Linear);
    x(this, "wrapS", Nr.Repeat);
    x(this, "wrapT", Nr.Repeat);
  }
  get isShadeTexture() {
    return !0;
  }
  get source() {
    return getProperty(this, ks);
  }
  setFlag(e) {
    this.flags |= e;
  }
  clearFlag(e) {
    this.flags &= ~e;
  }
  writeFlag(e, t) {
    t ? this.setFlag(e) : this.clearFlag(e);
  }
  getFlag(e) {
    return (this.flags & e) === e;
  }
  static from(e) {
    const t = new im();
    return S(t, ks, e), t;
  }
  hash() {
    return ot(
      lr(getProperty(this, ks)),
      this.flags,
      this.minFilter,
      this.magFilter,
      this.wrapS,
      this.wrapT
    );
  }
  equals(e) {
    return (
      getProperty(this, ks) === getProperty(e, ks) &&
      this.flags === e.flags &&
      this.minFilter === e.minFilter &&
      this.magFilter === e.magFilter &&
      this.wrapS === e.wrapS &&
      this.wrapT === e.wrapT
    );
  }
};
ks = new WeakMap();
let pc = im,
  d1 = 0;
var ma, ga, wr;
const Yu = class Yu {
  constructor() {
    b(this, ma, d1++);
    x(this, "color_space", Jr.LinearSRGB);
    b(this, ga);
    b(this, wr, new Uint32Array(3));
  }
  get id() {
    return getProperty(this, ma);
  }
  get source() {
    return getProperty(this, ga);
  }
  get width() {
    return getProperty(this, wr)[0];
  }
  get height() {
    return getProperty(this, wr)[1];
  }
  get depth() {
    return getProperty(this, wr)[2];
  }
  hash() {
    return getProperty(this, ma);
  }
  equals(e) {
    return getProperty(this, ma) === e.id;
  }
  static fromImageBitmap(e) {
    const t = new Yu();
    return (
      S(t, ga, e),
      (getProperty(t, wr)[0] = e.width),
      (getProperty(t, wr)[1] = e.height),
      (getProperty(t, wr)[2] = 1),
      t
    );
  }
  static fromSampler2D(e) {
    const t = new Yu();
    return (
      S(t, ga, e),
      (getProperty(t, wr)[0] = e.width),
      (getProperty(t, wr)[1] = e.height),
      (getProperty(t, wr)[2] = 1),
      t
    );
  }
};
(ma = new WeakMap()), (ga = new WeakMap()), (wr = new WeakMap());
let mc = Yu;
const h1 = new pr({
  keyEqualityFunction: ko,
  keyHashFunction: Kr,
  maxWeight: 2048,
});
function f1(s) {
  const e = et.uint8(4, 1, 1);
  (e.data[0] = pt(s.r)),
    (e.data[1] = pt(s.g)),
    (e.data[2] = pt(s.b)),
    (e.data[3] = pt(s.a));
  const t = mc.fromSampler2D(e);
  return (t.color_space = Jr.LinearSRGB), pc.from(t);
}
function Bd(s) {
  return h1.getOrCompute(s, f1);
}
function p1(s, e, t) {
  let r, i, n;
  const o = t / 100;
  o <= 66
    ? ((r = 1),
      (i = $t(
        -0.6088425710866344 -
          0.001748900018414868 * (o - 2) +
          0.4097731842899564 * Math.log(o - 2)
      )),
      o <= 20
        ? (n = 0)
        : (n = $t(
            -0.9990954974165059 +
              0.0032447435545127036 * (o - 10) +
              0.453646839257496 * Math.log(o - 10)
          )))
    : ((r = $t(
        1.3803015908551253 +
          0.0004478684462124118 * (o - 55) -
          0.15785750232675008 * Math.log(o - 55)
      )),
      (i = $t(
        1.2762722061615583 +
          0.0003115080994769546 * (o - 50) -
          0.11013841706194392 * Math.log(o - 50)
      )),
      (n = 1)),
    (s[e + 0] = r),
    (s[e + 1] = i),
    (s[e + 2] = n);
}
class gs extends Number {
  constructor(e = 0) {
    super(), (this.x = e), (this.onChanged = new ge());
  }
  valueOf() {
    return this.x;
  }
  toString() {
    return String(this.x);
  }
  getValue() {
    return this.x;
  }
  compareTo(e) {
    return this.x - e.x;
  }
  set(e) {
    const t = this.x;
    return (
      t !== e &&
        ((this.x = e),
        this.onChanged.hasHandlers() && this.onChanged.send2(e, t)),
      this
    );
  }
  setSilent(e) {
    this.x = e;
  }
  isZero() {
    return this.x === 0;
  }
  increment() {
    this._add(1);
  }
  decrement() {
    this._add(-1);
  }
  _add(e) {
    return this.set(this.x + e);
  }
  add(e) {
    return this._add(e.x);
  }
  _sub(e) {
    return this._add(-e);
  }
  sub(e) {
    return this._sub(e.x);
  }
  multiply(e) {
    return this.set(this.x * e.x);
  }
  multiplyScalar(e) {
    this.set(this.x * e);
  }
  clamp(e, t) {
    return this.set(Ye(this.x, e, t));
  }
  negate() {
    this.set(-this.x);
  }
  copy(e) {
    this.set(e.x);
  }
  clone() {
    return new gs(this.x);
  }
  equals(e) {
    return this.x === e.x;
  }
  hash() {
    return xt(this.x);
  }
  process(e) {
    e(this.x, this.x), this.onChanged.add(e);
  }
  toJSON() {
    return this.x;
  }
  fromJSON(e) {
    this.set(e);
  }
  readFromArray(e, t = 0) {
    this.set(e[t]);
  }
  writeToArray(e, t = 0) {
    e[t] = this.x;
  }
  asArray() {
    return [this.x];
  }
  toBinaryBuffer(e) {
    e.writeFloat64(this.x);
  }
  fromBinaryBuffer(e) {
    const t = e.readFloat64();
    this.set(t);
  }
  static compare(e, t) {
    return e.x - t.x;
  }
  get 0() {
    return this.x;
  }
  set 0(e) {
    this.x = e;
  }
  *[Symbol.iterator]() {
    yield this.x;
  }
}
gs.prototype.isVector1 = !0;
gs.typeName = "Vector1";
gs.zero = Object.freeze(new gs(0));
gs.one = Object.freeze(new gs(1));
let m1 = 0;
class W0 {
  constructor() {
    x(this, "id", m1++);
  }
  toString() {
    return `Light#${this.id}`;
  }
  onDimensionChanged(e, t) {
    throw new Error("Not Implemented");
  }
  offDimensionChanged(e, t) {
    throw new Error("Not Implemented");
  }
  getCenter(e) {
    throw new Error("Not Implemented");
  }
  getAABB(e) {
    throw new Error("Not Implemented");
  }
  toArray(e, t) {
    throw new Error("Not Implemented");
  }
  compare(e) {
    return this.id - e.id;
  }
}
W0.prototype.type = "Abstract";
class J0 extends W0 {
  constructor() {
    super(...arguments);
    x(this, "position", new Z());
    x(this, "direction", new Z(0, -1, 0));
    x(this, "color", new me(1, 1, 1));
    x(this, "intensity", new gs(1));
  }
}
J0.prototype.isDirectionalLight = !0;
function g1({
  intensity: s = 2.2,
  direction: e = new Z(-0.2, -1, 0.2),
  temperature: t = 5500,
} = {}) {
  const r = new J0();
  r.direction.copy(e), r.direction.normalize(), p1(r.color, 0, t);
  const i = r.color.computeLuminance(),
    n = s / i;
  return r.intensity.set(n), r;
}
function Z0(s, e = 3) {
  if (s === false) return 1;
  if (s === null) return 2;
  let t = 0;
  const r = typeof s;
  if (r === "string") t = Re(s);
  else if (r === "number") t = xt(s);
  else if (r === "boolean") t = s ? 1 : 0;
  else if (r === "object")
    if (e <= 0) t = 3;
    else
      for (let i in s) {
        const n = Re(i),
          o = s[i],
          a = n ^ Z0(o, e - 1);
        (t = (t << 5) - t + a), (t |= 0);
      }
  return t;
}
function v1(s, e, t, r) {
  if (s === e) return !0;
  if (s === null || e === null || s === false || e === false) return !1;
  const i = s.length;
  if (i !== e.length) return !1;
  for (let n = 0; n < i; n++) {
    const o = s[n],
      a = e[n];
    if (!t.call(r, o, a)) return !1;
  }
  return !0;
}
function op(s, e, t = op, r = null) {
  if (s === e) return !0;
  const i = typeof s;
  if (i !== typeof e || i !== "object" || s === null || e === null) return !1;
  if (Array.isArray(s)) return Array.isArray(e) ? v1(s, e, t, r) : !1;
  if (typeof s.equals == "function" && typeof e.equals == "function")
    return s.equals(e);
  const o = Object.keys(s),
    a = Object.keys(e);
  if ((o.sort(), a.sort(), !hr(o, a))) return !1;
  const c = o.length;
  for (let _ = 0; _ < c; _++) {
    const u = o[_],
      d = s[u],
      h = e[u];
    if (!t.call(r, d, h)) return !1;
  }
  return !0;
}
const mf = 16,
  gf = 8;
class Od {
  constructor() {
    x(this, "cache", new Float32Array(1 + mf));
    x(this, "live", new Float32Array(1 + gf));
  }
  static from(e, t) {
    const r = new Od();
    return r.live.set(t), r.cache.set(e), r;
  }
}
const x1 = Od.from(
  [
    0, 0.779, 0.791, 0.789, 0.981, 0.843, 0.726, 0.847, 0.882, 0.867, 0.799,
    0.642, 0.613, 0.6, 0.568, 0.372, 0.234,
  ],
  [0, 0.995, 0.713, 0.45, 0.404, 0.059, 0.005, 0.147, 0.006]
);
Od.from(
  [
    0, 1, 1, 1, 0.453, 0.561, 0.49, 0.459, 0.179, 0.526, 0, 0.227, 0.184, 0.49,
    0.112, 0.05, 0.131,
  ],
  [0, 0.956, 0.786, 0.577, 0.558, 0.618, 0.549, 0.499, 0.489]
);
class b1 {
  constructor() {
    x(this, "counts", new Uint32Array(1));
    x(this, "offsets", new Uint32Array(1));
    x(this, "data", new Uint32Array(1));
  }
  allocate(e, t) {
    (this.counts = new Uint32Array(e)),
      (this.offsets = new Uint32Array(e)),
      (this.data = new Uint32Array(t));
  }
}
function y1(s, e, t, r) {
  const i = t / 3;
  s.allocate(r, t);
  const n = s.counts;
  for (let _ = 0; _ < t; ++_) {
    const u = e[_];
    n[u]++;
  }
  let o = 0;
  const a = s.offsets;
  for (let _ = 0; _ < r; ++_) (a[_] = o), (o += n[_]);
  const c = s.data;
  for (let _ = 0; _ < i; ++_) {
    const u = _ * 3,
      d = e[u],
      h = e[u + 1],
      p = e[u + 2];
    (c[a[d]++] = _), (c[a[h]++] = _), (c[a[p]++] = _);
  }
  for (let _ = 0; _ < r; ++_) a[_] -= n[_];
}
function Gm(s, e, t) {
  const r = t < gf ? t : gf;
  return s.cache[1 + e] + s.live[r];
}
function w1(s, e, t, r, i) {
  if (t === 0 || r === 0) return;
  s === e && (e = new Uint32Array(e));
  const n = 16,
    o = t / 3,
    a = new b1();
  y1(a, e, t, r);
  const c = new Uint32Array(r);
  c.set(a.counts);
  const _ = new Uint8Array(o),
    u = new Float32Array(r);
  for (let E = 0; E < r; ++E) u[E] = Gm(i, -1, c[E]);
  const d = new Float32Array(o);
  for (let E = 0; E < o; ++E) {
    const y = E * 3,
      A = e[y],
      T = e[y + 1],
      z = e[y + 2];
    d[E] = u[A] + u[T] + u[z];
  }
  let h = new Uint32Array(mf + 3),
    p = new Uint32Array(mf + 3),
    v = 0,
    f = 0,
    m = 1,
    g = 0;
  for (; f !== -1; ) {
    const E = f * 3,
      y = e[E],
      A = e[E + 1],
      T = e[E + 2],
      z = g * 3;
    (s[z] = y), (s[z + 1] = A), (s[z + 2] = T), g++, (_[f] = !0), (d[f] = 0);
    let C = 0;
    (p[C++] = y), (p[C++] = A), (p[C++] = T);
    for (let M = 0; M < v; ++M) {
      const I = h[M];
      I !== y && I !== A && I !== T && (p[C++] = I);
    }
    const U = h;
    (h = p), (p = U), (v = C > n ? n : C), c[y]--, c[A]--, c[T]--;
    for (let M = 0; M < 3; ++M) {
      const I = e[E + M],
        L = a.offsets[I],
        F = a.data,
        D = a.counts[I];
      for (let H = 0; H < D; ++H)
        if (F[H + L] === f) {
          (F[L + H] = F[L + D - 1]), a.counts[I]--;
          break;
        }
    }
    let k = -1,
      N = 0;
    for (let M = 0; M < C; ++M) {
      const I = h[M],
        L = M >= n ? -1 : M,
        F = Gm(i, L, c[I]),
        D = F - u[I];
      u[I] = F;
      const H = a.offsets[I],
        J = H + a.counts[I];
      for (let R = H; R !== J; ++R) {
        const O = a.data[R],
          q = d[O] + D;
        N < q && ((k = O), (N = q)), (d[O] = q);
      }
    }
    if (((f = k), f === -1))
      for (; m < o; ) {
        if (_[m] === 0) {
          f = m;
          break;
        }
        ++m;
      }
  }
}
function T1(s, e, t, r) {
  w1(s, e, t, r, x1);
}
let E1 = 0;
var ju;
class A1 {
  constructor() {
    b(this, ju, E1++);
    x(this, "name", "");
  }
  get id() {
    return getProperty(this, ju);
  }
  equals(e) {
    return Object.getPrototypeOf(this) === Object.getPrototypeOf(e);
  }
  hash() {
    return 0;
  }
}
ju = new WeakMap();
class K0 extends A1 {
  constructor() {
    super(...arguments);
    x(this, "texture_albedo");
    x(this, "diffuse_color", new me(1, 1, 1, 1));
    x(this, "texture_normal");
    x(this, "texture_orm");
    x(this, "texture_emissive");
    x(this, "roughness_factor", 1);
    x(this, "metallic_factor", 0);
    x(this, "emissive_factor", new me(0, 0, 0));
  }
  hash() {
    return ot(
      super.hash(),
      this.diffuse_color.hash(),
      lr(this.texture_albedo),
      lr(this.texture_normal),
      lr(this.texture_orm),
      lr(this.texture_emissive)
    );
  }
  equals(t) {
    return super.equals(t)
      ? this.roughness_factor === t.roughness_factor &&
          this.metallic_factor === t.metallic_factor &&
          St(this.texture_albedo, t.texture_albedo) &&
          this.diffuse_color.equals(t.diffuse_color) &&
          St(this.texture_normal, t.texture_normal) &&
          St(this.texture_orm, t.texture_orm) &&
          St(this.texture_emissive, t.texture_emissive) &&
          this.emissive_factor.equals(t.emissive_factor)
      : !1;
  }
}
const In = Object.freeze(new me(0.04, 0.04, 0.04));
function S1(s, e, t) {
  if (e < In.r) return 0;
  const r = In.r,
    i = (s * t) / (1 - In.r) + e - 2 * In.r,
    n = In.r - e,
    o = Math.max(i * i - 4 * r * n, 0);
  return $t((-i + Math.sqrt(o)) / (2 * r));
}
function Vm(s) {
  const e = s.r,
    t = s.g,
    r = s.b,
    i = e * e,
    n = t * t,
    o = r * r;
  return Math.sqrt(0.299 * i + 0.587 * n + 0.114 * o);
}
const $m = 1e-6;
function z1(s, e, t) {
  const r = 1 - Math.max(e.r, e.g, e.b),
    i = S1(Vm(s), Vm(e), r),
    n = r / (1 - In.r) / Math.max(1 - i, $m),
    o = i * i,
    a = In.r * (1 - i),
    c = 1 / Math.max(i, $m);
  return {
    base_color: new me(
      $t(We(s.r * n, (e.r - a) * c, o)),
      $t(We(s.g * n, (e.g - a) * c, o)),
      $t(We(s.b * n, (e.b - a) * c, o))
    ),
    metallic: i,
    roughness: 1 - t,
  };
}
function C1(s, e, t, r) {
  let i = 1 / 0,
    n = 1 / 0,
    o = 1 / 0,
    a = -1 / 0,
    c = -1 / 0,
    _ = -1 / 0;
  for (let u = 0; u < t; u += 3) {
    const d = e[u],
      h = e[u + 1],
      p = e[u + 2],
      v = r[0] * d + r[4] * h + r[8] * p + r[12],
      f = r[1] * d + r[5] * h + r[9] * p + r[13],
      m = r[2] * d + r[6] * h + r[10] * p + r[14];
    (i = ke(v, i)),
      (n = ke(f, n)),
      (o = ke(m, o)),
      (a = ne(v, a)),
      (c = ne(f, c)),
      (_ = ne(m, _));
  }
  s.setBounds(i, n, o, a, c, _);
}
class la {
  constructor() {
    x(this, "transform_global", new Float32Array(Cu));
    x(this, "transform_local", new Float32Array(Cu));
    x(this, "parent", null);
    x(this, "children", []);
  }
  copy(e) {
    this.transform_local.set(e.transform_local),
      this.transform_global.set(e.transform_global);
  }
  clone() {
    const e = new la();
    e.copy(this);
    const t = this.children,
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i].clone();
      (n.parent = e), e.children.push(n);
    }
    return e;
  }
  traverse(e, t) {
    e.call(t, this);
    for (const r of this.children) r.traverse(e, t);
  }
  updateMatrices() {
    this.parent === null && this.transform_global.set(this.transform_local);
    const e = this.children,
      t = e.length;
    for (let r = 0; r < t; r++) {
      const i = e[r];
      Ir(i.transform_global, this.transform_global, i.transform_local),
        i.updateMatrices();
    }
  }
  addChildren(e) {
    const t = e.length;
    for (let r = 0; r < t; r++) this.addChild(e[r]);
  }
  addChild(e) {
    if (e === this) throw new Error("Can't add to self");
    if (e.parent !== null)
      throw new Error("node already attached to something");
    (e.parent = this), this.children.push(e);
  }
}
let U1 = 0;
const I1 = new Z(),
  qm = new $e(),
  N1 = new Z();
var Xu, Bn;
const Wu = class Wu extends la {
  constructor() {
    super(...arguments);
    b(this, Xu, U1++);
    x(this, "name", "");
    x(this, "geometry");
    x(this, "material");
    x(this, "bounding_box", new Float32Array(6));
    b(this, Bn, 0);
  }
  get id() {
    return getProperty(this, Xu);
  }
  get version() {
    return getProperty(this, Bn);
  }
  set needsUpdate(t) {
    t && ze(this, Bn)._++;
  }
  clone() {
    const t = new Wu();
    return t.copy(this), t;
  }
  copy(t) {
    this !== t &&
      (super.copy(t),
      (this.geometry = t.geometry),
      (this.material = t.material),
      (this.name = t.name),
      this.bounding_box.set(t.bounding_box),
      ze(this, Bn)._++);
  }
  equals(t) {
    return (
      this.name === t.name &&
      St(this.geometry, t.geometry) &&
      St(this.material, t.material) &&
      hr(this.transform_global, t.transform_global)
    );
  }
  updateMatrices() {
    super.updateMatrices(), this.updateBoundsBasic(), ze(this, Bn)._++;
  }
  updateBoundsBasic() {
    this.geometry.ensureBounds(),
      h0(this.bounding_box, this.geometry.bounding_box, this.transform_global);
  }
  updateBoundsTight() {
    if (
      (this.geometry.ensureBounds(),
      w0(this.transform_global, I1, qm, N1),
      qm.roughlyEquals($e.identity))
    )
      this.updateBoundsBasic();
    else {
      const r = this.geometry.getAttribute(Me.Position).data,
        i = new fr();
      C1(i, r, r.length, this.transform_global),
        i.writeToArray(this.bounding_box, 0);
    }
  }
  static from(t, r, i) {
    const n = new Wu();
    return (
      (n.geometry = t),
      (n.material = r),
      i !== false && n.transform_local.set(i),
      n.updateMatrices(),
      n
    );
  }
};
(Xu = new WeakMap()), (Bn = new WeakMap());
let Iu = Wu;
Iu.prototype.isMesh = !0;
const M1 = "/";
function k1(s) {
  if (typeof s != "string") throw new Error("path is not a string");
  const e = s.lastIndexOf(M1);
  return e !== -1 ? s.substring(e + 1) : s;
}
function R1(s) {
  const e = typeof s;
  if (e !== "string")
    throw new Error(`path must be a string, instead was '${e}'`);
  const t = k1(s),
    r = t.lastIndexOf(".");
  return r !== -1 ? t.substring(r + 1) : null;
}
const L1 = 16,
  Ah = 0,
  Fc = 1,
  Hm = 2,
  P1 = 2,
  B1 = new Array(0);
var Ge, at, gt, Or, Oe, ia, Vc, $c, vf, Q0, xf;
class Qr {
  constructor(e = L1) {
    b(this, Oe);
    b(this, Ge, B1);
    b(this, at, 0);
    b(this, gt, 0);
    b(this, Or, Fc);
    const t = np(ne(1, e));
    S(this, Ge, new Array(t));
  }
  isEmpty() {
    return getProperty(this, Or) === Fc;
  }
  clear() {
    if (getProperty(this, Or) !== Fc) {
      let e = getProperty(this, at);
      const t = getProperty(this, gt);
      do
        (getProperty(this, Ge)[e] = false), (e = P(this, Oe, Vc).call(this, e));
      while (e !== t);
      S(this, Or, Fc);
    }
    S(this, at, 0), S(this, gt, 0);
  }
  size() {
    const e = getProperty(this, Ge);
    if (getProperty(this, Or) === Ah) return e.length;
    const t = getProperty(this, at),
      r = getProperty(this, gt);
    return t <= r ? r - t : r + e.length - t;
  }
  remove(e) {
    const t = P(this, Oe, xf).call(this, e);
    return t === -1 ? !1 : (P(this, Oe, Q0).call(this, t), !0);
  }
  has(e) {
    return P(this, Oe, xf).call(this, e) !== -1;
  }
  addFirst(e) {
    P(this, Oe, vf).call(this),
      S(this, at, P(this, Oe, $c).call(this, getProperty(this, at))),
      (getProperty(this, Ge)[getProperty(this, at)] = e),
      P(this, Oe, ia).call(this, !0);
  }
  removeFirst() {
    const e = getProperty(this, Ge)[getProperty(this, at)];
    return (
      (getProperty(this, Ge)[getProperty(this, at)] = false),
      S(this, at, P(this, Oe, Vc).call(this, getProperty(this, at))),
      P(this, Oe, ia).call(this, !1),
      e
    );
  }
  getFirst() {
    return getProperty(this, Ge)[getProperty(this, at)];
  }
  addLast(e) {
    P(this, Oe, vf).call(this),
      (getProperty(this, Ge)[getProperty(this, gt)] = e),
      S(this, gt, P(this, Oe, Vc).call(this, getProperty(this, gt))),
      P(this, Oe, ia).call(this, !0);
  }
  removeLast() {
    const e = P(this, Oe, $c).call(this, getProperty(this, gt)),
      t = getProperty(this, Ge)[e];
    return (
      (getProperty(this, Ge)[e] = false),
      S(this, gt, e),
      P(this, Oe, ia).call(this, !1),
      t
    );
  }
  getLast() {
    const e = P(this, Oe, $c).call(this, getProperty(this, gt));
    return getProperty(this, Ge)[e];
  }
  getElementByIndex(e) {
    if (e >= this.size()) return;
    const t = getProperty(this, Ge),
      r = (getProperty(this, at) + e) % t.length;
    return t[r];
  }
  toArray(e = [], t = 0) {
    const r = this.size();
    for (let i = 0; i < r; i++) e[i] = this.getElementByIndex(i);
    return e;
  }
  *[Symbol.iterator]() {
    const e = this.size();
    for (let t = 0; t < e; t++) yield this.getElementByIndex(t);
  }
}
(Ge = new WeakMap()),
  (at = new WeakMap()),
  (gt = new WeakMap()),
  (Or = new WeakMap()),
  (Oe = new WeakSet()),
  (ia = function (e) {
    const t = getProperty(this, at),
      r = getProperty(this, gt);
    t === r ? S(this, Or, e ? Ah : Fc) : S(this, Or, Hm);
  }),
  (Vc = function (e) {
    const t = e + 1,
      r = getProperty(this, Ge).length;
    return t >= r ? 0 : t;
  }),
  ($c = function (e) {
    const t = e - 1;
    return t < 0 ? getProperty(this, Ge).length - 1 : t;
  }),
  (vf = function () {
    if (getProperty(this, Or) !== Ah) return;
    const t = getProperty(this, Ge).length;
    if (_r === t) throw new Error("Maximum array size exceeded");
    let r = t * P1;
    r > _r && (r = _r);
    const i = new Array(r),
      n = getProperty(this, at);
    st(getProperty(this, Ge), n, i, 0, t - n),
      st(getProperty(this, Ge), 0, i, t - n, n),
      S(this, at, 0),
      S(this, gt, t),
      S(this, Or, Hm),
      S(this, Ge, i);
  }),
  (Q0 = function (e) {
    let t = e;
    const r = getProperty(this, gt);
    for (; t !== r; ) {
      const i = P(this, Oe, Vc).call(this, t);
      (getProperty(this, Ge)[t] = getProperty(this, Ge)[i]), (t = i);
    }
    S(this, gt, P(this, Oe, $c).call(this, r)),
      (getProperty(this, Ge)[t] = false),
      P(this, Oe, ia).call(this, !1);
  }),
  (xf = function (e) {
    const t = this.size(),
      r = getProperty(this, Ge),
      i = r.length,
      n = getProperty(this, at);
    for (let o = 0; o < t; o++) {
      const a = (n + o) % i;
      if (r[a] === e) return o;
    }
    return -1;
  });
Qr.prototype.peek = Qr.prototype.getFirst;
Qr.prototype.push = Qr.prototype.addFirst;
Qr.prototype.pop = Qr.prototype.removeFirst;
Qr.prototype.add = Qr.prototype.addLast;
var bl, yc, ev, tv;
class O1 {
  constructor(e) {
    b(this, yc);
    x(this, "device");
    x(this, "pipelines", {});
    x(this, "sampler");
    b(this, bl, new Qr());
    (this.device = e),
      (this.sampler = e.createSampler({ minFilter: "linear" }));
  }
  schedule(e, t) {
    getProperty(this, bl).addLast({ texture: e, descriptor: t });
  }
  update(e = 1 / 0) {
    const t = performance.now(),
      r = getProperty(this, bl);
    for (; !r.isEmpty(); ) {
      const i = r.removeFirst();
      if (
        (this.generateMipmap(i.texture, i.descriptor),
        performance.now() - t >= e)
      )
        break;
    }
  }
  flush() {
    this.update();
  }
  getMipmapPipeline(e) {
    let t = this.pipelines[e];
    return (
      t === false &&
        ((t = P(this, yc, ev).call(this, e)), (this.pipelines[e] = t)),
      t
    );
  }
  generateMipmap(e, t, r) {
    if (t.mipLevelCount <= 1) return e;
    const i = this.getMipmapPipeline(t.format);
    if (t.dimension === "3d" || t.dimension === "1d")
      throw new Error(
        "Generating mipmaps for non-2d textures is currently unsupported!"
      );
    let n = e;
    const o = t.size.depthOrArrayLayers || 1,
      a = (t.usage & GPUTextureUsage.RENDER_ATTACHMENT) !== 0,
      c = this.device;
    if (!a) {
      const u = {
        size: {
          width: Math.max(1, t.size.width >>> 1),
          height: Math.max(1, t.size.height >>> 1),
          depthOrArrayLayers: o,
        },
        format: t.format,
        usage:
          GPUTextureUsage.TEXTURE_BINDING |
          GPUTextureUsage.COPY_SRC |
          GPUTextureUsage.RENDER_ATTACHMENT,
        mipLevelCount: t.mipLevelCount - 1,
      };
      n = c.createTexture(u);
    }
    let _ = !1;
    r === false && ((r = c.createCommandEncoder({})), (_ = !0));
    for (let u = 0; u < o; ++u) {
      let d = e.createView({
          baseMipLevel: 0,
          mipLevelCount: 1,
          dimension: "2d",
          baseArrayLayer: u,
          arrayLayerCount: 1,
        }),
        h = a ? 1 : 0;
      for (let p = 1; p < t.mipLevelCount; ++p) {
        const v = n.createView({
            baseMipLevel: h++,
            mipLevelCount: 1,
            dimension: "2d",
            baseArrayLayer: u,
            arrayLayerCount: 1,
          }),
          f = r.beginRenderPass({
            colorAttachments: [{ view: v, loadOp: "clear", storeOp: "store" }],
          }),
          m = c.createBindGroup({
            layout: this.bindGroupLayout,
            entries: [
              { binding: 0, resource: this.sampler },
              { binding: 1, resource: d },
            ],
          });
        f.setPipeline(i),
          f.setBindGroup(0, m),
          f.draw(3, 1, 0, 0),
          f.end(),
          (d = v);
      }
    }
    if (!a) {
      const u = {
        width: Math.max(1, t.size.width >>> 1),
        height: Math.max(1, t.size.height >>> 1),
        depthOrArrayLayers: o,
      };
      for (let d = 1; d < t.mipLevelCount; ++d)
        r.copyTextureToTexture(
          { texture: n, mipLevel: d - 1 },
          { texture: e, mipLevel: d },
          u
        ),
          (u.width = Math.max(1, u.width >>> 1)),
          (u.height = Math.max(1, u.height >>> 1));
    }
    return _ && c.queue.submit([r.finish()]), a || n.destroy(), e;
  }
}
(bl = new WeakMap()),
  (yc = new WeakSet()),
  (ev = function (e) {
    return (
      this.mipmapShaderModule === false &&
        (this.mipmapShaderModule = P(this, yc, tv).call(this)),
      this.device.createRenderPipeline({
        layout: this.pipelineLayout,
        vertex: { module: this.mipmapShaderModule, entryPoint: "vertexMain" },
        fragment: {
          module: this.mipmapShaderModule,
          entryPoint: "fragmentMain",
          targets: [{ format: e }],
        },
      })
    );
  }),
  (tv = function () {
    const e = this.device.createShaderModule({
      label: "Mipmap Generator",
      code: `
            var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
              vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

            struct VertexOutput {
              @builtin(position) position : vec4<f32>,
              @location(0) texCoord : vec2<f32>,
            };

            @vertex
            fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
              var output : VertexOutput;
              output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
              output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
              return output;
            }

            @group(0) @binding(0) var imgSampler : sampler;
            @group(0) @binding(1) var img : texture_2d<f32>;

            @fragment
            fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
              return textureSample(img, imgSampler, texCoord);
            }
          `,
    });
    return (
      (this.bindGroupLayout = this.device.createBindGroupLayout({
        label: "Mipmap Generator",
        entries: [
          { binding: 0, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
          { binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: {} },
        ],
      })),
      (this.pipelineLayout = this.device.createPipelineLayout({
        label: "Mipmap Generator",
        bindGroupLayouts: [this.bindGroupLayout],
      })),
      e
    );
  });
const Ym = 1179937895,
  Sh = { JSON: 1313821514, BIN: 5130562 },
  F1 = [0, 0, 0],
  D1 = [0, 0, 0, 1],
  G1 = [1, 1, 1],
  V1 = new RegExp(`^${window.location.protocol}`, "i"),
  $1 = /^data:/;
function jm(s, e) {
  return s.match(V1) || s.match($1) ? s : e + s;
}
class xu {
  constructor(e) {
    x(this, "min", gu(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE));
    x(this, "max", gu(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE));
    e && (Nm(this.min, e.min), Nm(this.max, e.max));
  }
  union(e) {
    km(this.min, this.min, e.min), Rm(this.max, this.max, e.max);
  }
  transform(e) {
    const t = [
      [this.min[0], this.min[1], this.min[2]],
      [this.min[0], this.min[1], this.max[2]],
      [this.min[0], this.max[1], this.min[2]],
      [this.min[0], this.max[1], this.max[2]],
      [this.max[0], this.min[1], this.min[2]],
      [this.max[0], this.min[1], this.max[2]],
      [this.max[0], this.max[1], this.min[2]],
      [this.max[0], this.max[1], this.max[2]],
    ];
    Mm(this.min, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
      Mm(this.max, Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
    for (const r of t)
      f3(r, r, e), km(this.min, this.min, r), Rm(this.max, this.max, r);
  }
  get center() {
    return gu(
      (this.max[0] + this.min[0]) * 0.5,
      (this.max[1] + this.min[1]) * 0.5,
      (this.max[2] + this.min[2]) * 0.5
    );
  }
  get radius() {
    return h3(this.max, this.min) * 0.5;
  }
}
function rv(s, e, t) {
  if (!e.worldMatrix) {
    if (
      (e.matrix
        ? (e.worldMatrix = Im(e.matrix))
        : ((e.worldMatrix = Si()),
          l3(e.worldMatrix, e.rotation, e.translation, e.scale)),
      z0(e.worldMatrix, t, e.worldMatrix),
      (e.normalMatrix = Im(e.worldMatrix)),
      (e.normalMatrix[12] = 0),
      (e.normalMatrix[13] = 0),
      (e.normalMatrix[14] = 0),
      a3(e.normalMatrix, c3(e.normalMatrix, e.normalMatrix)),
      "mesh" in e)
    ) {
      const r = s.meshes[e.mesh];
      if (!r.aabb) {
        r.aabb = new xu();
        for (const i of r.primitives)
          r.aabb.union(s.accessors[i.attributes.POSITION]);
      }
      (e.aabb = new xu(r.aabb)), e.aabb.transform(e.worldMatrix);
    }
    if (e.children)
      for (const r of e.children) {
        const i = s.nodes[r];
        rv(s, i, e.worldMatrix),
          i.aabb && (e.aabb ? e.aabb.union(i.aabb) : (e.aabb = new xu(i.aabb)));
      }
  }
}
class Mn {
  constructor() {
    x(this, "loadImageSlots");
  }
  async loadFromUrl(e) {
    const t = e.lastIndexOf("/"),
      r = t !== 0 ? e.substring(0, t + 1) : "",
      i = await fetch(e),
      n = R1(e).toLowerCase();
    if (n === "gltf") return this.loadFromJson(await i.json(), r);
    if (n === "glb") return this.loadFromBinary(await i.arrayBuffer(), r);
    throw new Error(`Unrecognized file extension '${n}'`);
  }
  async loadFromBinary(e, t) {
    if (e.byteLength < 12)
      throw new Error(
        `Binary too small, expected at least 12 bytes, instead was ${e.byteLength}`
      );
    const r = new DataView(e, 0, 12),
      i = r.getUint32(0, !0),
      n = r.getUint32(4, !0),
      o = r.getUint32(8, !0);
    if (i !== Ym)
      throw new Error(
        `Invalid magic string in binary header, expected ${Ym}, instead got ${i}.`
      );
    if (n !== 2) throw new Error("Incompatible version in binary header.");
    let a = {},
      c = 12;
    for (; c < o; ) {
      const d = new DataView(e, c, 8),
        h = d.getUint32(0, !0),
        p = d.getUint32(4, !0);
      (a[p] = e.slice(c + 8, c + 8 + h)), (c += h + 8);
    }
    if (!a[Sh.JSON]) throw new Error("File contained no json chunk.");
    const u = new TextDecoder("utf-8").decode(a[Sh.JSON]);
    return this.loadFromJson(JSON.parse(u), t, a[Sh.BIN]);
  }
  async loadFromJson(e, t, r = null) {
    var a;
    if (!t) throw new Error("baseUrl must be specified.");
    if (!e.asset) throw new Error("Missing asset description.");
    if (e.asset.minVersion != "2.0" && e.asset.version != "2.0")
      throw new Error("Incompatible asset version.");
    for (const c of e.accessors)
      (c.byteOffset = c.byteOffset ?? 0), (c.normalized = c.normalized ?? !1);
    for (const c of e.bufferViews) c.byteOffset = c.byteOffset ?? 0;
    for (const c of e.nodes)
      c.matrix ||
        ((c.rotation = c.rotation ?? D1),
        (c.scale = c.scale ?? G1),
        (c.translation = c.translation ?? F1));
    if (e.samplers)
      for (const c of e.samplers)
        (c.wrapS = c.wrapS ?? Nt.REPEAT), (c.wrapT = c.wrapT ?? Nt.REPEAT);
    const i = [];
    if (r) i.push(Promise.resolve(r));
    else
      for (const c in e.buffers) {
        const _ = e.buffers[c],
          u = jm(_.uri, t);
        i[c] = fetch(u).then((d) => d.arrayBuffer());
      }
    let n;
    if (this.loadImageSlots) {
      n = new Set();
      for (const c of e.materials)
        for (const _ of this.loadImageSlots) {
          const u = c[_] ?? c.pbrMetallicRoughness[_];
          u !== false && n.add(e.textures[u.index].source);
        }
    }
    const o = [];
    for (let c = 0; c < ((a = e.images) == null ? false : a.length); ++c) {
      if (n && !n.has(c)) continue;
      const _ = e.images[c];
      if (_.uri) {
        const u = jm(_.uri, t);
        o[c] = fetch(u)
          .then((d) => d.blob())
          .then((d) => createImageBitmap(d));
      } else {
        const u = e.bufferViews[_.bufferView];
        o[c] = i[u.buffer].then((d) => {
          const h = new Blob([new Uint8Array(d, u.byteOffset, u.byteLength)], {
            type: _.mimeType,
          });
          return createImageBitmap(h);
        });
      }
    }
    for (const c of Object.values(e.scenes))
      for (const _ of c.nodes) {
        const u = e.nodes[_];
        rv(e, u, Si()),
          u.aabb && (c.aabb ? c.aabb.union(u.aabb) : (c.aabb = new xu(u.aabb)));
      }
    return (
      (e.buffers = await Promise.all(i)), (e.images = await Promise.all(o)), e
    );
  }
  static componentCountForType(e) {
    switch (e) {
      case "SCALAR":
        return 1;
      case "VEC2":
        return 2;
      case "VEC3":
        return 3;
      case "VEC4":
        return 4;
      default:
        return 0;
    }
  }
  static sizeForComponentType(e) {
    switch (e) {
      case Nt.BYTE:
        return 1;
      case Nt.UNSIGNED_BYTE:
        return 1;
      case Nt.SHORT:
        return 2;
      case Nt.UNSIGNED_SHORT:
        return 2;
      case Nt.UNSIGNED_INT:
        return 4;
      case Nt.FLOAT:
        return 4;
      default:
        return 0;
    }
  }
  static ArrayTypeForComponentType(e) {
    switch (e) {
      case Nt.BYTE:
        return Int8Array;
      case Nt.UNSIGNED_BYTE:
        return Uint8Array;
      case Nt.SHORT:
        return Int16Array;
      case Nt.UNSIGNED_SHORT:
        return Uint16Array;
      case Nt.UNSIGNED_INT:
        return Uint32Array;
      case Nt.FLOAT:
        return Float32Array;
      default:
        throw new Error(`Unsupported type ${e}`);
    }
  }
  static packedArrayStrideForAccessor(e) {
    return (
      Mn.sizeForComponentType(e.componentType) *
      Mn.componentCountForType(e.type)
    );
  }
}
const Nt = WebGLRenderingContext,
  q1 = !1,
  Xm = WebGLRenderingContext,
  Wm = {
    9728: ft.Nearest,
    9729: ft.Linear,
    9984: ft.NearestMipmapNearest,
    9985: ft.LinearMipmapNearest,
    9986: ft.NearestMipmapLinear,
    9987: ft.LinearMipmapLinear,
  },
  Jm = { 33071: Nr.ClampToEdge, 33648: Nr.MirroredRepeat, 10497: Nr.Repeat };
function H1(s, e) {
  const t = new K0();
  typeof s.name == "string" && (t.name = s.name);
  const r = s.normalTexture;
  r !== false && (t.texture_normal = e[r.index]);
  const i = s.emissiveTexture;
  i !== false &&
    ((t.texture_emissive = e[i.index]),
    (t.texture_emissive.source.color_space = Jr.SRGB)),
    s.emissiveFactor !== false
      ? t.emissive_factor.setRGB(...s.emissiveFactor)
      : t.emissive_factor.setRGB(0, 0, 0);
  const n = s.pbrMetallicRoughness;
  if (n !== false) {
    const a = n.baseColorFactor;
    a !== false && t.diffuse_color.fromArray(a);
    const c = n.baseColorTexture;
    c !== false &&
      ((t.texture_albedo = e[c.index]),
      (t.texture_albedo.source.color_space = Jr.SRGB));
    const _ = n.metallicRoughnessTexture;
    _ !== false && (t.texture_orm = e[_.index]),
      (t.roughness_factor = n.roughnessFactor ?? 1),
      (t.metallic_factor = n.metallicFactor ?? 1);
  }
  const o = s.extensions;
  if (o !== false) {
    const a = o.KHR_materials_pbrSpecularGlossiness;
    if (a !== false) {
      const _ = new me(),
        u = new me();
      let d = 0;
      const h = a.diffuseFactor;
      h !== false && _.fromArray(h);
      const p = a.specularFactor;
      p !== false && u.setRGB(...p);
      const v = a.glossinessFactor;
      v !== false && (d = v);
      const f = z1(_, u, d);
      t.diffuse_color.copy(f.base_color);
    }
    o.KHR_materials_ior;
    const c = o.KHR_materials_specular;
    c !== false && (c.specularFactor, c.specularColorFactor);
  }
  return t;
}
function Zm(s) {
  const e = s.length;
  for (let t = 0; t < e - 1; t++) {
    const r = s[t];
    for (let i = t + 1; i < e; i++) {
      const n = s[i];
      r !== n && r.equals(n) && (s[i] = r);
    }
  }
}
function importGLTF(s) {
  const e = new Mn();
  function t(r) {
    const i = r.accessors,
      n = r.bufferViews,
      o = r.buffers,
      a = r.nodes,
      c = r.meshes,
      _ = r.scenes,
      u = new Map(),
      d = (r.images ?? []).map(mc.fromImageBitmap),
      h = new K0(),
      p = {},
      v = (r.textures ?? []).map((N) => {
        var J;
        const M = N.sampler;
        let I;
        const L = N.extensions;
        L !== false &&
          (I = (J = L.EXT_texture_webp) == null ? false : J.source),
          I === false && (I = N.source);
        const F = d[I];
        let D;
        r.samplers !== false && r.samplers[M] !== false
          ? (D = r.samplers[M])
          : (D = p);
        const H = pc.from(F);
        return (
          (H.magFilter = Wm[D.magFilter] ?? ft.Linear),
          (H.minFilter = Wm[D.minFilter] ?? ft.Linear),
          (H.wrapS = Jm[D.wrapS] ?? Nr.Repeat),
          (H.wrapT = Jm[D.wrapT] ?? Nr.Repeat),
          H
        );
      });
    Zm(v);
    const m = (r.materials ?? []).map((N) => H1(N, v));
    Zm(m);
    function g(N) {
      switch (N) {
        case "POSITION":
          return Me.Position;
        case "NORMAL":
          return Me.Normal;
        case "TEXCOORD_0":
          return Me.UV;
        case "TANGENT":
          return Me.Tangent;
        default:
          return N;
      }
    }
    function E(N, M) {
      const I = i[N],
        L = n[I.bufferView],
        F = o[L.buffer],
        D = Mn.componentCountForType(I.type),
        H = Mn.sizeForComponentType(I.componentType);
      if (L.byteStride !== false && L.byteStride !== H * D)
        throw new Error("Interleaved attributes are not supported");
      const J = Mn.ArrayTypeForComponentType(I.componentType),
        R = new J(F, I.byteOffset + L.byteOffset, I.count * D);
      return ca.from(R, D, M);
    }
    const y = new Ct({ keyEqualityFunction: op, keyHashFunction: Z0 });
    function A(N, M) {
      const I = { attribute_accessor: N, name: M };
      let L = y.get(I);
      return L === false && ((L = E(N, M)), y.set(I, L)), L;
    }
    function T(N) {
      const M = new uf();
      if ((N.mode ?? Xm.TRIANGLES) !== Xm.TRIANGLES)
        throw new Error("Unsupported draw method");
      for (const L in N.attributes) {
        const F = g(L);
        M.getAttribute(F);
        const D = N.attributes[L],
          H = A(D, F);
        if ((M.addAttribute(H), L === "POSITION")) {
          const J = i[D];
          J.min !== false &&
            J.max !== false &&
            (M.bounding_box.set([...J.min, ...J.max]),
            M.computeBoundingSphere(),
            M.clearFlag(Wc.BoundsNeedUpdate));
        }
      }
      return (
        N.indices !== false && (M.index = A(N.indices, "index")),
        M.index !== null &&
          q1 &&
          T1(M.index.data, M.index.data, M.index.count, M.getVertexCount()),
        M
      );
    }
    function z(N) {
      const M = JSON.stringify(N);
      let I = u.get(M);
      return I === false && ((I = T(N)), u.set(M, I)), I;
    }
    function C(N, M) {
      const I = c[N],
        L = I.primitives,
        F = L.length,
        D = [];
      for (let H = 0; H < F; H++) {
        const J = L[H],
          R = z(J);
        F === 1 && I.name !== false && (R.name = I.name);
        const O = J.material;
        let q;
        O !== false ? ((q = m[O]), q === false && (q = h)) : (q = h);
        const Y = new Iu();
        (Y.geometry = R),
          (Y.material = q),
          Y.transform_global.set(M.worldMatrix),
          I.name !== false && (Y.name = I.name),
          D.push(Y);
      }
      return D;
    }
    function U(N, M) {
      const I = a[M];
      let L;
      if (typeof I.mesh == "number") {
        const F = C(I.mesh, I);
        F.length === 1
          ? (L = F[0])
          : F.length > 1 && ((L = new la()), L.addChildren(F));
      }
      if ((L === false && (L = new la()), I.matrix !== false))
        L.transform_local.set(I.matrix);
      else {
        const F = new Mo();
        I.translation !== false && F.position.fromArray(I.translation),
          I.rotation !== false && F.rotation.fromArray(I.rotation),
          I.scale !== false && F.scale.fromArray(I.scale),
          L.transform_local.set(F.matrix);
      }
      if ((N.addChild(L), I.children !== false))
        for (let F = 0; F < I.children.length; F++) {
          const D = I.children[F];
          U(L, D);
        }
    }
    const k = [];
    for (let N = 0; N < _.length; N++) {
      const M = _[N],
        I = new la();
      k.push(I);
      const L = M.nodes,
        F = L.length;
      for (let D = 0; D < F; D++) {
        const H = L[D];
        U(I, H);
      }
      I.updateMatrices();
    }
    return k;
  }
  return e.loadFromUrl(s).then(t);
}
function j1(s, e = 0, t = s.length) {
  let r = Number.NEGATIVE_INFINITY;
  for (let i = e; i < t; i++) {
    const n = s[i];
    n > r && (r = n);
  }
  return r;
}
function X1(s, e = 0, t = s.length) {
  let r = Number.POSITIVE_INFINITY;
  for (let i = e; i < t; i++) {
    const n = s[i];
    n < r && (r = n);
  }
  return r;
}
class W1 {
  constructor(e) {
    (this.size = e),
      (this.head = 0),
      (this.tail = 0),
      (this.count = 0),
      (this.data = new Array(e));
  }
  resize(e) {
    if (e === this.size) return;
    const t = new Array(e);
    (this.data = t),
      (this.size = e),
      (this.count = ke(e, this.count)),
      this.clear();
  }
  getHead() {
    return this.data[this.head - 1];
  }
  getFromHead(e) {
    let t = this.head - (e + 1);
    for (; t < 0; ) t += this.size;
    return this.data[t];
  }
  clear() {
    (this.head = 0), (this.tail = 0), (this.count = 0);
  }
  push(e) {
    const t = this.head;
    this.data[t] = e;
    const r = this.size,
      i = (t + 1) % r;
    (this.head = i),
      this.count === r ? (this.tail = (this.tail + 1) % r) : this.count++;
  }
  shift() {
    if (this.count === 0) return;
    const e = this.data[this.tail];
    return this.count--, (this.tail = (this.tail + 1) % this.size), e;
  }
  removeElementByIndex(e) {
    if (e >= this.count) return;
    const t = this.size,
      r = this.tail,
      i = this.count;
    for (let n = e; n < i; n++) {
      const o = r + n,
        a = o % t,
        c = (o + 1) % t;
      this.data[a] = this.data[c];
    }
    this.head--, this.count--;
  }
  removeIf(e, t) {
    const r = this.count,
      i = this.size,
      n = this.tail,
      o = this.data;
    for (let a = 0; a < r; a++) {
      const c = (n + a) % i,
        _ = o[c];
      if (e.call(t, _)) return this.removeElementByIndex(c), _;
    }
  }
  forEach(e, t) {
    const r = this.count,
      i = this.size,
      n = this.tail,
      o = this.data;
    for (let a = 0; a < r; a++) {
      const c = (n + a) % i,
        _ = o[c];
      e.call(t, _);
    }
  }
  contains(e) {
    return this.data.indexOf(e) !== -1;
  }
}
function J1(s, e = 0, t = s.length) {
  let r = 0;
  const i = t - e;
  for (let n = 0; n < t; n++) {
    const o = s[n];
    r += o;
  }
  return r / i;
}
function Z1(s, e) {
  return s - e;
}
function K1(s, e, t) {
  const r = s.slice();
  r.sort(Z1);
  const i = t - e,
    n = e + (i >> 1);
  return r[n];
}
class Q1 {
  record(e) {
    throw new Error("Not implemented");
  }
  getLastRecord() {
    throw new Error("Not implemented");
  }
  computeStats(e) {
    throw new Error("Not implemented");
  }
  clear() {
    throw new Error("Not implemented");
  }
}
class ew extends Q1 {
  constructor(e = 100) {
    super(), (this.__data = new W1(e));
  }
  resize(e) {
    this.__data.resize(e);
  }
  getLastRecord() {
    return this.__data.getHead();
  }
  record(e) {
    this.__data.push(e);
  }
  computeStats(e) {
    const t = this.__data,
      r = t.data,
      i = t.count;
    return i === 0
      ? ((e.mean = 0), (e.median = 0), (e.min = 0), (e.max = 0), !1)
      : ((e.mean = J1(r, 0, i)),
        (e.median = K1(r, 0, i - 1)),
        (e.max = j1(r, 0, i)),
        (e.min = X1(r, 0, i)),
        !0);
  }
  clear() {
    this.__data.clear();
  }
}
class tw {
  constructor() {
    this.data = new Map();
  }
  clear() {
    this.data.forEach((e, t) => {
      e.clear();
    });
  }
  list() {
    return Array.from(this.data.keys());
  }
  create({ name: e, buffer_size: t = 1e3 }) {
    const r = new ew(t);
    return this.add(e, r), r;
  }
  add(e, t) {
    this.data.set(e, t);
  }
  get(e) {
    return this.data.get(e);
  }
}
class Km {
  constructor(e, t) {
    (this.text = e), (this.indentation = t);
  }
  toString() {
    return `Line{ indentation=${this.indentation}, text="${this.text}" }`;
  }
}
const rw = 4;
var oi, Hi;
const sm = class sm {
  constructor() {
    b(this, oi, []);
    b(this, Hi, 0);
    x(this, "indentSpaces", rw);
  }
  get indentation() {
    return getProperty(this, Hi);
  }
  get count() {
    return getProperty(this, oi).length;
  }
  containsSubstring(e) {
    const t = getProperty(this, oi),
      r = t.length;
    for (let i = 0; i < r; i++) if (t[i].text.indexOf(e) !== -1) return !0;
    return !1;
  }
  indent() {
    return ze(this, Hi)._++, this;
  }
  dedent() {
    return ze(this, Hi)._--, this;
  }
  add(e) {
    const t = new Km(e, getProperty(this, Hi));
    return getProperty(this, oi).push(t), this;
  }
  addLines(e) {
    const t = getProperty(e, oi),
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i],
        o = new Km(n.text, n.indentation + getProperty(this, Hi));
      getProperty(this, oi).push(o);
    }
  }
  clear() {
    S(this, oi, []), S(this, Hi, 0);
  }
  build() {
    const e = [];
    let t, r, i;
    const n = getProperty(this, oi);
    for (t = 0, i = n.length; t < i; t++) {
      const o = n[t];
      let a = "";
      for (r = 0; r < o.indentation * this.indentSpaces; r++) a += " ";
      e.push(a + o.text);
    }
    return e.join(`
`);
  }
  static fromText(
    e,
    t = `
`
  ) {
    const r = new sm(),
      i = e.split(t),
      n = i.length;
    for (let o = 0; o < n; o++) {
      const a = i[o];
      r.add(a);
    }
    return r;
  }
  toString() {
    return this.build();
  }
};
(oi = new WeakMap()), (Hi = new WeakMap());
let gn = sm;
var va, Yi;
class iw {
  constructor() {
    b(this, va, null);
    b(this, Yi, null);
  }
  init(e, t) {
    S(this, va, e), S(this, Yi, t);
  }
  create(e, t) {
    const r = getProperty(this, va).create_resource(e, t);
    return (
      getProperty(this, Yi).resource_creates.push(r),
      getProperty(this, Yi).resource_writes.push(r),
      r
    );
  }
  read(e) {
    return getProperty(this, Yi).read(e);
  }
  write(e) {
    const t = getProperty(this, va),
      r = getProperty(this, Yi);
    return (
      t.getResourceEntry(e).isImported() && (r.has_side_effects = !0),
      r.creates(e) ? r.write(e) : (r.read(e), r.write(t.clone_resource(e)))
    );
  }
  make_side_effect() {
    getProperty(this, Yi).has_side_effects = !0;
  }
}
(va = new WeakMap()), (Yi = new WeakMap());
function iv() {}
class sv {
  constructor() {
    x(this, "name", "");
    x(this, "id", 0);
    x(this, "version", 0);
    x(this, "ref_count", 0);
  }
}
class sw extends sv {
  constructor() {
    super(...arguments);
    x(this, "execute", iv);
    x(this, "has_side_effects", !1);
    x(this, "data", {});
    x(this, "resource_creates", []);
    x(this, "resource_reads", []);
    x(this, "resource_writes", []);
  }
  creates(t) {
    return this.resource_creates.includes(t);
  }
  reads(t) {
    return this.resource_reads.includes(t);
  }
  writes(t) {
    return this.resource_writes.includes(t);
  }
  write(t) {
    return this.writes(t) || this.resource_writes.push(t), t;
  }
  read(t) {
    return this.reads(t) || this.resource_reads.push(t), t;
  }
  can_execute() {
    return this.ref_count > 0 || this.has_side_effects;
  }
}
class nw {
  constructor() {
    x(this, "__graph", null);
    x(this, "__pass", null);
  }
  init(e, t) {
    (this.__graph = e), (this.__pass = t);
  }
  get(e) {
    return this.__graph.getResourceEntry(e).resource;
  }
  getDescriptor(e) {
    return this.__graph.getResourceEntry(e).resource_descriptor;
  }
}
let ow = 0;
class aw {
  constructor() {
    x(this, "resource_id", ow++);
    x(this, "resource_descriptor", null);
    x(this, "resource_version", 0);
    x(this, "resource", null);
    x(this, "imported", !1);
    x(this, "producer", null);
    x(this, "last", null);
  }
  create(e) {
    this.resource = e.get(this.resource_descriptor);
  }
  destroy(e) {
    e.release(this.resource);
  }
  isImported() {
    return this.imported;
  }
  isTransient() {
    return !this.imported;
  }
  toString() {
    return this.resource_descriptor !== null
      ? this.resource_descriptor.type
      : "";
  }
}
class bf extends sv {
  constructor() {
    super(...arguments);
    x(this, "resource_id", 0);
    x(this, "descriptor", null);
    x(this, "producer", null);
  }
}
bf.prototype.isResourceNode = !0;
class O_ {
  constructor(e = "") {
    x(this, "name", "");
    x(this, "__pass_nodes", []);
    x(this, "__resource_nodes", []);
    x(this, "__resource_registry", []);
    this.name = e;
  }
  getResourceEntry(e) {
    const t = this.getResourceNode(e);
    return this.__resource_registry[t.resource_id];
  }
  getResourceNode(e) {
    const t = this.__resource_nodes,
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      if (n.id === e) return n;
    }
    throw new Error(`Resource Node ${e} not found`);
  }
  getDescriptor(e) {
    return this.getResourceEntry(e).resource_descriptor;
  }
  create_resource(e, t) {
    const r = this._createResourceEntry(t);
    return this._createResourceNode(e, r.resource_id).id;
  }
  _createResourceEntry(e) {
    const t = new aw();
    return (
      (t.resource_id = this.__resource_registry.length),
      (t.resource_descriptor = e),
      this.__resource_registry.push(t),
      t
    );
  }
  _createResourceNode(e, t) {
    const r = new bf(),
      i = this.__resource_nodes.length;
    return (
      (r.id = i),
      (r.name = e),
      (r.resource_id = t),
      (this.__resource_nodes[i] = r),
      r
    );
  }
  clone_resource(e) {
    const t = this.getResourceNode(e),
      r = this.__resource_registry[t.resource_id];
    r.resource_version++;
    const i = new bf();
    return (
      (i.id = this.__resource_nodes.length),
      (i.name = t.name),
      (i.resource_id = t.resource_id),
      (i.version = r.resource_version),
      this.__resource_nodes.push(i),
      i.id
    );
  }
  import_resource(e, t, r) {
    const i = this._createResourceEntry(t);
    return (
      (i.resource = r),
      (i.imported = !0),
      this._createResourceNode(e, i.resource_id).id
    );
  }
  is_valid_resource(e) {
    const t = this.getResourceNode(e),
      r = this.getResourceEntry(e);
    return t.version === r.resource_version;
  }
  add(e, t, r) {
    const i = this.__pass_nodes,
      n = new iw(),
      o = new sw();
    return (
      (o.id = i.length),
      (o.name = e),
      (o.execute = r),
      i.push(o),
      n.init(this, o),
      (o.data = t),
      n
    );
  }
  validate(e, t) {
    return !0;
  }
  compile() {
    const e = this.__pass_nodes,
      t = e.length,
      r = this.__resource_nodes;
    for (let n = 0; n < t; n++) {
      const o = e[n];
      o.ref_count = o.resource_writes.length;
      for (const a of o.resource_reads) {
        const c = r[a];
        c.ref_count++;
      }
      for (const a of o.resource_writes) {
        const c = r[a];
        c.producer = o;
      }
    }
    const i = [];
    for (const n of r) n.ref_count === 0 && i.push(n);
    for (; i.length > 0; ) {
      const o = i.pop().producer;
      if (
        !(o === null || o.has_side_effects) &&
        (o.ref_count--, o.ref_count === 0)
      )
        for (const a of o.resource_reads) {
          const c = r[a];
          c.ref_count--, c.ref_count === 0 && i.push(c);
        }
    }
    for (let n = 0; n < t; n++) {
      const o = e[n];
      if (o.ref_count !== 0) {
        for (const a of o.resource_creates) {
          const c = this.getResourceEntry(a);
          (c.producer = o), (c.last = o);
        }
        for (const a of o.resource_writes) this.getResourceEntry(a).last = o;
        for (const a of o.resource_reads) this.getResourceEntry(a).last = o;
      }
    }
  }
  execute(e) {
    const t = this.__pass_nodes,
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      if (!n.can_execute()) continue;
      const o = n.resource_creates;
      for (const u of o) this.getResourceEntry(u).create(e.resource_manager);
      const a = new nw();
      a.init(this, n), n.execute(n.data, a, e);
      const c = this.__resource_registry,
        _ = c.length;
      for (let u = 0; u < _; u++) {
        const d = c[u];
        d.last === n && d.isTransient() && d.destroy(e.resource_manager);
      }
    }
  }
  exportToDot() {
    const e = new gn();
    e.add("digraph FrameGraph {"),
      e.indent(),
      e.add('graph [style=invis, rankdir="TB" ordering=out, splines=spline]'),
      e.add(
        'node [shape=record, fontname="helvetica", fontsize=10, margin="0.2,0.03"]'
      ),
      e.add(""),
      e.add("# Pass Nodes");
    for (const t of this.__pass_nodes)
      e.add(
        `P${t.id} [label=<{ {<B>${t.name}</B>} | {${
          t.has_side_effects ? "&#x2605; " : ""
        } Refs: ${t.ref_count}<BR/> Index: ${
          t.id
        }} }> style="rounded,filled", fillcolor=${
          t.ref_count > 0 || t.has_side_effects ? "orange" : "lightgray"
        }]`
      );
    e.add(""), e.add("# Resource Nodes");
    for (const t of this.__resource_nodes) {
      const r = this.__resource_registry[t.resource_id];
      e.add(
        `R${r.resource_id}_${t.version} [label=<{ {<B>${t.name}</B>${
          t.version > 0 ? `<FONT>v${t.version}</FONT>` : ""
        }<BR/>${r.toString()}} | {Index: ${r.resource_id}<BR/> Refs : ${
          t.ref_count
        } } }> style=filled, fillcolor=${
          r.isImported() ? "lightsteelblue" : "skyblue"
        }]`
      );
    }
    e.add(""), e.add("# Resource Writes");
    for (const t of this.__pass_nodes) {
      e.add(`P${t.id} -> {`), e.indent();
      for (const r of t.resource_writes) {
        const i = this.__resource_nodes[r];
        e.add(`R${i.resource_id}_${i.version} `);
      }
      e.dedent(), e.add("} [color=orangered]");
    }
    e.add(""), e.add("# Resource Reads");
    for (const t of this.__resource_nodes) {
      e.add(`R${t.resource_id}_${t.version} -> {`), e.indent();
      for (const r of this.__pass_nodes)
        for (const i of r.resource_reads) i === t.id && e.add(`P${r.id} `);
      e.dedent(), e.add("} [color=olivedrab3]");
    }
    return e.dedent(), e.add("}"), e.build();
  }
}
class wn {
  constructor() {
    x(this, "label", "");
  }
  fromJSON({ label: e = "" }) {
    this.label = e;
  }
  hash() {
    return Re(this.label);
  }
  compare(e) {
    return this.label.localeCompare(e.label);
  }
  equals(e) {
    return this.label === e.label;
  }
}
function Qm(s) {
  const e = new Array(3);
  return (
    (e[0] = e.width = s[0]),
    (e[1] = e.height = s[1] ?? 1),
    (e[2] = e.depthOrArrayLayers = s[2] ?? 1),
    Object.freeze(e)
  );
}
var ai;
const nm = class nm extends wn {
  constructor() {
    super(...arguments);
    b(this, ai, Qm([1, 1, 1]));
    x(this, "mipLevelCount", 1);
    x(this, "sampleCount", 1);
    x(this, "dimension", "2d");
    x(this, "format", "rgba8unorm");
    x(this, "usage", GPUTextureUsage.TEXTURE_BINDING);
    x(this, "viewFormats", []);
    x(this, "onResized", new ge());
  }
  set size(t) {
    const r = getProperty(this, ai);
    S(this, ai, Qm(t)), this.onResized.send3(t, r, this);
  }
  get size() {
    return getProperty(this, ai);
  }
  equals(t) {
    return !hr(getProperty(this, ai), getProperty(t, ai)) ||
      this.mipLevelCount !== t.mipLevelCount ||
      this.sampleCount !== t.sampleCount ||
      this.dimension !== t.dimension ||
      this.format !== t.format ||
      this.usage !== t.usage ||
      !hr(this.viewFormats, t.viewFormats)
      ? !1
      : super.equals(t);
  }
  hash() {
    return ot(
      P0(getProperty(this, ai), 0, getProperty(this, ai).length),
      this.mipLevelCount,
      this.sampleCount,
      Re(this.dimension),
      Re(this.format),
      this.usage,
      super.hash()
    );
  }
  fromTexture(t) {
    (this.format = t.format),
      (this.usage = t.usage),
      (this.sampleCount = t.sampleCount),
      (this.mipLevelCount = t.mipLevelCount),
      (this.dimension = t.dimension),
      (this.label = t.label),
      (this.size = [t.width, t.height, t.depthOrArrayLayers]);
  }
  static from(t) {
    const r = new nm();
    return r.fromJSON(t), r;
  }
  fromJSON(t) {
    super.fromJSON(t),
      (this.size = t.size),
      t.mipLevelCount !== false
        ? (this.mipLevelCount = t.mipLevelCount)
        : (this.mipLevelCount = 1),
      t.sampleCount !== false
        ? (this.sampleCount = t.sampleCount)
        : (this.sampleCount = 1),
      t.dimension !== false
        ? (this.dimension = t.dimension)
        : (this.dimension = "2d"),
      (this.format = t.format),
      (this.usage = t.usage),
      t.viewFormats !== false
        ? (this.viewFormats = t.viewFormats)
        : (this.viewFormats = []);
  }
};
ai = new WeakMap();
let mt = nm;
mt.prototype.isTextureDescriptor = !0;
function rl(s, e = ",") {
  return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e);
}
class nv {
  get type() {
    return "resource";
  }
  get isResourceDescriptor() {
    return !0;
  }
  hash() {
    return 0;
  }
  equals(e) {
    return this.type === e.type;
  }
}
function eg(s, e) {
  const t = [];
  for (const r in e) s & e[r] && t.push(r);
  return t;
}
class je extends nv {
  constructor() {
    super(...arguments);
    x(this, "size", 0);
    x(this, "usage", 0);
    x(this, "ensure_cleared", new Uint32Array(2));
  }
  toString() {
    return `Buffer{ size = ${rl(this.size)}, usage = ${eg(
      this.usage,
      GPUBufferUsage
    ).join(" | ")} }`;
  }
  get type() {
    return "buffer";
  }
  hash() {
    return this.size ^ this.usage;
  }
  equals(t) {
    return super.equals(t) && this.size === t.size && this.usage === t.usage;
  }
  static fromBuffer(t) {
    const r = new je();
    return (r.usage = t.usage), (r.size = t.size), r;
  }
  static from(t, r, i = 0, n = 0) {
    const o = new je();
    if (
      ((o.size = t),
      (o.usage = r),
      (o.ensure_cleared[0] = i),
      (o.ensure_cleared[1] = n),
      n > 0 && !(r & GPUBufferUsage.COPY_DST))
    )
      throw new Error(
        `requesting buffer to be cleared, this requires COPY_DST to actually fulfill. Included usages currently ${eg(
          r,
          GPUBufferUsage
        )}`
      );
    return o;
  }
}
function ov(s, e) {
  return Math.floor(Math.log2(Math.max(s, e))) + 1;
}
const tg = { Absolute: 0, PresentationRelative: 1 };
class oe extends nv {
  constructor() {
    super(...arguments);
    x(this, "resolution_domain", tg.PresentationRelative);
    x(this, "resolution", new Float64Array([1, 1, 1]));
    x(this, "sampleCount", 1);
    x(this, "mipLevelCount", 1);
    x(this, "dimension", "2d");
    x(this, "format", "rgba8unorm");
    x(this, "usage", GPUTextureUsage.TEXTURE_BINDING);
  }
  static from({
    resolution: t,
    dimension: r = "2d",
    format: i,
    usage: n = GPUTextureUsage.TEXTURE_BINDING,
    enableMips: o = !1,
  }) {
    const a = new oe();
    return (
      st(t, 0, a.resolution, 0, Math.min(a.resolution.length, t.length)),
      (a.dimension = r),
      (a.format = i),
      (a.usage = n),
      o === !0 && (a.mipLevelCount = ov(t[0], t[1])),
      a
    );
  }
  static fromTexture(t) {
    const r = new oe();
    return (
      (r.format = t.format),
      (r.dimension = t.dimension),
      (r.usage = t.usage),
      (r.sampleCount = t.sampleCount),
      (r.resolution_domain = tg.Absolute),
      (r.resolution[0] = t.width),
      (r.resolution[1] = t.height),
      (r.resolution[2] = t.depthOrArrayLayers),
      (r.mipLevelCount = t.mipLevelCount),
      r
    );
  }
  get type() {
    return "texture";
  }
  hash() {
    return ot(
      this.resolution_domain,
      this.mipLevelCount,
      R0(this.resolution),
      this.sampleCount,
      this.usage,
      Re(this.format)
    );
  }
  equals(t) {
    return (
      hr(this.resolution, t.resolution) &&
      this.mipLevelCount === t.mipLevelCount &&
      this.resolution_domain === t.resolution_domain &&
      this.sampleCount === t.sampleCount &&
      this.dimension === t.dimension &&
      this.format === t.format &&
      this.usage === t.usage
    );
  }
}
const rg = new Map();
function ap(s, e = 3) {
  const t = rg.get(s) ?? 0;
  if (t >= e) return;
  const r = t + 1;
  rg.set(s, r);
}
function Oo(s, e, t, r, i) {
  let n, o;
  const a = k0(e, r, i);
  a === 4
    ? ((n = new Uint32Array(s, e, i >>> 2)),
      (o = new Uint32Array(t, r, i >>> 2)))
    : a === 2
    ? ((n = new Uint16Array(s, e, i >>> 1)),
      (o = new Uint16Array(t, r, i >>> 1)))
    : ((n = new Uint8Array(s, e, i)), (o = new Uint8Array(t, r, i))),
    o.set(n);
}
function Eo(s) {
  return ((s + 3) >> 2) << 2;
}
const vt = { BigEndian: !1, LittleEndian: !0 },
  cw = 1024,
  ig = 1024;
class Ii {
  constructor() {
    x(this, "endianness", vt.LittleEndian);
    x(this, "position", 0);
    x(this, "capacity", ig);
    x(this, "data", new ArrayBuffer(ig));
    x(this, "dataView", new DataView(this.data));
    x(this, "__data_uint8", new Uint8Array(this.data));
    x(this, "__growFactor", 1.1);
  }
  get length() {
    throw new Error("Deprecated, use 'capacity' instead");
  }
  set length(e) {
    throw new Error("Deprecated, use 'capacity' instead");
  }
  get raw_bytes() {
    return this.__data_uint8;
  }
  fromArrayBuffer(e) {
    (this.data = e),
      (this.dataView = new DataView(e)),
      (this.__data_uint8 = new Uint8Array(e)),
      (this.capacity = e.byteLength),
      (this.position = 0);
  }
  trim() {
    return this.setCapacity(this.position), this;
  }
  setCapacity(e) {
    if (e < this.position)
      throw new Error(
        `Attempting to set capacity(=${e}) below current position(=${this.position})`
      );
    const t = this.__data_uint8,
      r = new Uint8Array(e);
    Oo(
      t.buffer,
      0,
      r.buffer,
      0,
      Math.min(t.buffer.byteLength, r.buffer.byteLength)
    ),
      (this.data = r.buffer),
      (this.__data_uint8 = r),
      (this.dataView = new DataView(this.data)),
      (this.capacity = e);
  }
  ensureCapacity(e) {
    const t = this.capacity;
    if (t >= e) return;
    const r = Math.ceil(Math.max(e, t * this.__growFactor, t + cw)),
      i = Eo(r);
    this.setCapacity(i);
  }
  readFloat32() {
    const e = this.dataView.getFloat32(this.position, this.endianness);
    return (this.position += 4), e;
  }
  readFloat64() {
    const e = this.dataView.getFloat64(this.position, this.endianness);
    return (this.position += 8), e;
  }
  readInt8() {
    const e = this.dataView.getInt8(this.position);
    return (this.position += 1), e;
  }
  readInt16() {
    const e = this.dataView.getInt16(this.position, this.endianness);
    return (this.position += 2), e;
  }
  readInt32() {
    const e = this.dataView.getInt32(this.position, this.endianness);
    return (this.position += 4), e;
  }
  readUint8() {
    const e = this.dataView.getUint8(this.position);
    return (this.position += 1), e;
  }
  readUint16() {
    const e = this.dataView.getUint16(this.position, this.endianness);
    return (this.position += 2), e;
  }
  readUint16LE() {
    const e = this.dataView.getUint16(this.position, vt.LittleEndian);
    return (this.position += 2), e;
  }
  readUint16BE() {
    const e = this.dataView.getUint16(this.position, vt.BigEndian);
    return (this.position += 2), e;
  }
  readUint24() {
    return this.endianness === vt.BigEndian
      ? this.readUint24BE()
      : this.readUint24LE();
  }
  readUint24LE() {
    const e = this.dataView.getUint8(this.position),
      t = this.dataView.getUint8(this.position + 1),
      r = this.dataView.getUint8(this.position + 2);
    return (this.position += 3), e | (t << 8) | (r << 16);
  }
  readUint24BE() {
    const e = this.dataView.getUint8(this.position),
      t = this.dataView.getUint8(this.position + 1),
      r = this.dataView.getUint8(this.position + 2);
    return (this.position += 3), r | (t << 8) | (e << 16);
  }
  readUint32() {
    const e = this.dataView.getUint32(this.position, this.endianness);
    return (this.position += 4), e;
  }
  readUint32LE() {
    const e = this.dataView.getUint32(this.position, vt.LittleEndian);
    return (this.position += 4), e;
  }
  readUint32BE() {
    const e = this.dataView.getUint32(this.position, vt.BigEndian);
    return (this.position += 4), e;
  }
  readUint8Array(e, t, r) {
    for (let i = 0; i < r; i++) e[i + t] = this.readUint8();
  }
  readUint16Array(e, t, r) {
    for (let i = 0; i < r; i++) e[i + t] = this.readUint16();
  }
  readUint32Array(e, t, r) {
    for (let i = 0; i < r; i++) e[i + t] = this.readUint32();
  }
  readInt8Array(e, t, r) {
    for (let i = 0; i < r; i++) e[i + t] = this.readInt8();
  }
  readInt16Array(e, t, r) {
    for (let i = 0; i < r; i++) e[i + t] = this.readInt16();
  }
  readInt32Array(e, t, r) {
    for (let i = 0; i < r; i++) e[i + t] = this.readInt32();
  }
  readFloat32Array(e, t, r) {
    for (let i = 0; i < r; i++) e[i + t] = this.readFloat32();
  }
  readFloat64Array(e, t, r) {
    for (let i = 0; i < r; i++) e[i + t] = this.readFloat64();
  }
  writeFloat32Array(e, t, r) {
    for (let i = 0; i < r; i++) this.writeFloat32(e[i + t]);
  }
  writeFloat32(e) {
    const t = this.position + 4;
    this.ensureCapacity(t),
      this.dataView.setFloat32(this.position, e, this.endianness),
      (this.position = t);
  }
  writeFloat64(e) {
    const t = this.position + 8;
    this.ensureCapacity(t),
      this.dataView.setFloat64(this.position, e, this.endianness),
      (this.position = t);
  }
  writeInt8(e) {
    const t = this.position + 1;
    this.ensureCapacity(t),
      this.dataView.setInt8(this.position, e),
      (this.position = t);
  }
  writeInt16(e) {
    const t = this.position + 2;
    this.ensureCapacity(t),
      this.dataView.setInt16(this.position, e, this.endianness),
      (this.position = t);
  }
  writeInt32(e) {
    const t = this.position + 4;
    this.ensureCapacity(t),
      this.dataView.setInt32(this.position, e, this.endianness),
      (this.position = t);
  }
  writeUint8(e) {
    const t = this.position + 1;
    this.ensureCapacity(t),
      this.dataView.setUint8(this.position, e),
      (this.position = t);
  }
  writeUint8Array(e, t, r) {
    for (let i = 0; i < r; i++) this.writeUint8(e[t + i]);
  }
  writeUint16(e) {
    const t = this.position + 2;
    this.ensureCapacity(t),
      this.dataView.setUint16(this.position, e, this.endianness),
      (this.position = t);
  }
  writeUint16BE(e) {
    const t = this.position + 2;
    this.ensureCapacity(t),
      this.dataView.setUint16(this.position, e, vt.BigEndian),
      (this.position = t);
  }
  writeUint16LE(e) {
    const t = this.position + 2;
    this.ensureCapacity(t),
      this.dataView.setUint16(this.position, e, vt.LittleEndian),
      (this.position = t);
  }
  writeUint16Array(e, t, r) {
    for (let i = 0; i < r; i++) this.writeUint16(e[t + i]);
  }
  writeUint24(e) {
    this.endianness === vt.BigEndian
      ? this.writeUint24BE(e)
      : this.writeUint24LE(e);
  }
  writeUint24BE(e) {
    const t = this.position + 3;
    this.ensureCapacity(t);
    const r = e & 255,
      i = (e >> 8) & 255,
      n = (e >> 16) & 255;
    this.dataView.setUint8(this.position, n),
      this.dataView.setUint8(this.position + 1, i),
      this.dataView.setUint8(this.position + 2, r),
      (this.position = t);
  }
  writeUint24LE(e) {
    const t = this.position + 3;
    this.ensureCapacity(t);
    const r = e & 255,
      i = (e >> 8) & 255,
      n = (e >> 16) & 255;
    this.dataView.setUint8(this.position, r),
      this.dataView.setUint8(this.position + 1, i),
      this.dataView.setUint8(this.position + 2, n),
      (this.position = t);
  }
  writeUintVar(e) {
    let t = !0;
    for (; t || e !== 0; ) {
      t = !1;
      let r = e & 127;
      (e >>= 7), e > 0 && (r |= 128), this.writeUint8(r);
    }
  }
  readUintVar() {
    let e = !0,
      t = 0,
      r = 0;
    for (; e; ) {
      let i = this.readUint8();
      (e = (i & 128) !== 0), (t |= (i & 127) << r), (r += 7);
    }
    return t;
  }
  writeUint32(e) {
    const t = this.position + 4;
    this.ensureCapacity(t),
      this.dataView.setUint32(this.position, e, this.endianness),
      (this.position = t);
  }
  writeUint32BE(e) {
    const t = this.position + 4;
    this.ensureCapacity(t),
      this.dataView.setUint32(this.position, e, vt.BigEndian),
      (this.position = t);
  }
  writeUint32LE(e) {
    const t = this.position + 4;
    this.ensureCapacity(t),
      this.dataView.setUint32(this.position, e, vt.LittleEndian),
      (this.position = t);
  }
  writeUint32Array(e, t, r) {
    this.ensureCapacity(this.position + 4 * r);
    for (let i = 0; i < r; i++) this.writeUint32(e[t + i]);
  }
  writeBytes(e, t, r) {
    const i = t + r,
      n = this.position,
      o = n + r;
    if ((this.ensureCapacity(o), t === 0 && e.length === r))
      this.__data_uint8.set(e, n);
    else if (typeof e.subarray == "function")
      this.__data_uint8.set(e.subarray(t, i), n);
    else for (let a = 0; a < r; a++) this.__data_uint8[n + a] = e[t + a];
    this.position = o;
  }
  readBytes(e, t, r) {
    const i = this.position,
      n = i + r,
      o = this.__data_uint8;
    r < 128 ? st(o, i, e, t, r) : e.set(o.subarray(i, n), t),
      (this.position = n);
  }
  writeUTF8String(e) {
    if (e === null) {
      this.writeUint32(4294967295);
      return;
    } else if (e === false) {
      this.writeUint32(4294967294);
      return;
    }
    let t = 0;
    const r = e.length;
    if (r >= 4294967294) throw new Error("String is too long");
    this.writeUint32(r);
    let i = this.position;
    const n = Math.max(32, r + (r >> 1) + 7);
    this.ensureCapacity(n + i);
    let o = this.__data_uint8,
      a = this.capacity;
    for (; t < r; ) {
      let c = e.charCodeAt(t++);
      if (c >= 55296 && c <= 56319) {
        if (t < r) {
          const _ = e.charCodeAt(t);
          (_ & 64512) === 56320 &&
            (++t, (c = ((c & 1023) << 10) + (_ & 1023) + 65536));
        }
        if (c >= 55296 && c <= 56319) continue;
      }
      if (
        (i + 4 > a &&
          (this.ensureCapacity(i + 4),
          (a = this.capacity),
          (o = this.__data_uint8)),
        c & 4294967168)
      )
        if (!(c & 4294965248)) o[i++] = ((c >> 6) & 31) | 192;
        else if (!(c & 4294901760))
          (o[i++] = ((c >> 12) & 15) | 224), (o[i++] = ((c >> 6) & 63) | 128);
        else if (!(c & 4292870144))
          (o[i++] = ((c >> 18) & 7) | 240),
            (o[i++] = ((c >> 12) & 63) | 128),
            (o[i++] = ((c >> 6) & 63) | 128);
        else continue;
      else {
        o[i++] = c;
        continue;
      }
      o[i++] = (c & 63) | 128;
    }
    this.position = i;
  }
  readUTF8String() {
    const e = this.readUint32();
    if (e === 4294967295) return null;
    if (e === 4294967294) return;
    const t = this.__data_uint8;
    let r = "",
      i = this.position,
      n = 0;
    for (; i < this.capacity && n < e; ) {
      const o = t[i++];
      let a;
      if (o === 0) break;
      if (!(o & 128)) a = o;
      else if ((o & 224) === 192) {
        const c = t[i++] & 63;
        a = ((o & 31) << 6) | c;
      } else if ((o & 240) === 224) {
        const c = t[i++] & 63,
          _ = t[i++] & 63;
        a = ((o & 31) << 12) | (c << 6) | _;
      } else if ((o & 248) === 240) {
        const c = t[i++] & 63,
          _ = t[i++] & 63,
          u = t[i++] & 63;
        (a = ((o & 7) << 18) | (c << 12) | (_ << 6) | u),
          a > 65535 &&
            ((a -= 65536),
            (r += String.fromCharCode(((a >>> 10) & 1023) | 55296)),
            n++,
            (a = 56320 | (a & 1023)));
      }
      n++, (r += String.fromCharCode(a));
    }
    return (this.position = i), r;
  }
  writeASCIIString(e) {
    const t = e.length,
      r = this.position,
      i = r + t;
    this.ensureCapacity(i);
    for (let n = 0; n < t; n++) {
      const o = e.charCodeAt(n);
      if (o > 255)
        throw new Error(
          `Character ${String.fromCharCode(
            o
          )} can't be represented by a US-ASCII byte.`
        );
      this.__data_uint8[r + n] = o;
    }
    this.position = i;
  }
  readASCIICharacters(e, t = !1) {
    let r = "";
    for (let i = 0; i < e; i++) {
      const n = this.readUint8();
      if (t && n === 0) break;
      r += String.fromCharCode(n);
    }
    return r;
  }
  static fromEndianness(e) {
    const t = new Ii();
    return (t.endianness = e), t;
  }
  static fromArrayBuffer(e) {
    const t = new Ii();
    return t.fromArrayBuffer(e), t;
  }
  static copyUTF8String(e, t) {
    const r = e.readUTF8String();
    return t.writeUTF8String(r), r;
  }
  static copyUintVar(e, t) {
    const r = e.readUintVar();
    return t.writeUintVar(r), r;
  }
  static copyUint8(e, t) {
    const r = e.readUint8();
    return t.writeUint8(r), r;
  }
  static copyUint16(e, t) {
    const r = e.readUint16();
    return t.writeUint16(r), r;
  }
  static copyUint32(e, t) {
    const r = e.readUint32();
    return t.writeUint32(r), r;
  }
  static copyFloat32(e, t) {
    const r = e.readFloat32();
    return t.writeFloat32(r), r;
  }
  static copyFloat64(e, t) {
    const r = e.readFloat64();
    return t.writeFloat64(r), r;
  }
  static copyBytes(e, t, r) {
    const i = new Uint8Array(r);
    return e.readBytes(i, 0, r), t.writeBytes(i, 0, r), i;
  }
}
Ii.prototype.isBinaryBuffer = !0;
let zh = vt.LittleEndian,
  sg = !1;
function Sc() {
  if (sg) return zh;
  const s = new ArrayBuffer(2),
    e = new Uint8Array(s),
    t = new Uint16Array(s);
  return (
    (e[0] = 19),
    (zh = (t[0] & 255) === 19 ? vt.LittleEndian : vt.BigEndian),
    (sg = !0),
    zh
  );
}
function Wt(s, e) {
  return Math.ceil(e / s) * s;
}
class Fd {
  constructor() {
    x(this, "tag", "");
  }
  get align() {
    return 0;
  }
  get size() {
    return 0;
  }
  get runtime_sized() {
    return !1;
  }
  get requires_declaration() {
    return !1;
  }
  toString() {
    return this.wgsl_declaration;
  }
  get declaration_chunk() {
    throw new Error("Not Implemented");
  }
  get wgsl_ref() {
    return this.wgsl_declaration;
  }
  get wgsl_declaration() {
    return this.tag;
  }
  equals(e) {
    return !1;
  }
  hash() {
    return 0;
  }
}
Fd.prototype.isWebGPUType = !0;
var xa, ba;
const Ju = class Ju extends Fd {
  constructor() {
    super(...arguments);
    b(this, xa, 0);
    b(this, ba, 0);
  }
  get size() {
    return getProperty(this, xa);
  }
  get align() {
    return getProperty(this, ba);
  }
  static from(t, r, i) {
    const n = new Ju();
    return (n.tag = t), S(n, xa, i), S(n, ba, r), Object.freeze(n);
  }
  get wgsl_declaration() {
    return this.tag;
  }
  equals(t) {
    return this === t
      ? !0
      : t instanceof Ju
      ? !1
      : this.tag === t.tag &&
        getProperty(this, xa) === t.size &&
        getProperty(this, ba) === t.align;
  }
};
(xa = new WeakMap()), (ba = new WeakMap());
let pe = Ju;
const Ce = {
  i32: pe.from("i32", 4, 4),
  u32: pe.from("u32", 4, 4),
  f32: pe.from("f32", 4, 4),
  f16: pe.from("f16", 2, 2),
  "atomic<u32>": pe.from("atomic<u32>", 4, 4),
  "atomic<i32>": pe.from("atomic<i32>", 4, 4),
  "vec2<i32>": pe.from("vec2<i32>", 8, 8),
  "vec2<u32>": pe.from("vec2<u32>", 8, 8),
  "vec2<f32>": pe.from("vec2<f32>", 8, 8),
  "vec2<f16>": pe.from("vec2<f32>", 4, 4),
  "vec3<i32>": pe.from("vec3<i32>", 16, 12),
  "vec3<u32>": pe.from("vec3<u32>", 16, 12),
  "vec3<f32>": pe.from("vec3<f32>", 16, 12),
  "vec3<f16>": pe.from("vec3<f16>", 8, 6),
  "vec4<i32>": pe.from("vec4<i32>", 16, 16),
  "vec4<u32>": pe.from("vec4<u32>", 16, 16),
  "vec4<f32>": pe.from("vec4<f32>", 16, 16),
  "vec4<f16>": pe.from("vec4<f16>", 8, 8),
  "mat2x2<f32>": pe.from("mat2x2<f32>", 8, 16),
  "mat2x2<f16>": pe.from("mat2x2<f16>", 4, 8),
  "mat3x2<f32>": pe.from("mat3x2<f32>", 8, 24),
  "mat3x2<f16>": pe.from("mat3x2<f16>", 4, 12),
  "mat4x2<f32>": pe.from("mat4x2<f32>", 8, 32),
  "mat4x2<f16>": pe.from("mat4x2<f16>", 4, 16),
  "mat2x3<f32>": pe.from("mat2x3<f32>", 16, 32),
  "mat2x3<f16>": pe.from("mat2x3<f16>", 8, 16),
  "mat3x3<f32>": pe.from("mat3x3<f32>", 16, 48),
  "mat3x3<f16>": pe.from("mat3x3<f16>", 8, 24),
  "mat4x3<f32>": pe.from("mat4x3<f32>", 16, 64),
  "mat4x3<f16>": pe.from("mat4x3<f16>", 8, 32),
  "mat2x4<f32>": pe.from("mat2x4<f32>", 16, 32),
  "mat2x4<f16>": pe.from("mat2x4<f16>", 8, 16),
  "mat3x4<f32>": pe.from("mat3x4<f32>", 16, 48),
  "mat3x4<f16>": pe.from("mat3x4<f16>", 8, 24),
  "mat4x4<f32>": pe.from("mat4x4<f32>", 16, 64),
  "mat4x4<f16>": pe.from("mat4x4<f16>", 8, 32),
};
var Fr, Dr, Zu, av;
const Qc = class Qc {
  constructor() {
    b(this, Zu);
    b(this, Fr, "");
    b(this, Dr, []);
  }
  get isCodeChunk() {
    return !0;
  }
  get text() {
    return getProperty(this, Fr);
  }
  addDependency(e) {
    return getProperty(this, Dr).includes(e)
      ? !1
      : (P(this, Zu, av).call(this, e), !0);
  }
  static from(e, t = []) {
    const r = new Qc();
    S(r, Fr, e);
    for (let i = 0; i < t.length; i++) {
      const n = t[i];
      r.addDependency(n);
    }
    return r;
  }
  allDirectDependenciesIncludedInSet(e) {
    const t = getProperty(this, Dr),
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      if (!e.has(n)) return !1;
    }
    return !0;
  }
  findDependencyRecursive(e) {
    const t = getProperty(this, Dr),
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      if (n.equals(e) || n.findDependencyRecursive(e)) return !0;
    }
    return !1;
  }
  collectDependencies() {
    const e = new Set(),
      t = getProperty(this, Dr).slice();
    let r = t.length;
    for (; r > 0; ) {
      r--;
      const i = t[r];
      if (e.has(i)) continue;
      e.add(i);
      const n = getProperty(i, Dr),
        o = n.length;
      for (let a = 0; a < o; a++) t[r++] = n[a];
    }
    return Array.from(e);
  }
  compile() {
    const e = new Set(),
      t = this.collectDependencies(),
      r = [];
    let i = t.length;
    for (; i > 0; ) {
      const o = i;
      for (let a = i - 1; a >= 0; a--) {
        const c = t[a];
        c.allDirectDependenciesIncludedInSet(e) &&
          (r.push(c), e.add(c), t.splice(a, 1), i--);
      }
      if (o === i) throw new Error(`${i} dependencies could not be satisfied`);
    }
    const n = [];
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      n.push(getProperty(a, Fr));
    }
    return (
      n.push(getProperty(this, Fr)),
      n.join(`
`)
    );
  }
  toString() {
    return getProperty(this, Fr);
  }
  hash() {
    return Re(getProperty(this, Fr));
  }
  equals(e) {
    return this === e
      ? !0
      : getProperty(this, Fr) === getProperty(e, Fr) &&
          yn(getProperty(this, Dr), getProperty(e, Dr));
  }
};
(Fr = new WeakMap()),
  (Dr = new WeakMap()),
  (Zu = new WeakSet()),
  (av = function (e) {
    getProperty(this, Dr).push(e);
  }),
  x(Qc, "empty", Object.freeze(Qc.from("")));
let w = Qc;
var On;
const Ku = class Ku extends Fd {
  constructor() {
    super(...arguments);
    x(this, "count", -1);
    x(this, "type", null);
    b(this, On);
  }
  get align() {
    return this.type.align;
  }
  get size() {
    const t = this.type;
    return this.count * Wt(t.align, t.size);
  }
  equals(t) {
    return this === t
      ? !0
      : t instanceof Ku
      ? this.type.equals(t.type) && this.count === t.count
      : !1;
  }
  get runtime_sized() {
    return this.count < 0;
  }
  static from(t, r = -1) {
    const i = new Ku();
    return (i.type = t), (i.count = r), i;
  }
  get requires_declaration() {
    return this.type.requires_declaration;
  }
  get declaration_chunk() {
    return (
      getProperty(this, On) === false &&
        (this.type.requires_declaration
          ? S(this, On, this.type.declaration_chunk)
          : S(this, On, w.empty)),
      getProperty(this, On)
    );
  }
  get wgsl_ref() {
    const t = this.type;
    return this.runtime_sized
      ? `array< ${t.wgsl_ref} >`
      : `array< ${t.wgsl_ref}, ${this.count} >`;
  }
  get wgsl_declaration() {
    const t = this.type.wgsl_ref;
    return this.runtime_sized
      ? `array< ${t} >`
      : `array< ${t}, ${this.count} >`;
  }
};
On = new WeakMap();
let X = Ku;
X.f32 = Object.freeze(X.from(Ce.f32));
X.u32 = Object.freeze(X.from(Ce.u32));
function cv(s, e) {
  return Wt(e, s);
}
const lw = /array\s*<\s*(?<type>[^,]+)\s*(?:,\s*(?<count>[0-9]+))?\s*>/;
function cp(s) {
  const e = s.match(lw);
  if (e !== null) {
    const r = e.groups,
      i = r.type;
    let n;
    r.count === false ? (n = -1) : (n = parseInt(r.count));
    const o = cp(i),
      a = new X();
    return (a.type = o), (a.count = n), a;
  }
  const t = Ce[s];
  if (t === false) throw new Error(`Unsupported type '${s}'`);
  return t;
}
class _w {
  constructor() {
    x(this, "offset", 0);
    x(this, "type");
    x(this, "name");
  }
  get size() {
    return this.type.size;
  }
  get align() {
    return this.type.align;
  }
  equals(e) {
    return (
      this.name === e.name &&
      this.offset === e.offset &&
      this.type.equals(e.type)
    );
  }
}
let uw = 0;
var Rs, yl, wl, wc, lv, _v, ya;
const Qu = class Qu extends Fd {
  constructor() {
    super(...arguments);
    b(this, wc);
    b(this, Rs, "");
    x(this, "fields", []);
    b(this, yl, 0);
    b(this, wl, 0);
    b(this, ya);
  }
  get size() {
    return getProperty(this, yl);
  }
  get align() {
    return getProperty(this, wl);
  }
  equals(t) {
    return t === this
      ? !0
      : t instanceof Qu
      ? getProperty(this, Rs) === getProperty(t, Rs) &&
        yn(this.fields, t.fields)
      : !1;
  }
  get requires_declaration() {
    return !0;
  }
  get runtime_sized() {
    const t = this.fields;
    for (let r = 0; r < t.length; r++) if (t[r].type.runtime_sized) return !0;
    return !1;
  }
  static from(t, r = `Struct_${uw++}`) {
    var n, o;
    const i = new Qu();
    S(i, Rs, r);
    for (const a in t) {
      const c = t[a];
      let _;
      if (typeof c == "string") _ = cp(c);
      else if (c.isWebGPUType === !0) _ = c;
      else throw new Error(`Unsupported type declarator '${c}'`);
      P((n = i), wc, lv).call(n, a, _);
    }
    return P((o = i), wc, _v).call(o), i;
  }
  get(t) {
    const r = this.fields.find((i) => i.name === t);
    if (r === false) throw new Error(`Field '${t}' not found`);
    return r;
  }
  get wgsl_ref() {
    return getProperty(this, Rs);
  }
  get wgsl_declaration() {
    const t = new gn();
    t.add(`struct ${getProperty(this, Rs)}{`), t.indent();
    for (let r = 0; r < this.fields.length; r++) {
      const i = this.fields[r];
      t.add(`${i.name} : ${i.type.wgsl_ref},`);
    }
    return t.dedent(), t.add("}"), t.build();
  }
  get declaration_chunk() {
    if (getProperty(this, ya) === false) {
      const t = w.from(this.wgsl_declaration);
      for (let r = 0; r < this.fields.length; r++) {
        const n = this.fields[r].type;
        n.requires_declaration && t.addDependency(n.declaration_chunk);
      }
      S(this, ya, t);
    }
    return getProperty(this, ya);
  }
};
(Rs = new WeakMap()),
  (yl = new WeakMap()),
  (wl = new WeakMap()),
  (wc = new WeakSet()),
  (lv = function (t, r) {
    const i = new _w();
    (i.name = t), (i.type = r), this.fields.push(i);
  }),
  (_v = function () {
    const t = this.fields,
      r = t.length;
    let i = 0,
      n = 0;
    for (let o = 0; o < r; o++) {
      const a = t[o],
        c = cv(n, a.align);
      i < a.align && (i = a.align), (a.offset = c), (n = a.offset + a.size);
    }
    S(this, wl, i), S(this, yl, Wt(i, n));
  }),
  (ya = new WeakMap());
let Struct = Qu;
function dw(s, e, t) {
  const r = t.count;
  for (let i = 0; i < r; i++) lp(s[i], e, t.type);
}
function hw(s, e, t) {
  const r = t.fields,
    i = e.position,
    n = r.length;
  for (let o = 0; o < n; o++) {
    const a = r[o];
    e.position = i + a.offset;
    const c = s[a.name];
    c !== false && lp(c, e, a.type);
  }
}
function lp(s, e, t) {
  if (((e.position = Wt(t.align, e.position)), t instanceof X))
    return dw(s, e, t);
  if (t instanceof Struct) return hw(s, e, t);
  switch (t) {
    case Ce.u32:
    case Ce["atomic<u32>"]:
      return e.writeUint32(s);
    case Ce.i32:
    case Ce["atomic<i32>"]:
      return e.writeInt32(s);
    case Ce.f32:
      return e.writeFloat32(s);
    case Ce["vec2<u32>"]:
      return e.writeUint32Array(s, 0, 2);
    case Ce["vec3<u32>"]:
      return e.writeUint32Array(s, 0, 3);
    case Ce["vec4<u32>"]:
      return e.writeUint32Array(s, 0, 4);
    case Ce["vec2<f32>"]:
      return e.writeFloat32Array(s, 0, 2);
    case Ce["vec3<f32>"]:
      return e.writeFloat32Array(s, 0, 3);
    case Ce["vec4<f32>"]:
      return e.writeFloat32Array(s, 0, 4);
    case Ce["mat4x4<f32>"]:
      return e.writeFloat32Array(s, 0, 16);
    default:
      throw new Error(`Unsupported type ${t}`);
  }
}
function Fo(s, e, t, r = 0) {
  const i = Ii.fromArrayBuffer(t);
  (i.endianness = Sc()), (i.position = r), lp(s, i, e);
}
function uv(s, e, t, r, i = 0, n = r.byteLength) {
  let o = r.byteLength;
  t & GPUBufferUsage.UNIFORM &&
    o < s.limits.minUniformBufferOffsetAlignment &&
    (o = s.limits.minUniformBufferOffsetAlignment);
  const a = s.createBuffer({
      label: e,
      usage: t,
      size: o,
      mappedAtCreation: !0,
    }),
    c = a.getMappedRange();
  return Oo(r, i, c, 0, n), a.unmap(), a;
}
class fw {
  constructor({ capacity: e = 100, perKeyCapacity: t = 10 } = {}) {
    x(this, "onRemoved", new ge());
    x(this, "data", new Ct());
    x(this, "__first", null);
    x(this, "__last", null);
    (this.capacity = e), (this.perKeyCapacity = t), (this.size = 0);
  }
  get(e) {
    const t = this.data.get(e);
    if (t === false) return;
    let r;
    return (
      t.length > 1 ? (r = t.pop()) : ((r = t[0]), this.data.delete(e)),
      r.unlink(),
      this.size--,
      r.value
    );
  }
  clear() {
    for (; this.__first !== null; ) this.__removeElement(this.__first);
  }
  __removeElement(e) {
    e === this.__first && (this.__first = e.next),
      e === this.__last && (this.__last = e.previous),
      e.unlink();
    const t = e.key,
      r = this.data.get(t),
      i = r.indexOf(e);
    r.splice(i, 1),
      r.length === 0 && this.data.delete(t),
      this.size--,
      this.onRemoved.send2(t, e.value);
  }
  add(e, t) {
    let r = this.data.get(e);
    if (r === false) (r = []), this.data.set(e, r);
    else if (r.length >= this.perKeyCapacity) return !1;
    this.size >= this.capacity && this.__removeElement(this.__first);
    const i = new X0();
    return (
      (i.value = t),
      (i.key = e),
      (i.previous = this.__last),
      this.__last !== null && (this.__last.next = i),
      (this.__last = i),
      this.__first === null && (this.__first = i),
      r.push(i),
      this.size++,
      !0
    );
  }
}
var Fn, ci, Dn;
class pw {
  constructor() {
    b(this, Fn, null);
    b(this, ci, new Map());
    b(this, Dn, new fw());
    getProperty(this, Dn).onRemoved.add((e, t) => {
      getProperty(this, Fn).destroyResource(t, e);
    });
  }
  attach(e) {
    S(this, Fn, e);
  }
  get(e) {
    let t = getProperty(this, Dn).get(e);
    if (
      (t === false && (t = getProperty(this, Fn).createResource(e)),
      getProperty(this, ci).get(t) !== false)
    )
      throw new Error("Resource is already associated with a live descriptor");
    return getProperty(this, ci).set(t, e), t;
  }
  release(e) {
    const t = getProperty(this, ci).get(e);
    if (t === false) throw new Error("Resource is not managed");
    getProperty(this, ci).delete(e), getProperty(this, Dn).add(t, e);
  }
  destroy() {
    getProperty(this, Dn).clear();
    for (const e of getProperty(this, ci).keys()) {
      const t = getProperty(this, ci).get(e);
      getProperty(this, Fn).destroyResource(e, t);
    }
    getProperty(this, ci).clear();
  }
}
(Fn = new WeakMap()), (ci = new WeakMap()), (Dn = new WeakMap());
class mw {
  constructor() {
    x(this, "resource_manager", new pw());
    this.resource_manager.attach(this);
  }
  createResource(e) {
    throw new Error("Not Implemented");
  }
  destroyResource(e, t) {
    throw new Error("Not Implemented");
  }
  destroy() {
    this.resource_manager.destroy();
  }
}
function gw(s) {
  let e = 0;
  const t = (s & 31744) >> 10,
    r = s & 1023;
  let i = 1;
  return (
    s >> 15 && (i = -1),
    t !== 0
      ? t === 31
        ? r !== 0
          ? (e = NaN)
          : (e = 1 / 0)
        : (e = i * (Math.pow(2, t - 15) * (1 + r / 1024)))
      : (e = i * (6103515625e-14 * (r / 1024))),
    e
  );
}
class Ve extends wn {
  constructor() {
    super(...arguments);
    x(this, "format");
    x(this, "dimension");
    x(this, "aspect", "all");
    x(this, "baseMipLevel", 0);
    x(this, "mipLevelCount");
    x(this, "baseArrayLayer", 0);
    x(this, "arrayLayerCount");
  }
  static from(t) {
    const r = new Ve();
    return r.fromJSON(t), r;
  }
  fromJSON(t) {
    super.fromJSON(t),
      (this.format = t.format),
      (this.dimension = t.dimension),
      (this.aspect = t.aspect ?? "all"),
      (this.baseMipLevel = t.baseMipLevel ?? 0),
      (this.mipLevelCount = t.mipLevelCount),
      (this.baseArrayLayer = t.baseArrayLayer ?? 0),
      (this.arrayLayerCount = t.arrayLayerCount);
  }
  equals(t) {
    return (
      super.equals(t) &&
      this.format === t.format &&
      this.dimension === t.dimension &&
      this.aspect === t.aspect &&
      this.baseMipLevel === t.baseMipLevel &&
      this.mipLevelCount === t.mipLevelCount &&
      this.baseArrayLayer === t.baseArrayLayer &&
      this.arrayLayerCount === t.arrayLayerCount
    );
  }
  hash() {
    return 0;
  }
  get isTextureViewDescriptor() {
    return !0;
  }
}
function vw(s) {
  const e = /(?<channels>[rgba]+)(?<size>[0-9]+)(?<type>[a-z]+)/,
    t = s.match(e);
  if (t === null) throw new Error(`Failed to parse '${s}'`);
  const { channels: r, size: i, type: n } = t.groups,
    o = new fc();
  o.itemSize = r.length;
  const a = parseInt(i);
  if (n === "float")
    if (a === 16) o.type = se.Float16;
    else if (a === 32) o.type = se.Float32;
    else throw new Error(`Unsupported format ${s}`);
  else throw new Error(`Unsupported format ${s}`);
  return o;
}
const xw = Object.freeze(Ve.from({ label: "Default Texture View" })),
  ng = 0,
  Ch = 1,
  bw = 2;
let yw = 0;
function ww(s, e) {
  if (s === se.Float32) return new Float32Array(e).slice();
  if (s === se.Float16) {
    const t = new Uint16Array(e),
      r = t.length,
      i = new Float32Array(r);
    for (let n = 0; n < r; n++) i[n] = gw(t[n]);
    return i;
  } else {
    if (s === se.Uint8) return new Uint8Array(e).slice();
    throw new Error(`Unsupported type '${s}'`);
  }
}
var ed, er, Ls, wa, Tl, td, dv;
const om = class om {
  constructor(e) {
    b(this, td);
    b(this, ed, yw++);
    x(this, "descriptor", new mt());
    b(this, er);
    b(this, Ls, ng);
    b(this, wa);
    b(this, Tl, new Ct());
    S(this, wa, e);
  }
  get id() {
    return getProperty(this, ed);
  }
  get isGPUTextureContext() {
    return !0;
  }
  get size() {
    return this.descriptor.size;
  }
  get width() {
    return this.descriptor.size.width;
  }
  get height() {
    return this.descriptor.size.height;
  }
  get gpu_texture() {
    return (
      getProperty(this, Ls) === ng && this.allocate(), getProperty(this, er)
    );
  }
  static fromTexture(e, t) {
    const r = new om(t);
    return S(r, Ls, Ch), S(r, er, e), r.descriptor.fromTexture(e), r;
  }
  obtainView(e = xw) {
    return getProperty(this, Tl).getOrCompute(e, P(this, td, dv), this);
  }
  async download(e = 0) {
    const t = getProperty(this, wa),
      r = t.createCommandEncoder(),
      i = vw(this.descriptor.format),
      n = this.size,
      o = n[0] >> e,
      a = n[1] >> e,
      c = i.getByteSize() * o,
      _ = t.createBuffer({
        usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
        size: c * a,
      });
    r.copyTextureToBuffer(
      { texture: this.gpu_texture, mipLevel: e, origin: [0, 0, 0] },
      { buffer: _, offset: 0, bytesPerRow: c },
      [o, a]
    );
    const u = r.finish();
    t.queue.submit([u]), await _.mapAsync(GPUMapMode.READ);
    const d = ww(i.type, _.getMappedRange());
    return _.destroy(), d;
  }
  allocate(e = !1) {
    if (e)
      throw new Error('support for "preserve_data" flag is not implemented');
    this.destroy(),
      S(this, er, getProperty(this, wa).createTexture(this.descriptor)),
      S(this, Ls, Ch);
  }
  destroy() {
    getProperty(this, er) !== false &&
      (getProperty(this, er).destroy(), S(this, er, false)),
      getProperty(this, Tl).clear(),
      S(this, Ls, bw);
  }
  clear() {
    if (getProperty(this, er) !== false) throw new Error("Not Implemented");
  }
  resize(e, t = 1, r = 1, i = !1) {
    const n = this.descriptor;
    (n.size[0] === e && n.size[1] === t && n.size[2] === r) ||
      ((n.size = [e, t, r]),
      getProperty(this, Ls) === Ch &&
        (getProperty(this, er).width !== e ||
          getProperty(this, er).height !== t ||
          getProperty(this, er).depthOrArrayLayers !== r) &&
        this.allocate(i));
  }
};
(ed = new WeakMap()),
  (er = new WeakMap()),
  (Ls = new WeakMap()),
  (wa = new WeakMap()),
  (Tl = new WeakMap()),
  (td = new WeakSet()),
  (dv = function (e) {
    return this.gpu_texture.createView(e);
  });
let Ht = om;
class Tw {
  constructor(e, t) {
    x(this, "ctx");
    x(this, "encoder");
    x(this, "graphics");
    (this.graphics = e), (this.encoder = t);
  }
  get(e) {
    const t = e.type;
    if (t === "buffer")
      return this.graphics.allocator_buffers.get(e, this.encoder);
    if (t === "texture") return this.graphics.allocator_textures.get(e);
    throw new Error("Unsupported resource type");
  }
  release(e) {
    if (e instanceof GPUBuffer) this.graphics.allocator_buffers.release(e);
    else if (e instanceof Ht) this.graphics.allocator_textures.release(e);
    else throw new Error("Unsupported resource type");
  }
  destroy() {}
}
class Ew extends mw {
  constructor(t, r) {
    super();
    x(this, "graphics");
    x(this, "encoder");
    (this.encoder = r),
      (this.graphics = t),
      (this.resource_manager = new Tw(t, r));
  }
  obtainStaticBuffer(t) {
    return this.graphics.buffers.obtainStaticBuffer(t);
  }
}
let Uh = 0;
var Rt, ji, El, Al;
const am = class am {
  constructor() {
    b(this, Rt);
    b(this, ji);
    b(this, El, []);
    b(this, Al, !1);
  }
  get isGPUCommandContext() {
    return !0;
  }
  get gpu_encoder() {
    return getProperty(this, Rt);
  }
  static create(e, t = "") {
    const r = new am();
    return (
      S(r, ji, e),
      S(r, Rt, e.device.createCommandEncoder({ label: t })),
      Uh++,
      Uh > 1024 && ap("Too many open GPU contexts", 20),
      r
    );
  }
  createFrameGraphContext() {
    return new Ew(getProperty(this, ji), this);
  }
  encodeGraph(e) {
    const t = this.createFrameGraphContext();
    e.compile(), e.execute(t);
  }
  clearBuffer(e, t, r) {
    getProperty(this, Rt).clearBuffer(e, t, r);
  }
  copyBufferToBuffer(e, t, r, i, n) {
    getProperty(this, Rt).copyBufferToBuffer(e, t, r, i, n);
  }
  copyTextureToTexture(e, t, r) {
    getProperty(this, Rt).copyTextureToTexture(e, t, r);
  }
  beginComputePass(e) {
    return getProperty(this, Rt).beginComputePass(e);
  }
  constructComputePass({ pipeline: e, timer: t, label: r, bindings: i = [] }) {
    const n = { label: r };
    r === false && (n.label = e.label);
    const o = getProperty(this, ji);
    t !== false &&
      o.device.features.has("timestamp-query") &&
      (n.timestampWrites = t.getComputeWrites());
    const c = getProperty(this, Rt).beginComputePass(n),
      _ = o.compute_pipelines.obtain(e);
    return c.setPipeline(_), o.setPipelineBindings(c, e, i), c;
  }
  constructRenderPass({
    label: e,
    pipeline: t,
    timer: r,
    bindings: i,
    colorAttachments: n,
    depthStencilAttachment: o,
  }) {
    const a = { label: e, colorAttachments: n, depthStencilAttachment: o };
    e === false && (a.label = t.label);
    const c = getProperty(this, ji),
      _ = c.device;
    r !== false &&
      _.features.has("timestamp-query") &&
      (a.timestampWrites = r.getComputeWrites());
    const d = c.render_pipelines.obtain(t),
      h = getProperty(this, Rt).beginRenderPass(a);
    return h.setPipeline(d), c.setPipelineBindings(h, t, i), h;
  }
  beginRenderPass(e) {
    return getProperty(this, Rt).beginRenderPass(e);
  }
  resolveQuerySet(e, t, r, i, n) {
    getProperty(this, Rt).resolveQuerySet(e, t, r, i, n);
  }
  allocateTransientBuffer(
    e,
    t = GPUBufferUsage.UNIFORM,
    r = 0,
    i = e.byteLength
  ) {
    const n = uv(getProperty(this, ji).device, "transient", t, e, r, i);
    return getProperty(this, El).push(n), n;
  }
  allocateTransientValueBuffer(e, t, r) {
    const i = new ArrayBuffer(e.size);
    return Fo(t, e, i, 0), this.allocateTransientBuffer(i, r);
  }
  finish() {
    if (getProperty(this, Al)) return;
    Uh--, S(this, Al, !0);
    const t = getProperty(this, Rt).finish();
    getProperty(this, ji).device.queue.submit([t]);
    const r = getProperty(this, El),
      i = r.length;
    for (let n = 0; n < i; n++) r[n].destroy();
  }
};
(Rt = new WeakMap()),
  (ji = new WeakMap()),
  (El = new WeakMap()),
  (Al = new WeakMap());
let Ni = am;
function na(s, e) {
  const t = e[0],
    r = e[1],
    i = e[2],
    n = e[3],
    o = e[4],
    a = e[5],
    c = e[6],
    _ = e[7],
    u = e[8],
    d = e[9],
    h = e[10],
    p = e[11],
    v = e[12],
    f = e[13],
    m = e[14],
    g = e[15],
    E = t * a - r * o,
    y = t * c - i * o,
    A = t * _ - n * o,
    T = r * c - i * a,
    z = r * _ - n * a,
    C = i * _ - n * c,
    U = u * f - d * v,
    k = u * m - h * v,
    N = u * g - p * v,
    M = d * m - h * f,
    I = d * g - p * f,
    L = h * g - p * m,
    F = E * L - y * I + A * M + T * N - z * k + C * U;
  if (!F) return !1;
  const D = 1 / F;
  return (
    (s[0] = (a * L - c * I + _ * M) * D),
    (s[1] = (i * I - r * L - n * M) * D),
    (s[2] = (f * C - m * z + g * T) * D),
    (s[3] = (h * z - d * C - p * T) * D),
    (s[4] = (c * N - o * L - _ * k) * D),
    (s[5] = (t * L - i * N + n * k) * D),
    (s[6] = (m * A - v * C - g * y) * D),
    (s[7] = (u * C - h * A + p * y) * D),
    (s[8] = (o * I - a * N + _ * U) * D),
    (s[9] = (r * N - t * I - n * U) * D),
    (s[10] = (v * z - f * A + g * E) * D),
    (s[11] = (d * A - u * z - p * E) * D),
    (s[12] = (a * k - o * M - c * U) * D),
    (s[13] = (t * M - r * k + i * U) * D),
    (s[14] = (f * y - v * T - m * E) * D),
    (s[15] = (u * T - d * y + h * E) * D),
    !0
  );
}
function Aw(s, e, t, r) {
  const i = new Array(r);
  for (let n = 0; n < r; n++) {
    const o = e + t * n;
    i[n] = s.slice(o, o + t);
  }
  return i;
}
function Sw(s, e, t) {
  const r = e.type,
    i = r.size,
    n = new ArrayBuffer(i);
  Fo(t, r, n), s.writeBuffer(e.buffer, 0, n, 0, i);
}
var Gn, Sl;
const cm = class cm {
  constructor(e, t) {
    b(this, Gn);
    b(this, Sl);
    S(this, Sl, e), S(this, Gn, t);
  }
  get isGPUTypedBuffer() {
    return !0;
  }
  get buffer() {
    return getProperty(this, Gn);
  }
  get type() {
    return getProperty(this, Sl);
  }
  destroy() {
    getProperty(this, Gn).destroy();
  }
  static create({
    label: e,
    device: t,
    type: r,
    usage: i,
    mappedAtCreation: n = !1,
  }) {
    const o = t.createBuffer({
      label: e,
      size: r.size,
      usage: i,
      mappedAtCreation: n,
    });
    return new cm(r, o);
  }
  toString() {
    return `GPUTypedBuffer:{
            type: ${this.type},
            buffer: ${getProperty(this, Gn)}
        }`;
  }
};
(Gn = new WeakMap()), (Sl = new WeakMap());
let yf = cm;
const ce = Struct.from(
  {
    transform: "mat4x4<f32>",
    transform_inverse: "mat4x4<f32>",
    view_matrix: "mat4x4<f32>",
    view_matrix_inverse: "mat4x4<f32>",
    projection_matrix: "mat4x4<f32>",
    projection_matrix_inverse: "mat4x4<f32>",
    view_projection_matrix: "mat4x4<f32>",
    view_projection_matrix_inverse: "mat4x4<f32>",
    frustum: "array<vec4<f32>,6>",
    device_depth_to_view_space: "vec4<f32>",
  },
  "CameraUniforms"
);
function zw(s, e, t = !0) {
  let r = Math.min(e.near, e.far),
    i = Math.max(e.near, e.far);
  if (t) {
    const d = r;
    (r = i), (i = d);
  }
  const n = i / (r - i),
    o = -1;
  (s[0] = o * n), (s[1] = n * r);
  const a = e.aspect,
    c = Math.cos(0.5 * e.fov) / Math.sin(0.5 * e.fov),
    _ = c / a,
    u = c;
  (s[2] = -1 / _), (s[3] = 1 / u);
}
const il = Si();
il[10] = -1;
il[14] = 1;
var Xi, Wi, Vn, zl, rd, hv;
const lm = class lm {
  constructor(e, t) {
    b(this, rd);
    x(this, "buffer");
    b(this, Xi);
    b(this, Wi);
    b(this, Vn, new Float32Array([0, 0]));
    b(this, zl, new Float32Array(16));
    S(this, Xi, e), S(this, Wi, t), this.initialize();
  }
  get gpu_buffer() {
    return this.buffer.buffer;
  }
  get view_projection_matrix() {
    return getProperty(this, zl);
  }
  setViewportOffset(e, t) {
    (getProperty(this, Vn)[0] = e), (getProperty(this, Vn)[1] = t);
  }
  set camera(e) {
    S(this, Wi, e);
  }
  get camera() {
    return getProperty(this, Wi);
  }
  clone() {
    const e = new lm(getProperty(this, Xi), getProperty(this, Wi).clone());
    return e.copy(this), e;
  }
  copy(e) {
    getProperty(this, Wi).copy(e.camera);
    const t = getProperty(this, Xi).createCommandEncoder();
    t.copyBufferToBuffer(
      e.buffer.buffer,
      0,
      this.buffer.buffer,
      0,
      this.buffer.buffer.size
    ),
      getProperty(this, Xi).queue.submit([t.finish()]);
  }
  initialize() {
    this.buffer = yf.create({
      device: getProperty(this, Xi),
      label: "camera",
      type: ce,
      usage:
        GPUBufferUsage.STORAGE |
        GPUBufferUsage.UNIFORM |
        GPUBufferUsage.COPY_DST |
        GPUBufferUsage.COPY_SRC,
    });
  }
  destroy() {
    this.buffer.destroy();
  }
  update() {
    P(this, rd, hv).call(this);
  }
};
(Xi = new WeakMap()),
  (Wi = new WeakMap()),
  (Vn = new WeakMap()),
  (zl = new WeakMap()),
  (rd = new WeakSet()),
  (hv = function () {
    const e = getProperty(this, Wi);
    e.update();
    const t = new Float64Array(16);
    t.set(e.projection_matrix),
      (t[8] += getProperty(this, Vn)[0]),
      (t[9] += getProperty(this, Vn)[1]),
      Ir(t, il, t);
    const r = getProperty(this, zl);
    Ir(r, t, e.view_matrix);
    const n = getProperty(this, Xi).queue,
      o = e.transform.matrix,
      a = Si();
    na(a, o);
    const c = Si();
    na(c, t);
    const _ = Si();
    na(_, r);
    const u = new Float32Array(4);
    zw(u, e, !0);
    const d = Si();
    na(d, e.view_matrix),
      Sw(n, this.buffer, {
        view_matrix: e.view_matrix,
        view_matrix_inverse: d,
        transform: o,
        transform_inverse: a,
        projection_matrix: t,
        projection_matrix_inverse: c,
        view_projection_matrix: r,
        view_projection_matrix_inverse: _,
        frustum: Aw(e.frustum, 0, 4, 6),
        device_depth_to_view_space: u,
      });
  });
let wf = lm;
var id, Cl, sd, fv;
class Cw {
  constructor(e) {
    b(this, sd);
    b(this, id, new Ct());
    b(this, Cl);
    S(this, Cl, e);
  }
  obtain(e) {
    return getProperty(this, id).getOrCompute(e, P(this, sd, fv), this);
  }
}
(id = new WeakMap()),
  (Cl = new WeakMap()),
  (sd = new WeakSet()),
  (fv = function (e) {
    return new wf(getProperty(this, Cl), e);
  });
const dn = Struct.from(
    { count: "u32", sun_index: "u32" },
    "LightCollectionMetadata"
  ),
  gc = { Point: 1, Directional: 2 },
  Ao = 64,
  Uw = 64;
var li, $n, Tr, Kf, qn, Ul, nd, ys, Tf, pv, mv;
class Iw {
  constructor(e, t) {
    b(this, ys);
    b(this, li);
    b(this, $n);
    b(this, Tr);
    b(this, Kf);
    b(this, qn);
    b(this, Ul, -1);
    b(this, nd, Uw);
    S(this, $n, e),
      S(this, li, t),
      S(
        this,
        qn,
        e.createBuffer({
          label: "Light Collection / Metadata",
          size: dn.size,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })
      ),
      P(this, ys, Tf).call(this, !1);
  }
  get source() {
    return getProperty(this, li);
  }
  get buffer_data() {
    return getProperty(this, Tr);
  }
  get buffer_metadata() {
    return getProperty(this, qn);
  }
  update() {
    if (getProperty(this, Ul) === getProperty(this, li).version) return;
    const e = getProperty(this, $n),
      t = e.createCommandEncoder();
    this.build(t), e.queue.submit([t.finish()]);
  }
  build(e) {
    const r = getProperty(this, li).elements;
    P(this, ys, pv).call(this),
      P(this, ys, mv).call(this),
      P(this, ys, Tf).call(this, !0);
    const i = getProperty(this, Tr).getMappedRange(),
      n = new Float32Array(i);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      let c = o * Ao;
      if (a.isPointLight === !0) n[c++] = gc.Point;
      else if (a.isDirectionalLight === !0) {
        const _ = a;
        n[c++] = gc.Directional;
        const u = _.intensity.getValue();
        (n[c++] = _.color.r * u),
          (n[c++] = _.color.g * u),
          (n[c++] = _.color.b * u),
          (n[c++] = _.direction.x),
          (n[c++] = _.direction.y),
          (n[c++] = _.direction.z);
      }
    }
    getProperty(this, Tr).mapState === "mapped" &&
      getProperty(this, Tr).unmap(),
      S(this, Ul, getProperty(this, li).version);
  }
  destroy() {
    getProperty(this, Tr).destroy(), getProperty(this, qn).destroy();
  }
}
(li = new WeakMap()),
  ($n = new WeakMap()),
  (Tr = new WeakMap()),
  (Kf = new WeakMap()),
  (qn = new WeakMap()),
  (Ul = new WeakMap()),
  (nd = new WeakMap()),
  (ys = new WeakSet()),
  (Tf = function (e = !0) {
    const t = getProperty(this, $n);
    getProperty(this, Tr) !== false && getProperty(this, Tr).destroy();
    const r = getProperty(this, nd);
    S(
      this,
      Tr,
      t.createBuffer({
        label: "Light Collection / Data",
        size: r * Ao,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        mappedAtCreation: e,
      })
    );
  }),
  (pv = function () {
    const e = new ArrayBuffer(dn.size),
      t = getProperty(this, $n);
    Fo({ count: getProperty(this, li).elements.length }, dn, e),
      t.queue.writeBuffer(getProperty(this, qn), 0, e, 0, e.byteLength);
  }),
  (mv = function () {
    const r = getProperty(this, li).elements.length * Ao;
    if (getProperty(this, Tr).size < r) throw new Error("Not Implemented");
  });
const gv = Struct.from(
    { address: "u32", light_type: "u32", padding__: "vec2<u32>" },
    "LightLookupRecord"
  ),
  vv = w.from(`
fn sign_not_zero(x:f32) -> f32{
    if(x < 0.0){
        return -1.0;
    }else{
        return 1.0;
    }
}
`),
  Nw = w.from(
    `
fn sign_not_zero_v2(x:vec2<f32>) -> vec2<f32>{
    return vec2(sign_not_zero(x[0]), sign_not_zero(x[1]));
}
`,
    [vv]
  ),
  Do = w.from(
    `
fn octahedral_encode_normal( nor : vec3<f32> ) -> vec2<f32>
{
    // Octahedron normal encode
    let sum = abs( nor.x ) + abs( nor.y ) + abs( nor.z );

    var v = nor.xy / sum;

    if(nor.z < 0.0){
    
        v = (1.0-abs(v.yx))*sign_not_zero_v2(v.xy);
    }

    return 0.5 + 0.5 * v.xy;
}
`,
    [Nw]
  ),
  F_ = w.from(`
fn get_bilinear_weights(fraction:vec2<f32>) -> vec4<f32>{
    
    let x1 = fraction.x;
    let y1 = fraction.y;
    
    let x0 = ( 1.0 - x1 );
    let y0 = ( 1.0 - y1 );
    
    return vec4(
        x0 * y0,
        x1 * y0,
        x0 * y1,
        x1 * y1
    );
}
`),
  D_ = w.from(`
fn uv_to_texel_coordinate(uv: vec2<f32>, texture_size: vec2<u32>) -> vec2<f32>{
    return uv * vec2<f32>(texture_size) - 0.5;
}
`),
  G_ = w.from(
    `
fn texture_sample_bilinear_uv(source: texture_2d<f32>, uv:vec2<f32>, texture_lod: u32)-> vec4<f32>{
    let source_size = textureDimensions(source, texture_lod);
    let source_size_f32 = vec2f(source_size);
    
    let max_texel = source_size - 1u;
        
    let source_texel = clamp( uv_to_texel_coordinate(uv, source_size), vec2(0.0), vec2<f32>(max_texel));
    
    let source_texel_fract = fract(source_texel);
  
  // get pixel positions
    let c00 = vec2u(source_texel);
    let c01 = vec2( c00.x, min(max_texel.y, c00.y + 1u) );
    let c10 = vec2( min(max_texel.x, c00.x+1u), c00.y );
    let c11 = vec2( c10.x, c01.y );
  
    let t00 = textureLoad(source, c00, texture_lod);
    let t10 = textureLoad(source, c10, texture_lod);
    let t01 = textureLoad(source, c01, texture_lod);
    let t11 = textureLoad(source, c11, texture_lod);
    
    let h0 = mix(t00, t10, source_texel_fract.x);
    let h1 = mix(t01, t11, source_texel_fract.x);
  
    return mix(h0, h1, source_texel_fract.y);
}
`,
    [D_]
  ),
  Mw = w.from(`
fn spline_interpolate_catmull_rom_vec4(
    v0:vec4<f32>,
    v1:vec4<f32>,
    v2:vec4<f32>,
    v3:vec4<f32>,
    t:f32
) -> vec4<f32> {
    
    // tension, I believe
    const T = 0.5;
    
    const CRM = mat4x4(-T,        2.0 - T,  T - 2.0,         T,
                       2.0 * T,  T - 3.0,  3.0 - 2.0 * T,  -T,
                      -T,        0.0,      T,               0.0,
                       0.0,      1.0,      0.0,             0.0);

    let A = v0 * CRM[0][0] + v1 * CRM[0][1] + v2 * CRM[0][2] + v3 * CRM[0][3];
    let B = v0 * CRM[1][0] + v1 * CRM[1][1] + v2 * CRM[1][2] + v3 * CRM[1][3];
    let C = v0 * CRM[2][0] + v1 * CRM[2][1] + v2 * CRM[2][2] + v3 * CRM[2][3];
    let D = v0 * CRM[3][0] + v1 * CRM[3][1] + v2 * CRM[3][2] + v3 * CRM[3][3];

    return t * (t * (t * A + B) + C) + D;
}
  `),
  Dd = w.from(
    `
fn texture_sample_catmull_rom_exact(
    source: texture_2d<f32>,
    texel_position: vec2<f32>,
    texture_lod:u32
) -> vec4<f32> {
        
    let frac = fract(texel_position);
    
    let pixel = vec2<i32>(texel_position);
    
    let C00 = textureLoad( source, pixel + vec2(-1 , -1), texture_lod);
    let C10 = textureLoad( source, pixel + vec2( 0 , -1), texture_lod);
    let C20 = textureLoad( source, pixel + vec2( 1 , -1), texture_lod);
    let C30 = textureLoad( source, pixel + vec2( 2 , -1), texture_lod);
    
    let C01 = textureLoad( source, pixel + vec2(-1 , 0), texture_lod);
    let C11 = textureLoad( source, pixel + vec2( 0 , 0), texture_lod);
    let C21 = textureLoad( source, pixel + vec2( 1 , 0), texture_lod);
    let C31 = textureLoad( source, pixel + vec2( 2 , 0), texture_lod);    
    
    let C02 = textureLoad( source, pixel + vec2(-1 , 1), texture_lod);
    let C12 = textureLoad( source, pixel + vec2( 0 , 1), texture_lod);
    let C22 = textureLoad( source, pixel + vec2( 1 , 1), texture_lod);
    let C32 = textureLoad( source, pixel + vec2( 2 , 1), texture_lod);    
    
    let C03 = textureLoad( source, pixel + vec2(-1 , 2), texture_lod);
    let C13 = textureLoad( source, pixel + vec2( 0 , 2), texture_lod);
    let C23 = textureLoad( source, pixel + vec2( 1 , 2), texture_lod);
    let C33 = textureLoad( source, pixel + vec2( 2 , 2), texture_lod);    
    
    let CP0X = spline_interpolate_catmull_rom_vec4(C00, C10, C20, C30, frac.x);
    let CP1X = spline_interpolate_catmull_rom_vec4(C01, C11, C21, C31, frac.x);
    let CP2X = spline_interpolate_catmull_rom_vec4(C02, C12, C22, C32, frac.x);
    let CP3X = spline_interpolate_catmull_rom_vec4(C03, C13, C23, C33, frac.x);
    
    return spline_interpolate_catmull_rom_vec4(CP0X, CP1X, CP2X, CP3X, frac.y);
}
  `,
    [Mw]
  ),
  kw = w.from(
    `
fn texture_sample_catmull_rom_uv(
    source: texture_2d<f32>,
    uv: vec2<f32>,
    texture_lod:u32
) -> vec4<f32> {
    let source_size = textureDimensions(source, texture_lod);
    return texture_sample_catmull_rom_exact(
        source,
        uv_to_texel_coordinate(uv, source_size),
        texture_lod
    );
}
`,
    [Dd, D_]
  ),
  xv = w.from(`
fn texture_octahedral_wrap_texel_coordinates(texel:vec2<i32>, texture_size:i32) -> vec2<u32>{
    let wrapped = ((texel % texture_size) + texture_size) % texture_size;

    let fx = abs(texel.x / texture_size) + i32(texel.x < 0);
    let fy = abs(texel.y / texture_size) + i32(texel.y < 0);

    if (((fx ^ fy) & 1) != 0) {
        return vec2<u32>(texture_size - (wrapped + vec2(1)));
    } else {
        return vec2<u32>(wrapped);
    }
}
`),
  _p = w.from(
    `
fn texture_octahedral_sample_bilinear(
    source: texture_2d<f32>,
    offset: vec2<u32>,
    tile_resolution:u32,
    direction:vec3<f32>,
    lod: u32,
) -> vec4<f32> {

    // convert direction to UV
    let octahedral_uv = octahedral_encode_normal(direction);
    let grid = uv_to_texel_coordinate(octahedral_uv , vec2(tile_resolution));
    
    let gridFrac = fract(grid);

    let texel_position = vec2<i32>(floor(grid));

    let tile_p_00 = texture_octahedral_wrap_texel_coordinates(texel_position, i32(tile_resolution));
    let tile_p_01 = texture_octahedral_wrap_texel_coordinates(texel_position + vec2(1, 0), i32(tile_resolution));
    let tile_p_10 = texture_octahedral_wrap_texel_coordinates(texel_position + vec2(0, 1), i32(tile_resolution));
    let tile_p_11 = texture_octahedral_wrap_texel_coordinates(texel_position + vec2(1, 1), i32(tile_resolution));
    
    let texel_00 = textureLoad(source, offset + tile_p_00, lod);
    let texel_01 = textureLoad(source, offset + tile_p_01, lod);
    let texel_10 = textureLoad(source, offset + tile_p_10, lod);
    let texel_11 = textureLoad(source, offset + tile_p_11, lod);

    let weights = get_bilinear_weights(gridFrac);
    

    return texel_00 * weights.x
     + texel_01 * weights.y
     + texel_10 * weights.z
     + texel_11 * weights.w
     ;

}
`,
    [xv, G_, kw, Do, F_, D_]
  ),
  Rw = w.from(`
fn quad_blend_weights(coords:vec2<f32>) -> vec4<f32>{
    var res:vec4<f32>;
/* 0 0 0
    0 0 0
    1 0 0 */
    res.x = min(1.0f - coords.x, 1.0f - coords.y);
/* 1 0 0
    0 0 0
    0 0 1 */
    res.y = abs(coords.x - coords.y);
/* 0 0 1
    0 0 0
    0 0 0 */
    res.z = min(coords.x, coords.y);
/* 0 0 0
    0 0 1
    0 1 1 */
    res.w = ceil(coords.x - coords.y);
    //res.xyz /= (res.x + res.y + res.z);
    return res;
}
  `),
  bv = w.from(
    `
fn texture_octahedral_sample_triangular(
    source: texture_2d<f32>,
    offset: vec2<u32>,
    tile_resolution:u32,
    direction:vec3<f32>,
    lod: u32,
) -> vec4<f32> {

    // convert direction to UV
    let octahedral_uv = saturate(octahedral_encode_normal(direction));
    let grid = octahedral_uv * vec2(f32(tile_resolution - 1 )) ;

    let grid_frac = fract(grid);
    let grid_floor = vec2<i32>( floor(grid) );

    let weights = quad_blend_weights(grid_frac);

    //3 nearest frames
    var frame0 = grid_floor;
    var frame1 = grid_floor + vec2<i32>( round(mix(vec2(0, 1), vec2(1, 0), weights.w)) );
    var frame2 = grid_floor + vec2(1, 1);

    // move frames to atlas space
    frame0 += vec2i(offset);
    frame1 += vec2i(offset);
    frame2 += vec2i(offset);

    let samp0 = textureLoad(source, frame0, lod);
    let samp1 = textureLoad(source, frame1, lod);
    let samp2 = textureLoad(source, frame2, lod);

    let d0 = samp0 * weights.x;
    let d1 = samp1 * weights.y;
    let d2 = samp2 * weights.z;

    return (d0 + d1 + d2);
}
`,
    [D_, Do, Rw]
  ),
  up = w.from(
    `
fn sample_environment_color( tEnvrionment:texture_2d<f32>, rayDir: vec3<f32> )-> vec3<f32>{        
    let texture_size = textureDimensions(tEnvrionment, 0);

    return texture_octahedral_sample_bilinear(tEnvrionment, vec2(0), texture_size.x, rayDir, 0).rgb;
}
    `,
    [Do, _p, bv]
  ),
  zt = 8,
  vc = X.from(Ce.u32, zt * zt),
  ut = Struct.from(
    {
      position: "array<f32,3>",
      distance_max: "f32",
      accumulated_samples: "u32",
      coefficients: "array<f32,27>",
      depth: vc,
    },
    "LightProbeData"
  ),
  vn = Struct.from(
    { vertices: "array<u32,4>", neighbours: "array<u32,4>" },
    "TetrahedralMesh"
  ),
  Gd = w.from(`
fn fast_sqrt( x:f32 )-> f32
{
    return bitcast<f32>( 0x1fbd1df5 + ( bitcast<i32>( x ) >> 1 ) );
}
`),
  yv = 0.7,
  dp = 5,
  Lw = 0.02,
  Pw = w.from(
    `
fn sphere_probe_roughness_to_lod(roughness: f32) -> f32 {
  /* From "Moving Frostbite to Physically Based Rendering 3.0" eq 53. */
  let ratio = saturate( roughness / ${yv} );
  
  let ratio_sqrt = fast_sqrt(ratio);
  
  /* Mix with linear to avoid mip 1 being too sharp. */
  let mip_ratio = mix(ratio, ratio_sqrt, 0.4);
  
  return mip_ratio * f32(${dp} - 1);
}
    `,
    [Gd]
  ),
  Jt = w.from("const PI : f32 = 3.1415926535897932384626433832795;"),
  Bw = w.from(
    `
fn sample_environment_map(tEnvironment:texture_2d<f32>, direction: vec3<f32>, roughness: f32) -> vec3<f32> {
    
    let lod = sphere_probe_roughness_to_lod(roughness);
        
    let lod_0 = u32(floor(lod));
    let f = fract(lod);
    
    let color_0 = texture_octahedral_sample_bilinear(
        tEnvironment,
        vec2(0u),
        textureDimensions(tEnvironment, lod_0).x,
        direction,
        lod_0
    ).rgb;  
     
    let lod_1 = lod_0 + 1u;
    
    let color_1 = texture_octahedral_sample_bilinear(
        tEnvironment,
        vec2(0u),
        textureDimensions(tEnvironment, lod_1).x,
        direction,
        lod_1
    ).rgb;
    
    
    return mix(color_0, color_1, f);
}
    `,
    [Jt, Pw, _p, bv]
  ),
  Tn = w.from(`
fn v3_matrix4_project(v3: vec3<f32>, m: mat4x4<f32>) -> vec3<f32>{
   
    let projected_v4 = m * vec4<f32>(v3, 1.0);
    
    // undo projection
    return projected_v4.xyz / projected_v4.w ;
    
}
`),
  wv = w.from(`
fn uv_to_clip(uv: vec2<f32>)->vec2<f32>{
    return vec2(uv.x, 1.0 - uv.y) * 2.0 - 1.0;
}   
    `),
  zc = w.from(
    `
fn world_position_from_depth(
    uv: vec2<f32>,
    ndc_depth: f32,
    view_projection_inverse: mat4x4<f32>
) -> vec3<f32>{

    let clip = uv_to_clip(uv);

    return v3_matrix4_project(
        vec3<f32>(clip, ndc_depth),
        view_projection_inverse
    );
}
`,
    [Tn, wv]
  ),
  Vd = w.from(`
fn octahedral_decode_normal( v_in: vec2<f32> ) -> vec3<f32>
{
    var v = -1.0 + 2.0 * v_in;

    var nor = vec3<f32>(v, 1.0 - abs(v.x) - abs(v.y));

    let t = max(-nor.z,0.0);

    if(nor.x > 0.0){
        nor.x -= t;
    }else{
        nor.x += t;
    }

    if(nor.y > 0.0){
        nor.y -= t;
    }else{
        nor.y += t;
    }

    return normalize( nor );
}
`),
  Pi = w.from(
    `
fn decode_g_buffer_normal(encoded_normal: vec2<u32>) -> vec3<f32>{
    const normalization_constant = 1.0 / 65535.0;
    
    let scaled = vec2f(encoded_normal) * normalization_constant;

    return octahedral_decode_normal(scaled.xy);
}
`,
    [Vd]
  ),
  ti = w.from("const F32_MAX = 3.402823466e+38;"),
  ve = Struct.from(
    { origin: "vec3<f32>", direction: "vec3<f32>", tmin: "f32", tmax: "f32" },
    "Ray"
  ),
  Ow = w.from(
    `
fn camera_ray_from_uv(uv:vec2<f32>, camera:${ce.wgsl_ref} ) -> ${ve.wgsl_ref}{
    var ray: ${ve.wgsl_ref};
    
    ray.tmax = F32_MAX;
    
    ray.origin = camera.transform[3].xyz;
    ray.direction = vec3(
        uv.x * 2.0 - 1.0,
        1.0 - uv.y * 2.0,
        0.0
    );
    
    let direction_4 = camera.view_projection_matrix_inverse * vec4(ray.direction, 1.0);
    
    ray.direction = direction_4.xyz / direction_4.w;
    ray.direction = normalize(ray.direction - ray.origin);
    
    return ray;
}
`,
    [ve.declaration_chunk, ce.declaration_chunk, ti]
  ),
  ms = Struct.from(
    { direction: "vec3<f32>", color: "vec3<f32>", disk_radius: "f32" },
    "DirectionalLight"
  ),
  hp = w.from(
    `
fn light_read_record_directional(address:u32) -> ${ms.wgsl_ref}{
    var result:${ms.wgsl_ref};
    
    result.color.x = light_data[address];
    result.color.y = light_data[address+1];
    result.color.z = light_data[address+2];
    
    result.direction.x = light_data[address+3];
    result.direction.y = light_data[address+4];
    result.direction.z = light_data[address+5];
    
    // TODO read from data
    
    // see https://www.universetoday.com/164310/the-solar-radius-might-be-slightly-smaller-than-we-thought/
    result.disk_radius = 0.006475;
    
    return result;
}

`,
    [ms.declaration_chunk]
  ),
  _a = Struct.from(
    { position: "vec4<f32>", color: "vec3<f32>", distance: "f32" },
    "PointLight"
  ),
  Fw = w.from(
    `
fn light_read_record_point(address:u32) -> ${_a.wgsl_ref}{
    // TODO implement
    return ${_a.wgsl_ref}();
}
    `,
    [_a.declaration_chunk]
  ),
  Ui = Struct.from(
    { direction: "vec3<f32>", color: "vec3<f32>" },
    "IncidentLight"
  ),
  xn = Struct.from(
    {
      direct_diffuse: "vec3<f32>",
      direct_specular: "vec3<f32>",
      indirect_diffuse: "vec3<f32>",
      indirect_specular: "vec3<f32>",
    },
    "ReflectedLight"
  ),
  Tv = w.from(`
fn F_Schlick( f0:vec3<f32>, f90:f32, dotVH:f32 ) -> vec3<f32> {
	let fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	
	// TODO consider using lerp instead here
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
    `),
  Ev = w.from(
    `
fn BRDF_Burley_Diffuse(
    NoV:f32 ,
    NoL:f32 ,
    LoH:f32 ,
    roughness_linear:f32
) -> f32{
    let energy_bias = mix (0 , 0.5 , roughness_linear );
    let energy_factor = mix (1.0 , 1.0 / 1.51 , roughness_linear );
    
    let fd90 = energy_bias + 2.0 * LoH * LoH * roughness_linear;
    let f0 = vec3 (1.0  , 1.0  , 1.0 );
    
    let lightScatter = F_Schlick ( f0 , fd90 , NoL ).r;
    let viewScatter = F_Schlick ( f0 , fd90 , NoV ).r;
    
    return lightScatter * viewScatter * energy_factor;

}
  `,
    [Tv]
  ),
  Cc = w.from(`
fn pow2(v:f32)->f32{
    return v*v;
}
`),
  $d = w.from("const RECIPROCAL_PI : f32 = 0.3183098861837907;"),
  Dw = w.from(
    `
fn D_GGX( alpha:f32,  dotNH:f32 ) ->f32{

	let a2 =  alpha * alpha;

	let f = ( a2 * dotNH - dotNH ) * dotNH + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / (f*f);

}
`,
    [$d]
  ),
  Av = w.from("const EPSILON  :f32 = 1e-6;"),
  Gw = w.from(
    `
fn V_GGX_SmithCorrelated(  alpha:f32, dotNL:f32, dotNV:f32 ) -> f32{
	let a2 = pow2( alpha );

    // Caution : the " NdotL *" and " NdotV *" are explicitely inversed , this is not a mistake .
	let gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	let gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );
}
`,
    [Cc, Av]
  ),
  Vw = w.from(
    `
fn BRDF_GGX(

  dotNL:f32,
  dotNV:f32,
  dotNH:f32,
  dotVH:f32,
  
  f0:vec3<f32>,
  f90:f32,
  
  roughness :f32
  
) -> vec3<f32>{
	let alpha = pow2( roughness ); // UE4's roughness

	let F = F_Schlick( f0, f90, dotVH );

	let V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	let D = D_GGX( alpha, dotNH );

	return F * ( V * D );
}
    `,
    [Cc, Tv, Dw, Gw]
  ),
  mr = Struct.from(
    {
      shading_normal: "vec3<f32>",
      geometric_normal: "vec3<f32>",
      position: "vec3<f32>",
      view_direction: "vec3<f32>",
    },
    "GeometricShadingInfo"
  ),
  ei = Struct.from(
    {
      diffuse: "vec3<f32>",
      roughness: "f32",
      specular: "vec3<f32>",
      specularF90: "f32",
      emissive: "vec3<f32>",
      opacity: "f32",
    },
    "MaterialShadingInfo"
  ),
  $w = w.from(
    `
fn re_direct_physical( 
    directLight:${Ui.wgsl_ref},
    geometry:${mr.wgsl_ref},
    material:${ei.wgsl_ref},
    reflectedLight:ptr<function, ${xn.wgsl_ref}>
) {
    let normal = geometry.shading_normal;
    let lightDir = directLight.direction;
    let viewDir = geometry.view_direction;

	let halfDir = normalize( lightDir + viewDir );

	let dotNL = saturate( dot( normal, lightDir ) );
	let dotNV = saturate( dot( normal, viewDir ) );
	let dotNH = saturate( dot( normal, halfDir ) );
	let dotVH = saturate( dot( viewDir, halfDir ) );
		
	let irradiance =  dotNL  * directLight.color;
	
	let ggx = BRDF_GGX( 
	    dotNL,
	    dotNV,
	    dotNH,
	    dotVH,
	    material.specular,
	    material.specularF90,
	    material.roughness 
	);

    (*reflectedLight).direct_specular += irradiance * ggx;

    let burley = BRDF_Burley_Diffuse( 
        dotNV,
        dotNL,
        saturate( dot( lightDir, halfDir ) ),
        material.roughness,
    );

	(*reflectedLight).direct_diffuse += irradiance * material.diffuse * burley * RECIPROCAL_PI;
	
}
    `,
    [
      Ui.declaration_chunk,
      mr.declaration_chunk,
      ei.declaration_chunk,
      xn.declaration_chunk,
      $d,
      Vw,
      Ev,
    ]
  ),
  qw = w.from(
    `
fn BRDF_Lambert(  diffuseColor: vec3<f32> ) -> vec3<f32> {
	return RECIPROCAL_PI * diffuseColor;
}
`,
    [$d]
  ),
  Hw = w.from(
    `
fn re_indirect_diffuse_physical( 
    irradiance:vec3<f32>,
    geometry:${mr.wgsl_ref},
    material:${ei.wgsl_ref},
    reflectedLight: ptr<function,${xn.wgsl_ref}> 
 ) {
 
	(*reflectedLight).indirect_diffuse += irradiance * BRDF_Lambert( material.diffuse );
	
}
    `,
    [mr.declaration_chunk, ei.declaration_chunk, xn.declaration_chunk, qw]
  ),
  Yw = w.from(`
fn DFGApprox( normal:vec3<f32>,  viewDir:vec3<f32>, roughness:f32 ) -> vec2<f32> {
	let dotNV = saturate( dot( normal, viewDir ) );

	const c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	let r = roughness * c0 + c1;

	let a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	let fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;
}
    `),
  jw = w.from(
    `
fn compute_multiscattering( 
    normal:vec3<f32>,
    viewDir:vec3<f32>,
    specularColor:vec3<f32>,
    specularF90:f32,
    roughness:f32,
    singleScatter:ptr<function,vec3<f32>>,
    multiScatter:ptr<function,vec3<f32>> 
) {

	let fab = DFGApprox( normal, viewDir, roughness );

    let Fr = specularColor;

	let FssEss = Fr * fab.x + specularF90 * fab.y;

	let Ess = fab.x + fab.y;
	let Ems = 1.0 - Ess;

	let Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	let Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	*singleScatter += FssEss;
	*multiScatter += Fms * Ems;
}
    `,
    [Yw]
  ),
  Xw = w.from(
    `
fn re_indirect_specular_physical(
    radiance:vec3<f32>,
    irradiance:vec3<f32>,
    clearcoatRadiance:vec3<f32>,
    geometry:${mr.wgsl_ref},
    material:${ei.wgsl_ref},
    reflectedLight:ptr<function, ${xn.wgsl_ref} >
) {

	// Both indirect specular and indirect diffuse light accumulate here
	var singleScattering = vec3<f32>( 0.0 );
	var multiScattering = vec3<f32>( 0.0 );
	
	let cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	compute_multiscattering(
            geometry.shading_normal,
            geometry.view_direction,
            material.specular,
            material.specularF90,
            material.roughness,
            &singleScattering,
            &multiScattering 
    );

	let totalScattering = singleScattering + multiScattering;
	
	let totalScattering_max = max( max( totalScattering.r, totalScattering.g ), totalScattering.b );
	
	let diffuse = material.diffuse * ( 1.0 - totalScattering_max );

	(*reflectedLight).indirect_specular += radiance * singleScattering;
	(*reflectedLight).indirect_specular += multiScattering * cosineWeightedIrradiance;
	
	(*reflectedLight).indirect_diffuse += diffuse * cosineWeightedIrradiance;
}
`,
    [mr.declaration_chunk, ei.declaration_chunk, xn.declaration_chunk, jw, $d]
  ),
  qd = w.from(`
fn matrix4_extract_position(m: mat4x4<f32>) -> vec3<f32>{
    return m[3].xyz;
}
    `),
  $i = class $i {
    constructor() {
      x(this, "type", "uniform");
      x(this, "hasDynamicOffset", !1);
      x(this, "minBindingSize", 0);
    }
    fromJSON({
      type: e = "uniform",
      hasDynamicOffset: t = !1,
      minBindingSize: r = 0,
    }) {
      (this.type = e), (this.hasDynamicOffset = t), (this.minBindingSize = r);
    }
    hash() {
      return Re(this.type);
    }
    equals(e) {
      return (
        this.type === e.type &&
        this.hasDynamicOffset === e.hasDynamicOffset &&
        this.minBindingSize === e.minBindingSize
      );
    }
    static fromJSON(e) {
      const t = new $i();
      return t.fromJSON(e), t;
    }
  };
x(
  $i,
  "readOnlyStorage",
  Object.freeze($i.fromJSON({ type: "read-only-storage" }))
),
  x($i, "storage", Object.freeze($i.fromJSON({ type: "storage" }))),
  x($i, "uniform", Object.freeze($i.fromJSON({ type: "uniform" })));
let Ee = $i;
Ee.prototype.isBufferBindingLayout = !0;
class Hd {
  static fromJSON(e) {
    const t = new Hd();
    return t.fromJSON(e), t;
  }
  fromJSON(e) {}
  hash() {
    return 0;
  }
  equals() {
    return !0;
  }
}
Hd.prototype.isExternalTextureBindingLayout = !0;
const qi = class qi {
  constructor() {
    x(this, "type", "filtering");
  }
  static fromJSON(e) {
    const t = new qi();
    return t.fromJSON(e), t;
  }
  fromJSON({ type: e = "filtering" }) {
    this.type = e;
  }
  hash() {
    return Re(this.type);
  }
  equals(e) {
    return this.type === e.type;
  }
};
x(qi, "filtering", Object.freeze(qi.fromJSON({ type: "filtering" }))),
  x(qi, "nonFiltering", Object.freeze(qi.fromJSON({ type: "non-filtering" }))),
  x(qi, "comparison", Object.freeze(qi.fromJSON({ type: "comparison" })));
let sl = qi;
sl.prototype.isSamplerBindingLayout = !0;
class Uc {
  constructor() {
    x(this, "access", "write-only");
    x(this, "format", "rgba8uint");
    x(this, "viewDimension", "2d");
  }
  static fromJSON(e) {
    const t = new Uc();
    return t.fromJSON(e), t;
  }
  fromJSON({
    access: e = "write-only",
    format: t = "rgba8uint",
    viewDimension: r = "2d",
  }) {
    (this.access = e), (this.format = t), (this.viewDimension = r);
  }
  hash() {
    return ot(Re(this.access), Re(this.format), Re(this.viewDimension));
  }
  equals(e) {
    return (
      this.access === e.access &&
      this.format === e.format &&
      this.viewDimension === e.viewDimension
    );
  }
}
Uc.prototype.isStorageTextureBindingLayout = !0;
const Kt = class Kt {
  constructor() {
    x(this, "sampleType", "float");
    x(this, "viewDimension", "2d");
    x(this, "multisampled", !1);
  }
  static fromJSON(e) {
    const t = new Kt();
    return t.fromJSON(e), t;
  }
  fromJSON({
    sampleType: e = "float",
    viewDimension: t = "2d",
    multisampled: r = !1,
  }) {
    (this.sampleType = e), (this.viewDimension = t), (this.multisampled = r);
  }
  hash() {
    return ot(
      Re(this.sampleType),
      Re(this.viewDimension),
      this.multisampled ? 1 : 0
    );
  }
  equals(e) {
    return (
      this.sampleType === e.sampleType &&
      this.viewDimension === e.viewDimension &&
      this.multisampled === e.multisampled
    );
  }
};
x(
  Kt,
  "float",
  Object.freeze(
    Kt.fromJSON({ sampleType: "float", multisampled: !1, viewDimension: "2d" })
  )
),
  x(
    Kt,
    "unfilterableFloat",
    Object.freeze(
      Kt.fromJSON({
        sampleType: "unfilterable-float",
        multisampled: !1,
        viewDimension: "2d",
      })
    )
  ),
  x(
    Kt,
    "depth",
    Object.freeze(
      Kt.fromJSON({
        sampleType: "depth",
        multisampled: !1,
        viewDimension: "2d",
      })
    )
  ),
  x(
    Kt,
    "sint",
    Object.freeze(
      Kt.fromJSON({ sampleType: "sint", multisampled: !1, viewDimension: "2d" })
    )
  ),
  x(
    Kt,
    "uint",
    Object.freeze(
      Kt.fromJSON({ sampleType: "uint", multisampled: !1, viewDimension: "2d" })
    )
  );
let kr = Kt;
kr.prototype.isTextureBindingLayout = !0;
class So {
  constructor() {
    x(this, "binding", 0);
    x(this, "visibility", 0);
    x(this, "buffer");
    x(this, "sampler");
    x(this, "texture");
    x(this, "storageTexture");
    x(this, "externalTexture");
  }
  static compareByBinding(e, t) {
    return e.binding - t.binding;
  }
  static fromJSON(e) {
    const t = new So();
    return t.fromJSON(e), t;
  }
  setBinding(e) {
    if (e.isBufferBindingLayout === !0) this.buffer = e;
    else if (e.isTextureBindingLayout === !0) this.texture = e;
    else if (e.isSamplerBindingLayout === !0) this.sampler = e;
    else if (e.isExternalTextureBindingLayout === !0) this.externalTexture = e;
    else if (e.isStorageTextureBindingLayout === !0) this.storageTexture = e;
    else throw new Error("Unsupported binding type");
  }
  fromJSON({
    binding: e = 0,
    visibility: t = 0,
    buffer: r,
    sampler: i,
    texture: n,
    storageTexture: o,
    externalTexture: a,
  }) {
    (this.binding = e),
      (this.visibility = t),
      r !== false ? (this.buffer = Ee.fromJSON(r)) : (this.buffer = false),
      i !== false ? (this.sampler = sl.fromJSON(i)) : (this.sampler = false),
      n !== false ? (this.texture = kr.fromJSON(n)) : (this.texture = false),
      o !== false
        ? (this.storageTexture = Uc.fromJSON(o))
        : (this.storageTexture = false),
      a !== false
        ? (this.externalTexture = Hd.fromJSON(a))
        : (this.externalTexture = false);
  }
  hash() {
    return ot(
      this.binding,
      this.visibility,
      lr(this.buffer),
      lr(this.sampler),
      lr(this.texture),
      lr(this.storageTexture),
      lr(this.externalTexture)
    );
  }
  equals(e) {
    return (
      this.binding === e.binding &&
      this.visibility === e.visibility &&
      St(this.buffer, e.buffer) &&
      St(this.sampler, e.sampler) &&
      St(this.texture, e.texture) &&
      St(this.storageTexture, e.storageTexture) &&
      St(this.externalTexture, e.externalTexture)
    );
  }
}
class Zr extends wn {
  constructor() {
    super(...arguments);
    x(this, "entries", []);
  }
  static fromJSON(t) {
    const r = new Zr();
    return r.fromJSON(t), r;
  }
  static forCompute(t, r) {
    return Zr.forStage(GPUShaderStage.COMPUTE, t, r);
  }
  static forFragment(t, r) {
    return Zr.forStage(GPUShaderStage.FRAGMENT, t, r);
  }
  static forStage(t, r, i) {
    const n = new Zr();
    n.label = r;
    for (let o = 0; o < i.length; o++) {
      const a = i[o],
        c = So.fromJSON({ binding: o, visibility: t });
      c.setBinding(a), n.entries.push(c);
    }
    return n;
  }
  fromJSON(t) {
    super.fromJSON(t);
    const r = t.entries;
    (this.entries = r.map(So.fromJSON)), this.normalize();
  }
  normalize() {
    this.entries.sort(So.compareByBinding);
  }
  hash() {
    return ot(super.hash(), Ld(this.entries, Kr));
  }
  equals(t) {
    return super.equals(t) && yn(this.entries, t.entries);
  }
  get isBindGroupLayoutDescriptor() {
    return !0;
  }
}
class dr extends wn {
  constructor() {
    super(...arguments);
    x(this, "bindGroupLayouts", []);
  }
  static forStage(t, r) {
    const i = r.length,
      n = new Array(i);
    for (let o = 0; o < i; o++) {
      const a = r[o];
      n[o] = Zr.forStage(t, String(o), a);
    }
    return dr.from(n);
  }
  static from(t) {
    const r = new dr(),
      i = t.length;
    for (let n = 0; n < i; n++) {
      const o = t[n];
      r.bindGroupLayouts.push(o);
    }
    return r;
  }
  static fromJSON(t) {
    const r = new dr();
    return r.fromJSON(t), r;
  }
  fromJSON(t) {
    super.fromJSON(t);
    const r = t.bindGroupLayouts ?? [];
    this.bindGroupLayouts = r.map(Zr.fromJSON);
  }
  hash() {
    return ot(super.hash(), Ld(this.bindGroupLayouts, Kr));
  }
  equals(t) {
    return this === t
      ? !0
      : super.equals(t) && yn(this.bindGroupLayouts, t.bindGroupLayouts);
  }
}
dr.prototype.isPipelineLayoutDescriptor = !0;
class Sv extends wn {
  constructor() {
    super(...arguments);
    x(this, "layout");
  }
  fromJSON(t) {
    if ((super.fromJSON(t), t.layout === "auto"))
      throw new Error(
        "Automatic layout is not allowed, layout must be explicit"
      );
    this.layout = dr.fromJSON(t.layout);
  }
  hash() {
    return ot(super.hash(), this.layout.hash());
  }
  equals(t) {
    return super.equals(t) && this.layout.equals(t.layout);
  }
}
class og {
  constructor() {
    x(this, "compare", "always");
    x(this, "depthFailOp", "keep");
    x(this, "failOp", "keep");
    x(this, "passOp", "keep");
  }
  equals(e) {
    return (
      this.compare === e.compare &&
      this.depthFailOp === e.depthFailOp &&
      this.failOp === e.failOp &&
      this.passOp === e.passOp
    );
  }
  fromJSON(e = {}) {
    e.compare !== false
      ? (this.compare = e.compare)
      : (this.compare = "always"),
      e.depthFailOp !== false
        ? (this.depthFailOp = e.depthFailOp)
        : (this.depthFailOp = "keep"),
      e.failOp !== false ? (this.failOp = e.failOp) : (this.failOp = "keep"),
      e.passOp !== false ? (this.passOp = e.passOp) : (this.passOp = "keep");
  }
}
const ag = !1,
  cg = "always",
  lg = 4294967295,
  _g = 4294967295;
class Yd {
  constructor() {
    x(this, "format");
    x(this, "depthWriteEnabled", ag);
    x(this, "depthCompare", cg);
    x(this, "stencilFront", new og());
    x(this, "stencilBack", new og());
    x(this, "stencilReadMask", lg);
    x(this, "stencilWriteMask", _g);
    x(this, "depthBias", 0);
    x(this, "depthBiasSlopeScale", 0);
    x(this, "depthBiasClamp", 0);
  }
  static from(e) {
    const t = new Yd();
    return t.fromJSON(e), t;
  }
  fromJSON(e) {
    (this.format = e.format),
      e.depthWriteEnabled !== false
        ? (this.depthWriteEnabled = e.depthWriteEnabled)
        : (this.depthWriteEnabled = ag),
      e.depthCompare !== false
        ? (this.depthCompare = e.depthCompare)
        : (this.depthCompare = cg),
      this.stencilFront.fromJSON(e.stencilFront),
      this.stencilBack.fromJSON(e.stencilBack),
      e.stencilReadMask !== false
        ? (this.stencilReadMask = e.stencilReadMask)
        : (this.stencilReadMask = lg),
      e.stencilWriteMask !== false
        ? (this.stencilWriteMask = e.stencilWriteMask)
        : (this.stencilWriteMask = _g),
      e.depthBias !== false
        ? (this.depthBias = e.depthBias)
        : (this.depthBias = 0),
      e.depthBiasSlopeScale !== false
        ? (this.depthBiasSlopeScale = e.depthBiasSlopeScale)
        : (this.depthBiasSlopeScale = 0),
      e.depthBiasClamp !== false
        ? (this.depthBiasClamp = e.depthBiasClamp)
        : (this.depthBiasClamp = 0);
  }
  equals(e) {
    return (
      this.format === e.format &&
      this.depthWriteEnabled === e.depthWriteEnabled &&
      this.depthCompare === e.depthCompare &&
      this.stencilFront.equals(e.stencilFront) &&
      this.stencilBack.equals(e.stencilBack) &&
      this.stencilReadMask === e.stencilReadMask &&
      this.stencilWriteMask === e.stencilWriteMask &&
      this.depthBias === e.depthBias &&
      this.depthBiasSlopeScale === e.depthBiasSlopeScale &&
      this.depthBiasClamp === e.depthBiasClamp
    );
  }
}
const Ih = -1;
var Ps, Bs;
const od = class od extends wn {
  constructor() {
    super(...arguments);
    b(this, Ps);
    x(this, "sourceMap");
    x(this, "hints", []);
    b(this, Bs, Ih);
  }
  get code() {
    return getProperty(this, Ps);
  }
  getSourceWithLineNumbers() {
    return getProperty(this, Ps)
      .split(
        `
`
      )
      .map((t, r) => `${r}:${t}`).join(`
`);
  }
  update_hash() {
    S(this, Bs, Re(getProperty(this, Ps))),
      getProperty(this, Bs) === Ih && S(this, Bs, 0);
  }
  fromJSON(t) {
    super.fromJSON(t);
    const r = t.hints ?? [],
      i = t.code;
    S(this, Ps, i), (this.sourceMap = t.sourceMap), (this.hints = r);
  }
  static fromCode(t) {
    const r = new od();
    return S(r, Ps, t), r;
  }
  static from(t) {
    const r = new od();
    return r.fromJSON(t), r;
  }
  hash() {
    return (
      getProperty(this, Bs) === Ih && this.update_hash(), getProperty(this, Bs)
    );
  }
  equals(t) {
    return (
      this.code === t.code &&
      op(this.sourceMap, t.sourceMap) &&
      yn(this.hints, t.hints)
    );
  }
};
(Ps = new WeakMap()), (Bs = new WeakMap());
let nl = od;
class fp {
  constructor() {
    x(this, "module");
    x(this, "entryPoint");
    x(this, "constants", {});
  }
  fromJSON(e) {
    (this.module = nl.from(e.module)),
      e.entryPoint === false
        ? (this.entryPoint = false)
        : (this.entryPoint = e.entryPoint),
      e.constants !== false
        ? (this.constants = e.constants)
        : (this.constants = {});
  }
  hash() {
    return ot(this.module.hash(), Re(this.entryPoint));
  }
  equals(e) {
    if (this.entryPoint !== e.entryPoint) return !1;
    const t = Object.keys(this.constants).sort(),
      r = Object.keys(e.constants).sort();
    if (!hr(t, r)) return !1;
    const i = t.length;
    for (let n = 0; n < i; n++) {
      const o = t[n];
      if (this.constants[o] !== e.constants[o]) return !1;
    }
    return !!this.module.equals(e.module);
  }
}
class ug {
  constructor() {
    x(this, "operation", "add");
    x(this, "srcFactor", "one");
    x(this, "dstFactor", "zero");
  }
  default() {
    (this.operation = "add"),
      (this.srcFactor = "one"),
      (this.dstFactor = "zero");
  }
  fromJSON({
    operation: e = "add",
    srcFactor: t = "one",
    dstFactor: r = "zero",
  } = {}) {
    (this.operation = e), (this.srcFactor = t), (this.dstFactor = r);
  }
  hash() {
    return ot(Re(this.operation), Re(this.srcFactor), Re(this.dstFactor));
  }
  equals(e) {
    return (
      this.operation === e.operation &&
      this.srcFactor === e.srcFactor &&
      this.dstFactor === e.dstFactor
    );
  }
}
class Ic {
  constructor() {
    x(this, "color", new ug());
    x(this, "alpha", new ug());
  }
  static from(e) {
    const t = new Ic();
    return t.fromJSON(e), t;
  }
  fromJSON(e = {}) {
    e.color !== false ? this.color.fromJSON(e.color) : this.color.default(),
      e.alpha !== false ? this.alpha.fromJSON(e.alpha) : this.alpha.default();
  }
  equals(e) {
    return this.color.equals(e.color) && this.alpha.equals(e.alpha);
  }
  hash() {
    return this.color.hash() ^ this.alpha.hash();
  }
}
class jd {
  constructor() {
    x(this, "format");
    x(this, "blend");
    x(this, "writeMask", 15);
  }
  static from(e) {
    const t = new jd();
    return t.fromJSON(e), t;
  }
  fromJSON(e) {
    (this.format = e.format),
      e.blend === false
        ? (this.blend = false)
        : (this.blend = Ic.from(e.blend)),
      e.writeMask !== false
        ? (this.writeMask = e.writeMask)
        : (this.writeMask = 15);
  }
  hash() {
    return ot(Re(this.format), this.writeMask, lr(this.blend));
  }
  equals(e) {
    return (
      this.format === e.format &&
      this.writeMask === e.writeMask &&
      St(this.blend, e.blend)
    );
  }
}
class pp extends fp {
  constructor() {
    super(...arguments);
    x(this, "targets", []);
  }
  static fromJSON(t) {
    const r = new pp();
    return r.fromJSON(t), r;
  }
  fromJSON(t) {
    super.fromJSON(t),
      t.targets === false
        ? (this.targets = [])
        : (this.targets = t.targets.map(jd.from));
  }
  equals(t) {
    return yn(this.targets, t.targets) ? super.equals(t) : !1;
  }
  hash() {
    return ot(super.hash(), Ld(this.targets, Kr));
  }
}
class Ww {
  constructor() {
    x(this, "count", 1);
    x(this, "mask", 4294967295);
    x(this, "alphaToCoverageEnabled", !1);
  }
  fromJSON({
    count: e = 1,
    mask: t = 4294967295,
    alphaToCoverageEnabled: r = !1,
  } = {}) {
    (this.count = e), (this.alphaToCoverageEnabled = r), (this.mask = t);
  }
  equals(e) {
    return (
      this.count === e.count &&
      this.mask === e.mask &&
      this.alphaToCoverageEnabled === e.alphaToCoverageEnabled
    );
  }
}
const dg = "triangle-list",
  hg = "ccw",
  fg = "none",
  pg = !1;
class Nu {
  constructor() {
    x(this, "topology", dg);
    x(this, "stripIndexFormat");
    x(this, "frontFace", hg);
    x(this, "cullMode", fg);
    x(this, "unclippedDepth", pg);
  }
  fromJSON(e) {
    e.topology !== false ? (this.topology = e.topology) : (this.topology = dg),
      (this.stripIndexFormat = e.stripIndexFormat),
      e.frontFace !== false
        ? (this.frontFace = e.frontFace)
        : (this.frontFace = hg),
      e.cullMode !== false
        ? (this.cullMode = e.cullMode)
        : (this.cullMode = fg),
      e.unclippedDepth !== false
        ? (this.unclippedDepth = e.unclippedDepth)
        : (this.unclippedDepth = pg);
  }
  static from(e) {
    const t = new Nu();
    return t.fromJSON(e), t;
  }
  equals(e) {
    return (
      this.topology === e.topology &&
      this.stripIndexFormat === e.stripIndexFormat &&
      this.frontFace === e.frontFace &&
      this.cullMode === e.cullMode &&
      this.unclippedDepth === e.unclippedDepth
    );
  }
  hash() {
    return ot(Re(this.topology), Re(this.frontFace), Re(this.cullMode));
  }
}
function zv(s, e) {
  const t = s.shaderLocation - e.shaderLocation;
  if (t !== 0) return t;
  const r = s.offset - e.offset;
  if (r !== 0) return r;
  const i = s.format.localeCompare(e.format);
  return i !== 0 ? i : 0;
}
function Jw(s, e) {
  const t = s.arrayStride - e.arrayStride;
  if (t !== 0) return t;
  if (s.stepMode !== e.stepMode) return s.stepMode.localeCompare(e.stepMode);
  const r = s.attributes.length,
    i = r - e.attributes.length;
  if (i !== 0) return i;
  for (let n = 0; n < r; n++) {
    const o = zv(s.attributes[n], e.attributes[n]);
    if (o !== 0) return o;
  }
  return 0;
}
class mp {
  constructor() {
    x(this, "format");
    x(this, "offset", 0);
    x(this, "shaderLocation", 0);
  }
  static from(e) {
    const t = new mp();
    return (
      (t.format = e.format),
      (t.offset = e.offset),
      (t.shaderLocation = e.shaderLocation),
      t
    );
  }
  equals(e) {
    return (
      this.offset === e.offset &&
      this.shaderLocation === e.shaderLocation &&
      this.format === e.format
    );
  }
  hash() {
    return ot(Re(this.format), this.offset, this.shaderLocation);
  }
}
class gp {
  constructor() {
    x(this, "arrayStride", 0);
    x(this, "stepMode", "vertex");
    x(this, "attributes", []);
  }
  static from(e) {
    const t = new gp();
    return (
      (t.arrayStride = e.arrayStride),
      e.stepMode !== false
        ? (t.stepMode = e.stepMode)
        : (t.stepMode = "vertex"),
      (t.attributes = e.attributes.map(mp.from)),
      t.normalize(),
      t
    );
  }
  normalize() {
    this.attributes.sort(zv);
  }
  validate(e = iv) {
    let t = !0;
    const r = this.attributes,
      i = r.length;
    for (let n = 0; n < i - 1; n++) {
      const o = r[n];
      for (let a = n + 1; a < i; a++) {
        const c = r[a];
        o.shaderLocation === c.shaderLocation &&
          (e(
            `Attribute ${n} and ${a} share shaderLocation ${c.shaderLocation}, it must be unique`
          ),
          (t = !1));
      }
    }
    return t;
  }
  equals(e) {
    return !(
      this.arrayStride !== e.arrayStride ||
      this.stepMode !== e.stepMode ||
      !yn(this.attributes, e.attributes)
    );
  }
}
class vp extends fp {
  constructor() {
    super(...arguments);
    x(this, "buffers", []);
  }
  static from(t) {
    const r = new vp();
    return r.fromJSON(t), r;
  }
  fromJSON(t) {
    super.fromJSON(t),
      t.buffers !== false
        ? (this.buffers = t.buffers.map(gp.from))
        : (this.buffers = []),
      this.normalize();
  }
  normalize() {
    this.buffers.sort(Jw);
  }
  equals(t) {
    return hr(this.buffers, t.buffers) ? super.equals(t) : !1;
  }
}
class Nc extends Sv {
  constructor() {
    super(...arguments);
    x(this, "vertex", new vp());
    x(this, "primitive", new Nu());
    x(this, "depthStencil");
    x(this, "multisample", new Ww());
    x(this, "fragment");
  }
  static from(t) {
    const r = new Nc();
    return r.fromJSON(t), r;
  }
  fromJSON(t) {
    super.fromJSON(t),
      this.vertex.fromJSON(t.vertex),
      t.fragment === false
        ? (this.fragment = false)
        : (this.fragment = pp.fromJSON(t.fragment)),
      t.primitive === false
        ? (this.primitive = new Nu())
        : this.primitive.fromJSON(t.primitive),
      this.multisample.fromJSON(t.multisample),
      t.depthStencil === false
        ? (this.depthStencil = false)
        : (this.depthStencil = Yd.from(t.depthStencil));
  }
  equals(t) {
    return this === t
      ? !0
      : !this.vertex.equals(t.vertex) ||
        !this.primitive.equals(t.primitive) ||
        !St(this.depthStencil, t.depthStencil) ||
        !this.multisample.equals(t.multisample) ||
        !St(this.fragment, t.fragment)
      ? !1
      : super.equals(t);
  }
  hash() {
    return ot(
      super.hash(),
      this.vertex.hash(),
      this.primitive.hash(),
      lr(this.fragment)
    );
  }
}
const Cv = `
const pos = array< vec2<f32>, 3 >(
    vec2<f32>(-1.0, -1.0),
    vec2<f32>(3.0, -1.0),
    vec2<f32>(-1.0, 3.0)
);

struct VertexOutput{
    @builtin(position) pos : vec4<f32>,
    @location(0) uv: vec2<f32>,
}

@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> VertexOutput {
    var out:VertexOutput;

    let ndc = pos[VertexIndex];

    out.pos = vec4<f32>(ndc, 0.0, 1.0);
    out.uv = ndc*0.5 + 0.5;

    // flip Y
    out.uv.y = 1.0 - out.uv.y;

    return out;
}
`;
function Mc({ label: s, layout: e, fragment_code: t, targets: r = [] }) {
  return Nc.from({
    label: s,
    layout: e,
    vertex: { module: { code: Cv }, entryPoint: "main" },
    fragment: {
      module: { code: t },
      targets: r,
      depthStencil: {
        depthCompare: "never",
        depthWriteEnabled: !1,
        stencilReadMask: 0,
        stencilWriteMask: 0,
      },
    },
    primitive: { topology: "triangle-list", cullMode: "back" },
  });
}
var Ta, Ea;
class Je {
  constructor({ descriptor: e, targets: t }) {
    b(this, Ta);
    b(this, Ea);
    S(this, Ta, e),
      S(
        this,
        Ea,
        Mc({
          label: e.label,
          fragment_code: e.compile(),
          layout: e.resources.generatePipelineLayout(GPUShaderStage.FRAGMENT),
          targets: t,
        })
      );
  }
  get descriptor() {
    return getProperty(this, Ta);
  }
  get pipeline() {
    return getProperty(this, Ea);
  }
  get isImageShader() {
    return !0;
  }
  draw({ encoder: e, timer: t, bindings: r = {}, colorAttachments: i = [] }) {
    const n = e.constructRenderPass({
      pipeline: getProperty(this, Ea),
      timer: t,
      bindings: getProperty(this, Ta).resources.generateBindings(r),
      colorAttachments: i,
    });
    n.draw(3), n.end(), t !== false && t.update(e);
  }
}
(Ta = new WeakMap()), (Ea = new WeakMap());
const Et = {
    Buffer: 0,
    Sampler: 1,
    Texture: 2,
    StorageTexture: 3,
    ExternalTexture: 4,
  },
  mg = /^[a-zA-Z_][a-zA-Z0-9_]*$/i;
class ou {
  constructor() {
    x(this, "name", "");
    x(this, "binding_index", -1);
    x(this, "type");
    x(this, "visibility", 0);
    x(this, "member_descriptor");
    x(this, "buffer_type");
  }
  addVisibility(e) {
    this.visibility |= e;
  }
  generateBindingGroupLayoutEntry() {
    const e = new So();
    return (
      (e.visibility = this.visibility),
      (e.binding = this.binding_index),
      e.setBinding(this.member_descriptor),
      e
    );
  }
}
var Il, _i, Wr, sa, Ef;
class Zw {
  constructor(e) {
    b(this, Wr);
    b(this, Il, -1);
    x(this, "label", "");
    b(this, _i, []);
    S(this, Il, e);
  }
  get index() {
    return getProperty(this, Il);
  }
  get resources() {
    return getProperty(this, _i);
  }
  addVisibility(e) {
    const t = getProperty(this, _i),
      r = t.length;
    for (let i = 0; i < r; i++) t[i].addVisibility(e);
  }
  generateGPUBindGroupEntryArray(e) {
    const t = [],
      r = getProperty(this, _i);
    for (let i = 0; i < r.length; i++) {
      const n = r[i],
        o = e[n.name];
      t.push({ binding: n.binding_index, resource: o });
    }
    return t;
  }
  generateBindGroupLayoutDescriptor() {
    const e = new Zr();
    e.label = this.label;
    const t = getProperty(this, _i),
      r = t.length;
    for (let i = 0; i < r; i++) {
      const o = t[i].generateBindingGroupLayoutEntry();
      e.entries.push(o);
    }
    return e;
  }
  getEmptySlot() {
    for (let e = 0; e < 1024; e++)
      if (getProperty(this, _i)[e] === false) return e;
    throw new Error("All slots are used up");
  }
  set(e, t) {
    getProperty(this, _i)[e] = t;
  }
  get(e) {
    return getProperty(this, _i).find((t) => t.name === e);
  }
  addUniform(e, t) {
    if (t.runtime_sized)
      throw new Error(
        `Uniforms can not use runtime sized structures. Size must be defined ahead of time. name='${e}', type=${t}`
      );
    const r = P(this, Wr, Ef).call(this, e, t);
    return (
      (r.member_descriptor = Ee.uniform), P(this, Wr, sa).call(this, r), this
    );
  }
  addStorageBuffer(e, t, r = !1) {
    const i = P(this, Wr, Ef).call(this, e, t);
    return (
      (i.member_descriptor = r ? Ee.storage : Ee.readOnlyStorage),
      P(this, Wr, sa).call(this, i),
      this
    );
  }
  addTexture(e, t = "unfilterable-float", r = "2d", i = !1) {
    const n = new ou();
    return (
      (n.name = e),
      (n.type = Et.Texture),
      (n.member_descriptor = kr.fromJSON({
        sampleType: t,
        dimension: r,
        multisampled: i,
      })),
      P(this, Wr, sa).call(this, n),
      this
    );
  }
  addStorageTexture(e, t, r) {
    const i = new ou();
    return (
      (i.name = e),
      (i.type = Et.StorageTexture),
      (i.member_descriptor = Uc.fromJSON({ format: t, viewDimension: r })),
      P(this, Wr, sa).call(this, i),
      this
    );
  }
  addSampler(e, t = "filtering") {
    const r = new ou();
    return (
      (r.name = e),
      (r.type = Et.Sampler),
      (r.member_descriptor = sl.fromJSON({ type: t })),
      P(this, Wr, sa).call(this, r),
      this
    );
  }
}
(Il = new WeakMap()),
  (_i = new WeakMap()),
  (Wr = new WeakSet()),
  (sa = function (e) {
    if (this.get(e.name))
      throw new Error(
        `Resource named '${e.name}' already exists, named must be unique`
      );
    if (!mg.test(e.name))
      throw new Error(
        `Invalid resource name '${e.name}', valid structure: ${mg.source}`
      );
    e.binding_index === -1 && (e.binding_index = this.getEmptySlot()),
      this.set(e.binding_index, e);
  }),
  (Ef = function (e, t) {
    const r = new ou();
    return (
      (r.name = e),
      (r.type = Et.Buffer),
      typeof t == "string" ? (r.buffer_type = cp(t)) : (r.buffer_type = t),
      r
    );
  });
var Er, ad, Uv;
class ResourecGroup {
  constructor() {
    b(this, ad);
    b(this, Er, []);
  }
  get isShaderResourceSetDescriptor() {
    return !0;
  }
  getResourceByName(e) {
    for (const t of getProperty(this, Er)) {
      const r = t.get(e);
      if (r !== false) return r;
    }
  }
  createGroup({ index: e = P(this, ad, Uv).call(this), label: t = "" } = {}) {
    if (getProperty(this, Er)[e] !== false)
      throw new Error(`Group ${e} already exists`);
    const r = new Zw(e);
    return (r.label = t), (getProperty(this, Er)[e] = r), r;
  }
  addVisibility(e) {
    const t = getProperty(this, Er),
      r = t.length;
    for (let i = 0; i < r; i++) t[i].addVisibility(e);
  }
  generatePipelineLayoutDescriptor() {
    const e = new dr(),
      t = getProperty(this, Er),
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      e.bindGroupLayouts[i] = n.generateBindGroupLayoutDescriptor();
    }
    return e;
  }
  generateBindingsArray() {
    const e = [];
    for (const t of getProperty(this, Er))
      e[t.index] = t.resources.map((r) => r.member_descriptor);
    return e;
  }
  generatePipelineLayout(e) {
    return dr.forStage(e, this.generateBindingsArray());
  }
  generateBindings(e) {
    const t = getProperty(this, Er),
      r = t.length,
      i = [];
    for (let n = 0; n < r; n++) {
      const o = t[n],
        a = [],
        c = o.resources,
        _ = c.length;
      for (let u = 0; u < _; u++) {
        const d = c[u];
        let h = e[d.name];
        if (h === false)
          throw new Error(
            `Value for '${d.name}' group(${n}) binding(${u}) is missing in the input`
          );
        if (d.type === Et.Buffer) {
          if (h.isGPUTypedBuffer === !0) {
            if (!d.buffer_type.equals(h.type))
              throw new Error(
                `Expected '${d.name}' to be a buffer of type ${d.buffer_type}, instead got ${h.type}`
              );
            h = { buffer: h.buffer };
          } else if (h instanceof GPUBuffer) h = { buffer: h };
          else if (!(typeof h == "object" && h.buffer !== false))
            throw new Error(`Unexpected buffer value: ${h}`);
        }
        a[d.binding_index] = h;
      }
      i[n] = a;
    }
    return i;
  }
  generateCodeChunk() {
    const e = new gn(),
      t = [];
    for (const r of getProperty(this, Er)) {
      const i = r.resources,
        n = i.length;
      for (let o = 0; o < n; o++) {
        const a = i[o],
          c = a.member_descriptor,
          _ = a.type;
        let u = `@group(${r.index}) @binding(${a.binding_index}) var`,
          d;
        if (_ === Et.Buffer) {
          const h = a.buffer_type;
          h.requires_declaration && t.push(h.declaration_chunk);
          const p = c.type;
          if (p === "uniform") u += "<uniform>";
          else if (p === "storage") u += "<storage, read_write>";
          else if (p === "read-only-storage") u += "<storage, read>";
          else throw new Error(`Unsupported layout type '${p}'`);
          d = h.wgsl_ref;
        } else if (_ === Et.Texture) {
          if (c.viewDimension === "2d") d = "texture_2d";
          else
            throw new Error(`Unsupported viewDimension '${c.viewDimension}'`);
          if (
            ((d += "<"),
            c.sampleType === "float" || c.sampleType === "unfilterable-float")
          )
            d += "f32";
          else if (c.sampleType === "uint") d += "u32";
          else throw new Error(`Unsupported sampleType '${c.sampleType}'`);
          d += ">";
        } else if (_ === Et.StorageTexture) {
          if (c.viewDimension === "2d") d = "texture_storage_2d";
          else if (c.viewDimension === "3d") d = "texture_storage_3d";
          else
            throw new Error(`Unsupported viewDimension '${c.viewDimension}'`);
          d += `< ${c.format}, write >`;
        } else if (_ === Et.Sampler)
          if (c.type === "filtering") d = "sampler";
          else if (c.type === "comparison") d = "sampler_comparison";
          else throw new Error(`Unsupported sampler type '${c.type}'`);
        else throw new Error(`Unsupported type ${g0(Et, _)}(=${_})`);
        (u += " "), (u += a.name), (u += " : "), (u += d), (u += ";"), e.add(u);
      }
    }
    return w.from(e.build(), t);
  }
}
(Er = new WeakMap()),
  (ad = new WeakSet()),
  (Uv = function () {
    for (let e = 0; e < 1024; e++)
      if (getProperty(this, Er)[e] === false) return e;
    throw new Error("All slots are used up");
  });
var Nl, Aa, Ml;
const _m = class _m {
  constructor() {
    b(this, Nl, "");
    b(this, Aa);
    b(this, Ml);
  }
  get label() {
    return getProperty(this, Nl);
  }
  get resources() {
    return getProperty(this, Aa);
  }
  compile() {
    return w
      .from("", [
        getProperty(this, Ml),
        getProperty(this, Aa).generateCodeChunk(),
      ])
      .compile();
  }
  static from({ label: e, resources: t, body: r }) {
    const i = new _m();
    return S(i, Ml, r), S(i, Aa, t), e !== false && S(i, Nl, e), i;
  }
};
(Nl = new WeakMap()), (Aa = new WeakMap()), (Ml = new WeakMap());
let le = _m;
const Kw = w.from(
    `

fn getDirectionalLightInfo(  
    directionalLight:${ms.wgsl_ref} 
) -> ${Ui.wgsl_ref} {

    // see https://github.com/mrdoob/three.js/blob/61444937d1f0f4da72ca630749bc6b02fc22d4a1/src/renderers/shaders/ShaderChunk/lights_pars_begin.glsl.js#L102
    var result:${Ui.wgsl_ref};

    result.color = directionalLight.color;
    result.direction = -directionalLight.direction;

    return result;

}
    `,
    [ms.declaration_chunk, Ui.declaration_chunk]
  ),
  Qw = w.from(`
fn pow4(v:f32)->f32{
    let v2 = v*v;
    return v2*v2;
}
`),
  eT = w.from(
    `
fn light_getDistanceAttenuation( distance:f32, cutoff_distance:f32, decay_exponent:f32) -> f32{
   
    var distanceFalloff = 1.0 / max( pow( distance, decay_exponent ), 0.01 );

    if ( cutoff_distance > 0.0 ) {
        distanceFalloff *= pow2( saturate( 1.0 - pow4( distance / cutoff_distance ) ) );
    }

    return distanceFalloff;
}
`,
    [Cc, Qw]
  ),
  tT = w.from(
    `
fn getPointLightInfo(
    light:${_a.wgsl_ref},
    geometry:${mr.wgsl_ref}
) -> ${Ui.wgsl_ref} {

    let L = light.position.xyz - geometry.position;

    var result : ${Ui.wgsl_ref};

    result.direction = normalize(L);

    let distance = length(L);

    let attenuation = light_getDistanceAttenuation(distance, light.distance, 2.0);

    result.color = light.color * attenuation;

    return result;
    
}    
    `,
    [_a.declaration_chunk, mr.declaration_chunk, Ui.declaration_chunk, eT]
  ),
  rT = w.from(`
fn color_mix_4_sqrt( a:vec3<f32>, b:vec3<f32>, c: vec3<f32>, d: vec3<f32>, weights:vec4<f32> ) -> vec3<f32>{
                    
    // TODO consider using fast_sqrt instead, the difference will probably be irrelevant
    
    let a_sqrt = sqrt(a);
    let b_sqrt = sqrt(b);
    let c_sqrt = sqrt(c);
    let d_sqrt = sqrt(d);
    
    let mixed = a_sqrt * weights.x 
    + b_sqrt * weights.y 
    + c_sqrt * weights.z 
    + d_sqrt * weights.w;
    
    // undo SQRT
    return mixed*mixed;
}
    `),
  iT = w.from(`
fn color_mix_4_oklab(
    a: vec3<f32>,
    b: vec3<f32>,
    c: vec3<f32>,
    d: vec3<f32>,
    weights: vec4<f32>
) -> vec3<f32>{

    // https://bottosson.github.io/posts/oklab
    const kCONEtoLMS = mat3x3(                
         0.4121656120,  0.2118591070,  0.0883097947,
         0.5362752080,  0.6807189584,  0.2818474174,
         0.0514575653,  0.1074065790,  0.6302613616);

    const kLMStoCONE = mat3x3(
         4.0767245293, -1.2681437731, -0.0041119885,
        -3.3072168827,  2.6093323231, -0.7034763098,
         0.2307590544, -0.3411344290,  1.7068625689);
                    
    // rgb to cone (arg of pow can't be negative)
    let lmsA = pow( kCONEtoLMS*a, vec3(1.0/3.0) );
    let lmsB = pow( kCONEtoLMS*b, vec3(1.0/3.0) );
    let lmsC = pow( kCONEtoLMS*c, vec3(1.0/3.0) );
    let lmsD = pow( kCONEtoLMS*d, vec3(1.0/3.0) );
    
    // lerp
    let lms = lmsA*weights.x + lmsB*weights.y + lmsC*weights.z + lmsD*weights.w;
    // gain in the middle (no oaklab anymore, but looks better?)
    
    // lms *= 1.0+0.2*h*(1.0-h);
 
    // cone to rgb
    return kLMStoCONE*(lms*lms*lms);
}
    `),
  sT = w.from(`
fn sh3_color_get_irradiance_at(normal: vec3<f32>, coefficients: array< vec3<f32>, 9 >) -> vec3<f32>{
    // normal is assumed to have unit length
    let x = normal.x;
    let y = normal.y;
    let z = normal.z;

    // band 0
    var result = coefficients[0] * 0.8862269254527579;

    // band 1
    result -= coefficients[1] * 1.0233267079464885 * y;
    result += coefficients[2] * 1.0233267079464885 * z;
    result -= coefficients[3] * 1.0233267079464885 * x;

    // band 2
    result += coefficients[4] * 0.8580855308097834 * x * y;
    result -= coefficients[5] * 0.8580855308097834 * y * z;
    result += coefficients[6] * (0.7431238683011272 * z * z - 0.24770795610037571);
    result -= coefficients[7] * 0.8580855308097834 * x * z;
    result += coefficients[8] * 0.4290427654048917 * (x * x - y * y);

    return max(vec3(0),result);
}
`),
  Iv = w.from(`fn f32_array_as_vec4(a : array<f32,4>) -> vec4<f32>{
    return vec4(
        a[0], a[1], a[2], a[3]
    );
}`),
  Nv = w.from(`fn u32_array_as_vec4(a : array<u32,4>) -> vec4<u32>{
    return vec4(
        a[0], a[1], a[2], a[3]
    );
}`),
  Xd = w.from(
    `
fn lpv_mesh_get_vertices(tet_index: u32) -> vec4<u32>{

    let cell = lpv_mesh[tet_index];
    
    return u32_array_as_vec4(cell.vertices);

}
`,
    [vn.declaration_chunk, Nv]
  ),
  Mv = w.from(`
fn lpv_probe_get_data(probe_index:u32) -> array< vec3<f32>, 9 >{
    let c27 = lpv_probes[probe_index].coefficients;

    var out: array<vec3<f32>, 9>;
    
    for(var i=0; i< 9; i++){
        for(var j=0; j< 3; j++){
            out[i][j] = c27[i*3 + j];
        }
    }
        
    return out;
}
`),
  nT = w.from(
    `
fn lpv_mesh_interpolate_probe_irradiance(direction:vec3<f32> , weights: vec4<f32>, tet:u32) -> vec3<f32>{
    let vertices = lpv_mesh_get_vertices(tet);

    let probe0 = lpv_probe_get_data(vertices[0]);
    let probe1 = lpv_probe_get_data(vertices[1]);
    let probe2 = lpv_probe_get_data(vertices[2]);
    let probe3 = lpv_probe_get_data(vertices[3]);
    
    let irradiance_0 = sh3_color_get_irradiance_at(direction, probe0);
    let irradiance_1 = sh3_color_get_irradiance_at(direction, probe1);
    let irradiance_2 = sh3_color_get_irradiance_at(direction, probe2);
    let irradiance_3 = sh3_color_get_irradiance_at(direction, probe3);

    return color_mix_4_sqrt(irradiance_0, irradiance_1, irradiance_2, irradiance_3, weights);
}
`,
    [sT, Xd, Mv, rT, iT]
  ),
  oT = w.from(`
fn v3_sctp(a:vec3<f32>, b:vec3<f32>, c:vec3<f32>) -> f32
{
    // computes scalar triple product
    return dot(cross(a, b), c);
}`),
  aT = w.from(
    `
fn tetrahedron_barycentric(a: vec3<f32>,  b: vec3<f32>,  c: vec3<f32>,  d: vec3<f32>, p: vec3<f32> ) -> vec4<f32>{
    let vap = p - a;
    let vbp = p - b;
    
    let vab = b - a;
    let vac = c - a;
    let vad = d - a;
    
    let vbc = c - b;
    let vbd = d - b;
    
    let va6 = v3_sctp(vbp, vbd, vbc);
    let vb6 = v3_sctp(vap, vac, vad);
    let vc6 = v3_sctp(vap, vad, vab);
    
    let v6 = 1 / v3_sctp(vab, vac, vad);
    
    let f0 = va6*v6;
    let f1 = vb6*v6;
    let f2 = vc6*v6;
    let f3  = 1 - f0 - f1 - f2;
    
    return vec4(f0, f1, f2, f3);
}
    `,
    [oT]
  ),
  ri = w.from(`
fn f32_array_as_vec3(a : array<f32,3>) -> vec3<f32>{
    return vec3<f32>(
        a[0], a[1], a[2]
    );
}`),
  kv = w.from(
    `
fn lpv_probe_get_position(probe_index: u32) -> vec3<f32>{
    return f32_array_as_vec3(
        lpv_probes[probe_index].position
    );
}
`,
    [ri]
  ),
  Rv = w.from(
    `
fn lpv_mesh_get_barycentric_coordinates(tet_index: u32, position: vec3<f32>) -> vec4<f32>{

    let vertices = lpv_mesh_get_vertices(tet_index);

    let p0 = lpv_probe_get_position(vertices.x);
    let p1 = lpv_probe_get_position(vertices.y);
    let p2 = lpv_probe_get_position(vertices.z);
    let p3 = lpv_probe_get_position(vertices.w);

    return tetrahedron_barycentric(p0, p1, p2, p3, position);

}
    `,
    [Xd, kv, aT]
  ),
  cT = w.from(
    `
fn lpv_mesh_get_neighbours(tet_index: u32) -> vec4<u32>{

    let cell = lpv_mesh[tet_index];
    
    return u32_array_as_vec4(cell.neighbours);

}
`,
    [vn.declaration_chunk, Nv]
  ),
  xp = w.from(`
    const INVALID_TET = 1073741823u;
    `),
  lT = w.from(
    `

fn lpv_mesh_walk_to_tetrahedron(position:vec3<f32>, tet_guess: u32, out_weights:ptr<function, vec4<f32>>) -> u32 {

    var tet_index = tet_guess;
    
    const SEARCH_STEP_LIMIT = 32u;
    
    for (var i = 0u; i < SEARCH_STEP_LIMIT; i++) {
    
        let weights = lpv_mesh_get_barycentric_coordinates(tet_index, position);
        
        // Check if we're in the current "best guess" tetrahedron
        if (weights.x >= 0.0 && weights.y >= 0.0 && weights.z >= 0.0 && weights.w >= 0.0) {
            // success
            *out_weights = weights;
            return tet_index;
        }
        
        let neighbors = lpv_mesh_get_neighbours(tet_index);
        
        var next_tet:u32;
        
        // Otherwise find the smallest barycentric coord and move in that direction
        if (weights.x < weights.y && weights.x < weights.z && weights.x < weights.w) {
            next_tet = neighbors[0];
        } else if (weights.y < weights.z && weights.y < weights.w) {
            next_tet = neighbors[1];
        } else if (weights.z < weights.w) {
            next_tet = neighbors[2];
        } else {
            next_tet = neighbors[3];
        }
        
        tet_index = next_tet;
    }

    // failed
    return INVALID_TET;

}
    
    `,
    [xp, Rv, cT]
  ),
  Lv = w.from(`
fn lpv_probe_depth_coordinate_to_address(pixel: vec2<u32> ) -> u32{
    return ( ${zt} * pixel.y + pixel.x );
}
    `),
  _T = w.from(
    `
fn lpv_get_depth_get_pixel(data:${vc.wgsl_ref}, pixel: vec2<u32>) -> vec2<f32>{
    let address = lpv_probe_depth_coordinate_to_address(pixel);
    
    return unpack2x16float(
        data[address],
    );
}
    `,
    [vc.declaration_chunk, Lv]
  ),
  uT = w.from(
    `
fn lpv_probe_sample_depth_array( direction:vec3<f32>, probe: ${ut.wgsl_ref} ) -> vec2<f32> {

    // convert direction to UV
    let octahedral_uv = saturate(octahedral_encode_normal(-direction));
    
    const max_pixel = vec2<f32>(${zt} - 1);
    
    let grid = octahedral_uv * max_pixel;

    let gridFrac = fract(grid);

    let texel_position = vec2<i32>(floor(grid));

    let tile_p_00 = texture_octahedral_wrap_texel_coordinates( texel_position, ${zt} );
    let tile_p_01 = texture_octahedral_wrap_texel_coordinates( texel_position + vec2(1, 0), ${zt} );
    let tile_p_10 = texture_octahedral_wrap_texel_coordinates( texel_position + vec2(0, 1), ${zt} );
    let tile_p_11 = texture_octahedral_wrap_texel_coordinates( texel_position + vec2(1, 1), ${zt} );
    
    let depth = probe.depth;
    
    let texel_00 = lpv_get_depth_get_pixel( depth,  tile_p_00 );
    let texel_01 = lpv_get_depth_get_pixel( depth,  tile_p_01 );
    let texel_10 = lpv_get_depth_get_pixel( depth,  tile_p_10 );
    let texel_11 = lpv_get_depth_get_pixel( depth,  tile_p_11 );

    // scale by max distance, as depths that are stored are normalized [0..1]
    let weights = get_bilinear_weights(gridFrac) * probe.distance_max;

    return texel_00 * weights.x
     + texel_01 * weights.y
     + texel_10 * weights.z
     + texel_11 * weights.w
     ;
}
`,
    [ut.declaration_chunk, Do, xv, F_, _T]
  ),
  dT = w.from(
    `
fn lpv_get_visibility_mask(
    position:vec3<f32>,
    probe_index: u32
) -> f32 {
    let probe = lpv_probes[probe_index];

    let probe_position = lpv_probe_get_position(probe_index);
    
    let local_probe_offset = position - probe_position;

    let distToProbe = length(local_probe_offset);

    let direction = local_probe_offset / distToProbe;

    let temp = lpv_probe_sample_depth_array( direction, probe );

    let mean = temp.x;
    let mean2 = temp.y; // mean of squared distances

    let variance = abs(mean * mean - mean2);

    // http://www.punkuser.net/vsm/vsm_paper.pdf; equation 5
    // Need the max in the denominator because biasing can cause a negative displacement
    let distance_delta = max(distToProbe - mean, 0.0);

    var chebyshevWeight = variance / (variance + distance_delta * distance_delta);

    // Increase contrast in the weight
    chebyshevWeight = max(chebyshevWeight * chebyshevWeight * chebyshevWeight, 0.0);

    if (distToProbe <= mean) {
        return 1.0;
    }else{
        return chebyshevWeight;
    }
    
}
    `,
    [kv, uT]
  ),
  Pv = w.from(
    `
fn lpv_mask_weights_by_visibility(
    position:vec3<f32>,
    normal:vec3<f32>,
    view_direction:vec3<f32>,
    tet_index:u32,
    barycentric: vec4<f32>
) -> vec4<f32>{
    let vertices = lpv_mesh_get_vertices(tet_index);

    var visibility: vec4<f32>;
    
    var weight_sum = 0.0;

    for (var i = 0u; i < 4u; i++) {

        var weight = 1.0;

        let probe_index = vertices[i];

        let probe = lpv_probes[probe_index];
        
    
   
        let probe_position = lpv_probe_get_position(probe_index);


        // Smooth backface test
        {

            // Computed without the biasing applied to the "dir" variable.
            // This test can cause reflection-map looking errors in the image
            // (stuff looks shiny) if the transition is poor.
            let direction_to_probe = normalize(probe_position - position);

            // The naive soft backface weight would ignore a probe when
            // it is behind the surface. That's good for walls. But for small details inside of a
            // room, the normals on the details might rule out all of the probes that have mutual
            // visibility to the point. So, we instead use a "wrap shading" test below inspired by
            // NPR work.
//            let backface_term = max(0.0001, dot(direction_to_probe, normal));

            // The small offset at the end reduces the "going to zero" impact
            // where this is really close to exactly opposite
            let backface_term = max(0.0001, (dot(direction_to_probe, normal) + 1.0) * 0.5);
//            weight *= backface_term * backface_term + 0.2;

        }

        // Moment visibility test (depth)
        {
            // Bias the position at which visibility is computed; this
            // avoids performing a shadow test *at* a surface, which is a
            // dangerous location because that is exactly the line between
            // shadowed and unshadowed. If the normal bias is too small,
            // there will be light and dark leaks. If it is too large,
            // then samples can pass through thin occluders to the other
            // side (this can only happen if there are MULTIPLE occluders
            // near each other, a wall surface won't pass through itself.)
            
            // see "Scaling Probe-Based Real-Time Dynamic Global Illumunation for Production" by Zander Majercik et al 
            const TUNABLE_BIAS = 0.3;
            let bias_vector = (normal*0.8 + view_direction*0.2)*(0.75*probe.distance_max)*TUNABLE_BIAS;
                
            let lookup_position = position + bias_vector;
            
//            weight *= lpv_get_visibility_mask(lookup_position, probe_index);

        }

        // Avoid zero weight
        weight = max(0.000001, weight);


        // A tiny bit of light is really visible due to log perception, so
        // crush tiny weights but keep the curve continuous. This must be done
        // before the trilinear weights, because those should be preserved.
        const crushThreshold = 0.2;

        if (weight < crushThreshold) {
            weight *= weight * weight * (1.0 / (crushThreshold * crushThreshold));
        }

        weight *= barycentric[i];

        weight_sum += weight;

        visibility[i] = weight;
    }

    // normalize to 1
    visibility /= weight_sum;
    
    return visibility;
}
`,
    [Xd, dT]
  ),
  hT = w.from(
    `
fn lpv_2d_cache_sample_irradiance(
        tet_cache:texture_2d<u32>, 
        uv:vec2<f32>, 
        position:vec3<f32>,
        normal: vec3<f32>,
        view_direction: vec3<f32>
) -> vec3<f32> {
    let size = textureDimensions(tet_cache);
    
    let coord = vec2<u32>( vec2(uv.x, uv.y) * vec2<f32>(size.xy) );

    let tet = textureLoad(tet_cache, coord, 0).r;
    
    
    if(tet == INVALID_TET){
    
        return vec3(0.0);
        
    }
    
    var barycentric_coordinates: vec4<f32> = lpv_mesh_get_barycentric_coordinates(tet, position);
    let weights = lpv_mask_weights_by_visibility(
            position,
            normal,
            view_direction,
            tet,
            barycentric_coordinates
    ); 
        
        // TODO apply convolution to specular compunent as well, see https://github.com/TheRealMJP/BakingLab/blob/c3868af50d72afc13cdfe513a1e0c6a4fafdac8c/BakingLab/Mesh.hlsl#L336
    return lpv_mesh_interpolate_probe_irradiance(normal, weights, tet);
}
`,
    [nT, lT, Pv]
  ),
  V_ = new ResourecGroup();
V_.createGroup()
  .addTexture("gBufferDepth")
  .addTexture("gBuffer_normal_metalness_roughness")
  .addTexture("gBufferNormal", "uint")
  .addTexture("gBufferAlbedo")
  .addTexture("gBufferEmissive")
  .addTexture("viewport_shadows");
V_.createGroup()
  .addUniform("light_metadata", dn)
  .addStorageBuffer("light_data", X.f32)
  .addTexture("tEnvironment");
V_.createGroup().addUniform("camera", ce);
V_.createGroup()
  .addTexture("lpv_tet_cache_texture", "uint")
  .addStorageBuffer("lpv_probes", X.from(ut))
  .addStorageBuffer("lpv_mesh", X.from(vn));
const fT = w.from(
    `

const ENVIRONMENT_INTENSITY = 0.3;

@fragment
fn main(
  @builtin(position) coord : vec4<f32>,
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    var result : vec3<f32>;
    let i_coord = vec2<i32>(floor(coord.xy));
        
    let texel_depth = textureLoad(gBufferDepth,
        i_coord,
        0
    ).r;
    
    let position_ws = world_position_from_depth(uv, texel_depth, camera.view_projection_matrix_inverse );
           
    let view_position = matrix4_extract_position(camera.transform);
    
    let view_direction = normalize(view_position - position_ws);
    
    if(texel_depth == 0){
        // outside of the scene, sample sky
                
        result = sample_environment_color(tEnvironment, - view_direction);
            
    }else{
    
        let texel_pbr = textureLoad(
            gBuffer_normal_metalness_roughness,
            i_coord,
            0
        );
    
        let g_buffer_sample_normal = textureLoad(gBufferNormal, i_coord, 0);
    
        let shading_normal = decode_g_buffer_normal(g_buffer_sample_normal.xy);
        let geometric_normal = decode_g_buffer_normal(g_buffer_sample_normal.zw);
        
        let albedo_sample = textureLoad(
            gBufferAlbedo,
            i_coord,
            0
        );
    
        let albedo = albedo_sample.rgb;
        
        let emissive = textureLoad(
            gBufferEmissive,
            i_coord,
            0
        ).rgb;
    
        // prepare geometry and material info necessary for lighting computation
    
        let metalnessFactor = texel_pbr.z;
        let roughnessFactor = texel_pbr.w;
            
        
        let geometry = ${mr.wgsl_ref}(
            shading_normal, 
            geometric_normal,
            position_ws,
            view_direction
        );
        
        var material : ${ei.wgsl_ref};
    
        material.diffuse = albedo * (1.0 - metalnessFactor);
    
        material.roughness = max(roughnessFactor,0.0525); // 0.0525 corresponds to the base mip of a 256 cubemap.
    
        material.specular = mix(vec3<f32>(0.04), albedo, metalnessFactor);
        material.specularF90 = 1.0;
    
        var iblIrradiance = vec3( 0.0 );
        var irradiance =  vec3(0.0) ;
        
        let probe_color = lpv_2d_cache_sample_irradiance(
                lpv_tet_cache_texture,
                uv,
                position_ws,
                geometry.shading_normal,
                geometry.view_direction
        );
        
        irradiance += probe_color;
        iblIrradiance += sample_environment_map(tEnvironment, normalize(shading_normal), 1.0) * PI * ENVIRONMENT_INTENSITY;
    
        var radiance = vec3( 0.0 );
        var clearcoatRadiance = vec3( 0.0 );
        
//        radiance += sample_environment_map(
//            tEnvironment,
//            normalize( mix(  reflect(-view_direction, geometry.shading_normal) , geometry.shading_normal, roughnessFactor*roughnessFactor ) ) ,
//            roughnessFactor
//        ) * ENVIRONMENT_INTENSITY;
    
        var reflected_light : ${xn.wgsl_ref};
    
        // applly shadow
        var visibility = textureLoad(viewport_shadows, vec2<u32>(coord.xy), 0).r;
        
//        visibility *= albedo_sample.w; //ambient occlusion term
//            let visibility = 1.0;

        // do light accumulation
    
        var scattering:vec3<f32>;
                    
    
        for (var i = 0u; i < light_metadata.count; i++) {
            
            var direct_light:${Ui.wgsl_ref};
            
            let address = u32(i*${Ao});
            let light_type = u32(light_data[i*${Ao}]);
            
            if( light_type == ${gc.Point} ){
            
                let light = light_read_record_point(address+1);
                
                let L = light.position.xyz - position_ws;
                let distance = length(L);
        
                if (distance > light.distance) {
                  // cull light, too far to influence
                  continue;
                }
        
                direct_light = getPointLightInfo(light, geometry);
            
            }else if( light_type == ${gc.Directional} ){
            
                let light = light_read_record_directional(address+1);
                
                direct_light = getDirectionalLightInfo(light);
            }
            
            direct_light.color *= visibility;
            
            re_direct_physical(direct_light, geometry, material, &reflected_light);
            
        }
        
    
        re_indirect_diffuse_physical( irradiance, geometry, material, &reflected_light );
        re_indirect_specular_physical( radiance, iblIrradiance, clearcoatRadiance, geometry, material, &reflected_light );
    
        var total_emissive_radiance = vec3(emissive);
    
        let total_diffuse = reflected_light.direct_diffuse + reflected_light.indirect_diffuse;
        let total_specular = reflected_light.direct_specular + reflected_light.indirect_specular;
    
        let outgoing_light = total_diffuse + total_specular + total_emissive_radiance + scattering;
        
                
        result = outgoing_light;
        
//        result = vec3(albedo_sample.w);
//        result = shading_normal*0.5 + 0.5;
//        result = vec3(material.roughness );
//        result = vec3( step(0.0,material.roughness) );
//        result = vec3(albedo );
//        result = vec3(material.roughness, f32(texel_depth > 0.0), 0.0 );
//        result = vec3(texel_depth  );
    
    }
    

    return vec4(result, 1.0);
}
`,
    [
      ms.declaration_chunk,
      _a.declaration_chunk,
      gv.declaration_chunk,
      Ui.declaration_chunk,
      xn.declaration_chunk,
      mr.declaration_chunk,
      ei.declaration_chunk,
      tT,
      Kw,
      Pi,
      zc,
      hp,
      Fw,
      $w,
      Xw,
      Hw,
      Ow,
      up,
      Bw,
      hT,
      qd,
    ]
  ),
  pT = new Je({
    descriptor: le.from({ label: "Deferred", resources: V_, body: fT }),
    targets: [{ format: "rgba16float" }],
  }),
  mT = w.from(`
fn RRTAndODTFit(  v:vec3<f32> ) ->vec3<f32> {

	let a = v * ( v + 0.0245786 ) - 0.000090537;
	let b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;

	return a / b;

}`),
  gT = w.from(
    `

fn tonemap_aces( in_color:vec3<f32> ) ->vec3<f32> {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const  ACESInputMat = mat3x3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const  ACESOutputMat = mat3x3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

    var color = in_color;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}
    `,
    [mT]
  ),
  vT = w.from(`
fn sRGBTransferOETF( value:vec3<f32> ) -> vec3<f32> {
	return  mix( 
        pow( value, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ),
        value * 12.92, 
        vec3<f32>( ( value <= vec3( 0.0031308 ) ) ) 
    );
}
`),
  xT = w.from(`
fn triangle_noise( _n: vec2<f32> ) -> f32{
    // triangle noise, in [-1.0..1.0] range
    var n  = fract(_n * vec2(5.3987, 5.4421));
    n += dot(n.yx, n.xy + vec2(21.5351, 14.3137));

    let xy = n.x * n.y;
    // compute in [0..2] and remap to [-1.0..1.0]
    return fract(xy * 95.4307) + fract(xy * 75.04961) - 1.0;
}
    `),
  bT = w.from(
    `
fn dither_color_8bit_triangle_noise(uv:vec2<f32>) -> f32{
    let noise = triangle_noise(uv);
    
    return noise / 255.0;
}
    `,
    [xT]
  ),
  yT = Struct.from({ exposure: "f32" }),
  Bv = new ResourecGroup();
Bv.createGroup()
  .addTexture("input_color", "unfilterable-float")
  .addUniform("settings", yT);
const wT = w.from(
    `
@fragment
fn main(
  @builtin(position) coord : vec4<f32>,
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    let coord_i = vec2<i32>(coord.xy);

    let input_texel = textureLoad(input_color, coord_i, 0);

    var color = input_texel.rgb;

    color *= settings.exposure;
    
    color = tonemap_aces(color);
    
    // conversion to output colorspace
    color = sRGBTransferOETF(color);
    
    // apply dither to remvoe color banding
    color += dither_color_8bit_triangle_noise(coord.xy);
    
    return vec4(color, input_texel.a);
}
    `,
    [gT, bT, vT]
  ),
  TT = new Je({
    descriptor: le.from({ label: "Tonemap", resources: Bv, body: wT }),
    targets: [{ format: "rgba8unorm" }],
  });
var Qf, ET;
class Ov {
  constructor() {
    b(this, Qf);
    x(this, "color_attachments", []);
    x(this, "depth_attachment", null);
  }
  get color_target_states() {
    return this.color_attachments.map((e) =>
      jd.from({ format: e.descriptor.format })
    );
  }
  resize(e, t) {
    var r;
    this.color_attachments.forEach((i) => i.resize(e, t)),
      (r = this.depth_attachment) == null || r.resize(e, t);
  }
}
(Qf = new WeakSet()),
  (ET = function () {
    const e = [];
    return So.fromJSON({ entries: e });
  });
var kl, Sa;
class G_buffer {
  constructor(e) {
    x(this, "texture_normal_metalness_roughness");
    x(this, "texture_albedo");
    x(this, "texture_normal");
    x(this, "texture_emissive");
    x(this, "layout");
    b(this, kl);
    b(this, Sa, new Ov());
    S(this, kl, e);
  }
  get render_target() {
    return getProperty(this, Sa);
  }
  resize(e, t) {
    getProperty(this, Sa).resize(e, t);
  }
  init(e) {
    const r = getProperty(this, kl).textures;
    (this.texture_normal_metalness_roughness = r.contextFromDescriptor(
      mt.from({
        label: "g-buffer / PBR",
        size: e,
        usage:
          GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        format: "rgba8unorm",
        mipLevelCount: 1,
      })
    )),
      (this.texture_albedo = r.contextFromDescriptor(
        mt.from({
          label: "g-buffer / Albedo",
          size: e,
          usage:
            GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
          format: "rgba8unorm",
          mipLevelCount: 1,
        })
      )),
      (this.texture_normal = r.contextFromDescriptor(
        mt.from({
          label: "g-buffer / Normal",
          size: e,
          usage:
            GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
          format: "rgba16uint",
          mipLevelCount: 1,
        })
      )),
      (this.texture_emissive = r.contextFromDescriptor(
        mt.from({
          label: "g-buffer / Emissive",
          size: e,
          usage:
            GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
          format: "rgba16float",
          mipLevelCount: 1,
        })
      )),
      (getProperty(this, Sa).color_attachments = [
        this.texture_normal_metalness_roughness,
        this.texture_normal,
        this.texture_albedo,
        this.texture_emissive,
      ]);
  }
}
(kl = new WeakMap()), (Sa = new WeakMap());
function Fv(s) {
  return s > 1e6
    ? `${(s * 1e-6).toFixed(2)} ms`
    : s > 1e3
    ? `${(s * 0.001).toFixed(2)} µs`
    : `${s.toFixed(2)} ns`;
}
class ST {
  constructor() {
    x(this, "start", 0);
    x(this, "end", 0);
  }
  get duration() {
    return Number(this.end - this.start);
  }
}
var Ji, za, Rl, Ca;
class Dv {
  constructor() {
    b(this, Ji, new Uint32Array(64));
    b(this, za, 0);
    b(this, Rl, 0);
    b(this, Ca, 0);
  }
  get history_length() {
    return getProperty(this, Ji).length;
  }
  set history_length(e) {
    S(this, Ji, new Uint32Array(e));
  }
  get average() {
    return getProperty(this, Rl);
  }
  get last() {
    const e = getProperty(this, za);
    return getProperty(this, Ji)[e];
  }
  record(e) {
    const t = getProperty(this, Ji).length,
      r = (getProperty(this, za) + 1) % t;
    S(this, za, r),
      S(this, Ca, getProperty(this, Ca) - getProperty(this, Ji)[r]),
      S(this, Ca, getProperty(this, Ca) + e),
      S(this, Rl, getProperty(this, Ca) / t),
      (getProperty(this, Ji)[r] = e);
  }
}
(Ji = new WeakMap()),
  (za = new WeakMap()),
  (Rl = new WeakMap()),
  (Ca = new WeakMap());
var Ua, Ll, Ia, Ar, Zi, ui, Pl, Ki, Na, Hn, cd, Gv;
class kc {
  constructor(e, t = "Timer") {
    b(this, cd);
    b(this, Ua, "");
    b(this, Ll, -1);
    b(this, Ia, 0);
    b(this, Ar);
    b(this, Zi);
    b(this, ui, []);
    b(this, Pl, 0);
    b(this, Ki, new ST());
    b(this, Na, new Dv());
    b(this, Hn);
    x(this, "onResults", new ge());
    if ((S(this, Hn, e), S(this, Ua, t), !e.features.has("timestamp-query")))
      throw new Error("Timestamp query feature is not enabled on this device");
    P(this, cd, Gv).call(this);
  }
  get name() {
    return getProperty(this, Ua);
  }
  get event_count() {
    return getProperty(this, Pl);
  }
  get data() {
    return getProperty(this, Ki);
  }
  get stats() {
    return getProperty(this, Na);
  }
  destroy() {
    getProperty(this, Ar) !== false &&
      (getProperty(this, Ar).destroy(),
      getProperty(this, Zi).destroy(),
      getProperty(this, ui).forEach((e) => e.destroy())),
      S(this, Ar, false),
      S(this, Zi, false),
      S(this, ui, []);
  }
  async getResults() {
    const e = getProperty(this, Ia) - getProperty(this, Ll);
    if (e === 0) return getProperty(this, Ki);
    S(this, Ll, getProperty(this, Ia));
    const t = getProperty(this, ui).splice(getProperty(this, ui).length - e, e);
    for (let r = 0; r < e; r++) {
      const i = t.pop();
      if (i === false) break;
      await i.mapAsync(GPUMapMode.READ);
      const n = new BigInt64Array(i.getMappedRange());
      (getProperty(this, Ki).start = n[0]),
        (getProperty(this, Ki).end = n[1]),
        getProperty(this, Na).record(getProperty(this, Ki).duration),
        i.unmap(),
        getProperty(this, ui).unshift(i),
        ze(this, Pl)._++,
        this.onResults.send1(this);
    }
    return getProperty(this, Ki);
  }
  buildLogTextAverage() {
    let e;
    const t = getProperty(this, Na).average;
    return (e = Fv(t)), `${getProperty(this, Ua)} : ${e}`;
  }
  resolve(e) {
    if (getProperty(this, Ar) === false) return;
    let t = getProperty(this, ui).shift();
    t === false &&
      (t = getProperty(this, Hn).createBuffer({
        label: "GPUTimer / Result Buffer",
        size: 16,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
      })),
      getProperty(this, ui).push(t),
      e.resolveQuerySet(
        getProperty(this, Ar),
        0,
        getProperty(this, Ar).count,
        getProperty(this, Zi),
        0
      ),
      e.copyBufferToBuffer(
        getProperty(this, Zi),
        0,
        t,
        0,
        getProperty(this, Zi).size
      ),
      ze(this, Ia)._++;
  }
  update(e) {
    this.getResults(), this.resolve(e);
  }
  getComputeWrites() {
    return {
      querySet: getProperty(this, Ar),
      beginningOfPassWriteIndex: 0,
      endOfPassWriteIndex: 1,
    };
  }
  getRenderWrites() {
    return {
      querySet: getProperty(this, Ar),
      beginningOfPassWriteIndex: 0,
      endOfPassWriteIndex: 1,
    };
  }
}
(Ua = new WeakMap()),
  (Ll = new WeakMap()),
  (Ia = new WeakMap()),
  (Ar = new WeakMap()),
  (Zi = new WeakMap()),
  (ui = new WeakMap()),
  (Pl = new WeakMap()),
  (Ki = new WeakMap()),
  (Na = new WeakMap()),
  (Hn = new WeakMap()),
  (cd = new WeakSet()),
  (Gv = function () {
    S(
      this,
      Ar,
      getProperty(this, Hn).createQuerySet({ type: "timestamp", count: 2 })
    );
    const t = 2 * 8;
    S(
      this,
      Zi,
      getProperty(this, Hn).createBuffer({
        label: "Resolve Buffer",
        size: t,
        usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,
      })
    );
  });
const Vv = "rg32float",
  bp = w.from(`
fn min4(a:f32, b:f32, c:f32, d:f32) -> f32 {
    return min( min(a, b), min(c, d) );
}
`);
Struct.from({ output_resolution: "vec2<u32>" });
const $v = new ResourecGroup();
$v.createGroup()
  .addUniform("output_resolution", "vec2<u32>")
  .addTexture("tInput", "unfilterable-float");
const zT = w.from(
    `
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec2<f32> {
    let target_coord_i = vec2<u32>(coord.xy);
                
    let source_resolution = textureDimensions(tInput);
    
    let scale = vec2f(source_resolution) / vec2f(output_resolution);
    
    let scale_i = vec2u(ceil(scale));
    
    let source_coord_i = target_coord_i * 2;
                        
    // compute bounds in source texture
    let source_bounds_max =  min(
        source_coord_i + scale_i,
        source_resolution - 1
    );
    
    let source_bounds_min = source_coord_i;
    
    var max_value = 0.0;
    var min_value = 1.0;
    
    for(var y = source_bounds_min.y ; y <= source_bounds_max.y ; y++){
        for(var x = source_bounds_min.x ; x<= source_bounds_max.x ; x++){
        
            let depth = textureLoad(tInput, vec2u(x,y), 0).r;
            
            min_value = min(depth, min_value);
            max_value = max(depth, max_value);
        }
    }
    
    return vec2(min_value, max_value);
}
    `,
    [bp]
  ),
  CT = new Je({
    descriptor: le.from({
      label: "HZB / reduce any resolution",
      body: zT,
      resources: $v,
    }),
    targets: [{ format: Vv }],
  }),
  gg = 2 * Uint32Array.BYTES_PER_ELEMENT;
function vg(s, e, t, r) {
  const i = {},
    n = s.add("hzb/ build", i, (o, a, c) => {
      c.graphics;
      const _ = c.encoder,
        u = a.get(o.source);
      e.build(_, u);
    });
  return (i.source = n.read(t)), n.write(r);
}
var Os, ld, Ma, di, ws, qv, Af, Hv;
class UT {
  constructor(e) {
    b(this, ws);
    b(this, Os);
    b(this, ld, Vv);
    b(this, Ma);
    b(this, di);
    S(this, Ma, e),
      S(
        this,
        Os,
        e.textures.contextFromDescriptor(
          mt.from({
            label: "Hierarchical Z Buffer",
            format: getProperty(this, ld),
            usage:
              GPUTextureUsage.TEXTURE_BINDING |
              GPUTextureUsage.RENDER_ATTACHMENT,
            mipLevelCount: 1,
            size: [1, 1],
          })
        )
      );
  }
  get texture() {
    return getProperty(this, Os);
  }
  build(e, t) {
    this.setViewportSize(t.width, t.height);
    const r = getProperty(this, Os),
      i = r.descriptor.mipLevelCount;
    let n = t.obtainView(
      Ve.from({
        baseMipLevel: 0,
        mipLevelCount: 1,
        dimension: "2d",
        baseArrayLayer: 0,
        arrayLayerCount: 1,
      })
    );
    for (let o = 0; o < i; o++) {
      const a = r.obtainView(
        Ve.from({
          baseMipLevel: o,
          mipLevelCount: 1,
          dimension: "2d",
          baseArrayLayer: 0,
          arrayLayerCount: 1,
        })
      );
      P(this, ws, qv).call(this, e, n, a, o), (n = a);
    }
  }
  setViewportSize(e, t) {
    P(this, ws, Hv).call(this, e >> 1, t >> 1);
  }
  destroy() {
    getProperty(this, Os).destroy(), getProperty(this, di).destroy();
  }
}
(Os = new WeakMap()),
  (ld = new WeakMap()),
  (Ma = new WeakMap()),
  (di = new WeakMap()),
  (ws = new WeakSet()),
  (qv = function (e, t, r, i) {
    const n = P(this, ws, Af).call(this);
    CT.draw({
      encoder: e,
      bindings: {
        tInput: t,
        output_resolution: {
          buffer: getProperty(this, di),
          offset: i * n,
          size: gg,
        },
      },
      colorAttachments: [{ view: r, loadOp: "clear", storeOp: "store" }],
    });
  }),
  (Af = function () {
    const t = getProperty(this, Ma).device.limits;
    return Wt(t.minUniformBufferOffsetAlignment, gg);
  }),
  (Hv = function (e, t) {
    const r = getProperty(this, Os),
      i = r.size;
    if (i[0] === e && i[1] === t) return;
    const n = np(ne(e, t)),
      o = Math.log2(n);
    (r.descriptor.mipLevelCount = o), r.resize(e, t);
    const a = P(this, ws, Af).call(this),
      c = o * a;
    getProperty(this, di) !== false && getProperty(this, di).destroy(),
      S(
        this,
        di,
        getProperty(this, Ma).device.createBuffer({
          label: "HZB Destination Resolution",
          size: c,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
          mappedAtCreation: !0,
        })
      );
    const _ = getProperty(this, di).getMappedRange(),
      u = new Uint32Array(_);
    let d = e,
      h = t;
    const p = a >> 2;
    for (let v = 0; v < o; v++)
      (u[v * p] = d),
        (u[v * p + 1] = h),
        (d = ne(1, d >>> 1)),
        (h = ne(1, h >>> 1));
    getProperty(this, di).unmap();
  });
const Vi = Struct.from({ bounds: "array<f32,6>" }, "MeshletBounds"),
  vs = Struct.from({ index: "u32", mesh: "u32" }, "MeshletDefinition"),
  Xe = Struct.from(
    {
      geometry: "u32",
      material: "u32",
      bounds: "array<f32,6>",
      transform: "mat4x4<f32>",
      transform_inverse: "mat4x4<f32>",
    },
    "MeshMetadata"
  ),
  xe = Struct.from({ min: "vec3<f32>", max: "vec3<f32>" }, "AABB"),
  $_ = w.from(
    `
fn query_depth_from_screen_space_bb( 
    pb : ${xe.wgsl_ref},
    hzb: texture_2d<f32> 
) -> f32 {
    var n_min = saturate( pb.min.xy * 0.5 + 0.5 );
    var n_max = saturate( pb.max.xy * 0.5 + 0.5 );

    let bb_dim =  n_max - n_min;

    let hzb_size_u = textureDimensions(hzb);
    let hzb_size_f =  vec2<f32>(hzb_size_u);

    let bb_dim_hz = bb_dim * hzb_size_f;

    // this is bugus, there's a bug in here somewhere that filters out small triangles, the fudge is to offset MIP by 1
    // TODO fix the actual bug
    const fudge_factor = 2.0;

    let longest_edge = max(bb_dim_hz.x, bb_dim_hz.y) * fudge_factor;

    let mip_limit = textureNumLevels(hzb);

    let mip_level = min( 
        u32( ceil(log2( max(longest_edge, 1.0) ) ) ),
        mip_limit - 1
    );

    let mip_resolution = vec2<f32>( hzb_size_u >> vec2(mip_level) );

    let bounds_center = (n_min + n_max) * 0.5;

    let texel = vec2<u32>(
        u32(bounds_center.x * mip_resolution.x - 0.5),
        u32( (1.0 - bounds_center.y) * mip_resolution.y - 0.5 ) 
    );

    let n0 = textureLoad(hzb, texel.xy, mip_level).x;

    let depth_delta = pb.max.z - n0;

    return depth_delta;
}
`,
    [xe.declaration_chunk]
  ),
  IT = w.from(
    `
fn aabb3_below_plane(
    aabb: ${xe.wgsl_ref},
    plane: vec4<f32>
) -> bool{

    let plane_normal = plane.xyz;

    // construct farthest corner along the plane normal
    let far = select(aabb.min, aabb.max, plane_normal > vec3(0.0));

    let neg_plane_constant = -plane.w;

    return dot(far, plane_normal) < neg_plane_constant;

}`,
    [xe.declaration_chunk]
  ),
  yp = w.from(
    `
fn aabb3_intersects_frustum(
    aabb:${xe.wgsl_ref},
    frustum:array<vec4<f32>,6>
) -> bool{
    
    for(var i=0; i < 6; i++){
        let plane = frustum[i];

        if( aabb3_below_plane(aabb, plane)){
            return false;
        }

    }

    return true;
}`,
    [xe.declaration_chunk, IT]
  ),
  NT = w.from(
    `
fn aabb3_compute_plane_side(aabb: ${xe.wgsl_ref}, plane: vec4<f32>) -> i32{
    var near:vec3<f32> ;
    var far:vec3<f32>;

    // construct nearest and farthest corners along the plane normal
    if (plane.x > 0) {
        near.x = aabb.min.x;
        far.x = aabb.max.x;
    } else {
        near.x = aabb.max.x;
        far.x = aabb.min.x;
    }

    if (plane.y > 0) {
        near.y = aabb.min.y;
        far.y = aabb.max.y;
    } else {
        near.y = aabb.max.y;
        far.y = aabb.min.y;
    }

    if (plane.z > 0) {
        near.z = aabb.min.z;
        far.z = aabb.max.z;
    } else {
        near.z = aabb.max.z;
        far.z = aabb.min.z;
    }

    let neg_plane_constant = -plane.w;

    if(dot(far, plane.xyz) < neg_plane_constant){
        return -2;
    }

    if(dot(near, plane.xyz) >= neg_plane_constant){
        return 2;
    }

    return 0;
}`,
    [xe.declaration_chunk]
  ),
  Yv = w.from(
    `
fn aabb3_intersects_frustum_degree(aabb:${xe.wgsl_ref}, frustum:array<vec4<f32>,6>) -> i32{
    var result:i32 = 2;

    for(var i=0; i<6; i++){
        let plane =  frustum[i];

        let plane_side = aabb3_compute_plane_side(aabb, plane);

        if(plane_side < 0){
            // fully outside
            return 0;
        }else if(plane_side == 0){
            result = 1;
        }
    }

    return result;
}
`,
    [xe.declaration_chunk, NT]
  ),
  jv = w.from(
    `fn aabb3_project(aabb:${xe.wgsl_ref}, transform:mat4x4<f32>) -> ${xe.wgsl_ref}{
    // ported from meep's JS code
    var result:${xe.wgsl_ref};

    // extract translation from matrix
    result.min[0] = transform[3][0];
    result.max[0] = transform[3][0];

    result.min[1] = transform[3][1];
    result.max[1] = transform[3][1];

    result.min[2] = transform[3][2];
    result.max[2] = transform[3][2];

    // apply 3x3 matrix transform_global
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {

            let m_v = transform[j][i];

            let a = m_v * aabb.min[j];
            let b = m_v * aabb.max[j];

            if (a < b) {
                result.min[i] += a;
                result.max[i] += b;
            } else {
                result.min[i] += b;
                result.max[i] += a;
            }
        }
    }

    return result;
}`,
    [xe.declaration_chunk]
  ),
  wp = w.from(
    `
fn project_aabb_perspective(output:ptr<function,${xe.wgsl_ref}>, bb:${xe.wgsl_ref}, transform:mat4x4<f32>) -> bool {

    let p0 = transform * vec4( bb.min, 1.0 );

    if(p0.w < 0){
        return false;
    }

    let _p0 = p0.xyz /p0.w;

    var pb_min = _p0;
    var pb_max = _p0;

    let p1 = transform * vec4( bb.min.xy, bb.max.z, 1.0 );

    if(p1.w < 0){
        return false;
    }

    let _p1 = p1.xyz /p1.w;

    pb_min = min(pb_min, _p1);
    pb_max = max(pb_max, _p1);

    let p2 = transform * vec4( bb.min.x, bb.max.y, bb.min.z, 1.0 );

    if(p2.w < 0){
        return false;
    }

    let _p2 = p2.xyz /p2.w;

    pb_min = min(pb_min, _p2);
    pb_max = max(pb_max, _p2);

    let p3 = transform * vec4( bb.min.x, bb.max.y, bb.max.z, 1.0 );

    if(p3.w < 0){
        return false;
    }

    let _p3 = p3.xyz /p3.w;

    pb_min = min(pb_min, _p3);
    pb_max = max(pb_max, _p3);

    let p4 = transform * vec4( bb.max.x, bb.min.y, bb.min.z, 1.0 );

    if(p4.w < 0){
        return false;
    }

    let _p4 = p4.xyz /p4.w;

    pb_min = min(pb_min, _p4);
    pb_max = max(pb_max, _p4);

    let p5 = transform * vec4( bb.max.x, bb.min.y, bb.max.z, 1.0 );

    if(p5.w < 0){
        return false;
    }

    let _p5 = p5.xyz /p5.w;

    pb_min = min(pb_min, _p5);
    pb_max = max(pb_max, _p5);

    let p6 = transform * vec4( bb.max.x, bb.max.y, bb.min.z, 1.0 );

    if(p6.w < 0){
        return false;
    }

    let _p6 = p6.xyz /p6.w;

    pb_min = min(pb_min, _p6);
    pb_max = max(pb_max, _p6);

    let p7 = transform * vec4( bb.max.x, bb.max.y, bb.max.z, 1.0 );

    if(p7.w < 0){
        return false;
    }

    let _p7 = p7.xyz /p7.w;

    pb_min = min(pb_min, _p7);
    pb_max = max(pb_max, _p7);

    (*output).min = pb_min;
    (*output).max = pb_max;

    return true;
}`,
    [xe.declaration_chunk]
  ),
  q_ = w.from(
    `
fn array_to_aabb3(source : array<f32,6> ) -> ${xe.wgsl_ref}{
    return ${xe.wgsl_ref}(
        vec3<f32>(source[0], source[1], source[2]),
        vec3<f32>(source[3], source[4], source[5])
    );
}
`,
    [xe.declaration_chunk]
  );
class Mr extends Sv {
  constructor() {
    super(...arguments);
    x(this, "compute", new fp());
  }
  static from(t, r, i) {
    const n = new Mr();
    return (
      (n.layout = i), (n.label = t), (n.compute.module = nl.fromCode(r)), n
    );
  }
  static simplified({ label: t = "", code: r, bindings: i, constants: n }) {
    const o = new Mr();
    return (
      (o.label = t),
      (o.compute.module = nl.fromCode(r)),
      (o.layout = dr.forStage(GPUShaderStage.COMPUTE, i)),
      n !== false && (o.compute.constants = n),
      o
    );
  }
  static fromJSON(t) {
    const r = new Mr();
    return r.fromJSON(t), r;
  }
  fromJSON(t) {
    super.fromJSON(t), this.compute.fromJSON(t.compute);
  }
  equals(t) {
    return super.equals(t) && this.compute.equals(t.compute);
  }
  hash() {
    return ot(super.hash(), this.compute.hash());
  }
}
Mr.prototype.isComputePipelineDescriptor = !0;
var Bl, Ol;
const um = class um {
  constructor(e) {
    b(this, Bl);
    b(this, Ol);
    S(this, Bl, e),
      S(
        this,
        Ol,
        Mr.simplified({
          label: e.label,
          code: e.compile(),
          bindings: e.resources.generateBindingsArray(),
        })
      );
  }
  static from({ label: e, body: t, resources: r }) {
    return new um(le.from({ label: e, body: t, resources: r }));
  }
  constructPass({ encoder: e, timer: t, bindings: r }) {
    return e.constructComputePass({
      timer: t,
      pipeline: getProperty(this, Ol),
      bindings: getProperty(this, Bl).resources.generateBindings(r),
    });
  }
  dispatch({
    encoder: e,
    bindings: t,
    group_size_x: r = 1,
    group_size_y: i = 1,
    group_size_z: n = 1,
    timer: o,
  }) {
    const a = this.constructPass({ encoder: e, bindings: t, timer: o });
    a.dispatchWorkgroups(r, i, n), a.end();
  }
  dispatchIndirect({
    encoder: e,
    bindings: t,
    timer: r,
    command: i,
    command_offset: n = 0,
  }) {
    const o = this.constructPass({ encoder: e, bindings: t, timer: r });
    o.dispatchWorkgroupsIndirect(i, n), o.end();
  }
};
(Bl = new WeakMap()), (Ol = new WeakMap());
let Yt = um;
const MT = Struct.from({ count: "atomic<u32>", elements: X.from(vs) }),
  kT = Struct.from({ count: "u32", elements: X.from(vs) }),
  Wd = new ResourecGroup();
Wd.createGroup()
  .addUniform("camera", ce)
  .addStorageBuffer("meshes", X.from(Xe))
  .addStorageBuffer("meshlet_bounds", X.from(Vi))
  .addTexture("texture_hzb");
Wd.createGroup().addStorageBuffer("input", kT);
Wd.createGroup().addStorageBuffer("output_positive", MT, !0);
const RT = le.from({
    resources: Wd,
    body: w.from(
      `
@compute @workgroup_size(256, 1, 1)
fn unpack(@builtin(global_invocation_id) global_id : vec3<u32>){

    let input_index = global_id.x;

    if(input_index > input.count){
        return;
    }

    let meshlet = input.elements[input_index];

    let mesh = meshes[meshlet.mesh];

    let meshlet_index = meshlet.index;

    let bounds_array = meshlet_bounds[ meshlet_index ].bounds;

    let meshlet_bounds = array_to_aabb3(bounds_array);

    let world_bounds = aabb3_project(meshlet_bounds, mesh.transform);

    var view_bounds:${xe.wgsl_ref};

    let valid_bounds = project_aabb_perspective(&view_bounds, world_bounds, camera.view_projection_matrix);

    if(
        valid_bounds && query_depth_from_screen_space_bb(view_bounds, texture_hzb) < 0.0
    ){

        // filter failed
        return;

    }

    let write_offset = atomicAdd(&output_positive.count, 1u);

    output_positive.elements[ write_offset ] = meshlet;
}`,
      [xe.declaration_chunk, q_, Yv, yp, jv, wp, $_]
    ),
  }),
  LT = new Yt(RT);
class PT {
  constructor() {
    x(this, "timer");
    x(this, "scene");
    x(this, "input_meshlets", -1);
    x(this, "output_meshlets", -1);
    x(this, "command", -1);
    x(this, "camera", -1);
    x(this, "texture_hzb", -1);
  }
}
const BT = (s, e, t) => {
    const r = t.encoder,
      i = e.get(s.input_meshlets),
      n = e.get(s.output_meshlets),
      o = e.get(s.command),
      a = e.get(s.texture_hzb),
      c = e.get(s.camera),
      _ = s.scene,
      u = s.timer;
    LT.dispatchIndirect({
      encoder: r,
      command: o,
      timer: u,
      bindings: {
        camera: c,
        meshes: _.instance_buffer,
        meshlet_bounds: _.geometries.meshlet.buffer_bounds,
        texture_hzb: a.obtainView(),
        input: i,
        output_positive: n,
      },
    });
  },
  Ut = Struct.from(
    {
      index_address: "u32",
      vertex_address: "u32",
      index_count: "u32",
      bounding_sphere: "vec4<f32>",
      bounding_box: "array<f32,6>",
    },
    "GeometryMetadata"
  ),
  xs = Struct.from({ mesh: "u32", index: "u32" }),
  qt = Struct.from(
    {
      position: "array<f32,3>",
      normal: "array<f32,3>",
      tangent: "array<f32,4>",
      uv: "array<f32,2>",
    },
    "StandardVertex"
  ),
  Xv = w.from(`
fn clip_triangle_in_frustum(v0:vec4<f32>, v1:vec4<f32>, v2:vec4<f32>) -> bool{
   

    if(v0.x < -v0.w && v1.x < -v1.w && v2.x < -v2.w){
        return false;
    }

    if(v0.x > v0.w && v1.x > v1.w && v2.x > v2.w){
        return false;
    }

    if(v0.y < -v0.w && v1.y < -v1.w && v2.y < -v2.w){
        return false;
    }

    if(v0.y > v0.w && v1.y > v1.w && v2.y > v2.w){
        return false;
    }

    if(v0.z < 0.0 && v1.z < 0.0 && v2.z < 0.0){
        return false;
    }

    if(v0.z > v0.w && v1.z > v1.w && v2.z > v2.w){
        return false;
    }

    return true;
}`),
  Wv = w.from(
    `
fn aabb3_from_triangle(a:vec3<f32>, b:vec3<f32>, c:vec3<f32>) -> ${xe.wgsl_ref}{
    return ${xe.wgsl_ref}(
        min(a, min(b, c)),
        max(a, max(b, c)),
    );
}
`,
    [xe.declaration_chunk]
  ),
  Jv = w.from(`
fn triangle_orientation_and_zero_area(a:vec4<f32>, b:vec4<f32>, c:vec4<f32>) -> bool{
        
    let det = determinant(
        mat3x3(
            a.xyw, 
            b.xyw,
            c.xyw
        )
    );
    
    return det <= 0.0f;
}
    `),
  OT = w.from(`
fn texture_space_bounds_overlaps_pixel_centers(bounds_min:vec2<f32>, bounds_max:vec2<f32>) -> bool{

    // Subpixel precision, see https://www.youtube.com/watch?v=JKTfAgv3Vlo Arseny Kapulkine, working on Niagara
    const sbprec = 1.0 / 256;
    
    let span = round(bounds_max + sbprec) - round(bounds_min - sbprec);
    
    let span_min = min( span.x, span.y );

    // TODO we need to check if all vertices are in front of the view plane

    return span_min <= 0.0;
}
    `),
  Zv = w.from(
    `
fn triangle_smaller_than_pixel(

    a:vec2<f32>,
    b:vec2<f32>,
    c:vec2<f32>,
    resolution: vec2<u32> 
    
) -> bool{
    let resolution_f = vec2<f32>(resolution);

    let clip_min = min( a, min( b, c ) );
    let clip_max = max( a, max( b, c ) );

    let bounds_view_min = resolution_f * (clip_min * 0.5 + 0.5);
    let bounds_view_max = resolution_f * (clip_max * 0.5 + 0.5);
    
    // TODO we need to check if all vertices are in front of the view plane

    return texture_space_bounds_overlaps_pixel_centers(bounds_view_min, bounds_view_max );
}
`,
    [OT]
  ),
  hn = Struct.from(
    {
      projection_matrix: "mat4x4<f32>",
      width: "u32",
      height: "u32",
      frame_index: "u32",
      jitter: "vec2<f32>",
      jitter_delta: "vec2<f32>",
    },
    "ViewUniform"
  ),
  FT = Struct.from({ count: "atomic<u32>", elements: X.from(xs) }),
  DT = Struct.from({ count: "u32", elements: X.from(xs) }),
  Jd = new ResourecGroup();
Jd.createGroup()
  .addUniform("camera", ce)
  .addUniform("view", hn)
  .addStorageBuffer("meshes", X.from(Xe))
  .addStorageBuffer("geometries", X.from(Ut))
  .addStorageBuffer("geometry_indices", X.u32)
  .addStorageBuffer("geometry_vertices", X.from(qt))
  .addTexture("texture_hzb");
Jd.createGroup().addStorageBuffer("input", DT);
Jd.createGroup().addStorageBuffer("output", FT, !0);
const Kv = w.from(
    `
fn read_triangle_vertex_positions(
    a:ptr<function,vec3<f32>>,
    b:ptr<function,vec3<f32>>,
    c:ptr<function,vec3<f32>>,
    geometry_index:u32,
    triangle_index:u32
) {
        
    let geometry = geometries[geometry_index];
    
    let geometry_index_offset = geometry.index_address + triangle_index * 3u;

    let vertex_a_id = geometry_indices[geometry_index_offset];
    let vertex_b_id = geometry_indices[geometry_index_offset + 1];
    let vertex_c_id = geometry_indices[geometry_index_offset + 2];

    let vertices_address = geometry.vertex_address;

    let absolute_vertex_index_0 = vertices_address + vertex_a_id;
    let absolute_vertex_index_1 = vertices_address + vertex_b_id;
    let absolute_vertex_index_2 = vertices_address + vertex_c_id;

    let vertex_0 = geometry_vertices[absolute_vertex_index_0];
    let vertex_1 = geometry_vertices[absolute_vertex_index_1];
    let vertex_2 = geometry_vertices[absolute_vertex_index_2];

    *a = f32_array_as_vec3(vertex_0.position);
    *b = f32_array_as_vec3(vertex_1.position);
    *c = f32_array_as_vec3(vertex_2.position);
    
}
    `,
    [ri]
  ),
  GT = w.from(
    `
@compute @workgroup_size(256, 1, 1)
fn unpack(@builtin(global_invocation_id) global_id : vec3<u32>){
    
    if(global_id.x >= input.count){
        return;
    }
    
    let triangle = input.elements[global_id.x];
    
    let mesh = meshes[triangle.mesh];
    
    let geometry_index = mesh.geometry;
    let mesh_transform = mesh.transform;
    
    var geometry_vertex_position_0:vec3<f32>;
    var geometry_vertex_position_1:vec3<f32>;
    var geometry_vertex_position_2:vec3<f32>;
    
    read_triangle_vertex_positions(
        &geometry_vertex_position_0,
        &geometry_vertex_position_1,
        &geometry_vertex_position_2,
        geometry_index,
        triangle.index
    );

    // project to clip space
    let projection_matrix = camera.view_projection_matrix * mesh_transform;

    let projected_vertex_position_0 = projection_matrix * vec4<f32>(geometry_vertex_position_0, 1.0);
    let projected_vertex_position_1 = projection_matrix * vec4<f32>(geometry_vertex_position_1, 1.0);
    let projected_vertex_position_2 = projection_matrix * vec4<f32>(geometry_vertex_position_2, 1.0);

    if(triangle_orientation_and_zero_area(projected_vertex_position_0, projected_vertex_position_1, projected_vertex_position_2)){
        return;
    }
    
    // perform frustum check in clip space
    if(!clip_triangle_in_frustum(projected_vertex_position_0, projected_vertex_position_1, projected_vertex_position_2)){
        return;
    }
    
    if(min(projected_vertex_position_0.w, min(projected_vertex_position_1.w, projected_vertex_position_2.w)) > 0.0 ){
                   
        let projected_vertex_0 = projected_vertex_position_0.xyz / projected_vertex_position_0.w;
        let projected_vertex_1 = projected_vertex_position_1.xyz / projected_vertex_position_1.w;
        let projected_vertex_2 = projected_vertex_position_2.xyz / projected_vertex_position_2.w;
    
        let resolution = vec2(view.width, view.height);
    
        if( triangle_smaller_than_pixel(projected_vertex_0.xy, projected_vertex_1.xy, projected_vertex_2.xy, resolution)){
            // does not cover any pixels
            return;
        }
    
        // test against HZB
        let view_bounds = aabb3_from_triangle(projected_vertex_0, projected_vertex_1, projected_vertex_2);
    
        if(query_depth_from_screen_space_bb(view_bounds, texture_hzb) < 0.0){
            //hzb test failed
            return;
        }
        
    }

    let write_offset = atomicAdd(&output.count, 1u);
    
    output.elements[ write_offset ] = triangle;
}
`,
    [$_, Wv, ri, Xv, Zv, Kv, Jv]
  ),
  VT = new Yt(
    le.from({ label: "HZB / Filter Triangles", resources: Jd, body: GT })
  );
class $T {
  constructor() {
    x(this, "input_triangles", -1);
    x(this, "output_triangles", -1);
    x(this, "camera", -1);
    x(this, "hzb", -1);
    x(this, "view");
    x(this, "timer");
    x(this, "command", -1);
  }
}
function qT(s, e, t) {
  const r = t.encoder,
    i = s.timer,
    n = s.view,
    o = e.get(s.camera),
    a = e.get(s.hzb),
    c = e.get(s.input_triangles),
    _ = e.get(s.output_triangles),
    u = e.get(s.command),
    d = n.scene;
  VT.dispatchIndirect({
    encoder: r,
    command: u,
    timer: i,
    bindings: {
      camera: o,
      view: n.uniform_buffer,
      meshes: d.instance_buffer,
      geometries: d.geometries.buffer_metadata,
      geometry_indices: d.geometries.buffer_indices,
      geometry_vertices: d.geometries.buffer_vertices,
      texture_hzb: a.obtainView(),
      input: c,
      output: _,
    },
  });
}
const bu = Struct.from(
  {
    vertexCount: "u32",
    instanceCount: "u32",
    firstVertex: "u32",
    firstInstance: "u32",
  },
  "UnindexedDrawCommand"
);
class HT {
  constructor() {
    x(this, "command", -1);
    x(this, "input", -1);
  }
}
let YT = class Qv {
  constructor() {
    x(this, "pattern", "");
    x(this, "device");
  }
  static from(e, t) {
    const r = new Qv();
    return (r.device = e), (r.pattern = t), r;
  }
  equals(e) {
    return this.pattern === e.pattern && this.device === e.device;
  }
  hash() {
    return Re(this.pattern);
  }
};
function jT(s) {
  const e = `
        ${bu.wgsl_declaration}
        
@group(0) @binding(0) var<storage, read> input : u32;
@group(0) @binding(1) var<storage, read_write> command : ${bu.wgsl_ref};

@compute @workgroup_size(1, 1, 1)
fn main(){
    
    command = ${bu.wgsl_ref}(${s.pattern});

}
        `;
  return Mr.simplified({
    label: "IndirectDrawCommandBuildPass",
    code: e,
    bindings: [[Ee.readOnlyStorage, Ee.storage]],
  });
}
const XT = new pr({
  capacity: 1024,
  keyEqualityFunction: ko,
  keyHashFunction: Kr,
});
function xg(s, e, t) {
  const r = new HT(),
    i = Wt(16, bu.size),
    n = (a, c, _) => {
      const u = c.get(a.input),
        d = c.get(a.command),
        p = _.graphics.device,
        v = _.encoder,
        f = YT.from(p, t),
        m = XT.getOrCompute(f, jT),
        g = v.constructComputePass({
          pipeline: m,
          bindings: [
            [
              { buffer: u, size: Uint32Array.BYTES_PER_ELEMENT },
              { buffer: d, size: i },
            ],
          ],
        });
      g.dispatchWorkgroups(1), g.end();
    },
    o = s.add("build indirect draw command", r, n);
  return (
    (r.input = o.read(e)),
    (r.command = o.create(
      "command",
      je.from(i, GPUBufferUsage.STORAGE | GPUBufferUsage.INDIRECT)
    )),
    r.command
  );
}
function Zt(s, e, t, r) {
  const i = s.import_resource(
      "stat buffer",
      je.from(e.stat_buffer.size, e.stat_buffer.usage),
      e.stat_buffer
    ),
    n = (c, _, u) => {
      e.record(u.encoder, t, _.get(c.source));
    },
    o = {},
    a = s.add(`Record stat ${t}`, o, n);
  (o.source = a.read(r)), a.write(i);
}
const zo = Struct.from(
  { workgroupCountX: "u32", workgroupCountY: "u32", workgroupCountZ: "u32" },
  "Workgroups"
);
function WT(s) {
  const t = s.device.limits.maxComputeWorkgroupsPerDimension,
    r = `
        ${zo.wgsl_declaration}
        
@group(0) @binding(0) var<storage, read> input : u32;
@group(0) @binding(1) var<storage, read_write> command : ${zo.wgsl_ref};

@compute @workgroup_size(1, 1, 1)
fn main(){

    let desired_dispatch_x = u32( ceil( f32(input) / ${s.workgroup_size.toFixed(
      0
    )} ) );

    // clamp, it's generally better to be wrong than to fail
    let dispatch_x = min( ${t}, desired_dispatch_x );
    
    command = ${zo.wgsl_ref}(dispatch_x, 1u, 1u);

}
        `;
  return Mr.simplified({
    label: "IndirectComputeCommandBuildPass",
    code: r,
    bindings: [[Ee.readOnlyStorage, Ee.storage]],
  });
}
class Tp {
  constructor() {
    x(this, "device");
    x(this, "workgroup_size", 256);
  }
  static from(e, t = 256) {
    const r = new Tp();
    return (r.device = e), (r.workgroup_size = t), r;
  }
  equals(e) {
    return this.device === e.device && this.workgroup_size === e.workgroup_size;
  }
  hash() {
    return this.workgroup_size;
  }
}
const JT = new pr({
  capacity: 1024,
  keyEqualityFunction: ko,
  keyHashFunction: Kr,
});
class ZT {
  constructor() {
    x(this, "command", -1);
    x(this, "input", -1);
  }
}
function Is(s, e, t = 256) {
  const r = new ZT(),
    i = Wt(16, zo.size),
    n = (a, c, _) => {
      const u = c.get(a.input),
        d = c.get(a.command),
        p = _.graphics.device,
        v = _.encoder,
        f = Tp.from(p, t),
        m = JT.getOrCompute(f, WT),
        g = v.constructComputePass({
          pipeline: m,
          bindings: [
            [
              { buffer: u, size: Uint32Array.BYTES_PER_ELEMENT },
              { buffer: d, size: i },
            ],
          ],
        });
      g.dispatchWorkgroups(1), g.end();
    },
    o = s.add("build indirect dispatch command", r, n);
  return (
    (r.command = o.create(
      "command",
      je.from(
        i,
        GPUBufferUsage.STORAGE |
          GPUBufferUsage.COPY_SRC |
          GPUBufferUsage.INDIRECT
      )
    )),
    (r.input = o.read(e)),
    r.command
  );
}
async function e2({
  device: s,
  buffer: e,
  buffer_offset: t = 0,
  buffer_size: r = e.size,
  callback: i,
}) {
  const n = s.createBuffer({
      label: "temp",
      size: r,
      usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
    }),
    o = s.createCommandEncoder();
  return (
    o.copyBufferToBuffer(e, t, n, 0, n.size),
    s.queue.submit([o.finish()]),
    n.mapAsync(GPUMapMode.READ, 0, n.size).then(() => {
      const a = n.getMappedRange(0, n.size),
        c = i(a);
      return n.destroy(), c;
    })
  );
}
const KT = 10 * 1024 * 1024;
async function Sf({
  buffer: s,
  buffer_offset: e = 0,
  buffer_size: t,
  device: r,
  callback: i,
}) {
  const n = t ?? s.size - e;
  if (
    (n >= KT && ap(`Reading large amount of data from buffer '${s.label}'`),
    s.mapState === "mapped")
  ) {
    const o = s.getMappedRange(e, n);
    return i(o);
  } else {
    if (s.mapState === "unmapped" && s.usage & GPUBufferUsage.MAP_READ)
      return s.mapAsync(GPUMapMode.READ, e, n).then(() => {
        const o = s.getMappedRange(e, n),
          a = i(o);
        return s.unmap(), a;
      });
    if (s.usage & GPUBufferUsage.COPY_SRC)
      return e2({
        device: r,
        buffer: s,
        callback: i,
        buffer_offset: e,
        buffer_size: n,
      });
    throw new Error(`Source buffer '${s.label}' is not CPU readable`);
  }
}
var Sr, Lt, Yn, hi, fi, Qi, ka, _d, r2;
class t2 {
  constructor(e, t, r = 16) {
    b(this, _d);
    b(this, Sr, 16);
    b(this, Lt, 1);
    b(this, Yn);
    b(this, hi);
    b(this, fi);
    b(this, Qi);
    b(this, ka);
    S(this, ka, e),
      S(this, Lt, t),
      S(this, Sr, r),
      S(this, Yn, new Uint32Array(t)),
      S(
        this,
        fi,
        new Uint32Array(getProperty(this, Lt) * getProperty(this, Sr))
      ),
      S(this, Qi, new Uint32Array(getProperty(this, Lt))),
      S(
        this,
        hi,
        e.createBuffer({
          label: "Stat Record buffer",
          usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST,
          size:
            getProperty(this, Lt) *
            Uint32Array.BYTES_PER_ELEMENT *
            getProperty(this, Sr),
        })
      );
  }
  get columns() {
    return getProperty(this, Lt);
  }
  get stat_buffer() {
    return getProperty(this, hi);
  }
  getLastRecord(e) {
    const r =
      (getProperty(this, Yn)[e] - 1 + getProperty(this, Sr)) %
      getProperty(this, Sr);
    return getProperty(this, fi)[r * getProperty(this, Lt) + e];
  }
  getCurrentMax(e) {
    let t = 0;
    for (let r = 0; r < getProperty(this, Sr); r++) {
      const i = getProperty(this, fi)[r * getProperty(this, Lt) + e];
      i > t && (t = i);
    }
    return t;
  }
  getGlobalMax(e) {
    return getProperty(this, Qi)[e];
  }
  setGlobalMax(e, t) {
    getProperty(this, Qi)[e] = t;
  }
  async readback() {
    return e2({
      device: getProperty(this, ka),
      buffer: getProperty(this, hi),
      callback: (e) => {
        const t = new Uint32Array(e);
        P(this, _d, r2).call(this, t);
      },
    });
  }
  upload() {
    getProperty(this, ka).queue.writeBuffer(
      getProperty(this, hi),
      0,
      getProperty(this, fi).buffer
    );
  }
  record(e, t, r, i = 0) {
    if (getProperty(this, hi).mapState !== "unmapped") return;
    const n = getProperty(this, Yn)[t];
    getProperty(this, Yn)[t] = (n + 1) % getProperty(this, Sr);
    const o = Uint32Array.BYTES_PER_ELEMENT;
    e.copyBufferToBuffer(
      r,
      i,
      getProperty(this, hi),
      (n * getProperty(this, Lt) + t) * o,
      o
    );
  }
  clearColumn(e) {
    for (let t = 0; t < getProperty(this, Sr); t++) {
      const r = t * getProperty(this, Lt) + e;
      getProperty(this, fi)[r] = 0;
    }
    (getProperty(this, Qi)[e] = 0), this.upload();
  }
  destroy() {
    getProperty(this, hi).destroy();
  }
}
(Sr = new WeakMap()),
  (Lt = new WeakMap()),
  (Yn = new WeakMap()),
  (hi = new WeakMap()),
  (fi = new WeakMap()),
  (Qi = new WeakMap()),
  (ka = new WeakMap()),
  (_d = new WeakSet()),
  (r2 = function (e) {
    getProperty(this, fi).set(e);
    for (let t = 0; t < getProperty(this, Sr); t++)
      for (let r = 0; r < getProperty(this, Lt); r++) {
        const i = getProperty(this, fi)[t * getProperty(this, Lt) + r];
        i > getProperty(this, Qi)[r] && (getProperty(this, Qi)[r] = i);
      }
  });
function i2(s, e, t, r, i, n, o, a) {
  const c = -a,
    _ = Math.sin(c),
    u = Math.cos(c);
  (s[0] = r * u),
    (s[1] = r * _),
    (s[2] = -r * (u * n + _ * o) + n + e),
    (s[3] = -i * _),
    (s[4] = i * u),
    (s[5] = -i * (-_ * n + u * o) + o + t),
    (s[6] = 0),
    (s[7] = 0),
    (s[8] = 1);
}
function QT(s) {
  const e = s.constructor;
  return (
    e === Uint8ClampedArray ||
    e === Uint8Array ||
    e === Uint16Array ||
    e === Uint32Array ||
    e === Int8Array ||
    e === Int16Array ||
    e === Int32Array
  );
}
function Mt(s, e, t, r, i, n) {
  const o = e.width,
    a = e.height,
    c = s.width,
    _ = s.height;
  if (o !== c || a !== _)
    throw new Error("Dimensions of input and output are incompatible");
  const u = e.itemSize,
    d = s.itemSize,
    h = e.data,
    p = s.data,
    v = o * a;
  if (QT(p))
    for (let f = 0; f < v; f++) {
      const m = f * u + r,
        g = f * d + t,
        E = h[m];
      p[g] = Math.round(E * i + n);
    }
  else
    for (let f = 0; f < v; f++) {
      const m = f * u + r,
        g = f * d + t,
        E = h[m];
      p[g] = E * i + n;
    }
}
function eE(s) {
  let e = 1,
    t = 0;
  switch (s) {
    case Uint16Array:
      e = 0.0038910505836575876;
      break;
    case Uint32Array:
      e = 5937181414556033e-23;
      break;
    case Int8Array:
      (e = 1), (t = 127);
      break;
    case Int16Array:
      (e = 0.0038910505836575876), (t = 127);
      break;
    case Int32Array:
      (e = 5937181414556033e-23), (t = 127);
      break;
    case Float32Array:
    case Float64Array:
      e = 255;
      break;
  }
  return { gradient: e, intercept: t };
}
function tE(s, e) {
  if (e.width !== s.width || e.height !== s.height)
    throw new Error("Dimensions of source and destination are incompatible");
  if (s.itemSize !== 4)
    throw new Error(
      `Destination must have 4 channels exactly, instead got '${s.itemSize}'`
    );
  const { gradient: t, intercept: r } = eE(e.data.constructor),
    i = e.itemSize;
  if (r === 0 && t === 1 && i === 4) {
    s.data.set(e.data);
    return;
  }
  i === 1
    ? (Mt(s, e, 0, 0, t, r),
      Mt(s, e, 1, 0, t, r),
      Mt(s, e, 2, 0, t, r),
      s.channelFill(3, 255))
    : i === 2
    ? (Mt(s, e, 0, 0, t, r),
      Mt(s, e, 1, 0, t, r),
      Mt(s, e, 2, 0, t, r),
      Mt(s, e, 3, 1, t, r))
    : i === 3
    ? (Mt(s, e, 0, 0, t, r),
      Mt(s, e, 1, 1, t, r),
      Mt(s, e, 2, 2, t, r),
      s.channelFill(3, 255))
    : i === 4 &&
      (Mt(s, e, 0, 0, t, r),
      Mt(s, e, 1, 1, t, r),
      Mt(s, e, 2, 2, t, r),
      Mt(s, e, 3, 3, t, r));
}
function rE(s, e) {
  const t = s.width,
    r = s.height;
  if (
    (e.width !== t && (e.width = t),
    e.height !== r && (e.height = r),
    r === 0 || t === 0)
  )
    return;
  const i = e.getContext("2d"),
    n = i.createImageData(t, r),
    o = n.data,
    a = new et(o, 4, t, r);
  tE(a, s), i.putImageData(n, 0, 0);
}
function s2(s, e = 255, t = 0, r = document.createElement("canvas")) {
  const i = s.data,
    n = et.uint8clamped(4, s.width, s.height),
    o = s.width,
    a = s.height,
    c = n.data,
    _ = s.itemSize;
  if (_ === 4 && t === 0 && e === 1) c.set(i);
  else {
    if (_ < 4) {
      const u = o * a * 4;
      for (let d = 3; d < u; d += 4) c[d] = 255;
    }
    if (_ === 1) {
      let u = 0;
      for (let d = 0; d < a; d++)
        for (let h = 0; h < o; h++) {
          const p = d * o + h,
            v = i[p],
            f = Math.round((v + t) * e);
          (c[u + 0] = f), (c[u + 1] = f), (c[u + 2] = f), (u += 4);
        }
    } else {
      let u = 0;
      for (let d = 0; d < a; d++)
        for (let h = 0; h < o; h++) {
          const p = (d * o + h) * _;
          for (let v = 0; v < _; v++) {
            const f = i[p + v],
              m = Math.round((f + t) * e);
            c[u + v] = m;
          }
          u += 4;
        }
    }
  }
  return rE(n, r), r;
}
function n2(s, e) {
  const t = s[0],
    r = s[3],
    i = s[1],
    n = s[4],
    o = s[2],
    a = s[5],
    c = "matrix(" + t + "," + r + "," + i + "," + n + "," + o + "," + a + ")",
    _ = e.style;
  _.transform = c;
}
const Ep = w.from(`
fn safe_sqrt(x:f32) -> f32{
    return sqrt(max(0.0, x));
}
    `),
  iE = w.from(
    `
fn cone_cosine_from_roughness(linear_roughness:f32) -> f32{
  /* From linear roughness to GGX roughness input. */
  let m = pow2(linear_roughness);
  /* Chosen so that roughness of 1.0 maps to half pi cone aperture. */
  let cutoff_value = mix(0.01, 0.14, m);
  /* Inversion of the spherical gaussian. This gives the cutoff for the half angle from N.H. */
  let half_angle_cos = 1.0 + (log(cutoff_value) * pow2(m)) / 2.0;
  let half_angle_sin = safe_sqrt(1.0 - pow2(half_angle_cos));
  /* Use cosine rule to avoid acos. Return cos(2 * half_angle). */
  return pow2(half_angle_cos) - pow2(half_angle_sin);
}
    `,
    [Cc, Ep]
  ),
  sE = w.from(`
fn vdc_radical_inverse(bits:u32) -> f32{
    var b = bits;

    b = (b << 16u) | (b >> 16u);
    b = ((b & 0x55555555u) << 1u) | ((b & 0xAAAAAAAAu) >> 1u);
    b = ((b & 0x33333333u) << 2u) | ((b & 0xCCCCCCCCu) >> 2u);
    b = ((b & 0x0F0F0F0Fu) << 4u) | ((b & 0xF0F0F0F0u) >> 4u);
    b = ((b & 0x00FF00FFu) << 8u) | ((b & 0xFF00FF00u) >> 8u);
    
    return f32(b) * 2.3283064365386963e-10;
}
    `),
  nE = w.from(
    `
fn hammersley_2d( i:u32, numSamples:u32 ) -> vec2<f32>{   
    return vec2(f32(i) / f32(numSamples), vdc_radical_inverse(i));
} 
    `,
    [sE]
  ),
  Zd = w.from(`
fn build_orthonormal_matrix_n( n : vec3<f32> ) -> mat3x3<f32>{
    var T: vec3<f32>;
    var B: vec3<f32>;
    
    if(n.z < 0.0){
    
        let a = 1.0 / (1.0 - n.z);
        let b = n.x * n.y * a;
        
        T = vec3(1.0 - n.x * n.x * a, -b, n.x);
        B = vec3(b, n.y * n.y * a - 1.0, -n.y);
        
    }else{
        let a = 1.0 / (1.0 + n.z);
        let b = -n.x * n.y * a;
        
        T = vec3(1.0 - n.x * n.x * a, b, -n.x);
        B = vec3(b, 1.0 - n.y * n.y * a, -n.y);
        
    }
    
    return mat3x3(
        T,
        B,
        n
    );
}
`),
  o2 = w.from(
    `
fn uniform_sample_cone(uv:vec2<f32>, cos_theta_max: f32) -> vec3<f32>{
    let cosTheta = (1.0 - uv.x) + uv.x * cos_theta_max;
    let sinTheta = sqrt(1.0 - cosTheta * cosTheta);
    let phi = uv.y * 2 * PI;
    
    return vec3(
        cos(phi) * sinTheta,
        sin(phi) * sinTheta,
        cosTheta
    );
}    
    `,
    [Jt]
  ),
  oE = w.from(`
fn safe_rcp( x: f32 ) -> f32{
    
    if(x == 0.0){
        return 0.0;
    }
    
    return 1.0 / x;
}    
    `),
  Rc = w.from(`
fn texel_coordinate_to_uv(coordinate: vec2<f32>, texture_size: vec2<u32>) -> vec2<f32>{
    return (coordinate + 0.5) / vec2<f32>(texture_size);
}
    `),
  aE = w.from(
    `
fn reflection_sample_weight(out_direction: vec3<f32>, in_direction:vec3<f32>, linear_roughness: f32 ) -> f32{

  let cos_theta = saturate(dot(out_direction, in_direction));

  /* From linear roughness to GGX roughness input. */
  let m = pow2(linear_roughness);
  
  /* Map GGX roughness to spherical gaussian sharpness.
   * From "SG Series Part 4: Specular Lighting From an SG Light Source" by MJP
   * https://therealmjp.github.io/posts/sg-series-part-4-specular-lighting-from-an-sg-light-source/
   */
  let N = out_direction;
  let H = normalize(out_direction + in_direction);
  let NH = saturate(dot(N, H));
  
  /* GGX. */
  // return exp(-square(acos(NH) / m));
  /* Spherical Gaussian. */
  return exp(2.0 * (NH - 1.0) / pow2(m));
}    
    `,
    [Cc]
  ),
  cE = w.from(`
fn roughness_from_relative_mip(prev_mip_roughness:f32, curr_mip_roughness:f32) -> f32 {
  /* The exponent should be 2 but result is a bit less blurry than expected in practice. */
  const exponent = 3.0;

  /* From linear roughness to GGX roughness input. */
  let m_prev = pow(prev_mip_roughness, exponent);
  let m_curr = pow(curr_mip_roughness, exponent);

  /* Given that spherical gaussians are very close to regular gaussian in 1D,
   * we reuse the same rule for successive convolution (i.e: \`G(x,a) X G(x,b) = G(x,a+b)\`).
   * While this isn't technically correct, this still works quite well in practice. */
  let m_target = m_curr - m_prev;

  /* From GGX roughness input to linear roughness. */
  return pow(m_target, 1.0 / exponent);
}
`),
  lE = w.from(
    `
fn sphere_probe_lod_to_roughness(lod: f32) -> f32{

  /* Inverse of sphere_probe_roughness_to_lod. */
  let mip_ratio = lod / f32(${dp} - 1);
  let a = mip_ratio;
  
  const  b = 0.6; /* Factor of ratio. */
  const  c = 0.4; /* Factor of ratio_sqrt. */
  
  let b2 = pow2(b);
  let c2 = pow2(c);
  let c4 = pow2(c2);
  
  /* In wolfram alpha we trust. */
  // NOTE: seems like a basic quadratic ¯_(ツ)_/¯.
  let ratio = (-sqrt(4.0 * a * b * c2 + c4) + 2.0 * a * b + c2) / (2.0 * b2);
  
  return ratio * ${yv};

}
    `,
    [Cc]
  ),
  a2 = new ResourecGroup();
a2.createGroup()
  .addUniform("read_lod", "u32")
  .addTexture("input")
  .addStorageTexture("output", "rgba16float");
const _E = 196,
  uE = w.from(
    `
@compute @workgroup_size(16,16,1)
fn main(
    @builtin(global_invocation_id) global_invocation_id : vec3<u32>,
){
    let output_size = textureDimensions(output);

    let output_texel_i = global_invocation_id.xy;

    if(any(output_texel_i >= output_size)){
        return;
    }

     /* From mip to linear roughness (same as UI). */
    let prev_mip_roughness = sphere_probe_lod_to_roughness(f32(read_lod));
    let curr_mip_roughness = sphere_probe_lod_to_roughness(f32(read_lod + 1));
    /* In order to reduce the sample count, we sample the content of previous mip level.
    * But this one has already been convolved. So we have to derive the equivalent roughness
    * that produces the same result. */
    let mip_roughness = roughness_from_relative_mip(prev_mip_roughness, curr_mip_roughness);
    /* Clamp to avoid numerical imprecision. */
    let mip_roughness_clamped = max(mip_roughness, ${Lw});
    let cone_cos = cone_cosine_from_roughness(mip_roughness_clamped);

    let out_uv = texel_coordinate_to_uv(vec2<f32>(output_texel_i), output_size);
    let out_direction = octahedral_decode_normal( out_uv );

    let basis = build_orthonormal_matrix_n(out_direction);

    var weight_accum = 0.0;
    var radiance_accum = vec4(0.0);

    const sample_count = ${_E};

    let input_size = textureDimensions(input).xy;

    for (var i = 0u; i < sample_count; i++) {
        let rand = hammersley_2d(i, sample_count);

        let in_direction = normalize(basis * uniform_sample_cone(rand, cone_cos));

        let radiance = texture_octahedral_sample_bilinear(input, vec2(0u), input_size.x, in_direction, 0);

        let weight = reflection_sample_weight(out_direction, in_direction, mip_roughness_clamped);

        radiance_accum += radiance * weight;
        weight_accum += weight;
    }

    let out_radiance = radiance_accum * safe_rcp(weight_accum);

    textureStore(output, output_texel_i, out_radiance);
}
    `,
    [lE, nE, Zd, oE, o2, Rc, Vd, Do, _p, aE, iE, cE]
  ),
  dE = new Yt(
    le.from({ label: "Convolve reflection map", body: uE, resources: a2 })
  );
function hE({ graph: s, map: e }) {
  const t = {};
  function r(n, o, a) {
    const c = o.get(n.map),
      _ = c.descriptor.mipLevelCount,
      u = a.encoder;
    for (let d = 1; d < _; d++) {
      const h = c.size[0] >> d,
        p = c.size[1] >> d;
      dE.dispatch({
        encoder: u,
        group_size_x: Math.ceil(h / 16),
        group_size_y: Math.ceil(p / 16),
        bindings: {
          read_lod: u.allocateTransientValueBuffer(Ce.u32, d - 1),
          input: c.obtainView(
            Ve.from({ baseMipLevel: d - 1, mipLevelCount: 1 })
          ),
          output: c.obtainView(Ve.from({ baseMipLevel: d, mipLevelCount: 1 })),
        },
      });
    }
  }
  const i = s.add("filter env map", t, r);
  return (t.map = i.read(e)), i.write(e);
}
const Ap = 0.8,
  Go = w.from("const ATMOSPHERE_HEIGHT   = 100000;"),
  Kd = w.from("const C_MIE_SCATTERING               = vec3(3.996) * 1e-6;"),
  Sp = w.from("const C_MIE_ABSORPTION               = vec3(4.4) * 1e-6;"),
  Qd = w.from(
    "const C_RAYLEIGH          = vec3(5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5);"
  ),
  fE = w.from("const ATMOSPHERE_DENSITY  = 1;"),
  zp = w.from(
    "const C_OZONE             = vec3(0.650,  1.881,  0.085) * 1e-6;"
  ),
  c2 = w.from(
    `
fn compute_extinction(densities: vec3<f32>) -> vec3<f32>{
    // Note that Mie results in slightly more light absorption than scattering, about 10%
	let ozone_density = densities.z;
	let ozone_absorption =  ozone_density * C_OZONE;
	
	let mie_density = densities.y;
	let mie_absorption = mie_density * C_MIE_ABSORPTION;
	let mie_scattering = mie_density * C_MIE_SCATTERING;
	
	// note - taken from the Hillaire's atmosphere code: https://github.com/sebh/UnrealEngineSkyAtmosphere/blob/183ead5bdacc701b3b626347a680a2f3cd3d4fbd/Resources/RenderSkyCommon.hlsl#L248
	let rayleigh_absorption = 0.0;
	let rayleigh_scattering = densities.x * C_RAYLEIGH;
	
	let extinction = rayleigh_scattering + rayleigh_absorption +  mie_scattering + mie_absorption + ozone_absorption;
	
	return extinction;
}
    `,
    [Qd, Sp, Kd, zp]
  ),
  l2 = w.from(
    `
fn absorb ( optical_depth:vec3<f32> ) -> vec3<f32>
{	
	let extinction = compute_extinction(optical_depth);
	
	return exp(- extinction * ATMOSPHERE_DENSITY);
}
    `,
    [fE, c2]
  ),
  _2 = w.from("const MIE_HEIGHT     = 1.2e3;"),
  pE = w.from(
    `
fn density_mie ( h:f32 ) -> f32
{
	return exp(-max(0, h / MIE_HEIGHT));
}
`,
    [_2]
  ),
  mE = w.from(`
fn density_ozone ( height:f32 ) -> f32
{
    var den = 0.0f;
    
    if (height >= 10000.0f && height < 25000.0f) {
    
        den = 1.0f / 15000.0f * height - 2.0f / 3.0f;
        
    } else if (height >= 25000 && height < 40000) {
    
        den = -(1.0f / 15000.0f * height - 8.0f / 3.0f);
        
    }
    
    return den;
}
`),
  u2 = w.from("const RAYLEIGH_HEIGHT     = 8e3;"),
  gE = w.from(
    `
fn density_rayleigh (height:f32) ->f32
{
	return exp(-max(0, height / RAYLEIGH_HEIGHT));
}`,
    [u2]
  ),
  H_ = w.from(
    `
fn atmosphere_density ( h:f32) -> vec3<f32>
{
	return vec3(density_rayleigh(h), density_mie(h), density_ozone(h));
}
    `,
    [gE, pE, mE]
  ),
  Vo = w.from("const PLANET_CENTER       = vec3(0.0, -PLANET_RADIUS, 0.0);"),
  Lc = w.from("const PLANET_RADIUS       = 6378000;"),
  Y_ = w.from(
    `
fn atmosphere_height ( position_ws:vec3<f32> ) -> f32
{
	return distance(position_ws, PLANET_CENTER) - PLANET_RADIUS;
}
`,
    [Lc, Vo]
  ),
  eh = w.from(`
fn sphere_intersection (
    ray_origin:vec3<f32>,
    ray_direction:vec3<f32>,
    center:vec3<f32>,
    radius:f32
) -> vec2<f32> {
    
	let _rayStart = ray_origin - center;
	let a = dot(ray_direction, ray_direction);
	let b = 2.0 * dot(_rayStart, ray_direction);
	let c = dot(_rayStart, _rayStart) - (radius * radius);
	
	let d2 = b * b - 4 * a * c;
	
	if (d2 < 0)
	{
		return vec2(-1.0);
	}
	
    let d = sqrt(d2);
    
    return vec2(-b - d, -b + d) / (2.0 * a);
	
}
    `),
  Cp = w.from(
    `
fn atmosphere_intersection (rayStart:vec3<f32>,  rayDir:vec3<f32>) -> vec2<f32>
{
	return sphere_intersection(rayStart, rayDir, PLANET_CENTER, PLANET_RADIUS + ATMOSPHERE_HEIGHT);
}
`,
    [eh, Vo, Lc, Go]
  ),
  vE = w.from(
    `
fn integrate_optical_depth ( 
    ray_origin:vec3<f32>,
    ray_direction:vec3<f32>,
) -> vec3<f32> {

    /* Parameters for optical depth quadrature.
     * See the comment in ray_optical_depth for more detail.
     * Computed using sympy and following Python code:
     * # from sympy.integrals.quadrature import gauss_laguerre
     * # from sympy import exp
     * # x, w = gauss_laguerre(8, 50)
     * # xend = 25
     * # print([(xi / xend).evalf(10) for xi in x])
     * # print([(wi * exp(xi) / xend).evalf(10) for xi, wi in zip(x, w)])
     */
     const  quadrature_steps = 8;
     
     const  quadrature_nodes = array<f32,8>(
        0.006811185292f,
        0.03614807107f,
        0.09004346519f,
        0.1706680068f,
        0.2818362161f,
        0.4303406404f,
        0.6296271457f,
        0.9145252695f
     );
    
     const  quadrature_weights = array<f32,8>(
        0.01750893642f,
        0.04135477391f,
        0.06678839063f,
        0.09507698807f,
        0.1283416365f,
        0.1707430204f,
        0.2327233347f,
        0.3562490486f
     );

	let intersection = atmosphere_intersection(ray_origin, ray_direction);
	let ray_length    = intersection.y;
	
    let segment = ray_length * ray_direction;
	
	var optical_depth = vec3(0.0);

	for (var i = 0; i < quadrature_steps; i++) {
	
		let local_position = ray_origin + quadrature_nodes[i] * segment;
	    
	    // height above the sea level
		let local_height   = atmosphere_height(local_position);
		
		let local_density  = atmosphere_density(local_height);

		optical_depth += local_density * quadrature_weights[i];
		
	}

	return optical_depth * ray_length;
}

`,
    [Cp, Y_, H_]
  ),
  Up = w.from(
    `

fn phase_mie ( cos_theta:f32, g: f32 ) -> f32
{
    const scale = 3.0 / (8.0 * PI );
    
    let k = scale * (1.0 - g * g) / (2.0 + g * g);
    
    return k * (1.0 + cos_theta * cos_theta) / pow(1.0 + g * g - 2.0 * g * cos_theta, 1.5);
}
    `,
    [Jt]
  ),
  Ip = w.from(
    `
fn phase_rayleigh ( cos_theta:f32 ) -> f32
{
    const m = 3.0 / ( 16.0 * PI );
    
	return ( 1.0 + cos_theta * cos_theta ) * m;
}
    `,
    [Jt]
  ),
  d2 = w.from(
    `
fn planet_intersection ( rayStart:vec3<f32>,  rayDir:vec3<f32> ) -> vec2<f32>
{
	return sphere_intersection(rayStart, rayDir, PLANET_CENTER, PLANET_RADIUS);
}
`,
    [Vo, Lc, eh]
  ),
  h2 = w.from(
    `

fn integrate_scattering (
    ray_start:vec3<f32>,
    ray_dir:vec3<f32>,
    ray_length:f32,
    light_dir:vec3<f32>,
    light_color:vec3<f32>,
    transmittance: ptr< function, vec3<f32>>
) -> vec3<f32> {
	// We can reduce the number of atmospheric samples required to converge by spacing them exponentially closer to the camera.
	// This breaks space view however, so let's compensate for that with an exponent that "fades" to 1 as we leave the atmosphere.
	let  rayHeight = atmosphere_height(ray_start);
	let  sampleDistributionExponent = 1.0 + saturate(1.0 - rayHeight / ATMOSPHERE_HEIGHT) * 8.0; // Slightly arbitrary max exponent of 9

	let intersection = atmosphere_intersection(ray_start, ray_dir);
	
	var _rayLength = min(ray_length, intersection.y);
	
	var _rayStart = ray_start;
	
	if (intersection.x > 0)
	{
		// Advance ray to the atmosphere entry point
		_rayStart += ray_dir * intersection.x;
		_rayLength -= intersection.x;
	}

    const g = ${Ap};

	let  costh    = dot(ray_dir, light_dir);
	let  phaseR   = phase_rayleigh(costh);
	let  phaseM   = phase_mie(costh , g );

    // primary ray segments
	const    sampleCount  = 64;

	var opticalDepth = vec3(0.0);
	var rayleigh     = vec3(0.0);
	var mie          = vec3(0.0);

	var prevRayTime  = 0.0;

    var view_transmittance: vec3<f32>;

	for (var i = 0; i < sampleCount; i++)
	{
		let rayTime = pow( f32(i) / sampleCount, sampleDistributionExponent) * _rayLength;
		// Because we are distributing the samples exponentially, we have to calculate the step size per sample.
		let stepSize = (rayTime - prevRayTime);

		let local_position = _rayStart + ray_dir * rayTime;
		let local_height   = atmosphere_height(local_position);
		let local_density  = atmosphere_density(local_height);

		opticalDepth += local_density * stepSize;

		// The atmospheric transmittance from rayStart to localPosition
		view_transmittance = absorb(opticalDepth);

		let opticalDepthlight  = integrate_optical_depth(local_position, light_dir);
		// The atmospheric transmittance of light reaching localPosition
		let lightTransmittance = absorb(opticalDepthlight);

        let k = view_transmittance * lightTransmittance * stepSize;

		rayleigh += k * phaseR * local_density.x;
		mie      += k * phaseM * local_density.y;

		prevRayTime = rayTime;
	}

	*transmittance = view_transmittance;

	return (rayleigh * C_RAYLEIGH + mie * C_MIE_SCATTERING) * light_color;
}

`,
    [Go, u2, _2, Up, Ip, vE, H_, d2, Qd, Kd, l2]
  ),
  f2 = w.from(
    `
    fn light_get_sun() -> ${ms.wgsl_ref}{
        let index = light_metadata.sun_index;
        
        let address = u32(index*${Ao});
        let light_type = u32(light_data[address]);
        return light_read_record_directional( address + 1 );
    }
    `,
    [ms.declaration_chunk, hp]
  );
w.from(
  `
fn sample_sky_color(position: vec3<f32>, direction:vec3<f32>) -> vec3<f32>{   
    return sample_sky_irradiance_lut( direction );
}
    `,
  [up, d2, h2, f2, ti]
);
const Np = w.from(
    `
fn position_relative_to_planet_center(pos:vec3<f32>) -> vec3<f32> {
    return pos - PLANET_CENTER;
}
    `,
    [Vo]
  ),
  p2 = w.from(`
fn sphere_intersection_nearest(
    ray_origin:vec3<f32>,
    ray_direction:vec3<f32>,
    center:vec3<f32>,
    radius:f32
) -> f32{
	let _rayStart = ray_origin - center;
	let a = dot(ray_direction, ray_direction);
	let b = 2.0 * dot(_rayStart, ray_direction);
	let c = dot(_rayStart, _rayStart) - (radius * radius);
	
	let d2 = b * b - 4 * a * c;
	
	if (d2 < 0)
	{
		return -1.0;
	}
	
    let d = sqrt(d2);
    
    let a2 =  (2.0 * a);
    
	if(d2 > b*b){
	    // inside sphere, use far hit
	    return (-b + d) / a2;
	}
    
    return  (-b - d) / a2;
}
    `),
  th = w.from(`
fn safe_acos(  x:f32 ) -> f32{
    return acos(clamp(x, -1.0, 1.0));
}
`),
  bg = 10,
  m2 = w.from(
    `
fn sky_lut_compute_uv(
    pos:vec3<f32>,
    sunDir:vec3<f32>
) -> vec2<f32> {
    let height = atmosphere_height(pos);
    
    let up = normalize(
        position_relative_to_planet_center(pos)
    );
    
    let sunCosZenithAngle = dot(sunDir, up);
    
    let uv = vec2(
        saturate(0.5 + 0.5*sunCosZenithAngle),
        saturate(height/ATMOSPHERE_HEIGHT)
    );
    
    return uv;
}
    `,
    [Y_, Go, Np]
  ),
  xE = w.from(
    `
fn sample_multiscatter_lut(
    pos:vec3<f32>,
    sunDir:vec3<f32>
) -> vec3<f32>{

    let uv = sky_lut_compute_uv(pos, sunDir);
        
    return texture_sample_bilinear_uv(tSkyLutMultiscatter, uv, 0).rgb;
}
    `,
    [m2, G_]
  ),
  g2 = w.from(
    `
fn sample_transmittance_lut(
    pos:vec3<f32>,
    sunDir:vec3<f32>
) -> vec3<f32>{

    let uv = sky_lut_compute_uv(pos, sunDir);
        
    return texture_sample_bilinear_uv(tSkyLutTransmittance, uv, 0).rgb;

}    
    `,
    [G_, m2]
  ),
  bE = Struct.from({ steps: "u32" }),
  Mp = new ResourecGroup();
Mp.createGroup()
  .addUniform("settings", bE)
  .addUniform("camera", ce)
  .addTexture("tSkyLutTransmittance")
  .addTexture("tSkyLutMultiscatter");
Mp.createGroup()
  .addUniform("light_metadata", dn)
  .addStorageBuffer("light_data", X.f32);
const yE = w.from(
    `
fn raymarch_scattering(
    origin:vec3<f32>, 
    ray_dir:vec3<f32>, 
    sun_dir:vec3<f32>,
    tMax:f32,
    numSteps:f32
) -> vec3<f32>{
    let cosTheta = dot(ray_dir, sun_dir);
    
    let miePhaseValue = phase_mie(cosTheta, ${Ap});
    let rayleighPhaseValue = phase_rayleigh(-cosTheta);
    
    var lum = vec3(0.0);
    var transmittance = vec3(1.0);
    
    var t = 0.0;
    for (var i = 0.0; i < numSteps; i += 1.0) {
        
        let newT = ((i + 0.3)/numSteps)*tMax;
        let dt = newT - t;
        t = newT;
        
        let position = origin + t * ray_dir;
        
        let local_height = atmosphere_height(position);
        let local_density = atmosphere_density(local_height);
        
        let ozone_density = local_density.z;
        let ozone_absorption =  ozone_density * C_OZONE;
        
        let mie_density = local_density.y;
        let mie_absorption = mie_density * C_MIE_ABSORPTION;
        let mie_scattering = mie_density * C_MIE_SCATTERING;
        
        // note - taken from the Hillaire's atmosphere code: https://github.com/sebh/UnrealEngineSkyAtmosphere/blob/183ead5bdacc701b3b626347a680a2f3cd3d4fbd/Resources/RenderSkyCommon.hlsl#L248
        let rayleigh_absorption = 0.0;
        let rayleigh_scattering = local_density.x * C_RAYLEIGH;
        
        let extinction = rayleigh_scattering + rayleigh_absorption + mie_scattering + mie_absorption + ozone_absorption;

        
        let sample_transmittance = exp( -dt * extinction );

        let sun_transmittance = sample_transmittance_lut(position, sun_dir);
        let psiMS = sample_multiscatter_lut(position, sun_dir);
        
        let rayleigh_in_scattering = rayleigh_scattering * ( rayleighPhaseValue * sun_transmittance + psiMS );
        let mie_in_scattering = mie_scattering * ( miePhaseValue * sun_transmittance + psiMS );
        let in_scattering = ( rayleigh_in_scattering + mie_in_scattering );

        // Integrated scattering within path segment.
        let scattering_integral = ( in_scattering - in_scattering * sample_transmittance ) / extinction;

        lum += scattering_integral * transmittance;
        
        transmittance *= sample_transmittance;
    }
    
    return lum;
}
    `,
    [Y_, H_, Up, Ip, g2, xE, Sp, Kd, zp, Qd]
  ),
  wE = w.from(
    `
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    
	var actual_view_position = matrix4_extract_position(camera.transform);
	
    let relative_position = position_relative_to_planet_center(actual_view_position);
    
    let up = normalize(relative_position);
    
    let height = length(relative_position);
    
    // force view into valid range
    let clamped_height = clamp(height , PLANET_RADIUS + ${bg}, PLANET_RADIUS + ATMOSPHERE_HEIGHT - ${bg});
    
    let view_position = up * clamped_height + PLANET_CENTER;
   
    let rayDir = octahedral_decode_normal(uv);
    
    let sun = light_get_sun();
    
    let sunAltitude = (0.5*PI) - safe_acos(dot(-sun.direction, up));
    let sunDir = vec3(0.0, sin(sunAltitude), -cos(sunAltitude));
    
    let atmoDist = sphere_intersection_nearest(view_position, rayDir, PLANET_CENTER, PLANET_RADIUS + ATMOSPHERE_HEIGHT);
    let groundDist = sphere_intersection_nearest(view_position, rayDir, PLANET_CENTER, PLANET_RADIUS);
    
    let tMax = select(atmoDist, groundDist,  groundDist > 0.0);
    
    let lum = raymarch_scattering(view_position, rayDir, sunDir, tMax, f32(settings.steps));
    
    // TODO validate this, it "feels" wrong to me
    let irradiance = lum * sun.color;
    
    return vec4(irradiance, 1.0);

}
    `,
    [th, Ep, f2, Np, qd, Lc, Vo, Go, Jt, p2, Vd, yE]
  ),
  TE = new Je({
    descriptor: le.from({
      label: "Sky / sky irradiance LUT",
      body: wE,
      resources: Mp,
    }),
    targets: [{ format: "rgba16float" }],
  }),
  yg = "@output";
function EE(s, e, t) {
  if (t.type === Et.Buffer) {
    if (e instanceof GPUBuffer) return e;
    if (e.isGPUTypedBuffer === !0) return e;
    if (
      typeof e == "object" &&
      t.type === Et.Buffer &&
      t.member_descriptor.type === "uniform"
    )
      return s.encoder.allocateTransientValueBuffer(
        t.buffer_type,
        e,
        GPUBufferUsage.UNIFORM
      );
    throw new Error(`Unsupported buffer ('${t.name}'): '${e}'`);
  } else if (t.type === Et.Texture) {
    if (e.isGPUTextureContext) return e.obtainView();
    if (e.isShadeTexture) return s.graphics.textures.obtain(e).obtainView();
    if (e instanceof GPUTextureView) return e;
    throw new Error(`Unsupported texture ${e}`);
  } else if (t.type === Et.Sampler) {
    if (e.isSamplerDescriptor) return s.graphics.device.createSampler(e);
    if (e instanceof GPUSampler) return e;
    throw new Error(`Unsupported sampler '${e}'`);
  } else
    throw t.type === Et.StorageTexture
      ? new Error("Unsupported storage texture")
      : new Error(`Unsupported resource type '${t.type}'`);
}
function ht({
  graph: graph,
  shader: shader,
  inputs: inputs,
  output_resolution: output_resolution,
  output: output,
  timer: timer,
}) {
  if (output_resolution !== false && output !== false)
    throw new Error(
      "Either 'output_resolution' or 'output' can be specified, but not both. Both were given."
    );
  if (output_resolution === false && output === false)
    throw new Error(
      "Either 'output_resolution' or 'output' can be specified, but not both. Neither were given."
    );
  if (output_resolution === false) {
    if (output === false) throw new Error("Unexpected state");
  }
  const o = {},
    a = Object.keys(inputs);
  function c(p, v, f) {
    const m = f.encoder,
      g = {};
    for (let y = 0; y < a.length; y++) {
      const A = a[y],
        T = shader.descriptor.resources.getResourceByName(A);
      if (T === false) throw new Error(`No resource called '${A}'`);
      const z = p[A];
      let C;
      typeof z == "number" && Number.isInteger(z) ? (C = v.get(z)) : (C = z),
        (g[A] = EE(f, C, T));
    }
    const E = v.get(p[yg]);
    shader.draw({
      encoder: m,
      bindings: g,
      timer: timer,
      colorAttachments: [
        {
          loadOp: "clear",
          storeOp: "store",
          clearValue: [0, 0, 0, 0],
          view: E.obtainView(Ve.from({ mipLevelCount: 1, baseMipLevel: 0 })),
        },
      ],
    });
  }
  const _ = graph.add(shader.descriptor.label, o, c);
  for (let p = 0; p < a.length; p++) {
    const v = a[p],
      f = inputs[v];
    let m;
    const g = typeof f;
    if (g === "number") m = _.read(f);
    else if (g === "object") m = f;
    else throw new Error(`Unsupported field ${f}`);
    o[v] = m;
  }
  const d = shader.pipeline.fragment.targets[0];
  let h;
  return (
    output !== false
      ? (h = _.write(output))
      : (h = _.create(
          "output",
          oe.from({
            resolution: output_resolution,
            dimension: "2d",
            generateMips: !1,
            format: d.format,
            usage:
              GPUTextureUsage.TEXTURE_BINDING |
              GPUTextureUsage.RENDER_ATTACHMENT,
          })
        )),
    (o[yg] = h),
    h
  );
}
function v2(s) {
  const e = s.width * s.height,
    t = s.itemSize,
    r = s.data;
  for (let i = 0; i < e; i++) {
    const n = i * t;
    c0(r, n, r, n);
  }
}
var Fl, Pt, Ra;
class AE {
  constructor(e) {
    b(this, Fl);
    b(this, Pt);
    b(this, Ra, !0);
    S(this, Fl, e);
    const t = e.device;
    S(this, Pt, new Ht(t)),
      (getProperty(this, Pt).descriptor.label = "Sky / Irradiance LUT"),
      (getProperty(this, Pt).descriptor.format = "rgba16float"),
      (getProperty(this, Pt).descriptor.mipLevelCount = dp),
      (getProperty(this, Pt).descriptor.usage =
        GPUTextureUsage.RENDER_ATTACHMENT |
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.STORAGE_BINDING |
        GPUTextureUsage.COPY_SRC),
      getProperty(this, Pt).resize(1024, 1024);
  }
  get irradiance_lut() {
    return getProperty(this, Pt);
  }
  set needs_update(e) {
    e && S(this, Ra, !0);
  }
  update(e, t) {
    if (!getProperty(this, Ra)) return;
    S(this, Ra, !1);
    const r = t.sky;
    r.update();
    const i = new O_("sky update"),
      n = Ni.create(getProperty(this, Fl), "Renderer/main"),
      o = i.import_resource(
        "transmittance",
        oe.fromTexture(r.lut_transmittance.gpu_texture),
        r.lut_transmittance
      ),
      a = i.import_resource(
        "multiscatter",
        oe.fromTexture(r.lut_multiple_scattering.gpu_texture),
        r.lut_multiple_scattering
      ),
      c = i.import_resource(
        "sky_irradiance",
        oe.fromTexture(getProperty(this, Pt).gpu_texture),
        getProperty(this, Pt)
      );
    let _ = ht({
      graph: i,
      shader: TE,
      inputs: {
        settings: { steps: 32 },
        camera: e.buffer,
        light_metadata: t.lights.buffer_metadata,
        light_data: t.lights.buffer_data,
        tSkyLutTransmittance: o,
        tSkyLutMultiscatter: a,
      },
      output: c,
    });
    (_ = hE({ graph: i, map: _ })), n.encodeGraph(i), n.finish();
  }
  async debug(e = 0) {
    if (this.__debug_waiting) return;
    this.__debug_waiting = !0;
    const t = getProperty(this, Pt),
      r = await t.download(e),
      i = new et(r, 4, t.size[0] >> e, t.size[1] >> e);
    v2(i);
    const n = s2(i, 255, 0, this.__debug_canvas);
    if (this.__debug_canvas === false) {
      (n.style.zIndex = "100"),
        (n.style.position = "absolute"),
        (n.style.bottom = "32px"),
        (n.style.right = "32px");
      const o = new Float32Array(9);
      i2(o, 0, 0, 1, -1, 0, 0, 0), n2(o, n), document.body.appendChild(n);
    }
    (this.__debug_canvas = n), (this.__debug_waiting = !1);
  }
  destroy() {
    getProperty(this, Pt).destroy();
  }
}
(Fl = new WeakMap()), (Pt = new WeakMap()), (Ra = new WeakMap());
let SE = 0;
const cr = {
  VisibleMeshes0: 0,
  VisibleMeshlets0: 1,
  VisibleTriangles0: 2,
  VisibleMeshes1: 3,
  VisibleMeshlets1: 4,
  VisibleTriangles1: 5,
};
var resolution,
  Fs,
  ud,
  dd,
  frame_index,
  stats,
  sky,
  hierarchical_z_buffer,
  uniform_buffer,
  scene,
  camera,
  gpu_previous_camera_state,
  Xn;
class zE {
  constructor(e, t, r) {
    x(this, "id", SE++);
    b(this, resolution, new Uint32Array([1, 1]));
    b(this, Fs, new Float32Array(2));
    b(this, ud, new Float32Array(2));
    b(this, dd, new Float32Array(16));
    b(this, frame_index, 0);
    b(this, stats);
    b(this, sky);
    b(this, hierarchical_z_buffer);
    b(this, uniform_buffer);
    b(this, scene);
    b(this, camera);
    b(this, gpu_previous_camera_state);
    b(this, Xn);
    const i = e.device;
    S(this, Xn, i),
      S(this, scene, t),
      S(this, camera, r),
      S(this, hierarchical_z_buffer, new UT(e)),
      S(
        this,
        uniform_buffer,
        i.createBuffer({
          label: "View Context Uniforms",
          size: hn.size,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })
      ),
      S(this, gpu_previous_camera_state, r.clone()),
      S(this, stats, new t2(i, Object.keys(cr).length)),
      S(this, sky, new AE(e));
  }
  setJitter(e, t) {
    (getProperty(this, Fs)[0] = e), (getProperty(this, Fs)[1] = t);
  }
  setJitterDelta(e, t) {
    (getProperty(this, Fs)[0] = e), (getProperty(this, Fs)[1] = t);
  }
  get resolution() {
    return getProperty(this, resolution);
  }
  get frame_index() {
    return getProperty(this, frame_index);
  }
  get stats() {
    return getProperty(this, stats);
  }
  get sky() {
    return getProperty(this, sky);
  }
  setViewportSize(e, t) {
    (getProperty(this, resolution)[0] = e),
      (getProperty(this, resolution)[1] = t),
      getProperty(this, hierarchical_z_buffer).setViewportSize(e, t);
  }
  get hierarchical_z_buffer() {
    return getProperty(this, hierarchical_z_buffer);
  }
  set hierarchical_z_buffer(e) {
    S(this, hierarchical_z_buffer, e);
  }
  get uniform_buffer() {
    return getProperty(this, uniform_buffer);
  }
  get gpu_previous_camera_state() {
    return getProperty(this, gpu_previous_camera_state);
  }
  set gpu_previous_camera_state(e) {
    S(this, gpu_previous_camera_state, e);
  }
  get camera() {
    return getProperty(this, camera);
  }
  get scene() {
    return getProperty(this, scene);
  }
  equals(e) {
    return this === e
      ? !0
      : getProperty(this, Xn) === getProperty(e, Xn) &&
          getProperty(this, scene) === getProperty(e, scene) &&
          getProperty(this, camera) === getProperty(e, camera);
  }
  hash() {
    return 0;
  }
  update_uniforms() {
    const e = new ArrayBuffer(hn.size),
      t = new Float64Array(16);
    st(this.camera.view_projection_matrix, 0, t, 0, 16);
    const r = getProperty(this, resolution),
      i = new Float64Array(16);
    cf(
      i,
      new Z(r[0] * 0.5, r[1] * 0.5, 0),
      $e.identity,
      new Z(r[0] * 0.5, -r[1] * 0.5, 1)
    ),
      Ir(t, i, t),
      Fo(
        {
          frame_index: getProperty(this, frame_index),
          width: r[0],
          height: r[1],
          projection_matrix: t,
          jitter: getProperty(this, Fs),
          jitter_delta: getProperty(this, ud),
        },
        hn,
        e
      ),
      getProperty(this, Xn).queue.writeBuffer(
        getProperty(this, uniform_buffer),
        0,
        e
      );
  }
  update() {
    getProperty(this, scene).update(),
      getProperty(this, camera).update(),
      getProperty(this, sky).update(
        getProperty(this, camera),
        getProperty(this, scene)
      ),
      this.update_uniforms();
  }
  finish_frame(e) {
    getProperty(this, dd).set(
      getProperty(this, camera).camera.view_projection_matrix
    ),
      getProperty(this, gpu_previous_camera_state).copy(
        getProperty(this, camera)
      ),
      getProperty(this, stats).readback(),
      ze(this, frame_index)._++;
  }
  destroy() {
    getProperty(this, uniform_buffer) !== false &&
      (getProperty(this, uniform_buffer).destroy(),
      S(this, uniform_buffer, false)),
      getProperty(this, gpu_previous_camera_state) !== false &&
        (getProperty(this, gpu_previous_camera_state).destroy(),
        S(this, gpu_previous_camera_state, false)),
      getProperty(this, hierarchical_z_buffer).destroy();
  }
}
(resolution = new WeakMap()),
  (Fs = new WeakMap()),
  (ud = new WeakMap()),
  (dd = new WeakMap()),
  (frame_index = new WeakMap()),
  (stats = new WeakMap()),
  (sky = new WeakMap()),
  (hierarchical_z_buffer = new WeakMap()),
  (uniform_buffer = new WeakMap()),
  (scene = new WeakMap()),
  (camera = new WeakMap()),
  (gpu_previous_camera_state = new WeakMap()),
  (Xn = new WeakMap());
const CE = Object.freeze(
    Yd.from({
      depthWriteEnabled: !0,
      depthCompare: "greater",
      format: "depth32float",
    })
  ),
  UE = `
struct VizBufferOutput{
    @location(0) m_triangle : u32,
    @location(1) m_mesh : u32,
}

@fragment
fn main(
    @builtin(position) coord : vec4<f32>,
    @location(0) @interpolate(flat) m_mesh:u32,
    @location(1) @interpolate(flat) m_triangle:u32,
) -> VizBufferOutput {
    var result:VizBufferOutput;

    //decode meshlet payload
    result.m_triangle = m_triangle ;
    result.m_mesh = m_mesh ;

    return result;
}
`,
  IE = Struct.from({ count: "u32", elements: X.from(xs) }),
  NE = Struct.from({ camera: ce, width: "u32", height: "u32" }),
  x2 = new ResourecGroup();
x2.createGroup()
  .addUniform("view", NE)
  .addUniform("camera", ce)
  .addStorageBuffer("meshes", X.from(Xe))
  .addStorageBuffer("geometries", X.from(Ut))
  .addStorageBuffer("geometry_indices", X.u32)
  .addStorageBuffer("geometry_vertices", X.from(qt))
  .addStorageBuffer("triangles", IE);
const ME = w.from(
    `


fn project(v:vec3<f32>) -> vec3<f32>{
    let projected = view.camera.view_projection_matrix * vec4<f32>(v, 1.0);

    let projected_perspective = vec2<f32>(projected.xy / projected.w);

    let screen_coordinate = vec3<f32>(
        projected_perspective.x * f32(view.width),
        projected_perspective.y * f32(view.height),
        projected.w
    );

    return screen_coordinate;
}

struct VertexOutput{
    @builtin(position) position: vec4f,
    @location(0) @interpolate(flat) m_mesh:u32,
    @location(1) @interpolate(flat) m_triangle:u32,
}

@vertex
fn main(
    @builtin(vertex_index) vertex_id : u32,
    @builtin(instance_index) instance_id : u32,
  ) -> VertexOutput {

    let triangle_id = instance_id;

    let triangle_index = vertex_id / 3u;
    let triangle_vertex_id = ( vertex_id - triangle_index* 3u );

    let triangle_def = triangles.elements[triangle_id];

    // fetch mesh
    let mesh = meshes[triangle_def.mesh];

    // fetch geometry
    let geometry = geometries[mesh.geometry];

    let vertices_address = geometry.vertex_address;

    // fetch triangle
    let geometry_triangle_id = triangle_def.index;

    let geometry_index_id =  geometry_triangle_id * 3u + triangle_vertex_id;

    let absolute_index_offset = geometry.index_address + geometry_index_id;

    let geometry_vertex_id = geometry_indices[absolute_index_offset];

    let absolute_vertex_index = vertices_address + geometry_vertex_id;

    let geometry_vertex = geometry_vertices[absolute_vertex_index];

    let vertex_position = geometry_vertex.position;

    let geometry_position = vec4(
                                    vertex_position[0],
                                    vertex_position[1],
                                    vertex_position[2],
                                    1.0
                                );
                                
    let projection_matrix = camera.view_projection_matrix;
    let instance_matrix = mesh.transform;

    let model_view_projection_matrix = projection_matrix * instance_matrix;
    
    let projected_vertex = model_view_projection_matrix*geometry_position;

    var output: VertexOutput;

    output.position = projected_vertex;

    output.m_mesh = triangle_def.mesh;
    output.m_triangle = triangle_def.index ;

    return output;

}`,
    []
  ),
  zf = le.from({ resources: x2, body: ME }),
  b2 = Math.pow(2, 24),
  kE = Ve.from({ baseMipLevel: 0, mipLevelCount: 1 }),
  RE = Nc.from({
    label: "Rasterize Meshlets",
    layout: zf.resources.generatePipelineLayout(GPUShaderStage.VERTEX),
    vertex: { module: { code: zf.compile() } },
    fragment: {
      module: { code: UE },
      targets: [{ format: "r32uint" }, { format: "r32uint" }],
    },
    depthStencil: CE,
    primitive: { topology: "triangle-list", cullMode: "back" },
  });
class wg {
  constructor() {
    x(this, "view");
    x(this, "timer");
    x(this, "clear_targets", !1);
    x(this, "input_triangles", -1);
    x(this, "command", -1);
    x(this, "out_texture_triangle", -1);
    x(this, "out_texture_mesh", -1);
    x(this, "out_texture_depth", -1);
  }
}
const Tg = (s, e, t) => {
  const r = s.view,
    scene = r.scene,
    geometries = scene.geometries,
    clear_targets = s.clear_targets ? "clear" : "load",
    encoder = t.encoder,
    c = e.get(s.out_texture_triangle),
    _ = e.get(s.out_texture_mesh),
    u = e.get(s.out_texture_depth),
    d = e.get(s.input_triangles),
    h = e.get(s.command),
    p = encoder.constructRenderPass({
      label: "Rasterize native",
      timer: s.timer,
      pipeline: RE,
      colorAttachments: [
        {
          view: c.obtainView(),
          clearValue: [0, 0, 0, 0],
          loadOp: clear_targets,
          storeOp: "store",
        },
        {
          view: _.obtainView(),
          clearValue: [b2, 1, 1, 1],
          loadOp: clear_targets,
          storeOp: "store",
        },
      ],
      depthStencilAttachment: {
        view: u.obtainView(kE),
        depthClearValue: 0,
        depthLoadOp: clear_targets,
        depthStoreOp: "store",
      },
      bindings: zf.resources.generateBindings({
        view: r.uniform_buffer,
        camera: r.camera.buffer,
        meshes: scene.instance_buffer,
        geometries: geometries.buffer_metadata,
        geometry_indices: geometries.buffer_indices,
        geometry_vertices: geometries.buffer_vertices,
        triangles: d,
      }),
    });
  p.drawIndirect(h, 0), p.end();
};
function xc(s, e) {
  const t = e.length;
  t >= s.length
    ? e.set(s, 0)
    : s.constructor === e.constructor
    ? Oo(
        s.buffer,
        s.byteOffset,
        e.buffer,
        e.byteOffset,
        Math.min(s.byteLength, e.byteLength)
      )
    : st(s, 0, e, 0, t);
}
async function Eg(s, e = 0, t = 0) {
  const r = await s.download(),
    i = s.size[0],
    n = s.size[1],
    o = new et(r, 4, i, n);
  v2(o);
  const a = s2(o);
  (a.style.zIndex = "100"),
    (a.style.position = "absolute"),
    (a.style.left = `${e}px`),
    (a.style.top = `${t}px`);
  const c = new Float32Array(9);
  i2(c, 0, 0, 1, -1, 0, 0, 0), n2(c, a), document.body.appendChild(a);
}
const LE = w.from(`
fn spherical_to_cartesian(theta:f32, phi:f32) -> vec3<f32>{

    let cosPhi = cos(phi);
    let sinPhi = sin(phi);
    
    let cosTheta = cos(theta);
    let sinTheta = sin(theta);
    
    return vec3(sinPhi*sinTheta, cosPhi, sinPhi*cosTheta);
}    
    `),
  PE = w.from(
    `
fn get_multiscatter_values( 
    pos:vec3<f32>,
    sunDir:vec3<f32>,
    steps: f32,
    sqrt_samples: u32,
    out_lumTotal: ptr<function,vec3<f32>>,
    out_fms: ptr<function,vec3<f32>>,
) {
     const groundAlbedo = vec3(0.3);

     var lumTotal = vec3(0.0);
     var fms = vec3(0.0);
    
    let inv_samples = 1.0 / f32( sqrt_samples * sqrt_samples );
    
    for (var i = 0u; i < sqrt_samples; i++) {
        for (var j = 0u; j < sqrt_samples; j++) {
        
            // This integral is symmetric about theta = 0 (or theta = PI), so we
            // only need to integrate from zero to PI, not zero to 2*PI.
            
            let theta = PI * (f32(i) + 0.5) / f32(sqrt_samples);
            let phi = safe_acos(1.0 - 2.0*(f32(j) + 0.5) / f32(sqrt_samples));
            
            let rayDir = spherical_to_cartesian(theta, phi);
            
            // distance to the edge of the atmosphere
            let atmoDist = sphere_intersection_nearest(pos, rayDir, PLANET_CENTER, PLANET_RADIUS + ATMOSPHERE_HEIGHT);
            let groundDist = sphere_intersection_nearest(pos, rayDir, PLANET_CENTER, PLANET_RADIUS);
            
            var tMax = atmoDist;
            
            if (groundDist > 0.0) {
                // in case we're looking down
                tMax = groundDist;
            }
            
            let cosTheta = dot(rayDir, sunDir);
    
            let miePhaseValue = phase_mie(cosTheta, ${Ap});
            let rayleighPhaseValue = phase_rayleigh(-cosTheta);
            
            var lum = vec3(0.0);
            var lumFactor = vec3(0.0);
            var transmittance = vec3(1.0);
            
            var t = 0.0;
            for (var stepI = 0.0; stepI < steps; stepI += 1.0) {
                let newT = ( (stepI + 0.3) / steps ) * tMax;
                let dt = newT - t;
                t = newT;

                let newPos = pos + t * rayDir;
                
                
                let local_height = atmosphere_height(newPos);
                let local_density = atmosphere_density(local_height);
                
                let ozone_density = local_density.z;
                let ozone_absorption =  ozone_density * C_OZONE;
                
                let mie_density = local_density.y;
                let mie_absorption = mie_density * C_MIE_ABSORPTION;
                let mie_scattering = mie_density * C_MIE_SCATTERING;
                
                // note - taken from the Hillaire's atmosphere code: https://github.com/sebh/UnrealEngineSkyAtmosphere/blob/183ead5bdacc701b3b626347a680a2f3cd3d4fbd/Resources/RenderSkyCommon.hlsl#L248
                let rayleigh_absorption = 0.0;
                let rayleigh_scattering = local_density.x * C_RAYLEIGH;
                
                let extinction = rayleigh_scattering + rayleigh_absorption + mie_scattering + mie_absorption + ozone_absorption;

                
                let sample_transmittance = exp(-dt * extinction);
                
                // Integrate within each segment.
                let scatteringNoPhase = rayleigh_scattering + mie_scattering;
                let scatteringF = (scatteringNoPhase - scatteringNoPhase * sample_transmittance) / extinction;
                lumFactor += transmittance * scatteringF;
                
                // This is slightly different from the paper, but I think the paper has a mistake?
                // In equation (6), I think S(x,w_s) should be S(x-tv,w_s).
                let sun_transmittance = sample_transmittance_lut(newPos, sunDir);

                let rayleighInScattering = rayleigh_scattering * rayleighPhaseValue;
                let mieInScattering = mie_scattering * miePhaseValue;
                let inScattering = (rayleighInScattering + mieInScattering) * sun_transmittance;

                // Integrated scattering within path segment.
                let scatteringIntegral = (inScattering - inScattering * sample_transmittance) / extinction;

                lum += scatteringIntegral * transmittance;
                transmittance *= sample_transmittance;
            }
            
            if (groundDist > 0.0) {
            
                
                let relative_pos = position_relative_to_planet_center(pos);
                
                if (dot(relative_pos, sunDir) > 0.0) {
                
                    // sun is behind us, pick a point on the planet to sample
                    let hitPos = normalize(relative_pos + groundDist*rayDir) * PLANET_RADIUS + PLANET_CENTER;
                    
                    lum += transmittance * groundAlbedo * sample_transmittance_lut(hitPos, sunDir);
                
                }
                
            }
            
            fms += lumFactor * inv_samples;
            lumTotal += lum * inv_samples;
        }
    }
    
    *out_fms = fms;
    *out_lumTotal = lumTotal;
    
}
    `,
    [Jt, Vo, Lc, Go, zp, Kd, Sp, Qd, th, Y_, LE, eh, Cp, H_, Up, Ip, g2, p2, Np]
  ),
  BE = Struct.from({ steps: "u32", sqrt_samples: "u32" }),
  y2 = new ResourecGroup();
y2.createGroup().addUniform("settings", BE).addTexture("tSkyLutTransmittance");
const OE = w.from(
    `
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
        
    
    let sunCosTheta = 2.0*uv.x - 1.0;
    let sunTheta = safe_acos(sunCosTheta);
    
    let height = ATMOSPHERE_HEIGHT*uv.y;
    
    let pos = vec3(0.0, height, 0.0); 
    let sunDir = normalize(vec3(0.0, sunCosTheta, -sin(sunTheta)));
    
    var lum:vec3<f32>;
    var f_ms:vec3<f32>;
    
    get_multiscatter_values(
        pos,
        sunDir,
        f32(settings.steps),
        settings.sqrt_samples,
        &lum, &f_ms
    );
    
    // Equation 10 from the paper.
    let psi = lum  / (1.0 - f_ms); 
    
    return vec4(psi, 1.0);
}
    `,
    [th, Go, PE]
  ),
  FE = new Je({
    descriptor: le.from({
      label: "Sky / multi-scatter LUT",
      body: OE,
      resources: y2,
    }),
    targets: [{ format: "rgba16float" }],
  }),
  DE = w.from(
    `
fn get_sun_transmittance(pos: vec3<f32>, sunDir: vec3<f32>, sunTransmittanceSteps: f32) -> vec3<f32>{
    if (sphere_intersection(pos, sunDir, PLANET_CENTER, PLANET_RADIUS).x > 0.0) {
        return vec3(0.0);
    }
    
    let ray_length = atmosphere_intersection(pos, sunDir ).y;
    var t = 0.0;
    
    var transmittance = vec3(1.0);
    
    // integrate optical depth
    for (var i = 0.0; i < sunTransmittanceSteps; i += 1.0) {
        let f = (i + 0.3)/sunTransmittanceSteps;
    
        let newT = f*ray_length;
        let dt = newT - t;
        t = newT;
        
        let newPos = pos + t * sunDir;
        
        let local_height = atmosphere_height(newPos);
		let local_density  = atmosphere_density(local_height);
        
        let extinction = compute_extinction(local_density);
		
		transmittance*= exp(-dt * extinction);
		
    }
    
    return transmittance;
}
    `,
    [eh, Y_, H_, Lc, Vo, Cp, c2, l2]
  ),
  GE = Struct.from({ steps: "u32" }),
  w2 = new ResourecGroup();
w2.createGroup().addUniform("settings", GE);
const VE = w.from(
    `

@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
            
    let sunCosTheta = 2.0*uv.x - 1.0;
    let sunTheta = safe_acos(sunCosTheta);
    
    let height = ATMOSPHERE_HEIGHT*uv.y;
    
    let pos = vec3(0.0, height, 0.0); 
    let sunDir = normalize(vec3(0.0, sunCosTheta, -sin(sunTheta)));
    
    return vec4(get_sun_transmittance(pos, sunDir, f32(settings.steps)), 1.0);

}
    `,
    [DE, th, Go]
  ),
  $E = new Je({
    descriptor: le.from({
      label: "Sky / transmittance LUT",
      resources: w2,
      body: VE,
    }),
    targets: [{ format: "rgba16float" }],
  });
var Dl, Bt, Ot, Gl;
class qE {
  constructor(e) {
    b(this, Dl);
    b(this, Bt);
    b(this, Ot);
    b(this, Gl, !0);
    S(this, Dl, e);
    const t = e.device;
    S(this, Bt, new Ht(t)),
      (getProperty(this, Bt).descriptor.label = "Sky / Transmittance LUT"),
      (getProperty(this, Bt).descriptor.format = "rgba16float"),
      (getProperty(this, Bt).descriptor.usage =
        GPUTextureUsage.RENDER_ATTACHMENT |
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_SRC),
      getProperty(this, Bt).resize(256, 64),
      S(this, Ot, new Ht(t)),
      (getProperty(this, Ot).descriptor.label =
        "Sky / Multiple Scattering LUT"),
      (getProperty(this, Ot).descriptor.format = "rgba16float"),
      (getProperty(this, Ot).descriptor.usage =
        GPUTextureUsage.RENDER_ATTACHMENT |
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_SRC),
      getProperty(this, Ot).resize(32, 32);
  }
  get lut_transmittance() {
    return getProperty(this, Bt);
  }
  get lut_multiple_scattering() {
    return getProperty(this, Ot);
  }
  destroy() {
    getProperty(this, Bt).destroy(), getProperty(this, Ot).destroy();
  }
  debug() {
    let e = 50;
    Eg(getProperty(this, Bt), 50, e),
      (e += getProperty(this, Bt).size[1] + 50),
      Eg(getProperty(this, Ot), 50, e),
      (e += getProperty(this, Ot).size[1] + 50);
  }
  update() {
    if (!getProperty(this, Gl)) return;
    const e = new O_("sky update"),
      t = Ni.create(getProperty(this, Dl), "Renderer/main"),
      r = e.import_resource(
        "transmittance",
        oe.fromTexture(getProperty(this, Bt).gpu_texture),
        getProperty(this, Bt)
      ),
      i = e.import_resource(
        "multiscatter",
        oe.fromTexture(getProperty(this, Ot).gpu_texture),
        getProperty(this, Ot)
      );
    ht({
      graph: e,
      shader: $E,
      inputs: { settings: { steps: 40 } },
      output: r,
    }),
      ht({
        graph: e,
        shader: FE,
        inputs: {
          settings: { steps: 20, sqrt_samples: 8 },
          tSkyLutTransmittance: r,
        },
        output: i,
      }),
      t.encodeGraph(e),
      t.finish(),
      S(this, Gl, !1);
  }
}
(Dl = new WeakMap()),
  (Bt = new WeakMap()),
  (Ot = new WeakMap()),
  (Gl = new WeakMap());
const Ie = 6,
  Ne = 7,
  De = 8,
  de = 9,
  Cf = De,
  He = _r,
  HE = 1.2,
  YE = 64,
  B = 10,
  Ag = B * 4,
  Sg = 128,
  Nh = Math.floor(_r / (B * 4));
class kp {
  constructor() {
    x(this, "__data_buffer", new ArrayBuffer(Sg * B * 4));
    x(this, "__data_float32", new Float32Array(this.__data_buffer));
    x(this, "__data_uint32", new Uint32Array(this.__data_buffer));
    x(this, "__capacity", Sg);
    x(this, "__size", 0);
    x(this, "__free", []);
    x(this, "__free_pointer", 0);
    x(this, "__root", He);
  }
  get data_buffer() {
    return this.__data_buffer;
  }
  get data_float32() {
    return this.__data_float32;
  }
  get root() {
    return this.__root;
  }
  set root(e) {
    this.__root = e;
  }
  get node_capacity() {
    return this.__capacity;
  }
  set node_capacity(e) {
    if (this.__size > e)
      throw new Error(
        `Can't shrink capacity to ${e}, because it's below occupancy(${this.__size}).`
      );
    this.__set_capacity(e);
  }
  __grow_capacity() {
    if (this.__capacity >= Nh)
      throw new Error(
        "Can not grow capacity, already at maximum platform limit"
      );
    let e = Math.ceil(ne(this.__capacity * HE, this.__capacity + YE));
    e > Nh && (e = Nh), this.__set_capacity(e);
  }
  __set_capacity(e) {
    if (this.__capacity === e) return;
    const t = this.__data_uint32,
      r = new ArrayBuffer(e * Ag);
    (this.__data_buffer = r),
      (this.__data_float32 = new Float32Array(r)),
      (this.__data_uint32 = new Uint32Array(r)),
      this.__size > 0 &&
        Oo(
          t.buffer,
          t.byteOffset,
          r,
          0,
          Math.min(this.__size * Ag, r.byteLength)
        ),
      (this.__capacity = e);
  }
  trim() {
    this.__capacity > this.__size && this.__set_capacity(this.__size);
  }
  allocate_node() {
    let e;
    const t = this.__free_pointer;
    if (t > 0) {
      const o = t - 1;
      (e = this.__free[o]), (this.__free_pointer = o);
    } else
      (e = this.__size),
        e >= this.__capacity && this.__grow_capacity(),
        this.__size++;
    const r = B * e,
      i = this.__data_float32;
    (i[r] = Number.POSITIVE_INFINITY),
      (i[r + 1] = Number.POSITIVE_INFINITY),
      (i[r + 2] = Number.POSITIVE_INFINITY),
      (i[r + 3] = Number.NEGATIVE_INFINITY),
      (i[r + 4] = Number.NEGATIVE_INFINITY),
      (i[r + 5] = Number.NEGATIVE_INFINITY);
    const n = this.__data_uint32;
    return (
      (n[r + Ie] = He), (n[r + Ne] = He), (n[r + De] = He), (n[r + de] = 0), e
    );
  }
  release_node(e) {
    this.__free[this.__free_pointer++] = e;
  }
  node_is_leaf(e) {
    return this.__data_uint32[B * e + Ne] === He;
  }
  node_get_user_data(e) {
    return this.__data_uint32[B * e + Cf];
  }
  node_set_user_data(e, t) {
    this.__data_uint32[B * e + Cf] = t;
  }
  node_get_child1(e) {
    return this.__data_uint32[B * e + Ne];
  }
  node_set_child1(e, t) {
    this.__data_uint32[B * e + Ne] = t;
  }
  node_get_child2(e) {
    return this.__data_uint32[B * e + De];
  }
  node_set_child2(e, t) {
    this.__data_uint32[B * e + De] = t;
  }
  node_get_parent(e) {
    return this.__data_uint32[B * e + Ie];
  }
  node_set_parent(e, t) {
    this.__data_uint32[B * e + Ie] = t;
  }
  node_get_height(e) {
    return this.__data_uint32[B * e + de];
  }
  node_set_height(e, t) {
    this.__data_uint32[B * e + de] = t;
  }
  node_get_aabb(e, t) {
    const r = B * e,
      i = this.__data_float32;
    (t[0] = i[r]),
      (t[1] = i[r + 1]),
      (t[2] = i[r + 2]),
      (t[3] = i[r + 3]),
      (t[4] = i[r + 4]),
      (t[5] = i[r + 5]);
  }
  node_set_aabb(e, t) {
    const r = B * e,
      i = this.__data_float32;
    (i[r] = t[0]),
      (i[r + 1] = t[1]),
      (i[r + 2] = t[2]),
      (i[r + 3] = t[3]),
      (i[r + 4] = t[4]),
      (i[r + 5] = t[5]);
  }
  node_move_aabb(e, t) {
    this.node_set_aabb(e, t);
    const r = this.__data_uint32[B * e + Ie];
    r !== He && this.bubble_up_refit(r);
  }
  node_set_aabb_primitive(e, t, r, i, n, o, a) {
    const c = B * e,
      _ = this.__data_float32;
    (_[c] = t),
      (_[c + 1] = r),
      (_[c + 2] = i),
      (_[c + 3] = n),
      (_[c + 4] = o),
      (_[c + 5] = a);
  }
  node_get_surface_area(e) {
    const t = B * e,
      r = this.__data_float32,
      i = r[t],
      n = r[t + 1],
      o = r[t + 2],
      a = r[t + 3],
      c = r[t + 4],
      _ = r[t + 5];
    return nf(i, n, o, a, c, _);
  }
  node_get_combined_surface_area(e, t) {
    const r = B * e,
      i = B * t,
      n = this.__data_float32,
      o = n[r],
      a = n[i],
      c = ke(o, a),
      _ = n[r + 1],
      u = n[i + 1],
      d = ke(_, u),
      h = n[r + 2],
      p = n[i + 2],
      v = ke(h, p),
      f = n[r + 3],
      m = n[i + 3],
      g = ne(f, m),
      E = n[r + 4],
      y = n[i + 4],
      A = ne(E, y),
      T = n[r + 5],
      z = n[i + 5],
      C = ne(T, z);
    return nf(c, d, v, g, A, C);
  }
  node_set_combined_aabb(e, t, r) {
    const i = B * t,
      n = B * r,
      o = B * e,
      a = this.__data_float32,
      c = a[i],
      _ = a[i + 1],
      u = a[i + 2],
      d = a[i + 3],
      h = a[i + 4],
      p = a[i + 5],
      v = a[n],
      f = a[n + 1],
      m = a[n + 2],
      g = a[n + 3],
      E = a[n + 4],
      y = a[n + 5],
      A = ke(c, v),
      T = ke(_, f),
      z = ke(u, m),
      C = ne(d, g),
      U = ne(h, E),
      k = ne(p, y);
    (a[o] = A),
      (a[o + 1] = T),
      (a[o + 2] = z),
      (a[o + 3] = C),
      (a[o + 4] = U),
      (a[o + 5] = k);
  }
  insert_leaf(e) {
    let t = this.__data_uint32;
    if (this.__root === He) {
      (this.__root = e), (t[e * B + Ie] = He);
      return;
    }
    let r = this.__root;
    for (; this.node_is_leaf(r) === !1; ) {
      const a = r * B,
        c = t[a + Ne],
        _ = t[a + De],
        u = this.node_get_surface_area(r),
        d = this.node_get_combined_surface_area(r, e),
        h = 2 * d,
        p = 2 * (d - u);
      let v;
      if (this.node_is_leaf(c))
        v = this.node_get_combined_surface_area(e, c) + p;
      else {
        const m = this.node_get_surface_area(c);
        v = this.node_get_combined_surface_area(e, c) - m + p;
      }
      let f;
      if (this.node_is_leaf(_))
        f = this.node_get_combined_surface_area(e, _) + p;
      else {
        const m = this.node_get_surface_area(_);
        f = this.node_get_combined_surface_area(e, _) - m + p;
      }
      if (h < v && h < f) break;
      v < f ? (r = c) : (r = _);
    }
    const i = r,
      n = t[i * B + Ie],
      o = this.allocate_node();
    (t = this.__data_uint32),
      (t[o * B + Ie] = n),
      this.node_set_combined_aabb(o, e, i),
      (t[o * B + de] = t[i * B + de] + 1),
      n !== He
        ? t[n * B + Ne] === i
          ? (t[n * B + Ne] = o)
          : (t[n * B + De] = o)
        : (this.__root = o),
      (t[o * B + Ne] = i),
      (t[o * B + De] = e),
      (t[i * B + Ie] = o),
      (t[e * B + Ie] = o),
      this.bubble_up_update(o);
  }
  bubble_up_refit(e) {
    let t = e;
    const r = this.__data_uint32;
    do {
      const i = t * B,
        n = r[i + Ne],
        o = r[i + De];
      this.node_set_combined_aabb(t, n, o), (t = r[i + Ie]);
    } while (t !== He);
  }
  bubble_up_update(e) {
    let t = e;
    const r = this.__data_uint32;
    for (; t !== He; ) {
      t = this.balance(t);
      const i = t * B,
        n = r[i + Ne],
        o = r[i + De];
      (r[i + de] = 1 + ne(r[n * B + de], r[o * B + de])),
        this.node_set_combined_aabb(t, n, o),
        (t = r[i + Ie]);
    }
  }
  remove_leaf(e) {
    if (e === this.__root) {
      this.__root = He;
      return;
    }
    const t = this.__data_uint32,
      r = t[e * B + Ie],
      i = t[r * B + Ie];
    let n;
    const o = t[r * B + Ne];
    o === e ? (n = t[r * B + De]) : (n = o),
      i !== He
        ? (t[i * B + Ne] === r ? (t[i * B + Ne] = n) : (t[i * B + De] = n),
          (t[n * B + Ie] = i),
          this.release_node(r),
          this.bubble_up_update(i))
        : ((this.__root = n), (t[n * B + Ie] = He), this.release_node(r));
  }
  balance(e) {
    const t = this.__data_uint32;
    if (this.node_is_leaf(e) || t[e * B + de] < 2) return e;
    const r = t[e * B + Ne],
      i = t[e * B + De],
      n = t[i * B + de] - t[r * B + de];
    if (n > 1) {
      const o = t[i * B + Ne],
        a = t[i * B + De];
      t[i * B + Ne] = e;
      const c = t[e * B + Ie];
      return (
        (t[i * B + Ie] = c),
        (t[e * B + Ie] = i),
        c !== He
          ? t[c * B + Ne] === e
            ? (t[c * B + Ne] = i)
            : (t[c * B + De] = i)
          : (this.__root = i),
        t[o * B + de] > t[a * B + de]
          ? ((t[i * B + De] = o),
            (t[e * B + De] = a),
            (t[a * B + Ie] = e),
            this.node_set_combined_aabb(e, r, a),
            this.node_set_combined_aabb(i, e, o),
            (t[e * B + de] = 1 + ne(t[r * B + de], t[a * B + de])),
            (t[i * B + de] = 1 + ne(t[e * B + de], t[o * B + de])))
          : ((t[i * B + De] = a),
            (t[e * B + De] = o),
            (t[o * B + Ie] = e),
            this.node_set_combined_aabb(e, r, o),
            this.node_set_combined_aabb(i, e, a),
            (t[e * B + de] = 1 + ne(t[r * B + de], t[o * B + de])),
            (t[i * B + de] = 1 + ne(t[e * B + de], t[a * B + de]))),
        i
      );
    }
    if (n < -1) {
      const o = t[r * B + Ne],
        a = t[r * B + De];
      t[r * B + Ne] = e;
      const c = t[e * B + Ie];
      return (
        (t[r * B + Ie] = c),
        (t[e * B + Ie] = r),
        c !== He
          ? t[c * B + Ne] === e
            ? (t[c * B + Ne] = r)
            : (t[c * B + De] = r)
          : (this.__root = r),
        t[o * B + de] > t[a * B + de]
          ? ((t[r * B + De] = o),
            (t[e * B + Ne] = a),
            (t[a * B + Ie] = e),
            this.node_set_combined_aabb(e, i, a),
            this.node_set_combined_aabb(r, e, o),
            (t[e * B + de] = 1 + ne(t[i * B + de], t[a * B + de])),
            (t[r * B + de] = 1 + ne(t[e * B + de], t[o * B + de])))
          : ((t[r * B + De] = a),
            (t[e * B + Ne] = o),
            (t[o * B + Ie] = e),
            this.node_set_combined_aabb(e, i, o),
            this.node_set_combined_aabb(r, e, a),
            (t[e * B + de] = 1 + ne(t[i * B + de], t[o * B + de])),
            (t[r * B + de] = 1 + ne(t[e * B + de], t[a * B + de]))),
        r
      );
    }
    return e;
  }
  release_all() {
    (this.__root = He), (this.__size = 0), (this.__free_pointer = 0);
  }
  traverse(e, t) {
    let r = 0;
    const i = [],
      n = this.__root;
    n !== He && (i[r++] = n);
    const o = this.__data_uint32;
    for (; r > 0; ) {
      r--;
      const a = i[r];
      e.call(t, a, this);
      const c = a * B,
        _ = o[c + Ne],
        u = o[c + De];
      _ !== He && ((i[r++] = u), (i[r++] = _));
    }
  }
  collect_nodes_all(e, t) {
    let r = t;
    return (
      this.traverse((i) => {
        e[r++] = i;
      }),
      r - t
    );
  }
  __move_node_links(e, t) {
    const r = this.__data_uint32,
      i = e * B,
      n = r[i + Ne],
      o = r[i + De];
    n !== He && ((r[n * B + Ie] = t), (r[o * B + Ie] = t));
    const a = r[i + Ie];
    a !== He &&
      (r[a * B + Ne] === e ? (r[a * B + Ne] = t) : (r[a * B + De] = t));
  }
  swap_nodes(e, t) {
    const r = this.__data_uint32,
      i = e * B,
      n = t * B;
    return r[i + Ie] === t || r[n + Ie] === e
      ? !1
      : (this.__move_node_links(e, t),
        this.__move_node_links(t, e),
        st(r, i, this.__free, this.__free_pointer, B),
        st(r, n, r, i, B),
        st(this.__free, this.__free_pointer, r, n, B),
        this.__root === e
          ? (this.__root = t)
          : this.__root === t && (this.__root = e),
        !0);
  }
}
function jE(s, e, t, r, i) {
  const n = t.getVertexIndex(r, 0);
  (s[e] = s[e + 3] = i[n * 3]),
    (s[e + 1] = s[e + 4] = i[n * 3 + 1]),
    (s[e + 2] = s[e + 5] = i[n * 3 + 2]);
  for (let o = 1; o < 4; o++) {
    const c = t.getVertexIndex(r, o) * 3,
      _ = i[c],
      u = i[c + 1],
      d = i[c + 2];
    _ < s[e] ? (s[e] = _) : _ > s[e + 3] && (s[e + 3] = _),
      u < s[e + 1] ? (s[e + 1] = u) : u > s[e + 4] && (s[e + 4] = u),
      d < s[e + 2] ? (s[e + 2] = d) : d > s[e + 5] && (s[e + 5] = d);
  }
}
function XE(s, e, t) {
  const r = e.count;
  s.release_all(), (s.node_capacity = Math.max(0, r * 2 - 1));
  const i = s.data_float32;
  for (let n = 0; n < r; n++) {
    const o = s.allocate_node(),
      a = o * B;
    jE(i, a, e, n, t), s.node_set_user_data(o, n), s.insert_leaf(o);
  }
}
function WE(s, e) {
  let t = e.count;
  const r = [];
  e.runtime_sized && (t = Math.floor((s.capacity - s.position) / e.type.align));
  for (let i = 0; i < t; i++) r[i] = Rp(s, e.type);
  return r;
}
function au(s, e) {
  const t = new Float32Array(e);
  return s.readFloat32Array(t, 0, e), t;
}
function Mh(s, e) {
  const t = new Uint32Array(e);
  return s.readUint32Array(t, 0, e), t;
}
function Rp(s, e) {
  if (((s.position = cv(s.position, e.align)), e instanceof X)) return WE(s, e);
  if (e instanceof Struct) return JE(s, e);
  switch (e) {
    case Ce.u32:
    case Ce["atomic<u32>"]:
      return s.readUint32();
    case Ce.i32:
    case Ce["atomic<i32>"]:
      return s.readInt32();
    case Ce.f32:
      return s.readFloat32();
    case Ce["vec2<u32>"]:
      return Mh(s, 2);
    case Ce["vec3<u32>"]:
      return Mh(s, 3);
    case Ce["vec4<u32>"]:
      return Mh(s, 4);
    case Ce["vec2<f32>"]:
      return au(s, 2);
    case Ce["vec3<f32>"]:
      return au(s, 3);
    case Ce["vec4<f32>"]:
      return au(s, 4);
    case Ce["mat4x4<f32>"]:
      return au(s, 16);
    default:
      throw new Error(`Unsupported type ${e}`);
  }
}
function JE(s, e) {
  const t = e.fields,
    r = s.position,
    i = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    (s.position = r + o.offset), (i[o.name] = Rp(s, o.type));
  }
  return i;
}
function T2(s, e, t = 0, r = (e.byteLength - t) / Wt(s.size, s.align)) {
  const i = [],
    n = Ii.fromArrayBuffer(e);
  (n.endianness = Sc()), (n.position = t);
  for (let o = 0; o < r; o++) {
    const a = Rp(n, s);
    i.push(a);
  }
  return i;
}
async function Uf({ buffer: s, device: e, type: t, offset: r = 0, count: i }) {
  const n = t.runtime_sized;
  if (n) {
    if (i !== false && i !== 1)
      throw new Error(
        `Type is runtime sized, only valid count is 1, instead got ${i}`
      );
    i = 1;
  } else i === false && (i = Math.floor((s.size - r) / t.size));
  let o;
  return (
    n ? (o = s.size) : (o = i * t.size),
    Sf({
      buffer: s,
      buffer_size: o,
      device: e,
      buffer_offset: r,
      callback: (a) => T2(t, a, 0, i),
    })
  );
}
const Mi = Struct.from({
  bounds: "array<f32,6>",
  parent: "u32",
  child_1: "u32",
  child_2: "u32",
  height: "u32",
});
function E2({ device: s, bvh: e, usage: t, label: r = "BVH" }) {
  const i = e.data_buffer,
    n = B * 4,
    o = e.node_capacity * n,
    a = s.createBuffer({
      label: r,
      size: Math.max(n, o) + 4,
      usage: t,
      mappedAtCreation: !0,
    }),
    c = a.getMappedRange(),
    _ = new Uint32Array(c, 0, 1);
  return (_[0] = e.root), Oo(i, 0, c, 4, o), a.unmap(), a;
}
const Co = Struct.from({ probe_count: "u32" }, "LightProbeVolumeMetadata");
var Vr, Gs, mi, Vs, Wn, Oa, Ft, Vl, bn, A2, S2, z2;
class ZE {
  constructor(e, t) {
    b(this, bn);
    b(this, Vr);
    b(this, Gs);
    b(this, mi);
    b(this, Vs);
    b(this, Wn);
    b(this, Oa, new kp());
    b(this, Ft);
    b(this, Vl, 0);
    S(this, Ft, e),
      S(this, Vr, t),
      S(
        this,
        mi,
        getProperty(this, Ft).createBuffer({
          label: "Light Probes",
          size: ut.size,
          usage:
            GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
        })
      ),
      S(
        this,
        Vs,
        getProperty(this, Ft).createBuffer({
          label: "Light Probe Volume / metadata",
          size: Co.size,
          usage: GPUBufferUsage.UNIFORM,
        })
      ),
      S(
        this,
        Gs,
        getProperty(this, Ft).createBuffer({
          label: "Tetrahedral Mesh",
          usage:
            GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          size: vn.size,
        })
      ),
      S(
        this,
        Wn,
        getProperty(this, Ft).createBuffer({
          label: "LPV Mesh BVH",
          usage: GPUBufferUsage.STORAGE,
          size: 4 + Mi.size,
        })
      );
  }
  get source() {
    return getProperty(this, Vr);
  }
  get buffer_mesh() {
    return getProperty(this, Gs);
  }
  get buffer_probes() {
    return getProperty(this, mi);
  }
  get buffer_metadata() {
    return getProperty(this, Vs);
  }
  get buffer_mesh_bvh() {
    return getProperty(this, Wn);
  }
  push_to_gpu() {
    const e = getProperty(this, Gs);
    e.destroy();
    const t = getProperty(this, Vr).mesh,
      i = getProperty(this, Ft).createBuffer({
        label: e.label,
        usage: e.usage,
        size: Math.max(1, t.count) * vn.size,
        mappedAtCreation: !0,
      }),
      n = i.getMappedRange(),
      o = t.count,
      a = new Uint32Array(n);
    for (let c = 0; c < o; c++) {
      const _ = c * 8;
      for (let u = 0; u < 4; u++) a[_ + u] = t.getVertexIndex(c, u);
      for (let u = 0; u < 4; u++) a[_ + 4 + u] = t.getNeighbour(c, u) >> 2;
    }
    i.unmap(),
      S(this, Gs, i),
      P(this, bn, S2).call(this),
      P(this, bn, z2).call(this),
      P(this, bn, A2).call(this);
  }
  commit() {
    S(this, Vl, getProperty(this, Vr).version), this.push_to_gpu();
  }
  update() {
    getProperty(this, Vr).version !== getProperty(this, Vl) && this.commit();
  }
  destroy() {
    getProperty(this, Gs).destroy(),
      getProperty(this, mi).destroy(),
      getProperty(this, Vs).destroy();
  }
  async download() {
    const e = await Uf({
        buffer: getProperty(this, mi),
        device: getProperty(this, Ft),
        type: ut,
        count: this.source.probe_count,
      }),
      t = e.length;
    for (let r = 0; r < t; r++) {
      const i = e[r];
      st(i.coefficients, 0, getProperty(this, Vr).coefficients, r * 27, 27);
    }
  }
  debugReadProbes() {
    Uf({
      buffer: getProperty(this, mi),
      device: getProperty(this, Ft),
      type: ut,
      count: this.source.probe_count,
    }).then(console.warn);
  }
}
(Vr = new WeakMap()),
  (Gs = new WeakMap()),
  (mi = new WeakMap()),
  (Vs = new WeakMap()),
  (Wn = new WeakMap()),
  (Oa = new WeakMap()),
  (Ft = new WeakMap()),
  (Vl = new WeakMap()),
  (bn = new WeakSet()),
  (A2 = function () {
    XE(getProperty(this, Oa), this.source.mesh, this.source.positions),
      getProperty(this, Oa).trim();
    const e = getProperty(this, Wn);
    S(
      this,
      Wn,
      E2({
        device: getProperty(this, Ft),
        bvh: getProperty(this, Oa),
        usage: e.usage,
        label: e.label,
      })
    ),
      e.destroy();
  }),
  (S2 = function () {
    const e = getProperty(this, mi);
    e.destroy();
    const t = ut.size,
      r = getProperty(this, Vr),
      i = r.probe_count,
      n = getProperty(this, Ft).createBuffer({
        label: e.label,
        size: Math.max(1, i) * t,
        usage: e.usage,
        mappedAtCreation: !0,
      });
    S(this, mi, n);
    const o = n.getMappedRange(),
      a = new Float32Array(o),
      c = new Uint32Array(o);
    a.fill(0);
    const _ = t >>> 2,
      u = ut.get("position").offset >>> 2,
      d = ut.get("coefficients").offset >>> 2,
      h = ut.get("distance_max").offset >>> 2,
      p = ut.get("accumulated_samples").offset >>> 2,
      v = ut.get("depth").offset >>> 2,
      f = vc.size >>> 2,
      m = r.positions;
    for (let y = 0; y < i; y++) {
      const A = y * _;
      st(m, y * 3, a, A + u, 3), (a[A + h] = 0), (c[A + p] = 0);
      const T = A + v,
        z = T + f;
      st(r.coefficients, y * 27, a, A + d, 27), a.fill(1, T, z);
    }
    const g = r.mesh,
      E = g.count;
    for (let y = 0; y < E; y++)
      for (let A = 0; A < 4; A++) {
        const T = g.getVertexIndex(y, A),
          z = T * 3,
          C = m[z],
          U = m[z + 1],
          k = m[z + 2];
        for (let N = A + 1; N < 4; N++) {
          const M = g.getVertexIndex(y, N),
            I = M * 3,
            L = m[I],
            F = m[I + 1],
            D = m[I + 2],
            H = rp(C, U, k, L, F, D),
            J = T * _ + h,
            R = M * _ + h;
          (a[J] = Math.max(a[J], H)), (a[R] = Math.max(a[R], H));
        }
      }
    n.unmap();
  }),
  (z2 = function () {
    const e = getProperty(this, Vs);
    e.destroy();
    const t = getProperty(this, Ft).createBuffer({
      label: e.label,
      size: Co.size,
      usage: e.usage,
      mappedAtCreation: !0,
    });
    S(this, Vs, t);
    const r = t.getMappedRange(),
      i = new DataView(r),
      n = Sc();
    i.setUint32(
      Co.get("probe_count").offset,
      getProperty(this, Vr).probe_count,
      n
    ),
      t.unmap();
  });
var $l, Fa;
class KE {
  constructor() {
    b(this, $l, []);
    b(this, Fa, 0);
  }
  get elements() {
    return getProperty(this, $l);
  }
  get version() {
    return getProperty(this, Fa);
  }
  set needsUpdate(e) {
    e && ze(this, Fa)._++;
  }
  add(e) {
    getProperty(this, $l).push(e), ze(this, Fa)._++;
  }
}
($l = new WeakMap()), (Fa = new WeakMap());
function cu(s, e, t, r, i, n, o, a, c, _, u, d, h, p) {
  const v = a * h - c * d,
    f = c * u - o * h,
    m = o * d - a * u,
    g = d * i - h * r,
    E = h * t - u * i,
    y = u * r - d * t,
    A = r * c - i * a,
    T = i * o - t * c,
    z = t * a - r * o,
    C = dt(t, r, i, v, f, m);
  if (C === 0) return !1;
  const U = 1 / C,
    k = -n,
    N = (v * k - g * _ - A * p) * U,
    M = (f * k - E * _ - T * p) * U,
    I = (m * k - y * _ - z * p) * U;
  return (s[e] = N), (s[e + 1] = M), (s[e + 2] = I), !0;
}
const ee = new Float32Array([
  Math.sqrt(8 / 9),
  0,
  -1 / 3,
  -Math.sqrt(2 / 9),
  Math.sqrt(2 / 3),
  -1 / 3,
  -Math.sqrt(2 / 9),
  -Math.sqrt(2 / 3),
  -1 / 3,
  0,
  0,
  1,
]);
function QE(s, e, t, r, i) {
  if (r <= 0) return;
  let n = t[0],
    o = t[1],
    a = t[2],
    c = dt(n, o, a, ee[0], ee[1], ee[2]),
    _ = dt(n, o, a, ee[3], ee[4], ee[5]),
    u = dt(n, o, a, ee[6], ee[7], ee[8]),
    d = dt(n, o, a, ee[9], ee[10], ee[11]),
    h = c,
    p = _,
    v = u,
    f = d;
  for (let m = 1; m < r; m++) {
    const g = m * 3;
    (n = t[g]),
      (o = t[g + 1]),
      (a = t[g + 2]),
      (c = dt(n, o, a, ee[0], ee[1], ee[2])),
      (_ = dt(n, o, a, ee[3], ee[4], ee[5])),
      (u = dt(n, o, a, ee[6], ee[7], ee[8])),
      (d = dt(n, o, a, ee[9], ee[10], ee[11])),
      (h = ke(h, c)),
      (p = ke(p, _)),
      (v = ke(v, u)),
      (f = ke(f, d));
  }
  (h -= i),
    (p -= i),
    (v -= i),
    (f -= i),
    cu(
      s,
      e,
      ee[0],
      ee[1],
      ee[2],
      -h,
      ee[3],
      ee[4],
      ee[5],
      -p,
      ee[9],
      ee[10],
      ee[11],
      -f
    ),
    cu(
      s,
      e + 3,
      ee[3],
      ee[4],
      ee[5],
      -p,
      ee[6],
      ee[7],
      ee[8],
      -v,
      ee[9],
      ee[10],
      ee[11],
      -f
    ),
    cu(
      s,
      e + 6,
      ee[0],
      ee[1],
      ee[2],
      -h,
      ee[3],
      ee[4],
      ee[5],
      -p,
      ee[6],
      ee[7],
      ee[8],
      -v
    ),
    cu(
      s,
      e + 9,
      ee[6],
      ee[7],
      ee[8],
      -v,
      ee[0],
      ee[1],
      ee[2],
      -h,
      ee[9],
      ee[10],
      ee[11],
      -f
    );
}
const bt = 11102230246251565e-32,
  G = 134217729,
  C2 = (3 + 8 * bt) * bt;
function Vt(s, e, t, r, i) {
  let n,
    o,
    a,
    c,
    _ = e[0],
    u = r[0],
    d = 0,
    h = 0;
  u > _ == u > -_ ? ((n = _), (_ = e[++d])) : ((n = u), (u = r[++h]));
  let p = 0;
  if (d < s && h < t)
    for (
      u > _ == u > -_
        ? ((o = _ + n), (a = n - (o - _)), (_ = e[++d]))
        : ((o = u + n), (a = n - (o - u)), (u = r[++h])),
        n = o,
        a !== 0 && (i[p++] = a);
      d < s && h < t;

    )
      u > _ == u > -_
        ? ((o = n + _), (c = o - n), (a = n - (o - c) + (_ - c)), (_ = e[++d]))
        : ((o = n + u), (c = o - n), (a = n - (o - c) + (u - c)), (u = r[++h])),
        (n = o),
        a !== 0 && (i[p++] = a);
  for (; d < s; )
    (o = n + _),
      (c = o - n),
      (a = n - (o - c) + (_ - c)),
      (_ = e[++d]),
      (n = o),
      a !== 0 && (i[p++] = a);
  for (; h < t; )
    (o = n + u),
      (c = o - n),
      (a = n - (o - c) + (u - c)),
      (u = r[++h]),
      (n = o),
      a !== 0 && (i[p++] = a);
  return (n !== 0 || p === 0) && (i[p++] = n), p;
}
function ol(s, e, t, r, i, n, o, a) {
  return Vt(Vt(s, e, t, r, o), o, i, n, a);
}
function Le(s, e, t, r) {
  let i, n, o, a, c, _, u, d, h, p, v;
  (u = G * t), (p = u - (u - t)), (v = t - p);
  let f = e[0];
  (i = f * t),
    (u = G * f),
    (d = u - (u - f)),
    (h = f - d),
    (o = h * v - (i - d * p - h * p - d * v));
  let m = 0;
  o !== 0 && (r[m++] = o);
  for (let g = 1; g < s; g++)
    (f = e[g]),
      (a = f * t),
      (u = G * f),
      (d = u - (u - f)),
      (h = f - d),
      (c = h * v - (a - d * p - h * p - d * v)),
      (n = i + c),
      (_ = n - i),
      (o = i - (n - _) + (c - _)),
      o !== 0 && (r[m++] = o),
      (i = a + n),
      (o = n - (i - a)),
      o !== 0 && (r[m++] = o);
  return (i !== 0 || m === 0) && (r[m++] = i), m;
}
function If(s, e) {
  for (let t = 0; t < s; t++) e[t] = -e[t];
  return s;
}
function U2(s, e) {
  let t = e[0];
  for (let r = 1; r < s; r++) t += e[r];
  return t;
}
function Q(s) {
  return new Float64Array(s);
}
const eA = (7 + 56 * bt) * bt,
  tA = (3 + 28 * bt) * bt,
  rA = (26 + 288 * bt) * bt * bt,
  Zo = Q(4),
  Ko = Q(4),
  Qo = Q(4),
  zg = Q(4),
  Cg = Q(4),
  Ug = Q(4),
  Ig = Q(4),
  Ng = Q(4),
  Mg = Q(4),
  kh = Q(8),
  Rh = Q(8),
  Lh = Q(8),
  si = Q(4),
  lu = Q(8),
  kg = Q(8),
  kt = Q(8),
  ea = Q(12);
let ua = Q(192),
  Ph = Q(192);
function Pr(s, e, t) {
  s = Vt(s, ua, e, t, Ph);
  const r = ua;
  return (ua = Ph), (Ph = r), s;
}
function Bh(s, e, t, r, i, n, o, a) {
  let c, _, u, d, h, p, v, f, m, g, E, y, A, T, z;
  return s === 0
    ? e === 0
      ? ((o[0] = 0), (a[0] = 0), 1)
      : ((z = -e),
        (g = z * t),
        (_ = G * z),
        (u = _ - (_ - z)),
        (d = z - u),
        (_ = G * t),
        (h = _ - (_ - t)),
        (p = t - h),
        (o[0] = d * p - (g - u * h - d * h - u * p)),
        (o[1] = g),
        (g = e * i),
        (_ = G * e),
        (u = _ - (_ - e)),
        (d = e - u),
        (_ = G * i),
        (h = _ - (_ - i)),
        (p = i - h),
        (a[0] = d * p - (g - u * h - d * h - u * p)),
        (a[1] = g),
        2)
    : e === 0
    ? ((g = s * r),
      (_ = G * s),
      (u = _ - (_ - s)),
      (d = s - u),
      (_ = G * r),
      (h = _ - (_ - r)),
      (p = r - h),
      (o[0] = d * p - (g - u * h - d * h - u * p)),
      (o[1] = g),
      (z = -s),
      (g = z * n),
      (_ = G * z),
      (u = _ - (_ - z)),
      (d = z - u),
      (_ = G * n),
      (h = _ - (_ - n)),
      (p = n - h),
      (a[0] = d * p - (g - u * h - d * h - u * p)),
      (a[1] = g),
      2)
    : ((g = s * r),
      (_ = G * s),
      (u = _ - (_ - s)),
      (d = s - u),
      (_ = G * r),
      (h = _ - (_ - r)),
      (p = r - h),
      (E = d * p - (g - u * h - d * h - u * p)),
      (y = e * t),
      (_ = G * e),
      (u = _ - (_ - e)),
      (d = e - u),
      (_ = G * t),
      (h = _ - (_ - t)),
      (p = t - h),
      (A = d * p - (y - u * h - d * h - u * p)),
      (v = E - A),
      (c = E - v),
      (o[0] = E - (v + c) + (c - A)),
      (f = g + v),
      (c = f - g),
      (m = g - (f - c) + (v - c)),
      (v = m - y),
      (c = m - v),
      (o[1] = m - (v + c) + (c - y)),
      (T = f + v),
      (c = T - f),
      (o[2] = f - (T - c) + (v - c)),
      (o[3] = T),
      (g = e * i),
      (_ = G * e),
      (u = _ - (_ - e)),
      (d = e - u),
      (_ = G * i),
      (h = _ - (_ - i)),
      (p = i - h),
      (E = d * p - (g - u * h - d * h - u * p)),
      (y = s * n),
      (_ = G * s),
      (u = _ - (_ - s)),
      (d = s - u),
      (_ = G * n),
      (h = _ - (_ - n)),
      (p = n - h),
      (A = d * p - (y - u * h - d * h - u * p)),
      (v = E - A),
      (c = E - v),
      (a[0] = E - (v + c) + (c - A)),
      (f = g + v),
      (c = f - g),
      (m = g - (f - c) + (v - c)),
      (v = m - y),
      (c = m - v),
      (a[1] = m - (v + c) + (c - y)),
      (T = f + v),
      (c = T - f),
      (a[2] = f - (T - c) + (v - c)),
      (a[3] = T),
      4);
}
function ta(s, e, t, r, i) {
  let n, o, a, c, _, u, d, h, p, v, f, m, g;
  return (
    (f = e * t),
    (o = G * e),
    (a = o - (o - e)),
    (c = e - a),
    (o = G * t),
    (_ = o - (o - t)),
    (u = t - _),
    (m = c * u - (f - a * _ - c * _ - a * u)),
    (o = G * r),
    (_ = o - (o - r)),
    (u = r - _),
    (d = m * r),
    (o = G * m),
    (a = o - (o - m)),
    (c = m - a),
    (si[0] = c * u - (d - a * _ - c * _ - a * u)),
    (h = f * r),
    (o = G * f),
    (a = o - (o - f)),
    (c = f - a),
    (v = c * u - (h - a * _ - c * _ - a * u)),
    (p = d + v),
    (n = p - d),
    (si[1] = d - (p - n) + (v - n)),
    (g = h + p),
    (si[2] = p - (g - h)),
    (si[3] = g),
    (s = Pr(s, 4, si)),
    i !== 0 &&
      ((o = G * i),
      (_ = o - (o - i)),
      (u = i - _),
      (d = m * i),
      (o = G * m),
      (a = o - (o - m)),
      (c = m - a),
      (si[0] = c * u - (d - a * _ - c * _ - a * u)),
      (h = f * i),
      (o = G * f),
      (a = o - (o - f)),
      (c = f - a),
      (v = c * u - (h - a * _ - c * _ - a * u)),
      (p = d + v),
      (n = p - d),
      (si[1] = d - (p - n) + (v - n)),
      (g = h + p),
      (si[2] = p - (g - h)),
      (si[3] = g),
      (s = Pr(s, 4, si))),
    s
  );
}
function iA(s, e, t, r, i, n, o, a, c, _, u, d, h) {
  let p, v, f, m, g, E, y, A, T, z, C, U, k, N, M, I, L, F, D, H, J, R, O, q;
  const Y = s - _,
    $ = r - _,
    K = o - _,
    V = e - u,
    j = i - u,
    te = a - u,
    re = t - d,
    ie = n - d,
    _e = c - d;
  (H = $ * te),
    (U = G * $),
    (k = U - (U - $)),
    (N = $ - k),
    (U = G * te),
    (M = U - (U - te)),
    (I = te - M),
    (J = N * I - (H - k * M - N * M - k * I)),
    (R = K * j),
    (U = G * K),
    (k = U - (U - K)),
    (N = K - k),
    (U = G * j),
    (M = U - (U - j)),
    (I = j - M),
    (O = N * I - (R - k * M - N * M - k * I)),
    (L = J - O),
    (C = J - L),
    (Zo[0] = J - (L + C) + (C - O)),
    (F = H + L),
    (C = F - H),
    (D = H - (F - C) + (L - C)),
    (L = D - R),
    (C = D - L),
    (Zo[1] = D - (L + C) + (C - R)),
    (q = F + L),
    (C = q - F),
    (Zo[2] = F - (q - C) + (L - C)),
    (Zo[3] = q),
    (H = K * V),
    (U = G * K),
    (k = U - (U - K)),
    (N = K - k),
    (U = G * V),
    (M = U - (U - V)),
    (I = V - M),
    (J = N * I - (H - k * M - N * M - k * I)),
    (R = Y * te),
    (U = G * Y),
    (k = U - (U - Y)),
    (N = Y - k),
    (U = G * te),
    (M = U - (U - te)),
    (I = te - M),
    (O = N * I - (R - k * M - N * M - k * I)),
    (L = J - O),
    (C = J - L),
    (Ko[0] = J - (L + C) + (C - O)),
    (F = H + L),
    (C = F - H),
    (D = H - (F - C) + (L - C)),
    (L = D - R),
    (C = D - L),
    (Ko[1] = D - (L + C) + (C - R)),
    (q = F + L),
    (C = q - F),
    (Ko[2] = F - (q - C) + (L - C)),
    (Ko[3] = q),
    (H = Y * j),
    (U = G * Y),
    (k = U - (U - Y)),
    (N = Y - k),
    (U = G * j),
    (M = U - (U - j)),
    (I = j - M),
    (J = N * I - (H - k * M - N * M - k * I)),
    (R = $ * V),
    (U = G * $),
    (k = U - (U - $)),
    (N = $ - k),
    (U = G * V),
    (M = U - (U - V)),
    (I = V - M),
    (O = N * I - (R - k * M - N * M - k * I)),
    (L = J - O),
    (C = J - L),
    (Qo[0] = J - (L + C) + (C - O)),
    (F = H + L),
    (C = F - H),
    (D = H - (F - C) + (L - C)),
    (L = D - R),
    (C = D - L),
    (Qo[1] = D - (L + C) + (C - R)),
    (q = F + L),
    (C = q - F),
    (Qo[2] = F - (q - C) + (L - C)),
    (Qo[3] = q),
    (p = Vt(
      Vt(Le(4, Zo, re, lu), lu, Le(4, Ko, ie, kg), kg, kt),
      kt,
      Le(4, Qo, _e, lu),
      lu,
      ua
    ));
  let ae = U2(p, ua),
    ue = tA * h;
  if (
    ae >= ue ||
    -ae >= ue ||
    ((C = s - Y),
    (v = s - (Y + C) + (C - _)),
    (C = r - $),
    (f = r - ($ + C) + (C - _)),
    (C = o - K),
    (m = o - (K + C) + (C - _)),
    (C = e - V),
    (g = e - (V + C) + (C - u)),
    (C = i - j),
    (E = i - (j + C) + (C - u)),
    (C = a - te),
    (y = a - (te + C) + (C - u)),
    (C = t - re),
    (A = t - (re + C) + (C - d)),
    (C = n - ie),
    (T = n - (ie + C) + (C - d)),
    (C = c - _e),
    (z = c - (_e + C) + (C - d)),
    v === 0 &&
      f === 0 &&
      m === 0 &&
      g === 0 &&
      E === 0 &&
      y === 0 &&
      A === 0 &&
      T === 0 &&
      z === 0) ||
    ((ue = rA * h + C2 * Math.abs(ae)),
    (ae +=
      re * ($ * y + te * f - (j * m + K * E)) +
      A * ($ * te - j * K) +
      ie * (K * g + V * m - (te * v + Y * y)) +
      T * (K * V - te * Y) +
      _e * (Y * E + j * v - (V * f + $ * g)) +
      z * (Y * j - V * $)),
    ae >= ue || -ae >= ue)
  )
    return ae;
  const be = Bh(v, g, $, j, K, te, zg, Cg),
    ye = Bh(f, E, K, te, Y, V, Ug, Ig),
    he = Bh(m, y, Y, V, $, j, Ng, Mg),
    Ae = Vt(ye, Ug, he, Mg, kh);
  p = Pr(p, Le(Ae, kh, re, kt), kt);
  const we = Vt(he, Ng, be, Cg, Rh);
  p = Pr(p, Le(we, Rh, ie, kt), kt);
  const Te = Vt(be, zg, ye, Ig, Lh);
  return (
    (p = Pr(p, Le(Te, Lh, _e, kt), kt)),
    A !== 0 &&
      ((p = Pr(p, Le(4, Zo, A, ea), ea)), (p = Pr(p, Le(Ae, kh, A, kt), kt))),
    T !== 0 &&
      ((p = Pr(p, Le(4, Ko, T, ea), ea)), (p = Pr(p, Le(we, Rh, T, kt), kt))),
    z !== 0 &&
      ((p = Pr(p, Le(4, Qo, z, ea), ea)), (p = Pr(p, Le(Te, Lh, z, kt), kt))),
    v !== 0 &&
      (E !== 0 && (p = ta(p, v, E, _e, z)),
      y !== 0 && (p = ta(p, -v, y, ie, T))),
    f !== 0 &&
      (y !== 0 && (p = ta(p, f, y, re, A)),
      g !== 0 && (p = ta(p, -f, g, _e, z))),
    m !== 0 &&
      (g !== 0 && (p = ta(p, m, g, ie, T)),
      E !== 0 && (p = ta(p, -m, E, re, A))),
    ua[p - 1]
  );
}
function I2(s, e, t, r, i, n, o, a, c, _, u, d) {
  const h = s - _,
    p = r - _,
    v = o - _,
    f = e - u,
    m = i - u,
    g = a - u,
    E = t - d,
    y = n - d,
    A = c - d,
    T = p * g,
    z = v * m,
    C = v * f,
    U = h * g,
    k = h * m,
    N = p * f,
    M = E * (T - z) + y * (C - U) + A * (k - N),
    I =
      (Math.abs(T) + Math.abs(z)) * Math.abs(E) +
      (Math.abs(C) + Math.abs(U)) * Math.abs(y) +
      (Math.abs(k) + Math.abs(N)) * Math.abs(A),
    L = eA * I;
  return M > L || -M > L ? M : iA(s, e, t, r, i, n, o, a, c, _, u, d, I);
}
const sA = (16 + 224 * bt) * bt,
  nA = (5 + 72 * bt) * bt,
  oA = (71 + 1408 * bt) * bt * bt,
  rr = Q(4),
  ir = Q(4),
  sr = Q(4),
  An = Q(4),
  Sn = Q(4),
  nr = Q(4),
  or = Q(4),
  zn = Q(4),
  ar = Q(4),
  Cn = Q(4),
  Oh = Q(24),
  Fh = Q(24),
  Dh = Q(24),
  Gh = Q(24),
  Vh = Q(24),
  $h = Q(24),
  qh = Q(24),
  Hh = Q(24),
  Yh = Q(24),
  jh = Q(24),
  Jc = Q(1152),
  Mu = Q(1152),
  Zc = Q(1152),
  ku = Q(1152),
  Rg = Q(1152),
  Nf = Q(2304),
  Mf = Q(2304),
  Lg = Q(3456),
  Pg = Q(5760),
  Bg = Q(8),
  Og = Q(8),
  Fg = Q(8),
  aA = Q(16),
  _u = Q(24),
  Ns = Q(48),
  Xh = Q(48),
  uu = Q(96),
  Un = Q(192),
  Dg = Q(384),
  Gg = Q(384),
  Vg = Q(384),
  cA = Q(768);
function Lr(s, e, t, r, i, n, o) {
  return ol(
    Le(4, s, r, Bg),
    Bg,
    Le(4, e, i, Og),
    Og,
    Le(4, t, n, Fg),
    Fg,
    aA,
    o
  );
}
function Dc(s, e, t, r, i, n, o, a, c, _, u, d) {
  const h = Vt(Vt(s, e, t, r, Ns), Ns, If(Vt(i, n, o, a, Xh), Xh), Xh, uu);
  return ol(
    Le(Le(h, uu, c, Un), Un, c, Dg),
    Dg,
    Le(Le(h, uu, _, Un), Un, _, Gg),
    Gg,
    Le(Le(h, uu, u, Un), Un, u, Vg),
    Vg,
    cA,
    d
  );
}
function lA(s, e, t, r, i, n, o, a, c, _, u, d, h, p, v) {
  let f, m, g, E, y, A, T, z, C, U, k, N, M, I;
  (U = s * i),
    (m = G * s),
    (g = m - (m - s)),
    (E = s - g),
    (m = G * i),
    (y = m - (m - i)),
    (A = i - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = r * e),
    (m = G * r),
    (g = m - (m - r)),
    (E = r - g),
    (m = G * e),
    (y = m - (m - e)),
    (A = e - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (rr[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (rr[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (rr[2] = z - (I - f) + (T - f)),
    (rr[3] = I),
    (U = r * a),
    (m = G * r),
    (g = m - (m - r)),
    (E = r - g),
    (m = G * a),
    (y = m - (m - a)),
    (A = a - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = o * i),
    (m = G * o),
    (g = m - (m - o)),
    (E = o - g),
    (m = G * i),
    (y = m - (m - i)),
    (A = i - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (ir[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (ir[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (ir[2] = z - (I - f) + (T - f)),
    (ir[3] = I),
    (U = o * u),
    (m = G * o),
    (g = m - (m - o)),
    (E = o - g),
    (m = G * u),
    (y = m - (m - u)),
    (A = u - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = _ * a),
    (m = G * _),
    (g = m - (m - _)),
    (E = _ - g),
    (m = G * a),
    (y = m - (m - a)),
    (A = a - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (sr[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (sr[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (sr[2] = z - (I - f) + (T - f)),
    (sr[3] = I),
    (U = _ * p),
    (m = G * _),
    (g = m - (m - _)),
    (E = _ - g),
    (m = G * p),
    (y = m - (m - p)),
    (A = p - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = h * u),
    (m = G * h),
    (g = m - (m - h)),
    (E = h - g),
    (m = G * u),
    (y = m - (m - u)),
    (A = u - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (An[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (An[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (An[2] = z - (I - f) + (T - f)),
    (An[3] = I),
    (U = h * e),
    (m = G * h),
    (g = m - (m - h)),
    (E = h - g),
    (m = G * e),
    (y = m - (m - e)),
    (A = e - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = s * p),
    (m = G * s),
    (g = m - (m - s)),
    (E = s - g),
    (m = G * p),
    (y = m - (m - p)),
    (A = p - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (Sn[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (Sn[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (Sn[2] = z - (I - f) + (T - f)),
    (Sn[3] = I),
    (U = s * a),
    (m = G * s),
    (g = m - (m - s)),
    (E = s - g),
    (m = G * a),
    (y = m - (m - a)),
    (A = a - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = o * e),
    (m = G * o),
    (g = m - (m - o)),
    (E = o - g),
    (m = G * e),
    (y = m - (m - e)),
    (A = e - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (nr[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (nr[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (nr[2] = z - (I - f) + (T - f)),
    (nr[3] = I),
    (U = r * u),
    (m = G * r),
    (g = m - (m - r)),
    (E = r - g),
    (m = G * u),
    (y = m - (m - u)),
    (A = u - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = _ * i),
    (m = G * _),
    (g = m - (m - _)),
    (E = _ - g),
    (m = G * i),
    (y = m - (m - i)),
    (A = i - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (or[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (or[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (or[2] = z - (I - f) + (T - f)),
    (or[3] = I),
    (U = o * p),
    (m = G * o),
    (g = m - (m - o)),
    (E = o - g),
    (m = G * p),
    (y = m - (m - p)),
    (A = p - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = h * a),
    (m = G * h),
    (g = m - (m - h)),
    (E = h - g),
    (m = G * a),
    (y = m - (m - a)),
    (A = a - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (zn[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (zn[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (zn[2] = z - (I - f) + (T - f)),
    (zn[3] = I),
    (U = _ * e),
    (m = G * _),
    (g = m - (m - _)),
    (E = _ - g),
    (m = G * e),
    (y = m - (m - e)),
    (A = e - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = s * u),
    (m = G * s),
    (g = m - (m - s)),
    (E = s - g),
    (m = G * u),
    (y = m - (m - u)),
    (A = u - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (ar[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (ar[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (ar[2] = z - (I - f) + (T - f)),
    (ar[3] = I),
    (U = h * i),
    (m = G * h),
    (g = m - (m - h)),
    (E = h - g),
    (m = G * i),
    (y = m - (m - i)),
    (A = i - y),
    (k = E * A - (U - g * y - E * y - g * A)),
    (N = r * p),
    (m = G * r),
    (g = m - (m - r)),
    (E = r - g),
    (m = G * p),
    (y = m - (m - p)),
    (A = p - y),
    (M = E * A - (N - g * y - E * y - g * A)),
    (T = k - M),
    (f = k - T),
    (Cn[0] = k - (T + f) + (f - M)),
    (z = U + T),
    (f = z - U),
    (C = U - (z - f) + (T - f)),
    (T = C - N),
    (f = C - T),
    (Cn[1] = C - (T + f) + (f - N)),
    (I = z + T),
    (f = I - z),
    (Cn[2] = z - (I - f) + (T - f)),
    (Cn[3] = I);
  const L = Lr(rr, ir, nr, c, t, -n, Oh),
    F = Lr(ir, sr, or, d, n, -c, Fh),
    D = Lr(sr, An, zn, v, c, -d, Dh),
    H = Lr(An, Sn, ar, t, d, -v, Gh),
    J = Lr(Sn, rr, Cn, n, v, -t, Vh),
    R = Lr(rr, or, ar, d, t, n, $h),
    O = Lr(ir, zn, Cn, v, n, c, qh),
    q = Lr(sr, ar, nr, t, c, d, Hh),
    Y = Lr(An, Cn, or, n, d, v, Yh),
    $ = Lr(Sn, nr, zn, c, v, t, jh),
    K = ol(
      Dc(D, Dh, O, qh, Y, Yh, F, Fh, s, e, t, Jc),
      Jc,
      Dc(H, Gh, q, Hh, $, jh, D, Dh, r, i, n, Mu),
      Mu,
      ol(
        Dc(J, Vh, Y, Yh, R, $h, H, Gh, o, a, c, Zc),
        Zc,
        Dc(L, Oh, $, jh, O, qh, J, Vh, _, u, d, ku),
        ku,
        Dc(F, Fh, R, $h, q, Hh, L, Oh, h, p, v, Rg),
        Rg,
        Mf,
        Lg
      ),
      Lg,
      Nf,
      Pg
    );
  return Pg[K - 1];
}
const $g = Q(96),
  qg = Q(96),
  Hg = Q(96),
  Yg = Q(1152);
function du(s, e, t, r, i, n, o, a, c, _) {
  const u = Lr(s, e, t, r, i, n, _u);
  return ol(
    Le(Le(u, _u, o, Ns), Ns, o, $g),
    $g,
    Le(Le(u, _u, a, Ns), Ns, a, qg),
    qg,
    Le(Le(u, _u, c, Ns), Ns, c, Hg),
    Hg,
    Un,
    _
  );
}
function _A(s, e, t, r, i, n, o, a, c, _, u, d, h, p, v, f) {
  let m,
    g,
    E,
    y,
    A,
    T,
    z,
    C,
    U,
    k,
    N,
    M,
    I,
    L,
    F,
    D,
    H,
    J,
    R,
    O,
    q,
    Y,
    $,
    K,
    V,
    j,
    te,
    re,
    ie,
    _e,
    ae;
  const ue = s - h,
    be = r - h,
    ye = o - h,
    he = _ - h,
    Ae = e - p,
    we = i - p,
    Te = a - p,
    Ue = u - p,
    Ze = t - v,
    Ke = n - v,
    Qe = c - v,
    _t = d - v;
  (re = ue * we),
    (O = G * ue),
    (q = O - (O - ue)),
    (Y = ue - q),
    (O = G * we),
    ($ = O - (O - we)),
    (K = we - $),
    (ie = Y * K - (re - q * $ - Y * $ - q * K)),
    (_e = be * Ae),
    (O = G * be),
    (q = O - (O - be)),
    (Y = be - q),
    (O = G * Ae),
    ($ = O - (O - Ae)),
    (K = Ae - $),
    (ae = Y * K - (_e - q * $ - Y * $ - q * K)),
    (V = ie - ae),
    (R = ie - V),
    (rr[0] = ie - (V + R) + (R - ae)),
    (j = re + V),
    (R = j - re),
    (te = re - (j - R) + (V - R)),
    (V = te - _e),
    (R = te - V),
    (rr[1] = te - (V + R) + (R - _e)),
    (m = j + V),
    (R = m - j),
    (rr[2] = j - (m - R) + (V - R)),
    (rr[3] = m),
    (re = be * Te),
    (O = G * be),
    (q = O - (O - be)),
    (Y = be - q),
    (O = G * Te),
    ($ = O - (O - Te)),
    (K = Te - $),
    (ie = Y * K - (re - q * $ - Y * $ - q * K)),
    (_e = ye * we),
    (O = G * ye),
    (q = O - (O - ye)),
    (Y = ye - q),
    (O = G * we),
    ($ = O - (O - we)),
    (K = we - $),
    (ae = Y * K - (_e - q * $ - Y * $ - q * K)),
    (V = ie - ae),
    (R = ie - V),
    (ir[0] = ie - (V + R) + (R - ae)),
    (j = re + V),
    (R = j - re),
    (te = re - (j - R) + (V - R)),
    (V = te - _e),
    (R = te - V),
    (ir[1] = te - (V + R) + (R - _e)),
    (g = j + V),
    (R = g - j),
    (ir[2] = j - (g - R) + (V - R)),
    (ir[3] = g),
    (re = ye * Ue),
    (O = G * ye),
    (q = O - (O - ye)),
    (Y = ye - q),
    (O = G * Ue),
    ($ = O - (O - Ue)),
    (K = Ue - $),
    (ie = Y * K - (re - q * $ - Y * $ - q * K)),
    (_e = he * Te),
    (O = G * he),
    (q = O - (O - he)),
    (Y = he - q),
    (O = G * Te),
    ($ = O - (O - Te)),
    (K = Te - $),
    (ae = Y * K - (_e - q * $ - Y * $ - q * K)),
    (V = ie - ae),
    (R = ie - V),
    (sr[0] = ie - (V + R) + (R - ae)),
    (j = re + V),
    (R = j - re),
    (te = re - (j - R) + (V - R)),
    (V = te - _e),
    (R = te - V),
    (sr[1] = te - (V + R) + (R - _e)),
    (E = j + V),
    (R = E - j),
    (sr[2] = j - (E - R) + (V - R)),
    (sr[3] = E),
    (re = he * Ae),
    (O = G * he),
    (q = O - (O - he)),
    (Y = he - q),
    (O = G * Ae),
    ($ = O - (O - Ae)),
    (K = Ae - $),
    (ie = Y * K - (re - q * $ - Y * $ - q * K)),
    (_e = ue * Ue),
    (O = G * ue),
    (q = O - (O - ue)),
    (Y = ue - q),
    (O = G * Ue),
    ($ = O - (O - Ue)),
    (K = Ue - $),
    (ae = Y * K - (_e - q * $ - Y * $ - q * K)),
    (V = ie - ae),
    (R = ie - V),
    (ar[0] = ie - (V + R) + (R - ae)),
    (j = re + V),
    (R = j - re),
    (te = re - (j - R) + (V - R)),
    (V = te - _e),
    (R = te - V),
    (ar[1] = te - (V + R) + (R - _e)),
    (y = j + V),
    (R = y - j),
    (ar[2] = j - (y - R) + (V - R)),
    (ar[3] = y),
    (re = ue * Te),
    (O = G * ue),
    (q = O - (O - ue)),
    (Y = ue - q),
    (O = G * Te),
    ($ = O - (O - Te)),
    (K = Te - $),
    (ie = Y * K - (re - q * $ - Y * $ - q * K)),
    (_e = ye * Ae),
    (O = G * ye),
    (q = O - (O - ye)),
    (Y = ye - q),
    (O = G * Ae),
    ($ = O - (O - Ae)),
    (K = Ae - $),
    (ae = Y * K - (_e - q * $ - Y * $ - q * K)),
    (V = ie - ae),
    (R = ie - V),
    (nr[0] = ie - (V + R) + (R - ae)),
    (j = re + V),
    (R = j - re),
    (te = re - (j - R) + (V - R)),
    (V = te - _e),
    (R = te - V),
    (nr[1] = te - (V + R) + (R - _e)),
    (A = j + V),
    (R = A - j),
    (nr[2] = j - (A - R) + (V - R)),
    (nr[3] = A),
    (re = be * Ue),
    (O = G * be),
    (q = O - (O - be)),
    (Y = be - q),
    (O = G * Ue),
    ($ = O - (O - Ue)),
    (K = Ue - $),
    (ie = Y * K - (re - q * $ - Y * $ - q * K)),
    (_e = he * we),
    (O = G * he),
    (q = O - (O - he)),
    (Y = he - q),
    (O = G * we),
    ($ = O - (O - we)),
    (K = we - $),
    (ae = Y * K - (_e - q * $ - Y * $ - q * K)),
    (V = ie - ae),
    (R = ie - V),
    (or[0] = ie - (V + R) + (R - ae)),
    (j = re + V),
    (R = j - re),
    (te = re - (j - R) + (V - R)),
    (V = te - _e),
    (R = te - V),
    (or[1] = te - (V + R) + (R - _e)),
    (T = j + V),
    (R = T - j),
    (or[2] = j - (T - R) + (V - R)),
    (or[3] = T);
  const Z_ = Vt(
    Vt(
      If(du(ir, sr, or, _t, Ke, -Qe, ue, Ae, Ze, Jc), Jc),
      Jc,
      du(sr, ar, nr, Ze, Qe, _t, be, we, Ke, Mu),
      Mu,
      Nf
    ),
    Nf,
    Vt(
      If(du(ar, rr, or, Ke, _t, Ze, ye, Te, Qe, Zc), Zc),
      Zc,
      du(rr, ir, nr, Qe, Ze, -Ke, he, Ue, _t, ku),
      ku,
      Mf
    ),
    Mf,
    Yg
  );
  let vr = U2(Z_, Yg),
    Ts = nA * f;
  if (
    vr >= Ts ||
    -vr >= Ts ||
    ((R = s - ue),
    (z = s - (ue + R) + (R - h)),
    (R = e - Ae),
    (N = e - (Ae + R) + (R - p)),
    (R = t - Ze),
    (F = t - (Ze + R) + (R - v)),
    (R = r - be),
    (C = r - (be + R) + (R - h)),
    (R = i - we),
    (M = i - (we + R) + (R - p)),
    (R = n - Ke),
    (D = n - (Ke + R) + (R - v)),
    (R = o - ye),
    (U = o - (ye + R) + (R - h)),
    (R = a - Te),
    (I = a - (Te + R) + (R - p)),
    (R = c - Qe),
    (H = c - (Qe + R) + (R - v)),
    (R = _ - he),
    (k = _ - (he + R) + (R - h)),
    (R = u - Ue),
    (L = u - (Ue + R) + (R - p)),
    (R = d - _t),
    (J = d - (_t + R) + (R - v)),
    z === 0 &&
      N === 0 &&
      F === 0 &&
      C === 0 &&
      M === 0 &&
      D === 0 &&
      U === 0 &&
      I === 0 &&
      H === 0 &&
      k === 0 &&
      L === 0 &&
      J === 0)
  )
    return vr;
  Ts = oA * f + C2 * Math.abs(vr);
  const pm = ue * M + we * z - (Ae * C + be * N),
    mm = be * I + Te * C - (we * U + ye * M),
    gm = ye * L + Ue * U - (Te * k + he * I),
    vm = he * N + Ae * k - (Ue * z + ue * L),
    xm = ue * I + Te * z - (Ae * U + ye * N),
    bm = be * L + Ue * C - (we * k + he * M);
  return (
    (vr +=
      (be * be + we * we + Ke * Ke) *
        (Qe * vm + _t * xm + Ze * gm + (H * y + J * A + F * E)) +
      (he * he + Ue * Ue + _t * _t) *
        (Ze * mm - Ke * xm + Qe * pm + (F * g - D * A + H * m)) -
      ((ue * ue + Ae * Ae + Ze * Ze) *
        (Ke * gm - Qe * bm + _t * mm + (D * E - H * T + J * g)) +
        (ye * ye + Te * Te + Qe * Qe) *
          (_t * pm + Ze * bm + Ke * vm + (J * m + F * T + D * y))) +
      2 *
        ((be * C + we * M + Ke * D) * (Qe * y + _t * A + Ze * E) +
          (he * k + Ue * L + _t * J) * (Ze * g - Ke * A + Qe * m) -
          ((ue * z + Ae * N + Ze * F) * (Ke * E - Qe * T + _t * g) +
            (ye * U + Te * I + Qe * H) * (_t * m + Ze * T + Ke * y)))),
    vr >= Ts || -vr >= Ts ? vr : lA(s, e, t, r, i, n, o, a, c, _, u, d, h, p, v)
  );
}
function uA(s, e, t, r, i, n, o, a, c, _, u, d, h, p, v) {
  const f = s - h,
    m = r - h,
    g = o - h,
    E = _ - h,
    y = e - p,
    A = i - p,
    T = a - p,
    z = u - p,
    C = t - v,
    U = n - v,
    k = c - v,
    N = d - v,
    M = f * A,
    I = m * y,
    L = M - I,
    F = m * T,
    D = g * A,
    H = F - D,
    J = g * z,
    R = E * T,
    O = J - R,
    q = E * y,
    Y = f * z,
    $ = q - Y,
    K = f * T,
    V = g * y,
    j = K - V,
    te = m * z,
    re = E * A,
    ie = te - re,
    _e = f * f + y * y + C * C,
    ae = m * m + A * A + U * U,
    ue = g * g + T * T + k * k,
    be = E * E + z * z + N * N,
    ye =
      ue * (N * L + C * ie + U * $) -
      be * (C * H - U * j + k * L) +
      (_e * (U * O - k * ie + N * H) - ae * (k * $ + N * j + C * O)),
    he = Math.abs(C),
    Ae = Math.abs(U),
    we = Math.abs(k),
    Te = Math.abs(N),
    Ue = Math.abs(M) + Math.abs(I),
    Ze = Math.abs(F) + Math.abs(D),
    Ke = Math.abs(J) + Math.abs(R),
    Qe = Math.abs(q) + Math.abs(Y),
    _t = Math.abs(K) + Math.abs(V),
    Z_ = Math.abs(te) + Math.abs(re),
    vr =
      (Ke * Ae + Z_ * we + Ze * Te) * _e +
      (Qe * we + _t * Te + Ke * he) * ae +
      (Ue * Te + Z_ * he + Qe * Ae) * ue +
      (Ze * he + _t * Ae + Ue * we) * be,
    Ts = sA * vr;
  return ye > Ts || -ye > Ts
    ? ye
    : -_A(s, e, t, r, i, n, o, a, c, _, u, d, h, p, v, vr);
}
const zs = [];
function dA(s, e, t, r, i) {
  if (r >= i) return;
  let n = 2,
    o,
    a;
  for (zs[0] = r, zs[1] = i; n > 0; ) {
    n -= 2;
    const c = zs[n + 1],
      _ = zs[n];
    (o = _), (a = c);
    const u = (_ + c) >> 1,
      d = s[u];
    for (; o <= a; ) {
      for (; e.call(t, s[o], d) < 0; ) o++;
      for (; e.call(t, s[a], d) > 0; ) a--;
      if (o <= a) {
        if (o !== a) {
          const h = s[o];
          (s[o] = s[a]), (s[a] = h);
        }
        o++, a--;
      }
    }
    _ < a && ((zs[n++] = _), (zs[n++] = a)),
      o < c && ((zs[n++] = o), (zs[n++] = c));
  }
}
function hA(s, e) {
  return e - s;
}
const kf = 8,
  Cs = kf * 4,
  Br = 4294967295,
  fA = 128,
  pA = 1.2,
  mA = 32;
class N2 {
  constructor(e = fA) {
    (this.__buffer = new ArrayBuffer(e * Cs)),
      (this.__data_uint32 = new Uint32Array(this.__buffer)),
      (this.__view = new DataView(this.__buffer)),
      (this.__capacity = e),
      (this.__used_end = 0),
      (this.__free = []),
      (this.__free_pointer = 0);
  }
  get data_buffer() {
    return this.__buffer;
  }
  get isCompacted() {
    return this.__free_pointer === 0;
  }
  forEach(e, t) {
    for (let r = 0; r < this.__used_end; r++)
      this.exists(r) && e.call(t, r, this);
  }
  getLive() {
    const e = [];
    return this.forEach((t) => e.push(t)), e;
  }
  clear() {
    this.__data_uint32.fill(0, 0, this.__used_end),
      (this.__used_end = 0),
      (this.__free_pointer = 0),
      this.__free.splice(0, this.__free.length);
  }
  setCapacity(e) {
    if (e === this.__capacity) return;
    if (e < this.__capacity && e < this.__used_end)
      throw new Error(
        "Reducing capacity would result in dropping information. This is an illegal operation. If you need to reduce capacity - either drop data or compact the layout first."
      );
    const t = new ArrayBuffer(e * Cs),
      r = new Uint8Array(t),
      i = new Uint8Array(this.__buffer);
    xc(i, r),
      (this.__buffer = t),
      (this.__view = new DataView(t)),
      (this.__data_uint32 = new Uint32Array(t)),
      (this.__capacity = e);
  }
  getCapacity() {
    return this.__capacity;
  }
  size() {
    return this.__used_end;
  }
  get count() {
    return this.__used_end - this.__free_pointer;
  }
  growCapacity(e) {
    const t = this.__capacity,
      r = Xc(e, Math.ceil(t * pA), t + mA);
    this.setCapacity(r);
  }
  ensureCapacity(e) {
    this.__capacity >= e || this.growCapacity(e);
  }
  exists(e) {
    if (e < 0 || e >= this.__used_end) return !1;
    for (let t = 0; t < this.__free_pointer; t++) {
      const r = this.__free[t];
      if (e === r) return !1;
    }
    return !0;
  }
  getNeighbour(e, t) {
    const r = Cs * e;
    return this.__view.getUint32(r + (4 + t) * 4);
  }
  setNeighbour(e, t, r) {
    const i = Cs * e;
    return this.__view.setUint32(i + (4 + t) * 4, r);
  }
  getVertexIndex(e, t) {
    return this.__view.getUint32(e * Cs + t * 4);
  }
  setVertexIndex(e, t, r) {
    return this.__view.setUint32(e * Cs + t * 4, r);
  }
  tetContainsVertex(e, t) {
    for (let r = 0; r < 4; r++) if (this.getVertexIndex(e, r) === t) return !0;
    return !1;
  }
  allocate() {
    if (this.__free_pointer > 0)
      return this.__free_pointer--, this.__free[this.__free_pointer];
    const e = this.__used_end;
    this.__used_end++, e >= this.__capacity && this.growCapacity(e);
    for (let t = 0; t < 4; t++) this.setNeighbour(e, t, Br);
    return e;
  }
  append(e, t, r, i) {
    const n = this.allocate(),
      o = n * Cs,
      a = this.__view;
    return (
      a.setUint32(o, e),
      a.setUint32(o + 4, t),
      a.setUint32(o + 8, r),
      a.setUint32(o + 12, i),
      a.setUint32(o + 16, Br),
      a.setUint32(o + 20, Br),
      a.setUint32(o + 24, Br),
      a.setUint32(o + 28, Br),
      n
    );
  }
  disconnect(e) {
    for (let t = 0; t < 4; t++) {
      const r = this.getNeighbour(e, t);
      if (r === Br) continue;
      const i = r >> 2,
        n = r & 3;
      this.setNeighbour(i, n, Br);
    }
  }
  delete(e) {
    e === this.__used_end - 1
      ? this.__used_end--
      : (this.__free[this.__free_pointer++] = e);
  }
  removeTetrasConnectedToPoints(e, t) {
    for (let r = this.__used_end - 1; r >= 0; r--)
      for (let i = 0; i < 4; i++) {
        const n = this.getVertexIndex(r, i);
        if (n >= e && n <= t) {
          if (!this.exists(r)) break;
          this.disconnect(r), this.delete(r);
          break;
        }
      }
  }
  walkToTetraContainingPoint(e, t, r, i, n = 0) {
    let o = 4,
      a = n,
      c;
    for (let _ = this.count + 1; _ > 0; _--) {
      for (c = 0; c < 4; c++) {
        const u = (c + 1) & 3,
          d = (c & 2) ^ 3,
          h = (c + 3) & 2,
          p = this.getVertexIndex(a, u),
          v = this.getVertexIndex(a, d),
          f = this.getVertexIndex(a, h),
          m = p * 3,
          g = v * 3,
          E = f * 3,
          y = i[m],
          A = i[m + 1],
          T = i[m + 2],
          z = i[g],
          C = i[g + 1],
          U = i[g + 2],
          k = i[E],
          N = i[E + 1],
          M = i[E + 2];
        if (c !== o && I2(y, A, T, z, C, U, k, N, M, e, t, r) < 0) {
          const I = this.getNeighbour(a, c);
          if (I === Br) return -1;
          (a = I >>> 2), (o = I & 3);
          break;
        }
      }
      if (c === 4) return a;
    }
    throw new Error(
      "Failed to find tet, likely mesh is corrupted or non-convex"
    );
  }
  relocate(e, t) {
    if (e === t) return;
    for (let i = 0; i < 4; i++) {
      const n = this.getNeighbour(e, i);
      if (n === Br) continue;
      const o = n >> 2,
        a = n & 3,
        c = (t << 2) | (i & 3);
      this.setNeighbour(o, a, c);
    }
    const r = Cs >> 2;
    st(this.__data_uint32, e * r, this.__data_uint32, t * r, r);
  }
  compact() {
    dA(this.__free, hA, null, 0, this.__free_pointer - 1);
    let e = 0,
      t = 0;
    for (; this.__free_pointer > t; ) {
      const r = this.__used_end - 1;
      if (this.__free[t] >= r) {
        t++, (this.__used_end = r);
        continue;
      }
      const i = this.__free[this.__free_pointer - 1];
      this.__free_pointer--,
        !(r <= i) && (this.relocate(r, i), e++, this.__used_end--);
    }
    return (
      this.__free.splice(0, this.__free.length), (this.__free_pointer = 0), e
    );
  }
  serialize(e) {
    e.writeUint32(1),
      e.writeUintVar(this.__used_end),
      e.writeUintVar(this.__free_pointer),
      e.writeUint32Array(this.__data_uint32, 0, this.__used_end * kf),
      e.writeUint32Array(this.__free, 0, this.__free_pointer);
  }
  deserialize(e) {
    const t = e.readUint32();
    if (t !== 1)
      throw new Error(
        `Unsupported version number, expected 1, instead got ${t}`
      );
    (this.__used_end = e.readUintVar()),
      (this.__free_pointer = e.readUintVar()),
      this.ensureCapacity(this.__used_end),
      e.readUint32Array(this.__data_uint32, 0, this.__used_end * kf),
      e.readUint32Array(this.__free, 0, this.__free_pointer);
  }
  serialize_base64() {
    const e = new Ii();
    return (
      (e.endianness = vt.LittleEndian),
      this.serialize(e),
      e.trim(),
      Uu.encode(e.data)
    );
  }
  deserialize_base64(e) {
    const t = Uu.decode(e),
      r = Ii.fromArrayBuffer(t);
    (r.endianness = vt.LittleEndian), this.deserialize(r);
  }
}
N2.prototype.isTetrahedralMesh = !0;
class gA {
  constructor() {
    x(this, "__deleted", []);
    x(this, "__deleted_size", 0);
    x(this, "__boundary", []);
    x(this, "__boundary_size", 0);
  }
  push_boundary(e, t, r, i, n) {
    const a = this.__boundary_size++ * 5,
      c = this.__boundary;
    (c[a] = e), (c[a + 1] = t), (c[a + 2] = r), (c[a + 3] = i), (c[a + 4] = n);
  }
  push_deleted(e) {
    this.__deleted[this.__deleted_size++] = e;
  }
  includes(e) {
    const t = this.__deleted_size;
    for (let r = 0; r < t; r++) if (this.__deleted[r] === e) return !0;
    return !1;
  }
  reset() {
    (this.__deleted_size = 0), (this.__boundary_size = 0);
  }
}
function vA(s, e, t, r) {
  let i = r.__deleted_size;
  const n = r.__boundary_size,
    o = r.__deleted;
  if (n > i) {
    for (let _ = i; _ < n; _++) o[_] = s.allocate();
    i = n;
  }
  const a = r.__boundary,
    c = i - n;
  for (let _ = 0; _ < n; _++) {
    const u = o[_ + c],
      d = _ * 5;
    s.setVertexIndex(u, 0, a[d]),
      s.setVertexIndex(u, 1, a[d + 1]),
      s.setVertexIndex(u, 2, a[d + 2]),
      s.setVertexIndex(u, 3, a[d + 3]);
    const h = a[d + 4];
    s.setNeighbour(u, 0, h);
    const p = u << 2;
    h !== Br && s.setNeighbour(h >> 2, h & 3, p), t.set(u, !1);
  }
  xA(s, r, c, n);
  for (let _ = 0; _ < c; _++) s.delete(o[_]);
  return (r.__boundary_size = 0), (r.__deleted_size = 0), o[c];
}
function xA(s, e, t, r) {
  const i = e.__boundary;
  let n = 0;
  const o = i;
  for (let a = 0; a < r; a++) {
    const c = e.__deleted[t + a];
    for (let _ = 0; _ < 3; _++) {
      const u = ((_ + 1) % 3) + 1,
        d = ((_ + 2) % 3) + 1,
        h = s.getVertexIndex(c, u),
        p = s.getVertexIndex(c, d),
        v = _ + 1,
        f = (c << 2) | (v & 3);
      let m = 0;
      for (; m < n && !(o[m * 3] === h && o[m * 3 + 1] === p); m++);
      if (m === n) {
        const g = n * 3;
        (o[g] = p), (o[g + 1] = h), (o[g + 2] = f), n++;
      } else {
        const g = o[m * 3 + 2];
        s.setNeighbour(c, v, g),
          s.setNeighbour(g >> 2, g & 3, f),
          n--,
          m < n && st(o, n * 3, o, m * 3, 3);
      }
    }
  }
}
function bA(s, e, t, r, i, n) {
  const o = e * 3,
    a = t * 3,
    c = r * 3,
    _ = i * 3,
    u = n * 3,
    d = s[o],
    h = s[o + 1],
    p = s[o + 2],
    v = s[a],
    f = s[a + 1],
    m = s[a + 2],
    g = s[c],
    E = s[c + 1],
    y = s[c + 2],
    A = s[_],
    T = s[_ + 1],
    z = s[_ + 2],
    C = s[u],
    U = s[u + 1],
    k = s[u + 2];
  return -uA(d, h, p, v, f, m, g, E, y, A, T, z, C, U, k);
}
function yA(s, e, t, r, i, n) {
  r.push_deleted(i), t.set(i, !0);
  for (let o = r.__deleted_size - 1; o < r.__deleted_size; o++) {
    const a = r.__deleted[o];
    for (let c = 0; c < 4; c++) {
      const _ = s.getNeighbour(a, c),
        u = (1 << c) & 3,
        d = (c + 2) % 3,
        h = (~((c + 1) >> 1) & 2) + 1;
      if (_ === Br) {
        r.push_boundary(
          n,
          s.getVertexIndex(a, u),
          s.getVertexIndex(a, d),
          s.getVertexIndex(a, h),
          _
        );
        continue;
      }
      const p = _ >> 2;
      t.get(p) ||
        (bA(
          e,
          s.getVertexIndex(p, 0),
          s.getVertexIndex(p, 1),
          s.getVertexIndex(p, 2),
          s.getVertexIndex(p, 3),
          n
        ) < 0
          ? r.push_boundary(
              n,
              s.getVertexIndex(a, u),
              s.getVertexIndex(a, d),
              s.getVertexIndex(a, h),
              _
            )
          : (r.push_deleted(p), t.set(p, !0)));
    }
  }
}
function wA(s, e, t, r, i) {
  const n = e * 3,
    o = t * 3,
    a = r * 3,
    c = i * 3,
    _ = s[n],
    u = s[n + 1],
    d = s[n + 2],
    h = s[o],
    p = s[o + 1],
    v = s[o + 2],
    f = s[a],
    m = s[a + 1],
    g = s[a + 2],
    E = s[c],
    y = s[c + 1],
    A = s[c + 2];
  return I2(_, u, d, h, p, v, f, m, g, E, y, A);
}
function TA(s, e, t, r) {
  let i = 4,
    n = t,
    o;
  for (;;) {
    for (o = 0; o < 4; o++) {
      const a = (o + 1) & 3,
        c = (o & 2) ^ 3,
        _ = (o + 3) & 2,
        u = s.getVertexIndex(n, a),
        d = s.getVertexIndex(n, c),
        h = s.getVertexIndex(n, _);
      if (o !== i && wA(e, u, d, h, r) < 0) {
        const p = s.getNeighbour(n, o);
        (n = p >>> 2), (i = p & 3);
        break;
      }
    }
    if (o === 4) return n;
  }
}
function EA(s, e, t = e.length / 3) {
  if (t < 4) return !1;
  s.ensureCapacity(t + 1);
  const r = new gA(),
    i = Ac.fixedSize(t),
    n = new Float32Array((t + 4) * 3);
  xc(e, n), QE(n, t * 3, n, t, 10);
  const o = s.allocate();
  s.setVertexIndex(o, 0, t),
    s.setVertexIndex(o, 1, t + 1),
    s.setVertexIndex(o, 2, t + 2),
    s.setVertexIndex(o, 3, t + 3);
  let a = 0;
  for (let c = 0; c < t; c++)
    (a = TA(s, n, a, c)), yA(s, n, i, r, a, c), (a = vA(s, n, i, r));
  return s.removeTetrasConnectedToPoints(t, t + 3), !0;
}
function AA(s, e, t, r = 2, i = 2, n = 2) {
  s.clear();
  const o = 6,
    a = r - 1,
    c = i - 1,
    _ = n - 1,
    u = a * c * _ * o;
  s.ensureCapacity(u);
  const d = t.getExtentsX(),
    h = t.getExtentsY(),
    p = t.getExtentsZ();
  function v(g, E, y) {
    return y * i * r + E * r + g;
  }
  function f(g, E, y, A) {
    return (y * c * a + E * a + g) * o + A;
  }
  for (let g = 0; g < n; g++)
    for (let E = 0; E < i; E++)
      for (let y = 0; y < r; y++) {
        const T = v(y, E, g) * 3,
          z = y / (r - 1),
          C = E / (i - 1),
          U = g / (n - 1);
        (e[T] = t.x0 + z * d),
          (e[T + 1] = t.y0 + C * h),
          (e[T + 2] = t.z0 + U * p);
      }
  function m(g, E, y, A) {
    const T = s.allocate();
    return (
      s.setVertexIndex(T, 0, g),
      s.setVertexIndex(T, 1, E),
      s.setVertexIndex(T, 2, y),
      s.setVertexIndex(T, 3, A),
      T
    );
  }
  for (let g = 1; g < n; g++)
    for (let E = 1; E < i; E++)
      for (let y = 1; y < r; y++) {
        const A = v(y - 1, E - 1, g - 1),
          T = v(y - 1, E - 1, g),
          z = v(y, E - 1, g),
          C = v(y, E - 1, g - 1),
          U = v(y - 1, E, g - 1),
          k = v(y - 1, E, g),
          N = v(y, E, g),
          M = v(y, E, g - 1),
          I = m(T, A, C, M),
          L = m(T, A, M, U),
          F = m(M, T, U, k),
          D = m(z, T, C, M),
          H = m(z, T, M, N),
          J = m(T, M, N, k);
        if (
          (s.setNeighbour(I, 1, (D << 2) | 0),
          s.setNeighbour(I, 2, (L << 2) | 3),
          s.setNeighbour(L, 1, (F << 2) | 3),
          s.setNeighbour(L, 3, (I << 2) | 2),
          s.setNeighbour(F, 2, (J << 2) | 2),
          s.setNeighbour(F, 3, (L << 2) | 1),
          s.setNeighbour(D, 0, (I << 2) | 1),
          s.setNeighbour(D, 2, (H << 2) | 3),
          s.setNeighbour(H, 0, (J << 2) | 3),
          s.setNeighbour(H, 3, (D << 2) | 2),
          s.setNeighbour(J, 2, (F << 2) | 2),
          s.setNeighbour(J, 3, (H << 2) | 0),
          y > 1)
        ) {
          const R = f(y - 2, E - 1, g - 1, 3),
            O = f(y - 2, E - 1, g - 1, 4);
          s.setNeighbour(L, 2, (R << 2) | 1),
            s.setNeighbour(R, 1, (L << 2) | 2),
            s.setNeighbour(F, 0, (O << 2) | 1),
            s.setNeighbour(O, 1, (F << 2) | 0);
        }
        if (E > 1) {
          const R = f(y - 1, E - 2, g - 1, 2),
            O = f(y - 1, E - 2, g - 1, 5);
          s.setNeighbour(I, 3, (R << 2) | 1),
            s.setNeighbour(R, 1, (I << 2) | 3),
            s.setNeighbour(D, 3, (O << 2) | 0),
            s.setNeighbour(O, 0, (D << 2) | 3);
        }
        if (g > 1) {
          const R = f(y - 1, E - 1, g - 2, 4),
            O = f(y - 1, E - 1, g - 2, 5);
          s.setNeighbour(I, 0, (R << 2) | 2),
            s.setNeighbour(R, 2, (I << 2) | 0),
            s.setNeighbour(L, 0, (O << 2) | 1),
            s.setNeighbour(O, 1, (L << 2) | 0);
        }
      }
  return r * i * n;
}
var rs, ct, Da, gi, is, Ga, yu;
class SA {
  constructor() {
    b(this, Ga);
    b(this, rs, new N2());
    b(this, ct, new Float32Array(0));
    b(this, Da, new Float32Array(0));
    b(this, gi, 0);
    b(this, is, 0);
  }
  get coefficients() {
    return getProperty(this, Da);
  }
  get mesh() {
    return getProperty(this, rs);
  }
  get positions() {
    return getProperty(this, ct);
  }
  set positions(e) {
    const t = e.length / 3;
    S(this, gi, t), P(this, Ga, yu).call(this, t), getProperty(this, ct).set(e);
  }
  get probe_count() {
    return getProperty(this, gi);
  }
  get version() {
    return getProperty(this, is);
  }
  update() {
    ze(this, is)._++;
  }
  add_point(e, t, r) {
    const i = getProperty(this, gi);
    return (
      P(this, Ga, yu).call(this, i + 1),
      (getProperty(this, ct)[i * 3] = e),
      (getProperty(this, ct)[i * 3 + 1] = t),
      (getProperty(this, ct)[i * 3 + 2] = r),
      ze(this, gi)._++,
      ze(this, is)._++,
      i
    );
  }
  remove_point(e) {
    for (let t = e + 1; t < getProperty(this, gi); t++)
      (getProperty(this, ct)[(t - 1) * 3] = getProperty(this, ct)[t * 3]),
        (getProperty(this, ct)[(t - 1) * 3 + 1] = getProperty(this, ct)[
          t * 3 + 1
        ]),
        (getProperty(this, ct)[(t - 1) * 3 + 2] = getProperty(this, ct)[
          t * 3 + 2
        ]);
    ze(this, gi)._--, ze(this, is)._++;
  }
  build_mesh() {
    getProperty(this, rs).clear(),
      EA(getProperty(this, rs), getProperty(this, ct)),
      getProperty(this, rs).compact(),
      ze(this, is)._++;
  }
  build_grid(e, t) {
    const r = t.x * t.y * t.z;
    P(this, Ga, yu).call(this, r),
      S(
        this,
        gi,
        AA(getProperty(this, rs), getProperty(this, ct), e, t.x, t.y, t.z)
      ),
      getProperty(this, rs).compact(),
      ze(this, is)._++;
  }
}
(rs = new WeakMap()),
  (ct = new WeakMap()),
  (Da = new WeakMap()),
  (gi = new WeakMap()),
  (is = new WeakMap()),
  (Ga = new WeakSet()),
  (yu = function (e) {
    if (getProperty(this, ct).length >= e * 3) return;
    const t = new Float32Array(e * 3),
      r = new Float32Array(e * 27);
    xc(getProperty(this, ct), t),
      xc(getProperty(this, Da), r),
      S(this, ct, t),
      S(this, Da, r);
  });
function zA(s, e, t = 0, r = s.length) {
  const i = t + r;
  for (let n = t; n < i; n++) if (s[n] === e) return s.splice(n, 1), !0;
  return !1;
}
var vi, Va;
class CA {
  constructor() {
    b(this, vi, []);
    b(this, Va, 0);
  }
  get version() {
    return getProperty(this, Va);
  }
  get instances() {
    return getProperty(this, vi);
  }
  add(e) {
    getProperty(this, vi).push(e), ze(this, Va)._++;
  }
  get bounding_box() {
    const e = new fr();
    return (
      e.setNegativelyInfiniteBounds(),
      getProperty(this, vi).forEach((t) => {
        const r = new fr(...t.bounding_box);
        (r.width === 0 && r.height === 0 && r.depth === 0) || e.expandToFit(r);
      }),
      e
    );
  }
  computeTriangleCount() {
    let e = 0;
    const t = getProperty(this, vi),
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      e += n.geometry.getIndexCount() / 3;
    }
    return e;
  }
  remove(e) {
    const t = zA(getProperty(this, vi), e);
    return t && ze(this, Va)._++, t;
  }
  hash() {
    return 0;
  }
  equals(e) {
    return hr(getProperty(this, vi), getProperty(e, vi));
  }
}
(vi = new WeakMap()), (Va = new WeakMap());
class Scene {
  constructor() {
    x(this, "instances", new CA());
    x(this, "lights", new KE());
    x(this, "light_probe_volume", new SA());
  }
  hash() {
    return 0;
  }
  equals(e) {
    return this.instances.equals(e.instances);
  }
  addNodes3D(e) {
    e.forEach((t) => this.addNode3D(t));
  }
  addNode3D(e) {
    e.isMesh === !0 && this.instances.add(e);
    const t = e.children,
      r = t.length;
    for (let i = 0; i < r; i++) {
      const n = t[i];
      this.addNode3D(n);
    }
  }
}
Scene.prototype.isScene = !0;
class At extends wn {
  constructor() {
    super(...arguments);
    x(this, "size", 0);
    x(this, "usage", 0);
    x(this, "mappedAtCreation", !1);
  }
  setFromBuffer(t) {
    (this.size = t.size),
      (this.usage = t.usage),
      (this.mappedAtCreation = t.mapState === "mapped");
  }
  copy(t) {
    (this.size = t.size),
      (this.usage = t.usage),
      (this.mappedAtCreation = t.mappedAtCreation);
  }
  hash() {
    return this.size ^ this.usage;
  }
  equals(t) {
    return (
      super.equals(t) &&
      this.size === t.size &&
      this.usage === t.usage &&
      this.mappedAtCreation === t.mappedAtCreation
    );
  }
  compare(t) {
    const r = this.size - t.size;
    if (r !== 0) return r;
    const i = this.usage - t.usage;
    return i !== 0 ? i : super.compare(t);
  }
  fromJSON(t) {
    super.fromJSON(t);
    const r = t.size ?? 0,
      i = t.usage ?? 0,
      n = t.mappedAtCreation ?? !1;
    (this.size = r), (this.usage = i), (this.mappedAtCreation = n);
  }
  static fromJSON(t) {
    const r = new At();
    return r.fromJSON(t), r;
  }
}
function Wh(s, e) {
  const t = s.createBuffer(
      At.fromJSON({
        label: "Temp Buffer/ make_temp_gpu_buffer",
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST,
        size: e,
        mappedAtCreation: !0,
      })
    ),
    r = t.getMappedRange(0, t.size),
    i = Ii.fromArrayBuffer(r);
  return (i.endianness = Sc()), { gpu: t, buffer: i };
}
function Rf(s, e, t, r = 1024, i = 1024, n = 1.2) {
  const o = e.size;
  if (o >= t) return e;
  const a = Wt(r, Math.max(t, o + i, o * n)),
    c = s.createBuffer({
      label: e.label,
      usage: e.usage,
      size: a,
      mappedAtCreation: !1,
    }),
    _ = s.createCommandEncoder({ label: "copy" });
  _.copyBufferToBuffer(e, 0, c, 0, o);
  const u = _.finish({ label: "ensure_buffer_capacity/copy" });
  return s.queue.submit([u]), e.destroy(), c;
}
var ql, $s, qs, Hl, Hs, $a;
class UA {
  constructor(e) {
    b(this, ql);
    b(this, $s, new kp());
    b(this, qs);
    b(this, Hl, 0);
    b(this, Hs, 0);
    b(this, $a, new Map());
    S(this, ql, e),
      S(
        this,
        qs,
        e.createBuffer({
          size: 1024,
          usage:
            GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_DST |
            GPUBufferUsage.COPY_SRC,
        })
      );
  }
  get bvh() {
    return getProperty(this, $s);
  }
  clear() {
    getProperty(this, $s).release_all(),
      getProperty(this, $a).clear(),
      ze(this, Hs)._++;
  }
  get buffer() {
    return getProperty(this, qs);
  }
  instance_add(e, t) {
    const r = getProperty(this, $s),
      i = r.allocate_node();
    r.node_set_user_data(i, e),
      r.node_set_aabb(i, t.bounding_box),
      r.insert_leaf(i),
      getProperty(this, $a).set(e, i),
      ze(this, Hs)._++;
  }
  instance_update(e, t) {
    getProperty(this, $a).get(e),
      getProperty(this, $s).node_move_aabb(e, t.bounding_box),
      ze(this, Hs)._++;
  }
  push_to_gpu() {
    const e = getProperty(this, $s),
      t = e.data_buffer,
      r = getProperty(this, ql);
    S(this, qs, Rf(r, getProperty(this, qs), t.byteLength, 1024, 1024, 1.2));
    const i = E2({
        device: r,
        bvh: e,
        usage: GPUBufferUsage.COPY_SRC,
        label: "TLAS/temp",
      }),
      n = r.createCommandEncoder();
    n.copyBufferToBuffer(i, 0, getProperty(this, qs), 0, t.byteLength),
      r.queue.submit([n.finish()]),
      i.destroy(),
      S(this, Hl, getProperty(this, Hs));
  }
  update() {
    getProperty(this, Hl) !== getProperty(this, Hs) && this.push_to_gpu();
  }
}
(ql = new WeakMap()),
  ($s = new WeakMap()),
  (qs = new WeakMap()),
  (Hl = new WeakMap()),
  (Hs = new WeakMap()),
  ($a = new WeakMap());
const wu = Struct.from({ instance_count: "u32" });
let IA = 0;
var Ys, Jn, Zn, Kn, Qn, tr, xi, eo, to, Yl, ro, jl, Lo, k2, R2, MA;
class NA {
  constructor(e, t) {
    b(this, Lo);
    x(this, "id", IA++);
    x(this, "geometries");
    x(this, "materials");
    b(this, Ys);
    b(this, Jn);
    b(this, Zn);
    b(this, Kn);
    b(this, Qn);
    b(this, tr, null);
    b(this, xi, new Uint32Array());
    b(this, eo, new Map());
    b(this, to);
    b(this, Yl, -1);
    b(this, ro, !0);
    b(this, jl);
    const r = e.device;
    S(this, Ys, t),
      S(this, jl, r),
      S(this, Qn, new UA(r)),
      S(this, Jn, new Iw(r, t.lights)),
      S(
        this,
        to,
        r.createBuffer({
          label: "Scene Metadata",
          size: wu.size,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })
      ),
      S(
        this,
        tr,
        r.createBuffer({
          label: "GPUSceneContext/instances",
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
          size: 0,
        })
      ),
      S(this, Kn, new ZE(r, t.light_probe_volume)),
      S(this, Zn, new qE(e));
  }
  get scene() {
    return getProperty(this, Ys);
  }
  get lights() {
    return getProperty(this, Jn);
  }
  get sky() {
    return getProperty(this, Zn);
  }
  get light_probe_volume() {
    return getProperty(this, Kn);
  }
  get tlas() {
    return getProperty(this, Qn);
  }
  get gpu_buffer_metadata() {
    return getProperty(this, to);
  }
  get instance_buffer() {
    return getProperty(this, tr);
  }
  destroy() {
    getProperty(this, tr).destroy(),
      getProperty(this, to).destroy(),
      getProperty(this, eo).clear(),
      getProperty(this, Jn).destroy(),
      getProperty(this, Kn).destroy(),
      getProperty(this, Zn).destroy();
  }
  build() {
    getProperty(this, tr) !== null && getProperty(this, tr).destroy(),
      getProperty(this, eo).clear();
    const e = getProperty(this, jl),
      t = getProperty(this, Ys).instances,
      r = t.instances,
      i = r.length;
    for (let d = 0; d < i; d++) {
      const h = r[d];
      this.materials.obtain(h.material);
    }
    for (let d = 0; d < i; d++) {
      const h = r[d];
      this.geometries.add(h.geometry);
    }
    const n = getProperty(this, Qn);
    n.clear();
    for (let d = 0; d < i; d++) n.instance_add(d, r[d]);
    P(this, Lo, R2).call(this, i),
      S(
        this,
        tr,
        e.createBuffer({
          label: getProperty(this, tr).label,
          size: Math.max(i, 1) * Xe.size,
          usage: getProperty(this, tr).usage,
          mappedAtCreation: !0,
        })
      );
    const o = getProperty(this, tr).getMappedRange(),
      a = new Uint32Array(o),
      c = new Float32Array(o);
    for (let d = 0; d < i; d++) {
      const h = r[d];
      getProperty(this, eo).set(h, d), P(this, Lo, k2).call(this, a, c, d, h);
    }
    getProperty(this, tr).unmap(), S(this, Yl, t.version);
    const _ = new ArrayBuffer(wu.size),
      u = Ii.fromArrayBuffer(_);
    (u.endianness = Sc()),
      (u.position = wu.get("instance_count").offset),
      u.writeUint32(i),
      e.queue.writeBuffer(getProperty(this, to), 0, _, 0, _.byteLength);
  }
  update() {
    getProperty(this, Qn).update(),
      getProperty(this, Kn).update(),
      getProperty(this, Jn).update(),
      getProperty(this, Zn).update(),
      getProperty(this, Yl) !== getProperty(this, Ys).instances.version &&
        S(this, ro, !0),
      getProperty(this, ro) && (this.build(), S(this, ro, !1));
  }
}
(Ys = new WeakMap()),
  (Jn = new WeakMap()),
  (Zn = new WeakMap()),
  (Kn = new WeakMap()),
  (Qn = new WeakMap()),
  (tr = new WeakMap()),
  (xi = new WeakMap()),
  (eo = new WeakMap()),
  (to = new WeakMap()),
  (Yl = new WeakMap()),
  (ro = new WeakMap()),
  (jl = new WeakMap()),
  (Lo = new WeakSet()),
  (k2 = function (e, t, r, i) {
    const n = i.geometry,
      o = r * Xe.size,
      a = (o + Xe.get("geometry").offset) >>> 2,
      c = (o + Xe.get("material").offset) >>> 2;
    (e[a] = n.context_index), (e[c] = i.material.id);
    const _ = (o + Xe.get("bounds").offset) >>> 2;
    st(i.bounding_box, 0, t, _, 6);
    const u = (o + Xe.get("transform").offset) >>> 2;
    st(i.transform_global, 0, t, u, 16);
    const d = new Float64Array(16);
    na(d, i.transform_global);
    const h = (o + Xe.get("transform_inverse").offset) >>> 2;
    st(d, 0, t, h, 16),
      (getProperty(this, xi)[r * 2] = i.id),
      (getProperty(this, xi)[r * 2 + 1] = i.version);
  }),
  (R2 = function (e) {
    const t = getProperty(this, xi);
    S(this, xi, new Uint32Array(2 * e)), xc(t, getProperty(this, xi));
  }),
  (MA = function () {
    const t = getProperty(this, Ys).instances.instances;
    for (let r = 0; r < t.length; r++) {
      const i = t[r],
        n = getProperty(this, eo).get(i);
      if (n === false || getProperty(this, xi)[n * 2] !== i.id) continue;
      getProperty(this, xi)[n * 2 + 1] !== i.version && S(this, ro, !0);
    }
  });
const L2 = Struct.from({ count: "atomic<u32>", elements: "array <u32>" }),
  rh = new ResourecGroup();
rh.createGroup()
  .addUniform("camera_previous", ce)
  .addUniform("camera_current", ce)
  .addUniform("scene_metadata", wu)
  .addStorageBuffer("meshes", X.from(Xe))
  .addTexture("texture_hzb");
rh.createGroup().addStorageBuffer("output_positive", L2, !0);
rh.createGroup().addStorageBuffer("output_maybe", L2, !0);
const kA = w.from(
    `
@compute @workgroup_size(256,1,1)
fn main(@builtin(global_invocation_id) global_id : vec3<u32>){

    let mesh_index = global_id.x;

    if(mesh_index >= scene_metadata.instance_count){
        return;
    }

    let mesh = meshes[mesh_index];

    let mesh_bounds = array_to_aabb3(mesh.bounds);
    
    if( !aabb3_intersects_frustum(mesh_bounds, camera_current.frustum) ){
        // outside of view frustum
        return;
    }

    var previous_view_bounds:${xe.wgsl_ref};

    let valid_bounds = project_aabb_perspective(&previous_view_bounds, mesh_bounds, camera_previous.view_projection_matrix);

    if(
        !valid_bounds || query_depth_from_screen_space_bb(previous_view_bounds, texture_hzb) >= 0.0
    ){

        let write_offset = atomicAdd(&output_positive.count, 1u);

        output_positive.elements[write_offset] = mesh_index;
    }
    else{

        let write_offset = atomicAdd(&output_maybe.count, 1u);

        output_maybe.elements[write_offset] = mesh_index;

    }
}`,
    [xe.declaration_chunk, wp, $_, yp, q_]
  ),
  RA = new Yt(le.from({ label: "Mesh cull", resources: rh, body: kA }));
class LA {
  constructor() {
    x(this, "out_meshes_maybe", -1);
    x(this, "out_meshes_positive", -1);
    x(this, "view_ctx");
    x(this, "timer");
  }
}
function PA(s, e, t) {
  const r = t.encoder,
    i = e.get(s.out_meshes_positive),
    n = e.get(s.out_meshes_maybe),
    o = s.view_ctx,
    a = o.scene;
  RA.dispatch({
    encoder: r,
    timer: s.timer,
    group_size_x: Math.ceil(a.scene.instances.instances.length / 256),
    bindings: {
      camera_previous: o.gpu_previous_camera_state.buffer,
      camera_current: o.camera.buffer,
      scene_metadata: a.gpu_buffer_metadata,
      meshes: a.instance_buffer,
      texture_hzb: o.hierarchical_z_buffer.texture.obtainView(),
      output_positive: i,
      output_maybe: n,
    },
  });
}
const j_ = 64,
  P2 = Struct.from({ triangles: X.from(Ce.u32, j_) }, "MeshletData"),
  jg = Struct.from({ count: "atomic<u32>", elements: X.from(xs) }),
  BA = Struct.from({ count: "u32", elements: X.from(xs) }),
  ih = new ResourecGroup();
ih.createGroup()
  .addUniform("camera_current", ce)
  .addUniform("camera_previous", ce)
  .addUniform("view", hn)
  .addStorageBuffer("meshes", X.from(Xe))
  .addStorageBuffer("meshlet_data", X.from(P2))
  .addStorageBuffer("geometries", X.from(Ut))
  .addStorageBuffer("geometry_indices", X.u32)
  .addStorageBuffer("geometry_vertices", X.from(qt))
  .addTexture("texture_hzb");
ih.createGroup().addStorageBuffer("input_triangles", BA);
ih.createGroup()
  .addStorageBuffer("output_positive", jg, !0)
  .addStorageBuffer("output_maybe", jg, !0);
const OA = w.from(
    `
@compute @workgroup_size(256, 1, 1)
fn unpack(@builtin(global_invocation_id) global_id : vec3<u32>){

    if(global_id.x >= input_triangles.count){
        return;
    }

    let triangle_def = input_triangles.elements[global_id.x];

    let mesh = meshes[triangle_def.mesh];

    var is_positive = false;

    var geometry_vertex_position_0:vec3<f32>;
    var geometry_vertex_position_1:vec3<f32>;
    var geometry_vertex_position_2:vec3<f32>;
    
    read_triangle_vertex_positions(
        &geometry_vertex_position_0,
        &geometry_vertex_position_1,
        &geometry_vertex_position_2,
        mesh.geometry,
        triangle_def.index
    );

    // project to clip space
    let projection_matrix = camera_current.view_projection_matrix * mesh.transform;

    let projected_vertex_position_0:vec4<f32> = projection_matrix * vec4<f32>(geometry_vertex_position_0, 1.0);
    let projected_vertex_position_1:vec4<f32> = projection_matrix * vec4<f32>(geometry_vertex_position_1, 1.0);
    let projected_vertex_position_2:vec4<f32> = projection_matrix * vec4<f32>(geometry_vertex_position_2, 1.0);

    if(triangle_orientation_and_zero_area(projected_vertex_position_0, projected_vertex_position_1, projected_vertex_position_2)){
        return;
    }
    
    // perform frustum check in clip space
    if(!clip_triangle_in_frustum(projected_vertex_position_0, projected_vertex_position_1, projected_vertex_position_2)){
        return;
    }

    let projected_vertex_0 = projected_vertex_position_0.xy / projected_vertex_position_0.w;
    let projected_vertex_1 = projected_vertex_position_1.xy / projected_vertex_position_1.w;
    let projected_vertex_2 = projected_vertex_position_2.xy / projected_vertex_position_2.w;

    let resolution = vec2(view.width, view.height);

    if( triangle_smaller_than_pixel(projected_vertex_0, projected_vertex_1, projected_vertex_2, resolution)){
        // does not cover any pixels
        return;
    }

    // test against HZB
    {

        let projection_matrix = camera_previous.view_projection_matrix * mesh.transform;

        let projected_vertex_position_0:vec4<f32> = projection_matrix * vec4<f32>(geometry_vertex_position_0, 1.0);
        let projected_vertex_position_1:vec4<f32> = projection_matrix * vec4<f32>(geometry_vertex_position_1, 1.0);
        let projected_vertex_position_2:vec4<f32> = projection_matrix * vec4<f32>(geometry_vertex_position_2, 1.0);

        if(min(projected_vertex_position_0.w, min(projected_vertex_position_1.w, projected_vertex_position_2.w)) <= 0.0 ){
            // clipped behind camera
            is_positive = true;
            
        }else{

            let projected_vertex_0 = projected_vertex_position_0.xyz / projected_vertex_position_0.w;
            let projected_vertex_1 = projected_vertex_position_1.xyz / projected_vertex_position_1.w;
            let projected_vertex_2 = projected_vertex_position_2.xyz / projected_vertex_position_2.w;

            let previous_view_bounds = aabb3_from_triangle(projected_vertex_0, projected_vertex_1, projected_vertex_2);

            if(query_depth_from_screen_space_bb(previous_view_bounds, texture_hzb) >= 0.0){

                is_positive = true;

            }else{

                is_positive = false;
            }
            
        }

    }

    if(is_positive){
    
        let write_offset = atomicAdd(&output_positive.count, 1u);
        output_positive.elements[ write_offset ] = triangle_def;
    
    }else{
    
        let write_offset = atomicAdd(&output_maybe.count, 1u);
        output_maybe.elements[ write_offset ] = triangle_def;
    
    }
    
}
`,
    [xs.declaration_chunk, $_, Wv, ri, Xv, Zv, Kv, Jv]
  ),
  FA = new Yt(
    le.from({ label: "Filter Triangles 2 way", resources: ih, body: OA })
  );
class DA {
  constructor() {
    x(this, "timer");
    x(this, "view");
    x(this, "input_triangles", -1);
    x(this, "out_triangles_positive", -1);
    x(this, "out_triangles_maybe", -1);
    x(this, "command", -1);
  }
}
const GA = (s, e, t) => {
    const r = s.timer,
      i = s.view,
      n = e.get(s.input_triangles),
      o = e.get(s.out_triangles_positive),
      a = e.get(s.out_triangles_maybe),
      c = e.get(s.command),
      _ = t.encoder,
      u = i.scene,
      d = u.geometries;
    FA.dispatchIndirect({
      encoder: _,
      timer: r,
      command: c,
      bindings: {
        camera_current: i.camera.buffer,
        camera_previous: i.gpu_previous_camera_state.buffer,
        view: i.uniform_buffer,
        meshes: u.instance_buffer,
        meshlet_data: d.meshlet.buffer_meshlet_data,
        geometries: d.buffer_metadata,
        geometry_indices: d.buffer_indices,
        geometry_vertices: d.buffer_vertices,
        texture_hzb: i.hierarchical_z_buffer.texture.obtainView(),
        input_triangles: n,
        output_positive: o,
        output_maybe: a,
      },
    });
  },
  rt = { Meshes: 0, MeshletBatches: 1, Meshlets: 2, Triangles: 3 },
  VA = Struct.from({ count: "u32", data: "array<u32>" }),
  $A = Struct.from({ count: "atomic<u32>", elements: X.from(vs) }),
  B2 = new ResourecGroup();
B2.createGroup()
  .addStorageBuffer("input", VA)
  .addStorageBuffer("meshlet_lookup", X.u32)
  .addStorageBuffer("output", $A, !0);
const qA = w.from(
    `

@compute @workgroup_size(256, 1, 1)
fn unpack(@builtin(global_invocation_id) global_id : vec3<u32>){

    let input_index = global_id.x;

    if(input_index >= input.count){
        return;
    }
    
    let input_offset = input_index*3;
    
    let meshlet_offset = input.data[ input_offset ];
    let meshlet_count = input.data[ input_offset + 1];
    let mesh_index = input.data[ input_offset + 2];
    
    let write_offset = atomicAdd(&output.count, meshlet_count);
    
    for(var i=0u; i< meshlet_count; i++){
    
        let meshlet_index = meshlet_lookup[ meshlet_offset + i ];
        
        output.elements[ write_offset + i ] = ${vs.wgsl_ref}(
            meshlet_index,
            mesh_index,
        );
        
    }
}
    `,
    [vs.declaration_chunk]
  ),
  HA = new Yt(
    le.from({
      label: "Instances to Meshlets, 1 way expansion, stage 2",
      body: qA,
      resources: B2,
    })
  ),
  O2 = Struct.from({ meshlet_count: "u32", meshlet_offset: "u32" }),
  YA = Struct.from({ count: "atomic<u32>", data: X.u32 }),
  jA = Struct.from({ count: "u32", elements: X.u32 }),
  Lp = new ResourecGroup();
Lp.createGroup()
  .addStorageBuffer("meshes", X.from(Xe))
  .addStorageBuffer("geometries", X.from(O2));
Lp.createGroup()
  .addStorageBuffer("input", jA)
  .addStorageBuffer("output", YA, !0);
const XA = w.from(`
fn u32_divide_up(n:u32,d:u32) -> u32{
    return (n + (d - 1) ) /  d;
}
    `),
  WA = w.from(
    `
@compute @workgroup_size(256, 1, 1)
fn unpack(@builtin(global_invocation_id) global_id : vec3<u32>){

    let input_index = global_id.x;

    if(input_index >= input.count){
        return;
    }

    let mesh_index = input.elements[input_index];

    let mesh = meshes[mesh_index];

    let geometry_index = mesh.geometry;

    let geometry = geometries[geometry_index];

    let meshlet_count = geometry.meshlet_count;

    let lookup_offset = geometry.meshlet_offset;

    const BATCH_LIMIT = 64u;

    // reserve space for visible meshlets
    let batch_count = u32_divide_up(meshlet_count , BATCH_LIMIT);
    
    let write_offset = atomicAdd(&output.count, batch_count);
    
    for(var i = 0u; i < batch_count; i ++){
        let local_offset = i * BATCH_LIMIT;
        let batch_offset = lookup_offset + local_offset;
        let batch_size = min(meshlet_count - local_offset, BATCH_LIMIT);
        
        let write_offset3 = (write_offset + i) * 3;
     
        output.data[write_offset3] = batch_offset;
        output.data[write_offset3+1] = batch_size;
        output.data[write_offset3+2] = mesh_index;

    }

}`,
    [vs.declaration_chunk, XA]
  ),
  JA = new Yt(
    le.from({
      label: "Instances to Meshlets, 1 way expansion",
      resources: Lp,
      body: WA,
    })
  );
class ZA {
  constructor() {
    x(this, "timer");
    x(this, "scene");
    x(this, "input_meshes", -1);
    x(this, "output", -1);
    x(this, "command", 0);
  }
}
function KA(s, e, t) {
  const r = s.scene,
    i = s.timer,
    n = e.get(s.input_meshes),
    o = e.get(s.output),
    a = e.get(s.command),
    _ = r.geometries.meshlet,
    u = t.encoder;
  JA.dispatchIndirect({
    encoder: u,
    timer: i,
    command: a,
    bindings: {
      meshes: r.instance_buffer,
      geometries: _.lookup.buffer_geometries,
      meshlet_lookup: _.lookup.buffer_meshlets,
      input: n,
      output: o,
    },
  });
}
function Xg({
  graph: s,
  input_meshes: e,
  output_meshlets: t = -1,
  scene: r,
  timers: i = [],
  expected_output_size: n,
  stats: o,
  batch_buffer_size: a,
}) {
  const c = new ZA();
  (c.scene = r), (c.timer = i[0]);
  const _ = Is(s, e),
    u = s.add("meshlet expansion/ stage 1", c, KA);
  (c.command = u.read(_)),
    (c.input_meshes = u.read(e)),
    (c.output = u.create(
      "batches",
      je.from(
        a,
        GPUBufferUsage.STORAGE |
          GPUBufferUsage.COPY_SRC |
          GPUBufferUsage.COPY_DST,
        0,
        4
      )
    )),
    o !== false && Zt(s, o, rt.MeshletBatches, c.output);
  const d = Is(s, c.output),
    h = {},
    p = s.add("meshlet expansion/ stage 2", h, (v, f, m) => {
      const g = f.get(v.command),
        E = f.get(v.output),
        y = f.get(v.input),
        T = r.geometries.meshlet;
      HA.dispatchIndirect({
        command: g,
        timer: i[1],
        encoder: m.encoder,
        bindings: {
          input: y,
          output: E,
          meshlet_lookup: T.lookup.buffer_meshlets,
        },
      });
    });
  return (
    (h.input = p.read(c.output)),
    (h.command = p.read(d)),
    t !== -1
      ? (h.output = p.write(t))
      : (h.output = p.create(
          "meshlets",
          je.from(
            n,
            GPUBufferUsage.STORAGE |
              GPUBufferUsage.COPY_SRC |
              GPUBufferUsage.COPY_DST,
            0,
            4
          )
        )),
    h.output
  );
}
const QA = Struct.from({ count: "atomic<u32>", elements: X.from(xs) }),
  eS = Struct.from({ count: "u32", elements: X.from(vs) }),
  sh = new ResourecGroup();
sh.createGroup()
  .addStorageBuffer("meshes", X.from(Xe))
  .addStorageBuffer("meshlet_data", X.from(P2));
sh.createGroup().addStorageBuffer("input_meshlets", eS);
sh.createGroup().addStorageBuffer("output_positive", QA, !0);
const tS = w.from(
    `
@compute @workgroup_size(256, 1, 1)
fn unpack(@builtin(global_invocation_id) global_id : vec3<u32>){
    
    let input_element_index = global_id.x;

    if(input_element_index >= input_meshlets.count){
        return;
    }

    let meshlet_def = input_meshlets.elements[input_element_index];
    let mesh_index = meshlet_def.mesh;

    let mesh = meshes[mesh_index];

    let meshlet_datum = meshlet_data[meshlet_def.index];

    const  invalid_triangle:u32 = 4294967295u;

    for( var triangle_index=0u; triangle_index<${j_}u; triangle_index++ ){
        let meshlet_triangle = meshlet_datum.triangles[triangle_index];

        if(meshlet_triangle == invalid_triangle){
            // reached the end of the valid triangle region, the rest is padded with invalid triangles
            return;
        }

        var write_offset = atomicAdd(&output_positive.count, 1u);

        output_positive.elements[ write_offset ] = ${xs.wgsl_ref}(
            mesh_index,
            meshlet_triangle
        );

    }
}
`,
    [xs.declaration_chunk]
  ),
  rS = new Yt(
    le.from({ label: "Unpack Meshlets to Triangles", resources: sh, body: tS })
  );
class Wg {
  constructor() {
    x(this, "input_meshlets", -1);
    x(this, "output_triangles", -1);
    x(this, "command", -1);
    x(this, "scene");
    x(this, "timer");
  }
}
function Jg(s, e, t) {
  const r = s.timer,
    i = e.get(s.input_meshlets),
    n = e.get(s.output_triangles),
    o = e.get(s.command),
    a = t.encoder,
    c = s.scene;
  rS.dispatchIndirect({
    encoder: a,
    command: o,
    timer: r,
    bindings: {
      meshes: c.instance_buffer,
      meshlet_data: c.geometries.meshlet.buffer_meshlet_data,
      input_meshlets: i,
      output_positive: n,
    },
  });
}
const iS = Struct.from({ count: "u32", elements: X.from(vs) }),
  Zg = Struct.from({ count: "atomic<u32>", elements: X.from(vs) }),
  Pp = new ResourecGroup();
Pp.createGroup()
  .addUniform("camera_current", ce)
  .addUniform("camera_previous", ce)
  .addUniform("view", hn)
  .addStorageBuffer("meshes", X.from(Xe))
  .addStorageBuffer("meshlet_bounds", X.from(Vi))
  .addTexture("texture_hzb");
Pp.createGroup()
  .addStorageBuffer("input", iS)
  .addStorageBuffer("output_positive", Zg, !0)
  .addStorageBuffer("output_maybe", Zg, !0);
const sS = w.from(
    `
@compute @workgroup_size(256, 1, 1)
fn unpack(@builtin(global_invocation_id) global_id : vec3<u32>){
    
    let input_index = global_id.x;
    
    if(input_index > input.count){
        return;
    }
    
    let meshlet = input.elements[input_index];
    
    let mesh = meshes[meshlet.mesh];
    
    let bounds_array = meshlet_bounds[ meshlet.index ].bounds;
    
    
    // check if cluster is too small to be visible
    // TODO implement small primitive culling using same test as with a triangle and 'sphere_screen_extents' method
    
    let meshlet_bounds = array_to_aabb3(bounds_array);
    
    let world_bounds = aabb3_project(meshlet_bounds, mesh.transform);
    
    /*
        TODO do frustum cull using a sphere representation, which is faster
    */
    
    if( !aabb3_intersects_frustum(world_bounds, camera_current.frustum) ){
        // outside of view frustum
        return ;
    }
    
    var previous_view_bounds:${xe.wgsl_ref};
    
    let valid_bounds = project_aabb_perspective(&previous_view_bounds, world_bounds, camera_previous.view_projection_matrix);
    
    if(
        !valid_bounds || query_depth_from_screen_space_bb(previous_view_bounds, texture_hzb) >= 0.0
    ){
    
        let write_offset = atomicAdd(&output_positive.count, 1u);
        output_positive.elements[ write_offset ] = meshlet;
    
    }else{
    
        let write_offset = atomicAdd(&output_maybe.count, 1u);
        output_maybe.elements[ write_offset ] = meshlet;
    
    }

}`,
    [xe.declaration_chunk, q_, Yv, yp, jv, wp, $_]
  ),
  nS = new Yt(
    le.from({ label: "Filter Meshlets 2way", resources: Pp, body: sS })
  );
class oS {
  constructor() {
    x(this, "timer");
    x(this, "view");
    x(this, "input_meshlets", -1);
    x(this, "out_meshlets_positive", -1);
    x(this, "out_meshlets_maybe", -1);
    x(this, "command", -1);
  }
}
const aS = (s, e, t) => {
  const r = s.view,
    i = r.scene,
    o = i.geometries.meshlet,
    a = t.encoder,
    c = s.timer,
    _ = e.get(s.input_meshlets),
    u = e.get(s.out_meshlets_positive),
    d = e.get(s.out_meshlets_maybe),
    h = e.get(s.command);
  nS.dispatchIndirect({
    encoder: a,
    timer: c,
    command: h,
    bindings: {
      view: r.uniform_buffer,
      camera_current: r.camera.buffer,
      camera_previous: r.gpu_previous_camera_state.buffer,
      meshes: i.instance_buffer,
      meshlet_bounds: o.buffer_bounds,
      texture_hzb: r.hierarchical_z_buffer.texture.obtainView(),
      input: _,
      output_positive: u,
      output_maybe: d,
    },
  });
};
function cS(s, e) {
  return Wt(1024 * 16, s * e + 16);
}
const yt = {
    PreMeshCull: 0,
    PreMeshExpansion_0: 1,
    PreMeshExpansion_1: 2,
    PreMeshletFilter: 3,
    PreMeshletExpansion: 4,
    PreTriangleFilter: 5,
    PreRasterizerPass: 6,
    PostMeshExpansion_0: 7,
    PostMeshExpansion_1: 8,
    PostMeshletFilter: 9,
    PostMeshletExpansion: 10,
    PostTriangleFilter: 11,
    PostRasterizerPass: 12,
  },
  lS = Uint32Array.BYTES_PER_ELEMENT * 2,
  _S = Uint32Array.BYTES_PER_ELEMENT * 2,
  uS = Uint32Array.BYTES_PER_ELEMENT * 3;
var Xl, zr, it, Wl, Jl, bi, ps, qc, F2;
class dS {
  constructor(e) {
    b(this, ps);
    b(this, Xl);
    b(this, zr);
    b(this, it, []);
    b(this, Wl, new Dv());
    b(this, Jl, 0);
    b(this, bi, {});
    S(this, Xl, e),
      S(this, zr, new t2(e.device, Object.keys(rt).length, 32)),
      getProperty(this, zr).setGlobalMax(rt.Meshes, 1e4),
      getProperty(this, zr).setGlobalMax(rt.Meshlets, 3e5),
      getProperty(this, zr).setGlobalMax(rt.MeshletBatches, 1e5),
      getProperty(this, zr).setGlobalMax(rt.Triangles, 1e6),
      this.update_previous_limits(),
      Object.keys(yt).forEach((t) => {
        const r = yt[t];
        getProperty(this, it)[r] = new kc(e.device, t);
      });
  }
  async update() {
    return Promise.all([getProperty(this, zr).readback()]);
  }
  update_previous_limits() {
    Object.values(rt).forEach((e) => {
      getProperty(this, bi)[e] = getProperty(this, zr).getGlobalMax(e);
    });
  }
  destroy() {
    getProperty(this, zr).destroy(),
      Object.values(getProperty(this, it)).forEach((e) => e.destroy());
  }
  execute(e, t, r) {
    const i = new O_();
    e.update();
    const n = getProperty(this, zr);
    for (let ue = 0; ue < n.columns; ue++) {
      const be = getProperty(this, bi)[ue];
      if (n.getGlobalMax(ue) > be) {
        for (let he = ue + 1; he < n.columns; he++)
          n.clearColumn(he), n.setGlobalMax(he, getProperty(this, bi)[he]);
        break;
      }
    }
    const o = n.getGlobalMax(rt.Meshes),
      a = n.getGlobalMax(rt.MeshletBatches),
      c = n.getGlobalMax(rt.Meshlets),
      _ = n.getGlobalMax(rt.Triangles);
    (getProperty(this, bi)[rt.Meshes] = o),
      (getProperty(this, bi)[rt.MeshletBatches] = a),
      (getProperty(this, bi)[rt.Meshlets] = c),
      (getProperty(this, bi)[rt.Triangles] = _);
    const u = P(this, ps, qc).call(this, Uint32Array.BYTES_PER_ELEMENT, o),
      d = P(this, ps, qc).call(this, _S, c),
      h = P(this, ps, qc).call(this, uS, a),
      p = P(this, ps, qc).call(this, lS, _);
    let v = i.import_resource(
        "viz/triangle",
        oe.fromTexture(r.color_attachments[0].gpu_texture),
        r.color_attachments[0]
      ),
      f = i.import_resource(
        "viz/mesh",
        oe.fromTexture(r.color_attachments[1].gpu_texture),
        r.color_attachments[1]
      ),
      m = i.import_resource(
        "viz/depth",
        oe.fromTexture(r.depth_attachment.gpu_texture),
        r.depth_attachment
      ),
      g = i.import_resource(
        "hzb",
        oe.fromTexture(e.hierarchical_z_buffer.texture.gpu_texture),
        e.hierarchical_z_buffer.texture
      );
    const E = i.import_resource(
        "current camera uniforms",
        je.fromBuffer(e.camera.gpu_buffer),
        e.camera.gpu_buffer
      ),
      y = new LA();
    (y.view_ctx = e), (y.timer = getProperty(this, it)[yt.PreMeshCull]);
    const A = i.add("mesh cull", y, PA);
    (y.out_meshes_positive = A.create(
      "instances positive",
      je.from(
        u,
        GPUBufferUsage.STORAGE |
          GPUBufferUsage.COPY_SRC |
          GPUBufferUsage.COPY_DST,
        0,
        16
      )
    )),
      (y.out_meshes_maybe = A.create(
        "instances maybe",
        je.from(
          u,
          GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          0,
          16
        )
      )),
      Zt(i, e.stats, cr.VisibleMeshes0, y.out_meshes_positive),
      Zt(i, e.stats, cr.VisibleMeshes1, y.out_meshes_maybe),
      Zt(i, n, rt.Meshes, y.out_meshes_positive),
      Zt(i, n, rt.Meshes, y.out_meshes_maybe);
    const T = Xg({
      graph: i,
      input_meshes: y.out_meshes_positive,
      scene: e.scene,
      timers: [
        getProperty(this, it)[yt.PreMeshExpansion_0],
        getProperty(this, it)[yt.PreMeshExpansion_1],
      ],
      expected_output_size: d,
      batch_buffer_size: h,
      stats: n,
    });
    Zt(i, n, rt.Meshlets, T);
    const z = new oS();
    (z.timer = getProperty(this, it)[yt.PreMeshletFilter]), (z.view = e);
    const C = Is(i, T),
      U = i.add("filter meshlets 2 way", z, aS);
    (z.command = U.read(C)),
      (z.input_meshlets = U.read(T)),
      (z.out_meshlets_positive = U.create(
        "meshlets positive",
        je.from(
          d,
          GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          0,
          4
        )
      )),
      (z.out_meshlets_maybe = U.create(
        "meshlets maybe",
        je.from(
          d,
          GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          0,
          4
        )
      )),
      Zt(i, e.stats, cr.VisibleMeshlets0, z.out_meshlets_positive);
    const k = new Wg(),
      N = Is(i, z.out_meshlets_positive),
      M = i.add("expand meshlets to triangles / pass 0", k, Jg);
    (k.command = M.read(N)),
      (k.input_meshlets = M.read(z.out_meshlets_positive)),
      (k.output_triangles = M.create(
        "triangles",
        je.from(
          p,
          GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          0,
          4
        )
      )),
      (k.scene = e.scene),
      (k.timer = getProperty(this, it)[yt.PreMeshletExpansion]),
      Zt(i, n, rt.Triangles, k.output_triangles);
    const I = Is(i, k.output_triangles),
      L = new DA();
    (L.timer = getProperty(this, it)[yt.PreTriangleFilter]), (L.view = e);
    const F = i.add("filter triangles 2 way", L, GA);
    (L.command = F.read(I)),
      (L.input_triangles = F.read(k.output_triangles)),
      (L.out_triangles_positive = F.create(
        "triangles positive",
        je.from(
          p,
          GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          0,
          4
        )
      )),
      (L.out_triangles_maybe = F.create(
        "triangles maybe",
        je.from(
          p,
          GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          0,
          4
        )
      )),
      Zt(i, e.stats, cr.VisibleTriangles0, L.out_triangles_positive);
    const D = new wg();
    (D.timer = getProperty(this, it)[yt.PreRasterizerPass]),
      (D.clear_targets = !0),
      (D.view = e);
    const H = xg(i, L.out_triangles_positive, "3, input, 0, 0"),
      J = i.add("rasterize", D, Tg);
    (D.command = J.read(H)),
      (D.input_triangles = J.read(L.out_triangles_positive)),
      (D.out_texture_depth = m = J.write(m)),
      (D.out_texture_triangle = v = J.write(v)),
      (D.out_texture_mesh = f = J.write(f)),
      (g = vg(i, e.hierarchical_z_buffer, m, g));
    const R = Xg({
      graph: i,
      input_meshes: y.out_meshes_maybe,
      output_meshlets: z.out_meshlets_maybe,
      scene: e.scene,
      timers: [
        getProperty(this, it)[yt.PostMeshExpansion_0],
        getProperty(this, it)[yt.PostMeshExpansion_1],
      ],
      expected_output_size: d,
      batch_buffer_size: h,
      stats: n,
    });
    Zt(i, n, rt.Meshlets, z.out_meshlets_maybe);
    const O = new PT();
    (O.timer = getProperty(this, it)[yt.PostMeshletFilter]),
      (O.scene = e.scene);
    const q = Is(i, R),
      Y = i.add("hzb filter meshlets", O, BT);
    (O.command = Y.read(q)),
      (O.texture_hzb = g = Y.read(g)),
      (O.input_meshlets = Y.read(R)),
      (O.output_meshlets = Y.create(
        "meshlets",
        je.from(
          d,
          GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          0,
          4
        )
      )),
      (O.camera = Y.read(E)),
      Zt(i, e.stats, cr.VisibleMeshlets1, O.output_meshlets);
    const $ = new Wg();
    ($.timer = getProperty(this, it)[yt.PostMeshletExpansion]),
      ($.scene = e.scene);
    const K = Is(i, O.output_meshlets),
      V = i.add("expand meshlets to triangles / pass 1", $, Jg);
    ($.command = V.read(K)),
      ($.input_meshlets = V.read(O.output_meshlets)),
      V.read(L.out_triangles_maybe),
      ($.output_triangles = V.write(L.out_triangles_maybe)),
      Zt(i, n, rt.Triangles, $.output_triangles);
    const j = new $T();
    (j.timer = getProperty(this, it)[yt.PostTriangleFilter]), (j.view = e);
    const te = Is(i, $.output_triangles),
      re = i.add("hzb filter triangles", j, qT);
    (j.hzb = g = re.read(g)),
      (j.camera = re.read(E)),
      (j.command = re.read(te)),
      (j.input_triangles = re.read($.output_triangles)),
      (j.output_triangles = re.create(
        "triangles",
        je.from(
          p,
          GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
          0,
          4
        )
      )),
      Zt(i, e.stats, cr.VisibleTriangles1, j.output_triangles);
    const ie = new wg();
    (ie.timer = getProperty(this, it)[yt.PostRasterizerPass]),
      (ie.clear_targets = !1),
      (ie.view = e);
    const _e = xg(i, j.output_triangles, "3, input, 0, 0"),
      ae = i.add("rasterize", ie, Tg);
    (ie.command = ae.read(_e)),
      (ie.input_triangles = ae.read(j.output_triangles)),
      (ie.out_texture_depth = m = ae.write(m)),
      (ie.out_texture_triangle = v = ae.write(v)),
      (ie.out_texture_mesh = f = ae.write(f)),
      (g = vg(i, e.hierarchical_z_buffer, m, g)),
      t.encodeGraph(i),
      P(this, ps, F2).call(this, t);
  }
}
(Xl = new WeakMap()),
  (zr = new WeakMap()),
  (it = new WeakMap()),
  (Wl = new WeakMap()),
  (Jl = new WeakMap()),
  (bi = new WeakMap()),
  (ps = new WeakSet()),
  (qc = function (e, t) {
    const r = cS(e, t),
      o = getProperty(this, Xl).device.limits,
      a = Math.min(o.maxStorageBufferBindingSize, o.maxBufferSize);
    return (
      r > a &&
        ap(`Requesting buffer size larger than limit '${rl(r)}' > ${rl(a)}`),
      Ye(r, 16, a)
    );
  }),
  (F2 = function (e) {
    const t = Object.keys(getProperty(this, it));
    let r = 0;
    t.forEach((n) => {
      const o = getProperty(this, it)[n];
      o.update(e), (r += o.stats.last);
    }),
      getProperty(this, Wl).record(r);
    const i = performance.now();
    if ((i - getProperty(this, Jl)) * 0.001 > 5) {
      S(this, Jl, i);
      const n = new gn();
      t.forEach((o) => {
        const a = getProperty(this, it)[o];
        n.add(a.buildLogTextAverage());
      }),
        n.add(`Total: ${Fv(getProperty(this, Wl).average)}`);
    }
  });
var Zl, qa, Kl, hd, fd, D2;
class hS {
  constructor(e, t, r) {
    b(this, fd);
    b(this, Zl);
    b(this, qa);
    b(this, Kl);
    b(this, hd, new Ct());
    S(this, Zl, e), S(this, qa, t), S(this, Kl, r);
  }
  get layouts() {
    return getProperty(this, qa);
  }
  obtain(e) {
    return getProperty(this, hd).getOrCompute(e, P(this, fd, D2), this);
  }
}
(Zl = new WeakMap()),
  (qa = new WeakMap()),
  (Kl = new WeakMap()),
  (hd = new WeakMap()),
  (fd = new WeakSet()),
  (D2 = function (e) {
    const t = getProperty(this, Kl),
      r = getProperty(this, qa),
      i = getProperty(this, Zl),
      n = e.compute,
      o = {
        label: e.label,
        layout: r.obtainPipelineLayout(e.layout),
        compute: {
          module: t.obtain(n.module),
          entryPoint: n.entryPoint,
          constants: n.constants,
        },
      };
    return i.createComputePipeline(o);
  });
var Ha, pd, md, Tc, G2, V2;
class fS {
  constructor(e) {
    b(this, Tc);
    b(this, Ha);
    b(this, pd, new Ct());
    b(this, md, new Ct());
    S(this, Ha, e);
  }
  obtainBindGroupLayout(e) {
    return getProperty(this, pd).getOrCompute(e, P(this, Tc, G2), this);
  }
  obtainPipelineLayout(e) {
    return getProperty(this, md).getOrCompute(e, P(this, Tc, V2), this);
  }
}
(Ha = new WeakMap()),
  (pd = new WeakMap()),
  (md = new WeakMap()),
  (Tc = new WeakSet()),
  (G2 = function (e) {
    return getProperty(this, Ha).createBindGroupLayout(e);
  }),
  (V2 = function (e) {
    const t = e.bindGroupLayouts.map(this.obtainBindGroupLayout, this);
    return getProperty(this, Ha).createPipelineLayout({
      label: e.label,
      bindGroupLayouts: t,
    });
  });
var Ql, Ya, e_, gd, vd, $2;
class pS {
  constructor(e, t, r) {
    b(this, vd);
    b(this, Ql);
    b(this, Ya);
    b(this, e_);
    b(this, gd, new Ct());
    S(this, Ql, e), S(this, Ya, t), S(this, e_, r);
  }
  get layouts() {
    return getProperty(this, Ya);
  }
  obtain(e) {
    return getProperty(this, gd).getOrCompute(e, P(this, vd, $2), this);
  }
}
(Ql = new WeakMap()),
  (Ya = new WeakMap()),
  (e_ = new WeakMap()),
  (gd = new WeakMap()),
  (vd = new WeakSet()),
  ($2 = function (e) {
    const t = getProperty(this, e_),
      r = getProperty(this, Ya),
      i = getProperty(this, Ql),
      n = {
        label: e.label,
        layout: r.obtainPipelineLayout(e.layout),
        primitive: e.primitive,
        depthStencil: e.depthStencil,
        vertex: {
          module: t.obtain(e.vertex.module),
          entryPoint: e.vertex.entryPoint,
          buffers: e.vertex.buffers,
          constants: e.vertex.constants,
        },
        multisample: e.multisample,
      };
    e.fragment !== false &&
      (n.fragment = {
        module: t.obtain(e.fragment.module),
        entryPoint: e.fragment.entryPoint,
        targets: e.fragment.targets,
        constants: e.fragment.constants,
      }),
      i.pushErrorScope("validation"),
      i.pushErrorScope("internal");
    const o = i.createRenderPipeline(n);
    function a(c) {}
    return i.popErrorScope().then(a), i.popErrorScope().then(a), o;
  });
var t_, xd, bd, q2;
class mS {
  constructor(e) {
    b(this, bd);
    b(this, t_);
    b(this, xd, new Ct());
    S(this, t_, e);
  }
  obtain(e) {
    return getProperty(this, xd).getOrCompute(e, P(this, bd, q2), this);
  }
}
(t_ = new WeakMap()),
  (xd = new WeakMap()),
  (bd = new WeakSet()),
  (q2 = function (e) {
    const t = getProperty(this, t_);
    t.pushErrorScope("validation");
    const r = t.createShaderModule(e);
    return (
      t.popErrorScope().then((i) => {
        if (i === null) return;
        const n = new gn();
        n.add("Error during device.createShaderModule:"),
          n.add(i.message),
          n.indent(),
          e.label !== "" && n.add(`Descriptor Label: ${e.label}`),
          n.dedent(),
          n.add("Shader source:"),
          n.add(e.getSourceWithLineNumbers());
      }),
      r
    );
  });
function gS(s) {
  let e = 0;
  return (
    typeof s.label == "string" && (e ^= Re(s.label)),
    s instanceof GPUSampler
      ? (e ^= 1)
      : s.buffer !== false &&
        ((e ^= s.offset ?? 0 + s.size ?? 1234),
        (e = e * 31 + s.buffer.size),
        (e = e * 31 + s.buffer.usage)),
    e
  );
}
function vS(s, e) {
  return s === e
    ? !0
    : s.constructor !== e.constructor
    ? !1
    : s.buffer !== false &&
      s.buffer === e.buffer &&
      s.offset === e.offset &&
      s.size === e.size;
}
var ja, js;
const dm = class dm {
  constructor() {
    b(this, ja);
    b(this, js, []);
  }
  get layout() {
    return getProperty(this, ja);
  }
  get entries() {
    return getProperty(this, js);
  }
  hash() {
    const e = getProperty(this, js),
      t = e.length;
    let r = t;
    for (let i = 0; i < t; i++) {
      const n = e[i];
      n !== false && ((r = r * 31 + gS(n)), (r >>>= 0));
    }
    return r;
  }
  equals(e) {
    if (!getProperty(this, ja).equals(e.layout)) return !1;
    const t = getProperty(this, js).length,
      r = e.entries;
    if (r.length !== t) return !1;
    for (let i = 0; i < t; i++) {
      const n = getProperty(this, js)[i],
        o = r[i];
      if (!vS(n, o)) return !1;
    }
    return !0;
  }
  static from(e, t) {
    const r = new dm();
    return S(r, ja, e), S(r, js, t), r;
  }
};
(ja = new WeakMap()), (js = new WeakMap());
let zi = dm;
const xS = 8,
  Jh = 32;
var r_, io, i_, s_, Xa;
class bS {
  constructor(e, t) {
    b(
      this,
      r_,
      new pr({ keyHashFunction: Kr, keyEqualityFunction: ko, maxWeight: 2048 })
    );
    b(
      this,
      io,
      new pr({ keyHashFunction: Kr, keyEqualityFunction: ko, maxWeight: Jh })
    );
    b(this, i_);
    b(this, s_);
    b(this, Xa, 0);
    S(this, i_, e), S(this, s_, t);
  }
  obtain(e) {
    ze(this, Xa)._++;
    let t = getProperty(this, r_).get(e);
    if (t !== null) return t;
    const r = getProperty(this, io).get(e);
    return r !== null
      ? (r.access_count >= xS
          ? (getProperty(this, r_).put(e, r.group),
            getProperty(this, io).remove(e))
          : r.access_count++,
        r.group)
      : ((t = this.create(e)),
        getProperty(this, io).put(e, { group: t, access_count: 1 }),
        t);
  }
  create(e) {
    const t = e.layout,
      r = getProperty(this, s_).obtainBindGroupLayout(t),
      i = [],
      n = e.entries;
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      i.push({ binding: o, resource: a });
    }
    return getProperty(this, i_).createBindGroup({
      label: t.label,
      layout: r,
      entries: i,
    });
  }
  update() {
    const e = getProperty(this, io),
      t = e.maxWeight,
      r = getProperty(this, Xa);
    t < r
      ? (e.maxWeight = r)
      : t > Jh &&
        t * 0.5 > r &&
        (e.maxWeight = Math.max(Math.ceil(t * 0.5), Jh)),
      S(this, Xa, 0);
  }
}
(r_ = new WeakMap()),
  (io = new WeakMap()),
  (i_ = new WeakMap()),
  (s_ = new WeakMap()),
  (Xa = new WeakMap());
let yS = 0;
var yd, ss;
const wd = class wd {
  constructor() {
    b(this, yd, yS++);
    x(this, "descriptor", new At());
    b(this, ss);
  }
  get id() {
    return getProperty(this, yd);
  }
  static from(e, t) {
    const r = new wd();
    return r.descriptor.copy(e), S(r, ss, t), r;
  }
  static fromBuffer(e) {
    const t = new wd();
    return S(t, ss, e), t.descriptor.setFromBuffer(e), t;
  }
  get size() {
    return this.descriptor.size;
  }
  get gpu_buffer() {
    return getProperty(this, ss);
  }
  destroy() {
    getProperty(this, ss) !== false &&
      (getProperty(this, ss).destroy(), S(this, ss, false));
  }
};
(yd = new WeakMap()), (ss = new WeakMap());
let Lf = wd;
function wS(s, e) {
  const t = s.createBuffer(e);
  return Lf.from(e, t);
}
function Bp(s, e, t, r = 0, i = s.length - 1) {
  let n = r,
    o = i;
  for (; n <= o; ) {
    const a = (n + o) >> 1,
      c = t(e, s[a]);
    if (c < 0) o = a - 1;
    else if (c > 0) n = a + 1;
    else return a;
  }
  return n;
}
class TS {
  constructor(e, t) {
    x(this, "key");
    x(this, "buffer");
    x(this, "last_use_time", 0);
    (this.key = e), (this.buffer = t);
  }
}
var Wa, $r, so, Td, gr, H2, Ed, Ad, Ja, Y2, j2, Pf, X2;
class ES {
  constructor(e) {
    b(this, gr);
    b(this, Wa);
    b(this, $r, []);
    b(this, so, new Map());
    b(
      this,
      Td,
      new pr({
        keyWeigher(e) {
          return e.byteLength;
        },
        maxWeight: 10 * 1024 * 1024,
        keyEqualityFunction(e, t) {
          return tl(e, t);
        },
        keyHashFunction(e) {
          return O0(e);
        },
      })
    );
    b(this, Ed, 0);
    b(this, Ad, 10);
    b(this, Ja, 0);
    S(this, Wa, e);
  }
  obtainStaticBuffer(e) {
    if (!tp(e))
      throw new Error(
        "Expected data to be a typed array, instead got something else"
      );
    return getProperty(this, Td).getOrCompute(e, P(this, gr, H2), this);
  }
  increment_time() {
    ze(this, Ja)._++;
  }
  obtains(e, t = !0) {
    let r;
    const i = P(this, gr, Pf).call(this, e);
    if (i >= 0 && i < getProperty(this, $r).length) {
      const n = getProperty(this, $r)[i],
        o = n.key;
      (o.equals(e) || (t && o.usage === o.usage && o.size > e.size)) &&
        (r = n.buffer);
    }
    if (
      (r === false
        ? (r = P(this, gr, X2).call(this, e))
        : getProperty(this, $r).splice(i, 1),
      getProperty(this, so).set(r, e),
      getProperty(this, so).size > 1024)
    )
      throw new Error("Too many floating buffers (bound but not released)");
    return r;
  }
  release(e) {
    const t = getProperty(this, so).get(e);
    if (t === false) return !1;
    getProperty(this, so).delete(e);
    const r = P(this, gr, Pf).call(this, t),
      i = new TS(t, e);
    return (
      (i.last_use_time = getProperty(this, Ja)),
      getProperty(this, $r).splice(r, 0, i),
      !0
    );
  }
  update() {
    P(this, gr, Y2).call(this);
  }
}
(Wa = new WeakMap()),
  ($r = new WeakMap()),
  (so = new WeakMap()),
  (Td = new WeakMap()),
  (gr = new WeakSet()),
  (H2 = function (e) {
    return (
      e.byteLength > 256,
      uv(
        getProperty(this, Wa),
        "static buffer",
        GPUBufferUsage.COPY_SRC | GPUBufferUsage.UNIFORM,
        e.buffer,
        e.byteOffset,
        e.byteLength
      )
    );
  }),
  (Ed = new WeakMap()),
  (Ad = new WeakMap()),
  (Ja = new WeakMap()),
  (Y2 = function () {
    const e = getProperty(this, $r),
      t = e.length;
    if (t === 0) return;
    const i = ze(this, Ed)._++ % t,
      n = e[i];
    getProperty(this, Ja) - n.last_use_time > getProperty(this, Ad) &&
      P(this, gr, j2).call(this, i);
  }),
  (j2 = function (e) {
    const t = getProperty(this, $r)[e];
    getProperty(this, $r).splice(e, 1), t.buffer.destroy();
  }),
  (Pf = function (e) {
    return Bp(getProperty(this, $r), e, (t, r) => t.compare(r.key));
  }),
  (X2 = function (e) {
    return getProperty(this, Wa).createBuffer(e);
  });
var yi;
class W2 {
  constructor() {
    b(this, yi, new Ac());
  }
  peek() {
    return getProperty(this, yi).nextClearBit(0);
  }
  get() {
    const e = this.peek();
    return getProperty(this, yi).set(e, !0), e;
  }
  getSpecific(e) {
    return this.isUsed(e) ? !1 : (getProperty(this, yi).set(e, !0), !0);
  }
  isUsed(e) {
    return getProperty(this, yi).get(e);
  }
  traverseUsed(e) {
    const t = getProperty(this, yi);
    for (let r = t.nextSetBit(0); r !== -1; r = t.nextSetBit(r + 1)) e(r);
  }
  release(e) {
    getProperty(this, yi).clear(e);
  }
  reset() {
    getProperty(this, yi).reset();
  }
}
yi = new WeakMap();
const J2 = new Uint32Array(781250);
J2.pointer = 0;
const Di = J2;
function AS(s, e, t, r) {
  if (t >= r) return;
  const i = Di.pointer;
  let n = i,
    o,
    a;
  for (Di[n++] = t, Di[n++] = r; n > i; ) {
    n -= 2;
    const c = Di[n + 1],
      _ = Di[n];
    (o = _), (a = c);
    const u = (_ + c) >> 1,
      d = s[u],
      h = e[d];
    for (; o <= a; ) {
      for (; e[s[o]] < h; ) o++;
      for (; e[s[a]] > h; ) a--;
      if (o <= a) {
        if (o !== a) {
          const p = s[o];
          (s[o] = s[a]), (s[a] = p);
        }
        o++, a--;
      }
    }
    _ < a && ((Di[n++] = _), (Di[n++] = a)),
      o < c && ((Di[n++] = o), (Di[n++] = c));
  }
}
function SS(s, e, t, r, i, n) {
  const o = r * 3,
    a = i * 3,
    c = n * 3,
    _ = t[o],
    u = t[o + 1],
    d = t[o + 2],
    h = t[a],
    p = t[a + 1],
    v = t[a + 2],
    f = t[c],
    m = t[c + 1],
    g = t[c + 2];
  (s[e] = oa(_, h, f)),
    (s[e + 1] = oa(u, p, m)),
    (s[e + 2] = oa(d, v, g)),
    (s[e + 3] = Xc(_, h, f)),
    (s[e + 4] = Xc(u, p, m)),
    (s[e + 5] = Xc(d, v, g));
}
function Zh(s) {
  let e = s;
  return (
    (e = (e | (e << 16)) & 50331903),
    (e = (e | (e << 8)) & 50393103),
    (e = (e | (e << 4)) & 51130563),
    (e = (e | (e << 2)) & 153391689),
    e
  );
}
function zS(s, e, t) {
  const r = Zh(s),
    i = Zh(e) << 1,
    n = Zh(t) << 2;
  return r | i | n;
}
function CS(s, e, t, r, i, n, o, a, c, _) {
  const u = a - i,
    d = c - n,
    h = _ - o,
    p = i * 3,
    v = n * 3,
    f = o * 3,
    m = u === 0 ? 0 : 1023 / (u * 3),
    g = d === 0 ? 0 : 1023 / (d * 3),
    E = h === 0 ? 0 : 1023 / (h * 3);
  for (let y = 0; y < e; y++) {
    const A = y * 3,
      T = t[A],
      z = t[A + 1],
      C = t[A + 2],
      U = T * 3,
      k = C * 3,
      N = z * 3,
      M = r[U],
      I = r[U + 1],
      L = r[U + 2],
      F = r[N],
      D = r[N + 1],
      H = r[N + 2],
      J = r[k],
      R = r[k + 1],
      O = r[k + 2],
      q = M + F + J,
      Y = I + D + R,
      $ = L + H + O,
      K = (q - p) * m,
      V = (Y - v) * g,
      j = ($ - f) * E;
    s[y] = zS(Math.round(K), Math.round(V), Math.round(j));
  }
}
function US(s, e, t, r) {
  const i = t + ((r >>> 2) << 2);
  let n = 0;
  for (let o = t; o < i; o += 4) {
    const a = e[o],
      c = e[o + 1],
      _ = e[o + 2],
      u = e[o + 3],
      d =
        s.node_get_combined_surface_area(a, c) +
        s.node_get_combined_surface_area(_, u),
      h =
        s.node_get_combined_surface_area(a, _) +
        s.node_get_combined_surface_area(c, u),
      p =
        s.node_get_combined_surface_area(a, u) +
        s.node_get_combined_surface_area(_, c);
    (d <= h && d <= p) ||
      (h <= p
        ? ((e[o + 1] = _), (e[o + 2] = c))
        : ((e[o + 1] = u), (e[o + 3] = c)),
      n++);
  }
  return n;
}
function IS(s, e, t, r, i, n = 1) {
  let o = i,
    a = t;
  for (; a > 1; ) {
    for (let u = 0; u < n; u++) {
      const d = (u << 1) & 3;
      if (US(s, e, d, a - d) === 0) break;
    }
    let c = 0,
      _ = 0;
    for (; _ + 1 < a; ) {
      const u = e[_++],
        d = e[_++],
        h = r[o++];
      s.node_set_combined_aabb(h, d, u),
        s.node_set_parent(d, h),
        s.node_set_parent(u, h),
        s.node_set_child1(h, d),
        s.node_set_child2(h, u),
        s.node_set_height(
          h,
          1 + ne(s.node_get_height(d), s.node_get_height(u))
        ),
        (e[c++] = h);
    }
    for (; _ < a; ) e[c++] = e[_++];
    a = c;
  }
  return s.node_set_parent(e[0], He), e[0];
}
function NS(s, e, t, r = new Uint32Array(e.length / 3), i, n = 0) {
  s.release_all();
  const o = e.length / 3,
    a = o,
    c = ne(0, a - 1),
    _ = a + c;
  (s.node_capacity = _), (s.__size = _);
  const u = new Uint32Array(o);
  for (let m = 0; m < o; m++) u[m] = m;
  let d = i;
  d === false && ((d = new fr()), D0(d, t, t.length)),
    CS(r, o, e, t, d.x0, d.y0, d.z0, d.x1, d.y1, d.z1),
    AS(u, r, 0, o - 1);
  const h = s.__data_float32,
    p = s.__data_uint32;
  for (let m = 0; m < o; m++) {
    const g = _ - 1 - m,
      E = u[m],
      y = E * 3,
      A = e[y],
      T = e[y + 1],
      z = e[y + 2],
      C = B * g;
    SS(h, C, t, A, T, z), (p[C + Ne] = He), (p[C + Cf] = E), (p[C + de] = 0);
  }
  const v = new Uint32Array(_);
  for (let m = 0; m < _; m++) v[m] = _ - 1 - m;
  const f = new Uint32Array(o);
  xc(v, f), (s.root = IS(s, f, o, v, o, n));
}
var Za, n_;
class MS {
  constructor() {
    b(this, Za, new kp());
    x(this, "slot", 0);
    x(this, "address", 0);
    b(this, n_);
  }
  get tree() {
    return getProperty(this, Za);
  }
  build(e) {
    e.ensureIndex(), e.ensureBounds();
    const t = e.getAttribute(Me.Position),
      r = e.index;
    S(this, n_, new Uint32Array(e.getPrimitiveCount()));
    const i = new fr(...e.bounding_box);
    NS(getProperty(this, Za), r.data, t.data, getProperty(this, n_), i, 4),
      getProperty(this, Za).trim();
  }
}
(Za = new WeakMap()), (n_ = new WeakMap());
const Us = Struct.from({ address: "u32" }),
  Z2 = 1024,
  kS = Wt(Z2, 1024),
  RS = 1024,
  LS = 1.2,
  PS = Sc();
var Xs, Ws, Ka, Qa, no, ec, o_, Sd, Ri, K2, Q2, ex, tx;
class BS {
  constructor(e) {
    b(this, Ri);
    b(this, Xs);
    b(this, Ws);
    b(this, Ka, 0);
    b(this, Qa, 0);
    b(this, no);
    b(this, ec, new Map());
    b(this, o_, new Qr());
    b(this, Sd, new W2());
    S(this, no, e),
      S(
        this,
        Xs,
        e.createBuffer({
          label: "GPUGeometryBVHManager/metadata",
          size: Us.size * 16,
          usage:
            GPUBufferUsage.COPY_DST |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.STORAGE,
        })
      ),
      S(
        this,
        Ws,
        e.createBuffer({
          label: "GPUGeometryBVHManager/data",
          size: kS,
          usage:
            GPUBufferUsage.COPY_DST |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.STORAGE,
        })
      );
  }
  get buffer_metadata() {
    return getProperty(this, Xs);
  }
  get buffer_data() {
    return getProperty(this, Ws);
  }
  obtain(e) {
    let t = getProperty(this, ec).get(e);
    return t === false && (t = P(this, Ri, K2).call(this, e)), t;
  }
  update(e) {
    const t = getProperty(this, o_),
      r = t.size();
    if (r === 0) return;
    let i = 0,
      n = 0;
    const o = new Uint32Array(r);
    for (let v = 0; v < r; v++) {
      const m = t.getElementByIndex(v).tree,
        g = m.data_buffer.byteLength;
      (o[v] = n), (n += g), (i += m.node_capacity);
    }
    P(this, Ri, ex).call(this, getProperty(this, ec).size),
      P(this, Ri, Q2).call(this, getProperty(this, Qa) + i);
    const a = getProperty(this, no),
      c = a.createCommandEncoder({ label: "GPUGeometryBVHManager#update" }),
      _ = a.createBuffer({
        label: "temp_data_buffer",
        usage: GPUBufferUsage.COPY_SRC,
        size: n,
        mappedAtCreation: !0,
      }),
      u = _.getMappedRange();
    for (let v = 0; v < r; v++) {
      const m = t.getElementByIndex(v).tree.data_buffer,
        g = o[v];
      Oo(m, 0, u, g, m.byteLength);
    }
    _.unmap();
    for (let v = 0; v < r; v++) {
      const f = t.getElementByIndex(v),
        m = getProperty(this, Ka);
      f.address = m / Mi.size;
      const g = f.tree.data_buffer.byteLength;
      S(this, Ka, getProperty(this, Ka) + g);
      const E = o[v];
      c.copyBufferToBuffer(_, E, getProperty(this, Ws), m, g);
    }
    const d = a.createBuffer({
        label: "temp_metadata_buffer",
        usage: GPUBufferUsage.COPY_SRC,
        size: r * Us.size,
        mappedAtCreation: !0,
      }),
      h = d.getMappedRange(),
      p = new DataView(h);
    for (let v = 0; v < r; v++) {
      const f = t.getElementByIndex(v);
      P(this, Ri, tx).call(this, f, p),
        c.copyBufferToBuffer(
          d,
          v * Us.size,
          getProperty(this, Xs),
          f.slot * Us.size,
          Us.size
        );
    }
    d.unmap(), a.queue.submit([c.finish()]), _.destroy(), d.destroy();
  }
}
(Xs = new WeakMap()),
  (Ws = new WeakMap()),
  (Ka = new WeakMap()),
  (Qa = new WeakMap()),
  (no = new WeakMap()),
  (ec = new WeakMap()),
  (o_ = new WeakMap()),
  (Sd = new WeakMap()),
  (Ri = new WeakSet()),
  (K2 = function (e) {
    const t = new MS();
    return (
      (t.slot = getProperty(this, Sd).get()),
      t.build(e),
      getProperty(this, ec).set(e, t),
      getProperty(this, o_).add(t),
      t
    );
  }),
  (Q2 = function (e) {
    if (getProperty(this, Qa) >= e) return;
    let t = e;
    S(this, Qa, t),
      S(
        this,
        Ws,
        Rf(
          getProperty(this, no),
          getProperty(this, Ws),
          t * Mi.size,
          Z2,
          RS,
          LS
        )
      );
  }),
  (ex = function (e) {
    S(
      this,
      Xs,
      Rf(
        getProperty(this, no),
        getProperty(this, Xs),
        e * Us.size,
        Us.align,
        16,
        1.2
      )
    );
  }),
  (tx = function (e, t) {
    const i = e.slot * Us.size;
    t.setUint32(i, e.address, PS);
  });
class OS {
  constructor() {
    x(this, "geometry");
    x(this, "index", 0);
  }
}
var a_;
class FS {
  constructor(e) {
    x(this, "buffer_meshlets", null);
    x(this, "buffer_geometries", null);
    b(this, a_);
    S(this, a_, e), this.build([], 0);
  }
  destroy() {
    this.buffer_meshlets !== null &&
      (this.buffer_meshlets.destroy(), (this.buffer_meshlets = null)),
      this.buffer_geometries !== null &&
        (this.buffer_geometries.destroy(), (this.buffer_geometries = null));
  }
  build(e, t) {
    const r = getProperty(this, a_);
    this.destroy();
    const i = e.length;
    (this.buffer_meshlets = r.createBuffer(
      At.fromJSON({
        label: "MeshletLookupIndex/meshlets",
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        size: Math.max(1, t) * Uint32Array.BYTES_PER_ELEMENT,
        mappedAtCreation: !0,
      })
    )),
      (this.buffer_geometries = r.createBuffer(
        At.fromJSON({
          label: "MeshletLookupIndex/geometries",
          usage:
            GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_DST |
            GPUBufferUsage.COPY_SRC,
          size: Math.max(1, i) * O2.size,
          mappedAtCreation: !0,
        })
      ));
    const n = this.buffer_meshlets.getMappedRange(0, this.buffer_meshlets.size),
      o = new Uint32Array(n),
      a = this.buffer_geometries.getMappedRange(0, this.buffer_geometries.size),
      c = new Uint32Array(a);
    let _ = 0;
    for (let u = 0; u < i; u++) {
      const d = e[u],
        h = d.count,
        p = u * 2;
      (c[p] = h), (c[p + 1] = _);
      for (let v = 0; v < h; v++) o[_++] = d.allocations[v];
    }
    this.buffer_meshlets.unmap(), this.buffer_geometries.unmap();
  }
}
a_ = new WeakMap();
const da = { Resident: 1 };
class DS {
  constructor(e) {
    x(this, "allocations");
    x(this, "flags", 0);
    x(this, "meshlets");
    this.allocations = new Uint32Array(e);
  }
  clear_allocation_mask(e) {
    const t = this.count,
      r = this.allocations;
    for (let i = 0; i < t; i++) e.clear(r[i]);
    this.clearFlag(da.Resident);
  }
  create_allocation(e, t = 0) {
    const r = this.count;
    let i = t;
    for (let n = 0; n < r; n++) {
      const o = e.nextClearBit(i);
      (this.allocations[n] = o), e.set(o, !0), (i = o + 1);
    }
    return this.setFlag(da.Resident), i;
  }
  get count() {
    return this.allocations.length;
  }
  setFlag(e) {
    this.flags |= e;
  }
  clearFlag(e) {
    this.flags &= ~e;
  }
  writeFlag(e, t) {
    t ? this.setFlag(e) : this.clearFlag(e);
  }
  getFlag(e) {
    return (this.flags & e) === e;
  }
  get is_resident() {
    return this.getFlag(da.Resident);
  }
}
function GS(s, e, t, r, i = 64) {
  const n = r / 3;
  for (let c = 0; c < n; c++) e[c] = c;
  let o = 0,
    a = 0;
  for (; o < n; ) {
    const c = n - o,
      _ = Math.min(c, i);
    (s[a * 2] = _), (s[a * 2 + 1] = o), a++, (o += _);
  }
  return a;
}
function VS(s, e) {
  const t = s.meshlet_bounds,
    r = s.primitive_metadata,
    i = s.primitive_data,
    n = r[e * 2],
    o = r[e * 2 + 1],
    a = s.geometry,
    c = a.getAttribute(Me.Position),
    _ = a.index.data,
    u = c.data;
  let d = Number.POSITIVE_INFINITY,
    h = Number.POSITIVE_INFINITY,
    p = Number.POSITIVE_INFINITY,
    v = Number.NEGATIVE_INFINITY,
    f = Number.NEGATIVE_INFINITY,
    m = Number.NEGATIVE_INFINITY;
  for (let E = 0; E < n; E++) {
    const A = i[o + E] * 3,
      T = A + 3;
    for (let z = A; z < T; z++) {
      const U = _[z] * 3,
        k = u[U],
        N = u[U + 1],
        M = u[U + 2];
      k < d && (d = k),
        N < h && (h = N),
        M < p && (p = M),
        k > v && (v = k),
        N > f && (f = N),
        M > m && (m = M);
    }
  }
  const g = e * 6;
  (t[g] = d),
    (t[g + 1] = h),
    (t[g + 2] = p),
    (t[g + 3] = v),
    (t[g + 4] = f),
    (t[g + 5] = m);
}
var c_, Js, l_;
const hm = class hm {
  constructor() {
    x(this, "geometry");
    x(this, "meshlet_bounds", new Float32Array(0));
    b(this, c_);
    b(this, Js);
    b(this, l_, 0);
  }
  get primitive_data() {
    return getProperty(this, c_);
  }
  get primitive_metadata() {
    return getProperty(this, Js);
  }
  static from(e) {
    const t = new hm();
    return (t.geometry = e), t;
  }
  build() {
    const e = this,
      t = e.geometry,
      r = t.getIndexCount(),
      i = new Uint32Array(r / 3),
      n = new Uint32Array(2 * Math.ceil((r * 5) / 3)),
      o = GS(n, i, t.index.data, r, j_);
    S(e, l_, o),
      (e.meshlet_bounds = new Float32Array(6 * o)),
      S(e, c_, i),
      S(e, Js, new Uint32Array(o * 2)),
      getProperty(e, Js).set(n.slice(0, o * 2));
    for (let a = 0; a < o; a++) VS(e, a);
  }
  get_primitive_offset(e) {
    return getProperty(this, Js)[e * 2 + 1];
  }
  get_primitive_count(e) {
    return getProperty(this, Js)[e * 2];
  }
  get count() {
    return getProperty(this, l_);
  }
  destroy() {}
};
(c_ = new WeakMap()), (Js = new WeakMap()), (l_ = new WeakMap());
let Bf = hm;
const Kh = Struct.from({ triangle_offset: "u32", triangle_count: "u32" }),
  $S = Uint32Array.BYTES_PER_ELEMENT * j_,
  ni = Eo($S),
  qS = 1.2,
  HS = 128,
  YS = 64;
var Zs, qr, tc, ns, Ks, Cr, Qs, oo, rc, os, It, rx, Of, ix, sx, nx, ox;
class jS {
  constructor(e) {
    b(this, It);
    b(this, Zs, new Map());
    b(this, qr, new Map());
    b(this, tc, new Qr());
    b(this, ns);
    b(this, Ks, null);
    b(this, Cr, null);
    b(this, Qs, null);
    b(this, oo);
    b(this, rc, new Ac());
    b(this, os, 0);
    S(this, ns, e), S(this, oo, new FS(e)), P(this, It, Of).call(this, YS);
  }
  get buffer_meshlet_data() {
    return getProperty(this, Cr);
  }
  get buffer_bounds() {
    return getProperty(this, Qs);
  }
  get lookup() {
    return getProperty(this, oo);
  }
  obtain(e) {
    let t = getProperty(this, Zs).get(e);
    return t === false && (t = P(this, It, rx).call(this, e)), t;
  }
  remove(e) {
    const t = getProperty(this, Zs).get(e);
    if (t === false) return !1;
    getProperty(this, tc).remove(t);
    const r = getProperty(this, qr).get(t);
    return (
      r.getFlag(da.Resident) && r.clear_allocation_mask(getProperty(this, rc)),
      getProperty(this, Zs).delete(e),
      getProperty(this, qr).delete(t),
      !0
    );
  }
  compact() {
    throw new Error("Not Implemented");
  }
  create_allocation(e, t = 0) {
    if (e.getFlag(da.Resident)) throw new Error("Already allocated");
    return e.create_allocation(getProperty(this, rc), t);
  }
  update() {
    const e = getProperty(this, tc),
      t = e.size();
    if (t === 0) return;
    let r = 0,
      i = 0;
    for (let h = 0; h < t; h++) {
      const p = e.getElementByIndex(h),
        v = getProperty(this, qr).get(p);
      if (!v.getFlag(da.Resident)) {
        const f = this.create_allocation(v, i);
        i < f && (i = f);
      }
      r += v.count;
    }
    i > 0 && P(this, It, sx).call(this, i);
    const n = getProperty(this, ns),
      o = n.createCommandEncoder(),
      a = Wh(n, r * Kh.size),
      c = Wh(n, r * Vi.size),
      _ = Wh(n, r * ni);
    let u = 0;
    for (let h = 0; h < t; h++) {
      const p = e.getElementByIndex(h),
        v = getProperty(this, qr).get(p);
      P(this, It, nx).call(this, v.meshlets, u, a.buffer, c.buffer, _.buffer),
        (u += v.count);
    }
    a.gpu.unmap(), c.gpu.unmap(), _.gpu.unmap();
    let d = 0;
    for (let h = 0; h < t; h++) {
      const p = e.getElementByIndex(h),
        v = getProperty(this, qr).get(p),
        f = v.count;
      for (let m = 0; m < f; m++) {
        const g = v.allocations[m];
        o.copyBufferToBuffer(_.gpu, d * ni, getProperty(this, Cr), g * ni, ni),
          o.copyBufferToBuffer(
            c.gpu,
            d * Vi.size,
            getProperty(this, Qs),
            g * Vi.size,
            Vi.size
          ),
          d++;
      }
    }
    n.queue.submit([o.finish()]),
      a.gpu.destroy(),
      _.gpu.destroy(),
      getProperty(this, oo).build(
        Array.from(getProperty(this, qr).values()),
        getProperty(this, os)
      ),
      e.clear();
  }
  destroy() {
    getProperty(this, Ks) !== null &&
      (getProperty(this, Ks).destroy(), S(this, Ks, null)),
      getProperty(this, Cr) !== null &&
        (getProperty(this, Cr).destroy(), S(this, Cr, null)),
      S(this, os, 0),
      getProperty(this, rc).reset(),
      getProperty(this, Zs).clear(),
      getProperty(this, qr).clear(),
      getProperty(this, oo).destroy();
  }
  async dump_gpu_meshlet_bounds() {
    return await Sf({
      buffer: getProperty(this, Qs),
      device: getProperty(this, ns),
      callback: (e) => T2(Vi, e),
    });
  }
  async dump_gpu_meshlets() {
    let e;
    await Sf({
      buffer: getProperty(this, Cr),
      device: getProperty(this, ns),
      callback: (n) => {
        e = new Uint32Array(new Uint32Array(n));
      },
    });
    const t = getProperty(this, Cr).size / ni,
      r = [],
      i = ni >>> 2;
    for (let n = 0; n < t; n++) r[n] = e.slice(n * i, (n + 1) * i);
    return r;
  }
}
(Zs = new WeakMap()),
  (qr = new WeakMap()),
  (tc = new WeakMap()),
  (ns = new WeakMap()),
  (Ks = new WeakMap()),
  (Cr = new WeakMap()),
  (Qs = new WeakMap()),
  (oo = new WeakMap()),
  (rc = new WeakMap()),
  (os = new WeakMap()),
  (It = new WeakSet()),
  (rx = function (e) {
    const t = Bf.from(e);
    t.build(), getProperty(this, Zs).set(e, t);
    const r = new DS(t.count);
    return (
      (r.meshlets = t),
      (r.slot_count = t.count),
      getProperty(this, qr).set(t, r),
      getProperty(this, tc).add(t),
      t
    );
  }),
  (Of = function (e) {
    const t = getProperty(this, ns),
      r = t.createBuffer(
        At.fromJSON({
          label: "GPUGeometryMeshletManager/metadata",
          size: Eo(e * Kh.size),
          usage:
            GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
        })
      ),
      i = t.createBuffer(
        At.fromJSON({
          label: "GPUGeometryMeshletManager/bounds",
          size: Eo(e * Vi.size),
          usage:
            GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
        })
      ),
      n = t.createBuffer(
        At.fromJSON({
          label: "GPUGeometryMeshletManager/triangles",
          size: Eo(e * ni),
          usage:
            GPUBufferUsage.STORAGE |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST,
        })
      ),
      o = getProperty(this, Ks),
      a = getProperty(this, Cr),
      c = getProperty(this, Qs);
    if (o !== null && a !== null && c !== null) {
      const _ = t.createCommandEncoder();
      _.copyBufferToBuffer(o, 0, r, 0, o.size),
        _.copyBufferToBuffer(c, 0, i, 0, c.size),
        _.copyBufferToBuffer(a, 0, n, 0, a.size);
      const u = _.finish();
      t.queue.submit([u]), o.destroy(), c.destroy(), a.destroy();
    }
    S(this, Ks, r), S(this, Cr, n), S(this, Qs, i), S(this, os, e);
  }),
  (ix = function (e) {
    const t = getProperty(this, ns).limits,
      r = Math.min(t.maxBufferSize, t.maxStorageBufferBindingSize),
      i = Math.floor(r / Math.max(ni));
    if (e > i)
      throw new Error(
        `Maximum meshlet capacity of the buffers is ${i} clusters, failed to allocate ${e} clusters`
      );
    let n = Math.max(
      e,
      Math.ceil(getProperty(this, os) * qS),
      getProperty(this, os) + HS
    );
    n > i && (n = i), P(this, It, Of).call(this, n);
  }),
  (sx = function (e) {
    getProperty(this, os) < e && P(this, It, ix).call(this, e);
  }),
  (nx = function (e, t, r, i, n) {
    (r.position = Kh.size * t),
      (i.position = Vi.size * t),
      (n.position = ni * t);
    const o = e.count;
    for (let a = 0; a < o; a++)
      P(this, It, ox).call(this, e, a, t + a, r, i, n);
  }),
  (ox = function (e, t, r, i, n, o) {
    const a = e.get_primitive_offset(t),
      c = e.get_primitive_count(t);
    i.writeUint32(a),
      i.writeUint32(c),
      n.writeFloat32Array(e.meshlet_bounds, t * 6, 6),
      (o.position = ni * r);
    const _ = c * Uint32Array.BYTES_PER_ELEMENT;
    Oo(
      e.primitive_data.buffer,
      a * Uint32Array.BYTES_PER_ELEMENT,
      o.data,
      o.position,
      _
    ),
      (o.position += _);
    for (let u = c; u < j_; u++) o.writeUint32(_r);
  });
const ax = Struct.from({
    slot_index: "u32",
    slot_resolution: "u32",
    atlas_resolution_in_slots: "vec3<u32>",
  }),
  Tu = [8, 8, 4],
  jt = 32,
  $o = w.from("const BVH_NULL_NODE = 4294967295u;"),
  XS = w.from(`
fn max3(a:f32, b:f32, c:f32) -> f32 {
    return max( max(a, b), c );
}
`),
  cx = w.from(
    `
fn aabb3_unsigned_distance_sqr_to_point(
    bounds: array<f32,6>,
    position: vec3<f32>,
) -> f32{
    let aabb_min = vec3(bounds[0], bounds[1], bounds[2]);
    let aabb_max = vec3(bounds[3], bounds[4], bounds[5]);

    let p0 = aabb_min - position;
    let p1 = position - aabb_max;
    
    let d = max(vec3(0), max(p0, p1));
    
    return dot(d,d);
}
`,
    [XS]
  ),
  nh = w.from(`
fn compute_triangle_face_normal(
    v0: vec3<f32>,
    v1: vec3<f32>,
    v2: vec3<f32>,
) -> vec3<f32> {

    let edge_0 = v2 - v1;
    let edge_1 = v0 - v1;

    return normalize(cross(edge_0, edge_1));
    
}
    `),
  Eu = Struct.from({ a: qt, b: qt, c: qt }),
  qo = w.from(
    `
fn geometry_read_triangle_vertices(
    geometry: ${Ut.wgsl_ref},
    triangle_id : u32,
) -> ${Eu.wgsl_ref} {
        let geometry_index_offset = geometry.index_address + triangle_id * 3u;
        let vertices_address = geometry.vertex_address;
        
        let vertex_a_id = geometry_indices[geometry_index_offset];
        let vertex_b_id = geometry_indices[geometry_index_offset + 1];
        let vertex_c_id = geometry_indices[geometry_index_offset + 2];
        
        let absolute_vertex_index_0 = vertices_address + vertex_a_id;
        let absolute_vertex_index_1 = vertices_address + vertex_b_id;
        let absolute_vertex_index_2 = vertices_address + vertex_c_id;
        
        let vertex_0 = geometry_vertices[absolute_vertex_index_0];
        let vertex_1 = geometry_vertices[absolute_vertex_index_1];
        let vertex_2 = geometry_vertices[absolute_vertex_index_2];
        
        return ${Eu.wgsl_ref}(
            vertex_0, 
            vertex_1, 
            vertex_2
        );
}
  `,
    [Ut.declaration_chunk, Eu.declaration_chunk]
  ),
  WS = w.from(`
fn triangle_closest_point_to_point_barycentric(
    p: vec3<f32>,
    a: vec3<f32>,
    b: vec3<f32>,
    c: vec3<f32>,
) -> vec2<f32>{
    // localize coordinates with respect to A
    let _vab = b - a;
    let _vac = c - a;
    let _vap = p - a;

    let d1 = dot(_vab, _vap);
    let d2 = dot(_vac, _vap);

    if (d1 <= 0 && d2 <= 0) {

        // vertex region of A; barycentric coords (1, 0, 0)
    
        return vec2(1,0);
        
    }
    
    let _vbp = p - b;

    let d3 = dot(_vab, _vbp);
    let d4 = dot(_vac, _vbp);

    if (d3 >= 0 && d4 <= d3) {

        // vertex region of B; barycentric coords (0, 1, 0)

        return vec2(0,1);

    }

    let vc = d1 * d4 - d3 * d2;
    
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {

        let s = d1 - d3;

        if (s != 0) {
            let v = d1 / s;
            return vec2(1 - v, v);
        } else {
            return vec2(1,0);
        }
        

    }

    let _vcp = p - c;

    let d5 = dot(_vab, _vcp);
    let d6 = dot(_vac, _vcp);

    if (d6 >= 0 && d5 <= d6) {

        // vertex region of C; barycentric coords (0, 0, 1)

        return vec2(0,0);

    }

    let vb = d5 * d2 - d1 * d6;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {

        let s = d2 - d6;

        if (s != 0) {
            let w = (d2 / s);
            return vec2(1.0 - w, 0);
        } else {
            // special case, avoid division by 0
            return vec2(1, 0);
        }

        // edge region of AC; barycentric coords (1-w, 0, w)

    }

    let va = d3 * d6 - d5 * d4;
    if (va <= 0 && (d4 - d3) >= 0 && (d5 - d6) >= 0) {

        let s = (d4 - d3) + (d5 - d6);

        if(s != 0) {
            let w = (d4 - d3) / s;
            return vec2(0.0, 1.0 - w);
        }else{
            return vec2(0,0);
        }
        

    }

    // face region
    let denom = 1 / (va + vb + vc);
    
    return vec2( va * denom, vb * denom);
}
`),
  fn = Struct.from({
    position: "vec3<f32>",
    normal: "vec3<f32>",
    primitive: "u32",
  }),
  lx = w.from(
    `
fn point_query_blas_nearest (
    position:vec3<f32>,
    max_distance: f32,
    geometry_index:u32,
    stack:ptr<function, array<u32,${jt}> >, 
    stack_top:u32
) -> ${fn.wgsl_ref}{
  
    let geometry = geometries[geometry_index];
    
    let blas_address = blas_lookup[geometry_index];
             
    var pointer = stack_top + 1;
    
    var node_index = 0u;
    
    var nearest_distance_sqr = max_distance * max_distance;
    
    var out: ${fn.wgsl_ref};
    out.primitive = ${_r}; // used to indicate a miss on output
    
    for(;pointer > stack_top && pointer <= ${jt};){
    
        let node = blas_data[ blas_address + node_index ];
        
        let child_1 = node.child_1;
        let child_2 = node.child_2;
        
        if(child_1 != BVH_NULL_NODE){
            // not a leaf node
            let child_1_bounds = blas_data[ blas_address + child_1 ].bounds;
            let distance_sqr_to_child1 = aabb3_unsigned_distance_sqr_to_point(child_1_bounds, position);
       
            let child_2_bounds = blas_data[ blas_address + child_2 ].bounds;
            let distance_sqr_to_child2 = aabb3_unsigned_distance_sqr_to_point(child_2_bounds, position);
       
            // sort children
            var sorted_children = vec2(child_1, child_2);
            var sorted_distances =  vec2(distance_sqr_to_child1, distance_sqr_to_child2);
            
            if (distance_sqr_to_child2 < distance_sqr_to_child1) {
                
                sorted_children = sorted_children.yx;
                sorted_distances = sorted_distances.yx;

            }
            
            if(sorted_distances.y < nearest_distance_sqr){
                // both children are within range
                
                node_index = sorted_children.x;
                
                stack[ pointer ] = sorted_children.y;
                
                pointer ++;
                
            }else if(sorted_distances.x < nearest_distance_sqr){
                
                node_index = sorted_children.x;
                
            }else{
            
                pointer --;
                node_index = stack[pointer];
                
            }
            
        }else{
            
            pointer --;
            node_index = stack[pointer];
            
            let triangle_index = child_2;
            let triangle = geometry_read_triangle_vertices(geometry, child_2);
            
            let a = f32_array_as_vec3(triangle.a.position);
            let b = f32_array_as_vec3(triangle.b.position);
            let c = f32_array_as_vec3(triangle.c.position);
                            
            let barycentric2 = triangle_closest_point_to_point_barycentric(position, a, b, c);
            
            let u = barycentric2.x;
            let v = barycentric2.y;
            let w = 1 - u - v;
            
            let contact = a*u + b*v + c*w;
            
            let distance_to_triangle = distance(position, contact);
            let distance_to_triangle_sqr = distance_to_triangle * distance_to_triangle;
            
            if (distance_to_triangle_sqr >= nearest_distance_sqr) {
                continue;
            }
            
            nearest_distance_sqr = distance_to_triangle_sqr;
            
            out.position = contact;
            out.normal = compute_triangle_face_normal(a,b,c);
            out.primitive = triangle_index;
            
        }
        
    }
    
    return out;
}
    `,
    [$o, fn.declaration_chunk, ri, qo, cx, WS, nh]
  ),
  _x = w.from(`
fn max4(a:f32, b:f32, c:f32, d:f32) -> f32 {
    return max( max(a, b), max(c, d) );
}
`),
  oh = w.from(
    `
fn aabb3_intersects_ray(
    bounds:array<f32, 6>,
    ray_origin:vec3<f32>,
    ray_direction_inverse:vec3<f32>,
    min_distance: f32,
    max_distance: f32,
) -> bool{
    let aabb_min = vec3(bounds[0], bounds[1], bounds[2]);
    let aabb_max = vec3(bounds[3], bounds[4], bounds[5]);

    // move aabb into ray space
    let t0 = (aabb_min - ray_origin) * ray_direction_inverse;
    let t1 = (aabb_max - ray_origin) * ray_direction_inverse;
    
    let tmin = min(t0, t1);
    let tmax = max(t0, t1);
    
    return max4(min_distance, tmin.x, tmin.y, tmin.z) <=
         min4(max_distance, tmax.x, tmax.y, tmax.z);

}`,
    [_x, bp]
  ),
  ux = w.from(
    `
fn ray_triangle_compute_intersection_barycentric(
        out: ptr< function, vec3<f32>>,
        ray:${ve.wgsl_ref}, 
        a:vec3<f32>, b:vec3<f32>, c:vec3<f32>
) -> bool {
    let edge_1 = b - a;
    let edge_2 = c - a;

    let pvec = cross(ray.direction, edge_2);
    
    let det = dot(edge_1, pvec);
    
    if(det < 0){
        // facing away from us
        return false;
    }
    
    if( abs(det) < EPSILON ){
        // parallel to the triangle plane
        return false;
    }
    
    let inv_det = 1.0 / det;
    
    let tvec = ray.origin - a;
    
    let u = dot(tvec, pvec) * inv_det;
    
    if(u < 0.0 || u > 1.0){
        // outside
        return false;
    }
    
    let qvec = cross(tvec, edge_1);
    
    let v = dot(ray.direction, qvec) * inv_det;
    
    if(v < 0.0 || u + v > 1.0){
        // outside
        return false;
    }
    
    // calculate t, scale parameter, ray intersects triangle
    let t = dot(edge_2, qvec) * inv_det;
    
    if(t <= ray.tmin + EPSILON ){
        // behind the ray
        return false;
    }
    
    *out = vec3(u, v, t);
    
    return t < ray.tmax;
}
  `,
    [Av, ve.declaration_chunk]
  ),
  ha = Struct.from({
    barycentrics: "vec2<f32>",
    triangle: "u32",
    geometry: "u32",
    instance: "u32",
    t: "f32",
  }),
  dx = w.from(
    `
fn ray_query_blas_nearest(
    ray: ${ve.wgsl_ref},
    geometry_index: u32,
    stack:ptr<function, array< u32, ${jt}> >,
    stack_top: u32
) -> ${ha.wgsl_ref} {

    let geometry = geometries[geometry_index];
    
    let blas_address = blas_lookup[geometry_index];
             
    var pointer = stack_top + 1;
        
    let direction_rcp = 1.0 / ray.direction;
        
    var best_hit: ${ha.wgsl_ref};
    best_hit.t = -1.0;
    
    var _ray = ray;
    
    var node_index = 0u;
    
    for(;pointer > stack_top && pointer <= ${jt};){
        
        let node = blas_data[ blas_address + node_index ];
            
        if(!aabb3_intersects_ray( node.bounds, _ray.origin, direction_rcp, _ray.tmin, _ray.tmax)){
            
            pointer --;
            node_index = stack[pointer];
            
            continue;
        
        }
        
        let child_1 = node.child_1;
        let child_2 = node.child_2;
        
        if(child_1 != BVH_NULL_NODE){
            // not a leaf node
            
            node_index = child_1;
            
            stack[ pointer ] = child_2;
            
            pointer ++;
            
        }else{
            pointer --;
            node_index = stack[pointer];
            
            let triangle_id = child_2;
            
            let triangle = geometry_read_triangle_vertices(geometry, triangle_id);
            
            let a = f32_array_as_vec3(triangle.a.position);
            let b = f32_array_as_vec3(triangle.b.position);
            let c = f32_array_as_vec3(triangle.c.position);
            
            var triangle_hit:vec3<f32>;
            
            if(!ray_triangle_compute_intersection_barycentric(&triangle_hit, _ray, a, b, c)){
                // miss
                continue;
            }
                        
            _ray.tmax = triangle_hit.z;
            
            best_hit.t = triangle_hit.z;
            best_hit.barycentrics = triangle_hit.xy;
            best_hit.triangle = triangle_id;
        }
    }
    
    return best_hit;

}
  `,
    [ve.declaration_chunk, ha.declaration_chunk, $o, ri, oh, ux, qo]
  ),
  ah = w.from(
    `
fn sphere_fibonacci_point( i:f32, n:f32 ) -> vec3<f32>{
    const PHI = sqrt(5) * 0.5 + 0.5;

    let ab = i * (PHI - 1.0);
    let mad_f =  ab - fract(ab);

    let phi = 2 * PI * mad_f;

    let cosTheta = 1.0 - (2.0 * i + 1.0) * (1.0 / n);

    let sinTheta = sqrt(saturate(1.0 - cosTheta * cosTheta));

    return vec3(
        cos(phi) * sinTheta,
        sin(phi) * sinTheta,
        cosTheta
    );
}
`,
    [Jt]
  ),
  JS = w.from(
    `
fn get_volume_sign(position:vec3<f32>, geometry_index: u32)->f32{

    const POINT_COUNT = 17;
    const BACKFACE_THRESHOLD = 0.6;
    
    const BACKFACE_THRESHOLD_COUNT = i32(floor(f32(POINT_COUNT)*BACKFACE_THRESHOLD));
    
    var ray: ${ve.wgsl_ref};
    ray.origin = position;
    ray.tmax = F32_MAX;
    
    var stack = array< u32, ${jt}>();
    var direction_balance = 0;
    
    let geometry = geometries[geometry_index];
    
    for(var i=0; i<POINT_COUNT; i++){
       
        let direction = sphere_fibonacci_point(f32(i), POINT_COUNT);
        
        ray.direction = direction;
        
        let hit = ray_query_blas_nearest(ray, geometry_index, &stack, 0);
    
        if(hit.t < 0){
            // miss
            continue;
        }
        
        // construct normal
        let triangle = geometry_read_triangle_vertices(geometry, hit.triangle);
        
        let a = f32_array_as_vec3(triangle.a.position);
        let b = f32_array_as_vec3(triangle.b.position);
        let c = f32_array_as_vec3(triangle.c.position);
        
        let normal = compute_triangle_face_normal(a,b,c);
        
        
        if(dot(normal, ray.direction) > 0.0){
            // back-facing
            direction_balance++;
        }
        
    }
    
    if(direction_balance > BACKFACE_THRESHOLD_COUNT ){
        return -1;
    }else{
        return 1;
    }

}
    `,
    [ti, ve.declaration_chunk, ah, dx, qo, ri, nh]
  ),
  ZS = w.from(`
fn sdf_slot_index_to_texture_offset(slot_index:u32, texture_slot_resolution:vec3<u32>) -> vec3<u32>{

    let slice_size = texture_slot_resolution.x * texture_slot_resolution.y;
    
    let slot_offset_z = slot_index / slice_size;
    
    let index_in_slice = slot_index - slot_offset_z*slice_size;
    
    let slot_offset_y = index_in_slice / texture_slot_resolution.x;
    let slot_offset_x = slot_index % texture_slot_resolution.x;
    
    return vec3(slot_offset_x, slot_offset_y, slot_offset_z);
}
    `),
  ch = new ResourecGroup();
ch.createGroup().addUniform("settings", ax);
ch.createGroup()
  .addStorageBuffer("blas_lookup", X.u32)
  .addStorageBuffer("blas_data", X.from(Mi))
  .addStorageBuffer("geometries", X.from(Ut))
  .addStorageBuffer("geometry_indices", X.u32)
  .addStorageBuffer("geometry_vertices", X.from(qt));
ch.createGroup().addStorageTexture("output_texture", "r32float", "3d");
const KS = w.from(
    `

@compute @workgroup_size(${Tu.join(",")})
fn main(
    @builtin(global_invocation_id) global_id : vec3<u32>,
){
    let slot_resolution = settings.slot_resolution;
    
    if(any(global_id >= vec3(slot_resolution))){
        // outside of the slot
        return;
    }
    
    let slot_index = settings.slot_index;
    
    let slice_size = slot_resolution * slot_resolution;
    
    let slot_offset_z = slot_index / slice_size;
    
    let index_in_slice = slot_index - slot_offset_z*slice_size;
    
    let slot_offset_y = index_in_slice / slot_resolution;
    let slot_offset_x = slot_index % slot_resolution;
    
    let texel_offset = sdf_slot_index_to_texture_offset(slot_index, settings.atlas_resolution_in_slots) * slot_resolution;
    
    let texel_coordinate = texel_offset + global_id;
    
    let slot_resolution_v3f32 = vec3(f32(slot_resolution));
    
    let local_uv = (vec3<f32>(global_id) + 0.5) / slot_resolution_v3f32;
    
    // get AABB from geometry's BVH
    let blas_address = blas_lookup[slot_index];
    
    let bounds = array_to_aabb3(blas_data[blas_address].bounds);
    let tight_bounds_span = (bounds.max - bounds.min);
    
    // figure out extents of a single sdf texel
    let texel_size = tight_bounds_span / (slot_resolution_v3f32);
    
    // expand bounds by 1 texel to prevent clipping
    let expanded_bounds = ${xe.wgsl_ref}(
        bounds.min - texel_size*0.5,
        bounds.max + texel_size*0.5
    );
    
    let extended_bounds_span = (expanded_bounds.max - expanded_bounds.min);
    
    let sample_point = expanded_bounds.min + extended_bounds_span * local_uv;
    
    var traversal_stack:array<u32, ${jt}>;
    
    let nearest = point_query_blas_nearest(
        sample_point,
        F32_MAX,
        settings.slot_index,
        &traversal_stack,
        0u
    );
    
    let to_hit = (sample_point - nearest.position);
    
    let sign = get_volume_sign(sample_point, slot_index);
            
    // note that distances are normalized to UV space, so no value will be greater than +/- sqrt(2)
    let distance = sign * length(to_hit);
    
    textureStore(
        output_texture,
        texel_coordinate,            
        vec4(distance,0,0,0)
    );
}
`,
    [xe.declaration_chunk, ZS, ti, q_, lx, vv, JS]
  ),
  QS = le.from({ label: "Geometry SDF/ build", resources: ch, body: KS }),
  ez = new Yt(QS),
  tz = 16;
var en, wi, as, cs;
class rz {
  constructor(e) {
    b(this, en);
    b(this, wi);
    b(this, as, 50);
    b(this, cs, [0, 0, 0]);
    S(this, en, e), S(this, wi, new Ht(e));
    const t = getProperty(this, wi).descriptor;
    (t.format = "r32float"),
      (t.dimension = "3d"),
      (t.usage |= GPUTextureUsage.STORAGE_BINDING),
      (t.usage |= GPUTextureUsage.COPY_SRC),
      (t.mipLevelCount = 1),
      this.allocate(tz),
      (globalThis.sdf = this);
  }
  get texture() {
    return getProperty(this, wi);
  }
  get tile_resolution() {
    return getProperty(this, as);
  }
  get atlas_resolution_in_tiles() {
    return getProperty(this, cs);
  }
  computeMaxSlotsPerDimension() {
    const e = getProperty(this, en).limits.maxTextureDimension3D;
    return Math.floor(e / getProperty(this, as));
  }
  computeMaxCapacity() {
    const e = this.computeMaxSlotsPerDimension();
    return e * e * e;
  }
  ensureCapacity(e) {
    const t = this.capacity;
    if (e > t) return;
    const r = Math.max(t + 16, Math.floor(t * 1.2), e);
    this.allocate(r);
  }
  get capacity() {
    return (
      getProperty(this, cs)[0] *
      getProperty(this, cs)[1] *
      getProperty(this, cs)[2]
    );
  }
  allocate(e) {
    const t = this.computeMaxCapacity();
    if (e > t) throw new Error(`Over capacity limit ${e} > ${t}`);
    const r = this.computeMaxSlotsPerDimension(),
      i = getProperty(this, as),
      n = Math.min(r, e),
      o = Math.min(r, Math.ceil(e / r)),
      a = Math.ceil(e / (r * r));
    S(this, cs, [n, o, a]),
      getProperty(this, wi).resize(n * i, o * i, a * i, !0);
  }
  destroy() {
    getProperty(this, wi).destroy();
  }
  build_slots(e, t, r) {
    if (t.length <= 0) return;
    const i = getProperty(this, as);
    for (let n = 0; n < t.length; n++) {
      const o = t[n],
        a = e.allocateTransientValueBuffer(
          ax,
          {
            slot_index: o,
            slot_resolution: i,
            atlas_resolution_in_slots: getProperty(this, cs),
          },
          GPUBufferUsage.UNIFORM
        ),
        c = Math.ceil(i / Tu[0]),
        _ = Math.ceil(i / Tu[1]),
        u = Math.ceil(i / Tu[2]);
      ez.dispatch({
        encoder: e,
        bindings: {
          settings: a,
          blas_lookup: r.blas.buffer_metadata,
          blas_data: r.blas.buffer_data,
          geometries: r.buffer_metadata,
          geometry_indices: r.buffer_indices,
          geometry_vertices: r.buffer_vertices,
          output_texture: getProperty(this, wi).obtainView(),
        },
        group_size_x: c,
        group_size_y: _,
        group_size_z: u,
      });
    }
  }
  index_to_slot(e) {
    const t = getProperty(this, as),
      r = t * t,
      i = e % t,
      n = Math.floor(e / r),
      o = Math.floor((e - n * r) / t);
    return [i, o, n];
  }
  async download_slot(e) {
    const t = getProperty(this, en).createCommandEncoder(),
      r = getProperty(this, as),
      i = getProperty(this, en).createBuffer({
        usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
        size: r * r * r * Uint32Array.BYTES_PER_ELEMENT,
      }),
      n = this.index_to_slot(e);
    t.copyTextureToBuffer(
      {
        texture: getProperty(this, wi).gpu_texture,
        mipLevel: 0,
        origin: [n[0] * r, n[1] * r, n[2] * r],
      },
      {
        buffer: i,
        offset: 0,
        bytesPerRow: r * Uint32Array.BYTES_PER_ELEMENT,
        rowsPerImage: r,
      },
      [r, r, r]
    );
    const o = t.finish();
    getProperty(this, en).queue.submit([o]), await i.mapAsync(GPUMapMode.READ);
    const a = new Float32Array(i.getMappedRange()).slice();
    return i.destroy(), a;
  }
}
(en = new WeakMap()),
  (wi = new WeakMap()),
  (as = new WeakMap()),
  (cs = new WeakMap());
const Qh = qt.size,
  iz = Ut.size;
var __, Ti, ao, co, lo, Rr, hx, Ff, fx, nz, px;
class sz {
  constructor(e) {
    b(this, Rr);
    b(this, __);
    x(this, "buffer_vertices", null);
    x(this, "buffer_indices", null);
    x(this, "buffer_metadata", null);
    b(this, Ti, new Map());
    x(this, "__last_geometry_index", 0);
    x(this, "__vertex_end_address", 0);
    x(this, "__index_end_address", 0);
    x(this, "__needs_update", !0);
    b(this, ao);
    b(this, co);
    b(this, lo);
    S(this, __, e),
      S(this, ao, new jS(e)),
      S(this, co, new BS(e)),
      S(this, lo, new rz(e)),
      (this.buffer_vertices = e.createBuffer(
        At.fromJSON({
          label: "GPUGeometryContext/vertices",
          size: 0,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        })
      )),
      (this.buffer_indices = e.createBuffer(
        At.fromJSON({
          label: "GPUGeometryContext/indices",
          size: 0,
          usage: GPUBufferUsage.STORAGE,
        })
      )),
      (this.buffer_metadata = e.createBuffer(
        At.fromJSON({
          label: "GPUGeometryContext/metadata",
          size: 0,
          usage: GPUBufferUsage.STORAGE,
        })
      ));
  }
  get meshlet() {
    return getProperty(this, ao);
  }
  get blas() {
    return getProperty(this, co);
  }
  get sdf() {
    return getProperty(this, lo);
  }
  has(e) {
    return getProperty(this, Ti).has(e);
  }
  add(e) {
    if (this.has(e)) return !1;
    if (e.is_resident) throw new Error("Geometry is already resident");
    e.ensureIndex(),
      e.update(),
      (e.is_resident = !0),
      (e.context_index_offset = Eo(this.__index_end_address)),
      (e.context_vertex_offset = Eo(this.__vertex_end_address)),
      (this.__index_end_address = e.context_index_offset + e.getIndexCount()),
      (this.__vertex_end_address =
        e.context_vertex_offset + e.getVertexCount());
    const t = this.__last_geometry_index++;
    e.context_index = t;
    const r = new OS();
    return (
      (r.geometry = e),
      (r.index = t),
      getProperty(this, Ti).set(e, r),
      (this.__needs_update = !0),
      !0
    );
  }
  remove(e) {
    return getProperty(this, Ti).get(e) === false
      ? !1
      : (getProperty(this, Ti).delete(e), (e.is_resident = !1), !0);
  }
  write_geometry_index(e, t) {
    this.buffer_indices;
    const r = Uint32Array.BYTES_PER_ELEMENT,
      i = e.context_index_offset,
      n = e.getIndexCount();
    new Uint32Array(t, i * r, n).set(e.index.data);
  }
  write_geometry_vertices(e, t) {
    const r = e.getVertexCount(),
      i = e.getAttribute(Me.Position),
      n = new Float32Array(t),
      o = Qh >> 2,
      a = (e.context_vertex_offset * Qh) >> 2;
    i !== false && P(this, Rr, Ff).call(this, n, a, o, r, i.data),
      e.hasAttribute(Me.Normal) || e.computeNormals();
    const c = e.getAttribute(Me.Normal);
    c !== false && P(this, Rr, Ff).call(this, n, a + 3, o, r, c.data),
      e.hasAttribute(Me.Tangent) || e.computeTangents();
    const _ = e.getAttribute(Me.Tangent);
    _ !== false && P(this, Rr, fx).call(this, n, a + 6, o, r, _.data);
    const u = e.getAttribute(Me.UV);
    u !== false && P(this, Rr, hx).call(this, n, a + 10, o, r, u.data);
  }
  destroy() {
    this.buffer_vertices !== null && this.buffer_vertices.destroy(),
      this.buffer_indices !== null && this.buffer_indices.destroy(),
      this.buffer_metadata !== null && this.buffer_metadata.destroy(),
      getProperty(this, lo).destroy(),
      (this.__needs_update = !0);
  }
  update(e) {
    this.__needs_update &&
      (this.build(),
      getProperty(this, ao).update(),
      getProperty(this, co).update(e),
      (this.__needs_update = !1));
  }
  build() {
    this.buffer_vertices.destroy(),
      this.buffer_indices.destroy(),
      this.buffer_metadata.destroy();
    const e = getProperty(this, __),
      t = getProperty(this, Ti),
      r = Array.from(t.keys());
    r.sort((c, _) => c.context_index - _.context_index);
    const i = r.length;
    for (let c = 0; c < i; c++) {
      const _ = r[c];
      getProperty(this, ao).obtain(_);
    }
    for (let c = 0; c < i; c++) {
      const _ = r[c];
      getProperty(this, co).obtain(_);
    }
    (this.buffer_vertices = e.createBuffer(
      At.fromJSON({
        label: this.buffer_vertices.label,
        size: Math.max(1, this.__vertex_end_address) * Qh,
        usage: this.buffer_vertices.usage,
        mappedAtCreation: !0,
      })
    )),
      (this.buffer_indices = e.createBuffer(
        At.fromJSON({
          label: this.buffer_indices.label,
          size:
            Math.max(1, this.__index_end_address) *
            Uint32Array.BYTES_PER_ELEMENT,
          usage: this.buffer_indices.usage,
          mappedAtCreation: !0,
        })
      )),
      (this.buffer_metadata = e.createBuffer(
        At.fromJSON({
          label: this.buffer_metadata.label,
          size: Math.max(1, this.__last_geometry_index) * iz,
          usage: this.buffer_metadata.usage,
          mappedAtCreation: !0,
        })
      ));
    const n = new DataView(this.buffer_metadata.getMappedRange()),
      o = this.buffer_indices.getMappedRange(),
      a = this.buffer_vertices.getMappedRange();
    for (let c = 0; c < i; c++) {
      const _ = r[c];
      P(this, Rr, px).call(this, _, n);
    }
    for (let c = 0; c < i; c++) {
      const _ = r[c];
      this.write_geometry_index(_, o);
    }
    for (let c = 0; c < i; c++) {
      const _ = r[c];
      this.write_geometry_vertices(_, a);
    }
    this.buffer_indices.unmap(),
      this.buffer_vertices.unmap(),
      this.buffer_metadata.unmap();
  }
}
(__ = new WeakMap()),
  (Ti = new WeakMap()),
  (ao = new WeakMap()),
  (co = new WeakMap()),
  (lo = new WeakMap()),
  (Rr = new WeakSet()),
  (hx = function (e, t, r, i, n) {
    for (let o = 0; o < i; o++) {
      const a = o << 1,
        c = t + o * r;
      (e[c] = n[a]), (e[c + 1] = n[a + 1]);
    }
  }),
  (Ff = function (e, t, r, i, n) {
    for (let o = 0; o < i; o++) {
      const a = (o << 1) + o,
        c = t + o * r;
      (e[c] = n[a]), (e[c + 1] = n[a + 1]), (e[c + 2] = n[a + 2]);
    }
  }),
  (fx = function (e, t, r, i, n) {
    for (let o = 0; o < i; o++) {
      const a = o << 2,
        c = t + o * r;
      (e[c] = n[a]),
        (e[c + 1] = n[a + 1]),
        (e[c + 2] = n[a + 2]),
        (e[c + 3] = n[a + 3]);
    }
  }),
  (nz = function (e) {
    const t = getProperty(this, Ti).keys(),
      r = [];
    for (const i of t) {
      const n = getProperty(this, Ti).get(i);
      r.push(n.index);
    }
    getProperty(this, lo).build_slots(e, r, this);
  }),
  (px = function (e, t) {
    const i = e.context_index * Ut.size;
    e.ensureBounds(),
      Fo(
        {
          index_address: e.context_index_offset,
          vertex_address: e.context_vertex_offset,
          index_count: e.getIndexCount(),
          bounding_sphere: e.bounding_sphere,
          bounding_box: e.bounding_box,
        },
        Ut,
        t.buffer,
        i
      );
  });
var ic, u_, d_, Df;
class oz {
  constructor(e) {
    b(this, d_);
    b(this, ic, []);
    b(this, u_);
    S(this, u_, e);
  }
  get(e, t) {
    const r = P(this, d_, Df).call(this, e);
    let i;
    const n = getProperty(this, ic);
    if (r >= 0 && r < n.length) {
      const o = n[r];
      o.usage === e.usage && o.size === e.size && (i = o),
        i !== false && n.splice(r, 1);
    }
    return (
      i !== false
        ? e.ensure_cleared[1] > 0 &&
          t.clearBuffer(i, e.ensure_cleared[0], e.ensure_cleared[1])
        : (i = getProperty(this, u_).createBuffer({
            size: e.size,
            usage: e.usage,
          })),
      i
    );
  }
  release(e) {
    const t = P(this, d_, Df).call(this, e);
    getProperty(this, ic).splice(t, 0, e);
  }
}
(ic = new WeakMap()),
  (u_ = new WeakMap()),
  (d_ = new WeakSet()),
  (Df = function (e) {
    function t(r, i) {
      const n = r.usage - i.usage;
      if (n !== 0) return n;
      const o = r.size - i.size;
      return o !== 0 ? o : 0;
    }
    return Bp(getProperty(this, ic), e, t);
  });
var h_, f_, Gf;
class az {
  constructor(e) {
    b(this, f_);
    b(this, h_);
    x(this, "texture_cache", []);
    S(this, h_, e);
  }
  get(e) {
    const t = P(this, f_, Gf).call(this, e);
    let r;
    if (t >= 0 && t < this.texture_cache.length) {
      const i = this.texture_cache[t],
        n = i.descriptor;
      e.dimension === n.dimension &&
        e.usage === n.usage &&
        e.format === n.format &&
        e.mipLevelCount === n.mipLevelCount &&
        hr(e.resolution, n.size) &&
        (r = i),
        r !== false && this.texture_cache.splice(t, 1);
    }
    return (
      r === false &&
        ((r = new Ht(getProperty(this, h_))),
        (r.descriptor.usage = e.usage),
        (r.descriptor.size = Array.from(e.resolution)),
        (r.descriptor.dimension = e.dimension),
        (r.descriptor.format = e.format),
        (r.descriptor.mipLevelCount = e.mipLevelCount)),
      r
    );
  }
  release(e) {
    const t = P(this, f_, Gf).call(this, oe.fromTexture(e.gpu_texture));
    this.texture_cache.splice(t, 0, e);
  }
}
(h_ = new WeakMap()),
  (f_ = new WeakSet()),
  (Gf = function (e) {
    return Bp(this.texture_cache, e, (t, r) => {
      const i = r.descriptor,
        n = t.dimension.localeCompare(i.dimension);
      if (n !== 0) return n;
      const o = t.format.localeCompare(i.format);
      if (o !== 0) return o;
      const a = t.usage - i.usage;
      if (a !== 0) return a;
      for (let c = 0; c < 3; c++) {
        const _ = t.resolution[c] - i.size[c];
        if (_ !== 0) return _;
      }
      return 0;
    });
  });
class Pc extends wn {
  constructor() {
    super(...arguments);
    x(this, "addressModeU", "clamp-to-edge");
    x(this, "addressModeV", "clamp-to-edge");
    x(this, "addressModeW", "clamp-to-edge");
    x(this, "magFilter", "nearest");
    x(this, "minFilter", "nearest");
    x(this, "mipmapFilter", "nearest");
    x(this, "lodMinClamp", 0);
    x(this, "lodMaxClamp", 32);
    x(this, "maxAnisotropy", 1);
    x(this, "compare");
  }
  fromJSON({
    addressModeU: t = "clamp-to-edge",
    addressModeV: r = "clamp-to-edge",
    addressModeW: i = "clamp-to-edge",
    magFilter: n = "nearest",
    minFilter: o = "nearest",
    mipmapFilter: a = "nearest",
    lodMinClamp: c = 0,
    lodMaxClamp: _ = 32,
    maxAnisotropy: u = 1,
    compare: d,
    label: h,
  }) {
    super.fromJSON({ label: h }),
      (this.addressModeU = t),
      (this.addressModeV = r),
      (this.addressModeW = i),
      (this.magFilter = n),
      (this.minFilter = o),
      (this.mipmapFilter = a),
      (this.lodMinClamp = c),
      (this.lodMaxClamp = _),
      (this.maxAnisotropy = u),
      (this.compare = d);
  }
  static from(t) {
    const r = new Pc();
    return r.fromJSON(t), r;
  }
  equals(t) {
    return super.equals(t)
      ? this.addressModeU === t.addressModeU &&
          this.addressModeV === t.addressModeV &&
          this.addressModeW === t.addressModeW &&
          this.magFilter === t.magFilter &&
          this.minFilter === t.minFilter &&
          this.mipmapFilter === t.mipmapFilter &&
          this.lodMinClamp === t.lodMinClamp &&
          this.lodMaxClamp === t.lodMaxClamp &&
          this.maxAnisotropy === t.maxAnisotropy &&
          this.compare === t.compare
      : !1;
  }
  hash() {
    return 0;
  }
}
Pc.prototype.isSamplerDescriptor = !0;
const mx = Bd(me.black),
  gx = Bd(me.fromRGB(0.5, 0.5, 1)),
  Op = Bd(me.white);
function cz(s) {
  return s !== false;
}
const lz = Object.freeze([
  { format: "rgba8unorm" },
  { format: "rgba16uint" },
  { format: "rgba8unorm" },
  { format: "rgba16float" },
]);
function Kg(s) {
  switch (s) {
    case Nr.Repeat:
      return "repeat";
    case Nr.ClampToEdge:
      return "clamp-to-edge";
    case Nr.MirroredRepeat:
      return "mirror-repeat";
    default:
      throw new Error(`Unsupported wrapping type '${s}'`);
  }
}
function Qg(s) {
  switch (s) {
    case ft.Linear:
    case ft.LinearMipmapLinear:
    case ft.NearestMipmapLinear:
      return "linear";
    case ft.Nearest:
    case ft.LinearMipmapNearest:
    case ft.NearestMipmapNearest:
      return "nearest";
    default:
      throw new Error(`Unsupported filtering type '${s}'`);
  }
}
function _z(s) {
  let e = "nearest";
  (s.minFilter | s.magFilter) & 2 && (e = "linear");
  const t = Qg(s.magFilter),
    r = Qg(s.magFilter),
    i = r === "linear" && t === "linear" && e === "linear";
  return Pc.from({
    addressModeU: Kg(s.wrapS),
    addressModeV: Kg(s.wrapT),
    magFilter: t,
    minFilter: r,
    mipmapFilter: e,
    maxAnisotropy: i ? 8 : 1,
  });
}
const al = Struct.from(
    {
      id: "u32",
      albedo_color: "vec4<f32>",
      metallic_factor: "f32",
      roughness_factor: "f32",
      emissive_factor: "vec3<f32>",
    },
    "MaterialMetadata"
  ),
  Uo = Struct.from(
    { lambda: "vec3<f32>", ddx: "vec3<f32>", ddy: "vec3<f32>" },
    "Barycentric"
  ),
  uz = w.from(
    `
fn barycentric_full(pt0: vec4<f32>, pt1: vec4<f32>, pt2: vec4<f32>, pixel: vec2<f32>) -> ${Uo.wgsl_ref} {
    let invW:vec3<f32> = 1.0 / vec3<f32>(pt0.w, pt1.w, pt2.w);

    let ndc0:vec2<f32> = pt0.xy * invW.x;
    let ndc1:vec2<f32> = pt1.xy * invW.y;
    let ndc2:vec2<f32> = pt2.xy * invW.z;

    let det_multiplier:vec3<f32> = invW / (determinant(mat2x2(ndc2 - ndc1, ndc0 - ndc1)));

    let m_ddx = vec3<f32>(ndc1.y - ndc2.y, ndc2.y - ndc0.y, ndc0.y - ndc1.y) * det_multiplier;
    let m_ddy = vec3<f32>(ndc2.x - ndc1.x, ndc0.x - ndc2.x, ndc1.x - ndc0.x) * det_multiplier;

    let ddxSum:f32 = dot(m_ddx, vec3<f32>(1,1,1));
    let ddySum:f32 = dot(m_ddy, vec3<f32>(1,1,1));

    let deltaVec:vec2<f32> = pixel - ndc0;

    let interpInvW:f32 = invW.x + deltaVec.x*ddxSum + deltaVec.y * ddySum;
    let interpW:f32 = 1.0 / interpInvW;

    let m_lambda = vec3<f32>(
        interpW * (invW.x  + deltaVec.x * m_ddx.x + deltaVec.y * m_ddy.x),
        interpW * (0.0f    + deltaVec.x * m_ddx.y + deltaVec.y * m_ddy.y),
        interpW * (0.0f    + deltaVec.x * m_ddx.z + deltaVec.y * m_ddy.z)
    );

    let interpW_ddx:f32 = 1.0f / (interpInvW + ddxSum);
    let interpW_ddy:f32 = 1.0f / (interpInvW + ddySum);

    let liw = m_lambda * interpInvW;

    return ${Uo.wgsl_ref}(
        m_lambda,
        interpW_ddx * (liw + m_ddx) - m_lambda,
        interpW_ddy * (liw + m_ddy) - m_lambda
    );
}
`,
    [Uo.declaration_chunk]
  ),
  Io = Struct.from(
    { uv: "vec2<f32>", ddx: "vec2<f32>", ddy: "vec2<f32>" },
    "GradSamplingInfo"
  ),
  dz = w.from(
    `
fn interpolate_with_derivatives(
    deriv: ${Uo.wgsl_ref},
    v0:f32,
    v1:f32,
    v2:f32
) -> vec3<f32>{

        let mergedV = vec3<f32>(v0, v1, v2);
        
        return vec3<f32>(
                dot(mergedV, deriv.lambda),
                dot(mergedV, deriv.ddx),
                dot(mergedV, deriv.ddy)
        );
        
}`,
    [Uo.declaration_chunk]
  ),
  hz = w.from(
    `
fn barycentric_interpolate_uv(
    bary: ${Uo.wgsl_ref},
    uv0: vec2<f32>,
    uv1: vec2<f32>,
    uv2: vec2<f32> 
) -> ${Io.wgsl_ref}{

    let m_0 = interpolate_with_derivatives(bary, uv0.x, uv1.x, uv2.x);
    let m_1 = interpolate_with_derivatives(bary, uv0.y, uv1.y, uv2.y);

    return ${Io.wgsl_ref} (
        vec2<f32>(m_0.x, m_1.x),
        vec2<f32>(m_0.y, m_1.y),
        vec2<f32>(m_0.z, m_1.z),
    );
}
`,
    [Io.declaration_chunk, Uo.declaration_chunk, dz]
  ),
  fz = w.from(`
fn mat3_inverse(a:mat3x3<f32>) -> mat3x3<f32>{

    let a00 = a[0][0];
    let a01 = a[0][1];
    let a02 = a[0][2];

    let a10 = a[1][0];
    let a11 = a[1][1];
    let a12 = a[1][2];

    let a20 = a[2][0];
    let a21 = a[2][1];
    let a22 = a[2][2];

    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;

    // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;

    det = 1.0 / det;

    var out : mat3x3<f32>;

    out[0][0] = b01 * det;
    out[0][1] = (-a22 * a01 + a02 * a21) * det;
    out[0][2] = (a12 * a01 - a02 * a11) * det;
    
    out[1][0] = b11 * det;
    out[1][1] = (a22 * a00 - a02 * a20) * det;
    out[1][2] = (-a12 * a00 + a02 * a10) * det;
    
    out[2][0] = b21 * det;
    out[2][1] = (-a21 * a00 + a01 * a20) * det;
    out[2][2] = (a11 * a00 - a01 * a10) * det;
    
    return out;
}`),
  vx = w.from(
    `
fn compute_normal_matrix_from_m4(source:mat4x4<f32>) -> mat3x3<f32>{
    var m3:mat3x3<f32>  = mat3x3<f32> (
        source[0].xyz,
        source[1].xyz,
        source[2].xyz,
    );
    
    m3 = mat3_inverse(m3);

    m3 = transpose(m3);

    return m3;
}
`,
    [fz]
  ),
  xx = w.from(`fn f32_array_as_vec2(a : array<f32,2>) -> vec2<f32>{
    return vec2<f32>(
        a[0], a[1]
    );
}`),
  pz = w.from(
    `
fn textureSampleBarycentric(
        m_texture:texture_2d<f32>,
        m_sampler:sampler,  
        info:${Io.wgsl_ref} 
) -> vec4<f32> {

     return textureSampleGrad(
        m_texture,
        m_sampler,
        info.uv,
        info.ddx ,
        info.ddy ,
     );

}`,
    [Io.declaration_chunk]
  ),
  mz = w.from(`
fn anti_alias_roughness_kaplanyan (
        roughness:f32, 
        normal:vec3<f32>, 
        tangent: vec3<f32>,
        bitangent: vec3<f32>
) -> f32{
    // based on "Filtering Distributions of Normals for Shading Antialiasing" by "A. S. Kaplanyan et al" 2016
    
    const sigma = 0.50; //- screen space variance
    const Kappa = 0.18; //- clamping treshold
    
    const sigma2 = sigma * sigma;
    
    // Compute plane-plane half vector (hpp)
    let hpp_ws = normal; // assume normal
    
    let hpp = vec2(dot(hpp_ws, tangent), dot(hpp_ws, bitangent));
    
    // compute filtering region
    // Use ddx/ddy, thanks to quad shading!
    let footprint_bounding_box = fwidth(hpp);
    
    let max_footprint = clamp( max(footprint_bounding_box.x , footprint_bounding_box.y), 1e-3, 0.3);
    
    let variance =  sigma2 * max_footprint * max_footprint;
    
    let kernel_roughness = min( Kappa, variance * 2.0 );
    
    // Beckmann proxy convolution (for GGX)
    let filtered_roughness = sqrt(roughness * roughness + kernel_roughness);          

    return filtered_roughness;
}`),
  bx = w.from(`
fn build_orthonormal_matrix_nt(normal:vec3<f32>, tangent4:vec4<f32>) -> mat3x3<f32>{
    let tangent = tangent4.xyz;
    let bitangent = normalize(cross(normal, tangent) * tangent4.w);

    return mat3x3(
        tangent,
        bitangent,
        normal
    );
    
}
`),
  gz = w.from(
    `
fn encode_g_buffer_normal(normal: vec3<f32>) -> vec2<u32>{
    let octahedral = octahedral_encode_normal(normal);

    return vec2<u32>(octahedral * 65535.0);
}
    `,
    [Do]
  ),
  yx = w.from(`
fn interpolate_attribute_3f32(v0:vec3<f32>, v1:vec3<f32>, v2:vec3<f32>, coordinate:vec3<f32>) -> vec3<f32>{

    return vec3<f32>(
        v0[0] * coordinate.x + v1[0] * coordinate.y + v2[0] * coordinate.z,
        v0[1] * coordinate.x + v1[1] * coordinate.y + v2[1] * coordinate.z,
        v0[2] * coordinate.x + v1[2] * coordinate.y + v2[2] * coordinate.z,
    );

}`),
  wx = w.from(`
fn interpolate_attribute_4f32(v0:vec4<f32>, v1:vec4<f32>, v2:vec4<f32>, coordinate:vec3<f32>)->vec4<f32>{

    return vec4<f32>(
        v0[0] * coordinate.x + v1[0] * coordinate.y + v2[0] * coordinate.z,
        v0[1] * coordinate.x + v1[1] * coordinate.y + v2[1] * coordinate.z,
        v0[2] * coordinate.x + v1[2] * coordinate.y + v2[2] * coordinate.z,
        v0[3] * coordinate.x + v1[3] * coordinate.y + v2[3] * coordinate.z,
    );

}`);
w.from(
  `
fn unjitter_texture_uv(
    uv_info: ${Io.wgsl_ref},
    jitter: vec2<f32>
) -> vec2<f32>{

     return uv_info.ddx * jitter.x + uv_info.ddy * jitter.y;
    
}
`,
  [Io.declaration_chunk]
);
const vz = 0.75,
  Ho = new ResourecGroup(),
  Tx = Ho.createGroup({ label: "Material" });
Tx.addUniform("material_info", al)
  .addTexture("texture_diffuse", "float")
  .addSampler("texture_diffuse_sampler")
  .addTexture("texture_normal", "float")
  .addSampler("texture_normal_sampler")
  .addTexture("texture_orm", "float")
  .addSampler("texture_orm_sampler")
  .addTexture("texture_emissive", "float")
  .addSampler("texture_emissive_sampler");
const Ex = Ho.createGroup({ label: "viz buffer" });
Ex.addTexture("viz_buffer_triangle", "uint")
  .addTexture("viz_buffer_mesh", "uint")
  .addUniform("projection", hn)
  .addUniform("camera", ce);
const Ax = Ho.createGroup({ label: "Scene Data" });
Ax.addStorageBuffer("meshes", X.from(Xe))
  .addStorageBuffer("geometries", X.from(Ut))
  .addStorageBuffer("geometry_indices", X.u32)
  .addStorageBuffer("geometry_vertices", X.from(qt));
Ho.addVisibility(GPUShaderStage.FRAGMENT);
Ho.getResourceByName("material_info").addVisibility(GPUShaderStage.VERTEX);
const xz = w.from(
    `
struct GBufferOutput {
  @location(0) normal_metalness_roughness : vec4<f32>,
  @location(1) normal : vec4<u32>,
  @location(2) albedo : vec4<f32>,
  @location(3) emissive : vec4<f32>,
}

// this is a multiplies applies to gradients before invoking texture sampling
const MIP_BIAS = ${vz.toFixed(8)};

@fragment
fn main(
  @builtin(position) coord : vec4<f32>
) -> GBufferOutput {
    var output : GBufferOutput;

    let triangle_index = textureLoad(
        viz_buffer_triangle,
        vec2<i32>(coord.xy),
        0
    ).r;

    let mesh_index = textureLoad(
        viz_buffer_mesh,
        vec2<i32>(coord.xy),
        0
    ).r;

    let mesh:MeshMetadata = meshes[mesh_index];

    // fetch geometry
    let geometry:GeometryMetadata = geometries[mesh.geometry];

    let vertices_address = geometry.vertex_address;

    // fetch triangle
    let triangle = geometry_read_triangle_vertices(geometry, triangle_index);

    let vertex_0 = triangle.a;
    let vertex_1 = triangle.b;
    let vertex_2 = triangle.c;

    let geometry_vertex_position_0:vec3<f32> = f32_array_as_vec3(vertex_0.position);
    let geometry_vertex_position_1:vec3<f32> = f32_array_as_vec3(vertex_1.position);
    let geometry_vertex_position_2:vec3<f32> = f32_array_as_vec3(vertex_2.position);

    let mesh_transform = mesh.transform;

    let instance_vertex_position_0:vec4<f32> = mesh_transform * vec4<f32>(geometry_vertex_position_0, 1.0);
    let instance_vertex_position_1:vec4<f32> = mesh_transform * vec4<f32>(geometry_vertex_position_1, 1.0);
    let instance_vertex_position_2:vec4<f32> = mesh_transform * vec4<f32>(geometry_vertex_position_2, 1.0);

    let screen_projection_matrix = projection.projection_matrix;

    let projected_vertex_position_0 = screen_projection_matrix * instance_vertex_position_0;
    let projected_vertex_position_1 = screen_projection_matrix * instance_vertex_position_1;
    let projected_vertex_position_2 = screen_projection_matrix * instance_vertex_position_2;

    let barycentric = barycentric_full(
        projected_vertex_position_0,
        projected_vertex_position_1,
        projected_vertex_position_2,
        coord.xy - projection.jitter
    );

    let geometry_vertex_uv_0:vec2<f32> = f32_array_as_vec2(vertex_0.uv);
    let geometry_vertex_uv_1:vec2<f32> = f32_array_as_vec2(vertex_1.uv);
    let geometry_vertex_uv_2:vec2<f32> = f32_array_as_vec2(vertex_2.uv);

    var uv_info = barycentric_interpolate_uv(barycentric, geometry_vertex_uv_0, geometry_vertex_uv_1, geometry_vertex_uv_2);
    
    // bias UV derivatives to supersample textures
    uv_info.ddx *= MIP_BIAS;
    uv_info.ddy *= MIP_BIAS;
    
    let v3_intance_vertex_position_0 = instance_vertex_position_0.xyz / instance_vertex_position_0.w;
    let v3_intance_vertex_position_1 = instance_vertex_position_1.xyz / instance_vertex_position_1.w;
    let v3_intance_vertex_position_2 = instance_vertex_position_2.xyz / instance_vertex_position_2.w;
    
    // compute face normal
    let world_face_normal = compute_triangle_face_normal(
        v3_intance_vertex_position_0,
        v3_intance_vertex_position_1,
        v3_intance_vertex_position_2
    );

    let orm_sample = textureSampleBarycentric(texture_orm, texture_orm_sampler, uv_info);

    // roughness
    var roughness = orm_sample.g * material_info.roughness_factor;
    let metalness = orm_sample.b * material_info.metallic_factor;
    let ambient = orm_sample.r;

    let geometry_vertex_normal_0 = f32_array_as_vec3(vertex_0.normal);
    let geometry_vertex_normal_1 = f32_array_as_vec3(vertex_1.normal);
    let geometry_vertex_normal_2 = f32_array_as_vec3(vertex_2.normal);

    let geometry_normal = interpolate_attribute_3f32(
          geometry_vertex_normal_0,
          geometry_vertex_normal_1,
          geometry_vertex_normal_2,
          barycentric.lambda
    );

    let geometry_tangent = interpolate_attribute_4f32(
          f32_array_as_vec4(vertex_0.tangent),
          f32_array_as_vec4(vertex_1.tangent),
          f32_array_as_vec4(vertex_2.tangent),
          barycentric.lambda
    );

    var normal_model_matrix = compute_normal_matrix_from_m4(mesh_transform);

    var world_geometry_normal =  normalize( normal_model_matrix * geometry_normal );
    
    // check if the world normal is pointing away from camera        
    let world_tangent =  normalize( normal_model_matrix * geometry_tangent.xyz );

    let world_tangent_frame = build_orthonormal_matrix_nt(world_geometry_normal, vec4(world_tangent, geometry_tangent.w));

    let normal_sample = textureSampleBarycentric(texture_normal, texture_normal_sampler, uv_info).rgb * 2.0 - 1.0;

    // transform_global normal
    var world_shading_normal:vec3<f32> = normalize(world_tangent_frame * normal_sample );
    
    // let's filter rougness based on local normals
    let filtered_roughness = anti_alias_roughness_kaplanyan(roughness, world_shading_normal ,world_tangent_frame[0],world_tangent_frame[1]);

    let diffuse_sample = textureSampleBarycentric(texture_diffuse, texture_diffuse_sampler, uv_info);

    output.albedo = vec4<f32>(diffuse_sample.rgb * material_info.albedo_color.rgb, ambient);
    
    output.normal = vec4u(
        encode_g_buffer_normal(world_shading_normal),
        encode_g_buffer_normal(world_geometry_normal), 
    );
    output.normal_metalness_roughness = vec4(0.0, 0.0, metalness, filtered_roughness);

    
    let emissive_color = textureSampleBarycentric(texture_emissive, texture_emissive_sampler, uv_info).rgb * material_info.emissive_factor;   

    output.emissive = vec4(emissive_color, 0.0);

    return output;
}`,
    [pz, xx, ri, Iv, gz, yx, wx, uz, hz, vx, mz, bx, qo, nh]
  ),
  bz = le.from({ label: "GBuffer", resources: Ho, body: xz }),
  yz = Ex.generateBindGroupLayoutDescriptor(),
  wz = Ax.generateBindGroupLayoutDescriptor(),
  Tz = w
    .from(
      `
const pos : array< vec2<f32>, 3 > = array< vec2<f32>, 3 >(
  vec2<f32>(-1.0, -1.0),
  vec2<f32>(3.0, -1.0),
  vec2<f32>(-1.0, 3.0)
);

@group(0) @binding(0) var<uniform> material_info: ${al.wgsl_ref};

@vertex
fn main(
  @builtin(vertex_index) id : u32
) -> @builtin(position) vec4<f32> {

  return vec4<f32>(pos[id], f32(material_info.id)/16777216 , 1.0);
}
`,
      [al.declaration_chunk]
    )
    .compile(),
  Ez = Nc.from({
    label: "Standard material",
    layout: Ho.generatePipelineLayoutDescriptor(),
    vertex: { module: { code: Tz } },
    fragment: { module: { code: bz.compile() }, targets: lz },
    depthStencil: {
      depthCompare: "equal",
      format: "depth32float",
      depthWriteEnabled: !1,
    },
    primitive: { topology: "triangle-list", cullMode: "none" },
  });
var p_, ls, _o, sc, zd, Sx;
class Az {
  constructor(e, t) {
    b(this, zd);
    b(this, p_);
    b(this, ls);
    x(this, "pipeline");
    x(this, "textures", new Map());
    b(this, _o);
    b(this, sc);
    S(this, p_, e),
      S(this, ls, t),
      S(
        this,
        _o,
        e.createBuffer({
          label: "uniforms",
          usage: GPUBufferUsage.UNIFORM,
          size: al.size,
          mappedAtCreation: !0,
        })
      );
    const r = getProperty(this, _o).getMappedRange();
    Fo(
      {
        id: t.id,
        albedo_color: t.diffuse_color,
        roughness_factor: t.roughness_factor,
        metallic_factor: t.metallic_factor,
        emissive_factor: t.emissive_factor,
      },
      al,
      r
    ),
      getProperty(this, _o).unmap();
  }
  build(e, t) {
    const r = getProperty(this, ls),
      i = [
        r.texture_albedo,
        r.texture_normal,
        r.texture_orm,
        r.texture_emissive,
      ].filter(cz);
    for (let n = 0; n < i.length; n++) {
      const o = i[n],
        a = e.obtain(o);
      this.textures.set(o, a);
    }
    this.pipeline = t.obtain(Ez);
  }
  destroy() {}
  obtainMaterialBindGroup(e) {
    return (
      getProperty(this, sc) === false &&
        S(this, sc, P(this, zd, Sx).call(this, e)),
      getProperty(this, sc)
    );
  }
}
(p_ = new WeakMap()),
  (ls = new WeakMap()),
  (_o = new WeakMap()),
  (sc = new WeakMap()),
  (zd = new WeakSet()),
  (Sx = function (e) {
    const t = getProperty(this, p_),
      r = this.textures;
    function i(_, u) {
      if (_ === false) return u;
      const d = r.get(_),
        h = t.createSampler(_z(_));
      return { texture: d, sampler: h };
    }
    const n = i(getProperty(this, ls).texture_albedo, {
        texture: e.texture_pixel_white,
        sampler: e.sampler,
      }),
      o = i(getProperty(this, ls).texture_normal, {
        texture: e.texture_pixel_normal,
        sampler: e.sampler,
      }),
      a = i(getProperty(this, ls).texture_orm, {
        texture: e.texture_orm,
        sampler: e.sampler,
      }),
      c = i(getProperty(this, ls).texture_emissive, {
        texture: e.texture_pixel_white,
        sampler: e.sampler,
      });
    return t.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: Tx.generateGPUBindGroupEntryArray({
        material_info: { buffer: getProperty(this, _o) },
        texture_diffuse: n.texture.obtainView(),
        texture_diffuse_sampler: n.sampler,
        texture_normal: o.texture.obtainView(),
        texture_normal_sampler: o.sampler,
        texture_orm: a.texture.obtainView(),
        texture_orm_sampler: a.sampler,
        texture_emissive: c.texture.obtainView(),
        texture_emissive_sampler: c.sampler,
      }),
    });
  });
const zx = Bd(new me(1, 1, 1, 1));
class Sz {
  constructor() {
    x(this, "texture");
    x(this, "texture_pixel_white");
    x(this, "texture_pixel_black");
    x(this, "texture_pixel_normal");
    x(this, "texture_orm");
    x(this, "sampler");
  }
}
const Cx = Zr.fromJSON({
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.FRAGMENT,
        texture: { sampleType: "uint" },
      },
    ],
  }),
  Ux = Zr.fromJSON({
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: Ee.readOnlyStorage,
      },
    ],
  }),
  zz = Nc.from({
    layout: { bindGroupLayouts: [Cx, Ux] },
    vertex: { module: { code: Cv } },
    fragment: {
      module: {
        label: "MeshDepth writer",
        code: `
                    
                    ${Xe.wgsl_declaration}
                    
                    @group(0) @binding(0) var mesh_texture: texture_2d<u32>;
                    @group(1) @binding(0) var<storage, read> meshes: array<${Xe.wgsl_ref}>;
                       
                    struct Outputs{
                        @builtin(frag_depth) depth:f32,
                    }
                       
                    @fragment
                    fn main(
                        @builtin(position) coord : vec4<f32>
                    ) -> Outputs {
                    
                        let mesh_id = textureLoad(
                            mesh_texture,
                            vec2<i32>(coord.xy),
                            0
                        ).r;
                        
                        if(mesh_id == ${b2}){
                            return Outputs(1.0);
                        }
                                                
                        let mesh = meshes[mesh_id];
                        
                        return Outputs(
                            f32(mesh.material)/16777216
                        );
                    }
                    `,
      },
    },
    depthStencil: {
      format: "depth32float",
      depthWriteEnabled: !0,
      depthCompare: "always",
      stencilReadMask: 0,
      stencilWriteMask: 0,
    },
    primitive: { topology: "triangle-list", cullMode: "none" },
  });
var m_, g_, v_, uo, x_, tn, b_, Hr, Ec, Ix, Nx;
class Cz {
  constructor(e, t, r, i) {
    b(this, Ec);
    b(this, m_);
    x(this, "contexts", new Map());
    b(this, g_);
    b(this, v_);
    b(this, uo);
    b(this, x_);
    b(this, tn);
    b(this, b_, 0);
    b(this, Hr);
    S(this, m_, e),
      S(this, g_, t),
      S(this, v_, r),
      S(this, uo, i),
      S(
        this,
        tn,
        t.contextFromDescriptor(
          mt.from({
            label: "Material Depth",
            size: [1, 1],
            format: "depth32float",
            usage:
              GPUTextureUsage.RENDER_ATTACHMENT |
              GPUTextureUsage.TEXTURE_BINDING,
          })
        )
      ),
      S(this, x_, r.obtain(zz)),
      S(this, Hr, new Sz()),
      (getProperty(this, Hr).texture = t.contextFromDescriptor(
        mt.from({
          format: "rgba8unorm",
          size: [1, 1],
          usage: GPUTextureUsage.TEXTURE_BINDING,
        })
      )),
      (getProperty(this, Hr).texture_pixel_white = t.obtain(Op)),
      (getProperty(this, Hr).texture_pixel_black = t.obtain(mx)),
      (getProperty(this, Hr).texture_pixel_normal = t.obtain(gx)),
      (getProperty(this, Hr).texture_orm = t.obtain(zx)),
      (getProperty(this, Hr).sampler = e.createSampler(Pc.from({})));
  }
  get version() {
    return getProperty(this, b_);
  }
  get material_depth_texture() {
    return getProperty(this, tn);
  }
  viz_render(e, t, r, i) {
    P(this, Ec, Nx).call(this, e, t, r);
    const n = e.beginRenderPass({
        label: "GPUMaterialContext/write-g-buffer",
        colorAttachments: [
          {
            view: i.color_attachments[0].obtainView(),
            loadOp: "clear",
            storeOp: "store",
          },
          {
            view: i.color_attachments[1].obtainView(),
            loadOp: "clear",
            storeOp: "store",
          },
          {
            view: i.color_attachments[2].obtainView(),
            loadOp: "clear",
            storeOp: "store",
          },
          {
            view: i.color_attachments[3].obtainView(),
            loadOp: "clear",
            storeOp: "store",
          },
        ],
        depthStencilAttachment: {
          view: getProperty(this, tn).obtainView(
            Ve.from({ format: "depth32float" })
          ),
          depthReadOnly: !0,
        },
        primitive: { topology: "triangle-list", cullMode: "none" },
      }),
      o = getProperty(this, uo).obtain(
        zi.from(yz, [
          r.color_attachments[0].obtainView(),
          r.color_attachments[1].obtainView(),
          { buffer: t.uniform_buffer },
          { buffer: t.camera.gpu_buffer },
        ])
      ),
      a = getProperty(this, uo).obtain(
        zi.from(wz, [
          { buffer: t.scene.instance_buffer },
          { buffer: t.scene.geometries.buffer_metadata },
          { buffer: t.scene.geometries.buffer_indices },
          { buffer: t.scene.geometries.buffer_vertices },
        ])
      );
    n.setBindGroup(1, o), n.setBindGroup(2, a);
    let c = null;
    for (const _ of this.contexts.values()) {
      const u = _.pipeline;
      c !== u && (n.setPipeline(u), (c = u));
      const d = _.obtainMaterialBindGroup(getProperty(this, Hr));
      n.setBindGroup(0, d), n.draw(3);
    }
    n.end();
  }
  obtain(e) {
    let t = this.contexts.get(e);
    return (
      t === false &&
        ((t = P(this, Ec, Ix).call(this, e)),
        this.contexts.set(e, t),
        ze(this, b_)._++),
      t
    );
  }
}
(m_ = new WeakMap()),
  (g_ = new WeakMap()),
  (v_ = new WeakMap()),
  (uo = new WeakMap()),
  (x_ = new WeakMap()),
  (tn = new WeakMap()),
  (b_ = new WeakMap()),
  (Hr = new WeakMap()),
  (Ec = new WeakSet()),
  (Ix = function (e) {
    const t = new Az(getProperty(this, m_), e);
    return t.build(getProperty(this, g_), getProperty(this, v_)), t;
  }),
  (Nx = function (e, t, r) {
    const i = r.color_attachments[1];
    getProperty(this, tn).resize(i.size[0], i.size[1]);
    const n = e.beginRenderPass({
      label: "GPUMaterialManager/material-depth",
      colorAttachments: [],
      depthStencilAttachment: {
        depthClearValue: 1,
        view: getProperty(this, tn).obtainView(),
        depthLoadOp: "clear",
        depthStoreOp: "store",
      },
      primitive: { topology: "triangle-list", cullMode: "none" },
    });
    n.setPipeline(getProperty(this, x_));
    const o = getProperty(this, uo),
      a = o.obtain(zi.from(Cx, [i.obtainView()])),
      c = o.obtain(zi.from(Ux, [{ buffer: t.scene.instance_buffer }]));
    n.setBindGroup(0, a), n.setBindGroup(1, c), n.draw(3), n.end();
  });
function Uz(s, e) {
  return s === e;
}
const Iz = new Ct({ keyHashFunction: Re, keyEqualityFunction: Uz });
function Nz(s) {
  return Mc({
    fragment_code: `

@group(0) @binding(0) var source : texture_2d<f32>;
@group(0) @binding(1) var<uniform> source_clip : vec4<u32>;

@fragment
fn main(
    @builtin(position) coord : vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    let source_size = textureDimensions(source);
    
    let source_texel = vec2<f32>(source_clip.xy) + uv * vec2<f32>(source_clip.zw) ;
    
    return textureLoad(source, vec2<u32>(source_texel), 0);
}
`,
    layout: dr.forStage(GPUShaderStage.FRAGMENT, [
      [kr.unfilterableFloat, Ee.uniform],
    ]),
    targets: [{ format: s }],
  });
}
function Mx({
  graphics: s,
  encoder: e,
  target_format: t,
  output_view: r,
  source_view: i,
  source_clip: n,
  output_clip: o,
  load_op: a = "load",
}) {
  const c = Iz.getOrCompute(t, Nz),
    _ = s.render_pipelines.obtain(c),
    u = e.beginRenderPass({
      colorAttachments: [{ view: r, loadOp: a, storeOp: "store" }],
    });
  u.setViewport(o[0], o[1], o[2], o[3], 0, 0);
  const d = e.allocateTransientBuffer(
      new Uint32Array(n).buffer,
      GPUBufferUsage.UNIFORM
    ),
    h = s.bind_groups.obtain(
      zi.from(c.layout.bindGroupLayouts[0], [i, { buffer: d }])
    );
  u.setPipeline(_), u.setBindGroup(0, h), u.draw(3), u.end();
}
function Mz({ graph: s, input: e = -1, output: t = -1 }) {
  const r = {};
  function i(o, a, c) {
    const _ = a.get(e),
      u = a.get(t);
    Mx({
      graphics: c.graphics,
      encoder: c.encoder,
      target_format: u.descriptor.format,
      output_view: u.obtainView(Ve.from({ baseMipLevel: 0, mipLevelCount: 1 })),
      source_view: _.obtainView(),
      source_clip: [0, 0, _.width, _.height],
      output_clip: [0, 0, u.width, u.height],
      load_op: "clear",
    });
  }
  const n = s.add("copy", r, i);
  return n.read(e), (r.output = n.write(t)), r.output;
}
const fs = Struct.from(
  {
    texture_albedo: "u32",
    texture_orm: "u32",
    texture_normal: "u32",
    texture_emissive: "u32",
    color_albedo: "vec3<f32>",
    roughness_factor: "f32",
    metallic_factor: "f32",
  },
  "IndirectMaterialInfo"
);
class kz {
  constructor() {
    x(this, "id", 0);
    x(this, "source");
    x(this, "texture_albedo");
    x(this, "texture_orm");
    x(this, "texture_normal");
    x(this, "texture_emissive");
  }
}
class Rz {
  constructor() {
    x(this, "id", 0);
    x(this, "source");
  }
}
const Dt = 64,
  Hc = 2048,
  _n = Math.floor(Hc / Dt),
  e0 = _n * _n;
var nc, y_, w_, ho, fo, Ur, _s, T_, E_, Cd, po, oc, A_, Li, kx, Rx, Lx, Px;
class Lz {
  constructor(e, t) {
    b(this, Li);
    b(this, nc);
    b(this, y_);
    b(this, w_);
    b(this, ho);
    b(this, fo, 0);
    b(this, Ur);
    b(this, _s);
    b(this, T_, new Ct());
    b(this, E_, new Ct());
    b(this, Cd, new W2());
    b(this, po, 0);
    b(this, oc, 0);
    b(this, A_, 0);
    S(this, nc, t),
      S(this, y_, e),
      S(this, w_, t.textures),
      S(this, ho, t.materials);
    const r = e.limits;
    S(this, fo, Math.floor(r.maxUniformBufferBindingSize / Wt(16, fs.size))),
      S(
        this,
        Ur,
        e.createBuffer({
          label: "Material Info",
          usage: GPUBufferUsage.UNIFORM,
          size: fs.size * getProperty(this, fo),
        })
      ),
      S(this, _s, new Ht(e));
    const i = getProperty(this, _s).descriptor;
    (i.label = "LPV textures"),
      (i.format = "rgba8unorm"),
      (i.dimension = "2d"),
      (i.size = [Hc, Hc, 1]),
      (i.mipLevelCount = 1),
      (i.usage =
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.RENDER_ATTACHMENT |
        GPUTextureUsage.COPY_DST);
  }
  get material_limit() {
    return getProperty(this, fo);
  }
  get buffer_materials() {
    return getProperty(this, Ur);
  }
  get buffer_textures() {
    return getProperty(this, _s);
  }
  get textureView() {
    return getProperty(this, _s).obtainView(Ve.from({ dimension: "2d-array" }));
  }
  obtain_material(e) {
    return getProperty(this, T_).getOrCompute(e, P(this, Li, kx), this);
  }
  obtain_texture(e) {
    return getProperty(this, E_).getOrCompute(e, P(this, Li, Rx), this);
  }
  build_textures() {
    const e = Array.from(getProperty(this, E_).values()),
      t = e.length,
      r = _n * _n;
    getProperty(this, _s).resize(Hc, Hc, Math.ceil(t / r));
    const i = getProperty(this, w_);
    i.mipmaps.flush();
    const n = Ni.create(
        getProperty(this, nc),
        "GPUResidentMaterialContext/texture-write"
      ),
      o = this.buffer_textures;
    for (let a = 0; a < t; a++) {
      const c = e[a],
        _ = c.source,
        u = i.obtain(_);
      i.mipmaps.flush();
      const d = u.width === u.height,
        h = _.source.color_space === Jr.SRGB,
        p = Fm(u.width) && Fm(u.height),
        v = Math.log2(u.width / Dt),
        f = Math.log2(u.height / Dt),
        m = Math.floor(c.id / r),
        g = c.id % r,
        E = Math.floor(g / _n),
        y = g % _n;
      if (d && p && v >= 0 && u.gpu_texture.mipLevelCount >= v && !h)
        n.copyTextureToTexture(
          { texture: u.gpu_texture, mipLevel: v },
          { texture: o.gpu_texture, mipLevel: 0, origin: [y * Dt, E * Dt, m] },
          [Dt, Dt]
        );
      else {
        const A = Math.max(0, Math.floor(Math.min(v, f)));
        Mx({
          graphics: getProperty(this, nc),
          encoder: n,
          target_format: o.gpu_texture.format,
          output_view: o.obtainView(
            Ve.from({ baseArrayLayer: m, dimension: "2d" })
          ),
          source_view: u.obtainView(Ve.from({ baseMipLevel: A })),
          source_clip: [0, 0, u.width >> A, u.height >> A],
          output_clip: [y * Dt, E * Dt, Dt, Dt],
        });
      }
    }
    n.finish();
  }
  build_materials() {
    const e = Array.from(getProperty(this, T_).values());
    let t = 0;
    for (let i = 0; i < e.length; i++) {
      const n = e[i];
      t = Math.max(t, n.id);
    }
    getProperty(this, Ur).destroy(),
      S(
        this,
        Ur,
        getProperty(this, y_).createBuffer({
          label: getProperty(this, Ur).label,
          usage: getProperty(this, Ur).usage,
          size: fs.size * getProperty(this, fo),
          mappedAtCreation: !0,
        })
      );
    const r = getProperty(this, Ur).getMappedRange();
    for (let i = 0; i < e.length; i++) {
      const n = e[i];
      Fo(
        {
          texture_albedo: n.texture_albedo.id,
          texture_orm: n.texture_orm.id,
          texture_normal: n.texture_normal.id,
          texture_emissive: n.texture_emissive.id,
          color_albedo: n.source.diffuse_color,
          roughness_factor: n.source.roughness_factor,
          metallic_factor: n.source.metallic_factor,
        },
        fs,
        r,
        n.id * fs.size
      );
    }
    getProperty(this, Ur).unmap();
  }
  ensure_scene_materials(e) {
    const t = e.instances.instances;
    for (let r = 0; r < t.length; r++) {
      const n = t[r].material;
      n != null && this.obtain_material(n);
    }
  }
  update() {
    P(this, Li, Px).call(this),
      getProperty(this, po) !== getProperty(this, oc) &&
        P(this, Li, Lx).call(this);
  }
  destroy() {
    getProperty(this, Ur).destroy(), getProperty(this, _s).destroy();
  }
}
(nc = new WeakMap()),
  (y_ = new WeakMap()),
  (w_ = new WeakMap()),
  (ho = new WeakMap()),
  (fo = new WeakMap()),
  (Ur = new WeakMap()),
  (_s = new WeakMap()),
  (T_ = new WeakMap()),
  (E_ = new WeakMap()),
  (Cd = new WeakMap()),
  (po = new WeakMap()),
  (oc = new WeakMap()),
  (A_ = new WeakMap()),
  (Li = new WeakSet()),
  (kx = function (e) {
    const t = new kz();
    return (
      (t.id = e.id),
      (t.source = e),
      (t.texture_albedo = this.obtain_texture(e.texture_albedo ?? Op)),
      (t.texture_orm = this.obtain_texture(e.texture_orm ?? zx)),
      (t.texture_normal = this.obtain_texture(e.texture_normal ?? gx)),
      (t.texture_emissive = this.obtain_texture(e.texture_emissive ?? mx)),
      ze(this, po)._++,
      t
    );
  }),
  (Rx = function (e) {
    const t = new Rz();
    return (t.id = getProperty(this, Cd).get()), (t.source = e), t;
  }),
  (Lx = function () {
    getProperty(this, oc) !== getProperty(this, po) &&
      (S(this, oc, getProperty(this, po)),
      this.build_textures(),
      this.build_materials());
  }),
  (Px = function () {
    if (getProperty(this, A_) === getProperty(this, ho).version) return;
    const e = Array.from(getProperty(this, ho).contexts.keys());
    for (let t = 0; t < e.length; t++) {
      const r = e[t];
      this.obtain_material(r);
    }
    S(this, A_, getProperty(this, ho).version);
  });
function Pz(s) {
  if (s instanceof Float32Array) return se.Float32;
  if (s instanceof Float64Array) return se.Float64;
  if (s instanceof Uint8Array || s instanceof Uint8ClampedArray)
    return se.Uint8;
  if (s instanceof Uint16Array) return se.Uint16;
  if (s instanceof Uint32Array) return se.Uint32;
  if (s instanceof Int8Array) return se.Int8;
  if (s instanceof Int16Array) return se.Int16;
  if (s instanceof Int32Array) return se.Int32;
  if (s instanceof Array) return se.Float64;
  throw new TypeError("Unknown array type");
}
function Bz(s) {
  return typeof ImageBitmap < "u" && s instanceof ImageBitmap;
}
function Oz(s) {
  const e = s.source,
    t = s.color_space;
  if (e.isSampler2D === !0) {
    const r = Pz(e.data),
      i = e.itemSize,
      n = "rgba".slice(0, i),
      a = T3(r) * 8;
    let c;
    if (t === Jr.LinearSRGB)
      if (r === se.Uint8) c = "unorm";
      else if (r === se.Float32) c = "float";
      else throw new Error(`Unsupported data type '${r}'`);
    else if (t === Jr.None)
      if (r === se.Uint8 || r === se.Uint16 || r === se.Uint32) c = "uint";
      else throw new Error(`Unsupported data type '${r}'`);
    else if (t === Jr.SRGB)
      if (r === se.Uint8) c = "unorm-srgb";
      else throw new Error(`Unsupported data type '${r}'`);
    else throw new Error(`Unsupported color space '${t}'`);
    return `${n}${a}${c}`;
  } else {
    if (Bz(e)) return t === Jr.SRGB ? "rgba8unorm-srgb" : "rgba8unorm";
    throw new Error("Unsupported image data");
  }
}
function Fz(s) {
  const e = s.source;
  let t =
      GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC,
    r = 1;
  s.flags & Pd.GenerateMipMaps &&
    ((t |= GPUTextureUsage.RENDER_ATTACHMENT), (r = ov(e.width, e.height)));
  const i = Oz(e);
  return mt.from({
    size: [e.width, e.height],
    format: i,
    usage: t,
    mipLevelCount: r,
    dimension: "2d",
  });
}
class Dz {
  constructor() {
    x(this, "source_id", 0);
    x(this, "texture_descriptor", null);
  }
  hash() {
    return this.source_id;
  }
  equals(e) {
    return (
      this.source_id === e.source_id &&
      this.texture_descriptor.equals(e.texture_descriptor)
    );
  }
}
var S_, ac, mo, z_, Ud, Bx;
class Gz {
  constructor(e) {
    b(this, Ud);
    b(this, S_, new Ct());
    b(this, ac);
    b(this, mo);
    b(this, z_, new Map());
    S(this, ac, e), S(this, mo, new O1(e));
  }
  get mipmaps() {
    return getProperty(this, mo);
  }
  obtain(e) {
    let t = getProperty(this, z_).get(e);
    return (
      t === false &&
        ((t = this.contextFromShadeTexture(e)),
        getProperty(this, z_).set(e, t)),
      t
    );
  }
  contextFromShadeTexture(e) {
    const t = Fz(e),
      r = new Dz();
    (r.source_id = e.source.id), (r.texture_descriptor = t);
    const i = getProperty(this, S_).get(r);
    if (i !== false) return i;
    {
      const n = this.contextFromDescriptor(t);
      return (
        P(this, Ud, Bx).call(this, e.source, n.gpu_texture),
        e.flags & Pd.GenerateMipMaps &&
          getProperty(this, mo).schedule(n.gpu_texture, t),
        getProperty(this, S_).set(r, n),
        n
      );
    }
  }
  contextFromDescriptor(e) {
    const t = new Ht(getProperty(this, ac));
    return (t.descriptor = e), t;
  }
  update() {
    getProperty(this, mo).update(1);
  }
}
(S_ = new WeakMap()),
  (ac = new WeakMap()),
  (mo = new WeakMap()),
  (z_ = new WeakMap()),
  (Ud = new WeakSet()),
  (Bx = function (e, t) {
    const r = e.source,
      n = getProperty(this, ac).queue,
      o = { width: t.width, height: t.height, depthOrArrayLayers: 1 };
    if (r !== false && r.isSampler2D) {
      const a = r.data,
        _ = r.itemSize * a.BYTES_PER_ELEMENT * r.width;
      n.writeTexture(
        { texture: t, mipLevel: 0, origin: { x: 0, y: 0, z: 0 } },
        a.buffer,
        { offset: 0, bytesPerRow: _ },
        o
      );
    } else n.copyExternalImageToTexture({ source: r }, { texture: t }, o);
  });
var rn, go, Id;
class Vz {
  constructor(e) {
    x(this, "geometries");
    x(this, "materials");
    b(this, rn);
    x(this, "pipeline_layouts");
    x(this, "render_pipelines");
    x(this, "compute_pipelines");
    x(this, "shader_modules");
    x(this, "buffers");
    x(this, "textures");
    x(this, "bind_groups");
    b(this, go);
    x(this, "allocator_buffers");
    x(this, "allocator_textures");
    b(this, Id, 0);
    S(this, go, e),
      (this.allocator_buffers = new oz(e)),
      (this.allocator_textures = new az(e)),
      (this.textures = new Gz(e)),
      (this.buffers = new ES(e)),
      (this.shader_modules = new mS(e)),
      (this.pipeline_layouts = new fS(e)),
      (this.bind_groups = new bS(e, this.pipeline_layouts)),
      (this.render_pipelines = new pS(
        e,
        this.pipeline_layouts,
        this.shader_modules
      )),
      (this.compute_pipelines = new hS(
        e,
        this.pipeline_layouts,
        this.shader_modules
      )),
      (this.geometries = new sz(e)),
      (this.materials = new Cz(
        e,
        this.textures,
        this.render_pipelines,
        this.bind_groups
      ));
  }
  get materials_resident() {
    return (
      getProperty(this, rn) === false &&
        S(this, rn, new Lz(getProperty(this, go), this)),
      getProperty(this, rn)
    );
  }
  increment_time() {
    ze(this, Id)._++, this.buffers.increment_time();
  }
  get device() {
    return getProperty(this, go);
  }
  setPipelineBindings(e, t, r) {
    const i = t.layout.bindGroupLayouts,
      n = r.length,
      o = this.bind_groups;
    for (let a = 0; a < n; a++) {
      const c = r[a],
        _ = i[a],
        u = zi.from(_, c),
        d = o.obtain(u);
      e.setBindGroup(a, d);
    }
  }
  createBuffer(e) {
    return wS(getProperty(this, go), e);
  }
  update() {
    const e = Ni.create(this, "GraphicsContext.update");
    this.geometries.update(e),
      this.buffers.update(),
      this.textures.update(),
      this.bind_groups.update(),
      this.increment_time(),
      e.finish();
  }
  destroy() {
    getProperty(this, rn) !== false && getProperty(this, rn).destroy();
  }
}
(rn = new WeakMap()), (go = new WeakMap()), (Id = new WeakMap());
function $z(s, e, t) {
  const r = Math.PI * 2 * s(),
    i = s() * 2 - 1,
    n = Math.acos(i),
    o = Math.sin(n),
    a = o * Math.cos(r),
    c = o * Math.sin(r),
    _ = i;
  (e[t] = a), (e[t + 1] = c), (e[t + 2] = _);
}
function qz(s, e, t) {
  const r = t - e,
    i = s();
  return Math.round(i * r) + e;
}
const Ro = Struct.from({ root: "u32", nodes: X.from(Mi) }, "BVH"),
  Hz = w.from(
    `
fn ray_intersects_sphere(
    ray:${ve.wgsl_ref},
    center:vec3<f32>,
    radius:f32,
) -> bool {
    let _rayStart = ray.origin - center;
	let a = dot(ray.direction, ray.direction);
	let b = 2.0 * dot(_rayStart, ray.direction);
	let c = dot(_rayStart, _rayStart) - (radius * radius);
	
	let d2 = b * b - 4 * a * c;
	
	if (d2 < 0)
	{
		return false;
	}
    
    let d = sqrt(d2);
    
    let hit_back = (-b - d) / (2.0 * a);
    let hit_front = (-b + d) / (2.0 * a);
    
    if(hit_front < ray.tmin || hit_back > ray.tmax){
        // outside of the ray segment
        return false;
    }
    
    return true;
}
    `,
    [ve.declaration_chunk]
  ),
  Yz = w.from(
    `
fn ray_query_blas_occluded(
    ray: ${ve.wgsl_ref}, 
    geometry_index: u32, 
    stack: ptr<function, array<u32,${jt}>>, 
    stack_top: u32
) -> bool{
        
    let geometry = geometries[geometry_index];
    
    let bounding_sphere = geometry.bounding_sphere;
    
    if(!ray_intersects_sphere(ray, bounding_sphere.xyz, bounding_sphere.w)){
        // typically this lets us get misses much quicker
        return false;
    }
    
    let blas_address = blas_lookup[geometry_index];
             
    var pointer = stack_top + 1;
   
    let direction_rcp = 1.0 / ray.direction;
    
    var node_index = 0u;
    
    for(;pointer > stack_top && pointer <= ${jt};){
    
        let node = blas_data[ blas_address + node_index ];
        
        if(!aabb3_intersects_ray( node.bounds, ray.origin, direction_rcp, ray.tmin, ray.tmax)){
            
            pointer --;
            node_index = stack[pointer];
            
            continue;
        
        }
        
        let child_1 = node.child_1;
        let child_2 = node.child_2;
        
        if(child_1 != BVH_NULL_NODE){
            // not a leaf node
            
            node_index = child_1;
            
            stack[ pointer ] = child_2;
            
            pointer ++;
            
        }else{
            
            pointer --;
            node_index = stack[pointer];
                        
            let triangle = geometry_read_triangle_vertices(geometry, child_2);
            
            let va = triangle.a;
            let vb = triangle.b;
            let vc = triangle.c;
            
            let a = f32_array_as_vec3(va.position);
            let b = f32_array_as_vec3(vb.position);
            let c = f32_array_as_vec3(vc.position);
                            
            var triangle_hit :vec3<f32>;
            
            if(ray_triangle_compute_intersection_barycentric(&triangle_hit, ray, a, b, c)){
                // got a hit
                return true;
            }
        }
    }
    
    return false;
}`,
    [$o, ve.declaration_chunk, Hz, oh, qo, ri, ux]
  ),
  lh = w.from(`
fn v3_matrix4_rotate(d:vec3<f32>, t: mat4x4<f32>) -> vec3<f32>{

     return normalize(
        vec3<f32>(
            t[0][0]*d.x + t[1][0]*d.y + t[2][0]*d.z,
            t[0][1]*d.x + t[1][1]*d.y + t[2][1]*d.z,
            t[0][2]*d.x + t[1][2]*d.y + t[2][2]*d.z,
        )
    );

}
`),
  Ox = w.from(
    `
fn ray_transform_m4(
    ray: ${ve.wgsl_ref},
    transform: mat4x4<f32>
) -> ${ve.wgsl_ref} {

    let ray_length = ray.tmax - ray.tmin;

    let new_origin = v3_matrix4_project( ray.origin + ray.direction * ray.tmin, transform );
    let new_direction = v3_matrix4_rotate( ray.direction, transform );
    
    let new_end = v3_matrix4_project( ray.origin + ray.direction * ray_length, transform );
    
    let new_ray_length = distance(new_end,new_origin);

    return ${ve.wgsl_ref}(
        new_origin,
        new_direction,
        0.0,
        new_ray_length
    );
}`,
    [lh, Tn, ve.declaration_chunk]
  ),
  Fp = w.from(
    `
fn ray_query_occluded( ray: ${ve.wgsl_ref}) -> bool {
    var stack = array<u32, ${jt}>();
    
    let direction_rcp = 1.0 / ray.direction;
    
    var node_index = tlas.root;
    var pointer = 1u;
    
    for(;pointer > 0 && pointer <= ${jt};){
                    
        let node = tlas.nodes[node_index];
        
        if(!aabb3_intersects_ray(node.bounds, ray.origin, direction_rcp, ray.tmin, ray.tmax)){
        
            pointer --;
            node_index = stack[pointer];
            
            continue;
        }
        
        let child_1 = node.child_1;
        let child_2 = node.child_2;
        
        if(child_1 != BVH_NULL_NODE){
            // Intermediate node
            
            node_index = child_1;
            
            stack[ pointer ] = child_2;
            
            pointer ++;
            
                       
        }else{
        
            pointer --;
            node_index = stack[pointer];
                        
            // leaf, traverse BLAS
            // child_2 stores the user_data (mesh_id)
            
            let mesh = instances[child_2];
            
            let geometry_id = mesh.geometry;
            
            let local_ray = ray_transform_m4(ray, mesh.transform_inverse);
            
            if(ray_query_blas_occluded(local_ray, geometry_id, &stack, pointer)){
                return true;
            }
            
        }
        
    }
    
    // no hit
    return false;
}`,
    [ve.declaration_chunk, $o, Yz, Ox, oh]
  ),
  jz = w.from(
    `
fn scene_point_query_nearest(position: vec3<f32>, max_distance: f32) -> ${fn.wgsl_ref}{

    var stack = array<u32, ${jt}>();
    var node_index = tlas.root;
    var pointer = 1u;
    
    var nearest_distance_sqr = max_distance * max_distance;
    
    var out: ${fn.wgsl_ref};
    out.primitive = ${_r}; // used to indicate a miss on output
    

    for(;pointer > 0u && pointer <= ${jt};){

        let node = tlas.nodes[node_index];
        let child_1 = node.child_1;
        let child_2 = node.child_2;

        if(child_1 != BVH_NULL_NODE){
            // not a leaf node
            let child_1_bounds = tlas.nodes[ child_1 ].bounds;
            let distance_sqr_to_child1 = aabb3_unsigned_distance_sqr_to_point(child_1_bounds, position);

            let child_2_bounds = tlas.nodes[ child_2 ].bounds;
            let distance_sqr_to_child2 = aabb3_unsigned_distance_sqr_to_point(child_2_bounds, position);

            // sort children
            var sorted_children = vec2(child_1, child_2);
            var sorted_distances =  vec2(distance_sqr_to_child1, distance_sqr_to_child2);

            if (distance_sqr_to_child2 < distance_sqr_to_child1) {

                sorted_children = sorted_children.yx;
                sorted_distances = sorted_distances.yx;

            }

            if(sorted_distances.y < nearest_distance_sqr){
                // both children are within range

                node_index = sorted_children.x;

                stack[ pointer ] = sorted_children.y;

                pointer ++;

            }else if(sorted_distances.x < nearest_distance_sqr){

                node_index = sorted_children.x;

            }else{

                pointer --;
                node_index = stack[pointer];

            }

        }else{

            pointer --;
            node_index = stack[pointer];

            let mesh_id = child_2;
            let mesh = instances[mesh_id];

            let geometry_id = mesh.geometry;

            let geometry_position = v3_matrix4_project(position, mesh.transform_inverse);

            let geometry_hit = point_query_blas_nearest(
                geometry_position,
                F32_MAX, // TODO consider passing a sensible max-distance
                geometry_id,
                &stack,
                pointer
            );

            if(geometry_hit.primitive == ${_r}){
                // got nothing, this should not happen though
                continue;
            }

            let mesh_hit_point = v3_matrix4_project(geometry_hit.position, mesh.transform);

            let distance_to_mesh = distance(mesh_hit_point, position);
            let distance_to_mesh2 = distance_to_mesh*distance_to_mesh;

            if (distance_to_mesh2 >= nearest_distance_sqr) {
                continue;
            }

            nearest_distance_sqr = distance_to_mesh2;

            out.primitive = mesh_id;
            out.normal = v3_matrix4_rotate(geometry_hit.normal, mesh.transform);
            out.position = mesh_hit_point;

        }
    }
    
    return out;
}
`,
    [fn.declaration_chunk, $o, ti, lx, cx, Tn, lh]
  ),
  Dp = w.from(
    `
fn ray_query_nearest(
    ray: ${ve.wgsl_ref},
) -> ${ha.wgsl_ref}{
    var stack = array<u32, ${jt}>();
    
    
    var node_index = tlas.root;
    var pointer = 1u;
    
    let direction_rcp = 1.0 / ray.direction;
    
    var best_hit: ${ha.wgsl_ref};
    best_hit.t = -1.0;
    
    var global_ray = ray;
    
    for(;pointer > 0 && pointer <= ${jt};){
            
        let node = tlas.nodes[node_index];
        
        if(!aabb3_intersects_ray(node.bounds, global_ray.origin, direction_rcp, global_ray.tmin, global_ray.tmax)){
            
            pointer --;
            node_index = stack[pointer];
            
            continue;
        }
        
        let child_1 = node.child_1;
        let child_2 = node.child_2;
        
        if(child_1 != BVH_NULL_NODE){
            // Intermediate node
            
            node_index = child_1;
            
            stack[ pointer ] = child_2;
            
            pointer ++;
                       
        }else{
            pointer --;
            node_index = stack[pointer];
            
            // leaf, traverse BLAS
            // child_2 stores the user_data (mesh_id)
            let mesh_id = child_2;
            
            let mesh = instances[mesh_id];
            
            let geometry_id = mesh.geometry;
            
            let local_ray = ray_transform_m4(global_ray, mesh.transform_inverse);
            
            let hit = ray_query_blas_nearest(local_ray, geometry_id, &stack, pointer);
            
            if(hit.t < 0.0){
                // miss
                continue;
            }
            
            let local_hit_position = local_ray.origin + local_ray.direction * hit.t;
            
            let global_hit_position = mesh.transform * vec4(local_hit_position, 1.0);
            
            let distance = distance( global_ray.origin, global_hit_position.xyz / global_hit_position.w );
            
            if(distance >= global_ray.tmax){
                continue;
            }
            
            // found a good hit
            
            global_ray.tmax = distance;
            
            best_hit = hit;
            
            best_hit.t = distance;
            best_hit.instance = mesh_id;
            best_hit.geometry = geometry_id;
        }
        
    }
    
    return best_hit;
}
  `,
    [ha.declaration_chunk, $o, Ox, oh, dx]
  );
w.from(`
fn mat4_extract_scale(input: mat4x4<f32> ) -> vec3<f32>{

    
    let x = input[0].xyz;
    let y = input[1].xyz;
    let z = input[1].xyz;
    
    var out: vec3<f32>;
    
    out.x = sqrt(dot(x,x));
    out.y = sqrt(dot(y,y));
    out.z = sqrt(dot(z,z));
    
    return out;
}    
    `);
const Xz = w.from(`
fn inverse_lerp(a:f32,b:f32,f:f32) -> f32{
    
    let range = b-a;
    let s = f - a;

    return s / range;

}
    `);
w.from(
  `
fn scene_find_least_occluded_direction(postion_ws:vec3<f32>, max_distance: f32) -> vec4<f32>{

    var ray: ${ve.wgsl_ref};
    ray.origin = postion_ws;
    ray.tmax = max_distance;
    
    var best_distance = 0.0;
    var best_direction: vec3<f32>;
    
    const POINT_COUNT = 13;
    
    for(var i=0; i<POINT_COUNT; i++){
       
        let direction = sphere_fibonacci_point(f32(i), POINT_COUNT);
        
        ray.direction = direction;
        
        let hit = ray_query_nearest(ray);
                
        if(hit.t > best_distance){
            best_distance = distance(ray.origin + ray.direction*hit.t, postion_ws);
            best_direction = direction;
        }
    }

    return vec4(best_direction, best_distance);;
}    
    `,
  [ve.declaration_chunk, ah, Dp]
);
const Wz = w.from(
    `
fn refine_probe_placement(
    origin: vec3<f32>,
    nearest_hit: ${fn.wgsl_ref},
    bounds: ${xe.wgsl_ref},
 ) -> vec3<f32> {
    // see if we're too close to the surface
    let offset = nearest_hit.position - origin;
    let d = length(offset);
    
    let bounds_center = (bounds.max + bounds.min) * 0.5;
    let bounds_span = (bounds.max - bounds.min);
    let desired_distance = length(bounds_span*0.35355339059327373); // 0.5 / sqrt(2)
    
    let desired_offset = normalize(offset)*(d - desired_distance);
    
    var best_position = origin;
    
    if(d > desired_distance){
        // easy, hit is too far, let's close in
        best_position = origin + desired_offset; 
    }else{
    
        // let's try to cast a ray away from the nearest surface
        var ray:${ve.wgsl_ref};
        ray.origin = origin;
        ray.direction = nearest_hit.normal;
        ray.tmax = desired_distance;
        
        let hit = ray_query_nearest(ray);
        
        var back_target:vec3<f32>;
        if(hit.t < 0){
            //  free, try move back
            back_target =  origin + desired_offset; 
            
        }else{
            let back_contact = ray.origin + ray.direction * hit.t;
            let back_d = distance(back_contact, origin);
            
            let distance_delta = back_d - d;
          
            var displacement = distance_delta*0.5;
            
            if(displacement > desired_distance){
                displacement = desired_distance;
            }
             
             back_target = origin + ray.direction * distance_delta*0.5;
               
        }
            
        // check if we're in the clear
        let back_hit = scene_point_query_nearest(back_target, desired_distance);
        
        let d2 = distance(back_hit.position, back_target);
        
        if(d2 < d){
            // worse option, keep the original
        
        }else{
            // better, keep new one
            best_position = back_target;
        }
        
    }
    
    return clamp(best_position,bounds.min, bounds.max);
}
    `,
    [ve.declaration_chunk, fn.declaration_chunk, xe.declaration_chunk, Xz]
  ),
  Jz = w.from(
    `
fn scene_point_query_is_inside_geometry(postion_ws: vec3<f32>, max_distance:f32 ) -> bool{
    const POINT_COUNT = 15;
    
    var ray: ${ve.wgsl_ref};
    ray.origin = postion_ws;
    ray.tmax = max_distance;
    
    var direction_balance = 0;
    
    
    for(var i=0; i<POINT_COUNT; i++){
       
        let direction = sphere_fibonacci_point(f32(i), POINT_COUNT);
        
        ray.direction = direction;
        
        let hit = ray_query_nearest(ray);
    
        if(hit.t < 0){
            // miss
            continue;
        }
        
        let geometry = geometries[hit.geometry];
        
        // construct normal
        let triangle = geometry_read_triangle_vertices(geometry, hit.triangle);
        
        let a = f32_array_as_vec3(triangle.a.position);
        let b = f32_array_as_vec3(triangle.b.position);
        let c = f32_array_as_vec3(triangle.c.position);
        
        let normal = compute_triangle_face_normal(a,b,c);
        
        
        if(dot(normal, ray.direction) > 0.0){
            // back-facing
            direction_balance++;
        }
        
    }
    
    if(direction_balance > 5 ){
        return true;
    }else{
        return false;
    }

}
`,
    [ve.declaration_chunk, Dp, qo, nh, ah]
  ),
  Gp = Struct.from({ bounds: xe, resolution: "vec3<u32>" }),
  Vp = Struct.from({ count: "atomic<u32>", data: "array<f32>" }),
  $p = new ResourecGroup();
$p.createGroup().addUniform("settings", Gp).addStorageBuffer("out", Vp, !0);
$p.createGroup()
  .addStorageBuffer("instances", X.from(Xe))
  .addStorageBuffer("tlas", Ro)
  .addStorageBuffer("blas_lookup", X.u32)
  .addStorageBuffer("blas_data", X.from(Mi))
  .addStorageBuffer("geometries", X.from(Ut))
  .addStorageBuffer("geometry_indices", X.u32)
  .addStorageBuffer("geometry_vertices", X.from(qt));
const Zz = w.from(
    `

@compute @workgroup_size(16,16,1)
fn main(
@builtin(global_invocation_id) global_id : vec3<u32>,
){
    if(any(global_id >= settings.resolution) ){
        // too far
        return;
    }
    
    
    let bounds = settings.bounds;
    let bounds_span = bounds.max - bounds.min;
    
    let max_coord_i = settings.resolution - 1u;
    
    let cell_size = bounds_span / vec3<f32>(max_coord_i);
    
    let cell_bounding_sphere_radius = length( cell_size );
    
    let probe_origin = vec3<f32>(global_id) * cell_size + bounds.min;
        
    let hit = scene_point_query_nearest(probe_origin, cell_bounding_sphere_radius*0.5);

    if(hit.primitive == ${_r}){
        // hit nothing, this position is useless
        return;
    }
    
    let to_hit = hit.position - probe_origin; 
    
    if(
        dot(hit.normal, to_hit) > 0  
        && all(global_id > vec3(0)) && all(global_id < max_coord_i) // exclude boundary probes
    ){
        // normal is facing away from the probe, we are near a back surface, skip this
        return;
    }
    
    if(scene_point_query_is_inside_geometry(probe_origin, length(bounds_span))){
        // bad probe
        return;
    }
    
    
    var probe_position = probe_origin;
    
    if(any( abs(to_hit) < cell_size*0.5 )){
        // some geometry is within the cell bounds
    
        // don't allow motion within the entire cell, to prevent overlapping probes and sharp angles between them
        let cell_bounds = ${xe.wgsl_ref}(
            probe_origin - cell_size*0.4,
            probe_origin + cell_size*0.4,
        );
    
        // hit is within this cell
        probe_position = refine_probe_placement(probe_position, hit, cell_bounds);
        
        // check new distance
        let corrected_hit = scene_point_query_nearest(probe_position, cell_bounding_sphere_radius);
        
        let new_to_hit = corrected_hit.position - probe_position;
        
        if(dot(corrected_hit.normal, new_to_hit) > 0){
            // new position is behind closest surface
            return;
        }
        
        let new_distance = length(new_to_hit);
        let old_distance = length(to_hit);
        
        if(old_distance < cell_bounding_sphere_radius * 0.2 && new_distance < old_distance){
            // we got a bad refinement
            return ;
        }
        
        if(new_distance < cell_bounding_sphere_radius * 0.05){
            // probe too close to geometry
            return;
        }
        
        let offset = probe_position - probe_origin;
        
        var penetration_ray: ${ve.wgsl_ref};
        penetration_ray.origin = probe_origin;
        penetration_ray.direction = normalize(offset);
        penetration_ray.tmax = length(offset);
        
        if(ray_query_occluded(penetration_ray)){
            // bad probe, moved through something
            return;
        }
        
        if(scene_point_query_is_inside_geometry(probe_position, length(cell_bounding_sphere_radius))){
            // bad probe
            return;
        }
    }
    
    let probe_index = atomicAdd(&out.count,1);
    
    out.data[probe_index*3] = probe_position.x;
    out.data[probe_index*3 + 1] = probe_position.y;
    out.data[probe_index*3 + 2] = probe_position.z;

}    
`,
    [
      Gp.declaration_chunk,
      Vp.declaration_chunk,
      ve.declaration_chunk,
      Mi.declaration_chunk,
      Ut.declaration_chunk,
      qt.declaration_chunk,
      Xe.declaration_chunk,
      Ro.declaration_chunk,
      q_,
      jz,
      Jz,
      Wz,
      Fp,
    ]
  ),
  t0 = le.from({ resources: $p, body: Zz }),
  Kz = Mr.simplified({
    label: "Probe Placement / initial",
    code: t0.compile(),
    bindings: t0.resources.generateBindingsArray(),
  });
async function Qz({ scene: s, graphics: e, resolution: t = 2 }) {
  await m0(10), e.update(), s.update();
  const r = s.geometries,
    i = new O_("generate probe positions"),
    n = {},
    o = s.scene.instances.bounding_box,
    a = Math.max(o.width, o.height, o.depth);
  o.grow(Math.max(a, 1e-5) * 0.05);
  const c = a / t,
    _ = Math.max(2, Math.round(o.width / c)),
    u = Math.max(2, Math.round(o.height / c)),
    d = Math.max(2, Math.round(o.depth / c)),
    h = new kc(e.device, "LPV position generation"),
    p = i.add("initial point placement", n, (T, z, C) => {
      const U = C.encoder,
        k = U.allocateTransientValueBuffer(
          Gp,
          {
            bounds: { min: [o.x0, o.y0, o.z0], max: [o.x1, o.y1, o.z1] },
            resolution: [_, u, d],
          },
          GPUBufferUsage.UNIFORM
        ),
        N = z.get(T.out),
        M = U.constructComputePass({
          timer: h,
          pipeline: Kz,
          bindings: [
            [{ buffer: k }, { buffer: N }],
            [
              { buffer: s.instance_buffer },
              { buffer: s.tlas.buffer },
              { buffer: r.blas.buffer_metadata },
              { buffer: r.blas.buffer_data },
              { buffer: r.buffer_metadata },
              { buffer: r.buffer_indices },
              { buffer: r.buffer_vertices },
            ],
          ],
        });
      M.dispatchWorkgroups(Math.ceil(_ / 16), Math.ceil(u / 16), d),
        M.end(),
        h.update(U.gpu_encoder);
    }),
    v = je.from(
      t * t * t * Float32Array.BYTES_PER_ELEMENT * 3,
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC
    ),
    f = e.allocator_buffers.get(v),
    m = i.import_resource("out", v, f);
  n.out = p.write(m);
  const g = Ni.create(e);
  g.encodeGraph(i), g.finish(), await h.getResults(), h.destroy();
  const [E] = await Uf({ buffer: f, device: e.device, type: Vp, count: 1 });
  e.allocator_buffers.release(f);
  const y = s.light_probe_volume;
  y.buffer_probes;
  const A = E.count;
  (y.source.positions = E.data.slice(0, A * 3)), y.source.build_mesh();
}
const Fx = w.from(`
fn sh_index(m:i32, l:i32)-> i32{
    
    return l * (l + 1) + m;

}`),
  eC = w.from(`
const SQRT1_2 = ${Math.SQRT1_2};
`),
  tC = w.from(`
fn sh3_rotate_bl(sh:array<f32,9>, rotation:mat3x3<f32>) -> array<f32,9>{

    let r00 = rotation[0][0];
    let r10 = rotation[0][1];
    let r20 = rotation[0][2];

    let r01 = rotation[1][0];
    let r11 = rotation[1][1];
    let r21 = rotation[1][2];

    let r02 = rotation[2][0];
    let r12 = rotation[2][1];
    let r22 = rotation[2][2];

    var result:array <f32,9>;
    
    // band-0 : Constant
    result[0] = sh[0];

    // band-1: Linear
    result[1] = r11 * sh[1] - r12 * sh[2] + r10 * sh[3];
    result[2] = -r21 * sh[1] + r22 * sh[2] - r20 * sh[3];
    result[3] = r01 * sh[1] - r02 * sh[2] + r00 * sh[3];

    // band-2: Quadratic
    let t41 = r01 * r00;
    let t43 = r11 * r10;
    let t48 = r11 * r12;
    let t50 = r01 * r02;
    let t55 = r02 * r02;
    let t57 = r22 * r22;
    let t58 = r12 * r12;
    let t61 = r00 * r02;
    let t63 = r10 * r12;
    let t68 = r10 * r10;
    let t70 = r01 * r01;
    let t72 = r11 * r11;
    let t74 = r00 * r00;
    let t76 = r21 * r21;
    let t78 = r20 * r20;

    const v173 = 0.1732050808e1;
    const v577 = 0.5773502693e0;
    const v115 = 0.1154700539e1;
    const v288 = 0.2886751347e0;
    const v866 = 0.8660254040e0;
    
    var scratch_mat_5x5 : array<f32,25>;

    scratch_mat_5x5[0] = r11 * r00 + r01 * r10;
    scratch_mat_5x5[1] = -r01 * r12 - r11 * r02;
    scratch_mat_5x5[2] = v173 * r02 * r12;
    scratch_mat_5x5[3] = -r10 * r02 - r00 * r12;
    scratch_mat_5x5[4] = r00 * r10 - r01 * r11;
    scratch_mat_5x5[5] = -r11 * r20 - r21 * r10;
    scratch_mat_5x5[6] = r11 * r22 + r21 * r12;
    scratch_mat_5x5[7] = -v173 * r22 * r12;
    scratch_mat_5x5[8] = r20 * r12 + r10 * r22;
    scratch_mat_5x5[9] = -r10 * r20 + r11 * r21;
    scratch_mat_5x5[10] = -v577 * (t41 + t43) + v115 * r21 * r20;
    scratch_mat_5x5[11] = v577 * (t48 + t50) - v115 * r21 * r22;
    scratch_mat_5x5[12] = -0.5 * (t55 + t58) + t57;
    scratch_mat_5x5[13] = v577 * (t61 + t63) - v115 * r20 * r22;
    scratch_mat_5x5[14] = v288 * (t70 - t68 + t72 - t74) - v577 * (t76 - t78);
    scratch_mat_5x5[15] = -r01 * r20 - r21 * r00;
    scratch_mat_5x5[16] = r01 * r22 + r21 * r02;
    scratch_mat_5x5[17] = -v173 * r22 * r02;
    scratch_mat_5x5[18] = r00 * r22 + r20 * r02;
    scratch_mat_5x5[19] = -r00 * r20 + r01 * r21;
    scratch_mat_5x5[20] = t41 - t43;
    scratch_mat_5x5[21] = -t50 + t48;
    scratch_mat_5x5[22] = v866 * (t55 - t58);
    scratch_mat_5x5[23] = t63 - t61;
    scratch_mat_5x5[24] = 0.5 * (t74 - t68 - t70 + t72);

    for (var i = 0; i < 5; i++) {
        let base = i * 5;

        result[4 + i] = scratch_mat_5x5[base + 0] * sh[4]
            + scratch_mat_5x5[base + 1] * sh[5]
            + scratch_mat_5x5[base + 2] * sh[6]
            + scratch_mat_5x5[base + 3] * sh[7]
            + scratch_mat_5x5[base + 4] * sh[8]
        ;
    }

    return result;
}
`),
  rC = w.from(`
    const SH3_COEFFICIENTS = array<f32,9>(
        0.28209479177387814,    
        
        -0.4886025119029199,   
        0.4886025119029199,     
        -0.4886025119029199,    
        
        1.0925484305920792,    
        -1.0925484305920792,    
        0.31539156525252005,   
        -1.0925484305920792,   
        0.5462742152960396   
    ); 
    `),
  iC = w.from(`
fn func_(x:f32, a:f32, b:f32, c:f32, d:f32)->f32{
    return (a * x * x + b * x + c) + (d * x * sqrt(1.0 - x * x));
}
`),
  sC = w.from(`
fn increment_(x:f32, a:f32, b:f32, d:f32)->f32{
    return (x * x - 1.0) * (d - 2.0 * d * x * x + (b + 2.0 * a * x) * sqrt(1.0 - x * x))
        / (3.0 * d * x - 2.0 * d * x * x * x - 2.0 * a * pow(1 - x * x, 1.5));
}
`),
  nC = w.from(
    `
fn sh3_min(input_sh3:array<f32, 9>) -> f32{

    let dir = normalize(vec3(
        -input_sh3[3],
        -input_sh3[1],
         input_sh3[2]
    ));

    let z_axis = -dir;
    
    let x_axis = normalize( cross( z_axis, vec3(0.0, 1.0, 0.0)));

    let y_axis = cross( x_axis, z_axis);

    let M = mat3x3(
        x_axis,
        y_axis,
        dir
    );

    let f = sh3_rotate_bl(input_sh3, M);
    // here we're guaranteed to have normalize(float3{ -f[3], -f[1], f[2] }) == { 0, 0, 1 }


    // Find the min for |m| = 2
    // ------------------------
    //
    // Peter-Pike Sloan shows that the minimum can be expressed as a function
    // of z such as:  m2min = -m2max * (1 - z^2) =  m2max * z^2 - m2max
    //      with m2max = A[8] * std::sqrt(f[8] * f[8] + f[4] * f[4]);
    // We can therefore include this in the ZH min computation (which is function of z^2 as well)
    let m2max = SH3_COEFFICIENTS[8] * sqrt(f[8] * f[8] + f[4] * f[4]);

    // Find the min of the zonal harmonics
    // -----------------------------------
    //
    // This comes from minimizing the function:
    //      ZH(z) = (A[0] * f[0])
    //            + (A[2] * f[2]) * z
    //            + (A[6] * f[6]) * (3 * s.z * s.z - 1)
    //
    // We do that by finding where it's derivative d/dz is zero:
    //      dZH(z)/dz = a * z^2 + b * z + c
    //      which is zero for z = -b / 2 * a
    //
    // We also needs to check that -1 < z < 1, otherwise the min is either in z = -1 or 1
    //
    let a = 3 * SH3_COEFFICIENTS[6] * f[6] + m2max;
    let b = SH3_COEFFICIENTS[2] * f[2];
    let c = SH3_COEFFICIENTS[0] * f[0] - SH3_COEFFICIENTS[6] * f[6] - m2max;

    let zmin = -b / (2.0 * a);
    let m0min_z = a * zmin * zmin + b * zmin + c;
    let m0min_b = min(a + b + c, a - b + c);

    var m0min:f32;
    
    if(a > 0 && zmin >= -1 && zmin <= 1){
        m0min= m0min_z ;
    } else{
        m0min= m0min_b;
    }

    // Find the min for l = 2, |m| = 1
    // -------------------------------
    //
    // Note l = 1, |m| = 1 is guaranteed to be 0 because of the rotation step
    //
    // The function considered is:
    //        Y(x, y, z) = A[5] * f[5] * s.y * s.z
    //                   + A[7] * f[7] * s.z * s.x
    let d = SH3_COEFFICIENTS[4] * sqrt(f[5] * f[5] + f[7] * f[7]);

    // the |m|=1 function is minimal in -0.5 -- use that to skip the Newton's loop when possible
    var minimum = m0min - 0.5 * d;

    if (minimum < 0) {
        // We could be negative, to find the minimum we will use Newton's method
        // See https://en.wikipedia.org/wiki/Newton%27s_method_in_optimization


        var dz:f32;
        var z = -SQRT1_2;   // we start guessing at the min of |m|=1 function
        
        const NEWTON_SOLVER_STEP_LIMIT = 16;
        
        for(var iteration=0; iteration < NEWTON_SOLVER_STEP_LIMIT; iteration++){
        
            minimum = func_(z, a, b, c, d); // evaluate our function
            dz = increment_(z, a, b, d); // refine our guess by this amount
            z = z - dz;
            
            // exit if z goes out of range, or if we have reached enough precision
            
            if(abs(z) > 1.0 || abs(dz) <= 1e-5){
                break;
            }
            
        }

        if (abs(z) > 1) {
            // z was out of range
            minimum = min(func_(1, a, b, c, d), func_(-1, a, b, c, d));
        }
    }

    return minimum;
}
`,
    [eC, rC, tC, iC, sC]
  ),
  Dx = w.from(
    `
fn sinc_window(l: f32, w:f32)-> f32{
   if (l == 0) {
       return 1.0;
   } else if (l >= w) {
       return 0.0;
   }
   
   // we use a sinc window scaled to the desired window size in bands units
   // a sinc window only has zonal harmonics
   var x = (PI * l) / w;

   x = sin(x) / x;

   // The convolution of a SH function f and a ZH function h is just the product of both
   // scaled by 1 / K(0,l) -- the window coefficients include this scale factor.

   // Taking the window to power N is equivalent to applying the filter N times
   return pow(x, 4);
}
`,
    [Jt]
  ),
  oC = w.from(
    `
fn sh3_windowing( f:array<f32, 9>, cutoff:f32 ) -> array<f32, 9>{

    // scale each band individually
    let w0 = 1.0; //first band is always unchanged
    let w1 = sinc_window(1, cutoff);
    let w2 = sinc_window(2, cutoff);
    
    return array<f32,9>(
        // band 0
        f[0] * w0,
        // band 1
        f[1] * w1,
        f[2] * w1,
        f[3] * w1,
        // band 2
        f[4] * w2,
        f[5] * w2,
        f[6] * w2,
        f[7] * w2,
        f[8] * w2,
    );
}
`,
    [Dx, Fx]
  ),
  aC = w.from(`
fn sh3_color_split_channels(input: array<f32,27>) -> array< array<f32,9>, 3 >{
    var out:array<array<f32,9>,3>;
    
    for(var i = 0; i<9; i++){
        
        for(var channel = 0; channel < 3; channel++){
       
            out[channel][i] = input[ i * 3 + channel ];
        
        }
        
    }
    
    return out;
}
    `),
  cC = w.from(`
fn sh3_color_combine_channels( input : array< array<f32,9>, 3 > ) -> array< f32, 27 >{
    var out:array<f32,27>;
    
    const channel_count = 3;
    
    for(var i = 0; i<9; i++){
        
        for(var channel = 0; channel < channel_count; channel++){
       
            out[ i * channel_count + channel ] = input[channel][i];
        
        }
        
    }
    
    return out;
}
    `),
  lC = w.from(
    `
fn sh3_color_dering_optimize_positive(input: array<f32,27>)-> array<f32, 27>{
    const num_bands = 3;
    const channel_count = 3;
    
    // more steps = better fit, but of course it's slower
    const BINARY_SEARCH_STEPS = 16;
    
    // start at a large band
    var cutoff = f32( num_bands * 6 + 1);
    
    // split channels
    let input_channeled = sh3_color_split_channels(input);
        
    for(var channel=0; channel < channel_count; channel++){
        
        // find a cut-off band that works
        var left = f32(num_bands);
        var right = cutoff;
        
        var sh = input_channeled[channel];

        for (var i = 0; i < BINARY_SEARCH_STEPS && (left + 0.1) < right; i++) {

            let middle = 0.5 * (left + right);

            let windowed = sh3_windowing(input_channeled[channel], middle);

            if (sh3_min(windowed) < 0.0) {
                right = middle;
            } else {
                left = middle;
            }

        }

        // record minimum cutoff
        cutoff = min(cutoff, left);
        
    }
    
    // copy input
    var output:array<array<f32,9>,3>;
    
    for(var channel = 0; channel< 3; channel++){
        output[channel] = sh3_windowing(input_channeled[channel], cutoff);
    }
    
    
    return sh3_color_combine_channels(output);
}
`,
    [Fx, Dx, oC, nC, aC, cC]
  ),
  r0 = X.from(fs, Math.floor(65536 / Wt(16, fs.size))),
  Gx = w.from(
    `
fn get_biased_normal_sample(jitter: vec2<f32>, n:vec3<f32>, power:f32) -> vec3<f32>{
    
    let direction = uniform_sample_cone(jitter, power);
    
    let tbn = build_orthonormal_matrix_n(n);
    
    return normalize( tbn * direction );
    
}
`,
    [Jt, Zd, o2]
  ),
  Vx = w.from(`
fn offset_ray(p: vec3<f32>, n:vec3<f32>) -> vec3<f32>{
    const origin = 1.0f / 32.0f;
    const float_scale = 1.0f / 65536.0f;
    const int_scale = 256.0f;

    var of_i = vec3<i32>(
        i32(int_scale * n.x),
        i32(int_scale * n.y),
        i32(int_scale * n.z)
    );
    
    if(p.x < 0){
        of_i.x = -of_i.x;
    }
    if(p.y < 0){
        of_i.y = -of_i.y;
    }
    if(p.z < 0){
        of_i.z = -of_i.z;
    }

    let p_i = vec3<f32>(
        bitcast<f32>(bitcast<i32>(p.x) + of_i.x ),
        bitcast<f32>(bitcast<i32>(p.y) + of_i.y ),
        bitcast<f32>(bitcast<i32>(p.z) + of_i.z )
    );
    
    var result = p_i;
    
    if(abs(p.x) < origin){
        result.x = p.x + float_scale * n.x;
    }
    
    if(abs(p.y) < origin){
        result.y = p.y + float_scale * n.y;
    }
    
    if(abs(p.z) < origin){
        result.z = p.z + float_scale * n.z;
    }

    return result;
}
`);
w.from(`    
const blue_noise_in_disk = array<vec2<f32>,64>(
    vec2(0.478712,0.875764),
    vec2(-0.337956,-0.793959),
    vec2(-0.955259,-0.028164),
    vec2(0.864527,0.325689),
    vec2(0.209342,-0.395657),
    vec2(-0.106779,0.672585),
    vec2(0.156213,0.235113),
    vec2(-0.413644,-0.082856),
    vec2(-0.415667,0.323909),
    vec2(0.141896,-0.939980),
    vec2(0.954932,-0.182516),
    vec2(-0.766184,0.410799),
    vec2(-0.434912,-0.458845),
    vec2(0.415242,-0.078724),
    vec2(0.728335,-0.491777),
    vec2(-0.058086,-0.066401),
    vec2(0.202990,0.686837),
    vec2(-0.808362,-0.556402),
    vec2(0.507386,-0.640839),
    vec2(-0.723494,-0.229240),
    vec2(0.489740,0.317826),
    vec2(-0.622663,0.765301),
    vec2(-0.010640,0.929347),
    vec2(0.663146,0.647618),
    vec2(-0.096674,-0.413835),
    vec2(0.525945,-0.321063),
    vec2(-0.122533,0.366019),
    vec2(0.195235,-0.687983),
    vec2(-0.563203,0.098748),
    vec2(0.418563,0.561335),
    vec2(-0.378595,0.800367),
    vec2(0.826922,0.001024),
    vec2(-0.085372,-0.766651),
    vec2(-0.921920,0.183673),
    vec2(-0.590008,-0.721799),
    vec2(0.167751,-0.164393),
    vec2(0.032961,-0.562530),
    vec2(0.632900,-0.107059),
    vec2(-0.464080,0.569669),
    vec2(-0.173676,-0.958758),
    vec2(-0.242648,-0.234303),
    vec2(-0.275362,0.157163),
    vec2(0.382295,-0.795131),
    vec2(0.562955,0.115562),
    vec2(0.190586,0.470121),
    vec2(0.770764,-0.297576),
    vec2(0.237281,0.931050),
    vec2(-0.666642,-0.455871),
    vec2(-0.905649,-0.298379),
    vec2(0.339520,0.157829),
    vec2(0.701438,-0.704100),
    vec2(-0.062758,0.160346),
    vec2(-0.220674,0.957141),
    vec2(0.642692,0.432706),
    vec2(-0.773390,-0.015272),
    vec2(-0.671467,0.246880),
    vec2(0.158051,0.062859),
    vec2(0.806009,0.527232),
    vec2(-0.057620,-0.247071),
    vec2(0.333436,-0.516710),
    vec2(-0.550658,-0.315773),
    vec2(-0.652078,0.589846),
    vec2(0.008818,0.530556),
    vec2(-0.210004,0.519896) 
);
    `);
w.from(`
fn hash23(p3:vec3<f32>) -> vec2<f32>
{
    let a = fract(p3 * vec3(.1031, .1030, .0973));
    let b = a + dot(a, a.yzx+33.33);
    return fract((b.xx+b.yz)*b.zy);
}
`);
const fa = Struct.from({
    distance: "f32",
    direction: "vec3<f32>",
    pdf: "f32",
    emission: "vec3<f32>",
    light_type: "u32",
  }),
  _C = w.from(
    `
fn sample_light_directional( light: ${ms.wgsl_ref}, position: vec3<f32>, random: vec2<f32> ) -> ${fa.wgsl_ref}{
    let theta = random.x * PI * 2.0;
    let radius = fast_sqrt(random.y);

    let cosTheta = cos(theta);
    let sinTheta = sin(theta);
    
    var diskPoint = vec2( cosTheta , sinTheta ) * light.disk_radius * radius;    
    
    let tbn = build_orthonormal_matrix_n(-light.direction);
    
    // calculate the normalized vector to the random point on the disk
    let shadow_ray_dir = normalize(tbn[2] + diskPoint.x * tbn[0] + diskPoint.y * tbn[1]);
    
    var result: ${fa.wgsl_ref};
    
    result.distance = F32_MAX;
    result.direction = shadow_ray_dir;
    result.pdf = 1.0;
    result.emission = light.color;
    result.light_type = ${gc.Directional};
    
    return result;
}
    `,
    [fa.declaration_chunk, Zd, Gd, ti]
  ),
  $x = w.from(
    `
fn sample_light_record(index: u32, position: vec3<f32>, random:vec2<f32>) -> ${fa.wgsl_ref}{
    let address = u32(index*${Ao});
    let light_type = u32(light_data[address]);
    
    var record: ${fa.wgsl_ref};
    
    if(light_type == ${gc.Directional}){
        
        let light = light_read_record_directional( address + 1 );
        record = sample_light_directional(light, position, random);        
        
    } 
    
    return record;
}
`,
    [fa.declaration_chunk, hp, _C]
  ),
  uC = w.from(
    `
fn ray_sample_light(position: vec3<f32>, normal:vec3<f32>, noise: vec2<f32>  ) -> vec3<f32> {            
    var out = vec3(0.0);
    
    for (var i = 0u; i < light_metadata.count; i++) {
            
        let record = sample_light_record(i, position, noise);
        
        let dotNL = dot( normal , record.direction );
        
        if(dotNL <= 0.0){
            // surface is directed away from the light 
            continue;
        }
        
        var _ray: ${ve.wgsl_ref};
        
        _ray.origin = position;
        _ray.direction = record.direction;
        _ray.tmax = record.distance;
        
        if(ray_query_occluded(_ray)){
            continue;
        }
        
        out += dotNL * record.emission;
    }

    return out;
}
`,
    [ti, Jt, ve.declaration_chunk, Fp, $x]
  ),
  qx = w.from(`
    var<private> rnd_state : u32 = 2891336453u;
    `),
  dC = w.from(
    `
fn random_uint() -> u32{
    
  let state = rnd_state * 747796405u + 2891336453u;
  let word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  
  rnd_state = (word >> 22u) ^ word;
  
  return rnd_state;
}
    `,
    [qx]
  ),
  Hx = w.from(
    `
fn random() -> f32{

    const divisor_rcp = 1.0 / f32(0xffffffff);
    
    return f32(random_uint()) * divisor_rcp;

}
    `,
    [dC]
  ),
  hC = w.from(`
fn interpolate_attribute_2f32(v0:vec2<f32>,v1:vec2<f32>,v2:vec2<f32>, coordinate:vec3<f32>)->vec2<f32>{

    return vec2<f32>(
        v0[0] * coordinate.x + v1[0] * coordinate.y + v2[0] * coordinate.z,
        v0[1] * coordinate.x + v1[1] * coordinate.y + v2[1] * coordinate.z,
    );

}`),
  fC = w.from(`
fn indirect_sample_texture(id: u32, uv: vec2<f32>) -> vec4<f32>{
    
    // figure out slot
    let slot_z = id / ${e0};
    
    let in_slice_id = id - slot_z * ${e0};
    
    let slot_y = in_slice_id / ${_n};
    let slot_x = in_slice_id % ${_n}; 
    
    let filtered_uv = fract(uv); 
    
    let pixel_coord = vec2<u32>(slot_x, slot_y) * ${Dt} +  vec2<u32>(filtered_uv * vec2<f32>( ${Dt}, ${Dt} ) - 0.5);
    
    return textureLoad(textures, pixel_coord, slot_z, 0 );
}
    `),
  pC = w.from(
    `
fn sample_material(
    incoming_ray: ${ve.wgsl_ref},
    material:${fs.wgsl_ref},
    triangle:${Eu.wgsl_ref},
    lambda: vec3<f32>,
    instance_transform: mat4x4<f32>, 
    
    out_geometry: ptr<function, ${mr.wgsl_ref}>,
    out_material: ptr<function, ${ei.wgsl_ref}>,
) {

    let vertex_0 = triangle.a;
    let vertex_1 = triangle.b;
    let vertex_2 = triangle.c;
    
    let geometry_vertex_uv_0:vec2<f32> = f32_array_as_vec2(vertex_0.uv);
    let geometry_vertex_uv_1:vec2<f32> = f32_array_as_vec2(vertex_1.uv);
    let geometry_vertex_uv_2:vec2<f32> = f32_array_as_vec2(vertex_2.uv);
    
    // get UV
    let uv = interpolate_attribute_2f32(
        geometry_vertex_uv_0,
        geometry_vertex_uv_1,
        geometry_vertex_uv_2,
        lambda
    );
    
    var texture_sample_diffuse = indirect_sample_texture(material.texture_albedo, uv).rgba;
    
    out_material.opacity = texture_sample_diffuse.a;
    
    var texture_sample_orm = indirect_sample_texture(material.texture_orm, uv).rgba;

    var geometry_normal = interpolate_attribute_3f32( 
        f32_array_as_vec3(vertex_0.normal),
        f32_array_as_vec3(vertex_1.normal),
        f32_array_as_vec3(vertex_2.normal),
        lambda
    );
    
    let geometry_tangent = interpolate_attribute_4f32(
        f32_array_as_vec4(vertex_0.tangent),
        f32_array_as_vec4(vertex_1.tangent),
        f32_array_as_vec4(vertex_2.tangent),
        lambda
    );
    
    var normal_model_matrix = mat3x3(
        instance_transform[0].xyz, 
        instance_transform[1].xyz, 
        instance_transform[2].xyz, 
    );
    
    var world_geometry_normal =  normalize( normal_model_matrix * geometry_normal );
    let world_tangent =  normalize( normal_model_matrix * geometry_tangent.xyz );
    
    if(dot(world_geometry_normal, incoming_ray.direction) > 0.0){
        // hit the back of polygon
        world_geometry_normal = -world_geometry_normal;
    }

    let world_tangent_frame = build_orthonormal_matrix_nt(world_geometry_normal, vec4(world_tangent, geometry_tangent.w));

    var normal_sample = indirect_sample_texture(material.texture_normal, uv).rgb * 2.0 - 1.0;
    
    var world_shading_normal:vec3<f32> = normalize(world_tangent_frame * normal_sample );
    
    let albedo = texture_sample_diffuse.rgb * material.color_albedo;
    let metallic = texture_sample_orm.b * material.metallic_factor;
    
    out_material.roughness = texture_sample_orm.g * material.roughness_factor;
    out_material.diffuse = albedo * (1 - metallic);
    out_material.emissive = indirect_sample_texture(material.texture_emissive, uv).rgb;
    
    out_material.specular = mix(vec3<f32>(0.04), albedo, metallic);
    out_material.specularF90 = 1.0;
    
    let geometric_position = interpolate_attribute_3f32(
        f32_array_as_vec3(vertex_0.position),
        f32_array_as_vec3(vertex_1.position),
        f32_array_as_vec3(vertex_2.position),
        lambda
    );
    
    let world_position = v3_matrix4_project(geometric_position, instance_transform);
    
    out_geometry.shading_normal = world_shading_normal;
    out_geometry.geometric_normal = world_geometry_normal;
    out_geometry.position = world_position;
    
}

    `,
    [fC, hC, yx, wx, xx, ri, Iv, vx, bx, Tn]
  ),
  ef = Struct.from({
    irradiance: "vec3<f32>",
    distance: "f32",
    bounces: "i32",
  }),
  mC = w.from(
    `
fn render_trace_path(inRay:${ve.wgsl_ref}, bounce_limit: i32) -> ${ef.wgsl_ref} {
    var result : ${ef.wgsl_ref};
    result.distance = -1.0;
    
    var irradiance: vec3<f32>;
    
    var color_mask = vec3(1.0);
        
    var ray = inRay;
        
    var bounce_index=0;
        
    for(; bounce_index < bounce_limit; bounce_index++){
           
        let hit = ray_query_nearest(ray);
        
        if(bounce_index == 0){
            result.distance = hit.t;
        }
    
        if(hit.t <= 0.0){
            // didn't hit anything
            
            let scatter = sample_environment_color(tEnvironment, ray.direction);
            
            irradiance += color_mask * scatter;
            
            break;
        }
            
        let mesh = instances[hit.instance];
        
        let material_info = materials[mesh.material];
        
        let geometry = geometries[mesh.geometry];
        
        // TODO pull the triangle data through from the ray query, as we need that during the query anyway
        
        let triangle_info = geometry_read_triangle_vertices(geometry, hit.triangle);
        
        let triangle_lambda = vec3( 1.0 - hit.barycentrics.x - hit.barycentrics.y, hit.barycentrics.x, hit.barycentrics.y);
        
        var shading_material: ${ei.wgsl_ref};
        var shading_geometry: ${mr.wgsl_ref};
        
        sample_material(
            ray, 
            material_info, 
            triangle_info, 
            triangle_lambda, 
            mesh.transform,
            &shading_geometry,
            &shading_material,
        );
        
        // following suggestion from "Triangle Intersection Offset: A Fast and Robust Method for Avoiding Self-Intersection" from Ray-Tracing Gems
        let hit_position = shading_geometry.position;
        
        
        if(
            shading_material.opacity < 1.0
            && random() > shading_material.opacity // roll for transmission
        ){
            // transmission
        
            // TODO accummulate scattering
        
            // hit a transparent surface, let's adjust the ray and resume
            ray.origin = offset_ray(hit_position , ray.direction );
            ray.tmin = 0.0;
            ray.tmax = ray.tmax - hit.t;
            
            continue;
        }
        
        irradiance += color_mask * shading_material.emissive;
        
        color_mask *= shading_material.diffuse;
        
        let incoming_ray_origin = ray.origin;
        let incoming_ray_direction = ray.direction;
        
        // construct normal
        let surface_normal = shading_geometry.shading_normal;
        let reflected_direction = reflect(incoming_ray_direction, surface_normal);
    
        let roughness = shading_material.roughness;
    
        let sample_jitter = vec2(random(), random());
        let new_direction = get_biased_normal_sample(sample_jitter, reflected_direction, 1.0 - roughness  );
        
        
        // small offset to avoid self-occlusion
        ray.origin = offset_ray( hit_position, shading_geometry.geometric_normal );
        ray.direction = new_direction;
        
        ray.tmin = 0.0;
        ray.tmax = F32_MAX;
        
        // get light
        let light_index = u32(random() * f32(light_metadata.count));
        let jitter = vec2(random(), random());
        
        let light_record = sample_light_record(light_index, ray.origin, jitter);
        
        if (dot(light_record.direction, surface_normal) <= 0.0){
            // no light contribution
            continue;
        }
        
        var light_ray: ${ve.wgsl_ref};
        light_ray.origin = ray.origin;
        light_ray.direction = light_record.direction;
        light_ray.tmax = light_record.distance;
        
        if(ray_query_occluded(light_ray)){
            continue;
        }
            
        let V = -incoming_ray_direction;
        let L = light_record.direction;
        let N = surface_normal;
        
        let H = normalize(L + V);
        let dotNV = dot(N, V);
        let dotNL = dot(N, L);
        
        let diffuse_factor = BRDF_Burley_Diffuse(
            dotNV,
            dotNL,
            saturate(dot( L, H )),
            roughness
        );
                
        let light_irradiance = light_record.emission * dotNL;
    
        irradiance += color_mask * ( light_irradiance * diffuse_factor) ;
    }
        
    result.bounces = bounce_index;
    result.irradiance = irradiance;
    
    return result;
}
    
    `,
    [
      ve.declaration_chunk,
      mr.declaration_chunk,
      ei.declaration_chunk,
      ef.declaration_chunk,
      qo,
      $x,
      Fp,
      Dp,
      Ev,
      Gx,
      pC,
      Hx,
      Vx,
      h2,
      up,
    ]
  ),
  gC = w.from(
    `
fn random_initialize(invocation_id : vec3<u32>, seed: vec3<u32>) {

    const A = vec3(
        1741651 * 1009,
        140893  * 1609 * 13,
        6521    * 983  * 7 * 2
    );
    
    let permutation_v3 = (invocation_id * A) ^ seed;
    
    // TODO not sure if this permutation is any good
    rnd_state = (permutation_v3.x) ^ (permutation_v3.y << 1u) ^ (permutation_v3.z << 2);
}
    `,
    [qx]
  ),
  vC = w.from(`
fn sh3_basis_at(direction:vec3<f32>) -> array<f32,9>{
    let x = direction.x;
    let y = direction.y;
    let z = direction.z;

    return array<f32,9>(
    
        // band 0
         0.28209479177387814,
    
        // band 1
        -0.4886025119029199 * y,
         0.4886025119029199 * z,
        -0.4886025119029199 * x,
    
        // band 2
         1.0925484305920792 * x * y,
        -1.0925484305920792 * y * z,
         0.31539156525252005 * (3 * z * z - 1),
        -1.0925484305920792 * x * z,
         0.5462742152960396 * (x * x - y * y)
    
    );
} 
    `);
w.from(`
fn sh3_cosine_convolved_basis_at(direction:vec3<f32>) -> array<f32,9>{
    let x = direction.x;
    let y = direction.y;
    let z = direction.z;

    return array<f32,9>(
    
        // band 0
         0.8862269254527579,
    
        // band 1
        -1.0233267079464885 * y,
         1.0233267079464885 * z,
        -1.0233267079464885 * x,
    
        // band 2
         0.8580855308097834 * x * y,
        -0.8580855308097834 * y * z,
         (0.7431238683011272 * z * z - 0.24770795610037571),
        -0.8580855308097834 * x * z,
         0.4290427654048917 * (x * x - y * y)
    
    );
} 
    `);
const xC = w.from(`
fn sh3_color_accumulate(sh3: ptr<function,array<f32,27>>, color:vec3<f32>, basis: array<f32,9> ){

    for(var i=0; i<9; i++){
    
        let coefficient = basis[i];
        
        let i3 = i*3;
        
        (*sh3)[i3] += color[0] * coefficient;
        (*sh3)[i3+1] += color[1] * coefficient;
        (*sh3)[i3+2] += color[2] * coefficient;
    }
}
`),
  bC = w.from(`
fn sh3_color_add( a: array<f32,27>, b: array<f32,27>  ) -> array<f32,27>{
    var out:array<f32,27>;

    for(var i=0; i<27; i++){
        out[i] = a[i] + b[i];
    }
    
    return out;
}

`),
  yC = w.from(`
fn sh3_color_multiply_scalar( a: array<f32,27>, scalar: f32  ) -> array<f32,27>{
    var out:array<f32,27>;

    for(var i=0; i < 27; i++){
        out[i] = a[i] * scalar;
    }
    
    return out;
}
`),
  wC = w.from(
    `
fn sh3_color_lerp( a: array<f32,27>, b: array<f32,27>, f: f32  ) -> array<f32,27>{
   return sh3_color_add(
            sh3_color_multiply_scalar(a, (1.0 - f) ),
            sh3_color_multiply_scalar(b, f )
   );
}
`,
    [yC, bC]
  ),
  Vf = Struct.from({
    direction: "vec3<f32>",
    seed: "u32",
    initial_probe_index_offset: "u32",
  }),
  un = 256,
  Au = Math.floor(_r / un),
  TC = w.from(
    `
fn decode_and_blend_depth(map: ptr<function,${vc.wgsl_ref}>, hysterisis: f32) {

    const DECODE_SCALE = 1.0/ ${Au};
    
    for(var ix = 0; ix < ${zt}; ix++){
            for(var iy = 0; iy < ${zt}; iy++){
            
                let texel_index = iy * ${zt} + ix;
            
                let index3 = texel_index*3;
                 
                // fetch weight
                let encoded_weight_sum = atomicLoad(&wg_depth[index3]);
            
                if(encoded_weight_sum == 0){
                    continue;
                }
                
                let weight_sum = f32(encoded_weight_sum);
                
                let encoded_moments = vec2(
                    atomicLoad(&wg_depth[index3+1]),
                    atomicLoad(&wg_depth[index3+2])
                );
                
                let moments = vec2<f32>(encoded_moments) / weight_sum;
                
                var blend_factor = hysterisis;
                
                let index2 = texel_index*2;
                
                // depth is 2 x 16float packed into a uint32, unpack
                let history_moments = unpack2x16float(map[texel_index]);
                
                let new_moments = mix(moments, history_moments, hysterisis);
                
                map[texel_index] = pack2x16float(new_moments);
                
            }
    }
    
}
`,
    [vc.declaration_chunk]
  ),
  EC = w.from(
    `
fn accumulate_depth(direction:vec3<f32>, depth: f32){
    let uv = octahedral_encode_normal(direction);
    
    const RESOLUTION_V2F = vec2<f32>(${zt});
    
    let tex_coord = uv * RESOLUTION_V2F - 0.5;
    
    let tex_coord_u = vec2<u32>(tex_coord);
    
    let texel_index = ${zt} * tex_coord_u.y + tex_coord_u.x;
    let texel_address = texel_index*3;
    
    const depth_sharpness = 3.0;
    
    // get direction to texel
    let texel_direction = octahedral_decode_normal( ( vec2<f32>(tex_coord_u) + 0.5) / RESOLUTION_V2F );
    
    let weight = pow( max(0.0, dot(texel_direction, direction)), depth_sharpness );
    
    // quantize depth
    
    let moment1 = u32(round(weight * depth * ${Au}));
    let moment2 = u32(round(weight * depth * depth * ${Au}));
    
    atomicAdd(&wg_depth[texel_address], u32(round(weight * ${Au})));
    atomicAdd(&wg_depth[texel_address+1], moment1);
    atomicAdd(&wg_depth[texel_address+2], moment2);
    
}
`,
    [Do, Vd, Lv]
  ),
  AC = w
    .from(
      `

@group(0) @binding(0) var<uniform> lpv_metadata:${Co.wgsl_ref};
@group(0) @binding(1) var<storage,read_write> lpv_probes:array<${ut.wgsl_ref}>;
@group(0) @binding(2) var<uniform> materials:${r0.wgsl_ref};
@group(0) @binding(3) var textures:texture_2d_array<f32>;
@group(0) @binding(4) var<uniform> bake_settings:${Vf.wgsl_ref};
@group(0) @binding(5) var tEnvironment:texture_2d<f32>;


@group(1) @binding(0) var<storage, read> tlas: ${Ro.wgsl_ref};
@group(1) @binding(1) var<storage, read> blas_lookup: array<u32>;
@group(1) @binding(2) var<storage, read> blas_data: array<${Mi.wgsl_ref}>;
@group(1) @binding(3) var<storage, read> instances: array<${Xe.wgsl_ref}>;
@group(1) @binding(4) var<storage, read> geometries: array<${Ut.wgsl_ref}>;
@group(1) @binding(5) var<storage, read> geometry_indices: array<u32>;
@group(1) @binding(6) var<storage, read> geometry_vertices: array<${
        qt.wgsl_ref
      }>;

@group(2) @binding(0) var<uniform> light_metadata: ${dn.wgsl_ref};
@group(2) @binding(1) var<storage, read> light_data: array <f32>;

var<workgroup> harmonics: array <atomic<i32>, 27>;
var<workgroup> wg_depth: array< atomic<u32>, ${zt * zt * 3}>;

const ACCUMMULATION_LIMIT = ${un * 512};
const RAYS_PER_WORKGROUP = ${un};
const DISCRETIZATION_MULTIPLIER = 16384;

// TODO we can estimate discretization scale from either lighting or previous state 

fn encode_channel_value(value: f32) -> i32 {

    return i32(round(value * DISCRETIZATION_MULTIPLIER));

}

fn decode_channel_value(value: i32) -> f32{

    return f32(value) / f32(DISCRETIZATION_MULTIPLIER);
    
}

fn accummulate_harmonics( direction:vec3<f32>, irradiance:vec3<f32>){
    
    let basis = sh3_basis_at(direction);
    
    for( var i = 0; i < 9; i++ ){
        
        let coefficient = basis[i];
        
        let scaled_irradiance = coefficient * irradiance;
        
        let encoded_irradiance = vec3(
            encode_channel_value(scaled_irradiance.x),
            encode_channel_value(scaled_irradiance.y),
            encode_channel_value(scaled_irradiance.z),
        );
        
        let i3 = i * 3;
        
        for( var j = 0; j < 3; j++ ){
        
            atomicAdd(&harmonics[ i3 + j ], encoded_irradiance[j]);
            
        }
    }

}


fn decode_harmonics() -> array<f32,27>{
    
    var out: array<f32, 27>;
    
    // Area of a unit sphere is (4*PI)
        
    const contribution_multiplier = 4*PI / RAYS_PER_WORKGROUP;
    
    for(var i=0; i<27; i++){
    
        let raw = atomicLoad(&harmonics[i]);
        let decoded = decode_channel_value(raw);
    
        out[i] =  decoded * contribution_multiplier;
    
    }
    
    return out;
    
}

@compute @workgroup_size(1,RAYS_PER_WORKGROUP,1)
fn main(
    @builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(local_invocation_id) local_invocation_id : vec3<u32>,
){
    
    let probe_index = (global_id.x + bake_settings.initial_probe_index_offset) % lpv_metadata.probe_count;

    let ray_index = local_invocation_id.y;
    
    random_initialize(global_id, vec3(probe_index, ray_index, bake_settings.seed));
    
    // get probe
    var probe = lpv_probes[probe_index];
    
    // pick direction
    var ray:Ray;
    
    ray.origin = f32_array_as_vec3(probe.position);
    ray.direction = sphere_fibonacci_point(f32(ray_index), 256.0);
    
    let rotation_matrix = build_orthonormal_matrix_n(bake_settings.direction);
    ray.direction = rotation_matrix*ray.direction;
        
    ray.tmin = 0.0;
    ray.tmax = F32_MAX;
    
    const BOUNCE_LIMIT = 3;
    
    let pt = render_trace_path(ray, BOUNCE_LIMIT);
    
    accummulate_harmonics(ray.direction, pt.irradiance);
        
    if(pt.distance < 0){
        // ray didn't hit anything
        accumulate_depth(ray.direction, 1.0);
    }else{
        accumulate_depth(ray.direction, saturate(pt.distance / probe.distance_max));
    }
    
    // wait until all elements in the workgroup are finished
    workgroupBarrier();
    
    // TODO investigate synchronization issues
    
    if(local_invocation_id.y == 0){
        // reconcile accumulated data and write it back
        
        let traced_harmonics = decode_harmonics();
        
        let sample_count_new = min( ACCUMMULATION_LIMIT, probe.accumulated_samples + RAYS_PER_WORKGROUP);
        
        let lerp_factor = f32(RAYS_PER_WORKGROUP) / f32(sample_count_new); 
        
        probe.accumulated_samples = sample_count_new;
                
        probe.coefficients = sh3_color_lerp( probe.coefficients, traced_harmonics, lerp_factor);
    
        decode_and_blend_depth(&probe.depth, 1.0 - lerp_factor);
    
        // write back
        lpv_probes[probe_index] = probe;
       
    }
}

`,
      [
        r0.declaration_chunk,
        ve.declaration_chunk,
        fs.declaration_chunk,
        Ro.declaration_chunk,
        vn.declaration_chunk,
        ut.declaration_chunk,
        Co.declaration_chunk,
        Mi.declaration_chunk,
        Xe.declaration_chunk,
        Ut.declaration_chunk,
        qt.declaration_chunk,
        dn.declaration_chunk,
        gv.declaration_chunk,
        Vf.declaration_chunk,
        ri,
        ah,
        mC,
        xC,
        wC,
        gC,
        Hx,
        ti,
        Jt,
        Zd,
        EC,
        TC,
        vC,
      ]
    )
    .compile(),
  $f = Struct.from({ start: "u32" }),
  SC = w.from(
    `
    
@group(0) @binding(0) var<uniform> lpv_metadata:${Co.wgsl_ref};
@group(0) @binding(1) var<storage,read_write> lpv_probes:array<${ut.wgsl_ref}>;

@group(1) @binding(0) var<uniform> settings:${$f.wgsl_ref};

@compute @workgroup_size(${un},1,1)
fn main(
    @builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(local_invocation_id) local_invocation_id : vec3<u32>,
){

    let probe_index = (global_id.x + settings.start) % lpv_metadata.probe_count;

    var coefficients = lpv_probes[probe_index].coefficients;
    
    lpv_probes[probe_index].coefficients = sh3_color_dering_optimize_positive(coefficients);
}
    `,
    [Co.declaration_chunk, ut.declaration_chunk, $f.declaration_chunk, lC]
  ),
  zC = Mr.simplified({
    label: "LightProbeVolume / dering",
    code: SC.compile(),
    bindings: [[Ee.uniform, Ee.storage], [Ee.uniform]],
  }),
  CC = Mr.simplified({
    label: "LightProbeVolume / probe render",
    code: AC,
    bindings: [
      [
        Ee.uniform,
        Ee.storage,
        Ee.uniform,
        kr.fromJSON({
          sampleType: "unfilterable-float",
          multisampled: !1,
          viewDimension: "2d-array",
        }),
        Ee.uniform,
        kr.float,
      ],
      [
        Ee.readOnlyStorage,
        Ee.readOnlyStorage,
        Ee.readOnlyStorage,
        Ee.readOnlyStorage,
        Ee.readOnlyStorage,
        Ee.readOnlyStorage,
        Ee.readOnlyStorage,
      ],
      [Ee.uniform, Ee.readOnlyStorage],
    ],
  });
var us, sn, nn, Nd, C_, on, cc, U_, I_, N_, Yr, Po, Hf, Yx;
const fm = class fm {
  constructor(e, t) {
    b(this, Po);
    b(this, us);
    b(this, sn);
    b(this, nn);
    b(this, Nd, 0);
    b(this, C_, My(7));
    b(this, on, 32768);
    b(this, cc, 0);
    b(this, U_, 0);
    b(this, I_, 0);
    b(this, N_);
    b(this, Yr);
    S(this, us, t), S(this, sn, e), S(this, N_, e.materials_resident);
    const r = e.device;
    S(this, Yr, new kc(r, "Probe Render")),
      S(this, nn, new Ht(r)),
      (getProperty(this, nn).descriptor.format = "rgba16float");
  }
  get environment() {
    return getProperty(this, nn);
  }
  set environment(e) {
    S(this, nn, e);
  }
  get material_limit() {
    return getProperty(this, Nd);
  }
  get timer() {
    return getProperty(this, Yr);
  }
  get performance_rays_per_second() {
    return (
      1 /
      ((getProperty(this, Yr).stats.average * 1e-9) / getProperty(this, Po, Yx))
    );
  }
  static fast(e, t) {
    const r = new fm(e, t);
    r.bake(), r.destroy();
  }
  async generate_locations(e = 2) {
    return Qz({
      scene: getProperty(this, us),
      graphics: getProperty(this, sn),
      resolution: e,
    });
  }
  dering(e, t = 0, r = -1) {
    const i = e === false;
    i && (e = Ni.create(getProperty(this, sn), "LPV/dering"));
    const o = getProperty(this, us).light_probe_volume;
    let a = r >= 0 ? r : o.source.probe_count;
    const c = e.allocateTransientValueBuffer(
        $f,
        { start: t },
        GPUBufferUsage.UNIFORM
      ),
      _ = e.constructComputePass({
        pipeline: zC,
        bindings: [
          [{ buffer: o.buffer_metadata }, { buffer: o.buffer_probes }],
          [{ buffer: c }],
        ],
      });
    _.dispatchWorkgroups(a), _.end(), i && e.finish();
  }
  bake() {
    getProperty(this, sn).update();
    const e = getProperty(this, us);
    e.update();
    const t = e.geometries,
      r = e.light_probe_volume,
      i = r.source.probe_count;
    if (i === 0) return;
    r.update();
    const n = getProperty(this, N_);
    n.ensure_scene_materials(getProperty(this, us).scene), n.update();
    const o = Ni.create(getProperty(this, sn), "LPV/bake"),
      a = getProperty(this, Po, Hf);
    if (a <= 0) return;
    const c = new Float32Array(3);
    $z(getProperty(this, C_), c, 0);
    const _ = o.allocateTransientValueBuffer(
        Vf,
        {
          direction: c,
          initial_probe_index_offset: getProperty(this, cc),
          seed: qz(getProperty(this, C_), 0, _r),
        },
        GPUBufferUsage.UNIFORM
      ),
      u = o.constructComputePass({
        pipeline: CC,
        timer: getProperty(this, Yr),
        bindings: [
          [
            { buffer: r.buffer_metadata },
            { buffer: r.buffer_probes },
            { buffer: n.buffer_materials },
            n.textureView,
            { buffer: _ },
            getProperty(this, nn).obtainView(),
          ],
          [
            { buffer: e.tlas.buffer },
            { buffer: t.blas.buffer_metadata },
            { buffer: t.blas.buffer_data },
            { buffer: e.instance_buffer },
            { buffer: t.buffer_metadata },
            { buffer: t.buffer_indices },
            { buffer: t.buffer_vertices },
          ],
          [
            { buffer: e.lights.buffer_metadata },
            { buffer: e.lights.buffer_data },
          ],
        ],
      });
    u.dispatchWorkgroups(a, 1),
      u.end(),
      getProperty(this, Yr).update(o.gpu_encoder),
      o.finish();
    const d = a / i;
    getProperty(this, I_) % 200,
      S(this, U_, getProperty(this, U_) + d),
      S(this, cc, (getProperty(this, cc) + a) % i),
      ze(this, I_)._++;
  }
  autoSetRaysPerProbe(e) {
    if (e > 1e3)
      throw new Error(`Budget(=${e}) too high, must be less than 1000`);
    if (getProperty(this, Yr).event_count < 64) return;
    const t = getProperty(this, Yr).stats.average * 1e-6;
    if (t <= 0) return;
    const r = getProperty(this, Yr).stats.last * 1e-6;
    if (t > e)
      r > e &&
        S(this, on, Math.max(1, Math.floor(getProperty(this, on) * 0.9)));
    else if (e / t > 1.1 && r < e) {
      const i = Math.max(un, Math.floor(getProperty(this, on) * 0.05));
      S(this, on, getProperty(this, on) + i);
    }
  }
  getStatText() {
    const e = new gn(),
      t = getProperty(this, U_) * un;
    return (
      e.add(`Rays per probe: ${rl(Math.floor(t))}`),
      e.add(
        `Average rays/s: ${rl(Math.round(this.performance_rays_per_second))}`
      ),
      e.build()
    );
  }
  destroy() {}
};
(us = new WeakMap()),
  (sn = new WeakMap()),
  (nn = new WeakMap()),
  (Nd = new WeakMap()),
  (C_ = new WeakMap()),
  (on = new WeakMap()),
  (cc = new WeakMap()),
  (U_ = new WeakMap()),
  (I_ = new WeakMap()),
  (N_ = new WeakMap()),
  (Yr = new WeakMap()),
  (Po = new WeakSet()),
  (Hf = function () {
    const e = getProperty(this, us).light_probe_volume.source.probe_count,
      t = Math.ceil(getProperty(this, on) / un);
    return Ye(t, 0, e);
  }),
  (Yx = function () {
    return getProperty(this, Po, Hf) * un;
  });
let qf = fm;
const UC = w.from(`
fn sh3_to_sh2_color(input: array<vec3<f32>,9>) -> array< vec3<f32>, 4 >{
    // just truncate to first 2 harmonics
    return array<vec3<f32>, 4>(
        input[0],
        input[1],
        input[2],
        input[3],
    );
    
}
    `),
  IC = w.from(
    `
fn lpv_mesh_interpolate_probe(weights: vec4<f32>, tet:u32) -> array< vec3<f32>, 9 >{
    let vertices = lpv_mesh_get_vertices(tet);

    let probe0 = lpv_probe_get_data(vertices[0]);
    let probe1 = lpv_probe_get_data(vertices[1]);
    let probe2 = lpv_probe_get_data(vertices[2]);
    let probe3 = lpv_probe_get_data(vertices[3]);

    var result: array<vec3<f32>,9>;

    for (var i = 0; i < 9; i++) {

        result[i] = probe0[i] * weights[0]
        + probe1[i] * weights[1]
        + probe2[i] * weights[2]
        + probe3[i] * weights[3];

    }

    return result;
}
`,
    [Xd, Mv]
  ),
  NC = w.from(`
  fn aabb3_intersects_point(bounds: array<f32, 6>, v: vec3<f32> ) -> bool{
  
    return v.x >= bounds[0]
        && v.x <= bounds[3]
        && v.y >= bounds[1]
        && v.y <= bounds[4]
        && v.z >= bounds[2]
        && v.z <= bounds[5];
        
  }
  `),
  MC = w.from(
    `
fn lpv_mesh_lookup_nearest_cell(position: vec3<f32>, out_weights:ptr<function, vec4<f32>> ) -> u32 {
    var stack = array<u32, 32>();
    
    var node_index = lpv_lookup.root;
    var pointer = 1u;
        
    for(;pointer > 0 && pointer <= 32;){
            
        let node = lpv_lookup.nodes[node_index];
    
        if(!aabb3_intersects_point(node.bounds, position)){
        
            pointer --;
            node_index = stack[pointer];
            
            continue;
        }
        
        let child_1 = node.child_1;
        let child_2 = node.child_2;
        
        if(child_1 != BVH_NULL_NODE){
            // Intermediate node
            
            node_index = child_1;
            
            stack[ pointer ] = child_2;
            
            pointer ++;
                       
        }else{
            pointer --;
            node_index = stack[pointer];
                        
            let tet_id = child_2; // user data
            
            let bary = lpv_mesh_get_barycentric_coordinates(tet_id, position);
            
            if(bary.x >=0 && bary.y >= 0 && bary.z >= 0 && bary.w >= 0){
                // match
                *out_weights = bary;
                
                return  tet_id;
            }
        }
    }
    
    return INVALID_TET;
}
`,
    [xp, $o, NC, Rv]
  ),
  kC = w.from(
    `
fn lpv_sample_sh3_at(position:vec3<f32>) -> array< vec3<f32>, 9 >{
    var barycentric_coordinates: vec4<f32>;
    
    let tet = lpv_mesh_lookup_nearest_cell(position, &barycentric_coordinates);

    if(tet == INVALID_TET){
    
        return array< vec3<f32>, 9 >(
             vec3(0.0),
             vec3(0.0),
             vec3(0.0),
             vec3(0.0),
             vec3(0.0),
             vec3(0.0),
             vec3(0.0),
             vec3(0.0),
             vec3(0.0),
        );
        
    }else{
    
        return lpv_mesh_interpolate_probe(barycentric_coordinates, tet);
    }
}
    `,
    [IC, Pv, MC, xp]
  ),
  RC = w
    .from(
      `
   
@group(0) @binding(0) var gBufferDepth: texture_2d<f32>;
@group(0) @binding(1) var output_texture : texture_storage_2d< r32uint, write >;

@group(1) @binding(0) var<uniform> camera: ${ce.wgsl_ref};

@group(2) @binding(0) var<storage,read> lpv_lookup:${Ro.wgsl_ref};
@group(2) @binding(1) var<storage,read> lpv_probes:array<${ut.wgsl_ref}>;
@group(2) @binding(2) var<storage,read> lpv_mesh:array<${vn.wgsl_ref}>;


@compute @workgroup_size(8,8,1)
fn main(
    @builtin(global_invocation_id) invocation_id : vec3<u32>
){
    let resolution = textureDimensions(output_texture).xy;
    
    let texel_coord = invocation_id.xy;
    
    if(any(texel_coord >= resolution) ){
        // outside of the output texture region
        return;
    }
    
    var uv = ( vec2<f32>(texel_coord) + 0.5 ) / vec2<f32>(resolution);


    let texel_depth = texture_sample_bilinear_uv(gBufferDepth,
        uv,
        0
    ).r;
    
    var tet = 0u;
    
    if(texel_depth == 0){
    
        // outside the scene, skybox, skip
       
    }else{
    
        let position_ncd = vec3(
            uv.x * 2.0 - 1.0,
            1.0 - uv.y * 2.0,
            texel_depth
        );
            
        let position_ws = v3_matrix4_project(position_ncd, camera.view_projection_matrix_inverse );
        
        var barycentric_coordinates: vec4<f32>;
        
        tet = lpv_mesh_lookup_nearest_cell(position_ws, &barycentric_coordinates);
    }
    
    // write position
    textureStore(
        output_texture,
        texel_coord,            
        vec4(tet,0,0,0)
    );

}
`,
      [
        Ro.declaration_chunk,
        ut.declaration_chunk,
        vn.declaration_chunk,
        ce.declaration_chunk,
        Tn,
        G_,
        kC,
        UC,
      ]
    )
    .compile(),
  LC = Mr.simplified({
    label: "Build 2d probe cache",
    code: RC,
    bindings: [
      [
        kr.unfilterableFloat,
        Uc.fromJSON({
          access: "write-only",
          format: "r32uint",
          viewDimension: "2d",
        }),
      ],
      [Ee.uniform],
      [Ee.readOnlyStorage, Ee.readOnlyStorage, Ee.readOnlyStorage],
    ],
  });
Bo();
let hu;
function PC({
  graph: s,
  view: e,
  input_depth: t,
  resolution_scale: r = 1 / 16,
}) {
  const i = {},
    n = [Math.ceil(e.resolution[0] * r), Math.ceil(e.resolution[1] * r)];
  function o(c, _, u) {
    const d = _.get(c.output),
      h = _.get(c.depth),
      p = e.scene;
    hu === false && (hu = new kc(u.graphics.device, "LPV lookup bake")), Bo();
    const v = u.encoder.constructComputePass({
      pipeline: LC,
      timer: hu,
      bindings: [
        [h.obtainView(), d.obtainView()],
        [{ buffer: e.camera.gpu_buffer }],
        [
          { buffer: p.light_probe_volume.buffer_mesh_bvh },
          { buffer: p.light_probe_volume.buffer_probes },
          { buffer: p.light_probe_volume.buffer_mesh },
        ],
      ],
    });
    v.dispatchWorkgroups(Math.ceil(n[0] / 8), Math.ceil(n[1] / 8)),
      v.end(),
      hu.update(u.encoder.gpu_encoder);
  }
  const a = s.add("draw irradiance lookup 2d", i, o);
  return (
    (i.depth = a.read(t)),
    (i.output = a.create(
      "output",
      oe.from({
        resolution: n,
        dimension: "2d",
        format: "r32uint",
        enableMips: !1,
        usage:
          GPUTextureUsage.TEXTURE_BINDING |
          GPUTextureUsage.RENDER_ATTACHMENT |
          GPUTextureUsage.STORAGE_BINDING,
      })
    )),
    i.output
  );
}
const No = {
  NoBlending: 5,
  Normal: 0,
  Add: 1,
  Subtract: 2,
  Multiply: 3,
  MultiplyAdd: 4,
};
function BC(s = 64) {
  const e = new Uint16Array(s * s);
  for (let i = 0; i < s; i++)
    for (let n = 0; n < s; n++) e[i * s + n] = OC(n, i, s);
  const t = mc.fromSampler2D(new et(e, 1, s, s));
  t.color_space = Jr.None;
  const r = pc.from(t);
  return (
    (r.minFilter = ft.Nearest),
    (r.magFilter = ft.Nearest),
    (r.wrapS = Nr.Repeat),
    (r.wrapT = Nr.Repeat),
    r.clearFlag(Pd.GenerateMipMaps),
    r
  );
}
function OC(s, e, t) {
  let r = 0,
    i = s,
    n = e;
  for (let o = t >>> 1; o >= 1; o >>>= 1) {
    const a = (i & o) > 0 ? 1 : 0,
      c = (n & o) > 0 ? 1 : 0;
    if (((r += o * o * ((3 * a) ^ c)), c === 0)) {
      a === 1 && ((i = t - 1 - i), (n = t - 1 - n));
      let _ = i;
      (i = n), (n = _);
    }
  }
  return r;
}
const qp = BC(),
  jx = w.from(`
fn texture_channel_compute_variance_center( ipos: vec2<i32>, input_texture:texture_2d<f32>, channel:i32 ) -> f32
{
    var sum = 0.0f;

    const kernel = array< vec2<f32>, 2 >(
        vec2( 1.0 / 4.0, 1.0 / 8.0 ),
        vec2( 1.0 / 8.0, 1.0 / 16.0 )
    );

    const radius = 1;
    
    for (var yy = -radius; yy <= radius; yy++)
    {
        for (var xx = -radius; xx <= radius; xx++)
        {
            let p = ipos + vec2<i32>(xx, yy);

            let k = kernel[ abs(xx) ][ abs(yy) ];

            sum += textureLoad(input_texture, p, 0)[channel] * k;
            
        }
    }

    return sum;
}
`),
  FC = w.from(`
fn normal_edge_stopping_weight( center_normal:vec3<f32>,  sample_normal:vec3<f32>,  power:f32) -> f32
{
    return pow(clamp(dot(center_normal, sample_normal), 0.0f, 1.0f), power);
}

`),
  DC = w.from(`

fn depth_edge_stopping_weight( center_depth:f32, sample_depth:f32,  phi:f32) -> f32
{
    return exp(-abs(center_depth - sample_depth) / phi);
}


`),
  Xx = w.from(`

fn luma_edge_stopping_weight( center_luma:f32,  sample_luma:f32,  phi:f32)->f32
{
    return abs(center_luma - sample_luma) / phi;
}

`),
  GC = w.from(
    `
fn compute_edge_stopping_weight(
    center_depth:f32,
    sample_depth:f32,
    phi_z:f32,
    center_normal:vec3<f32>,
    sample_normal:vec3<f32>,
    phi_normal:f32,
    center_luma:f32,
    sample_luma:f32,
    phi_luma:f32
) -> f32
{
    let wZ      = depth_edge_stopping_weight(center_depth, sample_depth, phi_z);
    let wNormal = normal_edge_stopping_weight(center_normal, sample_normal, phi_normal);
    let wL      = luma_edge_stopping_weight(center_luma, sample_luma, phi_luma);

    let w = exp( - wL- max(wZ, 0.0)) * wNormal;

    return w;
}
`,
    [DC, FC, Xx]
  ),
  X_ = Struct.from({ step_size: "i32" }),
  Hp = new ResourecGroup();
Hp.createGroup()
  .addTexture("tInput")
  .addTexture("tDepth")
  .addTexture("tNormal", "uint");
Hp.createGroup().addUniform("settings", X_);
const VC = w.from(
    `
const phi_visibility = 10.0;
const phi_normal = 32.0;
const sigma_depth = 1.0;
 
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
) -> @location(0) vec2<f32>{
    let ipos = vec2<i32>(coord.xy);
    let screen_size = vec2<i32>(textureDimensions(tInput));
    
    const eps_variance      = 1e-10;
    const kernel_weights = array<f32,3>( 1.0, 2.0 / 3.0, 1.0 / 6.0 );
    
    // constant samplers to prevent the compiler from generating code which
    // fetches the sampler descriptor from memory for each texture access
    let center_visibility = textureLoad(tInput, ipos, 0).rg;

    // variance for direct and indirect, filtered using 3x3 gaussin blur
    let variance = texture_channel_compute_variance_center( ipos, tInput, 1);

    let std_dev = sqrt(max(0.0, eps_variance + variance));

    let phi_visibility = phi_visibility * std_dev;
    
    // explicitly store/accumulate center pixel with weight 1 to prevent issues
    // with the edge-stopping functions
    var sum_w_visibility = 1.0;
    var sum_visibility   = center_visibility;
    
    
    let current_normal = decode_g_buffer_normal(textureLoad(tNormal, ipos, 0).xy);
    let center_depth   = textureLoad(tDepth, ipos, 0).r;
    
    const offsets = array< vec2<i32>,8>(
        vec2( -1, -1 ),
        vec2(  0, -1 ) ,
        vec2(  1, -1 ), 
        vec2( -1,  0 ), 
        vec2(  1,  0 ), 
        vec2( -1,  1 ),
        vec2(  0,  1 ), 
        vec2(  1,  1 ), 
   );
    
    const num_samples = 8;
    
    for(var i=0; i< num_samples; i++){
        let offset = offsets[i];
        
        let xx = offset.x;
        let yy = offset.y;
        
        let p      = ipos + offset * settings.step_size;
        let inside = all(p >= vec2(0, 0)) && all(p < screen_size);
        
        if(!inside){
            continue;
        }
        
        let kernel = kernel_weights[ abs(xx) ] * kernel_weights[ abs(yy) ];
        
        let sample_visibility = textureLoad(tInput, p, 0).rg;

        let sample_normal = decode_g_buffer_normal(textureLoad(tNormal, p, 0).xy);
        let sample_depth  = textureLoad(tDepth, p, 0).r;

        // compute the edge-stopping functions
        let w = compute_edge_stopping_weight(
            center_depth,
            sample_depth,
            sigma_depth,
            current_normal,
            sample_normal,
            phi_normal,
            center_visibility.r,
            sample_visibility.r,
            phi_visibility
        );

        let w_visibility = w * kernel;

        // alpha channel contains the variance, therefore the weights need to be squared, see paper for the formula
        sum_w_visibility += w_visibility;
        sum_visibility += vec2(w_visibility, w_visibility * w_visibility) * sample_visibility;
    }
    
    // output first two moments
    let out_visibility = sum_visibility / vec2(sum_w_visibility, sum_w_visibility * sum_w_visibility);
    
    return vec2(out_visibility);
}
    `,
    [X_.declaration_chunk, jx, Pi, GC]
  ),
  Yf = le.from({ label: "A-torus Denoise", resources: Hp, body: VC }),
  $C = Mc({
    label: "A-torus Denoise",
    fragment_code: Yf.compile(),
    layout: Yf.resources.generatePipelineLayout(GPUShaderStage.FRAGMENT),
    targets: [{ format: "rg16float" }],
  });
function Wx({
  graph: s,
  input_luma: e = -1,
  input_depth: t = -1,
  input_normal: r = -1,
  iterations: i = 3,
  resolution: n,
}) {
  let o = e;
  for (let c = 0; c < i; c++) {
    let d = function (p, v, f) {
      const m = v.get(p.input_depth),
        g = v.get(p.input_normal),
        E = v.get(p.input_luminance),
        y = v.get(p.output),
        A = f.encoder,
        T = A.allocateTransientValueBuffer(
          X_,
          { step_size: 1 << u },
          GPUBufferUsage.UNIFORM
        ),
        z = A.constructRenderPass({
          pipeline: $C,
          bindings: Yf.resources.generateBindings({
            tInput: E.obtainView(),
            tDepth: m.obtainView(),
            tNormal: g.obtainView(),
            settings: T,
          }),
          colorAttachments: [
            {
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0],
              view: y.obtainView(),
            },
          ],
        });
      z.draw(3), z.end();
    };
    var a = d;
    const _ = {},
      u = c,
      h = s.add(`Spatial Denoise ${c + 1}/${i}`, _, d);
    (_.input_depth = h.read(t)),
      (_.input_normal = h.read(r)),
      (_.input_luminance = h.read(o)),
      (o = h.create(
        "denoised",
        oe.from({
          resolution: n,
          usage:
            GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.RENDER_ATTACHMENT,
          format: "rg16float",
        })
      )),
      (_.output = o);
  }
  return o;
}
function qC(s) {
  return s;
}
const HC = `
@group(0) @binding(0) var tInput: texture_2d<f32>;

@fragment
fn main(
@builtin(position) coord : vec4<f32>,
) -> @location(0) vec4<f32>{

    let v = textureLoad(tInput, vec2<u32>(coord.xy), 0).r;

    return vec4(v,v,v, 1.0);

}
`,
  YC = new pr({ keyHashFunction: qC, keyEqualityFunction: hr });
function jC(s = No.Multiply) {
  const e = Ic.from({
    color: { operation: "add", srcFactor: "dst", dstFactor: "zero" },
  });
  return (
    s === No.Multiply
      ? (e.color.srcFactor = "dst")
      : s === No.NoBlending && (e.color.srcFactor = "one"),
    Mc({
      label: "Composit R as grayscale",
      layout: dr.from([Zr.forFragment("main", [kr.unfilterableFloat])]),
      fragment_code: HC,
      targets: [{ format: "rgba16float", blend: e }],
    })
  );
}
const XC = Ve.from({ mipLevelCount: 1, baseMipLevel: 0 });
function Jx(s, e, t) {
  const r = e.get(s.input),
    i = e.get(s.output),
    n = s.source_mip ?? 0,
    o = YC.getOrCompute(s.blend ?? No.Multiply, jC),
    a = t.encoder.constructRenderPass({
      pipeline: o,
      bindings: [[r.obtainView(Ve.from({ baseMipLevel: n }))]],
      colorAttachments: [
        {
          loadOp: s.blend === No.NoBlending ? "clear" : "load",
          storeOp: "store",
          clearValue: [0, 0, 0, 0],
          view: i.obtainView(XC),
        },
      ],
    });
  a.draw(3), a.end();
}
const WC = w.from(
    `
fn normal_world_to_view( world_normal: vec3<f32>, camera: ${ce.wgsl_ref} ) -> vec3<f32> {

    var view_normal =  camera.view_projection_matrix * vec4(world_normal, 0.0);
    
    // reflect normal in Z plane (parallel to the viewport)
    // related to z-inversion
    view_normal.z = view_normal.z - 1;

    return normalize(view_normal.xyz);

}
`,
    [ce.declaration_chunk]
  ),
  Zx = w.from("const PI_HALF : f32 = 1.5707963267948966192313216916398;"),
  JC = w.from(
    `
fn fast_acos(  x: f32 ) -> f32
{ 
    let y = abs(x); 
    
    var res = -0.156583 * y + PI_HALF; 
    
    res *= fast_sqrt(1.0 - y); 
    
    return select(PI - res, res, x >= 0);
}
`,
    [Gd, Jt, Zx]
  ),
  Yp = w.from(`
fn spatio_temporal_noise_r2_64(
    pixel_coord: vec2<u32>,
    frame_index: u32,
    tNoise: texture_2d<u32>
)->vec2<f32>{
    
    let wrapped_coordinates = vec2(
        pixel_coord.x & 63u,
        pixel_coord.y & 63u,
    );
    
    var index = textureLoad( tNoise , wrapped_coordinates , 0 ).r;
    
    // why 288? tried out a few and that's the best so far (with XE_HILBERT_LEVEL 6U) - but there's probably better :)
    index += 288u * (frame_index & 63u); 
    
    return  fract( 0.5 + f32(index) * vec2(0.75487766624669276005, 0.5698402909980532659114) );
}
`),
  ZC = Struct.from({ frame_index: "u32" }),
  Kx = new ResourecGroup();
Kx.createGroup()
  .addTexture("tDepth")
  .addTexture("tNormal", "uint")
  .addTexture("tNoise", "uint")
  .addUniform("camera", ce)
  .addUniform("settings", ZC);
const Qx = 5,
  eb = 0.615,
  tb = 0.5 * 1.457,
  KC = 0,
  QC = w.from(
    `

// distant samples contribute less
const effectFalloffRange = ${eb};
    
const effectRadius = ${tb};
const scale = 1.0;

const thinOccluderCompensation = ${KC};

// small crevices more important than big surfaces
const sampleDistributionPower = 2.0;

const SLICE_COUNT = 3;

const STEPS = 3;


struct GTAOConstants {
    ndc_to_view_mul : vec2<f32>,
    ndc_to_view_add : vec2<f32>,
}

fn gtao_build_constants() -> GTAOConstants{
    // see https://github.com/GameTechDev/XeGTAO/blob/a5b1686c7ea37788eeb3576b5be47f7c03db532c/Source/Rendering/Shaders/vaASSAOLite_types.h#L186
    let tanHalfFOVY = 1.0 / camera.projection_matrix[1][1];
    let tanHalfFOVX = 1.0 / camera.projection_matrix[0][0];
        
    var res = GTAOConstants();
    
    res.ndc_to_view_mul = vec2( tanHalfFOVX* 2.0, tanHalfFOVY * -2.0 );
    res.ndc_to_view_add = vec2( tanHalfFOVX* -1.0, tanHalfFOVY * 1.0 );
    
    return res;
}

fn getViewPosition( screenPos:vec2<f32>, viewspaceDepth:f32, consts: GTAOConstants) -> vec3<f32>{
   
    // see https://github.com/GameTechDev/XeGTAO/blob/a5b1686c7ea37788eeb3576b5be47f7c03db532c/Source/Rendering/Shaders/XeGTAO.hlsli#L104
    
    return vec3(
        (consts.ndc_to_view_mul * screenPos + consts.ndc_to_view_add) * viewspaceDepth,
        viewspaceDepth
    );
}



		
fn getViewNormal( uv: vec2<u32> ) -> vec3<f32>{
    let world_normal = decode_g_buffer_normal(textureLoad(tNormal, uv, 0).xy);

    return normal_world_to_view(world_normal, camera);
}



@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec2<f32> {
    let constants = gtao_build_constants();

    // fadeout precompute optimisation
    const falloffRange = effectFalloffRange * effectRadius;
    
    const falloffFrom       = effectRadius * (1.0-effectFalloffRange);
    const falloffMul        = -1.0 / ( falloffRange );
    const falloffAdd        = falloffFrom / ( falloffRange ) + 1.0;
    
    let texel_position_u32 = vec2<u32>(coord.xy);

    let ViewportSize = textureDimensions(tDepth);
    let ViewportPixelSize =  1. / vec2<f32>(ViewportSize);

    var depth = textureLoad(tDepth, texel_position_u32, 0).r;
    
            
    var visibility = 0.0;
    
    // Move center pixel slightly towards camera to avoid imprecision artifacts due to depth buffer imprecision; offset depends on depth texture format used
    depth *= 0.99999;     // this is good for FP32 depth buffer
    
    let viewPos = getViewPosition(uv, depth, constants);
    let viewNormal = getViewNormal(texel_position_u32);
    let viewDir = normalize(-viewPos);
            
    let noiseResolution = textureDimensions(tNoise, 0);
    
    let noiseUv = coord.xy / vec2f(noiseResolution);
    
    let noiseTexel = spatio_temporal_noise_r2_64(texel_position_u32, settings.frame_index, tNoise);
        
    let noiseSample = noiseTexel.x;
    let noiseSlice = noiseTexel.y;
    
    // quality settings / tweaks / hacks
    const pixelTooCloseThreshold  = 1.3;      // if the offset is under approx pixel size (pixelTooCloseThreshold), push it out to the minimum distance

    // approx viewspace pixel size at pixCoord; approximation of NDCToViewspace( normalizedScreenPos.xy + consts.ViewportPixelSize.xy, pixCenterPos.z ).xy - pixCenterPos.xy;
    let NDCToViewMul_x_PixelSize = constants.ndc_to_view_mul * ViewportPixelSize;
    let pixelDirRBViewspaceSizeAtCenterZ  = depth * NDCToViewMul_x_PixelSize.x;

    let screenspaceRadius = effectRadius / pixelDirRBViewspaceSizeAtCenterZ;
    
    // fade out for small screen radii 
    visibility += saturate((10 - screenspaceRadius)/100)*0.5;
           
    // this is the min distance to start sampling from to avoid sampling from the center pixel (no useful data obtained from sampling center pixel)
    let minS = pixelTooCloseThreshold / screenspaceRadius;
    
    for (var slice = 0; slice < SLICE_COUNT; slice++) {
        
        let sliceK =  ( f32(slice) + noiseSlice) / f32(SLICE_COUNT);
        
        // lines 5,6 from the paper
        let phi = sliceK * PI;
        
        let cosPhi = cos(phi);
        let sinPhi = sin(phi);
        
        let omega = vec2(cosPhi, -sinPhi) * screenspaceRadius;
        
        
        // line 8 from the paper
        let directionVec = vec3(cosPhi, sinPhi, 0.0);

        // line 9 from the paper
        let orthoDirectionVec = directionVec - dot(directionVec, viewDir) * viewDir;
        
        // line 10 from the paper
        //axisVec is orthogonal to directionVec and viewVec, used to define projectedNormal
        let axisVec = normalize( cross(orthoDirectionVec, viewDir) );
        
        // line 11 from paper
        let projectedNormalVec  = viewNormal - axisVec * dot(viewNormal, axisVec);
        
        // line 13 from the paper
        let signNorm = sign( dot( orthoDirectionVec, projectedNormalVec ) );
            
        // line 14 from the paper
        var projectedNormalVecLength = length(projectedNormalVec);
        let cosNorm = saturate( dot( projectedNormalVec, viewDir ) / projectedNormalVecLength );
            
        // line 15 from the paper
        let n = signNorm * fast_acos(cosNorm);
            
        let lowHorizonCos0   = cos(n + PI_HALF);
        let lowHorizonCos1   = cos(n - PI_HALF);
        
        var horizonCos0 = lowHorizonCos0;
        var horizonCos1 = lowHorizonCos1;
        
        for (var step = 0; step < STEPS; step++) {
            // R1 sequence (http://extremelearning.com.au/unreasonable-effectiveness-of-quasirandom-sequences/)
            let stepBaseNoise = f32(slice + step * STEPS) * 0.6180339887498948482;
            
            let stepNoise = fract(noiseSample + stepBaseNoise); 
            
            // approx line 20 from the paper, with added noise
            var s = ( f32(step) + stepNoise ) / f32(STEPS);
            
            // additional distribution modifier
            s = pow( s, sampleDistributionPower );

            // avoid sampling center pixel
            s += minS;
            
            // approx lines 21-22 from the paper, unrolled
            var sampleOffset = s * omega;
        
            let sampleOffsetLength = length( sampleOffset );

            // note: when sampling, using point_point_point or point_point_linear sampler works, but linear_linear_linear will cause unwanted interpolation between neighbouring depth values on the same MIP level!
            let mipLevel    = u32( clamp( log2( sampleOffsetLength ), 0, ${Qx} ) );

            // Snap to pixel center (more correct direction math, avoids artifacts due to sampling pos not matching depth texel center - messes up slope - but adds other 
            // artifacts due to them being pushed off the slice). Also use full precision for high res cases.
            sampleOffset = round(sampleOffset)* ViewportPixelSize;

            let sampleScreenPos0 = uv + sampleOffset;
            let SZ0 = texture_sample_bilinear_uv(tDepth, sampleScreenPos0, mipLevel).x;
            let samplePos0  = getViewPosition(sampleScreenPos0, SZ0, constants);
            
            let sampleScreenPos1 = uv - sampleOffset;
            let SZ1 = texture_sample_bilinear_uv(tDepth, sampleScreenPos1, mipLevel).x;
            let samplePos1 = getViewPosition(sampleScreenPos1, SZ1, constants);
            
            let sampleDelta0     = (samplePos0 - viewPos); // using lpfloat for sampleDelta causes precision issues
            let sampleDelta1     = (samplePos1 - viewPos); // using lpfloat for sampleDelta causes precision issues
            let sampleDist0     = length( sampleDelta0 );
            let sampleDist1     = length( sampleDelta1 );
            
            // approx lines 23, 24 from the paper, unrolled
            let sampleHorizonVec0 = (sampleDelta0 / sampleDist0);
            let sampleHorizonVec1 = (sampleDelta1 / sampleDist1);
                
            
//            let falloffBase0    = length( vec3(sampleDelta0.x, sampleDelta0.y, sampleDelta0.z * (1.0 + thinOccluderCompensation) ) );
//            let falloffBase1    = length( vec3(sampleDelta1.x, sampleDelta1.y, sampleDelta1.z * (1.0 + thinOccluderCompensation) ) );
//            let weight0         = saturate( falloffBase0 * falloffMul + falloffAdd );
//            let weight1         = saturate( falloffBase1 * falloffMul + falloffAdd );

            let weight0         = saturate( sampleDist0 * falloffMul + falloffAdd );
            let weight1         = saturate( sampleDist1 * falloffMul + falloffAdd );
            
            // sample horizon cos
            var shc0 = dot(sampleHorizonVec0, viewDir);
            var shc1 = dot(sampleHorizonVec1, viewDir);
            
            // discard unwanted samples
            shc0 = mix( lowHorizonCos0, shc0, weight0 ); // this would be more correct but too expensive: cos(lerp( acos(lowHorizonCos0), acos(shc0), weight0 ));
            shc1 = mix( lowHorizonCos1, shc1, weight1 ); // this would be more correct but too expensive: cos(lerp( acos(lowHorizonCos1), acos(shc1), weight1 ));
            
            // this is a version where thicknessHeuristic is completely disabled
            horizonCos0 = max( horizonCos0, shc0 );
            horizonCos1 = max( horizonCos1, shc1 );

        }
        
        // I can't figure out the slight overdarkening on high slopes, so I'm adding this fudge - in the training set, 0.05 is close (PSNR 21.34) to disabled (PSNR 21.45)
        projectedNormalVecLength = mix( projectedNormalVecLength, 1, 0.05 );
            
        // line ~27, unrolled
        let h0 = -fast_acos(horizonCos1);
        let h1 = fast_acos(horizonCos0);
        
        let sin_n = sin(n);
        
        let iarc0 = (cosNorm + 2.0 * h0 * sin_n - cos(2.0 * h0 - n) ) * 0.25;
        let iarc1 = (cosNorm + 2.0 * h1 * sin_n - cos(2.0 * h1 - n) ) * 0.25;
        
        let localVisibility = projectedNormalVecLength * ( iarc0 + iarc1 );
            
        visibility += localVisibility;
    }
    
    visibility *= 1.0 / f32(SLICE_COUNT);
    
    visibility = pow(visibility, scale);
    
    // disallow total occlusion (which wouldn't make any sense anyhow since pixel is visible but also helps with packing bent normals)
    visibility = max(0.03, visibility);		

    return vec2(visibility, visibility * visibility);
}
`,
    [G_, Jt, Zx, Pi, Yp, Gd, JC, WC]
  ),
  e4 = new Je({
    descriptor: le.from({ label: "GTAO", resources: Kx, body: QC }),
    targets: [
      {
        format: "rg16float",
        blend: Ic.from({
          color: { operation: "add", srcFactor: "one", dstFactor: "zero" },
        }),
      },
    ],
  });
var vo, lc;
class t4 {
  constructor(e) {
    b(this, vo, []);
    b(this, lc);
    S(this, lc, new kc(e.device, "GTAO")),
      (getProperty(this, lc).stats.history_length = 1024);
    for (let t = 0; t < 2; t++) {
      const r = new Ht(e.device);
      (r.descriptor.format = "rg16float"),
        (r.descriptor.usage =
          GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.RENDER_ATTACHMENT),
        (getProperty(this, vo)[t] = r);
    }
  }
  resize(e, t) {
    getProperty(this, vo).forEach((r) => r.resize(e, t));
  }
  graph_pass({
    graph: e,
    camera: t,
    input_depth: r,
    input_depth_previous: i,
    input_normal: n,
    input_velocity: o,
    input_occlusion: a,
    frame_index: c,
    clear_target: _ = !1,
    output: u,
    resolution: d,
  }) {
    this.resize(...d);
    const h = getProperty(this, vo)[c % 2],
      p = getProperty(this, vo)[(c + 1) % 2];
    e.import_resource("ao_history", oe.fromTexture(h.gpu_texture), h),
      e.import_resource("ao_output", oe.fromTexture(p.gpu_texture), p);
    let f = ht({
      graph: e,
      shader: e4,
      output_resolution: d,
      inputs: {
        tDepth: r,
        tNormal: n,
        tNoise: qp,
        camera: t,
        settings: { frame_index: c },
      },
      timer: getProperty(this, lc),
    });
    f = Wx({
      graph: e,
      input_luma: f,
      input_depth: r,
      input_normal: n,
      resolution: d,
    });
    const m = { blend: No.Multiply },
      g = e.add("Composit", m, Jx);
    return (m.input = g.read(f)), (m.output = g.write(u)), m.output;
  }
}
(vo = new WeakMap()), (lc = new WeakMap());
const Su = Object.freeze(Pc.from({ magFilter: "linear" })),
  rb = new ResourecGroup();
rb.createGroup().addTexture("tInput");
const r4 = w.from(`
@fragment
fn main(
    @builtin(position) coord : vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) f32 {
    return textureLoad(tInput, vec2<i32>(coord.xy), 0).r;
}
    `),
  i4 = new Je({
    descriptor: le.from({ label: "Copy r32", resources: rb, body: r4 }),
    targets: [{ format: "r32float" }],
  }),
  ib = new ResourecGroup();
ib.createGroup()
  .addUniform("output_resolution", "vec2<u32>")
  .addTexture("tInput");
const s4 = w.from(`
@fragment
fn main(
    @builtin(position) coord : vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) f32 {
    
    
    let target_coord_i = vec2<u32>(coord.xy);
                
    let source_resolution = textureDimensions(tInput);
    
    let scale = vec2f(source_resolution) / vec2f(output_resolution);
    
    let scale_i = vec2u(ceil(scale));
    
    let source_coord_i = target_coord_i * 2;
                        
    // compute bounds in source texture
    let source_bounds_max =  min(
        source_coord_i + scale_i,
        source_resolution - 1
    );
    
    let source_bounds_min = source_coord_i;
    
    var max_value = 0.0;
    
    for(var y = source_bounds_min.y ; y <= source_bounds_max.y ; y++){
        for(var x = source_bounds_min.x ; x<= source_bounds_max.x ; x++){
        
            let depth = textureLoad(tInput, vec2u(x,y), 0).r;
            
            max_value = max(depth, max_value);
        }
    }
    
    return max_value;
}
    `),
  n4 = new Je({
    descriptor: le.from({
      label: "Depth Reduce / max",
      body: s4,
      resources: ib,
    }),
    targets: [{ format: "r32float" }],
  });
function o4({ graph: s, resolution: e, input_depth: t = -1 }) {
  function r(o, a, c) {
    const _ = a.get(o.input),
      u = a.get(o.output),
      d = c.encoder;
    let h = u.obtainView(Ve.from({ baseMipLevel: 0, mipLevelCount: 1 }));
    i4.draw({
      encoder: d,
      bindings: { tInput: _.obtainView() },
      colorAttachments: [{ view: h, storeOp: "store", loadOp: "clear" }],
    });
    const p = u.descriptor.mipLevelCount;
    for (let v = 1; v < p; v++) {
      const f = new Uint32Array([e[0] >>> v, e[1] >>> v]),
        m = d.allocateTransientBuffer(f.buffer),
        g = u.obtainView(Ve.from({ baseMipLevel: v, mipLevelCount: 1 }));
      n4.draw({
        encoder: d,
        bindings: { tInput: h, output_resolution: m },
        colorAttachments: [{ view: g, storeOp: "store", loadOp: "clear" }],
      }),
        (h = g);
    }
  }
  const i = {},
    n = s.add("build depth max pyramid", i, r);
  return (
    (i.input = n.read(t)),
    (i.output = n.create(
      "depth max",
      oe.from({
        resolution: e,
        dimension: "2d",
        usage:
          GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        format: "r32float",
        enableMips: !0,
      })
    )),
    i.output
  );
}
const a4 = w.from(`
fn env_brdf_approx( specularColor:vec3<f32>,  roughness:f32,  NoV: f32) -> vec3<f32>{
    // Approximate version, base for pre integrated version
    const c0 = vec4<f32>(-1, -0.0275, -0.572, 0.022);
    const c1 = vec4<f32>(1, 0.0425, 1.04, -0.04);
    
    let r = roughness * c0 + c1;
    let a004 = min(r.x * r.x, exp2(-9.28 * NoV)) * r.x + r.y;
    let AB = vec2(-1.04, 1.04) * a004 + r.zw;
    
    return specularColor * AB.x + saturate(50.0 * specularColor.g) * AB.y;
}
    `),
  c4 = w.from(`
fn metalness_to_specular_color(metalness:f32, base_color: vec3<f32>) -> vec3<f32>{
    const dielectric_specular_color = vec3(0.04);
    
    return mix(dielectric_specular_color, base_color, metalness);
}
`),
  sb = new ResourecGroup();
sb.createGroup()
  .addTexture("tColor")
  .addTexture("tDepth")
  .addTexture("tNormal", "uint")
  .addTexture("tReflection")
  .addTexture("tPBR")
  .addUniform("camera", ce);
const l4 = w.from(
    `
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    let coord_i = vec2<u32>(coord.xy);

    let depth = textureLoad(tDepth, coord_i, 0).r;
    let scene_color = textureLoad(tColor, coord_i, 0).rgb;
    let reflection_color = textureLoad(tReflection, coord_i, 0).rgb;
    let normal_ws = decode_g_buffer_normal(textureLoad(tNormal, coord_i, 0).xy);
    
    let position_ws = world_position_from_depth(uv, depth, camera.view_projection_matrix_inverse);
    
    //
    let camera_position = matrix4_extract_position(camera.transform);
    let view_vector = normalize(camera_position - position_ws);
    let NoV = saturate(dot(normal_ws, view_vector));
    
    let pbr = textureLoad(
        tPBR,
        coord_i,
        0
    );
    
    let roughness = pbr.w;
    let metalness = pbr.z;
    
    let specular_color = metalness_to_specular_color(metalness, vec3(1.0));
    
    let out_color = scene_color + reflection_color * env_brdf_approx(specular_color, roughness*roughness, NoV);
     
    
    return vec4(out_color, 1.0);
}    
    `,
    [zc, Pi, qd, a4, c4]
  ),
  _4 = new Je({
    descriptor: le.from({ label: "SSR combine", resources: sb, body: l4 }),
    targets: [{ format: "rgba16float" }],
  }),
  Yo = w.from(`
fn rgb_to_YCoCg( rgb : vec3<f32> ) -> vec3<f32>
{
    //Y = R / 4 + G / 2 + B / 4
    //Co = R / 2 - B / 2
    //Cg = -R / 4 + G / 2 - B / 4
    
    return vec3(
        0.25f * rgb.r + 0.5f * rgb.g + 0.25f * rgb.b,
        0.5f * rgb.r - 0.5f * rgb.b,
       -0.25f * rgb.r + 0.5f * rgb.g - 0.25f * rgb.b
    );
  
}
`),
  jp = w.from(`
fn YCoCg_to_rgb( yCoCg : vec3<f32> ) -> vec3<f32>
{
    //R = Y + Co - Cg
    //G = Y + Cg
    //B = Y - Co - Cg
    
    let Y = yCoCg.x;
    let Co = yCoCg.y;
    let Cg = yCoCg.z;
    
    let tmp = Y - Cg;
    
    return vec3(
        tmp + Co,
         Y  + Cg,
        tmp - Co
    );
    
}
`),
  nb = w.from(`
fn get_std_dev( m1:f32, m2:f32 ) -> f32{
     let variance = max( m2 - m1 * m1, 0.0 );
     
     return sqrt( variance ); // sqrt( max( m2 - m1 * m1, 0.0 ) )
}
`),
  u4 = w.from(`
fn max_v3(v: vec3<f32>) -> f32{
    return max(v.x, max(v.y, v.z));
}
    `),
  d4 = w.from(
    `
fn line_aabb3_clipping_distance(
    line_origin:vec3<f32>,
    line_direction:vec3<f32>,
    aabb_min:vec3<f32>, 
    aabb_max:vec3<f32>,
) -> f32 {

  let safe_dir = select(line_direction, vec3(1e-5), abs(line_direction) < vec3(1e-5));
    
  let dir_inv = 1.0 / safe_dir;

  let first_plane = (aabb_min - line_origin) * dir_inv;
  let second_plane = (aabb_max - line_origin) * dir_inv;
  
  let nearest_plane = min(first_plane, second_plane);
  
  return max_v3(nearest_plane);

}
    `,
    [u4]
  ),
  Xp = w.from(
    `
fn color_clip_to_aabb( 
    in_history_colour: vec3<f32>, 
    in_current_colour: vec3<f32>, 
    in_bb_min: vec3<f32>, 
    in_bb_max: vec3<f32> 
) -> vec3<f32> {
    let direction = in_current_colour - in_history_colour;

    let t = line_aabb3_clipping_distance( in_history_colour, direction, in_bb_min, in_bb_max );

    return in_history_colour + direction * saturate(t);
}
`,
    [d4]
  ),
  h4 = w.from(`
fn get_std_dev3( m1:vec3<f32>, m2:vec3<f32> ) -> vec3<f32>{
     let variance = abs( m2 - m1 * m1 );
     
     return sqrt( variance ); // sqrt( max( m2 - m1 * m1, 0.0 ) )
}
    `),
  Wp = w.from(
    `
fn taa_history_color_bounding_box_YCoCg(
    current_color_texture: texture_2d<f32>,
    current_color_YCoCg:vec3<f32>,
    in_screen_st:vec2<i32>,
    in_variance_gamma:f32,
    
    out_min_c: ptr<function,vec3<f32>>,
    out_max_c: ptr<function,vec3<f32>>,
) {
    
    const offsets = array< vec2<i32>,8>(
      vec2( -1, -1 ),
      vec2(  0, -1 ),
      vec2(  1, -1 ), 
      
      vec2( -1,  0 ), 
      vec2(  1,  0 ), 
      
      vec2( -1,  1 ),
      vec2(  0,  1 ), 
      vec2(  1,  1 ), 
   );
    
    const iteratorMax = 8;
    const rcp_divider = 1.f / 9.f;

    // calcluate mean value (mean) and standard deviation (variance)

    var moment1 = current_color_YCoCg;
    var moment2 = current_color_YCoCg * current_color_YCoCg;
    
    for (var  i = 0; i < iteratorMax; i++ ) {
        let new_st = in_screen_st + offsets[ i ];

        let new_colour = rgb_to_YCoCg( textureLoad( current_color_texture, new_st, 0 ).rgb );
        
        moment1 += new_colour;
        moment2 += new_colour * new_colour;
    }

    // mean is the center of AABB and variance (standard deviation) is its extents
    let mean = moment1 * rcp_divider;
    let std_dev = get_std_dev3(mean, moment2 * rcp_divider ) * in_variance_gamma;

    *out_min_c = mean - std_dev;
    *out_max_c = mean + std_dev;
}
    `,
    [Yo, h4]
  ),
  Jp = w.from(
    `
fn clip_history_colour_YCoCg(
    current_color_texture_rgb: texture_2d<f32>,
    in_current_colour_YCoCg:vec3<f32>,
    in_history_colour_YCoCg:vec3<f32>,
    in_screen_st:vec2<i32>,
    in_variance_gamma:f32,
) -> vec3<f32> {

    var min_c: vec3<f32>;
    var max_c: vec3<f32>;
    
    taa_history_color_bounding_box_YCoCg(
        current_color_texture_rgb,
        in_current_colour_YCoCg,
        in_screen_st,
        in_variance_gamma,
        &min_c,
        &max_c,
    );
    
    let clip_history_YCoCg = color_clip_to_aabb(
        in_history_colour_YCoCg,
        in_current_colour_YCoCg,
        min_c,
        max_c,
    );
    
    return clip_history_YCoCg;
    
}
`,
    [jp, Yo, Wp, Xp]
  ),
  ob = w.from(`
fn taa_luma_weight(luma:f32) -> f32{
  return 1.0 / (4.0 + luma);
}
    `),
  _h = w.from(`
fn rgb_to_luminance(rgb: vec3<f32>) -> f32 {
    const luminance_weights = vec3(0.212671, 0.715160, 0.072169);
    return dot( rgb, luminance_weights );
}
`),
  f4 = w.from(
    `
fn rgba_luminance_contrast( a:vec4<f32> , b:vec4<f32> ) -> f32 {
    let diff = abs( a - b );
    
    let luminance = rgb_to_luminance(diff.rgb);
    
    return max( luminance, diff.a );
}
`,
    [_h]
  ),
  ab = w.from(
    `
fn texture_filter_fxaa_31(
    posM:vec2<u32>,
    tex:texture_2d<f32>
) -> vec4<f32> {
    
    // how far to search for edges
    const NUM_SAMPLES = 5;
    
    const fxaaQualityEdgeThreshold = 0.2; // [0,1] contrast needed, otherwise early discard
    const fxaaQualityinvEdgeThreshold = 1.0 / fxaaQualityEdgeThreshold;

    let rgbaM = textureLoad(tex, posM, 0);
    var rgbaS = textureLoad(tex, posM + vec2( 0u, 1u ), 0);
    let rgbaE = textureLoad(tex, posM + vec2( 1u, 0u ), 0);
    var rgbaN = textureLoad(tex, posM - vec2( 0u, 1u ), 0);
    let rgbaW = textureLoad(tex, posM - vec2( 1u, 0u ), 0);
    // . S .
    // W M E
    // . N .

    let contrastN = rgba_luminance_contrast( rgbaM, rgbaN );
    let contrastS = rgba_luminance_contrast( rgbaM, rgbaS );
    let contrastE = rgba_luminance_contrast( rgbaM, rgbaE );
    let contrastW = rgba_luminance_contrast( rgbaM, rgbaW );
    
    let earlyExit = max( max( max(
            contrastN,
            contrastS ),
            contrastE ),
            contrastW )
            < fxaaQualityEdgeThreshold;
            
    // . 0 .
    // 0 0 0
    // . 0 .

    if(earlyExit){
        return rgbaM;
    }


    var relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
    relativeVContrast *= fxaaQualityinvEdgeThreshold;

    var horzSpan = relativeVContrast > 0.;
    // . 1 .
    // 0 0 0
    // . 1 .

    // 45 deg edge detection and corners of objects, aka V/H contrast is too similar
    if( abs( relativeVContrast ) < .3 ) {
        // locate the edge
        var dirToEdge:vec2<i32>;
        
        if(contrastE > contrastW){
            dirToEdge.x = 1;
        }else{
            dirToEdge.x = -1;
        }
        
        if(contrastS > contrastN){
            dirToEdge.y = 1;
        }else{
            dirToEdge.y = -1;
        }
        
        // . 2 .      . 1 .
        // 1 0 2  ~=  0 0 1
        // . 1 .      . 0 .

        // tap 2 pixels and see which ones are "outside" the edge, to
        // determine if the edge is vertical or horizontal

        let rgbaAlongH = textureLoad(tex, vec2i(posM) + vec2( dirToEdge.x, -dirToEdge.y ), 0);
        let matchAlongH = rgba_luminance_contrast( rgbaM, rgbaAlongH );
        // . 1 .
        // 0 0 1
        // . 0 H

        let rgbaAlongV = textureLoad(tex, vec2i(posM) + vec2( -dirToEdge.x, dirToEdge.y ), 0);
        let matchAlongV = rgba_luminance_contrast( rgbaM, rgbaAlongV );
        // V 1 .
        // 0 0 1
        // . 0 .

        relativeVContrast = matchAlongV - matchAlongH;
        relativeVContrast *= fxaaQualityinvEdgeThreshold;

        if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
            // 1 1 .
            // 0 0 1
            // . 0 1

            // do a simple blur
            return mix(
                rgbaM,
                (rgbaN + rgbaS + rgbaE + rgbaW) * .25,
                .4
            );
        }

        horzSpan = relativeVContrast > 0.;
    }

    if(!horzSpan) {
        rgbaN = rgbaW;
        rgbaS = rgbaE;
    }
    
    // . 0 .      1
    // 1 0 1  ->  0
    // . 0 .      1

    let pairN = rgba_luminance_contrast( rgbaM, rgbaN ) > rgba_luminance_contrast( rgbaM, rgbaS );
    if(!pairN) {
        rgbaN = rgbaS;
    }

    var offNP:vec2<u32>;
    
    if(!horzSpan){
        offNP.x = 0;
        offNP.y = 1;
    }else{
        offNP.x = 1;
        offNP.y = 0;
    }
    
    var doneN = false;
    var doneP = false;

    var nDist = 0u;
    var pDist = 0u;

    var posN = posM;
    var posP = posM;

    var iterationsUsedN = 0u;
    var iterationsUsedP = 0u;
    
    for( var i = 0u; i < NUM_SAMPLES; i++ ) {

        let increment = (i + 1);

        if(!doneN) {
            nDist += increment;
            posN = posM + offNP * nDist;
            
            let rgbaEndN = textureLoad(tex, posN.xy, 0);
            
            doneN = rgba_luminance_contrast( rgbaEndN, rgbaM ) > rgba_luminance_contrast( rgbaEndN, rgbaN );
            iterationsUsedN = i;
        }

        if(!doneP) {
            pDist += increment;
            posP = posM - offNP * pDist;
            
            let rgbaEndP = textureLoad(tex, posP.xy, 0);
            
            doneP = rgba_luminance_contrast( rgbaEndP, rgbaM ) > rgba_luminance_contrast( rgbaEndP, rgbaN );
            iterationsUsedP = i;
        }

        if(doneN || doneP) {
            break;
        }
    }


    if ( !doneP && !doneN ) {
        // failed to find end of edge
        return rgbaM;
    } 

    var distN:f32;
    if(doneN){
        distN = f32( iterationsUsedN ) / f32( NUM_SAMPLES - 1 );
    }else{
        distN = 1.0;
    }
    
    var distP:f32;
    if(doneP){
        distP = f32( iterationsUsedP ) / f32( NUM_SAMPLES - 1 );
    }else{
        distP = 1.0;
    }

    var dist:f32 = min(distN, distP);
     

    // hacky way of reduces blurriness of mostly diagonal edges
    // but reduces AA quality
    dist = pow(dist, .5);

    dist = 1. - dist;

    return mix(
        rgbaM,
        rgbaN,
        dist * .5
    );
}
`,
    [f4]
  ),
  cb = w.from(`
fn texture_gather_channel_clamped(source: texture_2d<f32>, coord: vec2<f32>, channel: u32, texture_lod: u32)-> vec4<f32>{

    let max_texel = textureDimensions(source, texture_lod) - 1u;
    
    let pixel_clamped = clamp(coord, vec2f(0.0), vec2f(max_texel));
    
    let c00 = vec2<u32>(pixel_clamped);
    let c01 = vec2( c00.x, min(max_texel.y, c00.y + 1u) );
    let c10 = vec2( min(max_texel.x, c00.x + 1u), c00.y );
    let c11 = vec2( c10.x, c01.y );
    
    let t00 = textureLoad(source, c00, texture_lod)[channel];
    let t01 = textureLoad(source, c01, texture_lod)[channel];
    let t10 = textureLoad(source, c10, texture_lod)[channel];
    let t11 = textureLoad(source, c11, texture_lod)[channel];
    
    return  vec4(t01, t11, t10, t00);

}
`),
  Zp = w.from(
    `
fn texture_sample_red_min_st( source:texture_2d<f32>, pixel:vec2<f32>, texture_lod: u32 ) -> f32 {
    
    let t = texture_gather_channel_clamped(source, pixel, 0, texture_lod);
    
    return min4( t.x, t.y, t.z, t.w );
}
`,
    [bp, cb]
  ),
  p4 = w.from(
    `
fn texture_sample_red_max_st( source:texture_2d<f32>, pixel:vec2<f32>, texture_lod: u32 ) -> f32 {
    
    let t = texture_gather_channel_clamped(source, pixel, 0, texture_lod);
    
    return max4( t.x, t.y, t.z, t.w );
}
`,
    [_x, cb]
  ),
  W_ = w.from(`
fn taa_get_velocity( VelocityBuffer:texture_2d<f32>, inScreenST:vec2<i32> ) -> vec2<f32>
{
    var result = textureLoad( VelocityBuffer,  inScreenST , 0 ).rg;

    const offsets = array< vec2<i32>,8>(
      vec2( -1, -1 ),
      vec2(  0, -1 ) ,
      vec2(  1, -1 ), 
      vec2( -1,  0 ), 
      vec2(  1,  0 ), 
      vec2( -1,  1 ),
      vec2(  0,  1 ), 
      vec2(  1,  1 ), 
   );
    
    const sample_count = 8;

    var currentLengthSq = dot( result.xy, result.xy );
    
    for ( var i = 0; i < sample_count; i++ ) {
    
        let coordinate = inScreenST + offsets[ i ];
    
        let velocity =  textureLoad( VelocityBuffer,  coordinate, 0 ).rg;
        let sampleLengthSq = dot( velocity.xy, velocity.xy );
        
        if ( sampleLengthSq > currentLengthSq ) {
            // pick larget magnitude
            
            result = velocity;
            currentLengthSq = sampleLengthSq;
        
        }
        
    }

    return result;
}
`),
  m4 = Struct.from({ jitter: "vec2<f32>", jitter_delta: "vec2<f32>" }),
  lb = new ResourecGroup();
lb.createGroup()
  .addTexture("VelocityBuffer")
  .addTexture("HistoryTexture")
  .addTexture("ColourTexture")
  .addTexture("tOcclusion")
  .addUniform("camera_current", ce)
  .addUniform("camera_previous", ce)
  .addUniform("settings", m4);
const g4 = 128,
  _b = w.from(`
fn   taa_velocity_confidence(velocity: vec2<f32>) -> f32{
    return saturate(  1.f  - length( velocity.xy ) / ${g4} );
}
    `),
  ub = w.from(`
fn taa_velocity_variance_scale(velocityConfidenceFactor:f32) -> f32{

// MIN - MAX variance gamma, it's lerped using a velocity confidence factor
const MIN_VARIANCE_GAMMA = 0.75f; // under motion
const MAX_VARIANCE_GAMMA = 2.f; // no motion

    // lerp between MIN and MAX variance gamma to ensure when no motion specular highlights not cut by the variance clipping
        return mix( MIN_VARIANCE_GAMMA, MAX_VARIANCE_GAMMA, velocityConfidenceFactor * velocityConfidenceFactor ) ;

}
    `),
  v4 = w.from(
    `


fn uv_within_screen( pixel:vec2<f32> ) -> f32{
    let render_size = textureDimensions(ColourTexture);

    if(  all( pixel >= vec2( 0.f, 0.f ) ) && all( pixel < vec2f( render_size ) )  ){ 
        return 1.0f;
    } else{
        return  0.f;
    } 
}

@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
) -> @location(0) vec4<f32> {
    let screenST = vec2<i32>( coord.xy );
        
    // get velocity
    let velocity = taa_get_velocity( VelocityBuffer, screenST );
    
    // calculate confidence factor based on the velocity of current pixel, everything moving faster than FRAME_VELOCITY_IN_PIXELS_DIFF frame-to-frame will be marked as no-history
    let velocityConfidenceFactor = taa_velocity_confidence(velocity.xy);

    // prev frame ST and UV
    let prevFrameScreenST = coord.xy + velocity.xy;
    
    // get depth confidence factor, larger then 0, assume the history is valid
    let occlusion_confidence =  textureLoad(tOcclusion, screenST, 0).r;

    // do we have a valid history?
    let uvWeight = uv_within_screen( prevFrameScreenST ) ;
    
    let hasValidHistory =( velocityConfidenceFactor * occlusion_confidence * uvWeight ) > 0.f;
    
    var final_colour:vec4<f32>;

    if ( true == hasValidHistory ) {
    
        // sample history
        var color_history_raw = texture_sample_catmull_rom_exact( HistoryTexture,  prevFrameScreenST - 0.5, 0);
        
        // clamp against negative values that can be introduced by catmullrom
        color_history_raw = max(vec4(0.0), color_history_raw);
        
        let history_YCoCg = rgb_to_YCoCg(color_history_raw.rgb); 
                        
        // lerp between MIN and MAX variance gamma to ensure when no motion specular highlights not cut by the variance clipping
        let variance_scale = taa_velocity_variance_scale( velocityConfidenceFactor ) ;

        // sample current colour
        let color_current_YCoCg = rgb_to_YCoCg( 
            textureLoad( ColourTexture, screenST, 0 ).rgb
        );

     
        // default incoming contribution of 10%
        var blend = 0.1;
        
        // blend less history if hitstory has low confidence or under motion
        blend = mix(1.0, blend, color_history_raw.a * velocityConfidenceFactor * occlusion_confidence);

        var min_c: vec3<f32>;
        var max_c: vec3<f32>;
        
        taa_history_color_bounding_box_YCoCg(
            ColourTexture,
            color_current_YCoCg,
            screenST,
            variance_scale,
            &min_c,
            &max_c,
        );
     
        // clip history colour to the bounding box of expected colours based on the current frame colour
        let adjusted_history_YCoCg = color_clip_to_aabb(
            history_YCoCg,
            color_current_YCoCg,
            min_c,
            max_c,
        );

        // final weight for lerp between the current frame colour and the temporal history colour
        
        // luma weigh to reduce flickering, we bias towards darker pixels
        var weight_current = taa_luma_weight(color_current_YCoCg.x) * blend;
        var weight_history = taa_luma_weight(adjusted_history_YCoCg.x) * (1.0 - blend);
        
        // renormalize weights
        let weight_renorm = 1.0 / (weight_current + weight_history);
        
        weight_current *= weight_renorm;
        weight_history *= weight_renorm;
        
        let confidence_new = saturate(  1.f  / (  2.f  - weight_history ) );
 
        let mixed_color = YCoCg_to_rgb(color_current_YCoCg * weight_current + adjusted_history_YCoCg * weight_history);
        
        final_colour = vec4(mixed_color, confidence_new);
                        
    } else {
    
        // no valid history, or discocclusion
        
        let alt_filter = texture_filter_fxaa_31( vec2u(screenST) , ColourTexture );
        
        final_colour = vec4( alt_filter.rgb, 0.5f );
        
    }
            
    // Store the final pixel colour
    return final_colour.rgba;
}
`,
    [jp, Yo, Jp, Dd, ab, Zp, W_, _h, Wp, ob, Xp, _b, ub]
  ),
  x4 = new Je({
    descriptor: le.from({ label: "TAA", resources: lb, body: v4 }),
    targets: [{ format: "bgra8unorm" }],
  }),
  db = new ResourecGroup();
db.createGroup()
  .addTexture("tInput")
  .addTexture("tVelocity")
  .addTexture("tOcclusion")
  .addTexture("tHistory")
  .addUniform("camera_current", ce)
  .addUniform("camera_previous", ce);
const b4 = w.from(
    `
fn ssr_history_color_bounding_box_YCoCg(
    current_color_texture: texture_2d<f32>,
    in_current_colour_variance:vec4<f32>,
    in_screen_st:vec2<i32>,
    
    out_mean: ptr<function,vec3<f32>>,
    out_variance: ptr<function,f32>,
) {
    
    const offsets = array< vec2<i32>,8>(
      vec2( -1, -1 ),
      vec2(  0, -1 ),
      vec2(  1, -1 ), 
      
      vec2( -1,  0 ), 
      vec2(  1,  0 ), 
      
      vec2( -1,  1 ),
      vec2(  0,  1 ), 
      vec2(  1,  1 ), 
   );
    
    const iteratorMax = 8;
    const rcp_divider = 1.f / 9.f;

    // calcluate mean value (mean) and standard deviation (variance)

    var moment1 = in_current_colour_variance.rgb;
    var moment2 = in_current_colour_variance.w;
    
    for (var  i = 0; i < iteratorMax; i++ ) {
        let new_st = in_screen_st + offsets[ i ];
        
        let texel = textureLoad( current_color_texture, new_st, 0 );
        let new_colour = rgb_to_YCoCg( texel.rgb );
        
        moment1 += new_colour;
        moment2 += texel.w;
    }

    // mean is the center of AABB and variance (standard deviation) is its extents

    *out_mean = moment1 * rcp_divider;
    *out_variance = moment2 * rcp_divider;
}
    `,
    [Yo, nb]
  ),
  y4 = w.from(`
fn ssr_variance_weight(variance:f32) -> f32{
    return 1 / ( 1 + variance );
}
    `),
  w4 = w.from(
    `

@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    let screenST = vec2<i32>( coord.xy );
    
    let occlusion = textureLoad(tOcclusion, screenST, 0).r;
    let current_texel = textureLoad(tInput, screenST, 0);
    
    // get velocity
    let velocity = taa_get_velocity( tVelocity, screenST );
    
    // prev frame ST
    let prevFrameScreenST = coord.xy + velocity.xy;
    
    var output: vec4<f32>;
        
    if( occlusion <= 0.001 ) {
         // no valid reprojection
         output = current_texel;
    }else{
         
        //reproject, note -0.5 to move to texel center
        
        let history_color_raw = max(
            vec4(0.0),
            texture_sample_catmull_rom_exact(tHistory, prevFrameScreenST - 0.5, 0)
        );
        
        let history_variance = history_color_raw.w;
        
                
        let current_YCoCg = rgb_to_YCoCg(current_texel.rgb);
        let history_YCoCg = rgb_to_YCoCg(history_color_raw.rgb);
        
                
        var current_mean: vec3<f32>;
        var current_variance : f32;
        
        let veclocity_confidence = taa_velocity_confidence(velocity);
        let variance_scale = taa_velocity_variance_scale( veclocity_confidence ) ;
        
        ssr_history_color_bounding_box_YCoCg(
            tInput,
            vec4(current_YCoCg, current_texel.w),
            screenST,
            &current_mean,
            &current_variance,
        );
        
        let current_std_dev = get_std_dev(current_mean.x, current_variance);
        
        let min_c = current_mean - current_std_dev * variance_scale;
        let max_c = current_mean + current_std_dev * variance_scale;
        
        
         // clip history colour to the bounding box of expected colours based on the current frame colour
        let adjusted_history_YCoCg = color_clip_to_aabb(
            history_YCoCg,
            current_YCoCg,
            min_c,
            max_c,
        );
        
        var blend = 0.1;
        
        //
        blend = mix(1.0, blend, occlusion * veclocity_confidence);
        

        var weight_current = blend;
        var weight_history =  (1.0 - blend);
        
         weight_current *= taa_luma_weight(current_YCoCg.x);
         weight_history *= taa_luma_weight(adjusted_history_YCoCg.x);
        
        // adjust blend based on variance
        weight_current *= ssr_variance_weight(current_texel.w);
        weight_history *= ssr_variance_weight(history_variance);
        
        // renormalize weights
        let weight_renorm = 1.0 / (weight_current + weight_history);
        
        weight_current *= weight_renorm;
        weight_history *= weight_renorm;
                
        
        let mixed_color = YCoCg_to_rgb(mix(current_YCoCg, adjusted_history_YCoCg, weight_history));
        
        let mixed_variance = mix(current_texel.w, history_variance, weight_history);
        
        output = vec4(
            mixed_color,
            mixed_variance
        );
    
    }
    
    
    return output;
}
    `,
    [Yo, jp, W_, Dd, Jp, Wp, Xp, b4, ob, _b, ub, y4]
  ),
  T4 = new Je({
    descriptor: le.from({ label: "SSR Reproject", body: w4, resources: db }),
    targets: [{ format: "rgba16float" }],
  }),
  hb = new ResourecGroup();
hb.createGroup()
  .addTexture("tTrace", "float")
  .addTexture("tColor", "float")
  .addSampler("sLinear");
const E4 = w.from(
    `
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    
    let coord_i = vec2<u32>(coord.xy);
        
    let trace_texel = textureSampleLevel(tTrace, sLinear, vec2(uv.x, uv.y), 0);
    
    let texel_fade = trace_texel.z;
    
    let color = textureSampleLevel(
        tColor,
        sLinear,
        trace_texel.xy,
        0
    ).rgb * texel_fade;
        
    // TODO reuse neighbourhood samples based on normals
    
    if(texel_fade == 0){
        return vec4(0.0, 0.0, 0.0, 1.0);
    }
    
    // we use YCoCg scale luma as that's what's used further down the pipeline, even if it's less accurate
    let luma = rgb_to_YCoCg(color).r;

    return vec4(color, luma*luma);
}    
    `,
    [Yo]
  ),
  A4 = new Je({
    descriptor: le.from({ label: "SSR resolve", resources: hb, body: E4 }),
    targets: [{ format: "rgba16float" }],
  }),
  S4 = 0.32,
  z4 = 512,
  C4 = 4,
  U4 = w.from(`
fn ffx_dnsr_reflections_get_edge_stopping_depth_weight(
    center_depth: f32,
    neighbor_depth: f32,
) -> f32 {
    return exp(-abs(center_depth - neighbor_depth) * center_depth * ${C4});
}
    `),
  I4 = w.from(`
fn ffx_dnsr_reflections_get_edge_stopping_normal_weight(
    normal_p: vec3<f32>,
    normal_q: vec3<f32>,
) -> f32 {
    return pow(max(dot(normal_p, normal_q), 0.0f), ${z4});
}
    `),
  fb = new ResourecGroup();
fb.createGroup()
  .addTexture("tInput")
  .addTexture("tDepth")
  .addTexture("tNormal", "uint")
  .addUniform("settings", X_);
const N4 = w.from(
    `
const phi_visibility = 10.0;
const phi_normal = 32.0;
const sigma_depth = 1.0;
 
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
) -> @location(0) vec4<f32>{
    let ipos = vec2<i32>(coord.xy);
    let screen_size = vec2<i32>(textureDimensions(tInput));
    
    const eps_variance      = 1e-10;
    const kernel_weights = array<f32,3>( 1.0, 2.0 / 3.0, 1.0 / 6.0 );
    
    // constant samplers to prevent the compiler from generating code which
    // fetches the sampler descriptor from memory for each texture access
    let center_color = textureLoad(tInput, ipos, 0);
    
    let center_color_luma = rgb_to_luminance(center_color.rgb);

    // variance for direct and indirect, filtered using 3x3 gaussin blur
    let variance = max(0.0, texture_channel_compute_variance_center( ipos, tInput, 3));
            
    // explicitly store/accumulate center pixel with weight 1 to prevent issues
    // with the edge-stopping functions
    var sum_weight = 1.0;
    var sum_color   = center_color;
    
    
    let current_normal = decode_g_buffer_normal( textureLoad(tNormal, ipos, 0).xy );
    let center_depth   = textureLoad(tDepth, ipos, 0).r;
    
    const offsets = array< vec2<i32>,8>(
      vec2( -1, -1 ),
      vec2(  0, -1 ) ,
      vec2(  1, -1 ), 
      vec2( -1,  0 ), 
      vec2(  1,  0 ), 
      vec2( -1,  1 ),
      vec2(  0,  1 ), 
      vec2(  1,  1 ), 
   );
    
    const num_samples = 8;
    
    let std_dev =  safe_sqrt(variance);
    
    for(var i = 0; i < num_samples; i++){
        let offset = offsets[i];
                
        let p      = ipos + offset * settings.step_size;
        let inside = all(p >= vec2(0, 0)) && all(p < screen_size);
        
        if(!inside){
            // off-screen
            continue;
        }
        
        let kernel = kernel_weights[ abs(offset.x) ] * kernel_weights[ abs(offset.y) ];
        
        let sample_color = textureLoad(tInput, p, 0);
        let sample_color_luma = rgb_to_luminance(sample_color.rgb);

        let sample_normal = decode_g_buffer_normal(textureLoad(tNormal, p, 0).xy);
        let sample_depth  = textureLoad(tDepth, p, 0).r;

        // compute the edge-stopping functions
        var weight = 1.0;
        
        let phi_luma = max(0.001,std_dev*phi_visibility);

        weight *= ffx_dnsr_reflections_get_edge_stopping_normal_weight(current_normal, sample_normal);
        weight *= ffx_dnsr_reflections_get_edge_stopping_depth_weight(center_depth, sample_depth);
        weight *= exp(-luma_edge_stopping_weight(center_color_luma,sample_color_luma,phi_luma));
        
        let w_visibility = weight * kernel;

        // alpha channel contains the variance, therefore the weights need to be squared, see paper for the formula
        sum_weight += w_visibility;
        sum_color += vec4(vec3(w_visibility), w_visibility * w_visibility) * sample_color;
    }
    
    let out_visibility = sum_color / vec4(vec3(sum_weight), sum_weight * sum_weight);
    
    return vec4(out_visibility);
}
    `,
    [X_.declaration_chunk, jx, Pi, _h, Yo, I4, U4, Xx, Ep]
  ),
  tf = new Je({
    descriptor: le.from({
      label: "SSR / spatial denoise",
      body: N4,
      resources: fb,
    }),
    targets: [{ format: "rgba16float" }],
  }),
  M4 = w.from(`
fn rcp_v2(x: vec2<f32>) -> vec2<f32>{
    return 1.0 / x;
}
    `),
  k4 = w.from(
    `
fn ffx_sssr_advance_ray(
    origin: vec3<f32>,
    direction: vec3<f32>,
    inv_direction: vec3<f32>,
    current_mip_position: vec2<f32>,
    current_mip_resolution_inv: vec2<f32>,
    floor_offset: vec2<f32>,
    uv_offset: vec2<f32>,
    surface_z: f32,
    position: ptr<function, vec3<f32>>,
    current_t: ptr<function, f32>,
) -> bool{

    // Create boundary planes
    var xy_plane        = floor(current_mip_position) + floor_offset;
    xy_plane               = xy_plane * current_mip_resolution_inv + uv_offset;
    let boundary_planes = vec3(xy_plane, surface_z);

    // Intersect ray with the half box that is pointing away from the ray origin.
    // o + d * t = p' => t = (p' - o) / d
    var t = boundary_planes * inv_direction - origin * inv_direction;

    // Prevent using z plane when shooting out of the depth buffer.
    t.z = select(F32_MAX, t.z, direction.z < 0);

    // Choose nearest intersection with a boundary.
    let t_min = min(min(t.x, t.y), t.z);

    // Larger z means closer to the camera.
    let above_surface = surface_z < position.z;

    // Decide whether we are able to advance the ray until we hit the xy boundaries or if we had to clamp it at the surface.
    // We use the asuint comparison to avoid NaN / Inf logic, also we actually care about bitwise equality here to see if t_min is the t.z we fed into the min3 above.
    let skipped_tile = bitcast<u32>(t_min) != bitcast<u32>(t.z) && above_surface;

    // Make sure to only advance the ray if we're still above the surface.
    *current_t = select( *current_t, t_min, above_surface);

    // Advance ray
    *position = origin + (*current_t) * direction;

    return skipped_tile;
}
    `,
    [ti]
  ),
  R4 = w.from(`
fn ffx_sssr_get_mip_resolution(screen_dimensions:vec2<f32>, mip_level:i32) -> vec2<f32>{
    return screen_dimensions * pow(0.5, f32(mip_level));
}
    `),
  L4 = w.from(`
fn ffx_sssr_initial_advance_ray(
    origin: vec3<f32>,
    direction: vec3<f32>,
    inv_direction: vec3<f32>,
    current_mip_resolution: vec2<f32>,
    current_mip_resolution_inv: vec2<f32>,
    floor_offset: vec2<f32>,
    uv_offset: vec2<f32>,
    position: ptr<function, vec3<f32>>,
    current_t: ptr<function, f32>,
){

    let current_mip_position = current_mip_resolution * origin.xy;

    // Intersect ray with the half box that is pointing away from the ray origin.
    var xy_plane = floor(current_mip_position) + floor_offset;
    xy_plane        = xy_plane * current_mip_resolution_inv + uv_offset;

    // o + d * t = p' => t = (p' - o) / d
    let t  = xy_plane * inv_direction.xy - origin.xy * inv_direction.xy;
    
    *current_t = min(t.x, t.y);
    *position  = origin + (*current_t) * direction;

}
    `),
  pb = w.from(`
fn ffx_sssr_load_depth(pixel_coordinate:vec2<i32>, mip:i32) -> f32{
    return textureLoad(tDepth, pixel_coordinate, mip).x;
}
    `),
  P4 = w.from(
    `
fn ffx_sssr_hierarchical_raymarch(
    origin: vec3<f32>,
    direction: vec3<f32>,
    is_mirror: bool,
    screen_size: vec2<f32>,
    most_detailed_mip: i32,
    max_traversal_intersections:u32,
    valid_hit: ptr<function, bool>,
    _num_iters: ptr<function, u32>,
) -> vec3<f32> {

    let inv_direction = select( vec3(F32_MAX), 1.0 / direction, abs(direction) > vec3(1.0e-12));

    // Start on mip with highest detail.
    var current_mip = most_detailed_mip;

    // Could recompute these every iteration, but it's faster to hoist them out and update them.
    var current_mip_resolution     = ffx_sssr_get_mip_resolution(screen_size, current_mip);
    var current_mip_resolution_inv = 1.0 / (current_mip_resolution);

    // Offset to the bounding boxes uv space to intersect the ray with the center of the next pixel.
    // This means we ever so slightly over shoot into the next region.
    var uv_offset = 0.005 * exp2(f32(most_detailed_mip)) / screen_size;
    uv_offset        = select( uv_offset, -uv_offset, direction.xy < vec2(0.0) );

    // Offset applied depending on current mip resolution to move the boundary to the left/right upper/lower border depending on ray direction.
    let floor_offset = select(vec2(1.0), vec2(0.0), direction.xy < vec2(0.0)); // TODO can replace with 'step'

    // Initially advance ray to avoid immediate self intersections.
    var current_t:f32;
    var position:vec3<f32>;
    
    ffx_sssr_initial_advance_ray(
        origin, 
        direction,
        inv_direction,
        current_mip_resolution,
        current_mip_resolution_inv,
        floor_offset,
        uv_offset,
        &position,
        &current_t
    );
    
    var i = 0u;
    for (
        ;
        i < max_traversal_intersections && current_mip >= most_detailed_mip;
        i++
    ) {
        
        if (any(position.xy > vec2(1.0, 1.0)) || any(position.xy < vec2(0.0, 0.0))){
            break;
        }

        if (position.z < f32(1.0e-6)){ 
            break;
        }

        let current_mip_position = current_mip_resolution * position.xy;
        let  surface_z            = ffx_sssr_load_depth(vec2<i32>(current_mip_position), current_mip);
        
        let skipped_tile = ffx_sssr_advance_ray(origin, direction, inv_direction, current_mip_position, current_mip_resolution_inv, floor_offset, uv_offset, surface_z, &position, &current_t);
        
        current_mip += select(-1, 1, skipped_tile );
        current_mip_resolution *= select(2.0, 0.5, skipped_tile);
        current_mip_resolution_inv *=  select(0.5, 2.0, skipped_tile);
        
    }
    
    *_num_iters = i;
    *valid_hit = (i <= max_traversal_intersections);

    return position;
}
`,
    [ti, M4, R4, L4, k4, pb]
  ),
  mb = w.from(
    `
fn ffx_sssr_load_world_space_normal(texel_coord: vec2<i32>)-> vec3<f32>{
    // TODO check if we should be working with geometric or shading normal. Using shading currently
    return decode_g_buffer_normal( textureLoad(tNormal, texel_coord, 0).xy );
}    
    `,
    [Pi]
  ),
  gb = w.from(
    `
fn inv_project_position(coord_uv: vec3<f32>, m: mat4x4<f32> ) -> vec3<f32>{

    let coord2 = uv_to_clip(coord_uv.xy);

    let projected = m * vec4(coord2, coord_uv.z, 1);
    
    return projected.xyz / projected.w;

}
    `,
    [wv]
  ),
  vb = w.from(
    `
fn ffx_sssr_screen_space_to_view_space(screen_space_position_uv:vec3<f32>) -> vec3<f32>{
    return inv_project_position(screen_space_position_uv, camera.projection_matrix_inverse);
}
    `,
    [gb]
  ),
  B4 = w.from(
    `
fn ffx_sssr_validate_hit(
        hit: vec3<f32>,
        uv:vec2<f32>,
        world_space_ray_direction:vec3<f32>,
        screen_size:vec2<f32>,
        depth_buffer_thickness:f32
) -> f32{

    // Reject hits outside the view frustum
    if ((hit.x < 0.0f) || (hit.y < 0.0f) || (hit.x > 1.0f) || (hit.y > 1.0f))
    {
        return 0.0f;
    }

    // Reject the hit if we didnt advance the ray significantly to avoid immediate self reflection
    let manhattan_dist = abs(hit.xy - uv);
    if ((manhattan_dist.x < (2.0f / screen_size.x)) && (manhattan_dist.y < (2.0f / screen_size.y)))
    {
        return 0.0;
    }

    // Don't lookup radiance from the background.
    let texel_coords = vec2<i32>(screen_size * hit.xy);
    let surface_z    = ffx_sssr_load_depth(texel_coords / 2, 1);

    if (surface_z == 0.0)
    {
        return 0;
    }

    // We check if we hit the surface from the back, these should be rejected.
    let hit_normal = ffx_sssr_load_world_space_normal(texel_coords);
    
    if (dot(hit_normal, world_space_ray_direction) > 0){
        return 0;
    }

    let view_space_surface = ffx_sssr_screen_space_to_view_space(vec3(hit.xy, surface_z));
    let view_space_hit     = ffx_sssr_screen_space_to_view_space(hit);
    let distance           = length(view_space_surface - view_space_hit);

    // Fade out hits near the screen borders
    let fov      = 0.05 * vec2(screen_size.y / screen_size.x, 1);
    let border   = smoothstep(vec2(0.0f, 0.0f), fov, hit.xy) * (1 - smoothstep(vec2(1.0f, 1.0f) - fov, vec2(1.0f, 1.0f), hit.xy));
    let  vignette = border.x * border.y;

    // We accept all hits that are within a reasonable minimum distance below the surface.
    // Add constant in linear space to avoid growing of the reflections toward the reflected objects.
    var confidence = 1.0f - smoothstep(0.0f, depth_buffer_thickness, distance);
    confidence *= confidence;
    
    return vignette * confidence;
}
    `,
    [pb, mb, vb]
  ),
  O4 = w.from(`
 fn clip_to_uv(clip: vec2<f32>)->vec2<f32>{
    return vec2(0.5 * clip.x + 0.5, 0.5 - 0.5 * clip.y);
}     
    `),
  xb = w.from(
    `
fn project_position(origin:vec3<f32>, m: mat4x4<f32>) -> vec3<f32>{

    let projected = m * vec4(origin, 1.0);
    
    let projected_xyz = projected.xyz / projected.w;
    
    let uv = clip_to_uv(projected_xyz.xy);
    
    return vec3(
        uv,
        projected_xyz.z
    ); 

}
    `,
    [O4]
  ),
  F4 = w.from(
    `
fn project_direction(

    origin: vec3<f32>, 
    direction: vec3<f32>,
    screen_space_origin: vec3<f32>,
    m: mat4x4<f32>
    
) -> vec3<f32>{

    let offsetted = project_position(origin + direction, m);
    
    return offsetted - screen_space_origin;

}
    `,
    [xb]
  ),
  D4 = w.from(
    `
fn sample_vndf_hemisphere(u:vec2<f32>, wi:vec3<f32>) -> vec3<f32>{

    // sample a spherical cap in (-wi.z, 1]
    let phi = 2.0f * PI * u.x;
    let z = fma((1.0f - u.y), (1.0f + wi.z), -wi.z);
    let sinTheta = sqrt(saturate(1.0f - z * z));
    let x = sinTheta * cos(phi);
    let y = sinTheta * sin(phi);
    let c = vec3(x, y, z);
    
    // compute halfway direction;
    let h = c + wi;
    
    // return without normalization (as this is done later)
    return h;
}
    `,
    [Jt]
  ),
  G4 = w.from(
    `
fn sample_ggx_vndf(
    Ve: vec3<f32>,
    alpha_x: f32,
    alpha_y: f32,
    U1: f32,
    U2: f32
) -> vec3<f32>{

    // Section 3.2: transforming the view direction to the hemisphere configuration
    let Vh = normalize(vec3(alpha_x * Ve.x, alpha_y * Ve.y, Ve.z));
    
    let Nh = sample_vndf_hemisphere(vec2(U2, U1), Vh);
    
    // Section 3.4: transforming the normal back to the ellipsoid configuration
    let Ne = normalize(vec3(alpha_x * Nh.x, alpha_y * Nh.y, max(0.0, Nh.z)));
    
    return Ne;
}     
    `,
    [D4]
  ),
  V4 = w.from(
    `
fn sample_ggx_vndf_ellipsoid(
    Ve: vec3<f32>,
    alpha_x: f32,
    alpha_y: f32,
    U1: f32,
    U2: f32
) -> vec3<f32>{
    return sample_ggx_vndf(Ve, alpha_x, alpha_y, U1, U2); 
}
    `,
    [G4]
  ),
  $4 = w.from(
    `
fn     sample_ggx_vndf_hemisphere(
    Ve: vec3<f32>,
    alpha: f32,
    U1: f32,
    U2: f32
) -> vec3<f32>{
    return sample_ggx_vndf_ellipsoid(Ve, alpha, alpha, U1, U2);
}
    `,
    [V4]
  ),
  q4 = w.from(
    `
fn sample_reflection_vector(
    view_direction: vec3<f32>, normal: vec3<f32>,  roughness:f32, u: vec2<f32>
) -> vec3<f32>{
    var U:vec3<f32>;
    let N = normal;
    if (abs(N.z) > 0.0) {
        let k = sqrt(N.y * N.y + N.z * N.z);
        U.x = 0.0; U.y = -N.z / k; U.z = N.y / k;
    }
    else {
        let k = sqrt(N.x * N.x + N.y * N.y);
        U.x = N.y / k; U.y = -N.x / k; U.z = 0.0;
    }

    // TBN 3x3 matrix
    let TBN_row0 = U;
    let TBN_row1 = cross(N, U);
    let TBN_row2 = N;

    // TBN * -view_direction
    let view_direction_tbn = vec3(dot(TBN_row0, -view_direction), dot(TBN_row1, -view_direction), dot(TBN_row2, -view_direction));

    let sampled_normal_tbn = sample_ggx_vndf_hemisphere(view_direction_tbn, roughness, u.x, u.y);

    let reflected_direction_tbn = reflect(-view_direction_tbn, sampled_normal_tbn);

    // Transpose of TBN
    let TBN_col0 = vec3(TBN_row0[0], TBN_row1[0], TBN_row2[0]);
    let TBN_col1 = vec3(TBN_row0[1], TBN_row1[1], TBN_row2[1]);
    let TBN_col2 = vec3(TBN_row0[2], TBN_row1[2], TBN_row2[2]);

    // transpose(TBN) * reflected_direction_tbn
    return vec3(dot(TBN_col0, reflected_direction_tbn), dot(TBN_col1, reflected_direction_tbn), dot(TBN_col2, reflected_direction_tbn));
}
`,
    [$4]
  ),
  H4 = w.from(
    `
fn screen_space_to_world_space(screen_space_position: vec3<f32>) -> vec3<f32>{
    return inv_project_position(screen_space_position, camera.view_matrix_inverse);
}
    `,
    [gb]
  ),
  Y4 = w.from(`
fn viewport_distance_to_edge_u32(pixel: vec2<u32>, resolution: vec2<u32>) -> u32{
    let to_edge = min(pixel, resolution - pixel);
    
    return min(to_edge.x, to_edge.y);
}
`),
  j4 = w.from(
    `
fn compute_viewport_edge_fade_mask(pixel: vec2<u32>, resolution: vec2<u32> , fade_fraction: f32) -> f32{
    
    let min_resolution = min(resolution.x, resolution.y);
    
    let edge_width = fade_fraction * f32(min_resolution);
        
    let distance_to_edge = viewport_distance_to_edge_u32(pixel, resolution);
    
    return saturate(f32(distance_to_edge) / edge_width);
}
    `,
    [Y4]
  ),
  X4 = w.from(`
fn is_background(clip_z: f32) -> bool{
    return clip_z < 1e-6;
}
`),
  W4 = w.from(`
fn is_glossy_reflection(roughness:f32) -> bool{
    return roughness < ${S4};
}
    `),
  J4 = w.from(`
fn is_mirror_reflection(roughness:f32) -> bool{
    return roughness < 0.0001;
}
    `),
  Z4 = Struct.from({
    max_distance: "f32",
    frame_index: "u32",
    edge_fade: "f32",
  }),
  bb = new ResourecGroup();
bb.createGroup()
  .addUniform("settings", Z4)
  .addUniform("camera", ce)
  .addTexture("tNoise", "uint")
  .addTexture("tDepth")
  .addTexture("tPBR")
  .addTexture("tNormal", "uint");
const K4 = w.from(
    `

const INVALID_RESULT_VALUE = vec4(0.0);

const g_most_detailed_mip = 0;
const g_depth_buffer_thickness = 0.015;
const g_thickness_length_factor = 0.01f;

@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    const INPUT_MIP = 0;

    let coord_i = vec2<u32>(coord.xy);
    
    let roughness = textureLoad(
        tPBR,
        coord_i,
        INPUT_MIP
    ).w;
    
    let screen_size = textureDimensions(tDepth, INPUT_MIP);
        
    let jitter = spatio_temporal_noise_r2_64(coord_i, settings.frame_index, tNoise);
    
    let g_view = camera.view_matrix;
    let g_inv_view = camera.view_matrix_inverse;
    let g_proj = camera.projection_matrix;
    
    
    let is_mirror                       = is_mirror_reflection(roughness);
    
    let most_detailed_mip               = select(g_most_detailed_mip, 0, is_mirror);
    let mip_resolution                  = ffx_sssr_get_mip_resolution(vec2<f32>(screen_size), most_detailed_mip);
    let z                               = ffx_sssr_load_depth(vec2<i32>(uv * mip_resolution), most_detailed_mip);
     
    let valid_ray                       = !is_background(z) && is_glossy_reflection(roughness);
    
    if(!valid_ray){
        return INVALID_RESULT_VALUE;
    }
    
    var screen_uv_space_ray_origin      = vec3(uv, z);
    let view_space_ray                  = ffx_sssr_screen_space_to_view_space(screen_uv_space_ray_origin);
    let view_space_ray_direction        = normalize(view_space_ray);
    
    let world_space_normal              = ffx_sssr_load_world_space_normal(vec2<i32>(coord_i));
    let view_space_surface_normal       = (g_view * vec4(world_space_normal, 0)).xyz;
    let view_space_reflected_direction  = sample_reflection_vector(view_space_ray_direction, view_space_surface_normal, roughness, jitter);
    let screen_space_ray_direction      = project_direction(view_space_ray, view_space_reflected_direction, screen_uv_space_ray_origin, g_proj);
    
   
    
    // see https://github.com/GPUOpen-LibrariesAndSDKs/FidelityFX-SDK/blob/1bbe66e7ea0d358e84af4471a90aa9c35b583de0/samples/sssr/sssrrendermodule.h#L72
    const g_max_traversal_intersections = 128;
    
    var valid_hit:bool;
    var numIterations: u32;
    
    let hit = ffx_sssr_hierarchical_raymarch(
        screen_uv_space_ray_origin,
        screen_space_ray_direction,
        is_mirror,
        vec2<f32>(screen_size),
        most_detailed_mip,
        g_max_traversal_intersections,
        &valid_hit, 
        &numIterations
    );
    
    if(!valid_hit || is_background(hit.z)){
        return INVALID_RESULT_VALUE;
    }
     
    let world_space_hit      = ffx_sssr_screen_space_to_view_space(hit);
    let world_space_ray      = world_space_hit - view_space_ray.xyz;
    let world_ray_length     = length(world_space_ray);
    
    let depth_thickness = g_depth_buffer_thickness 
        // Add thickness for rough surfaces
        + roughness*10 
        // Add thickness with distance
        + world_ray_length*g_thickness_length_factor;
    
    let confidence = ffx_sssr_validate_hit(
        hit,
        uv,
        world_space_ray,
        vec2<f32>(screen_size),
        depth_thickness,
    );
    
    return vec4( hit.xy, confidence, world_ray_length );
}
    `,
    [
      ti,
      zc,
      Pi,
      qd,
      Tn,
      Gx,
      j4,
      Yp,
      Rc,
      D_,
      P4,
      J4,
      mb,
      vb,
      xb,
      F4,
      q4,
      B4,
      H4,
      W4,
      X4,
    ]
  ),
  Q4 = new Je({
    descriptor: le.from({ label: "ssr", resources: bb, body: K4 }),
    targets: [
      {
        format: "rgba16float",
        blend: Ic.from({
          color: { operation: "add", srcFactor: "one", dstFactor: "zero" },
        }),
      },
    ],
  });
var ep, xo;
class eU {
  constructor(e) {
    b(this, ep);
    b(this, xo, []);
    x(this, "frame_index", 0);
    for (let t = 0; t < 2; t++) {
      const r = new Ht(e.device);
      (r.descriptor.format = "rgba16float"),
        (r.descriptor.usage =
          GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.RENDER_ATTACHMENT),
        (getProperty(this, xo)[t] = r);
    }
  }
  resize(e, t) {
    getProperty(this, xo).forEach((r) => r.resize(e, t));
  }
  graph_pass({
    graph: e,
    input_depth: t,
    input_hzb: r,
    input_color: i,
    input_pbr: n,
    input_normal: o,
    input_velocity: a,
    input_occlusion: c,
    resolution: _,
    camera_current: u,
    camera_previous: d,
    input_environment: h = -1,
    mip: p = 0,
  }) {
    this.resize(..._);
    const v = this.frame_index,
      f = getProperty(this, xo)[v % 2],
      m = getProperty(this, xo)[(v + 1) % 2],
      g = e.import_resource("ssr_history", oe.fromTexture(f.gpu_texture), f),
      E = e.import_resource("ssr_output", oe.fromTexture(m.gpu_texture), m),
      y = [_[0] >>> p, _[1] >>> p],
      A = o4({ graph: e, resolution: _, input_depth: t }),
      T = ht({
        graph: e,
        shader: Q4,
        output_resolution: y,
        inputs: {
          tDepth: A,
          tPBR: n,
          tNormal: o,
          tNoise: qp,
          settings: { max_distance: 4, edge_fade: 0.07, frame_index: v },
          camera: u,
        },
      });
    let C = ht({
      graph: e,
      shader: A4,
      output_resolution: _,
      inputs: { tTrace: T, tColor: i, sLinear: Su },
    });
    return (
      (C = ht({
        graph: e,
        shader: tf,
        output_resolution: _,
        inputs: {
          tInput: C,
          tDepth: t,
          tNormal: o,
          settings: { step_size: 1 },
        },
      })),
      (C = ht({
        graph: e,
        shader: T4,
        output_resolution: _,
        inputs: {
          tInput: C,
          tHistory: g,
          tVelocity: a,
          tOcclusion: c,
          camera_current: u,
          camera_previous: d,
        },
      })),
      (C = ht({
        graph: e,
        shader: tf,
        output_resolution: _,
        inputs: {
          tInput: C,
          tDepth: t,
          tNormal: o,
          settings: { step_size: 2 },
        },
      })),
      (C = ht({
        graph: e,
        shader: tf,
        output: E,
        inputs: {
          tInput: C,
          tDepth: t,
          tNormal: o,
          settings: { step_size: 4 },
        },
      })),
      ht({
        graph: e,
        shader: _4,
        output_resolution: _,
        inputs: {
          tColor: i,
          tDepth: t,
          tReflection: C,
          tNormal: o,
          tPBR: n,
          camera: u,
        },
      })
    );
  }
}
(ep = new WeakMap()), (xo = new WeakMap());
function i0(s, e) {
  let t = 0,
    r = 1,
    i = e;
  for (; i > 0; ) (r = r / s), (t = t + r * (i % s)), (i = (i / s) >>> 0);
  return t;
}
const tU = w.from(
    `
@fragment
fn main(
  @builtin(position) coord : vec4<f32>
)-> @location(0) vec4<f32> {
    return texture_filter_fxaa_31(vec2<u32>(coord.xy), tInput);
}
`,
    [ab]
  ),
  yb = new ResourecGroup();
yb.createGroup().addTexture("tInput");
const rU = new Je({
    descriptor: le.from({ label: "FXAA", body: tU, resources: yb }),
    targets: [{ format: "bgra8unorm" }],
  }),
  Kp = 16,
  Ru = new Array(Kp * 2);
for (let s = 0; s < Kp; s++)
  (Ru[s * 2] = i0(2, s + 1) - 0.5), (Ru[s * 2 + 1] = i0(3, s + 1) - 0.5);
class iU {
  constructor() {
    x(this, "Jitter", [0, 0]);
    x(this, "JitterDelta", [0, 0]);
    x(this, "reset_history", !1);
  }
  set frame_index(e) {
    const r = (e % Kp) * 2,
      i = Ru[r],
      n = Ru[r + 1];
    (this.JitterDelta[0] = this.Jitter[0] - i),
      (this.JitterDelta[1] = this.Jitter[1] - n),
      (this.Jitter[0] = i),
      (this.Jitter[1] = n);
  }
  graph_pass({
    graph: e,
    texture_velocity: t = -1,
    texture_depth_current: r = -1,
    texture_depth_previous: i = -1,
    texture_color_current: n = -1,
    texture_color_history: o = -1,
    texture_output: a,
    camera_current: c = -1,
    camera_previous: _ = -1,
    texture_occlusion: u = -1,
  }) {
    return this.reset_history
      ? ((this.reset_history = !1),
        ht({ graph: e, shader: rU, inputs: { tInput: n }, output: a }))
      : ht({
          graph: e,
          shader: x4,
          inputs: {
            VelocityBuffer: t,
            HistoryTexture: o,
            ColourTexture: n,
            tOcclusion: u,
            camera_current: c,
            camera_previous: _,
            settings: { jitter_delta: this.JitterDelta, jitter: this.Jitter },
          },
          output: a,
        });
  }
}
class sU {
  constructor(e) {
    x(this, "ssao");
    x(this, "taa");
    x(this, "ssr");
    (this.ssao = new t4(e)), (this.taa = new iU()), (this.ssr = new eU(e));
  }
  update(e) {
    (this.taa.frame_index = e), (this.ssr.frame_index = e);
  }
}
const bc = "rgba16float",
  wb = new ResourecGroup();
wb.createGroup().addTexture("tInput", "float").addSampler("sLinear");
const nU = w.from(
    `
fn karis_blur4x4_sample(
    source: texture_2d<f32>,
    sampler_linear: sampler,
    uv: vec2<f32>,
    texel_size: vec2<f32>
) -> vec3<f32>{

    let c00 = uv - texel_size;
    let c01 = vec2( c00.x               , c00.y + texel_size.y*2.0  );
    let c10 = vec2( c00.x + texel_size.x*2.0 , c00.y                );
    let c11 = vec2( c10.x               , c01.y                );
    
    let t00 = textureSampleLevel(source, sampler_linear, c00, 0).rgb;
    let t01 = textureSampleLevel(source, sampler_linear, c01, 0).rgb;
    let t10 = textureSampleLevel(source, sampler_linear, c10, 0).rgb;
    let t11 = textureSampleLevel(source, sampler_linear, c11, 0).rgb;
    
    let luma00 = rgb_to_luminance(t00);
    let luma01 = rgb_to_luminance(t01);
    let luma10 = rgb_to_luminance(t10);
    let luma11 = rgb_to_luminance(t11);
    
    // apply Karis average weighting based on luma
    let w00 = 1.0 / (1.0 + luma00);
    let w10 = 1.0 / (1.0 + luma10);
    let w01 = 1.0 / (1.0 + luma01);
    let w11 = 1.0 / (1.0 + luma11);
    
    let norm = 1.0 / (w00 + w10 + w01 + w11);
    
    return (
              t00 * w00 
            + t10 * w10
            + t01 * w01
            + t11 * w11
    ) * norm;
}
    `,
    [_h]
  ),
  oU = w.from(
    `
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {

    let target_coord_i = vec2<u32>(coord.xy);
                
    let source_resolution = textureDimensions(tInput);
    
    let texel_uv_size = 1.0 / vec2f(source_resolution);
    
    let source_uv = uv;

    var result  = karis_blur4x4_sample(tInput, sLinear, source_uv + vec2(-1, -1) * texel_uv_size, texel_uv_size) * 0.125;
        result += karis_blur4x4_sample(tInput, sLinear, source_uv + vec2( 1, -1) * texel_uv_size, texel_uv_size) * 0.125;
        result += karis_blur4x4_sample(tInput, sLinear, source_uv, texel_uv_size) * 0.5;
        result += karis_blur4x4_sample(tInput, sLinear, source_uv + vec2(-1,  1) * texel_uv_size, texel_uv_size) * 0.125;
        result += karis_blur4x4_sample(tInput, sLinear, source_uv + vec2( 1,  1) * texel_uv_size, texel_uv_size) * 0.125;

    return vec4(result, 1.0);
}
    `,
    [nU, Rc]
  ),
  aU = new Je({
    descriptor: le.from({
      label: "Bloom/downsample-mip0",
      resources: wb,
      body: oU,
    }),
    targets: [{ format: bc }],
  }),
  Tb = new ResourecGroup();
Tb.createGroup().addTexture("tInput", "float").addSampler("sLinear");
const cU = w.from(
    `
fn blur4x4_sample(
    source: texture_2d<f32>,
    sampler_linear: sampler,
    uv: vec2<f32>,
    texel_size: vec2<f32>
) -> vec3<f32>{

    let c00 = uv - texel_size;
    let c01 = vec2( c00.x               , c00.y + texel_size.y*2.0  );
    let c10 = vec2( c00.x + texel_size.x*2.0 , c00.y                );
    let c11 = vec2( c10.x               , c01.y                );
    
    let t00 = textureSampleLevel(source, sampler_linear, c00, 0).rgb;
    let t01 = textureSampleLevel(source, sampler_linear, c01, 0).rgb;
    let t10 = textureSampleLevel(source, sampler_linear, c10, 0).rgb;
    let t11 = textureSampleLevel(source, sampler_linear, c11, 0).rgb;
    
    return    t00 * 0.25 
            + t10 * 0.25
            + t01 * 0.25
            + t11 * 0.25;
}
    `,
    []
  ),
  lU = w.from(
    `
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {

    let target_coord_i = vec2<u32>(coord.xy);
                
    let source_resolution = textureDimensions(tInput);
    
    let source_resolution_f = vec2f(source_resolution);
    
    let texel_uv_size = 1.0 / source_resolution_f;
            
    let sample_origin = uv;

    var result:vec3<f32>;

    result += blur4x4_sample(tInput, sLinear, sample_origin, texel_uv_size) * 0.5;
    result += blur4x4_sample(tInput, sLinear, sample_origin + vec2(-1, -1) * texel_uv_size, texel_uv_size) * 0.125;
    result += blur4x4_sample(tInput, sLinear, sample_origin + vec2( 1, -1) * texel_uv_size, texel_uv_size) * 0.125;
    result += blur4x4_sample(tInput, sLinear, sample_origin + vec2(-1,  1) * texel_uv_size, texel_uv_size) * 0.125;
    result += blur4x4_sample(tInput, sLinear, sample_origin + vec2( 1,  1) * texel_uv_size, texel_uv_size) * 0.125;
    
    return vec4(result, 1.0);
}
    `,
    [cU, Rc]
  ),
  _U = new Je({
    descriptor: le.from({
      label: "Bloom/downsample-standard",
      resources: Tb,
      body: lU,
    }),
    targets: [{ format: bc }],
  }),
  uU = Struct.from({ intensity: "f32" }),
  Eb = new ResourecGroup();
Eb.createGroup()
  .addTexture("tBloom", "float")
  .addTexture("tSource")
  .addSampler("sLinear")
  .addUniform("settings", uU);
const dU = w.from(`
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {

    let texel_bloom = textureSampleLevel(tBloom, sLinear, uv, 0);
    let texel_source = textureLoad(tSource, vec2<u32>(coord.xy), 0);

    return texel_source + texel_bloom * settings.intensity;
}
`),
  hU = new Je({
    descriptor: le.from({ label: "Bloom/Mix", resources: Eb, body: dU }),
    targets: [{ format: bc }],
  }),
  Ab = new ResourecGroup();
Ab.createGroup()
  .addTexture("tCurrent", "float")
  .addTexture("tPrevious", "float")
  .addSampler("sLinear");
const fU = w.from(
    `
fn blur_upsample(
    source: texture_2d<f32>,
    sampler_linear: sampler,
    uv: vec2<f32>,
    texel_size: vec2<f32>
) -> vec3<f32>{
    
    const offsets = array<vec2<f32>,9 >(
        vec2(-1,-1), vec2( 0,-1), vec2(1,-1),
        vec2(-1, 0), vec2( 0, 0), vec2(1, 0),
        vec2(-1, 1), vec2( 0, 1), vec2(1, 1),
    );
    
    // tent filter
    const weights = array<f32, 9>(
        1.0, 2.0, 1.0,
        2.0, 4.0, 2.0,
        1.0, 2.0, 1.0,
    );
    
    var result:vec3<f32>;
    
    for(var i=0; i<9; i++){
       let texel = textureSampleLevel(source, sampler_linear, uv + texel_size*offsets[i], 0).rgb;
       
       result += texel * weights[i];
    }
    
    // normalization factor
    const scale = 1.0 / 16.0;
    
    return result * scale;
}
    `,
    []
  ),
  pU = w.from(
    `
const PERSISTENCE = 1;

@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {

    let target_coord_i = vec2<u32>(coord.xy);
    
    let previous_pixel_uv_size = 1.0 / vec2f(textureDimensions(tPrevious));
    
    let previous = blur_upsample(tPrevious, sLinear, uv, previous_pixel_uv_size);
    let current = textureLoad(tCurrent, target_coord_i, 0).rgb;
    
    let result = (previous * PERSISTENCE + current);
    
    return vec4(result, 1.0);
}
    `,
    [fU, Rc]
  ),
  mU = new Je({
    descriptor: le.from({
      label: "Bloom/upsample+blur+convolve",
      resources: Ab,
      body: pU,
    }),
    targets: [{ format: bc }],
  });
function gU({
  graph: s,
  input: e = -1,
  resolution: t,
  intensity: r = 0.5,
  mips: i = 5,
}) {
  function n(p, v, f) {
    const m = f.encoder,
      g = v.get(p.input),
      E = v.get(p.output),
      y = f.graphics.device.createSampler(Su);
    let A = E.obtainView(Ve.from({ baseMipLevel: 0, mipLevelCount: 1 }));
    aU.draw({
      encoder: m,
      bindings: { tInput: g.obtainView(), sLinear: y },
      colorAttachments: [{ view: A, storeOp: "store", loadOp: "clear" }],
    });
    for (let T = 1; T < i; T++) {
      const z = E.obtainView(Ve.from({ baseMipLevel: T, mipLevelCount: 1 }));
      _U.draw({
        encoder: m,
        bindings: { tInput: A, sLinear: y },
        colorAttachments: [{ view: z, storeOp: "store", loadOp: "clear" }],
      }),
        (A = z);
    }
  }
  const o = {},
    a = s.add("Bloom/downscale", o, n),
    c = [t[0] >> 1, t[1] >> 1];
  (o.input = a.read(e)),
    (o.output = a.create(
      "downscale map",
      oe.from({
        resolution: c,
        format: bc,
        enableMips: !0,
        usage:
          GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
      })
    ));
  function _(p, v, f) {
    const m = f.encoder,
      g = v.get(p.input),
      E = v.get(p.output),
      y = f.graphics.device.createSampler(Su);
    let A = g.obtainView(Ve.from({ baseMipLevel: i - 1, mipLevelCount: 1 }));
    for (let T = i - 2; T >= 0; T--) {
      const z = g.obtainView(Ve.from({ baseMipLevel: T, mipLevelCount: 1 })),
        C = E.obtainView(Ve.from({ baseMipLevel: T, mipLevelCount: 1 }));
      mU.draw({
        encoder: m,
        bindings: { tCurrent: z, tPrevious: A, sLinear: y },
        colorAttachments: [{ view: C, storeOp: "store", loadOp: "clear" }],
      }),
        (A = C);
    }
  }
  const u = {},
    d = s.add("Bloom/upscale", u, _);
  return (
    (u.input = d.read(o.output)),
    (u.output = d.create(
      "upscale map",
      oe.from({
        resolution: c,
        format: bc,
        enableMips: !0,
        usage:
          GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
      })
    )),
    ht({
      graph: s,
      shader: hU,
      output_resolution: t,
      inputs: {
        tBloom: u.output,
        tSource: e,
        sLinear: Su,
        settings: { intensity: r * (1 / i) },
      },
    })
  );
}
const vU = w.from(`
 fn linearize_depth( projection_matrix:mat4x4<f32>, z_ndc:f32 ) ->f32{
            
    var depthLinearizeAdd = projection_matrix[2][2];
    let depthLinearizeMul = -projection_matrix[3][2];
                
    // correct the handedness issue. need to make sure this below is correct, but I think it is.
    if( depthLinearizeMul * depthLinearizeAdd < 0.0 ){
        depthLinearizeAdd = -depthLinearizeAdd;
    }
    
    let z_compensated =  z_ndc;
    
    let z_eye = depthLinearizeMul / (depthLinearizeAdd - z_compensated);
        
    return  z_eye; // reverse Z
}
`),
  xU = `

      @group(0) @binding(0) var source : texture_2d<f32>;
            
      const EffectRadius = ${tb};
      const EffectFalloffRange = ${eb};
      
      fn DepthMIPFilter( depth0:f32, depth1:f32, depth2:f32, depth3:f32 ) -> f32
        {
            let maxDepth = max( max( depth0, depth1 ), max( depth2, depth3 ) );
        
            const depthRangeScaleFactor = 0.75; // found empirically :)
            
            const effectRadius              = depthRangeScaleFactor * EffectRadius;
            const falloffRange              =  EffectFalloffRange * effectRadius;

            const falloffFrom       = effectRadius * (1-EffectFalloffRange);
            
            // fadeout precompute optimisation
            const falloffMul        = -1.0 / ( falloffRange );
            const falloffAdd        = falloffFrom / ( falloffRange ) + 1.0;
        
            let weight0 = saturate( (maxDepth-depth0) * falloffMul + falloffAdd );
            let weight1 = saturate( (maxDepth-depth1) * falloffMul + falloffAdd );
            let weight2 = saturate( (maxDepth-depth2) * falloffMul + falloffAdd );
            let weight3 = saturate( (maxDepth-depth3) * falloffMul + falloffAdd );
        
            let weightSum = weight0 + weight1 + weight2 + weight3;
            
            return (weight0 * depth0 + weight1 * depth1 + weight2 * depth2 + weight3 * depth3) / weightSum;
        }
        
      @fragment
      fn main(@builtin(position) coord : vec4<f32>) -> @location(0) f32 {
            
            
            let source_size = textureDimensions(source, 0);
            let limit =  vec2u(source_size - 1u);
            
            let p0 = min( vec2u( u32(coord.x) << 1,  u32(coord.y) << 1), limit);
            let p1 = min( p0 + vec2u(1,0), limit );
            let p2 = min( p0 + vec2u(0,1), limit );
            let p3 = min( p0 + vec2u(1,1), limit );
           
            let depth0 = textureLoad(source, p0, 0).r;
            let depth1 = textureLoad(source, p1, 0).r;
            let depth2 = textureLoad(source, p2, 0).r;
            let depth3 = textureLoad(source, p3, 0).r;
            
            let depth = DepthMIPFilter(depth0, depth1, depth2, depth3);
            
            return depth;
      }
`,
  s0 = Mc({
    fragment_code: xU,
    layout: dr.forStage(GPUShaderStage.FRAGMENT, [[kr.unfilterableFloat]]),
    targets: [{ format: "r32float" }],
  }),
  bU = w
    .from(
      `

@group(0) @binding(0) var source : texture_2d<f32>;
@group(0) @binding(1) var<uniform> camera: ${ce.wgsl_ref};
      
@fragment
fn main(@builtin(position) coord : vec4<f32>) -> @location(0) f32 {
    
    let depth_raw = textureLoad(source,vec2u(coord.xy), 0).r;
    
    let depth = linearize_depth(camera.projection_matrix, depth_raw);
    
    return depth;
}
      
`,
      [ce.declaration_chunk, vU]
    )
    .compile(),
  n0 = Mc({
    fragment_code: bU,
    layout: dr.forStage(GPUShaderStage.FRAGMENT, [
      [kr.unfilterableFloat, Ee.uniform],
    ]),
    targets: [{ format: "r32float" }],
  });
function yU(s, e, t, r, i) {
  const n = s.render_pipelines.obtain(n0),
    o = t.obtainView(Ve.from({ baseMipLevel: 0, mipLevelCount: 1 })),
    a = e.beginRenderPass({
      colorAttachments: [{ view: o, loadOp: "clear", storeOp: "store" }],
    }),
    c = s.bind_groups.obtain(
      zi.from(n0.layout.bindGroupLayouts[0], [r, { buffer: i }])
    );
  return a.setPipeline(n), a.setBindGroup(0, c), a.draw(3), a.end(), o;
}
function wU({
  graph: s,
  depth: e,
  resolution: t,
  max_mips: r = Number.POSITIVE_INFINITY,
  camera: i,
}) {
  const n = {};
  function o(c, _, u) {
    const d = _.get(c.input_depth),
      h = _.get(c.output_depth),
      p = _.get(c.camera),
      v = u.graphics,
      f = v.render_pipelines.obtain(s0),
      m = Math.min(r, h.gpu_texture.mipLevelCount),
      g = u.encoder;
    let E = d.obtainView();
    E = yU(v, g, h, E, p);
    for (let y = 1; y < m; y++) {
      const A = h.obtainView(Ve.from({ baseMipLevel: y, mipLevelCount: 1 })),
        T = g.beginRenderPass({
          colorAttachments: [{ view: A, loadOp: "clear", storeOp: "store" }],
        }),
        z = v.bind_groups.obtain(zi.from(s0.layout.bindGroupLayouts[0], [E]));
      T.setPipeline(f), T.setBindGroup(0, z), T.draw(3), T.end(), (E = A);
    }
  }
  const a = s.add("depth mipmap", n, o);
  return (
    (n.input_depth = a.read(e)),
    (n.camera = a.read(i)),
    (n.output_depth = a.create(
      "mipmap",
      oe.from({
        resolution: t,
        usage:
          GPUTextureUsage.TEXTURE_BINDING |
          GPUTextureUsage.RENDER_ATTACHMENT |
          GPUTextureUsage.COPY_DST,
        format: "r32float",
        enableMips: !0,
      })
    )),
    n.output_depth
  );
}
const Qp = w.from(
    `
fn get_view_space_depth(device_depth:f32, camera:${ce.wgsl_ref} )-> f32{
    let device_to_view_depth = camera.device_depth_to_view_space;
    
    return device_to_view_depth[1] / (device_depth - device_to_view_depth[0]);
}
    `,
    [ce.declaration_chunk]
  ),
  TU = w.from(`
fn compute_ndc(fPxPos:vec2<f32>,  iSize: vec2<i32>) -> vec2<f32>{
    return fPxPos / vec2<f32>(iSize) * vec2(2.0f, -2.0f) + vec2(-1.0f, 1.0f);
}    
    `),
  em = w.from(
    `
fn get_view_space_position(
    iViewportPos: vec2<f32>,
    iViewportSize: vec2<i32>, 
    fDeviceDepth: f32,
    camera: ${ce.wgsl_ref}
) -> vec3<f32>{ 

    let device_to_view_depth = camera.device_depth_to_view_space;

    let Z = get_view_space_depth(fDeviceDepth, camera);

    let fNdcPos = compute_ndc(iViewportPos, iViewportSize);
    
    let X = device_to_view_depth[2] * fNdcPos.x * Z;
    let Y = device_to_view_depth[3] * fNdcPos.y * Z;

    return vec3(X, Y, Z);

}
`,
    [Qp, TU]
  ),
  EU = w.from(`
fn is_on_screen_i32(pixel:vec2<i32>, size:vec2<i32>) -> bool {
    return all(pixel >= vec2(0)) && all(pixel < size);        
}
`),
  AU = w.from(
    `
fn fsr2_compute_depth_clip(
    previous_coord: vec2<f32>,
    current_depth_sample: f32,
    render_size: vec2<i32>
) -> f32 {
    let fCurrentDepthViewSpace = get_view_space_depth(current_depth_sample, camera_current);
    
    let sample_coord_fract = fract(previous_coord + 0.5);
    let sample_coord_i = vec2<i32>(previous_coord);
    let bilinear_weights = get_bilinear_weights(sample_coord_fract);

    var fDilatedSum = 0.0f;
    var fDepth = 0.0f;
    var fWeightSum = 0.0f;
    
    const offsets = array<vec2<i32>,4>(
        vec2(0,0),
        vec2(1,0),
        vec2(0,1),
        vec2(1,1)
    );
    
    // Reconstructed depth usage
    const fReconstructedDepthBilinearWeightThreshold = 0.01f;

    for (var iSampleIndex = 0; iSampleIndex < 4; iSampleIndex++) {

        let iOffset = offsets[iSampleIndex];
        let iSamplePos = sample_coord_i + iOffset;

        if (is_on_screen_i32(iSamplePos, render_size)) {
            let fWeight = bilinear_weights[iSampleIndex];
            
            if (fWeight > fReconstructedDepthBilinearWeightThreshold) {

                let fPrevDepthSample = texture_sample_red_max_st(PrevDepthBuffer, previous_coord + vec2<f32>(iOffset) - 0.5, 0);
                let fPrevNearestDepthViewSpace = get_view_space_depth(fPrevDepthSample, camera_previous);

                let fDepthDiff = fCurrentDepthViewSpace - fPrevNearestDepthViewSpace;

                if (fDepthDiff > 0.0f) {

                    // NOTE: assumed inverted depth
                    let fPlaneDepth = min(fPrevDepthSample, current_depth_sample);
                    
                    let render_size_f = vec2<f32>(render_size);
                    
                    let fCenter = get_view_space_position(vec2<f32>(render_size / 2), render_size, fPlaneDepth, camera_current);
                    let fCorner = get_view_space_position(vec2(0.0, 0.0), render_size, fPlaneDepth, camera_current);

                    let fHalfViewportWidth = length(render_size_f);
                    let fDepthThreshold = max(fCurrentDepthViewSpace, fPrevNearestDepthViewSpace);

                    const Ksep = 1.37e-05f;
                    
                    let Kfov = length(fCorner) / length(fCenter);
                    let fRequiredDepthSeparation = Ksep * Kfov * fHalfViewportWidth * fDepthThreshold;

                    let fResolutionFactor = saturate(length(render_size_f) / length(vec2<f32>(1920.0f, 1080.0f)));
                    let fPower = mix(1.0f, 3.0f, fResolutionFactor);
                    
                    fDepth += pow(saturate(fRequiredDepthSeparation / fDepthDiff), fPower) * fWeight;
                    fWeightSum += fWeight;
                }
            }
        }
    }
    
    const DepthClipBaseScale = 4.0;
    
    if(fWeightSum > 0){
        return DepthClipBaseScale * saturate(fDepth / fWeightSum);
    }else{
        return DepthClipBaseScale * 1.0;
    }
    
    
}    
    `,
    [em, Qp, F_, EU, p4, Zp]
  ),
  Sb = new ResourecGroup();
Sb.createGroup()
  .addTexture("DepthBuffer")
  .addTexture("PrevDepthBuffer")
  .addTexture("VelocityBuffer")
  .addUniform("camera_current", ce)
  .addUniform("camera_previous", ce);
const SU = w.from(
    `

@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
) -> @location(0) f32 {

    let screenST = vec2<i32>( coord.xy );
    
    let velocity = taa_get_velocity( VelocityBuffer, screenST );
    
    let prevFrameScreenST = coord.xy + velocity.xy;
    
    let depth = textureLoad( DepthBuffer, screenST, 0 ).r;
    
    // get depth confidence factor, larger then 0, assume the history is valid
    let confidence =  fsr2_compute_depth_clip(prevFrameScreenST , depth, vec2<i32>(textureDimensions(DepthBuffer)));

    return saturate(confidence);
}
    `,
    [W_, AU]
  ),
  zU = new Je({
    descriptor: le.from({
      label: "Depth Occlusion Clip",
      body: SU,
      resources: Sb,
    }),
    targets: [{ format: "r32float" }],
  }),
  fu = new Float64Array(16);
function CU(s, e, t, r) {
  const i = 2 / e,
    n = 2 / t,
    o = e / 2,
    a = t / 2,
    c = [i, 0, 0, 0, 0, -n, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1],
    _ = [o, 0, 0, 0, 0, -a, 0, 0, 0, 0, 1, 0, o, a, 0, 1];
  Ir(fu, _, r), Ir(fu, fu, c), s.set(fu);
}
function UU(s, e, t) {
  const r = new Float64Array(16);
  r.set(e.projection_matrix), Ir(r, il, r);
  const i = new Float64Array(16);
  Ir(i, r, e.view_matrix);
  const n = new Float64Array(16);
  n.set(t.projection_matrix), Ir(n, il, n);
  const o = new Float64Array(16);
  Ir(o, n, t.view_matrix);
  const a = s;
  na(a, i), Ir(a, o, a);
}
const zb = new ResourecGroup();
zb.createGroup()
  .addTexture("DepthBuffer")
  .addUniform("CurToPrevXForm", "mat4x4<f32>");
const IU = w.from(
    `
@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
)-> @location(0) vec4<f32>{
    
    // offset toward pixel center
    let CurPixel = coord.xy + 0.5;
    
    let Depth = textureLoad(DepthBuffer, vec2<u32>(coord.xy), 0).r;
    
    let position_current = vec3(CurPixel, Depth);
    
    let position_previous = v3_matrix4_project( position_current, CurToPrevXForm) ;

    var delta = position_previous - position_current;
        
        //TODO check result, seems incorrect when camera moves along local Z (foward/back)
    return vec4(delta.xy, 0.0, 0.0);
}
`,
    [Tn]
  ),
  NU = new Je({
    descriptor: le.from({ label: "camera velocity", resources: zb, body: IU }),
    targets: [{ format: "rg16float" }],
  });
function MU({ graph: s, texture_depth: e = -1, resolution: t, view: r }) {
  const i = r.camera.camera,
    n = r.gpu_previous_camera_state.camera,
    o = new Float64Array(16);
  UU(o, i, n);
  const a = new Float32Array(16),
    c = t[0],
    _ = t[1];
  return (
    CU(a, c, _, o),
    ht({
      graph: s,
      shader: NU,
      inputs: { DepthBuffer: e, CurToPrevXForm: a },
      output_resolution: t,
    })
  );
}
var bo, Md, Cb;
class kU {
  constructor(e) {
    b(this, Md);
    x(this, "scene_contexts", new Map());
    b(this, bo);
    S(this, bo, e);
  }
  obtain(e) {
    let t = this.scene_contexts.get(e);
    return (
      t === false &&
        ((t = P(this, Md, Cb).call(this, e)), this.scene_contexts.set(e, t)),
      t
    );
  }
}
(bo = new WeakMap()),
  (Md = new WeakSet()),
  (Cb = function (e) {
    const t = new NA(getProperty(this, bo), e);
    return (
      (t.geometries = getProperty(this, bo).geometries),
      (t.materials = getProperty(this, bo).materials),
      t
    );
  });
const RU = w.from(`
fn texture_sample_bilinear_exact(source: texture_2d<f32>, source_texel:vec2<f32>, texture_lod: u32)-> vec4<f32>{
    let source_size = textureDimensions(source, texture_lod);
    
    let max_texel = source_size - 1u;
        
    let source_texel_fract = fract(source_texel);
  
    let c00 = clamp(vec2u(source_texel), vec2(0), max_texel);
    let c01 = vec2( c00.x, min(max_texel.y, c00.y + 1u) );
    let c10 = vec2( min(max_texel.x, c00.x+1u), c00.y );
    let c11 = vec2( c10.x, c01.y );
  
    let t00 = textureLoad(source, c00, texture_lod);
    let t01 = textureLoad(source, c01, texture_lod);
    let t10 = textureLoad(source, c10, texture_lod);
    let t11 = textureLoad(source, c11, texture_lod);
    
    let h0 = mix(t00, t10, source_texel_fract.x);
    let h1 = mix(t01, t11, source_texel_fract.x);
  
    return mix(h0, h1, source_texel_fract.y);
}
`),
  LU = w.from(`
fn texture_sample_quad_custom_weights(source: texture_2d<f32>, pixel:vec2<u32>, weights: vec4<f32>, texture_lod: u32) -> vec4<f32>{

    let t00 = textureLoad(source, pixel, texture_lod);
    let t10 = textureLoad(source, vec2(pixel.x + 1u, pixel.y), texture_lod);
    let t01 = textureLoad(source, vec2(pixel.x, pixel.y + 1u), texture_lod);
    let t11 = textureLoad(source, vec2(pixel.x + 1u, pixel.y + 1u), texture_lod);
    
    return t00 * weights.x + t10 * weights.y + t01 * weights.z + t11 * weights.w;
    
}
    `),
  PU = w.from(`
fn fast_rcp( x: f32 ) -> f32{

    let x0 = bitcast<i32>(x);
    
    let x1 = 0x7EF311C2 - x0;
    
    return bitcast<f32>(x1);
    
}
    `),
  Ub = w.from(
    `
fn z_matrix_project(z: f32, m: mat4x4<f32>) -> f32{
    
//    return  -m[3][2] / (m[2][2] + z - 1.0 );
//    return  1/ ( - m[3][2] *  z );
    return  1/ ( - m[2][3] *  z );
//    return  m[2][3] / ( z );
    
    
}
    `,
    [PU]
  ),
  BU = w.from(
    `
fn depth_to_view_z_vec4(depths:vec4<f32>, clip_to_view: mat4x4<f32>) -> vec4<f32>{
    return vec4(
        z_matrix_project(depths.x, clip_to_view),
        z_matrix_project(depths.y, clip_to_view),
        z_matrix_project(depths.z, clip_to_view),
        z_matrix_project(depths.w, clip_to_view),
    );
}
    `,
    [Ub]
  ),
  OU = w.from(`
fn interpolate_bilinear_f32(values:vec4<f32>, fraction: vec2<f32>) -> f32{

    let h0 = mix(values.x, values.y, fraction.x);
    let h1 = mix(values.z, values.w, fraction.x);
  
    return mix(h0, h1, fraction.y);
}
    `),
  Ib = w.from(`
fn texture_gather_channel(source: texture_2d<f32>, coord: vec2<f32>, channel: u32, texture_lod: u32)-> vec4<f32>{

    let c00 = vec2<u32>(coord);
    let c01 = vec2( c00.x,  c00.y + 1u );
    let c10 = vec2( c00.x + 1u, c00.y );
    let c11 = vec2( c10.x, c01.y );
    
    let t00 = textureLoad(source, c00, texture_lod)[channel];
    let t01 = textureLoad(source, c01, texture_lod)[channel];
    let t10 = textureLoad(source, c10, texture_lod)[channel];
    let t11 = textureLoad(source, c11, texture_lod)[channel];
    
    return  vec4(t01, t11, t10, t00);

}
`),
  Nb = new ResourecGroup();
Nb.createGroup()
  .addTexture("tDepthCurrent")
  .addTexture("tDepthPrevious")
  .addTexture("tNormal", "uint")
  .addTexture("tVelocity")
  .addUniform("camera_current", ce)
  .addUniform("camera_previous", ce);
const Mb = w.from(
    `
fn get_view_space_depth_vec4(ndc_depth: vec4<f32>, camera: ${ce.wgsl_ref}) -> vec4<f32>{
    return vec4(
        get_view_space_depth(ndc_depth.x, camera),
        get_view_space_depth(ndc_depth.y, camera),
        get_view_space_depth(ndc_depth.z, camera),
        get_view_space_depth(ndc_depth.w, camera),
    );
}
`,
    [ce.declaration_chunk, Qp]
  ),
  FU = w.from(
    `

@fragment
fn main(
    @builtin(position) coord: vec4<f32>,
    @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {
    let render_size = vec2<i32>(textureDimensions(tDepthCurrent,0));

    let coord_i = vec2<i32>(coord.xy);

    let depth = textureLoad(tDepthCurrent, coord_i, 0).r;
    
    let velocity = taa_get_velocity(tVelocity, coord_i);
    
    
    if(depth == 0.0){
        // hit sky
        return vec4(velocity, 0.0, 0.0);
    }
    
    let previous_coord = coord.xy - velocity ;
    
    let position_vs = get_view_space_position(coord.xy, render_size, depth, camera_current);
    let distance_to_point = position_vs.z;
    
    // get geometric normal
    let normal_ws = decode_g_buffer_normal( textureLoad(tNormal, coord_i, 0).zw );
    
    // move normal to view space
    var normal_vs = v3_matrix4_rotate(normal_ws, camera_current.transform_inverse);
    
    
    let previous_position_vs = get_view_space_position(previous_coord, render_size, depth, camera_previous);
 
    let prev_gather_coord =  previous_coord;
    
    let ndotv = dot(normal_vs, normalize(position_vs));
    let plane_dist_prev_dz =  min(normal_vs.z, -0.2);
    
    let depth_previous = texture_gather_channel(tDepthPrevious, prev_gather_coord, 0, 0).wzxy;
    let prev_view_z = get_view_space_depth_vec4(depth_previous, camera_previous);
    let quad_distances = abs(plane_dist_prev_dz * (prev_view_z - previous_position_vs.z));
    
    let acceptance_threshold = 0.001 * (1080 / f32(render_size.y));
    
    let validity_theshold = vec4(acceptance_threshold * distance_to_point / -ndotv);
    
    var quad_validity = step(quad_distances, validity_theshold);
    
    let bilinear_px00 = vec2<i32>(trunc(previous_coord + 0.5));
    let bilinear_px10 = vec2<i32>(bilinear_px00.x + 1, bilinear_px00.y);
    let bilinear_px01 = vec2<i32>(bilinear_px00.x, bilinear_px00.y + 1);
    let bilinear_px11 = vec2<i32>(bilinear_px10.x, bilinear_px01.y);
    
    quad_validity.x *= f32(all(bilinear_px00 >= vec2(0)) && all(bilinear_px00 < render_size));
    quad_validity.y *= f32(all(bilinear_px10 >= vec2(0)) && all(bilinear_px10 < render_size));
    quad_validity.z *= f32(all(bilinear_px01 >= vec2(0)) && all(bilinear_px01 < render_size));
    quad_validity.w *= f32(all(bilinear_px11 >= vec2(0)) && all(bilinear_px11 < render_size));
        
    let validity = dot(quad_validity, vec4(1.0, 2.0, 4.0, 8.0)) / 15.0;
    
    
    let texel_center_offset = fract(previous_coord + 0.5) - 0.5;
    let accuracy = 1.0 - texel_center_offset.x - texel_center_offset.y;
    
    return vec4(velocity, validity, accuracy);
}
    `,
    [em, Pi, lh, Tn, Ib, Mb, F_, W_]
  );
new Je({
  descriptor: le.from({
    label: "Temporal Reprojection",
    body: FU,
    resources: Nb,
  }),
  targets: [{ format: "rgba16float" }],
});
const DU = w.from(
    `
fn compute_reprojection_weight(
     coord: vec2<f32>,
     coord_previous: vec2<f32>,
     normal: vec3<f32>,
     depth: f32,
     velocity: vec2<f32>,
     image_dim: vec2<i32>
) -> vec4<f32> {

    let image_size_f32 = vec2<f32>(image_dim);
    
    
    let prev_gather_coord =  coord_previous ;
    
    let depth_previous = texture_gather_channel(PrevDepthBuffer, prev_gather_coord, 0, 0).wzxy;
    let depth_previous_interpolated = interpolate_bilinear_f32(depth_previous,  fract(coord_previous));
    
    let position_current_vs = get_view_space_position(coord, image_dim, depth, camera_current );

    let distance_to_point = position_current_vs.z;
    
    var normal_vs = normalize( (   camera_current.transform_inverse *  vec4(normal, 0.0) ).xyz );

    // compute disocclusion basing on plane distance
    let prev_view_z = get_view_space_depth_vec4(depth_previous, camera_current);
    let position_previous_vs = get_view_space_position(coord_previous, image_dim, depth, camera_current );

    let ndotv = dot(normal_vs, normalize(position_current_vs));
    let plane_dist_prev_dz =  min(normal_vs.z, -0.2);
  
    let quad_distance_deltas = (prev_view_z - position_previous_vs.z);
    
    let quad_distances = abs( plane_dist_prev_dz * quad_distance_deltas );
    
    let acceptance_threshold = 0.001 * (1080 / image_size_f32.y);
    let validity_theshold = vec4(acceptance_threshold * distance_to_point / -ndotv);
    
    var quad_validity = step(quad_distances, validity_theshold);
    
    let bilinear_px00 = vec2<i32>(trunc(coord_previous));
    let bilinear_px10 = vec2<i32>(bilinear_px00.x + 1, bilinear_px00.y);
    let bilinear_px01 = vec2<i32>(bilinear_px00.x, bilinear_px00.y + 1);
    let bilinear_px11 = vec2<i32>(bilinear_px10.x, bilinear_px01.y);
    
    quad_validity.x *= f32(all(bilinear_px00 >= vec2(0)) && all(bilinear_px00 < vec2<i32>(image_dim)));
    quad_validity.y *= f32(all(bilinear_px10 >= vec2(0)) && all(bilinear_px10 < vec2<i32>(image_dim)));
    quad_validity.z *= f32(all(bilinear_px01 >= vec2(0)) && all(bilinear_px01 < vec2<i32>(image_dim)));
    quad_validity.w *= f32(all(bilinear_px11 >= vec2(0)) && all(bilinear_px11 < vec2<i32>(image_dim)));
    
    quad_validity *= get_bilinear_weights(fract(coord_previous));

//return vec4(-sign(normal_vs.z) * pow(abs(normal_vs.z), 5.0));
//return vec4(abs(prev_view_z_interpolated - depth));
//return vec4(prev_view_z_interpolated);
//return vec4(quad_distances);
//return vec4(quad_distances / -distance_to_point);
//return vec4(1 - quad_distances);
//return vec4(distance_to_point);
    
    return   quad_validity;

}
`,
    [zc, Ib, lh, BU, OU, Ub, F_, Mb, em]
  ),
  uh = new ResourecGroup();
uh.createGroup()
  .addTexture("s_Input", "uint")
  .addTexture("s_HistoryMoments")
  .addStorageTexture("s_Moments", "rgba16float");
uh.createGroup()
  .addTexture("VelocityBuffer")
  .addTexture("DepthBuffer")
  .addTexture("PrevDepthBuffer")
  .addTexture("NormalBuffer", "uint")
  .addTexture("tOcclusion")
  .addUniform("Jitter", "vec2<f32>")
  .addUniform("camera_current", ce)
  .addUniform("camera_previous", ce);
uh.createGroup()
  .addStorageBuffer("DenoiseTileCount", "atomic<u32>", !0)
  .addStorageBuffer("DenoiseTileData", "array<vec2<u32>>", !0)
  .addStorageBuffer("ShadowTileCount", "atomic<u32>", !0)
  .addStorageBuffer("ShadowTileData", "array<vec2<u32>>", !0);
const GU = w.from(
    `

const NUM_THREADS_X = 8;
const NUM_THREADS_Y = 8;

const RAY_MASK_SIZE_X = 8;
const RAY_MASK_SIZE_Y = 4;

var<private> p_workgroup_id: vec3<i32>;
var<private> p_local_invocation_id: vec3<i32>;
var<private> p_global_invocation_id: vec3<i32>;

var<workgroup> g_shadow_hit_masks: array< array< u32, 6 >, 3 >;
var<workgroup> g_mean_accumulation: array< array< f32, 24 >, 8>;
var<workgroup> g_should_denoise: u32;

fn unpack_shadow_hit_value(coord: vec2<i32>) -> f32
{
    // Find the global coordinate for the top left corner of the current work group.
    let work_group_start_coord = vec2<i32>(p_workgroup_id.xy) * vec2<i32>(NUM_THREADS_X, NUM_THREADS_Y);

    // Find the global coordinate for the top left corner of the cache.
    let cache_start_coord = work_group_start_coord - vec2i(RAY_MASK_SIZE_X, RAY_MASK_SIZE_Y * 2);

    // Compute the local coordinate within the cache for the requested global coordinate.
    let unpacked_cache_coord = coord - cache_start_coord;

    // From the unpacked local coordinate, compute which ray mask the requested hit belongs to.
    // aka the packed local coordinate.
    let packed_cache_coord = unpacked_cache_coord / vec2<i32>(RAY_MASK_SIZE_X, RAY_MASK_SIZE_Y);

    // From the packed local coordinate, compute the unpacked local coordinate for the start of the current ray mask.
    let mask_start_coord = packed_cache_coord * vec2<i32>(RAY_MASK_SIZE_X, RAY_MASK_SIZE_Y);

    // Find the relative coordinate of the requested sample within the ray mask.
    let relative_mask_coord = unpacked_cache_coord - mask_start_coord;

    // Compute the flattened hit index of the requested sample within the ray mask.
    let hit_index = u32(relative_mask_coord.y * RAY_MASK_SIZE_X + relative_mask_coord.x);

    // Use the hit index to bit shift the value from the cache and retrieve the requested sample.
    return f32((g_shadow_hit_masks[packed_cache_coord.x][packed_cache_coord.y] >> hit_index) & 1u);
}

fn populate_cache()
{
    if (p_local_invocation_id.x < 3 && p_local_invocation_id.y < 6)
    {
        let coord  = vec2<i32>(p_workgroup_id.x, p_workgroup_id.y * 2) - vec2<i32>(1, 2) + vec2(p_local_invocation_id.xy);
        g_shadow_hit_masks[p_local_invocation_id.x][p_local_invocation_id.y] = textureLoad(s_Input, coord, 0).x;
    }

    workgroupBarrier();
}

fn horizontal_neighborhood_mean( coord : vec2<i32> ) -> f32
{
    var result = 0.0f;

    for (var x = -8; x <= 8; x++){
        result += unpack_shadow_hit_value(vec2<i32>(coord.x + x, coord.y));
    }

    return result;
}

// ------------------------------------------------------------------

fn sample_neighborhood( coord : vec2<i32> ) -> f32
{
    let top    = horizontal_neighborhood_mean(vec2<i32>(coord.x, coord.y - 8));
    let middle = horizontal_neighborhood_mean(vec2<i32>(coord.x, coord.y));
    let bottom = horizontal_neighborhood_mean(vec2<i32>(coord.x, coord.y + 8));

    g_mean_accumulation[p_local_invocation_id.x][p_local_invocation_id.y]      = top;
    g_mean_accumulation[p_local_invocation_id.x][p_local_invocation_id.y + 8]  = middle;
    g_mean_accumulation[p_local_invocation_id.x][p_local_invocation_id.y + 16] = bottom;

    workgroupBarrier();

    const radius = 8;
    const weight = (radius * 2.0f + 1.0f) * (radius * 2.0f + 1.0f);
    const rcp_weight = 1.0 / weight;

    var mean = 0.0f;

    for (var y = 0; y <= 16; y++){
        mean += g_mean_accumulation[p_local_invocation_id.x][p_local_invocation_id.y + y];
    }

    return mean * rcp_weight;
}

const SIGMA_SCALE = 1.0;
const HISTORY_LENGTH_LIMIT = 32;

@compute @workgroup_size(NUM_THREADS_X,NUM_THREADS_Y,1)
fn main(
    @builtin(global_invocation_id) global_invocation_id : vec3<u32>,
    @builtin(local_invocation_id) local_invocation_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
){

    p_workgroup_id = vec3<i32>(workgroup_id);
    p_global_invocation_id = vec3<i32>(global_invocation_id);
    p_local_invocation_id = vec3<i32>(local_invocation_id);
    
    g_should_denoise = 0;

    let size          = textureDimensions(s_HistoryMoments, 0);
    let current_coord = vec2<i32>(global_invocation_id.xy);

    populate_cache();
    
    let mean = sample_neighborhood(current_coord);

    let depth = textureLoad( DepthBuffer, current_coord, 0 ).r;

    var visibility                 = 0.0f;
    var output_visibility_variance = vec2(0.0f);
    var output_moments             = vec2(0.0f);
    var history_length             = 0.0f;

    if (depth != 0.0f)
    {
        
        visibility = unpack_shadow_hit_value(current_coord);
        
        let moments_current = vec2(visibility, visibility*visibility);

        let velocity = taa_get_velocity( VelocityBuffer, current_coord);
        let current_coord_f = vec2<f32>(current_coord.xy);
        
        // 0.5 to account for texel center offset
        let previous_coord = current_coord_f + velocity.xy - Jitter;
    
        let normal = decode_g_buffer_normal( textureLoad(NormalBuffer, current_coord, 0).zw );
    
        let reprojection_confidence = textureLoad(tOcclusion, current_coord, 0).r;
        
        if(reprojection_confidence < 0.001 || true){
            // reprojection failed
            
            history_length = 0.0;
            
            output_moments = moments_current;
            
        } else {
            
            // reprojection successful

            var history_moments = texture_sample_catmull_rom_exact(s_HistoryMoments, previous_coord, 0).xyz;
       
            // ensure history is positive, can get negative negatives due to bicubic filter
            history_moments.x = max(history_moments.x, 0.0);
           
            history_length = min(HISTORY_LENGTH_LIMIT, history_moments.z + 1);
            
            // this adjusts the alpha for the case where insufficient history is available.
            // It boosts the temporal accumulation to give the samples equal weights in
            // the beginning.
            let history_weight = min(0.9, (1.0 -  1.0 / history_length) * reprojection_confidence);
    
            // compute first two moments of luminance
            output_moments.r = visibility;
            output_moments.g = mean * mean;
           
            let sigma = get_std_dev(mean, mean);
           
            // clamp history
            let input_min = mean - sigma * SIGMA_SCALE;
            let input_max = mean + sigma * SIGMA_SCALE;
            
            let clamped_history_m1 = clamp(history_moments.x, input_min, input_max);
//            let clamped_history_m1 = history_moments.x;
                            
            // temporal integration of the moments            
            output_moments.x = mix(moments_current.x, clamped_history_m1, history_weight);
            
            // truncate history based on confidence
            history_length *= reprojection_confidence;
        }

    }
    

    // Temporal integration
    textureStore(s_Moments, current_coord, vec4(output_moments, history_length, 0.0f));

    // If all the threads are in shadow, skip the A-Trous filter.
    if (depth != 1.0f && output_moments.x > 0.0f){
        g_should_denoise = 1;
    }
    
    workgroupBarrier();

    if (local_invocation_id.x == 0 && local_invocation_id.y == 0)
    {
        if (g_should_denoise == 1)
        {
            let idx                   = atomicAdd( &DenoiseTileCount, 1u);
            DenoiseTileData[idx] = workgroup_id.xy;
        }
        else
        {
            let idx                  = atomicAdd( &ShadowTileCount, 1u);
            ShadowTileData[idx] = workgroup_id.xy;
        }
    }
}

`,
    [Pi, Jp, Zp, W_, zc, RU, Dd, DU, nb, LU]
  ),
  VU = new Yt(
    le.from({
      label: "Temporal Reprojection / Moments",
      resources: uh,
      body: GU,
    })
  );
var yo;
class $U {
  constructor(e) {
    b(this, yo, new Array(2));
    for (let t = 0; t < getProperty(this, yo).length; t++)
      getProperty(this, yo)[t] = e.contextFromDescriptor(
        mt.from({
          label: `Ligma moments ${t}`,
          size: [1, 1],
          format: "rgba16float",
          mipLevelCount: 1,
          usage:
            GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        })
      );
  }
  set resolution(e) {
    const t = getProperty(this, yo);
    for (let r = 0; r < t.length; r++) t[r].resize(e[0], e[1]);
  }
  get_history(e) {
    const t = getProperty(this, yo);
    return t[e % t.length];
  }
  execute({
    graph: e,
    frame_index: t,
    input_current_depth: r,
    input_previous_depth: i,
    input_current_normal: n,
    input_velocity: o,
    input: a,
    camera_current: c,
    camera_previous: _,
    input_occlusion: u,
    jitter: d = [0, 0],
    resolution: h,
    denoise_spatial: p = !0,
  }) {
    this.resolution = h;
    const v = Math.ceil(h[0] / 8),
      f = Math.ceil(h[1] / 8),
      m = this.get_history(t),
      g = this.get_history(t + 1),
      E = e.import_resource(
        "History Moments",
        oe.fromTexture(m.gpu_texture),
        m
      ),
      y = e.import_resource("Moments", oe.fromTexture(g.gpu_texture), g),
      A = Wt(256, zo.size),
      T = A + v * f * Uint32Array.BYTES_PER_ELEMENT * 2;
    function z(I, L, F) {
      const D = L.get(I.velocity),
        H = L.get(I.input),
        J = L.get(I.depth_current),
        R = L.get(I.depth_previous),
        O = L.get(I.history),
        q = L.get(I.normal),
        Y = L.get(I.input_occlusion),
        $ = L.get(I.output),
        K = F.encoder.allocateTransientValueBuffer(Ce["vec2<f32>"], d),
        V = L.get(I.out_tiles_shadow),
        j = L.get(I.out_tiles_denoise);
      VU.dispatch({
        encoder: F.encoder,
        bindings: {
          s_Input: H.obtainView(),
          s_HistoryMoments: O.obtainView(),
          s_Moments: $.obtainView(),
          VelocityBuffer: D.obtainView(),
          DepthBuffer: J.obtainView(),
          PrevDepthBuffer: R.obtainView(),
          NormalBuffer: q.obtainView(),
          Jitter: K,
          tOcclusion: Y.obtainView(),
          camera_current: c.buffer,
          camera_previous: _.buffer,
          DenoiseTileCount: { buffer: j, size: Uint32Array.BYTES_PER_ELEMENT },
          DenoiseTileData: { buffer: j, offset: A, size: T - A },
          ShadowTileCount: { buffer: V, size: Uint32Array.BYTES_PER_ELEMENT },
          ShadowTileData: { buffer: V, offset: A, size: T - A },
        },
        group_size_x: v,
        group_size_y: f,
      });
    }
    const C = {},
      U = e.add("temporal reprojection", C, z);
    (C.input = U.read(a)),
      (C.depth_current = U.read(r)),
      (C.velocity = U.read(o)),
      (C.depth_previous = U.read(i)),
      (C.normal = U.read(n)),
      (C.history = U.read(E)),
      (C.input_occlusion = U.read(u)),
      (C.output = U.write(y)),
      (C.out_tiles_shadow = U.create(
        "tiles_shadow",
        je.from(T, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST, 0, zo.size)
      )),
      (C.out_tiles_denoise = U.create(
        "tiles_denoise",
        je.from(T, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST, 0, zo.size)
      ));
    let k = C.output;
    p &&
      (k = Wx({
        graph: e,
        input_luma: k,
        input_depth: r,
        input_normal: n,
        resolution: h,
      }));
    const N = { blend: No.NoBlending },
      M = e.add("composit", N, Jx);
    return (
      (N.input = M.read(k)),
      (N.output = M.create(
        "out",
        oe.from({
          resolution: h,
          format: "rgba16float",
          usage:
            GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        })
      )),
      N.output
    );
  }
}
yo = new WeakMap();
const J_ = new ResourecGroup();
J_.createGroup()
  .addStorageBuffer("tlas", Ro)
  .addStorageBuffer("instances", X.from(Xe))
  .addStorageBuffer("blas_lookup", X.u32)
  .addStorageBuffer("blas_data", X.from(Mi))
  .addStorageBuffer("geometries", X.from(Ut))
  .addStorageBuffer("geometry_indices", X.u32)
  .addStorageBuffer("geometry_vertices", X.from(qt));
J_.createGroup()
  .addUniform("light_metadata", dn)
  .addStorageBuffer("light_data", X.f32);
J_.createGroup().addStorageTexture("i_Output", "r32uint");
J_.createGroup()
  .addTexture("texture_depth")
  .addTexture("texture_normal", "uint")
  .addTexture("texture_noise", "uint")
  .addUniform("camera", ce)
  .addUniform("view", hn);
const qU = w.from(
  `
var<workgroup> g_visibility:atomic<u32>;

@compute @workgroup_size(8,4,1)
fn main(
    @builtin(local_invocation_index) local_invocation_index: u32,
    @builtin(global_invocation_id) global_invocation_id: vec3<u32>,
    @builtin(workgroup_id) workgroup_id: vec3<u32>,
){

    let pixel_position = global_invocation_id.xy;
    
    let texture_size = textureDimensions(texture_depth);
    
    var result:u32 = 0u;
    
    if(all(pixel_position < texture_size)){
            
        let texel_depth = textureLoad(
            texture_depth,
            pixel_position,
            0
        ).r;
            
        if(texel_depth != 0){
        
            let uv = texel_coordinate_to_uv( vec2<f32>(pixel_position), texture_size);
            
            let position_ws = world_position_from_depth(
                uv,
                texel_depth,
                camera.view_projection_matrix_inverse 
            );
            
            // TODO add screen-space tracing to save on full RTX
            
            let g_buffer_sample_normal = textureLoad( texture_normal,
                pixel_position,
                0
            );            
            
            let geometric_normal = decode_g_buffer_normal( g_buffer_sample_normal.zw );
            let shading_normal = decode_g_buffer_normal( g_buffer_sample_normal.xy );
                        
            let noise = spatio_temporal_noise_r2_64(pixel_position, view.frame_index, texture_noise);

            var ray_origin = offset_ray(position_ws, geometric_normal);
            
            let light_color = ray_sample_light(
                ray_origin, 
                shading_normal,
                noise
            );
            
            let normalized = dot(light_color, light_color);
            
            if(normalized > 0.0){
                result = 1u;
            }
            
        }
    }
    
    atomicOr(&g_visibility, result << local_invocation_index);
    
    workgroupBarrier();
    
    if(local_invocation_index == 0u){
        textureStore(i_Output, workgroup_id.xy, vec4(atomicLoad(&g_visibility)));
    }
    
}

`,
  [Pi, uC, Yp, Vx, Rc, zc]
);
w.from(`
fn contact_shadow(camera:ptr<function, ${ce}, read>, depth_buffer: texture_2d<f32>, uv: vec2<f32> , depth: f32, radius: f32, jitter: f32) -> f32{
   
   // TODO implement

}
    `);
const HU = new Yt(
  le.from({ label: "Screen-space ray-traced shadows", body: qU, resources: J_ })
);
Bo();
class YU {
  constructor(e) {
    x(this, "denoiser");
    x(this, "timer");
    (this.denoiser = new $U(e.textures)),
      (this.timer = new kc(e.device, "primary shadow rays")),
      (this.timer.stats.history_length = 1024);
  }
  execute({
    graph: e,
    input_normal: t = -1,
    input_depth: r = -1,
    input_depth_previous: i = -1,
    input_velocity: n = -1,
    input_occlusion: o = -1,
    view: a,
    jitter: c = [0, 0],
  }) {
    const _ = a.resolution,
      u = {},
      d = this.timer,
      h = Math.ceil(_[0] / 8),
      p = Math.ceil(_[1] / 4);
    function v(m, g, E) {
      const y = g.get(m.normals),
        A = g.get(m.output),
        T = g.get(m.depth),
        z = a.scene,
        C = z.tlas.buffer,
        U = z.geometries,
        k = U.blas.buffer_metadata,
        N = U.blas.buffer_data,
        M = z.instance_buffer,
        I = E.graphics.textures.obtain(qp);
      HU.dispatch({
        encoder: E.encoder,
        timer: d,
        group_size_x: h,
        group_size_y: p,
        bindings: {
          texture_depth: T.obtainView(),
          texture_normal: y.obtainView(),
          texture_noise: I.obtainView(),
          camera: a.camera.buffer,
          view: a.uniform_buffer,
          tlas: C,
          blas_lookup: k,
          blas_data: N,
          instances: M,
          geometries: U.buffer_metadata,
          geometry_indices: U.buffer_indices,
          geometry_vertices: U.buffer_vertices,
          light_metadata: z.lights.buffer_metadata,
          light_data: z.lights.buffer_data,
          i_Output: A.obtainView(),
        },
      }),
        d.update(E.encoder.gpu_encoder);
    }
    Bo();
    const f = e.add("Screen-space shadows", u, v);
    return (
      (u.normals = f.read(t)),
      (u.depth = f.read(r)),
      (u.output = f.create(
        "shadow hits",
        oe.from({
          resolution: [h, p],
          format: "r32uint",
          usage:
            GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING,
        })
      )),
      this.denoiser.execute({
        graph: e,
        input: u.output,
        frame_index: a.frame_index,
        input_current_depth: r,
        input_previous_depth: i,
        input_current_normal: t,
        input_occlusion: o,
        input_velocity: n,
        resolution: a.resolution,
        jitter: c,
        camera_current: a.camera,
        camera_previous: a.gpu_previous_camera_state,
      })
    );
  }
}
class Lu {
  constructor(e, t) {
    x(this, "camera");
    x(this, "scene");
    (this.camera = e), (this.scene = t);
  }
  static from(e, t) {
    return new Lu(e, t);
  }
  hash() {
    return this.scene.hash() && this.camera.hash();
  }
  equals(e) {
    return this.scene === e.scene && this.camera === e.camera;
  }
  update() {
    this.camera.update();
  }
}
var M_, k_, _c, kd, R_, Rd, kb;
class SceneManger {
  constructor(e, t, r) {
    b(this, Rd);
    b(this, M_, new Ct());
    b(this, k_);
    b(this, _c);
    b(this, kd);
    b(this, R_);
    S(this, R_, e), S(this, kd, e.device), S(this, k_, t), S(this, _c, r);
  }
  get scenes() {
    return getProperty(this, _c);
  }
  exists(e) {
    return getProperty(this, M_).has(e);
  }
  obtain(e) {
    return getProperty(this, M_).getOrCompute(e, P(this, Rd, kb), this);
  }
}
(M_ = new WeakMap()),
  (k_ = new WeakMap()),
  (_c = new WeakMap()),
  (kd = new WeakMap()),
  (R_ = new WeakMap()),
  (Rd = new WeakSet()),
  (kb = function (e) {
    const t = getProperty(this, k_).obtain(e.camera),
      r = getProperty(this, _c).obtain(e.scene);
    return new zE(getProperty(this, R_), r, t);
  });
const XU = new tw();
XU.create({ name: "frame_time" });
const Rb = mc.fromSampler2D(new et(new Uint32Array([1073741823]), 1, 1, 1));
Rb.color_space = Jr.None;
const WU = pc.from(Rb);
var ds,
  uc,
  L_,
  views,
  feature_shadows_enabled,
  feature_lpv_enabled,
  graphic,
  rasterizer,
  cn,
  resolution,
  hs,
  To,
  nt,
  jf,
  ln,
  P_,
  jr,
  B_,
  Xr,
  Xf,
  Wf,
  Jf,
  Lb,
  Pb,
  Bb;
class Engine {
  constructor() {
    b(this, nt);
    b(this, ds, 0);
    x(this, "context");
    x(this, "device");
    x(this, "gBuffer");
    b(this, uc);
    b(this, L_);
    b(this, views);
    b(this, feature_shadows_enabled, !0);
    b(this, feature_lpv_enabled, !1);
    x(this, "feature_ssr_enabled", !0);
    x(this, "feature_ssao_enabled", !0);
    x(this, "feature_taa_enabled", !0);
    x(this, "feature_bloom_enabled", !0);
    b(this, graphic);
    b(this, rasterizer);
    b(this, cn, new Be());
    b(this, resolution, new Be());
    b(this, hs, new Array(2));
    b(this, To, new Array(2));
    x(this, "presentation_format");
    b(this, ln, window.devicePixelRatio);
    b(this, P_, new Map());
    b(this, jr);
    b(this, B_);
    b(this, Xr);
  }
  set feature_shadows_enabled(e) {
    S(this, feature_shadows_enabled, e);
  }
  get feature_shadows_enabled() {
    return getProperty(this, feature_shadows_enabled);
  }
  get feature_lpv_enabled() {
    return getProperty(this, feature_lpv_enabled);
  }
  set feature_lpv_enabled(e) {
    S(this, feature_lpv_enabled, e);
  }
  get views() {
    return getProperty(this, views);
  }
  get graphics() {
    return getProperty(this, graphic);
  }
  get rasterizer() {
    return getProperty(this, rasterizer);
  }
  get resolution() {
    return getProperty(this, resolution).clone();
  }
  get aspect_ratio() {
    return getProperty(this, resolution).x / getProperty(this, resolution).y;
  }
  get texture_depth_current() {
    const e = getProperty(this, hs);
    return e[getProperty(this, ds) % e.length];
  }
  get texture_depth_previous() {
    const e = getProperty(this, hs);
    return e[(getProperty(this, ds) - 1 + e.length) % e.length];
  }
  get pixel_ratio() {
    return getProperty(this, ln);
  }
  set pixel_ratio(e) {
    e !== getProperty(this, ln) && (S(this, ln, e), P(this, nt, Wf).call(this));
  }
  indicate_view_change() {
    getProperty(this, jr).taa.reset_history = !0;
  }
  getProbeRendererForScene(e) {
    const t = getProperty(this, uc).obtain(e);
    let r = getProperty(this, P_).get(e);
    return (
      r === false &&
        ((r = new qf(getProperty(this, graphic), t)),
        getProperty(this, P_).set(e, r)),
      r
    );
  }
  update_lpv(e) {
    let t = this.getProbeRendererForScene(e);
    t.autoSetRaysPerProbe(1), t.bake();
  }
  get_view_stats(e, t, r = !0) {
    const i = new Lu(e, t);
    if (!r && !getProperty(this, views).exists(i)) return {};
    const n = getProperty(this, views).obtain(i);
    return {
      get meshlets_visible() {
        return this.meshlets_visible_0 + this.meshlets_visible_1;
      },
      get meshlets_visible_0() {
        return n.stats.getLastRecord(cr.VisibleMeshlets0);
      },
      get meshlets_visible_1() {
        return n.stats.getLastRecord(cr.VisibleMeshlets1);
      },
      get triangles_visible() {
        return this.triangles_visible_0 + this.triangles_visible_1;
      },
      get triangles_visible_0() {
        return n.stats.getLastRecord(cr.VisibleTriangles0);
      },
      get triangles_visible_1() {
        return n.stats.getLastRecord(cr.VisibleTriangles1);
      },
      get instances_visible() {
        return (
          n.stats.getLastRecord(cr.VisibleMeshes0) +
          n.stats.getLastRecord(cr.VisibleMeshes1)
        );
      },
    };
  }
  async initialize({
    context: context,
    device: device,
    pixelRatio: pixelRatio = window.devicePixelRatio,
    presentationFormat:
      presentationFormat = navigator.gpu.getPreferredCanvasFormat(),
  }) {
    if (context === false) {
      const canvas = document.createElement("canvas");
      (canvas.width = window.innerWidth),
        (canvas.height = window.innerHeight),
        (context = canvas.getContext("webgpu"));
    }
    if (device === false) {
      const adapter = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
      });
      if (adapter === null) throw new Error("Failed to bind GPUAdapter");
      adapter.isFallbackAdapter;
      const _ = adapter.limits.maxStorageBuffersPerShaderStage;
      if (_ < 10)
        throw new Error(
          `Engine requires at least 10 storage buffers per shader stage, actual is ${_}`
        );
      device = await adapter.requestDevice({
        requiredLimits: {
          maxColorAttachmentBytesPerSample: 64,
          maxBufferSize: adapter.limits.maxBufferSize,
          maxStorageBufferBindingSize:
            adapter.limits.maxStorageBufferBindingSize,
          maxStorageBuffersPerShaderStage: 10,
        },
        requiredFeatures: ["timestamp-query"],
      });
    }
    (this.context = context),
      (this.device = device),
      (this.presentation_format = presentationFormat),
      S(this, ln, pixelRatio),
      getProperty(this, cn).set(
        context.canvas.clientWidth,
        context.canvas.clientHeight
      ),
      P(this, nt, Jf).call(this),
      S(this, graphic, new Vz(device));
    const n = getProperty(this, graphic);
    (this.gBuffer = new G_buffer(n)),
      S(this, uc, new kU(n)),
      S(this, L_, new Cw(this.device)),
      S(
        this,
        views,
        new SceneManger(n, getProperty(this, L_), getProperty(this, uc))
      ),
      S(this, rasterizer, new dS(n));
    const o = getProperty(this, resolution).asArray();
    for (let a = 0; a < getProperty(this, hs).length; a++)
      getProperty(this, hs)[a] = n.textures.contextFromDescriptor(
        mt.from({
          label: `Depth ${a}`,
          size: o,
          format: "depth32float",
          mipLevelCount: 1,
          usage:
            GPUTextureUsage.RENDER_ATTACHMENT |
            GPUTextureUsage.TEXTURE_BINDING |
            GPUTextureUsage.COPY_SRC,
        })
      );
    for (let a = 0; a < getProperty(this, To).length; a++)
      getProperty(this, To)[a] = n.textures.contextFromDescriptor(
        mt.from({
          label: `Color ${a}`,
          size: o,
          format: presentationFormat,
          mipLevelCount: 1,
          usage:
            GPUTextureUsage.RENDER_ATTACHMENT |
            GPUTextureUsage.TEXTURE_BINDING |
            GPUTextureUsage.COPY_SRC,
        })
      );
    this.gBuffer.init(getProperty(this, resolution).asArray()),
      S(this, jr, new sU(getProperty(this, graphic))),
      S(this, B_, new YU(getProperty(this, graphic))),
      P(this, nt, Xf).call(this),
      this.init_render_targets();
  }
  init_render_targets() {
    const e = new Ov();
    S(this, Xr, e);
    const t = getProperty(this, graphic).textures;
    (e.color_attachments = [
      t.contextFromDescriptor(
        mt.from({
          size: getProperty(this, resolution).asArray(),
          format: "r32uint",
          usage:
            GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        })
      ),
      t.contextFromDescriptor(
        mt.from({
          size: getProperty(this, resolution).asArray(),
          format: "r32uint",
          usage:
            GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        })
      ),
    ]),
      (e.depth_attachment = getProperty(this, hs)[0]);
  }
  resize(e, t) {
    getProperty(this, cn).set(e, t),
      P(this, nt, Jf).call(this),
      P(this, nt, Wf).call(this);
  }
  render(camera, Scene) {
    P(this, nt, Lb).call(this),
      getProperty(this, graphic).update(),
      getProperty(this, feature_lpv_enabled) && this.update_lpv(Scene);
    const r = Lu.from(camera, Scene),
      i = getProperty(this, views).obtain(r),
      n = getProperty(this, jr).taa;
    i.setJitter(n.Jitter[0], n.Jitter[1]),
      i.setViewportSize(
        getProperty(this, resolution).x,
        getProperty(this, resolution).y
      ),
      i.camera.setViewportOffset(
        n.Jitter[0] / getProperty(this, resolution).x,
        n.Jitter[1] / getProperty(this, resolution).y
      );
    const o = Ni.create(getProperty(this, graphic), "Renderer/main"),
      a = getProperty(this, Xr);
    getProperty(this, rasterizer).execute(i, o, a),
      getProperty(this, graphic).materials.viz_render(
        o,
        i,
        a,
        this.gBuffer.render_target
      ),
      P(this, nt, Bb).call(this, o, i),
      i.finish_frame(o),
      o.finish(),
      this.rasterizer.update(),
      P(this, nt, Pb).call(this);
  }
}
(ds = new WeakMap()),
  (uc = new WeakMap()),
  (L_ = new WeakMap()),
  (views = new WeakMap()),
  (feature_shadows_enabled = new WeakMap()),
  (feature_lpv_enabled = new WeakMap()),
  (graphic = new WeakMap()),
  (rasterizer = new WeakMap()),
  (cn = new WeakMap()),
  (resolution = new WeakMap()),
  (hs = new WeakMap()),
  (To = new WeakMap()),
  (nt = new WeakSet()),
  (jf = function (e) {
    const t = getProperty(this, To);
    return t[(getProperty(this, ds) - e + t.length) % t.length];
  }),
  (ln = new WeakMap()),
  (P_ = new WeakMap()),
  (jr = new WeakMap()),
  (B_ = new WeakMap()),
  (Xr = new WeakMap()),
  (Xf = function () {
    const e = getProperty(this, cn).x,
      t = getProperty(this, cn).y;
    (this.context.canvas.width = e),
      (this.context.canvas.height = t),
      this.context.configure({
        device: this.device,
        format: this.presentation_format,
        alphaMode: "opaque",
      });
  }),
  (Wf = function () {
    const e = getProperty(this, resolution).x,
      t = getProperty(this, resolution).y;
    getProperty(this, hs).forEach((r) => {
      r.resize(e, t);
    }),
      getProperty(this, To).forEach((r) => r.resize(e, t)),
      getProperty(this, Xr).resize(e, t),
      this.gBuffer.resize(e, t),
      P(this, nt, Xf).call(this);
  }),
  (Jf = function () {
    const e = getProperty(this, cn);
    getProperty(this, ln),
      getProperty(this, resolution).set(e.x, e.y),
      getProperty(this, resolution).ceil();
  }),
  (Lb = function () {
    (getProperty(this, Xr).depth_attachment = this.texture_depth_current),
      getProperty(this, jr).update(getProperty(this, ds));
  }),
  (Pb = function () {
    ze(this, ds)._++;
  }),
  (Bb = function (e, t) {
    const r = getProperty(this, resolution).asArray(),
      i = t.scene,
      n = i.lights,
      o = new O_("Shading"),
      a = this.context.getCurrentTexture(),
      c = Ht.fromTexture(a, this.device);
    o.import_resource(
      "viz_triangle",
      oe.fromTexture(getProperty(this, Xr).color_attachments[0].gpu_texture),
      getProperty(this, Xr).color_attachments[0]
    ),
      o.import_resource(
        "viz_mesh",
        oe.fromTexture(getProperty(this, Xr).color_attachments[1].gpu_texture),
        getProperty(this, Xr).color_attachments[1]
      );
    const _ = o.import_resource("canvas", oe.fromTexture(a), c),
      u = o.import_resource(
        "pbr",
        oe.fromTexture(
          this.gBuffer.texture_normal_metalness_roughness.gpu_texture
        ),
        this.gBuffer.texture_normal_metalness_roughness
      ),
      d = o.import_resource(
        "depth",
        oe.fromTexture(this.texture_depth_current.gpu_texture),
        this.texture_depth_current
      ),
      h = o.import_resource(
        "normal",
        oe.fromTexture(this.gBuffer.texture_normal.gpu_texture),
        this.gBuffer.texture_normal
      ),
      p = o.import_resource(
        "normal",
        oe.fromTexture(this.gBuffer.texture_albedo.gpu_texture),
        this.gBuffer.texture_albedo
      ),
      v = o.import_resource(
        "normal",
        oe.fromTexture(this.gBuffer.texture_emissive.gpu_texture),
        this.gBuffer.texture_emissive
      ),
      f = o.import_resource(
        "camera/current",
        je.fromBuffer(t.camera.gpu_buffer),
        t.camera.gpu_buffer
      ),
      m = o.import_resource(
        "camera/previous",
        je.fromBuffer(t.gpu_previous_camera_state.gpu_buffer),
        t.gpu_previous_camera_state.gpu_buffer
      ),
      g = o.import_resource(
        "HZB",
        oe.fromTexture(t.hierarchical_z_buffer.texture.gpu_texture),
        t.hierarchical_z_buffer.texture
      ),
      E = o.import_resource(
        "environment map",
        oe.fromTexture(t.sky.irradiance_lut.gpu_texture),
        t.sky.irradiance_lut
      ),
      y = P(this, nt, jf).call(this, 0),
      A = P(this, nt, jf).call(this, -1),
      T = o.import_resource("taa history", oe.fromTexture(y.gpu_texture), y),
      z = o.import_resource("taa out", oe.fromTexture(A.gpu_texture), A),
      C = o.import_resource(
        "depth previous",
        oe.fromTexture(this.texture_depth_previous.gpu_texture),
        this.texture_depth_previous
      ),
      U = MU({ graph: o, texture_depth: d, resolution: r, view: t }),
      k = ht({
        graph: o,
        shader: zU,
        output_resolution: t.resolution,
        inputs: {
          camera_current: f,
          camera_previous: m,
          DepthBuffer: d,
          PrevDepthBuffer: C,
          VelocityBuffer: U,
        },
      }),
      N = wU({ graph: o, camera: f, depth: d, resolution: r, mipmap: Qx });
    let M;
    if (getProperty(this, feature_shadows_enabled))
      M = getProperty(this, B_).execute({
        graph: o,
        input_normal: h,
        input_depth: d,
        input_depth_previous: C,
        input_velocity: U,
        input_occlusion: k,
        view: t,
        jitter: getProperty(this, jr).taa.JitterDelta,
      });
    else {
      const D = getProperty(this, graphic).textures.obtain(Op);
      M = o.import_resource("fake_shadows", oe.fromTexture(D.gpu_texture), D);
    }
    let I;
    if (getProperty(this, feature_lpv_enabled))
      I = PC({ graph: o, view: t, input_depth: d, resolution_scale: 1 });
    else {
      const D = getProperty(this, graphic).textures.obtain(WU);
      I = o.import_resource("fake_lpv_cache", oe.fromTexture(D.gpu_texture), D);
    }
    let L = ht({
      graph: o,
      shader: pT,
      inputs: {
        gBufferDepth: d,
        gBuffer_normal_metalness_roughness: u,
        gBufferNormal: h,
        gBufferAlbedo: p,
        gBufferEmissive: v,
        viewport_shadows: M,
        light_metadata: n.buffer_metadata,
        light_data: n.buffer_data,
        tEnvironment: E,
        camera: t.camera.buffer,
        lpv_tet_cache_texture: I,
        lpv_probes: i.light_probe_volume.buffer_probes,
        lpv_mesh: i.light_probe_volume.buffer_mesh,
      },
      output_resolution: t.resolution,
    });
    this.feature_ssao_enabled &&
      (L = getProperty(this, jr).ssao.graph_pass({
        graph: o,
        frame_index: getProperty(this, ds),
        input_depth: N,
        input_depth_previous: C,
        input_velocity: U,
        input_normal: h,
        input_occlusion: k,
        output: L,
        camera: f,
        resolution: r,
      })),
      this.feature_ssr_enabled &&
        (L = getProperty(this, jr).ssr.graph_pass({
          graph: o,
          input_depth: d,
          input_hzb: g,
          input_color: L,
          input_pbr: u,
          input_normal: h,
          input_velocity: U,
          input_occlusion: k,
          input_environment: E,
          camera_current: f,
          camera_previous: m,
          resolution: r,
        })),
      this.feature_bloom_enabled &&
        (L = gU({ graph: o, input: L, resolution: r })),
      (L = ht({
        graph: o,
        shader: TT,
        inputs: { input_color: L, settings: { exposure: 2.2 } },
        output_resolution: r,
      })),
      this.feature_taa_enabled &&
        (L = getProperty(this, jr).taa.graph_pass({
          graph: o,
          texture_output: z,
          texture_depth_current: d,
          texture_depth_previous: C,
          texture_color_current: L,
          texture_color_history: T,
          texture_velocity: U,
          texture_occlusion: k,
          camera_current: f,
          camera_previous: m,
        })),
      Mz({ graph: o, input: L, output: _ }),
      e.encodeGraph(o);
  });
function importScene(scene, camera) {
  const t = importGLTF("pica_pica/pica_pica.gltf").then((i) =>
    scene.addNodes3D(i)
  );
  scene.lights.add(g1({ intensity: 2.2 }));
  const r = {
    position: {
      x: 7.990444788625961,
      y: 27.102921043144782,
      z: 14.50242104415642,
    },
    rotation: {
      x: -0.06467917148351163,
      y: 0.8954409270109066,
      z: -0.4181080310353906,
      w: -0.13852012631297853,
    },
  };
  return camera.transform.fromJSON(r), t;
}
const KU = async ({ canvas: canvas, gui: gui }) => {
  const context = canvas.getContext("webgpu"),
    engine = new Engine();
  await engine.initialize({ context: context });
  const camera = new EX_Camera();
  camera.transform.position.set(0, 0, -5),
    camera.transform.lookAt(Z.zero),
    (camera.near = 0.1),
    (camera.far = 2e4),
    (camera.fov = 72 * p0),
    (camera.aspect = engine.aspect_ratio);
  let n = 1 / 0;
  const scene = new Scene();
  (window.scene = scene), new zu(3, 2);
  async function a() {
    engine.indicate_view_change(), await m0(1e3);
  }
  importScene(scene, camera).then(a);
  const c = new p3(camera, document.body);
  c.distanceLimits.max = 1e4;
  function _() {
    scene.instances.instances.filter(
      (v) => d0(...v.bounding_box, camera.frustum) > 0
    );
  }
  (window.renderer = engine), (window.visible = _);
  const u = engine.get_view_stats(camera, scene),
    d = [
      gui.add(u, "instances_visible"),
      gui.add(u, "meshlets_visible"),
      gui.add(u, "triangles_visible"),
    ];
  function h() {
    return scene.lights.elements[0];
  }
  gui.add(engine, "feature_shadows_enabled").name("shadows"),
    gui.add(engine, "feature_ssr_enabled").name("SSR"),
    gui.add(engine, "feature_ssao_enabled").name("SSAO"),
    gui.add(engine, "feature_bloom_enabled").name("Bloom"),
    gui.add(engine, "feature_taa_enabled").name("TAA"),
    gui.add(engine, "feature_lpv_enabled").name("LPV"),
    gui
      .add(
        {
          get sun_x() {
            return h().direction.x;
          },
          set sun_x(v) {
            const f = h().direction;
            f.setX(v), f.normalize(), (scene.lights.needsUpdate = !0);
          },
        },
        "sun_x"
      )
      .name("sun X")
      .min(-1)
      .max(1),
    gui
      .add(
        {
          get sun_y() {
            return h().direction.z;
          },
          set sun_y(v) {
            const f = h().direction;
            f.setZ(v), f.normalize(), (scene.lights.needsUpdate = !0);
          },
        },
        "sun_y"
      )
      .name("sun Y")
      .min(-1)
      .max(1),
    b3(() => {
      n <= 0 ||
        (n--,
        c.update(),
        Zf.begin(),
        engine.render(camera, scene),
        Zf.end(),
        d.forEach((v) => {
          v.updateDisplay();
        }));
    }, 1 / 0);
  const p = () => {
    const v = window.innerWidth,
      f = window.innerHeight;
    engine.resize(v, f), (camera.aspect = v / f);
  };
  p(), window.addEventListener("resize", p, !1);
};
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
const dh = document.createElement("canvas");
dh.width = window.innerWidth;
dh.height = window.innerHeight;
document.body.appendChild(dh);
const Zf = new jc();
document.body.appendChild(Zf.domElement);
KU({ canvas: dh, gui: new ip() });
