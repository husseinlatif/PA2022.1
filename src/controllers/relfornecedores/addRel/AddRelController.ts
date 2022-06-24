import { Request, Response } from 'express';
import { IRelFornecedorUseCase } from "../../../domain/usecases/interfaces/IRelFornecedorUseCase";
import { BaseController } from "../../BaseController";

export class AddRelController extends BaseController {

    private relFornecedorUseCase : IRelFornecedorUseCase;

    constructor(relFornecedorUseCase: IRelFornecedorUseCase) {
        super();
        this.relFornecedorUseCase = relFornecedorUseCase;
    }

    protected async executeImpl(req:Request, res:Response) {
        let relatorioBody = req.body.data;
        try {
            let result = await this.relFornecedorUseCase.addRel(relatorioBody);
            return this.sucesso<any>(res,result);
        } catch (err) {
            return this.erro(res, err.toString());
        }
    }
} 