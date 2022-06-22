import { Type } from "typescript"; //Generics do typescript

interface IBaseRepository {
    getAll() : Promise<Array<Type>>
    getById(id:Number) : Promise<Type>;
    addData(data:Object) : Promise<void>;
    updateData(id: Number, data:Object) : Promise<Boolean | void>;
    remove(id:Number) : Promise<void> | Promise<Number>;      
}

export { IBaseRepository };
