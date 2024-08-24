import mongoose from "mongoose"

const connectDataBase = async () => {
    try {

        await mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASENAME}`)
        console.log("DATA BASE WILL BE CONNECTED SUCCESSFULLY")

    } catch (error) {
        console.log(error)
    }
}
export default connectDataBase