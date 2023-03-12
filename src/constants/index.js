import InstrumentDisplayModes from "./InstrumentDisplayModes";
import InstrumentSizes from "./InstrumentSizes";
import InstrumentBarConstraints from "./InstrumentBarConstraints";
import TopicTitles from "./TopicTitles";

const { ROS_DASHBOARD_WEBSOCKET_URL, ROS_DASHBOARD_TOPIC_NAME_PATTERNS, ROS_DASHBOARD_GRID_COLUMNS, ROS_DASHBOARD_GRID_ROWS } =
  import.meta.env;

const WEBSOCKET_URL = ROS_DASHBOARD_WEBSOCKET_URL ?? "ws://localhost:9090";

const TOPIC_NAME_PATTERNS = ROS_DASHBOARD_TOPIC_NAME_PATTERNS
  ? ROS_DASHBOARD_TOPIC_NAME_PATTERNS.split(",").map((pattern) => pattern.trim())
  : ["engine_rpm", "fix", "gear", "speed", "steering_wheel_angle_deg"];

const COLUMNS = ROS_DASHBOARD_GRID_COLUMNS ?? 4;
const ROWS = ROS_DASHBOARD_GRID_ROWS ?? 2;
const CELLS = COLUMNS * ROWS;

export {
  InstrumentDisplayModes,
  InstrumentSizes,
  InstrumentBarConstraints,
  TopicTitles,
  WEBSOCKET_URL,
  TOPIC_NAME_PATTERNS,
  COLUMNS,
  ROWS,
  CELLS,
};
