import { IVenda } from "../../../domain/interfaces/IVenda";
import { Venda } from "../../../domain/models/Venda";
import { IVendaRepository } from "../interfaces/IVendaRepository";

class VendaRepository implements IVendaRepository {

    async getVendasByClienteNoDia(clienteId: Number, diaHoje:Date): Promise<IVenda[]> {
        try{
            let vendasDoClienteNoDia = await Venda.find({__id:clienteId, dataVenda:diaHoje }).exec().then(res=> res);
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


    
}

export { VendaRepository }