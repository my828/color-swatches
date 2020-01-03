import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const CardDetail = ({ clear, arrColor }) => {
  const [currentColor, setCurrentColor] = useState(arrColor[2]);
  const styles = {
    cardDetail: {
      marginRight: "20px",
      textAlign: "center"
    }
  };

  const changeColor = color => {
    setCurrentColor(color);
  };
  return (
    <div style={styles.cardDetail}>
      <Card
        selectColor={changeColor}
        color={currentColor}
        style={{
          width: window.innerWidth * 0.7,
          height: 440,
          borderColor: "black",
          fontSize: "25px"
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {arrColor.map(color => (
          <Card
            key={color.value}
            selectColor={changeColor}
            color={color}
            style={{
              width: "17%",
              height: 150,
              borderColor: "white",
              fontSize: "15px"
            }}
          />
        ))}
      </div>
      <Button text="Clear" action={clear} />
    </div>
  );
};

export default CardDetail;
