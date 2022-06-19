import { IRel_Fornecedor } from "../../../domain/interfaces/IRel_Fornecedor";
import { Rel_Fornecedor } from "../../../domain/models/Rel_Fornecedor";
import { IRelFornecedorRepository } from "../interfaces/IRelFornecedorRepository";
class RelFornecedorRepository implements IRelFornecedorRepository {

    async getRelByFornecedorNoDia(fornecedorId:Number, dia: Date): Promise<IRel_Fornecedor> {
        try{
            let relatorioDoFornecedorNoDia = await Rel_Fornecedor.findOne({_id:fornecedorId, createdAt:dia}).exec().then(res => res);
            return relatorioDoFornecedorNoDia;  
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    addRel(dadosFornecedor: IRel_Fornecedor): void {
        let fornecedorObj = new Rel_Fornecedor({...dadosFornecedor});
        fornecedorObj.save((err) => {if(err) console.log(err)});
    }


}

export { RelFornecedorRepository }