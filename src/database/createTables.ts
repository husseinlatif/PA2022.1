import { Venda } from "../domain/models/Venda";
import { RelFornecedor } from "../domain/models/RelFornecedor";
import { Produto } from "../domain/models/Produto";
import { Fornecedor } from "../domain/models/Fornecedor";
import { Cliente } from "../domain/models/Cliente";
import { Admin } from "../domain/models/Admin";

const createTables = () => {
    Admin.createCollection();
    Venda.createCollection();
    Produto.createCollection();
    Cliente.createCollection();
    Fornecedor.createCollection();
    RelFornecedor.createCollection();
}

export { createTables };