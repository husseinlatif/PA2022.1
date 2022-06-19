import { IProdutoRepository } from "../interfaces/IProdutoRepository";
import { Produto } from "../../../domain/models/Produto";
import { IProduto } from "../../../domain/interfaces/IProduto";

class ProdutoRepository implements IProdutoRepository {
    async getAllProdutos(): Promise<IProduto[]> {
        let prod = await Produto.find({}).exec().then(res => res);
        console.log(prod)
        return prod;
    }
    getProductById(id: Number): Promise<IProduto> {
        
    }
    addProduct(name: String): Promise<void> {
        
    }

}

export { ProdutoRepository }