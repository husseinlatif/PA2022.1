import { Request, Response } from 'express';
import { IVendaUseCase } from "../../../domain/usecases/interfaces/IVendaUseCase";
import { BaseController } from "../../BaseController";

export class UpdateBaixaVendaController extends BaseController {

    private vendaUseCase: IVendaUseCase;

    constructor(vendaUseCase: IVendaUseCase) {

        super();
        this.vendaUseCase = vendaUseCase;
        
    }

    protected async executeImpl(req: Request, res: Response): Promise<void | any> {
        try {
            let id = parseInt(req.params.id);
            let result = await this.vendaUseCase.updateBaixa(id);
            return this.sucesso<any>(res, result);

        } catch (err) {

            return this.erro(res, err.toString());

        }
    }
}