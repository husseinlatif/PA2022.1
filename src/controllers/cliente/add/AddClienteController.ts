import { Request, Response } from 'express';
import { IClienteUseCase } from "../../../domain/usecases/interfaces/IClienteUseCase";
import { BaseController } from "../../BaseController";

export class AddClienteController extends BaseController {

    private clienteUseCase: IClienteUseCase;

    constructor(clienteUseCase: IClienteUseCase) {

        super();
        this.clienteUseCase = clienteUseCase;
        
    }

    protected async executeImpl(req: Request, res: Response): Promise<void | any> {
        try {
            //MUDAR AQUI
            let result = await this.clienteUseCase.addCliente(req.body.ALGO);
            return this.sucesso<any>(res, result);

        } catch (err) {

            return this.erro(res, err.toString());

        }
    }
}