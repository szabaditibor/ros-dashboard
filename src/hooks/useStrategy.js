import {
  EngineRpmStrategy,
  GearStrategy,
  PositionTrackerStrategy,
  SpeedStrategy,
  SteeringWheelStrategy,
  FallbackStrategy,
} from "../lib/strategies";

const useStrategy = (topic, message, dataPoints) => {
  const strategy = getStrategy(topic, message, dataPoints);

  const { defaultInstrument: DefaultInstrument, defaultProps, barProps, graphProps, simpleProps, availableDisplayModes } = strategy;

  return { DefaultInstrument, defaultProps, barProps, graphProps, simpleProps, availableDisplayModes };
};

const getStrategy = (topic, message, dataPoints) => {
  const topicSuffix = getTopicSuffix(topic.name);

  const strategies = {
    engine_rpm: new EngineRpmStrategy(topic, message, dataPoints, 10000, 1000),
    fix: new PositionTrackerStrategy(topic, message),
    gear: new GearStrategy(topic, message, dataPoints, 7, 1),
    speed: new SpeedStrategy(topic, message, dataPoints, 400, 50),
    steering_wheel_angle_deg: new SteeringWheelStrategy(topic, message),
  };

  return strategies[topicSuffix] ?? new FallbackStrategy(topic, message);
};

const getTopicSuffix = (name) => {
  const topicSuffix = name.split("/").pop();

  return topicSuffix;
};

export default useStrategy;
