import { IFornecedor } from "../../../domain/interfaces/IFornecedor";
import { Fornecedor } from "../../../domain/models/Fornecedor";
import { IFornecedorRepository } from "../interfaces/IFornecedorRepository";

class FornecedorRepository implements IFornecedorRepository {

    async getAllFornecedores(): Promise<IFornecedor[]> {
        try {
            let fornecedores = await Fornecedor.find({}).exec().then(res => res);
            return fornecedores;
        } catch (err) {
            console.log(err);
            return null
        }
    }


    async getFornecedorByName(name: String): Promise<IFornecedor> {        
        try {
            let fornecedor = await Fornecedor.findOne({name}).exec().then(res => res);
            return fornecedor;
        } catch (err) {
            console.log(err);
            return null
        }
    }

    addFornecedor(name: String): void {
        let fornecedor = new Fornecedor({name});
        fornecedor.save((err) => {if(err) console.log(err)});
    }

    async updateComissao(fornecedorId: Number, percentil: Number): Promise<IFornecedor> {
        let options = { returnDocuments:'after' };        
        try {
            let fornecedorAtt = await Fornecedor.findOneAndUpdate({_id: fornecedorId}, { valorPago:percentil}, options).exec().then(res => res);
            return fornecedorAtt;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    async removeFornecedor(id:Number) : Promise<Number> {
        try {
            let deletedCount = await Fornecedor.deleteOne({_id:id}).then(res => res.deletedCount);
            return deletedCount;
        } catch(err) {
            console.log(err);
            return null
        }
    }
}