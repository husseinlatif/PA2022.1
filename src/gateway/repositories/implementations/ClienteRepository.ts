import { Cliente } from "../../../domain/models/Cliente";
import { BaseRepository } from "./BaseRepository";
import { IClienteRepository } from "../interfaces/IClienteRepository";
class ClienteRepository extends BaseRepository implements IClienteRepository {
    
    constructor() {
        super(Cliente);
    }

}

export { ClienteRepository }