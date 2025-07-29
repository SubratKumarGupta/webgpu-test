export class Attrubute {
  constructor(readonly name: string, readonly data: Float32Array) {}
}

export class GPUBufferGeometry {
  Attrubute: Attrubute[] = [];
  constructor(readonly indices: Uint16Array) {}

  public addAttrubute(name: string, data: Float32Array) {
    const att = new Attrubute(name, data);
    if (name == "POSITION") {
      this.POSITION = att;
    }
    this.Attrubute.push(att);
  }
  public POSITION: Attrubute | null = null;
}
