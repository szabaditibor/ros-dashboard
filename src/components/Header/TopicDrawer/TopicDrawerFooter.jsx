import { Button, DrawerFooter } from "@chakra-ui/react";

const TopicDrawerFooter = ({ onClose, handleSave }) => {
  return (
    <DrawerFooter>
      <Button variant="outline" mr={4} onClick={onClose}>
        Cancel
      </Button>

      <Button colorScheme="blue" onClick={handleSave}>
        Save
      </Button>
    </DrawerFooter>
  );
};

export default TopicDrawerFooter;
