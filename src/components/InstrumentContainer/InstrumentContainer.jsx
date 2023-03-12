import { useMessage, useStrategy } from "../../hooks";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import InstrumentContainerWrapper from "./InstrumentContainerWrapper";
import InstrumentHeader from "./InstrumentContainerHeader";
import { BaseInstrument } from "../Instruments";

const InstrumentContainer = ({ topic, modifyTopic, ros }) => {
  const { message, dataPoints } = useMessage({
    connection: ros,
    topicName: topic.name,
  });

  const { DefaultInstrument, defaultProps, barProps, graphProps, simpleProps, availableDisplayModes } = useStrategy(
    topic,
    message,
    dataPoints
  );

  const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: topic.name,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleUnsubscribe = () => modifyTopic(topic.name, "subscribed", false);

  const setDisplayMode = (newDisplayMode) => modifyTopic(topic.name, "displayMode", newDisplayMode);

  const setSize = (newSize) => modifyTopic(topic.name, "size", newSize);

  const setBarConstraints = (newBarConstraints) => modifyTopic(topic.name, "barConstraints", newBarConstraints);

  return (
    <InstrumentContainerWrapper
      rowSpan={topic.size.value.rowSpan}
      colSpan={topic.size.value.colSpan}
      dndRef={setNodeRef}
      dndStyle={style}
    >
      <InstrumentHeader
        topic={topic}
        availableDisplayModes={availableDisplayModes}
        listeners={listeners}
        handleUnsubscribe={handleUnsubscribe}
        setDisplayMode={setDisplayMode}
        setSize={setSize}
        setBarConstraints={setBarConstraints}
      />

      <BaseInstrument
        DefaultInstrument={DefaultInstrument}
        defaultProps={defaultProps}
        simpleProps={simpleProps}
        barProps={barProps}
        graphProps={graphProps}
        displayMode={topic.displayMode}
      />
    </InstrumentContainerWrapper>
  );
};

export default InstrumentContainer;
