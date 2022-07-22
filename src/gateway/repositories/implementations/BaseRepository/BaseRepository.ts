import { Model } from 'mongoose';
import { Type } from "typescript";
import { IBaseRepository } from "../../interfaces/IBaseRepository";

abstract class BaseRepository implements IBaseRepository{

    public _model: Model<any>;

    constructor(model: Model<any>) {
        this._model = model;
    }

    public async getAll() : Promise<Array<Type>> {
        try {
            let list = await this._model.find({}).exec().then(res => res);
            return list;
        } catch (err) {
            console.log(err);
            return null
        }
    }

    public async getById(id: Number): Promise<Type> {
        try {
            let entry = await this._model.findById(id).exec().then(res => res);
            return entry;
        } catch (err) {
            console.log(err);
            return null
        }
    }

    async addData(data: Object): Promise<any> {        
        let newEntry = new this._model({...data});
        let insertedEntry = await newEntry.save().then(res => res);
        //TO DO ----> tratar erro por fora!
        return insertedEntry;
        
    }

    async updateData(id:Number, data: Object): Promise<Boolean> {
        const options = { returnDocuments:'after' };
        try {
            let changedData = await this._model.updateOne({ _id:id }, {...data}, options).exec().then(res => res.acknowledged);
            return changedData;
        } catch (err) {
            console.log(err);
            return false
        }
    }

    async remove(id: Number): Promise<Number> {
        try {
            let deletedCount = await this._model.deleteOne({_id:id}).then(res => res.deletedCount);
            return deletedCount;
        } catch(err) {
            console.log(err);
            return null
        }
    }
}

export { BaseRepository };