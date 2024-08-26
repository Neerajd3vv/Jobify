import mongoose from "mongoose"

export default async function connectionToMongodb () {
    try {
        await mongoose.connect(process.env.MONGODB_URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MonogDB connected successfully!");
        
    } catch (error) {
        console.error("Error while connecting to MonogDb", error);
        
    }process.exit(1)
}

