import { GetProdutosByIdController } from './GetProdutosByIdController';
import { ProdutoUseCase } from '../../../domain/usecases/implementations/ProdutoUseCase';
import { ProdutoRepository } from '../../../gateway/repositories/implementations/ProdutoRepository';

const produtoRepository = new ProdutoRepository();
const produtoUseCase = new ProdutoUseCase(produtoRepository);
const getProdutosByIdController = new GetProdutosByIdController(produtoUseCase);

export { getProdutosByIdController };