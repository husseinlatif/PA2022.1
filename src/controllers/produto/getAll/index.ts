import { GetAllProdutosController } from './GetAllProdutosController';
import { ProdutoUseCase } from '../../../domain/usecases/implementations/ProdutoUseCase';
import { ProdutoRepository } from '../../../gateway/repositories/implementations/ProdutoRepository';

const produtoRepository = new ProdutoRepository();
const produtoUseCase = new ProdutoUseCase(produtoRepository);
const getAllProdutosController = new GetAllProdutosController(produtoUseCase);

export { getAllProdutosController };