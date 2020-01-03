import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ colors, selectColor, currentPage }) => {
  const styles = {
    cardList: {
      width: "100%"
    }
  };
  return (
    <div className="card-deck row row-cols-4" style={styles.cardList}>
      {colors.map(color => (
        <div key={color.value} className="col mb-4">
          <Card
            color={color}
            selectColor={selectColor}
            currentPage={currentPage}
            style={{ width: "90%", height: 240, borderColor: "white" }}
          />
        </div>
      ))}
    </div>
  );
};

CardList.propTypes = {
  colors: PropTypes.array.isRequired
};
export default CardList;
