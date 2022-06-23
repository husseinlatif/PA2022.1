import { GetVendasEmAbertoController } from './GetVendasEmAbertoController';
import { IVendaUseCase } from '../../../domain/usecases/interfaces/IVendaUseCase';

let vendaUseCase : IVendaUseCase;
const getVendasEmAbertoController = new GetVendasEmAbertoController(vendaUseCase);

export { getVendasEmAbertoController };