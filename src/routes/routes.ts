import { Router } from 'express';
import { getVendasEmAbertoController } from "../controllers/vendas/getEmAberto";
import { addVendaController } from "../controllers/vendas/add";
import { getVendasByClienteNoDiaController } from "../controllers/vendas/getByClienteNoDia";
import { updateValorPagVendaController } from "../controllers/vendas/updateValorPag";
import { updateBaixaController } from "../controllers/vendas/updateBaixa";
import { getRelByFornecedorNoDiaController } from '../controllers/relFornecedores/getRelByFornecedorNoDia';
import { addRelController } from '../controllers/relFornecedores/addRel';
import { getAllFornecedoresController } from '../controllers/fornecedores/getAllFornecedores';
import { addFornecedorController } from '../controllers/fornecedores/addFornecedor';
import { getByNameController } from '../controllers/fornecedores/getByName';
import { updateComisasoController } from '../controllers/fornecedores/updateComissao';


const router = Router();

//Rotas de Vendas
router.get('/vendas/getEmAberto', (req, res) => getVendasEmAbertoController.execute(req,res));
router.get('/vendas/getByClienteNoDia/:id', (req, res) => addVendaController.execute(req,res));
router.post('/vendas/add', (req, res) => getVendasByClienteNoDiaController.execute(req,res));
router.put('/vendas/updateValorPag', (req, res) => updateValorPagVendaController.execute(req,res));
router.put('/vendas/updateBaixa', (req, res) => updateBaixaController.execute(req,res));

//Rotas de Relatório de Fornecedores
router.get('/relatorio/getByFornecedorNoDia', (req, res) => getRelByFornecedorNoDiaController.execute(req,res));
router.post('/relatorio/addRel', (req,res) => addRelController.execute(req,res));

//Rotas de Fornecedores
router.get('/fornecedor/getAllFornecedores', (req, res) => getAllFornecedoresController.execute(req,res));
router.post('/fornecedor/addFornecedor', (req,res) => addFornecedorController.execute(req,res));
router.get('/fornecedor/getByName/:name', (req, res) => getByNameController.execute(req,res));
router.get('/fornecedor/updateComissao', (req, res) => updateComisasoController.execute(req,res));





export { router };