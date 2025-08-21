import mongoose from "mongoose";

const ConnnectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGO DB CONNECTED : ${conn.connection.host}`);
        
        
    } catch (error) {

           console.error(" MongoDB Connection Error:", error.message);
        process.exit(1);
        
    }
}


export default ConnnectDB;
