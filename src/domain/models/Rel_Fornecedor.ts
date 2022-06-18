import { IRel_Fornecedor } from "../interfaces/IRel_Fornecedor";
import { Schema, Types } from "mongoose";


const relFornecedorSchema = new Schema<IRel_Fornecedor>({
    fornecedorId: { type: Types.ObjectId, required: true },
    produtos: { type:[{id:Types.ObjectId, name:String, quantidade:Number, precoUnit: Number}], required:true},
    valorTotalVendido: { type: Number, required: true },
    comissao: { type: Number, required: false },
    taxa: { type: Number, required: false },
    carreto: { type: Number, required: false },
    frete: { type: Number, required: false },
    outros: { type: Number, required: false },
    totalAPagar: { type: Number, required: true }
})