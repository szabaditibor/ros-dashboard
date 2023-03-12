import { closestCenter, DndContext, KeyboardSensor, MouseSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { sortableKeyboardCoordinates, SortableContext } from "@dnd-kit/sortable";

import { Center } from "@chakra-ui/react";

const InstrumentGridWrapper = ({ children, topics, onDragEnd }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <Center mb={12}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={topics} strategy={() => null}>
          {children}
        </SortableContext>
      </DndContext>
    </Center>
  );
};

export default InstrumentGridWrapper;
