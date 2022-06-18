import { IUsuario } from "./IUsuario";

export interface IFornecedor extends IUsuario {
    taxaComissao:Number; //float
}