import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod;

const createServer = async () => {
    mongod = await MongoMemoryServer.create(); 
}; 

const connect = async () => {
    await createServer();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
}

const closeDatabase = async() => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

//necessário para termos uma base limpa para cada teste unitário
/* const clearDatabase = async() => {
    let connection = mongoose.connection;
    for(let key in fakeData) {
        await connection.dropCollection(key.toString());
    }
} */

/* const addCollectionData = async(fakeCollectionNames:String | String[]) => {
    const collections = mongoose.connection.collections;
    for(let key in fakeCollectionNames) {
        const collection = collections[key];
        collection.insertMany(fakeData[key]);
    }
} */

export { connect, closeDatabase }