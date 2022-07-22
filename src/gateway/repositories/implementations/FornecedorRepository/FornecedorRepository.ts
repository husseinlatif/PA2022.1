import { Fornecedor } from "../../../../domain/models/Fornecedor";
import { IFornecedorRepository } from "../../interfaces/IFornecedorRepository";
import { UsuarioRepository } from "../UsuarioRepository/UsuarioRepository";

class FornecedorRepository extends UsuarioRepository implements IFornecedorRepository{

    constructor() {
        super(Fornecedor);
    }

}

export { FornecedorRepository }