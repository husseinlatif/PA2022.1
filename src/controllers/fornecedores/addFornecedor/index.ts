import { AddFornecedorController } from './AddFornecedorController';
import { FornecedorUseCase } from '../../../domain/usecases/implementations/FornecedorUseCase';
import { FornecedorRepository } from '../../../gateway/repositories/implementations/FornecedorRepository/FornecedorRepository';

const fornecedorRepository = new FornecedorRepository();
const fornecedorUseCase = new FornecedorUseCase(fornecedorRepository);
const addFornecedorController = new AddFornecedorController(fornecedorUseCase);

export { addFornecedorController }