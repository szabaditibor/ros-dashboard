import { Box, Stack, Text } from "@chakra-ui/react";

import blendColors from "../../../utils/colors";

const BarDisplayMode = ({ value, valueSuffix, max }) => {
  const formattedValue = valueSuffix ? `${value} ${valueSuffix}` : value;
  const gradient = generateGradient(value, max);

  return (
    <Stack width="25%" height="100%" direction="column" spacing="1rem">
      <Box width="100%" height="85%" outline="solid 1px" outlineColor="black" bgGradient={gradient} />
      <Text fontWeight="semibold">{formattedValue}</Text>
    </Stack>
  );
};

const generateGradient = (value, max) => {
  const percentFilled = (value / max) * 100;
  const percentEmpty = 100 - percentFilled;

  const from = "#67e06b";
  const to = "#eb3915";
  const ratio = percentFilled / 100;

  const gradientColor = blendColors(from.slice(1), to.slice(1), ratio);
  const gradient = `linear-gradient(to top, #${gradientColor} ${percentFilled}%, white ${percentFilled}% ${percentEmpty}%)`;

  return gradient;
};

export default BarDisplayMode;
