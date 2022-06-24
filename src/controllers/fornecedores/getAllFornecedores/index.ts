import { GetAllFornecedoresController } from './GetAllFornecedoresController';
import { FornecedorUseCase } from '../../../domain/usecases/implementations/FornecedorUseCase';
import { FornecedorRepository } from '../../../gateway/repositories/implementations/FornecedorRepository';

const fornecedorRepository = new FornecedorRepository();
const fornecedorUseCase = new FornecedorUseCase(fornecedorRepository);
const getAllFornecedoresController = new GetAllFornecedoresController(fornecedorUseCase);

export { getAllFornecedoresController }