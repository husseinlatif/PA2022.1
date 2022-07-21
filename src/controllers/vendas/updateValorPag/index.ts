import { UpdateValorPagVendaController } from './UpdateValorPagVendaController';
import { VendaUseCase } from '../../../domain/usecases/implementations/VendaUseCase';
import { VendaRepository } from '../../../gateway/repositories/implementations/VendaRepository/VendaRepository';

const vendaRepository = new VendaRepository();
const vendaUseCase = new VendaUseCase(vendaRepository);
const updateValorPagVendaController = new UpdateValorPagVendaController(vendaUseCase);

export { updateValorPagVendaController };