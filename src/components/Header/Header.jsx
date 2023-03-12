import { Heading, Flex, ButtonGroup } from "@chakra-ui/react";

import TopicDrawer from "./TopicDrawer";
import PersistenceButtonGroup from "./PersistenceButtonGroup";

const Header = ({ topics, isLoading, isFull, setTopics, save, load }) => {
  return (
    <Flex w="100%" direction="row" justify="space-between">
      <Heading as="h1" mb={8}>
        ROS Dashboard
      </Heading>

      <ButtonGroup spacing={8}>
        <TopicDrawer topics={topics} setTopics={setTopics} isLoading={isLoading} isFull={isFull} />

        <PersistenceButtonGroup save={save} load={load} />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
