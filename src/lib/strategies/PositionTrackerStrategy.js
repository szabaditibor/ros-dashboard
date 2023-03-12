import InstrumentStrategy from "./InstrumentStrategy";

import { PositionTracker } from "../../components/Instruments";

import { InstrumentDisplayModes } from "../../constants";

class PositionTrackerStrategy extends InstrumentStrategy {
  getFallbackMessage() {
    const fallbackMessage = {
      latitude: 47.580807,
      longitude: 19.247794,
    };

    return fallbackMessage;
  }

  getAvailableDisplayModes() {
    const displayModes = [InstrumentDisplayModes.DEFAULT, InstrumentDisplayModes.SIMPLE];

    return displayModes;
  }

  extractMessageData(message) {
    const { latitude, longitude } = message;

    return {
      latitude,
      longitude,
    };
  }

  getDefaultInstrument() {
    return PositionTracker;
  }

  generateDefaultProps() {
    const { latitude, longitude } = this.value;

    const defaultProps = {
      latitude,
      longitude,
      topicName: this.name,
    };

    return defaultProps;
  }

  generateSimpleProps() {
    const { latitude, longitude } = this.value;
    const formattedData = `(${latitude} ${longitude})`;

    return {
      data: formattedData,
    };
  }
}

export default PositionTrackerStrategy;
