import { Router } from 'express';
import { getVendasEmAbertoController } from "../controllers/venda";


const router = Router();

//Rotas de vendas
router.get('vendas/getEmAberto', (req, res) => getVendasEmAbertoController.execute(req,res));


export { router };