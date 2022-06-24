import { RemoveClienteController } from './RemoveClienteController';
import { ClienteUseCase } from '../../../domain/usecases/implementations/ClienteUseCase';
import { ClienteRepository } from '../../../gateway/repositories/implementations/ClienteRepository';

const clienteRepository = new ClienteRepository();
const clienteUseCase = new ClienteUseCase(clienteRepository);
const removeClienteControllerController = new RemoveClienteController(clienteUseCase);

export { removeClienteControllerController };