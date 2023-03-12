import Enum from "./Enum";

class InstrumentBarConstraints extends Enum {
  static ENGINE_RPM = new InstrumentBarConstraints("ENGINE_RPM", {
    min: 0,
    max: 10000,
  });
  static GEAR = new InstrumentBarConstraints("GEAR", {
    min: 1,
    max: 7,
  });
  static SPEED = new InstrumentBarConstraints("SPEED", {
    min: 0,
    max: 400,
  });
}

export default InstrumentBarConstraints;
