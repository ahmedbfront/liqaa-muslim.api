const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Router
const liqaa = require("./router/liqaa-muslim.route");
const contact = require("./router/contact.route");
const auth = require("./router/auth.route");

const upload = require("./helpers/multer");

const app = express();

const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/liqaa", upload, liqaa);
app.use("/contact", upload, contact);
app.use("/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The server is running ${3000}`);
});

module.exports = app;
