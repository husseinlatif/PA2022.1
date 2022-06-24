import { IVenda } from "./interfaces/IVenda";
import * as mongoose from 'mongoose';
import commonOptions from "./Utils/schemaOptions";

//TODO ver como tratar o id aqui, talvez de momento seja bom deixar normal

const vendaSchema = new mongoose.Schema<IVenda>({
    id: { type: Number, required:true },
    clienteId: { type: Number, required: true},
    produtos: { type:[{id:Number, name:String, quantidade:Number, precoUnit: Number}], required:true},
    valorTotal: { type:Number, required:true },
    dataVenda: { type:Date, required:true },
    dataPrazo: { type:Date, required:true },
    valorPago: { type:Number, required:true },
    baixa: { type:Boolean, required: true }
}, commonOptions);

const Venda = mongoose.model('vendas', vendaSchema);
export { Venda };