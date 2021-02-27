const express = require('express')
const setUpDB = require("./config/database");
const app = express();
const port = 3040;
const router = require("./config/routes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/", router);
setUpDB()
app.listen(port, () => {
    console.log('listening to port', port)
})