const mongoose = require("mongoose");
require('dotenv').config();
const Connection = mongoose.connect(process.env.BACKEND_MONGOOSE_CONNECTION);

module.exports = Connection;
