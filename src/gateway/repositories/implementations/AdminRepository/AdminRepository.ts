import { Admin } from "../../../../domain/models/Admin";
import { IAdmin } from "../../../../domain/models/interfaces/IAdmin";
import { IAdminRepository } from "../../interfaces/IAdminRepository";
import { UsuarioRepository } from "../UsuarioRepository/UsuarioRepository";

class AdminRepository extends UsuarioRepository implements IAdminRepository  {

    constructor() {
        super(Admin);
    }

}

export { AdminRepository };