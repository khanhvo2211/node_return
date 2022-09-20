const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const route = require("./routes");

// routes init
route(app);
// http logger
app.use(morgan("combined"));

//post method
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// template engines
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
