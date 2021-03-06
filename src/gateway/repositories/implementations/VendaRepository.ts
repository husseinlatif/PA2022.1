import { IVenda } from "../../../domain/models/interfaces/IVenda";
import { Venda } from "../../../domain/models/Venda";
import { IVendaRepository } from "../interfaces/IVendaRepository";
import { BaseRepository } from "./BaseRepository";

class VendaRepository extends BaseRepository implements IVendaRepository {
    constructor() {
        super(Venda);        
    }

    async findByAttribute(attributes: Object): Promise<IVenda | IVenda[]> {
        try {
            let vendas = await Venda.find({...attributes}).exec().then(res => res);
            return vendas;
        } catch(err) {
            console.log(err);
            return null;
        }
    }
}

export { VendaRepository }