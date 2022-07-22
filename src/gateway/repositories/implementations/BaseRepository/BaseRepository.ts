import mongoose, { Model } from 'mongoose';
import { Type } from "typescript";
import { IBaseRepository } from "../../interfaces/IBaseRepository";

abstract class BaseRepository implements IBaseRepository{

    public _model: Model<any>;

    constructor(model: Model<any>) {
        this._model = model;
    }

    public async getAll() : Promise<Array<Type>> {
        let list = await this._model.find({}).exec()
        .then(res => res)
        .catch(err => {throw Error(err.message)});
        return list;
    }

    public async getById(id: Number): Promise<Type> {
        let entry = await this._model.findById(id).exec()
        .then(res => res)
        .catch(err => {throw Error(err.message)} );
        return entry;
    }

    async addData(data: Object): Promise<any> {       
        try{
            let newEntry = new this._model({...data});
            let insertedEntry = await newEntry.save().then(res => res)
            return insertedEntry;
        } catch(err) {
            throw(err.message);
        }
        //TO DO ----> tratar erro por fora!
    }

    async updateDataByName(name:String, data: Object): Promise<Boolean> {
        
        const options = { returnDocuments:'after' };
        let changedData = await this._model.updateOne({ name }, {...data}, options).exec()
        .then(res => res.acknowledged)
        .catch(err => { throw Error(err.message)});
        return changedData;
    }

    async removeById(id: mongoose.Types.ObjectId): Promise<Number> {
        let deletedCount = await this._model.deleteOne({_id:id})
        .then(res => res.deletedCount)
        .catch(err => {throw Error(err.message)});
        return deletedCount;
    }

    async removeByName(name: String): Promise<Number> {
        let deletedCount = await this._model.deleteOne({name})
        .then(res => res.deletedCount)
        .catch(err => {throw Error(err.message)}); //cuida de qualquer erro que acontecer durante a conexão;
        //se não existir um documento com essa identificação, o "erro" é identificado pelo retorno de nenhuma deleção
        return deletedCount;
    }
}

export { BaseRepository };