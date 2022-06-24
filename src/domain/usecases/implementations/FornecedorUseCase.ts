import { IFornecedorRepository } from "../../../gateway/repositories/interfaces/IFornecedorRepository";
import { IFornecedor } from "../../models/interfaces/IFornecedor";
import { IFornecedorUseCase } from "../interfaces/IFornecedorUseCase";

class FornecedorUseCase implements IFornecedorUseCase {

    private readonly _fornecedorRepository: IFornecedorRepository;

    constructor(fornecedorRepository: IFornecedorRepository) {
        this._fornecedorRepository = fornecedorRepository;
    }

    async getAllFornecedores(): Promise<IFornecedor[]> {
        return await this._fornecedorRepository.getAll();
    }

    async addFornecedor(name: String): Promise<void> {
        return await this._fornecedorRepository.addData({name});
    }
    
    async updateComissao(fornecedorId: Number, percentil: Number): Promise<Boolean | void> {
        return await this._fornecedorRepository.updateData(fornecedorId,{comissao:percentil})
    }

    async getFornecedorByName(name: String): Promise<IFornecedor> {
        return await this._fornecedorRepository.findByName(name);
    }
}

export { FornecedorUseCase };