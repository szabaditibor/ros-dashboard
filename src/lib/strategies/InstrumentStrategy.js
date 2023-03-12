import { InstrumentDisplayModes } from "../../constants";

class InstrumentStrategy {
  constructor(topic, message, rawDataPoints) {
    const { name, size, barConstraints } = topic;

    this.name = name;
    this.size = size.value;

    this.availableDisplayModes = this.getAvailableDisplayModes();

    this.message = message ?? this.getFallbackMessage();
    this.value = this.processMessage();

    this.rawDataPoints = rawDataPoints ?? [{ timestamp: 0, message: this.message }];
    this.dataPoints = this.processDataPoints();

    this.defaultInstrument = this.getDefaultInstrument();
    this.defaultProps = this.generateDefaultProps();

    this.barConstraints = barConstraints;
    this.barProps = this.generateBarProps();

    this.graphProps = this.generateGraphProps();

    this.simpleProps = this.generateSimpleProps();
  }

  getFallbackMessage() {
    const fallbackMessage = {
      data: 0,
    };

    return fallbackMessage;
  }

  getAvailableDisplayModes() {
    const availableDisplayModes = [
      InstrumentDisplayModes.DEFAULT,
      InstrumentDisplayModes.BAR,
      InstrumentDisplayModes.GRAPH,
      InstrumentDisplayModes.SIMPLE,
    ];

    return availableDisplayModes;
  }

  processMessage() {
    const processedMessage = this.extractMessageData(this.message);

    return processedMessage;
  }

  processDataPoints() {
    const dataPoints = this.rawDataPoints.map(({ timestamp, message }) => ({ timestamp, value: this.extractMessageData(message) }));

    return dataPoints;
  }

  extractMessageData(message) {
    const { data } = message;

    return data;
  }

  getDefaultInstrument() {
    return null;
  }

  generateDefaultProps() {
    const defaultProps = {
      value: this.value,
    };

    return defaultProps;
  }

  generateBarProps() {
    const barProps = {
      value: this.value,
      ...this.barConstraints,
    };

    return barProps;
  }

  generateGraphProps() {
    const { graph } = this.size;

    const graphProps = {
      data: this.dataPoints,
      width: graph.width,
      height: graph.height,
    };

    return graphProps;
  }

  generateSimpleProps() {
    const formattedValue = this.value;
    const { simple } = this.size;

    return {
      data: formattedValue,
      fontSize: simple.fontSize,
    };
  }
}

export default InstrumentStrategy;
