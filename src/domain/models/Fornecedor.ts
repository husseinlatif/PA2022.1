import { IFornecedor } from "../interfaces/IFornecedor";
import * as mongoose from "mongoose";
import commonOptions from "./Utils/schemaOptions";

const fornecedorSchema = new mongoose.Schema<IFornecedor>({
    name: { type: String, required: true },
    taxaComissao: { type: Number, required: true }
}, commonOptions);

const Fornecedor = mongoose.model('fornecedores', fornecedorSchema)
export { Fornecedor };