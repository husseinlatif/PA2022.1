import { GetRelByFornecedorNoDiaController } from "./getRelByFornecedorNoDiaController";
import { RelFornecedorUseCase } from "../../../domain/usecases/implementations/RelFornecedorUseCase";
import { RelFornecedorRepository } from "../../../gateway/repositories/implementations/RelFornecedor/RelFornecedorRepository";

const relFornecedorRepository = new RelFornecedorRepository();
const relFornecedorUseCase = new RelFornecedorUseCase(relFornecedorRepository);
const getRelByFornecedorNoDiaController = new GetRelByFornecedorNoDiaController(relFornecedorUseCase);

export { getRelByFornecedorNoDiaController }