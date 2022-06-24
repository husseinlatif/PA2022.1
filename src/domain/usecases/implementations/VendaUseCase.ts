import { IVenda } from "../../../domain/models/interfaces/IVenda";
import { IVendaRepository } from "../../../gateway/repositories/interfaces/IVendaRepository";
import { IVendaUseCase } from "../interfaces/IVendaUseCase";

class VendaUseCase implements IVendaUseCase {

    private readonly _vendaRepository : IVendaRepository;

    constructor(vendaRepository: IVendaRepository) {
        this._vendaRepository = vendaRepository;
    }


    async getVendasEmAberto(): Promise<IVenda | IVenda[]> {
        return await this._vendaRepository.findByAttribute({baixa:false});
    }

    async addVenda(dadosVenda: Object): Promise<void> {
        //pôr o tratamento de exceção aqui?
        return await this._vendaRepository.addData(dadosVenda);
    }

    async getVendasByClienteNoDia(clienteId: Number, date: String): Promise<IVenda | IVenda[]> {
        return await this._vendaRepository.findByAttribute({_id:clienteId, dataVenda:date})
    }

    async updateValorPag(vendaId: Number, valorAcrescentado: Number): Promise<Boolean> {
        //ideia é fazer algo como um += só que numa mesma transação
        //mongo fornece essa opção como um comando de incremento com valor associado

        let incrementalUpdate = {$inc:{'vendas.valorPago': valorAcrescentado}}
        
        let updated : Boolean | void = await this._vendaRepository.updateData(vendaId, incrementalUpdate);
        if(updated) {
            return updated;
        } else {
            throw Error('Algum erro ocorreu durante a atualização de valor pago dessa venda.');
        }
    }

    async updateBaixa(vendaId: Number): Promise<Boolean> {
        
        let updateData = {baixa:true};

        let updated :Boolean | void = await this._vendaRepository.updateData(vendaId, updateData);
        if(updated) {
            return updated;
        } else {
            throw Error('Algum erro ocorreu durante a baixa dessa venda.');
        }
            
    }

}

export { VendaUseCase };