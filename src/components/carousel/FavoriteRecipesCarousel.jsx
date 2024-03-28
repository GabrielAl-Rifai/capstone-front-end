import React from "react";
import { useDrag } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import Slider from "react-slick";

// Component for individual recipe item
const RecipeItem = ({ recipe }) => {
  // Drag and drop functionality using React DnD
  const [{ isDragging }, drag] = useDrag({
    item: { type: NativeTypes.FILE, recipe }, // Define item type and data
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), // Check if item is being dragged
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {/* Render the recipe item content  */}
      {/* styling */}
    </div>
  );
};

// Component for carousel of favorite recipes
const FavoriteRecipesCarousel = ({ recipes }) => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    // DndProvider wraps the Slider component to enable drag and drop
    <DndProvider backend={HTML5Backend}>
      {/* Slider component renders the carousel */}
      <Slider {...settings}>
        {/* Map through the recipes array and render RecipeItem for each */}
        {recipes.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))}
      </Slider>
    </DndProvider>
  );
};

export default FavoriteRecipesCarousel;