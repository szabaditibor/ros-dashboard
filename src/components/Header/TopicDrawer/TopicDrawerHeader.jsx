import { DrawerCloseButton, DrawerHeader } from "@chakra-ui/react";

const TopicDrawerHeader = ({ title }) => {
  return (
    <>
      <DrawerCloseButton mt={2} />
      <DrawerHeader>{title}</DrawerHeader>
    </>
  );
};

export default TopicDrawerHeader;
