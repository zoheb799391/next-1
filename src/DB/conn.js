import mongoose from "mongoose";

export async function connect() {
    try {
mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection
connection.on('connected',()=> {
    console.log('connection sucessfull');
})
connection.on('error',(err) => {
    console.log('error in connection on', err);
    process.exit();
})
    } catch(err){
        console.log('error with connection', err);

    } finally {
console.log('something happened');
    }
}