import { IBaseRepository } from "./IBaseRepository";
import { IRelFornecedor } from "../../../domain/models/interfaces/IRelFornecedor";

interface IRelFornecedorRepository extends IBaseRepository {
    findByNameAndRelDate(name:String, relDate:Date) : Promise<IRelFornecedor>;
}

export { IRelFornecedorRepository };