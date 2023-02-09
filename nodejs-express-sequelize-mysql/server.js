const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.static('public'));

var corsOptions = {
  origin: "*",
  methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue:false,
  optionsSuccessStatus:200
};



app.use(cors(corsOptions));



// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("ngrok-skip-browser-warning" , "*");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// simple route
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.json({ message: "Welcome to FanFanCloud." });
});

app.post('/login', (req, res) => {
  // req.body
  console.log(req.body);    
  res.send('這是post')
})


require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT,  "0.0.0.0" ,() => {
  console.log(`Server is running on port ${PORT}.`);
});

