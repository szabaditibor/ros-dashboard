import { Flex, IconButton, Text } from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";

import InstrumentContainerHeaderMenu from "../InstrumentContainerHeaderMenu";

const InstrumentHeader = ({
  topic,
  availableDisplayModes,
  listeners,
  handleUnsubscribe,
  setDisplayMode,
  setSize,
  setBarConstraints,
}) => {
  const { title } = topic;

  return (
    <Flex
      width="100%"
      justify="space-between"
      alignItems="center"
      direction="row"
      mb={6}
      zIndex="overlay"
      visibility="hidden"
      _groupHover={{ visibility: "visible" }}
    >
      <DragHandleButton {...listeners} />

      <Text fontSize="xl" fontWeight="semibold" visibility="visible">
        {title.value ? title.value : title}
      </Text>

      <InstrumentContainerHeaderMenu
        topic={topic}
        availableDisplayModes={availableDisplayModes}
        handleUnsubscribe={handleUnsubscribe}
        setDisplayMode={setDisplayMode}
        setSize={setSize}
        setBarConstraints={setBarConstraints}
      />
    </Flex>
  );
};

const DragHandleButton = (props) => {
  return <IconButton icon={<DragHandleIcon />} {...props} />;
};

export default InstrumentHeader;
