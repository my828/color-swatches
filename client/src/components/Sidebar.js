import React from "react";
import color from "../constants/colors";
import Button from "./Button";

const Sidebar = ({ randomColors, generateRandom }) => {
  const styles = {
    container: {
      width: "25%",
      backgroundColor: color.sidebar,
      height: window.outerHeight,
      textAlign: "center"
    },
    content: {
      paddingTop: "60px",
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Button text="Random Color" action={generateRandom} />
        <div style={{marginLeft: "15%", textAlign: "left"}}>
          {randomColors.map(color => (
            <div key={color} style={{marginTop: "20px", fontSize: "20px"}}>{color}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
