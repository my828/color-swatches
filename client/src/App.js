import React, { useState } from "react";
import {
  Navbar,
  CardList,
  Sidebar,
  Pagination,
  CardDetail
} from "./components";

import { ColorCodes, RANDOM_COLORS } from "./colors";

function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

function makeArrColor(selectedColor) {
  let arrColor = [];
  for (let i = -40; i <= 40; i += 20) {
    let obj = {};
    obj["value"] = shadeColor(selectedColor.value, i);
    arrColor.push(obj);
  }
  return arrColor;
}

function App() {
  // calculates currentCards based on currentPage and cardsPerPage
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(12);
  const [selectedColor, setSelectedColor] = useState("");

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = ColorCodes.slice(indexOfFirstCard, indexOfLastCard);

  // toggle between list and detail views
  const [listView, setListView] = useState(true);

  const [arrColor, setArrColor] = useState([]);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = color => {
    // generate array of color based on selected color
    setSelectedColor(color);
    setArrColor(makeArrColor(color));
    setListView(false);
  };
  const handleDetailCardClick = color => {
    setSelectedColor(color);
  }
  const handleClear = () => {
    setCurrentPage(1);
    setListView(true);
  };

  const generateRandom = () => {
    let randomColor =
      RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)];
    let value = ColorCodes.find(
      color => color.name === randomColor.toLowerCase()
    );
    setArrColor(makeArrColor(value));
    setSelectedColor(value);
    setListView(false);
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar randomColors={RANDOM_COLORS} generateRandom={generateRandom} />
        <div style={{ margin: "60px 0px 40px 40px" }}>
          {listView ? (
            <div>
              <CardList
                colors={currentCards}
                selectColor={handleCardClick}
                currentPage={currentPage}
              />
              <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={ColorCodes.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          ) : (
            <CardDetail
              clear={handleClear}
              selectedColor={selectedColor}
              detailCardClick={handleDetailCardClick}
              arrColor={arrColor}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
