import { Venda } from "../../../domain/models/Venda";
import { IVendaRepository } from "../interfaces/IVendaRepository";
import { BaseRepository } from "./BaseRepository";
class VendaRepository extends BaseRepository implements IVendaRepository {
    constructor() {
        super(Venda);        
    }
}

export { VendaRepository }