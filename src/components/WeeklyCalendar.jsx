import React from "react";
import { useDrop } from "react-dnd";

const WeeklyCalendar = () => {
  // useDrop hook enable's drop functionality
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: NativeTypes.FILE,
    drop: (item, monitor) => {
      // Get the dropped recipe data
      const recipe = item.recipe;
     //LOGIC-I need more time for this
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(), // Check if something is being dragged over
      canDrop: monitor.canDrop(), // Check if the current drop target is allowed
    }),
  });

  return <div ref={drop}>{}</div>;
};

export default WeeklyCalendar;
