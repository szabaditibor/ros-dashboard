import { Text } from "@chakra-ui/react";

const SimpleDisplayMode = ({ data, fontSize }) => {
  return <Text fontSize={fontSize}>{data}</Text>;
};

export default SimpleDisplayMode;
