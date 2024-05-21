import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function main() {
    if (!config.database_url) {
        throw new Error("Database URL is undefined");
    }
    try {
        await mongoose.connect(config.database_url);
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main();
