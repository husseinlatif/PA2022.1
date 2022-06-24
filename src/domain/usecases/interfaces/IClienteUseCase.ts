import { ICliente } from "../../models/interfaces/ICliente"

export interface IClienteUseCase {
    getAllClientes() : Promise<Array<ICliente>>;
    getClienteByName(id:Number) : Promise<ICliente>;
    addCliente(name:String) : void;
    removeCliente(id:Number) : Promise<Number | void>;
}