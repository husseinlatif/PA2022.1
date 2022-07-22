import { Type } from "typescript"; //Generics do typescript

interface IBaseRepository {
    getAll() : Promise<Array<any>>
    getById(id:Number) : Promise<Type>;
    addData(data:Object) : Promise<any>;
    updateData(id: Number, data:Object) : Promise<Boolean | void>;
    remove(id:Number) : Promise<void> | Promise<Number>;      
}

export { IBaseRepository };
