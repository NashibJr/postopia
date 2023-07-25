import { connect, set } from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  set("strictQuery", true);
  if (isConnected) {
    console.log("The database is already connected!");
    return;
  }
  try {
    await connect("mongodb://127.0.0.1:27017/postopia");
    console.log("Connected to the database");
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
