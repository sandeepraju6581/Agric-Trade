import mongoose from "mongoose";

export const connectDB = async () =>
{
    await mongoose.connect('mongodb+srv://Agri-trade:65811856@cluster0.xvvcacc.mongodb.net/Agri-trade').then(()=>console.log("DB Connected"));
}