import { useEffect, useState } from "react";

import { setupListener } from "../lib/ros";

const useMessage = ({ connection, topicName }) => {
  const [message, setMessage] = useState(null);
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const listener = setupListener(connection, topicName);
    if (listener) {
      listener.subscribe(handleMessage);
    }

    return () => {
      if (listener) {
        listener.unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    if (dataPoints.length >= 100) {
      setDataPoints((currentDataPoints) => currentDataPoints.slice(-90));
    }
  }, [dataPoints]);

  const handleMessage = (newMessage) => {
    setMessage(newMessage);

    setDataPoints((currentDataPoints) => [...currentDataPoints, annotateDataPoint(newMessage)]);
  };

  return { message, dataPoints };
};

const annotateDataPoint = (newMessage) => {
  const timestamp = Date.now();

  const annotatedDataPoint = {
    timestamp,
    message: newMessage,
  };

  return annotatedDataPoint;
};

export default useMessage;
