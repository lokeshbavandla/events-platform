import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {};

async function dbConnect() {
    
    if(connection.isConnected) {
        console.log('DB is already Connected');
        return
    }

    try {

        const db = await mongoose.connect(process.env.MONGODB_URI || '');

        connection.isConnected = db.connections[0].readyState;

        console.log('DB connected Successfully');
        
        
    } catch (error) {
        
        console.log(error);

        process.exit(1);
        
    }
}

export default dbConnect;