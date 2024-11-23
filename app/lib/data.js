// Import your necessary dependencies
import { User } from "./models";
import { ConnectToDB } from "./utils";

// Function to fetch users
export const FetchUsers = async () => {
  try {
    await ConnectToDB(); // Ensure the connection to the database
    const users = await User.find(); // Fetch the users from the database
    return users;
  } catch (error) {
    console.error("Error fetching users:", error); // Log the error for debugging
    throw new Error("Failed to fetch user data from database");
  }
};
