import * as mongoose from 'mongoose';

const mongoDb = 'mongodb://localhost:27017/fish_me';
mongoose.connect(mongoDb);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected', (txt) => console.log(txt));

export { db };

