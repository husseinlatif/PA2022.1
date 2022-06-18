import { IProduto } from "../interfaces/IProduto";
import { Schema } from 'mongoose';

const produtoSchema = new Schema<IProduto>({
    name: { type: String, required: true}
})