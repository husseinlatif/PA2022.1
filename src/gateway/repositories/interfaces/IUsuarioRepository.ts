import { Type } from "typescript";
import { IBaseRepository } from "./IBaseRepository";

interface IUsuarioRepository extends IBaseRepository {
    findByName(name:String):Promise<Type>;
}

export { IUsuarioRepository }