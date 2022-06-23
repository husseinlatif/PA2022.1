import { UpdateBaixaController } from './UpdateBaixaController';
import { VendaUseCase } from '../../../domain/usecases/implementations/VendaUseCase';
import { VendaRepository } from '../../../gateway/repositories/implementations/VendaRepository';

const vendaRepository = new VendaRepository();
const vendaUseCase = new VendaUseCase(vendaRepository);
const updateBaixaController = new UpdateBaixaController(vendaUseCase);

export { updateBaixaController };