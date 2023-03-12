import Enum from "./Enum";

class InstrumentDisplayModes extends Enum {
  static DEFAULT = new InstrumentDisplayModes("DEFAULT", "Default");
  static BAR = new InstrumentDisplayModes("BAR", "Bar");
  static GRAPH = new InstrumentDisplayModes("GRAPH", "Graph");
  static SIMPLE = new InstrumentDisplayModes("SIMPLE", "Simple");
}

export default InstrumentDisplayModes;
