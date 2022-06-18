import { IVenda } from "../../domain/interfaces/IVenda";

export interface IVendaRepository {
    getVendasEmAberto() : Promise<Array<IVenda>>; //para gerar o relatório de cobrança
    getVendasByClienteNoDia(clienteId:Number):Promise<Array<IVenda>>; //para gerar o relatório individual
    addVenda(dadosVenda:IVenda) : Promise<void>;
    updateValorPag(vendaId:Number, valorAcrescentado:Number) : Promise<IVenda>; //atualizar caso o pagamento encaminhe-se de maneira fiada
    updateBaixa(vendaId:Number) : Promise<void>; //dar baixa no pagamento dessa venda 
}