import { GetClienteByNameController } from './GetClienteByNameController';
import { ClienteUseCase } from '../../../domain/usecases/implementations/ClienteUseCase';
import { ClienteRepository } from '../../../gateway/repositories/implementations/ClienteRepository/ClienteRepository';

const clienteRepository = new ClienteRepository();
const clienteUseCase = new ClienteUseCase(clienteRepository);
const getClienteByNameController = new GetClienteByNameController(clienteUseCase);

export { getClienteByNameController };