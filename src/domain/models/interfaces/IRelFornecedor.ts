import { IProdutoFornecedor } from "./IProdutoFornecedor";
export interface IRelFornecedor {
    _id:Number, //pode ser um GUID também
    fornecedorName: String, //int
    produtos: Array<IProdutoFornecedor>,
    valorTotalVendido: Number, //float
    comissao?: Number, //float, para ser aplicado como porcentagem
    carreto?: Number, //float, como real
    taxa: Number, //float, para ser aplicado como porcentagem
    frete?: Number, //float, para ser aplicado como porcentagem
    outros?: Number, //float, como real
    totalAPagar: Number //float, como real
}