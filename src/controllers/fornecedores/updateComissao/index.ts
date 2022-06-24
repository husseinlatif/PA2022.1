import { UpdateComissaoController } from "./UpdateComissaoController";
import { FornecedorUseCase } from "../../../domain/usecases/implementations/FornecedorUseCase";
import { FornecedorRepository } from "../../../gateway/repositories/implementations/FornecedorRepository";

const fornecedorRepository = new FornecedorRepository();
const fornecedorUseCase = new FornecedorUseCase(fornecedorRepository);
const updateComisasoController = new UpdateComissaoController(fornecedorUseCase);

export { updateComisasoController };