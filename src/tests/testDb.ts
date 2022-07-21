import mongoose, { mongo } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import ClienteJson from '../resources/jsonMocks/clientesData.json';
import AdminJson from '../resources/jsonMocks/adminData.json';


const fakeData = {
    clientes:ClienteJson,
    admins:AdminJson
}

const mongoTestDb = new MongoMemoryServer();

const connect = async () => {
    const uri = await mongoTestDb.getUri();
    await mongoose.connect(uri);
}

const closeDatabase = async() => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoTestDb.stop();
}

//necessário para termos uma base limpa para cada teste unitário
const clearDatabase = async() => {
    let connection = mongoose.connection;
    for(let key in fakeData) {
        await connection.dropCollection(key.toString());
    }
}

const addCollectionData = async(fakeCollectionNames:String[]) => {
    const collections = mongoose.connection.collections;
    for(let key in fakeCollectionNames) {
        const collection = collections[key];
        collection.insertMany(fakeData[key]);
    }
}