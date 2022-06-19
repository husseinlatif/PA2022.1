import { IVenda } from "../../../domain/interfaces/IVenda";
import { Venda } from "../../../domain/models/Venda";
import { IVendaRepository } from "../interfaces/IVendaRepository";

class VendaRepository implements IVendaRepository {


    async getVendasEmAberto(): Promise<IVenda[]> {
        try{
            let vendasEmAberto = await Venda.find({ baixa:true }).exec().then(res => res);
            return vendasEmAberto;
        } catch(err) {
            console.log(err);
            return null;
        }
    }

    async getVendasByClienteNoDia(clienteId: Number, diaHoje:Date): Promise<IVenda[]> {
        try{
            let vendasDoClienteNoDia = await Venda.find({_id:clienteId, dataVenda:diaHoje }).exec().then(res => res);
            return vendasDoClienteNoDia;  
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    addVenda(dadosVenda: IVenda): void {
        let vendaObj = new Venda({...dadosVenda});
        vendaObj.save((err) => {if(err) console.log(err)});
    }


    async updateValorPag(vendaId: Number, valorAcrescentado: Number): Promise<IVenda> {
        
        let options = { returnDocuments:'after' };
        let incrementUpdate = {$inc:{'vendas.valorPago': valorAcrescentado}};
        
        try {
            let vendaAtt = await Venda.findOneAndUpdate({_id: vendaId}, incrementUpdate, options).exec().then(res => res);
            return vendaAtt;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async updateBaixa(vendaId: Number): Promise<void> {
        try {
            await Venda.updateOne({ _id:vendaId }, { baixa:true });
        } catch (err) {
            console.log(err);
        }
    }
    
}

export { VendaRepository }