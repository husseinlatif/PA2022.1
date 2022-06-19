import { ICliente } from "../../../domain/interfaces/ICliente"

export interface IClienteRepository {
    getAllClientes() : Promise<Array<ICliente>>;
    getClienteByName(name:String) : Promise<ICliente>;
    addCliente(name:String) : Promise<void>;
    removeCliente(id:Number) : Promise<ICliente>;
}