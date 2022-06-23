import { IRelFornecedor } from "../../models/interfaces/IRelFornecedor";

export interface IRelFornecedorUseCase {
    getRelByFornecedorNoDia(fornecedorId: Number, dia: Date) : Promise<IRelFornecedor>;
    addRel(object: IRelFornecedor) : void;
    //deleteRelsByDay(wantedDate: Date) : Promise <IRel_Fornecedor[]>;
}