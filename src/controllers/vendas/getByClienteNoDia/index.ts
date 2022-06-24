import { GetVendasByClienteNoDiaController } from './GetVendasByClienteNoDiaController';
import { VendaUseCase } from '../../../domain/usecases/implementations/VendaUseCase';
import { VendaRepository } from '../../../gateway/repositories/implementations/VendaRepository';

const vendaRepository = new VendaRepository();
const vendaUseCase = new VendaUseCase(vendaRepository);
const getVendasByClienteNoDiaController = new GetVendasByClienteNoDiaController(vendaUseCase);

export { getVendasByClienteNoDiaController };