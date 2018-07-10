const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // what is this?
const massive = require("massive");
const ac = require("./controller.js");
require("dotenv").config();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance); // this will give the express application access to our database
  })
//   dbInstance.new_planes().then(planes => console.log(planes)).catch(err => console.log("err"));
// dbInstance.get_planes().then(planes => {
//     console.log(planes)
// }).catch(err => console.log(err))

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get(`/api/planes`, ac.getPlanes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
