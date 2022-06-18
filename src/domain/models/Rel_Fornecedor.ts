import { IRel_Fornecedor } from "../interfaces/IRel_Fornecedor";
import * as mongoose from 'mongoose';

const relFornecedorSchema = new mongoose.Schema<IRel_Fornecedor>({
    fornecedorId: { type: mongoose.Types.ObjectId, required: true },
    produtos: { type:[{id:mongoose.Types.ObjectId, name:String, quantidade:Number, precoUnit: Number}], required:true},
    valorTotalVendido: { type: Number, required: true },
    comissao: { type: Number, required: false },
    taxa: { type: Number, required: false },
    carreto: { type: Number, required: false },
    frete: { type: Number, required: false },
    outros: { type: Number, required: false },
    totalAPagar: { type: Number, required: true }
})

const Rel_Fornecedor = mongoose.model('rel_fornecedor', relFornecedorSchema);
export { Rel_Fornecedor };