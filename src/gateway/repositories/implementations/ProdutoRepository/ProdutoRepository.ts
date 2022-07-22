import { Produto } from "../../../../domain/models/Produto";
import { IProduto } from "../../../../domain/models/interfaces/IProduto";
import { BaseRepository } from "../BaseRepository/BaseRepository";
import { IProdutoRepository } from '../../interfaces/IProdutoRepository';

class ProdutoRepository extends BaseRepository implements IProdutoRepository {

    constructor() {
        super(Produto);
    }

    async getByName(name:String): Promise<IProduto> {
        try {
            let produto = await Produto.findOne({name}).exec().then(res => res);
            return produto;
        } catch (err) {
            throw Error(err.message)
        }
    }
}

export { ProdutoRepository }