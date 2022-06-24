import { IRelFornecedor } from "../../models/interfaces/IRelFornecedor";

export interface IRelFornecedorUseCase {
    getRelByFornecedorNoDia(fornecedorId: Number, diaDesejado: Date) : Promise<IRelFornecedor>;
    addRel(relatorio: IRelFornecedor) : void;
    //deleteRelsByDay(wantedDate: Date) : Promise <IRel_Fornecedor[]>;
}