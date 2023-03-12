import { Box, Heading } from "@chakra-ui/react";

const SettingsWrapper = ({ title, children }) => {
  return (
    <Box mb={6}>
      <Heading as="h3" fontSize="lg" fontWeight="normal" mb={4}>
        {title}
      </Heading>

      {children}
    </Box>
  );
};

export default SettingsWrapper;
