class JU {
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
      r === void 0 &&
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
    if (context === void 0) {
      const canvas = document.createElement("canvas");
      (canvas.width = window.innerWidth),
        (canvas.height = window.innerHeight),
        (context = canvas.getContext("webgpu"));
    }
    if (device === void 0) {
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
  render(e, t) {
    P(this, nt, Lb).call(this),
      getProperty(this, graphic).update(),
      getProperty(this, feature_lpv_enabled) && this.update_lpv(t);
    const r = Lu.from(e, t),
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
