import { useDisclosure } from "@chakra-ui/react";

import {
  Button,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

import DisplaySettings from "./DisplaySettings";

import { InstrumentDisplayModes, InstrumentSizes } from "../../../constants";
import BarConstraintsSettings from "./BarConstraintsSettings";

const InstrumentContainerSettings = ({ topic, availableDisplayModes, setDisplayMode, setSize, setBarConstraints }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { title, displayMode, size, barConstraints } = topic;

  return (
    <>
      <MenuItem icon={<SettingsIcon />} onClick={onOpen}>
        Settings
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings - {title.value ? title.value : title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <DisplaySettings
              title="Display Modes"
              selectedOption={displayMode}
              options={availableDisplayModes}
              onChange={setDisplayMode}
            />

            <DisplaySettings
              title="Size"
              selectedOption={size}
              options={InstrumentSizes}
              propToDisplay="displayName"
              onChange={setSize}
            />

            {availableDisplayModes.includes(InstrumentDisplayModes.BAR) && (
              <BarConstraintsSettings constraints={barConstraints} onChange={setBarConstraints} />
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InstrumentContainerSettings;
