import { IVenda } from "../../models/interfaces/IVenda";

export interface IVendaUseCase {
    getVendasEmAberto() : Promise<IVenda | IVenda[]>; //para gerar o relatório de cobrança
    getVendasByClienteNoDia(clienteId:Number, date: String):Promise<Array<IVenda> | IVenda>; //para gerar o relatório individual
    addVenda(dadosVenda:Object) : Promise<void>;
    updateValorPag(vendaId:Number, valorAcrescentado:Number) : Promise<void>; //atualizar caso o pagamento encaminhe-se de maneira fiada
    updateBaixa(vendaId:Number) : Promise<void>; //dar baixa no pagamento dessa venda 
}