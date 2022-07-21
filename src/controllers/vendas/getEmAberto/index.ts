import { GetVendasEmAbertoController } from './GetVendasEmAbertoController';
import { VendaUseCase } from '../../../domain/usecases/implementations/VendaUseCase';
import { VendaRepository } from '../../../gateway/repositories/implementations/VendaRepository/VendaRepository';

const vendaRepository = new VendaRepository();
const vendaUseCase = new VendaUseCase(vendaRepository);
const getVendasEmAbertoController = new GetVendasEmAbertoController(vendaUseCase);

export { getVendasEmAbertoController };