import { Center } from "@chakra-ui/react";

const BaseInstrumentWrapper = ({ children }) => {
  return (
    <Center width="100%" height="100%">
      {children}
    </Center>
  );
};

export default BaseInstrumentWrapper;
