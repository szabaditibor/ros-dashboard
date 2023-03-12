import { Button, ButtonGroup } from "@chakra-ui/react";
import LoadButton from "./LoadButton";

const PersistenceButtonGroup = ({ save, load }) => {
  return (
    <ButtonGroup spacing={2}>
      <Button colorScheme="blue" onClick={save}>
        Save
      </Button>

      <LoadButton accept="application/json" onChange={load} />
    </ButtonGroup>
  );
};

export default PersistenceButtonGroup;
