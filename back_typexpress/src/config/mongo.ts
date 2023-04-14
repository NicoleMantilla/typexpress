import "dotenv/config";
import { connect } from "mongoose";


async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
    console.log("Connected to MongoDB")
}

export default dbConnect;