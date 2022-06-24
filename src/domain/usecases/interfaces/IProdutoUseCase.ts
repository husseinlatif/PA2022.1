import { IProduto } from "../../models/interfaces/IProduto";

export interface IProdutoUseCase {

    getAllProdutos() : Promise<Array<IProduto>>;
    getProdutosById(filter: Object) : Promise<IProduto[] | IProduto>;
    addProduct(name: String) : Promise<void>;
    removeProduto(id: Number) : Promise<void | Number>;

}