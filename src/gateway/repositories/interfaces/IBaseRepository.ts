import { Type } from "typescript"; //Generics do typescript

interface IBaseRepository {
    getAll() : Promise<Array<any>>
    getById(id:Number) : Promise<Type>;
    addData(data:Object) : Promise<any>;
    updateDataByName(name: String, data:Object) : Promise<Boolean | void>;
    removeById(id:Number | any) : Promise<void> | Promise<Number>;      
    removeByName(name:String) : Promise<void> | Promise<Number>;      
}

export { IBaseRepository };
