import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import { createPortal } from "react-dom";
import { dropContainerIDs } from "./constant";
import { Droppable } from "./Droppable";
import { Item } from "./Item";

function MultiContainers() {
  const [currentContainerID, setCurrentContainerID] =
    useState<UniqueIdentifier | null>(
      dropContainerIDs[0], //initial item should be in first container
    );

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  const sensors = useSensors(touchSensor, mouseSensor);

  const handleDragEnd = ({ over }: DragEndEvent) => {
    if (over) setCurrentContainerID(over.id);
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      {/* Droppable Containers */}
      <div className="flex w-fit flex-col gap-4 sm:flex-col md:flex-row">
        {dropContainerIDs.map((con_id) => (
          <Droppable
            col_id={con_id}
            key={con_id}
            isPresent={con_id === currentContainerID}
          />
        ))}
      </div>
      {/* overlay for animation and add the over item with dragging element */}
      {createPortal(
        <DragOverlay
          dropAnimation={{
            duration: 500,
          }}
        >
          <Item>Drag Me</Item>
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
}

export default MultiContainers;
