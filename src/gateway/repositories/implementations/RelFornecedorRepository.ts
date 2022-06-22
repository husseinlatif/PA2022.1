import { RelFornecedor } from "../../../domain/models/RelFornecedor";
import { BaseRepository } from "./BaseRepository";
class RelFornecedorRepository extends BaseRepository {
    
    constructor() {
        super(RelFornecedor);
    }

}

export { RelFornecedorRepository }