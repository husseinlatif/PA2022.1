import { IFornecedor } from "../interfaces/IFornecedor";
import { Schema } from "mongoose";

export const fornecedorSchema = new Schema<IFornecedor>({
    name: { type: String, required: true },
    taxaComissao: { type: Number, required: true }
})