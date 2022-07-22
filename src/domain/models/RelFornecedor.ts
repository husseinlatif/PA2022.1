import { IRelFornecedor } from "./interfaces/IRelFornecedor";
import * as mongoose from 'mongoose';

const relFornecedorSchema = new mongoose.Schema<IRelFornecedor>({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    fornecedorName: { type: String, required: true, unique: true },
    produtos: { type:[{name:String, quantidade:Number, precoUnit: Number}], required:true},
    valorTotalVendido: { type: Number, required: true },
    comissao: { type: Number, required: false },
    taxa: { type: Number, required: false },
    carreto: { type: Number, required: false },
    frete: { type: Number, required: false },
    outros: { type: Number, required: false },
    totalAPagar: { type: Number, required: true },
    dataEmissao: { type:String, required:true }
})

const RelFornecedor = mongoose.model('rel_fornecedores', relFornecedorSchema);
export { RelFornecedor };