import { Router } from 'express';
import { getVendasEmAbertoController } from "../controllers/vendas/getEmAberto";
import { addVendaController } from "../controllers/vendas/add";
import { getVendasByClienteNoDiaController } from "../controllers/vendas/getByClienteNoDia";
import { updateValorPagVendaController } from "../controllers/vendas/updateValorPag";
import { updateBaixaController } from "../controllers/vendas/updateBaixa";
import { addProdutoController } from "../controllers/produto/add";
import { getAllProdutosController } from "../controllers/produto/getAll";
import { removeProdutoController } from "../controllers/produto/remove";
import { getRelByFornecedorNoDiaController } from '../controllers/relFornecedores/getRelByFornecedorNoDia';
import { addRelController } from '../controllers/relFornecedores/addRel';
import { getAllFornecedoresController } from '../controllers/fornecedores/getAllFornecedores';
import { addFornecedorController } from '../controllers/fornecedores/addFornecedor';
import { getByNameController } from '../controllers/fornecedores/getByName';
import { updateComisasoController } from '../controllers/fornecedores/updateComissao';
import { getProdutosByIdController } from '../controllers/produto/getById';


const router = Router();

//Rotas de Vendas
router.get('/vendas/getEmAberto', (req, res) => getVendasEmAbertoController.execute(req,res));
router.get('/vendas/getByClienteNoDia/:id/:date', (req, res) => addVendaController.execute(req,res));
router.post('/vendas/add', (req, res) => getVendasByClienteNoDiaController.execute(req,res));
router.put('/vendas/updateValorPag', (req, res) => updateValorPagVendaController.execute(req,res));
router.put('/vendas/updateBaixa', (req, res) => updateBaixaController.execute(req,res));

//Rotas de produtos
router.get('/produtos/list', (req, res) => getAllProdutosController.execute(req,res));
router.delete('/produtos/delete/:id', (req, res) => removeProdutoController.execute(req,res));
router.post('/produtos/add', (req, res) => addProdutoController.execute(req,res));
router.get('/produtos/get/:name', (req, res) => getProdutosByIdController.execute(req,res));

//Rotas de clientes
router.get('/clientes/getAll', (req, res) => getAllProdutosController.execute(req,res));
router.post('/clientes/add', (req, res) => getAllProdutosController.execute(req,res));
router.get('/clientes/getByName/:id', (req, res) => getAllProdutosController.execute(req,res));
router.delete('/clientes/delete/:id', (req, res) => getAllProdutosController.execute(req,res));

//Rotas de Relatório de Fornecedores
router.get('/relatorio/getByFornecedorNoDia', (req, res) => getRelByFornecedorNoDiaController.execute(req,res));
router.post('/relatorio/addRel', (req,res) => addRelController.execute(req,res));

//Rotas de Fornecedores
router.get('/fornecedor/getAllFornecedores', (req, res) => getAllFornecedoresController.execute(req,res));
router.post('/fornecedor/addFornecedor', (req,res) => addFornecedorController.execute(req,res));
router.get('/fornecedor/getByName/:name', (req, res) => getByNameController.execute(req,res));
router.get('/fornecedor/updateComissao', (req, res) => updateComisasoController.execute(req,res));

export { router };