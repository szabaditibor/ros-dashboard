import InstrumentStrategy from "./InstrumentStrategy";

import { FallbackInstrument } from "../../components/Instruments";

import { InstrumentDisplayModes } from "../../constants";

class FallbackStrategy extends InstrumentStrategy {
  getAvailableDisplayModes() {
    const displayModes = [InstrumentDisplayModes.DEFAULT];

    return displayModes;
  }

  getDefaultInstrument() {
    return FallbackInstrument;
  }
}

export default FallbackStrategy;
