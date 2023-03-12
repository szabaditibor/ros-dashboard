import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

import { setupConnection, getTopics } from "../lib/ros";

import { normalizeTopics } from "../utils/topics";

const useTopics = () => {
  const [topics, setTopics] = useImmer(null);
  const [ros, setRos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTopics(setRos, setTopics, setIsLoading);
  }, []);

  const modifyTopic = (topicName, property, newValue) => {
    setTopics((draft) => {
      const topicToChange = draft.find((currentTopic) => currentTopic.name === topicName);

      topicToChange[property] = newValue;
    });
  };

  const reorderTopics = (from, to) => {
    setTopics((draft) => {
      const oldIndex = draft.findIndex((topic) => topic.name === from.id);
      const newIndex = draft.findIndex((topic) => topic.name === to.id);

      [draft[oldIndex], draft[newIndex]] = [draft[newIndex], draft[oldIndex]];
    });
  };

  return { topics, ros, isLoading, setTopics, modifyTopic, reorderTopics };
};

const fetchTopics = async (setRos, setTopics, setIsLoading) => {
  const ros = await setupConnection();
  setRos(ros);

  const fetchedTopics = await getTopics(ros);
  const normalizedTopics = normalizeTopics(fetchedTopics);
  setTopics(normalizedTopics);

  setIsLoading(false);
};

export default useTopics;
