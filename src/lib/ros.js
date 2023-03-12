import ROSLIB from "roslib";

import { WEBSOCKET_URL } from "../constants";

const setupConnection = (url) => {
  return new Promise((resolve, reject) => {
    const ros = new ROSLIB.Ros({
      url: url ?? WEBSOCKET_URL,
    });

    ros.on("connection", () => {
      console.log("Connected to the ROS WebSocket server");
    });

    resolve(ros);
  });
};

const getTopics = async (conn) => {
  return new Promise((resolve, reject) => {
    conn.getTopics((response) => {
      resolve(response.topics);
    });
  });
};

const setupListener = (conn, topicName) => {
  const listener = new ROSLIB.Topic({
    ros: conn,
    name: topicName,
    queue_length: 0,
    compression: "none",
  });

  console.log(`Listener ${listener.name} created`);

  return listener;
};

export { setupConnection, getTopics, setupListener };
