import { IProduto } from "./interfaces/IProduto";
import * as mongoose from 'mongoose';
import commonOptions from "./Utils/schemaOptions";

const produtoSchema = new mongoose.Schema<IProduto>({
    id: { type: Number, required: true },
    name: { type: String, required: true}
}, commonOptions);

const Produto = mongoose.model('produtos', produtoSchema);
export { Produto }
