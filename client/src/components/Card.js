import React from "react";
import PropType from "prop-types";

const Card = ({ color , selectColor, style }) => {
  const styles = {
    cardContainer: {
      border: `1px solid ${style.borderColor}`,
      borderRadius: "10px",
      boxShadow: "0 0 3px rgba(0, 0, 0, .3)",
      margin: "0 0 20px 0" 
    },
    colorContainer: {
      backgroundColor: color.value,
      height: "80%",
      borderRadius: "10px 10px 0 0"
    },
    textContainer: {
      display: "flex",
      alignItems: "center",
      height: "20%"
    }
  };
  return (
    <div
      className="card-container"
      style={{ ...style, ...styles.cardContainer }}
      onClick={() => selectColor(color)}
    >
      <div style={styles.colorContainer} />
      <div className="p-2 ml-2" style={styles.textContainer}>
        {color.value.toLowerCase()}
      </div>
    </div>
  );
};

Card.propTypes = {
  color: PropType.object.isRequired
};
export default Card;
