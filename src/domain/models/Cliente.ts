import { ICliente } from "../interfaces/ICliente";
import { Schema } from "mongoose";

const clienteSchema = new Schema<ICliente>({
    name:{ type:String, required: true }
})