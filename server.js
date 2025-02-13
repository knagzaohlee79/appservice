// // /**
// //  * Created by Syed Afzal
// //  */
// // require("./config/config");

// // const express = require("express");
// // const path = require("path");
// // const cookieParser = require("cookie-parser");
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// // const db = require("./db");

// // const app = express();

// // //connection from db here
// // db.connect(app);

// // app.use(cors());
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, "public")));

// // //  adding routes
// // require("./routes")(app);

// // app.on("ready", () => {
// //   app.listen(3000, () => {
// //     console.log("Server is up on port", 3000);
// //   });
// // });

// // module.exports = app;

// require("./config/config");

// const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const db = require("./db");

// const app = express();

// // Không cần kết nối MongoDB nữa
// db.connect(app);

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// //  Adding routes
// require("./routes")(app);

// const PORT = process.env.PORT || 8080; // Sử dụng PORT từ môi trường nếu có

// app.listen(8080, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// module.exports = app;


require("./config/config");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

// Kết nối Cosmos DB
db.connect(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Thêm routes
require("./routes")(app);

const PORT = process.env.PORT || 8080; // Sử dụng PORT từ môi trường nếu có

app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
