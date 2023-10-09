import mongoose from 'mongoose';


export const Connection = async(username, password) => {
    const URL =`mongodb://${username}:${password}@ac-wy6qpik-shard-00-00.kqcp3by.mongodb.net:27017,ac-wy6qpik-shard-00-01.kqcp3by.mongodb.net:27017,ac-wy6qpik-shard-00-02.kqcp3by.mongodb.net:27017/ECOMMERCE-WEB?ssl=true&replicaSet=atlas-g4ralu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected Successfully');
    } catch (error){
        console.log('Error while connecting with the database ', error.message);
    }
}


export default Connection;