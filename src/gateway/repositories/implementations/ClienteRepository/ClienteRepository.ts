import { Cliente } from "../../../../domain/models/Cliente";
import { IClienteRepository } from "../../interfaces/IClienteRepository";
import { UsuarioRepository } from "../UsuarioRepository/UsuarioRepository";
class ClienteRepository extends UsuarioRepository implements IClienteRepository {
    
    constructor() {
        super(Cliente);
    }

}

export { ClienteRepository }