import { BaseController } from "../../BaseController";
import { Request, Response } from 'express';
import { IRelFornecedorUseCase } from "../../../domain/usecases/interfaces/IRelFornecedorUseCase";

export class GetRelByFornecedorNoDiaController extends BaseController {
    private relFornecedorUseCase: IRelFornecedorUseCase;

    constructor(relFornecedorUseCase: IRelFornecedorUseCase) {
        super();
        this.relFornecedorUseCase = relFornecedorUseCase;
    }

    protected async executeImpl(req:Request, res:Response) : Promise<void | any> {
        try {
            let fornecedorName = req.params.fornecedorName;
            let dataDesejada = new Date(req.params.date);
            let result = await this.relFornecedorUseCase.getRelByFornecedorNoDia(fornecedorName,dataDesejada);
            return this.sucesso<any>(res,result);
        } catch (err) {
            return this.erro(res, err.toString());
        }
    }
}