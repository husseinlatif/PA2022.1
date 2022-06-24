import { IClienteUseCase } from "../interfaces/IClienteUseCase";
import { IClienteRepository } from "../../../gateway/repositories/interfaces/IClienteRepository";
import { ICliente } from "../../../domain/models/interfaces/ICliente";

class ClienteUseCase implements IClienteUseCase {

    private readonly _clienteRepository : IClienteRepository;

    constructor(clienteRepository: IClienteRepository) {
        this._clienteRepository = clienteRepository;
    }

    async getAllClientes() : Promise<Array<ICliente>> {
        return await this._clienteRepository.getAll();
    }

    async getClienteByName(id: Number): Promise<ICliente> {
        return await this._clienteRepository.getById(id);
    }

    async addCliente(name: String): Promise<void> {
        return await this._clienteRepository.addData(name);
    }

    async removeCliente(id: Number): Promise<Number | void> {
        return await this._clienteRepository.remove(id);
    }
}

export { ClienteUseCase };