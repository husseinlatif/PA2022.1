import { IRelFornecedorRepository } from "../../../gateway/repositories/interfaces/IRelFornecedorRepository";
import { IRelFornecedor } from "../../models/interfaces/IRelFornecedor";
import { IRelFornecedorUseCase } from "../interfaces/IRelFornecedorUseCase";

class RelFornecedorUseCase implements IRelFornecedorUseCase {

    private readonly _relFornecedorRepository : IRelFornecedorRepository;

    constructor(relFornecedorRepository : IRelFornecedorRepository) {
        this._relFornecedorRepository = relFornecedorRepository;
    }

    async addRel(relatorio: IRelFornecedor): Promise<void> {
        return await this._relFornecedorRepository.addData(relatorio);
    }
    
    async getRelByFornecedorNoDia(fornecedorName: String, dataDesejada:Date): Promise<IRelFornecedor> {
        return await this._relFornecedorRepository.findByIdAndRelDate(fornecedorName, dataDesejada);
    }

}

export { RelFornecedorUseCase };