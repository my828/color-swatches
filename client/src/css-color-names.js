const axios = require("axios");
axios
  .get(
    "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json"
  )
  .then(res => {
    let ColorCode = res.data;
    let keys = Object.keys(ColorCode);
    let arr = [];
    let set = new Set();

    keys.map(key => {
      let value = ColorCode[key];
      if (!set.has(value)) {
        let obj = {};
        obj["name"] = key;
        obj["value"] = ColorCode[key];
        arr.push(obj);
      }
      set.add(value);
    });
    var fs = require("fs");
    fs.writeFile("colors.js", JSON.stringify(arr), err => {
      if (err) throw err;
      console.log("SAVE");
    });
  })
  .catch(err => {
    throw err;
  });
