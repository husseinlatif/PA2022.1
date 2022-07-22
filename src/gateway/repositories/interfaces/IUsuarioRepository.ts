import { Type } from "typescript";
import { IBaseRepository } from "./IBaseRepository";

interface IUsuarioRepository extends IBaseRepository {
    findByName(name:String):Promise<Type | any>; //ideal seria deixar claro que pode ser IAdmin | ICliente | IFornecedor
}

export { IUsuarioRepository }