import { Produto } from "../../../domain/models/Produto";
import { BaseRepository } from "./BaseRepository";
class ProdutoRepository extends BaseRepository implements ProdutoRepository {
    constructor() {
        super(Produto);
    }
}

export { ProdutoRepository }