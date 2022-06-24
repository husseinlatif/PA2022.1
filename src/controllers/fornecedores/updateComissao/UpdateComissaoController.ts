import { IFornecedorUseCase } from "../../../domain/usecases/interfaces/IFornecedorUseCase";
import { Request, Response } from 'express';
import { BaseController } from "../../BaseController";

export class UpdateComissaoController extends BaseController{

    private fornecedorUseCase : IFornecedorUseCase;

    constructor(fornecedorUseCase: IFornecedorUseCase) {
        super();
        this.fornecedorUseCase = fornecedorUseCase;
    } 

    protected async executeImpl(req:Request, res:Response) {
        try {
            let fornecedorId = req.body.fornecedorId;
            let percent = req.body.percentil;
            let result = await this.fornecedorUseCase.updateComissao(fornecedorId, percent);
            return this.sucesso<any>(res,result);
        } catch (err) {
            return this.erro(res, err.toString());
        }
    }
}