import { IVenda } from "../../../../domain/models/interfaces/IVenda";
import { Venda } from "../../../../domain/models/Venda";
import { IVendaRepository } from "../../interfaces/IVendaRepository";
import { BaseRepository } from "../BaseRepository/BaseRepository";

class VendaRepository extends BaseRepository implements IVendaRepository {
    constructor() {
        super(Venda);        
    }

    async findByClientNameAndDate(nomeCliente:String, dataVenda:String): Promise<IVenda[]> {
        try {
            let vendas = await Venda.find({clienteName:nomeCliente, dataVenda}).exec().then(res => res);
            return vendas;
        } catch(err) {
            throw Error(err.message);
        }
    }
}

export { VendaRepository }