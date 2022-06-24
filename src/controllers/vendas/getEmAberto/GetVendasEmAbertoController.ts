import { Request, Response } from 'express';
import { IVendaUseCase } from "../../../domain/usecases/interfaces/IVendaUseCase";
import { BaseController } from "../../BaseController";

export class GetVendasEmAbertoController extends BaseController {

    private vendaUseCase: IVendaUseCase;

    constructor(vendaUseCase: IVendaUseCase) {

        super();
        this.vendaUseCase = vendaUseCase;
        
    }

    protected async executeImpl(req: Request, res: Response): Promise<void | any> {
        try {

            let result = await this.vendaUseCase.getVendasEmAberto();
            return this.sucesso<any>(res, result);

        } catch (err) {

            return this.erro(res, err.toString());

        }
    }
}