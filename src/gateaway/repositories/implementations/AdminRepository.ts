import { Admin } from "../../../domain/models/Admin";
import { IAdminRepository } from "../interfaces/IAdminRepository";
import { BaseRepository } from "./BaseRepository";

class AdminRepository extends BaseRepository implements IAdminRepository  {

    constructor() {
        super(Admin);
    }

}

export { AdminRepository };