import InstrumentStrategy from "./InstrumentStrategy";

import { InstrumentDisplayModes } from "../../constants";

class GaugeStrategy extends InstrumentStrategy {
  constructor(topic, message, rawDataPoints, max, step) {
    super(topic, message, rawDataPoints);

    this.max = max;
    this.step = step;

    this.defaultProps = this.generateDefaultProps();
    this.graphProps = this.generateGraphProps();
  }

  getAvailableDisplayModes() {
    const displayModes = [
      InstrumentDisplayModes.DEFAULT,
      InstrumentDisplayModes.BAR,
      InstrumentDisplayModes.GRAPH,
      InstrumentDisplayModes.SIMPLE,
    ];

    return displayModes;
  }

  generateDefaultProps() {
    const { svg } = this.size;

    const defaultProps = {
      value: this.value,
      max: this.max,
      step: this.step,
      size: svg.size,
      fontSize: svg.fontSize,
    };

    return defaultProps;
  }

  generateGraphProps() {
    const graphProps = {
      data: this.dataPoints,
      max: this.max,
      width: this.size.graph.width,
      height: this.size.graph.height,
    };

    return graphProps;
  }
}

export default GaugeStrategy;
