import { IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";

import InstrumentContainerSettings from "../InstrumentContainerSettings";

const InstrumentContainerHeaderMenu = ({ topic, availableDisplayModes, handleUnsubscribe, setDisplayMode, setSize, setBarConstraints }) => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<ChevronDownIcon />} />
      <MenuList>
        <InstrumentContainerSettings
          topic={topic}
          availableDisplayModes={availableDisplayModes}
          setDisplayMode={setDisplayMode}
          setSize={setSize}
          setBarConstraints={setBarConstraints}
        />

        <MenuItem icon={<CloseIcon />} onClick={handleUnsubscribe}>
          Unsubscribe
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default InstrumentContainerHeaderMenu;
