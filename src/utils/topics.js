import { InstrumentBarConstraints, InstrumentDisplayModes, InstrumentSizes, TopicTitles, TOPIC_NAME_PATTERNS } from "../constants";

const normalizeTopics = (topicNames) => {
  const filteredTopicNames = topicNames.filter((topicName) => isAllowed(topicName));

  return filteredTopicNames.reduce((topics, topicName) => {
    const annotatedTopic = annotateTopic(topicName);

    return [...topics, annotatedTopic];
  }, []);
};

const isAllowed = (topicName) => {
  return TOPIC_NAME_PATTERNS.some((suffix) => topicName.endsWith(suffix));
};

const annotateTopic = (topicName) => {
  const topicType = getTopicType(topicName);

  const annotatedTopic = {
    name: topicName,
    subscribed: false,
    type: topicType,
    title: TopicTitles[topicType] ?? topicType,
    displayMode: InstrumentDisplayModes.DEFAULT,
    size: InstrumentSizes.SMALL,
    barConstraints: InstrumentBarConstraints[topicType]?.value ?? { min: 0, max: 0 },
  };

  return annotatedTopic;
};

const getTopicType = (topicName) => {
  const topicSuffix = getTopicSuffix(topicName);

  const topicType = topicSuffix.toUpperCase();
  return topicType;
};

const getTopicSuffix = (topicName) => {
  const topicSuffix = topicName.split("/").pop();

  return topicSuffix;
};

export { normalizeTopics };
