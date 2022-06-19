import { IAdmin } from "../../../domain/interfaces/IAdmin";
import { Admin } from "../../../domain/models/Admin";
import { IAdminRepository } from "../interfaces/IAdminRepository";

class AdminRepository implements IAdminRepository {

    async getAdmin(id: Number): Promise<IAdmin> {
        try {
            let admin = await Admin.findById(id).exec().then(res => res);
            return admin;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    addAdmin(name: String, password: String): void {
        let admin = new Admin({name, password});
        admin.save((err) => {if(err) console.log(err)});
    }

}

export { AdminRepository };