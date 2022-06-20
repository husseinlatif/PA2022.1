import { IFornecedor } from "../../../domain/interfaces/IFornecedor"

export interface IFornecedorService {
    //talvez pensar na senha como um value object
    getAllFornecedores() : Promise<Array<IFornecedor>>;
    getFornecedorByName(name:String) : Promise<IFornecedor>;
    addFornecedor(name:String) : void;
    updateComissao(fornecedorId: Number, percentil:Number) : Promise<IFornecedor>;
    removeFornecedor(id:Number) : Promise<Number>;
}