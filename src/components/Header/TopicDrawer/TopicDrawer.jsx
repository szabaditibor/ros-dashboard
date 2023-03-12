import { Button, Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

import TopicDrawerHeader from "./TopicDrawerHeader";
import TopicDrawerList from "./TopicDrawerList";
import TopicDrawerFooter from "./TopicDrawerFooter";

import { useRef, useEffect } from "react";
import { useImmer } from "use-immer";
import { useDisclosure } from "@chakra-ui/react";

const TopicDrawer = ({ topics, setTopics, isLoading, isFull }) => {
  const [temporaryTopics, setTemporaryTopics] = useImmer([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  /* Need react to the changes after removing an instrument from the grid,
     otherwise it's gonna stuck on an "earlier version" */
  useEffect(() => {
    setTemporaryTopics(topics);
  }, [topics]);

  const handleCheckboxChange = (event, topicName) => {
    setTemporaryTopics((draft) => {
      const topic = draft.find((currentTopic) => currentTopic.name === topicName);

      topic.subscribed = event.target.checked;
    });
  };

  const handleClose = () => {
    setTemporaryTopics(topics);

    onClose();
  };

  const handleSave = () => {
    setTopics(temporaryTopics);

    onClose();
  };

  return (
    <>
      <Button colorScheme="blue" mb={12} ref={btnRef} isLoading={isLoading} isDisabled={isFull} onClick={onOpen}>
        Add Instrument
      </Button>

      <Drawer size="md" placement="right" isOpen={isOpen} onClose={handleClose} finalFocusRef={btnRef} closeOnEsc={true}>
        <DrawerOverlay />

        <DrawerContent>
          <TopicDrawerHeader title="Topics" />

          <TopicDrawerList topics={temporaryTopics} handleCheckboxChange={handleCheckboxChange} />

          <TopicDrawerFooter onClose={handleClose} handleSave={handleSave} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TopicDrawer;
