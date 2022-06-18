import { IProdutoFornecedor } from './IProdutoFornecedor';

export interface IVenda {
    id: String; //a ideia é ser um GUID, mas o typescript não tem esse tipo como nativo. Poderíamos criar, mas por enquanto não.
    clienteId: Number,
    produtos: Array<IProdutoFornecedor>,
    valorTotal: Number, //float
    dataVenda: Date,
    dataPrazo: Date,
    valorPago: Number, //float; esse campo vai ter o valor já pago para calcular alguma venda fiada paga de forma "parcelada"
    baixa: Boolean
}