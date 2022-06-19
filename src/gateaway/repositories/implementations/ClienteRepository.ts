import { ICliente } from "../../../domain/interfaces/ICliente";
import { Cliente } from "../../../domain/models/Cliente";
import { IClienteRepository } from "../interfaces/IClienteRepository";

class ClienteRepository implements IClienteRepository {

    async getAllClientes(): Promise<ICliente[]> {
        try {
            let clientes = await Cliente.find({}).exec().then(res => res);
            return clientes;
        } catch (err) {
            console.log(err);
            return null
        }
    }


    async getClienteByName(name: String): Promise<ICliente> {        
        try {
            let cliente = await Cliente.findOne({name}).exec().then(res => res);
            return cliente;
        } catch (err) {
            console.log(err);
            return null
        }
    }

    addCliente(name: String): void {
        let cliente = new Cliente({name});
        cliente.save((err) => {if(err) console.log(err)});
    }

    async removeCliente(id:Number) : Promise<Number> {
        try {
            let deletedCount = await Cliente.deleteOne({_id:id}).then(res => res.deletedCount);
            return deletedCount;
        } catch(err) {
            console.log(err);
            return null
        }
    }
}