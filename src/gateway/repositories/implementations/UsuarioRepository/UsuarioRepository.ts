import { Model } from "mongoose";
import { Type } from "typescript";
import { IUsuarioRepository } from "../../interfaces/IUsuarioRepository";
import { BaseRepository } from "../BaseRepository/BaseRepository";

abstract class UsuarioRepository extends BaseRepository implements IUsuarioRepository {
    
    constructor(model:Model<any>) {
        super(model);
    }

    async findByName(name: String): Promise<Type> {
        try {
            const registerFound = await this._model.findOne({name}).exec().then(res => res);
            return registerFound;
        } catch (err) {
            console.log(err);
            return null
        }
    }
} 

export { UsuarioRepository }