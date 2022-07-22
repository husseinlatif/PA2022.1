import * as mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    name: { type: String, required: true, unique:true },
    mutableProperty: { type: Number, required: true}
}, { timestamps:true });

const Test = mongoose.model('tests', testSchema);
export { Test };