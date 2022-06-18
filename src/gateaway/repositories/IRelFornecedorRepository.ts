import { IRel_Fornecedor } from "../../domain/interfaces/IRel_Fornecedor";

export interface IRelFornecedorRepository {
    getRelByDay(wantedDate: Date) : Promise<IRel_Fornecedor>;
    addRel(object: IRel_Fornecedor) : Promise<void>;
    deleteRelByDay(wantedDate: Date) : Promise <IRel_Fornecedor>;
}