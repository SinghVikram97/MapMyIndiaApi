const express = require("express");
const app = express();
const fetch = require("node-fetch");
const geocoder = require("geocoder");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Works");
});

app.post("/map", (req, res) => {
  const { start_lat, start_long, end_lat, end_long } = req.body;
  console.log(start_lat);
  res.send("done");
  // fetch(
  //   `https://apis.mapmyindia.com/advancedmaps/v1/fxs1vleongo2371f3mcb4jsjn21ii73x/route_adv/driving/${start_long},${start_lat};${start_lat},${start_long}?`
  // )
  //   .then(res => res.json())
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.send(err);
  //   });
});

app.post("/geocode", (req, res) => {
  const { location } = req.body;
  geocoder.geocode(`location`, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(4444, () => {
  console.log("Server started on http://localhost:4444");
});
