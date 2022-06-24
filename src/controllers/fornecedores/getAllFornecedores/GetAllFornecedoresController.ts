import { Request, Response } from "express";
import { IFornecedorUseCase } from "../../../domain/usecases/interfaces/IFornecedorUseCase";
import { BaseController } from "../../BaseController";

export class GetAllFornecedoresController extends BaseController {

    private fornecedorUseCase: IFornecedorUseCase;

    constructor(fornecedorUseCase: IFornecedorUseCase) {
        super();
        this.fornecedorUseCase = fornecedorUseCase;
    }

    protected async executeImpl(req:Request, res:Response) {
        try {
            let result = await this.fornecedorUseCase.getAllFornecedores();
            return this.sucesso<any>(res,result);
        } catch (err) {
            return this.erro(res, err.toString());
        }
    }

}