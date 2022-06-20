import { ICliente } from "../../../domain/interfaces/ICliente"

export interface IClienteService {
    getAllClientes() : Promise<Array<ICliente>>;
    getClienteByName(name:String) : Promise<ICliente>;
    addCliente(name:String) : void;
    removeCliente(id:Number) : Promise<Number>;
}