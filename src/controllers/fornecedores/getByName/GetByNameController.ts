import { IFornecedorUseCase } from "../../../domain/usecases/interfaces/IFornecedorUseCase";
import { Request, Response } from 'express';
import { BaseController } from "../../BaseController";

export class GetByNameController extends BaseController{

    private fornecedorUseCase : IFornecedorUseCase;

    constructor(fornecedorUseCase: IFornecedorUseCase) {
        super();
        this.fornecedorUseCase = fornecedorUseCase;
    } 

    protected async executeImpl(req:Request, res:Response) {
        try {
            let name = req.params.name;
            let result = await this.fornecedorUseCase.getFornecedorByName(name);
            return this.sucesso<any>(res,result);
        } catch (err) {
            return this.erro(res, err.toString());
        }
    }


}