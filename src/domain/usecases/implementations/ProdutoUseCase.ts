import { IProduto } from "../../../domain/models/interfaces/IProduto";
import { IProdutoUseCase } from "../interfaces/IProdutoUseCase";
import { IProdutoRepository } from "../../../gateway/repositories/interfaces/IProdutoRepository";

class ProdutoUseCase implements IProdutoUseCase {

    private readonly _produtoRepository : IProdutoRepository;

    constructor(produtoRepository: IProdutoRepository) {
        this._produtoRepository = produtoRepository;
    }

    async getAllProdutos() : Promise<Array<IProduto>> {
        return await this._produtoRepository.getAll();
    }

    async getProdutosById(filter: Object) : Promise<IProduto[] | IProduto> {
        return await this._produtoRepository.findByAttribute(filter);
    }

    async addProduct(name: String) : Promise<void> {
        return await this._produtoRepository.addData(name);
    }

    async removeProduto(id: Number): Promise<void | Number> {
        return await this._produtoRepository.remove(id);
    }

}

export { ProdutoUseCase };