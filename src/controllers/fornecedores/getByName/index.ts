import { GetByNameController } from "./getByNameController";
import { FornecedorUseCase } from "../../../domain/usecases/implementations/FornecedorUseCase";
import { FornecedorRepository } from "../../../gateway/repositories/implementations/FornecedorRepository";

const fornecedorRepository = new FornecedorRepository();
const fornecedorUseCase = new FornecedorUseCase(fornecedorRepository);
const getByNameController = new GetByNameController(fornecedorUseCase);

export { getByNameController }