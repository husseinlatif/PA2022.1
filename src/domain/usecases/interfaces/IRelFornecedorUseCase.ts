import { IRelFornecedor } from "../../models/interfaces/IRelFornecedor";

export interface IRelFornecedorUseCase {
    getRelByFornecedorNoDia(fornecedorId: Number) : Promise<IRelFornecedor>;
    addRel(relatorio: IRelFornecedor) : void;
    //deleteRelsByDay(wantedDate: Date) : Promise <IRel_Fornecedor[]>;
}