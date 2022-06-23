import { IProduto } from "./IProduto";

export interface IProdutoFornecedor extends IProduto{
    quantidade: Number, //int
    precoUnit: Number, //float
    fornecedorId: Number
}