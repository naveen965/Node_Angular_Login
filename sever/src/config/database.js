import { connect } from "mongoose";

const mongoUrl = "mongodb+srv://naveen:naveen123@cluster0-pjxcl.azure.mongodb.net/authSystem?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await connect(mongoUrl, { 
            useNewUrlParser: true ,
            useUnifiedTopology: true
        });
        console.log("Connected to the Database");
    } catch (err) {
        console.log(err.message);
    }
};

export default connectDB;