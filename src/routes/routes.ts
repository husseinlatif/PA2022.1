import { Router } from 'express';
import { getVendasEmAbertoController } from "../controllers/vendas/getEmAberto";
import { addVendaController } from "../controllers/vendas/add";
import { getVendasByClienteNoDiaController } from "../controllers/vendas/getByClienteNoDia";
import { updateValorPagVendaController } from "../controllers/vendas/updateValorPag";
import { updateBaixaController } from "../controllers/vendas/updateBaixa";
import { getRelByFornecedorNoDiaController } from '../controllers/relFornecedores/getRelByFornecedorNoDia';
import { addRelController } from '../controllers/relFornecedores/addRel';


const router = Router();

//Rotas de vendas
router.get('/vendas/getEmAberto', (req, res) => getVendasEmAbertoController.execute(req,res));
router.post('/vendas/getByClienteNoDia', (req, res) => addVendaController.execute(req,res));
router.post('/vendas/add', (req, res) => getVendasByClienteNoDiaController.execute(req,res));
router.put('/vendas/updateValorPag', (req, res) => updateValorPagVendaController.execute(req,res));
router.put('/vendas/updateBaixa', (req, res) => updateBaixaController.execute(req,res));

//Rotas de Relatório de Fornecedores
router.get('/relatorio/getByFornecedorNoDia', (req, res) => getRelByFornecedorNoDiaController.execute(req,res));
router.post('/relatorio/addRel', (req,res) => addRelController);

export { router };