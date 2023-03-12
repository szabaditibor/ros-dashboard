import BaseInstrumentWrapper from "./BaseInstrumentWrapper";
import { BarDisplayMode, GraphDisplayMode, SimpleDisplayMode } from "../../DisplayModes";

import { InstrumentDisplayModes } from "../../../constants";

const BaseInstrument = (props) => {
  const { DefaultInstrument, defaultProps, barProps, graphProps, simpleProps, displayMode } = props;

  const chosenInstrument = getInstrumentType(displayMode, DefaultInstrument, defaultProps, barProps, graphProps, simpleProps);

  return <BaseInstrumentWrapper>{chosenInstrument}</BaseInstrumentWrapper>;
};

const getInstrumentType = (displayMode, DefaultInstrument, defaultProps, barProps, graphProps, simpleProps) => {
  const instrumentTypes = {
    [InstrumentDisplayModes.DEFAULT.value]: <DefaultInstrument {...defaultProps} />,
    [InstrumentDisplayModes.BAR.value]: <BarDisplayMode {...barProps} />,
    [InstrumentDisplayModes.GRAPH.value]: <GraphDisplayMode {...graphProps} />,
    [InstrumentDisplayModes.SIMPLE.value]: <SimpleDisplayMode {...simpleProps} />,
  };

  return instrumentTypes[displayMode.value];
};

export default BaseInstrument;
