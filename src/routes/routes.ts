import { Router } from 'express';
import { getVendasEmAbertoController } from "../controllers/vendas/getEmAberto";
import { addVendaController } from "../controllers/vendas/add";
import { getVendasByClienteNoDiaController } from "../controllers/vendas/getByClienteNoDia";
import { updateValorPagVendaController } from "../controllers/vendas/updateValorPag";
import { updateBaixaController } from "../controllers/vendas/updateBaixa";


const router = Router();

//Rotas de vendas
router.get('/vendas/getEmAberto', (req, res) => getVendasEmAbertoController.execute(req,res));
router.post('/vendas/getByClienteNoDia', (req, res) => addVendaController.execute(req,res));
router.post('/vendas/add', (req, res) => getVendasByClienteNoDiaController.execute(req,res));
router.put('/vendas/updateValorPag', (req, res) => updateValorPagVendaController.execute(req,res));
router.put('/vendas/updateBaixa', (req, res) => updateBaixaController.execute(req,res));


export { router };