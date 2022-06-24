import { Request, Response } from 'express';
import { IProdutoUseCase } from "../../../domain/usecases/interfaces/IProdutoUseCase";
import { BaseController } from "../../BaseController";

export class GetProdutosByIdController extends BaseController {

    private produtoUseCase: IProdutoUseCase;

    constructor(produtoUseCase: IProdutoUseCase) {

        super();
        this.produtoUseCase = produtoUseCase;
        
    }

    protected async executeImpl(req: Request, res: Response): Promise<void | any> {
        try {

            let result = await this.produtoUseCase.getProdutosById(req.params.name);
            return this.sucesso<any>(res, result);

        } catch (err) {

            return this.erro(res, err.toString());

        }
    }
}