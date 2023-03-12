class Enum {
  constructor(key, value) {
    this.key = key;
    this.value = value;

    Object.freeze(this);
  }

  toString() {
    return `${this.value}`;
  }
}

export default Enum;
