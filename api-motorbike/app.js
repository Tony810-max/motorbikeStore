const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const authJwt = require("./helpers/jwt");
const api = process.env.API_URL;
const errorHandler = require("./helpers/error-handler");

app.use(cors());
app.options("*", cors());

const productsRouter = require("./routers/products");
const categoriesRouter = require("./routers/categories");
const usersRouter = require("./routers/users");
const adminsRouter = require("./routers/admins");
const contactsRouter = require("./routers/contacts");
const cartRouter = require("./routers/carts");
const orderRouter = require("./routers/order");

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(authJwt());
app.use(errorHandler);

app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/admin`, adminsRouter);
app.use(`${api}/contacts`, contactsRouter);
app.use(`${api}/carts`, cartRouter);
app.use(`${api}/orders`, orderRouter);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("server is running port 3001");
});
