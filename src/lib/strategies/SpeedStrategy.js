import GaugeStrategy from "./GaugeStrategy";

import { Gauge } from "../../components/Instruments";

class SpeedStrategy extends GaugeStrategy {
  getDefaultInstrument() {
    return Gauge;
  }
}

export default SpeedStrategy;
