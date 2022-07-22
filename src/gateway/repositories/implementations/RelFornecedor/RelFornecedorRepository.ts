import { IRelFornecedor } from "../../../../domain/models/interfaces/IRelFornecedor";
import { RelFornecedor } from "../../../../domain/models/RelFornecedor";
import { IRelFornecedorRepository } from "../../interfaces/IRelFornecedorRepository";
import { BaseRepository } from "../BaseRepository/BaseRepository";
class RelFornecedorRepository extends BaseRepository implements IRelFornecedorRepository{
    
    constructor() {
        super(RelFornecedor);
    }

    async findByNameAndRelDate(name: String, relDate: String): Promise<IRelFornecedor> {
        try {
            let relatorio = await RelFornecedor.findOne({fornecedorName:name, dataEmissao:relDate}).exec().then(res => res);
            return relatorio;
        } catch(err) {
            throw Error(err.message);
        }
    }

}

export { RelFornecedorRepository }