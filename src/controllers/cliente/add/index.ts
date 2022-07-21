import { AddClienteController } from './AddClienteController';
import { ClienteUseCase } from '../../../domain/usecases/implementations/ClienteUseCase';
import { ClienteRepository } from '../../../gateway/repositories/implementations/ClienteRepository/ClienteRepository';

const clienteRepository = new ClienteRepository();
const clienteUseCase = new ClienteUseCase(clienteRepository);
const addClienteController = new AddClienteController(clienteUseCase);

export { addClienteController };