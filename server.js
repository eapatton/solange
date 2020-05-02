// --------------------- SERVER CONFIG ----------------------- //
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4000;

// ---------------------  DATABASE -------------------------- //
const db = require("./models");

// --------------------- ROUTES ----------------------------- //
const routes = require("./routes");

// ---------------------- MIDDLEWARE --------------------------- //
app.use(express.static(`$(__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ---------------------- HTML ROUTES ------------------------------- //
app.use("/", routes.views);

// ------------------------- API ROUTES ------------------------------- //
app.use("/api/v1", routes.api);

// ---------------------- START SERVER  ------------------------------- //
app.listen(PORT, () => {
  console.log(`HTTP server listening at http://localhost:${PORT}`);
});
