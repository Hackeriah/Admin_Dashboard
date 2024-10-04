import { User } from "./models";
import { ConnectToDB } from "./utils";

export const FetchUsers = async () => {
  try {
    ConnectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch user data from database");
  }
};
