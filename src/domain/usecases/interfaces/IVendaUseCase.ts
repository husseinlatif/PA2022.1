import { IVenda } from "../../models/interfaces/IVenda";

export interface IVendaUseCase {
    getVendasEmAberto() : Promise<IVenda | IVenda[]>; //para gerar o relatório de cobrança
    getVendasByClienteNoDia(clienteName:String, date: String):Promise<Array<IVenda> | IVenda>; //para gerar o relatório individual
    addVenda(dadosVenda:Object) : Promise<void>;
    updateValorPag(vendaId:Number, valorAcrescentado:Number) : Promise<Boolean>; //atualizar caso o pagamento encaminhe-se de maneira fiada
    updateBaixa(vendaId:Number) : Promise<Boolean>; //dar baixa no pagamento dessa venda 
}