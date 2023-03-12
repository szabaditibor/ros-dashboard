import { Flex, GridItem } from "@chakra-ui/react";

const InstrumentContainerWrapper = ({ rowSpan, colSpan, dndRef, dndStyle, children }) => {
  return (
    <GridItem
      ref={dndRef}
      rowSpan={rowSpan}
      colSpan={colSpan}
      px="6"
      pt="4"
      pb="8"
      bg="white"
      outline="solid 2px"
      outlineColor="blue.300"
      rounded="xl"
      shadow="md"
      role="group"
      style={dndStyle}
      _hover={{ shadow: "lg" }}
    >
      <Flex width="100%" height="100%" justifyContent="start" alignItems="center" direction="column">
        {children}
      </Flex>
    </GridItem>
  );
};

export default InstrumentContainerWrapper;
