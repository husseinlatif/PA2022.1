import { IBaseRepository } from "./IBaseRepository";
import { IRelFornecedor } from "../../../domain/models/interfaces/IRelFornecedor";

interface IRelFornecedorRepository extends IBaseRepository {
    findByIdAndRelDate(id:Number, relDate:Date) : Promise<IRelFornecedor>;
}

export { IRelFornecedorRepository };