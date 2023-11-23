import mongoose, { mongo } from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://prosadsen000:prosadsen000@cluster000.xlk5izx.mongodb.net/text00');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;