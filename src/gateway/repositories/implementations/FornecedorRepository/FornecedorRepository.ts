import { Fornecedor } from "../../../../domain/models/Fornecedor";
import { IFornecedor } from "../../../../domain/models/interfaces/IFornecedor";
import { IFornecedorRepository } from "../../interfaces/IFornecedorRepository";
import { BaseRepository } from "../BaseRepository/BaseRepository";

class FornecedorRepository extends BaseRepository implements IFornecedorRepository{

    constructor() {
        super(Fornecedor)
    }

    async findByName(fornecedorName: String): Promise<IFornecedor> {
        try {
            let fornecedor = await Fornecedor.findOne({name:fornecedorName}).exec().then(res => res);
            return fornecedor;
        } catch(err) {
            console.log(err);
            return null;
        }
    }


}

export { FornecedorRepository }