import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://BaconWizard:Futbol1516.1@cluster0.o7adub5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(">>>DB is connected");
    } catch (error) {
        console.log(error);
    }
};