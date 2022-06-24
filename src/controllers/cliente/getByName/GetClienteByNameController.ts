import { Request, Response } from 'express';
import { IClienteUseCase } from "../../../domain/usecases/interfaces/IClienteUseCase";
import { BaseController } from "../../BaseController";

export class GetClienteByNameController extends BaseController {

    private clienteUseCase: IClienteUseCase;

    constructor(clienteUseCase: IClienteUseCase) {

        super();
        this.clienteUseCase = clienteUseCase;
        
    }

    protected async executeImpl(req: Request, res: Response): Promise<void | any> {
        try {

            let result = await this.clienteUseCase.getClienteByName(req.params.id);
            return this.sucesso<any>(res, result);

        } catch (err) {

            return this.erro(res, err.toString());

        }
    }
}