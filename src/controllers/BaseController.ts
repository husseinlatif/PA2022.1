import { Request, Response } from 'express';

export abstract class BaseController {

    //Método abstrato, implementado por cada classe derivada:
    protected abstract executeImpl(
        req: Request, res: Response
    ): Promise<void | any>;

    //Método exposto ao router:
    public async execute(
        req: Request, res: Response
    ): Promise<void> {
        try {
            await this.executeImpl(req, res);
        } catch (err) {
            console.log(`[BaseController]: Erro inesperado:`);
            console.log(err);
            this.erro(res, 'Um erro inesperado ocorreu [500].')
        }
    }

    //Responses:
    public static jsonResponse(
        res: Response, code: number, message: string
    ) {
        return res.status(code).json({ message })
    }

    public sucesso<T>(res: Response, dto?: T) {
        if (!!dto) {
            res.type('application/json');
            return res.status(200).json(dto);
        } else {
            return res.sendStatus(200);
        }
    }

    public criado(res: Response) {
        return res.sendStatus(201);
    }

    public nãoEncontrado(res: Response, message?: string) {
        return BaseController.jsonResponse(res, 404, message ? message : 'Não encontrado');
    }

    public erro(res: Response, error: Error | string) {
        console.log(error);
        return res.status(500).json({
            message: error.toString()
        })
    }
}