import GaugeStrategy from "./GaugeStrategy";

import { Gauge } from "../../components/Instruments";

class EngineRpmStrategy extends GaugeStrategy {
  getDefaultInstrument() {
    return Gauge;
  }
}

export default EngineRpmStrategy;
