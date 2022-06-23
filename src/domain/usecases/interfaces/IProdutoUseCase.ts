import { IProduto } from "../../models/interfaces/IProduto";

export interface IProdutoUseCase {
    getAllProdutos() : Promise<Array<IProduto>>;
    getProductById(id:Number) : Promise <IProduto>;
    addProduct(name: String) : void;
}