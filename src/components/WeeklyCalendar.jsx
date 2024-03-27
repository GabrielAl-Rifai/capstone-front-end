import React from "react";
import { useDrop } from "react-dnd";

const WeeklyCalendar = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: NativeTypes.FILE,
    drop: (item, monitor) => {
      // Handle dropping the recipe onto the calendar
      const recipe = item.recipe;
      // Implement your logic to add the recipe to the specific day in the calendar
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return <div ref={drop}>{/* Render your calendar table here */}</div>;
};

export default WeeklyCalendar;
