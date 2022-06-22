import { IVenda } from "../../../domain/interfaces/IVenda";

export interface IVendaService {
    getVendasEmAberto() : Promise<IVenda | IVenda[]>; //para gerar o relatório de cobrança
    getVendasByClienteNoDia(clienteId:Number):Promise<Array<IVenda> | IVenda>; //para gerar o relatório individual
    addVenda(dadosVenda:Object) : Promise<void>;
    updateValorPag(vendaId:Number, valorAcrescentado:Number) : Promise<void>; //atualizar caso o pagamento encaminhe-se de maneira fiada
    updateBaixa(vendaId:Number) : Promise<void>; //dar baixa no pagamento dessa venda 
}