import { IBaseRepository } from "./IBaseRepository";
import { IProduto } from '../../../domain/models/interfaces/IProduto';

interface IProdutoRepository extends IBaseRepository {
    //possíveis métodos diferentes
    findByAttribute(attributes:Object) : Promise<IProduto | IProduto[]>; 
}

export { IProdutoRepository };