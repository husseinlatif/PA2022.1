import { IRelFornecedor } from "../../../../domain/models/interfaces/IRelFornecedor";
import { RelFornecedor } from "../../../../domain/models/RelFornecedor";
import { IRelFornecedorRepository } from "../../interfaces/IRelFornecedorRepository";
import { BaseRepository } from "../BaseRepository/BaseRepository";
class RelFornecedorRepository extends BaseRepository implements IRelFornecedorRepository{
    
    constructor() {
        super(RelFornecedor);
    }

    async findByIdAndRelDate(name: String, relDate: Date): Promise<IRelFornecedor> {
        try {
            let relatorio = await RelFornecedor.findOne({fornecedorName:name, dataVenda:relDate}).exec().then(res => res);
            return relatorio;
        } catch(err) {
            console.log(err);
            return null;
        }
    }

}

export { RelFornecedorRepository }