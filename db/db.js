import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try{
        await mongoose.connect("mongodb+srv://rashmi:rashmi123@cluster0.pszpa.mongodb.net/peste?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Connected to MongoDB');
    }catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
};
export default connectToMongoDB;