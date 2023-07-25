import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "User name required"],
  },
  image: {
    type: String,
    required: false,
  },
});

const User = models.User || model("User", userSchema);

export default User;
