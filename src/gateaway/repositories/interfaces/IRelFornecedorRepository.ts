import { IRel_Fornecedor } from "../../../domain/interfaces/IRel_Fornecedor";

export interface IRelFornecedorRepository {
    getRelByFornecedorNoDia(fornecedorId: Number, dia: Date) : Promise<IRel_Fornecedor>;
    addRel(object: IRel_Fornecedor) : void;
    //deleteRelsByDay(wantedDate: Date) : Promise <IRel_Fornecedor[]>;
}