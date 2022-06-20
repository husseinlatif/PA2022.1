import { IRelFornecedor } from "../interfaces/IRelFornecedor";
import * as mongoose from 'mongoose';

const relFornecedorSchema = new mongoose.Schema<IRelFornecedor>({
    fornecedorId: { type: Number, required: true },
    produtos: { type:[{id:Number, name:String, quantidade:Number, precoUnit: Number}], required:true},
    valorTotalVendido: { type: Number, required: true },
    comissao: { type: Number, required: false },
    taxa: { type: Number, required: false },
    carreto: { type: Number, required: false },
    frete: { type: Number, required: false },
    outros: { type: Number, required: false },
    totalAPagar: { type: Number, required: true }
})

const RelFornecedor = mongoose.model('rel_fornecedores', relFornecedorSchema);
export { RelFornecedor };