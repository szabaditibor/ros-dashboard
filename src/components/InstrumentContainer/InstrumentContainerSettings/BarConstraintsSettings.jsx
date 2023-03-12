import {
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import SettingWrapper from "./SettingsWrapper";

const BarConstraintsSettings = ({ constraints, onChange }) => {
  return (
    <SettingWrapper title="Bar Constraints">
      <Stack direction="row" spacing={6}>
        <BarConstraintsSettingsInput
          defaultValue={constraints.min}
          constraints={constraints}
          constraintType="min"
          onChange={onChange}
        />

        <BarConstraintsSettingsInput
          defaultValue={constraints.max}
          constraints={constraints}
          constraintType="max"
          onChange={onChange}
        />
      </Stack>
    </SettingWrapper>
  );
};

const BarConstraintsSettingsInput = ({ defaultValue, constraints, constraintType, onChange }) => {
  return (
    <NumberInput
      defaultValue={defaultValue}
      min={0}
      onChange={(value) => onChange({ ...constraints, [constraintType]: parseInt(value) })}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default BarConstraintsSettings;
