import { Checkbox } from "@chakra-ui/react";

const TopicDrawerListItem = ({ topic, handleCheckboxChange }) => {
  return (
    <Checkbox
      spacing="1rem"
      defaultChecked={topic.subscribed}
      onChange={(e) => handleCheckboxChange(e, topic.name)}
      value={topic.name}
    >
      {topic.name}
    </Checkbox>
  );
};

export default TopicDrawerListItem;
