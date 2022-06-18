import { IFornecedor } from "../../domain/interfaces/IFornecedor"

export interface IFornecedorRepository {
    //talvez pensar na senha como um value object
    getAllFornecedores() : Promise<Array<IFornecedor>>;
    getFornecedorByName(name:String) : Promise<IFornecedor>;
    addFornecedor(name:String) : Promise<void>;
    updateTaxaComissao(fornecedorId: Number, taxa:Number) : Promise<void>;
    removeFornecedor(id:Number) : Promise<IFornecedor>;
}