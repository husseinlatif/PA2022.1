import { Produto } from "../../../domain/models/Produto";
import { IProduto } from "../../../domain/models/interfaces/IProduto";
import { BaseRepository } from "./BaseRepository";
import { IProdutoRepository } from '../interfaces/IProdutoRepository';

class ProdutoRepository extends BaseRepository implements IProdutoRepository {

    constructor() {
        super(Produto);
    }

    async findByAttribute(attributes: Object): Promise<IProduto | IProduto[]> {
        try {
            let produtos = await Produto.find({ ...attributes }).exec().then(res => res);
            return produtos;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

export { ProdutoRepository }