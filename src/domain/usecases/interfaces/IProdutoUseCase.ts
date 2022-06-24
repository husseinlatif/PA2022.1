import { IProduto } from "../../models/interfaces/IProduto";

export interface IProdutoUseCase {

    getAllProdutos() : Promise<Array<IProduto>>;
    addProduct(name: String) : Promise<void>;
    removeProduto(id: Number) : Promise<void | Number>;

}