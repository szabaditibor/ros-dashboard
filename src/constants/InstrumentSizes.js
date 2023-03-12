import Enum from "./Enum";

const sizeSmall = {
  displayName: "Small",
  rowSpan: 1,
  colSpan: 1,
  svg: {
    size: 200,
    fontSize: 18,
  },
  graph: {
    width: 375,
    height: 200,
  },
  simple: {
    fontSize: "2xl"
  }
};

const sizeMedium = {
  displayName: "Medium",
  rowSpan: 2,
  colSpan: 1,
  svg: {
    size: 200,
    fontSize: 18,
  },
  graph: {
    width: 375,
    height: 600,
  },
  simple: {
    fontSize: "2xl"
  }
};

const sizeLarge = {
  displayName: "Large",
  rowSpan: 2,
  colSpan: 2,
  svg: {
    size: 450,
    fontSize: 28,
  },
  graph: {
    width: 850,
    height: 600,
  },
  simple: {
    fontSize: "4xl"
  }
};

class InstrumentSizes extends Enum {
  static SMALL = new InstrumentSizes("SMALL", sizeSmall);
  static MEDIUM = new InstrumentSizes("MEDIUM", sizeMedium);
  static LARGE = new InstrumentSizes("LARGE", sizeLarge);
}

export default InstrumentSizes;
