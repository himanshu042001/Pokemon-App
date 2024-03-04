import React from "react";

const PokemonHeader = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Pokemon</h1>
    </div>
  );
};

const containerStyle = {
  textAlign: "center",
  fontFamily: "Arial, sans-serif", // Fallback font
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontSize: "2rem", // Adjust the font size as needed
  fontWeight: "bold",
  color: "#ff0000", // Adjust the color to match the original Pokemon font
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Add a shadow for depth
  margin: "20px 0", // Add some margin for spacing
};

const titleStyle = {
  margin: 0,
};

export default PokemonHeader;
