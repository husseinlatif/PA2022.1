import { ICliente } from "./interfaces/ICliente";
import * as mongoose from "mongoose";
import commonOptions from "./Utils/schemaOptions";

const clienteSchema = new mongoose.Schema<ICliente>({
    id: { type: Number, required: true },
    name:{ type:String, required: true }
}, commonOptions)

const Cliente = mongoose.model('clientes', clienteSchema);
export { Cliente }; 