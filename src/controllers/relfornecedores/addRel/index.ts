import { AddRelController } from './AddRelController';
import { RelFornecedorRepository } from '../../../gateway/repositories/implementations/RelFornecedorRepository';
import { RelFornecedorUseCase } from '../../../domain/usecases/implementations/RelFornecedorUseCase';

const relFornecedorRepository = new RelFornecedorRepository();
const relFornecedorUseCase = new RelFornecedorUseCase(relFornecedorRepository);
const addRelController = new AddRelController(relFornecedorUseCase);

export { addRelController }