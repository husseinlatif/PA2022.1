import { Type } from "typescript"; //Generics do typescript

interface IBaseRepository {
    getAll() : Promise<Array<Type>>
    getById(id:Number) : Promise<Type>;
    addData(data:Object) : Promise<Object>;
    updateData(id: Number, data:Object) : Promise<boolean> | void;
    remove(id:Number) : Promise<void> | Promise<Number>;      
}

export { IBaseRepository };
