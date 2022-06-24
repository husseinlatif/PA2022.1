import { GetAllClientesController } from './GetAllClientesController';
import { ClienteUseCase } from '../../../domain/usecases/implementations/ClienteUseCase';
import { ClienteRepository } from '../../../gateway/repositories/implementations/ClienteRepository';

const clienteRepository = new ClienteRepository();
const clienteUseCase = new ClienteUseCase(clienteRepository);
const getAllClientesController = new GetAllClientesController(clienteUseCase);

export { getAllClientesController };