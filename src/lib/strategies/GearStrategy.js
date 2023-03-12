import GaugeStrategy from "./GaugeStrategy";

import { Gear } from "../../components/Instruments";

class GearStrategy extends GaugeStrategy {
  getDefaultInstrument() {
    return Gear;
  }
}

export default GearStrategy;
