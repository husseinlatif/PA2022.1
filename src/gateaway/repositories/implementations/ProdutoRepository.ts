import { IProdutoRepository } from "../interfaces/IProdutoRepository";
import { Produto } from "../../../domain/models/Produto";
import { IProduto } from "../../../domain/interfaces/IProduto";

class ProdutoRepository implements IProdutoRepository {
    async getAllProdutos(): Promise<IProduto[]> {
        try {
            let prods = await Produto.find({}).exec().then(res => res);
            return prods;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    async getProductById(id: Number): Promise<IProduto> {
        try{
            let prod = Produto.findById(id).exec().then(res => res);
            return prod;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
    addProduct(name: String): void {
        let prod = new Produto({name});
        prod.save((err) => {if(err) console.log(err)});
    }

}

export { ProdutoRepository }