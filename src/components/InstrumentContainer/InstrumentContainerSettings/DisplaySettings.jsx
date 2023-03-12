import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import SettingsWrapper from "./SettingsWrapper";

import toIterable from "../../../utils/enums";

const DisplaySettings = ({ title, selectedOption, propToDisplay = null, options, onChange }) => {
  return (
    <SettingsWrapper title={title}>
      <RadioGroup value={selectedOption}>
        <Stack spacing={5} direction="row">
          {toIterable(options).map((currentOption) => (
            <Radio value={currentOption} onChange={() => onChange(currentOption)} colorScheme="blue" key={currentOption.key}>
              {propToDisplay ? currentOption.value[propToDisplay] : currentOption.value}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </SettingsWrapper>
  );
};

export default DisplaySettings;
