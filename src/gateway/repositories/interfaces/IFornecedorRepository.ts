import { IBaseRepository } from "./IBaseRepository";
import { IFornecedor } from '../../../domain/models/interfaces/IFornecedor';

interface IFornecedorRepository extends IBaseRepository {
    findByName(name:String):Promise<IFornecedor>;
}

export { IFornecedorRepository };