import { IProduto } from "../../domain/interfaces/IProduto";

export interface IProdutoRepository {
    getAllProducts() : Promise<Array<IProduto>>;
    getProductById(id:Number) : Promise <IProduto>;
    addProduct(name: Number) : Promise<void>;
}