import { AddProdutoController } from './AddProdutoController';
import { ProdutoUseCase } from '../../../domain/usecases/implementations/ProdutoUseCase';
import { ProdutoRepository } from '../../../gateway/repositories/implementations/ProdutoRepository';

const produtoRepository = new ProdutoRepository();
const produtoUseCase = new ProdutoUseCase(produtoRepository);
const addProdutoController = new AddProdutoController(produtoUseCase);

export { addProdutoController };