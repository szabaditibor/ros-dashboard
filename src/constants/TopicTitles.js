import Enum from "./Enum";

class TopicTitles extends Enum {
  static ENGINE_RPM = new TopicTitles("ENGINE_RPM", "Engine RPM");
  static FIX = new TopicTitles("FIX", "Current Position");
  static GEAR = new TopicTitles("GEAR", "Gear");
  static SPEED = new TopicTitles("SPEED", "Speed");
  static STEERING_WHEEL_ANGLE_DEG = new TopicTitles("STEERING_WHEEL_ANGLE_DEG", "Steering Wheel Angle");
}

export default TopicTitles;
