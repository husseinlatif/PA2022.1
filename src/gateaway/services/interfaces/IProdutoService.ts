import { IProduto } from "../../../domain/interfaces/IProduto";

export interface IProdutoService {
    getAllProdutos() : Promise<Array<IProduto>>;
    getProductById(id:Number) : Promise <IProduto>;
    addProduct(name: String) : void;
}