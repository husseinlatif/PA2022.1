import { IRelFornecedor } from "../../../domain/interfaces/IRelFornecedor";

export interface IRelFornecedorService {
    getRelByFornecedorNoDia(fornecedorId: Number, dia: Date) : Promise<IRelFornecedor>;
    addRel(object: IRelFornecedor) : void;
    //deleteRelsByDay(wantedDate: Date) : Promise <IRel_Fornecedor[]>;
}