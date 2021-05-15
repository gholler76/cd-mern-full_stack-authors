// imports express and cors, invokes express as "app"
// assigns 8000 to "port" variable
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// makes express use cors for cross-origin requests and sets json as default format
app.use(cors());
app.use(express.json());

// requires mongoose for server configuration
require("./server/config/mongoose.config");

//requires using the stated project route path for routing
require("./server/routes/rapper.routes")(app);

// tells express to listen on assigned port for api calls
app.listen(port, () => console.log(`Listening on port ${port}...`));
