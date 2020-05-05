// --------------------- SERVER CONFIG ----------------------- //
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const morgan = require("morgan");
//const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4000;

// ---------------------  DATABASE -------------------------- //
const db = require("./models");

// --------------------- ROUTES ----------------------------- //
const routes = require("./routes");

// ---------------------- MIDDLEWARE --------------------------- //
app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));
//app.use(cookieParser());

app.use(
  session({
    store: new MongoStore({
      url: process.env.MONGODB_URI || "mongodb://localhost:27017/base",
    }),
    secret:
      process.env.SESSION_SECRET ||
      "Beyoncesolangejayzwhentheresabilliondollarsonanelevator",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // Two weeks
    },
  })
);

// ---------------------- HTML ROUTES ------------------------------- //
app.use("/", routes.views);

// ------------------------- API ROUTES ------------------------------- //
app.use("/api/v1", routes.api);

// ---------------------- START SERVER  ------------------------------- //
app.listen(PORT, () => {
  console.log(`HTTP server listening at http://localhost:${PORT}`);
});
