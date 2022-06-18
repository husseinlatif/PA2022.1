import { IVenda } from "../interfaces/IVenda";
import { Schema, Types } from "mongoose";

//TODO ver como tratar o id aqui, talvez de momento seja bom deixar normal

const vendaSchema = new Schema<IVenda>({
    clienteId: { type: Types.ObjectId, required: true},
    produtos: { type:[{id:Types.ObjectId, name:String, quantidade:Number, precoUnit: Number}], required:true},
    valorTotal: { type:Number, required:true },
    dataVenda: { type:Date, required:true },
    dataPrazo: { type:Date, required:true },
    valorPago: { type:Number, required:true },
    baixa: { type:Boolean, required: true }
})