import { Fornecedor } from "../../../domain/models/Fornecedor";
import { IFornecedorRepository } from "../interfaces/IFornecedorRepository";
import { BaseRepository } from "./BaseRepository";

class FornecedorRepository extends BaseRepository implements IFornecedorRepository{

    constructor() {
        super(Fornecedor)
    }

}

export { FornecedorRepository }