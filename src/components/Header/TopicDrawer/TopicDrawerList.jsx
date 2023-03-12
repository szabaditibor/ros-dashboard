import { DrawerBody, Stack } from "@chakra-ui/react";
import TopicDrawerListItem from "./TopicDrawerListItem";

const TopicDrawerList = ({ topics, handleCheckboxChange }) => {
  return (
    <DrawerBody>
      <Stack spacing={[1, 6]} direction="column" mb="12">
        {topics.map((topic) => (
          <TopicDrawerListItem topic={topic} handleCheckboxChange={handleCheckboxChange} key={topic.name} />
        ))}
      </Stack>
    </DrawerBody>
  );
};

export default TopicDrawerList;
