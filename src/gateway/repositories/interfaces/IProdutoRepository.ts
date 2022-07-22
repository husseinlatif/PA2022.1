import { IBaseRepository } from "./IBaseRepository";
import { IProduto } from '../../../domain/models/interfaces/IProduto';

interface IProdutoRepository extends IBaseRepository {
    //possíveis métodos diferentes
    getByName(name:String) : Promise<IProduto>; 
}

export { IProdutoRepository };