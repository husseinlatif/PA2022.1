import { IFornecedor } from "../../models/interfaces/IFornecedor"

export interface IFornecedorUseCase {
    //talvez pensar na senha como um value object
    getAllFornecedores() : Promise<Array<IFornecedor>>;
    getFornecedorByName(name:String) : Promise<IFornecedor>;
    addFornecedor(name:String) : void;
    updateComissao(fornecedorId: Number, percentil:Number) : Promise<IFornecedor>;
    removeFornecedor(id:Number) : Promise<Number>;
}