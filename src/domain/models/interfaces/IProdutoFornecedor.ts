import { IProduto } from "./IProduto";

export interface IProdutoFornecedor extends IProduto{
    id:Number,
    quantidade: Number, //int
    precoUnit: Number, //float
    fornecedorId: Number
}