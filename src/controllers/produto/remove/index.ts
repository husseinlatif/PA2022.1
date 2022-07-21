import { RemoveProdutoController } from './RemoveProdutoController';
import { ProdutoUseCase } from '../../../domain/usecases/implementations/ProdutoUseCase';
import { ProdutoRepository } from '../../../gateway/repositories/implementations/ProdutoRepository/ProdutoRepository';

const produtoRepository = new ProdutoRepository();
const produtoUseCase = new ProdutoUseCase(produtoRepository);
const removeProdutoController = new RemoveProdutoController(produtoUseCase);

export { removeProdutoController };