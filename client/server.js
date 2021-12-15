// Importing external libs
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importing local files
// Set the Task Modal as global so I can use
// at any file ou function using the same Promise (process/thread)
global.Task = require("./api/models/task.model");
const routes = require("./api/routes/task.routes");

// Passing the JS process to Mongoose use as default process too
mongoose.Promise = global.Promise;
// Connect to mongoDB using new URL that Mongo uses
mongoose.connect(
  "<YOUR_MONGO_DB_LINK>", // To not expose cluster - Could be used on a .env file
  { useNewUrlParser: true }
);

// Initiliaze our express server provider
const app = express();

/**
 * Using cors for security
 * bodyParser to use JSON in application
 */
// Cors enable us to use middlewares
// Middlewares are functions that will pass b4 the routing function
app.use(cors());
// Makes the app to only receive body as UTF-8
// creates a new body with "HashMap" like (object with key-value pairs)
// extended: true accept any type of data
app.use(bodyParser.urlencoded({ extended: true }));
// Makes the app always parse json in the requests
app.use(bodyParser.json());

// Makes the app listen the port
app.listen(3000);

// Initialize app routes at the file
routes(app);

/**
 * URL not found on routes
 * will send a message
 * that current URL not found
 * and 404 (not found)
 * code status
 *  */
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

// Just a log to know the server is running
console.log(`Listening on ${port}`);
