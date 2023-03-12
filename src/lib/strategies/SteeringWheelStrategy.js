import InstrumentStrategy from "./InstrumentStrategy";

import { SteeringWheel } from "../../components/Instruments";

import { InstrumentDisplayModes } from "../../constants";

class SteeringWheelStrategy extends InstrumentStrategy {
  getDefaultInstrument() {
    return SteeringWheel;
  }

  getAvailableDisplayModes() {
    const displayModes = [InstrumentDisplayModes.DEFAULT, InstrumentDisplayModes.SIMPLE];

    return displayModes;
  }

  generateSimpleProps() {
    const formattedData = `${this.value} deg`;

    return {
      data: formattedData,
    };
  }
}

export default SteeringWheelStrategy;
