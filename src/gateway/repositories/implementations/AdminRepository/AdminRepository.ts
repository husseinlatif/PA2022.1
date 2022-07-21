import { Admin } from "../../../../domain/models/Admin";
import { IAdmin } from "../../../../domain/models/interfaces/IAdmin";
import { IAdminRepository } from "../../interfaces/IAdminRepository";
import { BaseRepository } from "../BaseRepository/BaseRepository";

class AdminRepository extends BaseRepository implements IAdminRepository  {

    constructor() {
        super(Admin);
    }

    async findByName(name: String): Promise<IAdmin> {
        try {
            let admin = await Admin.findOne({name:name}).exec().then(res => res);
            return admin;
        } catch(err) {
            console.log(err);
            return null;
        }
    }

}

export { AdminRepository };