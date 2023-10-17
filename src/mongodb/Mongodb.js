/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.connection_string);
    console.log(
      "Database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectionDB;