import { IVenda } from "../../../domain/interfaces/IVenda";
import { IBaseRepository } from "./IBaseRepository";

interface IVendaRepository extends IBaseRepository {
    //possíveis métodos diferentes
    findByAttribute(attributes:Object) : Promise<IVenda | IVenda[]>; 
}

export { IVendaRepository }