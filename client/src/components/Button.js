import React from "react";
import Colors from '../constants/colors';

const Button = ({ text, action }) => {
    const styles = {
        padding: "10px 0px",
        width: "200px",
        border: "1px solid",
        borderRadius: "10px",
        fontWeight: "bold",
        color: Colors.base
    }
  return <button onClick={() => action()} style={styles}>{text}</button>;
};

export default Button;
