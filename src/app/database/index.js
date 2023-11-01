import mongoose from "mongoose";

export default async function connectToDB() {
    try {
        await mongoose.connect('mongodb+srv://rahul:Rahul@123@cluster0.7hsrn58.mongodb.net/')
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}