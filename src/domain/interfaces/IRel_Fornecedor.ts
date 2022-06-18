import { IProdutoFornecedor } from "./IProdutoFornecedor";

export interface IRel_Fornecedor {
    id:String, //pode ser um GUID também
    fornecedorId: Number, //int
    produtos: Array<IProdutoFornecedor>,
    valorTotalVendido: Number, //float
    comissao?: Number, //float, para ser aplicado como porcentagem
    taxa: Number, //float, para ser aplicado como porcentagem
    frete?: Number, //float, para ser aplicado como porcentagem
    outros?: Number, //float, para ser aplicado como porcentagem
    totalAPagar: Number //float, para ser aplicado como porcentagem
}