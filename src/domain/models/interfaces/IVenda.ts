import { IProdutoFornecedor } from './IProdutoFornecedor';

export interface IVenda {
    _id: Number; 
    clienteName: String,
    produtos: Array<IProdutoFornecedor>,
    valorTotal: Number, //float
    dataVenda: Date, //ISO date
    dataPrazo: Date, //ISO date
    valorPago: Number, //float; esse campo vai ter o valor já pago para calcular alguma venda fiada paga de forma "parcelada"
    baixa: Boolean
}