import { Cliente } from "../../../../domain/models/Cliente";
import { ICliente } from "../../../../domain/models/interfaces/ICliente";
import { BaseRepository } from "../BaseRepository/BaseRepository";
import { IClienteRepository } from "../../interfaces/IClienteRepository";
class ClienteRepository extends BaseRepository implements IClienteRepository {
    
    constructor() {
        super(Cliente);
    }

    async findByName(name: String): Promise<ICliente> {
        try {
            let cliente = await Cliente.findOne({name:name}).exec().then(res => res);
            return cliente;
        } catch(err) {
            console.log(err);
            return null;
        }
    }

}

export { ClienteRepository }